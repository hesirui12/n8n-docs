---
title: HTML（HTML）
description: >-
  n8n 工作流自动化平台中「HTML」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: HTML
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.html.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.html'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.html'
layout:
  description:
    visible: false
---

# HTML（HTML）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：HTML 节点提供三个与网页相关的能力：① **生成 HTML 模板**——把工作流里的数据填进你做好的网页模板里，生成完整网页（比如订单确认页、报表页）；② **提取 HTML 内容**——从网页源码里按条件「抠出」想要的内容（比如抓取网页上的价格、标题）；③ **转换成 HTML 表格**——把表格数据变成网页表格。做爬虫、发网页版报表、生成邮件 HTML 内容时很常用。
{% endhint %}

「HTML」节点提供了一些操作，帮助你在 n8n 中使用 HTML。

{% hint style="info" %}
**HTML Extract 节点**

从 0.213.0 版本开始，HTML 节点取代了 HTML Extract 节点。如果你在使用更老版本的 n8n，你仍然可以查看 [HTML Extract 节点文档](https://github.com/n8n-io/n8n-docs/blob/86fe33b681621e618e3adcab9a27e8605dbc23ad/docs/integrations/builtin/core-nodes/n8n-nodes-base.htmlextract.md)。
{% endhint %}
{% hint style="warning" %}
**跨站脚本攻击（Cross-site scripting）**

使用 HTML 节点生成 HTML 模板时，可能会引入 [XSS（跨站脚本攻击）](https://owasp.org/www-community/attacks/xss/)。这是一种安全风险。请小心处理不可信的输入。

{% hint style="info" %}
**大白话（XSS 是什么风险）**：如果你把用户输入的内容（比如表单里填的文本）直接塞进 HTML 模板，恶意用户可能在文本里藏一段 JavaScript 代码，其他人打开网页时这段代码就会执行，造成盗号、弹广告等问题。所以：① 来自用户的输入不要轻易放进 HTML；② 如果必须放，先想清楚是否安全；③ 模板里用到的数据尽量来自可信来源。
{% endhint %}
{% endhint %}

## 操作（Operations）

* [**生成 HTML 模板（Generate HTML template）**](#generate-html-template)：使用此操作创建 HTML 模板。这允许你获取工作流中的数据，并将其输出为 HTML。
* [**提取 HTML 内容（Extract HTML content）**](#extract-html-content)：从 HTML 格式的源中提取内容。源可以是 JSON 或二进制文件（`.html`）。
* [**转换为 HTML 表格（Convert to HTML Table）**](#convert-to-html-table)：把内容转换为 HTML 表格。

节点的参数和选项取决于你选择的操作。请参阅下面的小节，了解配置每种操作的更多细节。

## 生成 HTML 模板（Generate HTML template）

创建一个 HTML 模板。这允许你获取工作流中的数据，并将其输出为 HTML。

你可以包含：

* 标准 HTML
* `<style>` 标签中的 CSS（CSS 是控制网页样式的语言，比如颜色、字体）。
* `<script>` 标签中的 JavaScript（JavaScript 是让网页动起来的编程语言）。n8n 不会执行其中的 JavaScript。
* 表达式，用 `{{}}` 包裹。

{% hint style="info" %}
**大白话（怎么用）**：模板就像「带空格的填空作文」：你写一个 HTML 网页，在要填入数据的地方写 `{{ 表达式 }}`（比如 `{{ $json.orderId }}`），运行后 n8n 会把每条数据的内容填进对应位置，输出一个完整的 HTML 页面。`<script>` 里的 JS 只是「带过去」，n8n 不会运行它。
{% endhint %}

你可以在模板中使用[表达式（Expressions）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)，包括 n8n 的[内置方法和变量（Built-in methods and variables）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/use-built-in-shortcuts)。

## 提取 HTML 内容（Extract HTML Content）

从 HTML 格式的源中提取内容。源可以是 JSON 或二进制文件（`.html`）。

使用以下参数：

### 源数据（Source Data）

选择你的 HTML 内容的源类型。可选择：

* **JSON**：如果你选择此源数据，输入 **JSON Property（JSON 属性）**：包含你想要提取的 HTML 的输入字段的名称。该属性可以包含一个字符串或字符串数组。
* **Binary（二进制）**：如果你选择此源数据，输入 **Input Binary Field（输入二进制字段）**：包含你想要提取的 HTML 的输入字段的名称。该属性可以包含一个字符串或字符串数组。

{% hint style="info" %}
**小白提示（两种源怎么选）**：HTML 直接以文本形式存在于某个字段里（比如前面节点抓取的网页文本）→ 选 **JSON** 并填字段名；HTML 是一个 `.html` 文件（二进制）→ 选 **Binary** 并填文件所在字段名（通常叫 `data`）。
{% endhint %}

### 提取值（Extraction Values）

- **Key（键）**：输入用来保存提取出的值的键名（可以理解成给结果起个名字）。
- **CSS Selector（CSS 选择器）**：输入要查找的 CSS 选择器（CSS 选择器是用来「定位网页元素」的规则，比如 `.price` 表示所有 class 为 price 的元素，`#title` 表示 id 为 title 的元素）。
- **Return Value（返回值类型）**：选择要返回的数据类型。可选择：
	- **Attribute（属性）**：返回元素的属性值，比如元素的 `class` 属性。
		- 如果你选择此选项，输入要返回值的**属性（Attribute）** 的名称。
	- **HTML**：返回元素包含的 HTML。
	- **Text（文本）**：返回元素的文本内容。
		- 如果你选择此选项，你还可以在 **Skip Selectors（跳过的选择器）** 中输入以逗号分隔的选择器列表，这些选择器命中的内容会被跳过。
	- **Value（值）**：返回 input（输入框）、select（下拉框）或 text area（多行文本域）的值。
- **Return Array（返回数组）**：选择是把多个提取值作为数组返回（打开）还是作为单个字符串返回（关闭）。

{% hint style="info" %}
**大白话（怎么配置提取规则）**：一个「提取值」就是一条抓取规则：**Key** 是结果字段名（如 `price`），**CSS Selector** 是定位规则（如 `span.price`），**Return Value** 是取元素的哪部分。想同时抓多个信息（价格、标题、图片链接），就添加多条提取规则。**Return Array** 打开时，同一规则命中的多个元素会打包成数组返回。
{% endhint %}

### 提取 HTML 内容的选项（Extract HTML Content options）

你还可以用这些选项配置此操作：

* **Trim Values（修剪值）**：控制是否移除值开头和结尾的所有空格和换行（打开）还是保留它们（关闭）。
* **Clean Up Text（清理文本）**：控制是否移除开头空格、结尾空格和换行符，并把连续多个空格合并成单个空格（打开），还是保持原样（关闭）。

## 转换为 HTML 表格（Convert to HTML Table）

此操作期望从另一个节点接收数据。它没有参数。它包含以下选项：

* **Capitalize Headers（表头大写）**：控制是否把表格的表头变成大写（打开）还是不（关闭）。
* **Custom Styling（自定义样式）**：控制是否使用自定义样式（打开）还是不（关闭）。
* **Caption（表格标题）**：输入要添加到表格上的标题文字。
* **Table Attributes（表格属性）**：输入要应用到 `<table>`（表格）上的任何属性，比如样式属性。
* **Header Attributes（表头属性）**：输入要应用到表格表头 `<th>` 上的任何属性。
* **Row Attributes（行属性）**：输入要应用到表格行 `<tr>` 上的任何属性。
* **Cell Attributes（单元格属性）**：输入要应用到表格单元格 `<td>` 上的任何属性。

{% hint style="info" %}
**大白话（怎么用）**：把上游的表格数据（比如数据库查询结果）直接变成网页表格。配合 **Custom Styling** 可以设置好看的样式，比如用 HTML 属性 `style="border-collapse: collapse;"` 或自定义 class。生成后可以放进邮件或网页里展示。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 HTML 集成模板](https://n8n.io/integrations/html) 或[搜索所有模板](https://n8n.io/workflows/)
