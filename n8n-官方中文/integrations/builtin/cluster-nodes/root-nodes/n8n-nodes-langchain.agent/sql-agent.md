---
title: SQL AI Agent 节点文档
description: >-
  学习如何在 n8n 中使用 AI Agent 节点的 SQL Agent。
  按照技术文档把 SQL Agent 集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: SQL AI Agent node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/sql-agent.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/sql-agent
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/sql-agent
layout:
  description:
    visible: false
---

# SQL AI Agent 节点（SQL 智能体）

{% hint style="info" %}
**大白话**：这个页面讲的是 AI Agent 的一种旧模式——「SQL Agent」。它的用处是：你直接用大白话问数据库问题，它自动把问题翻译成 SQL 查询语句、执行查询，再把结果用友好的方式展示给你。相当于给数据库装了一个「自然语言问答」的入口。**注意：这个功能已在 2025 年 2 月被移除**，现在所有 AI Agent 统一使用 Tools Agent（工具智能体），这篇文档主要给旧用户参考。
{% endhint %}

{% hint style="info" %}
**功能已移除（Feature removed）**

n8n 在 2025 年 2 月移除了这个功能。
{% endhint %}

SQL Agent 使用 SQL 数据库作为数据源。它能理解自然语言问题，把它们转换成 SQL 查询，执行查询，并以用户友好的格式呈现结果。这个智能体对于构建数据库的自然语言交互界面很有价值。

关于 AI Agent 节点本身的更多信息，请参考 [AI Agent](README.md)。

## 节点参数（Node parameters）

使用以下参数配置 SQL Agent。

### Data Source（数据源）

选择要用作节点数据源的数据库。选项包括：

* **MySQL**：选择此项以使用 MySQL 数据库。
    * 同时选择 **Credential for MySQL（MySQL 的凭据）**。
* **SQLite**：选择此项以使用 SQLite 数据库。
    * 你必须先在 Agent 之前添加一个 [Read/Write File From Disk（从磁盘读写文件）](../../../core-nodes/n8n-nodes-base.readwritefile.md) 节点来读取你的 SQLite 文件。
    * 同时输入来自 Read/Write File From Disk 节点的 SQLite 文件的 **Input Binary Field（输入二进制字段）** 名称。
* **Postgres**：选择此项以使用 Postgres 数据库。
    * 同时选择 **Credential for Postgres（Postgres 的凭据）**。

{% hint style="warning" %}
**Postgres 和 MySQL 智能体（Postgres and MySQL Agents）**

如果你使用 [Postgres](../../../credentials/postgres.md) 或 [MySQL](../../../credentials/mysql.md)，这个智能体不支持凭据隧道（credential tunnel）选项。
{% endhint %}

### Prompt（提示词）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Ss9Y6clfLTwlXMx69w6E/" %}

## 节点选项（Node options）

使用以下选项来微调 SQL Agent 节点的行为：

### Ignored Tables（忽略的表）

如果你希望节点忽略数据库中的某些表，请输入你想忽略的表名列表，用逗号分隔。

如果留空，智能体不会忽略任何表。

### Include Sample Rows（包含示例行）

输入要包含在发给智能体的提示词中的示例行数量。默认是 `3`。

示例行可以帮助智能体理解数据库的结构（schema），但同时也会增加使用的 token（令牌）数量。

### Included Tables（包含的表）

如果你只想包含数据库中的特定表，请输入要包含的表名列表，用逗号分隔。

如果留空，智能体会包含所有表。

### Prefix Prompt（前缀提示词）

输入一条想在 **Prompt（提示词）** 文本之前发送给智能体的消息。这条初始消息可以为智能体提供更多上下文和指导，告诉它能做什么、不能做什么，以及如何格式化响应。

n8n 会在这个字段中填入一个示例。

### Suffix Prompt（后缀提示词）

输入一条想在 **Prompt（提示词）** 文本之后发送给智能体的消息。

可用的 LangChain 表达式：

* `{chatHistory}`：本次对话中的消息历史，有助于保持上下文。
* `{input}`：包含用户提示词。
* `{agent_scratchpad}`：供下一次迭代记住的信息。

n8n 会在这个字段中填入一个示例。

### Limit（限制）

输入要返回的最大结果数量。

默认是 `10`。

### Tracing Metadata（追踪元数据）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/GAsqtB1RVGEDrT5PMMLl/" %}

## 模板和示例（Templates and examples）

请参考 AI Agent 主节点的 [模板和示例](README.md#templates-and-examples) 部分。

## 常见问题（Common issues）

关于常见问题或错误以及建议的解决方法，请参考[常见问题（Common issues）](common-issues.md)。
