---
contentType: overview
nodeTitle: 使用云服务商部署（Use a cloud provider）
originalFilePath: hosting/installation/server-setups/index.md
originalUrl: 'https://docs.n8n.io/hosting/installation/server-setups'
url: 'https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider'
layout:
  description:
    visible: false
---

# 云服务器部署方案（Server setups）

如果你不想在自己家里的电脑或办公电脑上运行 n8n，而是希望它运行在一台 7×24 小时在线的云服务器上，那么本页就是你的起点。n8n 官方把云服务商的部署方案按「部署方式」分成了几组，每一组下面都有对应的详细教程，你可以根据自己的技术背景和预算选择：

**使用 Docker Compose 自托管（Self-host with Docker Compose）**——适合想用最简单方式在云服务器（VPS）上部署、并需要一个反向代理帮你自动处理 HTTPS 证书的情况：

* [Digital Ocean（数字海洋云服务器）](deploy-to-digital-ocean.md)
* [Heroku（云应用平台）](deploy-to-heroku.md)
* [Hetzner Cloud（德国云服务器）](deploy-to-hetzner.md)

**使用 Google Cloud Run 自托管**——Cloud Run 是谷歌的无服务器容器平台，无需自己维护服务器。这种方式还能顺便开通 Google Workspace（谷歌工作空间）工具的访问权限，把 Gmail、Drive 等直接当作 n8n 工作流工具来用：

* [Google Cloud Run（谷歌云无服务器容器）](deploy-to-google-cloud-run.md)

**Kubernetes（K8s）部署的起步方案**——Kubernetes 是业界标准的大规模容器编排平台，适合 n8n 业务量较大、需要自动伸缩的团队。下面三个链接分别是三大云厂商的入门教程：

* [AWS（亚马逊云）](deploy-to-aws.md)
* [Azure（微软云）](deploy-to-azure.md)
* [Google Kubernetes Engine / GKE（谷歌 Kubernetes 引擎）](deploy-to-google-kubernetes.md)

**其他平台的配置指南**——如果你用的是别的平台，或者想自己在 Linux 服务器上用 Docker Compose 从零配置，看这一篇：

* [Docker Compose（Docker 容器编排）](use-docker-compose.md)

{% hint style="info" %}
**小白选型提示**：如果你以前没用过云服务器，推荐优先看 DigitalOcean、Hetzner 或 Docker Compose 的教程，它们不需要你掌握复杂的 Kubernetes 概念；如果你有团队协作、高并发、自动扩展这类需求，再考虑 AWS / Azure / GKE 的 Kubernetes 方案。另外，国内网络环境下访问这些国外云平台和拉取 Docker 镜像时可能较慢，各篇教程里都附有「国内部署提示」，遇到问题可以先看那里。
{% endhint %}
