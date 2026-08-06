---
contentType: tutorial
description: 使用 Docker Compose 安装并运行 n8n
nodeTitle: 使用 Docker Compose（Use Docker Compose）
originalFilePath: hosting/installation/server-setups/docker-compose.md
originalUrl: 'https://docs.n8n.io/hosting/installation/server-setups/docker-compose'
url: >-
  https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/use-docker-compose
layout:
  description:
    visible: false
---

# Docker-Compose（在 Linux 服务器上用 Docker Compose 运行 n8n）

这些说明教你如何在 Linux 服务器上用 Docker Compose 运行 n8n。

如果你已经装好了 Docker 和 Docker-Compose，可以直接从[第 3 步](#3-dns-设置)开始。

你可以在 [n8n-hosting 仓库](https://github.com/n8n-io/n8n-hosting) 里找到适用于各种架构（architecture）的 Docker Compose 配置。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/YLv7Cqg70tj1alDgktSX/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

{% hint style="info" %}
**国内部署提示**：国内网络环境下，如果拉取 `docker.n8n.io/n8nio/n8n` 或 `traefik` 镜像很慢或失败，可以给 Docker 配置国内镜像加速器（例如阿里云、腾讯云加速器），或者配置代理后再执行 `docker compose` 相关命令。另外，本篇用 Traefik 自动申请 Let's Encrypt 证书，需要你的域名解析能正常访问 Let's Encrypt 的验证服务器；如果申请证书失败，可以先检查服务器是否配置了代理/防火墙放行 80 和 443 端口。命令本身保持不变。
{% endhint %}

## 1. 安装 Docker 和 Docker Compose（Install Docker and Docker Compose）

安装 Docker 和 Docker Compose 的方法取决于你的 Linux 发行版。下面是各组件对应的官方安装说明：

* [Docker Engine（Docker 引擎）](https://docs.docker.com/engine/install/)
* [Docker Compose（Docker 容器编排）](https://docs.docker.com/compose/install/linux/)

按照安装说明装好后，输入下面的命令验证 Docker 和 Docker Compose 是否可用：

```shell
docker --version
docker compose version
```

如果两条命令都能打印出版本号，就说明安装成功。

## 2. 可选：非 root 用户访问（Optional: Non-root user access）

你可以选择性地授权当前用户在不加 `sudo` 的情况下运行 Docker 命令。

为当前登录的用户授权（前提是它有 `sudo` 权限），运行：

```shell
sudo usermod -aG docker ${USER}
# Register the `docker` group membership with current session without changing your primary group <a href="#register-the-docker-group-membership-with-current-session-without-changing-your-primary-group" id="register-the-docker-group-membership-with-current-session-without-changing-your-primary-group"></a>
exec sg docker newgrp
```

（说明：第一条命令把当前用户加入 `docker` 组；第二条命令让当前会话立即识别新的组权限，而不改变你的主组。这样之后就不用每次敲 `sudo` 了。）

为其他用户授权，输入下面的命令，把 `<USER_TO_RUN_DOCKER>` 替换成相应的用户名：

```shell
sudo usermod -aG docker <USER_TO_RUN_DOCKER>
```

该用户已有的任何终端会话，都需要运行一次 `exec sg docker newgrp` 才能获得新的组权限。

输入下面的命令，验证当前会话是否已经识别 `docker` 组：

```shell
groups
```

输出里应该能看到 `docker`。

## 3. DNS 设置（DNS setup）

要把 n8n 托管到公网或局域网上，请为它创建一个专门的子域名，指向你的服务器。

添加一条 A 记录，把子域名解析到服务器：

| 记录类型（Record type） | 名称（Name）                              | 目标（Destination）                |
|-------------|-----------------------------------|----------------------------|
| A           | `n8n`（或你想要的任意子域名） | `<your_server_IP_address>`（你的服务器 IP 地址） |

{% hint style="info" %}
**小白提示**：DNS 记录可以理解为「域名登记表」。添加 A 记录后，别人访问 `n8n.你的域名.com` 时，就会被引导到你的服务器 IP。生效时间通常在几分钟到几小时不等（取决于 DNS 服务商）。
{% endhint %}

## 4. 创建 `.env` 文件（Create an `.env` file）

创建一个项目目录，用来存放 n8n 的环境配置和 Docker Compose 文件，然后进入该目录：

```shell
mkdir n8n-compose
cd n8n-compose
```

在 `n8n-compose` 目录里，创建一个 `.env` 文件来自定义你的 n8n 实例信息。把它改成你自己的信息：

```shell title=".env file"
# DOMAIN_NAME and SUBDOMAIN together determine where n8n will be reachable from <a href="#domainname-and-subdomain-together-determine-where-n8n-will-be-reachable-from" id="domainname-and-subdomain-together-determine-where-n8n-will-be-reachable-from"></a>
# The top level domain to serve from <a href="#the-top-level-domain-to-serve-from" id="the-top-level-domain-to-serve-from"></a>
DOMAIN_NAME=example.com

# The subdomain to serve from <a href="#the-subdomain-to-serve-from" id="the-subdomain-to-serve-from"></a>
SUBDOMAIN=n8n

# The above example serve n8n at: https://n8n.example.com <a href="#the-above-example-serve-n8n-at-httpsn8nexamplecom" id="the-above-example-serve-n8n-at-httpsn8nexamplecom"></a>

# Optional timezone to set which gets used by Cron and other scheduling nodes <a href="#optional-timezone-to-set-which-gets-used-by-cron-and-other-scheduling-nodes" id="optional-timezone-to-set-which-gets-used-by-cron-and-other-scheduling-nodes"></a>
# New York is the default value if not set <a href="#new-york-is-the-default-value-if-not-set" id="new-york-is-the-default-value-if-not-set"></a>
GENERIC_TIMEZONE=Europe/Berlin

# The email address to use for the TLS/SSL certificate creation <a href="#the-email-address-to-use-for-the-tlsssl-certificate-creation" id="the-email-address-to-use-for-the-tlsssl-certificate-creation"></a>
SSL_EMAIL=user@example.com
```

（逐行解释：`DOMAIN_NAME` 是你要使用的顶级域名，`SUBDOMAIN` 是子域名，两者组合起来就是 n8n 的访问地址，例如 `https://n8n.example.com`；`GENERIC_TIMEZONE` 是可选时区设置，会被 Cron 和其他定时类节点使用，如果不设置，默认是纽约时区（New York），国内用户建议改成 `Asia/Shanghai`；`SSL_EMAIL` 是申请 TLS/SSL 证书时要用的邮箱地址。）

## 5. 创建本地文件目录（Create local files directory）

在你的项目目录里，创建一个名为 `local-files` 的目录，用于在 n8n 实例和宿主机之间共享文件（例如配合 [Read/Write Files from Disk 节点（读写磁盘文件节点）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.readwritefile) 使用）：

```shell
mkdir local-files
```

下面的 Docker Compose 文件其实可以自动创建这个目录，但手动创建可以确保它以正确的所有者和权限生成。

## 6. 创建 Docker Compose 文件（Create Docker Compose file）

创建一个 `compose.yaml` 文件。把下面的内容粘贴进去：

```yaml title="compose.yaml file"
services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https  
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
      - N8N_RESTRICT_FILE_ACCESS_TO=/files
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:
```

上面的 Docker Compose 文件配置了两个容器：一个运行 n8n，另一个运行 [traefik](https://github.com/traefik/traefik)（一个应用代理，负责管理 TLS/SSL 证书并处理路由转发）。

它还创建并挂载了两个 [Docker 卷（Volumes）](https://docs.docker.com/engine/storage/volumes/)，并挂载了你前面创建的 `local-files` 目录：

| 名称（Name）            | 类型（Type）                                                        | 容器挂载点（Container mount）   | 说明（Description）                                                                                                                         |
|-----------------|-------------------------------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `n8n_data`      | [卷（Volume）](https://docs.docker.com/engine/storage/volumes/)   | `/home/node/.n8n` | n8n 保存 SQLite 数据库文件和加密密钥的地方。                                                                        |
| `traefik_data`  | [卷（Volume）](https://docs.docker.com/engine/storage/volumes/)   | `/letsencrypt`    | traefik 保存 TLS/SSL 证书数据的地方。                                                                                       |
| `./local-files` | [绑定挂载（Bind）](https://docs.docker.com/engine/storage/bind-mounts/) | `/files`          | n8n 实例与宿主机共享的本地目录。在 n8n 里，使用 `/files` 路径读写这个目录。 |

{% hint style="info" %}
**小白提示**：文件里 `n8n` 服务只把 5678 端口绑定到了本机的 `127.0.0.1`（也就是只有服务器本机能直接访问），对外访问全部走 traefik 容器（80/443 端口）。这样外界只能通过 HTTPS 访问，n8n 端口不会直接暴露在公网，更安全。`N8N_RESTRICT_FILE_ACCESS_TO=/files` 把 n8n 读写文件的权限限制在 `/files` 目录内。
{% endhint %}

## 7. 启动 Docker Compose（Start Docker Compose）

输入下面的命令启动 n8n：

```shell
sudo docker compose up -d
```

要停止容器，输入：

```shell
sudo docker compose stop
```

{% hint style="info" %}
**小白提示**：`up -d` 中的 `-d` 表示「后台运行」。首次启动会拉取镜像并申请证书，可能需要几分钟。查看运行状态用 `sudo docker compose ps`，查看日志用 `sudo docker compose logs -f`。
{% endhint %}

## 8. 完成（Done）

现在你可以用 `.env` 文件里定义的「子域名 + 域名」组合访问 n8n 了。上面的示例会得到 `https://n8n.example.com`。

注意：n8n 只能通过安全的 HTTPS 访问，不能用明文 HTTP。

如果你无法访问实例，请检查服务器的防火墙设置和 DNS 配置。

## 下一步（Next steps）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GtC2RL8itCPuNiwv5UUW/" %}
