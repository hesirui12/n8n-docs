---
contentType: overview
nodeTitle: Overview
originalFilePath: integrations/creating-nodes/overview.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/overview'
url: 'https://docs.n8n.io/connect/create-nodes/overview'
layout:
  description:
    visible: false
---

# 创建节点（Creating nodes）

学习如何构建你自己的自定义节点[^1]。

本节包括以下内容：

* 如何规划你的节点开发，包括[选择哪种构建风格](plan-your-node/choose-a-node-building-style.md)。
* 针对不同节点构建风格的[教程](build-your-node/README.md)。
* 如何[测试你的节点](test-your-node/README.md)，包括如何使用 n8n 的[节点 Lint 检查器](test-your-node/node-linter.md)，以及[故障排查](test-your-node/troubleshooting.md)支持。
* 如何把你的节点[分享给社区](deploy-your-node/submit-community-nodes.md)、提交给 n8n 官方[审核验证](deploy-your-node/submit-community-nodes.md)，或者把它当作[私有节点](deploy-your-node/install-private-nodes.md)来使用。
* [参考资料](build-your-node/reference/README.md)，包括 UI 元素，以及组成一个节点的各个文件的信息。

{% hint style="info" %}
**小白提示：什么是「节点」？**

你可以把 n8n 想象成一个「乐高积木平台」，每个节点（node）就是一块积木。工作流（workflow）就是把一块块积木拼接起来，让数据像流水一样依次流过每一块积木：有的积木负责「等待某个事件发生」（触发器节点），有的积木负责「从外部服务取数据、发数据、处理数据」（动作节点）。本节整章讲的，就是「如何亲手打造一块属于你自己的积木」，然后把这块积木装进 n8n 里使用或分享给全世界。
{% endhint %}

## 前置条件（Prerequisites）

本节假定你已经具备以下条件：

* 对 JavaScript 和 TypeScript 有一定了解。
* 能够管理自己的开发环境，包括使用 git。
* 了解 npm，包括如何创建和发布 npm 包。
* 熟悉 n8n，特别是对[数据结构](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/understand-n8ns-data-structure)和[数据项关联（item linking）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/reference-data/link-data-items)有比较好的理解。

{% hint style="info" %}
**小白提示**：如果你暂时不太熟悉 JavaScript / TypeScript / npm，也别慌——可以先照着后面章节的示例动手抄一遍，边做边学。但「n8n 的数据结构」这一条真的建议先花一点时间看懂，因为节点的一切工作都围绕着「输入数据 → 处理 → 输出数据」这条主线展开，理解了数据长什么样，写节点时就不会一头雾水。
{% endhint %}

[^1]: 在 n8n 中，节点（node）是组成工作流的独立组件。节点决定工作流何时运行，允许你获取、发送和处理数据，可以定义流程控制逻辑，还能与外部服务连接。
