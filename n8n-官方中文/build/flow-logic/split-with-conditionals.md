---
description: 使用 IF 和 Switch 节点把工作流拆分成多条路径
contentType: howto
nodeTitle: 用条件节点拆分
originalFilePath: flow-logic/splitting.md
originalUrl: 'https://docs.n8n.io/flow-logic/splitting'
url: 'https://docs.n8n.io/build/flow-logic/split-with-conditionals'
layout:
  description:
    visible: false
---

# 用条件节点拆分工作流 / Splitting workflows with conditional nodes

拆分（splitting）使用的是 [IF](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.if)（如果）或 [Switch](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.switch)（开关）节点。它能把单分支的工作流变成多分支的工作流。这是在 n8n 中表达复杂逻辑的关键一环。

对比下面这两个工作流：

!["Diagram representing two workflows. One has three steps and follows a linear process, with a user submitting a bug, and the workflow emailing a support team. The second workflow starts the same way, but then splits depending on whether the user marked the issue as urgent. It then splits again depending on the user's support plan"](../.gitbook/assets/single-multi-branch-workflow.png)

{% hint style="info" %}
**大白话**：上面两张图里，上面的工作流是一条直线：用户提交 bug → 发邮件给支持团队，不管什么情况都走同一条路。下面的工作流就「聪明」多了：先判断用户有没有把问题标为「紧急」，再根据用户的套餐（support plan）继续分流，不同情况走不同分支、做不同处理。这就是拆分（splitting）和条件节点（conditional nodes）的威力。
{% endhint %}

这就是拆分和条件节点（conditional nodes）在 n8n 中的威力所在。

具体用法请参阅 [IF](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.if) 或 [Switch](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.switch) 的文档。
