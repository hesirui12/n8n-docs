---
title: n8n 集成（Integrations）文档与指南
contentType: overview
hide:
  - feedback
  - kapaButton
nodeTitle: Integrations
originalFilePath: integrations/index.md
originalUrl: https://docs.n8n.io/integrations
url: https://docs.n8n.io/integrations/
description: >-
  访问 n8n 集成（Integrations）文档与指南。这里有丰富的资料，帮助你使用不同类型的节点掌握应用集成，从而改进你的自动化工作流。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: false
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 节点（Nodes）

{% hint style="info" %}
**大白话**：这一页是 n8n 集成的「总目录」。n8n 里把「集成」叫做「节点」——节点就是你搭自动化流程时用的一块块积木：有的负责取数据，有的负责处理数据，有的负责把数据发出去。本页告诉你有哪些类型的节点、怎么用内置节点、怎么装社区节点，以及没有现成节点时该怎么办。
{% endhint %}

n8n 把集成称为节点（nodes）。

节点是 n8n 工作流的基本积木。它们可以是获取数据的入口、处理数据的函数，也可以是发送数据的出口。数据处理包括过滤、重组和修改数据。对于你的 API、服务或应用，可以有 1 个或几个节点。你可以把多个节点连接起来，从而创建复杂的工作流。

## 内置节点（Built-in nodes）

n8n 自带一系列内置集成。关于 n8n 所有内置节点的文档，请参阅 [内置节点（Built-in nodes）](builtin/node-types.md)。

## 社区节点（Community nodes）

除了使用内置节点，你也可以安装由社区构建的节点。更多信息请参阅 [社区节点（Community nodes）](community-nodes/installation-and-management/README.md)。

## 仅凭据节点与自定义操作（Credential-only nodes and custom operations）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/k23mQunNshTkLRuOqark/" %}

更多信息请参阅 [自定义操作（Custom operations）](builtin/custom-api-actions-for-existing-nodes.md)。

## 通用集成（Generic integrations）

如果你需要连接一个 n8n 没有对应节点（或只有仅凭据节点）的服务，你仍然可以使用 [HTTP Request](builtin/core-nodes/n8n-nodes-base.httprequest/README.md) 节点。关于如何设置身份认证和创建 API 调用的细节，请参阅该节点的页面。

## 下一步去哪（Where to go next）

* 如果你想创建自己的节点，请前往 [创建节点（Creating Nodes）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/create-nodes/overview) 部分。
* 查看 [社区节点（Community nodes）](community-nodes/using-community-nodes.md)，了解如何安装和管理社区构建的节点。
* 如果你想更深入地了解 n8n 中的各种节点、它们的功能和用法示例，可以查看 n8n 的节点库：[核心节点（Core nodes）](builtin/core-nodes/README.md)、[动作节点（Actions）](builtin/app-nodes/README.md) 和 [触发器节点（Triggers）](builtin/trigger-nodes/README.md)。
* 如果你想学习如何为不同节点添加凭据，请前往 [凭据（Credentials）](builtin/credentials/README.md) 部分。
