---
title: Gmail 节点 Thread 操作文档
description: >-
  了解如何在 n8n 中使用 Gmail 节点 Thread 节点。按照技术文档把 Gmail 节点 Thread 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Gmail 节点 Thread 操作文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.gmail/thread-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/thread-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/thread-operations
layout:
  description:
    visible: false
---
# Gmail 节点 Thread 操作

> **大白话**：这个页面教你用 Gmail 节点对「会话线程」做操作。线程（Thread）就是一组相关的往来邮件（比如同一封邮件的全部回复）。你可以删除线程、回复、移入/移出回收站、加/去标签、获取单个或批量获取线程。

使用 Thread 操作可以删除、回复、移入/移出回收站、添加/移除标签、获取单个线程或列出多个线程。关于 Gmail 节点本身的更多信息，请参考 [Gmail 节点](README.md)。

## 给线程添加标签

用这个操作给一个线程添加标签。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Thread**。
* **Operation**（操作）：选择 **Add Label**。
* **Thread ID**（线程 ID）：输入要添加标签的线程的 ID。
* **Label Names or IDs**（标签名称或 ID）：选择要应用的标签名称，或输入表达式指定 ID。下拉框会根据你选择的 **Credential**（凭证）自动填充。

更多信息请参考 [Gmail API 方法：users.threads.modify](https://developers.google.com/gmail/api/reference/rest/v1/users.threads/modify) 文档。

## 删除线程

用这个操作立即、永久地删除一个线程及其所有邮件。

{% hint style="info" %}
**永久删除**

这个操作无法撤销。如果想删除后还能恢复，请改用 [Trash 操作](#trash-a-thread)（移入回收站）。
{% endhint %}

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Thread**。
* **Operation**（操作）：选择 **Delete**。
* **Thread ID**（线程 ID）：输入要删除的线程的 ID。

更多信息请参考 [Gmail API 方法：users.threads.delete](https://developers.google.com/gmail/api/reference/rest/v1/users.threads/delete) 文档。

## 获取单个线程

用这个操作获取一个线程。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Thread**。
* **Operation**（操作）：选择 **Get**。
* **Thread ID**（线程 ID）：输入要获取的线程的 ID。
* **Simplify**（简化输出）：选择返回简化版响应（开启）还是原始数据（关闭）。默认为开启。
    * 这相当于把 API 调用的 `format` 设为 `metadata`，会返回邮件的 ID、标签和邮件头信息，包括：发件人（From）、收件人（To）、抄送（CC）、密送（BCC）和主题（Subject）。

### 获取线程选项

用这些选项进一步调整节点的行为：

* **Return Only Messages**（只返回邮件）：选择是否只返回线程里的邮件（开启）。

更多信息请参考 [Gmail API 方法：users.threads.get](https://developers.google.com/gmail/api/reference/rest/v1/users.threads/get) 文档。

## 获取多个线程

用这个操作一次性获取两个或更多线程。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Thread**。
* **Operation**（操作）：选择 **Get Many**。
* **Return All**（返回全部）：选择节点是返回所有线程（开启）还是只返回设定数量上限的线程（关闭）。
* **Limit**（限制）：输入最多返回的线程数量。只有关闭了 **Return All** 时才使用。

### 获取多个线程的筛选条件

用这些筛选条件进一步缩小节点返回的范围：

* **Include Spam and Trash**（包含垃圾邮件和回收站）：选择节点是否获取垃圾邮件文件夹和回收站里的线程（开启）或不获取（关闭）。
* **Label Names or IDs**（标签名称或 ID）：只返回带有所选标签的线程。选择要应用的标签名称，或输入表达式指定 ID。下拉框会根据你选择的 **Credential**（凭证）自动填充。
* **Search**（搜索）：输入 Gmail 的搜索筛选语法，比如 `from:`，来过滤返回的线程。更多信息请参考 [Gmail 搜索技巧](https://support.google.com/mail/answer/7190?hl=en)。
* **Read Status**（阅读状态）：选择获取 **未读和已读邮件**、**仅未读邮件**（默认）还是 **仅已读邮件**。
* **Received After**（在此之后收到）：只返回指定日期时间之后收到的邮件。用日期选择器选日期时间，或输入表达式，把日期写成 ISO 格式的字符串或毫秒时间戳。字符串格式请参考 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)。
* **Received Before**（在此之前收到）：只返回指定日期时间之前收到的邮件。用日期选择器选日期时间，或输入表达式，把日期写成 ISO 格式的字符串或毫秒时间戳。字符串格式请参考 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)。

更多信息请参考 [Gmail API 方法：users.threads.list](https://developers.google.com/gmail/api/reference/rest/v1/users.threads/list) 文档。

## 从线程移除标签

用这个操作从一个线程上移除标签。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Thread**。
* **Operation**（操作）：选择 **Remove Label**。
* **Thread ID**（线程 ID）：输入要移除标签的线程的 ID。
* **Label Names or IDs**（标签名称或 ID）：选择要移除的标签名称，或输入表达式指定它们的 ID。下拉框会根据你选择的 **Credential**（凭证）自动填充。

更多信息请参考 [Gmail API 方法：users.threads.modify](https://developers.google.com/gmail/api/reference/rest/v1/users.threads/modify) 文档。

## 回复消息

用这个操作回复一个线程中的消息。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Thread**。
* **Operation**（操作）：选择 **Reply**。
* **Thread ID**（线程 ID）：输入要回复的线程的 ID。
* **Message Snippet or ID**（消息片段或 ID）：选择要回复的消息，或输入表达式指定它的 ID。下拉框会根据你选择的 **Credential**（凭证）自动填充。
* 选择 **Email Type**（邮件类型）：**Text**（纯文本）或 **HTML**。
* **Message**（正文）：输入邮件正文内容。

### 回复选项

用这些选项进一步调整节点的行为：

* **Attachments**（附件）：选择 **Add Attachment**（添加附件）来添加附件。输入 **Attachment Field Name (in Input)**（附件字段名，来自输入数据），用来指定上游节点数据里哪个字段包含附件。
    * 多个字段用英文逗号分隔的列表填写。
* **BCC**（密送）：输入一个或多个密送收件人的邮箱地址。多个地址用英文逗号分隔，例如 `jay@gatsby.com, jon@smith.com`。
* **CC**（抄送）：输入一个或多个抄送收件人的邮箱地址。多个地址用英文逗号分隔，例如 `jay@gatsby.com, jon@smith.com`。
* **Sender Name**（发件人名称）：输入你想让收件人看到的发件人显示名称。
* **Reply to Sender Only**（仅回复发件人）：选择是回复所有人（关闭）还是只回复发件人（开启）。

更多信息请参考 [Gmail API 方法：users.messages.send](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/send) 文档。

## 把线程移入回收站

用这个操作把一个线程及其所有邮件移入回收站。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Thread**。
* **Operation**（操作）：选择 **Trash**。
* **Thread ID**（线程 ID）：输入要移入回收站的线程的 ID。

更多信息请参考 [Gmail API 方法：users.threads.trash](https://developers.google.com/gmail/api/reference/rest/v1/users.threads/trash) 文档。

## 从回收站恢复线程

用这个操作把一个线程及其所有邮件从回收站恢复。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Thread**。
* **Operation**（操作）：选择 **Untrash**。
* **Thread ID**（线程 ID）：输入要移入回收站的线程的 ID。

更多信息请参考 [Gmail API 方法：users.threads.untrash](https://developers.google.com/gmail/api/reference/rest/v1/users.threads/untrash) 文档。

## 常见问题

如果遇到常见的报错或问题，以及对应的解决步骤，请参考 [常见问题](common-issues.md)。
