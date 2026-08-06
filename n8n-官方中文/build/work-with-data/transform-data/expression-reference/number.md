---
nodeTitle: Number
originalFilePath: data/expression-reference/number.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/number'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/number
layout:
  description:
    visible: false
---
# Number 数字 <a href="#number" id="number"></a>

{% hint style="info" %}
**大白话**：数字常用小工具：取绝对值 `abs()`、向上/向下取整 `ceil()`/`floor()`、四舍五入 `round()`、格式化 `format()`、判断奇偶/整数 `isEven()`/`isOdd()`/`isInteger()`，还能把时间戳转成日期 `toDateTime()`。
{% endhint %}

## _`Number`_.**`abs()`** <a href="#numberabs" id="numberabs"></a>

**说明：** 返回数字的绝对值，也就是去掉负号

**语法：** _`Number`_.abs()

**返回：** Number（数字）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // x = -1.7
  x.abs() //=> 1.7
  ```

## _`Number`_.**`ceil()`** <a href="#numberceil" id="numberceil"></a>

**说明：** 向上取整，把数字进位到下一个整数

**语法：** _`Number`_.ceil()

**返回：** Number（数字）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // x = 1.234
  x.ceil() //=> 2
  ```

## _`Number`_.**`floor()`** <a href="#numberfloor" id="numberfloor"></a>

**说明：** 向下取整，把数字舍到最近的整数

**语法：** _`Number`_.floor()

**返回：** Number（数字）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // x = 1.234
  x.floor() //=> 1
  ```

## _`Number`_.**`format()`** <a href="#numberformat" id="numberformat"></a>

**说明：** 返回表示该数字的格式化字符串。适合按某种语言或货币来格式化。与 <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat”><code>Intl.NumberFormat()</code></a> 相同。

**语法：** _`Number`_.format(locale?, options?)

**返回：** String（字符串）

**来源：** n8n 自定义功能

**参数：**

  * `locale` (String) - 可选 - 用于格式化数字的<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument”>语言区域标签（locale tag）</a>，例如 <code>fr-FR</code>、<code>en-GB</code>、<code>pr-BR</code>
  * `options` (Object) - 可选 - 数字格式化的配置选项。 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat" target="_blank">更多信息</a>

**示例：**

  ```javascript
  // number = 123456.789;
  number.format('de-DE') //=> 123.456,789
  ```

  ```javascript
  // number = 123456.789;
  number.format('de-DE', {'style': 'currency', 'currency': 'EUR'}) //=> 123.456,79 €
  ```

## _`Number`_.**`isEmpty()`** <a href="#numberisempty" id="numberisempty"></a>

**说明：** 对所有数字都返回 <code>false</code>。对 <code>null</code> 返回 <code>true</code>。

**语法：** _`Number`_.isEmpty()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // num = 10
  num.isEmpty() // => false
  ```

  ```javascript
  // num = 0
  num.isEmpty() // => false
  ```

  ```javascript
  // num = null
  num.isEmpty() // => true
  ```

## _`Number`_.**`isEven()`** <a href="#numberiseven" id="numberiseven"></a>

**说明：** 如果数字是偶数则返回 <code>true</code>。如果数字不是整数，会抛出错误。

**语法：** _`Number`_.isEven()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // number = 33
  number.isEven() //=> false
  ```

## _`Number`_.**`isInteger()`** <a href="#numberisinteger" id="numberisinteger"></a>

**说明：** 如果数字是整数则返回 <code>true</code>

**语法：** _`Number`_.isInteger()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // number = 4
  number.isInteger() //=> true
  ```

  ```javascript
  // number = 4.12
  number.isInteger() //=> false
  ```

## _`Number`_.**`isOdd()`** <a href="#numberisodd" id="numberisodd"></a>

**说明：** 如果数字是奇数则返回 <code>true</code>。如果数字不是整数，会抛出错误。

**语法：** _`Number`_.isOdd()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // number = 33
  number.isOdd() //=> true
  ```

## _`Number`_.**`round()`** <a href="#numberround" id="numberround"></a>

**说明：** 返回四舍五入到最近整数（或指定小数位数）的数字

**语法：** _`Number`_.round(decimalPlaces?)

**返回：** Number（数字）

**来源：** n8n 自定义功能

**参数：**

  * `decimalPlaces` (Number) - 可选 - 要保留的小数位数

**示例：**

  ```javascript
  // number = 1.256
  number.round() //=> 1
  ```

  ```javascript
  // number = 1.256
  number.round(1) //=> 1.3
  number.round(2) //=> 1.26
  ```

## _`Number`_.**`toBoolean()`** <a href="#numbertoboolean" id="numbertoboolean"></a>

**说明：** 把数字转成布尔值。<code>0</code> 变成 <code>false</code>；其他所有值都变成 <code>true</code>。

**语法：** _`Number`_.toBoolean()

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // number = 12
  number.toBoolean() //=> true
  ```

  ```javascript
  // number = 0
  number.toBoolean() //=> false
  ```

## _`Number`_.**`toDateTime()`** <a href="#numbertodatetime" id="numbertodatetime"></a>

**说明：** 把数字时间戳转成 DateTime。如果时间戳不是毫秒，必须指定其格式。使用 n8n（或工作流设置里）的时区。

**语法：** _`Number`_.toDateTime(format?)

**返回：** DateTime

**来源：** n8n 自定义功能

**参数：**

  * `format` (String) - 可选 - 要转换的时间戳类型。可选值为 <code>ms</code>（Unix 毫秒时间戳）、<code>s</code>（Unix 秒时间戳）或 <code>excel</code>（自 1900 年以来的天数）。

**示例：**

  ```javascript
  // ts = 1708695471
  ts.toDateTime('s') //=> 2024-02-23T14:37:51+01:00
  ```

  ```javascript
  // ts = 1708695471000
  ts.toDateTime('ms') //=> 2024-02-23T14:37:51+01:00
  ```

  ```javascript
  // ts = 45345
  ts.toDateTime('excel') //=> 2024-02-23T01:00:00+01:00
  ```

## _`Number`_.**`toLocaleString()`** <a href="#numbertolocalestring" id="numbertolocalestring"></a>

**说明：** 返回表示该数字的本地化字符串，即按其语言区域对应的语言和格式显示。不指定时默认使用系统区域。

**语法：** _`Number`_.toLocaleString(locales?, options?)

**返回：** String（字符串）

**来源：** JavaScript 函数

**参数：**

  * `locales` (String|Array<String>) - 可选 - 要指定的语言区域，例如英式英语用 'en-GB'、巴西葡萄牙语用 'pt-BR'。参见<a href=”https://www.localeplanet.com/icu/”>完整列表</a>（非官方）。也接受语言区域数组。不指定时默认使用系统区域。
  * `options` (Object) - 可选 - 包含<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters”>格式化选项</a>的对象

**示例：**

  ```javascript
  // num = 500000.125
  num.toLocaleString() //=> '500,000.125' (if in US English locale)
  ```

  ```javascript
  // num = 500000.125
  num.toLocaleString('fr-FR') //=> '500 000,125'
  ```

  ```javascript
  // num = 500000.125
  num.toLocaleString('fr-FR', {style:'currency', currency:'EUR'}) //=> '500 000,13 €'
  ```

## _`Number`_.**`toString()`** <a href="#numbertostring" id="numbertostring"></a>

**说明：** 把数字转成简单的文本表示。更多格式化选项见 <code>toLocaleString()</code>。

**语法：** _`Number`_.toString(radix?)

**返回：** String（字符串）

**来源：** JavaScript 函数

**参数：**

  * `radix` (Number) - 可选 - 使用的进制。必须是 2 到 36 之间的整数。例如 <code>2</code> 进制是二进制，<code>16</code> 进制是十六进制。

**示例：**

  ```javascript
  // num = 500000.125
  num.toString() //=> '500000.125'
  ```

  ```javascript
  // num = 500000.125
  num.toString(16) //=> '7a120.2'
  ```
