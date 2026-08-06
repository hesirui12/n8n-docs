---
title: OpenAI Chat Model 节点常见问题
description: >-
  n8n（工作流自动化平台）中 OpenAI Chat Model 节点的常见问题和错误文档。
  包含问题详情和建议的解决方案。
contentType:
  - integration
  - reference
priority: high
nodeTitle: OpenAI Chat Model 节点常见问题
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/common-issues
layout:
  description:
    visible: false
---

# OpenAI Chat Model 节点常见问题

下面是 [OpenAI Chat Model 节点](README.md) 的一些常见错误和问题，以及排查解决的步骤。

## 处理参数时的差异（Processing parameters）

OpenAI Chat Model 节点是一个子节点[^1]。在用表达式处理多个数据项时，子节点和其他节点的行为不一样。

大多数节点（包括根节点[^2]）可以接收任意数量的数据项作为输入，处理完再输出结果。你可以用表达式引用输入项，节点会依次为每个数据项解析表达式。例如，输入五个姓名值时，表达式 `{{ $json.name }}` 会依次解析出每个姓名。

但在子节点里，表达式**始终只解析第一个数据项**。例如，输入五个姓名值时，表达式 `{{ $json.name }}` 始终解析出第一个姓名。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/wqdQXLzKrIsqxA7CuhxT/" %}

[^1]: n8n 集群节点（cluster nodes）由一个或多个连接到根节点上的子节点组成。子节点扩展根节点的功能，提供对特定服务或资源的访问，或提供特定类型的专用处理（比如计算器功能）。
[^2]: 每个 n8n 集群节点都包含一个根节点，它定义了集群的主要功能。一个或多个子节点挂到根节点上，扩展它的功能。
