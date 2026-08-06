---
contentType: tutorial
nodeTitle: 部署到 Heroku（Deploy to Heroku）
originalFilePath: hosting/installation/server-setups/heroku.md
originalUrl: 'https://docs.n8n.io/hosting/installation/server-setups/heroku'
url: >-
  https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/deploy-to-heroku
layout:
  description:
    visible: false
---

# 在 Heroku 上部署 n8n

本教程教你在 Heroku（云应用托管平台，帮你省去服务器维护工作）上自托管 n8n。方案用到了：

- [Docker Compose](https://docs.docker.com/compose/)：创建和定义应用的各个组件，以及它们之间如何配合工作。
- [Heroku 的 PostgreSQL 服务](https://devcenter.heroku.com/categories/heroku-postgres)：托管 n8n 的数据存储。
- 一个 **Deploy to Heroku（一键部署到 Heroku）** 按钮：只需少量配置，一键即可完成部署。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/YLv7Cqg70tj1alDgktSX/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

{% hint style="info" %}
**国内部署提示**：Heroku 的免费套餐已停止，且国内访问 Heroku 控制台和应用域名需要一定的网络条件，请评估后再选择此方案。一键部署模板来自 GitHub，若打不开可配置代理访问。命令本身保持不变。
{% endhint %}

## 使用部署模板创建 Heroku 项目（Use the deployment template to create a Heroku project）

把 n8n 部署到 Heroku 最快的方式，就是使用 **Deploy to Heroku（部署到 Heroku）** 按钮：

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https://github.com/n8n-io/n8n-heroku/tree/main)

点击后会打开 Heroku 的 **Create New App（创建新应用）** 页面。为项目设置一个名称，并选择要部署项目的区域（region）。

### 配置环境变量（Configure environment variables）

Heroku 会预填 `app.json` 文件的 `env` 部分定义的配置项，其中也包含 n8n 使用的一些环境变量的默认值。

你可以根据自己的需要修改这些值。但下面两个值**必须修改**：

- **N8N_ENCRYPTION_KEY**：n8n 用它来[加密用户账号信息](../../configure-n8n/basic-configuration/use-environment-variables/deployment.md)，然后再保存到数据库。如果使用默认值或与他人相同，加密形同虚设。
- **WEBHOOK_URL**：必须和你创建的应用名称一致，这样 webhook（网络钩子，外部服务回调 n8n 的地址）才能有正确的 URL。例如应用名是 `my-n8n-app`，这里就填 `https://my-n8n-app.herokuapp.com/`。

### 部署 n8n（Deploy n8n）

点击 **Deploy app（部署应用）**。

Heroku 构建并部署完应用后，会提供 **Manage App（管理应用）** 或 **View（查看）** 应用的链接。

{% hint style="info" %}
**Heroku 和 DNS**

参考 [Heroku 官方文档](https://devcenter.heroku.com/categories/networking-dns)，了解如何把自定义域名连接到 Heroku 应用（默认的 `*.herokuapp.com` 域名也可以直接用）。
{% endhint %}

## 修改部署模板（Changing the deployment template）

你可以 fork（复制）[n8n-heroku 仓库](https://github.com/n8n-io/n8n-heroku)，然后从你自己的 fork 部署，从而按需修改部署模板。

### Dockerfile

默认情况下，`Dockerfile` 拉取的是最新的 n8n 镜像。如果你想使用不同版本或固定某个版本，修改 `Dockerfile` 第一行的镜像标签（image tag）即可。

### Heroku 与端口暴露（Heroku and exposing ports）

Heroku 不允许 Docker 应用使用 `EXPOSE` 命令自行定义暴露端口。作为替代，Heroku 提供了一个 `PORT` 环境变量，在应用运行时动态填充端口值。`entrypoint.sh` 文件覆盖了默认的 Docker 镜像启动命令，改为使用 Heroku 提供的这个端口变量。之后你就可以在浏览器里通过 80 端口访问 n8n 了。

{% hint style="info" %}
**Heroku 上的 Docker 限制（Docker limitations with Heroku）**

[阅读这篇指南](https://devcenter.heroku.com/articles/container-registry-and-runtime#unsupported-dockerfile-commands)，了解在 Heroku 上使用 Docker 的更多限制（例如哪些 Dockerfile 命令不被支持）。
{% endhint %}

### 配置 Heroku（Configuring Heroku）

`heroku.yml` 文件定义了你想在 Heroku 上创建的应用。它由两个部分组成：

* `setup` > `addons`：定义要使用的 Heroku 附加组件（addons）。在这个例子里是 PostgreSQL 数据库组件。
* `build` 部分：定义 Heroku 如何构建应用。在这个例子里，它使用 Docker buildpack（构建包）根据提供的 `Dockerfile` 构建一个 `web` 服务。

## 下一步（Next steps）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GtC2RL8itCPuNiwv5UUW/" %}
