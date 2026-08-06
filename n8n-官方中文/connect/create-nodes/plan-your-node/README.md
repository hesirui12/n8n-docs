---
contentType: overview
nodeTitle: Plan your node
originalFilePath: integrations/creating-nodes/plan/index.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/plan'
url: 'https://docs.n8n.io/connect/create-nodes/plan-your-node'
layout:
  description:
    visible: false
---

# 规划一个节点（Plan a node）

本节提供如何设计你的节点的指导，包括一些关键的技术决策，例如选择你的节点构建风格。

在开始构建节点之前，你需要先做出以下设计选择：

* 你需要构建哪种[节点类型](choose-a-node-type.md)。
* 使用哪种[节点构建风格](choose-a-node-building-style.md)。
* 你的[UI 设计与 UX（用户体验）原则](node-ui-design.md)。
* 你的节点的[文件结构](choose-node-file-structure.md)。

{% hint style="info" %}
**小白提示：为什么「规划」这一步这么重要？**

很多新手拿到需求就急着写代码，结果写了一半才发现：想做的功能根本不适合用当前的构建风格实现；文件结构乱到连自己都维护不了；UI 字段太多，用户根本看不懂该填什么。与其事后返工，不如先花十几分钟把上面这 4 个决策想清楚。这 4 个决策基本决定了你后面几小时甚至几天的工作量，是性价比最高的一步。
{% endhint %}
