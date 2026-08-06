---
title: LangChain Code 节点文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: LangChain Code node documentation
originalFilePath: integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.code.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.code
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.code
description: >-
  学习如何在 n8n 中使用 LangChain Code 节点。按照技术文档把 LangChain Code 节点集成到你的工作流中。
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
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# LangChain Code（LangChain 代码节点）

{% hint style="info" %}
**大白话**：LangChain Code 节点是一个「万能插件」：n8n 没做出来的 AI 功能，你可以在这个节点里直接写 JavaScript 代码调用 LangChain 库来实现。**但是要注意：这个节点有严重的安全漏洞，已经被官方弃用并从节点面板里隐藏了，强烈不建议在生产环境使用。** 它也只在自托管（self-hosted）的 n8n 上可用，云端（Cloud）用不了。
{% endhint %}

使用 LangChain Code 节点来导入 LangChain。这意味着，如果你需要的功能 n8n 还没有对应的节点，你仍然可以使用它。通过配置 LangChain Code 节点的连接器，你可以把它当作普通节点（app node）、根节点（root node）或子节点（sub-node）使用。

在这个页面上，你可以找到节点参数、配置节点的指导，以及更多资源的链接。

{% hint style="warning" %}
**因安全问题被弃用（Deprecated due to security issues）**

这个节点存在严重的安全问题，使用不安全。它已被弃用，并从节点面板中隐藏。请避免在工作流中使用它。
{% endhint %}

{% hint style="info" %}
**云端不可用（Not available on Cloud）**

这个节点只在自托管的 n8n 上可用。
{% endhint %}

## 节点参数（Node parameters）

### Add Code（添加代码）

添加你的自定义代码。选择 **Execute（执行）** 或 **Supply Data（提供数据）** 模式。你只能使用其中一种模式。

与 [Code 节点](../../core-nodes/n8n-nodes-base.code/README.md) 不同，LangChain Code 节点不支持 Python。

* **Execute（执行）**：像 n8n 自己的 Code 节点一样使用 LangChain Code 节点。它从工作流接收输入数据，处理后作为节点输出返回。此模式需要一个主输入（main input）和一个主输出（main output）。你必须在 **Inputs（输入）** 和 **Outputs（输出）** 中创建这些连接。
* **Supply Data（提供数据）**：把 LangChain Code 节点当作子节点使用，把数据发送给一个根节点。它使用 main（主）之外的输出类型。

默认情况下，你不能在这个节点中加载内置或外部模块。自托管用户可以[启用内置和外部模块](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration)。

### Inputs（输入）

选择输入类型。

主输入（main input）是所有 n8n 工作流中都有的标准连接器。如果节点中设置了主输入和主输出，则必须使用 **Execute（执行）** 代码。

### Outputs（输出）

选择输出类型。

主输出（main output）是所有 n8n 工作流中都有的标准连接器。如果节点中设置了主输入和主输出，则必须使用 **Execute（执行）** 代码。

## 节点输入和输出配置（Node inputs and outputs configuration）

通过配置 LangChain Code 节点的连接器（输入和输出），你可以把它当作应用节点（app node）、根节点（root node）或子节点（sub-node）使用。

![Screenshot of a workflow with four LangChain nodes, configured as different node types](../../../.gitbook/assets/create-node-types.png)

| 节点类型（Node type） | 输入（Inputs） | 输出（Outputs） | 代码模式（Code mode） |
| ---------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------- | ----------- |
| 应用节点（App node）。类似于 [Code 节点](../../core-nodes/n8n-nodes-base.code/README.md)。 | Main（主） | Main（主） | Execute |
| 根节点（Root node） | Main（主）；至少一个其他类型 | Main（主） | Execute |
| 子节点（Sub-node） | - | main 之外的类型。必须与你想要连接的输入类型匹配。 | Supply Data |
| 带子节点的子节点（Sub-node with sub-nodes） | main 之外的类型 | main 之外的类型。必须与你想要连接的输入类型匹配。 | Supply Data |

{% hint style="info" %}
**大白话（四种用法的区别）**：把 LangChain Code 当成「普通节点」用，就是输入数据 → 处理 → 输出（选 Execute）；当成「根节点」用，就是它像 AI Agent 一样是流程的主干，接收子节点供数据（还是选 Execute）；当成「子节点」用，就是它去给别的根节点供数据（选 Supply Data）。一句话：只要它有主输入/主输出就走 Execute，纯粹给别人供数据就走 Supply Data。
{% endhint %}

## 内置方法（Built-in methods）

n8n 提供这些方法，让在 LangChain Code 节点中完成常见任务更容易。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iIcw3xaOoa9HryGmR8dX/" %}

## 模板和示例（Templates and examples）

[浏览 LangChain Code 节点文档集成模板](https://n8n.io/integrations/langchain-code) 或[搜索全部模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
