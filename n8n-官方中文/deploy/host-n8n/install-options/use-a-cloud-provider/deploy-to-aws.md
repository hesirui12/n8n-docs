---
contentType: tutorial
nodeTitle: 部署到 AWS（Deploy to AWS）
originalFilePath: hosting/installation/server-setups/aws.md
originalUrl: 'https://docs.n8n.io/hosting/installation/server-setups/aws'
url: >-
  https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-aws
layout:
  description:
    visible: false
---

# 在 Amazon Web Services（AWS）上部署 n8n

本教程教你在亚马逊云 AWS 上自托管 n8n。方案采用的是：n8n + Postgres 数据库作为数据后端，用 Kubernetes（容器编排平台）来管理所需的资源，并借助 Kubernetes 内置的反向代理能力把服务暴露出去。

{% hint style="info" %}
**国内部署提示**：AWS 国内访问和账号注册需要一定条件，海外区域（如新加坡、东京）的访问速度和延迟通常更友好。教程里的镜像和代码都托管在 GitHub 上，国内拉取慢时可以给终端配置代理，或改用国内可访问的镜像源；`git clone` 也可以使用 `https://ghproxy.com/https://github.com/...` 这类加速前缀。命令本身保持不变。
{% endhint %}

## 托管方式选择（Hosting options）

AWS 提供了好几种适合托管 n8n 的方式，主要包括：

* **EC2**（云虚拟机）：相当于一台云上的 Linux 服务器，最接近传统服务器，灵活但需要你自己管理。
* **EKS**（Kubernetes 容器服务）：用 Kubernetes 来运行容器，负责自动伸缩、故障恢复等。

本教程选用的是 [EKS](https://aws.amazon.com/eks/)。使用 Kubernetes 会带来一些额外的复杂度和配置工作，但它是随需求变化扩展 n8n 的最佳方式——流量大了自动加机器，流量小了自动减机器。

## 前置条件（Prerequisites）

本教程的步骤会混合使用 AWS 网页控制台和 [eksctl 命令行工具（EKS 官方 CLI）](https://eksctl.io)。

另外，虽然 eksctl 的文档里没有提到，你还必须：

* [安装 AWS CLI 命令行工具](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
* [配置 AWS CLI 的身份认证](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)（通常是用 `aws configure` 填入 Access Key ID 和 Secret Access Key）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/YLv7Cqg70tj1alDgktSX/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

## 创建集群（Create a cluster）

用 eksctl 工具创建一个集群，命令里要指定集群名称和区域（region）。把 `<your-aws-region>` 换成你想要的 AWS 区域代码，例如 `ap-southeast-1`（新加坡）或 `ap-northeast-1`（东京）：

```shell
eksctl create cluster --name n8n --region <your-aws-region>
```

创建集群可能需要一段时间，请耐心等待。

集群创建完成后，eksctl 会自动把本机的 kubectl（Kubernetes 命令行工具）上下文切换到新集群，也就是说你接下来的 `kubectl` 命令都会自动作用于这个新集群，不需要手动切换。

## 克隆配置文件仓库（Clone configuration repository）

Kubernetes 和 n8n 的运行需要一系列配置文件。你可以直接从 [n8n 官方维护的 n8n-hosting 仓库](https://github.com/n8n-io/n8n-hosting) 克隆下来。下面的步骤会逐一说明每个文件是干什么的、你需要改哪些设置。

先克隆仓库：

```shell
git clone https://github.com/n8n-io/n8n-hosting.git 
```

然后进入 kubernetes 子目录：

```shell
cd n8n-hosting/kubernetes
```

{% hint style="info" %}
**小白提示**：`git clone` 会把 GitHub 上的整个仓库下载到你当前所在的目录；`cd` 是「进入文件夹」的意思。后面所有配置文件的修改和部署命令，都要在这个目录里操作。
{% endhint %}

## 配置 Postgres（Configure Postgres）

当 n8n 的部署规模变大时，Postgres（一款功能强大的开源关系型数据库）比默认的 SQLite（轻量嵌入式数据库）更稳定、更适合生产环境，所以教程为 n8n 搭配了 Postgres 作为数据后端。

### 配置持久化存储卷（Configure volume for persistent storage）

Pod（Kubernetes 里最小运行单位，相当于一个容器）重启后，容器内的文件系统会被清空。为了在 Pod 重启后依然保留数据，Postgres 部署需要挂载一个「持久化存储卷（persistent volume）」。AWS 默认的存储类型 [gp3](https://docs.aws.amazon.com/ebs/latest/userguide/general-purpose.html#gp3-ebs-volume-type) 就适合这个用途，这在 `postgres-claim0-persistentvolumeclaim.yaml` 清单文件里定义：

```yaml
…
spec:
  storageClassName: gp3
  accessModes:
    - ReadWriteOnce
…
```

上面的配置表示：使用 AWS 的 `gp3` 存储类型，访问模式为 `ReadWriteOnce`（同一时刻只能被一个节点读写）。

### Postgres 环境变量（Postgres environment variables）

Postgres 需要设置一些环境变量，把它们传给容器里运行的应用。

示例文件 `postgres-secret.yaml` 里有一些占位符（placeholder），你需要把它替换成自己的实际值，包括用户名、密码和要使用的数据库名。

这里有个安全最佳实践：PostgreSQL 使用一个 root 用户（`POSTGRES_USER`）负责数据库的初始化和日常管理，但官方建议另外创建一个非 root 用户（`POSTGRES_NON_ROOT_USER`）专门给 n8n 用。原因很简单：root 用户拥有数据库系统的全部权限，而 n8n 只需要非 root 用户那部分权限就能正常工作。同时配置两个用户，可以提升安全性，防止 n8n 意外修改到数据库系统本身。

接下来，`postgres-deployment.yaml` 清单会把上面这个清单文件里的值读取出来，传给运行中的应用 Pod。

## 配置 n8n（Configure n8n）

### 创建文件存储卷（Create a volume for file storage）

虽然这不是运行 n8n 所必需的，但使用持久化存储卷有两个好处：

* 保留你在使用 n8n 时上传的文件。
* 如果希望在重启之间保留[手动设置的 n8n 加密密钥](../../configure-n8n/basic-configuration/use-environment-variables/deployment.md)，n8n 启动时会把包含密钥的文件保存到文件存储中，有了持久卷就不会丢。

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

[Kubernetes](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) 允许你指定应用容器需要的最低资源（requests，即「请求量」）以及最高可用的资源上限（limits，即「限制量」）。前面克隆的示例 YAML 文件在 `n8n-deployment.yaml` 的 `resources` 部分包含如下内容：

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

{% hint style="info" %}
**小白提示**：环境变量就是「写给程序看的配置项」，n8n 启动时会读取这些变量来决定自己该用什么域名、什么时区、什么数据库等。你不必一次配全，用到什么查什么即可。
{% endhint %}

## 部署清单（Deployments）

两个部署清单文件（`n8n-deployment.yaml` 和 `postgres-deployment.yaml`）分别向 Kubernetes 定义了 n8n 和 Postgres 这两个应用应该如何运行。

这两个清单主要做了以下几件事：

- 把定义好的环境变量发送给每个应用 Pod
- 指定要使用的容器镜像（container image）
- 通过 `resources` 对象设置资源消耗上限
- 引用前面定义的 `volumes`，并用 `volumeMounts` 指定卷在容器内的挂载路径
- 设置扩缩容和重启策略。示例清单里每种 Pod 只定义了 1 个实例，你可以根据实际需要修改副本数量

## 服务（Services）

两个服务清单（`postgres-service.yaml` 和 `n8n-service.yaml`）通过 Kubernetes 的负载均衡器把服务暴露给外部世界，默认分别使用 5432（Postgres）和 5678（n8n）端口。

## 部署到 Kubernetes 集群（Send to Kubernetes cluster）

在 `n8n-kubernetes-hosting` 目录下运行下面这条命令，把所有清单文件一次性发送给集群：

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

{% hint style="info" %}
**小白提示**：`kubectl apply -f .` 的意思是「把当前目录下所有清单文件里描述的资源配置到集群上」。「命名空间（namespace）」可以理解为集群里的一个独立隔间，第一次部署时资源有先后顺序，偶尔报一次错很正常，再跑一次就好。
{% endhint %}

## 设置 DNS（Set up DNS）

n8n 通常运行在一个子域名（subdomain）下，比如 `n8n.example.com`。你需要在你购买域名的服务商那里，为这个子域名创建一条 DNS 记录，把它指向 n8n 实例的固定地址。

要找到实例上运行的 n8n 服务的地址：

1. 打开 AWS 控制台的 **Amazon Elastic Kubernetes Service** 页面，进入 **Clusters（集群）** 部分。
2. 点击集群名称，打开它的配置页面。
3. 选择 **Resources（资源）** 标签页，然后进入 **Service and networking（服务与网络）** > **Services（服务）**。
4. 选择 **n8n** 服务，复制 **Load balancer URLs（负载均衡器 URL）** 的值。做 DNS 解析时，在这个值后面加上 n8n 服务的端口（5678）即可。

{% hint style="info" %}
**使用 HTTP**

本教程定义的服务用的是 HTTP 连接，例如 `n8n-deployment.yaml` 中就是这样。但是，如果你点击 **Load balancer URLs** 的值，EKS 会带你到一个 "HTTPS" 的 URL，这会导致访问出错。解决办法是：打开 n8n 子域名时，务必使用 HTTP 协议（不要加 `https://` 前缀，或手动改成 `http://`）。
{% endhint %}

## 删除资源（Delete resources）

如果你不需要这套环境了，可以运行下面这条命令，删除清单创建的所有资源：

```shell
kubectl delete -f .
```

{% hint style="warning" %}
**删除前注意**：这条命令会删掉集群里的 n8n 和 Postgres 应用资源。请确认你已经备份好工作流、凭据等重要数据再执行，数据一旦删除很难找回。
{% endhint %}

## 下一步（Next steps）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GtC2RL8itCPuNiwv5UUW/" %}
