---
title: Invoice Ninja 节点文档
description: >-
  学习如何在 n8n 中使用 Invoice Ninja 节点。按照技术文档将
  Invoice Ninja 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Invoice Ninja 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.invoiceninja.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.invoiceninja'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.invoiceninja'
---

{% hint style="info" %}
**大白话**：Invoice Ninja 是开源的「发票 + 记账 + 收款」系统，自由职业者和中小企业常用它来开发票。这个节点能让你在 n8n 里管理：客户（Client）、开支（Expense）、发票（Invoice）、付款（Payment）、报价单（Quote）和任务（Task），支持增删改查，还能把发票和报价单通过邮件发给客户。适合做「订单完成 → 自动开发票」这类流程。
{% endhint %}

# Invoice Ninja 节点

使用 Invoice Ninja 节点来自动化你在 Invoice Ninja 中的工作，并把它与其它应用集成。n8n 内置支持 Invoice Ninja 的大量功能，包括创建、更新、删除、获取客户（Client）、开支（Expense）、发票（Invoice）、付款（Payment）和报价单（Quote）。

在本页你可以看到 Invoice Ninja 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Invoice Ninja 凭证](../credentials/invoiceninja.md)。
{% endhint %}

## 操作

* Client（客户）
    * Create a new client（创建新客户）
    * Delete a client（删除客户）
    * Get data of a client（获取单个客户数据）
    * Get data of all clients（获取全部客户数据）
* Expense（开支）
    * Create a new expense（创建新开支）
    * Delete an expense（删除开支）
    * Get data of an expense（获取单个开支数据）
    * Get data of all expenses（获取全部开支数据）
* Invoice（发票）
    * Create a new invoice（创建新发票）
    * Delete a invoice（删除发票）
    * Email an invoice（用邮件发送发票）
    * Get data of a invoice（获取单个发票数据）
    * Get data of all invoices（获取全部发票数据）
* Payment（付款）
    * Create a new payment（创建新付款记录）
    * Delete a payment（删除付款记录）
    * Get data of a payment（获取单个付款数据）
    * Get data of all payments（获取全部付款数据）
* Quote（报价单）
    * Create a new quote（创建新报价单）
    * Delete a quote（删除报价单）
    * Email an quote（用邮件发送报价单）
    * Get data of a quote（获取单个报价单数据）
    * Get data of all quotes（获取全部报价单数据）
* Task（任务）
    * Create a new task（创建新任务）
    * Delete a task（删除任务）
    * Get data of a task（获取单个任务数据）
    * Get data of all tasks（获取全部任务数据）

## 模板与示例

[浏览 Invoice Ninja 节点的官方集成模板](https://n8n.io/integrations/invoice-ninja)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
