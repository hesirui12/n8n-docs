---
title: 等待 Wait
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Wait
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.wait.md
originalUrl: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait
url: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait
description: >-
  n8n 工作流自动化平台中「等待 Wait」节点的中文文档。
  包含使用方法说明和示例链接。
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

# 等待 Wait

> **大白话**：这个节点是「中场暂停」按钮——让工作流停下来等一会儿再继续。等的方式有四种：① 等固定的时间（比如 30 秒）；② 等到某个指定的时间点；③ 等外部打来一个 HTTP 请求（webhook 回调）才继续；④ 等用户在表单上提交。暂停期间工作流会把执行数据存到数据库里「挂起」，条件满足了再自动「唤醒」继续跑。

使用「等待 Wait」节点暂停工作流的执行。当工作流暂停时，它会将执行数据转存到数据库中。当恢复条件满足时，工作流会重新加载数据并继续执行。

## 操作

「等待 Wait」节点可以在以下条件下**恢复 Resume**：

* [**时间间隔之后 After Time Interval**](n8n-nodes-base.wait.md#after-time-interval)：节点等待一定的时间长度。
* [**在指定时间 At Specified Time**](n8n-nodes-base.wait.md#at-specified-time)：节点等到一个特定的时间点。
* [**收到 Webhook 调用 On Webhook Call**](n8n-nodes-base.wait.md#on-webhook-call)：节点一直等到收到一个 HTTP 调用。
* [**收到表单提交 On Form Submitted**](n8n-nodes-base.wait.md#on-form-submitted)：节点一直等到收到一个表单提交。

请参考下面更详细的章节获取更详细的说明。

### 时间间隔之后 After Time Interval

等待一定的时间长度。

这个参数还包括两个字段：

* **等待数量 Wait Amount**：输入要等待的时间数量。
* **等待单位 Wait Unit**：选择 **等待数量 Wait Amount** 的单位。选项有：
  * **秒 Seconds**
  * **分钟 Minutes**
  * **小时 Hours**
  * **天 Days**

关于这些时间间隔如何工作以及使用的时区，请参考 [基于时间的操作](#time-based-operations)。

### 在指定时间 At Specified Time

等到一个特定的日期和时间再继续。使用日期和时间选择器设置 **日期和时间 Date and Time**。

关于使用的时区，请参考 [基于时间的操作](#time-based-operations)。

### 收到 Webhook 调用 On Webhook Call

这个参数让你的工作流在「等待 Wait」节点收到 HTTP 调用时恢复执行。

用于在调用时恢复执行的 webhook URL 是在运行时生成的。「等待 Wait」节点提供 `$execution.resumeUrl` 变量，让你可以引用并把这个尚未生成的 URL 发送到任何需要的地方，例如发送给第三方服务或放进邮件里。

（白话解释：工作流跑起来的那一刻，n8n 才会真正生成这条「恢复链接」；你可以在工作流里用 `$execution.resumeUrl` 这个表达式把链接拿出去（比如发邮件给别人），别人点开链接，工作流就继续跑。）

当工作流执行时，「等待 Wait」节点会使用 `$execution.resumeUrl` 生成恢复 URL 和工作流中的 webhook。这个生成的 URL 对每次执行都是唯一的，所以你的工作流可以包含多个「等待 Wait」节点，当 webhook URL 被调用时，它会依次恢复每个「等待 Wait」节点。

对于这种 **恢复 Resume** 方式，需要设置下面列出的更多参数。

#### 身份验证 Authentication

选择是否以及如何对发往 `$execution.resumeUrl` 的传入恢复 webhook 请求进行身份验证。选项包括：

* **基础认证 Basic Auth**：使用基本身份验证。选择或输入一个新的 **基础认证凭据 Credential for Basic Auth** 来使用。
* **请求头认证 Header Auth**：使用请求头身份验证。选择或输入一个新的 **请求头认证凭据 Credential for Header Auth** 来使用。
* **JWT 认证 JWT Auth**：使用 JWT 身份验证。选择或输入一个新的 **JWT 认证凭据 Credential for JWT Auth** 来使用。
* **无 None**：不使用身份验证。

{% hint style="info" %}
**认证参考**

关于每种认证类型的更多信息，请参考 [Webhook 节点 | 身份验证文档](n8n-nodes-base.webhook/README.md#supported-authentication-methods)。
{% endhint %}

#### HTTP 方法 HTTP Method

选择 webhook 应该使用的 HTTP 方法。更多信息请参考 [Webhook 节点 | HTTP 方法文档](n8n-nodes-base.webhook/README.md#http-method)。

#### 响应代码 Response Code

输入 webhook 应该返回的响应代码。你可以使用常见的代码，也可以输入自定义代码。

#### 响应方式 Respond

从这些选项中选择何时以及如何响应 webhook：

* **立即响应 Immediately**：节点一执行就立即响应。
* **最后一个节点完成时 When Last Node Finishes**：返回响应代码和工作流中最后一个执行节点的数据输出。如果选择这个选项，还需要设置：
  * **响应数据 Response Data**：选择要返回什么数据以及使用什么格式。选项包括：
    * **所有条目 All Entries**：以数组形式返回最后一个节点的所有条目。
    * **第一个条目的 JSON First Entry JSON**：以 JSON 对象形式返回最后一个节点第一个条目的 JSON 数据。
    * **第一个条目的二进制数据 First Entry Binary**：以二进制文件形式返回最后一个节点第一个条目的二进制数据。
    * **无响应正文 No Response Body**：不带正文返回。
* **使用「响应 Webhook」节点 Using 'Respond to Webhook' Node**：按照 [响应 Webhook](n8n-nodes-base.respondtowebhook.md) 节点中的定义来响应。

#### 限制等待时间 Limit Wait Time

设置工作流是否会在特定的限制类型后自动恢复执行（开启 = 会，关闭 = 不会）。如果开启，还需要设置：

* **限制类型 Limit Type**：从这些选项中选择要强制执行的限制类型：
  * **时间间隔之后 After Time Interval**：等待一定的时间长度。
    * 输入限制的 **数量 Amount**。
    * 选择限制的 **单位 Unit**。
  * **在指定时间 At Specified Time**：等到一个特定的日期和时间再恢复。
    * **最大日期和时间 Max Date and Time**：使用日期和时间选择器设置节点应该恢复的指定时间。

（白话解释：「限制等待时间」= 兜底保险。万一 webhook 一直没人调用，总不能无限等下去；设一个最长时间，到点自动恢复继续跑。）

#### 收到 Webhook 调用时的选项

* **二进制属性 Binary Property**：输入用于写入接收到的文件数据的二进制属性的名称。这个选项只在收到二进制数据时才相关。
* **忽略机器人 Ignore Bots**：设置是否忽略来自链接预览器和网络爬虫等机器人的请求（开启 = 忽略，关闭 = 不忽略）。
* **IP 白名单 IP(s) Whitelist**：在此输入 IP 地址，限制谁（或什么）可以调用 webhook URL。输入允许的 IP 地址列表，用逗号分隔。白名单之外的 IP 访问会抛出 403 错误。如果留空，则所有 IP 地址都可以调用 webhook URL。
* **无响应正文 No Response Body**：设置 n8n 是否在响应中发送正文（关闭 = 发送）或阻止 n8n 在响应中发送正文（开启 = 不发送）。
* **原始正文 Raw Body**：设置是否以原始格式（如 JSON 或 XML）返回正文（开启 = 是，关闭 = 否）。
* **响应数据 Response Data**：输入你想在响应中发送的任何自定义数据。
* **响应头 Response Headers**：在 webhook 响应中发送更多请求头。想了解更多关于响应头的信息，请参考 [MDN Web 文档 | 响应头](https://developer.mozilla.org/en-US/docs/Glossary/Response_header)。
* **Webhook 后缀 Webhook Suffix**：输入一个追加到恢复 URL 的后缀。当工作流包含多个「等待 Wait」节点时，这有助于为每个「等待 Wait」节点创建唯一的 webhook URL。请注意，生成的 `$resumeWebhookUrl` 不会自动包含此后缀，你必须在把它暴露出去之前手动把后缀追加到 webhook URL 上。

#### 收到 Webhook 调用时的限制

使用「收到 Webhook 调用」时有一些限制需要记住：

* 工作流的部分执行会改变 `$resumeWebhookUrl`，所以请确保把这个 URL 发送给你想要的第三方的那个节点，与「等待 Wait」节点在**同一次执行**中运行。

### 收到表单提交 On Form Submitted

在继续之前等待一次表单提交。设置以下参数：

#### 表单标题 Form Title

输入显示在表单顶部的标题。

#### 表单描述 Form Description

输入显示在标题下方的表单描述。这个描述可以帮助提示用户如何完成表单。

#### 表单字段 Form Fields

使用这些参数设置你想要在表单上显示的每个字段：

* **字段标签 Field Label**：输入你想在表单中显示的字段标签。
* **字段类型 Field Type**：选择要在表单中显示的字段类型。选项有：
  * **日期 Date**
  * **下拉列表 Dropdown List**：在 **字段选项 Field Options** 中输入每个下拉选项。
    * **多选 Multiple Choice**：选择用户是只能选一个下拉选项（关闭）还是可以选多个下拉选项（开启）。
  * **数字 Number**
  * **密码 Password**
  * **文本 Text**
  * **多行文本 Textarea**
* **必填字段 Required Field**：设置用户是否必须填写此字段才能提交表单（开启 = 必须填写），或者用户可以不填写此字段就提交表单（关闭 = 可以不填写）。

#### 何时响应 Respond When

设置何时响应表单提交。选项有：

* **表单已提交 Form Is Submitted**：节点一收到表单提交就立即响应。
* **工作流完成 Workflow Finishes**：当工作流的最后一个节点完成时响应。
* **使用「响应 Webhook」节点 Using 'Respond to Webhook' Node**：当 [响应 Webhook](n8n-nodes-base.respondtowebhook.md) 节点执行时响应。

#### 限制等待时间 Limit Wait Time

设置工作流是否会在特定的限制类型后自动恢复执行（开启 = 会，关闭 = 不会）。

如果开启，还需要设置：

* **限制类型 Limit Type**：从这些选项中选择要强制执行的限制类型：
  * **时间间隔之后 After Time Interval**：等待一定的时间长度。
    * 输入限制的 **数量 Amount**。
    * 选择限制的 **单位 Unit**。
  * **在指定时间 At Specified Time**：等到一个特定的日期和时间再恢复。
    * **最大日期和时间 Max Date and Time**：使用日期和时间选择器设置节点应该恢复的指定时间。

#### 表单响应选项

* **表单响应 Form Response**：从这些选项中选择表单希望**如何响应 Respond With**：
  * **表单已提交文本 Form Submitted Text**：用户填写完表单后，表单会显示 **要显示的文本 Text to Show** 中输入的任何文本。如果你想显示确认消息，请使用这个选项。
  * **重定向 URL Redirect URL**：用户填写完表单后，表单会将用户重定向到 **要重定向到的 URL URL to Redirect to**。这必须是一个有效的 URL。
* **Webhook 后缀 Webhook Suffix**：输入一个追加到恢复 URL 的后缀。当工作流包含多个「等待 Wait」节点时，这有助于为每个「等待 Wait」节点创建唯一的 webhook URL。请注意，生成的 `$resumeWebhookUrl` 不会自动包含此后缀，你必须在把它暴露出去之前手动把后缀追加到 webhook URL 上。

## 模板和示例

[浏览等待（Wait）的集成模板](https://n8n.io/integrations/wait) 或 [搜索所有模板](https://n8n.io/workflows/)

## 基于时间的操作

对于基于时间的恢复操作，请注意：

* 对于少于 65 秒的等待时间，工作流不会把执行数据转存到数据库。相反，进程会继续运行，并在指定的时间间隔过去后恢复执行。
* 无论时区设置如何，始终使用 n8n 服务器时间。工作流时区设置以及对其所做的任何更改，都不会影响「等待 Wait」节点的时间间隔或指定时间。

（白话解释：等 65 秒以内是「原地等待」，不折腾数据库；时间计算一律以 n8n 服务器时间为准，你工作流里设置的时区对它无效。）
