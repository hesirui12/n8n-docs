---
title: Anthropic 节点文档
description: >-
  学习如何在 n8n 中使用 Anthropic 节点。按照技术文档将
  Anthropic 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Anthropic 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.anthropic.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.anthropic
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.anthropic
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Anthropic 就是 Claude 大模型的公司。这个节点让你在 n8n 工作流里直接调用 Claude：1）文字对话——给模型发消息生成回答；2）分析文档/图片——上传 PDF、图片让 Claude 读内容并回答问题；3）文件管理——上传、获取元数据、列出、删除文件；4）提示词工具——自动生成、改进、或把提示词模板化（把一段话里可变的地方抽出来变成变量）。适合做文档总结、客服问答、图片理解等场景。
{% endhint %}

# Anthropic 节点

使用 Anthropic 节点来自动化你在 Anthropic 中的工作，并把它与其它应用集成。n8n 内置支持 Anthropic 的多种功能，包括分析、上传、获取和删除文档、文件和图片，以及生成、改进或模板化提示词。

在本页你可以看到 Anthropic 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于此节点的认证信息，请参考[这里](../credentials/anthropic.md)。
{% endhint %}

## 操作

* Document（文档）：
	* Analyze Document（分析文档）：输入文档并回答关于文档的问题。
* File（文件）：
	* Upload File（上传文件）：上传文件到 Anthropic API，供之后使用。
	* Get File Metadata（获取文件元数据）：从 Anthropic API 获取文件的元数据。
	* List Files（列出文件）：从 Anthropic API 列出文件。
	* Delete File（删除文件）：从 Anthropic API 删除文件。
* Image（图片）：
	* Analyze Image（分析图片）：输入图片并回答关于图片的问题。
* Prompt（提示词）：
	* Generate Prompt（生成提示词）：为模型生成一个提示词。
	* Improve Prompt（改进提示词）：为模型改进一个提示词。
	* Templatize Prompt（模板化提示词）：为模型把提示词模板化。
* Text（文本）：
	* Message a Model（给模型发消息）：用 Anthropic 模型生成一次补全回答。

## 模板与示例

[浏览 Anthropic 节点的官方集成模板](https://n8n.io/integrations/anthropic)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Anthropic 的文档](https://docs.anthropic.com/en/api/overview)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
