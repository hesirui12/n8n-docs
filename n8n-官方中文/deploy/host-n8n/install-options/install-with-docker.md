---
contentType: tutorial
nodeTitle: 用 Docker 安装（Install with Docker）
originalFilePath: hosting/installation/docker.md
originalUrl: 'https://docs.n8n.io/hosting/installation/docker'
url: 'https://docs.n8n.io/deploy/host-n8n/install-options/install-with-docker'
layout:
  description:
    visible: false
---

# Docker 安装（Docker Installation）

n8n 官方推荐在大多数自托管场景下使用 [Docker](https://www.docker.com/)。它能提供一个干净、隔离的环境，避免操作系统和工具链之间的兼容性问题，也让数据库和环境变量的管理变得更简单。

你也可以在 Docker 里配合 [Docker Compose](use-a-cloud-provider/use-docker-compose.md) 使用 n8n。你可以在 [n8n-hosting 仓库](https://github.com/n8n-io/n8n-hosting) 找到适用于各种架构的 Docker Compose 配置。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/YLv7Cqg70tj1alDgktSX/" %}

你也可以跟着我们的视频指南一起操作：

{% embed url="https://www.youtube.com/embed/6ET3G7GiqZA?si=mwCKbtyLqNCRc2pa" %}

## 前置条件（Prerequisites）

开始之前，请先安装 Docker：

* [Docker Desktop](https://docs.docker.com/get-docker/) 适用于 Mac、Windows 和 Linux。Docker Desktop 内置了 Docker Engine 和 Docker Compose。
* [Docker Engine](https://docs.docker.com/engine/install/) 和 [Docker Compose](https://docs.docker.com/compose/install/linux/) 也可以作为独立的软件包安装在 Linux 上。适用于没有图形界面的 Linux 机器，或者你不想用 Docker Desktop 界面的时候。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

{% hint style="info" %}
**国内部署提示**：在国内网络环境下，如果拉取 `docker.n8n.io/n8nio/n8n` 镜像很慢或失败，可以给 Docker 配置国内镜像加速器（例如阿里云、腾讯云加速器），或者把命令里的 `docker.n8n.io/n8nio/n8n` 换成可访问的镜像地址后再执行。命令本身保持不变。
{% endhint %}

## 启动 n8n（Starting n8n）

在终端里运行下面的命令，把 `<YOUR_TIMEZONE>` 占位符替换成[你的时区](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)（例如上海时区可以填 `Asia/Shanghai`）：

```shell
docker volume create n8n_data

docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -e GENERIC_TIMEZONE="<YOUR_TIMEZONE>" \
 -e TZ="<YOUR_TIMEZONE>" \
 -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true \
 -e N8N_RUNNERS_ENABLED=true \
 -v n8n_data:/home/node/.n8n \
 docker.n8n.io/n8nio/n8n
```

这条命令会创建一个用于保存持久化数据的卷（volume），下载所需的 n8n 镜像，并按以下设置启动容器：

* 把宿主机的 `5678` 端口映射并暴露出来。
* 设置容器的时区：
	* `TZ` 环境变量设置系统时区，用来控制 `date` 之类的脚本和命令返回的时间。
	* [`GENERIC_TIMEZONE` 环境变量](../configure-n8n/basic-configuration/use-environment-variables/timezone-and-localization.md) 为 [Schedule Trigger 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.scheduletrigger) 这类定时类节点设置正确的时区。
* 强制对 n8n 配置文件使用安全的文件权限。
* 启用[任务运行器（task runners）](../configure-n8n/set-up-task-runners.md)，这是 n8n 中执行任务（tasks）的推荐方式。
* 把 `n8n_data` 卷挂载到 `/home/node/.n8n` 目录，这样即使容器重启，你的数据也能保留下来。

{% hint style="info" %}
**`N8N_RUNNERS_ENABLED` 从 2.0 版本起已弃用（deprecated）**

从 2.0 版本开始，`N8N_RUNNERS_ENABLED` 已被弃用，你不再需要设置它。在 1.x 版本中它仍然受支持，且必须设为 `true` 才能启用任务运行器。
{% endhint %}

启动成功后，在浏览器打开下面地址即可访问 n8n：
[http://localhost:5678](http://localhost:5678)

{% hint style="info" %}
**小白提示**：到这里 n8n 就已经跑起来了！首次打开页面时，会引导你创建一个管理员账号。以后想再次启动，直接用 `docker start n8n` 就行；这条 `docker run` 命令里的 `--rm` 表示容器停止后会被自动删除，数据都保存在 `n8n_data` 卷里，不会丢。
{% endhint %}

## 使用 PostgreSQL 数据库（Using with PostgreSQL）

默认情况下，n8n 使用 SQLite 来保存凭据[^1]、历史执行记录和工作流。n8n 也支持 PostgreSQL，可以通过下面的环境变量来配置。

{% hint style="info" %}
**仍然建议持久化 `.n8n` 目录**

使用 PostgreSQL 时，n8n 不再需要用 `.n8n` 目录存放 SQLite 数据库文件。但该目录里还有其他重要数据，比如加密密钥、实例日志和源码管理（source control）功能的资源文件。虽然你可以通过一些方式绕过这些需求（例如设置 [`N8N_ENCRYPTION_KEY` 环境变量](../configure-n8n/basic-configuration/use-environment-variables/deployment.md)），但最好还是继续为这个目录挂载持久化卷，以免将来出问题。
{% endhint %}

要使用 PostgreSQL 运行 n8n，请执行下面的命令，把占位符（尖括号内的内容，例如 `<POSTGRES_USER>`）替换成你的实际值：

```shell
docker volume create n8n_data

docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -e GENERIC_TIMEZONE="<YOUR_TIMEZONE>" \
 -e TZ="<YOUR_TIMEZONE>" \
 -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true \
 -e N8N_RUNNERS_ENABLED=true \
 -e DB_TYPE=postgresdb \
 -e DB_POSTGRESDB_DATABASE=<POSTGRES_DATABASE> \
 -e DB_POSTGRESDB_HOST=<POSTGRES_HOST> \
 -e DB_POSTGRESDB_PORT=<POSTGRES_PORT> \
 -e DB_POSTGRESDB_USER=<POSTGRES_USER> \
 -e DB_POSTGRESDB_SCHEMA=<POSTGRES_SCHEMA> \
 -e DB_POSTGRESDB_PASSWORD=<POSTGRES_PASSWORD> \
 -v n8n_data:/home/node/.n8n \
 docker.n8n.io/n8nio/n8n
```

你可以在 [n8n hosting 仓库](https://github.com/n8n-io/n8n-hosting/tree/main/docker-compose/withPostgres) 找到一份完整的带 PostgreSQL 的 `docker-compose` 文件。

## 升级（Updating）

要升级 n8n，可以在 Docker Desktop 中进入 **Images（镜像）** 标签页，从右键菜单里选择 **Pull（拉取）** 来下载最新的 n8n 镜像：

![Docker Desktop](../../.gitbook/assets/docker_desktop.png)

你也可以用命令行来拉取最新版本或指定版本：

```shell
# Pull latest (stable) version <a href="#pull-latest-stable-version" id="pull-latest-stable-version"></a>
docker pull docker.n8n.io/n8nio/n8n

# Pull specific version <a href="#pull-specific-version" id="pull-specific-version"></a>
docker pull docker.n8n.io/n8nio/n8n:1.81.0

# Pull next (unstable) version <a href="#pull-next-unstable-version" id="pull-next-unstable-version"></a>
docker pull docker.n8n.io/n8nio/n8n:next
```

拉取到新镜像后，停止你的 n8n 容器再重新启动即可。你也可以用命令行操作。把下面命令里的 `<container_id>` 替换成第一条命令查到的容器 ID：

```shell
# Find your container ID <a href="#find-your-container-id" id="find-your-container-id"></a>
docker ps -a

# Stop the container with the `<container_id>` <a href="#stop-the-container-with-the-lesscontaineridgreater" id="stop-the-container-with-the-lesscontaineridgreater"></a>
docker stop <container_id>

# Remove the container with the `<container_id>` <a href="#remove-the-container-with-the-lesscontaineridgreater" id="remove-the-container-with-the-lesscontaineridgreater"></a>
docker rm <container_id>

# Start the container <a href="#start-the-container" id="start-the-container"></a>
docker run --name=<container_name> [options] -d docker.n8n.io/n8nio/n8n
```

### 升级 Docker Compose（Updating Docker Compose）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/yA5x9FIRtnDGdghFU93g/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/WSJc9HCsn26Um2uT6zAQ/" %}

### 全栈模式（Full stack）

这种方式会在容器中同时运行 n8n 和 cloudflared。隧道地址（tunnel URL）会在启动时打印出来，所有配置都会自动接好：

```shell
pnpm stack --tunnel
```

### 仅服务模式（Services only）

如果你更喜欢用 `pnpm dev` 或 `pnpm start` 在本地运行 n8n，可以单独把 cloudflared 作为独立服务启动：

```shell
# Terminal 1: Start the cloudflared tunnel service <a href="#terminal-1-start-the-cloudflared-tunnel-service" id="terminal-1-start-the-cloudflared-tunnel-service"></a>
pnpm --filter n8n-containers services --services cloudflared

# Terminal 2: Start n8n locally <a href="#terminal-2-start-n8n-locally" id="terminal-2-start-n8n-locally"></a>
pnpm dev
```

`services` 命令会：

1. 启动 cloudflared，并让它指向 `host.docker.internal:5678`（也就是你本地运行的 n8n）。
2. 从 cloudflared 的指标接口（metrics endpoint）获取公开隧道地址。
3. 向 `packages/cli/bin/.env` 写入一个包含 `WEBHOOK_URL` 和 `N8N_PROXY_HOPS=1` 的 `.env` 文件。
4. `pnpm dev` 和 `pnpm start` 会通过 dotenv 自动读取这个 `.env` 文件。

用完记得清理：

```shell
pnpm --filter n8n-containers services:clean
```

## 下一步（Next steps）

* 关于 Docker 安装的更多信息，请查看 [Docker 镜像](https://github.com/n8n-io/n8n/tree/master/docker/images/n8n) 的 README 文件。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GtC2RL8itCPuNiwv5UUW/" %}

[^1]: 在 n8n 中，凭据（credentials）用于保存连接到特定应用和服务的认证信息。创建好包含你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）的凭据后，就可以使用对应的应用节点（app node）与该服务交互。
