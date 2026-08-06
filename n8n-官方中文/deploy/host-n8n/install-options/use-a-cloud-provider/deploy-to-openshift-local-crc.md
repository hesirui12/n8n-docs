---
contentType: tutorial
nodeTitle: 部署到 OpenShift Local（CRC）（Deploy to OpenShift Local (CRC)）
originalFilePath: hosting/installation/server-setups/openshift-crc.md
originalUrl: 'https://docs.n8n.io/hosting/installation/server-setups/openshift-crc'
url: >-
  https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-openshift-local-crc
layout:
  description:
    visible: false
---

# 在 OpenShift Local（CRC）上部署 n8n

本教程带你一步步把 n8n 部署到 OpenShift Local（CRC）上。CRC 是红帽（Red Hat）提供的工具，用于在**你自己的电脑上**运行一个本地的 OpenShift 集群。这套方案和 AWS/EKS 的部署思路类似，但完全运行在你的本地机器上，专门用来在没有云成本的情况下，在 OpenShift 环境里本地测试 n8n。

{% hint style="warning" %}
**对电脑配置要求很高**：OpenShift 本身会消耗大量资源，所以你的电脑必须有相当充裕的硬件资源（至少 4 核 CPU、32GB 内存、100GB 磁盘，详见下文「前置条件」）才能顺畅运行。
{% endhint %}

{% hint style="info" %}
**国内部署提示**：本教程需要注册免费的 Red Hat 账号并下载 CRC 安装包（约 2.5GB），以及从 GitHub、容器镜像仓库拉取软件，国内网络环境下建议配置代理后再进行下载和安装。命令本身保持不变。
{% endhint %}

## OpenShift 概念 vs 标准 Kubernetes（OpenShift concepts vs standard Kubernetes）

OpenShift 基于 Kubernetes 构建，但使用不同的术语，并且安全默认值更严格。如果你熟悉标准 Kubernetes，或者熟悉针对 EKS 这类托管 Kubernetes 服务的教程，下面的表格把对应概念做了映射，让你心里有数：

| 标准 Kubernetes / EKS | OpenShift Local (CRC) |
| --- | --- |
| `kubectl`（Kubernetes 命令行工具） | `oc`（OpenShift 命令行工具；它也兼容 `kubectl` 命令） |
| Namespace（命名空间） | Project（项目，同一个概念，不同的命令） |
| Ingress / LoadBalancer（入口 / 负载均衡器） | Route（路由，OpenShift 内置，无需额外控制器） |
| EBS StorageClass (gp3)（AWS 存储类型） | CRC 内置存储供应器（无需配置） |
| RDS PostgreSQL（AWS 托管数据库） | 集群内的 PostgreSQL（通过 Helm 安装 Bitnami 版） |
| ElastiCache Redis（AWS 托管缓存） | 集群内的 Redis（通过 Helm 安装 Bitnami 版） |
| AWS S3（AWS 对象存储） | 集群内的 MinIO（兼容 S3 协议） |
| Pod Identity / IRSA（AWS 身份） | 通过 Kubernetes Secret（密钥）存放访问密钥 |
| AWS Load Balancer Controller | 不需要（Route 是内置的） |
| OIDC / IAM（AWS 身份认证） | 不需要 |
| 约 135–400 美元/月 | 免费（运行在你自己的电脑上） |

## 前置条件（Prerequisites）

开始之前，请确认你的电脑满足以下条件：

- **CPU**：4 核或更多**物理核心**（不是线程），且支持虚拟化
- **内存**：至少 32GB 可用（CRC 的虚拟机要预留 9GB）
- **磁盘**：100GB 可用空间
- **操作系统**：Ubuntu（22.04 LTS 或更新版本）

## 准备 Ubuntu（Prepare Ubuntu）

### 打开终端（Open a terminal）

按 `Ctrl+Alt+T` 组合键，或者在 Applications（应用）菜单里搜索 **Terminal（终端）**。

本教程里的每一条命令，都是在终端里输入后按 **Enter（回车）** 键运行的。

### 更新系统（Update your system）

先做一次系统更新，避免出现依赖问题：

```shell
sudo apt update && sudo apt upgrade -y
```

{% hint style="info" %}
**sudo 是什么**

`sudo` 的意思是「以管理员身份运行」。运行时会提示你输入密码。输入时屏幕上不会显示你敲的字符，这是正常现象，不用紧张。
{% endhint %}

### 检查 CPU 虚拟化支持（Check CPU virtualization support）

CRC 要运行一个虚拟机，你的 CPU 必须支持硬件虚拟化。检查方法：

```shell
egrep -c '(vmx|svm)' /proc/cpuinfo
```

- **输出是 `0`**：说明虚拟化未开启。进入 BIOS/UEFI 设置，开启 VT-x（Intel 处理器）或 AMD-V（AMD 处理器），然后重启电脑再试。
- **输出是 `1` 或更大**：说明没问题，可以继续。

### 安装 KVM 和 libvirt（Install KVM and libvirt）

KVM 是 Linux 自带的虚拟机监控器（hypervisor）。CRC 用它来运行 OpenShift 集群的虚拟机：

```shell
sudo apt install -y qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils
```

安装 `virtiofsd`——CRC 需要用它在宿主机和集群虚拟机之间共享文件系统：

```shell
sudo apt install -y virtiofsd
```

启动 libvirt 服务，并设置成开机自动启动：

```shell
sudo systemctl start libvirtd
sudo systemctl enable libvirtd
```

验证它是否在运行：

```shell
sudo systemctl status libvirtd
```

在输出里寻找绿色的 `Active: active (running)`。按 `q` 键退出查看界面。

### 把用户加入需要的组（Add user to required groups）

把当前用户加入 `libvirt` 和 `kvm` 组，这样之后就不用每条命令都敲 `sudo` 了：

```shell
sudo usermod -aG libvirt $USER
sudo usermod -aG kvm $USER
```

{% hint style="warning" %}
**警告**

**你必须注销并重新登录（或直接重启电脑），这个改动才会生效。** 如果跳过这步，CRC 会报 "permission denied"（权限被拒绝）错误。
{% endhint %}

现在重启电脑：

```shell
sudo reboot
```

重新登录后，打开终端验证组成员身份：

```shell
groups
```

输出里应该能看到 `libvirt` 和 `kvm`。

### 安装 NetworkManager（Install NetworkManager）

CRC 需要 NetworkManager 来管理集群内部域名（`*.apps-crc.testing`、`api.crc.testing`）的 DNS 记录：

```shell
sudo apt install -y network-manager
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

验证它是否已连接：

```shell
nmcli general status
```

`STATE`（状态）列应该显示 `connected`（已连接）。

## 安装工具（Install tools）

### 注册 Red Hat 账号并获取拉取密钥（Get a Red Hat account and pull secret）

CRC 需要一个免费的 Red Hat 账号，用来拉取容器镜像。

1. 如果你还没有账号，先[创建一个免费的 Red Hat 账号](https://console.redhat.com/)。
2. 在 [console.redhat.com/openshift/create/local](https://console.redhat.com/openshift/create/local) 页面，点击 **Download OpenShift Local（下载 OpenShift Local）**。
3. 选择 **Linux**，把 `.tar.xz` 文件下载到 `~/Downloads` 目录。
4. 在同一页面上，点击 **Copy pull secret（复制拉取密钥）**。把它粘贴到一个文本文件里保存好，后面会用到。

### 安装 CRC（Install CRC）

在 Downloads 文件夹里打开终端：

```shell
cd ~/Downloads
```

解压压缩包：

```shell
tar xf crc-linux-amd64.tar.xz
```

把 `crc` 程序移动到系统级目录，这样在任何终端里都能直接使用：

```shell
sudo mv crc-*-linux-amd64/crc /usr/local/bin/
```

验证安装：

```shell
crc version
```

终端里应该会打印出版本号。

### 安装 Helm（Install Helm）

Helm 是 Kubernetes 的「软件包管理器」，用它把 n8n 及配套服务安装进集群：

```shell
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

验证：

```shell
helm version
```

### 设置环境变量（Set environment variables）

```shell
export NAMESPACE=n8n-$(date +%Y%m%d)
echo "Namespace:$NAMESPACE"
```

{% hint style="info" %}
**变量的有效期（Variable persistence）**

这些变量只在当前终端会话里有效。每次打开新终端继续操作前，都要重新运行这一行。
{% endhint %}

## 启动 OpenShift Local（Start OpenShift Local）

### 运行 CRC setup（Run CRC setup）

这一步只需要运行一次。它会配置 KVM 网络、检查系统需求，并下载 CRC 的安装包（约 2.5GB）：

```shell
crc setup
```

这需要好几分钟。如果它报告缺少某些软件包，用 `sudo apt install -y <package-name>` 安装后再重新运行。

### 配置 CRC 内存并启动集群（Configure CRC memory and start the cluster）

CRC 默认给它的虚拟机分配 9GB 内存。n8n 和它的配套服务需要更多空间。启动前先把内存设置为 14GB：

```shell
crc config set memory 14336
```

这一步只需要运行一次，设置会在 `crc stop` / `crc start` 的循环中一直保留。

**推荐做法：** 先把拉取密钥保存到文件里，这样就不用每次都粘贴了：

```shell
# Open the file, paste your pull secret (from earlier), then Ctrl+O to save, Ctrl+X to exit <a href="#open-the-file-paste-your-pull-secret-from-earlier-then-ctrlo-to-save-ctrlx-to-exit" id="open-the-file-paste-your-pull-secret-from-earlier-then-ctrlo-to-save-ctrlx-to-exit"></a>
nano ~/pull-secret.txt

# Restrict permissions so only you can read it <a href="#restrict-permissions-so-only-you-can-read-it" id="restrict-permissions-so-only-you-can-read-it"></a>
chmod 600 ~/pull-secret.txt
```

（上面第一条命令是：打开 `~/pull-secret.txt` 文件，把之前复制的拉取密钥粘贴进去，然后按 `Ctrl+O` 保存、按 `Ctrl+X` 退出。第二条命令是把文件权限设为只有你自己能读。）

使用这个文件启动 CRC：

```shell
crc start --pull-secret-file ~/pull-secret.txt
```

或者也可以直接运行 `crc start`（不带参数），在提示时粘贴密钥。

**这一步需要 10–15 分钟。** 完成后你会看到类似这样的输出：

```
Started the OpenShift cluster.

The server is accessible via web console at:
  https://console-openshift-console.apps-crc.testing

Log in as administrator:
  Username: kubeadmin
  Password: <generated-password>

Log in as user:
  Username: developer
  Password: developer
```

**现在就保存好 `kubeadmin` 的密码。** 下一步会用到。以后随时可以用 `crc console --credentials` 重新查看。

### 验证 DNS 解析（Verify DNS resolution）

在 Ubuntu 上，CRC 会通过 NetworkManager 和 systemd-resolved 自动配置系统的 DNS 解析器，不需要手动编辑 `/etc/hosts` 文件。

验证 API 是否可达：

```shell
sudo ss -tlnp | grep 6443
```

你应该能看到一个绑定在 `127.0.0.1:6443` 上的进程。如果什么都没显示，重新运行 `crc start`。如果 `*.apps-crc.testing` 域名解析不了，请看后面的故障排查章节。

### 配置你的 Shell（Configure your shell）

CRC 把 `oc` 命令行工具打包在虚拟机里。这条命令让它在你的终端里可用：

```shell
eval $(crc oc-env)
```

如果想永久生效（不用每次打开终端都运行一次），执行：

```shell
echo 'eval $(crc oc-env)' >> ~/.bashrc
source ~/.bashrc
```

验证 `oc` 能用：

```shell
oc version
```

### 登录集群（Log in to the cluster）

```shell
oc login -u kubeadmin -p <your-kubeadmin-password> https://api.crc.testing:6443
```

把 `<your-kubeadmin-password>` 替换成[配置 CRC 内存并启动集群](#配置-crc-内存并启动集群)时打印的密码。

验证登录成功：

```shell
oc whoami
```

屏幕上应该打印出 `kubeadmin`。

## 独立部署模式（Standalone deployment）

独立模式把 n8n 作为单个 Pod（容器）运行，使用 SQLite 数据库，**不需要外部数据库或 Redis**。非常适合本地探索 n8n、测试工作流。

### 创建项目（Create the project）

在 OpenShift 里，**项目（project）** 等同于 Kubernetes 的命名空间（namespace）：一个隔离的资源空间：

```shell
oc new-project $NAMESPACE
```

### 授予所需的安全权限（Grant the required security permission）

OpenShift 强制执行严格的安全策略，叫做**安全上下文约束（Security Context Constraints，SCC）**。默认情况下，Pod 不能以任意指定的用户 ID 运行。n8n 的 Helm 图表以用户 ID `1000` 运行，所以你必须显式地允许这一点。

请使用完整的显式写法。简写的 `-z` 参数在某些 OpenShift 版本里会静默失败：

```shell
oc adm policy add-scc-to-user anyuid \
  system:serviceaccount:$NAMESPACE:n8n
```

验证绑定已创建：

```shell
oc get rolebindings -n $NAMESPACE
```

你应该能看到一个引用了 `system:openshift:scc:anyuid` 的绑定。

### 创建所需的密钥（Create the required secret）

```shell
oc create secret generic n8n-secrets \
  --namespace $NAMESPACE \
  --from-literal=N8N_ENCRYPTION_KEY="$(openssl rand -hex 32)" \
  --from-literal=N8N_HOST="localhost" \
  --from-literal=N8N_PORT="5678" \
  --from-literal=N8N_PROTOCOL="http"
```

**立刻备份加密密钥：**

```shell
oc get secret n8n-secrets -n $NAMESPACE \
  -o jsonpath='{.data.N8N_ENCRYPTION_KEY}' | base64 --decode
```

把输出复制下来，存到安全的地方。**如果弄丢了，你工作流里存储的所有凭据将永久无法解密。**

### 创建你的 values 文件（Create your values file）

创建一个名为 `n8n-standalone-values.yaml` 的文件。你可以用 `nano`（一个简单的文本编辑器）：

```shell
nano n8n-standalone-values.yaml
```

粘贴下面的内容，然后按 `Ctrl+O` 保存、按 `Ctrl+X` 退出：

```yaml
# n8n-standalone-values.yaml <a href="#n8n-standalone-valuesyaml" id="n8n-standalone-valuesyaml"></a>
# Single pod, SQLite database, no external dependencies. <a href="#single-pod-sqlite-database-no-external-dependencies" id="single-pod-sqlite-database-no-external-dependencies"></a>

queueMode:
  enabled: false

database:
  type: sqlite
  useExternal: false

redis:
  enabled: false

# PVC stores the SQLite database file. <a href="#pvc-stores-the-sqlite-database-file" id="pvc-stores-the-sqlite-database-file"></a>
persistence:
  enabled: true
  size: 5Gi
  # No storageClassName needed — CRC provides a default storage provisioner.

secretRefs:
  existingSecret: "n8n-secrets"

service:
  type: ClusterIP
  port: 5678

# OpenShift: securityContext must be enabled so the pod runs as UID 1000 (node user) <a href="#openshift-securitycontext-must-be-enabled-so-the-pod-runs-as-uid-1000-node-user" id="openshift-securitycontext-must-be-enabled-so-the-pod-runs-as-uid-1000-node-user"></a>
# with fsGroup 1000 (so the PVC is writable). The anyuid SCC granted above <a href="#with-fsgroup-1000-so-the-pvc-is-writable-the-anyuid-scc-granted-above" id="with-fsgroup-1000-so-the-pvc-is-writable-the-anyuid-scc-granted-above"></a>
# allows this. The seccompProfile line is removed from the chart template in <a href="#allows-this-the-seccompprofile-line-is-removed-from-the-chart-template-in" id="allows-this-the-seccompprofile-line-is-removed-from-the-chart-template-in"></a>
# "Deploy n8n" because OpenShift 4.14+ rejects it even with anyuid. <a href="#deploy-n8n-because-openshift-414-rejects-it-even-with-anyuid" id="deploy-n8n-because-openshift-414-rejects-it-even-with-anyuid"></a>
securityContext:
  enabled: true

resources:
  main:
    requests:
      cpu: 100m
      memory: 256Mi
    limits:
      cpu: "1"
      memory: 1Gi

config:
  timezone: UTC
```

### 部署 n8n（Deploy n8n）

n8n 的 Helm 图表在 Pod 规格里硬编码了 `seccompProfile: RuntimeDefault`。OpenShift 4.14+ 会把它转换成一条已弃用的 alpha 注解，即使授予了 `anyuid` SCC 也会在准入时被拒绝。解决办法是：把图表下载到本地，删掉那两行，再从修补后的副本安装。

**下载并修补图表：**

```shell
helm pull oci://ghcr.io/n8n-io/n8n-helm-chart/n8n --version 1.0.3 --untar
sed -i '/seccompProfile:/d; /type: RuntimeDefault/d' ~/n8n/templates/deployment-main.yaml

# Confirm the lines are gone (should return no output) <a href="#confirm-the-lines-are-gone-should-return-no-output" id="confirm-the-lines-are-gone-should-return-no-output"></a>
grep -n "seccomp\|RuntimeDefault" ~/n8n/templates/deployment-main.yaml
```

（说明：`helm pull` 下载并解压图表；`sed -i` 删除包含 `seccompProfile:` 和 `type: RuntimeDefault` 的两行；最后一条 `grep` 用来确认那两行已经没了——如果没有输出，就说明删干净了。）

**从修补后的图表安装：**

```shell
helm install n8n ~/n8n/ \
  --namespace $NAMESPACE \
  --values n8n-standalone-values.yaml \
  --wait \
  --timeout 10m
```

### 用端口转发访问 n8n（Access n8n using port forward）

OpenShift 的 Route（路由）需要主机名，对本地独立访问来说有点复杂。用端口转发（port-forward）更简单：

```shell
oc port-forward service/n8n-main --namespace $NAMESPACE 5678:5678
```

让这个命令保持运行，然后打开浏览器访问：

```
http://localhost:5678
```

n8n 会提示你创建一个管理员账号。

{% hint style="info" %}
**停止隧道**

按 `Ctrl+C` 停止端口转发。之后想再访问 n8n，重新运行上面的 `port-forward` 命令即可。
{% endhint %}

### 检查部署状态（Check deployment status）

```shell
oc get pods -n $NAMESPACE
```

预期输出（类似这样）：

```
NAME                       READY   STATUS    RESTARTS   AGE
n8n-main-7d9f8b-xxxx       1/1     Running   0          3m
```

**独立部署完成。**

## 多实例队列模式（Multi-instance queue mode）

多实例队列模式运行多个 n8n Pod，共享一个数据库、消息队列和对象存储。它需要 [n8n Enterprise（企业版）许可证](https://n8n.io/pricing/)。

本教程不使用 AWS 的托管服务，而是用集群内的对应组件，模拟你在本地或客户现场的 OpenShift 环境：

| AWS 服务 | 本地对应组件 |
| --- | --- |
| RDS PostgreSQL（AWS 托管数据库） | PostgreSQL（Bitnami Helm 图表） |
| ElastiCache Redis（AWS 托管缓存） | Redis（Bitnami Helm 图表） |
| S3（AWS 对象存储） | MinIO（兼容 S3，Bitnami Helm 图表） |

### 安装集群内服务（Install in-cluster services）

#### 创建项目并添加 Bitnami Helm 仓库（Create the Project and add Bitnami Helm repo）

```shell
oc new-project $NAMESPACE
```

添加 Bitnami 图表仓库（只需要做一次）：

```shell
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
```

#### 安装 PostgreSQL（Install PostgreSQL）

在下面的命令里，把 `YourStrongPassword123` 替换成一个合适的高强度密码。

```shell
helm install postgresql bitnami/postgresql \
  --namespace $NAMESPACE \
  --set auth.username=n8n \
  --set auth.password='YourStrongPassword123' \
  --set auth.database=n8n_enterprise \
  --set global.compatibility.openshift.adaptSecurityContext=auto \
  --wait
```

{% hint style="info" %}
**这个参数的含义（Flag）**

`global.compatibility.openshift.adaptSecurityContext=auto` 这个参数告诉 Bitnami 让 OpenShift 自动分配正确的用户 ID（避免 SCC 报错）。
{% endhint %}

集群内服务的地址是固定的，请记下这个端点：

```
postgresql.YOUR_NAMESPACE.svc.cluster.local
```

把 `YOUR_NAMESPACE` 替换成你实际的 `$NAMESPACE` 值（例如 `n8n-20260306`）。

#### 安装 Redis（Install Redis）

```shell
helm install redis bitnami/redis \
  --namespace $NAMESPACE \
  --set auth.enabled=false \
  --set architecture=standalone \
  --set global.compatibility.openshift.adaptSecurityContext=auto \
  --wait
```

Redis 端点：`redis-master.$NAMESPACE.svc.cluster.local`

#### 安装 MinIO（兼容 S3 的对象存储）（Install MinIO (S3-compatible storage)）

在下面的命令里，把 `MinioStrongPassword123` 替换成一个合适的高强度密码。

```shell
helm install minio bitnami/minio \
  --namespace $NAMESPACE \
  --set auth.rootUser=minioadmin \
  --set auth.rootPassword='MinioStrongPassword123' \
  --set global.compatibility.openshift.adaptSecurityContext=auto \
  --wait
```

MinIO 端点：`http://minio:9000`（在同一个命名空间内，直接用服务名就可以）

#### 在 MinIO 里创建 n8n 存储桶（Create the n8n storage bucket in MinIO）

n8n 使用存储桶之前，需要先在 MinIO 里创建好。用 MinIO 的 Web 控制台操作：

**打开 MinIO 控制台：**

```shell
oc port-forward svc/minio 9001:9001 -n $NAMESPACE
```

让这个命令保持运行，然后打开浏览器访问 `http://localhost:9001`。

用以下信息登录：
- **用户名：** `minioadmin`
- **密码：** `MinioStrongPassword123`

在控制台里：
1. 点击左侧边栏的 **Buckets（存储桶）** → **Create Bucket（创建存储桶）**
2. **Bucket Name（存储桶名称）：** `n8n-data`
3. 点击 **Create Bucket（创建存储桶）**

回到终端，按 `Ctrl+C` 停止端口转发。

### 部署 n8n（Deploy n8n）

#### 为 n8n 授予 SCC（Grant SCC for n8n）

```shell
oc adm policy add-scc-to-user anyuid \
  system:serviceaccount:$NAMESPACE:n8n-enterprise
```

运行 `oc get rolebindings -n $NAMESPACE` 验证能看到 `system:openshift:scc:anyuid` 的绑定。

#### 创建所需密钥（Create required secrets）

```shell
# Core n8n secrets <a href="#core-n8n-secrets" id="core-n8n-secrets"></a>
oc create secret generic n8n-enterprise-secrets \
  --namespace $NAMESPACE \
  --from-literal=N8N_ENCRYPTION_KEY="$(openssl rand -hex 32)" \
  --from-literal=N8N_HOST="localhost" \
  --from-literal=N8N_PORT="5678" \
  --from-literal=N8N_PROTOCOL="http"
```

**立刻备份加密密钥：**

```shell
oc get secret n8n-enterprise-secrets -n $NAMESPACE \
  -o jsonpath='{.data.N8N_ENCRYPTION_KEY}' | base64 --decode
```

把这个值存到安全的地方。

在下面的命令里，把 `YourStrongPassword123` 和 `MinioStrongPassword123` 替换成前面步骤里设置的密码。

```shell
# Database password (must match what you set when installing PostgreSQL) <a href="#database-password-must-match-what-you-set-when-installing-postgresql" id="database-password-must-match-what-you-set-when-installing-postgresql"></a>
oc create secret generic n8n-enterprise-db-secret \
  --namespace $NAMESPACE \
  --from-literal=password='YourStrongPassword123'

# MinIO credentials <a href="#minio-credentials" id="minio-credentials"></a>
oc create secret generic n8n-minio-secret \
  --namespace $NAMESPACE \
  --from-literal=root-password='MinioStrongPassword123'
```

#### 创建 values 文件（Create values file）

创建 `n8n-multimain-ocp-values.yaml`。把标记了 `# <-- REPLACE` 的 **3 处占位值** 替换掉：

```shell
nano n8n-multimain-ocp-values.yaml
```

```yaml
# n8n-multimain-ocp-values.yaml <a href="#n8n-multimain-ocp-valuesyaml" id="n8n-multimain-ocp-valuesyaml"></a>
# Multi-instance queue mode for OpenShift Local (CRC). <a href="#multi-instance-queue-mode-for-openshift-local-crc" id="multi-instance-queue-mode-for-openshift-local-crc"></a>
# Uses in-cluster PostgreSQL, Redis, and MinIO instead of AWS services. <a href="#uses-in-cluster-postgresql-redis-and-minio-instead-of-aws-services" id="uses-in-cluster-postgresql-redis-and-minio-instead-of-aws-services"></a>
# Requires Enterprise license. <a href="#requires-enterprise-license" id="requires-enterprise-license"></a>

# --- Enterprise license --- <a href="#enterprise-license" id="enterprise-license"></a>
license:
  enabled: true
  activationKey: "your-enterprise-license-key-here"  # <-- REPLACE

# --- Multi-main: 2 replicas (reduced for local resources) --- <a href="#multi-main-2-replicas-reduced-for-local-resources" id="multi-main-2-replicas-reduced-for-local-resources"></a>
multiMain:
  enabled: true
  replicas: 2

# --- Queue mode: 2 worker pods --- <a href="#queue-mode-2-worker-pods" id="queue-mode-2-worker-pods"></a>
queueMode:
  enabled: true
  workerReplicaCount: 2
  workerConcurrency: 5

# --- Webhook processors --- <a href="#webhook-processors" id="webhook-processors"></a>
webhookProcessor:
  enabled: true
  replicaCount: 1
  disableProductionWebhooksOnMainProcess: true

# --- PostgreSQL (in-cluster) --- <a href="#postgresql-in-cluster" id="postgresql-in-cluster"></a>
database:
  type: postgresdb
  useExternal: true
  host: "postgresql.YOUR_NAMESPACE.svc.cluster.local"   # <-- REPLACE YOUR_NAMESPACE
  port: 5432
  database: n8n_enterprise
  schema: "public"
  user: n8n
  passwordSecret:
    name: "n8n-enterprise-db-secret"
    key: "password"

# --- Redis (in-cluster, no TLS) --- <a href="#redis-in-cluster-no-tls" id="redis-in-cluster-no-tls"></a>
redis:
  enabled: true
  useExternal: true
  host: "redis-master.YOUR_NAMESPACE.svc.cluster.local"  # <-- REPLACE YOUR_NAMESPACE
  port: 6379
  tls: false

# --- MinIO (S3-compatible, in-cluster) --- <a href="#minio-s3-compatible-in-cluster" id="minio-s3-compatible-in-cluster"></a>
s3:
  enabled: true
  bucket:
    name: "n8n-data"
    region: "us-east-1"
  host: "http://minio:9000"
  auth:
    autoDetect: false
    accessKeyId: "minioadmin"
    secretAccessKeySecret:
      name: "n8n-minio-secret"
      key: "root-password"
  storage:
    mode: "s3"
    availableModes: "filesystem,s3"
  forcePathStyle: true

# --- Service account --- <a href="#service-account" id="service-account"></a>
serviceAccount:
  create: true
  name: n8n
```

保存并退出 nano（按 `Ctrl+O`，再按 `Ctrl+X`）。

**部署之前**，把两个 `YOUR_NAMESPACE` 占位符替换成你实际的命名空间值：

```shell
# Check your namespace value <a href="#check-your-namespace-value" id="check-your-namespace-value"></a>
echo $NAMESPACE

# Replace in the file (this edits it automatically) <a href="#replace-in-the-file-this-edits-it-automatically" id="replace-in-the-file-this-edits-it-automatically"></a>
sed -i "s/YOUR_NAMESPACE/$NAMESPACE/g" n8n-multimain-ocp-values.yaml
```

验证替换结果：

```shell
grep "svc.cluster.local" n8n-multimain-ocp-values.yaml
```

两行都应该显示你实际的命名空间名，而不是 `YOUR_NAMESPACE`。

#### 部署 n8n（Deploy n8n）

如果你之前没有修补过图表，现在就下载并修补：

```shell
helm pull oci://ghcr.io/n8n-io/n8n-helm-chart/n8n --version 1.0.3 --untar
sed -i '/seccompProfile:/d; /type: RuntimeDefault/d' ~/n8n/templates/deployment-main.yaml
grep -n "seccomp\|RuntimeDefault" ~/n8n/templates/deployment-main.yaml  # should return nothing
```

（最后一条命令的注释 `# should return nothing` 意思是：如果没有输出，就说明删干净了。）

从修补后的图表安装：

```shell
helm install n8n ~/n8n/ \
  --namespace $NAMESPACE \
  --values n8n-multimain-ocp-values.yaml \
  --wait \
  --timeout 15m
```

#### 创建外部访问路由（Create a route for external access）

在 OpenShift 里，**Route（路由）** 把服务暴露给外部世界。它相当于 Kubernetes 的 Ingress 或 LoadBalancer，而且不需要额外安装控制器：

```shell
oc expose svc/n8n-main -n $NAMESPACE
```

获取 URL：

```shell
export ROUTE=$(oc get route n8n-main -n $NAMESPACE -o jsonpath='{.spec.host}')
echo "n8n URL: http://$ROUTE"
```

URL 会长这样：`http://n8n-main-n8n-20260306.apps-crc.testing`

#### 更新主机密钥（Update the host secret）

n8n 需要知道它的公开 URL。用 Route 的主机名更新密钥，然后重启 Pod：

```shell
ENCRYPTION_KEY=$(oc get secret n8n-enterprise-secrets -n $NAMESPACE \
  -o jsonpath='{.data.N8N_ENCRYPTION_KEY}' | base64 --decode)

oc create secret generic n8n-enterprise-secrets \
  --namespace $NAMESPACE \
  --from-literal=N8N_ENCRYPTION_KEY="$ENCRYPTION_KEY" \
  --from-literal=N8N_HOST="$ROUTE" \
  --from-literal=N8N_PORT="5678" \
  --from-literal=N8N_PROTOCOL="http" \
  --dry-run=client -o yaml | oc apply -f -

oc rollout restart deployment -n $NAMESPACE
```

等待滚动更新完成：

```shell
oc rollout status deployment/n8n-main -n $NAMESPACE
```

#### 确认所有 Pod 都在运行（Verify all pods are running）

```shell
oc get pods -n $NAMESPACE
```

预期输出（全部 `Running` 状态）：

```
NAME                                    READY   STATUS    RESTARTS   AGE
n8n-main-xxxx-aaaa                      1/1     Running   0          5m
n8n-main-xxxx-bbbb                      1/1     Running   0          5m
n8n-worker-xxxx-aaaa                    1/1     Running   0          5m
n8n-worker-xxxx-bbbb                    1/1     Running   0          5m
n8n-webhook-processor-xxxx-aaaa         1/1     Running   0          5m
postgresql-0                            1/1     Running   0          15m
redis-master-0                          1/1     Running   0          15m
minio-xxxx-xxxx                         1/1     Running   0          15m
```

在浏览器里打开上面打印的 URL。

**多实例部署完成。**

## 更新 n8n（Updating n8n）

要修改配置或升级图表版本，先把新版本的图表下载下来重新修补，然后再升级：

```shell
# Remove the old local chart copy <a href="#remove-the-old-local-chart-copy" id="remove-the-old-local-chart-copy"></a>
rm -rf ~/n8n/

# Pull and patch the new version <a href="#pull-and-patch-the-new-version" id="pull-and-patch-the-new-version"></a>
helm pull oci://ghcr.io/n8n-io/n8n-helm-chart/n8n --version <new-version> --untar
sed -i '/seccompProfile:/d; /type: RuntimeDefault/d' ~/n8n/templates/deployment-main.yaml

# Standalone <a href="#standalone" id="standalone"></a>
helm upgrade n8n ~/n8n/ \
  --namespace $NAMESPACE \
  --values n8n-standalone-values.yaml

# Multi-instance <a href="#multi-instance" id="multi-instance"></a>
helm upgrade n8n ~/n8n/ \
  --namespace $NAMESPACE \
  --values n8n-multimain-ocp-values.yaml
```

（把 `<new-version>` 替换成你想升级到的新版本号。`rm -rf ~/n8n/` 是删除旧的本地图表副本；之后根据你的部署模式，选择 Standalone 或 Multi-instance 对应的 `helm upgrade` 命令执行。）

## 停止和恢复 CRC（Stopping and resuming CRC）

CRC 不需要每次会话之间删除。你可以随时停止再重启：

```shell
# Stop the cluster (saves state) <a href="#stop-the-cluster-saves-state" id="stop-the-cluster-saves-state"></a>
crc stop

# Start it again later <a href="#start-it-again-later" id="start-it-again-later"></a>
crc start
```

（`crc stop` 会保存集群状态；想再次使用时运行 `crc start` 恢复。）

重启之后，重新执行：

```shell
eval $(crc oc-env)
export NAMESPACE=n8n-YYYYMMDD   # use your original date
oc login -u kubeadmin -p <password> https://api.crc.testing:6443
```

（把 `YYYYMMDD` 换成你最初部署时用的日期，`<password>` 换成你的 kubeadmin 密码。）

## 故障排查（Troubleshooting）

### `crc setup` 报错 "libvirt not found"（`crc setup` fails with "libvirt not found"）

```shell
sudo apt install -y qemu-kvm libvirt-daemon-system libvirt-clients
sudo systemctl start libvirtd
```

然后重新运行 `crc setup`。

### `crc start` 报错 "insufficient memory"（内存不足）（`crc start` fails with "insufficient memory"）

CRC 至少需要 9GB 可用内存。关闭其他应用程序再试。如果你[按教程配置了 CRC 内存](#配置-crc-内存并启动集群)，CRC 会使用 14GB。

### n8n Pod 卡在 `Pending` 或一直报 SCC 错误（n8n pod stuck in `Pending` or never created SCC error）

查看事件里的错误信息：

```shell
oc get events -n $NAMESPACE --sort-by='.lastTimestamp' | tail -20
```

如果你看到 `unable to validate against any security context constraint`（无法通过任何安全上下文约束的校验）或 `seccomp may not be set`（seccomp 可能未设置），说明图表的硬编码 `seccompProfile: RuntimeDefault` 被拒绝了。OpenShift 4.14+ 会把它转换成一条已弃用的 alpha 注解，即使授予了 `anyuid` SCC，准入时仍会拒绝。

**1. 用显式写法授予 anyuid**（`-z` 简写可能会静默失败）：

```shell
# For standalone <a href="#for-standalone" id="for-standalone"></a>
oc adm policy add-scc-to-user anyuid \
  system:serviceaccount:$NAMESPACE:n8n

# For multi-instance <a href="#for-multi-instance" id="for-multi-instance"></a>
oc adm policy add-scc-to-user anyuid \
  system:serviceaccount:$NAMESPACE:n8n-enterprise
```

验证：运行 `oc get rolebindings -n $NAMESPACE`。你应该能看到 `system:openshift:scc:anyuid` 的绑定。

**2. 把图表下载到本地，删除 `seccompProfile` 相关行：**

```shell
helm pull oci://ghcr.io/n8n-io/n8n-helm-chart/n8n --version 1.0.3 --untar
sed -i '/seccompProfile:/d; /type: RuntimeDefault/d' ~/n8n/templates/deployment-main.yaml

# Confirm they're gone (should return no output) <a href="#confirm-theyre-gone-should-return-no-output" id="confirm-theyre-gone-should-return-no-output"></a>
grep -n "seccomp\|RuntimeDefault" ~/n8n/templates/deployment-main.yaml
```

**3. 卸载并从修补后的图表重新安装：**

```shell
helm uninstall n8n -n $NAMESPACE
helm install n8n ~/n8n/ \
  --namespace $NAMESPACE \
  --values n8n-standalone-values.yaml \
  --wait \
  --timeout 10m
```

### 路由 URL 返回 "Application not available"（应用不可用）（Route URL returns "Application not available"）

Pod 可能还在启动中。检查：

```shell
oc get pods -n $NAMESPACE
oc rollout status deployment/n8n-main -n $NAMESPACE
```

同时确认 Route 存在：

```shell
oc get route -n $NAMESPACE
```

### n8n Pod 卡在 `Pending` 且提示 `Insufficient memory`（内存不足）（n8n pod stuck in `Pending` with `Insufficient memory`）

CRC 节点没有足够的空闲内存来调度这个 Pod。

**解决办法：** 增大 CRC 虚拟机的内存并重启：

```shell
crc stop
crc config set memory 14336
crc start
```

CRC 重启后，Pod 应该会自动调度。如果几分钟后 Pod 仍然 Pending，删除它强制重新调度：

```shell
oc delete pod -n $NAMESPACE -l app.kubernetes.io/component=main
```

如果你的电脑拿不出 14GB，也可以调低 Pod 在 `n8n-standalone-values.yaml` 里的内存请求：

```yaml
resources:
  main:
    requests:
      memory: 256Mi
```

然后升级：`helm upgrade n8n ~/n8n/ -n $NAMESPACE -f n8n-standalone-values.yaml`

### DNS 解析不了 `.apps-crc.testing` 或 `api.crc.testing`（DNS not resolving `.apps-crc.testing` or `api.crc.testing`）

在 Ubuntu 上，CRC 会自动配置 DNS。如果失败，重启 NetworkManager：

```shell
sudo systemctl restart NetworkManager
```

如果还是不行，手动添加条目（CRC 通过 `127.0.0.1` 转发流量）：

```shell
sudo tee -a /etc/hosts <<EOF
127.0.0.1 api.crc.testing
127.0.0.1 console-openshift-console.apps-crc.testing
127.0.0.1 oauth-openshift.apps-crc.testing
127.0.0.1 default-route-openshift-image-registry.apps-crc.testing
EOF
```

{% hint style="info" %}
**子域名（Subdomains）**

在多实例部分暴露 Route 时，会创建新的 `*.apps-crc.testing` 子域名。如果浏览器访问不了它们，把它们也添加到 `/etc/hosts` 里，指向 `127.0.0.1`。
{% endhint %}

### n8n Pod 因写 `/home/node/.n8n/` 报 `EACCES: permission denied`（权限被拒绝）崩溃（n8n pod crashes with `EACCES: permission denied` writing to `/home/node/.n8n/`）

这意味着 Pod 是以 OpenShift 随机分配的 UID 运行的，而不是 UID 1000（n8n 镜像期望的 `node` 用户）。这种情况发生在：values 里设置了 `securityContext.enabled: false`，又没有指定 `runAsUser: 1000` 和 `fsGroup: 1000` 时，OpenShift 会分配一个随机 UID，它没有权限写入 PVC。

**解决办法：** 确保 values 文件里设置了 `securityContext.enabled: true`，并且图表已经修补、删除了 `seccompProfile`（见上面的 SCC 错误章节）。两者必须同时满足。

### 查看 Pod 日志（View pod logs）

```shell
# Main process <a href="#main-process" id="main-process"></a>
oc logs -n $NAMESPACE -l app.kubernetes.io/component=main --tail=50

# Workers <a href="#workers" id="workers"></a>
oc logs -n $NAMESPACE -l app.kubernetes.io/component=worker --tail=50

# Webhook processors <a href="#webhook-processors" id="webhook-processors"></a>
oc logs -n $NAMESPACE -l app.kubernetes.io/component=webhook-processor --tail=50
```

（`--tail=50` 表示只显示最后 50 行日志。三条命令分别查看主进程、工作进程和 webhook 处理进程的日志。）

### 命名空间里的所有事件（All events in the namespace）

```shell
oc get events -n $NAMESPACE --sort-by='.lastTimestamp'
```

## 快速参考（Quick Reference）

### 重新打开终端后重新导出变量（Re-export variables after reopening terminal）

```shell
eval $(crc oc-env)
export NAMESPACE=n8n-YYYYMMDD   # use the date from your original deployment
oc login -u kubeadmin -p <password> https://api.crc.testing:6443
```

（把 `YYYYMMDD` 换成你最初部署时用的日期，`<password>` 换成你的 kubeadmin 密码。）

### 查看集群状态（Check cluster status）

```shell
crc status
```

### 打开 OpenShift Web 控制台（Open the OpenShift web console）

```shell
crc console
```

用 `kubeadmin` / 你的密码登录，就能看到所有正在运行内容的图形化界面。

### 需要保存的信息（Things to save）

| 项目 | 为什么重要 |
| --- | --- |
| `kubeadmin` 密码 | 登录集群需要 |
| n8n 加密密钥 | 弄丢 = 所有已存凭据永久无法读取 |
| `n8n-standalone-values.yaml` | `helm upgrade` 升级时必须用 |
| `n8n-multimain-ocp-values.yaml` | `helm upgrade` 升级时必须用 |
| MinIO root 密码 | 访问 MinIO 控制台需要 |
| PostgreSQL 密码 | 数据库访问需要 |

## 下一步（Next steps）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GtC2RL8itCPuNiwv5UUW/" %}
