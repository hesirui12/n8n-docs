---
title: Telegram 触发器节点常见问题
description: >-
  n8n（一个工作流自动化平台）中 Telegram 触发器节点的常见问题与解答文档。
  包括问题详情和建议的解决方案。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Telegram 触发器节点常见问题
originalFilePath: >-
  integrations/builtin/trigger-nodes/n8n-nodes-base.telegramtrigger/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.telegramtrigger/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.telegramtrigger/common-issues
layout:
  description:
    visible: false
---

# Telegram 触发器节点常见问题

> **大白话**：这一页是 Telegram 触发器节点的「排障手册」。如果你遇到"测试时一直卡在等待事件"、"报错说 webhook 必须用 HTTPS"、"工作流只在测试或生产环境生效"这几个问题，直接来这里查解决办法。

以下是 [Telegram 触发器节点](README.md)的一些常见错误和问题，以及解决或排查步骤。

## 卡在等待触发器事件（Stuck waiting for trigger event）

当使用 **Execute step（执行步骤）** 或 **Execute workflow（执行工作流）** 按钮测试 Telegram 触发器节点时，执行可能会卡住，看起来无法停止监听事件。如果发生这种情况，你可能需要退出工作流并重新打开，来重置画布。

卡住监听事件通常是由 n8n 之外的网络配置问题导致的。具体来说，这种情况经常发生在：你在反向代理后面运行 n8n，但没有配置 websocket 代理。

要解决这个问题，请检查你的反向代理配置（Nginx、Caddy、Apache HTTP Server、Traefik 等），启用 websocket 支持。

## 错误请求：webhook 无效：必须为 webhook 提供 HTTPS URL（Bad request: bad webhook: An HTTPS URL must be provided for webhook）

这个错误发生在你在反向代理后面运行 n8n，并且实例的 webhook URL 有问题时。

在反向代理后面运行 n8n 时，你必须[配置 `WEBHOOK_URL` 环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-webhook-urls-with-reverse-proxy)，指向你的 n8n 实例所在的公网 URL。对于 Telegram，这个 URL 必须使用 HTTPS。

要修复这个问题，请在反向代理中配置 TLS/SSL 终止。之后，把 `WEBHOOK_URL` 环境变量更新为使用 HTTPS 地址。

## 工作流只在测试或生产环境中生效（Workflow only works in testing or production）

Telegram 只允许每个应用注册一个 webhook。这意味着，每次你从测试 URL 切换到生产 URL（反之亦然）时，Telegram 都会覆盖已注册的 webhook URL。

如果你试图测试一个已发布的工作流，可能会遇到这个问题。Telegram 机器人只会把事件发送到两个 webhook URL 中的一个，另一个将永远收不到事件通知。

要解决这个问题，你可以在测试时停用工作流，或者为测试和生产分别创建独立的 Telegram 机器人。

要为测试创建一个独立的 Telegram 机器人，请重复创建第一个机器人时完成的过程。更多信息请参考 [Telegram 的机器人文档](https://core.telegram.org/bots)和 [Telegram bot API 参考](https://core.telegram.org/bots/api)。

要在测试时停用工作流，可以尝试以下步骤：

{% hint style="warning" %}
**会中断生产流量（Halts production traffic）**

这个变通方法会临时停用你的生产工作流来测试。工作流在未发布期间将不再接收生产流量。
{% endhint %}

1. 进入你的工作流页面。
2. 在工作流设置下拉菜单中，点击 **Unpublish（取消发布）** 来临时停用工作流。
3. 使用测试 webhook URL 测试你的工作流。
4. 测试结束后，点击 **Publish（发布）**。生产 webhook URL 应该会恢复工作。
