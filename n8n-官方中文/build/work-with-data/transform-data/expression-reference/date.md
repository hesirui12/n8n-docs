---
nodeTitle: Date
originalFilePath: data/expression-reference/date.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/date'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/date
layout:
  description:
    visible: false
---
# Date 日期 <a href="#date" id="date"></a>

{% hint style="info" %}
**大白话**：把 JavaScript 的日期（Date）转成 Luxon 的 DateTime，方便继续做加减、格式化等日期操作。
{% endhint %}

## _`Date`_.**`toDateTime()`** <a href="#datetodatetime" id="datetodatetime"></a>

**说明：** 把一个 JavaScript Date 转成 Luxon DateTime。转出来的 DateTime 包含同样的信息，但更容易操作。

**语法：** _`Date`_.toDateTime()

**返回：** DateTime

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // date = new Date("2024-03-30T18:49")
  date.toDateTime().plus(5, 'days') //=> 2024-04-04T18:49
  ```
