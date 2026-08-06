---
title: 发送邮件（Send Email）
contentType:
  - integration
  - reference
priority: high
nodeTitle: 发送邮件（Send Email）
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.sendemail.md
originalUrl: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sendemail
url: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sendemail
description: >-
  n8n（工作流自动化平台）中「发送邮件」节点的文档。
  包含使用指南和示例链接。
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

# 发送邮件（Send Email）

> **大白话**：这个节点就是"自动发邮件的小助手"。你只需要告诉它"发给谁、用什么账号发、标题是什么、内容是什么"，它就能通过 SMTP 邮件服务器把邮件发出去。最常见的用法：工作流处理完一件事后，自动给你或客户发一封通知邮件。它甚至能发出"需要你确认/填写内容"的邮件，等对方回复后再继续工作流。

「发送邮件」节点使用 SMTP 邮件服务器发送电子邮件。

{% hint style="info" %}
**凭据（Credential）**

你可以[在此处](../credentials/send-email/README.md)找到此节点的身份验证信息。
{% endhint %}

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

使用以下参数来配置节点。

### 连接凭据（Credential to connect with）

选择或创建一个 [SMTP 账号凭据](../credentials/send-email/README.md) 供节点使用。

> **小白提示**：SMTP 就是"发信协议"。用 QQ 邮箱、163 邮箱、Gmail 等都行，需要在邮箱设置里开启 SMTP 服务并获取授权码/应用专用密码，然后在 n8n 的 Credential 里填：SMTP 主机地址、端口（一般 465 是 SSL 加密）、邮箱账号和密码。

### 操作（Operation）

「发送邮件」节点支持以下操作：

* **Send（发送）**：发送一封电子邮件。
* **Send and Wait for Response（发送并等待回复）**：发送一封电子邮件，然后等待接收者的回复。此操作会暂停工作流的执行，直到用户提交回复。

选择 **Send and Wait for Response（发送并等待回复）** 会激活相关参数和选项，详见下文 [等待回复](#等待回复)。

### 发件邮箱（From Email）

输入你希望用于发送邮件的邮箱地址。你也可以用这个格式附带发件人姓名：`Name Name <email@sample.com>`，例如：`Nathan Doe <nate@n8n.io>`。

> **小白提示**：尖括号里的邮箱是真正用来发信的地址，尖括号前的名字只是显示给别人看的"发件人名称"。

### 收件邮箱（To Email）

输入你希望把邮件发送到的邮箱地址。你也可以用这个格式附带收件人姓名：`Name Name <email@sample.com>`，例如：`Nathan Doe <nate@n8n.io>`。用逗号分隔多个收件地址：`first@sample.com, "Name" <second@sample.com>`。

{% hint style="info" %}
**邮件格式**

这种邮箱格式同样适用于 CC（抄送）和 BCC（密送）字段。
{% endhint %}

### 主题（Subject）

输入邮件的主题行。

### 邮件格式（Email Format）

选择发送邮件的格式。此参数仅在 **Send（发送）** 操作下可用。可选：

* **Text（纯文本）**：以纯文本格式发送邮件。
* **HTML**：以 HTML 格式发送邮件。
* **Both（两者）**：同时发送两种格式。如果选择此项，将由收件人的邮件客户端决定显示哪种格式。

> **小白提示**：如果你要在邮件里加颜色、加粗、图片、按钮之类的"漂亮排版"，就选 **HTML**；如果只是简单的一段文字，用 **Text** 就行（兼容性最好，不会显示乱码）。

## 节点选项（Node options）

使用这些**选项（Options）**进一步调整节点的行为。

### 附加 n8n 署名（Append n8n Attribution）

设置是否在邮件末尾加上 `This email was sent automatically with n8n`（这封邮件由 n8n 自动发送）这句话：打开（turned on）则添加，关闭（turned off）则不添加。

### 附件（Attachments）

输入包含要作为附件添加的数据的二进制属性（binary properties）名称。使用此选项的一些提示：

* 使用 [从磁盘读写文件（Read/Write Files from Disk）](n8n-nodes-base.readwritefile.md) 节点或 [HTTP 请求（HTTP Request）](n8n-nodes-base.httprequest/README.md) 节点把文件加载到你的工作流中。
* 输入逗号分隔的二进制属性列表，可添加多个附件。
* 可以引用邮件正文中的嵌入图片或其他内容，例如 `<img src="cid:image_1">`。

> **小白提示**：在 n8n 里，"二进制数据"就像工作流中随身携带的"文件袋"。上一个节点产生的文件（比如下载的 PDF）存在某个字段里，在这里填上那个字段的名字，就能把文件作为附件发出去。

### 抄送邮箱（CC Email）

输入用于 `cc:`（抄送）字段的邮箱地址。

### 密送邮箱（BCC Email）

输入用于 `bcc:`（密送）字段的邮箱地址。

> **小白提示**：CC（抄送）的收件人彼此都能看到被抄送给了谁；BCC（密送）的收件人互相看不到，适合"悄悄地"发一份给某人。

### 忽略 SSL 问题（Ignore SSL Issues）

设置 n8n 是否忽略 TLS/SSL 证书验证失败：打开（turned on）则忽略，关闭（turned off）则强制执行证书验证。

> **小白提示**：正常情况下保持关闭（强制验证证书）最安全。只有在你自己的服务器证书有问题、或者用测试环境时，才临时打开这个开关。

### 回复地址（Reply To）

输入用于 Reply To（回复）字段的邮箱地址。

> **小白提示**：这个字段决定"收件人点回复按钮时，邮件发给谁"。比如用 A 账号发信，但希望回复发到 B 邮箱，就在这里填 B 的地址。

## 等待回复（Waiting for a response）

通过选择 **Send and Wait for a Response（发送并等待回复）** 操作，你可以发送一封邮件，然后暂停工作流的执行，直到有人确认某个操作或提供更多信息。

> **大白话**：这一节的场景是"发一封邮件出去，然后工作流停下来等对方的答复"。比如：发一封"请您确认订单"的邮件，收件人点"批准"或填完表单后，工作流才继续往下走。非常适合做审批流程（人审）、收集信息等场景。

### 回复类型（Response Type）

你可以在以下类型的等待/审批动作中进行选择：

* **Approval（审批）**：用户可以在邮件内部直接点击"批准/拒绝"。
* **Free Text（自由文本）**：用户可以通过一个表单提交回复内容。
* **Custom Form（自定义表单）**：用户可以通过一个自定义表单提交回复内容。

根据你选择的类型不同，可用的选项也不同。

### 审批参数和选项（Approval parameters and options）

使用 **Approval（审批）** 回复类型时，可用以下选项：

* **Type of Approval（审批类型）**：是只显示一个"批准"按钮，还是同时显示"批准"和"拒绝"两个按钮。
* **Button Label（按钮文字）**：批准或拒绝按钮上显示的文字。默认情况下，批准按钮显示 `Approve`，拒绝按钮显示 `Decline`。
* **Button Style（按钮样式）**：按钮的样式（primary 主要 / secondary 次要）。

此模式还提供以下选项：

* **Limit Wait Time（限制等待时间）**：设置工作流是否在指定的时间限制后自动恢复执行。可以是一个时间间隔（interval），也可以是一个具体的绝对时间（wall time）。
* **Append n8n Attribution（附加 n8n 署名）**：设置是否在邮件末尾加上 `This email was sent automatically with n8n`（这封邮件由 n8n 自动发送）这句话：打开（turned on）则添加，关闭（turned off）则不添加。

### 自由文本参数和选项（Free Text parameters and options）

使用 **Free Text（自由文本）** 回复类型时，可用以下选项：

* **Message Button Label（邮件按钮文字）**：邮件里按钮显示的文字。默认是 `Respond`（回复）。
* **Response Form Title（回复表单标题）**：用户提交回复时看到的表单标题。
* **Response Form Description（回复表单描述）**：用户提交回复时看到的表单描述文字。
* **Response Form Button Label（回复表单按钮文字）**：表单上提交按钮显示的文字。默认是 `Submit`（提交）。
* **Limit Wait Time（限制等待时间）**：设置工作流是否在指定的时间限制后自动恢复执行。可以是一个时间间隔（interval），也可以是一个具体的绝对时间（wall time）。
* **Append n8n Attribution（附加 n8n 署名）**：设置是否在邮件末尾加上 `This email was sent automatically with n8n`（这封邮件由 n8n 自动发送）这句话：打开（turned on）则添加，关闭（turned off）则不添加。

### 自定义表单参数和选项（Custom Form parameters and options）

使用 **Custom Form（自定义表单）** 回复类型时，你可以使用自己想要的字段和选项来构建一个表单。

你可以按照 [n8n 表单触发器（Form trigger）的表单元素](n8n-nodes-base.formtrigger.md#form-elements) 中介绍的设置，来自定义每个表单元素。要添加更多字段，请点击 **Add Form Element（添加表单元素）** 按钮。

同时还可以使用以下选项：

* **Message Button Label（邮件按钮文字）**：邮件里按钮显示的文字。默认是 `Respond`（回复）。
* **Response Form Title（回复表单标题）**：用户提交回复时看到的表单标题。
* **Response Form Description（回复表单描述）**：用户提交回复时看到的表单描述文字。
* **Response Form Button Label（回复表单按钮文字）**：表单上提交按钮显示的文字。默认是 `Submit`（提交）。
* **Limit Wait Time（限制等待时间）**：设置工作流是否在指定的时间限制后自动恢复执行。可以是一个时间间隔（interval），也可以是一个具体的绝对时间（wall time）。
* **Append n8n Attribution（附加 n8n 署名）**：设置是否在邮件末尾加上 `This email was sent automatically with n8n`（这封邮件由 n8n 自动发送）这句话：打开（turned on）则添加，关闭（turned off）则不添加。

## 限制（Limitations）

「发送邮件」（SMTP）节点不支持设置 `In-Reply-To` 和 `References` 之类的邮件头，而这些是邮件"会话串联（threading）"所必需的。因此，每封邮件都会被当作一封新会话处理，而不会出现在同一个会话串中。

* **解决办法（Workaround）**：使用 Gmail 节点的 **Reply to a message（回复邮件）** 操作，或使用一个支持自定义邮件头的自定义节点。

## 模板和示例（Templates and examples）

[浏览发送邮件（Send Email）的集成模板](https://n8n.io/integrations/send-email) 或 [搜索所有模板](https://n8n.io/workflows/)
