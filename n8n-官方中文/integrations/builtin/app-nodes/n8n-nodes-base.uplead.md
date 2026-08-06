---
title: UpLead 节点文档
description: >-
  学习如何在 n8n 中使用 UpLead 节点。按照技术文档将
  UpLead 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: UpLead 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.uplead.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.uplead'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.uplead'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：UpLead 是做 B2B 商业数据（企业联系人信息）的服务，类似 ZoomInfo。这个节点目前支持两个操作，都是「Enrich（补全/丰富）」：输入一个公司信息，返回这家公司的详细资料（Company 补全）；输入一个人的信息，返回这个人的详细资料（Person 补全）。常用场景：拿到客户名单后自动补全他们的职位、邮箱等信息。
{% endhint %}

# UpLead 节点

使用 UpLead 节点来自动化你在 UpLead 中的工作，并把它与其它应用集成。n8n 支持 UpLead 的多个操作，包括获取公司信息。

在本页你可以看到 UpLead 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [UpLead 凭证](../credentials/uplead.md)。
{% endhint %}

## 操作

* Company（公司）
    * Enrich（补全公司信息）
* Person（个人）
    * Enrich（补全个人信息）

## 模板与示例

[浏览 UpLead 节点的官方集成模板](https://n8n.io/integrations/uplead)，或[搜索全部模板](https://n8n.io/workflows/)。
