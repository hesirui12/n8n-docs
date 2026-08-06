---
title: Recorded Future 凭证
description: >-
  Recorded Future 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Recorded Future 的身份。
contentType:
  - integration
  - reference
nodeTitle: Recorded Future credentials
originalFilePath: integrations/builtin/credentials/recordedfuture.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/recordedfuture'
url: 'https://docs.n8n.io/integrations/builtin/credentials/recordedfuture'
layout:
  description:
    visible: false
---

# Recorded Future 凭证

{% hint style="info" %}
**大白话**：Recorded Future 是给安全团队用的「威胁情报」平台，能预测和追踪网络攻击、恶意软件、钓鱼域名等。n8n 连它只需要一个 **Access Token（访问令牌）**：在 Recorded Future 的账号/API 设置里生成一把令牌填进来就行。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

注册一个 [Recorded Future](https://www.recordedfuture.com) 账号。

## 支持的验证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Recorded Future 官方文档](https://api.recordedfuture.com/index.html)。Recorded Future 帮助中心的其余内容需要付费账号才能访问。

这是一个「仅凭证」节点（credential-only node），没有自带的可视化操作界面。更多信息请参考[为已有节点添加自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。你也可以在 n8n 官网上查看 [Recorded Future 示例工作流和相关内容](https://n8n.io/integrations/recorded-future/)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- 一个 API **Access Token（访问令牌）**

关于如何获取你的 API 访问令牌，请参考 [Recorded Future APIs 文档](https://support.recordedfuture.com/hc/en-us/categories/16372120363539-Recorded-Future-APIs)。
