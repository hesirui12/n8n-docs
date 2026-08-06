---
title: 从文件提取（Extract From File）
description: >-
  n8n 工作流自动化平台中「从文件提取」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: 从文件提取
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile
layout:
  description:
    visible: false
---

# 从文件提取（Extract From File）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：你经常需要在工作流里接收文件——别人通过网页接口发来的 Excel、PDF，或者本地上传的文件。这些文件对 n8n 来说是「二进制」的，没法直接处理。Extract From File 节点就是「文件变数据」的转换器：把二进制文件里的内容提取出来，变成 JSON 格式，这样后面的节点就能读取、筛选、改写了。它是 Convert to File（数据变文件）节点的反向操作。
{% endhint %}

n8n 工作流中一个常见的模式是接收文件：文件可能来自 [HTTP Request 节点](n8n-nodes-base.httprequest/README.md)（用于抓取网站上的文件）、[Webhook 节点](n8n-nodes-base.webhook/README.md)（用于接收从别处发送到你工作流的文件），或者来自本地来源。以这种方式获得的数据通常是二进制格式，例如电子表格或 PDF。

「从文件提取」（Extract From File）节点从二进制格式的文件中提取数据，并将其转换为 JSON，之后工作流的其余部分就可以轻松地处理这些数据。如果想反向操作（把 JSON 转换回二进制文件类型），请参阅 [转换为文件（Convert to File）](n8n-nodes-base.converttofile.md) 节点。

## 操作（Operations）

使用 **Operations（操作）** 下拉菜单选择要从中提取数据的源文件格式。

- **从 CSV 提取（Extract From CSV）**：「逗号分隔值（CSV）」文件类型常用于表格数据。
- **从 HTML 提取（Extract From HTML）**：从标准网页 HTML 格式的文件中提取字段。
- **从 JSON 提取（Extract From JSON）**：从二进制文件中提取 JSON 数据。
- **从 ICS 提取（Extract From ICS）**：从 iCalendar 格式文件中提取字段（iCalendar 是日历事件的标准格式）。
- **从 ODS 提取（Extract From ODS）**：从 ODS 电子表格文件中提取字段。
- **从 PDF 提取（Extract From PDF）**：从 PDF（便携式文档格式）文件中提取字段。
- **从 RTF 提取（Extract From RTF）**：从 RTF（富文本格式）文件中提取字段。
- **从文本文件提取（Extract From Text File）**：从标准文本文件格式中提取字段。
- **从 XLS 提取（Extract From XLS）**：从 Microsoft Excel 文件（旧格式）中提取字段。
- **从 XLSX 提取（Extract From XLSX）**：从 Microsoft Excel 文件中提取字段。
- **把文件转换为 Base64 字符串（Move File to Base64 String）**：把二进制数据转换成方便文本处理的 [base64][] 格式。

{% hint style="info" %}
**小白提示（怎么选格式）**：先搞清楚你手里的文件是什么格式，再选对应的提取方式。大多数时候选 **Extract From CSV** 或 **Extract From XLSX** 就够了。如果收到的文件是文本形式的（比如 JSON 字符串、纯文本），选 **Extract From Text File**。
{% endhint %}

## 示例工作流（Example workflow）

在这个示例中，使用一个 Webhook 节点来触发工作流。当 CSV 文件被发送到 webhook 地址时，文件数据会被输出，并由「从文件提取」节点接收。

{% @n8n-blocks/n8n-workflow-demo content="%7B%0A%20%20%22name%22%3A%20%22Extract%20from%20file%20example%22%2C%0A%20%20%22nodes%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22httpMethod%22%3A%20%22POST%22%2C%0A%20%20%20%20%20%20%20%20%22path%22%3A%20%2206696ea7-9dc7-464a-873b-3feb095b0874%22%2C%0A%20%20%20%20%20%20%20%20%22options%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22rawBody%22%3A%20true%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.webhook%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%202%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%20-380%2C%0A%20%20%20%20%20%20%20%20-80%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%22dfbd51af-6050-47c5-a26c-74cba77f65f7%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22Webhook%22%2C%0A%20%20%20%20%20%20%22webhookId%22%3A%20%2206696ea7-9dc7-464a-873b-3feb095b0874%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22options%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22headerRow%22%3A%20false%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.extractFromFile%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%201%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%20-160%2C%0A%20%20%20%20%20%20%20%20-80%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%221b1e4643-8269-402b-83af-dfd90fd6a0b5%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22Extract%20from%20File%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22pinData%22%3A%20%7B%7D%2C%0A%20%20%22connections%22%3A%20%7B%0A%20%20%20%20%22Webhook%22%3A%20%7B%0A%20%20%20%20%20%20%22main%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22node%22%3A%20%22Extract%20from%20File%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22main%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22index%22%3A%200%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%22active%22%3A%20true%2C%0A%20%20%22settings%22%3A%20%7B%0A%20%20%20%20%22executionOrder%22%3A%20%22v1%22%0A%20%20%7D%2C%0A%20%20%22versionId%22%3A%20%22dd2bf7f1-692a-41a8-9c2e-7931de57fa13%22%2C%0A%20%20%22meta%22%3A%20%7B%0A%20%20%20%20%22instanceId%22%3A%20%221060f46e51fc7902c377ab29d7cbfb87696ddf6b3c5c27cbbb65c3cb36e21baf%22%0A%20%20%7D%2C%0A%20%20%22id%22%3A%20%229i3iDZf5MpjlJ2sh%22%2C%0A%20%20%22tags%22%3A%20%5B%5D%0A%7D" url="https://raw.githubusercontent.com/n8n-io/n8n-docs/refs/heads/main/docs/_workflows/integrations/builtin/core-nodes/n8n-nodes-base.extractfromfile/webhook-example.json" %}

{% hint style="info" %}
**大白话（上面的代码是什么）**：上面这一大段是示例工作流本身的 JSON 定义，你在文档网页上会看到一个可以交互预览的工作流图。它只是「Webhook 接收文件 → Extract From File 提取」两个节点的配置，你不需要读懂这段代码，也不用手动复制——想实际使用，直接到 n8n 模板库搜索即可。
{% endhint %}

把节点设置为以「从 CSV 提取（Extract from CSV）」模式运行后，节点会把数据作为一系列 JSON 的 `row`（行）对象输出：

```
{
  "row": {
  "0": "apple",
  "1": "1",
  "2": "2",
  "3": "3"
  }
  ...
```

{% hint style="info" %}
**大白话（输出长什么样）**：上面的示例输出表示：CSV 文件的一行数据被提取成了一个 JSON 对象，`row` 里面的 `"0"`、`"1"`、`"2"`、`"3"` 是这一行的各列值——比如这一行有 4 列：`apple`、`1`、`2`、`3`。这样后面的节点就能用 `{{ $json.row["0"] }}` 之类的表达式取值了。
{% endhint %}

{% hint style="info" %}
**用 webhook 接收文件**

选择 Webhook 节点的 **Add Options（添加选项）** 按钮并选择 **Raw body（原始请求体）**，然后启用该设置，这样节点才会输出后续节点所期望的二进制文件。
{% endhint %}

## 节点参数（Node parameters）

### 输入二进制字段（Input Binary Field）

输入节点输入数据中包含二进制文件的字段名称。默认值是 `data`。

{% hint style="info" %}
**大白话（二进制字段是什么）**：文件在 n8n 里存在数据的特殊字段中（通常叫 `data` 或 `binary`）。这个参数就是告诉节点「去哪个字段里找文件」。如果你没改过前面的节点，一般保持默认的 `data` 就行。
{% endhint %}

### 目标输出字段（Destination Output Field）

输入节点输出中用来存放提取后数据的字段名称。

这个参数仅对以下操作可用：

- 从 JSON 提取（Extract From JSON）
- 从 ICS 提取（Extract From ICS）
- 从文本文件提取（Extract From Text File）
- 把文件转换为 Base64 字符串（Move File to Base64 String）

## 模板和示例（Templates and examples）

[浏览 Extract From File 集成模板](https://n8n.io/integrations/extract-from-file) 或[搜索所有模板](https://n8n.io/workflows/)

[base64]: https://datatracker.ietf.org/doc/html/rfc4648#section-4
