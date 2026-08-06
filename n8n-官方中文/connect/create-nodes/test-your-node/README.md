---
contentType: overview
nodeTitle: Test your node
originalFilePath: integrations/creating-nodes/test/index.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/test'
url: 'https://docs.n8n.io/connect/create-nodes/test-your-node'
layout:
  description:
    visible: false
---

# 测试一个节点（Test a node）

本节包含关于测试你的节点的信息。

测试节点有两种方式：

* 手动测试：在本地 n8n 实例中[运行你的节点](run-your-node-locally.md)。
* 自动测试：使用 [linter](node-linter.md)（代码规范检查器）。

在发布你的节点之前，你应该同时使用这两种方法。

{% hint style="info" %}
**小白提示：为什么要两种都做？**

- **手动测试**回答的是「功能对不对」：节点真的能跑通吗？参数传对了吗？返回的数据对吗？——只有真人实际操作一遍才知道。
- **自动测试（linter）**回答的是「代码规不规范」：文件命名对吗？有没有忘加必须的配置？有没有潜在 bug？——这些靠人眼检查既慢又容易漏，交给工具最靠谱。

两者分工不同，缺一不可。先 linter 扫一遍，再本地跑一遍，是发布前最省心的组合拳。
{% endhint %}
