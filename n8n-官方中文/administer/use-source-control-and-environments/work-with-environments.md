---
title: Environments in n8n
description: Understand the concepts behind environments in n8n.
contentType: explanation
nodeTitle: Work with environments
originalFilePath: source-control-environments/understand/environments.md
originalUrl: 'https://docs.n8n.io/source-control-environments/understand/environments'
url: >-
  https://docs.n8n.io/administer/use-source-control-and-environments/work-with-environments
layout:
  description:
    visible: false
---

# n8n 中的环境 (Environments in n8n)

n8n 在 Git（一种版本控制软件）的基础上构建了环境（environments）功能。本文档帮助你理解：

* 环境（environments）的用途。
* 环境在 n8n 中是如何运作的。

## 环境：是什么，为什么 (Environments: What and why)

在软件开发中，"环境"是指代码周围的所有基础设施和工具，包括运行软件的工具，以及这些工具的具体配置。想了解软件开发中环境的更详细介绍，请参考 [Codecademy | Environments](https://www.codecademy.com/article/environments)。

n8n 中的低代码（low-code）开发与此类似。n8n 是你构建和运行工作流的地方。你的实例可能有一些特定的配置：在 Cloud（云端托管版）上，配置由 n8n 决定；在自托管（self-hosted）实例上，有大量的[配置选项](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration)。你可能也修改过实例的一些设置。"n8n 本身 + 你的实例的具体配置和设置"这一组合，就是你工作流运行所在的**环境**。

拥有多个环境是有好处的。一个常见的模式是：为开发和生产力分别准备不同的环境：

* **开发环境 (Development)**：在这里干活、做改动。
* **生产环境 (Production)**：正式对外运行的环境。

这样的设置能帮你放心地修改工作流，而不会弄坏正在使用中的工作流。

{% hint style="info" %}
**小白解释：为什么要分环境？**

就好比你写文章：先在自己草稿里随便改（开发），定稿后才贴到正式发布的博客上（生产）。如果直接在正式博客上改，万一改坏了，读者看到的就是坏掉的页面。分环境 = 给"改"和"用"之间加一道保险。
{% endhint %}

## n8n 中的环境 (Environments in n8n)

在 n8n 中，一个环境由两部分组成：一个 n8n 实例 + 一个 Git 分支。

* **n8n 实例**是你构建和运行工作流的地方。
* **Git 分支**存储工作流的副本，以及标签、变量和凭据的占位符（stub）。

n8n **不会**把凭据和变量的真实值与 Git 同步。你在设置一个新实例时，必须**手动**设置凭据和变量值。更多信息请参阅[推送与拉取 | 哪些内容会被提交 (Push and pull | What gets committed)](push-and-pull-changes.md#what-gets-committed)。

{% hint style="info" %}
**小白解释：为什么凭据和变量值不同步？**

Git 仓库是"共享的"，如果真实密钥被同步进去，任何能访问仓库的人都能看到你的密码和 API 密钥，非常危险。所以 n8n 只同步"有什么、叫什么"，真实的值在每个环境里单独填。这也顺便带来了一个好处：开发环境可以用测试用的假凭据，生产环境用真凭据，互不干扰。
{% endhint %}

如何在环境之间复制工作，取决于你的分支和 n8n 实例配置：

* **多实例、单分支**：你可以从一个实例推送到 Git 分支，然后把工作拉取到另一个实例。
* **多实例、多分支**：你需要在你的 Git 服务商里创建拉取请求（pull request）并合并。例如，如果你有 development（开发）、test（测试）、production（生产）三个分支，每个分支连接各自的实例，你需要把 development 分支合并到 test 分支，开发实例上的工作才能在测试实例上可用。更多信息（包括部分自动化的步骤）请参阅[在环境之间复制工作 (Copy work between environments)](move-work-between-environments.md)。

关于推送和拉取工作的详细指南，请参阅[推送与拉取 (Push and pull)](push-and-pull-changes.md)。

想了解如何把你的 n8n 实例链接到 Git，请参阅[为环境设置源码控制 (Set up source control)](set-up-source-control.md)；或者跟着[教程：用源码控制创建环境 (Tutorial: Create environments with source control)](tutorial-create-environments-with-source-control.md)，用 n8n 推荐的一种配置来搭建你的环境。
