---
title: Gmail 节点草稿操作文档
description: >-
  了解如何在 n8n 中使用 Gmail 节点的草稿操作。按照技术文档把草稿操作集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Gmail 节点草稿操作文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.gmail/draft-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/draft-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/draft-operations
layout:
  description:
    visible: false
---

# Gmail 节点草稿操作

> **大白话**：这一页讲 Gmail 节点里「草稿」相关的 4 个操作：创建草稿、删除草稿、获取单个草稿、获取多个草稿。每个操作下面都列出了要填的参数和可选的进阶选项（比如带附件、抄送、下载附件等）。

用草稿（Draft）操作在 Gmail 中创建、删除或获取单个/多个草稿。关于 Gmail 节点本身的更多信息，请参考 [Gmail 节点](README.md)。

## 创建草稿

用这个操作来创建新草稿。

填写以下参数：

* 选择要连接的 **Credential to connect with（连接凭据）**，或者新建一个。
* **Resource（资源）**：选择 **Draft（草稿）**。
* **Operation（操作）**：选择 **Create（创建）**。
* **Subject（主题）**：填写邮件主题。
* 选择 **Email Type（邮件类型）**，可选 **Text（纯文本）** 或 **HTML**。
* **Message（邮件内容）**：填写邮件正文。

### 创建草稿选项

用这些选项进一步微调节点的行为：

* **Attachments（附件）**：点击 **Add Attachment（添加附件）** 添加附件。填写 **Attachment Field Name (in Input)（附件字段名（在输入中））**，指定输入节点里哪个字段包含附件。
    * 如果有多个附件，用逗号分隔填写多个字段名。
* **BCC（密送）**：填写一个或多个密送收件人邮箱地址。多个地址用逗号分隔，例如 `jay@gatsby.com, jon@smith.com`。
* **CC（抄送）**：填写一个或多个抄送收件人邮箱地址。多个地址用逗号分隔，例如 `jay@gatsby.com, jon@smith.com`。
* **From Alias Name or ID（发件别名名称或 ID）**：选择该草稿的发送别名。这个下拉框会根据你在参数里选择的凭据自动填充。
* **Send Replies To（回复地址）**：填写一个邮箱地址，作为「回复」时要发送到的地址。
* **Thread ID（会话 ID）**：如果你想让这个草稿挂在某个会话下面，填写该会话的 ID。
* **To Email（收件人邮箱）**：填写一个或多个收件人邮箱地址。多个地址用逗号分隔，例如 `jay@gatsby.com, jon@smith.com`。

更多信息请参考 [Gmail API Method: users.drafts.create](https://developers.google.com/gmail/api/reference/rest/v1/users.drafts/create) 文档。

## 删除草稿

用这个操作来删除一个草稿。

填写以下参数：

* 选择要连接的 **Credential to connect with（连接凭据）**，或者新建一个。
* **Resource（资源）**：选择 **Draft（草稿）**。
* **Operation（操作）**：选择 **Delete（删除）**。
* **Draft ID（草稿 ID）**：填写你要删除的草稿的 ID。

更多信息请参考 [Gmail API Method: users.drafts.delete](https://developers.google.com/gmail/api/reference/rest/v1/users.drafts/delete) 文档。

## 获取单个草稿

用这个操作来获取单个草稿。

填写以下参数：

* 选择要连接的 **Credential to connect with（连接凭据）**，或者新建一个。
* **Resource（资源）**：选择 **Draft（草稿）**。
* **Operation（操作）**：选择 **Get（获取）**。
* **Draft ID（草稿 ID）**：填写你想获取信息的草稿的 ID。

### 获取草稿选项

用这些选项进一步微调节点的行为：

* **Attachment Prefix（附件前缀）**：填写一个前缀，节点会把下载的附件保存到以该前缀命名的二进制属性里。n8n 会在前缀后面加一个从 `0` 开始的序号。例如，前缀填 `attachment_`，第一个附件就会保存为 `attachment_0`。
* **Download Attachments（下载附件）**：选择节点是否下载草稿的附件（开启=下载，关闭=不下载）。

更多信息请参考 [Gmail API Method: users.drafts.get](https://developers.google.com/gmail/api/reference/rest/v1/users.drafts/get) 文档。

## 获取多个草稿

用这个操作来获取两个或更多草稿。

填写以下参数：

* 选择要连接的 **Credential to connect with（连接凭据）**，或者新建一个。
* **Resource（资源）**：选择 **Draft（草稿）**。
* **Operation（操作）**：选择 **Get Many（获取多个）**。
* **Return All（返回全部）**：选择节点是返回全部草稿（开启）还是只返回设定上限的条数（关闭）。
* **Limit（数量上限）**：填写最多返回多少个草稿。只有关闭 **Return All** 时才生效。

### 获取多个草稿选项

用这些选项进一步微调节点的行为：

* **Attachment Prefix（附件前缀）**：填写一个前缀，节点会把下载的附件保存到以该前缀命名的二进制属性里。n8n 会在前缀后面加一个从 `0` 开始的序号。例如，前缀填 `attachment_`，第一个附件就会保存为 `attachment_0`。
* **Download Attachments（下载附件）**：选择节点是否下载草稿的附件（开启=下载，关闭=不下载）。
* **Include Spam and Trash（包含垃圾邮件和回收站）**：选择节点是否获取 Spam（垃圾邮件）和 Trash（回收站）文件夹里的草稿（开启=包含，关闭=不包含）。

更多信息请参考 [Gmail API Method: users.drafts.list](https://developers.google.com/gmail/api/reference/rest/v1/users.drafts/list) 文档。

## 常见问题

关于常见错误或问题以及建议的解决方法，请参考[常见问题](common-issues.md)。
