---
title: Google Sheets 节点常见问题
description: >-
  n8n 中 Google Sheets 节点的常见问题与解决方案文档，一个工作流自动化平台。包含问题详情和建议的解决方法。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Google Sheets 节点常见问题
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/common-issues
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

# 常见问题

> 💡 **大白话**：这一页汇总了用 Google Sheets 节点时最常踩的两个坑：①想把数组数据写进表格，必须先转成 JSON 键值对；②表格的列名改过之后，节点里还是旧列名会报错，重新选一下「列映射模式」刷新即可。

以下是 [Google Sheets 节点](./README.md) 的一些常见报错和问题，以及排查解决步骤。

## 追加一个数组（Append an array）

要把一个数组数据插入 Google Sheets，你必须先把数组转换成合法的 JSON（键，值）格式。

可以这样做：

1. 使用 [Split Out（拆分）](../../core-nodes/n8n-nodes-base.splitout.md) 节点。
2. 使用 [AI Transform（AI 转换）](../../core-nodes/n8n-nodes-base.aitransform.md) 节点。例如，试试输入类似这样的指令：

    ```
    Convert 'languages' array to JSON (key, value) pairs.
    ```
3. 使用 [Code（代码）节点](../../core-nodes/n8n-nodes-base.code/README.md)。

## 节点配置后列名被更新了（Column names were updated after the node's setup）

如果自你配置节点以来，Google Sheet 的列名发生了变化，你就会收到这个报错。

要刷新列名，请重新选择 **Mapping Column Mode（列映射模式）**。这会提示节点重新获取列名。

列名刷新后，再更新节点参数。
