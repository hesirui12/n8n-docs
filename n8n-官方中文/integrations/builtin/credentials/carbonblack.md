---
title: Carbon Black 凭证
description: >-
  Carbon Black 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Carbon Black（端点安全产品）的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Carbon Black credentials
originalFilePath: integrations/builtin/credentials/carbonblack.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/carbonblack'
url: 'https://docs.n8n.io/integrations/builtin/credentials/carbonblack'
layout:
  description:
    visible: false
---

# Carbon Black 凭证

> 大白话：Carbon Black 是 Broadcom 家的终端安全防护产品（防病毒/威胁检测那类）。注意：这是一个「纯凭证节点」，意思是 n8n 只负责帮你登录，具体调哪个接口得你自己写（HTTP Request 自定义调用）。你要准备两样：控制台的网址（决定填哪个 URL）和一把 API 密钥（把 Secret Key 当成 Access Token 填进去）。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

- 订阅一个 [Carbon Black 服务](https://www.broadcom.com/products/carbon-black/threat-prevention/carbon-black-cloud)。
- 注册一个 [Carbon Black 开发者账号](https://developer.carbonblack.com/)。

## 验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Carbon Black 官方文档](https://developer.carbonblack.com/reference/carbon-black-cloud/cb-defense/latest/rest-api/)。

这是一个纯凭证节点。更多说明请参考 [Custom API operations（自定义 API 操作）](../custom-api-actions-for-existing-nodes.md)。也可以到 n8n 官网查看 [示例工作流和相关内容](https://n8n.io/integrations/carbon-black/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **URL（网址）**：这个 URL 由你使用的环境/产品网址决定。你可以直接看你的 Carbon Black Cloud 控制台的网址来确定。更多信息请参考 [Carbon Black URL 组成文档](https://developer.carbonblack.com/reference/carbon-black-cloud/authentication#the-url-parts)。
- 一个 **Access Token（访问令牌）**：参考 [Carbon Black 创建 API key 文档](https://developer.carbonblack.com/reference/carbon-black-cloud/authentication#carbon-black-cloud-manages-identities-and-roles) 创建 API key，然后把 **API Secret Key（API 密钥的密钥部分）** 填到 n8n 的 **Access Token** 一栏。
