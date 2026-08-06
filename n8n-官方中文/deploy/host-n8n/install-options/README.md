---
layout:
  description:
    visible: false
---

# 安装方式（Install options）

本页汇总了 n8n 官方支持的所有安装和部署方式，是「安装选择」的总入口。你可以根据自己的技术水平、使用场景（个人试用、团队使用、生产环境）以及手头的服务器条件，选择最合适的一条路：

* **用 npm 安装**：适合已经懂 Node.js 的技术型用户，在已有服务器上直接用命令行跑起来，最轻量。
* **用 Docker 安装**：官方最推荐的安装方式，环境隔离、升级简单、数据管理方便，适合绝大多数自托管场景。
* **使用云服务商部署**：把 n8n 部署到 AWS、Azure、Google Cloud、DigitalOcean、Hetzner、Heroku 等云平台上，适合想要长期稳定运行、需要自动扩展或团队访问的场景。

点击下面的卡片即可进入对应的详细教程：

{% content-ref url="install-with-npm.md" %}
[install-with-npm.md](install-with-npm.md)
{% endcontent-ref %}

{% content-ref url="install-with-docker.md" %}
[install-with-docker.md](install-with-docker.md)
{% endcontent-ref %}

{% content-ref url="use-a-cloud-provider/README.md" %}
[use-a-cloud-provider/README.md](use-a-cloud-provider/README.md)
{% endcontent-ref %}

{% hint style="info" %}
**小白选型提示**：如果你只是想在自家电脑上快速体验 n8n，建议先看「用 Docker 安装」或「用 npm 安装」，几分钟就能跑起来；如果你需要让 n8n 7×24 小时在线、能被同事访问，或者业务量会增长，建议进入「云服务商部署」页面挑选一个合适的平台教程。
{% endhint %}
