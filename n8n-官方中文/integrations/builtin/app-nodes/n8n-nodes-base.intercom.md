---
title: Intercom 节点文档
description: >-
  学习如何在 n8n 中使用 Intercom 节点。按照技术文档将
  Intercom 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Intercom 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.intercom.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.intercom'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.intercom'
---

{% hint style="info" %}
**大白话**：Intercom 是国外很流行的「客户沟通 + 客服 + 用户消息推送」平台（就是网站右下角那个聊天小窗口）。这个节点能让你在 n8n 里管理三类数据：公司（Company）、线索（Lead）、用户（User），支持增删改查，还能查看某家公司下的用户列表。适合做「新注册用户自动建档、给客户群发消息」这类流程。
{% endhint %}

# Intercom 节点

使用 Intercom 节点来自动化你在 Intercom 中的工作，并把它与其它应用集成。n8n 内置支持 Intercom 的大量功能，包括创建、更新、删除、获取公司（Company）、线索（Lead）和用户（User）。

在本页你可以看到 Intercom 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Intercom 凭证](../credentials/intercom.md)。
{% endhint %}

## 操作

* Company（公司）
    * Create a new company（创建新公司）
    * Get data of a company（获取单个公司数据）
    * Get data of all companies（获取全部公司数据）
    * Update a company（更新公司）
    * List company's users（列出公司的用户）
* Lead（线索）
    * Create a new lead（创建新线索）
    * Delete a lead（删除线索）
    * Get data of a lead（获取单个线索数据）
    * Get data of all leads（获取全部线索数据）
    * Update new lead（更新线索）
* User（用户）
    * Create a new user（创建新用户）
    * Delete a user（删除用户）
    * Get data of a user（获取单个用户数据）
    * Get data of all users（获取全部用户数据）
    * Update a user（更新用户）

## 模板与示例

[浏览 Intercom 节点的官方集成模板](https://n8n.io/integrations/intercom)，或[搜索全部模板](https://n8n.io/workflows/)。
