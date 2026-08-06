---
nodeTitle: Item
originalFilePath: data/expression-reference/item.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/item'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/item
layout:
  description:
    visible: false
---
# Item 数据项 <a href="#item" id="item"></a>

{% hint style="info" %}
**大白话**：`$item` 代表当前正在处理的那一条数据项，通过 `.json` 拿它的 JSON 数据，通过 `.binary` 拿它带的二进制文件（如图片、PDF）。
{% endhint %}

## `$item`.**`binary`** <a href="#dollaritembinary" id="dollaritembinary"></a>

**说明：** 返回该数据项（item）包含的所有二进制数据（如文件、图片）

**语法：** `$item`.`$item`.**`binary`**

**返回：** Array<BinaryFile>

**来源：** n8n 自定义功能

## `$item`.**`json`** <a href="#dollaritemjson" id="dollaritemjson"></a>

**说明：** 返回该数据项（item）包含的 JSON 数据。 <a href="../../understand-n8ns-data-structure.md">更多信息</a>

**语法：** `$item`.`$item`.**`json`**

**返回：** Object

**来源：** n8n 自定义功能
