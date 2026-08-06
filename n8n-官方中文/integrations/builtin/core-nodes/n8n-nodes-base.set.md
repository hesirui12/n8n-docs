---
title: 编辑字段 Edit Fields (Set)
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Edit Fields (Set)
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.set.md
originalUrl: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set
url: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set
description: >-
  n8n 工作流自动化平台中「编辑字段 Edit Fields」节点的中文文档。
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

# 编辑字段 Edit Fields (Set)

> **大白话**：这个节点就像给数据「改作业」——你可以往数据里添加新的字段（比如给每个客户加上「备注」列），也可以修改/覆盖已经存在的字段值（比如把「张三」改成「李四」）。它是 n8n 里最常用的节点之一，尤其是当你后面要接 Google Sheets、数据库这类需要固定字段的工具时，几乎离不开它。

使用「编辑字段 Edit Fields」节点来设置（修改）工作流中的数据。这个节点既可以设置全新的数据，也可以覆盖（改写）已经存在的数据。在那些期望接收上游节点传入数据的工作流里（例如向 Google Sheets 或数据库写入数值时），这个节点至关重要。

## 节点参数

以下是「编辑字段 Edit Fields」节点中可用的设置和选项。

### 模式 Mode

你可以选择使用**手动映射 Manual Mapping**（通过图形界面拖拽来编辑字段），或者使用 **JSON 输出 JSON Output**（直接编写一段 JSON，n8n 会把它添加到输入数据中）。

### 要设置的字段 Fields to Set

如果你选择了 **模式 Mode** > **手动映射 Manual Mapping**，你可以通过从 **输入 INPUT** 面板拖拽值到字段区域来配置字段。

默认情况下，当你拖拽一个值时，行为如下：

* n8n 会把这个值的名称当作字段名。
* 字段值会包含一个用于访问该值的表达式（expression）。

如果你不想使用表达式：

1. 把鼠标悬停在某个字段上。n8n 会显示 **固定值 Fixed | 表达式 Expressions** 切换开关。
2. 选择 **固定值 Fixed**。

字段的名称（Name）和值（Value）都可以这样设置。

![一个演示拖拽操作，以及把字段改为固定值的动图](<../../.gitbook/assets/drag-drop-fixed-toggle (1).gif>)

### 仅保留已设置的字段 Keep Only Set Fields

开启这个选项后，你在 **要设置的字段 Fields to Set** 中没有用到的输入数据都会被丢弃（不放进输出）。

### 输出中包含的内容 Include in Output

选择要把哪些输入数据包含到节点的输出数据中。

## 节点选项

使用这些选项来定制节点的行为。

### 包含二进制数据 Include Binary Data

如果输入数据中包含二进制数据（Binary Data，比如图片、文件），选择是否要把这些二进制数据包含进「编辑字段 Edit Fields」节点的输出数据中。

### 忽略类型转换错误 Ignore Type Conversion Errors

仅限手动映射（Manual Mapping）模式。

开启后，n8n 在映射字段时会忽略部分数据类型错误（也就是更宽容，不容易报错）。

### 支持点号表示法 Support Dot Notation

默认情况下，n8n 支持点号表示法（Dot Notation）。

举个例子：使用手动映射时，节点会按照点号表示法来理解 **名称 Name** 字段。也就是说，如果你在 **名称 Name** 字段里填了 `number.one`，并在 **值 Value** 字段里填了 `20`，那么最终生成的 JSON 是：

```json
{ "number": { "one": 20} }
```

（意思是把 `number.one` 理解成了「number 这个对象里面的 one 字段」，结果是一个嵌套结构。）

如果你不想要这种嵌套行为，可以点击 **添加选项 Add Option** > **支持点号表示法 Support Dot Notation**，并把 **点号表示法 Dot Notion** 字段关掉（设为 off）。现在生成的 JSON 就是：

```json
{ "number.one": 20 }
```

（字段名保持为带点的完整字符串 `number.one`，不做嵌套解析。）

## 模板和示例

[浏览编辑字段（Edit Fields (Set)）的集成模板](https://n8n.io/integrations/set) 或 [搜索所有模板](https://n8n.io/workflows/)

## JSON 输出模式下的数组和表达式

在创建 JSON 输出（JSON Output）时，你可以使用数组和表达式。

举个例子，假设输入数据来自「客户数据存储 Customer Datastore」节点，内容如下：

```json
[
  {
    "id": "23423532",
    "name": "Jay Gatsby",
    "email": "gatsby@west-egg.com",
    "notes": "Keeps asking about a green light??",
    "country": "US",
    "created": "1925-04-10"
  },
  {
    "id": "23423533",
    "name": "José Arcadio Buendía",
    "email": "jab@macondo.co",
    "notes": "Lots of people named after him. Very confusing",
    "country": "CO",
    "created": "1967-05-05"
  },
  {
    "id": "23423534",
    "name": "Max Sendak",
    "email": "info@in-and-out-of-weeks.org",
    "notes": "Keeps rolling his terrible eyes",
    "country": "US",
    "created": "1963-04-09"
  },
  {
    "id": "23423535",
    "name": "Zaphod Beeblebrox",
    "email": "captain@heartofgold.com",
    "notes": "Felt like I was talking to more than one person",
    "country": null,
    "created": "1979-10-12"
  },
  {
    "id": "23423536",
    "name": "Edmund Pevensie",
    "email": "edmund@narnia.gov",
    "notes": "Passionate sailor",
    "country": "UK",
    "created": "1950-10-16"
  }
]
```

（上面这段 JSON 是一组客户数据，每一条代表一个客户，包含 id、name、email、notes、country、created 这些字段。）

现在，在 **JSON 输出 JSON Output** 字段中添加下面的 JSON，并把 **输出中包含的内容 Include in Output** 设置为 **所有输入字段 All Input Fields**：

```json
{
  "newKey": "new value",
  "array": [{{ $json.id }},"{{ $json.name }}"],
  "object": {
    "innerKey1": "new value",
    "innerKey2": "{{ $json.id }}",
    "innerKey3": "{{ $json.name }}",
 }
}
```

（这段 JSON 里用到了表达式：`{{ $json.id }}` 表示「取出当前数据项里的 id 字段值」，`{{ $json.name }}` 表示「取出当前数据项里的 name 字段值」。注意：在数组 `array` 中，`{{ $json.id }}` 外面没有加引号，所以输出的是数字类型；而 `"{{ $json.name }}"` 外面加了引号，输出的是字符串类型。）

你得到的结果输出如下：

```json
[
  {
    "id": "23423532",
    "name": "Jay Gatsby",
    "email": "gatsby@west-egg.com",
    "notes": "Keeps asking about a green light??",
    "country": "US",
    "created": "1925-04-10",
    "newKey": "new value",
    "array": [
      23423532,
      "Jay Gatsby"
    ],
    "object": {
      "innerKey1": "new value",
      "innerKey2": "23423532",
      "innerKey3": "Jay Gatsby"
    }
  },
  {
    "id": "23423533",
    "name": "José Arcadio Buendía",
    "email": "jab@macondo.co",
    "notes": "Lots of people named after him. Very confusing",
    "country": "CO",
    "created": "1967-05-05",
    "newKey": "new value",
    "array": [
      23423533,
      "José Arcadio Buendía"
    ],
    "object": {
      "innerKey1": "new value",
      "innerKey2": "23423533",
      "innerKey3": "José Arcadio Buendía"
    }
  },
  {
    "id": "23423534",
    "name": "Max Sendak",
    "email": "info@in-and-out-of-weeks.org",
    "notes": "Keeps rolling his terrible eyes",
    "country": "US",
    "created": "1963-04-09",
    "newKey": "new value",
    "array": [
      23423534,
      "Max Sendak"
    ],
    "object": {
      "innerKey1": "new value",
      "innerKey2": "23423534",
      "innerKey3": "Max Sendak"
    }
  },
  {
    "id": "23423535",
    "name": "Zaphod Beeblebrox",
    "email": "captain@heartofgold.com",
    "notes": "Felt like I was talking to more than one person",
    "country": null,
    "created": "1979-10-12",
    "newKey": "new value",
    "array": [
      23423535,
      "Zaphod Beeblebrox"
    ],
    "object": {
      "innerKey1": "new value",
      "innerKey2": "23423535",
      "innerKey3": "Zaphod Beeblebrox"
    }
  },
  {
    "id": "23423536",
    "name": "Edmund Pevensie",
    "email": "edmund@narnia.gov",
    "notes": "Passionate sailor",
    "country": "UK",
    "created": "1950-10-16",
    "newKey": "new value",
    "array": [
      23423536,
      "Edmund Pevensie"
    ],
    "object": {
      "innerKey1": "new value",
      "innerKey2": "23423536",
      "innerKey3": "Edmund Pevensie"
    }
  }
]
```

（可以看到：每一条数据都被追加了 `newKey`、`array`、`object` 三个新字段。`array` 里是「数字类型的 id + 字符串类型的 name」；`object` 里 `innerKey2` 因为是写在引号里的表达式，所以输出成了字符串 `"23423532"` 而不是数字。）
