---
title: ConvertKit 节点文档
description: >-
  学习如何在 n8n 中使用 ConvertKit 节点。按照技术文档将 ConvertKit
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: ConvertKit 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.convertkit.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.convertkit'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.convertkit'
layout:
  description:
    visible: false
---

# ConvertKit 节点

> **大白话**：ConvertKit 是面向创作者/博主的邮件营销工具，用来管理订阅者、发邮件序列（Sequence）和表单。这个节点让 n8n 能自动操作 ConvertKit——比如有人下单/报名后自动把 TA 加为订阅者、自动打标签、管理自定义字段。举例：用户在你网站填了表单，工作流立刻把他加入 ConvertKit 的"新用户"序列，开始自动发欢迎邮件。

使用 ConvertKit 节点可以自动化处理 ConvertKit 里的工作，并让 ConvertKit 与其他应用程序互通。n8n 内置支持 ConvertKit 的众多功能，包括创建和删除自定义字段、获取标签，以及添加订阅者等。

本页列出了 ConvertKit 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [ConvertKit 凭证](../credentials/convertkit.md)。
{% endhint %}

## 支持的操作

* Custom Field（自定义字段）
    * 创建字段
    * 删除字段
    * 获取所有字段
    * 更新字段
* Form（表单）
    * 添加订阅者
    * 获取所有表单
    * 列出表单的所有订阅（包含订阅者数据）
* Sequence（序列）
    * 添加订阅者
    * 获取所有序列
    * 获取序列的所有订阅（包含订阅者数据）
* Tag（标签）
    * 创建标签
    * 获取所有标签
* Tag Subscriber（标签-订阅者）
    * 给订阅者添加标签
    * 列出标签的所有订阅（包含订阅者数据）
    * 从订阅者移除标签

## 模板与示例


[浏览 ConvertKit 节点集成模板](https://n8n.io/integrations/convertkit) 或 [搜索全部模板](https://n8n.io/workflows/)

