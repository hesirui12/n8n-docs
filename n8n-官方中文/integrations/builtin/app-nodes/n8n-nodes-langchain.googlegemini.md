---
title: Google Gemini 节点文档
description: >-
  学习如何在 n8n 中使用 Google Gemini 节点。按照技术文档
  将 Google Gemini 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Google Gemini 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.googlegemini.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.googlegemini
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.googlegemini
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Google Gemini 是谷歌的大模型系列。这个节点让你在 n8n 里直接调用 Gemini 的各项能力：文字对话、分析图片/音频/视频/文档并回答问题、把录音转成文字（转写）、用提示词生成图片或视频、以及搭建「文件搜索」（RAG 检索增强生成，让模型能查你自己的知识库文件）等。适合做多模态内容分析、自动生成图文视频、语音转写等流程。
{% endhint %}

# Google Gemini 节点

使用 Google Gemini 节点来自动化你在 Google Gemini 中的工作，并把它与其它应用集成。n8n 内置支持 Google Gemini 的多种功能，包括处理音频、视频、图片、文档和文件，用于分析、生成和转写。

在本页你可以看到 Google Gemini 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于此节点的认证信息，请参考[这里](../credentials/googleai.md)。
{% endhint %}

## 操作

* Audio（音频）：
	* Analyze Audio（分析音频）：输入音频并回答关于它的问题。
	* Transcribe a Recording（转写录音）：把音频转成文字。
* Document（文档）：
	* Analyze Document（分析文档）：输入文档并回答关于文档的问题。
* File Search（文件搜索）：
	* Create File Search Store（创建文件搜索库）：为 RAG（检索增强生成）创建新的文件搜索库。
	* Delete File Search Store（删除文件搜索库）：删除文件搜索库。
	* List File Search Stores（列出文件搜索库）：列出用户拥有的全部文件搜索库。
	* Upload to File Search Store（上传到文件搜索库）：把文件上传到文件搜索库，用于 RAG（检索增强生成）。
* Image（图片）：
	* Analyze Image（分析图片）：输入图片并回答关于图片的问题。
	* Generate an Image（生成图片）：根据文本提示词创建图片。
	* Edit Image（编辑图片）：上传一张或多张图片，并根据提示词进行修改。
* Media File（媒体文件）：
	* Upload Media File（上传媒体文件）：上传文件到 Google Gemini API，供之后使用。
* Text（文本）：
	* Message a Model（给模型发消息）：用 Google Gemini 模型生成一次补全回答。
* Video（视频）：
	* Analyze Video（分析视频）：输入视频并回答关于它的问题。
	* Generate a Video（生成视频）：根据文本提示词创建视频。
	* Download Video（下载视频）：通过 URL 从 Google Gemini API 下载生成的视频。

## 模板与示例

[浏览 Google Gemini 节点的官方集成模板](https://n8n.io/integrations/google-gemini)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Google Gemini 的文档](https://ai.google.dev/gemini-api/docs)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
