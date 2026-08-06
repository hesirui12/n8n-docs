---
title: ConvertKit 凭证
description: >-
  ConvertKit 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  ConvertKit 的身份。
contentType:
  - integration
  - reference
nodeTitle: ConvertKit credentials
originalFilePath: integrations/builtin/credentials/convertkit.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/convertkit'
url: 'https://docs.n8n.io/integrations/builtin/credentials/convertkit'
layout:
  description:
    visible: false
---

# ConvertKit 凭证

> **大白话**：ConvertKit 是邮件营销工具（发订阅邮件、做自动化序列）。n8n 连接它要一把 **API Secret（API 密钥）**——注意不是叫 Key 而是 Secret。去 ConvertKit 的「账户设置 > 高级」里复制出来，填进 n8n 凭证即可。

这些凭证可以用来验证以下节点的身份：

- [ConvertKit](../app-nodes/n8n-nodes-base.convertkit.md)
- [ConvertKit Trigger](../trigger-nodes/n8n-nodes-base.convertkittrigger.md)

## 准备工作（Prerequisites）

先注册一个 [ConvertKit](https://convertkit.com/) 账号。

## 支持的验证方式（Supported authentication methods）

- API key（API 密钥）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [ConvertKit 的 API 文档](https://developers.convertkit.com/#overview)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API Secret（API 密钥）**：在 [**Account Settings > Advanced（账户设置 > 高级）**](https://app.convertkit.com/account_settings/advanced_settings) 中获取你的 ConvertKit API 密钥，然后在 n8n 中把它填为 **API Secret**。
