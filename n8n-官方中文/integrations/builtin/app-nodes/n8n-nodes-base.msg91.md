---
title: MSG91 节点文档
description: >-
  学习如何在 n8n 中使用 MSG91 节点。按照技术文档将 MSG91
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: MSG91 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.msg91.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.msg91'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.msg91'
layout:
  description:
    visible: false
---

# MSG91 节点

> 💡 **大白话**：MSG91 是一个「短信发送」服务商（印度常用）。用这个节点，你可以让 n8n 自动发短信，比如「订单状态更新时自动给客户发短信」。

使用 MSG91 节点来自动化你在 MSG91 中的工作，并把它与其它应用集成。n8n 支持用 MSG91 发送短信。

在本页你可以看到 MSG91 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [MSG91 凭证](../credentials/msg91.md)。
{% endhint %}

## 操作（Operations）

* SMS（短信）
    * Send SMS（发送短信）

## 模板与示例（Templates and examples）

[浏览 MSG91 节点文档集成模板](https://n8n.io/integrations/msg91)，或[搜索全部模板](https://n8n.io/workflows/)。

## 查找你的 Sender ID（发送方 ID）

1. 登录你的 MSG91 控制台（dashboard）。
2. 在左侧面板选择 **Sender Id（发送方 ID）**。
3. 如果还没有 Sender ID，选择 **Add Sender Id +（添加发送方 ID）**，填写详细信息，然后选择 **Save Sender Id（保存发送方 ID）**。
