---
title: Hybrid Analysis 凭证
description: >-
  Hybrid Analysis 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Hybrid Analysis 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Hybrid Analysis credentials
originalFilePath: integrations/builtin/credentials/hybridanalysis.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/hybridanalysis'
url: 'https://docs.n8n.io/integrations/builtin/credentials/hybridanalysis'
layout:
  description:
    visible: false
---

# Hybrid Analysis 凭证

{% hint style="info" %}
**大白话**：Hybrid Analysis 是一个恶意软件分析平台：把可疑文件传上去，它会在沙箱里运行并给出分析报告（常被安全团队用来检测病毒）。n8n 连它只需要一把 **API Key（API 密钥）**。注意：这个服务在 n8n 里**只有凭证、没有专用节点**，你要配合「HTTP Request 节点」自己调用它的 API。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前提条件

创建一个 [Hybrid Analysis](https://www.hybrid-analysis.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Hybrid Analysis 的 API 文档](https://www.hybrid-analysis.com/docs/api/v2)。

这是一个仅有凭证的节点（credential-only node）。想了解更多，请参考[自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/hybrid-analysis/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：生成 API key 的方法请参考 [Hybrid Analysis 的 API 文档](https://www.hybrid-analysis.com/docs/api/v2)。
