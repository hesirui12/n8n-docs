---
description: >-
  处理当前节点输入以及前面节点输出的各种方法。
contentType: reference
nodeTitle: 引用前面的节点
originalFilePath: data/data-mapping/referencing-other-nodes.md
originalUrl: 'https://docs.n8n.io/data/data-mapping/referencing-other-nodes'
url: >-
  https://docs.n8n.io/build/work-with-data/reference-data/reference-previous-nodes
layout:
  description:
    visible: false
---

# 引用前面的节点 / Referencing previous nodes

{% hint style="info" %}
**大白话**：写 n8n 表达式（expressions）或代码时，你最常问的一句话是：「我该从哪拿数据？」——是从当前这个节点收到的数据里拿，还是从前面某个节点的输出里拿？这一页就是「取数方法大全」，把常用的取数方式（`$json`、`$("节点名")` 等）全部列出来，并告诉你它们各在什么场合用、在代码节点里能不能用。
{% endhint %}

在 n8n 中处理数据时，你经常需要引用当前节点的信息，或者工作流中前面节点的信息。

## 常用的引用方式 / Common ways of referencing

最常用的数据访问方法是：

- **`$json`**：访问当前输入条目（input item）里的 JSON 数据
- **`$('<node-name>').item.json`**：访问前面节点中某个[链接条目（linked item）](link-data-items/README.md)的 JSON 数据
- **`$('<node-name>').item.binary`**：访问前面节点中某个[链接条目（linked item）](link-data-items/README.md)的二进制数据（文件、图片等）

{% hint style="info" %}
**大白话**：这三条就是最核心的「三板斧」：`$json` 是「看我手里这条数据」；`$('节点名').item.json` 是「看前面某某节点的某条数据」；`$('节点名').item.binary` 是「取前面某某节点里的文件/图片」。其中 `<node-name>` 要替换成你工作流里节点的实际名称，比如 `$('HTTP Request').item.json`。
{% endhint %}

## 其他引用方法 / Other referencing methods

以下方法在表达式（expressions）和代码节点（Code node）中都可以使用：

| 方法 | 说明 |
| ------ | ----------- |
| `$binary` | 访问当前输入条目中的二进制数据 |
| `$input.item` | 当前正在被处理的输入条目 |
| `$('<node-name>').first()` | 获取指定节点输出的第一条数据 |
| `$('<node-name>').last()` | 获取指定节点输出的最后一条数据 |
| `$('<node-name>').all()` | 获取指定节点输出的所有数据 |

## 当前节点的输入 / Current node input

下面这些方法用于处理当前节点的输入。其中有些方法和变量在代码节点（Code node）里不可用。

{% hint style="info" %}
**Python 支持（Python support）**

你可以在代码节点（Code node）中使用 Python。但 Python 不能在表达式（expressions）里使用。
{% endhint %}
{% tabs %}
{% tab title="JavaScript" %}
| 方法 | 说明 | 代码节点中可用？ |
| ------ | ----------- | :-------------------------: |
| `$binary` | 是 `$input.item.binary` 的简写。来自某个节点的传入二进制数据 | ❌ |
| `$input.item` | 当前节点正在被处理的输入条目。关于配对条目（paired items）和条目链接（item linking）的更多信息，请参考[条目链接（Item linking）](link-data-items/README.md)。 | ✅ |
| `$input.all()` | 当前节点的所有输入条目。 | ✅ |
| `$input.first()` | 当前节点的第一条输入条目。 | ✅ |
| `$input.last()` | 当前节点的最后一条输入条目。 | ✅ |
| `$input.params` | 一个对象，包含前一个节点的查询设置（query settings）。包括它执行的操作（operation）、结果数量限制等数据。 | ✅ |
| `$json` | 是 `$input.item.json` 的简写。来自某个节点的传入 JSON 数据。关于条目结构的更多信息，请参考[数据结构（Data structure）](../understand-n8ns-data-structure.md)。 | ✅（当设置为「每个条目运行一次（Run Once for Each Item）」时） |
| `$input.context.noItemsLeft` | 布尔值（Boolean）。只在配合 Loop Over Items 节点（循环处理条目节点）时可用。提供该节点内部正在发生什么的信息。用来判断该节点是否仍在处理条目。 | ✅ |
{% endtab %}

{% tab title="Python" %}
| 方法 | 说明 |
| ------ | ----------- |
| `_input.item` | 当前节点正在被处理的输入条目。关于配对条目（paired items）和条目链接（item linking）的更多信息，请参考[条目链接（Item linking）](link-data-items/README.md)。 |
| `_input.all()` | 当前节点的所有输入条目。 |
| `_input.first()` | 当前节点的第一条输入条目。 |
| `_input.last()` | 当前节点的最后一条输入条目。 |
| `_input.params` | 一个对象，包含前一个节点的查询设置（query settings）。包括它执行的操作（operation）、结果数量限制等数据。 |
| `_json` | 是 `_input.item.json` 的简写。来自某个节点的传入 JSON 数据。关于条目结构的更多信息，请参考[数据结构（Data structure）](../understand-n8ns-data-structure.md)。当你在 **Mode**（模式）中设置为 **Run Once for Each Item**（每个条目运行一次）时可用。 |
| `_input.context.noItemsLeft` | 布尔值（Boolean）。只在配合 Loop Over Items 节点（循环处理条目节点）时可用。提供该节点内部正在发生什么的信息。用来判断该节点是否仍在处理条目。 |
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：一张表看不明白？记住这几点就行——**①** 无论 JavaScript 还是 Python，方法名几乎一一对应（`$` 开头的是 JavaScript，`_` 开头的是 Python）；**②** `$json` / `_json` 是最常用的，它就是「当前这一条数据的 JSON 内容」；**③** `$input.all()` / `.first()` / `.last()` 分别是「拿全部 / 拿第一条 / 拿最后一条」；**④** `$input.context.noItemsLeft` 是配合「循环节点（Loop Over Items）」专用的，问的是「循环完没」。表里 ✅ 表示该方法在代码节点里可用，❌ 表示只在表达式里可用。
{% endhint %}

## 其他节点的输出 / Output of other nodes

下面这些方法用于处理其他节点的输出。其中有些方法和变量在代码节点（Code node）里不可用。

{% tabs %}
{% tab title="JavaScript" %}
| 方法 | 说明 | 代码节点中可用？ |
| ------ | ----------- | :-------------------------: |
| `$("<node-name>").all(branchIndex?, runIndex?)` | 返回指定节点的所有条目。如果没有给 `branchIndex`（分支序号），默认使用「把 `node-name` 和当前使用表达式/代码的节点连接起来」的那条输出。 | ✅ |
| `$("<node-name>").first(branchIndex?, runIndex?)` | 指定节点输出的第一条条目。如果没有给 `branchIndex`（分支序号），默认使用「把 `node-name` 和当前使用表达式/代码的节点连接起来」的那条输出。 | ✅ |
| `$("<node-name>").last(branchIndex?, runIndex?)` | 指定节点输出的最后一条条目。如果没有给 `branchIndex`（分支序号），默认使用「把 `node-name` 和当前使用表达式/代码的节点连接起来」的那条输出。 | ✅ |
| `$("<node-name>").item` | 链接条目（linked item）。也就是在指定节点中、用来产生当前条目的那一条数据。关于条目链接（item linking）的更多信息，请参考[条目链接（Item linking）](link-data-items/README.md)。 | ✅ |
| `$("<node-name>").item.binary` | 链接条目中的二进制数据，按二进制属性名（默认是 `data`）作为键（key）。可用的属性请参考 [`BinaryFile`](../transform-data/expression-reference/binaryfile.md)。 | ✅ |
| `$("<node-name>").params` | 一个对象，包含指定节点的查询设置（query settings）。包括它执行的操作（operation）、结果数量限制等数据。 | ✅ |
| `$("<node-name>").context` | 布尔值（Boolean）。只在配合 Loop Over Items 节点（循环处理条目节点）时可用。提供该节点内部正在发生什么的信息。用来判断该节点是否仍在处理条目。 | ✅ |
| `$("<node-name>").itemMatching(currentNodeInputIndex)` | 在代码节点（Code node）中，如果你需要从一条输入条目「回溯」到它来自哪条数据，可以用它来代替 `$("<node-name>").item`。 | ✅ |
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：这类方法的关键是**用节点名称（node-name）指定「找谁要数据」**，所以表达式的样子通常是 `$('节点名').xxx`。其中 `branchIndex`（分支序号）和 `runIndex`（运行序号）是可选参数：当你的工作流有分支（一个节点连出去多条线）、或者节点运行过多次时，你可能需要指明「要哪条线、哪一次运行」的数据；不写的话，n8n 默认取「连接到你当前节点的这条输出」。`.item` 表示「和当前这条数据配对的那一条」（条目链接），`.itemMatching()` 则是代码节点里用来做同样回溯的另一种写法。
{% endhint %}

## 引用前面节点中的二进制数据 / Reference binary data from a previous node

`$('<node-name>').item` 返回完整的[链接条目（linked item）](link-data-items/README.md)，所以你可以像读取它的 JSON 数据一样读取它的二进制数据：用 `.item.json` 获取该条目的 JSON 对象，用 `.item.binary` 获取它的二进制数据（文件、图片和其他附件）。

一个条目可以持有多个二进制属性，每个属性都有自己的名字，所以 `.item.binary` 返回的是这些属性的对象，而不是单个值。大多数节点会把二进制数据放在名为 `data` 的属性下，但具体名字取决于上游节点。每个二进制属性都是一个 `BinaryFile`，带有 `fileName`（文件名）、`mimeType`（MIME 类型）和 `fileExtension`（文件扩展名）等字段。

例如，要获取 **HTTP Request** 节点（HTTP 请求节点）产生的 `data` 二进制属性的文件名：

```js
{{ $('HTTP Request').item.binary.data.fileName }}
```

{% hint style="info" %}
**大白话**：这条表达式的读法是：「去 **HTTP Request** 节点，找到和我配对的那一条数据（`.item`），看它的二进制数据（`.binary`）里名为 `data` 的属性，然后取这个文件的文件名（`.fileName`）。」如果你想取 `mimeType`（文件类型）或 `fileExtension`（扩展名），把最后一段换成 `.mimeType` 或 `.fileExtension` 即可。
{% endhint %}

关于二进制数据以及产生它的节点，请参考[二进制数据（Binary data）](../handle-special-data-types/work-with-files-and-images.md)。
