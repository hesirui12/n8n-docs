---
title: 拆分 Split Out
description: >-
  n8n 工作流自动化平台中「拆分 Split Out」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Split Out
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.splitout.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitout'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitout'
layout:
  description:
    visible: false
---

# 拆分 Split Out

> **大白话**：这个节点和「聚合 Aggregate」正好相反——它把一条数据里的列表拆开，变成多条数据。比如一条数据里有一个「客户列表」字段，你想把它拆成每个客户一条数据，就用它。

使用「拆分 Split Out」节点把一个包含列表的单个数据项拆分成多个数据项。例如，一个客户列表，你想拆分它们，使每个客户各占一个数据项。

## 节点参数

使用以下参数配置这个节点。

### 要拆分的字段 Field to Split Out

输入包含列表的字段名，这个列表将被拆分出来变成一个个独立的数据项。

如果你处理的是二进制数据输入，请在表达式中使用 `$binary` 来设置要拆分的字段。

### 包含 Include

选择是否保留输入数据中的其他字段，以及如何把它们附加到每个新生成的独立数据项上。

你可以选择：

* **不包含其他字段 No Other Fields**：不包含任何其他字段。
* **包含所有其他字段 All Other Fields**：包含所有其他字段。
* **包含选定的其他字段 Selected Other Fields**：只包含选定的字段。
    * **要包含的字段 Fields to Include**：输入逗号分隔的、你想要包含的字段列表。

## 节点选项

### 禁用点号表示法 Disable Dot Notation

默认情况下，n8n 启用点号表示法，用 `parent.child` 的格式引用子字段。使用这个选项可以禁用点号表示法（开启 = 禁用）或继续使用点号（关闭 = 继续使用）。

### 目标字段名 Destination Field Name

输入拆分后的内容在输出中要存放的字段名。

### 包含二进制数据 Include Binary

选择是否把输入中的二进制数据（如图片、文件）包含进新的输出（开启 = 包含，关闭 = 不包含）。

## 模板和示例

[浏览拆分（Split Out）的集成模板](https://n8n.io/integrations/split-out) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/0nvcx1EqJQgGVzUXOOMN/" %}
