---
title: 日期与时间（Date & Time）
description: >-
  n8n 工作流自动化平台中「日期与时间」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: 日期与时间
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.datetime.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.datetime'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.datetime'
layout:
  description:
    visible: false
---

# 日期与时间（Date & Time）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：Date & Time 节点是 n8n 里的「日期时间计算器」，用来处理和转换日期时间数据。常见需求它都能干：给某个日期加上几天、算两个日期之间差多少天、把日期格式从「2024/05/01」换成「2024-05-01」、取当前时间、取日期的年份或月份、把时间向上/向下取整等。比如你的工作流想实现「会员到期前 7 天发提醒」，就需要用到它。
{% endhint %}

「日期与时间」（Date & Time）节点用来处理日期和时间数据，并将其转换为不同的格式。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ttmJg4aaEfjB4LyKpCzt/" %}

{% hint style="info" %}
**其他节点中的日期和时间**

你也可以在 Code（代码）节点以及任何节点的表达式中处理日期和时间。n8n 支持 Luxon 库来帮助你在 JavaScript 中处理日期和时间。更多信息请参阅 [使用 Luxon 处理日期和时间](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/handle-special-data-types/work-with-dates-and-times)。
{% endhint %}

## 操作（Operations）

* **Add to a Date（给日期加上）**：给一个日期加上指定的时间量。
* **Extract Part of a Date（提取日期的一部分）**：提取日期的一部分，比如年、月或日。
* **Format a Date（格式化日期）**：使用预设选项或自定义表达式，把日期转换为新格式。
* **Get Current Date（获取当前日期）**：获取当前日期，并选择是否包含当前时间。适用于触发其他流程和条件逻辑。
* **Get Time Between Dates（获取两个日期之间的时间）**：计算两个日期之间以特定单位表示的时间量。
* **Round a Date（日期取整）**：把日期向上或向下取整到你选择的最近单位，比如月、日或小时。
* **Subtract From a Date（从日期减去）**：从一个日期减去指定的时间量。

请参阅下面的小节，了解每种操作专属的参数和选项。

## 给日期加上（Add to a Date）

使用以下参数配置此操作：

* **Date to Add To（要加到的日期）**：输入你想要修改的日期。
* **Time Unit to Add（要加的时间单位）**：为 **Duration（时长）** 参数选择时间单位。
* **Duration（时长）**：输入要加到日期上的时间单位数量。
* **Output Field Name（输出字段名）**：输入用于输出新日期的字段名称。

{% hint style="info" %}
**大白话（怎么用）**：比如你想知道「3 天后是哪天」：**Date to Add To** 填今天的日期，**Time Unit to Add** 选 `days`（天），**Duration** 填 `3`，节点就会输出 3 天后的日期。如果想算「2 个月后」，就把单位换成 `months`、数量填 `2`。
{% endhint %}

### 给日期加上的选项（Add to a Date options）

此操作有一个选项：**Include Input Fields（包含输入字段）**。如果你希望在输出中包含所有输入字段，请打开此选项。如果关闭，则只输出 **Output Field Name** 及其内容。

## 提取日期的一部分（Extract Part of a Date）

使用以下参数配置此操作：

* **Date（日期）**：输入你想要取整或提取部分的日期。
* **Part（部分）**：选择你想要提取的日期部分。可选择：
    * **Year（年）**
    * **Month（月）**
    * **Week（周）**
    * **Day（日）**
    * **Hour（小时）**
    * **Minute（分钟）**
    * **Second（秒）**
* **Output Field Name（输出字段名）**：输入用于输出提取出来的日期部分的字段名称。

{% hint style="info" %}
**大白话（怎么用）**：比如你要从 `2024-05-01` 里只取「月份」，选择 **Part** 为 **Month**，输出就会是 `5`。常用于「按月份分组统计」之类的场景。
{% endhint %}

### 提取日期一部分的选项（Extract Part of a Date options）

此操作有一个选项：**Include Input Fields（包含输入字段）**。如果你希望在输出中包含所有输入字段，请打开此选项。如果关闭，则只输出 **Output Field Name** 及其内容。

## 格式化日期（Format a Date）

使用以下参数配置此操作：

* **Date（日期）**：输入你想要格式化的日期。
* **Format（格式）**：选择你想要把日期转换成的格式。可选择：
    * **Custom Format（自定义格式）**：使用 Luxon 的[特殊标记（special tokens）](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)输入你自己的格式。标记区分大小写。
    * **MM/DD/YYYY**：对于 `4 September 1986`（1986 年 9 月 4 日），此格式会把它格式化为 `09/04/1986`。
    * **YYYY/MM/DD**：对于 `4 September 1986`，此格式会把它格式化为 `1986/09/04`。
    * **MMMM DD YYYY**：对于 `4 September 1986`，此格式会把它格式化为 `September 04 1986`。
    * **MM-DD-YYYY**：对于 `4 September 1986`，此格式会把它格式化为 `09-04-1986`。
    * **YYYY-MM-DD**：对于 `4 September 1986`，此格式会把它格式化为 `1986-09-04`。
* **Output Field Name（输出字段名）**：输入用于输出格式化后的日期的字段名称。

{% hint style="info" %}
**大白话（日期格式怎么读）**：格式里的字母是占位符——`YYYY` 表示 4 位年份（如 1986），`MM` 表示 2 位月份（如 09），`DD` 表示 2 位日期（如 04）。不同地区习惯不同：中国常用 `YYYY-MM-DD`，美国常用 `MM/DD/YYYY`。**YYYY-MM-DD** 也是国际标准格式（ISO 8601），最不容易引起歧义。
{% endhint %}

### 格式化日期的选项（Format a Date options）

此操作包含以下选项：

* **Include Input Fields（包含输入字段）**：如果你希望在输出中包含所有输入字段，请打开此选项。如果关闭，则只输出 **Output Field Name** 及其内容。
* **From Date Format（输入日期格式）**：如果节点无法正确识别 **Date** 的格式，可以在这里输入该 **Date** 的格式，以便节点正确处理。使用 Luxon 的[特殊标记（special tokens）](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)输入格式。标记区分大小写。
* **Use Workflow Timezone（使用工作流时区）**：选择使用输入的时区（关闭）还是工作流的时区（打开）。

{% hint style="info" %}
**小白提示（From Date Format 什么时候用）**：如果节点提示识别不了你的日期（比如日期格式比较特殊），就用这个选项「告诉」节点输入的日期长什么样。比如输入是 `05/01/2024`，就填 `MM/DD/YYYY`。
{% endhint %}

## 获取当前日期（Get Current Date）

使用以下参数配置此操作：

* **Include Current Time（包含当前时间）**：选择是包含当前时间（打开）还是把时间设为午夜零点（关闭）。
* **Output Field Name（输出字段名）**：输入用于输出当前日期的字段名称。

### 获取当前日期的选项（Get Current Date options）

此操作包含以下选项：

* **Include Input Fields（包含输入字段）**：如果你希望在输出中包含所有输入字段，请打开此选项。如果关闭，则只输出 **Output Field Name** 及其内容。
* **Timezone（时区）**：设置要使用的时区。如果留空，节点会使用 n8n 实例的时区。

{% hint style="info" %}
**+00:00 时区**

对于 +00:00 时区，请使用 `GMT`（格林尼治标准时间）。
{% endhint %}

## 获取两个日期之间的时间（Get Time Between Dates）

使用以下参数配置此操作：

* **Start Date（开始日期）**：输入你想要比较的较早日期。
* **End Date（结束日期）**：输入你想要比较的较晚日期。
* **Units（单位）**：选择你想要计算时间差的单位。可以选多个单位。可选择：
    * **Year（年）**
    * **Month（月）**
    * **Week（周）**
    * **Day（日）**
    * **Hour（小时）**
    * **Minute（分钟）**
    * **Second（秒）**
    * **Millisecond（毫秒）**
* **Output Field Name（输出字段名）**：输入用于输出计算出的时间差的字段名称。

{% hint style="info" %}
**大白话（怎么用）**：比如算「订单从下单到发货隔了几天」：**Start Date** 填下单时间，**End Date** 填发货时间，**Units** 选 **Day**，输出就是相差的天数。想同时知道「几年几个月零几天」，就多选几个单位。
{% endhint %}

### 获取时间差的选项（Get Time Between Dates options）

「获取两个日期之间的时间」（Get Time Between Dates）操作包含 **Include Input Fields（包含输入字段）** 选项，以及 **Output as ISO String（输出为 ISO 字符串）** 选项。如果保持此选项关闭，你选择的每个单位都会返回自己的时间差计算结果，例如：

    timeDifference
    years : 1
    months : 3
    days : 13

如果你打开 **Output as ISO String** 选项，节点会把结果格式化为单个 ISO 时长字符串，例如：`P1Y3M13D`。

{% hint style="info" %}
**大白话（上面的例子）**：关闭该选项时，输出会像「字典」一样分别列出：`years: 1`（1 年）、`months: 3`（3 个月）、`days: 13`（13 天）。打开该选项后，这些信息会被合并成一行 `P1Y3M13D` 这样的标准字符串（含义见下）。
{% endhint %}

ISO 时长格式的显示形式为 `P<n>Y<n>M<n>DT<n>H<n>M<n>S`。`<n>` 是其后那个单位对应的数字。

* P = period（时长/周期）。所有 ISO 时长字符串都以它开头。
* Y = years（年）
* M = months（月）
* W = weeks（周）
* D = days（天）
* T = 日期和时间的分隔符，用来避免「月（Month）」和「分钟（Minute）」混淆
* H = hours（小时）
* M = minutes（分钟）
* S = seconds（秒）

毫秒没有自己的单位，而是以十进制秒的形式表示。例如，2.1 毫秒写作 `0.0021S`。

## 日期取整（Round a Date）

使用以下参数配置此操作：

* **Date（日期）**：输入你想要取整的日期。
* **Mode（模式）**：选择**向下取整（Round Down）** 或**向上取整（Round Up）**。
* **To Nearest（取整到）**：选择你想要取整到的单位。可选择：
    * **Year（年）**
    * **Month（月）**
    * **Week（周）**
    * **Day（日）**
    * **Hour（小时）**
    * **Minute（分钟）**
    * **Second（秒）**
* **Output Field Name（输出字段名）**：输入用于输出取整后日期的字段名称。

{% hint style="info" %}
**大白话（取整是什么意思）**：就像数字可以四舍五入，日期也可以「约到最近的整点/整天」。比如 `2024-05-01 15:37` 向上取整到小时，会变成 `2024-05-01 16:00`；向下取整到小时则变成 `2024-05-01 15:00`。常用于把记录统一归到某个时间段做统计。
{% endhint %}

### 日期取整的选项（Round a Date options）

此操作有一个选项：**Include Input Fields（包含输入字段）**。如果你希望在输出中包含所有输入字段，请打开此选项。如果关闭，则只输出 **Output Field Name** 及其内容。

## 从日期减去（Subtract From a Date）

使用以下参数配置此操作：

* **Date to Subtract From（要减去的日期）**：输入你想要减去时间的日期。
* **Time Unit to Subtract（要减的时间单位）**：为你想要减去的 **Duration（时长）** 数量选择单位。
* **Duration（时长）**：输入你想要从 **Date to Subtract From** 中减去的单位数量。
* **Output Field Name（输出字段名）**：输入用于输出取整后日期的字段名称。

{% hint style="info" %}
**大白话（怎么用）**：正好是「Add to a Date」的反向操作。比如「会员到期前 7 天提醒」：**Date to Subtract From** 填到期日，单位选 `days`，**Duration** 填 `7`，得到的就是提醒日。
{% endhint %}

### 从日期减去的选项（Subtract From a Date options）

此操作有一个选项：**Include Input Fields（包含输入字段）**。如果你希望在输出中包含所有输入字段，请打开此选项。如果关闭，则只输出 **Output Field Name** 及其内容。

## 模板和示例（Templates and examples）

[浏览 Date & Time 集成模板](https://n8n.io/integrations/date-and-time) 或[搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

「日期与时间」节点使用 [Luxon](https://moment.github.io/luxon) 库。你也可以在 [Code（代码）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/using-the-code-node) 节点和[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)中使用 Luxon。更多信息请参阅 [使用 Luxon 处理日期和时间](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/handle-special-data-types/work-with-dates-and-times)。

### 支持的日期格式（Supported date formats）

n8n 支持 Luxon 支持的[所有日期格式](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)。标记区分大小写。
