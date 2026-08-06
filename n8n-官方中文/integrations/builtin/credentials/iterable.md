---
title: Iterable 凭证
description: >-
  Iterable 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Iterable 的身份。
contentType:
  - integration
  - reference
nodeTitle: Iterable credentials
originalFilePath: integrations/builtin/credentials/iterable.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/iterable'
url: 'https://docs.n8n.io/integrations/builtin/credentials/iterable'
layout:
  description:
    visible: false
---

# Iterable 凭证

{% hint style="info" %}
**大白话**：Iterable 是一款「跨渠道营销自动化」平台（邮件、短信、推送等营销活动都能管）。n8n 连它只需要一把 **API Key（API 密钥）**。注意：Iterable 分美国版（US）和欧洲版（Europe）两套数据中心，API 文档地址不一样，你要根据自己项目所在区域看对应的文档。在 Iterable 后台按官方说明创建 API key，填进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Iterable](../app-nodes/n8n-nodes-base.iterable.md)

## 前提条件

创建一个 [Iterable](https://iterable.com) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 Iterable 的 API 文档：

- [美国（US）地区的 Iterable 项目](https://api.iterable.com/api/docs)
- [欧洲（Europe）地区的 Iterable 项目](https://api.eu.iterable.com/api/docs)

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：创建 API key 的方法请参考 [Iterable 的创建 API 密钥文档](https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys#creating-api-keys)。
