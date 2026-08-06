---
contentType: explanation
nodeTitle: Expressions for data transformation
originalFilePath: data/expressions-for-transformation.md
originalUrl: 'https://docs.n8n.io/data/expressions-for-transformation'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expressions-for-data-transformation
layout:
  description:
    visible: false
---

# 用于数据转换的表达式（Expressions for data transformation）

{% hint style="info" %}
**大白话解释：什么是「表达式」？**

在 n8n 里，表达式（expression）是一种"会算答案"的输入框内容：你用 `{{ }}` 把一段代码包起来，n8n 运行时就会把里面的内容计算成实际的值。比如 `{{$json.body.city}}` 会被算成 webhook 数据里的城市名。本文教你用表达式来**转换（transform）数据**——也就是对数据做提取、修改、格式化等操作。
{% endhint %}

在 n8n 中，只要任何地方支持表达式，你都可以使用表达式转换函数。

不过，如果你的主要目标只是用表达式转换数据、不掺和其他操作，建议使用 **Edit Fields（Set）** 节点。这个节点专门为数据转换设计，提供了干净的界面，可以：

* 用表达式添加新字段（值由表达式计算得出）
* 使用转换函数修改现有字段的值
* 删除或重命名字段

{% hint style="info" %}
**大白话解释「为什么推荐用 Edit Fields 节点」**

把"改数据"这件事集中在一个节点里做，而不是把表达式散落在十几个节点的各个参数里，就像把所有工具的抽屉归拢到一个柜子里——工作流一眼就能看懂，以后也好维护。
{% endhint %}

这样可以把"数据转换"和"业务逻辑"分开，让你的工作流更有条理，更容易理解和维护。

**最佳实践**：不要在多个节点的各种参数里塞一堆复杂的表达式，而是先用 Edit Fields 节点把数据准备好，再把转换好的数据传给后面的节点。

![Creating expressions in the UI](../../.gitbook/assets/expressionDot.gif)

更多信息和示例请参考[表达式参考（Expression reference）](expression-reference/README.md)。

### 示例：从 webhook 请求体中获取数据

考虑下面这个场景：你有一个 webhook 触发器（Webhook trigger），通过请求体（body）接收数据。你想从这些数据中提取一部分，在工作流中使用。

你的 webhook 数据大概长这样：


```json
[
  {
    "headers": {
      "host": "n8n.instance.address",
      ...
    },
    "params": {},
    "query": {},
    "body": {
      "name": "Jim",
      "age": 30,
      "city": "New York"
    }
  }
]
```


在工作流的下一个节点中，你想只取出 `city` 的值。可以使用下面的表达式：


```js
{{$json.body.city}}
```

这个表达式的含义：

1. 使用 n8n 自定义的 `$json` 变量访问传入的 JSON 格式数据。
2. 找到 `city` 的值（在这个例子里是 "New York"）。注意，这个例子使用 JMESPath 语法来查询 JSON 数据。你也可以把表达式写成 `{{$json['body']['city']}}`。

{% hint style="info" %}
**大白话逐层拆解 `{{$json.body.city}}`**

* `$json`：当前这一条输入数据（JSON 格式）。
* `.body`：取数据里的 `body` 部分（webhook 把真正的内容放在 `body` 里）。
* `.city`：再取 `body` 里的 `city` 字段。连起来就是「从当前数据里挖出城市名」。
* 两种写法 `{{$json.body.city}}` 和 `{{$json['body']['city']}}` 效果完全一样，选你顺手的即可。
{% endhint %}

### 在凭据（credentials）中使用表达式

你也可以在凭据字段（比如 API 密钥、口令等）里使用表达式。当你用表达式引用数据时（例如 `{{$json.body.city}}` 或 `{{ $('Webhook').item.json.headers.authorization }}`），n8n 会在当前工作流执行（execution）的上下文中对表达式求值。

这意味着：

- 凭据里的表达式可以访问当前执行上下文中的数据，包括之前节点的数据。
- 每次工作流执行都有自己的数据上下文。
- 表达式按每次执行分别求值，所以不同的执行之间不共享数据。

{% hint style="info" %}
**大白话解释「每次执行各自独立」**

想象每次运行工作流就像开了一次独立的"作业现场"。这次运行收到的 token 只在这次运行里有效，下一次运行又是全新的数据。所以不用担心不同运行之间数据串味。
{% endhint %}

例如，如果一个 webhook 节点收到了一个访问令牌（access token），你在某个凭据字段里用表达式引用它，那么该值会使用**那一次具体运行**的执行数据来解析。

## 示例：把较长的 JavaScript 写成表达式

在表达式里，你可以做变量赋值、多语句等操作，但需要用「立即执行函数表达式（Immediately Invoked Function Expression，简称 IIFE）」的语法把代码包起来。

下面的代码用 Luxon 日期时间库，计算两个日期之间相差几个月。代码外面同时包了表达式的花括号（handlebar brackets）和 IIFE 语法。

```js
{{(()=>{
  let end = DateTime.fromISO('2017-03-13');
  let start = DateTime.fromISO('2017-02-13');
  let diffInMonths = end.diff(start, 'months');
  return diffInMonths.toObject();
})()}}
```

{% hint style="info" %}
**IIFE 大白话解释**

`(()=>{ ... })()` 就是：先定义一个匿名函数，再立刻用末尾的 `()` 调用它。之所以要这样包一层，是因为表达式框只允许"一个值/一句表达式"；用 IIFE 把多行逻辑塞进一个函数体里，最后 `return` 出一个值，就满足要求了。看不懂没关系，直接照着这个模板套你的代码就行。
{% endhint %}

## 常见问题（Common issues）

下面是与[表达式（expressions）](../expressions-versus-data-nodes.md)相关的一些常见错误和问题，以及解决/排查步骤。

### 「item 0 中的 JSON Output 包含无效 JSON」（The 'JSON Output' in item 0 contains invalid JSON）

这个错误发生在你使用 JSON 模式，但提供的不是有效的 JSON 对象时。根据 JSON 对象的问题不同，错误有时显示为 `The 'JSON Output' in item 0 does not contain a valid JSON object`。

解决办法是确保你提供的代码是有效 JSON：

- 用 [JSON 校验器](https://jsonlint.com/) 检查 JSON。
- 检查你的 JSON 对象没有引用未定义的输入数据。如果传入的数据并不总是包含相同的字段，就可能出现这种情况。

{% hint style="info" %}
**大白话解释**

"有效 JSON"要求格式完全正确：键要有引号、值要合法、没有多余的逗号等。另外，如果你的数据里某个字段时有时无，而 JSON 又硬引用了它，也会报这个错。
{% endhint %}

### 「无法获取表达式所需的数据」（Can't get data for expression）

这个错误发生在 n8n 无法取回表达式所引用的数据时。常见原因：前置节点还没有运行过。

另一种表现形式是 `Referenced node is unexecuted`（被引用的节点未执行）。这种情况下，错误全文会以如下格式告诉你具体是哪个节点没执行：

> An expression references the node '&lt;node-name&gt;', but it hasn't been executed yet. Either change the expression, or re-wire your workflow to make sure that node executes first.

（中文大意：有一个表达式引用了节点 '&lt;node-name&gt;'，但它还没有执行。请修改表达式，或重新连接工作流，确保该节点先执行。）

开始排查时，先运行测试，让工作流执行到那个被点名的节点。

对于使用 JavaScript 或其他自定义代码的节点，你可以通过下面的方式检查某个前置节点是否已经执行过，再决定是否使用它的值：

```javascript
$("<node-name>").isExecuted
```

{% hint style="info" %}
**`isExecuted` 大白话解释**

`isExecuted` 是 n8n 提供的一个"问句"：问某个节点"你跑过了吗？"。如果它在表达式里返回 `true`，说明该节点已经执行，可以放心引用它的数据；返回 `false` 就说明它还没跑。
{% endhint %}

举个例子，下面这个 JSON 引用了输入数据的参数。如果直接测试这一步而不把它连接到其他节点，就会显示这个错误：

```javascript
{
  "my_field_1": {{ $input.params }}
}
```

### 「语法无效」（Invalid syntax）

这个错误发生在你使用了有语法错误的表达式时。

例如，下面这个 JSON 里的表达式带了一个多余的点号（trailing period），就会导致语法无效错误：

```jsx
{
  "my_field_1": "value",
  "my_field_2": {{ $('If').item.json. }}
}
```

{% hint style="info" %}
**大白话解释这个报错例子**

`{{ $('If').item.json. }}` 结尾的 `.` 后面什么都没有，就像一句话说了一半没了下文。n8n 不知道你要取什么字段，于是报"语法无效"。
{% endhint %}

要解决这个错误，请检查你的[表达式语法（expression syntax）](../expressions-versus-data-nodes.md)，确保它符合预期格式。
