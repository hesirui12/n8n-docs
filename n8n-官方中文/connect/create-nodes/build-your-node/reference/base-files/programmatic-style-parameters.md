---
title: Programmatic-style parameters
description: >-
  A reference document listing the programmatic-style parameters of the node
  base file.
contentType: reference
nodeTitle: Programmatic-style parameters
originalFilePath: >-
  integrations/creating-nodes/build/reference/node-base-files/programmatic-style-parameters.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/node-base-files/programmatic-style-parameters
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files/programmatic-style-parameters
layout:
  description:
    visible: false
---

# 编程式参数（Programmatic-style parameters）

以下是编程式（programmatic-style）节点的[节点基础文件](README.md)可用的参数。

本文档提供简短的代码片段，帮助你理解代码结构和概念。要查看构建节点的完整逐步教程（包含真实世界的代码示例），请参考[构建编程式节点](../../tutorial-build-a-programmatic-style-node.md)。

编程式节点还会使用 `execute()` 方法。更多信息请参考[编程式 execute 方法](programmatic-style-execute-method.md)。

适用于所有节点的参数，请参考[标准参数（Standard parameters）](standard-parameters.md)。

## `defaultVersion`

_数字（Number）_ | _可选（Optional）_

在使用完整版本管理（full versioning）方式时，使用 `defaultVersion`。

n8n 支持两种节点版本管理方法。更多信息请参考[节点版本管理](../versioning.md)。

## `methods` 和 `loadOptions`

_对象（Object）_ | _可选（Optional）_

包含编程式节点的 `loadOptions` 方法。你可以用这个方法去查询服务，获取「用户专属的设置」（例如从 Gmail 获取用户的邮件标签），然后把它们返回并渲染在图形界面（GUI）中，这样用户就可以在后续的查询中使用这些选项。

例如，n8n 的 [Gmail 节点](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Gmail/Gmail.node.ts)就使用 `loadOptions` 来获取所有邮件标签：

```js
	methods = {
		loadOptions: {
			// Get all the labels and display them
			async getLabels(
				this: ILoadOptionsFunctions,
			): Promise<INodePropertyOptions[]> {
				const returnData: INodePropertyOptions[] = [];
				const labels = await googleApiRequestAllItems.call(
					this,
					'labels',
					'GET',
					'/gmail/v1/users/me/labels',
				);
				for (const label of labels) {
					const labelName = label.name;
					const labelId = label.id;
					returnData.push({
						name: labelName,
						value: labelId,
					});
				}
				return returnData;
			},
		},
	};
```

（这段代码做了什么：定义了一个叫 `getLabels` 的加载函数，它调用 Gmail 的「获取所有标签」接口，把返回的每个标签转成 `{name, value}` 形式的选项（显示名 + 内部值），返回给 n8n。之后你在别的参数里声明「从 `getLabels` 加载选项」，用户的下拉框里就会实时出现 Gmail 里的标签。）

## `version`

_数字（Number）_ 或 _数组（Array）_ | _可选（Optional）_

在使用轻量版本管理（light versioning）方式时，使用 `version`。

如果你的节点只有一个版本，这里可以是一个数字。如果你想支持多个版本，就把它变成一个数组，里面放每个节点版本的编号。

n8n 支持两种节点版本管理方法。编程式节点可以任选其一。更多信息请参考[节点版本管理](../versioning.md)。

## `features`

_对象（Object）_ | _可选（Optional）_

定义针对节点版本进行评估的、已命名的功能开关（feature flags）。用 `features` 可以通过 `displayOptions` 里的 `@feature` 来控制参数的可见性，或者在代码中用 `this.isNodeFeatureEnabled()` 来检查功能是否开启。

更多信息请参考[基于功能的版本管理（Feature-based versioning）](../versioning.md#feature-based-versioning)。
