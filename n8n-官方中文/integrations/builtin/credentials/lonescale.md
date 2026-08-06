---
title: LoneScale 凭证
description: >-
  LoneScale 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  LoneScale 的身份。
contentType:
  - integration
  - reference
nodeTitle: LoneScale credentials
originalFilePath: integrations/builtin/credentials/lonescale.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/lonescale'
url: 'https://docs.n8n.io/integrations/builtin/credentials/lonescale'
layout:
  description:
    visible: false
---

# LoneScale 凭证

{% hint style="info" %}
**大白话**：LoneScale 是帮销售团队「清洗和补全 B2B 线索数据」的工具（把粗糙的联系人名单变成带邮箱、电话、公司信息的完整名单）。n8n 连它只需要一个 **API Key**：到 LoneScale 的帮助中心按说明生成，填进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [LoneScale](../app-nodes/n8n-nodes-base.lonescale.md)
- [LoneScale Trigger（触发器）](../trigger-nodes/n8n-nodes-base.lonescaletrigger.md)

## 准备工作

创建一个 [LoneScale](https://www.lonescale.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [LoneScale 的 API 文档](https://public-api.lonescale.com/api)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：参考 [LoneScale 的生成 API key 文档](https://help-center.lonescale.com/en/articles/6454360-lonescale-public-api) 来生成你的密钥。
