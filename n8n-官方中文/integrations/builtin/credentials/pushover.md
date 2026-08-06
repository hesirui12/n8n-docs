---
title: Pushover 凭证
description: >-
  Pushover 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Pushover 的身份。
contentType:
  - integration
  - reference
nodeTitle: Pushover credentials
originalFilePath: integrations/builtin/credentials/pushover.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/pushover'
url: 'https://docs.n8n.io/integrations/builtin/credentials/pushover'
layout:
  description:
    visible: false
---

# Pushover 凭证

{% hint style="info" %}
**大白话**：Pushover 是一个「把消息/告警推送到手机」的推送服务，运维圈常用它收服务器报警。n8n 连它只需要一把 **API Key（API 密钥）**：先去官网注册账号，然后在[注册应用](https://pushover.net/apps/build)页面创建一个应用，创建完成后就会拿到你的 API Key。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Pushover](../app-nodes/n8n-nodes-base.pushover.md)

## 准备工作

注册一个 [Pushover](https://pushover.net) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务验证方式的更多信息，请参考 [Pushover 官方 API 文档](https://pushover.net/api)。

## 使用 API Key（API 密钥）

要配置这个凭证，你需要准备：

- **API Key（API 密钥）**：在你[注册一个应用](https://pushover.net/apps/build)时生成。更多说明请参考[应用注册](https://pushover.net/api#registration)文档。
