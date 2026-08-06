---
title: XML（XML）
description: >-
  n8n 工作流自动化平台中「XML」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: XML
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.xml.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.xml'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.xml'
layout:
  description:
    visible: false
---

# XML（XML）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：XML 和 JSON 一样，都是一种「存数据」的文本格式（XML 长这样：`<name>张三</name>`，用尖括号标签包着内容）。很多老系统（银行接口、SOAP 接口、一些 ERP 系统）只认 XML。XML 节点就是 JSON 和 XML 之间的「翻译官」：把 n8n 里的 JSON 数据转成 XML 发给老系统，或者把老系统返回的 XML 解析成 JSON 来处理。
{% endhint %}

使用「XML」节点来把数据转换成 XML，或者从 XML 转换出来。

{% hint style="info" %}
**二进制文件（Binary files）**

如果你的 XML 在二进制文件里，先用 [从文件提取（Extract from File）](n8n-nodes-base.extractfromfile.md) 节点把它转换成文本。

{% hint style="info" %}
**大白话（为什么）**：这个节点只能处理文本形式的 XML。如果 XML 是作为 `.xml` 文件（二进制）存在的，得先让 Extract from File 节点把文件内容读出来，再接 XML 节点。
{% endhint %}
{% endhint %}

## 节点参数（Node parameters）

- **Mode（模式）**：数据要转换成的格式和来源格式。
	- **JSON to XML（JSON 转 XML）**：把数据从 JSON 转换为 XML。
    - **XML to JSON（XML 转 JSON）**：把数据从 XML 转换为 JSON。
- **Property Name（属性名）**：输入包含要转换数据的属性的名称。

{% hint style="info" %}
**小白提示（怎么用）**：选好方向后，在 **Property Name** 里填「要转换的内容在哪个字段」。比如上游数据里有个字段叫 `xmlData` 装着 XML 文本，选 **XML to JSON** 并填 `xmlData`，节点就会把这段 XML 解析成 JSON 对象输出。
{% endhint %}

## 节点选项（Node options）

无论你选择哪种**模式（Mode）**，以下选项都可用：

- **Attribute Key（属性键前缀）**：输入用于访问属性的前缀。默认是 `$`。
- **Character Key（字符键前缀）**：输入用于访问字符内容的键前缀。默认是 `_`。

{% hint style="info" %}
**大白话（这两个前缀是干什么的）**：XML 里一个标签可能有「属性」和「内容」两部分，例如 `<book lang="zh">教程</book>`：`lang="zh"` 是属性，`教程` 是内容。转成 JSON 后，属性会放在以 `$` 开头的键下（如 `{"@lang": "zh"}` 或 `{"$lang": "zh"}`，取决于前缀设置），内容放在 `_` 开头的键下。一般保持默认即可。
{% endhint %}

所有其他选项都取决于所选的**模式（Mode）**。

### JSON 转 XML 的选项（JSON to XML options）

只有当你把 **Mode** 选为 **JSON to XML** 时，以下选项才会出现：

- **Allow Surrogate Chars（允许代理字符）**：设置是否允许使用 Unicode 代理区（surrogate blocks）中的字符（打开）还是不（关闭）。
- **Cdata**：设置是否在需要时把文本节点用 `<![CDATA[ ... ]]>` 包裹起来，而不是转义（打开）还是不（关闭）。
    * 打开此选项并不会在不需要时添加 `<![CDATA[ ... ]]>`。
- **Headless（无头）**：设置是否省略 XML 头部声明（打开）还是包含它（关闭）。
- **Root Name（根元素名称）**：输入要使用的根元素名称。

{% hint style="info" %}
**小白提示（这几个选项怎么理解）**：**Cdata**：有些内容里带着 XML 特殊字符（如 `<`、`&`），用 CDATA 包裹可以原样保存，适合包含代码、大段文本的场景；**Headless**：生成的 XML 默认第一行会有 `<?xml version="1.0" encoding="UTF-8"?>` 声明，某些接口不需要这个声明就打开 **Headless**；**Root Name**：生成的 XML 最外层标签的名字，比如填 `orders`，输出的最外层就是 `<orders>`。
{% endhint %}

### XML 转 JSON 的选项（XML to JSON options）

只有当你把 **Mode** 选为 **XML to JSON** 时，以下选项才会出现：

- **Explicit Array（总是数组）**：设置是否把子节点放进数组（打开），还是只有当子节点不止一个时才创建数组（关闭）。
- **Explicit Root（包含根节点）**：设置结果对象中是否包含根节点（打开）还是不包含（关闭）。
- **Ignore Attributes（忽略属性）**：设置是否忽略所有 XML 属性，只创建文本节点（打开）还是不（关闭）。
- **Merge Attributes（合并属性）**：设置是把属性和子元素合并为父元素的属性（打开），还是把属性放在子属性对象下（关闭）。如果 **Ignore Attribute** 已打开，此选项会被忽略。
- **Normalize（规范化）**：设置是否修剪文本节点内部的空白（打开）还是不修剪（关闭）。
- **Normalize Tags（规范化标签）**：设置是否把所有标签名规范化为小写（打开）还是保持标签名原样（关闭）。
- **Trim（修剪）**：设置是否修剪文本节点开头和结尾的空白（打开）还是保留空白（关闭）。

{% hint style="info" %}
**大白话（怎么理解这些选项）**：XML 转 JSON 时有一些「取舍」：**Explicit Array** 打开后，即使只有一个子节点也会包成数组，处理起来更一致（推荐打开）；**Explicit Root** 打开会把最外层标签也放进结果；**Trim** 打开会去掉文本两端的空格和换行，让数据更干净（推荐打开）；如果 XML 里有大量属性但你用不上，可以打开 **Ignore Attributes** 精简结果。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 XML 集成模板](https://n8n.io/integrations/xml) 或[搜索所有模板](https://n8n.io/workflows/)
