---
title: Copper 节点文档
description: >-
  学习如何在 n8n 中使用 Copper 节点。按照技术文档将 Copper
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Copper 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.copper.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.copper'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.copper'
layout:
  description:
    visible: false
---

# Copper 节点

> **大白话**：Copper 是深度集成 Google Workspace（Gmail、日历等）的 CRM 客户管理系统。这个节点让 n8n 能自动操作 Copper 里的客户数据——比如创建/更新客户公司、线索（Lead）、商机（Opportunity）、联系人和任务。举例：用户在官网填了"我要试用"表单，工作流自动在 Copper 里建一条线索并分派给销售。

使用 Copper 节点可以自动化处理 Copper 里的工作，并让 Copper 与其他应用程序互通。n8n 内置支持 Copper 的众多功能，包括获取、更新、删除和创建公司、客户来源、线索、项目和任务等。

本页列出了 Copper 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Copper 凭证](../credentials/copper.md)。
{% endhint %}

## 支持的操作

* Company（公司）
    * 创建
    * 删除
    * 获取
    * 获取所有
    * 更新
* Customer Source（客户来源）
    * 获取所有
* Lead（线索）
    * 创建
    * 删除
    * 获取
    * 获取所有
    * 更新
* Opportunity（商机）
    * 创建
    * 删除
    * 获取
    * 获取所有
    * 更新
* Person（联系人）
    * 创建
    * 删除
    * 获取
    * 获取所有
    * 更新
* Project（项目）
    * 创建
    * 删除
    * 获取
    * 获取所有
    * 更新
* Task（任务）
    * 创建
    * 删除
    * 获取
    * 获取所有
    * 更新
* User（用户）
    * 获取所有

## 模板与示例


[浏览 Copper 节点集成模板](https://n8n.io/integrations/copper) 或 [搜索全部模板](https://n8n.io/workflows/)
