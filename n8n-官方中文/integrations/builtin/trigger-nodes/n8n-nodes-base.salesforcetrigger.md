---
title: Salesforce 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Salesforce 触发器节点。按照本文档将
  Salesforce 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Salesforce 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.salesforcetrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.salesforcetrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.salesforcetrigger
layout:
  description:
    visible: false
---

# Salesforce 触发器节点

> **大白话**：这个节点是 Salesforce 客户系统的「情报站」。当你的 Salesforce 里发生"新建了客户、改了商机、创建了工单"这类事件时，它就启动你的工作流，让你自动跟进、发通知、同步数据。n8n 内置支持一大批 Salesforce 事件。

使用 Salesforce 触发器节点来响应 [Salesforce](https://login.salesforce.com/) 中的事件，并把 Salesforce 与其他应用集成起来。n8n 内置支持多种多样的 Salesforce 事件。

在本页，你会看到 Salesforce 触发器节点可以响应的事件列表，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/salesforce.md)找到此节点的身份验证信息。
{% endhint %}
{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Salesforce trigger integrations](https://n8n.io/integrations/salesforce-trigger/) 页面。
{% endhint %}

## 事件（Events）

* 账户被创建（On Account Created）
* 账户被更新（On Account Updated）
* 附件被创建（On Attachment Created）
* 附件被更新（On Attachment Updated）
* 工单被创建（On Case Created）
* 工单被更新（On Case Updated）
* 联系人被创建（On Contact Created）
* 联系人被更新（On Contact Updated）
* 自定义对象被创建（On Custom Object Created）
* 自定义对象被更新（On Custom Object Updated）
* 线索被创建（On Lead Created）
* 线索被更新（On Lead Updated）
* 商机被创建（On Opportunity Created）
* 商机被更新（On Opportunity Updated）
* 任务被创建（On Task Created）
* 任务被更新（On Task Updated）
* 用户被创建（On User Created）
* 用户被更新（On User Updated）

## 相关资源（Related resources）

n8n 为 Salesforce 提供了一个应用节点（app node）。你可以[在此处](../app-nodes/n8n-nodes-base.salesforce.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/salesforce-trigger/)。
