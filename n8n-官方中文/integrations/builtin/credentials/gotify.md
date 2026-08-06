---
title: Gotify 凭证
description: >-
  Gotify 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Gotify 的身份。
contentType:
  - integration
  - reference
nodeTitle: Gotify credentials
originalFilePath: integrations/builtin/credentials/gotify.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/gotify'
url: 'https://docs.n8n.io/integrations/builtin/credentials/gotify'
layout:
  description:
    visible: false
---

# Gotify 凭证

{% hint style="info" %}
**大白话**：Gotify 是一个可以自己搭在服务器上的消息推送服务（相当于开源的「推送通知」工具）。n8n 想给它发消息或读消息，需要一个 token（令牌）。注意有两种 token 分两种用途：**App API Token** 专门用来「发消息」（在 Apps 菜单里建应用生成）；**Client API Token** 用于其他所有操作，比如删除、读取消息（在 Clients 菜单里建客户端生成）。另外还要填你的 Gotify 服务器地址。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Gotify](../app-nodes/n8n-nodes-base.gotify.md)

## 准备工作

在你的服务器上安装 [Gotify](https://gotify.net/docs/install)。

## 支持的验证方式

- API token（API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [Gotify 官方 API 文档](https://gotify.net/api-docs)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要准备：

- 一个 **App API Token（应用令牌）**：只有当你用这个凭证来创建（发送）消息时才需要。要生成 App API token，请从 **Apps（应用）** 菜单里创建一个应用。更多信息请参考 [Gotify 推送消息文档](https://gotify.net/docs/pushmsg)。
- 一个 **Client API Token（客户端令牌）**：除创建消息以外的所有操作（比如删除或读取消息）都需要。要生成 Client API token，请从 **Clients（客户端）** 菜单里创建一个客户端。
- 你的 Gotify 服务器的 **URL**
