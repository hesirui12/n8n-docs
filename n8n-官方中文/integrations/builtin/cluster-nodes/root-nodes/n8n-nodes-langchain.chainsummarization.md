---
title: Summarization Chain 节点文档
description: >-
  学习如何在 n8n 中使用 Summarize Chain 节点。按照技术文档把 Summarize Chain 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Summarization Chain node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainsummarization.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainsummarization
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainsummarization
layout:
  description:
    visible: false
---

# Summarization Chain 节点（摘要链）

{% hint style="info" %}
**大白话**：Summarization Chain 节点用来「批量做摘要」——把很多份文档（比如一大堆邮件、文章、聊天记录）自动总结成要点。文本太长时它会先分块处理，最后合并成一份总结。它是做「资料整理、舆情摘要、会议纪要」这类场景的好帮手。
{% endhint %}

使用 Summarization Chain 节点来总结多份文档。

在这个页面上，你可以找到 Summarization Chain 节点的节点参数，以及更多资源的链接。

## 节点参数（Node parameters）

在 **Data to Summarize（要总结的数据）** 中选择你需要总结的数据类型。你选择的数据类型决定了其他的节点参数。

* **Use Node Input (JSON)（使用节点输入-JSON）** 和 **Use Node Input (Binary)（使用节点输入-二进制）**：总结从工作流进入节点的数据。
	* 你可以配置 **Chunking Strategy（分块策略）**：选择用什么策略来定义数据块的大小。
		* 如果选择 **Simple (Define Below)（简单-在下方定义）**，你可以设置 **Characters Per Chunk（每块字符数）** 和 **Chunk Overlap (Characters)（块重叠-字符）**。
		* 选择 **Advanced（高级）** 的话，可以连接一个提供更多配置选项的 splitter（拆分器）子节点。
* **Use Document Loader（使用文档加载器）**：总结由文档加载器（document loader）子节点提供的数据。

## 节点选项（Node Options）

你可以配置总结方法和提示词。选择 **Add Option（添加选项）** > **Summarization Method and Prompts（总结方法和提示词）**。

**Summarization Method（总结方法）** 中的选项：

* **Map Reduce（映射-归约）**：这是推荐的选项。在 LangChain 文档中了解更多关于 [Map Reduce](https://js.langchain.com/v0.1/docs/modules/chains/document/map_reduce/) 的内容。
* **Refine（细化）**：在 LangChain 文档中了解更多关于 [Refine](https://js.langchain.com/v0.1/docs/modules/chains/document/refine/) 的内容。
* **Stuff（填塞）**：在 LangChain 文档中了解更多关于 [Stuff](https://js.langchain.com/v0.1/docs/modules/chains/document/stuff/) 的内容。

你可以自定义 **Individual Summary Prompts（单个摘要提示词）** 和 **Final Prompt to Combine（最终合并提示词）**。节点里有示例。你必须包含 `"{text}"` 占位符。

{% hint style="info" %}
**大白话（三种总结方法的区别）**：**Stuff** 最简单——把所有内容一次性塞给模型（内容太长会超限）；**Map Reduce** 先把每块内容分别总结，再把各段总结合并成最终总结（适合超长文本，官方推荐）；**Refine** 则是逐块迭代——每总结一块就带上之前的总结一起精修，得到更连贯的结果但更慢更费钱。`"{text}"` 占位符就是告诉模型「把原文填在这里」。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 Summarization Chain 节点文档集成模板](https://n8n.io/integrations/summarization-chain) 或[搜索全部模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [LangChain 的总结（summarization）文档](https://js.langchain.com/docs/tutorials/summarization/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
