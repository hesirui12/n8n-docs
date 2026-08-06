---
title: 用 Luxon 处理日期和时间
description: 在 n8n 中使用 Luxon 处理日期和时间。
contentType: howto
nodeTitle: 处理日期与时间
originalFilePath: data/specific-data-types/luxon.md
originalUrl: 'https://docs.n8n.io/data/specific-data-types/luxon'
url: >-
  https://docs.n8n.io/build/work-with-data/handle-special-data-types/work-with-dates-and-times
layout:
  description:
    visible: false
---

# 用 Luxon 处理日期和时间 / Date and time with Luxon

{% hint style="info" %}
**大白话**：日期和时间在编程里是最容易让人头疼的东西之一——格式五花八门（`2019-06-23`、`23-06-2019`、时间戳……），加减天数还得自己算，还要考虑时区。Luxon 就是一个专门帮你「省心处理日期时间」的 JavaScript 库。n8n 内置了它：在表达式和代码节点里，你可以直接用 Luxon 来解析日期字符串、加减天数、比较两个日期差几天等。这篇文章就是教你怎么用它的。
{% endhint %}

[Luxon](https://github.com/moment/luxon/) 是一个 JavaScript 库，它让处理日期和时间变得更容易。关于 Luxon 用法的完整细节，请参考 [Luxon 的文档](https://moment.github.io/luxon/#/?id=luxon)。

n8n 在节点之间传递日期时用的是字符串（string），所以你需要先「解析」它们。Luxon 让这件事变得简单。

{% hint style="info" %}
**Python 支持（Python support）**

Luxon 是一个 JavaScript 库。在代码节点（Code node）里使用 Python 时，n8n 创建的两个便捷[变量（variables）](#get-the-current-datetime-or-date)也可以用，但功能有限：

* 你不能对这些变量执行 Luxon 操作。例如，Python 里没有与 `$today.minus(...)` 对应的写法。
* 通用的 Luxon 功能（比如[把日期字符串转成 Luxon](#convert-date-string-to-luxon)）对 Python 用户不可用。
{% endhint %}

## n8n 中日期和时间的行为 / Date and time behavior in n8n

请注意以下几点：

* 在工作流中，n8n 会在节点之间把日期和时间转换成字符串（string）。当你对来自其他节点的日期和时间做运算（比如加减天数）时，要记住这一点。
* 在 n8n 中推荐使用 Luxon 的 `DateTime()`。如果使用原生 JavaScript 的 `Date()`，它在某些 n8n 功能下会不工作。例如，它不遵守[工作流专属时区（Workflow-specific Time Zone）](https://docs.n8n.io/workflows/settings/#timezone)。
* 用原生 JavaScript，你可以用 `new Date('2019-06-23')` 把字符串转成日期。而在 Luxon 里，你必须使用明确声明了格式的函数，比如 `DateTime.fromISO('2019-06-23')` 或 `DateTime.fromFormat("23-06-2019", "dd-MM-yyyy")`。

{% hint style="info" %}
**大白话**：n8n 节点之间传日期时，「日历」会变成「文字」。比如节点 A 输出的日期，到了节点 B 手里就是 `2019-06-23` 这样的字符串。字符串不能直接做加减运算，必须先告诉程序「这是一串日期、是什么格式」，这就叫「解析」。Luxon 就是那个帮你解析和运算的工具。
{% endhint %}

## 在 n8n 中设置时区 / Setting the timezone in n8n

Luxon 使用 n8n 的时区。这个时区可以是以下之一：

* 默认值：`America/New York`
* 你的 n8n 实例自定义的时区，通过 `GENERIC_TIMEZONE` 环境变量（environment variable）设置。
* 单个工作流自定义的时区，在工作流设置（workflow settings）中配置。

{% hint style="info" %}
**大白话**：时区就是「地球上的几点钟」。同样的时间点，在北京是凌晨 1 点，在纽约可能还是前一天的中午。n8n 默认按纽约时间算，但你可以改成自己所在的时区——可以在整个 n8n 实例层面改（用 `GENERIC_TIMEZONE` 环境变量），也可以只给某一个工作流单独改（在工作流设置里）。改完之后，Luxon 算出来的「今天」「现在」都会按你的时区走。
{% endhint %}

## 常见任务 / Common tasks

本小节提供了一些常见操作的示例。更多示例和详细指导，请参考 [Luxon 自己的文档](https://moment.github.io/luxon/#/?id=luxon)。

### 获取当前日期时间或当前日期 / Get the current datetime or date

使用 `$now` 和 `$today` 这两个 Luxon 对象，可以获取当前时间或当前日期：

* `now`：一个包含当前时间戳的 Luxon 对象。等价于 `DateTime.now()`。
* `today`：一个包含当前时间戳的 Luxon 对象，向下取整到「天」。等价于 `DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })`。

注意：这两个变量在转换成字符串时，可能返回不同的时间格式：

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```javascript
{{$now}}
// n8n displays the ISO formatted timestamp
// For example 2022-03-09T14:02:37.065+00:00
{{"Today's date is " + $now}}
// n8n displays "Today's date is <unix timestamp>"
// For example "Today's date is 1646834498755"
```
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```javascript
$now
// n8n displays <ISO formatted timestamp>
// For example 2022-03-09T14:00:25.058+00:00
let rightNow = "Today's date is " + $now
// n8n displays "Today's date is <unix timestamp>"
// For example "Today's date is 1646834498755"
```
{% endtab %}

{% tab title="代码节点（Python）" %}
```python
_now
# n8n displays <ISO formatted timestamp>
# For example 2022-03-09T14:00:25.058+00:00
rightNow = "Today's date is " + str(_now)
# n8n displays "Today's date is <unix timestamp>"
# For example "Today's date is 1646834498755"
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：`$now` 是「此时此刻」，`$today` 是「今天零点」。注意一个坑：如果你把 `$now` 拼到一段文字里（比如用 `+` 拼接字符串），它不会显示成好读的 `2022-03-09T14:02:37` 这样的格式，而是会显示成一串又长又难懂的数字（Unix 时间戳，比如 `1646834498755`，它是从 1970 年 1 月 1 日算起的毫秒数）。所以想让人能看懂的时间，最好单独使用 `$now`，别直接拼字符串。
{% endhint %}

n8n 提供了内置的便捷函数，用于在日期相关的表达式里做数据转换。更多信息请参考[表达式参考（Expression reference）](../transform-data/expression-reference/README.md)。

### 把 JavaScript 日期转换成 Luxon / Convert JavaScript dates to Luxon

要把原生 JavaScript 日期转换成 Luxon 日期：

* 在表达式（Expressions）中，使用 `.toDateTime()` 方法。例如：`{{ (new Date()).toDateTime() }}`。
* 在代码节点（Code node）中，使用 `DateTime.fromJSDate()`。例如：`let luxondate = DateTime.fromJSDate(new Date())`。

### 把日期字符串转换成 Luxon / Convert date string to Luxon

你可以把日期字符串和其他日期格式转换成 Luxon DateTime 对象。既可以从标准格式转换，也可以从任意自定义格式的字符串转换。

{% hint style="info" %}
**Luxon DateTime 与 JavaScript Date 的区别**

用原生 JavaScript，你可以用 `new Date('2019-06-23')` 把字符串转成日期。而在 Luxon 里，你必须使用明确声明了格式的函数，比如 `DateTime.fromISO('2019-06-23')` 或 `DateTime.fromFormat("23-06-2019", "dd-MM-yyyy")`。
{% endhint %}

#### 如果你的日期是受支持的标准技术格式：/ If you have a date in a supported standard technical format:

大多数日期使用 `fromISO()`。它从一个 ISO 8601 格式的字符串创建 Luxon DateTime。例如：

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```js
{{DateTime.fromISO('2019-06-23T00:00:00.00')}}
```
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```js
let luxonDateTime = DateTime.fromISO('2019-06-23T00:00:00.00')
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：ISO 8601 是一种国际通用的日期格式标准，长得像 `2019-06-23T00:00:00`——先是年-月-日，`T` 后面跟着时:分:秒。`fromISO()` 就是「我明确告诉你：这是 ISO 格式，帮我解析成日期对象」。比如 `2019-06-23T00:00:00.00` 表示 2019 年 6 月 23 日的零点整。
{% endhint %}

Luxon 的 API 文档中有更多关于 [fromISO](https://moment.github.io/luxon/api-docs/index.html#datetimefromiso) 的信息。

Luxon 提供了处理多种格式转换的函数。请参考 Luxon 的[解析技术格式（Parsing technical formats）](https://moment.github.io/luxon/#/parsing?id=parsing-technical-formats)指南了解详情。

#### 如果你的日期字符串不是标准格式：/ If you have a date as a string that doesn't use a standard format:

使用 Luxon 的[临时解析（Ad-hoc parsing）](https://moment.github.io/luxon/#/parsing?id=ad-hoc-parsing)。做法是使用 `fromFormat()` 函数，传入字符串和一组描述格式的[记号（tokens）](https://moment.github.io/luxon/#/parsing?id=table-of-tokens)。

例如，你有 n8n 的成立日期——2019 年 6 月 23 日，格式是 `23-06-2019`（日-月-年）。你想把它变成一个 Luxon 对象：

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```js
{{DateTime.fromFormat("23-06-2019", "dd-MM-yyyy")}}
```
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```js
let newFormat = DateTime.fromFormat("23-06-2019", "dd-MM-yyyy")
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：当日期不是标准格式（比如 `23-06-2019` 这种「日-月-年」的写法）时，你必须亲口告诉 Luxon 格式长什么样。`"dd-MM-yyyy"` 就是格式说明书：`dd` 表示两位数的日，`MM` 表示两位数的月，`yyyy` 表示四位数的年。格式写错了，解析就会出错或得到错误日期——这就是 `fromFormat()` 的用途。
{% endhint %}

使用临时解析（ad-hoc parsing）时，请注意 Luxon 关于[局限（Limitations）](https://moment.github.io/luxon/#/parsing?id=limitations)的警告。如果看到出乎意料的结果，可以试试他们的[调试（Debugging）](https://moment.github.io/luxon/#/parsing?id=debugging)指南。

### 获取距今天 N 天 / Get n days from today

获取今天之前或之后 N 天的日期。

{% tabs %}
{% tab title="表达式（JavaScript）" %}
例如，你想设置一个字段，让它始终显示「当前日期往前推 7 天」的日期。

在表达式编辑器中输入：

``` js
{{$today.minus({days: 7})}}
```

在 2019 年 6 月 23 日这一天运行，它会返回 `[Object: "2019-06-16T00:00:00.000+00:00"]`。

这个示例用了 n8n 的自定义变量 `$today` 来偷懒。它等价于 `DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).minus({days: 7})`。
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
例如，你想创建一个变量，让它保存「当前日期往前推 7 天」的日期。

在代码编辑器中输入：

``` js
let sevenDaysAgo = $today.minus({days: 7})
```

在 2019 年 6 月 23 日这一天运行，它会返回 `[Object: "2019-06-16T00:00:00.000+00:00"]`。

这个示例用了 n8n 的自定义变量 `$today` 来偷懒。它等价于 `DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).minus({days: 7})`。
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：`.minus({days: 7})` 就是「往前减 7 天」。`{days: 7}` 是 Luxon 用来接收参数的对象写法，意思是「天数：7」。同理，`.plus({days: 7})` 就是「往后加 7 天」。注意：**减完后的结果仍然是 Luxon 对象**，所以打印出来是 `[Object: "2019-06-16T00:00:00.000+00:00"]` 这种带 `[Object: ...]` 的样子，想让它变好看，请看下一节「创建人类可读的日期」。
{% endhint %}

更多详细信息与示例，请参考：

* Luxon 的[数学运算指南（guide to math）](https://moment.github.io/luxon/#/math)
* 它们关于 [DateTime plus](https://moment.github.io/luxon/api-docs/index.html#datetimeplus) 和 [DateTime minus](https://moment.github.io/luxon/api-docs/index.html#datetimeminus) 的 API 文档

### 创建人类可读的日期 / Create human-readable dates

在[获取距今天 N 天](#get-n-days-from-today)一节中，示例得到的日期会以 `[Object: "yyyy-mm-dd-T00:00:00.000+00:00"]`（表达式里）或 `yyyy-mm-dd-T00:00:00.000+00:00`（代码节点里）的形式返回。想让它更好读，你可以使用 Luxon 的格式化函数（formatting functions）。

例如，你想让包含日期的字段格式化成 DD/MM/YYYY 的形式，这样在 2019 年 6 月 23 日时，它会显示 `23/06/2019`。

下面这个表达式获取「今天往前 7 天」的日期，并把它转换成 DD/MM/YYYY 格式。

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```js
{{$today.minus({days: 7}).toLocaleString()}}
```
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```js
let readableSevenDaysAgo = $today.minus({days: 7}).toLocaleString()
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：`.toLocaleString()` 就是「把日期翻译成人类看得懂的本地格式」。它会根据你电脑/n8n 所在的地区习惯，自动生成 `23/06/2019` 这样既标准又好读的写法。
{% endhint %}

你还可以自定义格式。例如：

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```js
{{$today.minus({days: 7}).toLocaleString({month: 'long', day: 'numeric', year: 'numeric'})}}
```

在 2019 年 6 月 23 日运行，会返回 "16 June 2019"。
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```js
let readableSevenDaysAgo = $today.minus({days: 7}).toLocaleString({month: 'long', day: 'numeric', year: 'numeric'})
```

在 2019 年 6 月 23 日运行，会返回 "16 June 2019"。
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：括号里的 `{month: 'long', day: 'numeric', year: 'numeric'}` 是「格式偏好设置」——month 用全称（'long'）、日期用数字、年份用数字，于是得到 "16 June 2019" 这样更口语化的写法。你可以按需调整这三个选项。
{% endhint %}

更多信息请参考 Luxon 的 [toLocaleString（给人看的字符串）](https://moment.github.io/luxon/#/formatting?id=tolocalestring-strings-for-humans)指南。

### 获取两个日期之间的时间差 / Get the time between two dates

要获取两个日期之间的时间差，可以使用 Luxon 的差异（diffs）功能。它把一个日期从另一个日期里减掉，返回一个时长（duration）。

例如，获取两个日期之间相差的月数：

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```js
{{DateTime.fromISO('2019-06-23').diff(DateTime.fromISO('2019-05-23'), 'months').toObject()}}
```

这会返回 `[Object: {"months":1}]`。
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```js
let monthsBetweenDates = DateTime.fromISO('2019-06-23').diff(DateTime.fromISO('2019-05-23'), 'months').toObject()
```

这会返回 `{"months":1}`。
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：`.diff()` 就是「相减」。`2019-06-23` 减 `2019-05-23`，正好差 1 个月，所以结果是 `{"months":1}`。`'months'` 参数告诉 Luxon「我要按『月』来算差值」；如果你想按天、按小时算，就把 `'months'` 换成 `'days'`、`'hours'`。最后的 `.toObject()` 把结果变成一个方便取用的对象。
{% endhint %}

更多信息请参考 Luxon 的[差异（Diffs）](https://moment.github.io/luxon/#/math?id=diffs)文档。

### 一个更完整的例子：距离圣诞节还有多少天？/ A longer example: How many days to Christmas?

这个例子综合运用了 Luxon 的多个功能，还用到了 JMESPath，以及一些基础的字符串处理。

场景：你想要一个「圣诞节倒计时」。每天它都告诉你距离圣诞节还剩多少天。而且你不想每年都手动更新它——它需要每年都能无缝工作。

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```js
{{"There are " + $today.diff(DateTime.fromISO($today.year + '-12-25'), 'days').toObject().days.toString().substring(1) + " days to Christmas!"}}
```

这会输出 `"There are <number of days> days to Christmas!"`。例如，在 3 月 9 日运行，会输出 "There are 291 days to Christmas!"。

下面详细解释一下这个表达式都做了什么：

* `{{`：表示表达式的开始。
* `"There are "`：一个字符串（string）。
* `+`：用来拼接两个字符串。
* `$today.diff()`：这和[获取两个日期之间的时间差](#get-the-time-between-two-dates)里的示例类似，只不过这里用的是 n8n 自定义的 `$today` 变量。
* `DateTime.fromISO($today.year + '-12-25'), 'days'`：这一部分先用 `$today.year` 获取当前年份，把它和月份、日期拼成一个 ISO 字符串，再把整个 ISO 字符串转换成 Luxon DateTime 数据结构。同时它告诉 Luxon：差值请按「天」计算。
* `toObject()` 把 diff() 的结果转成更方便使用的对象。此时表达式会返回 `[Object: {"days":-<number-of-days>}]`。例如在 3 月 9 日，返回 `[Object: {"days":-291}]`。
* `.days` 使用 JMESPath 语法，从对象中取出「天数」这一项。关于在 n8n 中使用 JMESPath 的更多信息，请参考我们的 [JMESpath](query-json-data.md) 文档。你会得到一个负数（也就是距离圣诞节的天数，目前是负的）。
* `.toString().substring(1)` 把这个数字转成字符串，并去掉开头的 `-`（负号）。
* `+ " days to Christmas!"`：又一个字符串，用 `+` 拼接到前面的字符串后面。
* `}}`：表示表达式的结束。
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```js
let daysToChristmas = "There are " + $today.diff(DateTime.fromISO($today.year + '-12-25'), 'days').toObject().days.toString().substring(1) + " days to Christmas!";
```

这会输出 `"There are <number of days> days to Christmas!"`。例如，在 3 月 9 日运行，会输出 "There are 291 days to Christmas!"。

下面详细解释一下这段代码都做了什么：

* `"There are "`：一个字符串（string）。
* `+`：用来拼接两个字符串。
* `$today.diff()`：这和[获取两个日期之间的时间差](#get-the-time-between-two-dates)里的示例类似，只不过这里用的是 n8n 自定义的 `$today` 变量。
* `DateTime.fromISO($today.year + '-12-25'), 'days'`：这一部分先用 `$today.year` 获取当前年份，把它和月份、日期拼成一个 ISO 字符串，再把整个 ISO 字符串转换成 Luxon DateTime 数据结构。同时它告诉 Luxon：差值请按「天」计算。
* `toObject()` 把 diff() 的结果转成更方便使用的对象。此时代码会返回 `[Object: {"days":-<number-of-days>}]`。例如在 3 月 9 日，返回 `[Object: {"days":-291}]`。
* `.days` 使用 JMESPath 语法，从对象中取出「天数」这一项。关于在 n8n 中使用 JMESPath 的更多信息，请参考我们的 [JMESpath](query-json-data.md) 文档。你会得到一个负数（也就是距离圣诞节的天数，目前是负的）。
* `.toString().substring(1)` 把这个数字转成字符串，并去掉开头的 `-`（负号）。
* `+ " days to Christmas!"`：又一个字符串，用 `+` 拼接到前面的字符串后面。
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：把整个表达式拆开看：`$today.diff(今年 12 月 25 日, 'days')` → 算出「今天到今年圣诞节」差多少天（结果是负数，因为圣诞节在「未来」，今天是「过去」）；`.toObject().days` → 把结果中的「天数」拿出来；`.toString().substring(1)` → 把负数转成字符串并掐掉最前面的 `-`；最后用 `+` 把三段文字拼起来。因为年份是用 `$today.year` 动态取的，所以每年自动更新，不用手动改——这就是它「无缝工作」的秘密。
{% endhint %}
