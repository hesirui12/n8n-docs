---
title: Declarative-style parameters
description: >-
  A reference document listing the declarative-style parameters of the node base
  file.
contentType: reference
nodeTitle: Declarative-style parameters
originalFilePath: >-
  integrations/creating-nodes/build/reference/node-base-files/declarative-style-parameters.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/node-base-files/declarative-style-parameters
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files/declarative-style-parameters
layout:
  description:
    visible: false
---

# 声明式参数（Declarative-style parameters）

以下是声明式（declarative-style）节点的[节点基础文件](README.md)可用的参数。

本文档提供简短的代码片段，帮助你理解代码结构和概念。要查看构建节点的完整逐步教程（包含真实世界的代码示例），请参考[构建声明式节点](../../tutorial-build-a-declarative-style-node.md)。

适用于所有节点的参数，请参考[标准参数（Standard parameters）](standard-parameters.md)。

## `methods` 和 `loadOptions`

_对象（Object）_ | _可选（Optional）_

`methods` 包含 `loadOptions` 对象。你可以用 `loadOptions` 去查询服务，获取「用户专属的设置」，然后把它们返回并渲染在图形界面（GUI）中，这样用户就可以在后续的查询中使用这些选项。该对象必须包含如何查询服务的路由信息（routing），以及定义如何处理返回选项的输出设置（output）。例如：

```js
methods : {
	loadOptions: {
		routing: {
			request: {
				url: '/webhook/example-option-parameters',
				method: 'GET',
			},
			output: {
				postReceive: [
					{
						// When the returned data is nested under another property
						// Specify that property key
						type: 'rootProperty',
						properties: {
							property: 'responseData',
						},
					},
					{
						type: 'setKeyValue',
						properties: {
							name: '={{$responseItem.key}} ({{$responseItem.value}})',
							value: '={{$responseItem.value}}',
						},
					},
					{
						// If incoming data is an array of objects, sort alphabetically by key
						type: 'sort',
						properties: {
							key: 'name',
						},
					},
				],
			},
		},
	}
},
```

{% hint style="info" %}
**小白解读**：上面这段代码的意思是——当用户打开某个下拉框时，n8n 先去请求 `/webhook/example-option-parameters` 这个地址拿回一批选项数据，然后经过三道「后处理」（`postReceive`）：①如果返回的数据嵌套在某个属性下面，就先用 `rootProperty` 指明该属性名把真正的数组取出来；②用 `setKeyValue` 把每项数据转成「显示名 + 值」的键值对形式（`$responseItem` 代表当前这一项数据）；③用 `sort` 按 `name` 字段做字母排序。这样下拉框里就能显示出整理好的选项。
{% endhint %}

## `routing`

_对象（Object）_ | _必填（Required）_

`routing` 是一个用在操作（operations）和输入字段对象中的 `options` 数组里的对象。它包含一次 API 调用的详细信息。

下面的代码示例来自[声明式教程](../../tutorial-build-a-declarative-style-node.md)。它建立了一个与 NASA API 的集成。示例展示了如何用 `requestDefaults` 来设置基本的 API 调用信息，以及如何用 `routing` 来为每个操作补充信息。

```js
description: INodeTypeDescription = {
  // Other node info here
  requestDefaults: {
			baseURL: 'https://api.nasa.gov',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
    properties: [
      // Resources here
      {
        displayName: 'Operation'
        // Other operation details
        options: [
          {
            name: 'Get'
            value: 'get',
            description: '',
            routing: {
              request: {
                method: 'GET',
                url: '/planetary/apod'
              }
            }
          }
        ]
      }
    ]
}
```

（要点：`requestDefaults` 定义所有请求的公共默认值——根地址 `baseURL`、公共请求头等；每个操作里的 `routing.request` 再补充该操作特有的细节，比如 `method`（HTTP 方法）和 `url`（相对路径，会自动拼在 `baseURL` 后面）。

## `version`

_数字（Number）_ 或 _数组（Array）_ | _可选（Optional）_

如果你的节点只有一个版本，这里可以是一个数字。如果你想支持多个版本，就把它变成一个数组，里面放每个节点版本的编号。

n8n 支持两种节点版本管理方法，但**声明式节点必须使用轻量版本管理（light versioning）方式**。更多信息请参考[节点版本管理](../versioning.md)。

## `features`

_对象（Object）_ | _可选（Optional）_

定义针对节点版本进行评估的、已命名的功能开关（feature flags）。用 `features` 可以通过 `displayOptions` 里的 `@feature` 来控制参数的可见性。

更多信息请参考[基于功能的版本管理（Feature-based versioning）](../versioning.md#feature-based-versioning)。
