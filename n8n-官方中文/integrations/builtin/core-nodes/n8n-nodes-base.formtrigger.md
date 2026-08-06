---
title: n8n Form Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 n8n Form Trigger（表单触发器）节点。按照本文档将
  n8n Form Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: n8n Form Trigger 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.formtrigger.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger'
layout:
  description:
    visible: false
---

# n8n Form Trigger 节点

> **大白话**：这个节点帮你"做一个网页表单"，访客填完并提交后，工作流就自动启动，表单里填的数据会作为输入传进来。你不用自己写网页，n8n 会自动生成表单页面给你用。如果你想要多页表单，可以再接 n8n Form 节点继续加页。

使用 n8n Form Trigger（表单触发器）节点，可以在用户提交表单时启动一个工作流，并获取表单中的输入数据。该节点会自动为你生成表单网页。

你可以用 [n8n Form](n8n-nodes-base.form.md) 节点添加更多页面，让表单可以分多步继续填写。

## 构建和测试工作流

在构建或测试工作流时，请使用 **Test URL（测试 URL）**。使用测试 URL 可以确保你能在编辑器界面中看到传入的数据，这对于调试非常有用。

有两种测试方式：

- 选择 **Execute Step（执行当前节点）**。n8n 会打开表单。当你提交表单时，n8n 只运行当前节点，而不会运行工作流的其余部分。
- 选择 **Execute Workflow（执行整个工作流）**。n8n 会打开表单。当你提交表单时，n8n 会运行整个工作流。

## 生产环境工作流

当你的工作流准备好后，切换到使用 **Production URL（生产 URL）**。然后你就可以发布工作流，当用户提交表单时，n8n 会自动运行它。

在使用生产 URL 时，请确保你已经保存并发布了工作流。使用生产 URL 时，通过 Form Trigger 流动的数据不会显示在编辑器界面中。

## 使用查询参数设置默认值

你可以使用 n8n Form Trigger 提供的初始 URL 上的[查询参数（query parameters）](https://en.wikipedia.org/wiki/Query_string#Web_forms)来设置表单字段的初始值。发送到 n8n Form Trigger URL 的查询参数，表单中的[每个页面](n8n-nodes-base.form.md)都会收到相同的参数。

{% hint style="info" %}
**仅限生产环境**

查询参数只在表单使用生产模式时可用。在测试模式下，n8n 不会根据查询参数填充字段值。
{% endhint %}

使用查询参数时，请对包含特殊字符的字段名或值进行[百分号编码（percent-encode）](https://en.wikipedia.org/wiki/Percent-encoding)。这能确保 n8n 正确识别并使用给定字段的初始值。你可以使用 [URL Encode/Decode](https://www.url-encode-decode.com/) 之类的工具，用百分号编码来格式化你的查询参数。

举个例子，假设你有一个包含以下属性的表单：

* 生产 URL：`https://my-account.n8n.cloud/form/my-form`
* 字段：
	* `name`：`Jane Doe`
	* `email`：`jane.doe@example.com`

使用查询参数和百分号编码，你可以用下面的 URL 把上述数据设置为字段的初始值：

```
https://my-account.n8n.cloud/form/my-form?email=jane.doe%40example.com&name=Jane%20Doe
```

在这个例子中，百分号编码把 @ 符号（`@`）替换成字符串 `%40`，把空格字符（` `）替换成字符串 `%20`。这样，无论这些字段出现在表单的哪一页，都会被设置为上述初始值。

## 节点参数

以下是节点的主要配置字段：

### Authentication（认证）

- **Basic Auth（基础认证）**
- **None（无）**

#### 使用基础认证

要配置这个凭证，你需要：

- 访问你的 HTTP Request 所指向的应用或服务时使用的**用户名（Username）**。
- 与该用户名对应的**密码（Password）**。

### 表单 URL

Form Trigger 节点有两个 URL：**Test URL（测试 URL）** 和 **Production URL（生产 URL）**。n8n 会在节点面板顶部显示这两个 URL。选择 **Test URL** 或 **Production URL** 来切换 n8n 显示哪个 URL。

![Screenshot of the form URLs](../../.gitbook/assets/form-urls.png)

- **Test URL（测试 URL）**：当工作流未激活时，你选择 **Execute Step** 或 **Execute Workflow** 后，n8n 会注册一个测试 webhook。当你调用这个 URL 时，n8n 会在工作流中显示数据。
- **Production URL（生产 URL）**：当你发布工作流时，n8n 会注册一个生产 webhook。使用生产 URL 时，n8n 不会在工作流中显示数据。你仍然可以查看生产环境执行的工作流数据：在工作流中选择 **Executions（执行记录）** 标签页，然后选择你要查看的工作流执行记录。

### Form Path（表单路径）

为表单设置一个自定义 slug（URL 中的最后一段标识符）。

### Form Title（表单标题）

输入表单的标题。n8n 会把 **Form Title** 显示为网页标题和表单上的主 `h1` 标题。

### Form Description（表单描述）

输入表单的描述。n8n 会把 **Form Description** 显示为主 `h1` 标题下方的副标题。使用 `\n` 或 `<br>` 可以添加换行。

关于允许和限制使用的 HTML 标签，请参阅 [HTML 安全与允许的标签](#html-security-and-allowed-tags)。

### Form Elements（表单元素）

为你的表单创建问题字段。选择 **Add Form Element（添加表单元素）** 来添加一个新字段。

每个字段都有以下设置：

- **Field Label（字段标签）**：输入渲染后表单中显示在输入框上方的标签。
- **Field Name（字段名称）**：这个名称用于 Form Trigger 节点的输出。你可以用它在下游节点中引用某个表单字段。
- **Element Type（元素类型）**：从 **Checkboxes（复选框）**、**Custom HTML（自定义 HTML）**、**Date（日期）**、**Dropdown（下拉框）**、**Email（邮箱）**、**File（文件）**、**Hidden Field（隐藏字段）**、**Number（数字）**、**Password（密码）**、**Radio Buttons（单选按钮）**、**Text（文本）** 或 **Textarea（多行文本）** 中选择。
	- 选择 **Checkboxes（复选框）** 可以在表单中包含复选框元素。默认情况下，表单用户可以选择任意数量的复选框。你可以通过 **Limit Selection（限制选择）** 选项设置限制：**Exact Number（精确数量）**、**Range（范围）** 或 **Unlimited（不限）**。
	- 选择 **Custom HTML（自定义 HTML）** 可以插入任意的 HTML。
		- 你可以包含链接、图片、视频等元素。但不能包含 `<script>`、`<style>` 或 `<input>` 元素。更多信息请参阅 [HTML 安全与允许的标签](#html-security-and-allowed-tags)。
		- 默认情况下，Custom HTML 字段不会包含在节点输出中。如果想把 Custom HTML 的内容包含到输出中，请填写对应的 **Element Name（元素名称）** 字段。
    - 选择 **Date（日期）** 可以在表单中包含日期选择器。关于日期格式化的更多信息，请参阅 [使用 Luxon 处理日期和时间](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/handle-special-data-types/work-with-dates-and-times)。
	- 选择 **Dropdown List（下拉列表）** > **Add Field Option（添加字段选项）** 可以添加多个选项。默认情况下，下拉框是单选。如果想改为多选，请打开 **Multiple Choice（多选）**。
	- 选择 **Radio Buttons（单选按钮）** 可以在表单中包含单选按钮元素。
	- 选择 **Hidden Field（隐藏字段）** 可以包含一个不在表单上显示的表单元素。你可以使用 **Field Value（字段值）** 参数设置默认值，或者使用[查询参数](#set-default-selections-with-query-parameters)为该字段传值。
- **Placeholder（占位符）**：定义要显示在兼容表单元素中的示例文本。占位符支持 **Email（邮箱）**、**Number（数字）**、**Password（密码）**、**Text（文本）** 和 **Textarea（多行文本）**。
- **Default value（默认值）**：定义一个默认值，该值会在兼容的表单元素中预先填充或预先选中。默认值支持除 **Custom HTML**、**File**、**Hidden Field** 和 **Password** 之外的所有表单元素。
- **Required Field（必填字段）**：打开后，要求用户必须在表单上填写此字段。

### Respond When（何时响应）

选择 n8n 何时向表单提交发送响应。你可以选择：

- **Form Is Submitted（表单提交时）**：用户一提交表单就立即向用户发送响应。
- **Workflow Finishes（工作流完成时）**：如果你希望工作流先完成执行，再向用户发送响应，请使用此选项。如果工作流出错，它会向用户发送响应，告知他们提交表单时出现了问题。

## 节点选项

选择 **Add Option（添加选项）** 可以查看更多配置选项：

- **Append n8n Attribution（附加 n8n 署名）**：关闭后，表单底部的 **Form automated with n8n（表单由 n8n 自动化处理）** 标识将不再显示。
- **Button Label（按钮标签）**：用于表单提交按钮的标签。n8n 会把 **Button Label** 显示为提交按钮的名称。
- **Form Path（表单路径）**：表单 URL 的最后一段，测试和生产环境都适用。它会把自动生成的 UUID 替换为自定义路径，作为 URL 的最后一部分。
- **Ignore Bots（忽略机器人）**：打开后，将忽略来自链接预览器、网络爬虫等机器人的请求。
- **Use Workflow Timezone（使用工作流时区）**：打开后，使用[工作流设置](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/configure-workflow-settings)中的时区，而不是默认的 UTC。这会影响节点输出中 `submittedAt` 时间戳的值。
- **Custom Form Styling（自定义表单样式）**：用 CSS 覆盖公开表单界面的默认样式。该字段会预先填入默认样式，所以你只需要修改需要改动的部分即可。

## 自定义 Form Trigger 节点行为

### 用换行格式化响应文本

你可以用以下方法之一为表单响应文本添加换行：

• 在 formSubmittedText 字段中使用 HTML 格式而不是纯文本
• 在发送响应之前，把换行字符（`\n`）替换成 HTML 换行标签（`<br>`）
• 如果你需要更精细的格式控制，可以考虑使用自定义的 HTML 响应页面

### 用认证限制表单访问

你可以使用以下选项之一为表单添加认证：

• 使用 OTP（一次性密码）字段配合 TOTP 节点验证，实现基于令牌的认证
• 添加一个带表单认证的 Wait（等待）节点作为表单的第二页
• 把密码哈希存储到数据库中，并与表单提交内容比对来验证
• 如果你需要高级认证，可以使用 Google Forms 等外部认证提供商

## HTML 安全与允许的标签

n8n Form Trigger 会自动清理 **Form Description（表单描述）** 字段和 **Custom HTML** 表单元素中的 HTML 内容，以防止安全漏洞。虽然支持用 HTML 进行格式排版，但某些标签和属性会受到限制。

### 允许的 HTML 标签

你可以使用以下标签进行格式排版：`<a>`、`<b>`、`<br>`、`<code>`、`<div>`、`<em>`、`<h1>` 到 `<h6>`、`<i>`、`<iframe>`、`<img>`、`<li>`、`<ol>`、`<p>`、`<pre>`、`<span>`、`<strong>`、`<sub>`、`<sup>`、`<table>`、`<tbody>`、`<td>`、`<tfoot>`、`<th>`、`<thead>`、`<tr>`、`<u>`、`<ul>`、`<video>` 和 `<source>`。

### 受限的标签

出于安全考虑，以下标签会被自动移除：`<script>`、`<style>`、`<input>`、`<form>`、`<button>`，以及其他可能导致 XSS 攻击或干扰表单功能的潜在危险元素。

### 属性限制

某些标签只允许特定的属性：

* 链接（`<a>`）：`href`、`target`、`rel`
* 图片（`<img>`）：`src`、`alt`、`width`、`height`
* 视频（`<video>`）：`controls`、`autoplay`、`loop`、`muted`、`poster`、`width`、`height`
* 内联框架（`<iframe>`）：`src`、`width`、`height`、`frameborder`、`allow`、`allowfullscreen`、`referrerpolicy`（会自动加沙箱）
* 表格单元格（`<td>`、`<th>`）：`colspan`、`rowspan`、`scope`、`headers`

在清理过程中，其他所有属性都会被移除。只允许 `http://` 和 `https://` 两种 URL 协议。

## 模板与示例

[浏览 n8n Form Trigger 节点的集成模板](https://n8n.io/integrations/n8n-form-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)
