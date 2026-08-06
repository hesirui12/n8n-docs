---
title: Source control and environments
description: Overview of source control and environments in n8n
contentType: overview
hide:
  - toc
nodeTitle: Use source control and environments
originalFilePath: source-control-environments/index.md
originalUrl: 'https://docs.n8n.io/source-control-environments'
url: 'https://docs.n8n.io/administer/'
layout:
  description:
    visible: false
---

# 源码控制与多环境 (Source control and environments)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/2T2SmMUgiLyck7FDDwRD/" %}

n8n 使用基于 Git 的源码控制（source control）来支持"环境"（environments）功能。把你的 n8n 实例链接到一个 Git 仓库，你就可以创建多个 n8n 环境，每个环境由一个 Git 分支（branch）支撑。

{% hint style="info" %}
**小白解释：源码控制 + 环境是什么？**

想象你有一个"开发工作区"和一个"生产工作区"：你在开发环境里随便改、随便测试，确认没问题后，再把工作"推送"到一个公共的 Git 仓库，最后在另一个 n8n 实例（生产环境）里"拉取"下来上线运行。这样就不会因为手抖把线上正在跑的工作流改坏。Git 分支（branch）就是用来存放这些工作副本的地方。
{% endhint %}

本节包含以下内容：

* [理解 (Understand)](understand-source-control.md)：
	* [n8n 中的环境 (Environments in n8n)](work-with-environments.md)：环境的用途，以及它们在 n8n 中如何运作。
	* [Git 与 n8n (Git and n8n)](use-git-in-n8n.md)：n8n 如何使用 Git。
	* [分支模式 (Branch patterns)](choose-branching-patterns.md)：n8n 实例与 Git 分支之间可能的关系。
* [为环境设置源码控制 (Set up source control for environments)](set-up-source-control.md)：如何把你的 n8n 实例连接到 Git。
* 使用 (Using)：
	* [推送与拉取 (Push and pull)](push-and-pull-changes.md)：把工作发送到 Git，以及从 Git 拉取工作到你的实例。
	* [在环境之间复制工作 (Copy work between environments)](move-work-between-environments.md)：如何在不同的 n8n 实例之间复制工作。
* [教程：用源码控制创建环境 (Tutorial: Create environments with source control)](tutorial-create-environments-with-source-control.md)：一个端到端教程，使用 n8n 推荐的配置来设置环境。

相关章节：

* [变量 (Variables)](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/define-custom-variables)：可复用的值。
* [外部密钥 (External secrets)](../manage-credentials/use-external-secret-stores.md)：用外部密钥保险库（vault）管理凭据[^1]。

[^1]: 在 n8n 中，凭据（credentials）用于存储连接特定应用和服务的认证信息。用你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）创建凭据后，就可以使用对应的应用节点（app node）与服务交互。
