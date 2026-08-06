---
title: Standard parameters
description: A reference document listing the standard parameters of the node base file.
contentType: reference
nodeTitle: Standard parameters
originalFilePath: >-
  integrations/creating-nodes/build/reference/node-base-files/standard-parameters.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/node-base-files/standard-parameters
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files/standard-parameters
layout:
  description:
    visible: false
---

# 标准参数（Standard parameters）

以下是[节点基础文件](README.md)的标准参数。它们对所有节点类型都一样。

## `displayName`

_字符串（String）_ | _必填（Required）_

这是用户在 n8n 图形界面（GUI）中看到的名称。

## `name`

_字符串（String）_ | _必填（Required）_

对象的内部名称。用于在节点的其他地方引用它。

## `icon`

_字符串（String）_ 或 _对象（Object）_ | _必填（Required）_

为特定节点指定图标。n8n 推荐上传你自己的图片文件。

你可以把图标文件名作为字符串提供，也可以作为一个对象来处理浅色（light）和深色（dark）模式的不同图标。
如果该图标在浅色和深色模式下都适用，就使用以 `file:` 开头的字符串，表示图标文件的路径。例如：

```
icon: 'file:exampleNodeIcon.svg'
```
要为浅色和深色模式提供不同的图标，请使用包含 `light` 和 `dark` 属性的对象。例如：
```
icon: { 
  light: 'file:exampleNodeIcon.svg', 
  dark: 'file:exampleNodeIcon.dark.svg' 
}
```

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/dGOXJYk0OQgOLlRpyJnn/" %}

{% hint style="info" %}
**上面这行是什么？** 官方「可复用内容块」，在线渲染时自动展开（内容是图标设置的通用建议，比如建议图标用 64x64 的 SVG 等）。本地原样保留。
{% endhint %}

## `group`

_字符串数组（Array of strings）_ | _必填（Required）_

告诉 n8n 节点在工作流运行时表现如何。可选值为：

* `trigger`：节点等待触发。
* `schedule`：节点等待计时器到期。
* `input`、`output`、`transform`：这些目前没有实际效果。
* 空数组 `[]`。如果你不需要 `trigger` 或 `schedule`，就把它作为默认选项。

## `description`

_字符串（String）_ | _必填（Required）_

节点的简短描述。n8n 在图形界面（GUI）中使用它。

## `defaults`

_对象（Object）_ | _必填（Required）_

包含必要的品牌和名称设置。

该对象可以包含：

* `name`：字符串。如果 `displayName` 太长，就用作画布上的节点名称。
* `color`：字符串。十六进制颜色代码。提供集成的品牌色，供 n8n 使用。

## `forceInputNodeExecution`

_布尔值（Boolean）_ | _可选（Optional）_

在构建多输入节点时，你可以选择强制让所有分支上的所有前置节点都在本节点运行之前执行完毕。默认值为 `false`（只要求一个输入分支运行）。

## `inputs`

_字符串数组（Array of strings）_ | _必填（Required）_

命名输入连接器。控制节点在输入侧有几个连接器。如果你只需要一个连接器，使用 `inputs: [NodeConnectionTypes.Main]`。

## `outputs`

_字符串数组（Array of strings）_ | _必填（Required）_

命名输出连接器。控制节点在输出侧有几个连接器。如果你只需要一个连接器，使用 `outputs: [NodeConnectionTypes.Main]`。

## `requiredInputs`

_整数（Integer）_ 或 _数组（Array）_ | _可选（Optional）_

用于多输入节点。按编号指定哪些输入必须有数据（它们所在的分支必须已运行），节点才能执行。

## `credentials`

_对象数组（Array of objects）_ | _必填（Required）_

这个参数告诉 n8n 凭据选项。每个对象定义一个认证类型。

该对象必须包含：

* `name`：凭据名称。必须与凭据文件中的 `name` 属性一致。例如，[`Asana.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Asana/Asana.node.ts) 中的 `name: 'asanaApi'` 就链接到 [`AsanaApi.credential.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/credentials/AsanaApi.credentials.ts) 中的 `name = 'asanaApi'`。
* `required`：布尔值。指定使用这个节点是否需要认证。

## `requestDefaults`

_对象（Object）_ | _必填（Required）_

设置节点发起的 API 调用的基本信息。

该对象必须包含：

* `baseURL`：API 的基础 URL。

你还可以添加：

* `headers`：一个对象，描述 API 调用的请求头，例如内容类型（content type）。
* `url`：字符串。会追加到 `baseURL` 后面。你通常可以省略它。更常见的做法是在 `operations` 中提供它。

## `properties`

_对象数组（Array of objects）_ | _必填（Required）_

这里包含定义节点行为的资源（resource）和操作（operations）对象，以及用来设置必填字段和可选字段（可以接收用户输入）的对象。

### 资源对象（Resource objects）

资源对象包含以下参数：

* `displayName`：字符串。这里应该永远是 `Resource`。
* `name`：字符串。这里应该永远是 `resource`。
* `type`：字符串。告诉 n8n 使用哪个 UI 元素，以及期望什么输入类型。例如，`options` 会让 n8n 添加一个下拉框，让用户从中选择一个选项。更多信息请参考[节点 UI 元素](../node-ui-elements.md)。
* `noDataExpression`：布尔值。禁止对该参数使用表达式。对 `resource` 来说必须永远是 `true`。

### 操作对象（Operations objects）

操作对象定义了在某个资源上可执行的操作。

* `displayName`：字符串。这里应该永远是 `Options`。
* `name`：字符串。这里应该永远是 `option`。
* `type`：字符串。告诉 n8n 使用哪个 UI 元素，以及期望什么输入类型。例如，`dateTime` 会让 n8n 添加一个日期选择器。更多信息请参考[节点 UI 元素](../node-ui-elements.md)。
* `noDataExpression`：布尔值。禁止对该参数使用表达式。对 `operation` 来说必须永远是 `true`。
* `options`：对象数组。每个对象描述一个操作的细节，例如它的路由（routing）、它使用的 REST 动词等。一个 `options` 对象包含：
	* `name`：字符串。
	* `value`：字符串。
	* `action`：字符串。这个参数把资源和操作组合在一起。你应该始终包含它，因为 n8n 会在未来版本中使用它。例如，给定一个名为 `"Card"` 的资源和一个 `"Get all"` 操作，你的 `action` 就是 `"Get all cards"`。
	* `description`：字符串。
	* `routing`：包含请求细节的对象。

### 附加字段对象（Additional fields objects）

这些对象定义可选参数。n8n 会在图形界面（GUI）中把它们显示在 **Additional Fields（附加字段）** 之下。用户可以选择要设置哪些参数。

这些对象必须包含：

```js
displayName: 'Additional Fields',
name: 'additionalFields',
// The UI element type
type: ''
placeholder: 'Add Field',
default: {},
displayOptions: {
  // Set which resources and operations this field is available for
  show: {
    resource: [
      // Resource names
    ],
    operation: [
      // Operation names
    ]
  },
}
```

（`displayOptions.show` 用来声明这个附加字段适用于哪些资源和操作——只有满足条件时，用户才能在界面上看到并添加它。）

关于 UI 元素类型的更多信息，请参考[UI 元素](../node-ui-elements.md)。
