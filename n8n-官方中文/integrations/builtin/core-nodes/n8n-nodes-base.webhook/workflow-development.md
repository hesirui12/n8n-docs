---
title: Webhook 节点工作流开发文档
description: '学习如何在 n8n 中构建、测试和使用 Webhook 节点。'
priority: critical
contentType: howto
nodeTitle: Webhook node workflow development documentation
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.webhook/workflow-development.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/workflow-development
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/workflow-development
layout:
  description:
    visible: false
---

# 工作流开发（Workflow development）

{% hint style="info" %}
**大白话**：Webhook 节点的用法和别的核心节点不太一样，重点是「先测试、后上线」。n8n 会给每个 Webhook 节点生成两个地址：**Test URL（测试 URL）** 用来调试——点「监听测试事件」后，外部发来的数据会直接显示在编辑器里，方便你看；**Production URL（生产 URL）** 用来上线——发布工作流后，外部一调用这个地址，工作流就会自动运行（但数据不会显示在编辑器里）。在本地自己电脑上跑时，记得用隧道（tunnel）模式，否则外面的服务访问不到你的电脑。
{% endhint %}

[Webhook 节点](README.md) 的工作方式与其他核心节点略有不同。n8n 建议按照以下流程来构建、测试并在生产环境使用你的 Webhook 节点。

n8n 会为每个 Webhook 节点生成两个 **Webhook URL**：一个 **Test URL（测试 URL）** 和一个 **Production URL（生产 URL）**。

## 构建和测试工作流（Build and test workflows）

在构建或测试工作流时，请使用 **Test（测试）** webhook URL。

使用测试 webhook 可以确保你能在编辑器界面中查看传入的数据，这对调试非常有用。在向测试 webhook 发送数据之前，先选择 **Listen for test event（监听测试事件）** 来注册 webhook。测试 webhook 会保持活跃 120 秒。

当你在 [自托管](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) 的 n8n 实例的 localhost 上使用 Webhook 节点时，请以隧道（tunnel）模式运行 n8n：

* [使用 npm 并开启隧道](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/install-options/install-with-npm#n8n-with-tunnel)
* [使用 Docker 并开启隧道](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/install-options/install-with-docker#n8n-with-tunnel)

<video src="/_video/integrations/builtin/core-nodes/webhook/webhook-node-intro.mp4" controls width="100%"></video>

## 生产工作流（Production workflows）

当你的工作流准备好后，切换到使用 **Production（生产）** webhook URL。然后你就可以发布工作流，当外部服务调用该 webhook URL 时，n8n 会自动运行它。

使用生产 webhook 时，请确保你已经保存并发布了工作流。使用生产 webhook 时，流经 webhook 的数据不会显示在编辑器界面中。

关于发布工作流的更多信息，请参阅 [创建工作流（Create a workflow）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/create-and-run-workflows)。
