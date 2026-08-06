---
contentType: reference
nodeTitle: Code standards
originalFilePath: integrations/creating-nodes/build/reference/code-standards.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/build/reference/code-standards'
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/code-standards
layout:
  description:
    visible: false
---

# 代码标准（Code standards）

在构建节点时遵循既定的代码标准，可以让你的代码更易读、更易维护，也有助于避免错误。本文档提供节点构建的良好代码实践指导，重点是代码层面的细节。关于 UI 标准和 UX 指导，请参考[节点 UI 设计](../../plan-your-node/node-ui-design.md)。

## 使用代码检查器（Use the linter）

n8n 节点检查器（node linter）会自动检查许多节点构建标准。在发布节点之前，你应该确保你的节点通过检查器的检查。更多信息请参考 [n8n 节点检查器](../../test-your-node/node-linter.md)文档。

## 使用 n8n-node 工具（Use the n8n-node tool）

n8n 推荐使用 [`n8n-node` CLI 工具](../using-the-n8n-node-tool.md)来构建和测试你的节点。如果你计划[提交你的节点进行验证](../../deploy-your-node/submit-community-nodes.md#submit-your-node-for-verification-by-n8n)，这一点尤其重要。这可以确保你的节点具有正确的结构并符合社区节点要求，还能简化代码检查和测试。

## 用 TypeScript 编写（Write in TypeScript）

n8n 的所有代码都是 TypeScript。用 TypeScript 编写你的节点可以加快开发速度并减少 bug。

{% hint style="info" %}
**小白提示**：TypeScript 是 JavaScript 的「带类型版本」——它能帮你在写代码时及时发现错误（比如把字符串当数字用），n8n 生态也全部用它。所以写节点时请用 `.ts` 后缀写代码，而不是纯 `.js`。
{% endhint %}

## 编写节点的详细指南（Detailed guidelines for writing a node）

这些指南适用于你构建的任何节点。

### 资源和操作（Resources and operations）

如果你的节点可以执行多个操作，请把设置操作的参数命名为 `Operation`。如果你的节点可以在多个资源上执行这些操作，请创建一个 `Resource` 参数。下面的代码示例展示了一个基本的资源和操作设置：

```js
export const ExampleNode implements INodeType {
    description: {
        displayName: 'Example Node',
        ...
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                options: [
                    {
                        name: 'Resource One',
                        value: 'resourceOne'
                    },
                    {
                        name: 'Resource Two',
                        value: 'resourceTwo'
                    }
                ],
                default: 'resourceOne'
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                // Only show these operations for Resource One
                displayOptions: {
                    show: {
                        resource: [
                            'resourceOne'
                        ]
                    }
                },
                options: [
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create an instance of Resource One'
                    }
                ]
            }
        ]
    }
}
```

（结构说明：`Resource` 下拉框让用户选择操作对象（资源一或资源二）；`Operation` 下拉框让用户选择动作，并通过 `displayOptions.show` 做到「只在选中资源一时才显示这些操作」。）

### 复用内部参数名（Reuse internal parameter names）

n8n 节点中的所有资源和操作字段都有两个设置：显示名称（用 `name` 参数设置）和内部名称（用 `value` 参数设置）。为字段复用内部名称，可以让 n8n 在用户切换操作时保留用户已输入的数据。

例如：你在构建一个资源名为 'Order'（订单）的节点。这个资源有几个操作，包括 Get（获取）、Edit（编辑）和 Delete（删除）。每个操作都用一个订单 ID 来对指定订单执行操作。你需要向用户显示一个 ID 字段。这个字段有一个显示标签和一个内部名称。通过在每个资源的操作 ID 字段上使用相同的内部名称（在 `value` 中设置），用户可以在选中 Get 操作时输入 ID，即使切换到 Edit 也不会丢失它。

在复用内部名称时，你必须确保同一时间只有一个字段对用户可见。你可以用 `displayOptions` 来控制这一点。

## 编写编程式节点的详细指南（Detailed guidelines for writing a programmatic-style node）

这些指南适用于使用编程式（programmatic）节点构建风格构建节点时。它们与声明式风格无关。关于不同节点构建风格的更多信息，请参考[选择你的节点构建方式](../../plan-your-node/choose-a-node-building-style.md)。

### 不要修改传入的数据（Don't change incoming data）

永远不要修改节点收到的传入数据（即用 `this.getInputData()` 访问的数据），因为所有节点都共享它。如果你需要添加、更改或删除数据，请克隆传入的数据并返回新数据。如果你不这样做，在当前节点之后执行的同级节点将基于被修改过的数据运行，从而处理错误的数据。

并不总是需要克隆所有数据。例如，如果一个节点修改了二进制（binary）数据但没有修改 JSON 数据，你可以创建一个新数据项，让它复用对 JSON 数据项的引用。

### 使用内置的请求库（Use the built in request library）

一些第三方服务在 npm 上有自己的库，这会让创建集成变得更容易。这些包的问题是，你多了一个依赖（外加这个依赖的所有依赖）。这增加了越来越多的代码，它们必须被加载，还可能引入安全漏洞、bug 等等。相反，请使用内置模块：

```typescript
// If no auth needed
const response = await this.helpers.httpRequest(options);

// If auth needed
const response = await this.helpers.httpRequestWithAuthentication.call(
	this, 
	'credentialTypeName', // For example: pipedriveApi
	options,
);
```

（第一行 `httpRequest` 用于不需要认证的请求；第二行 `httpRequestWithAuthentication` 会在发送请求前自动把节点的凭据附加进去，第一个参数要传你的凭据类型名，例如 `pipedriveApi`。）

这使用的是 npm 包 [Axios](https://www.npmjs.com/package/axios)。

更多信息请参考 [HTTP 辅助方法（HTTP helpers）](http-request-helpers.md)，以及已移除的 `this.helpers.request` 的迁移说明。
