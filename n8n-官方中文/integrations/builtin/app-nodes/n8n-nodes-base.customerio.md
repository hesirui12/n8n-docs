---
title: Customer.io 节点文档
description: >-
  学习如何在 n8n 中使用 Customer.io 节点。按照技术文档
  将 Customer.io 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Customer.io 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.customerio.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.customerio'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.customerio'
layout:
  description:
    visible: false
---

# Customer.io 节点

> **大白话**：Customer.io 是一个"事件驱动的用户消息平台"——根据用户在 App/网站上的行为（比如注册、加购、未付款）自动触发邮件、推送等消息。这个节点让 n8n 能自动操作 Customer.io——比如创建/更新客户资料、上报行为事件、查询活动（Campaign）和用户分组。举例：用户下单后，工作流上报"purchase"事件，Customer.io 自动发一封感谢信。

使用 Customer.io 节点可以自动化处理 Customer.io 里的工作，并让 Customer.io 与其他应用程序互通。n8n 内置支持 Customer.io 的众多功能，包括创建和更新客户、跟踪事件，以及获取活动（Campaign）等。

本页列出了 Customer.io 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Customer.io 凭证](../credentials/customerio.md)。
{% endhint %}

## 支持的操作

* Customer（客户）
    * 创建/更新客户
    * 删除客户
* Event（事件）
    * 跟踪一个客户事件
    * 跟踪一个匿名事件
* Campaign（营销活动）
    * 获取
    * 获取所有
    * 获取指标（Metrics）
* Segment（用户分组）
    * 添加客户
    * 移除客户

## 模板与示例


[浏览 Customer.io 节点集成模板](https://n8n.io/integrations/customerio) 或 [搜索全部模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

