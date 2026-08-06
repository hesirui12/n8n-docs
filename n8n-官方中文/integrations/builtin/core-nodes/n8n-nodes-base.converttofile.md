---
title: 转换为文件（Convert to File）
description: >-
  n8n 工作流自动化平台中「转换为文件」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: 转换为文件
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.converttofile.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.converttofile
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.converttofile
layout:
  description:
    visible: false
---

# 转换为文件（Convert to File）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：n8n 里流转的数据默认是 JSON 格式，但很多系统要的是「文件」，比如 Excel、CSV、PDF 或者日历文件。Convert to File 节点就是「数据变文件」的转换器：把输入的 JSON 数据打包成一个二进制文件，输出给后面的节点用。举个实际例子——你想把数据库里的订单数据发到邮件里当附件，就可以先让这个节点把数据变成 CSV 或 XLSX 文件，再用发邮件的节点把文件挂上。
{% endhint %}

使用「转换为文件」（Convert to File）节点，把输入数据输出成文件。这会把输入的 JSON 数据转换为二进制（binary）格式。

{% hint style="info" %}
**从文件提取（Extract From File）**

如果想把文件里的数据提取出来、转换成 JSON，请使用 [从文件提取（Extract from File）](n8n-nodes-base.extractfromfile.md) 节点——它正好是「转换为文件」的反向操作。
{% endhint %}

## 操作（Operations）

* [**转换为 CSV（Convert to CSV）**](#convert-to-csv)
* [**转换为 HTML（Convert to HTML）**](#convert-to-html)
* [**转换为 ICS（Convert to ICS）**](#convert-to-ics)
* [**转换为 JSON（Convert to JSON）**](#convert-to-json)
* [**转换为 ODS（Convert to ODS）**](#convert-to-ods)
* [**转换为 RTF（Convert to RTF）**](#convert-to-rtf)
* [**转换为文本文件（Convert to Text File）**](#convert-to-text-file)
* [**转换为 XLS（Convert to XLS）**](#convert-to-xls)
* [**转换为 XLSX（Convert to XLSX）**](#convert-to-xlsx)
* [**把 Base64 字符串写入文件（Move Base64 String to File）**](#move-base64-string-to-file)

节点的参数和选项取决于你选择的操作。

{% hint style="info" %}
**小白提示（怎么选操作）**：上面列表里每个选项都是一种「输出格式」。你只需要想清楚下游要什么格式的文件：表格类数据选 CSV / XLS / XLSX / ODS；网页展示选 HTML；日程事件选 ICS；纯文本选 Text File；通用数据选 JSON；老式文字处理文档选 RTF。如果你手里只有一串 Base64 编码的文本，想把它变成真正的文件，就用最后一项 **Move Base64 String to File**。
{% endhint %}

### 转换为 CSV（Convert to CSV）

为此操作配置节点时，使用 **Put Output File in Field（把输出文件放到哪个字段）** 参数。输入输出数据中用来存放该文件的字段名称。

{% hint style="info" %}
**大白话（Put Output File in Field）**：这个参数问你「生成的文件要存在输出数据的哪个字段里」。比如你填 `file`，那么节点输出的每一条数据里就会多出一个叫 `file` 的二进制字段，里面装着生成好的文件。**CSV** 是「逗号分隔值」格式，适合存表格数据，Excel、WPS 都能直接打开。
{% endhint %}

#### 转换为 CSV 的选项（Convert to CSV options）

你还可以用这些**选项（Options）**来配置此操作：

* **File Name（文件名）**：输入生成文件的文件名。
* 如果文件的第一行是表头（字段名），打开 **Header Row（表头行）** 选项。

### 转换为 HTML（Convert to HTML）

为此操作配置节点时，使用 **Put Output File in Field（把输出文件放到哪个字段）** 参数。输入输出数据中用来存放该文件的字段名称。

{% hint style="info" %}
**大白话（HTML 文件是什么）**：HTML 就是网页的源码格式。把数据转成 HTML 文件后，可以直接用浏览器打开查看，也可以作为网页内容发布。比如把订单列表转成一张漂亮的网页表格。
{% endhint %}

#### 转换为 HTML 的选项（Convert to HTML options）

你还可以用这些**选项（Options）**来配置此操作：

* **File Name（文件名）**：输入生成文件的文件名。
* 如果文件的第一行是表头（字段名），打开 **Header Row（表头行）** 选项。

### 转换为 ICS（Convert to ICS）

* **Put Output File in Field（把输出文件放到哪个字段）**：输入输出数据中用来存放该文件的字段名称。
* **Event Title（事件标题）**：输入事件的标题。
* **Start（开始时间）**：输入事件开始日期和时间。全天事件会忽略时间部分。
* **End（结束时间）**：输入事件结束的日期和时间。全天事件会忽略时间部分。如果未设置，节点会使用开始日期作为结束日期。
* **All Day（全天）**：选择事件是否是全天事件（打开为全天）还是不是（关闭）。

{% hint style="info" %}
**大白话（ICS 是什么）**：ICS 是日历交换的标准格式，Outlook、Google 日历、苹果日历都能导入。这个操作可以把你工作流里的数据（比如「客户预约」）变成一个日历事件文件，用户下载后一点就能添加到自己的日历里。
{% endhint %}

#### 转换为 ICS 的选项（Convert to ICS options）

你还可以用这些**选项（Options）**来配置此操作：

* **File Name（文件名）**：输入生成文件的文件名。
* **Attendees（参会人）**：用这个选项给事件添加参会人。每个参会人都要填写：
	* **Name（姓名）**
	* **Email（邮箱）**
	* **RSVP（是否回复确认）**：选择参会人是否需要确认出席（打开为需要）或不需要（关闭）。
* **Busy Status（忙碌状态）**：用这个选项设置微软应用（如 Outlook）中的忙碌状态。可选择：
	* **Busy（忙碌）**
	* **Tentative（暂定）**
* **Calendar Name（日历名称）**：对于苹果和微软日历，输入事件的[日历名称](https://learn.microsoft.com/en-us/openspecs/exchange_server_protocols/ms-oxcical/1da58449-b97e-46bd-b018-a1ce576f3e6d)。
* **Description（描述）**：输入事件的描述。
* **Geolocation（地理位置）**：输入事件地点的 **Latitude（纬度）** 和 **Longitude（经度）**。
* **Location（地点）**：输入事件打算举办的地点/场馆。
* **Recurrence Rule（重复规则）**：输入一条规则来定义事件的重复模式（RRULE）。可以使用 [iCalendar.org 的 RRULE 工具](https://icalendar.org/rrule-tool.html) 来生成规则。
* **Organizer（组织者）**：输入组织者的 **Name（姓名）** 和 **Email（邮箱）**。
* **Sequence（序号）**：如果你要发送一个更新，而事件具有相同的全局唯一 ID（UID），请输入修订版本序号。
* **Status（状态）**：设置事件的状态。可选择：
	* **Confirmed（已确认）**
	* **Cancelled（已取消）**
	* **Tentative（暂定）**
* **UID（唯一标识）**：为事件输入一个全局唯一 ID（UID）。UID 应该是全球唯一的。如果你不输入，节点会自动生成一个 UID。
* **URL**：输入与该事件关联的 URL。
* **Use Workflow Timezone（使用工作流时区）**：选择是使用 UTC 时区（关闭）还是工作流的时区（打开）。在[工作流设置（Workflow Settings）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/configure-workflow-settings)中设置工作流的时区。

{% hint style="info" %}
**小白提示（时区是什么）**：时区就是「地球不同地区的时间标准」，比如中国是 UTC+8。如果事件时间涉及不同地区的人，建议打开 **Use Workflow Timezone**，让时间按工作流设置的时区计算，避免出现「上午 9 点」在不同人日历里显示不一样的情况。
{% endhint %}

### 转换为 JSON（Convert to JSON）

根据你的需要，从这些选项中选一个最合适的输出**模式（Mode）**：

* **All Items to One File（所有数据合并到一个文件）**：把所有输入数据（items）输出到同一个文件里。
* **Each Item to Separate File（每条数据单独一个文件）**：为每一条输入数据创建一个文件。

{% hint style="info" %}
**大白话（两种模式怎么选）**：如果你的数据是「一个订单列表」，想整体存成一个 JSON 文件，选第一种；如果你的数据是「几十条彼此独立的记录」，每条都要单独成一个文件（比如一条客户记录一个文件），选第二种。
{% endhint %}

#### 转换为 JSON 的选项（Convert to JSON options）

你还可以用这些**选项（Options）**来配置此操作：

* **File Name（文件名）**：输入生成文件的文件名。
* **Format（格式化）**：选择是否把 JSON 格式化得更易读（打开）还是保持紧凑（关闭）。
* **Encoding（编码）**：选择用来编码数据的字符集。默认是 **utf8**（UTF-8 是国际通用的文本编码，中文内容请保持这个默认值）。

### 转换为 ODS（Convert to ODS）

为此操作配置节点时，使用 **Put Output File in Field（把输出文件放到哪个字段）** 参数。输入输出数据中用来存放该文件的字段名称。

{% hint style="info" %}
**大白话（ODS 是什么）**：ODS 是开源办公软件（如 LibreOffice、OpenOffice）的电子表格格式，相当于「免费版的 Excel 格式」。
{% endhint %}

#### 转换为 ODS 的选项（Convert to ODS options）

你还可以用这些**选项（Options）**来配置此操作：

* **File Name（文件名）**：输入生成文件的文件名。
* **Compression（压缩）**：选择是否压缩、减小文件的输出体积。
* **Header Row（表头行）**：如果文件的第一行是表头（字段名），请打开此项。
* **Sheet Name（工作表名称）**：输入要在电子表格中创建的工作表（Sheet）名称。

### 转换为 RTF（Convert to RTF）

为此操作配置节点时，使用 **Put Output File in Field（把输出文件放到哪个字段）** 参数。输入输出数据中用来存放该文件的字段名称。

{% hint style="info" %}
**大白话（RTF 是什么）**：RTF 是「富文本格式」，是微软推出的一种跨平台文档格式，Word 等文字处理软件都能打开，常用来生成带简单格式的文档。
{% endhint %}

#### 转换为 RTF 的选项（Convert to RTF options）

你还可以用这些**选项（Options）**来配置此操作：

* **File Name（文件名）**：输入生成文件的文件名。
* 如果文件的第一行是表头（字段名），打开 **Header Row（表头行）** 选项。

### 转换为文本文件（Convert to Text File）

输入 **Text Input Field（文本输入字段）** 的名称，这个字段里包含要转换成文件的字符串。深层字段使用点号（dot-notation）表示法，例如 `level1.level2.currentKey`。

{% hint style="info" %}
**大白话（dot-notation 是什么）**：当数据是嵌套结构时，用「点」来表示层级。比如数据是 `{level1: {level2: {currentKey: "你好"}}}`，想取最里面的 `currentKey`，就填 `level1.level2.currentKey`，节点就知道去哪一层取值了。
{% endhint %}

#### 转换为文本文件的选项（Convert to Text File options）

你还可以用这些**选项（Options）**来配置此操作：

* **File Name（文件名）**：输入生成文件的文件名。
* **Encoding（编码）**：选择用来编码数据的字符集。默认是 **utf8**。

### 转换为 XLS（Convert to XLS）

为此操作配置节点时，使用 **Put Output File in Field（把输出文件放到哪个字段）** 参数。输入输出数据中用来存放该文件的字段名称。

{% hint style="info" %}
**大白话（XLS 和 XLSX 的区别）**：XLS 是 Excel 97-2003 的旧格式，XLSX 是 2007 以后的新格式。新版本的 Excel 默认用 XLSX，文件更小、功能更多。除非对方明确要求旧格式，否则建议用 XLSX。
{% endhint %}

#### 转换为 XLS 的选项（Convert to XLS options）

你还可以用这些**选项（Options）**来配置此操作：

* **File Name（文件名）**：输入生成文件的文件名。
* **Header Row（表头行）**：如果文件的第一行是表头（字段名），请打开此项。
* **Sheet Name（工作表名称）**：输入要在电子表格中创建的工作表（Sheet）名称。

### 转换为 XLSX（Convert to XLSX）

为此操作配置节点时，使用 **Put Output File in Field（把输出文件放到哪个字段）** 参数。输入输出数据中用来存放该文件的字段名称。

#### 转换为 XLSX 的选项（Convert to XLSX options）

你还可以用这些**选项（Options）**来配置此操作：

* **File Name（文件名）**：输入生成文件的文件名。
* **Compression（压缩）**：选择是否压缩、减小文件的输出体积。
* **Header Row（表头行）**：如果文件的第一行是表头（字段名），请打开此项。
* **Sheet Name（工作表名称）**：输入要在电子表格中创建的工作表（Sheet）名称。

### 把 Base64 字符串写入文件（Move Base64 String to File）

输入 **Base64 Input Field（Base64 输入字段）** 的名称，这个字段里包含要转换成文件的 Base64 字符串。深层字段使用点号表示法，例如 `level1.level2.currentKey`。

{% hint style="info" %}
**大白话（Base64 是什么）**：Base64 是一种把「二进制数据」表示成「纯文本」的编码方式，通常是一长串大小写字母+数字+符号。很多 API 返回的图片、文件都是 Base64 字符串。这个操作就是把它还原成一个真正的文件。
{% endhint %}

#### 把 Base64 字符串写入文件的选项（Move Base64 String to File options）

你还可以用这些**选项（Options）**来配置此操作：

* **File Name（文件名）**：输入生成文件的文件名。
* **MIME Type（MIME 类型）**：输入输出文件的 MIME 类型。可参考[常见 MIME 类型列表](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)查看常见 MIME 类型及对应的文件扩展名。

{% hint style="info" %}
**小白提示（MIME 类型是什么）**：MIME 类型用来告诉程序「这个文件是什么种类」，比如图片 PNG 对应 `image/png`，PDF 对应 `application/pdf`。如果不确定，就查一下上面链接里的对照表。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 Convert to File 集成模板](https://n8n.io/integrations/convert-to-file) 或[搜索所有模板](https://n8n.io/workflows/)
