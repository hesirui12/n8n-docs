---
title: 限制 Limit
description: >-
  n8n 工作流自动化平台中「限制 Limit」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Limit
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.limit.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.limit'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.limit'
layout:
  description:
    visible: false
---

# 限制 Limit

> **大白话**：这个节点是「限量截断」工具——你规定最多保留多少条数据，多出来的就被删掉。比如接口一下子返回了 1000 条数据，你只想留前 10 条，就用它。你还可以选择保留「开头」的还是「结尾」的。

使用「限制 Limit」节点删除超过设定最大数量的数据项。你可以选择让 n8n 从输入数据的开头还是结尾取数据项。

## 节点参数

使用以下参数配置这个节点。

### 最大数据项数 Max Items

输入 n8n 应该保留的最大数据项数量。如果输入数据包含的项数超过这个值，n8n 会删除多余的数据项。

### 保留 Keep

如果节点必须删除数据项，请选择它从输入数据中保留哪些项：

* **最前面的数据项 First Items**：保留输入数据开头（最前面）的 **最大数据项数 Max Items** 个数据项。
* **最后面的数据项 Last Items**：保留输入数据末尾（最后面）的 **最大数据项数 Max Items** 个数据项。

## 模板和示例

[浏览限制（Limit）的集成模板](https://n8n.io/integrations/limit) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/0nvcx1EqJQgGVzUXOOMN/" %}
