---
title: Oura 节点文档
description: >-
  学习如何在 n8n 中使用 Oura 节点。按照技术文档将 Oura
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Oura 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.oura.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.oura'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.oura'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Oura 是卖智能戒指（Oura Ring）的健康监测品牌，能测睡眠、心率、活动量等健康数据。这个节点让你在 n8n 里读取用户的个人资料和健康摘要（活动、身体准备度、睡眠），适合做「睡眠数据自动同步到表格/周报自动生成」之类的健康自动化。
{% endhint %}

# Oura 节点

使用 Oura 节点来自动化你在 Oura 中的工作，并把它与其它应用集成。n8n 内置支持 Oura 的大量功能，包括获取个人资料（profile）和摘要（summary）。

在本页你可以看到 Oura 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Oura 凭证](../credentials/oura.md)。
{% endhint %}

## 操作

* Profile（个人资料）
    * Get the user's personal information.（获取用户的个人信息）
* Summary（摘要）
    * Get the user's activity summary.（获取用户的活动摘要）
    * Get the user's readiness summary.（获取用户的身体准备度摘要）
    * Get the user's sleep summary（获取用户的睡眠摘要）

## 模板与示例

[浏览 Oura 节点的官方集成模板](https://n8n.io/integrations/oura)，或[搜索全部模板](https://n8n.io/workflows/)。
