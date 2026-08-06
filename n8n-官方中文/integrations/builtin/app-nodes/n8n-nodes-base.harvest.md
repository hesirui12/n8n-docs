---
title: Harvest 节点文档
description: 学习如何在 n8n 中使用 Harvest 节点。按照技术文档将 Harvest 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Harvest 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.harvest.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.harvest'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.harvest'
layout:
  description:
    visible: false
---

# Harvest 节点

> 💡 **大白话**：Harvest 是一款「工时记录 + 项目管理 + 开票」软件，打工人用它记每天干了多久的活。用这个节点，n8n 可以自动管理客户、联系人、项目、任务、工时记录（Time Entries）、费用（Expense）、报价单（Estimate）和发票——功能很全，操作很多。

使用 Harvest 节点自动化 Harvest 中的工作，并将 Harvest 与其他应用集成。n8n 内置支持大量 Harvest 功能，包括创建、更新、删除和获取客户、联系人、发票、任务、费用、用户和项目。

本页列出了 Harvest 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [Harvest 凭据](../credentials/harvest.md)。
{% endhint %}

## 支持的操作（Operations）

* Client（客户）
    * Create a client（创建客户）
    * Delete a client（删除客户）
    * Get data of a client（获取客户数据）
    * Get data of all clients（获取所有客户数据）
    * Update a client（更新客户）
* Company（公司）
    * Retrieves the company for the currently authenticated user（获取当前已认证用户所属的公司信息）
* Contact（联系人）
    * Create a contact（创建联系人）
    * Delete a contact（删除联系人）
    * Get data of a contact（获取联系人数据）
    * Get data of all contacts（获取所有联系人数据）
    * Update a contact（更新联系人）
* Estimate（报价单）
    * Create an estimate（创建报价单）
    * Delete an estimate（删除报价单）
    * Get data of an estimate（获取报价单数据）
    * Get data of all estimates（获取所有报价单数据）
    * Update an estimate（更新报价单）
* Expense（费用）
    * Get data of an expense（获取费用数据）
    * Get data of all expenses（获取所有费用数据）
    * Create an expense（创建费用）
    * Update an expense（更新费用）
    * Delete an expense（删除费用）
* Invoice（发票）
    * Get data of an invoice（获取发票数据）
    * Get data of all invoices（获取所有发票数据）
    * Create an invoice（创建发票）
    * Update an invoice（更新发票）
    * Delete an invoice（删除发票）
* Project（项目）
    * Create a project（创建项目）
    * Delete a project（删除项目）
    * Get data of a project（获取项目数据）
    * Get data of all projects（获取所有项目数据）
    * Update a project（更新项目）
* Task（任务）
    * Create a task（创建任务）
    * Delete a task（删除任务）
    * Get data of a task（获取任务数据）
    * Get data of all tasks（获取所有任务数据）
    * Update a task（更新任务）
* Time Entries（工时记录）
    * Create a time entry using duration（按时长创建工时记录）
    * Create a time entry using start and end time（按开始和结束时间创建工时记录）
    * Delete a time entry（删除工时记录）
    * Delete a time entry's external reference（删除工时记录的外部引用）
    * Get data of a time entry（获取工时记录数据）
    * Get data of all time entries（获取所有工时记录数据）
    * Restart a time entry（重新开始一条工时记录）
    * Stop a time entry（停止一条工时记录）
    * Update a time entry（更新工时记录）
* User（用户）
    * Create a user（创建用户）
    * Delete a user（删除用户）
    * Get data of a user（获取用户数据）
    * Get data of all users（获取所有用户数据）
    * Get data of authenticated user（获取当前已认证用户的数据）
    * Update a user（更新用户）

## 模板和示例（Templates and examples）

[浏览 Harvest 节点文档集成模板](https://n8n.io/integrations/harvest) 或 [搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
