---
title: Rocket.Chat 凭证
description: >-
  Rocket.Chat 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Rocket.Chat 的身份。
contentType:
  - integration
  - reference
nodeTitle: Rocket.Chat credentials
originalFilePath: integrations/builtin/credentials/rocketchat.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/rocketchat'
url: 'https://docs.n8n.io/integrations/builtin/credentials/rocketchat'
layout:
  description:
    visible: false
---

# Rocket.Chat 凭证

{% hint style="info" %}
**大白话**：Rocket.Chat 是开源的「团队聊天/即时通讯」软件（Slack 的替代品），可以自己部署。n8n 连它用的是「个人访问令牌」：在你账号的 **avatar（头像）> Account（账号）> Personal Access Tokens（个人访问令牌）** 里生成一个令牌，拿到 **User ID（用户 ID）** 和 **Auth Key（认证密钥）**，再填上你 Rocket.Chat 的 **Domain（域名地址）** 即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Rocket.Chat](../app-nodes/n8n-nodes-base.rocketchat.md)

## 准备工作

- 注册一个 [Rocket.Chat](https://rocket.chat/) 账号。
- 你的账号需要有 `create-personal-access-tokens`（创建个人访问令牌）权限，才能生成个人访问令牌。

## 支持的验证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Rocket.Chat 官方 API 文档](https://developer.rocket.chat/reference/api/rest-api)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- **User ID（用户 ID）**：生成访问令牌时会显示出来。
- **Auth Key（认证密钥）**：即你的个人访问令牌。要生成访问令牌，请前往你的 **avatar（头像）> Account（账号）> Personal Access Tokens（个人访问令牌）**。复制令牌，作为 n8n 的 **Auth Key** 填入。
- 你的 Rocket.Chat **Domain（域名）**：也叫你的默认 URL 或工作区 URL。

更多说明请参考[个人访问令牌](https://docs.rocket.chat/docs/manage-your-account-settings#personal-access-tokens)文档。
