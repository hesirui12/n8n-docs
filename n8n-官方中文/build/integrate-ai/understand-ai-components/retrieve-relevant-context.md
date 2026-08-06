---
title: RAG in n8n
description: >-
  With Retrieval-Augmented Generation (RAG), you can give your models access to
  context-specific resources to help generate relevant answers. Learn how it
  works and how to use RAG in n8n.
contentType: overview
nodeTitle: Retrieve relevant context
originalFilePath: advanced-ai/rag-in-n8n.md
originalUrl: 'https://docs.n8n.io/advanced-ai/rag-in-n8n'
url: >-
  https://docs.n8n.io/build/integrate-ai/understand-ai-components/retrieve-relevant-context
layout:
  description:
    visible: false
---



# n8n 中的 RAG（RAG in n8n）

## 什么是 RAG（What is RAG）

[检索增强生成（Retrieval-Augmented Generation，RAG）](#user-content-fn-1)[^1]是一种通过把语言模型与外部数据源结合起来，从而改善 AI 回答质量的技术。RAG 系统不会只依赖模型内部的训练数据，而是会先检索相关文档，让回答建立在（ground）[^2]最新、特定领域或专有的知识之上。RAG 工作流通常依赖向量存储（vector store）来高效管理和检索这些外部数据。

## 什么是向量存储？（What is a vector store?）

[向量存储（vector store）](#user-content-fn-3)[^3]是一种特殊数据库，专门用来存储和检索高维向量（high-dimensional vectors）：也就是文本、图片或其他数据的数值表示。当你上传一份文档时，向量存储会把它拆分成小块（chunk），再用[嵌入模型（embedding model）](#user-content-fn-4)[^4]把每一块转换成向量。

你可以用相似性搜索（similarity search）来查询这些向量——它基于*语义含义*构造结果，而不是靠关键词匹配。这让向量存储成为 RAG 以及其他需要在大规模知识库上检索和推理的 AI 系统的强大基础。

## 如何在 n8n 中使用 RAG（How to use RAG in n8n）

{% hint style="info" %}
**从 RAG 模板开始（Start with a RAG template）**

👉 想上手试试 n8n 中的 RAG？用 [RAG 入门模板（RAG Starter Template）](https://n8n.io/workflows/5010-rag-starter-template-using-simple-vector-stores-form-trigger-and-openai)。这个模板包含两个现成的工作流：一个用于上传文件，一个用于查询文件。
{% endhint %}

### 向向量存储中插入数据（Inserting data into your vector store）

在智能体能访问你的专属知识之前，你需要先把数据上传到向量存储里：

1. 添加获取源数据所需的节点。
2. 插入一个 **Vector Store** 节点（例如 [Simple Vector Store](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemory)），并选择 **Insert Documents** 操作。
3. 选择一个**嵌入模型（embedding model）**，它会把你的文本转换成向量嵌入（vector embeddings）。关于如何选择合适的嵌入模型，可以参考 FAQ 中[如何选择合适的嵌入模型](#how-do-i-choose-the-right-embedding-model)一节。
4. 添加一个 [Default Data Loader](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader) 节点，它会把你的内容拆分成小块。你可以用默认设置，也可以自定义分块策略：
	* **Character Text Splitter：** 按字符长度拆分。
	* **Recursive Character Text Splitter：** 递归地按 Markdown、HTML、代码块或简单字符拆分（大多数场景推荐用它）。
	* **Token Text Splitter：** 按 token 数量拆分。
5. （可选）给每个小块添加**元数据（metadata）**，丰富上下文，方便之后更好地过滤。

### 查询你的数据（Querying your data）

查询数据主要有两种方式：通过智能体（agent），或者直接通过节点。

### 使用智能体（Using agents）

1. 在工作流中添加一个[智能体（agent）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)节点。
2. 把向量存储作为**工具（tool）**添加进来，并给它写一个**描述（description）**，帮助智能体理解什么时候该使用它：
	* 设置 **limit**，定义返回多少个块。
	* 开启 **Include Metadata（包含元数据）**，为每个块提供额外上下文。
3. 添加与插入数据时相同的**嵌入模型（embedding model）**。

{% hint style="info" %}
**专业建议（Pro tip）**

为了在昂贵的模型上节省 token，你可以先用 [Vector Store Question Answer 工具](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore)检索相关数据，再把结果传给 Agent。想看实际效果，可以参考[这个模板](https://n8n.io/workflows/5011-save-costs-in-rag-workflows-using-the-qanda-tool-with-multiple-models)。
{% endhint %}

### 直接使用节点（Using the node directly）

1. 把向量存储节点拖到画布上，选择 **Get Many** 操作。
2. 输入查询或提示词（prompt）：
	* 设置 **limit**，控制返回多少个块。
	* 需要时开启 **Include Metadata**。

{% hint style="info" %}
**大白话**：RAG 就是「先查资料，再让 AI 回答」。你把公司文档、个人笔记等资料塞进向量存储，AI 回答前会先在里面搜相关内容，再结合这些内容作答。这样它就不会只凭训练时的「老知识」瞎编，能答出你资料里才有的最新信息。典型流程：文档加载器把资料拿进来 → 分割器切成小块 → 嵌入模型转成向量存好 → 用户提问时按意思搜出最相关的几块 → 交给 AI 组织回答。
{% endhint %}

## 常见问题（FAQs）


### 如何选择合适的嵌入模型？（How do I choose the right embedding model?）


合适的嵌入模型要视具体情况而定。

一般来说，较小的模型（例如 `text-embedding-ada-002`）更快、更便宜，适合短小、通用的文档或轻量级 RAG 工作流。较大的模型（例如 `text-embedding-3-large`）语义理解能力更好，最适合长文档、复杂主题，或对准确性要求很高的情况。


### 我的场景适合哪种文本拆分方式？（What is the best text splitting for my use case?）


这同样在很大程度上取决于你的数据：

* 小块（例如 200 到 500 个 token）适合精细化的检索。
* 大块可能携带更多上下文，但也可能被稀释或引入噪声。

使用合适的重叠（overlap）大小，对 AI 理解块的上下文很重要。这也是为什么用 Markdown 或代码块拆分，往往能让块的质量更好。

另一个好办法是给块添加更多上下文（例如说明这块来自哪份文档）。如果你想深入了解，可以看看 [Anthropic 的这篇文章](https://www.anthropic.com/news/contextual-retrieval)。

[^1]: 检索增强生成（Retrieval-augmented generation，RAG）是一种让 LLM 从外部来源获取新信息以改善 AI 回答的技术。RAG 系统会检索相关文档，让回答建立在最新、特定领域或专有的知识之上，以补充模型原有的训练数据。RAG 系统通常依赖向量存储来高效管理和检索这些外部数据。
[^2]: 在 AI 中，尤其是在检索增强生成（RAG）语境下，groundedness（有依据）和 ungroundedness（无依据）衡量的是模型的回答在多大程度上准确反映了来源信息。模型使用来源文档生成有依据（grounded）的回答；而无依据（ungrounded）的回答则涉及缺乏来源支撑的推测或幻觉（hallucination）。
[^3]: 向量存储（vector store），也叫向量数据库（vector database），存储信息的数学表示。与嵌入（embeddings）和检索器（retrievers）配合使用，可以创建一个你的 AI 在回答问题时可以访问的数据库。
[^4]: 嵌入（embeddings）是使用向量的数据数值表示。AI 通过把数值映射到多个维度来理解复杂数据和关系。向量数据库（vector database），也叫向量存储（vector store），就是专门用来存储和访问嵌入的数据库。
