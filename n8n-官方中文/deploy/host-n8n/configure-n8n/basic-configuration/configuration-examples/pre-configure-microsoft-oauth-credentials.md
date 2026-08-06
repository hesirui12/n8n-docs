---
title: 预配置 Microsoft OAuth 凭据
description: >-
  使用凭据覆盖（credential overwrites）为 n8n 预配置 Microsoft OAuth2 凭据，让用户无需自己的应用注册即可连接。
contentType: howto
nodeTitle: 预配置 Microsoft OAuth 凭据
originalFilePath: >-
  hosting/configuration/configuration-examples/microsoft-oauth-credential-overwrites.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/configuration-examples/microsoft-oauth-credential-overwrites
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/pre-configure-microsoft-oauth-credentials
layout:
  description:
    visible: false
---

# 预配置 Microsoft OAuth 凭据 / Pre-configure Microsoft OAuth credentials

在[完成具有委派访问权限（delegated access）的 Microsoft Entra ID 应用注册](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/credentials/microsoftentra#delegated-access-for-organisation-wide-microsoft-integrations)之后，你可以使用[凭据覆盖（credential overwrites）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/credential-overwrites)在 n8n 启动时注入 Client ID（客户端 ID）和 Client Secret（客户端密钥）。这意味着你组织里的用户无需自己完成 OAuth 应用注册，就能直接连接 Microsoft 服务。

{% hint style="info" %}
**大白话**：先解释几个名词。OAuth 是「让第三方应用安全访问你账号数据」的标准授权方式，微软全家桶（Outlook、OneDrive、Teams 等）都用它。正常情况下，每个用户想连 Outlook 都要自己去 Azure 后台注册一个应用、拿到一对「钥匙」（Client ID 和 Client Secret），非常麻烦。管理员可以只注册一次应用，然后通过「凭据覆盖」功能把这对钥匙「预装」进 n8n——之后所有用户连接微软服务时，直接点按钮就授权，不用各自折腾注册。这就是本页要教的事。
{% endhint %}

n8n 支持三个用于凭据覆盖的环境变量。本指南使用 `CREDENTIALS_OVERWRITE_DATA_FILE`。完整的变量参考请参阅[凭据环境变量](../use-environment-variables/credentials.md)。

## 创建凭据文件 / Create the credentials file

在运行 n8n 的主机上，在与你的 `docker-compose.yaml` 相同的目录下，创建一个名为 `credentials-overwrite.json` 的文件。

该文件包含一个 JSON 对象，以 n8n 的凭据类型名称（credential type name）作为键（key）。例如，要预配置 Microsoft Outlook：

```json
{
  "microsoftOutlookOAuth2Api": {
    "clientId": "YOUR_CLIENT_ID",
    "clientSecret": "YOUR_CLIENT_SECRET"
  }
}
```

要一次性预配置多个 Microsoft 服务，请把每种凭据类型作为单独的键添加进去：

```json
{
  "microsoftOutlookOAuth2Api": {
    "clientId": "YOUR_CLIENT_ID",
    "clientSecret": "YOUR_CLIENT_SECRET"
  },
  "microsoftOneDriveOAuth2Api": {
    "clientId": "YOUR_CLIENT_ID",
    "clientSecret": "YOUR_CLIENT_SECRET"
  }
}
```

{% hint style="info" %}
**大白话**：这个 JSON 文件的内容格式很好懂：`microsoftOutlookOAuth2Api` 是「Outlook 这个服务的凭据类型名字」，里面填两个字段——`clientId`（应用 ID）和 `clientSecret`（应用密钥），把占位符 `YOUR_CLIENT_ID` / `YOUR_CLIENT_SECRET` 换成你在 Azure 注册应用时拿到的真实值。要加第二个服务（比如 OneDrive），就照着再加一组，用英文逗号隔开。**注意**：文件里只能填你自己注册的应用的信息，绝不能把别人的密钥填进来；密钥也要妥善保管，别提交到代码仓库。
{% endhint %}

{% hint style="info" %}
**压缩后的 JSON（Minified JSON）**

n8n 要求 JSON 必须被压缩（minified，即不含空格或换行）。上面的示例是为了方便阅读而格式化的。请确保你的实际文件不包含任何多余的空白字符：

```json
{"microsoftOutlookOAuth2Api":{"clientId":"YOUR_CLIENT_ID","clientSecret":"YOUR_CLIENT_SECRET"}}
```
{% endhint %}

{% hint style="info" %}
**大白话**：这是本页最容易踩的坑！n8n 只认「压缩格式」的 JSON——整个文件必须是一行，没有任何空格和换行。你直接复制上面的压缩示例，把占位符替换成真实值即可。如果文件里有换行或缩进（哪怕一个多余空格），n8n 解析就会失败，凭据覆盖不生效。怎么检查？用文本编辑器打开，确认全部内容只有一行。
{% endhint %}

每种 Microsoft 服务的凭据类型名称，请参阅[各集成的必需作用域（Required scopes by integration）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/credentials/microsoftentra#required-scopes-by-integration)。

## Docker Compose / Docker Compose

把凭据文件作为**只读卷（read-only volume）**挂载，并在你的 `compose.yaml` 中设置环境变量：

```yaml
services:
  n8n:
    image: docker.n8n.io/n8nio/n8n:latest
    container_name: n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - GENERIC_TIMEZONE=America/New_York
      - TZ=America/New_York
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_LOG_LEVEL=debug
      - N8N_LOG_OUTPUT=file,console
      - N8N_LOG_FILE_COUNT_MAX=5
      - CREDENTIALS_OVERWRITE_DATA_FILE=/run/secrets/credentials-overwrite.json
    volumes:
      - n8n_data:/home/node/.n8n
      - ./credentials-overwrite.json:/run/secrets/credentials-overwrite.json:ro
    networks:
      - default
volumes:
  n8n_data:
    name: ${N8N_VOLUME:-n8n_data}
    external: true
```

{% hint style="info" %}
**大白话**：这段是完整的 docker-compose 配置。核心就是两处：①环境变量里 `CREDENTIALS_OVERWRITE_DATA_FILE=/run/secrets/credentials-overwrite.json`——告诉 n8n「凭据文件在这个路径」；②卷（volumes）里 `./credentials-overwrite.json:/run/secrets/credentials-overwrite.json:ro`——把本机当前目录下的凭据文件「挂载」到容器里的那个路径，`ro`（read-only）表示只读，防止容器里篡改文件。路径两边的名字必须一致（都是 `credentials-overwrite.json`），否则找不到文件。其余的行（时区、日志级别等）是示例配置，可以按需增删。
{% endhint %}

通过重启容器来应用更改：

```bash
docker compose up -d
```

{% hint style="info" %}
**大白话**：在 `docker-compose.yml` 所在目录执行这条命令，它会按最新配置重新创建容器，让新设置生效。如果之前容器已经在跑，`up -d` 会自动检测配置变化并重建。
{% endhint %}

## 验证覆盖是否生效 / Verify the overwrite is applied

n8n 启动后，让一个用户为其中一个预配置的服务（例如 Microsoft Outlook）创建新的凭据。他们应该能在凭据选择中看到 **Managed OAuth2 (recommended)**（托管式 OAuth2，推荐）选项。

![Microsoft Entra credentials screen](../../../../.gitbook/assets/microsoft-entra-oauth.png)

用户可以点击 **Connect to Microsoft Outlook**（连接到 Microsoft Outlook），无需任何认证。此时应出现 **Account connected**（账号已连接）消息。

{% hint style="info" %}
**大白话**：怎么确认配置成功？让任意一个用户去新建 Outlook 凭据，如果界面上出现了「Managed OAuth2 (recommended)」这个选项，就说明预配置成功——用户点它、再点「连接」，马上就能连上，全程不需要自己输 Client ID / Secret，也不会跳转去注册应用。
{% endhint %}

如果 **Managed OAuth 2** 选项没有出现，说明环境变量没有被正确应用。请检查卷挂载中的文件路径是否与 `CREDENTIALS_OVERWRITE_DATA_FILE` 的值一致。

{% hint style="info" %}
**大白话**：排错要点就两个：①文件路径对不对——卷挂载右边的容器内路径，要和环境变量里写的路径完全一致（本例都是 `/run/secrets/credentials-overwrite.json`）；②文件内容是不是压缩格式的一行 JSON。两个都对了还是不行，再看 n8n 日志（示例配置里已经开启了 `N8N_LOG_LEVEL=debug`，方便查错）。
{% endhint %}

## Kubernetes / Kubernetes

对于 Kubernetes 部署，请把 Docker 卷挂载替换为 Kubernetes 原生的方法。具体做法因云服务商而异。请选择与你环境匹配的小节。

{% hint style="info" %}
**大白话**：如果你不是用 Docker 单机部署，而是用 Kubernetes（简称 K8s，一种容器编排平台）部署 n8n，那「挂载文件」的方式要换成 K8s 的「密钥（Secret）」机制。K8s 云服务商不同（AWS、Azure、谷歌云），推荐做法也不同，下面分成三节分别介绍：第一节是通用的普通 Secret（三大云平台都能用），第二、三节是各云平台自己的「机密管理服务」高级做法。小白建议直接看第一节。
{% endhint %}

### 普通 Kubernetes Secret（EKS / AKS / GKE）/ Plain Kubernetes Secret

这个方法在三大托管 Kubernetes 服务商上都可用，无需额外依赖。

**1. 创建 Secret：**

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: n8n-credentials-overwrite
  namespace: your-namespace
type: Opaque
stringData:
  credentials-overwrite.json: '{"microsoftOutlookOAuth2Api":{"clientId":"YOUR_CLIENT_ID","clientSecret":"YOUR_CLIENT_SECRET"}}'
```

**2. 在 Deployment 中挂载 Secret：**

```yaml
spec:
  containers:
    - name: n8n
      image: docker.n8n.io/n8nio/n8n:latest
      env:
        - name: CREDENTIALS_OVERWRITE_DATA_FILE
          value: /run/secrets/credentials-overwrite.json
        # ...your other env vars
      volumeMounts:
        - name: credentials-overwrite
          mountPath: /run/secrets/credentials-overwrite.json
          subPath: credentials-overwrite.json
          readOnly: true
  volumes:
    - name: credentials-overwrite
      secret:
        secretName: n8n-credentials-overwrite
```

`subPath` 字段很重要。没有它，Kubernetes 会替换整个 `/run/secrets/` 目录，而不是只挂载这一个文件。

{% hint style="info" %}
**大白话**：K8s 里存放敏感信息的标准方式是 Secret（密钥对象）。第一步把压缩格式的 JSON 塞进 Secret 的 `stringData` 里；第二步在 n8n 的 Deployment 配置里把 Secret 挂载成文件，并设置环境变量指向它。`subPath` 的作用是「只把 Secret 里的那一个键挂成这一个文件」——如果去掉它，K8s 会把这个 Secret 的所有内容挂成 `/run/secrets/` 目录下的一堆文件，反而盖住了目录里的其他东西，所以要保留。
{% endhint %}

{% hint style="info" %}
**备选方案：内联环境变量**

如果完全不想用卷挂载，可以直接把 Secret 引用为环境变量：

```yaml
env:
  - name: CREDENTIALS_OVERWRITE_DATA
    valueFrom:
      secretKeyRef:
        name: n8n-credentials-overwrite
        key: credentials-overwrite.json
```


```yaml
stringData:
  credentials-json: '{"microsoftOutlookOAuth2Api":{"clientId":"...","clientSecret":"..."}}'
```

对于单服务配置来说这样更简洁，但要注意：某些 Kubernetes 环境会限制环境变量的大小（例如每个变量限 128KB）。如果你的凭据覆盖很多，基于文件的方式更安全。
{% endhint %}

{% hint style="info" %}
**大白话**：除了「把文件挂进去」，还可以用 `CREDENTIALS_OVERWRITE_DATA`（注意：这个变量名末尾是 DATA，不是 DATA_FILE）直接把 JSON 内容通过环境变量传给 n8n。适合服务少（一个）的情况。缺点是环境变量有长度上限，覆盖的服务太多就可能超限；文件方式没有这个顾虑，所以官方更推荐文件方式。
{% endhint %}

### AWS Secrets Manager（EKS）/ AWS Secrets Manager

这种方法使用 [AWS Secrets Store CSI Driver](https://docs.aws.amazon.com/secretsmanager/latest/userguide/integrating_csi_driver.html) 把 AWS Secrets Manager 里的密钥直接挂载到 Pod 中。它增加了轮换（rotation）支持、CloudTrail 审计日志和集中式密钥管理。

**前置条件：**

- 集群上已安装 Secrets Store CSI Driver 和 ASCP（AWS Secrets and Configuration Provider）
- 为集群配置了 IAM OIDC provider（IRSA 必需）
- 一个具有 `secretsmanager:GetSecretValue` 和 `secretsmanager:DescribeSecret` 权限的 IAM 角色

{% hint style="info" %}
**大白话**：这一节适合「已经在用 AWS 的云原生用户」。思路是：把微软的密钥存到 AWS 官方的「密码保险柜」Secrets Manager 里，然后让 K8s 集群里的 n8n 自动从保险柜取出来用。好处是密钥集中管理、自动轮换、有审计日志。前置条件比较技术（CSI 驱动、IAM 角色），如果你看不懂，说明用不到这节，用上面「普通 Secret」的方法即可。下面的命令都是 AWS 命令行工具 `aws` 的用法，需要提前登录配置好 AWS 账号。
{% endhint %}

**1. 在 AWS Secrets Manager 中创建密钥：**

```bash
aws secretsmanager create-secret \
  --name n8n/credentials-overwrite \
  --description "n8n credential overwrites for Microsoft OAuth" \
  --secret-string '{"microsoftOutlookOAuth2Api":{"clientId":"YOUR_CLIENT_ID","clientSecret":"YOUR_CLIENT_SECRET"}}'
```

**2. 创建 IAM 策略：**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "secretsmanager:GetSecretValue",
        "secretsmanager:DescribeSecret"
      ],
      "Resource": "arn:aws:secretsmanager:REGION:ACCOUNT_ID:secret:n8n/credentials-overwrite-*"
    }
  ]
}
```

```bash
aws iam create-policy \
  --policy-name n8n-credentials-overwrite-read \
  --policy-document file://policy.json
```

**3. 使用 IRSA 创建服务账号（service account）：**

```bash
eksctl create iamserviceaccount \
  --name n8n-sa \
  --namespace your-namespace \
  --cluster your-cluster \
  --attach-policy-arn arn:aws:iam::ACCOUNT_ID:policy/n8n-credentials-overwrite-read \
  --approve
```

**4. 创建 SecretProviderClass：**

```yaml
apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: n8n-credentials-overwrite
  namespace: your-namespace
spec:
  provider: aws
  parameters:
    objects: |
      - objectName: "n8n/credentials-overwrite"
        objectType: "secretsmanager"
        objectAlias: "credentials-overwrite.json"
```

**5. 更新你的 n8n Deployment：**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: n8n
  namespace: your-namespace
spec:
  template:
    spec:
      serviceAccountName: n8n-sa
      containers:
        - name: n8n
          image: docker.n8n.io/n8nio/n8n:latest
          env:
            - name: CREDENTIALS_OVERWRITE_DATA_FILE
              value: /run/secrets/credentials-overwrite.json
          volumeMounts:
            - name: credentials-overwrite
              mountPath: /run/secrets/credentials-overwrite.json
              subPath: credentials-overwrite.json
              readOnly: true
      volumes:
        - name: credentials-overwrite
          csi:
            driver: secrets-store.csi.k8s.io
            readOnly: true
            volumeAttributes:
              secretProviderClass: n8n-credentials-overwrite
```

**轮换密钥：**

要更新凭据，请更新 Secrets Manager 中的值：

```bash
aws secretsmanager update-secret \
  --secret-id n8n/credentials-overwrite \
  --secret-string '{"microsoftOutlookOAuth2Api":{"clientId":"NEW_CLIENT_ID","clientSecret":"NEW_CLIENT_SECRET"}}'
```

CSI 驱动会按照它的轮询间隔（polling interval，默认两分钟）同步更新后的值。由于 n8n 是在启动时读取凭据文件的，请重启 n8n 的 Pod，让 n8n 读取更新后的文件。

### Azure Key Vault（AKS）/ Azure Key Vault

这种方法使用 [Azure Key Vault 的 Secrets Store CSI Driver Provider](https://learn.microsoft.com/en-us/azure/aks/csi-secrets-store-driver) 把 Azure Key Vault 中的密钥挂载到 Pod 中。

**前置条件：**

- 在 AKS 集群上启用了 Secrets Store CSI Driver 和 Azure Key Vault Provider 加载项（addon）
- 有一个 Azure Key Vault 实例
- 有一个能访问该保险库（vault）的托管身份（managed identity）或服务主体（service principal）
- 在集群上启用了 Workload Identity（工作负载身份）（比 pod identity 更推荐）

{% hint style="info" %}
**大白话**：这一节对应「Azure 云」的用户，思路和 AWS 那节完全一样：把密钥存在 Azure 官方的 Key Vault（密钥保险柜）里，让 n8n 自动取用。下面命令都是 Azure 命令行工具 `az` 的用法。`az` 需要先登录（`az login`）才有权限执行。看不懂的读者跳过即可，用第一节的通用方法。
{% endhint %}

**1. 创建或使用现有的 Key Vault：**

```bash
az keyvault create \
  --name n8n-credentials-vault \
  --resource-group your-resource-group \
  --location your-region
```

**2. 在 Key Vault 中创建密钥：**

```bash
az keyvault secret set \
  --vault-name n8n-credentials-vault \
  --name n8n-credentials-overwrite \
  --value '{"microsoftOutlookOAuth2Api":{"clientId":"YOUR_CLIENT_ID","clientSecret":"YOUR_CLIENT_SECRET"}}'
```

**3. 设置 Workload Identity（工作负载身份）：**

创建一个托管身份，并建立联合凭据（federated credential）：

```bash
# Create a managed identity <a href="#create-a-managed-identity" id="create-a-managed-identity"></a>
az identity create \
  --name n8n-workload-identity \
  --resource-group your-resource-group \
  --location your-region

# Get the identity client ID <a href="#get-the-identity-client-id" id="get-the-identity-client-id"></a>
CLIENT_ID=$(az identity show \
  --name n8n-workload-identity \
  --resource-group your-resource-group \
  --query clientId -o tsv)

# Grant the identity access to the Key Vault <a href="#grant-the-identity-access-to-the-key-vault" id="grant-the-identity-access-to-the-key-vault"></a>
az keyvault set-policy \
  --name n8n-credentials-vault \
  --secret-permissions get \
  --spn "$CLIENT_ID"

# Get the OIDC issuer URL for your cluster <a href="#get-the-oidc-issuer-url-for-your-cluster" id="get-the-oidc-issuer-url-for-your-cluster"></a>
OIDC_ISSUER=$(az aks show \
  --name your-cluster \
  --resource-group your-resource-group \
  --query "oidcIssuerProfile.issuerUrl" -o tsv)

# Create the federated credential <a href="#create-the-federated-credential" id="create-the-federated-credential"></a>
az identity credential create \
  --name n8n-workload-identity \
  --resource-group your-resource-group \
  --issuer "$OIDC_ISSUER" \
  --subject system:serviceaccount:your-namespace:n8n-sa \
  --audience api://AzureADTokenExchange
```

**4. 创建 Kubernetes ServiceAccount：**

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: n8n-sa
  namespace: your-namespace
  annotations:
    azure.workload.identity/client-id: "YOUR_MANAGED_IDENTITY_CLIENT_ID"
  labels:
    azure.workload.identity/use: "true"
```

**5. 创建 SecretProviderClass：**

```yaml
apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: n8n-credentials-overwrite
  namespace: your-namespace
spec:
  provider: azure
  parameters:
    usePodIdentity: "false"
    useWorkloadIdentity: "true"
    clientID: "YOUR_MANAGED_IDENTITY_CLIENT_ID"
    keyvaultName: "n8n-credentials-vault"
    objects: |
      array:
        - |
          objectName: n8n-credentials-overwrite
          objectType: secret
          objectAlias: credentials-overwrite.json
    tenantId: "YOUR_TENANT_ID"
```

**6. 更新你的 n8n Deployment：**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: n8n
  namespace: your-namespace
spec:
  template:
    spec:
      serviceAccountName: n8n-sa
      containers:
        - name: n8n
          image: docker.n8n.io/n8nio/n8n:latest
          env:
            - name: CREDENTIALS_OVERWRITE_DATA_FILE
              value: /run/secrets/credentials-overwrite.json
          volumeMounts:
            - name: credentials-overwrite
              mountPath: /run/secrets/credentials-overwrite.json
              subPath: credentials-overwrite.json
              readOnly: true
      volumes:
        - name: credentials-overwrite
          csi:
            driver: secrets-store.csi.k8s.io
            readOnly: true
            volumeAttributes:
              secretProviderClass: n8n-credentials-overwrite
```

**轮换密钥：**

```bash
az keyvault secret set \
  --vault-name n8n-credentials-vault \
  --name n8n-credentials-overwrite \
  --value '{"microsoftOutlookOAuth2Api":{"clientId":"NEW_CLIENT_ID","clientSecret":"NEW_CLIENT_SECRET"}}'
```

CSI 驱动会按照它的轮询间隔（默认两分钟）同步更新。之后请重启 n8n 的 Pod，让 n8n 读取更新后的文件。

### Google Secret Manager（GKE）/ Google Secret Manager

这种方法使用 [Secrets Store CSI Driver 的 GCP Provider](https://github.com/GoogleCloudPlatform/secrets-store-csi-driver-provider-gcp) 把 Google Secret Manager 中的密钥挂载到 Pod 中。

**前置条件：**

- 启用了 Workload Identity Federation 的 GKE 集群
- 项目上启用了 Secret Manager API
- 一个具有 `secretmanager.secretAccessor` 角色的 Google 服务账号

**1. 启用 Secret Manager API：**

```bash
gcloud services enable secretmanager.googleapis.com \
  --project your-project-id
```

**2. 创建密钥：**

```bash
echo -n '{"microsoftOutlookOAuth2Api":{"clientId":"YOUR_CLIENT_ID","clientSecret":"YOUR_CLIENT_SECRET"}}' | \
  gcloud secrets create n8n-credentials-overwrite \
    --data-file=- \
    --project your-project-id
```

**3. 设置 Workload Identity Federation：**

```bash
# Create a Google service account <a href="#create-a-google-service-account" id="create-a-google-service-account"></a>
gcloud iam service-accounts create n8n-secret-reader \
  --display-name="n8n Secret Reader" \
  --project your-project-id

# Grant it access to the secret <a href="#grant-it-access-to-the-secret" id="grant-it-access-to-the-secret"></a>
gcloud secrets add-iam-policy-binding n8n-credentials-overwrite \
  --member="serviceAccount:n8n-secret-reader@your-project-id.iam.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor" \
  --project your-project-id

# Bind the Kubernetes service account to the Google service account <a href="#bind-the-kubernetes-service-account-to-the-google-service-account" id="bind-the-kubernetes-service-account-to-the-google-service-account"></a>
gcloud iam service-accounts add-iam-policy-binding \
  n8n-secret-reader@your-project-id.iam.gserviceaccount.com \
  --role="roles/iam.workloadIdentityUser" \
  --member="serviceAccount:your-project-id.svc.id.goog[your-namespace/n8n-sa]"
```

**4. 创建 Kubernetes ServiceAccount：**

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: n8n-sa
  namespace: your-namespace
  annotations:
    iam.gke.io/gcp-service-account: n8n-secret-reader@your-project-id.iam.gserviceaccount.com
```

**5. 安装 CSI Driver 和 GCP Provider：**

```bash
# Install the CSI driver <a href="#install-the-csi-driver" id="install-the-csi-driver"></a>
helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts
helm install csi-secrets-store secrets-store-csi-driver/secrets-store-csi-driver \
  --namespace kube-system

# Install the GCP provider <a href="#install-the-gcp-provider" id="install-the-gcp-provider"></a>
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/secrets-store-csi-driver-provider-gcp/main/deploy/provider-gcp-plugin.yaml
```

**6. 创建 SecretProviderClass：**

```yaml
apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: n8n-credentials-overwrite
  namespace: your-namespace
spec:
  provider: gcp
  parameters:
    secrets: |
      - resourceName: "projects/your-project-id/secrets/n8n-credentials-overwrite/versions/latest"
        path: "credentials-overwrite.json"
```

**7. 更新你的 n8n Deployment：**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: n8n
  namespace: your-namespace
spec:
  template:
    spec:
      serviceAccountName: n8n-sa
      containers:
        - name: n8n
          image: docker.n8n.io/n8nio/n8n:latest
          env:
            - name: CREDENTIALS_OVERWRITE_DATA_FILE
              value: /run/secrets/credentials-overwrite.json
          volumeMounts:
            - name: credentials-overwrite
              mountPath: /run/secrets/credentials-overwrite.json
              subPath: credentials-overwrite.json
              readOnly: true
      volumes:
        - name: credentials-overwrite
          csi:
            driver: secrets-store.csi.k8s.io
            readOnly: true
            volumeAttributes:
              secretProviderClass: n8n-credentials-overwrite
```

**轮换密钥：**

创建密钥的新版本：

```bash
echo -n '{"microsoftOutlookOAuth2Api":{"clientId":"NEW_CLIENT_ID","clientSecret":"NEW_CLIENT_SECRET"}}' | \
  gcloud secrets versions add n8n-credentials-overwrite \
    --data-file=- \
    --project your-project-id
```

因为 SecretProviderClass 引用的是 `versions/latest`（最新版本），CSI 驱动会在下一次同步时获取新版本。请重启 n8n 的 Pod，让 n8n 读取更新后的文件。

{% hint style="info" %}
**大白话（总结）**：无论是 AWS、Azure 还是谷歌云，三节的套路完全一致：①把密钥存进云平台的保险柜；②配置好身份授权（让 K8s 里的 n8n 有权限读取）；③在 Deployment 里把密钥挂成文件，并设置 `CREDENTIALS_OVERWRITE_DATA_FILE` 指向它；④轮换密钥时，更新保险柜里的值 + 重启 n8n Pod（因为 n8n 只在启动时读一次文件）。国内用户如果用的是阿里云/腾讯云的 K8s 服务，没有上面三个平台的对应章节，可以直接用「普通 Kubernetes Secret」那一节的方法，或者用你云平台的密钥管理服务（原理相同）。
{% endhint %}
