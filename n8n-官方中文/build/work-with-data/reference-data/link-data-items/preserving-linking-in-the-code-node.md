---
contentType: howto
nodeTitle: Preserving linking in the Code node
originalFilePath: data/data-mapping/data-item-linking/item-linking-code-node.md
originalUrl: 'https://docs.n8n.io/data/data-mapping/data-item-linking/item-linking-code-node'
url: >-
  https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/preserving-linking-in-the-code-node
layout:
  description:
    visible: false
---

# 在 Code 节点中保留条目链接（Preserving linking in the Code node）

{% hint style="info" %}
**关于本文来源的说明**

官方原文的正文是一个 GitBook「可复用片段（reusable include）」。我们已把该片段的官方内容（来自 `docs/docs/reusable-content/.gitbook/includes/data/data-mapping/item-linking-code-node.md`）完整翻译并直接写在这里。
{% endhint %}

当你引用某个前置节点时，需要知道该使用其中的哪一条数据。这个问题就是靠条目链接（item linking）解决的。大多数节点会自动把每一条输出条目链接到某一条输入条目，从而形成一条可以往回追溯的条目链。关于这个主题更深层的概念性总览，请参考[条目链接概念（Item linking concepts）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/reference-data/link-data-items/how-items-link-through-workflows)。本文聚焦于实际的使用示例。

在使用 Code 节点时，有些场景下你需要手动提供条目链接信息，才能在工作流后面使用 `$("<node-name>").item`。这些场景**只在你收到不止一个输入条目时**才适用——单个条目时 n8n 会自动处理条目链接。

这些场景是：

* **新增条目**（Add new items）：新建的条目没有链接到任何输入。
* **返回全新的条目**（Return new items）：你没有沿用输入条目，而是输出了自己新建的条目。
* **想要手动控制条目链接**。

其余场景都由[n8n 的自动条目链接](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/reference-data/link-data-items/how-items-link-through-workflows)来处理。

要控制条目链接，请在返回数据时设置 `pairedItem`。例如，要链接到序号为 0 的输入条目：

```js
[
	{
		"json": {
			. . . 
		},
		// The index of the input item that generated this output item
		"pairedItem": 0
	}
]
```

{% hint style="info" %}
**大白话解释上面这段代码**

上面代码中 `"pairedItem": 0` 的意思是：这条输出数据是由**第 0 条**输入数据（即输入的第一条）生成的。注释行（`//` 开头）里也说明了这一点。
{% endhint %}

### `pairedItem` 使用示例（pairedItem usage example）

假设输入数据是这样的：

```json
[
  {
    "id": "23423532",
    "name": "Jay Gatsby"
  },
  {
    "id": "23423533",
    "name": "José Arcadio Buendía"
  },
  {
    "id": "23423534",
    "name": "Max Sendak"
  },
  {
    "id": "23423535",
    "name": "Zaphod Beeblebrox"
  },
  {
    "id": "23423536",
    "name": "Edmund Pevensie"
  }
]
```

我们用这些数据生成新的条目，新条目只包含姓名（name），外加一条新数据：

```js
newItems = [];
for(let i=0; i<items.length; i++){
  newItems.push(
    {
    "json":
      {
        "name": items[i].json.name,
				"aBrandNewField": "New data for item " + i
      }
    }
  )
}

return newItems;
```

`newItems` 是一个条目数组，但里面的条目**没有** `pairedItem` 字段。这意味着无法从这些新条目追溯回生成它们的原始条目。

{% hint style="info" %}
**为什么没写 `pairedItem` 就有问题？**

循环里新建的每个条目（`"name": items[i].json.name`）明明是从第 `i` 条输入数据取的名字，但代码里没有把这条对应关系告诉 n8n。于是这些新条目就成了"来历不明"的数据——后面任何节点用 `$('此节点').item` 引用时都会失败。
{% endhint %}

加上 `pairedItem` 对象：

```js
newItems = [];
for(let i=0; i<items.length; i++){
  newItems.push(
    {
      "json":
        {
          "name": items[i].json.name,
					"aBrandNewField": "New data for item " + i
        },
      "pairedItem": i
    }    
  )
}
return newItems;
```

现在，每一条新条目都能链接回用来创建它的那条原始条目了。

{% hint style="info" %}
**大白话总结**

* 场景：你在 Code 节点里创建了全新的条目（没有沿用输入条目）。这时 n8n 不知道新条目"从哪来"，后续节点用 `.item` 引用时就会出错。
* 解决办法：在返回的每个条目里加上 `"pairedItem": i`，其中 `i` 是生成它的那条输入条目的序号（从 0 开始数）。
* 示例中循环变量 `i` 正好就是输入条目的序号，所以 `"pairedItem": i` 就把「第 i 个新条目」和「第 i 个输入条目」一一对应起来了。
{% endhint %}
