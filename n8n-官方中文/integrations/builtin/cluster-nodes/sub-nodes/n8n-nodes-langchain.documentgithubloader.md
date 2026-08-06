---
title: GitHub Document Loader 节点文档
description: >-
  了解如何在 n8n 中使用 GitHub Document Loader 节点。阅读技术文档，把
  GitHub Document Loader 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: GitHub Document Loader 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentgithubloader.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentgithubloader
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentgithubloader
layout:
  description:
    visible: false
---

# GitHub Document Loader 节点

> **大白话**：这个节点用来把 GitHub 仓库里的文件内容拉出来，转成 AI 能读的文本，喂给向量库或用于总结。比如你有个开源项目仓库，想让 AI 基于仓库里的文档回答问题，就用它把仓库"读"进来。注意：官方已经不再维护它，以后版本会被删掉，能用别的加载器就别用它。

{% hint style="warning" %}
**已弃用（Deprecated）**

该节点已被弃用，将在未来版本中移除。
{% endhint %}

使用 GitHub Document Loader 节点从 GitHub 仓库加载数据，供[向量库](#user-content-fn-1)[^1]使用或进行总结。

在本页中，你可以找到 GitHub Document Loader 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/github.md)找到该节点的认证信息。该节点不支持使用 OAuth 认证。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Text Splitting**（文本拆分）：选择以下方式：
	* **Simple**（简单）：使用 [Recursive Character Text Splitter](n8n-nodes-langchain.textsplitterrecursivecharactertextsplitter.md)，块大小（chunk size）为 1000，重叠（overlap）为 200。
	* **Custom**（自定义）：允许你连接任意你选择的文本拆分器。
* **Repository Link**（仓库链接）：输入你的 GitHub 仓库 URL。
* **Branch**（分支）：输入要使用的分支名。

## 节点选项

* **Recursive**（递归）：选择是否包含子文件夹和子文件（开启=包含，关闭=不包含）。
* **Ignore Paths**（忽略路径）：输入要忽略的目录。

## 模板与示例

[浏览 GitHub Document Loader 节点集成模板](https://n8n.io/integrations/github-document-loader) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7MPhMVJM8wcmiOf5zn2m/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: 向量库（vector store，也叫向量数据库）用来存储信息的数学表示。把它和 embeddings（嵌入）与检索器（retriever）配合使用，就能创建一个你的 AI 在回答问题时可以查询的数据库。
