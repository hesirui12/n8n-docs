---
contentType: howto
nodeTitle: Item linking for node creators
originalFilePath: data/data-mapping/data-item-linking/item-linking-node-building.md
originalUrl: >-
  https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-node-building
url: >-
  https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/item-linking-for-node-creators
layout:
  description:
    visible: false
---

# 面向节点开发者的条目链接（Item linking for node creators）

{% hint style="info" %}
**关于本文来源的说明**

官方原文的正文是一个 GitBook「可复用片段（reusable include）」，通过标签从共享内容库引入。我们已把该片段的官方内容（来自 `docs/docs/reusable-content/.gitbook/includes/data/data-mapping/item-linking-node-creators.md`）完整翻译并直接写在这里，方便你阅读，无需跳转。
{% endhint %}

{% hint style="info" %}
**仅适用于程序化风格（programmatic-style）的节点**

本指南适用于程序化风格的节点。如果你用的是声明式风格（declarative style），n8n 会自动为你处理配对条目（paired item），无需操心。

**大白话区分两种风格**：

* **程序化风格（programmatic）**：用 TypeScript/JavaScript 代码写逻辑的节点，输出数据由你手动 `return`，n8n 不知道每条输出数据从哪来。
* **声明式风格（declarative）**：用配置/描述方式声明的节点，n8n 自动维护配对信息。
{% endhint %}

请使用 n8n 的条目链接（item linking）功能，从当前条目之前的条目中访问数据。n8n 需要知道：某条输出数据是由哪条输入数据生成的。如果缺少这个信息，其他节点里的表达式可能会出错。作为节点开发者，你必须确保你的节点返回的所有条目都支持这一点。

这适用于程序化节点（包括触发节点 trigger node）。开发声明式风格的节点时，你不需要考虑条目链接。关于节点风格的更多信息，请参考[选择你的节点开发方式（Choose your node building approach）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/create-nodes/plan-your-node/choose-a-node-building-style)。

建议先阅读[条目链接概念（Item linking concepts）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/reference-data/link-data-items/how-items-link-through-workflows)，它提供了条目链接的概念性总览，并详细说明了 n8n 可以自动处理链接的各种场景。

如果你需要手动处理条目链接，方法是在节点返回的每一个条目上设置 `pairedItem`（配对条目）字段：

```typescript
// Use the pairedItem information of the incoming item
newItem = {
	"json": { . . . },
	"pairedItem": {
		"item": item.pairedItem,
		// Optional: choose the input to use
		// Set this if your node combines multiple inputs
		"input": 0
};

// Or set the index manually
newItem = {
		"json": { . . . }
		"pairedItem": {
			"item": i,
			// Optional: choose the input to use
			// Set this if your node combines multiple inputs
			"input": 0
		},
};
```

{% hint style="info" %}
**`pairedItem` 大白话讲解**

`pairedItem` 的意思是「配对的条目」：告诉 n8n 这条输出数据是由哪条输入数据变出来的。

* `"item"` 字段：填输入条目的序号（从 0 开始）。
* 写法一 `"item": item.pairedItem`：直接沿用输入条目自带的 `pairedItem`，相当于把输入条目自己的"血缘关系"原样传递下去。
* 写法二 `"item": i`：手动指定序号 `i`，告诉 n8n"这条输出来自第 `i` 条输入"。
* `"input"` 字段（可选）：当你的节点有多个输入连接时，用数字指定用的是第几个输入（0 表示第一个输入）。注释里也写了：你的节点如果合并了多个输入，就设置这个字段。
{% endhint %}
