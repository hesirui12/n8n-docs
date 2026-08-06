---
nodeTitle: Customdata
originalFilePath: data/expression-reference/customdata.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/customdata'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/customdata
layout:
  description:
    visible: false
---
# CustomData 自定义执行数据 <a href="#customdata" id="customdata"></a>

{% hint style="info" %}
**大白话**：`$execution.customData` 就是给本次执行挂几个自定义标签（key-value 键值对），方便以后按这些标签筛选执行记录；`get()` 读取、`set()` 写入、`getAll()` 全读、`setAll()` 批量写。
{% endhint %}

## `$execution.customData`.**`get()`** <a href="#dollarexecutioncustomdataget" id="dollarexecutioncustomdataget"></a>

**说明：** 返回存在指定键（key）下的自定义执行数据。 <a href="../../../understand-workflows/understand-executions/customize-executions-data.md">更多信息</a>

**语法：** `$execution.customData`.get(key)

**返回：** String（字符串）

**来源：** n8n 自定义功能

**参数：**

  * `key` (String) - 数据存储所用的键（标识符）

**示例：**

  ```javascript
  // Get the user's email (which was previously stored)
  $execution.customData.get("user_email") //=> "me@example.com"
  ```

## `$execution.customData`.**`getAll()`** <a href="#dollarexecutioncustomdatagetall" id="dollarexecutioncustomdatagetall"></a>

**说明：** 返回当前执行中已设置的所有自定义数据键值对。 <a href="../../../understand-workflows/understand-executions/customize-executions-data.md">更多信息</a>

**语法：** `$execution.customData`.getAll()

**返回：** Object（对象）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  $execution.customData.getAll() //=> {"user_email": "me@example.com", "id": 1234}
  ```

## `$execution.customData`.**`set()`** <a href="#dollarexecutioncustomdataset" id="dollarexecutioncustomdataset"></a>

**说明：** 把自定义执行数据存到指定的键下。用它可方便地按这些数据筛选执行记录。 <a href="../../../understand-workflows/understand-executions/customize-executions-data.md">更多信息</a>

**语法：** `$execution.customData`.set(key, value)

**来源：** n8n 自定义功能

**参数：**

  * `key` (String) - 数据存储所用的键（标识符）
  * `value` (String) - 要存储的数据

**示例：**

  ```javascript
  // Store the user's email, to easily retrieve all execs related to that user later
  $execution.customData.set("user_email", "me@example.com")
  ```

## `$execution.customData`.**`setAll()`** <a href="#dollarexecutioncustomdatasetall" id="dollarexecutioncustomdatasetall"></a>

**说明：** 为本次执行一次性设置多组自定义数据键值对。用它可方便地按这些数据筛选执行记录。 <a href="../../../understand-workflows/understand-executions/customize-executions-data.md">更多信息</a>

**语法：** `$execution.customData`.setAll(obj)

**来源：** n8n 自定义功能

**参数：**

  * `obj` (Object) - 一个 JavaScript 对象，包含要设置的键值对

**示例：**

  ```javascript
  $execution.customData.setAll({"user_email": "me@example.com", "id": 1234})
  ```
