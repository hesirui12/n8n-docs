---
title: OpenCTI 凭证
description: >-
  OpenCTI 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  OpenCTI 的身份。
contentType:
  - integration
  - reference
nodeTitle: OpenCTI credentials
originalFilePath: integrations/builtin/credentials/opencti.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/opencti'
url: 'https://docs.n8n.io/integrations/builtin/credentials/opencti'
layout:
  description:
    visible: false
---

# OpenCTI 凭证

{% hint style="info" %}
**大白话**：OpenCTI 是给网络安全团队用的「威胁情报平台」（把各种网络威胁信息汇总、关联、分析）。n8n 连它只需要一把 **API Key（API 密钥）**，去你账号的「Profile（个人资料）> API access（API 访问）」里找到或生成就行。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

注册一个 [OpenCTI](https://filigran.io/solutions/open-cti/) 开发者账号。

## 验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [OpenCTI 官方文档](https://docs.opencti.io/latest/)。

这是一个「仅凭证」节点（credential-only node）。更多信息请参考[为现有节点添加自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。也可以在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/opencti/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：要获取你的 API key，进入 **Profile（个人资料）> API access（API 访问）**。更多信息请参考 OpenCTI 的 [集成身份验证文档](https://docs.opencti.io/latest/deployment/integrations/#authentication)。
