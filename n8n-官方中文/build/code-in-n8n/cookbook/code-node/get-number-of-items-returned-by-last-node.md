---
contentType: howto
nodeTitle: Get number of items returned by last node
originalFilePath: code/cookbook/code-node/number-items-last-node.md
originalUrl: 'https://docs.n8n.io/code/cookbook/code-node/number-items-last-node'
url: >-
  https://docs.n8n.io/build/code-in-n8n/cookbook/code-node/get-number-of-items-returned-by-last-node
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话：** 想知道「上一个节点到底返回了几条数据」？用这段代码：如果上一步第一条数据是空的（说明没返回任何内容），就输出 `results: 0`；否则输出 `results`，它的值就是数据的实际条数。
{% endhint %}

# 获取上一个节点返回的数据条数 <a href="#get-number-of-items-returned-by-the-previous-node" id="get-number-of-items-returned-by-the-previous-node"></a>

要获取上一个节点返回的数据条数，可以这样写：

{% tabs %}
{% tab title="JavaScript" %}
```js
if (Object.keys(items[0].json).length === 0) {
return [
	{
		json: {
			results: 0,
		}
	}
]
}
return [
	{
		json: {
			results: items.length,
		}
	}
];
```

输出结果会类似下面这样：

```json
[
	{
		"results": 8
	}
]
```
{% endtab %}

{% tab title="Python" %}
```python
if len(items[0].json) == 0:
	return [
		{
			"json": {
				"results": 0,
			}
		}
	]
else:
	return [
		{
			"json": {
				"results": len(items),
			}
		}
	]
```
输出结果会类似下面这样：

```json
[
	{
		"results": 8
	}
]
```
{% endtab %}
{% endtabs %}
