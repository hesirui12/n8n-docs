---
description: 了解 n8n 自动化中的核心组件。
---

# 工作流 / Workflows

工作流（Workflow）[^1] 就是把一个个节点（Node）连接起来，用来自动化完成某个流程的组合。


- [创建](create-and-run-workflows.md)一个工作流。
- 使用[工作流模板](../ways-of-building-workflows/use-templates.md)（Workflow templates）帮助你快速上手。
- 了解 n8n 自动化中的核心[组件](workflow-components/README.md)。
- 使用[执行记录](understand-executions/README.md)（Executions）列表来排查问题。
- 在用户之间[共享](../manage-workflows/share-with-others.md)工作流。

{% hint style="info" %}
**大白话**：工作流就像一条流水线。你把一个个"节点"（可以理解成一个个小工具/小步骤）用线连起来，n8n 就会按顺序帮你自动干活，把复杂的事情拆成一步步搞定。
{% endhint %}

如果你是第一次搭建工作流，可以先用[快速入门指南](https://app.gitbook.com/s/CxSeOtVxqqhfxMSac0AV/build-your-first-workflow)，快速体验一下 n8n 的功能。

[^1]: n8n 工作流是一组用来自动化某个流程的节点集合。当触发条件发生时，工作流开始执行，并按照顺序依次运行，最终完成复杂的任务。
