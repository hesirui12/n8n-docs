---
title: Hunter 凭证
description: >-
  Hunter 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Hunter 的身份。
contentType:
  - integration
  - reference
nodeTitle: Hunter credentials
originalFilePath: integrations/builtin/credentials/hunter.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/hunter'
url: 'https://docs.n8n.io/integrations/builtin/credentials/hunter'
layout:
  description:
    visible: false
---

# Hunter 凭证

{% hint style="info" %}
**大白话**：Hunter 是一个查邮箱的工具：输入公司域名就能帮你找到该公司的邮箱地址，还能验证邮箱是否有效。n8n 连它很简单，只需要一把 **API Key（API 密钥）**。登录 Hunter 后在个人面板的 API 页面生成，填进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Hunter](../app-nodes/n8n-nodes-base.hunter.md)

## 前提条件

创建一个 [Hunter](https://www.hunter.io/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Hunter 的 API 文档](https://hunter.io/api-documentation/v2)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：在[控制面板](https://hunter.io/api-keys)里从你的个人资料生成 API key。更多信息请参考 [Hunter 的 API 身份验证文档](https://hunter.io/api-documentation/v2#authentication)。
