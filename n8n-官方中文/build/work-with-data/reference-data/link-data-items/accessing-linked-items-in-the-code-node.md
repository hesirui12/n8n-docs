---
description: How to use `("<node-name>").itemMatching(currentNodeinputIndex)`
contentType: howto
nodeTitle: Accessing linked items in the Code node
originalFilePath: data/data-mapping/itemmatching.md
originalUrl: 'https://docs.n8n.io/data/data-mapping/itemmatching'
url: >-
  https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/accessing-linked-items-in-the-code-node
layout:
  description:
    visible: false
---

# 在 Code 节点中访问链接的条目（Accessing linked items in the Code node）

{% hint style="info" %}
**大白话解释：为什么需要「往回追溯条目」？**

n8n 的每条数据都会记录自己的"来源"。默认情况下，你只能方便地拿到**紧挨着的前一个节点**的数据。但有时候你需要拿到**更早之前**某个节点的数据——比如前前一个节点里的某个字段。这时候就需要用到本文的 `itemMatching` 方法。
{% endhint %}

节点输入数据中的每一个条目，都会链接回之前节点中用来生成它的那些条目。当你需要从比"紧挨着的前一个节点"更早的地方取回链接的条目时，这个功能就很有用了。

要访问工作流中更早节点的链接条目，请使用 `("<node-name>").itemMatching(currentNodeinputIndex)`。

{% hint style="info" %}
**语法小课堂：`itemMatching` 怎么读？**

`itemMatching` 的意思是「按序号匹配条目」。

* 括号里的 `"<node-name>"`：换成你想追溯的那个**节点名字**（记得加引号）。
* `currentNodeinputIndex`：换成"当前节点正在处理的第几个条目"（从 0 开始数）。
* 返回值：在目标节点中，**当初用来生成当前这个条目的那一条原始数据**。

连起来理解：`$('节点A').itemMatching(2)` = 「去节点 A 里，找出生成当前第 3 条数据的那条原始数据」。
{% endhint %}

举个例子，考虑这样一个工作流：

1. Customer Datastore 节点（客户数据源节点）生成示例数据：
	```json
	[
		{
			"id": "23423532",
			"name": "Jay Gatsby",
			"email": "gatsby@west-egg.com",
			"notes": "Keeps asking about a green light??",
			"country": "US",
			"created": "1925-04-10"
		},
		{
			"id": "23423533",
			"name": "José Arcadio Buendía",
			"email": "jab@macondo.co",
			"notes": "Lots of people named after him. Very confusing",
			"country": "CO",
			"created": "1967-05-05"
		},
		...
    ]
	```
2. Edit Fields 节点（编辑字段节点）把这些数据简化：
	```json
	[
		{
			"name": "Jay Gatsby"
		},
		{
			"name": "José Arcadio Buendía"
		},
        ...
	]
	```
3. Code 节点（代码节点）把邮箱地址恢复给正确的人：
	```json
	[
		{
			"name": "Jay Gatsby",
			"restoreEmail": "gatsby@west-egg.com"
		},
		{
			"name": "José Arcadio Buendía",
			"restoreEmail": "jab@macondo.co"
		},
		...
	]
	```

> **小提示**：第 2 步的 Edit Fields 节点把数据简化得只剩下 `name` 字段，把 `email` 弄丢了。第 3 步的 Code 节点就是要靠 `itemMatching`「找回」每条数据对应的邮箱。

Code 节点使用以下代码来完成这件事：

{% tabs %}
{% tab title="JavaScript" %}
```js
for(let i=0; i<$input.all().length; i++) {
	$input.all()[i].json.restoreEmail = $('Customer Datastore (n8n training)').itemMatching(i).json.email;
}
return $input.all();
```
{% endtab %}

{% tab title="Python" %}
```python
for i,item in enumerate(_input.all()):
	_input.all()[i].json.restoreEmail = _('Customer Datastore (n8n training)').itemMatching(i).json.email

return _input.all();
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**代码逐行讲解（以 JavaScript 版为例）**

* `for(let i=0; i<$input.all().length; i++)`：循环遍历当前节点收到的每一个条目。`$input.all()` 返回当前节点全部输入条目的数组。
* `$input.all()[i]`：取出第 `i` 个输入条目（从 0 开始数）。
* `.json.restoreEmail = ...`：给这个条目新加一个名为 `restoreEmail` 的字段。
* `$('Customer Datastore (n8n training)').itemMatching(i).json.email`：去「Customer Datastore (n8n training)」这个节点里，找出**当初用来生成当前第 `i` 个条目**的那条原始数据，并取出它的 `email` 字段。因为第 2 步的 Edit Fields 节点只保留了 `name`，把 `email` 弄丢了，所以这一步相当于"把丢掉的邮箱找回来"。
* `return $input.all();`：把修改好的全部条目作为输出返回。
{% endhint %}

你可以从 [n8n 官网 | itemMatching 用法示例](https://n8n.io/workflows/1966-itemmatching-usage-example/) 查看并下载这个示例工作流。
