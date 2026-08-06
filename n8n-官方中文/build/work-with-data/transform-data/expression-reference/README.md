---
nodeTitle: Expression reference
originalFilePath: data/expression-reference/index.md
originalUrl: 'https://docs.n8n.io/data/expression-reference'
url: 'https://docs.n8n.io/build/work-with-data/transform-data/expression-reference'
layout:
  description:
    visible: false
---
# 表达式参考（Expression Reference）

{% hint style="info" %}
**大白话解释：这份文档怎么用？**

本文是 n8n 表达式的"字典/速查手册"：按数据类型（数组、字符串、日期时间……）列出常用的变量和方法。以 `$` 开头的叫**变量（variable）**，如 `$json`、`$now`；`text.toUpperCase()` 这种叫**方法（method）**。你可以在表达式输入框里直接使用它们。表格里的 `?` 表示该参数**可省略**，`...` 表示可以接任意多个同类参数。
{% endhint %}

下面是一些常用表达式。更完整的列表见下文。

| 分类（Category） | 表达式（Expression） | 说明（Description） |
|---|---|---|
| 访问当前输入条目的数据（Access current input item data） | `$json` | 当前条目的 JSON 数据 | 
| | `$json.fieldName` | 当前条目的某个字段 |
| | `$binary` | 当前条目的二进制数据（如文件内容） |
| 访问前置节点的数据（Access previous node data） | `$("NodeName").first()` | 某个节点的第一个条目 |
| | `$("NodeName").item` | 某个节点的「配对条目」（linked item）。详见[条目链接（Item linking）](../../reference-data/link-data-items/README.md)。 |
| | `$("NodeName").all()` | 某个节点的全部条目 |
| | `$("NodeName").last()` | 某个节点的最后一个条目 |
| 日期/时间（Date/Time） | `$now` | 当前日期和时间 | 
| | `$today` | 今天的日期 | 
| | `$now.toFormat("yyyy-MM-dd")` | 把当前日期格式化为字符串 |
| 条件判断（Conditionals） | `$if(condition, "true", "false")` | 辅助函数：条件为真或为假时返回对应的值 |
| | `condition ? true : false` | 三元运算符：条件为真返回一个值，为假返回另一个值 |
| | `$ifEmpty(value, defaultValue)` | 辅助函数：接收两个参数，先检查第一个参数是否为空，为空则返回第二个参数，否则返回第一个参数。第一个参数在以下情况视为「空」：`undefined`、`null`、空字符串 `''`、`value.length` 返回 `false` 的数组、或 `Object.keys(value).length` 返回 `false` 的对象 |
| 字符串方法（String Methods） | `text.toUpperCase()` | 转换为大写 |
| | `text.toLowerCase()` | 转换为小写 |
| | `text.includes("foo")` | 检查文本中是否包含搜索词 |
| | `text.extractEmail()` | 从文本中提取邮箱地址 |
| 数组方法（Array Methods） | `array.length` | 获取数组长度 |
| | `array.join(", ")` | 用逗号作为分隔符连接数组元素 |
| | `array.filter(x => x <= 20)` | 按过滤条件筛选数组中的元素 |
| | `array.map(x => x.id)` | 转换数组中的元素 |

{% hint style="info" %}
**上面表格里的 `$("NodeName")` 是什么意思？**

`$("节点名")` 是"取某个节点数据"的通用写法，把 `NodeName` 换成真实节点名（要加引号）。`.first()` 取第一条、`.last()` 取最后一条、`.all()` 取全部、`.item` 自动匹配与当前数据配对的那一条。
{% endhint %}

浏览下面的表格，按方法所作用的数据类型查找。点击方法名可以阅读它的详细文档。

## 数组（Array）

* [_`Array`_.**`append(elem1, elem2?, ..., elemN?)`**](array.md#arrayappend)

    在数组末尾添加新元素。类似 <code>push()</code>，但会返回修改后的数组。也可以考虑使用展开语法（spread syntax）代替（见示例）。

* [_`Array`_.**`average()`**](array.md#arrayaverage)

    返回数组中所有数字的平均值。如果含有非数字，会抛出错误。

* [_`Array`_.**`chunk(length)`**](array.md#arraychunk)

    把数组拆分成多个子数组，每个子数组包含给定数量的元素。

* [_`Array`_.**`compact()`**](array.md#arraycompact)

    移除数组中的所有空值。<code>null</code>、<code>""</code> 和 <code>undefined</code> 都算空值。

* [_`Array`_.**`concat(array2, array3?, ... arrayN?)`**](array.md#arrayconcat)

    把一个或多个数组连接到基础数组的末尾。

* [_`Array`_.**`difference(otherArray)`**](array.md#arraydifference)

    比较两个数组，返回基础数组中不存在于 <code>otherArray</code> 中的所有元素。

* [_`Array`_.**`filter(function(element, index?, array?), thisValue?)`**](array.md#arrayfilter)

    返回一个新数组，只包含满足条件的元素。条件是一个返回 <code>true</code> 或 <code>false</code> 的函数。

* [_`Array`_.**`find(function(element, index?, array?), thisValue?)`**](array.md#arrayfind)

    返回数组中第一个满足条件的元素。条件是一个返回 <code>true</code> 或 <code>false</code> 的函数。如果没有匹配的元素，返回 <code>undefined</code>。

如果需要所有匹配的元素，请用 <code>filter()</code>。

* [_`Array`_.**`first()`**](array.md#arrayfirst)

    返回数组的第一个元素。

* [_`Array`_.**`includes(element, start?)`**](array.md#arrayincludes)

    如果数组包含指定的元素，返回 <code>true</code>。

* [_`Array`_.**`indexOf(element, start?)`**](array.md#arrayindexof)

    返回第一个匹配元素在数组中的位置（下标），如果找不到则返回 -1。位置从 0 开始计数。

* [_`Array`_.**`intersection(otherArray)`**](array.md#arrayintersection)

    比较两个数组，返回基础数组中也存在于另一个数组中的所有元素（即交集）。

* [_`Array`_.**`isEmpty()`**](array.md#arrayisempty)

    如果数组没有元素，或是 <code>null</code>，返回 <code>true</code>。

* [_`Array`_.**`isNotEmpty()`**](array.md#arrayisnotempty)

    如果数组至少有一个元素，返回 <code>true</code>。

* [_`Array`_.**`join(separator?)`**](array.md#arrayjoin)

    把数组的所有元素合并成一个字符串，每个元素之间可以用可选的分隔符隔开。

与 <code>split()</code> 正好相反。

* [_`Array`_.**`last()`**](array.md#arraylast)

    返回数组的最后一个元素。

* [_`Array`_.**`length`**](array.md#arraylength)

    数组中元素的数量。

* [_`Array`_.**`map(function(element, index?, array?), thisValue?)`**](array.md#arraymap)

    对原数组的每个元素应用一个函数，创建一个新数组。

* [_`Array`_.**`max()`**](array.md#arraymax)

    返回数组中的最大数字。如果含有非数字，会抛出错误。

* [_`Array`_.**`min()`**](array.md#arraymin)

    返回数组中的最小数字。如果含有非数字，会抛出错误。

* [_`Array`_.**`pluck(fieldName1?, fieldName2?, …)`**](array.md#arraypluck)

    返回一个新数组，包含数组中每个对象（Object）指定字段的值。会忽略那些不是对象、或没有对应字段名的数组元素。

* [_`Array`_.**`randomItem()`**](array.md#arrayrandomitem)

    从数组中随机返回一个元素。

* [_`Array`_.**`reduce(function(prevResult, currentElem, currentIndex?, array?), initResult)`**](array.md#arrayreduce)

    对每个元素应用一个函数，把数组"折叠"成单个值。函数会把当前元素与前面元素折叠的结果合并，产生新的结果。

* [_`Array`_.**`removeDuplicates(keys?)`**](array.md#arrayremoveduplicates)

    移除数组中重复出现的元素。

* [_`Array`_.**`renameKeys(from, to)`**](array.md#arrayrenamekeys)

    修改数组中所有对象的键名（字段名）。要重命名多个键，可以追加额外的参数，即 <code>from1, to1, from2, to2, ...</code>。

* [_`Array`_.**`reverse()`**](array.md#arrayreverse)

    反转数组中元素的顺序。

* [_`Array`_.**`slice(start, end)`**](array.md#arrayslice)

    返回数组的一部分：从 <code>start</code> 下标开始，到 <code>end</code> 下标之前（不包含 <code>end</code>）结束。下标从 0 开始。

* [_`Array`_.**`smartJoin(keyField, nameField)`**](array.md#arraysmartjoin)

    由一个对象数组创建一个对象。数组中的每个对象为返回的对象提供一个字段：每个对象必须包含一个"键名"字段和一个"值"字段。

* [_`Array`_.**`sort(compareFunction(a, b)?)`**](array.md#arraysort)

    对数组元素重新排序。按字母顺序排序字符串时无需参数；对数字或对象排序请参考示例。

* [_`Array`_.**`sum()`**](array.md#arraysum)

    返回数组中所有数字的总和。如果含有非数字，会抛出错误。

* [_`Array`_.**`toJsonString()`**](array.md#arraytojsonstring)

    把数组转换成 JSON 字符串。等同于 JavaScript 的 <code>JSON.stringify()</code>。

* [_`Array`_.**`toSpliced(start, deleteCount, elem1, ....., elemN)`**](array.md#arraytospliced)

    在指定位置添加和/或删除数组元素。

另请参见 <code>slice()</code> 和 <code>append()</code>。

* [_`Array`_.**`toString()`**](array.md#arraytostring)

    把数组转换成字符串，值之间用逗号分隔。想用其他分隔符，请用 <code>join()</code>。

* [_`Array`_.**`union(otherArray)`**](array.md#arrayunion)

    把两个数组连接起来，然后移除重复元素。

* [_`Array`_.**`unique()`**](array.md#arrayunique)

    移除数组中重复的元素。


## 二进制文件（BinaryFile）

* [`binaryFile`.**`directory`**](binaryfile.md#binaryfiledirectory)

    文件所在目录的路径。用于区分不同目录下的同名文件。如果 n8n 配置为把文件存进数据库，则该值不会被设置。

* [`binaryFile`.**`fileExtension`**](binaryfile.md#binaryfilefileextension)

    文件名后面的扩展名（例如 <code>txt</code>）。

* [`binaryFile`.**`fileName`**](binaryfile.md#binaryfilefilename)

    文件名（含扩展名）。

* [`binaryFile`.**`fileSize`**](binaryfile.md#binaryfilefilesize)

    表示文件大小的字符串。

* [`binaryFile`.**`fileType`**](binaryfile.md#binaryfilefiletype)

    表示文件类型的字符串，例如 <code>image</code>。对应 MIME 类型的第一部分。

* [`binaryFile`.**`id`**](binaryfile.md#binaryfileid)

    文件的唯一 ID。当文件存储在磁盘或 S3 等存储服务中时，用它来标识文件。

* [`binaryFile`.**`mimeType`**](binaryfile.md#binaryfilemimetype)

    表示文件内容格式的字符串，例如 <code>image/jpeg</code>。


## 布尔值（Boolean）

* [_`Boolean`_.**`isEmpty()`**](boolean.md#booleanisempty)

    对所有布尔值都返回 <code>false</code>。对 <code>null</code> 返回 <code>true</code>。

* [_`Boolean`_.**`toNumber()`**](boolean.md#booleantonumber)

    把 <code>true</code> 转换成 1，<code>false</code> 转换成 0。

* [_`Boolean`_.**`toString()`**](boolean.md#booleantostring)

    把 <code>true</code> 转换成字符串 'true'，<code>false</code> 转换成字符串 'false'。


## 自定义数据（CustomData）

* [`$execution.customData`.**`get(key)`**](customdata.md#executioncustomdataget)

    返回指定键（key）下存储的自定义执行数据。<a href="../../../understand-workflows/understand-executions/customize-executions-data.md">更多信息</a>

* [`$execution.customData`.**`getAll()`**](customdata.md#executioncustomdatagetall)

    返回当前执行中设置的所有自定义数据键值对。<a href="../../../understand-workflows/understand-executions/customize-executions-data.md">更多信息</a>

* [`$execution.customData`.**`set(key, value)`**](customdata.md#executioncustomdataset)

    在指定的键下存储自定义执行数据。可用它方便地按该数据筛选执行记录。<a href="../../../understand-workflows/understand-executions/customize-executions-data.md">更多信息</a>

* [`$execution.customData`.**`setAll(obj)`**](customdata.md#executioncustomdatasetall)

    为本次执行设置多组自定义数据键值对。可用它方便地按该数据筛选执行记录。<a href="../../../understand-workflows/understand-executions/customize-executions-data.md">更多信息</a>


## 日期（Date）

* [_`Date`_.**`toDateTime()`**](date.md#datetodatetime)

    把 JavaScript 的 Date 转换成 Luxon 的 DateTime。两者包含的信息相同，但 DateTime 更容易操作。


## 日期时间（DateTime）

* [_`DateTime`_.**`day`**](datetime.md#datetimeday)

    一个月中的第几天（1-31）。

* [_`DateTime`_.**`diffTo(otherDateTime, unit)`**](datetime.md#datetimediffto)

    返回两个 DateTime 之间的差值，单位由 <code>unit</code> 指定。

* [_`DateTime`_.**`diffToNow(unit)`**](datetime.md#datetimedifftonow)

    返回当前时刻与该 DateTime 之间的差值，单位由 <code>unit</code> 指定。想要文字化的表示，请用 <code>toRelative()</code>。

* [_`DateTime`_.**`endOf(unit, opts)`**](datetime.md#datetimeendof)

    把 DateTime 向上取整到某个单位的末尾，例如当月最后一天（月末）。

* [_`DateTime`_.**`equals(other)`**](datetime.md#datetimeequals)

    如果两个 DateTime 表示完全相同的时刻且位于相同时区，返回 <code>true</code>。想要宽松一点的比较，请用 <code>hasSame()</code>。

* [_`DateTime`_.**`extract(unit?)`**](datetime.md#datetimeextract)

    提取日期或时间的一部分（例如月份），以数字形式返回。想提取文字名称，请用 <code>format()</code>。

* [_`DateTime`_.**`format(fmt)`**](datetime.md#datetimeformat)

    按指定的格式把 DateTime 转换成字符串。<a href="https://moment.github.io/luxon/#/formatting?id=table-of-tokens">格式指南</a>。常见的格式用 <code>toLocaleString()</code> 可能更简单。

* [_`DateTime`_.**`hasSame(otherDateTime, unit)`**](datetime.md#datetimehassame)

    如果两个 DateTime 在指定的单位上相同，返回 <code>true</code>。时区会被忽略（只比较本地时间），所以必要时先用 <code>toUTC()</code> 转换。

* [_`DateTime`_.**`hour`**](datetime.md#datetimehour)

    一天中的第几个小时（0-23）。

* [_`DateTime`_.**`isBetween(date1, date2)`**](datetime.md#datetimeisbetween)

    如果该 DateTime 位于指定的两个时刻之间，返回 <code>true</code>。

* [_`DateTime`_.**`isInDST`**](datetime.md#datetimeisindst)

    该 DateTime 是否处于夏令时（daylight saving time）。

* [_`DateTime`_.**`locale`**](datetime.md#datetimelocale)

    DateTime 的语言区域（locale），例如 'en-GB'。格式化 DateTime 时使用该区域设置。

* [_`DateTime`_.**`millisecond`**](datetime.md#datetimemillisecond)

    一秒中的第几毫秒（0-999）。

* [_`DateTime`_.**`minus(n, unit?)`**](datetime.md#datetimeminus)

    从 DateTime 减去一段指定的时间。

* [_`DateTime`_.**`minute`**](datetime.md#datetimeminute)

    一小时中的第几分钟（0-59）。

* [_`DateTime`_.**`month`**](datetime.md#datetimemonth)

    月份（1-12）。

* [_`DateTime`_.**`monthLong`**](datetime.md#datetimemonthlong)

    月份的完整英文名称，例如 'October'。如果没有指定 locale，默认使用系统的区域设置。

* [_`DateTime`_.**`monthShort`**](datetime.md#datetimemonthshort)

    月份的英文缩写名称，例如 'Oct'。如果没有指定 locale，默认使用系统的区域设置。

* [_`DateTime`_.**`plus(n, unit?)`**](datetime.md#datetimeplus)

    给 DateTime 加上一段指定的时间。

* [_`DateTime`_.**`quarter`**](datetime.md#datetimequarter)

    一年中的第几个季度（1-4）。

* [_`DateTime`_.**`second`**](datetime.md#datetimesecond)

    一分钟中的第几秒（0-59）。

* [_`DateTime`_.**`set(values)`**](datetime.md#datetimeset)

    为 DateTime 的指定单位赋新值。想取整日期，还可以参考 <code>startOf()</code> 和 <code>endOf()</code>。

* [_`DateTime`_.**`setLocale(locale)`**](datetime.md#datetimesetlocale)

    设置区域（locale），决定 DateTime 的语言和格式。生成 DateTime 的文字表示时（例如用 <code>format()</code> 或 <code>toLocaleString()</code>）很有用。

* [_`DateTime`_.**`setZone(zone, opts)`**](datetime.md#datetimesetzone)

    把 DateTime 转换到指定的时区。除非在参数中另行指定，DateTime 仍表示同一时刻。另请参见 <code>toLocal()</code> 和 <code>toUTC()</code>。

* [_`DateTime`_.**`startOf(unit, opts)`**](datetime.md#datetimestartof)

    把 DateTime 向下取整到某个单位的开始，例如当月的第一天（月初）。

* [_`DateTime`_.**`toISO(opts)`**](datetime.md#datetimetoiso)

    返回符合 ISO 8601 标准的 DateTime 字符串表示。

* [_`DateTime`_.**`toLocal()`**](datetime.md#datetimetolocal)

    把 DateTime 转换到工作流的本地时区。除非在参数中另行指定，DateTime 仍表示同一时刻。工作流的时区可以在工作流设置中修改。

* [_`DateTime`_.**`toLocaleString(formatOpts)`**](datetime.md#datetimetolocalestring)

    返回表示该 DateTime 的本地化字符串，即使用与其 locale 对应的语言和格式。如果没有指定 locale，默认使用系统的区域设置。

* [_`DateTime`_.**`toMillis()`**](datetime.md#datetimetomillis)

    返回 Unix 时间戳（毫秒），即自 1970 年 1 月 1 日以来经过的毫秒数。

* [_`DateTime`_.**`toRelative(options)`**](datetime.md#datetimetorelative)

    返回相对于"现在"的文字化时间，例如 'in two days'（两天后）。默认向下取整。

* [_`DateTime`_.**`toSeconds()`**](datetime.md#datetimetoseconds)

    返回 Unix 时间戳（秒），即自 1970 年 1 月 1 日以来经过的秒数。

* [_`DateTime`_.**`toString()`**](datetime.md#datetimetostring)

    返回 DateTime 的字符串表示。类似 <code>toISO()</code>。想要更多格式选项，请参考 <code>format()</code> 或 <code>toLocaleString()</code>。

* [_`DateTime`_.**`toUTC(offset, opts)`**](datetime.md#datetimetoutc)

    把 DateTime 转换到 UTC 时区。除非在参数中另行指定，DateTime 仍表示同一时刻。转换到其他时区请用 <code>setZone()</code>。

* [_`DateTime`_.**`weekday`**](datetime.md#datetimeweekday)

    星期几。1 是星期一，7 是星期日。

* [_`DateTime`_.**`weekdayLong`**](datetime.md#datetimeweekdaylong)

    星期几的完整英文名称，例如 'Wednesday'。如果没有指定 locale，默认使用系统的区域设置。

* [_`DateTime`_.**`weekdayShort`**](datetime.md#datetimeweekdayshort)

    星期几的英文缩写，例如 'Wed'。如果没有指定 locale，默认使用系统的区域设置。

* [_`DateTime`_.**`weekNumber`**](datetime.md#datetimeweeknumber)

    一年中的第几周（约 1-52）。

* [_`DateTime`_.**`year`**](datetime.md#datetimeyear)

    年份。

* [_`DateTime`_.**`zone`**](datetime.md#datetimezone)

    与该 DateTime 关联的时区。


## 执行数据（ExecData）

* [`$exec`.**`customData`**](execdata.md#execcustomdata)

    设置和获取自定义执行数据（例如用来筛选执行记录）。你也可以用「Execution Data（执行数据）」节点来做这件事。<a href="../../../understand-workflows/understand-executions/customize-executions-data.md">更多信息</a>

* [`$exec`.**`id`**](execdata.md#execid)

    当前工作流执行的 ID。

* [`$exec`.**`mode`**](execdata.md#execmode)

    取值有三种：<code>test</code>（表示这次执行是由在 n8n 里点击按钮触发的）或 <code>production</code>（表示这次执行是自动触发的）。运行工作流测试时，会使用 <code>evaluation</code>。

* [`$exec`.**`resumeFormUrl`**](execdata.md#execresumeformurl)

    访问由 [「Wait（等待）」节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.wait) 生成的表单的 URL。

* [`$exec`.**`resumeUrl`**](execdata.md#execresumeurl)

    用于恢复在 [「Wait（等待）」节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.wait) 处等待的工作流的 webhook URL。


## HTTP 响应（HTTPResponse）

* [`$response`.**`body`**](httpresponse.md#responsebody)

    上一次 HTTP 调用的响应对象主体。仅在「HTTP Request（HTTP 请求）」节点中可用。

* [`$response`.**`headers`**](httpresponse.md#responseheaders)

    上一次 HTTP 调用返回的响应头。仅在「HTTP Request（HTTP 请求）」节点中可用。

* [`$response`.**`statusCode`**](httpresponse.md#responsestatuscode)

    上一次 HTTP 调用返回的 HTTP 状态码。仅在「HTTP Request（HTTP 请求）」节点中可用。

* [`$response`.**`statusMessage`**](httpresponse.md#responsestatusmessage)

    关于请求状态的可选消息。仅在「HTTP Request（HTTP 请求）」节点中可用。


## 条目（Item）

* [`$item`.**`binary`**](item.md#itembinary)

    返回条目包含的任何二进制数据。

* [`$item`.**`json`**](item.md#itemjson)

    返回条目包含的 JSON 数据。<a href="../../understand-n8ns-data-structure.md">更多信息</a>


## 节点输入数据（NodeInputData）

* [`$input`.**`all(branchIndex?, runIndex?)`**](nodeinputdata.md#inputall)

    返回当前节点输入条目的数组。

* [`$input`.**`first(branchIndex?, runIndex?)`**](nodeinputdata.md#inputfirst)

    返回当前节点的第一个输入条目。

* [`$input`.**`item`**](nodeinputdata.md#inputitem)

    返回当前正在被处理的输入条目。

* [`$input`.**`last(branchIndex?, runIndex?)`**](nodeinputdata.md#inputlast)

    返回当前节点的最后一个输入条目。

* [`$input`.**`params`**](nodeinputdata.md#inputparams)

    当前节点的配置设置。也就是你在节点里填写的那些参数（例如它的操作 operation）。


## 节点输出数据（NodeOutputData）

* [`$()`.**`all(branchIndex?, runIndex?)`**](nodeoutputdata.md#all)

    返回节点输出条目的数组。

* [`$()`.**`first(branchIndex?, runIndex?)`**](nodeoutputdata.md#first)

    返回节点输出的第一个条目。

* [`$()`.**`isExecuted`**](nodeoutputdata.md#isexecuted)

    如果节点已执行，为 <code>true</code>，否则为 <code>false</code>。

* [`$()`.**`item`**](nodeoutputdata.md#item)

    返回匹配的条目，即当初用来生成当前节点当前条目的那一条。<a href="../../reference-data/link-data-items/README.md">更多信息</a>

* [`$()`.**`itemMatching(currentItemIndex?)`**](nodeoutputdata.md#itemmatching)

    返回匹配的条目，即在当前节点中、用来生成指定下标处条目的那一条。<a href="../../reference-data/link-data-items/README.md">更多信息</a>

* [`$()`.**`last(branchIndex?, runIndex?)`**](nodeoutputdata.md#last)

    返回节点输出的最后一个条目。

* [`$()`.**`params`**](nodeoutputdata.md#params)

    指定节点的配置设置。也就是你在节点界面里填写的那些参数（例如它的操作 operation）。


## 数字（Number）

* [_`Number`_.**`abs()`**](number.md#numberabs)

    返回数字的绝对值，即去掉负号。

* [_`Number`_.**`ceil()`**](number.md#numberceil)

    向上取整到下一个整数。

* [_`Number`_.**`floor()`**](number.md#numberfloor)

    向下取整到最近的整数。

* [_`Number`_.**`format(locale?, options?)`**](number.md#numberformat)

    返回表示该数字的格式化字符串。适合按特定语言或货币进行格式化。等同于 <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat”><code>Intl.NumberFormat()</code></a>。

* [_`Number`_.**`isEmpty()`**](number.md#numberisempty)

    对所有数字都返回 <code>false</code>。对 <code>null</code> 返回 <code>true</code>。

* [_`Number`_.**`isEven()`**](number.md#numberiseven)

    如果数字是偶数，返回 <code>true</code>。如果数字不是整数，会抛出错误。

* [_`Number`_.**`isInteger()`**](number.md#numberisinteger)

    如果数字是整数，返回 <code>true</code>。

* [_`Number`_.**`isOdd()`**](number.md#numberisodd)

    如果数字是奇数，返回 <code>true</code>。如果数字不是整数，会抛出错误。

* [_`Number`_.**`round(decimalPlaces?)`**](number.md#numberround)

    把数字四舍五入到最近的整数（或指定的小数位数）。

* [_`Number`_.**`toBoolean()`**](number.md#numbertoboolean)

    把数字转换成布尔值。<code>0</code> 变成 <code>false</code>，其他值都变成 <code>true</code>。

* [_`Number`_.**`toDateTime(format?)`**](number.md#numbertodatetime)

    把数字时间戳转换成 DateTime。如果时间戳不是毫秒单位，必须指定其格式。使用 n8n（或工作流设置）中的时区。

* [_`Number`_.**`toLocaleString(locales?, options?)`**](number.md#numbertolocalestring)

    返回表示该数字的本地化字符串，即使用与其 locale 对应的语言和格式。如果没有指定 locale，默认使用系统的区域设置。

* [_`Number`_.**`toString(radix?)`**](number.md#numbertostring)

    把数字转换成简单的文本表示。想要更多格式选项，请参考 <code>toLocaleString()</code>。


## 对象（Object）

* [_`Object`_.**`compact()`**](object.md#objectcompact)

    移除所有值为空的字段，即值为 <code>null</code> 或 <code>""</code> 的字段。

* [_`Object`_.**`hasField(name)`**](object.md#objecthasfield)

    如果存在名为 <code>name</code> 的字段，返回 <code>true</code>。只检查顶层键。比较区分大小写。

* [_`Object`_.**`isEmpty()`**](object.md#objectisempty)

    如果对象没有设置任何键（字段），或是 <code>null</code>，返回 <code>true</code>。

* [_`Object`_.**`isNotEmpty()`**](object.md#objectisnotempty)

    如果对象至少设置了一个键（字段），返回 <code>true</code>。

* [_`Object`_.**`keepFieldsContaining(value)`**](object.md#objectkeepfieldscontaining)

    移除值不完全匹配给定 <code>value</code> 的字段。比较区分大小写。非字符串的字段总是会被移除。

* [_`Object`_.**`keys()`**](object.md#objectkeys)

    返回一个数组，包含对象的所有字段名（键）。等同于 JavaScript 的 <code>Object.keys(obj)</code>。

* [_`Object`_.**`merge(otherObject)`**](object.md#objectmerge)

    把两个对象合并成一个。如果某个键（字段名）在两个对象中都存在，使用第一个（基础）对象中的值。

* [_`Object`_.**`removeField(key)`**](object.md#objectremovefield)

    从对象中移除一个字段。等同于 JavaScript 的 <code>delete</code>。

* [_`Object`_.**`removeFieldsContaining(value)`**](object.md#objectremovefieldscontaining)

    移除值部分匹配给定 <code>value</code> 的键（字段）。比较区分大小写。非字符串的字段总是会被保留。

* [_`Object`_.**`toJsonString()`**](object.md#objecttojsonstring)

    把对象转换成 JSON 字符串。类似 JavaScript 的 <code>JSON.stringify()</code>。

* [_`Object`_.**`urlEncode()`**](object.md#objecturlencode)

    根据对象的键和值生成 URL 参数字符串。只支持顶层键。

* [_`Object`_.**`values()`**](object.md#objectvalues)

    返回一个数组，包含对象所有字段的值。等同于 JavaScript 的 <code>Object.values(obj)</code>。


## 前置节点数据（PrevNodeData）

* [**`name`**](prevnodedata.md#name)

    当前输入来源节点的名称。

如果有多个输入连接（例如在「Merge（合并）」节点中），始终使用当前节点的第一个输入连接器。

* [**`outputIndex`**](prevnodedata.md#outputindex)

    当前输入来源的输出连接器的下标。当前置节点有多个输出（例如「If（如果）」或「Switch（开关）」节点）时使用。

如果有多个输入连接（例如在「Merge（合并）」节点中），始终使用当前节点的第一个输入连接器。

* [**`runIndex`**](prevnodedata.md#runindex)

    生成当前输入的前置节点的运行次数。

如果有多个输入连接（例如在「Merge（合并）」节点中），始终使用当前节点的第一个输入连接器。


## 根（Root）

* [**`$(nodeName)`**](root.md#)

    返回指定节点的数据。

* [**`$binary`**](root.md#binary)

    返回当前节点的当前条目收到的任何二进制输入数据。是 <code>$input.item.binary</code> 的简写。

* [**`$execution`**](root.md#execution)

    获取或设置当前执行的元数据。

* [**`$fromAI(key, description?, type?, defaultValue?)`**](root.md#fromai)

    当需要由大语言模型（LLM）来提供某个节点参数的值时使用。建议提供描述以获得更好的结果。

* [**`$if(condition, valueIfTrue, valueIfFalse)`**](root.md#if)

    根据 <code>condition</code> 返回两个值之一。类似 JavaScript 中的 <code>?</code> 运算符。

* [**`$ifEmpty(value, valueIfEmpty)`**](root.md#ifempty)

    如果第一个参数不为空，返回第一个参数；否则返回第二个参数。以下情况视为「空」：<code>""</code>、<code>[]</code>、<code>{}</code>、<code>null</code>、<code>undefined</code>。

* [**`$input`**](root.md#input)

    当前节点的输入数据。

* [**`$itemIndex`**](root.md#itemindex)

    当前正在被处理的条目在输入条目列表中的位置。

* [**`$jmespath(obj, expression)`**](root.md#jmespath)

    使用 <a href="/code/cookbook/jmespath/">JMESPath</a> 表达式从对象（或对象数组）中提取数据。适合查询复杂的嵌套对象。如果表达式无效，返回 <code>undefined</code>。

* [**`$json`**](root.md#json)

    返回当前节点的当前条目的 JSON 输入数据。是 <code>$input.item.json</code> 的简写。<a href="../../understand-n8ns-data-structure.md">更多信息</a>

* [**`$max(num1, num2, …, numN)`**](root.md#max)

    返回给定数字中的最大值。

* [**`$min(num1, num2, …, numN)`**](root.md#min)

    返回给定数字中的最小值。

* [**`$nodeVersion`**](root.md#nodeversion)

    当前节点的版本（显示在节点设置面板底部）。

* [**`$now`**](root.md#now)

    表示当前时刻的 DateTime。

使用工作流的时区（可以在工作流设置中修改）。

* [**`$pageCount`**](root.md#pagecount)

    节点已获取的结果页数。仅在「HTTP Request（HTTP 请求）」节点中可用。

* [**`$parameter`**](root.md#parameter)

    当前节点的配置设置。也就是你在节点界面里填写的那些参数（例如它的操作 operation）。

* [**`$prevNode`**](root.md#prevnode)

    关于当前输入来源节点的信息。

在「Merge（合并）」节点中，始终使用第一个输入连接器。

* [**`$request`**](root.md#request)

    节点上次运行时发送的请求对象。仅在「HTTP Request（HTTP 请求）」节点中可用。

* [**`$response`**](root.md#response)

    上一次 HTTP 调用返回的响应。仅在「HTTP Request（HTTP 请求）」节点中可用。

* [**`$runIndex`**](root.md#runindex)

    当前节点执行的当前运行次数下标。从 0 开始。

* [**`$secrets`**](root.md#secrets)

    来自 <a href="https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/external-secrets">外部密钥库（external secrets vault）</a> 的密钥（如果已配置）。密钥值永远不会显示给用户。仅在凭据字段中可用。

* [**`$today`**](root.md#today)

    表示当天开始（午夜零点）的 DateTime。

使用实例的时区（除非在工作流设置中被覆盖）。

* [**`$vars`**](root.md#vars)

    工作流可用的 <a href="../../../code-in-n8n/define-custom-variables.md">变量（variables）</a>。

* [**`$workflow`**](root.md#workflow)

    当前工作流的信息。


## 字符串（String）

* [_`String`_.**`base64Encode()`**](string.md#stringbase64decode)

    把纯文本转换成 base64 编码的字符串。

* [_`String`_.**`base64Encode()`**](string.md#stringbase64encode)

    把 base64 编码的字符串转换成纯文本。

{% hint style="info" %}
**注意：官方文档此处疑似笔误**

上面两条的链接锚点分别是 `#stringbase64decode`（解码）和 `#stringbase64encode`（编码），但方法名都写成了 `base64Encode()`。按常理，第一条应该是 **`base64Decode()`**（base64 → 明文），第二条才是 `base64Encode()`（明文 → base64）。使用时请以实际功能为准。
{% endhint %}

* [_`String`_.**`concat(string1, string2?, ..., stringN?)`**](string.md#stringconcat)

    把一个或多个字符串连接到基础字符串的末尾。也可以改用 <code>+</code> 运算符（见示例）。

* [_`String`_.**`extractDomain()`**](string.md#stringextractdomain)

    如果字符串是邮箱地址或 URL，返回其域名（找不到则返回 <code>undefined</code>）。

如果字符串还包含其他内容，请先试试 <code>extractEmail()</code> 或 <code>extractUrl()</code>。

* [_`String`_.**`extractEmail()`**](string.md#stringextractemail)

    提取字符串中找到的第一个邮箱地址。找不到则返回 <code>undefined</code>。

* [_`String`_.**`extractUrl()`**](string.md#stringextracturl)

    提取字符串中找到的第一个 URL。找不到则返回 <code>undefined</code>。只识别完整的 URL，例如以 <code>http</code> 开头的。

* [_`String`_.**`extractUrlPath()`**](string.md#stringextracturlpath)

    返回 URL 中域名之后的部分，找不到 URL 则返回 <code>undefined</code>。

如果字符串还包含其他内容，请先试试 <code>extractUrl()</code>。

* [_`String`_.**`hash(algo?)`**](string.md#stringhash)

    用指定的算法对字符串进行哈希处理。未指定时默认使用 md5。

* [_`String`_.**`includes(searchString, start?)`**](string.md#stringincludes)

    如果字符串包含 <code>searchString</code>，返回 <code>true</code>。区分大小写。

* [_`String`_.**`indexOf(searchString, start?)`**](string.md#stringindexof)

    返回 <code>searchString</code> 在基础字符串中第一次出现的位置（下标），找不到则返回 -1。区分大小写。

* [_`String`_.**`isDomain()`**](string.md#stringisdomain)

    如果字符串是一个域名，返回 <code>true</code>。

* [_`String`_.**`isEmail()`**](string.md#stringisemail)

    如果字符串是一个邮箱地址，返回 <code>true</code>。

* [_`String`_.**`isEmpty()`**](string.md#stringisempty)

    如果字符串没有字符，或是 <code>null</code>，返回 <code>true</code>。

* [_`String`_.**`isNotEmpty()`**](string.md#stringisnotempty)

    如果字符串至少有一个字符，返回 <code>true</code>。

* [_`String`_.**`isNumeric()`**](string.md#stringisnumeric)

    如果字符串表示一个数字，返回 <code>true</code>。

* [_`String`_.**`isUrl()`**](string.md#stringisurl)

    如果字符串是一个有效的 URL，返回 <code>true</code>。

* [_`String`_.**`length`**](string.md#stringlength)

    字符串中的字符数量。

* [_`String`_.**`match(regexp)`**](string.md#stringmatch)

    用 <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>正则表达式</a> 匹配字符串。返回包含第一个匹配项的数组；如果正则表达式设置了 <code>g</code> 标志，则返回所有匹配项。找不到匹配时返回 <code>null</code>。

如果想检查文本是否存在，请考虑用 <code>includes()</code>。

* [_`String`_.**`parseJson()`**](string.md#stringparsejson)

    返回字符串所表示的 JavaScript 对象或值；如果字符串不是有效的 JSON，返回 <code>undefined</code>。不支持单引号 JSON。

* [_`String`_.**`quote(mark?)`**](string.md#stringquote)

    用引号包裹字符串，并对字符串中已有的引号进行转义。在构造 JSON、SQL 等内容时很有用。

* [_`String`_.**`removeMarkdown()`**](string.md#stringremovemarkdown)

    移除字符串中的所有 Markdown 格式。也会移除 HTML 标签。

* [_`String`_.**`removeTags()`**](string.md#stringremovetags)

    移除字符串中的标签，例如 HTML 或 XML 标签。

* [_`String`_.**`replace(pattern, replacement)`**](string.md#stringreplace)

    返回替换了 <code>pattern</code> 第一次出现处的字符串。

要替换所有出现处，请用 <code>replaceAll()</code>。

* [_`String`_.**`replaceAll(pattern, replacement)`**](string.md#stringreplaceall)

    返回替换了 <code>pattern</code> 所有出现处的字符串。

* [_`String`_.**`replaceSpecialChars()`**](string.md#stringreplacespecialchars)

    把字符串中的特殊字符替换成最接近的 ASCII 字符。

* [_`String`_.**`search(regexp)`**](string.md#stringsearch)

    返回模式在字符串中第一次出现的位置（下标），找不到则返回 -1。模式使用 <a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>正则表达式</a> 指定。想用普通文本，请参考 <code>indexOf()</code>。

* [_`String`_.**`slice(start, end?)`**](string.md#stringslice)

    提取字符串中指定位置的片段。想更高级的提取，请参考 <code>match()</code>。

* [_`String`_.**`split(separator?, limit?)`**](string.md#stringsplit)

    把字符串按分隔符拆分成子字符串数组。每次都在 <code>separator</code> 处拆分，分隔符不包含在输出中。

与数组上的 <code>join()</code> 正好相反。

* [_`String`_.**`startsWith(searchString, start?)`**](string.md#stringstartswith)

    如果字符串以 <code>searchString</code> 开头，返回 <code>true</code>。区分大小写。

* [_`String`_.**`substring(start, end?)`**](string.md#stringsubstring)

    提取字符串中指定位置的片段。想更高级的提取，请参考 <code>match()</code>。

* [_`String`_.**`toBoolean()`**](string.md#stringtoboolean)

    把字符串转换成布尔值。<code>0</code>、<code>false</code> 和 <code>no</code> 解析为 <code>false</code>，其他值解析为 <code>true</code>。不区分大小写。

* [_`String`_.**`toDateTime()`**](string.md#stringtodatetime)

    把字符串转换成 DateTime。适合做进一步的转换。支持的字符串格式：ISO 8601、HTTP、RFC2822、SQL 和毫秒单位的 Unix 时间戳。

要解析其他格式，请使用 <a href=”https://moment.github.io/luxon/api-docs/index.html#datetimefromformat”><code>DateTime.fromFormat()</code></a>。

* [_`String`_.**`toJsonString()`**](string.md#stringtojsonstring)

    把字符串准备好以便插入 JSON 对象：转义引号和特殊字符（例如换行），并用引号包裹字符串。

等同于 JavaScript 的 <code>JSON.stringify()</code>。

* [_`String`_.**`toLowerCase()`**](string.md#stringtolowercase)

    把字符串中的所有字母转换成小写。

* [_`String`_.**`toNumber()`**](string.md#stringtonumber)

    把表示数字的字符串转换成数字。如果字符串不是以有效数字开头，会抛出错误。

* [_`String`_.**`toSentenceCase()`**](string.md#stringtosentencecase)

    把字符串的大小写改成句子格式（sentence case）：每个句子的首字母大写，其余字母小写。

* [_`String`_.**`toSnakeCase()`**](string.md#stringtosnakecase)

    把字符串格式改成蛇形命名（snake case）：空格和破折号替换为 <code>_</code>，移除符号，所有字母转小写。

* [_`String`_.**`toTitleCase()`**](string.md#stringtotitlecase)

    把字符串的大小写改成标题格式（title case）：每个单词的首字母大写，其余字母保持不变。短介词和连词不大写（例如 'a'、'the'）。

* [_`String`_.**`toUpperCase()`**](string.md#stringtouppercase)

    把字符串中的所有字母转换成大写。

* [_`String`_.**`trim()`**](string.md#stringtrim)

    移除字符串两端的空白字符。空白包括换行、制表符、空格等。

* [_`String`_.**`urlDecode(allChars?)`**](string.md#stringurldecode)

    解码 URL 编码的字符串：把 <code>%XX</code> 形式的字符编码替换成对应的字符。

* [_`String`_.**`urlEncode(allChars?)`**](string.md#stringurlencode)

    对字符串进行编码，使其可以在 URL 中使用：空格和特殊字符被替换为 <code>%XX</code> 形式的编码。


## 工作流数据（WorkflowData）

* [`$workflow`.**`active`**](workflowdata.md#workflowactive)

    工作流是否处于激活状态。

* [`$workflow`.**`id`**](workflowdata.md#workflowid)

    工作流 ID。也可以在工作流的 URL 中找到。

* [`$workflow`.**`name`**](workflowdata.md#workflowname)

    工作流的名称，显示在编辑器顶部。
