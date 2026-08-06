---
contentType: tutorial
nodeTitle: 部署到 Hetzner（Deploy to Hetzner）
originalFilePath: hosting/installation/server-setups/hetzner.md
originalUrl: 'https://docs.n8n.io/hosting/installation/server-setups/hetzner'
url: >-
  https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-hetzner
layout:
  description:
    visible: false
---

# 在 Hetzner Cloud 上部署 n8n

本教程教你在 Hetzner 云服务器（德国老牌主机商，性价比高）上自托管 n8n。方案用到了两个组件：

* [Caddy](https://caddyserver.com)（反向代理）：让外部网络可以访问你的服务器。Caddy 会自动帮你创建和管理 SSL / TLS 证书（HTTPS 加密证书），省去手动申请证书的麻烦。
* [Docker Compose](https://docs.docker.com/compose/)（容器编排工具）：用来创建和定义应用的各个组件，以及它们之间如何配合工作。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/YLv7Cqg70tj1alDgktSX/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

{% hint style="info" %}
**国内部署提示**：Hetzner 只提供海外区域（德国、美国、新加坡、芬兰、日本等），国内访问速度以新加坡（Singapore）区域为佳，且需要外币信用卡支付。教程里要拉取的 Docker 镜像（`n8nio/n8n` 等）在 Docker Hub 上，国内可以配置镜像加速器或代理后再执行 `docker compose` 相关命令。命令本身保持不变。
{% endhint %}

## 创建服务器（Create a server）

1. [登录](https://console.hetzner.cloud/) Hetzner Cloud Console。
2. 选择要用来托管服务器的项目，或者点击 **+ NEW PROJECT（新建项目）** 创建一个新项目。
3. 在你想要添加服务器的项目卡片上，点击 **+ CREATE SERVER（创建服务器）**。

大多数设置都可以按你的需求调整，但本教程使用 Docker 运行应用，所以在 **Image（镜像）** 部分，从 **APPS（应用）** 标签页里选择 "Docker CE" 镜像。

{% hint style="info" %}
**套餐类型（Type）**

创建服务器时，Hetzner 会让你选择套餐（plan）。对大多数使用场景来说，CPX11 这个类型就足够了，不必一上来就买高配。
{% endhint %}

{% hint style="info" %}
**SSH 密钥（SSH keys）**

Hetzner 允许你在 SSH 和密码两种认证方式之间选择。SSH 更安全。本教程后面的步骤默认你使用的是 SSH。
{% endhint %}

## 登录你的服务器（Log in to your server）

本教程接下来的步骤都需要你用终端通过 SSH 登录服务器。更多信息请参考 [通过 SSH/rsync/BorgBackup 访问](https://docs.hetzner.com/robot/storage-box/access/access-ssh-rsync-borg)。你可以在项目里的服务器列表中找到它的公网 IP。

## 安装 Docker Compose（Install Docker Compose）

Hetzner 的 Docker 应用镜像里没有预装 Docker compose。用下面的命令安装：

```shell
apt update && apt -y upgrade
apt install docker-compose-plugin
```

{% hint style="info" %}
**小白提示**：第一行 `apt update && apt -y upgrade` 是「先刷新软件源列表，再升级所有已安装软件」；第二行 `apt install docker-compose-plugin` 安装 Docker Compose 插件。如果提示权限不足，可以在命令前面加 `sudo`。
{% endhint %}

## 克隆配置文件仓库（Clone configuration repository）

Docker Compose、n8n 和 Caddy 需要一系列文件夹和配置文件。你可以从 [n8n 官方维护的 n8n-docker-caddy 仓库](https://github.com/n8n-io/n8n-docker-caddy) 克隆到服务器的 root 用户主目录里。下面的步骤会告诉你该改哪个文件、怎么改。

先克隆仓库：

```shell
git clone https://github.com/n8n-io/n8n-docker-caddy.git
```

然后进入克隆下来的仓库根目录：

```shell
cd n8n-docker-caddy
```

## 默认的文件夹和文件（Default folders and files）

宿主机操作系统（也就是你的服务器）会把两个文件夹复制到 Docker 容器里，让容器能用上它们。这两个文件夹是：

- `caddy_config`：存放 Caddy 的配置文件。
- `local_files`：存放你通过 n8n 上传或添加的文件。

### 创建 Docker 卷（Create Docker volume）

为了让 Caddy 的缓存在重启后还能保留、加快下次启动速度，需要创建一个 [Docker 卷（volume）](https://docs.docker.com/storage/volumes/)，这样 Docker 重启后会继续复用这份数据：

```shell
docker volume create caddy_data
```

再为 n8n 的数据创建一个 Docker 卷：

```shell
sudo docker volume create n8n_data
```

{% hint style="info" %}
**小白提示**：Docker 卷（volume）是 Docker 管理的一块「永久存储空间」，它不随容器删除而消失。n8n 的工作流、凭据、历史记录都存在 `n8n_data` 卷里，这是你最重要的数据，千万别删。
{% endhint %}

## 设置 DNS（Set up DNS）

n8n 通常运行在一个子域名下。你需要在你购买域名的服务商那里，为这个子域名创建一条 DNS 记录，把它指向服务器的 IP 地址。具体步骤取决于你的 DNS 服务商，但通常你需要为 n8n 子域名创建一条新的 "A" 记录。DigitalOcean 提供了 [DNS 术语、组件和概念入门指南](https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts) 供参考。

## 开放端口（Open ports）

n8n 是一个 Web 应用，所以服务器需要允许外部访问：80 端口用于非加密流量（HTTP），443 端口用于加密流量（HTTPS）。

在服务器的防火墙里开放这两个端口，运行下面两条命令：

```shell
sudo ufw allow 80
sudo ufw allow 443
```

## 配置 n8n（Configure n8n）

n8n 需要设置一些环境变量，把它们传给 Docker 容器里运行的应用。示例 `.env` 文件里有一些占位符，你需要替换成自己的实际值。

用下面这条命令打开文件：

```shell
nano .env
```

文件里带有行内注释，会提示你哪些地方需要修改。

完整的 n8n 环境变量说明请参考[环境变量](../../configure-n8n/basic-configuration/use-environment-variables/README.md)页面。

## Docker Compose 文件（The Docker Compose file）

Docker Compose 文件（`docker-compose.yml`）定义了应用需要的服务，在这个例子里就是 Caddy 和 n8n。

- Caddy 的服务定义：指定它使用的端口，以及要复制到容器里的本地卷。
- n8n 的服务定义：指定它使用的端口、运行 n8n 所需的环境变量（一部分定义在 `.env` 文件里），以及需要复制到容器里的卷。

Docker Compose 文件会自动读取 `.env` 文件里设置的环境变量，所以一般不需要修改它本身。不过想看看内容的话，可以运行：

```shell
nano docker-compose.yml
```

## 配置 Caddy（Configure Caddy）

Caddy 需要知道它要服务哪些域名、对外暴露哪个端口。编辑 `caddy_config` 文件夹里的 `Caddyfile` 文件：

```shell
nano caddy_config/Caddyfile
```

把里面的占位子域名换成你自己的。如果你按教程把子域名命名为 n8n，那么你的完整域名大致是 `n8n.example.com` 这样的形式。`reverse_proxy` 设置里的 `n8n` 告诉 Caddy 使用 `docker-compose.yml` 文件里定义的那个 n8n 服务：

```text
n8n.<domain>.<suffix> {
    reverse_proxy n8n:5678 {
      flush_interval -1
    }
}
```

{% hint style="info" %}
**小白提示**：`reverse_proxy n8n:5678` 的意思是「把访问我这个域名的流量，转发给 Docker 网络里名叫 `n8n` 的那个容器，端口 5678」。`flush_interval -1` 是一个性能优化选项，让流式响应不被缓冲。域名里不能用占位符，必须换成真实的、且已经做好 DNS 解析的域名，Caddy 才能成功申请到证书。
{% endhint %}

## 启动 Docker Compose（Start Docker Compose）

用下面这条命令启动 n8n 和 Caddy：

```shell
docker compose up -d
```

首次启动需要拉取镜像、申请证书，可能需要几分钟时间。

{% hint style="info" %}
**小白提示**：`up -d` 中的 `-d` 表示「后台运行」，这样关闭终端后服务也不会停。以后查看运行状态可以用 `docker compose ps`，查看日志可以用 `docker compose logs -f`。如果提示权限不足，命令前面加 `sudo`。
{% endhint %}

## 测试你的环境（Test your setup）

在浏览器中打开前面定义好的子域名 + 域名组成的 URL（例如 `https://n8n.example.com`）。输入之前设置的用户名和密码，就应该能访问 n8n 了。

## 停止 n8n 和 Caddy（Stop n8n and Caddy）

可以用下面这条命令停止 n8n 和 Caddy：

```shell
sudo docker compose stop
```

{% hint style="info" %}
**小白提示**：`stop` 只是暂停容器，数据都还在；想再次启动运行 `docker compose up -d` 即可。注意不要用 `down`（它会连同网络配置一起移除，但卷里的数据仍在）。
{% endhint %}

## 更新（Updating）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/yA5x9FIRtnDGdghFU93g/" %}

## 下一步（Next steps）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GtC2RL8itCPuNiwv5UUW/" %}
