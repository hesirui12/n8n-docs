---
title: SerpApi (Google Search) 节点文档
description: >-
  了解如何在 n8n 中使用 SerpApi (Google Search) 节点。阅读技术文档，把
  SerpApi (Google Search) 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: SerpApi (Google Search) 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi
layout:
  description:
    visible: false
---

# SerpApi (Google Search) 节点

> **大白话**：给 AI Agent 加"谷歌搜索"能力——通过 SerpApi（一个把搜索引擎结果包装成 API 的服务）调用 Google 搜索。**注意：这个内置节点已弃用（deprecated）**，未来版本会移除，官方建议改用社区版的 **SerpApi Official** 节点。参数可以设置国家、语言、设备类型、谷歌域名等。

{% hint style="warning" %}
**已弃用（Deprecated）**

这个节点已弃用，将在未来的版本中移除。请使用经过认证的 **SerpApi Official** 社区节点。
{% endhint %}

SerpAPI 节点允许工作流中的 Agent[^1] 调用 Google 的搜索 API。

在本页中，你可以找到 SerpAPI 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/serp.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点选项

* **Country**（国家）：输入你想用的国家代码。支持的国家和国家代码请看 [Google GL 参数：支持的谷歌国家](https://serpapi.com/google-countries)。
* **Device**（设备）：选择用来获取搜索结果的设备。
* **Explicit Array**（强制数组）：选择是否强制 SerpApi 抓取 Google 结果（开启），即使已有缓存版本也不使用（关闭则用缓存）。
* **Google Domain**（谷歌域名）：输入要使用的谷歌域名。支持的域名请看 [支持的谷歌域名](https://serpapi.com/google-domains)。
* **Language**（语言）：输入你想用的语言代码。支持的语言和语言代码请看 [Google HL 参数：支持的谷歌语言](https://serpapi.com/google-languages)。

## 模板与示例

[浏览 SerpApi (Google Search) 节点集成模板](https://n8n.io/integrations/serpapi) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [Serp 的文档](https://serpapi.com/search-api)。你也可以看 [LangChain 关于 Serp 集成的文档](https://js.langchain.com/docs/integrations/tools/serpapi/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
