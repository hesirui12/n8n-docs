---
title: Workflow Retriever 节点文档
description: >-
  了解如何在 n8n 中使用 Workflow Retriever 节点。阅读技术文档，把
  Workflow Retriever 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Workflow Retriever 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrieverworkflow.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrieverworkflow
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrieverworkflow
layout:
  description:
    visible: false
---

# Workflow Retriever 节点

> **大白话**：这个检索器节点有点特别——它不从数据库里检索，而是**调用另一个 n8n 工作流**来拿数据。你可以指定要调用哪个工作流（按工作流 ID，或者直接粘贴一份完整的工作流 JSON），把它的输出当作检索结果，供 Retrieval QA Chain 或其他检索器使用。适合把"数据获取逻辑"单独拆成一个工作流复用的场景。

使用 Workflow Retriever 节点，从一个 n8n 工作流中检索数据，供 Retrieval QA Chain 或其他 Retriever 节点使用。

在本页中，你可以找到 Workflow Retriever 节点的参数，以及更多资源链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Source（来源）

告诉 n8n 要调用哪个工作流。你可以二选一：

* **Database**（数据库）：输入一个工作流 ID。
* **Parameter**（参数）：粘贴一份完整的[工作流 JSON](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/export-and-import)。

### Workflow values（工作流值）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/i66Pv0lYL7QjJ9F9tZUj/" %}

## 模板与示例

[浏览 Workflow Retriever 节点集成模板](https://n8n.io/integrations/workflow-retriever) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的通用检索器文档](https://js.langchain.com/docs/concepts/retrievers/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
