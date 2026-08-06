---
contentType: tutorial
nodeTitle: 部署到 Google Kubernetes（Deploy to Google Kubernetes）
originalFilePath: hosting/installation/server-setups/google-kubernetes-engine.md
originalUrl: >-
  https://docs.n8n.io/hosting/installation/server-setups/google-kubernetes-engine
url: >-
  https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-google-kubernetes
layout:
  description:
    visible: false
---

# 在 Google Kubernetes Engine（GKE）上部署 n8n

Google Cloud 提供了好几种适合托管 n8n 的方式，主要包括：

* **Cloud Run**（无服务器容器平台）：专门为运行容器优化，不用管服务器。
* **Compute Engine**（云虚拟机）：相当于一台云上的 Linux 服务器。
* **Kubernetes Engine / GKE**（Kubernetes 容器引擎）：用 Kubernetes 编排容器。

本教程选用的是 GKE。如果你更想用 Cloud Run，可以参考[这篇教程](deploy-to-google-cloud-run.md)。

本教程的大部分步骤使用 Google Cloud 网页控制台，但你也可以全部改用 [gcloud 命令行工具](https://cloud.google.com/sdk/gcloud/) 来完成。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/YLv7Cqg70tj1alDgktSX/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

{% hint style="info" %}
**国内部署提示**：Google Cloud 在国内需要网络条件才能访问控制台和执行命令，建议选择东京（`asia-northeast1`）等亚洲区域以降低延迟。教程里的仓库托管在 GitHub 上，国内拉取慢时可以配置代理。命令本身保持不变。
{% endhint %}

## 前置条件（Prerequisites）

- [gcloud 命令行工具](https://cloud.google.com/sdk/gcloud/)
- [gke-gcloud-auth-plugin 认证插件](https://cloud.google.com/blog/products/containers-kubernetes/kubectl-auth-changes-in-gke)（请先安装 gcloud CLI，再安装这个插件）

## 创建项目（Create project）

GCP 建议你创建项目（project）来从逻辑上组织资源和配置。在 Google Cloud 控制台为你的 n8n 部署新建一个项目：点击顶部项目下拉菜单，然后点击 **NEW PROJECT（新建项目）** 按钮。创建后选中这个新项目。在按照本教程执行后续步骤时，请确保当前选中的是正确的项目，否则资源会创建到别的项目里。

## 启用 Kubernetes Engine API（Enable the Kubernetes Engine API）

GKE 默认没有启用。在顶部搜索栏里搜索 "Kubernetes"，从结果中选择 "Kubernetes Engine"。

点击 **ENABLE（启用）** 按钮，为这个项目启用 Kubernetes Engine API。

## 创建集群（Create a cluster）

在 [GKE 服务页面](https://console.cloud.google.com/kubernetes/list/overview) 选择 **Clusters（集群）** > **CREATE（创建）**。请务必选择 "Standard（标准）" 集群选项——**n8n 无法在 "Autopilot（自动驾驶）" 集群上运行**。除非你有特殊需求（比如修改区域 location），否则集群配置保持默认即可。

{% hint style="warning" %}
**重要：不要选 Autopilot**：Autopilot 集群会自动管理许多底层配置，但 n8n 需要的一些能力（如自定义资源、特定卷设置）在 Autopilot 下不可用，因此务必选择 "Standard" 模式。
{% endhint %}

## 设置 Kubectl 上下文（Set Kubectl context）

本教程剩下的步骤要求你把 GCP 上的这个实例设置为本地 Kubectl 的上下文。打开集群实例的详情页，点击 **CONNECT（连接）** 按钮，页面会显示一段 gcloud CLI 的连接命令片段。把这段代码复制到 gcloud CLI 里粘贴并运行，即可把本地 Kubernetes 的设置切换到新的 gcloud 集群。

## 克隆配置文件仓库（Clone configuration repository）

Kubernetes 和 n8n 的运行需要一系列配置文件。你可以从 [n8n 官方维护的 n8n-hosting 仓库](https://github.com/n8n-io/n8n-hosting) 克隆到本地。下面的步骤会说明每个文件是干什么的、你需要填入哪些信息。

先克隆仓库：

```shell
git clone https://github.com/n8n-io/n8n-hosting.git
```

然后进入 kubernetes 子目录：

```shell
cd n8n-hosting/kubernetes
```

## 配置 Postgres（Configure Postgres）

当 n8n 的部署规模变大时，Postgres 比默认的 SQLite 更稳定、更适合生产环境，所以教程为 n8n 搭配了 Postgres 作为数据后端。

### 创建持久化存储卷（Create a volume for persistent storage）

为了在 Pod 重启后依然保留数据，Postgres 部署需要挂载一个持久化存储卷。在 GCP 上运行 Postgres 需要一个特定的 Kubernetes Storage Class（存储类）。具体细节可以阅读[这篇 GCP 官方指南](https://cloud.google.com/architecture/deploying-highly-available-postgresql-with-gke)，但 `storage.yaml` 清单文件已经帮你创建好了。你可能需要修改创建存储的区域：在 `allowedTopologies` > `matchedLabelExpressions` > `values` 键下修改。默认设置的是 `us-central`（美国中部）：

```yaml
…
allowedTopologies:
  - matchLabelExpressions:
      - key: failure-domain.beta.kubernetes.io/zone
        values:
          - us-central1-b
          - us-central1-c
```

### Postgres 环境变量（Postgres environment variables）

Postgres 需要设置一些环境变量，把它们传给容器里运行的应用。

示例文件 `postgres-secret.yaml` 里有一些占位符，你需要替换成自己的实际值。Postgres 在创建数据库时会使用这些信息。

接下来，`postgres-deployment.yaml` 清单会把上面这个清单文件里的值读取出来，传给运行中的应用 Pod。

## 配置 n8n（Configure n8n）

### 创建文件存储卷（Create a volume for file storage）

虽然这不是运行 n8n 所必需的，但在以下场景中必须使用持久化存储卷：

* 使用与文件交互的节点时，例如二进制数据节点。
* 如果希望在重启之间保留[手动设置的 n8n 加密密钥](../../configure-n8n/basic-configuration/use-environment-variables/deployment.md)。n8n 启动时会把包含密钥的文件保存到文件存储中，有了持久卷就不会丢。

`n8n-claim0-persistentvolumeclaim.yaml` 清单文件负责创建这个存储卷，而 n8n 的 Deployment 会在 `n8n-deployment.yaml` 清单的 `volumes` 部分挂载这个存储卷声明：

```yaml
…
volumes:
  - name: n8n-claim0
    persistentVolumeClaim:
      claimName: n8n-claim0
…
```

### Pod 资源（Pod resources）

[Kubernetes 允许你](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)（可选地）指定应用容器需要的最低资源（requests）和最高可用资源上限（limits）。前面克隆的示例 YAML 文件在 `n8n-deployment.yaml` 和 `postgres-deployment.yaml` 的 `resources` 部分包含如下内容：

```yaml
…
resources:
  requests:
    memory: "250Mi"
  limits:
    memory: "500Mi"
…    
```

这段配置的意思是：每个容器至少保证 250MB 内存，最多使用 500MB，CPU 则交给 Kubernetes 自动处理。你可以根据自己的需要修改这些数值。作为参考，下面是 n8n 云服务套餐使用的资源数值：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/I9ftZ1V1rwx3OrFOh0bT/" %}

### 可选：环境变量（Optional: Environment variables）

你可以用环境变量来配置 n8n 的各种设置和行为。

创建一个 `n8n-secret.yaml` 文件即可。完整的 n8n 环境变量说明请参考[环境变量](../../configure-n8n/basic-configuration/use-environment-variables/README.md)页面。

## 部署清单（Deployments）

两个部署清单文件（`n8n-deployment.yaml` 和 `postgres-deployment.yaml`）分别向 Kubernetes 定义了 n8n 和 Postgres 这两个应用应该如何运行。

这两个清单主要做了以下几件事：

- 把定义好的环境变量发送给每个应用 Pod
- 指定要使用的容器镜像
- 通过 `resources` 对象设置资源消耗上限
- 引用前面定义的 `volumes`，并用 `volumeMounts` 指定卷在容器内的挂载路径
- 设置扩缩容和重启策略。示例清单里每种 Pod 只定义了 1 个实例，你可以根据实际需要修改副本数量

## 服务（Services）

两个服务清单（`postgres-service.yaml` 和 `n8n-service.yaml`）通过 Kubernetes 的负载均衡器把服务暴露给外部世界，默认分别使用 5432（Postgres）和 5678（n8n）端口。

## 部署到 Kubernetes 集群（Send to Kubernetes cluster）

运行下面这条命令，把所有清单文件一次性发送给集群：

```shell
kubectl apply -f .
```

{% hint style="info" %}
**命名空间报错（Namespace error）**

你可能会看到一条找不到 "n8n" 命名空间的报错，这是因为相关资源还没有就绪。解决方法是：再运行一次同样的命令，或者先用下面这条命令单独应用命名空间清单：

```shell
kubectl apply -f namespace.yaml
```
{% endhint %}

## 设置 DNS（Set up DNS）

n8n 通常运行在一个子域名下。你需要在你购买域名的服务商那里，为这个子域名创建一条 DNS 记录，把它指向 n8n 服务的 IP 地址。找到 n8n 服务的 IP 地址：打开集群的 **Services & Ingress（服务与入口）** 菜单项，在 **Endpoints（端点）** 一列中查看。

{% hint style="info" %}
**GKE 与 IP 地址（GKE and IP addresses）**

[阅读这篇 GKE 教程](https://cloud.google.com/kubernetes-engine/docs/tutorials/configuring-domain-name-static-ip#configuring_your_domain_name_records)，了解保留 IP 地址（reserved IP）如何与 GKE 和 Kubernetes 资源配合使用。
{% endhint %}

## 删除资源（Delete resources）

运行下面这条命令，删除清单创建的所有资源：

```shell
kubectl delete -f .
```

{% hint style="warning" %}
**删除前注意**：这条命令会删掉集群里的 n8n 和 Postgres 应用资源。请确认你已经备份好工作流、凭据等重要数据再执行。
{% endhint %}

## 下一步（Next steps）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GtC2RL8itCPuNiwv5UUW/" %}
