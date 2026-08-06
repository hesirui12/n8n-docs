---
title: Salesforce 节点文档
description: >-
  学习如何在 n8n 中使用 Salesforce 节点。按照技术文档将 Salesforce
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Salesforce 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.salesforce.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.salesforce'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.salesforce'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Salesforce 是全球最流行的客户关系管理（CRM）软件，用来管客户、商机、线索、售后工单等。用这个节点，你可以在 n8n 里自动创建、更新、删除、查询账号（Account）、附件、案例（Case）、线索（Lead）等数据，还能上传文档、执行 SOQL 查询、调用 Flow 流程。典型场景：网站表单提交 → 自动在 Salesforce 里建一条线索。
{% endhint %}

# Salesforce 节点

使用 Salesforce 节点来自动化你在 Salesforce 中的工作，并把它与其它应用集成。n8n 内置支持 Salesforce 的大量功能，包括创建、更新、删除和获取账号（account）、附件（attachment）、案例（case）和线索（lead），以及上传文档。

在本页你可以看到 Salesforce 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Salesforce 凭证](../credentials/salesforce.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* Account（账号）
    * Add note to an account（给账号添加备注）
    * Create an account（创建账号）
    * Create a new account, or update the current one if it already exists (upsert)（创建新账号；如果已存在则更新，即 upsert）
    * Get an account（获取账号）
    * Get all accounts（获取全部账号）
    * Returns an overview of account's metadata（返回账号的元数据概览）
    * Delete an account（删除账号）
    * Update an account（更新账号）
* Attachment（附件）
    * Create a attachment（创建附件）
    * Delete a attachment（删除附件）
    * Get a attachment（获取附件）
    * Get all attachments（获取全部附件）
    * Returns an overview of attachment's metadata（返回附件的元数据概览）
    * Update a attachment（更新附件）
* Case（案例/工单）
    * Add a comment to a case（给案例添加评论）
    * Create a case（创建案例）
    * Get a case（获取案例）
    * Get all cases（获取全部案例）
    * Returns an overview of case's metadata（返回案例的元数据概览）
    * Delete a case（删除案例）
    * Update a case（更新案例）
* Contact（联系人）
    * Add lead to a campaign（把线索加入营销活动）
    * Add note to a contact（给联系人添加备注）
    * Create a contact（创建联系人）
    * Create a new contact, or update the current one if it already exists (upsert)（创建新联系人；如果已存在则更新，即 upsert）
    * Delete a contact（删除联系人）
    * Get a contact（获取联系人）
    * Returns an overview of contact's metadata（返回联系人的元数据概览）
    * Get all contacts（获取全部联系人）
    * Update a contact（更新联系人）
* Custom Object（自定义对象）
    * Create a custom object record（创建自定义对象记录）
    * Create a new record, or update the current one if it already exists (upsert)（创建新记录；如果已存在则更新，即 upsert）
    * Get a custom object record（获取自定义对象记录）
    * Get all custom object records（获取全部自定义对象记录）
    * Delete a custom object record（删除自定义对象记录）
    * Update a custom object record（更新自定义对象记录）
* Document（文档）
    * Upload a document（上传文档）
* Flow（流程）
    * Get all flows（获取全部流程）
    * Invoke a flow（调用/运行一个流程）
* Lead（线索）
    * Add lead to a campaign（把线索加入营销活动）
    * Add note to a lead（给线索添加备注）
    * Create a lead（创建线索）
    * Create a new lead, or update the current one if it already exists (upsert)（创建新线索；如果已存在则更新，即 upsert）
    * Delete a lead（删除线索）
    * Get a lead（获取线索）
    * Get all leads（获取全部线索）
    * Returns an overview of Lead's metadata（返回线索的元数据概览）
    * Update a lead（更新线索）
* Opportunity（商机）
    * Add note to an opportunity（给商机添加备注）
    * Create an opportunity（创建商机）
    * Create a new opportunity, or update the current one if it already exists (upsert)（创建新商机；如果已存在则更新，即 upsert）
    * Delete an opportunity（删除商机）
    * Get an opportunity（获取商机）
    * Get all opportunities（获取全部商机）
    * Returns an overview of opportunity's metadata（返回商机的元数据概览）
    * Update an opportunity（更新商机）
* Search（搜索）
    * Execute a SOQL query that returns all the results in a single response（执行一条 SOQL 查询，在单个响应中返回全部结果）
* Task（任务）
    * Create a task（创建任务）
    * Delete a task（删除任务）
    * Get a task（获取任务）
    * Get all tasks（获取全部任务）
    * Returns an overview of task's metadata（返回任务的元数据概览）
    * Update a task（更新任务）
* User（用户）
    * Get a user（获取用户）
    * Get all users（获取全部用户）

## 模板与示例（Templates and examples）

[浏览 Salesforce 节点文档集成模板](https://n8n.io/integrations/salesforce)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

## 使用 Salesforce 自定义字段（Working with custom fields）

要给请求添加自定义字段：

1. 选择 **Additional Fields**（附加字段）> **Add Field**（添加字段）。
2. 在下拉菜单中选择 **Custom Fields**（自定义字段）。

然后你就可以找到并添加你的自定义字段了。
