---
contentType: tutorial
nodeTitle: 部署到 Azure（Deploy to Azure）
originalFilePath: hosting/installation/server-setups/azure.md
originalUrl: 'https://docs.n8n.io/hosting/installation/server-setups/azure'
url: >-
  https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-azure
layout:
  description:
    visible: false
---

# 在 Azure（微软云）上部署 n8n

本教程教你在微软云 Azure 上自托管 n8n。方案采用的是：n8n + Postgres 数据库作为数据后端，用 Kubernetes 来管理所需的资源，并借助 Kubernetes 的反向代理能力把服务暴露出去。

{% hint style="info" %}
**国内部署提示**：Azure 的国内区域（由世纪互联运营）与海外区域功能略有差异，教程中的 AKS 服务在海外区域（如东亚、东南亚）体验通常更顺畅。教程里的仓库托管在 GitHub 上，国内拉取慢时可以给终端配置代理，或使用 `https://ghproxy.com/https://github.com/...` 这类加速前缀。命令本身保持不变。
{% endhint %}

## 前置条件（Prerequisites）

你需要安装 [Azure 命令行工具（Azure CLI）](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/YLv7Cqg70tj1alDgktSX/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

## 托管方式选择（Hosting options）

Azure 提供了好几种适合托管 n8n 的方式，主要包括：

* **Azure Container Instances**（容器实例）：专门为运行容器优化，最轻量。
* **Linux 虚拟机**（Linux Virtual Machines）：相当于一台云上的 Linux 服务器。
* **Azure Kubernetes Service / AKS**（Kubernetes 容器服务）：用 Kubernetes 运行容器。

本教程选用的是 AKS。使用 Kubernetes 会带来一些额外的复杂度和配置工作，但它是随需求变化扩展 n8n 的最佳方式。

教程里的步骤会混合使用 Azure 网页控制台和命令行工具，不过大部分任务你只用其中一种也能完成。

## 打开 Azure Kubernetes Service（Open the Azure Kubernetes Service）

进入 [Azure 门户（portal.azure.com）](https://portal.azure.com/)，搜索并选择 **Kubernetes services（Kubernetes 服务）**。

## 创建集群（Create a cluster）

在 Kubernetes services 页面，选择 **Create（创建）** > **Create a Kubernetes cluster（创建 Kubernetes 集群）**。

你可以按自己的需求选择任意配置项，完成配置后点击 **Create（创建）** 即可。初次使用的话保持默认配置通常就能跑起来。

## 设置 Kubectl 上下文（Set Kubectl context）

本教程剩下的步骤都要求你把 Azure 上的这个实例设置为本地 Kubectl 的上下文。打开集群实例的详情页，点击 **Connect（连接）** 按钮，页面会显示一段代码片段，把它复制到终端里粘贴并运行，即可把本地 Kubernetes 的设置切换到新集群。

{% hint style="info" %}
**小白提示**：Kubectl 是操作 Kubernetes 的命令行工具。「上下文（context）」就是「当前对着哪台集群操作」的指针。Azure 会自动生成一段 `az aks get-credentials` 之类的命令，运行后，你本地的 `kubectl` 命令就都指向 Azure 上这个集群了。
{% endhint %}

## 克隆配置文件仓库（Clone configuration repository）

Kubernetes 和 n8n 的运行需要一系列配置文件。你可以从 [n8n 官方维护的 n8n-hosting 仓库](https://github.com/n8n-io/n8n-hosting) 克隆下来。下面的步骤会逐一说明每个文件是干什么的、你需要改哪些设置。

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

### 配置持久化存储卷（Configure volume for persistent storage）

为了在 Pod 重启后依然保留数据，Postgres 部署需要挂载一个持久化存储卷。Azure 默认的存储类型就适合这个用途，这在 `postgres-claim0-persistentvolumeclaim.yaml` 清单文件里定义好了，一般不用改。

{% hint style="info" %}
**专用存储类型（Specialized storage classes）**

如果你的存储有特殊要求或更高的性能需求，可以[阅读 Azure 官方文档，了解它提供的各种存储类型选项](https://learn.microsoft.com/en-us/azure/aks/concepts-storage#storage-classes)。
{% endhint %}

### Postgres 环境变量（Postgres environment variables）

Postgres 需要设置一些环境变量，把它们传给容器里运行的应用。

示例文件 `postgres-secret.yaml` 里有一些占位符，你需要把它替换成自己的实际值。Postgres 在创建数据库时会使用这些信息。

接下来，`postgres-deployment.yaml` 清单会把上面这个清单文件里的值读取出来，传给运行中的应用 Pod。

## 配置 n8n（Configure n8n）

### 创建文件存储卷（Create a volume for file storage）

虽然这不是运行 n8n 所必需的，但在以下场景中必须使用持久化存储卷：

* 使用与文件交互的节点时，例如二进制数据节点（binary data node）。
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

[Kubernetes 允许你](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)（可选地）指定应用容器需要的最低资源（requests）和最高可用资源上限（limits）。前面克隆的示例 YAML 文件在 `n8n-deployment.yaml` 的 `resources` 部分包含如下内容：

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

n8n 通常运行在一个子域名下。你需要在你购买域名的服务商那里，为这个子域名创建一条 DNS 记录，把它指向 n8n 服务的 IP 地址。

找到 n8n 服务的 IP 地址：打开集群的 **Services & ingresses（服务与入口）** 菜单项，在 **External IP（外部 IP）** 一列中找到即可。做 DNS 解析时，记得在 URL 上加上 n8n 的端口 "5678"。

{% hint style="info" %}
**AKS 固定 IP 地址（Static IP addresses with AKS）**

[阅读这篇官方教程](https://learn.microsoft.com/en-us/azure/aks/static-ip)，了解如何在 AKS 上使用固定 IP 地址（防止每次重启后 IP 变化导致 DNS 失效）。
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
