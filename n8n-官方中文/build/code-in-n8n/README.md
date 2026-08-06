---
title: n8n 中的代码：文档与指南
description: >-
  查看关于在 n8n 中使用代码（code）和表达式（expressions）的文档与指南，以及其他开发者资源。
contentType: overview
hide:
  - feedback
  - kapaButton
nodeTitle: n8n 中的代码
originalFilePath: code/index.md
originalUrl: 'https://docs.n8n.io/code'
url: 'https://docs.n8n.io/build/'
layout:
  description:
    visible: false
---

# n8n 中的代码 / Code in n8n

n8n 是一个低代码（low-code）工具。大白话解释：**绝大多数操作你不需要写代码，拖拖拽拽就能完成；但当需要更复杂的逻辑时，你随时可以加代码进去。** 它不逼你写代码，也欢迎你写代码。

## 在工作流中使用代码 / Code in your workflows

你的工作流（workflow）里有 **两个地方** 可以使用代码：

<div class="grid-cards-vertical cards" markdown>

- __表达式（Expressions）__

	使用表达式[^1]（expressions）来转换节点（node）里的[数据](../work-with-data/overview.md)。你可以在表达式中使用 JavaScript，也可以使用 n8n 的[内置方法与变量（Built-in methods and variables）](use-built-in-shortcuts.md)。

	[→ 表达式（Expressions）](../work-with-data/expressions-versus-data-nodes.md)

- __代码节点（Code node）__

	使用代码节点（Code node）给你的工作流添加 JavaScript 或 Python 代码。

	[→ 代码节点（Code node）](using-the-code-node.md)

</div>

{% hint style="info" %}
**大白话**：简单取值、格式化、算一算，用「表达式」写在参数框里最方便；要写完整逻辑（循环、数组处理、调外部库），就拖一个「代码节点（Code node）」进来写 JavaScript 或 Python。
{% endhint %}

## 其他技术资源 / Other technical resources

下面这些功能主要面向技术型用户（程序员、开发人员）。

### 技术节点 / Technical nodes

n8n 提供了核心节点（core nodes），能帮你轻松实现关键功能，比如 API 请求（API requests）、Webhook（网络钩子）、定时调度（scheduling）和文件处理（file handling）。

<div class="grid-cards-vertical cards" markdown>

- __写一个后端（Write a backend）__

	[HTTP Request](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.httprequest)（HTTP 请求）、[Webhook](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.webhook)（网络钩子）和 [Code](using-the-code-node.md)（代码）节点能帮你发起 API 调用、响应 webhook，以及在工作流中编写任意 JavaScript。

	用这些节点可以实现类似 [创建一个 API 接口（Create an API endpoint）](https://n8n.io/workflows/1750-creating-an-api-endpoint/) 的事情。

	[→ 核心节点（Core nodes）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes)

- __表达复杂逻辑（Represent complex logic）__

	你可以用 [If](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.if)（如果）、[Switch](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.switch)（分支选择）和 [Merge](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.merge)（合并）等节点搭建复杂流程。

	[→ 流程逻辑（Flow logic）](../flow-logic/README.md)

</div>

{% hint style="info" %}
**大白话**：HTTP Request 就像「替你的工作流向外部网站发请求」；Webhook 就像「开一个门，让外部系统主动把数据送进来」；If / Switch / Merge 分别是「如果/多路分支/合并数据」，用它们能把一个简单流程改造成一套复杂的业务逻辑。
{% endhint %}

### 其他开发者资源 / Other developer resources

<div class="grid-cards-vertical cards" markdown>

- __n8n API__

	n8n 提供了 API，你可以用编程的方式（写代码调用 API）完成很多在图形界面（GUI）里能完成的操作。n8n 还提供了一个 [n8n API 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.n8n)，可以在工作流里直接访问 API。

	[→ API](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api)

- __自托管（Self-host）__

	你可以自托管 n8n（把 n8n 部署在你自己控制的服务器上）。这样你的数据就保存在自己的基础设施里，不会经过别人的服务器。

	[→ 托管（Hosting）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n)

- __构建你自己的节点（Build your own nodes）__

	你可以构建自定义节点（custom nodes），安装到自己的 n8n 实例上，甚至发布到 [npm](https://www.npmjs.com/) 上供别人安装使用。

	[→ 创建节点（Creating nodes）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/create-nodes/overview)

</div>

{% hint style="info" %}
**大白话**：如果你的需求已经超出了「拖节点」的范畴——比如想用脚本批量管理 n8n、想完全掌控数据存在哪、或者想给 n8n 造一个自己的专属节点——那这三块资源就是为你准备的。
{% endhint %}

[^1]: 在 n8n 中，表达式（expressions）允许你通过执行 JavaScript 代码来动态填充节点参数。与其提供一个写死的静态值，你可以用 n8n 的表达式语法，根据前面节点的数据、其他工作流或你的 n8n 环境（environment）来定义参数的值。
