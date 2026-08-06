---
title: Structured Output Parser 节点常见问题
contentType:
  - integration
  - reference
priority: high
nodeTitle: Structured Output Parser 节点常见问题
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured/common-issues
description: >-
  n8n（工作流自动化平台）中 Structured Output Parser 节点的常见问题和错误文档。
  包含问题详情和建议的解决方案。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 常见问题（Common issues）

下面是 [Structured Output Parser 节点](./README.md) 的一些常见错误和问题，以及排查解决的步骤。

## 处理参数时的差异（Processing parameters）

Structured Output Parser 节点是一个子节点[^1]。在用表达式处理多个数据项时，子节点和其他节点的行为不一样。

大多数节点（包括根节点[^2]）可以接收任意数量的数据项作为输入，处理完再输出结果。你可以用表达式引用输入项，节点会依次为每个数据项解析表达式。例如，输入五个姓名值时，表达式 `{{ $json.name }}` 会依次解析出每个姓名。

但在子节点里，表达式**始终只解析第一个数据项**。例如，输入五个姓名值时，表达式 `{{ $json.name }}` 始终解析出第一个姓名。

## 把输出解析器节点加到 AI 节点上

你可以把输出解析器节点挂到选定的 [AI 根节点](../../root-nodes/README.md) 上。

要给某个节点加 Structured Output Parser：在你想格式化的 AI 根节点里，打开 **Require Specific Output Format**（要求特定输出格式）选项。打开后会出现一个新的 **output parser**（输出解析器）挂载点。点击这个挂载点，就能把 Structured Output Parser 节点加到该节点上。

## 用结构化输出解析器格式化中间步骤

Structured Output Parser 节点负责结构化 **AI Agent 的最终输出**。它**不适合**用来把中间步骤的输出结构化成传给其他 AI 工具或阶段的数据。

如果你要的是中间输出的特定格式，请在 **AI Agent** 的 **System Message**（系统消息）里写明响应结构。消息里可以包含一个 schema 或示例响应，让 Agent 照着这个模板来组织它的结果。

## 结构化 Agent 的输出

在搭配 [agents](../../root-nodes/n8n-nodes-langchain.agent/README.md) 使用时，结构化输出解析经常**不太可靠**。

如果你的工作流用了 Agent，n8n 建议：单独用一条 [LLM 链](../../root-nodes/n8n-nodes-langchain.chainllm.md) 来接收 Agent 的数据并进行解析。这样得到的结果比直接在 Agent 工作流里解析更稳定、更一致。

[^1]: n8n 集群节点（cluster nodes）由一个或多个连接到根节点上的子节点组成。子节点扩展根节点的功能，提供对特定服务或资源的访问，或提供特定类型的专用处理（比如计算器功能）。
[^2]: 每个 n8n 集群节点都包含一个根节点，它定义了集群的主要功能。一个或多个子节点挂到根节点上，扩展它的功能。
