---
contentType: tutorial
nodeTitle: 部署到 DigitalOcean（Deploy to Digital Ocean）
originalFilePath: hosting/installation/server-setups/digital-ocean.md
originalUrl: 'https://docs.n8n.io/hosting/installation/server-setups/digital-ocean'
url: >-
  https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-digital-ocean
layout:
  description:
    visible: false
---

# 在 DigitalOcean 上部署 n8n

本教程教你在 DigitalOcean 的一台 Droplet（云服务器）上自托管 n8n。方案用到了两个组件：

* [Caddy](https://caddyserver.com)（反向代理）：让外部网络可以访问你的 Droplet。Caddy 还会自动帮你创建和管理 SSL / TLS 证书（也就是 HTTPS 加密用的证书），省去手动申请证书的麻烦。
* [Docker Compose](https://docs.docker.com/compose/)（容器编排工具）：用来创建和定义应用的各个组件，以及它们之间如何配合工作。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/YLv7Cqg70tj1alDgktSX/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

{% hint style="info" %}
**国内部署提示**：DigitalOcean 未在大陆提供节点，访问和支付需要一定的网络条件，建议选择新加坡（Singapore）等亚洲区域以降低延迟。教程里要拉取的 Docker 镜像（`n8nio/n8n` 等）在 Docker Hub 上，国内可以配置镜像加速器或代理后再执行 `docker compose` 相关命令。命令本身保持不变。
{% endhint %}

## 创建 Droplet（Create a Droplet）

1. [登录](https://cloud.digitalocean.com/login) DigitalOcean。
2. 选择要用来托管 Droplet 的项目，或者[新建一个项目](https://docs.digitalocean.com/products/projects/how-to/create/)。
3. 在项目中，从 **Manage（管理）** 菜单选择 **Droplets（云服务器）**。
4. 在 **Marketplace（应用市场）** 标签页里选择 [Docker 镜像](https://marketplace.digitalocean.com/apps/docker)，然后[创建新的 Droplet](https://docs.digitalocean.com/products/droplets/how-to/create/)。

{% hint style="info" %}
**Droplet 资源配置（Droplet resources）**

创建 Droplet 时，DigitalOcean 会让你选择套餐（plan）。对大多数使用场景来说，基础的共享 CPU 套餐（basic shared CPU plan）就足够了，不必一上来就买高配。
{% endhint %}

{% hint style="info" %}
**SSH 密钥还是密码（SSH key or Password）**

DigitalOcean 允许你在 SSH 密钥和密码两种认证方式之间选择。SSH 密钥被认为更安全，推荐优先使用。
{% endhint %}

## 登录 Droplet 并创建新用户（Log in to your Droplet and create new user）

本教程接下来的步骤都需要你用终端通过 SSH 登录 Droplet。更多信息请参考 [How to Connect to Droplets with SSH（如何用 SSH 连接 Droplet）](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/)。

为了安全，建议创建一个普通用户来干活，而不是一直用 root（超级管理员）账号：

1. 先用 root 登录。
2. 创建新用户（把 `<username>` 换成你想用的用户名）：
	```shell
	adduser <username>
	```
3. 按终端里的提示完成用户创建（会让你设置密码等信息）。
4. 给新用户授予管理员权限：
	```shell
	usermod -aG sudo <username>
	```
	这样你就可以在命令前面加 `sudo` 来以超级用户权限运行命令了。
5. 按照这篇教程为新用户配置 SSH： [Add Public Key Authentication（添加公钥认证）](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04#step-four-add-public-key-authentication-recommended)。
6. 退出 Droplet（注销）。
7. 用新用户通过 SSH 重新登录。

## 克隆配置文件仓库（Clone configuration repository）

Docker Compose、n8n 和 Caddy 需要一系列文件夹和配置文件。你可以从 [n8n 官方维护的 n8n-docker-caddy 仓库](https://github.com/n8n-io/n8n-docker-caddy) 克隆到 Droplet 上当前登录用户的主目录（home folder）里。下面的步骤会告诉你该改哪个文件、怎么改。

先克隆仓库：

```shell
git clone https://github.com/n8n-io/n8n-docker-caddy.git
```

然后进入克隆下来的仓库根目录：

```shell
cd n8n-docker-caddy
```

## 默认的文件夹和文件（Default folders and files）

宿主机操作系统（也就是你的 DigitalOcean Droplet）会把两个文件夹复制到 Docker 容器里，让容器能用上它们。这两个文件夹是：

- `caddy_config`：存放 Caddy 的配置文件。
- `local_files`：存放你通过 n8n 上传或添加的文件。

### 创建 Docker 卷（Create Docker volumes）

为了让 Caddy 的缓存（cache）在重启后还能保留、加快下次启动速度，需要创建一个 [Docker 卷（volume）](https://docs.docker.com/storage/volumes/)，这样 Docker 重启后会继续复用这份数据：

```shell
sudo docker volume create caddy_data
```

再为 n8n 的数据创建一个 Docker 卷：

```shell
sudo docker volume create n8n_data
```

{% hint style="info" %}
**小白提示**：Docker 卷（volume）是 Docker 管理的一块「永久存储空间」，它不随容器删除而消失。n8n 的工作流、凭据、历史记录都存在 `n8n_data` 卷里，这是你最重要的数据，千万别删。
{% endhint %}

## 设置 DNS（Set up DNS）

n8n 通常运行在一个子域名下。你需要在你购买域名的服务商那里，为这个子域名创建一条 DNS 记录，把它指向 Droplet 的 IP 地址。具体步骤取决于你的 DNS 服务商，但通常你需要为 n8n 子域名创建一条新的 "A" 记录。DigitalOcean 提供了 [DNS 术语、组件和概念入门指南](https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts) 供参考。

## 开放端口（Open ports）

n8n 是一个 Web 应用，所以 Droplet 需要允许外部访问：80 端口用于非加密流量（HTTP），443 端口用于加密流量（HTTPS）。

在 Droplet 的防火墙里开放这两个端口，运行下面两条命令：

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

把里面的占位域名换成你自己的。如果你按教程把子域名命名为 n8n，那么你的完整域名大致是 `n8n.example.com` 这样的形式。`reverse_proxy` 设置里的 `n8n` 告诉 Caddy 使用 `docker-compose.yml` 文件里定义的那个 n8n 服务：

```text
n8n.<domain>.<suffix> {
    reverse_proxy n8n:5678 {
      flush_interval -1
    }
}
```

如果你用的是 `automate.example.com` 这个域名，你的 `Caddyfile` 大概长这样：

```text
automate.example.com {
    reverse_proxy n8n:5678 {
      flush_interval -1
    }
}
```

{% hint style="info" %}
**小白提示**：`reverse_proxy n8n:5678` 的意思是「把访问我这个域名的流量，转发给 Docker 网络里名叫 `n8n` 的那个容器，端口 5678」。`flush_interval -1` 是一个性能优化选项，让流式响应（比如 AI 工作流的流式输出）不被缓冲。域名里不能用占位符，必须换成真实的、且已经做好 DNS 解析的域名，Caddy 才能成功申请到证书。
{% endhint %}

## 启动 Docker Compose（Start Docker Compose）

用下面这条命令启动 n8n 和 Caddy：

```shell
sudo docker compose up -d
```

首次启动需要拉取镜像、申请证书，可能需要几分钟时间。

{% hint style="info" %}
**小白提示**：`up -d` 中的 `-d` 表示「后台运行」，这样关闭终端后服务也不会停。以后查看运行状态可以用 `sudo docker compose ps`，查看日志可以用 `sudo docker compose logs -f`。
{% endhint %}

## 测试你的环境（Test your setup）

在浏览器中打开前面定义好的子域名 + 域名组成的 URL（例如 `https://n8n.example.com`）。输入之前设置的用户名和密码，就应该能访问 n8n 了。

## 停止 n8n 和 Caddy（Stop n8n and Caddy）

可以用下面这条命令停止 n8n 和 Caddy：

```shell
sudo docker compose stop
```

{% hint style="info" %}
**小白提示**：`stop` 只是暂停容器，数据都还在；想再次启动运行 `sudo docker compose up -d` 即可。注意不要用 `down`（它会连同网络配置一起移除，但卷里的数据仍在）。
{% endhint %}

## 更新（Updating）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/yA5x9FIRtnDGdghFU93g/" %}

## 下一步（Next steps）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GtC2RL8itCPuNiwv5UUW/" %}
