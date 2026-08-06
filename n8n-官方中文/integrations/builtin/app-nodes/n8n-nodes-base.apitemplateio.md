---
title: APITemplate.io 节点文档
description: >-
  学习如何在 n8n 中使用 APITemplate.io 节点。按照技术文档将
  APITemplate.io 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: APITemplate.io 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.apitemplateio.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.apitemplateio
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.apitemplateio
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：APITemplate.io 是「模板生成图片/PDF」的服务：你先在它网站上做好一个模板（比如发票、证书、宣传图），然后通过 API 填上数据，它自动生成最终的图片或 PDF。这个节点让你在 n8n 里直接用模板生成 PDF 和图片。典型场景：订单完成后自动生成发票 PDF 发给客户。
{% endhint %}

# APITemplate.io 节点

使用 APITemplate.io 节点来自动化你在 APITemplate.io 中的工作，并把它与其它应用集成。n8n 内置支持 APITemplate.io 的大量功能，包括获取和创建账户以及 PDF。

在本页你可以看到 APITemplate.io 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [APITemplate.io 凭证](../credentials/apitemplateio.md)。
{% endhint %}

（官方此处嵌入了「如何开始使用应用节点」的通用说明组件，此处从略。）

## 操作

* Account（账户）
    * Get（获取）
* Image（图片）
    * Create（创建）
* PDF
    * Create（创建）

## 模板与示例

[浏览 APITemplate.io 节点的官方集成模板](https://n8n.io/integrations/apitemplateio)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
