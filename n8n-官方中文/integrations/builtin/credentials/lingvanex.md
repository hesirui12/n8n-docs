---
title: LingvaNex 凭证
description: >-
  LingvaNex 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  LingvaNex 的身份。
contentType:
  - integration
  - reference
nodeTitle: LingvaNex credentials
originalFilePath: integrations/builtin/credentials/lingvanex.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/lingvanex'
url: 'https://docs.n8n.io/integrations/builtin/credentials/lingvanex'
layout:
  description:
    visible: false
---

# LingvaNex 凭证

{% hint style="info" %}
**大白话**：LingvaNex 是机器翻译服务（支持很多语言，企业可以用来翻译产品文案、客服消息等）。n8n 连它只需要一个 **API Key**：登录 LingvaNex 后在 **Account（账号）** 页面生成，复制粘贴进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [LingvaNex](../app-nodes/n8n-nodes-base.lingvanex.md)

## 准备工作

创建一个 [LingvaNex](https://lingvanex.com) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Lingvanex 的 Cloud API 文档](https://docs.lingvanex.com/reference/overview)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：从你的 **Account（账号）** 页面生成。更详细的步骤请参考 [在哪里获取授权密钥？](https://docs.lingvanex.com/reference/translator-service-faq#where-can-i-get-the-authorization-key)。
