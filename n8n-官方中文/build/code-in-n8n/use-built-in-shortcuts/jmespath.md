---
description: 一种用于在 n8n 中使用 JMESPath 库的方法。
contentType: reference
hide:
  - toc
nodeTitle: JMESPath
originalFilePath: code/builtin/jmespath.md
originalUrl: 'https://docs.n8n.io/code/builtin/jmespath'
url: 'https://docs.n8n.io/build/code-in-n8n/use-built-in-shortcuts/jmespath'
layout:
  description:
    visible: false
---

# JMESPath 方法 / JMESPath method

这是 n8n 内置的一个方法，用于配合 [JMESPath](../../work-with-data/handle-special-data-types/query-json-data.md) 库来使用。

{% hint style="info" %}
**大白话**：JMESPath 是一种「JSON 查询语言」。当你的数据是复杂的 JSON 对象（一层套一层）时，用 JMESPath 写一句简洁的查询表达式，就能把里面某个深层的数据挑出来，比一层层写代码方便得多。想了解 JMESPath 的基础语法，可以先看上面链接的「查询 JSON 数据」文档。
{% endhint %}

{% hint style="info" %}
**Python 支持**

你可以在 Code 节点（代码节点）中使用 Python，但它不能用在表达式（expressions）里。
{% endhint %}

{% tabs %}
{% tab title="JavaScript" %}
| 方法（Method） | 说明（Description） | 是否可在 Code 节点中使用？ |
| ------ | ----------- | :-------------------------: |
| `$jmespath()` | 使用 JMESPath 对 JSON 对象执行搜索（从 JSON 里查询并提取数据）。 | ✅ |
{% endtab %}

{% tab title="Python" %}
| 方法（Method） | 说明（Description） |
| ------ | ----------- |
| `_jmespath()` | 使用 JMESPath 对 JSON 对象执行搜索（从 JSON 里查询并提取数据）。 |
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**大白话**：用法很简单——在 Code 节点里直接调用即可。JavaScript 里写 `$jmespath()`，Python 里写 `_jmespath()`，把 JSON 数据和一个 JMESPath 查询表达式传进去，函数就会返回查询结果。例如用 `$jmespath("items[0].name")` 就能取出 `items` 数组第一个元素的 `name` 字段。注意：`$` 开头的写法是 JavaScript 专用（前缀是 `$`），Python 里对应的是下划线 `_` 开头的写法。
{% endhint %}
