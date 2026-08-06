---
description: How to use console.log() or print()
contentType: howto
nodeTitle: Output to the browser console
originalFilePath: code/cookbook/code-node/console-log.md
originalUrl: 'https://docs.n8n.io/code/cookbook/code-node/console-log'
url: >-
  https://docs.n8n.io/build/code-in-n8n/cookbook/code-node/output-to-the-browser-console
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话：** 调试代码时，在 Code 节点里用 `console.log()`（JavaScript）或 `print()`（Python）可以把中间变量打印到浏览器控制台里查看。如果打印出来是 `[object Object]`，说明你打印的是一个对象，先用 `to_py()` 转成普通 Python 对象再打印。
{% endhint %}

# 在 Code 节点中用 `console.log()` 或 `print()` 输出到浏览器控制台 <a href="#output-to-the-browser-console-with-consolelog-or-print-in-the-code-node" id="output-to-the-browser-console-with-consolelog-or-print-in-the-code-node"></a>

你可以在 Code 节点中使用 `console.log()` 或 `print()`，在编写和调试代码时帮你查看信息。

关于如何打开浏览器控制台，可以参考 [Balsamiq 的这份指南](https://balsamiq.com/support/faqs/browserconsole/)。

## console.log（JavaScript） <a href="#consolelog-javascript" id="consolelog-javascript"></a>

关于 `console.log()` 的技术信息，参见 [MDN 开发者文档](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)。

例如，把下面的代码复制到 Code 节点里，然后打开控制台并运行该节点：

```js
let a = "apple";
console.log(a);
```

## print（Python） <a href="#print-python" id="print-python"></a>

关于 `print()` 的技术信息，参见 [Real Python 的指南](https://realpython.com/python-print/)。

例如，把你的 Code 节点**语言**设置为 **Python**，把下面的代码复制到节点里，然后打开控制台并运行该节点：

```python
a = "apple"
print(a)
```

### 处理输出为 `[object Object]` 的情况 <a href="#handling-an-output-of-object-object" id="handling-an-output-of-object-object"></a>

如果打印时控制台显示 `[object Object]`，请先检查数据类型，然后按需转换。

检查数据类型：

```python
print(type(myData))
```

#### JsProxy <a href="#jsproxy" id="jsproxy"></a>

如果 `type()` 输出的是 `<class 'pyodide.ffi.JsProxy'>`，你需要用 `to_py()` 把 JsProxy 转换成原生的 Python 对象。这种情况会在你处理 n8n 节点数据结构（比如节点的输入和输出）时出现。例如，你想打印工作流里上一个节点的数据：

```python
previousNodeData = _("<node-name>").all();
for item in previousNodeData:
	# item is of type <class 'pyodide.ffi.JsProxy'>
	# You need to convert it to a Dict
	itemDict = item.json.to_py()
	print(itemDict)
```

关于这个类的更多信息，参见 Pyodide 文档中的 [JsProxy](https://pyodide.org/en/stable/usage/api/python-api/ffi.html#pyodide.ffi.JsProxy)。
