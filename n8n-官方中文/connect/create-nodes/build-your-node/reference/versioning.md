---
contentType: howto
nodeTitle: 版本管理
originalFilePath: integrations/creating-nodes/build/reference/node-versioning.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/node-versioning
url: 'https://docs.n8n.io/connect/create-nodes/build-your-node/reference/versioning'
layout:
  description:
    visible: false
---

# 节点版本管理

n8n 支持节点版本管理。你可以通过引入新版本对现有节点做出更改，而不会破坏现有行为。

要了解 n8n 如何决定加载哪个节点版本：

* 如果用户使用版本 1 构建并保存了工作流，即使你创建并发布了节点的版本 2，n8n 在该工作流中仍继续使用版本 1。
* 当用户创建新工作流并浏览节点时，n8n 总是加载节点的最新版本。

{% hint style="info" %}
**版本管理类型受节点风格限制**

如果你使用声明式风格（declarative style）构建节点，则不能使用完整版本管理（full versioning）。
{% endhint %}

{% hint style="info" %}
**小白提示**：为什么要给节点做版本管理？因为节点更新可能改变参数结构，旧工作流按旧参数配置的会坏掉。有了版本管理：老工作流继续用老版本、照常运行；新工作流用新版本、享受新功能。两边都不受影响。
{% endhint %}

## 轻量版本管理（Light versioning）

所有节点类型都可用。

一个节点可以包含多个版本，允许小的版本增量而无需重复代码。要使用此功能：

1. 把主 `version` 参数改成一个数组，并添加你的版本号，包括你现有的版本。
2. 然后你可以在任何对象的 `displayOptions` 中使用 `@version` 访问版本参数（以控制 n8n 在哪些版本下显示该对象）。你也可以在函数中使用 `const nodeVersion = this.getNode().typeVersion;` 查询版本。

例如，假设你想给 [声明式节点教程](../tutorial-build-a-declarative-style-node.md) 中的 NasaPics 节点添加版本管理，并配置一个资源让 n8n 只在版本 2 中显示它。在你的基础文件 `NasaPics.node.ts` 中：

```js
{
    displayName: 'NASA Pics',
    name: 'NasaPics',
    icon: 'file:nasapics.svg',
    // List the available versions
    version: [1,2,3],
    // More basic parameters here
    properties: [
        // Add a resource that's only displayed for version2
        {
            displayName: 'Resource name',
            // More resource parameters
            displayOptions: {
                show: {
                    '@version': 2,
                },
            },
        },
    ],
}
```

## 基于功能的版本管理（Feature-based versioning）

功能标志（feature flags）让你可以根据与节点版本绑定的命名功能来控制参数可见性和执行逻辑。

{% hint style="info" %}
**小白提示**：功能标志 = 给每个「功能开关」起个名字（如 `useNewApi` 用新 API），再用版本条件声明「哪些版本开启这个开关」。这样同一段代码就能根据版本走不同的逻辑，不用复制整个节点。
{% endhint %}

### 定义功能（Defining features）

给你的节点类型描述添加一个 `features` 对象。每个功能使用 `@version` 条件来指定哪些版本启用它：

```js
{
    version: [2, 2.1, 2.2, 2.3, 2.4],
    features: {
        useNewApi: { '@version': [{ _cnd: { gte: 2.2 } }] },
        useLegacyAuth: { '@version': [{ _cnd: { lte: 2.1 } }] },
        useSpecialMode: { '@version': [2] },
    },
    // More basic parameters here
}
```

可用的条件：`gte`（大于等于）、`lte`（小于等于）、`gt`（大于）、`lt`（小于）。传入一个普通版本号来精确匹配特定版本。

### 在 `displayOptions` 中使用 `@feature`

在 `displayOptions` 中使用 `@feature` 来根据功能标志控制参数可见性：

```js
{
    displayName: 'New API Field',
    name: 'newApiField',
    type: 'string',
    displayOptions: {
        show: {
            '@feature': ['useNewApi'],
        },
    },
}
```

要在功能**未**启用时显示参数，使用条件语法：

```js
displayOptions: {
    show: {
        '@feature': [{ _cnd: { not: 'useNewApi' } }],
    },
}
```

你可以把 `@feature` 与其他显示条件组合：

```js
displayOptions: {
    show: {
        resource: ['myResource'],
        '@feature': [{ _cnd: { eq: 'useNewApi' } }],
    },
}
```

### 在代码中检查功能

在执行上下文（例如 `IExecuteFunctions` 或 `IWebhookFunctions`）中使用 `this.isNodeFeatureEnabled()`：

```js
if (this.isNodeFeatureEnabled('useNewApi')) {
    // Process with new API
} else {
    // Process with legacy API
}
```

## 完整版本管理（Full versioning）

声明式风格的节点不可用。

参考 [Mattermost 节点](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Mattermost) 作为示例。

完整版本管理总结：

- 基础节点文件应该继承 `NodeVersionedType` 而不是 `INodeType`。
- 基础节点文件应该包含一个 description，其中包含 `defaultVersion`（通常是最新版本）、其他基本节点元数据（如名称）以及版本列表。它不应该包含任何节点功能。
- n8n 建议使用 `v1`、`v2` 等作为版本文件夹名称。
