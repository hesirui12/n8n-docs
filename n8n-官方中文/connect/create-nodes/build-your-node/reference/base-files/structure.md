---
title: Structure of the node base file
description: A reference document detailing the basic structure of the node base file.
contentType: reference
nodeTitle: Structure
originalFilePath: integrations/creating-nodes/build/reference/node-base-files/structure.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/node-base-files/structure
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files/structure
layout:
  description:
    visible: false
---

# 节点基础文件的结构（Structure of the node base file）

节点基础文件遵循以下基本结构：

1. 添加导入（import）语句。
2. 为节点创建一个类（class）。
3. 在节点类内部，创建一个 `description` 对象，它定义了节点本身。

编程式节点还有一个 `execute()` 方法，它读取传入的数据和参数，然后构建一个请求。声明式风格则通过 `description` 内 `properties` 对象中的 `routing` 键来处理这一点。

## 声明式节点的结构概要（Outline structure for a declarative-style node）

下面的代码片段给出了节点结构的概要：

```js
import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class ExampleNode implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details here
		properties: [
			// Resources and operations here
		]
	};
}
```

（声明式节点只有一个 `description` 对象，里面用 `properties` 数组声明资源和操作，靠 `routing` 描述 API 调用。）

适用于所有节点类型的参数，请参考[标准参数](standard-parameters.md)。声明式节点可用的参数，请参考[声明式参数](declarative-style-parameters.md)。

## 编程式节点的结构概要（Outline structure for a programmatic-style node）

下面的代码片段给出了节点结构的概要：

```js
import { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';

export class ExampleNode implements INodeType {
	description: INodeTypeDescription = {
    // Basic node details here
    properties: [
      // Resources and operations here
    ]
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    // Process data and return
  }
};
```

（和声明式节点相比，编程式节点多了一个 `execute()` 方法——所有数据处理和请求构建的逻辑都写在这里面，最后返回处理好的数据。）

适用于所有节点类型的参数，请参考[标准参数](standard-parameters.md)。关于编程式节点的更多信息，请参考[编程式参数](programmatic-style-parameters.md)和[编程式 execute 方法](programmatic-style-execute-method.md)。
