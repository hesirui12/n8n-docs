---
title: Rapid7 InsightVM 凭证
description: >-
  Rapid7 InsightVM 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Rapid7 InsightVM 的身份。
contentType:
  - integration
  - reference
nodeTitle: Rapid7 InsightVM credentials
originalFilePath: integrations/builtin/credentials/rapid7insightvm.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/rapid7insightvm'
url: 'https://docs.n8n.io/integrations/builtin/credentials/rapid7insightvm'
layout:
  description:
    visible: false
---

# Rapid7 InsightVM 凭证

{% hint style="info" %}
**大白话**：Rapid7 InsightVM 是 Rapid7 家的「漏洞管理」平台，用来持续扫描网络和设备、找出安全漏洞。n8n 连它需要两样东西：一个 **URL**（你要调用的 API 接口地址）和一把 **API Key（API 密钥）**——去 Rapid7 平台里创建一把平台 API 密钥填进来就行。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

注册一个 [Rapid7 InsightVM](https://www.rapid7.com/products/insightvm/) 账号。

## 支持的验证方式

* API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Rapid7 InsightVM 官方 API 文档](https://help.rapid7.com/insightvm/en-us/api/integrations.html)。

这是一个「仅凭证」节点（credential-only node），没有自带的可视化操作界面。更多信息请参考[为已有节点添加自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。你也可以在 n8n 官网上查看 [Rapid7 Insight Platform 示例工作流和相关内容](https://n8n.io/integrations/rapid7-insight-platform/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Rapid7 InsightVM](https://www.rapid7.com/products/insightvm/) 账号，以及：

* **URL**：你要请求的资源或数据所在的 API 端点地址。关于期望格式的更多信息，请参考 [Rapid7 API 总览的端点章节](https://docs.rapid7.com/insight/api-overview/#endpoint)。
* **API Key（API 密钥）**：请参考 [Rapid7 管理平台 API 密钥文档](https://docs.rapid7.com/insight/managing-platform-api-keys/) 创建 API 密钥。

关于向该服务验证身份的更多信息，请参考 [Rapid7 InsightVM 官方 API 文档](https://help.rapid7.com/insightvm/en-us/api/integrations.html)。
