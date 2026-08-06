---
title: APITemplate.io 凭证
description: >-
  APITemplate.io 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  APITemplate.io 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: APITemplate.io credentials
originalFilePath: integrations/builtin/credentials/apitemplateio.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/apitemplateio'
url: 'https://docs.n8n.io/integrations/builtin/credentials/apitemplateio'
layout:
  description:
    visible: false
---

# APITemplate.io 凭证

{% hint style="info" %}
**大白话**：APITemplate.io 是一个「用模板自动生成图片/PDF」的服务（比如自动生成发票、证书、社交媒体图）。n8n 连它只需要一把 **API Key（API 密钥）**，注册账号后去 **API Integration** 页面复制即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [APITemplate.io](../app-nodes/n8n-nodes-base.apitemplateio.md)

## 准备工作

注册一个 [APITemplate.io](https://apitemplate.io/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [APITemplate.io 官方 API 文档](https://apitemplate.io/apiv2/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：注册好 APITemplate.io 账号后，进入 **API Integration（API 集成）** 页面复制 **API Key**。
