---
title: Wise 节点文档
description: >-
  学习如何在 n8n 中使用 Wise 节点。按照技术文档将 Wise
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Wise 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.wise.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.wise'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.wise'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Wise（原 TransferWise）是一个「国际转账/汇款服务」——用接近真实汇率的中间价帮你把钱转到国外，还能开多币种账户。这个节点可以帮你：查账户余额和对账单（Account）、查汇率（Exchange Rate）、获取个人/企业档案（Profile）、管理收款人（Recipient）、创建报价单（Quote），以及创建/执行/删除/查询转账（Transfer）。适合做跨境付款自动化。
{% endhint %}

# Wise 节点

使用 Wise 节点来自动化你在 Wise 中的工作，并把它与其它应用集成。n8n 内置支持 Wise 的大量功能，包括获取档案、汇率和收款人。

在本页你可以看到 Wise 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Wise 凭证](../credentials/wise.md)。
{% endhint %}

## 操作

* Account（账户）
    * Retrieve balances for all account currencies of this user.（获取该用户所有账户币种的余额）
    * Retrieve currencies in the borderless account of this user.（获取该用户无国界账户中的币种）
    * Retrieve the statement for the borderless account of this user.（获取该用户无国界账户的对账单）
* Exchange Rate（汇率）
    * Get（获取）
* Profile（档案）
    * Get（获取）
    * Get All（获取全部）
* Recipient（收款人）
    * Get All（获取全部）
* Quote（报价单）
    * Create（创建）
    * Get（获取）
* Transfer（转账）
    * Create（创建）
    * Delete（删除）
    * Execute（执行）
    * Get（获取）
    * Get All（获取全部）

## 模板与示例

[浏览 Wise 节点的官方集成模板](https://n8n.io/integrations/wise)，或[搜索全部模板](https://n8n.io/workflows/)。
