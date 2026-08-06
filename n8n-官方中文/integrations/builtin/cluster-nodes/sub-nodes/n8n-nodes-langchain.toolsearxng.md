---
title: SearXNG Tool 节点文档
description: >-
  了解如何在 n8n 中使用 SearXNG Tool 节点。阅读技术文档，把
  SearXNG Tool 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: SearXNG Tool 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolsearxng.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolsearxng
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolsearxng
layout:
  description:
    visible: false
---

# SearXNG Tool 节点

> **大白话**：这个节点给 AI Agent 加"联网搜索"能力，用的是 **SearXNG**——一个开源的元搜索引擎，聚合多家搜索引擎的结果，而且**不跟踪你**（隐私友好）。注意：你需要自己部署一个 SearXNG 服务（和 n8n 在同一网络里），并且**必须手动开启 JSON 格式输出**（默认配置没开），否则节点用不了。

SearXNG Tool 节点允许你用 SearXNG 把搜索能力集成到工作流中。SearXNG 聚合多个搜索引擎的结果，而且不跟踪你。

在本页中，你可以找到 SearXNG Tool 节点的选项，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/searxng.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点选项

* **Number of Results**（结果数量）：要检索的结果数量。默认是 10。
* **Page Number**（页码）：要检索的搜索结果页码。默认是 1。
* **Language**（语言）：一个两位的[语言代码](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)，按语言过滤搜索结果。例如：`en` 表示英语，`fr` 表示法语。默认是 `en`。
* **Safe Search**（安全搜索）：启用或禁用对搜索结果中露骨内容的过滤。可选 None（不启用）、Moderate（中等）或 Strict（严格）。默认是 None。

## 运行 SearXNG 实例

这个节点要求 SearXNG 服务和你的 n8n 实例跑在同一个网络上。确保你的 n8n 实例能通过网络访问到 SearXNG 服务。

这个节点需要 **JSON 格式**的结果，而默认的 SearXNG 配置没有开启 JSON。要启用 JSON 输出，在你的 SearXNG 实例的 `settings.yml` 文件的 `search.formats` 部分加上 `json`：

```yaml
search:
  # options available for formats: [html, csv, json, rss]
  formats:
    - html
    - json
```

如果 `formats` 部分不存在，就加上它。`settings.yml` 文件的确切位置取决于你怎么安装的 SearXNG。更多信息请看 [SearXNG 配置文档](https://docs.searxng.org/admin/installation-searxng.html#configuration)。

搜索结果的质量和可用性，取决于你所用的 SearXNG 实例的配置和运行状况。

## 模板与示例

[浏览 SearXNG Tool 节点集成模板](https://n8n.io/integrations/searxng) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [SearXNG 的文档](https://docs.searxng.org/)。你也可以看 [LangChain 关于 SearXNG 集成的文档](https://python.langchain.com/docs/integrations/tools/searx_search/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
