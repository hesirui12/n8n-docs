---
title: Default Data Loader 节点文档
description: >-
  了解如何在 n8n 中使用 Default Data Loader 节点。阅读技术文档，把
  Default Data Loader 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Default Data Loader 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader
layout:
  description:
    visible: false
---

# Default Data Loader 节点

> **大白话**：这个节点负责把"二进制文件"（比如 PDF、Word、图片）或 JSON 数据读进来，转成 AI 能读懂的文本格式，然后喂给向量库做检索，或者直接拿来给 AI 做总结。一句话：它是把文件变成 AI 能理解内容的"翻译官"。

使用 Default Data Loader 节点加载二进制数据文件或 JSON 数据，供[向量库](#user-content-fn-1)[^1]使用或进行总结。

在本页中，你可以找到 Default Data Loader 节点支持的全部参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Text Splitting**（文本拆分）：选择以下方式：
	* **Simple**（简单）：使用 [Recursive Character Text Splitter](n8n-nodes-langchain.textsplitterrecursivecharactertextsplitter.md)，块大小（chunk size）为 1000，重叠（overlap）为 200。
	* **Custom**（自定义）：允许你连接任意你选择的文本拆分器。
* **Type of Data**（数据类型）：选择 **Binary**（二进制）或 **JSON**。
* **Mode**（模式）：选择以下方式：
	* **Load All Input Data**（加载全部输入数据）：使用节点收到的所有输入数据。
	* **Load Specific Data**（加载指定数据）：使用[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)来定义要加载的数据。你可以同时添加纯文本和表达式，也就是说，可以用"文本 + 表达式"混合的方式，拼出自己想要的文档内容。
* **Data Format**（数据格式）：当 **Type of Data** 设为 **Binary** 时显示。选择二进制数据的文件 MIME 类型。如果想让 n8n 自动判断格式，就选 **Automatically Detect by MIME Type**（按 MIME 类型自动检测）。如果手动指定了格式，但传入文件的实际 MIME 类型对不上，节点会报错；如果用自动检测，而文件 MIME 类型匹配不上任何受支持的格式，节点会退回使用纯文本格式。

## 节点选项

* **Metadata**（元数据）：设置要随文档一起存进向量库的元数据。之后用向量库节点检索数据时，可以通过 **Metadata Filter**（元数据过滤器）选项来匹配这些元数据。

## 模板与示例

[浏览 Default Data Loader 节点集成模板](https://n8n.io/integrations/default-data-loader) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7MPhMVJM8wcmiOf5zn2m/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 向量库（vector store，也叫向量数据库）用来存储信息的数学表示。把它和 embeddings（嵌入）与检索器（retriever）配合使用，就能创建一个你的 AI 在回答问题时可以查询的数据库。
