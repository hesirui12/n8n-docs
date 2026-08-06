---
nodeTitle: Boolean
originalFilePath: data/expression-reference/boolean.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/boolean'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/boolean
layout:
  description:
    visible: false
---
# Boolean 布尔值 <a href="#boolean" id="boolean"></a>

{% hint style="info" %}
**大白话**：布尔值（true/false）的几个小工具：`isEmpty()` 看是不是 null、`toNumber()` 把 true 变 1、`toString()` 把 true 变成文本 "true"。
{% endhint %}

## _`Boolean`_.**`isEmpty()`** <a href="#booleanisempty" id="booleanisempty"></a>

**说明：** 对所有布尔值都返回 <code>false</code>。对 <code>null</code> 返回 <code>true</code>。

**语法：** _`Boolean`_.isEmpty()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // bool = true
  bool.isEmpty() // => false
  ```

  ```javascript
  // bool = false
  bool.isEmpty() // => false
  ```

  ```javascript
  // bool = null
  bool.isEmpty() // => true
  ```

## _`Boolean`_.**`toNumber()`** <a href="#booleantonumber" id="booleantonumber"></a>

**说明：** 把 <code>true</code> 转成 1，把 <code>false</code> 转成 0

**语法：** _`Boolean`_.toNumber()

**返回：** Number（数字）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  true.toNumber() //=> 1
  ```

  ```javascript
  false.toNumber() //=> 0
  ```

## _`Boolean`_.**`toString()`** <a href="#booleantostring" id="booleantostring"></a>

**说明：** 把 <code>true</code> 转成字符串 'true'，把 <code>false</code> 转成字符串 'false'

**语法：** _`Boolean`_.toString()

**返回：** String（字符串）

**来源：** JavaScript 函数

**示例：**

  ```javascript
  // bool = true
  bool.toString() //=> 'true'
  ```

  ```javascript
  // bool = false
  bool.toString() //=> 'false'
  ```
