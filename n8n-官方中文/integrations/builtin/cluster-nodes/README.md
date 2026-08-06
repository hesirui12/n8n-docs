---
contentType: overview
title: Cluster nodes（集群节点）
description: '了解 n8n 中的集群节点（Cluster nodes），并浏览集群节点库。'
nodeTitle: Cluster nodes
originalFilePath: integrations/builtin/cluster-nodes/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/cluster-nodes'
url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes'
layout:
  description:
    visible: false
---

# 集群节点（Cluster nodes）

{% hint style="info" %}
**大白话**：集群节点（Cluster nodes）是 n8n 里"AI 功能"的统称，它们总是成组出现：一个**根节点**（Root node，比如 AI Agent、Basic LLM Chain）负责发号施令，一个或多个**子节点**（Sub-nodes，比如 Chat Model、Tool、Memory、Retriever）挂上去干具体活。想搭 AI 工作流，就是拖一个根节点，再把需要的子节点接上去。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/nQYOCBZiuZBtHlBAOFq9/" %}

## 根节点（Root nodes）

每个集群都以一个[根节点](#user-content-fn-1)[^1]开始。

## 子节点（Sub-nodes）

每个根节点可以挂一个或多个子节点[^2]。

[^1]: 每个 n8n 集群节点都包含一个根节点，它定义了集群的主要功能。一个或多个子节点挂到根节点上，扩展它的功能。
[^2]: n8n 集群节点由一个或多个连接到根节点上的子节点组成。子节点扩展根节点的功能，提供对特定服务或资源的访问，或提供特定类型的专用处理（比如计算器功能）。
