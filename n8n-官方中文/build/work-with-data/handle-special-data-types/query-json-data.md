---
title: 用 JMESPath 查询 JSON 数据
description: >-
  n8n 支持 JMESPath 库，可以简化对 JSON 格式数据的处理。
contentType: howto
nodeTitle: 查询 JSON 数据
originalFilePath: data/specific-data-types/jmespath.md
originalUrl: 'https://docs.n8n.io/data/specific-data-types/jmespath'
url: >-
  https://docs.n8n.io/build/work-with-data/handle-special-data-types/query-json-data
layout:
  description:
    visible: false
---

# 用 JMESPath 查询 JSON 数据 / Query JSON with JMESPath

{% hint style="info" %}
**大白话**：JSON 可以理解成一种「嵌套的表格数据」，长得像一层套一层的 {} 和 []。当你拿到一大坨 JSON（比如某个接口返回的数据）时，想从里面「抠」出某个值，手写代码很麻烦。JMESPath 就是专门干这个的「查询语言」——你只需要写一小段「查询表达式」，它就能帮你从 JSON 里精准取出想要的内容，甚至还能重组数据。n8n 把它内置了进来，你在表达式（Expressions）和代码节点（Code node）里都能直接用。
{% endhint %}

[JMESPath](https://jmespath.org/) 是一种用于 JSON 的查询语言，你可以用它从一个 JSON 文档中提取和转换元素。关于如何使用 JMESPath 的完整细节，请参考 [JMESPath 官方文档](https://jmespath.org/tutorial.html)。

## `jmespath()` 方法 / The `jmespath()` method

n8n 提供了一个自定义方法 `jmespath()`。使用这个方法，就可以用 JMESPath 查询语言对 JSON 对象进行搜索。

基本语法是：

{% tabs %}
{% tab title="JavaScript" %}
```js
$jmespath(object, searchString)
```
{% endtab %}

{% tab title="Python" %}
```python
_jmespath(object, searchString)
```
{% endtab %}
{% endtabs %}

为了帮助你理解这个方法做了什么，下面这段等价的 JavaScript 代码（更长版本）可以说明：

```js
var jmespath = require('jmespath');
jmespath.search(object, searchString);
```

{% hint style="info" %}
**表达式必须单行（Expressions must be single-line）**

上面这个更长的代码示例**不能**用在表达式（Expressions）里，因为表达式必须是单行的。
{% endhint %}

`object` 是一个 JSON 对象，比如某个前一个节点（previous node）的输出。`searchString` 是用 JMESPath 查询语言写成的表达式。[JMESPath 规范（JMESPath Specification）](https://jmespath.org/specification.html#jmespath-specification)列出了支持的表达式清单，它的[教程（Tutorial）](https://jmespath.org/tutorial.html)和[示例（Examples）](https://jmespath.org/examples.html)则提供了交互式的例子。

{% hint style="warning" %}
**注意搜索参数的顺序（Search parameter order）**

[JMESPath 规范](https://jmespath.org/specification.html#jmespath-specification)中的示例写法是 `search(searchString, object)`。而 n8n 使用的 [JMESPath JavaScript 库](https://github.com/jmespath/jmespath.js/) 支持的写法是 `search(object, searchString)`，两者参数顺序正好相反。也就是说，当你参考 JMESPath 官方文档里的示例时，可能需要把搜索函数里两个参数的位置对调一下。

**大白话**：抄官方例子时，先看它是「先写搜索词、再写对象」，还是「先写对象、再写搜索词」，别照抄完发现报错或结果不对，顺序反了而已。
{% endhint %}

## 常见任务 / Common tasks

本小节提供了一些常见操作的示例。更多示例和详细指导，请参考 [JMESPath 自己的文档](https://jmespath.org/tutorial.html)。

在尝试这些示例时，你需要把代码节点（Code node）的 **Mode**（模式）设置为 **Run Once for Each Item**（每个条目运行一次）。

{% hint style="info" %}
**大白话**：为什么要把模式设成「每个条目运行一次」？因为 n8n 的节点默认可能会把多个数据条目打包在一起处理。这里我们希望 JMESPath 对「每一条」数据分别执行查询，这样结果才和你看到的示例一致。
{% endhint %}

### 用投影（projections）把 JMESPath 表达式应用到一组元素上 / Apply a JMESPath expression to a collection of elements with projections

摘自 [JMESPath 投影文档](https://jmespath.org/tutorial.html#projections)：

> 投影（Projections）是 JMESPath 的关键特性之一。它用来把一个表达式应用到一组元素上。JMESPath 支持五种投影：
>
> * 列表投影（List Projections）
> * 切片投影（Slice Projections）
> * 对象投影（Object Projections）
> * 扁平化投影（Flatten Projections）
> * 过滤投影（Filter Projections）

下面这个示例演示了列表投影、切片投影和对象投影的基本用法。每种投影类型的详细解释和更多示例，请参考 [JMESPath 投影文档](https://jmespath.org/tutorial.html#projections)。

假设你从 webhook 节点（webhook node）拿到了这样的 JSON：

```js
[
  {
    "headers": {
      "host": "n8n.instance.address",
      ...
    },
    "params": {},
    "query": {},
    "body": {
      "people": [
        {
          "first": "James",
          "last": "Green"
        },
        {
          "first": "Jacob",
          "last": "Jones"
        },
        {
          "first": "Jayden",
          "last": "Smith"
        }
      ],
      "dogs": {
        "Fido": {
          "color": "brown",
          "age": 7
        },
        "Spot": {
          "color": "black and white",
          "age": 5
        }
      }
    }
  }
]

```

{% hint style="info" %}
**大白话**：这份 JSON 的意思是——有一组「人」的数据（people），每个人都有 first（名）和 last（姓）；还有一组「狗」的数据（dogs），每只狗有 color（颜色）和 age（年龄）。下面的例子会教你：怎么一次性地把所有名字捞出来、怎么只取前两个名字、怎么取出所有狗的年龄。
{% endhint %}

取出所有人的[名（first）列表](https://jmespath.org/tutorial.html#list-and-slice-projections)：

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```js
{{$jmespath($json.body.people, "[*].first" )}}
// Returns ["James", "Jacob", "Jayden"]
```
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```js
let firstNames = $jmespath($json.body.people, "[*].first" )
return {firstNames};
/* Returns:
[
	{
		"firstNames": [
			"James",
			"Jacob",
			"Jayden"
		]
	}
]
*/
```
{% endtab %}

{% tab title="代码节点（Python）" %}
```python
firstNames = _jmespath(_json.body.people, "[*].first" )
return {"firstNames":firstNames}
"""
Returns:
[
 	{
		"firstNames": [
			"James",
			"Jacob",
			"Jayden"
		]
	}
]
"""
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：`[*].first` 的意思是「对 people 列表里的每一个元素，都取出它的 first 字段」。星号 `[*]` 表示「列表里的全部元素」，这就是列表投影（list projection）。结果是一串名字：`["James", "Jacob", "Jayden"]`。代码块里的 `// Returns ...` 或 `/* Returns: ... */` 是注释，告诉你这段代码运行后会得到什么结果。
{% endhint %}

取出名字的前两个（[切片（slice）](https://jmespath.org/tutorial.html#list-and-slice-projections)）：

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```js
{{$jmespath($json.body.people, "[:2].first")}}
// Returns ["James", "Jacob"]
```
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```js
let firstTwoNames = $jmespath($json.body.people, "[:2].first");
return {firstTwoNames};
/* Returns:
[
	{
		"firstNames": [
			"James",
			"Jacob",
			"Jayden"
		]
	}
]
*/
```
{% endtab %}

{% tab title="代码节点（Python）" %}
```python
firstTwoNames = _jmespath(_json.body.people, "[:2].first" )
return {"firstTwoNames":firstTwoNames}
"""
Returns:
[
	{
		"firstTwoNames": [
		"James",
		"Jacob"
		]
	}
]
"""
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：`[:2]` 是切片投影（slice projection），类似「切蛋糕」——`[:2]` 的意思是「从第 0 个开始，切到第 2 个（不含第 2 个）」，也就是取前两个元素。所以 `[:2].first` 得到的是前两个人的名字：`["James", "Jacob"]`。
{% endhint %}

用[对象投影（object projections）](https://jmespath.org/tutorial.html#object-projections)取出所有狗的年龄：

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```js
{{$jmespath($json.body.dogs, "*.age")}}
// Returns [7,5]
```
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```js
let dogsAges = $jmespath($json.body.dogs, "*.age");
return {dogsAges};
/* Returns:
[
	{
		"dogsAges": [
			7,
			5
		]
	}
]
*/
```
{% endtab %}

{% tab title="代码节点（Python）" %}
```python
dogsAges = _jmespath(_json.body.dogs, "*.age")
return {"dogsAges": dogsAges}
"""
Returns:
[
	{
		"dogsAges": [
			7,
			5
		]
	}
]
"""
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：dogs 不是列表，而是一个对象（{...}，里面是 Fido 和 Spot 两只狗）。对象投影用 `*` 代替对象里的每个「键值」，所以 `*.age` 的意思是「取出对象里每一个值（每只狗）的 age 字段」，结果是 `[7, 5]`（Fido 7 岁，Spot 5 岁）。
{% endhint %}

### 选择多个元素并创建新的列表或对象 / Select multiple elements and create a new list or object

使用[多重选择（Multiselect）](https://jmespath.org/tutorial.html#multiselect)可以从一个 JSON 对象中选择多个元素，并把它们组合成一个新的列表或对象。

假设你从 webhook 节点拿到了这样的 JSON：

```js
[
  {
    "headers": {
      "host": "n8n.instance.address",
      ...
    },
    "params": {},
    "query": {},
    "body": {
      "people": [
        {
          "first": "James",
          "last": "Green"
        },
        {
          "first": "Jacob",
          "last": "Jones"
        },
        {
          "first": "Jayden",
          "last": "Smith"
        }
      ],
      "dogs": {
        "Fido": {
          "color": "brown",
          "age": 7
        },
        "Spot": {
          "color": "black and white",
          "age": 5
        }
      }
    }
  }
]

```

用多重选择（multiselect list）同时取出名和姓，并创建同时包含这两个名字的新列表：

{% tabs %}
{% tab title="表达式（JavaScript）" %}
```js
{{$jmespath($json.body.people, "[].[first, last]")}}
// Returns [["James","Green"],["Jacob","Jones"],["Jayden","Smith"]]
```
{% endtab %}

{% tab title="代码节点（JavaScript）" %}
```js
let newList = $jmespath($json.body.people, "[].[first, last]");
return {newList};
/* Returns:
[
	{
		"newList": [
			[
				"James",
				"Green"
			],
			[
				"Jacob",
				"Jones"
			],
			[
				"Jayden",
				"Smith"
			]
		]
	}
]
*/
```
{% endtab %}

{% tab title="代码节点（Python）" %}
```python
newList = _jmespath(_json.body.people, "[].[first, last]")
return {"newList":newList}
"""
Returns:
[
	{
		"newList": [
			[
				"James",
				"Green"
			],
			[
				"Jacob",
				"Jones"
			],
			[
				"Jayden",
				"Smith"
			]
		]
	}
]
"""
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：`[].[first, last]` 里的 `[]` 表示「把列表里的元素展开」，`[first, last]` 表示「每个元素同时取 first 和 last 两个字段」，组合成新的小列表。所以最终得到的是「每个人一组（名+姓）」的新列表：`[["James","Green"],["Jacob","Jones"],["Jayden","Smith"]]`。
{% endhint %}

### 表达式里箭头函数（arrow functions）的替代方案 / An alternative to arrow functions in expressions

例如，先在代码节点（Code node）里返回下面这段代码，来生成一些输入数据：

```js
return[
  {
    "json": {      
      "num_categories": "0",
      "num_products": "45",
      "category_id": 5529735,
      "parent_id": 1407340,
      "pos_enabled": 1,
      "pos_favorite": 0,
      "name": "HP",
      "description": "",
      "image": ""
    }
  },
  {
    "json": {
      "num_categories": "0",
      "num_products": "86",
      "category_id": 5529740,
      "parent_id": 1407340,
      "pos_enabled": 1,
      "pos_favorite": 0,
      "name": "Lenovo",
      "description": "",
      "image": ""
    }
  }  
]
```

{% hint style="info" %}
**大白话**：这份数据是两行「商品类目」记录：第一行是 HP，第二行是 Lenovo，各自带着 category_id（类目编号）等信息。下面的例子演示了一个非常实用的场景——**按条件搜索**：找出「名字叫 Lenovo 的那条记录，告诉我是多少号类目」。
{% endhint %}

你可以做这样一个搜索：「找到名字为 Lenovo 的条目，并告诉我它的类目编号（category ID）。」

```js
{{ $jmespath($("Code").all(), "[?json.name=='Lenovo'].json.category_id") }}
```

{% hint style="info" %}
**大白话**：这段表达式的意思是——`$("Code")` 引用名为 **Code** 的节点，`.all()` 拿到它的全部数据；`[?json.name=='Lenovo']` 是过滤投影（filter projection），像筛子一样只留下 name 等于 `Lenovo` 的条目；最后的 `.json.category_id` 再从筛出来的条目里取出 category_id 字段。在表达式里做「找某一项、取某个字段」的操作，用这种方式比写箭头函数（arrow function）更简洁直观，这也是 JMESPath 的一大亮点。
{% endhint %}
