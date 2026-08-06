---
contentType: howto
nodeTitle: Add notes and documentation
originalFilePath: workflows/components/sticky-notes.md
originalUrl: https://docs.n8n.io/workflows/components/sticky-notes
url: >-
  https://docs.n8n.io/build/understand-workflows/workflow-components/add-notes-and-documentation
description: Annotate your workflows using sticky notes.
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

# 添加便签和文档注释 / Add notes and documentation

便签（Sticky Note）允许你在工作流上添加注释和评论。

n8n 强烈建议你多多使用便签，尤其是在[模板工作流](#user-content-fn-1)[^1]上，这样可以帮其他用户更好地理解你的工作流。

![Screenshot of a basic workflow with an example sticky note](../../.gitbook/assets/example-sticky-note.png)

## 创建便签 / Create a Sticky Note

便签是一个核心节点（core node，也就是 n8n 内置的基础节点，不需要额外安装）。要添加一个新的便签：

1. 打开节点面板（Nodes panel）。
2. 搜索 `note`。
3. 点击 **Sticky Note**（便签）节点。n8n 就会在画布上添加一个新的便签。

{% hint style="info" %}
**大白话**：便签就是贴在工作流画布上的"便利贴"，用来写备注、提醒自己或别人这个工作流是干什么的。它本身不会执行任何操作、不处理数据，只是记录文字，所以怎么放、放多少都不会影响工作流的运行。
{% endhint %}

## 编辑便签 / Edit a Sticky Note

1. 双击你想编辑的便签。
2. 写下你的内容。[这个指南](https://commonmark.org/help/)解释了如何用 Markdown 格式化你的文本。n8n 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来渲染，它实现了 CommonMark 规范（一种 Markdown 的标准语法）。
3. 点击便签以外的区域，或者按 `Esc` 键，即可结束编辑。

## 更改颜色 / Change the color

要更改便签的颜色：

1. 把鼠标悬停在便签上。
2. 选择 **Change color**（更改颜色）<img src="../../.gitbook/assets/change-color.png" alt="Change Sticky Note color icon" data-size="line">。
3. 从七种预设颜色中选择一种，或者点击彩虹渐变按钮来选择自定义颜色。

![Color selector showing preset colors and custom color button](../../.gitbook/assets/color-picker-popover.png)

### 自定义颜色 / Custom colors

除了七种预设颜色之外，你还可以为便签选择任意自定义颜色：

1. 点击带有彩虹渐变和加号图标的按钮。
2. 使用取色器选择你想要的颜色，或者直接输入十六进制颜色代码（例如 `#FF5733`）。
3. 点击 **Apply**（应用）来设置颜色。

你最近使用过的自定义颜色（最多 8 个）会自动保存，并显示在取色器中，方便你快速再次选择。

自定义颜色带有"随主题变化"的边框，它会自动调整，确保在浅色模式和深色模式下都能清晰可见。

{% hint style="info" %}
**大白话**：`#FF5733` 这样的十六进制颜色代码，就是电脑用来精确描述颜色的一串字符。`#` 后面 6 个字符，每两个一组，分别代表红、绿、蓝三种颜色的深浅。不会写也没关系，直接用取色器点选就行。
{% endhint %}

## 便签的位置调整 / Sticky Note positioning

你可以：

* 把便签拖到画布上的任意位置。
* 把便签拖到节点的后面（作为背景）。你可以用这种方法在视觉上给节点分组（比如把"负责同一件事"的节点放到同一张便签后面）。
* 调整便签大小：把鼠标悬停在便签边缘，然后拖动即可调整大小。
* 更改颜色：选择 **Options**（选项）<img src="../../.gitbook/assets/three-dot-options-menu (1).png" alt="Options icon" data-size="line"> 来打开颜色选择器。

## 用 Markdown 书写 / Writing in Markdown

便签支持 Markdown 格式化。本节介绍一些常见的用法。

```
The text in double asterisks will be **bold**

The text in single asterisks will be *italic*

Use # to indicate headings:
# This is a top-level heading <a href="#this-is-a-top-level-heading" id="this-is-a-top-level-heading"></a>
## This is a sub-heading <a href="#this-is-a-sub-heading" id="this-is-a-sub-heading"></a>
### This is a smaller sub-heading <a href="#this-is-a-smaller-sub-heading" id="this-is-a-smaller-sub-heading"></a>

You can add links:
[Example](https://example.com/)

Create lists with asterisks:

* Item one
* Item two

Or created ordered lists with numbers:

1. Item one
2. Item two
```

{% hint style="info" %}
**大白话**：上面的代码块是 Markdown 语法示例，意思是：
- 用两个 `**` 括起来的文字会显示为**加粗**；
- 用单个 `*` 括起来的文字会显示为*斜体*；
- 行首用 `#`（井号）表示标题，`#` 越多，标题字号越小；
- `[文字](网址)` 可以插入链接；
- 行首用 `*` 或 `1.` 可以创建无序列表 / 有序列表。

你只要把便签内容按这个格式写，n8n 就会自动帮你排版好。
{% endhint %}

更详细的指南请参考 [CommonMark's help](https://commonmark.org/help/)。n8n 使用 [markdown-it](https://github.com/markdown-it/markdown-it)，它实现了 CommonMark 规范。

## 让图片占满整行宽度 / Make images full width

你可以通过在图片文件名后面追加 `#full-width`，强制图片占便签宽度的 100%：

```markdown
![Source example](https://<IMAGE-URL>/<IMAGE-NAME>.png#full-width)
```

{% hint style="info" %}
**大白话**：`#full-width` 是一个"魔法后缀"，加在图片链接的末尾，图片就会自动拉宽到便签的整个宽度。注意这里的 `<IMAGE-URL>` 和 `<IMAGE-NAME>` 只是占位符，你要把它们替换成自己真实的图片网址和文件名。
{% endhint %}

## 嵌入 YouTube 视频 / Embed a YouTube video

要在便签里显示 YouTube 视频，请使用 `@[youtube](<video-id>)` 指令，并填入视频的 ID。要注意：只有视频作者允许"嵌入"（embedding，也就是允许把视频显示在其他网页上）时，这个功能才能生效。

例如：

```markdown
@[youtube](ZCuL2e4zC_4)
```

要嵌入你自己的视频，复制上面的语法，把 `ZCuL2e4zC_4` 替换成你的视频 ID。YouTube 视频 ID 就是 YouTube 网址里 `v=` 后面那一串字符。

{% hint style="info" %}
**大白话**：比如视频网址是 `https://www.youtube.com/watch?v=ZCuL2e4zC_4`，那么 `v=` 后面的 `ZCuL2e4zC_4` 就是视频 ID。把它填进 `@[youtube](...)` 的括号里，视频就会直接显示在便签里。
{% endhint %}

[^1]: n8n 模板（template）是由 n8n 官方和社区成员预先设计好的工作流，你可以直接把它导入到自己的 n8n 实例中使用。使用模板时，你可能需要填写凭据（credential，也就是各种服务的账号、密钥等认证信息）并根据自己的需求调整配置。
