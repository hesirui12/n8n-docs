---
title: Coda 节点文档
description: >-
  学习如何在 n8n 中使用 Coda 节点。按照技术文档将 Coda
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Coda 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.coda.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.coda'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.coda'
layout:
  description:
    visible: false
---

# Coda 节点

> **大白话**：Coda 是一个"文档 + 表格 + 应用"三合一的在线协作工具，一个文档里既能写字、又能放表格和按钮，还能做成小应用。这个节点让 n8n 能自动操作 Coda 文档——比如往表格里加行、删行、读取表格/视图/公式/控件的数据、甚至帮你点表格里的按钮。举例：订单支付成功，工作流自动往 Coda 表格里插一行订单记录。

使用 Coda 节点可以自动化处理 Coda 里的工作，并让 Coda 与其他应用程序互通。n8n 内置支持 Coda 的众多功能，包括创建、获取和删除控件（Control）、公式（Formula）、表格（Table）和视图（View）等。

本页列出了 Coda 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Coda 凭证](../credentials/coda.md)。
{% endhint %}

## 支持的操作

* Control（控件）
    * 获取一个控件
    * 获取所有控件
* Formula（公式）
    * 获取一个公式
    * 获取所有公式
* Table（表格）
    * 创建/插入一行
    * 删除一行或多行
    * 获取所有列
    * 获取所有行
    * 获取一列
    * 获取一行
    * 触发按钮
* View（视图）
    * 删除视图中的行
    * 获取一个视图
    * 获取所有视图
    * 获取视图的所有列
    * 获取视图的所有行
    * 更新行
    * 触发视图按钮

## 模板与示例


[浏览 Coda 节点集成模板](https://n8n.io/integrations/coda) 或 [搜索全部模板](https://n8n.io/workflows/)
