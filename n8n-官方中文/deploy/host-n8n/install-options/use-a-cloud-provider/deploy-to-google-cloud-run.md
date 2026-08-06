---
contentType: tutorial
nodeTitle: 部署到 Google Cloud Run（Deploy to Google Cloud Run）
originalFilePath: hosting/installation/server-setups/google-cloud-run.md
originalUrl: 'https://docs.n8n.io/hosting/installation/server-setups/google-cloud-run'
url: >-
  https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-google-cloud-run
layout:
  description:
    visible: false
---

# 在 Google Cloud Run 上部署 n8n

本教程教你在 Google Cloud Run 上自托管 n8n。Cloud Run 是谷歌云的无服务器（serverless）容器运行平台——你只管把容器交上去，它自动帮你扩容、缩容、管理服务器，不用自己维护任何机器。

如果你刚接触 n8n、还不需要生产级部署，可以直接用下面的「**简易模式（easy mode）**」；如果你打算让这套 n8n 长期服务大量用户，请看后面的「**持久模式（durable mode）**」。

你还可以开通 Google Workspace（谷歌工作空间，例如 Gmail 和 Drive）的 OAuth 访问权限，把这些服务当作 n8n 的工作流工具来用。相关设置方法在本文档最后。

如果你更想部署到 Google Kubernetes Engine（GKE，谷歌 Kubernetes 引擎），可以参考[这篇教程](deploy-to-google-kubernetes.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/YLv7Cqg70tj1alDgktSX/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

{% hint style="info" %}
**国内部署提示**：Google Cloud 在国内需要网络条件才能访问控制台和执行命令，建议在海外区域（教程默认 `us-west1`，也可选择东京 `asia-northeast1` 等亚洲区域）部署以降低延迟。拉取 `n8nio/n8n` 镜像时如遇网络问题，可先配置代理或使用 `gcloud` 的镜像配置。命令本身保持不变。
{% endhint %}

## 开始之前：准备一个 Google Cloud 项目（Before you begin: get a Google Cloud project）

如果你还没有创建过 Google Cloud 项目，[请先创建](https://developers.google.com/workspace/guides/create-project)（并确保项目开启了结算（billing）功能；即使你的 Cloud Run 服务完全免费运行，也必须先激活结算才能部署）。如果已经有项目，直接进入你想部署 n8n 的那个项目即可。

## 简易模式（Easy mode）

这是在 Cloud Run 上部署 n8n 最快的方式。这种模式下，n8n 的数据保存在内存（in-memory）里，因此**只适合演示用途**。**只要这个 Cloud Run 服务缩容到 0 或被重新部署，n8n 里的数据就会全部丢失。** 如果你需要生产级部署，请看下面的持久模式。

如果你还没有创建 Google Cloud 项目，[请先创建](https://developers.google.com/workspace/guides/create-project)（并确保项目开启了结算功能；即使你的 Cloud Run 服务完全免费运行，也必须先激活结算才能部署）。否则，直接进入你想部署 n8n 的项目。

打开 Cloud Shell 终端（在 Google Cloud 控制台上：可以按顺序键入 "G" 然后 "S"，或者点击右上角的终端图标）。

会话打开后，你可能需要先运行这条命令登录（并按提示完成后续步骤）：

```sh
gcloud auth login
```

你也可以显式地启用 Cloud Run API（即使不手动启用，部署时它也会询问你是否要启用）：

```sh
gcloud services enable run.googleapis.com
```

{% hint style="warning" %}
**必须设置：自定义健康检查端点（Required: Custom health check endpoint）**

Google Cloud Run 把 `/healthz` 路径保留给它的健康检查使用。而 n8n 默认恰好使用这个路径，两者会冲突，导致工作流画布出现连接问题。解决办法是：把 `N8N_ENDPOINT_HEALTH` 环境变量设置为一个自定义路径（下面的部署命令里已经包含了）。
{% endhint %}

部署 n8n：

```sh
gcloud run deploy n8n \
    --image=n8nio/n8n \
    --region=us-west1 \
    --allow-unauthenticated \
    --port=5678 \
    --no-cpu-throttling \
    --memory=2Gi \
    --set-env-vars="N8N_ENDPOINT_HEALTH=health"
```

（你可以把 "us-west1" 换成任意你喜欢的区域）

部署完成后，打开一个新标签页访问 Service URL（服务地址）。n8n 可能还在启动中，你会看到 "n8n is starting up. Please wait"（n8n 正在启动，请稍候）的提示，但很快就能看到 n8n 的登录界面。

可选：如果你希望这个 n8n 服务尽量长时间运行、减少数据丢失，可以把手动缩放到 1，防止它自动缩容到 0：

```sh
gcloud run deploy n8n \
    --image=n8nio/n8n \
    --region=us-west1 \
    --allow-unauthenticated \
    --port=5678 \
    --no-cpu-throttling \
    --memory=2Gi \
    --scaling=1 \
    --set-env-vars="N8N_ENDPOINT_HEALTH=health"
```

但这并不能完全避免数据丢失，例如每次 Cloud Run 服务被重新部署或更新时数据仍会清空。如果你想要真正持久的数据，请按照下面的说明为 n8n 挂接数据库。

## 持久模式（Durable mode）

下面的说明适用于在 Cloud Run 上更持久、生产级的 n8n 部署。这套方案包含用于持久化的数据库，以及用于存放敏感数据的 Secret Manager（密钥管理服务）。

如果你想用 Terraform（基础设施即代码工具）部署这套方案，可以参考这个[示例仓库](https://github.com/ryanpei/n8n-hosting/tree/main/google-cloud-run)，它部署的配置与下面的步骤相同（但不包含 Google Workspace 工具的 OAuth 设置）。

## 启用 API 并设置环境变量（Enable APIs and set env vars）

打开 Cloud Shell 终端（在 Google Cloud 控制台上：按顺序键入 "G" 然后 "S"，或者点击右上角的终端图标），在终端会话里运行这些命令：

```sh
## You may need to login first <a href="#you-may-need-to-login-first" id="you-may-need-to-login-first"></a>
gcloud auth login

gcloud services enable run.googleapis.com
gcloud services enable sqladmin.googleapis.com
gcloud services enable secretmanager.googleapis.com
```

你还需要设置一些环境变量，供后续步骤使用：

```sh
export PROJECT_ID=your-project
export REGION=region-where-you-want-this-deployed
```

{% hint style="info" %}
**小白提示**：`export` 的作用是「在当前终端会话里定义一个变量」。把 `your-project` 换成你的项目 ID，把 `region-where-you-want-this-deployed` 换成你想部署的区域（例如 `us-west1`）。注意：关掉终端后变量会失效，重新打开终端要再执行一次。
{% endhint %}

## 创建你的 Postgres 数据库（Setup your Postgres database）

运行这条命令创建 Postgres 数据库实例（需要几分钟才能完成；记得把 root-password 字段换成你自己想要的密码）：

```sh
gcloud sql instances create n8n-db \
    --database-version=POSTGRES_17 \
    --tier=db-f1-micro \
    --region=$REGION \
    --root-password="change-this-password" \
    --storage-size=10GB \
    --availability-type=ZONAL \
    --no-backup \
    --storage-type=HDD
```

创建完成后，添加 n8n 将要使用的数据库：

```sh
gcloud sql databases create n8n --instance=n8n-db
```

为 n8n 创建数据库用户（当然，要把密码换成你自己的）：

```sh
gcloud sql users create n8n-user \
    --instance=n8n-db \
    --password="change-this-password"
```

你可以把这个 n8n-user 的密码保存到一个文件里，供下一步存入 Secret Manager 时使用。记得之后要删除这个文件。

{% hint style="warning" %}
**密码要自己改**：上面命令里的 `change-this-password` 只是占位符，千万别原样使用，否则任何人都可能猜到你的数据库密码。
{% endhint %}

## 把敏感数据存进 Secret Manager（Store sensitive data in Secret Manager）

虽然不是必须的，但强烈建议把敏感数据存放在 Secret Manager 里。

为数据库密码创建一个密钥（把 `/your/password/file` 替换成你上面创建的、保存 n8n-user 密码的文件路径）：

```sh
gcloud secrets create n8n-db-password \
    --data-file=/your/password/file \
    --replication-policy="automatic"
```

创建一个加密密钥（你也可以用自己的，这个例子用命令随机生成一个）：

```sh
openssl rand -base64 -out my-encryption-key 42
```

为这个加密密钥创建一个密钥条目（如果你用自己的密钥，把 "my-encryption-key" 替换成你的文件名）：

```sh
gcloud secrets create n8n-encryption-key \
    --data-file=my-encryption-key \
    --replication-policy="automatic"
```

现在你可以删除 `my-encryption-key` 和刚才的数据库密码文件了。这些值已经安全地存储在 Secret Manager 中。

## 为 Cloud Run 创建服务账号（Create a service account for Cloud Run）

出于安全考虑，你希望这个 Cloud Run 服务只能访问它需要的那部分资源，而不是拥有全部权限。下面的命令创建服务账号，并给它授予访问密钥和数据库所需的权限：

```sh
gcloud iam service-accounts create n8n-service-account \
    --display-name="n8n Service Account"

gcloud secrets add-iam-policy-binding n8n-db-password \
    --member="serviceAccount:n8n-service-account@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor"

gcloud secrets add-iam-policy-binding n8n-encryption-key \
    --member="serviceAccount:n8n-service-account@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:n8n-service-account@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/cloudsql.client"
```

{% hint style="info" %}
**小白提示**：服务账号（service account）相当于「给程序用的身份」。Cloud Run 用这个身份去访问 Secret Manager 里的密码/密钥，以及连接 Cloud SQL 数据库，比把所有权限都发给服务本身安全得多。
{% endhint %}

## 部署 Cloud Run 服务（Deploy the Cloud Run service）

现在可以部署你的 n8n 服务了：

```sh
gcloud run deploy n8n \
    --image=n8nio/n8n:latest \
    --command="/bin/sh" \
    --args="-c,sleep 5;n8n start" \
    --region=$REGION \
    --allow-unauthenticated \
    --port=5678 \
    --memory=2Gi \
    --no-cpu-throttling \
    --set-env-vars="N8N_PORT=5678,N8N_PROTOCOL=https,N8N_ENDPOINT_HEALTH=health,DB_TYPE=postgresdb,DB_POSTGRESDB_DATABASE=n8n,DB_POSTGRESDB_USER=n8n-user,DB_POSTGRESDB_HOST=/cloudsql/$PROJECT_ID:$REGION:n8n-db,DB_POSTGRESDB_PORT=5432,DB_POSTGRESDB_SCHEMA=public,GENERIC_TIMEZONE=UTC,QUEUE_HEALTH_CHECK_ACTIVE=true" \
    --set-secrets="DB_POSTGRESDB_PASSWORD=n8n-db-password:latest,N8N_ENCRYPTION_KEY=n8n-encryption-key:latest" \
    --add-cloudsql-instances=$PROJECT_ID:$REGION:n8n-db \
    --service-account=n8n-service-account@$PROJECT_ID.iam.gserviceaccount.com
```

部署完成后，打开一个新标签页访问 Service URL。你应该能看到 n8n 的登录界面。

{% hint style="info" %}
**小白提示**：这条命令里的 `DB_POSTGRESDB_HOST=/cloudsql/...` 是 Cloud Run 连接 Cloud SQL 数据库的特殊写法（Unix Socket 方式）；`--set-secrets` 表示数据库密码和加密密钥都从 Secret Manager 里读取，不会明文写在配置里。
{% endhint %}

## 故障排查（Troubleshooting）

如果你看到 "Cannot GET /" 的页面，通常表示 n8n 还在启动中。刷新页面，稍等片刻应该就能加载出来。

## （可选）启用 Google Workspace 服务作为 n8n 工具（(Optional) Enabling Google Workspace services as n8n tools）

如果你想在 n8n 中使用 Google Workspace 服务（Gmail、Calendar、Drive 等）作为工具，建议配置 OAuth 来访问这些服务。

首先确保你想用的那些 API 已启用：

```sh
## Enable whichever APIs you need <a href="#enable-whichever-apis-you-need" id="enable-whichever-apis-you-need"></a>
## Note: If you want Sheets/Docs, it's not enough to just enable Drive; these services each have their own API <a href="#note-if-you-want-sheetsdocs-its-not-enough-to-just-enable-drive-these-services-each-have-their-own-api" id="note-if-you-want-sheetsdocs-its-not-enough-to-just-enable-drive-these-services-each-have-their-own-api"></a>
gcloud services enable gmail.googleapis.com
gcloud services enable drive.googleapis.com
gcloud services enable sheets.googleapis.com
gcloud services enable docs.googleapis.com
gcloud services enable calendar-json.googleapis.com
```

把必要的 OAuth 回调 URL 作为环境变量，重新部署 Cloud Run 上的 n8n：

```sh
export SERVICE_URL="your-n8n-service-URL"
## e.g. https://n8n-12345678.us-west1.run.app <a href="#eg-httpsn8n-12345678us-west1runapp" id="eg-httpsn8n-12345678us-west1runapp"></a>

gcloud run services update n8n \
    --region=$REGION \
    --update-env-vars="N8N_HOST=$(echo $SERVICE_URL | sed 's/https:\/\///'),WEBHOOK_URL=$SERVICE_URL,N8N_EDITOR_BASE_URL=$SERVICE_URL"
```

最后，你必须为这些服务配置 OAuth。访问 `https://console.cloud.google.com/auth` 并按照以下步骤操作：

1. 如果页面上出现 "Get Started" 按钮（说明这个云项目还没有配置过 OAuth），点击它。
2. 在 "App Information（应用信息）" 里，填写你喜欢的 "App Name（应用名称）" 和 "User Support Email（用户支持邮箱）"。
3. 在 "Audience（受众）" 里：如果你只想让同一个 Google Workspace 内的用户访问，选择 "Internal（内部）"；否则选择 "External（外部）"。
4. 填写 "Contact Information（联系信息）"。
5. 如果选择了 "External"，点击 "Audience" 并添加你需要授权的测试用户。
6. 点击 "Clients（客户端）" > "Create client（创建客户端）"，"Application type（应用类型）" 选择 "Web application（Web 应用）"，在 "Authorized JavaScript origins（授权的 JavaScript 来源）" 填入你的 n8n 服务 URL，在 "Authorized redirect URIs（授权的重定向 URI）" 填入 "<YOUR-N8N-URL>/rest/oauth2-credential/callback"，其中 YOUR-N8N-URL 就是你的 n8n 服务 URL（例如 `https://n8n-12345678.us-west1.run.app/rest/oauth2-credential/callback`）。记得下载创建好的客户端 JSON 文件，因为它包含客户端密钥（client secret），之后在控制台里就再也看不到了。
7. 点击 "Data Access（数据访问）"，添加你希望 n8n 访问的范围（scopes）。例如要访问 Google Sheets，你需要 `https://googleapis.com/auth/drive.file` 和 `https://googleapis.com/auth/spreadsheets` 这两个范围。
8. 现在你应该能使用这些工作空间服务了。你可以这样测试：登录 n8n，为对应服务添加一个 Tool（工具），并用第 6 步下载的 OAuth 客户端 JSON 文件里的信息添加它的凭据。

{% hint style="info" %}
**小白提示**：OAuth 通俗地说就是「让 n8n 在你授权的前提下，代替你去访问你的 Google 账号数据」。第 6 步填写的「重定向 URI」必须和 n8n 里回调地址完全一致（注意大小写和结尾斜杠），否则授权会失败。
{% endhint %}
