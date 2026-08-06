---
contentType: overview
nodeTitle: Base files
originalFilePath: integrations/creating-nodes/build/reference/node-base-files/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/node-base-files
url: 'https://docs.n8n.io/connect/create-nodes/build-your-node/reference/base-files'
layout:
  description:
    visible: false
---

# 节点基础文件（Node base file）

节点基础文件（base file）包含你节点的核心代码。**所有节点都必须有一个基础文件。** 这个文件的内容取决于你构建的是声明式（declarative-style）节点还是编程式（programmatic-style）节点。关于应该选择哪种风格，请参考[选择你的节点构建方式](../../../plan-your-node/choose-a-node-building-style.md)。

{% hint style="info" %}
**小白提示**：基础文件就是你的节点「本体」——它告诉 n8n：这个节点叫什么、长什么样、有哪些配置项、每个操作怎么执行。下面的各个子页面会给出短小的代码片段，帮你理解代码结构和概念。
{% endhint %}

这些文档提供简短的代码片段，帮助你理解代码结构和概念。要查看构建节点的完整逐步教程（包含真实世界的代码示例），请参考[构建声明式节点](../../tutorial-build-a-declarative-style-node.md)或[构建编程式节点](../../tutorial-build-a-programmatic-style-node.md)。

你还可以探索 [n8n-nodes-starter](https://github.com/n8n-io/n8n-nodes-starter) 和 n8n 自己的[节点](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes)来获得更多示例。starter 包含可以在此基础上继续开发的基础示例。n8n 的 [Mattermost 节点](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Mattermost)是一个更复杂的编程式节点（包括版本管理）的好例子。

对所有节点，请参考：

* [节点基础文件的结构](structure.md)
* [标准参数（Standard parameters）](standard-parameters.md)

对声明式节点，请参考：

* [声明式参数（Declarative-style parameters）](declarative-style-parameters.md)

对编程式节点，请参考：

* [编程式参数（Programmatic-style parameters）](programmatic-style-parameters.md)
* [编程式 execute() 方法（Programmatic-style execute() method）](programmatic-style-execute-method.md)
