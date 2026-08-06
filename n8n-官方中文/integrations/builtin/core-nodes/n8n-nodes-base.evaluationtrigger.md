---
title: Evaluation Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Evaluation Trigger（评估触发器）节点。按照本文档将
  Evaluation Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Evaluation Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.evaluationtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.evaluationtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.evaluationtrigger
layout:
  description:
    visible: false
---

# Evaluation Trigger 节点

> **大白话**：这个节点是 AI 工作流的「考试出题官」。当你搭建 AI 工作流想验证它靠不靠谱时，用它从 Google Sheets 或数据表里把测试数据一条一条地喂给工作流，检查每条数据工作流回答得对不对。这样就能批量"考"你的 AI 工作流，看看它的表现如何。

在设置[评估（evaluations）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/test-and-improve-ai-workflows/understand-why-to-test)以验证 AI 工作流的可靠性时，请使用 Evaluation Trigger（评估触发器）节点。在评估过程中，Evaluation Trigger 节点会从 Google Sheets 读取你的评估数据集，并将这些数据项一条一条地、按顺序地送入工作流进行处理。

本页将介绍 Evaluation Trigger 节点的参数和选项。

{% hint style="info" %}
**Google Sheets 的凭证**

Evaluation Trigger 节点使用数据表（Data Table）或 Google Sheets 来存储测试数据集。要把 Google Sheets 作为数据源，你需要先配置一个 [Google Sheets 凭证](../credentials/google/README.md)。
{% endhint %}

## 参数

- **Source（数据源）**：选择评估结果的输出位置。默认值是 **Data table（数据表）**。

    不同的 **Source** 选择，对应的数据源设置也不同。

    * 当 **Source** 为 **Data table（数据表）** 时：
        * **Data table（数据表）**：按名称或 ID 选择一个数据表。
        * **Limit Rows（限制行数）**：是否限制要处理的数据表行数。默认状态为 `off`（关闭）。
            * **Max Rows to Process（最大处理行数）**：当 **Limit Rows** 启用时，评估过程中最多读取和处理的行数。默认值为 10。
            * **Filter Rows（筛选行）**：是否筛选要处理的数据表行。默认状态为 `off`（关闭）。
     * 当 **Source** 为 **Google Sheets** 时：
        - **Credential to connect with（连接凭证）**：创建或选择一个已有的 [Google Sheets 凭证](../credentials/google/README.md)。
        * **Document Containing Dataset（包含数据集的文档）**：选择存放测试数据集的电子表格文档。
            - 选择 **From list（从列表选择）** 可以从下拉列表中选择电子表格标题；选择 **By URL（按 URL）** 可以输入电子表格的 URL；选择 **By ID（按 ID）** 可以输入 `spreadsheetId`。
            - 你可以在 Google Sheets 的 URL 中找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。
        * **Sheet Containing Dataset（包含数据集的表格）**：选择存放测试数据集的表格。
            - 选择 **From list（从列表选择）** 可以从下拉列表中选择表格标题；选择 **By URL（按 URL）** 可以输入表格的 URL；选择 **By ID（按 ID）** 可以输入 `sheetId`；选择 **By Name（按名称）** 可以输入表格标题。
            - 你可以在 Google Sheets 的 URL 中找到 `sheetId`：`https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`。
        * **Limit Rows（限制行数）**：是否限制要处理的表格行数。
            * **Max Rows to Process（最大处理行数）**：当 **Limit Rows** 启用时，评估过程中最多读取和处理的行数。
        * **Filters（筛选条件）**：根据列的值来筛选评估数据集。
            * **Column（列）**：选择要用来筛选的表格列。选择 **From list（从列表选择）** 可以从下拉列表中选择列名，或者选择 **By ID（按 ID）** 使用[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)指定一个 ID。
            * **Value（值）**：你想要按其筛选的列值。评估只会处理所选列中符合该值的数据行。

## 模板与示例

[浏览 Evaluation Trigger 节点的集成模板](https://n8n.io/integrations/evaluation-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

想了解更多关于 n8n 评估的内容，请查看[评估文档](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/test-and-improve-ai-workflows/understand-why-to-test)。

n8n 还提供了用于评估的应用节点（app node）。你可以[在这里](n8n-nodes-base.evaluation.md)找到该节点的文档。

对于常见问题、错误以及建议的解决方案，请参考评估的[技巧与常见问题](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/test-and-improve-ai-workflows/fix-common-issues)页面。
