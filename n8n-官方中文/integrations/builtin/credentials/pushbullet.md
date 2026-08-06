---
title: Pushbullet 凭证
description: >-
  Pushbullet 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Pushbullet 的身份。
contentType:
  - integration
  - reference
nodeTitle: Pushbullet credentials
originalFilePath: integrations/builtin/credentials/pushbullet.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/pushbullet'
url: 'https://docs.n8n.io/integrations/builtin/credentials/pushbullet'
layout:
  description:
    visible: false
---

# Pushbullet 凭证

{% hint style="info" %}
**大白话**：Pushbullet 是一个「手机和电脑之间互推消息/文件」的工具（比如服务器出问题时把告警推到你手机上）。n8n 连它用的是 OAuth2，需要你去 Pushbullet 官网注册一个开发者 App（应用），拿到 **Client ID（客户端 ID）** 和 **Client Secret（客户端密钥）**，再把 n8n 给你的回调地址填进 App 里，两边对上就能连。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Pushbullet](../app-nodes/n8n-nodes-base.pushbullet.md)

## 准备工作

注册一个 [Pushbullet](https://www.pushbullet.com/) 账号。

## 支持的验证方式

- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Pushbullet 官方 API 文档](https://docs.pushbullet.com/)。

## 使用 OAuth2

要配置这个凭证，你需要准备：

- **Client ID（客户端 ID）**：创建 Pushbullet 应用（也叫 OAuth client，即 OAuth 客户端）时生成。
- **Client Secret（客户端密钥）**：创建 Pushbullet 应用时生成。

要生成 **Client ID** 和 **Client Secret**，请前往[创建客户端](https://www.pushbullet.com/create-client)页面。把 n8n 里的 **OAuth Redirect URL（OAuth 回调地址）** 复制过来，作为这个应用的 **redirect_uri**（重定向地址）填进去。再从该 OAuth 客户端里把 **client_id** 和 **client_secret** 填到 n8n 凭证中。

更多说明请参考 Pushbullet 的 [OAuth2 指南](https://docs.pushbullet.com/#oauth2)。

{% hint style="info" %}
**Pushbullet OAuth 测试链接**

Pushbullet 在上述创建客户端的过程中会提供一个测试链接。这个链接与 n8n 不兼容。要确认验证是否正常，请使用 n8n 里的 **Connect my account（连接我的账号）** 按钮。
{% endhint %}
