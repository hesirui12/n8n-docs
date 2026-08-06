---
title: Markdown（Markdown）
description: >-
  n8n 工作流自动化平台中「Markdown」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Markdown
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.markdown.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.markdown'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.markdown'
layout:
  description:
    visible: false
---

# Markdown（Markdown）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：Markdown 是一种「用简单符号写格式」的文本标记语言（比如用 `#` 表示标题、`**文字**` 表示加粗），而 HTML 是网页源码。Markdown 节点就是这两种格式之间的「翻译官」：把 Markdown 转成 HTML（例如把写好的文章变成网页内容），或者把 HTML 转回 Markdown（例如把网页正文提取成方便编辑的纯文本）。做自动化内容发布（公众号、邮件、博客）时很常用。
{% endhint %}

「Markdown」节点用于在 Markdown 和 HTML 格式之间进行转换。

## 操作（Operations）

此节点的操作被称为**模式（Modes）**：

* **Markdown to HTML（Markdown 转 HTML）**：使用此模式把 Markdown 转换为 HTML。
* **HTML to Markdown（HTML 转 Markdown）**：使用此模式把 HTML 转换为 Markdown。

## 节点参数（Node parameters）

* **HTML** 或 **Markdown**：输入你想要转换的数据。字段名称会根据你选择的**模式（Mode）**改变。
* **Destination Key（目标键）**：输入你想要存放输出的字段。使用点号指定嵌套字段，例如 `level1.level2.newKey`。

{% hint style="info" %}
**小白提示（Destination Key 怎么填）**：转换结果会写进你指定的字段。想存成顶层字段就随便起个名字（如 `htmlOutput`）；想塞进现有的嵌套结构里，就用点号路径，比如 `content.body`。如果填了不存在的路径，节点会创建对应的嵌套结构。
{% endhint %}

## 节点选项（Node options）

节点的**选项（Options）**取决于所选的**模式（Mode）**。

{% hint style="info" %}
**试一试这些选项（Test out the options）**

有些选项彼此依赖或者会互相影响。我们建议你实际测试一下选项，确认效果符合你的预期。

{% hint style="info" %}
**大白话（为什么建议自己试）**：Markdown 转换有很多「小开关」，而且有些开关会互相影响（比如两个选项都改同一类符号的处理方式）。打开/关闭某个选项后，建议直接运行一次看看输出对不对。
{% endhint %}
{% endhint %}

### Markdown 转 HTML 的选项（Markdown to HTML options）

| 选项 | 说明 | 默认值 |
| ------ | ----------- | ------- |
| **Add Blank To Links（链接新窗口打开）** | 是否让链接在新窗口打开（启用）还是不（禁用）。 | 禁用 |
| **Automatic Linking To URLs（自动识别 URL 链接）** | 是否自动把 URL 变成可点击的链接（启用）还是不（禁用）。启用后，n8n 会把任何它识别为 URL 的字符串转换成链接。 | 禁用 |
| **Backslash Escapes HTML Tags（反斜杠转义 HTML 标签）** | 是否允许用反斜杠转义 HTML 标签（启用）还是不（禁用）。启用后，n8n 会把前面带 `\` 的 `<` 或 `>` 转义。例如，`\<div\>` 会渲染成 `&lt;div&gt;`（显示为文字而不是标签）。 | 禁用 |
| **Complete HTML Document（完整 HTML 文档）** | 是否输出一个完整的 HTML 文档（启用）还是只输出 HTML 片段（禁用）。完整的 HTML 文档包含 `<!DOCTYPE HTML>` 声明、`<html>` 和 `<body>` 标签，以及 `<head>` 元素。 | 禁用 |
| **Customized Header ID（自定义标题 ID）** | 是否支持自定义标题 ID（启用）还是不（禁用）。启用后，你可以在标题文字后面用 `{标题 ID}` 来添加自定义 ID。 | 禁用 |
| **Emoji Support（表情符号支持）** | 是否支持 emoji 表情符号（启用）还是不（禁用）。 | 禁用 |
| **Encode Emails（编码邮箱地址）** | 是否把 ASCII 字符的邮箱地址转换成等价的十进制实体（启用）还是不（禁用）。这样做可以防止爬虫抓取页面上的邮箱地址。 | 启用 |
| **Exclude Trailing Punctuation From URLs（URL 末尾标点排除）** | 是否从自动链接的 URL 中排除末尾的标点符号（启用）还是不（禁用）。与 **Automatic Linking To URLs** 一起使用。 | 禁用 |
| **GitHub Code Blocks（GitHub 代码块）** | 是否启用 GitHub 风格 Markdown（GFM）的代码块（启用）还是不（禁用）。 | 启用 |
| **GitHub Compatible Header IDs（GitHub 兼容标题 ID）** | 是否生成 GitHub 风格 Markdown 的标题 ID（启用）还是不（禁用）。GitHub 风格 Markdown 生成的标题 ID 会把空格替换成 `-`，并移除非字母数字字符。 | 禁用 |
| **GitHub Mention Link（GitHub 提及链接）** | 修改 **GitHub Mentions** 使用的链接。 | 禁用 |
| **GitHub Mentions（GitHub 用户提及）** | 是否支持用 `@` 提及 GitHub 用户（启用）还是不（禁用）。启用后，n8n 会把 `@name` 替换为 `https://github.com/name`。 | 禁用 |
| **GitHub Task Lists（GitHub 任务列表）** | 是否支持 GitHub 风格 Markdown 的任务列表（启用）还是不（禁用）。 | 禁用 |
| **Header Level Start（标题起始级别）** | 数字。设置标题的起始级别。例如，把这个字段改为 `2` 后，n8n 会把 `#` 当作 `<h2>`、`##` 当作 `<h3>`，以此类推。 | 1 |
| **Mandatory Space Before Header（标题前必须有空格）** | 是否要求 `#` 和标题文字之间必须有空格（启用）还是不（禁用）。启用后，n8n 会把 `##Some header text` 这样写的文字按原样渲染（不会转换成标题元素）。 | 禁用 |
| **Middle Word Asterisks（词中间的星号）** | 是否让 n8n 把单词中间的星号当作 Markdown 处理（禁用）还是按字面星号渲染（启用）。 | 禁用 |
| **Middle Word Underscores（词中间的下划线）** | 是否让 n8n 把单词中间的下划线当作 Markdown 处理（禁用）还是按字面下划线渲染（启用）。 | 禁用 |
| **No Header ID（不生成标题 ID）** | 禁用标题 ID 的自动生成（启用）。 | 禁用 |
| **Parse Image Dimensions（解析图片尺寸）** | 支持在 Markdown 语法中设置图片的最大尺寸（启用）。 | 禁用 |
| **Prefix Header ID（标题 ID 前缀）** | 定义要添加到标题 ID 前面的前缀。 | 无 |
| **Raw Header ID（原始标题 ID）** | 是否把标题 ID（包括前缀）中的空格、`'` 和 `"` 移除并替换为 `-`（启用）还是不（禁用）。 | 禁用 |
| **Raw Prefix Header ID（原始前缀标题 ID）** | 是否阻止 n8n 修改标题前缀（启用）还是不（禁用）。 | 禁用 |
| **Simple Line Breaks（简单换行）** | 是否让行尾不需要两个空格也能换行（启用）还是不（禁用）。 | 禁用 |
| **Smart Indentation Fix（智能缩进修复）** | 是否尝试智能修复缩进代码块中与 ES6 模板字符串有关的缩进问题（启用）还是不（禁用）。 | 禁用 |
| **Spaces Indented Sublists（空格缩进的子列表）** | 是否取消子列表必须缩进四个空格的要求（启用）还是不（禁用）。 | 禁用 |
| **Split Adjacent Blockquotes（拆分相邻引用块）** | 是否拆分相邻的引用块（启用）还是不（禁用）。如果你不启用它，n8n 会把不同行上的引用（行首以 `>` 标记）当作同一个引用块，即使它们之间隔着空行。 | 禁用 |
| **Strikethrough（删除线）** | 是否支持删除线语法（启用）还是不（禁用）。启用后，你可以用 `~~` 把词或短语包起来实现 ~~删除线~~ 效果。 | 禁用 |
| **Tables Header ID（表格标题 ID）** | 是否给表格的表头标签添加 ID（启用）还是不（禁用）。 | 禁用 |
| **Tables Support（表格支持）** | 是否支持表格（启用）还是不（禁用）。 | 禁用 |

{% hint style="info" %}
**小白提示（哪些选项常用）**：想让转换出的网页排版更好看，常用 **Tables Support（表格支持）** 和 **Strikethrough（删除线）**；想把内容发布为完整网页文件，打开 **Complete HTML Document**；中文内容一般保持 **Encode Emails** 默认启用即可。
{% endhint %}

### HTML 转 Markdown 的选项（HTML to Markdown options）

| 选项 | 说明 | 默认值 |
| ------ | ----------- | ------- |
| **Bullet Marker（无序列表符号）** | 指定用于无序列表的字符。 | * |
| **Code Block Fence（代码块围栏）** | 指定用于代码块的字符。 | ``` |
| **Emphasis Delimiter（强调分隔符）** | 指定 `<em>`（斜体）使用的字符。 | _ |
| **Global Escape Pattern（全局转义模式）** | 覆盖默认的字符转义设置。你可能更想改用 **Text Replacement Pattern（文本替换模式）**。 | 无 |
| **Ignored Elements（忽略的元素）** | 忽略给定的 HTML 元素及其子元素。 | 无 |
| **Keep Images With Data（保留带数据的图片）** | 是否保留内嵌数据（base64）的图片（启用）还是不（禁用）。支持最大 1MB 的文件。 | 禁用 |
| **Line Start Escape Pattern（行首转义模式）** | 覆盖默认的字符转义设置。你可能更想改用 **Text Replacement Pattern（文本替换模式）**。 | 无 |
| **Max Consecutive New Lines（最大连续换行数）** | 数字。指定允许的最大连续换行数。 | 3 |
| **Place URLs At The Bottom（把 URL 放到文末）** | 是否把 URL 放到页面底部并用链接引用定义的格式组织（启用）还是不（禁用）。 | 禁用 |
| **Strong Delimiter（加粗分隔符）** | 指定 `<strong>`（加粗）使用的字符。 | ** |
| **Style For Code Block（代码块样式）** | 指定代码块的样式。选项为 **Fence（围栏）** 和 **Indented（缩进）**。 | Fence |
| **Text Replacement Pattern（文本替换模式）** | 使用正则表达式定义一个文本替换模式。 | 无 |
| **Treat As Blocks（按块处理）** | 指定要按块处理的 HTML 元素（周围用空行包围）。 | 无 |

{% hint style="info" %}
**大白话（几个选项的直觉理解）**：**Bullet Marker** 决定生成的无序列表用 `*`、`-` 还是 `+`；**Strong Delimiter** 决定加粗用 `**` 还是 `__`；**Place URLs At The Bottom** 开启后，链接地址会集中列在文章末尾而不是混在正文里（有些排版要求这样）；**Max Consecutive New Lines** 防止空行过多。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 Markdown 集成模板](https://n8n.io/integrations/markdown) 或[搜索所有模板](https://n8n.io/workflows/)

## 解析器（Parsers）

n8n 使用以下解析器（解析器就是真正干转换的底层库）：

* 从 HTML 转 Markdown：[node-html-markdown](https://www.npmjs.com/package/node-html-markdown)。
* 从 Markdown 转 HTML：[Showdown](https://www.npmjs.com/package/showdown)。某些选项允许你用 [GitHub 风格 Markdown（GitHub Flavored Markdown）](https://github.github.com/gfm/) 扩展你的 Markdown。
