---
title: Mistral AI 节点文档
description: >-
  学习如何在 n8n 中使用 Mistral AI 节点。按照技术文档将 Mistral
  AI 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Mistral AI 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.mistralai.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mistralai'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.mistralai'
layout:
  description:
    visible: false
---

# Mistral AI 节点

> 💡 **大白话**：Mistral AI 是一家法国 AI 公司，提供大模型服务。这个节点目前主要用来做「OCR 文字识别」：把 PDF、图片里的文字自动提取成文本，支持多种模型、文件类型和输入方式。

使用 Mistral AI 节点来自动化你在 Mistral AI 中的工作，并把它与其它应用集成。n8n 内置支持使用各种模型、文件类型和输入方式提取文本。

在本页你可以看到 Mistral AI 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Mistral 凭证](../credentials/mistral.md)。
{% endhint %}

## 节点参数（Node parameters）

* **Resource（资源）**：Mistral AI 要操作的资源类型。当前实现支持 "Document"（文档）资源。
* **Operation（操作）**：要执行的操作：
	* **Extract Text（提取文本）**：使用光学字符识别（OCR）从文档或图片中提取文字。
* **Model（模型）**：用于当前操作的模型。当前版本要求使用 `mistral-ocr-latest` 模型。
* **Document Type（文档类型）**：要处理的文档格式。可以是 "Document"（文档）或 "Image"（图片）。
* **Input Type（输入方式）**：如何传入文档：
	* **Binary Data（二进制数据）**：把文档作为二进制字段传给节点。
	* **URL**：从给定的 URL 抓取文档。
* **Input Binary Field（输入二进制字段）**：使用 "Binary Data" 输入方式时，指定存放文件的输入二进制字段名。
* **URL**：使用 "URL" 输入方式时，要处理的文档或图片的 URL。

## 节点选项（Node options）

* **Enable Batch Processing（启用批量处理）**：是否在同一次 API 调用中处理多个文档。把请求打包在一起可以降低成本。
* **Batch Size（批量大小）**：启用 "Enable Batch Processing" 后，设置每批最多处理的文档数。
* **Delete Files After Processing（处理完后删除文件）**：启用 "Enable Batch Processing" 后，是否在处理完后从 Mistral Cloud 删除文件。

## 模板与示例（Templates and examples）

[浏览 MistralAI 节点文档集成模板](https://n8n.io/integrations/mistral-ai)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Mistral AI 的文档](https://docs.mistral.ai/api/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
