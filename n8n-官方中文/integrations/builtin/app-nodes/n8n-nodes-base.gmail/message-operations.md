---
title: Gmail 节点 Message 操作文档
description: >-
  了解如何在 n8n 中使用 Gmail 节点 Message 节点。按照技术文档把 Gmail 节点 Message 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Gmail 节点 Message 操作文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.gmail/message-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/message-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/message-operations
layout:
  description:
    visible: false
---
# Gmail 节点 Message 操作

> **大白话**：这个页面教你用 Gmail 节点对「邮件」做各种操作，比如发送邮件、回复邮件、删除邮件、标记已读/未读、给邮件加/去标签、获取单封或多封邮件。就是把你在 Gmail 网页里能手动做的事，用工作流自动做。

使用 Message 操作可以发送、回复、删除邮件，标记已读或未读，给邮件添加/移除标签，以及获取单封或多封邮件。关于 Gmail 节点本身的更多信息，请参考 [Gmail 节点](README.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/sYWM3IB0LEL4RkPx8ndF/" %}

## 给邮件添加标签

用这个操作给一封邮件添加一个或多个标签。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Add Label**。
* **Message ID**（邮件 ID）：输入要添加标签的邮件的 ID。
* **Label Names or IDs**（标签名称或 ID）：选择要添加的标签名称，或输入表达式指定 ID。下拉框会根据你选择的 **Credential**（凭证）自动填充。

更多信息请参考 [Gmail API 方法：users.messages.modify](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/modify) 文档。

## 删除邮件

用这个操作立即、永久地删除一封邮件。

{% hint style="info" %}
**永久删除**

这个操作无法撤销。如果想删除后还能恢复，请改用 [Thread Trash 操作](thread-operations.md#trash-a-thread)（把邮件移到垃圾箱）。
{% endhint %}

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Delete**。
* **Message ID**（邮件 ID）：输入要删除的邮件的 ID。

更多信息请参考 [Gmail API 方法：users.messages.delete](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/delete) 文档。

## 获取单封邮件

用这个操作获取一封邮件。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Get**。
* **Message ID**（邮件 ID）：输入要获取的邮件的 ID。
* **Simplify**（简化输出）：选择返回简化版响应（开启）还是原始数据（关闭）。默认为开启。
    * 这相当于把 API 调用的 `format` 设为 `metadata`，会返回邮件的 ID、标签和邮件头信息，包括：发件人（From）、收件人（To）、抄送（CC）、密送（BCC）和主题（Subject）。

更多信息请参考 [Gmail API 方法：users.messages.get](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/get) 文档。

## 获取多封邮件

用这个操作一次性获取两封或更多邮件。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Get Many**。
* **Return All**（返回全部）：选择节点是返回所有邮件（开启）还是只返回设定数量上限的邮件（关闭）。
* **Limit**（限制）：输入最多返回的邮件数量。只有关闭了 **Return All** 时才使用。
* **Simplify**（简化输出）：选择返回简化版响应（开启）还是原始数据（关闭）。默认为开启。
    * 这相当于把 API 调用的 `format` 设为 `metadata`，会返回邮件的 ID、标签和邮件头信息，包括：发件人（From）、收件人（To）、抄送（CC）、密送（BCC）和主题（Subject）。

### 获取多封邮件的筛选条件

用这些筛选条件进一步缩小节点返回的范围：

* **Include Spam and Trash**（包含垃圾邮件和回收站）：选择节点是否获取垃圾邮件文件夹和回收站里的邮件（开启）或不获取（关闭）。
* **Label Names or IDs**（标签名称或 ID）：只返回带有所选标签的邮件。选择要应用的标签名称，或输入表达式指定 ID。下拉框会根据你选择的 **Credential**（凭证）自动填充。
* **Search**（搜索）：输入 Gmail 的搜索筛选语法，比如 `from:`，来过滤返回的邮件。更多信息请参考 [Gmail 搜索技巧](https://support.google.com/mail/answer/7190?hl=en)。
* **Read Status**（阅读状态）：选择获取 **未读和已读邮件**、**仅未读邮件**（默认）还是 **仅已读邮件**。
* **Received After**（在此之后收到）：只返回指定日期时间之后收到的邮件。用日期选择器选日期时间，或输入表达式，把日期写成 ISO 格式的字符串或毫秒时间戳。字符串格式请参考 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)。
* **Received Before**（在此之前收到）：只返回指定日期时间之前收到的邮件。用日期选择器选日期时间，或输入表达式，把日期写成 ISO 格式的字符串或毫秒时间戳。字符串格式请参考 [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)。
* **Sender**（发件人）：输入一个邮箱地址或发件人名称的一部分，只返回该发件人发出的邮件。

更多信息请参考 [Gmail API 方法：users.messages.list](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/list) 文档。

## 标记为已读

用这个操作把一封邮件标记为已读。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Mark as Read**。
* **Message ID**（邮件 ID）：输入要标记为已读的邮件的 ID。

更多信息请参考 [Gmail API 方法：users.messages.modify](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/modify) 文档。

## 标记为未读

用这个操作把一封邮件标记为未读。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Mark as Unread**。
* **Message ID**（邮件 ID）：输入要标记为未读的邮件的 ID。

更多信息请参考 [Gmail API 方法：users.messages.modify](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/modify) 文档。

## 从邮件移除标签

用这个操作从一封邮件上移除一个或多个标签。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Remove Label**。
* **Message ID**（邮件 ID）：输入要移除标签的邮件的 ID。
* **Label Names or IDs**（标签名称或 ID）：选择要移除的标签名称，或输入表达式指定 ID。下拉框会根据你选择的 **Credential**（凭证）自动填充。

更多信息请参考 [Gmail API 方法：users.messages.modify](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/modify) 文档。

## 回复邮件

用这个操作给一封已有邮件发送回复。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Reply**。
* **Message ID**（邮件 ID）：输入要回复的邮件的 ID。
* 选择 **Email Type**（邮件类型）：**Text**（纯文本）或 **HTML**。
* **Message**（正文）：输入邮件正文内容。

### 回复选项

用这些选项进一步调整节点的行为：

* **Append n8n attribution**（附加 n8n 署名）：默认情况下，节点会在邮件末尾附加一行 `This email was sent automatically with n8n`（这封邮件由 n8n 自动发送）。要移除这句话，请关闭此选项。
* **Attachments**（附件）：选择 **Add Attachment**（添加附件）来添加附件。输入 **Attachment Field Name (in Input)**（附件字段名，来自输入数据），用来指定上游节点数据里哪个字段包含附件。
    * 多个字段用英文逗号分隔的列表填写。
* **BCC**（密送）：输入一个或多个密送收件人的邮箱地址。多个地址用英文逗号分隔，例如 `jay@gatsby.com, jon@smith.com`。
* **CC**（抄送）：输入一个或多个抄送收件人的邮箱地址。多个地址用英文逗号分隔，例如 `jay@gatsby.com, jon@smith.com`。
* **Sender Name**（发件人名称）：输入你想让收件人看到的发件人显示名称。
* **Reply to Sender Only**（仅回复发件人）：选择是回复所有人（关闭）还是只回复发件人（开启）。

更多信息请参考 [Gmail API 方法：users.messages.send](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/send) 文档。

## 发送邮件

用这个操作发送一封邮件。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send**。
* **To**（收件人）：输入邮件要发送到的邮箱地址。
* **Subject**（主题）：输入邮件主题。
* 选择 **Email Type**（邮件类型）：**Text**（纯文本）或 **HTML**。
* **Message**（正文）：输入邮件正文内容。

### 发送选项

用这些选项进一步调整节点的行为：

* **Append n8n attribution**（附加 n8n 署名）：默认情况下，节点会在邮件末尾附加一行 `This email was sent automatically with n8n`（这封邮件由 n8n 自动发送）。要移除这句话，请关闭此选项。
* **Attachments**（附件）：选择 **Add Attachment**（添加附件）来添加附件。输入 **Attachment Field Name (in Input)**（附件字段名，来自输入数据），用来指定上游节点数据里哪个字段包含附件。
    * 多个字段用英文逗号分隔的列表填写。
* **BCC**（密送）：输入一个或多个密送收件人的邮箱地址。多个地址用英文逗号分隔，例如 `jay@gatsby.com, jon@smith.com`。
* **CC**（抄送）：输入一个或多个抄送收件人的邮箱地址。多个地址用英文逗号分隔，例如 `jay@gatsby.com, jon@smith.com`。
* **Sender Name**（发件人名称）：输入你想让收件人看到的发件人显示名称。
* **Send Replies To**（回复地址）：输入一个邮箱地址，作为收件人回复时的目标地址。
* **Reply to Sender Only**（仅回复发件人）：选择是回复所有人（关闭）还是只回复发件人（开启）。

更多信息请参考 [Gmail API 方法：users.messages.send](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/send) 文档。

## 发送邮件并等待批准

用这个操作发送一封邮件，并在继续执行工作流之前等待收件人的批准。

{% hint style="info" %}
**复杂审批请用 Wait 节点**

**Send and Wait for Approval**（发送并等待批准）操作适合简单的审批流程。对于更复杂的审批，请考虑使用 [Wait 节点](../../core-nodes/n8n-nodes-base.wait.md)。
{% endhint %}

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Message**。
* **Operation**（操作）：选择 **Send and Wait for Approval**。
* **To**（收件人）：输入邮件要发送到的邮箱地址。
* **Subject**（主题）：输入邮件主题。
* **Message**（正文）：输入邮件正文内容。

### 发送并等待批准的选项

用这些选项进一步调整节点的行为：

* **Type of Approval**（批准类型）：选择 **Approve Only**（仅批准，默认）只包含一个批准按钮，或 **Approve and Disapprove**（批准和拒绝）额外增加一个拒绝选项。
* **Approve Button Label**（批准按钮文字）：批准按钮上显示的文字（默认 **Approve**，即"批准"）。
* **Approve Button Style**（批准按钮样式）：批准按钮显示为 **Primary**（主要，默认）还是 **Secondary**（次要）样式。
* **Disapprove Button Label**（拒绝按钮文字）：拒绝按钮上显示的文字（默认 **Decline**，即"拒绝"）。只有把 **Type of Approval** 设为 **Approve and Disapprove** 时才可见。
* **Disapprove Button Style**（拒绝按钮样式）：拒绝按钮显示为 **Primary**（主要）还是 **Secondary**（次要，默认）样式。只有把 **Type of Approval** 设为 **Approve and Disapprove** 时才可见。

更多信息请参考 [Gmail API 方法：users.messages.send](https://developers.google.com/gmail/api/reference/rest/v1/users.messages/send) 文档。

## 常见问题

如果遇到常见的报错或问题，以及对应的解决步骤，请参考 [常见问题](common-issues.md)。
