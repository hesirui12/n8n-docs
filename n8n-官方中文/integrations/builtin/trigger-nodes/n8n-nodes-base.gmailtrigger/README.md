---
title: Gmail Trigger 节点文档（Gmail Trigger node）
description: >-
  学习如何在 n8n 中使用 Gmail Trigger 节点。按照技术文档把 Gmail
  Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-base.gmailtrigger
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

{% hint style="info" %}
**大白话**

简单来说，这个触发器节点就是每隔一段时间自动去你的 Gmail 邮箱里「翻一翻」，看看有没有符合你设定条件的新邮件，一旦有，就立刻启动你的工作流。
{% endhint %}

# Gmail Trigger 节点

[Gmail](https://www.gmail.com) 是 Google 开发的电子邮件服务。Gmail Trigger 节点可以根据 Gmail 中的事件启动工作流。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../../credentials/google/README.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

要获取帮助你快速上手的使用示例和模板，请参阅 n8n 的 [Gmail Trigger 集成](https://n8n.io/integrations/gmail-trigger/) 页面。
{% endhint %}

## 事件（Events）

* **Message Received**（收到消息）：该节点会在所选的 **Poll Time**（轮询时间）触发新消息。

## 节点参数（Node parameters）

使用以下参数配置节点：

* **Credential to connect with**（用于连接的凭据）：选择或创建一个新的 Google 凭据用于触发器。有关创建新凭据的更多信息，请参阅 [Google 凭据](../../credentials/google/README.md)。
* **Poll Times**（轮询时间）：选择轮询**模式（Mode）**来设置触发轮询的频率。你选择的**模式（Mode）**会添加或删除相关字段。请参阅 [Poll Mode 选项](poll-mode-options.md) 来配置每种模式类型的参数。
* **Simplify**（简化）：选择是否返回简化版响应（默认开启）或原始数据（关闭）。
  * 简化版返回电子邮件消息 ID、标签和邮件头，包括：From、To、CC、BCC 和 Subject。
* **Max Emails per Poll**（每次轮询的最大邮件数）：输入节点每次轮询周期获取的最大邮件数量。默认是 10，最大 50。如果未读邮件数量超过该限制，节点会将剩余邮件排队，在下一个轮询周期再获取。

## 节点过滤器（Node filters）

使用这些过滤器进一步细化节点的行为：

* **Include Spam and Trash**（包含垃圾邮件和已删除邮件）：选择节点是否应在垃圾邮件（Spam）和已删除邮件（Trash）文件夹中对新消息触发（开启）或不触发（关闭）。
* **Label Names or IDs**（标签名称或 ID）：只对添加了所选标签的消息触发。选择你想应用的标签名称，或输入表达式来指定 ID。下拉菜单会根据你选择的**凭据（Credential）**自动填充。
* **Search**（搜索）：输入 Gmail 搜索筛选条件，比如 `from:`，以便只在符合筛选条件时触发节点。请参阅[在 Gmail 中细化搜索](https://support.google.com/mail/answer/7190?hl=en)了解更多信息。
* **Read Status**（阅读状态）：选择接收**未读和已读邮件**、**仅未读邮件**（默认）还是**仅已读邮件**。
* **Sender**（发件人）：输入电子邮件或发件人名称的一部分，只对来自该发件人的消息触发。

## 相关资源（Related resources）

n8n 为 Gmail 提供了一个应用节点。你可以[在这里](../../app-nodes/n8n-nodes-base.gmail/README.md)找到该节点的文档。

在 n8n 的网站上查看[示例工作流和相关内容](https://n8n.io/integrations/gmail-trigger/)。

有关其 API 的详细信息，请参阅 [Google 的 Gmail API 文档](https://developers.google.com/gmail/api/guides)。

## 常见问题（Common issues）

对于常见问题或疑问以及建议的解决方案，请参阅[常见问题](common-issues.md)。
