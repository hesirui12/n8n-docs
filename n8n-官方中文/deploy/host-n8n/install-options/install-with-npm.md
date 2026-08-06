---
contentType: tutorial
nodeTitle: 用 npm 安装（Install with npm）
originalFilePath: hosting/installation/npm.md
originalUrl: 'https://docs.n8n.io/hosting/installation/npm'
url: 'https://docs.n8n.io/deploy/host-n8n/install-options/install-with-npm'
layout:
  description:
    visible: false
---

# npm

npm 是在本地机器上快速上手 n8n 的方式。你必须先安装 [Node.js](https://nodejs.org/en/)。n8n 要求 Node.js 版本在 20.19 到 24.x 之间（含边界值）。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

{% hint style="info" %}
**小白提示**：npm 是 Node.js 自带的包管理器。装好 Node.js 后，在命令行里敲几条命令就能把 n8n 装上，非常适合在 Windows/Mac 个人电脑上先试试水。建议先看下面「用 npx 试用」那一节，不安装也能体验。
{% endhint %}

## 用 npx 试用 n8n（Try n8n with npx）

你可以用 npx 在不安装的情况下试用 n8n。

在终端里运行：

```bash
npx n8n
```

这条命令会下载启动 n8n 所需的一切。然后你就可以打开 [http://localhost:5678](http://localhost:5678)，开始使用 n8n 创建工作流了。

## 用 npm 全局安装（Install globally with npm）

要全局安装 n8n，使用 npm：

```bash
npm install n8n -g
```

要安装或升级到某个指定版本的 n8n，用 `@` 语法指定版本。例如：

```bash
npm install -g n8n@0.126.1
```

安装 `next` 版本：

```bash
npm install -g n8n@next
```

安装完成后，运行下面的命令启动 n8n：

```bash
n8n
# or <a href="#or" id="or"></a>
n8n start
```

### 下一步（Next steps）

用 [快速上手（Quickstarts）](https://app.gitbook.com/s/CxSeOtVxqqhfxMSac0AV/build-your-first-workflow) 来试试 n8n。

## 升级（Updating）

要把 n8n 实例升级到 `latest`（最新稳定版），运行：

```bash
npm update -g n8n
```

要安装 `next` 版本：

```bash
npm install -g n8n@next
```

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/WSJc9HCsn26Um2uT6zAQ/" %}

{% hint style="info" %}
**需要 Docker**

隧道功能（tunnel）使用 cloudflared，它以 Docker 容器方式运行。即使你通过 npm 运行 n8n，也要确保机器上安装了 [Docker](https://docs.docker.com/get-docker/)。
{% endhint %}

对于 npm 安装，请使用**仅服务模式（services only）**。先单独启动 cloudflared 服务，然后在本地运行 n8n：

```bash
# Terminal 1: Start the cloudflared tunnel service <a href="#terminal-1-start-the-cloudflared-tunnel-service" id="terminal-1-start-the-cloudflared-tunnel-service"></a>
pnpm --filter n8n-containers services --services cloudflared

# Terminal 2: Start n8n locally <a href="#terminal-2-start-n8n-locally" id="terminal-2-start-n8n-locally"></a>
pnpm dev
```

`services` 命令会启动 cloudflared、获取公开的隧道地址，并把包含 `WEBHOOK_URL` 和 `N8N_PROXY_HOPS=1` 的 `.env` 文件写入 `packages/cli/bin/.env`。n8n 启动时会自动读取这个 `.env` 文件。

用完记得清理：

```bash
pnpm --filter n8n-containers services:clean
```

全栈模式（n8n 和 cloudflared 都在容器里运行）请参考 [Docker 隧道设置](install-with-docker.md#n8n-with-tunnel)。

## 回退升级（Reverting an upgrade）

安装你想回退到的旧版本即可。

如果这次升级涉及数据库迁移（migration）：

1. 查看功能文档和发布说明，确认是否有需要你手动处理的变化。
1. 在当前版本上运行 `n8n db:revert` 来回滚数据库。如果要回退多个数据库迁移，需要重复执行该操作。

## Windows 故障排查（Windows troubleshooting）

如果你在 Windows 上运行 n8n 时遇到问题，请确保你的 Node.js 环境配置正确。可以按照微软的指南来[在 Windows 上安装 NodeJS](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)。

{% hint style="info" %}
**国内部署提示**：如果 `npm install n8n -g` 下载很慢，可以把 npm 镜像源换成国内源（例如 `npm config set registry https://registry.npmmirror.com`），安装速度会明显提升。命令本身不变。
{% endhint %}
