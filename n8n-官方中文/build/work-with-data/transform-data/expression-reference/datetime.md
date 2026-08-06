---
nodeTitle: Datetime
originalFilePath: data/expression-reference/datetime.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/datetime'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/datetime
layout:
  description:
    visible: false
---
# DateTime 日期时间 <a href="#datetime" id="datetime"></a>

{% hint style="info" %}
**大白话**：DateTime 就是带时区的日期时间对象，常用的有：取年月日时分秒等部件（`.year`、`.month`、`.day`、`.hour`）、加减时间（`plus()`/`minus()`）、算两个时间的差（`diffTo()`/`diffToNow()`）、格式化输出（`format()`/`toLocaleString()`/`toRelative()`）、转到其他时区（`setZone()`/`toUTC()`/`toLocal()`）。
{% endhint %}

## _`DateTime`_.**`day`** <a href="#datetimeday" id="datetimeday"></a>

**说明：** 一个月的第几天（1-31）

**语法：** _`DateTime`_.day

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.day //=> 30
  ```

## _`DateTime`_.**`diffTo()`** <a href="#datetimediffto" id="datetimediffto"></a>

**说明：** 返回两个 DateTime 之间的差值，用给定的单位表示

**语法：** _`DateTime`_.diffTo(otherDateTime, unit)

**返回：** Number（数字）

**来源：** n8n 自定义功能

**参数：**

  * `otherDateTime ` (String|DateTime) - 要从基础 DateTime 中减去的时间点。可以是 ISO 日期字符串或 Luxon DateTime。
  * `unit ` (String|Array<String>) - 可选 - 返回结果所用的单位，或单位数组。可选值：<code>years</code>、<code>months</code>、<code>weeks</code>、<code>days</code>、<code>hours</code>、<code>minutes</code>、<code>seconds</code>、<code>milliseconds</code>。

**示例：**

  ```javascript
  // dt1 = "2024-03-30T18:49:07.234".toDateTime()
  dt1.diffTo('2025-01-01', 'days') //=> 276.21
  ```

  ```javascript
  // dt1 = "2024-03-30T18:49:07.234".toDateTime()
  // dt2 = "2025-01-01T00:00:00.000".toDateTime()
  dt1.diffTo(dt2, ['months', 'days']) //=> {'months':, 'days':}
  ```

  ```javascript
  Note: should support both day and days, etc.
  ```

## _`DateTime`_.**`diffToNow()`** <a href="#datetimedifftonow" id="datetimedifftonow"></a>

**说明：** 返回当前时刻与这个 DateTime 之间的差值，用给定的单位表示。想要文本表示，请改用 <code>toRelative()</code>。

**语法：** _`DateTime`_.diffToNow(unit)

**返回：** Number（数字）

**来源：** n8n 自定义功能

**参数：**

  * `unit ` (String|Array<String>) - 可选 - 返回结果所用的单位，或单位数组。可选值：<code>years</code>、<code>months</code>、<code>weeks</code>、<code>days</code>、<code>hours</code>、<code>minutes</code>、<code>seconds</code>、<code>milliseconds</code>。

**示例：**

  ```javascript
  // dt = "2023-03-30T18:49:07.234".toDateTime()
  dt.diffToNow('days') //=> 371.9
  ```

  ```javascript
  // dt = "2023-03-30T18:49:07.234".toDateTime()
  dt.diffToNow(['months', 'days']) //=> {"months":12, "days":5.9}
  ```

  ```javascript
  Note: should support both day and days, etc.
  ```

## _`DateTime`_.**`endOf()`** <a href="#datetimeendof" id="datetimeendof"></a>

**说明：** 把 DateTime 向上取整到某个单位的末尾，例如当月的最后时刻

**语法：** _`DateTime`_.endOf(unit, opts)

**返回：** DateTime

**类型：** Luxon

**参数：**

  * `unit ` (String) - 要向上取整到的单位。可选 <code>year</code>、<code>quarter</code>、<code>month</code>、<code>week</code>、<code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code> 或 <code>millisecond</code>。
  * `opts ` (Object) - 可选 - 影响输出结果的对象。可能的属性：
<code>useLocaleWeeks</code> (boolean)：计算一周开始时是否使用语言区域设置。默认 false。

**示例：**

  ```javascript
  // dt = "2024-03-20T18:49".toDateTime()
  dt.endOf('month') //=> 2024-03-31T23:59
  ```

## _`DateTime`_.**`equals()`** <a href="#datetimeequals" id="datetimeequals"></a>

**说明：** 如果两个 DateTime 表示完全相同的时刻并且处于相同时区，则返回 <code>true</code>。想要不那么严格的比较，请用 <code>hasSame()</code>。

**语法：** _`DateTime`_.equals(other)

**返回：** Boolean（布尔值）

**类型：** Luxon

**参数：**

  * `other ` (DateTime) - 要比较的另一个 DateTime

**示例：**

  ```javascript
  // dt1 = "2024-03-20T18:49+01:00".toDateTime()
  // dt2 = "2024-03-20T19:49+02:00".toDateTime()
  dt1.equals(dt2) //=> false
  ```

## _`DateTime`_.**`extract()`** <a href="#datetimeextract" id="datetimeextract"></a>

**说明：** 提取日期或时间的一部分，例如月份，以数字形式返回。想要提取文本名称，请看 <code>format()</code>。

**语法：** _`DateTime`_.extract(unit?)

**返回：** Number（数字）

**来源：** n8n 自定义功能

**参数：**

  * `unit` (String) - 可选 - 要返回的日期或时间部分。可选值：<code>year</code>、<code>month</code>、<code>week</code>、<code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code>

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.extract('month') //=> 3
  ```

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.extract('hour') //=> 18
  ```

## _`DateTime`_.**`format()`** <a href="#datetimeformat" id="datetimeformat"></a>

**说明：** 使用指定格式把 DateTime 转成字符串。 <a href="https://moment.github.io/luxon/#/formatting?id=table-of-tokens">格式化指南</a>。常见格式用 <code>toLocaleString()</code> 可能更简单。

**语法：** _`DateTime`_.format(fmt)

**返回：** String（字符串）

**来源：** n8n 自定义功能

**参数：**

  * `fmt` (String) - 要返回的字符串的<a href="https://moment.github.io/luxon/#/formatting?id=table-of-tokens">格式</a>

**示例：**

  ```javascript
  // dt = "2024-04-30T18:49".toDateTime()
  dt.format('dd/LL/yyyy') //=> '30/04/2024'
  ```

  ```javascript
  // dt = "2024-04-30T18:49".toDateTime()
  dt.format('dd LLL yy') //=> '30 Apr 24'
  dt.setLocale('fr').format('dd LLL yyyy') //=> '30 avr. 2024'
  dt.format("HH 'hours and' mm 'minutes'") //=> '18 hours and 49 minutes'
  ```

{% hint style="warning" %}
**在代码节点（Code node）里不可用**

`format()` 是 n8n 在表达式编辑器里给 Luxon `DateTime` 对象添加的自定义扩展。它在代码节点（Code node）中不存在，因为代码节点脚本针对的是原封不动的 Luxon。在那里调用它会抛出 `... .format is not a function` 错误。

请改用 Luxon 原生的 [`toFormat()`](https://moment.github.io/luxon/api-docs/index.html#datetimetoformat)：

```javascript
// In the Code node
DateTime.now().toFormat('dd/LL/yyyy'); //=> '30/04/2024'
```

这适用于本页任何标注为 **来源：n8n 自定义功能** 的方法：它们在表达式（例如 Set 节点）里可用，但在代码节点（Code node）里可能不可用。关于这一区别的更多说明，参见 [内置方法与变量](../../../code-in-n8n/use-built-in-shortcuts.md)。
{% endhint %}

## _`DateTime`_.**`hasSame()`** <a href="#datetimehassame" id="datetimehassame"></a>

**说明：** 如果两个 DateTime 在指定的单位内相同，则返回 <code>true</code>。时区被忽略（只比较当地时间），所以如果需要，请先用 <code>toUTC()</code>。

**语法：** _`DateTime`_.hasSame(otherDateTime, unit)

**返回：** Boolean（布尔值）

**类型：** Luxon

**参数：**

  * `otherDateTime ` (DateTime) - 要比较的另一个 DateTime
  * `unit ` (String) - 要检查相同性的时间单位。可选值：<code>year</code>、<code>quarter</code>、<code>month</code>、<code>week</code>、<code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code> 或 <code>millisecond</code>。

**示例：**

  ```javascript
  // dt1 = "2024-03-20".toDateTime()
  // dt2 = "2024-03-18".toDateTime()
  dt1.hasSame(dt2, 'month') //=> true
  ```

  ```javascript
  // dt1 = "1982-03-20".toDateTime()
  // dt2 = "2024-03-18".toDateTime()
  dt1.hasSame(dt2, 'month') //=> false
  ```

## _`DateTime`_.**`hour`** <a href="#datetimehour" id="datetimehour"></a>

**说明：** 一天中的小时（0-23）

**语法：** _`DateTime`_.hour

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.hour //=> 18
  ```

## _`DateTime`_.**`isBetween()`** <a href="#datetimeisbetween" id="datetimeisbetween"></a>

**说明：** 如果 DateTime 位于指定的两个时间点之间，则返回 <code>true</code>

**语法：** _`DateTime`_.isBetween(date1, date2)

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**参数：**

  * `date1` (String|DateTime) - 基础 DateTime 必须晚于的时间点。可以是 ISO 日期字符串或 Luxon DateTime。
  * `date2` (String|DateTime) - 基础 DateTime 必须早于的时间点。可以是 ISO 日期字符串或 Luxon DateTime。

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.isBetween('2020-06-01', '2025-06-01') //=> true
  ```

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.isBetween('2020', $now) //=> true
  ```

## _`DateTime`_.**`isInDST`** <a href="#datetimeisindst" id="datetimeisindst"></a>

**说明：** 该 DateTime 是否处于夏令时（daylight saving time）

**语法：** _`DateTime`_.isInDST

**返回：** Boolean（布尔值）

**类型：** Luxon

## _`DateTime`_.**`locale`** <a href="#datetimelocale" id="datetimelocale"></a>

**说明：** DateTime 的语言区域（locale），例如 'en-GB'。格式化 DateTime 时使用该区域。

**语法：** _`DateTime`_.locale

**返回：** String（字符串）

**类型：** Luxon

**示例：**

  ```javascript
  $now.locale //=> 'en-US'
  ```

## _`DateTime`_.**`millisecond`** <a href="#datetimemillisecond" id="datetimemillisecond"></a>

**说明：** 一秒中的毫秒（0-999）

**语法：** _`DateTime`_.millisecond

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49:07.234".toDateTime()
  dt.millisecond //=> 234
  ```

## _`DateTime`_.**`minus()`** <a href="#datetimeminus" id="datetimeminus"></a>

**说明：** 从 DateTime 中减去一段给定的时间

**语法：** _`DateTime`_.minus(n, unit?)

**返回：** DateTime

**来源：** n8n 自定义功能

**参数：**

  * `n` (Number|Object) - 要减去的单位数量。或者用一个 Luxon <a href=”https://moment.github.io/luxon/api-docs/index.html#duration”>Duration</a> 对象一次性减去多个单位。
  * `unit` (String) - 可选 - 数字的单位。可选值：<code>years</code>、<code>months</code>、<code>weeks</code>、<code>days</code>、<code>hours</code>、<code>minutes</code>、<code>seconds</code>、<code>milliseconds</code>

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.minus(7, 'days') //=> 2024-04-23T18:49
  ```

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.minus(4, 'years') //=> 2020-04-30T18:49
  ```

{% hint style="info" %}
**代码节点（Code node）：** Luxon 原生的 `DateTime.prototype.minus()` 在代码节点里也存在，但它只接受一个[类似 Duration 的对象](https://moment.github.io/luxon/api-docs/index.html#datetimeminus)（例如 `dt.minus({ days: 7 })`），不接受本页这种 n8n 独有的 `(n, unit)` 简写。在代码节点里传 `dt.minus(7, 'days')` 不会报错，但也不会真的减去 7 天——如果你在那里用这种写法，请仔细检查结果。
{% endhint %}

## _`DateTime`_.**`minute`** <a href="#datetimeminute" id="datetimeminute"></a>

**说明：** 一小时中的分钟（0-59）

**语法：** _`DateTime`_.minute

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.minute //=> 49
  ```

## _`DateTime`_.**`month`** <a href="#datetimemonth" id="datetimemonth"></a>

**说明：** 月份（1-12）

**语法：** _`DateTime`_.month

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.month //=> 3
  ```

## _`DateTime`_.**`monthLong`** <a href="#datetimemonthlong" id="datetimemonthlong"></a>

**说明：** 月份的完整文本名称，例如 'October'。未指定语言区域时默认使用系统区域。

**语法：** _`DateTime`_.monthLong

**返回：** String（字符串）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.monthLong //=> 'March'
  ```

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.setLocale('de-DE').monthLong //=> 'März'
  ```

## _`DateTime`_.**`monthShort`** <a href="#datetimemonthshort" id="datetimemonthshort"></a>

**说明：** 月份的缩写文本名称，例如 'Oct'。未指定语言区域时默认使用系统区域。

**语法：** _`DateTime`_.monthShort

**返回：** String（字符串）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.monthShort //=> 'Mar'
  ```

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.setLocale('de-DE').monthShort //=> 'Mär'
  ```

## _`DateTime`_.**`plus()`** <a href="#datetimeplus" id="datetimeplus"></a>

**说明：** 给 DateTime 加上一段给定的时间

**语法：** _`DateTime`_.plus(n, unit?)

**返回：** DateTime

**来源：** n8n 自定义功能

**参数：**

  * `n` (Number|Object) - 要加上的单位数量。或者用一个 Luxon <a href=”https://moment.github.io/luxon/api-docs/index.html#duration”>Duration</a> 对象一次性加上多个单位。
  * `unit` (String) - 可选 - 数字的单位。可选值：<code>years</code>、<code>months</code>、<code>weeks</code>、<code>days</code>、<code>hours</code>、<code>minutes</code>、<code>seconds</code>、<code>milliseconds</code>

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.plus(7, 'days') //=> 2024-04-06T18:49
  ```

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.plus(4, 'years') //=> 2028-04-30T18:49
  ```

{% hint style="info" %}
**代码节点（Code node）：** Luxon 原生的 `DateTime.prototype.plus()` 在代码节点里也存在，但它只接受一个[类似 Duration 的对象](https://moment.github.io/luxon/api-docs/index.html#datetimeplus)（例如 `dt.plus({ days: 7 })`），不接受本页这种 n8n 独有的 `(n, unit)` 简写。在代码节点里传 `dt.plus(7, 'days')` 不会报错，但也不会真的加上 7 天。如果你在那里用这种写法，请仔细检查结果。
{% endhint %}

## _`DateTime`_.**`quarter`** <a href="#datetimequarter" id="datetimequarter"></a>

**说明：** 一年中的季度（1-4）

**语法：** _`DateTime`_.quarter

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.quarter //=> 1
  ```

## _`DateTime`_.**`second`** <a href="#datetimesecond" id="datetimesecond"></a>

**说明：** 一分钟中的秒（0-59）

**语法：** _`DateTime`_.second

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49:07.234".toDateTime()
  dt.second //=> 7
  ```

## _`DateTime`_.**`set()`** <a href="#datetimeset" id="datetimeset"></a>

**说明：** 为 DateTime 的指定单位赋新值。要取整，请参见 <code>startOf()</code> 和 <code>endOf()</code>。

**语法：** _`DateTime`_.set(values)

**返回：** DateTime

**类型：** Luxon

**参数：**

  * `values ` (Object) - 包含要设置的单位和对应值的对象。可能的键有 <code>year</code>、<code>month</code>、<code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code> 和 <code>millsecond</code>。

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.set({year:1982, month:10}) //=> 1982-10-20T18:49
  ```

## _`DateTime`_.**`setLocale()`** <a href="#datetimesetlocale" id="datetimesetlocale"></a>

**说明：** 设置语言区域（locale），它决定 DateTime 的语言和格式化方式。在生成 DateTime 的文本表示时很有用，例如配合 <code>format()</code> 或 <code>toLocaleString()</code>。

**语法：** _`DateTime`_.setLocale(locale)

**返回：** DateTime

**类型：** Luxon

**参数：**

  * `locale ` (String) - 要指定的语言区域，例如英式英语用 'en-GB'、巴西葡萄牙语用 'pt-BR'。 <a href=”https://www.localeplanet.com/icu/”>列表</a>（非官方）

**示例：**

  ```javascript
  $now.setLocale('de-DE').toLocaleString({'dateStyle':'long'}) //=> 5. Oktober 2024
  ```

  ```javascript
  $now.setLocale('fr-FR').toLocaleString({'dateStyle':'long'}) //=> 5 octobre 2024
  ```

## _`DateTime`_.**`setZone()`** <a href="#datetimesetzone" id="datetimesetzone"></a>

**说明：** 把 DateTime 转换到给定的时区。除非在选项中另行指定，DateTime 仍然表示同一时刻。另见 <code>toLocal()</code> 和 <code>toUTC()</code>。

**语法：** _`DateTime`_.setZone(zone, opts)

**返回：** DateTime

**类型：** Luxon

**参数：**

  * `zone ` (String) - 可选 - 时区标识符，格式可以是 'America/New_York'、'UTC+3'，或者字符串 'local' 或 'utc'
  * `opts ` (Object) - 可选 - 影响输出结果的选项。可能的属性：
<code>keepCalendarTime</code> (boolean)：是否保持时间不变，只改偏移量。默认 false。

**示例：**

  ```javascript
  // dt = "2024-01-01T00:00:00.000+02:00".toDateTime()
  dt.setZone('America/Buenos_aires') //=> 2023-12-31T19:00:00.000-03:00
  ```

  ```javascript
  // dt = "2024-01-01T00:00:00.000+02:00".toDateTime()
  dt.setZone('UTC+7') //=> 2024-01-01T05:00:00.000+07:00
  ```

## _`DateTime`_.**`startOf()`** <a href="#datetimestartof" id="datetimestartof"></a>

**说明：** 把 DateTime 向下取整到某个单位的开始，例如月初

**语法：** _`DateTime`_.startOf(unit, opts)

**返回：** DateTime

**类型：** Luxon

**参数：**

  * `unit ` (String) - 要向下取整到的单位。可选值：<code>year</code>、<code>quarter</code>、<code>month</code>、<code>week</code>、<code>day</code>、<code>hour</code>、<code>minute</code>、<code>second</code> 或 <code>millisecond</code>。
  * `opts ` (Object) - 可选 - 影响输出结果的对象。可能的属性：
<code>useLocaleWeeks</code> (boolean)：计算一周开始时是否使用语言区域设置。默认 false。

**示例：**

  ```javascript
  // dt = "2024-03-20T18:49".toDateTime()
  dt.startOf('month') //=> 2024-03-01T00:00
  ```

## _`DateTime`_.**`toISO()`** <a href="#datetimetoiso" id="datetimetoiso"></a>

**说明：** 返回符合 ISO 8601 标准的 DateTime 字符串表示

**语法：** _`DateTime`_.toISO(opts)

**返回：** String（字符串）

**类型：** Luxon

**参数：**

  * `opts ` (Object) - 可选 - 配置选项。更多信息见 <a href=”https://moment.github.io/luxon/api-docs/index.html#datetimetoiso”>Luxon 文档</a>。

**示例：**

  ```javascript
  $now.toISO() //=> 2024-04-05T18:44:55.525+02:00
  ```

## _`DateTime`_.**`toLocal()`** <a href="#datetimetolocal" id="datetimetolocal"></a>

**说明：** 把 DateTime 转换到工作流的本地时区。除非在参数中另行指定，DateTime 仍然表示同一时刻。工作流的时区可以在工作流设置里设置。

**语法：** _`DateTime`_.toLocal()

**返回：** DateTime

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-01-01T00:00:00.000Z".toDateTime()
  dt.toLocal() //=> 2024-01-01T01:00:00.000+01:00, if time zone is Europe/Berlin
  ```

## _`DateTime`_.**`toLocaleString()`** <a href="#datetimetolocalestring" id="datetimetolocalestring"></a>

**说明：** 返回表示该 DateTime 的本地化字符串，即按其语言区域对应的语言和格式显示。不指定时默认使用系统区域。

**语法：** _`DateTime`_.toLocaleString(formatOpts)

**返回：** String（字符串）

**类型：** Luxon

**参数：**

  * `formatOpts ` (Object) - 可选 - 渲染的配置选项。完整列表见 <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters”>Intl.DateTimeFormat</a>。默认渲染为短日期。

**示例：**

  ```javascript
  $now.toLocaleString() //=> '4/30/2024'
  $now.toLocaleString({'dateStyle':'medium', 'timeStyle':'short'}) //=> 'Apr 30, 2024, 10:00 PM'
  // (if in US English locale)
  ```

  ```javascript
  $now.setLocale('de-DE').toLocaleString() //=> '30.4.2024'
  ```

  ```javascript
  $now.toLocaleString({'dateStyle':'short'}) //=> '4/30/2024'
  $now.toLocaleString({'dateStyle':'medium'}) //=> 'Apr 30, 2024'
  $now.toLocaleString({'dateStyle':'long'}) //=> 'April 30, 2024'
  $now.toLocaleString({'dateStyle':'full'}) //=> 'Tuesday, April 30, 2024'
  // (if in US English locale)
  ```

  ```javascript
  $now.toLocaleString({'year':'numeric', 'month':'numeric', 'day':'numeric'}) //=> '4/30/2024'
  $now.toLocaleString({'year':'2-digit', 'month':'2-digit', 'day':'2-digit'}) //=> '04/30/24'
  $now.toLocaleString({'month':'short', 'weekday':'short', 'day':'numeric'}) //=> 'Tue, Apr 30'
  $now.toLocaleString({'month':'long', 'weekday':'long', 'day':'numeric'}) //=> 'Tuesday, April 30'
  // (if in US English locale)
  ```

  ```javascript
  $now.toLocaleString({'timeStyle':'short'}) //=> '10:00 PM'
  $now.toLocaleString({'timeStyle':'medium'}) //=> '10:00:58 PM'
  $now.toLocaleString({'timeStyle':'long'}) //=> '10:00:58 PM GMT+2'
  $now.toLocaleString({'timeStyle':'full'}) //=> '10:00:58 PM Central European Summer Time'
  // (if in US English locale)
  ```

  ```javascript
  $now.toLocaleString({'hour':'numeric', 'minute':'numeric', hourCycle:'h24'}) //=> '22:00'
  $now.toLocaleString({'hour':'2-digit', 'minute':'2-digit', hourCycle:'h12'}) //=> '10:00 PM'
  // (if in US English locale)
  ```

## _`DateTime`_.**`toMillis()`** <a href="#datetimetomillis" id="datetimetomillis"></a>

**说明：** 返回毫秒 Unix 时间戳（自 1970 年 1 月 1 日以来经过的毫秒数）

**语法：** _`DateTime`_.toMillis()

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  $now.toMillis() //=> 1712334324677
  ```

## _`DateTime`_.**`toRelative()`** <a href="#datetimetorelative" id="datetimetorelative"></a>

**说明：** 返回相对于现在的文本时间表示，例如 'in two days'（两天后）。默认向下取整。

**语法：** _`DateTime`_.toRelative(options)

**返回：** String（字符串）

**类型：** Luxon

**参数：**

  * `options ` (Object) - 可选 - 影响输出结果的选项。可能的属性：
<code>unit</code> = 默认使用的单位（<code>years</code>、<code>months</code>、<code>days</code> 等）。
<code>locale</code> = 使用的语言和格式（例如 <code>de</code>、<code>fr</code>）

**示例：**

  ```javascript
  $now.plus(1, 'day').toRelative() //=> "in 1 day"
  ```

  ```javascript
  $now.plus(1, 'day').toRelative({unit:'hours'}) //=> "in 24 hours"
  ```

  ```javascript
  $now.plus(1, 'day').toRelative({locale:'es'}) //=> "dentro de 1 día"
  ```

## _`DateTime`_.**`toSeconds()`** <a href="#datetimetoseconds" id="datetimetoseconds"></a>

**说明：** 返回秒 Unix 时间戳（自 1970 年 1 月 1 日以来经过的秒数）

**语法：** _`DateTime`_.toSeconds()

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  $now.toSeconds() //=> 1712334442.372
  ```

## _`DateTime`_.**`toString()`** <a href="#datetimetostring" id="datetimetostring"></a>

**说明：** 返回 DateTime 的字符串表示。与 <code>toISO()</code> 类似。更多格式化选项见 <code>format()</code> 或 <code>toLocaleString()</code>。

**语法：** _`DateTime`_.toString()

**返回：** string（字符串）

**类型：** Luxon

**示例：**

  ```javascript
  $now.toString() //=> 2024-04-05T18:44:55.525+02:00
  ```

## _`DateTime`_.**`toUTC()`** <a href="#datetimetoutc" id="datetimetoutc"></a>

**说明：** 把 DateTime 转换到 UTC 时区。除非在参数中另行指定，DateTime 仍然表示同一时刻。转换到其他时区请用 <code>setZone()</code>。

**语法：** _`DateTime`_.toUTC(offset, opts)

**返回：** DateTime

**类型：** Luxon

**参数：**

  * `offset ` (Number) - 可选 - 距 UTC 的偏移量（分钟）
  * `opts ` (Object) - 可选 - 影响输出结果的对象。可能的属性：
<code>keepCalendarTime</code> (boolean)：是否保持时间不变，只改偏移量。默认 false。

**示例：**

  ```javascript
  // dt = "2024-01-01T00:00:00.000+02:00".toDateTime()
  dt.toUTC() //=> 2023-12-31T22:00:00.000Z
  ```

## _`DateTime`_.**`weekday`** <a href="#datetimeweekday" id="datetimeweekday"></a>

**说明：** 星期几。1 是星期一，7 是星期日。

**语法：** _`DateTime`_.weekday

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.weekday //=> 6
  ```

## _`DateTime`_.**`weekdayLong`** <a href="#datetimeweekdaylong" id="datetimeweekdaylong"></a>

**说明：** 星期几的完整文本名称，例如 'Wednesday'。未指定语言区域时默认使用系统区域。

**语法：** _`DateTime`_.weekdayLong

**返回：** String（字符串）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.weekdayLong //=> 'Saturday'
  ```

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.setLocale('de-DE').weekdayLong //=> 'Samstag'
  ```

## _`DateTime`_.**`weekdayShort`** <a href="#datetimeweekdayshort" id="datetimeweekdayshort"></a>

**说明：** 星期几的缩写文本名称，例如 'Wed'。未指定语言区域时默认使用系统区域。

**语法：** _`DateTime`_.weekdayShort

**返回：** String（字符串）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.weekdayShort //=> 'Sat'
  ```

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.setLocale('fr-FR').weekdayShort //=> 'sam.'
  ```

## _`DateTime`_.**`weekNumber`** <a href="#datetimeweeknumber" id="datetimeweeknumber"></a>

**说明：** 一年中的第几周（1-52 左右）

**语法：** _`DateTime`_.weekNumber

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.weekNumber //=> 13
  ```

## _`DateTime`_.**`year`** <a href="#datetimeyear" id="datetimeyear"></a>

**说明：** 年份

**语法：** _`DateTime`_.year

**返回：** Number（数字）

**类型：** Luxon

**示例：**

  ```javascript
  // dt = "2024-03-30T18:49".toDateTime()
  dt.year //=> 2024
  ```

## _`DateTime`_.**`zone`** <a href="#datetimezone" id="datetimezone"></a>

**说明：** 与该 DateTime 关联的时区

**语法：** _`DateTime`_.zone

**返回：** Object（对象）

**类型：** Luxon

**示例：**

  ```javascript
  $now.zone //=> {"zoneName": "Europe/Berlin", "valid": true}
  ```
