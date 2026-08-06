---
title: Evaluation 节点文档
description: >-
  n8n（工作流自动化平台）中 Evaluation（评估）节点的文档。包含用法指南和示例链接。
contentType:
  - integration
  - reference
nodeTitle: Evaluation 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.evaluation.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.evaluation'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.evaluation'
layout:
  description:
    visible: false
---

# Evaluation 节点

> **大白话**：这个节点是 AI 工作流评估的「成绩记录员」。它配合 Evaluation Trigger 节点使用，可以干三件事：把评估结果写回 Google Sheets 或数据表、把评分指标记到 n8n 的「评估」标签页里、或者判断"现在是不是在评估中"来决定走哪条分支。简单说，它负责记录和统计 AI 工作流考试的成绩。

Evaluation（评估）节点执行与[评估](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/test-and-improve-ai-workflows/understand-why-to-test)相关的各种操作，用于验证 AI 工作流的可靠性。

在以下场景中使用 Evaluation 节点：

* 根据当前工作流是否处于评估中，来决定是否执行某些逻辑
* 将评估结果写回 Google Sheets 数据集
* 将评估性能的评分指标记录到 n8n 的 **Evaluations（评估）** 标签页

{% hint style="info" %}
**Google Sheets 的凭证**

Evaluation 节点的 **Set Outputs（设置输出）** 操作会把评估结果记录到数据表或 Google Sheets。要把 Google Sheets 作为记录位置，你需要先配置一个 [Google Sheets 凭证](../credentials/google/README.md)。
{% endhint %}

## 操作（Operations）

Evaluation 节点提供以下操作：

* [**Set Outputs（设置输出）**](#set-outputs)：把评估结果写回数据表或 Google Sheets 数据集。
* [**Set Metrics（设置指标）**](#set-metrics)：把评估性能的评分指标记录到 n8n 的 **Evaluations（评估）** 标签页。
* [**Check If Evaluating（检查是否在评估中）**](#check-if-evaluating)：根据当前执行是否是一次评估，来分支工作流的执行逻辑。

可用的参数和选项取决于你选择的操作。

### Set Outputs（设置输出）

**Set Outputs** 操作有以下参数：

- **Source（数据源）**：选择评估结果的输出位置。默认值是 **Data table（数据表）**。

   不同的 **Source** 选择，对应的数据源设置也不同。

    * 当 **Source** 为 **Data table（数据表）** 时：
        * **Data table（数据表）**：按名称或 ID 选择一个数据表。
    * 当 **Source** 为 **Google Sheets** 时：
        * **Credential to connect with（连接凭证）**：创建或选择一个已有的 [Google Sheets 凭证](../credentials/google/README.md)。
        * **Document Containing Dataset（包含数据集的文档）**：选择你想要写入评估结果的电子表格文档。通常这是你在 [Evaluation Trigger](n8n-nodes-base.evaluationtrigger.md) 节点中选择的同一个文档。
        * 选择 **From list（从列表选择）** 可以从下拉列表中选择电子表格标题；选择 **By URL（按 URL）** 可以输入电子表格的 URL；选择 **By ID（按 ID）** 可以输入 `spreadsheetId`。
            * 你可以在 Google Sheets 的 URL 中找到 `spreadsheetId`：`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`。
        * **Sheet Containing Dataset（包含数据集的表格）**：选择你想要写入评估结果的表格。通常这是你在 [Evaluation Trigger](n8n-nodes-base.evaluationtrigger.md) 节点中选择的同一个表格。
            * 选择 **From list（从列表选择）** 可以从下拉列表中选择表格标题；选择 **By URL（按 URL）** 可以输入表格的 URL；选择 **By ID（按 ID）** 可以输入 `sheetId`；选择 **By Name（按名称）** 可以输入表格标题。
            * 你可以在 Google Sheets 的 URL 中找到 `sheetId`：`https://docs.google.com/spreadsheets/d/aBC-123_xYz/edit#gid=sheetId`。

你在 **Outputs（输出）** 区域定义要写入数据表或 Google Sheets 的数据项。对于每一项输出，你需要设置以下内容：

* **Name（名称）**：要把评估结果写入的 Google Sheets 列名。
* **Value（值）**：要写入 Google Sheets 的值。

### Set Metrics（设置指标）

**Set Metrics** 操作包含一个 **Metrics to Return（要返回的指标）** 区域，你可以在其中定义要记录和跟踪的评估指标。你可以在工作流的 **Evaluations（评估）** 标签页中查看指标结果。

对于你希望记录的每个指标，你需要设置以下详细信息：

* **Name（名称）**：用于该指标的名称。
* **Value（值）**：要记录的数字值。运行评估后，你可以把前面节点中的值拖拽到这里。指标值必须是数字。

### Check If Evaluating（检查是否在评估中）

**Check If Evaluating** 操作没有任何参数。此操作提供分支输出连接点，你可以根据当前执行是否是一次评估，来决定是否执行某些逻辑。

## 模板与示例

[浏览 Evaluation 节点的集成模板](https://n8n.io/integrations/evaluation) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

想了解更多关于 n8n 评估的内容，请查看[评估文档](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/test-and-improve-ai-workflows/understand-why-to-test)。

n8n 还提供了用于评估的触发器节点。你可以[在这里](n8n-nodes-base.evaluationtrigger.md)找到该节点的文档。

对于常见问题、错误以及建议的解决方案，请参考评估的[技巧与常见问题](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/test-and-improve-ai-workflows/fix-common-issues)页面。
