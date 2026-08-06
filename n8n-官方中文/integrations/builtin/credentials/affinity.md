---
title: Affinity 凭证
description: >-
  Affinity 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Affinity 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Affinity credentials
originalFilePath: integrations/builtin/credentials/affinity.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/affinity'
url: 'https://docs.n8n.io/integrations/builtin/credentials/affinity'
layout:
  description:
    visible: false
---

# Affinity 凭证

{% hint style="info" %}
**大白话**：Affinity 是给投资机构、基金用的「人脉关系管理」工具（管联系人、管关系网）。n8n 连它只需要一把 **API Key（API 密钥）**，跟着官方文档生成后填进 n8n 就行。注意：API 功能只有 Scale、Advanced、Enterprise 这几个高阶套餐才有。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Affinity](../app-nodes/n8n-nodes-base.affinity.md)
- [Affinity Trigger（触发器）](../trigger-nodes/n8n-nodes-base.affinitytrigger.md)

## 准备工作

注册一个 [Affinity](https://www.affinity.co/) 账号，套餐需要是 Scale、Advanced 或 Enterprise 档位。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Affinity 官方 API 文档（常见问题）](https://support.affinity.co/s/article/Getting-started-with-the-Affinity-API-FAQs)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：如何获取你的 Affinity API key，请参考 [官方说明](https://support.affinity.co/hc/en-us/articles/360032633992-How-to-obtain-your-Affinity-API-key)。
