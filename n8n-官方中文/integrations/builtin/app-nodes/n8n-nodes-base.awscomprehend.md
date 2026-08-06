---
title: AWS Comprehend 节点文档
description: >-
  学习如何在 n8n 中使用 AWS Comprehend 节点。按照技术文档将 AWS
  Comprehend 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS Comprehend 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.awscomprehend.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awscomprehend
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awscomprehend
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：AWS Comprehend 是 AWS 的「自然语言理解」服务，专门分析文字。这个节点目前只有两个操作：识别一段文字是什么语言（语言检测），以及分析这段文字的情感倾向（正面/负面/中性）。典型场景：把客户评论自动打上「好评/差评」标签，或者按语言自动分流。
{% endhint %}

# AWS Comprehend 节点

使用 AWS Comprehend 节点来自动化你在 AWS Comprehend 中的工作，并把它与其它应用集成。n8n 内置支持 AWS Comprehend 的大量功能，包括识别和分析文本。

在本页你可以看到 AWS Comprehend 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [AWS Comprehend 凭证](../credentials/aws.md)。
{% endhint %}

## 操作

**Text（文本）**

- Identify the dominant language（识别主要语言）
- Analyse the sentiment of the text（分析文本情感）

## 模板与示例

[浏览 AWS Comprehend 节点的官方集成模板](https://n8n.io/integrations/aws-comprehend)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
