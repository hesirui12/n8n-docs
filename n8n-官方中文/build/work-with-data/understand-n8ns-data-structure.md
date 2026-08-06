---
contentType: explanation
nodeTitle: 理解 n8n 的数据结构
originalFilePath: data/data-structure.md
originalUrl: 'https://docs.n8n.io/data/data-structure'
url: 'https://docs.n8n.io/build/work-with-data/understand-n8ns-data-structure'
layout:
  description:
    visible: false
---

# n8n 如何组织数据 / How n8n structures data

理解 n8n 是如何组织数据、并在节点（node）之间传递数据的，这是搭建工作流（workflow）的基础。本指南会介绍 n8n 的数据结构格式，以及数据在你的工作流里是怎么流动的。

## 数据结构 / Data structure

在 n8n 中，所有在节点之间传递的数据都是一个「对象数组」（array of objects）。它的结构如下：

```json
[
	{
		// For most data:
		// Wrap each item in another object, with the key 'json'
		"json": {
			// Example data
			"apple": "beets",
			"carrot": {
				"dill": 1
			}
		},
		// For binary data:
		// Wrap each item in another object, with the key 'binary'
		"binary": {
			// Example data
			"apple-picture": {
				"data": "....", // Base64 encoded binary data (required)
				"mimeType": "image/png", // Best practice to set if possible (optional)
				"fileExtension": "png", // Best practice to set if possible (optional)
				"fileName": "example.png", // Best practice to set if possible (optional)
			}
		}
	},
]
```

{% hint style="info" %}
**大白话**：可以把节点之间传的数据想象成一份「名单」，这份名单是一个列表（数组），列表里每一项（item）是一个对象（object）。绝大多数情况下，数据都放在 `json` 这个键（key）下面；如果是图片、文件这类二进制数据，就放在 `binary` 键下面。后面学表达式的时候，你写的 `{{ $json.xxx }}` 就是在 `json` 键里取某个字段的值。
{% endhint %}

{% hint style="info" %}
**跳过 `json` 键和数组语法**

从 0.166.0 版本开始，当你使用 Function 节点（Function node）或 Code 节点（Code node）时，如果数据里缺少 `json` 键，n8n 会自动帮你加上；如果需要，它也会自动把你的数据项包进数组（`[]`）里。注意：这个自动处理只对 Function 节点和 Code 节点生效。如果你是自己开发节点，仍然必须确保节点返回的数据带有 `json` 键。
{% endhint %}

## 数据在节点内部如何流动 / How data flows within nodes

当你把工作流里的节点连接起来后，数据会自动从一个节点传递到下一个节点。

节点会自动处理多条数据项（items）。当一个节点收到一个数据项数组时，它会逐条处理每一条数据，并为每一条数据执行你配置好的操作。

举个例子：如果你把 Trello 节点设置成 `Create-Card`（创建卡片），并用表达式把 `Name`（名称）字段设置为取用传入数据里的 `name-input-value` 属性，那么这个节点就会为每一条数据项各创建一张卡片，而且总是取「当前这条数据项」的 `name-input-value` 值。

例如，下面这个输入会创建两张卡片，一张叫 `test1`，另一张叫 `test2`：

```json
[
	{
		"name-input-value": "test1"
	},
	{
		"name-input-value": "test2"
	}
]
```

## 理解拖拽映射的是什么 / Understand what you're mapping with drag and drop

数据映射（data mapping）会映射字段的路径（field path），并读取该字段的值。例如，给定以下数据：

```js
[
	{
		"fruit": "apples",
		"color": "green"
	}
]
```

你可以把 `fruit` 字段拖拽映射过去：从 **INPUT**（输入）面板里把 **fruit** 拖到你想使用它的字段上即可。这会生成一个表达式 `{{ $json.fruit }}`。当节点逐条遍历输入数据项时，该字段的值就会变成每一条数据项中 `fruit` 的值。

## 理解嵌套数据 / Understand nested data

给定以下数据：

```js
[
  {
    "name": "First item",
    "nested": {
      "example-number-field": 1,
      "example-string-field": "apples"
    }
  },
  {
    "name": "Second item",
    "nested": {
      "example-number-field": 2,
      "example-string-field": "oranges"
    }
  }
]
```

n8n 会以表格形式把它展示成这样：

!["Screenshot of a table in the INPUT panel. It includes a top level field named "nested." This field contains nested data, which is indicated in bold."](../.gitbook/assets/nested-data.png)

{% hint style="info" %}
**大白话**：嵌套数据（nested data）就是「对象里套对象」，比如上面的 `nested` 字段里又包了一个小对象。在 n8n 的表格视图里，这种嵌套字段会用粗体显示，点开才能看到里面的内容。
{% endhint %}
