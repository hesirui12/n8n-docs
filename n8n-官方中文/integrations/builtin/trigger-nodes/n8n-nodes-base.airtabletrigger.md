---
title: Airtable 触发器节点文档（Airtable Trigger node documentation）
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Airtable Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.airtabletrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.airtabletrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.airtabletrigger
description: >-
  了解如何在 n8n 中使用 Airtable 触发器节点。按照技术文档将 Airtable
  触发器节点集成到你的工作流中。
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

# Airtable 触发器节点（Airtable Trigger node）

{% hint style="info" %}
**大白话**：Airtable 是「电子表格 + 数据库」的混合体——看起来像表格，但每个格子有数据类型（勾选框、电话号码、下拉列表等），还能挂图片附件。这个触发器节点会**定期轮询**（每隔一段时间去检查一次）你的 Airtable 表格，一旦发现「新建」或「修改」的记录就触发工作流。你需要告诉它：查哪个 Base（工作区）、哪张 Table（表）、用哪个字段来判断新旧（Trigger Field），以及多久查一次（Poll Times）。
{% endhint %}

[Airtable](https://airtable.com/) 是电子表格与数据库的混合体，拥有数据库的功能，但以电子表格的形式呈现。Airtable 表格中的字段类似于电子表格中的单元格，但它们具有「复选框」、「电话号码」、「下拉列表」等类型，并且可以引用图片之类的文件附件。

在本页中，你会看到 Airtable 触发器节点可以响应的事件列表，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/airtable.md)找到此节点的认证（账号授权）信息。
{% endhint %}

## 事件（Events）

* **New Airtable event（新的 Airtable 事件）**

## 相关资源（Related resources）

n8n 也为 Airtable 提供了应用节点（用来读写数据的常规节点）。你可以在[这里](../app-nodes/n8n-nodes-base.airtable/README.md)找到该节点的文档。

在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/airtable-trigger/)。

关于他们的 API 细节，请参考 [Airtable 的官方文档](https://airtable.com/developers/web/api/introduction)。

## 节点参数（Node parameters）

用这些参数来配置你的节点。

### Poll Times（轮询时间）

n8n 的 Airtable 节点通过轮询（定期检查）来检测已配置的 Airtable 资源是否有更新。**Poll Times** 参数用来设置查询频率：

* Every Minute（每分钟）
* Every Hour（每小时）
* Every Day（每天）
* Every Week（每周）
* Every Month（每月）
* Every X（每隔 X）：每隔指定的分钟数或小时数检查一次更新。
* Custom（自定义）：通过提供 [cron 表达式](https://en.wikipedia.org/wiki/Cron)来自定义轮询间隔。

使用 **Add Poll Time（添加轮询时间）** 按钮可以添加更多的轮询间隔。

### Base（工作区）

你想检查更新的 [Airtable base（工作区）](https://support.airtable.com/docs/airtable-bases-overview)。你可以提供工作区的 URL 或 [base ID（工作区 ID）](https://support.airtable.com/docs/finding-airtable-ids#finding-base-table-and-view-ids-from-urls)。

### Table（表）

位于 Airtable base（工作区）内、你想检查更新的 [Airtable table（表）](https://support.airtable.com/docs/tables-overview)。你可以提供该表的 URL 或 [table ID（表 ID）](https://support.airtable.com/docs/finding-airtable-ids#finding-base-table-and-view-ids-from-urls)。

### Trigger Field（触发字段）

你表中的「创建时间」或「最后修改时间」字段。Airtable 触发器节点用这个字段来判断自上次检查以来发生了哪些更新。

### Download Attachments（下载附件）

是否从表中下载附件。启用后，**Download Fields（下载字段）** 参数用来指定要下载哪些附件字段。

### Download Fields（下载字段）

当你启用 **Download Attachments（下载附件）** 开关后，此字段用于指定要下载表中的哪些字段。字段名区分大小写。多个字段名用逗号分隔。

### Additional Fields（附加字段）

使用 **Add Field（添加字段）** 按钮可以添加以下参数：

* **Fields（字段）**：一个逗号分隔的字段列表，决定输出中包含哪些字段。如果你这里什么都不填，输出将只包含 **Trigger Field（触发字段）**。
* **Formula（公式）**：一个 [Airtable 公式](https://support.airtable.com/docs/formula-field-reference)，用来进一步筛选结果。你可以用它给触发工作流的事件增加更多限制条件。注意：公式值在手动执行时不会被考虑，只在生产环境轮询时生效。
* **View ID（视图 ID）**：某个表视图的名称或 ID。填了之后，只返回该视图中可见的记录。
