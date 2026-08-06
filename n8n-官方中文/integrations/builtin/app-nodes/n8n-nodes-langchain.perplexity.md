---
title: Perplexity 节点文档
description: >-
  学习如何在 n8n 中使用 Perplexity 节点。按照技术文档将
  Perplexity 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Perplexity 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.perplexity.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.perplexity
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.perplexity
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Perplexity 是一家以「AI 搜索引擎」出名的公司——它的模型在回答时会自动联网搜索，答案带来源引用。这个节点目前只支持一个操作：Message a Model（给模型发消息），把文本发给 Perplexity 模型，让它生成一次或多次补全回答。适合做带联网搜索的问答机器人、资料调研等流程。
{% endhint %}

# Perplexity 节点

使用 Perplexity 节点来自动化你在 Perplexity 中的工作，并把它与其它应用集成。n8n 内置支持给模型发消息。

在本页你可以看到 Perplexity 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于此节点的认证信息，请参考[这里](../credentials/perplexity.md)。
{% endhint %}

## 操作

* **Message a Model（给模型发消息）**：为给定文本生成一个或多个补全回答。

## 模板与示例

[浏览 Perplexity 节点的官方集成模板](https://n8n.io/integrations/perplexity)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Perplexity 的文档](https://docs.perplexity.ai/home)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
