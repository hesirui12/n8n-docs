---
title: 邮件触发器（IMAP）节点文档
description: >-
  学习如何在 n8n 中使用「邮件触发器（IMAP）」触发器节点。参考技术文档，
  将「邮件触发器（IMAP）」触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: 邮件触发器（IMAP）节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.emailimap.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.emailimap'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.emailimap'
layout:
  description:
    visible: false
---

# 邮件触发器（IMAP）节点

> **大白话**：这个节点就像一个"自动收件箱监控员"。你告诉它"盯着哪个邮箱"，只要有新邮件进来，它就立刻启动你的工作流，把邮件内容（发件人、主题、正文、附件等）交给你处理。比如：收到新邮件 → 自动回复、自动归档、通知你、或者把附件存到网盘。它是**触发器**节点，意味着它只能放在工作流的开头，负责"开个头"。

使用 IMAP 邮件节点，通过一个 IMAP 邮件服务器来接收邮件。这个节点是一个触发器节点。

{% hint style="info" %}
**凭据（Credential）**

你可以[在此处](../credentials/imap/README.md)找到此节点的身份验证信息。
{% endhint %}

## 操作（Operations）

- 接收一封邮件（Receive an email）

## 节点参数（Node parameters）

使用以下参数来配置节点。

### 连接凭据（Credential to connect with）

选择或创建一个 [IMAP 凭据](../credentials/imap/README.md) 来连接服务器。

> **小白提示**：凭据就是"邮箱账号密码的钥匙串"。第一次用的时候点"Create new credential"新建一个，填上邮箱服务器地址、端口、用户名和密码（一般还要允许"第三方应用访问"或生成"应用专用密码"，比如 QQ 邮箱、163 邮箱需要在网页端开启 IMAP 服务并获取授权码）。

### 邮箱文件夹名称（Mailbox Name）

输入你想要从中接收邮件的邮箱文件夹。

> **小白提示**：一般填 `INBOX`（收件箱）。如果你想监听"已归档"或"某个自定义文件夹"，就填对应的文件夹名。

### 操作（Action）

选择当 n8n 收到邮件后，是否把邮件标记为"已读"。

- **None（无）**：保持邮件为"未读"状态。
- **Mark as Read（标记为已读）**：把邮件标记为"已读"。

> **小白提示**：如果你只想知道"有没有新邮件"而不想在邮箱里留下已读痕迹（比如用脚本批量处理），就选 **None**。

### 下载附件（Download Attachments）

这个开关控制是否下载邮件附件：打开（turned on）则下载，关闭（turned off）则不下载。只有在必要时才开启，因为下载附件会增加处理开销。

> **小白提示**：附件在 n8n 里以"二进制数据（binary data）"的形式存在，后面可以用「Read/Write Files from Disk」等节点把它保存成文件。如果邮件主要是文字，就不开这个开关，运行更快。

### 格式（Format）

从以下选项中选择返回邮件内容的格式：

* **RAW**：这种格式返回完整的邮件数据，正文内容放在 raw 字段中，以 base64url 编码的字符串形式呈现。它不使用 payload 字段。
* **Resolved（已解析）**：这种格式返回完整邮件，所有数据都已解析完成，附件保存为二进制数据。
* **Simple（简单）**：这种格式返回完整邮件。如果你想要收集内联附件（比如嵌在正文里的图片），不要用这个格式。

> **小白提示**：
> - **RAW** 适合"数据洁癖"用户，拿到的是最原始的一堆编码，一般要再加工才能看懂，适合开发者直接看原始结构。
> - **Resolved** 是大多数人用的格式，字段清清楚楚（subject、from、body 等），附件也直接变成二进制数据，方便后续保存。
> - **Simple** 最轻量，但如果邮件正文里嵌了图片（inline attachment），这些图片可能拿不到。

## 节点选项（Node options）

你还可以使用这些**选项（Options）**对节点进行更细致的配置。

### 自定义邮件规则（Custom Email Rules）

输入自定义的邮件获取规则，用来决定节点获取哪些邮件。

更多信息请参考 [node-imap 的搜索函数标准（search function criteria）](https://github.com/mscdex/node-imap)。

> **小白提示**：这是给"高级玩家"的。比如你只想抓取"发件人是某个地址"或"主题包含某关键词"的邮件，可以写类似 `[['FROM', 'boss@company.com'], ['SUBJECT', 'invoice']]` 的规则。不太熟悉的话可以先跳过。

### 强制重连间隔（分钟）（Force Reconnect Every Minutes）

设置一个以分钟为单位的间隔时间，用来强制重新连接。

> **小白提示**：有些邮箱服务器连接一段时间后会自动断开。如果你的工作流要长时间挂机监听（比如每 5 分钟检查一次邮箱），可以设一个重连间隔（比如 60 分钟），避免连接悄悄断掉导致收不到邮件。

## 模板和示例（Templates and examples）

[浏览邮件触发器（IMAP）节点的集成模板](https://n8n.io/integrations/email-trigger-imap) 或 [搜索所有模板](https://n8n.io/workflows/)
