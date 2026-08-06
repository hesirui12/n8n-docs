---
contentType: overview
title: Root nodes（根节点）
description: '了解 n8n 中的根节点（Root nodes），并浏览根节点库。'
nodeTitle: Root nodes
originalFilePath: integrations/builtin/cluster-nodes/root-nodes/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes'
url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes'
layout:
  description:
    visible: false
---

# 根节点（Root nodes）

{% hint style="info" %}
**大白话**：根节点（Root nodes）是「AI 功能的总指挥」。在 n8n 里，AI 相关的节点分成几类：根节点（比如 AI Agent、Basic LLM Chain）负责接收任务、发号施令；子节点（sub-nodes，比如 Chat Model、Tool、Memory）负责干具体活，被根节点调用。想搭 AI 工作流，一般就是先拖一个根节点，再把需要的子节点接上去。
{% endhint %}

根节点（Root nodes）是一组集群节点（cluster nodes）中的基础节点。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/nQYOCBZiuZBtHlBAOFq9/" %}
