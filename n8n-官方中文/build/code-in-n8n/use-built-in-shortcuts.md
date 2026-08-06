---
description: n8n 的内置自定义方法与变量。
contentType: overview
nodeTitle: 使用内置快捷方法
originalFilePath: code/builtin/overview.md
originalUrl: 'https://docs.n8n.io/code/builtin/overview'
url: 'https://docs.n8n.io/build/code-in-n8n/use-built-in-shortcuts'
layout:
  description:
    visible: false
---

# 内置方法与变量 / Built-in methods and variables

n8n 提供了**内置方法（methods）和变量（variables）**，用来处理数据、访问 n8n 自身的各种数据。本节提供一份可用方法与变量的速查参考（每个都有简短说明），供你在**表达式（expressions）**[^1] 中使用。

{% hint style="info" %}
**大白话（这是什么）**：想象 n8n 提前帮你写好了一堆「常用工具函数」和「常用信息入口」，都以 `$` 开头（比如 `$json` 拿当前数据、`$now` 拿当前时间、`$if()` 做条件判断）。你不用自己造轮子，直接调用就行。这份参考就是这些工具的「说明书目录」。
{% endhint %}

{% hint style="warning" %}
**表达式编辑器和代码节点（Code node）中的可用性差异**

这份参考里的方法/变量**并不是每一个都能在[代码节点（Code node）](cookbook/code-node/README.md)里用**。代码节点（Code node）运行的是「原生的 Luxon」之上的纯 JavaScript，而不是 n8n 的表达式引擎，所以任何在参考页里标注为 **Source: Custom n8n functionality（来源：n8n 自定义功能）** 的条目（例如 [`DateTime.format()`](../work-with-data/transform-data/expression-reference/datetime.md#datetimeformat)），都是 **n8n 独有的扩展**——在代码节点（Code node）里它可能不存在，或者行为不一样。

如果代码节点（Code node）里的代码报错 `... is not a function`（某方法不存在），或者**静默地产生错误结果**（不报错但结果不对）：

* 先查一下这个方法的参考条目是不是被标注为 **Custom n8n functionality（n8n 自定义功能）**。
* 找一个原生 Luxon 或 JavaScript 的等价写法。例如，用 [`toFormat()`](https://moment.github.io/luxon/api-docs/index.html#datetimetoformat) 代替 n8n 独有的 `DateTime.format()`。
* 留意那些「两处都有、但参数签名不同」的方法，例如 `DateTime.plus()` / `DateTime.minus()`：n8n 表达式版本接受 `(amount, unit)`（数量和单位两个参数），而原生 Luxon 版本只接受一个类似 Duration（时长）的对象（如 `{ days: 7 }`）。在代码节点（Code node）里用表达式风格的写法**不会报错，但也得不到预期结果**。

本节列出的所有数据转换函数（顶层辅助函数，如 `$if()` 或 `$jmespath()`）**只能在表达式编辑器里用，不能在代码节点（Code node）里用**。
{% endhint %}

{% hint style="info" %}
**大白话（为什么有区别）**：表达式和代码节点（Code node）的「运行环境」不是同一个：表达式走 n8n 自研的引擎，代码节点（Code node）走标准 JavaScript + Luxon 库。所以 n8n 给表达式额外开的小灶功能（Custom n8n functionality）在代码节点里就没有。遇到 `is not a function` 或结果不对时，优先怀疑这个，换成原生写法就好。
{% endhint %}

[烹饪书（Cookbook）](README.md) 里包含一些常见任务的示例，其中包括一些[仅代码节点（Code node only）](cookbook/code-node/README.md)专用的函数。

[^1]: 在 n8n 中，表达式（expressions）允许你通过执行 JavaScript 代码来动态填充节点参数。与其提供一个写死的静态值，你可以用 n8n 的表达式语法，根据前面节点的数据、其他工作流或你的 n8n 环境（environment）来定义参数的值。
