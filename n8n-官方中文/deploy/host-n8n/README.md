---
title: n8n 托管文档与指南（Hosting Documentation and Guides）
description: >-
  访问 n8n 托管文档与指南，查找帮助你安装和管理自托管 n8n 实例的全面资源。
contentType: overview
hide:
  - toc
  - feedback
  - kapaButton
nodeTitle: 托管 n8n（Host n8n）
originalFilePath: hosting/index.md
originalUrl: 'https://docs.n8n.io/hosting'
url: 'https://docs.n8n.io/deploy/'
layout:
  description:
    visible: false
---

# 自托管 n8n（Self-hosting n8n）

你可以在自己的基础设施上自托管 n8n——无论是本地部署（on-premises）还是私有云，都可以使用 Docker、Kubernetes 或 npm 来完成。

所有自托管安装使用的都是同一个核心产品。没有许可证密钥（license key）时，n8n 以免费的社区版（Community edition）运行；添加商业版（Business）或企业版（Enterprise）许可证密钥后，即可启用对应版本。各版本之间的差异请参见 [对比版本（Compare editions）](community-edition-features.md)。

{% hint style="info" %}
**小白提示**：自托管 = 把 n8n 装到你自己能掌控的机器上。数据、升级、安全都自己说了算。想省心就直接用 Docker 装，一条命令就能跑起来，后面想升级也方便。
{% endhint %}

## 选择你的安装方式（Choose your installation method）

请选择最符合你技术需求和基础设施的安装方式：

- __npm__

	**最适合：** 本地开发、测试，或简单的单服务器部署。

	**要求：** 系统里已安装 Node.js。

	直接用 Node 包管理器（Node Package Manager）安装 n8n。搭建很快，但需要自己管理 Node.js 版本和依赖。

	[npm 安装指南](install-options/install-with-npm.md)

- __Docker__

	**最适合：** 隔离环境、轻松升级、部署结果一致可复现。

	**要求：** 系统里已安装 Docker。

	让 n8n 在一个包含全部依赖的容器里运行。简化安装和升级过程。

	[Docker 安装指南](install-options/install-with-docker.md)

- __AWS__

	在亚马逊云（Amazon Web Services）上使用 EC2、ECS 或其他 AWS 服务部署。

	[AWS 搭建指南](install-options/use-a-cloud-provider/deploy-to-aws.md)

- __Azure__

	在微软 Azure 上用容器实例或虚拟机托管 n8n。

	[Azure 搭建指南](install-options/use-a-cloud-provider/deploy-to-azure.md)

- __Google Cloud__

	在谷歌云上用 Cloud Run 或 Kubernetes Engine 运行 n8n。

	[Google Cloud Run](install-options/use-a-cloud-provider/deploy-to-google-cloud-run.md) | [Kubernetes Engine](install-options/use-a-cloud-provider/deploy-to-google-kubernetes.md)

- __DigitalOcean__

	基于 droplet 的简单托管，适合中小规模部署。

	[DigitalOcean 搭建指南](install-options/use-a-cloud-provider/deploy-to-digital-ocean.md)

- __Hetzner__

	性价比很高的欧洲托管选项，性能出色。

	[Hetzner 搭建指南](install-options/use-a-cloud-provider/deploy-to-hetzner.md)

- __Heroku__

	平台即服务（Platform-as-a-service）选项，配置最少，部署快速。

	[Heroku 搭建指南](install-options/use-a-cloud-provider/deploy-to-heroku.md)

- __OpenShift__

	面向容器化应用的企业级 Kubernetes 平台。

	[OpenShift 搭建指南](install-options/use-a-cloud-provider/deploy-to-openshift-local-crc.md)

- __Docker Compose__

	多容器方案，非常适合需要数据库和其他配套服务的生产环境部署。

	[Docker Compose 指南](install-options/use-a-cloud-provider/use-docker-compose.md)

{% hint style="info" %}
**国内部署提示**：对国内用户来说，最常见的两条路线是 npm 和 Docker。如果是个人电脑上学习试用，npm 最简单；如果要长期跑业务，推荐 Docker（数据持久化、升级都更省心）。上面列出的 AWS、Azure、Google Cloud 等云服务商教程方法类似，跟着选一个你熟悉的平台即可。
{% endhint %}
