---
title: AI Workflow Builder
status: beta
nodeTitle: AI Workflow Builder
originalFilePath: advanced-ai/ai-workflow-builder.md
originalUrl: https://docs.n8n.io/advanced-ai/ai-workflow-builder
url: https://docs.n8n.io/build/ways-of-building-workflows/ai-workflow-builder
description: >-
  Create, refine, and debug workflows using natural language descriptions of
  your goals.
hidden: true
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

# 使用 AI 工作流构建器（Use AI Workflow Builder）

AI 工作流构建器（AI Workflow Builder）让你可以用**自然语言**（大白话）描述你的目标，从而创建、优化和调试工作流。

它会替你处理整个工作流的构建过程，包括**节点的选择、摆放和配置**，从而大大减少构建一个可用工作流所需的时间。

{% hint style="info" %}
**小白解释：** 传统方式建工作流，你要自己把一个个节点（Node，n8n 里的功能积木）拖到画布上，再逐个配置参数，比较繁琐。AI 工作流构建器相当于一个「智能助手」，你把需求用文字说出来，它帮你把积木搭好、连好、配置好。
{% endhint %}

关于 AI 工作流构建器的定价和可用性，请参见 [n8n 套餐与价格](https://n8n.io/pricing/)。

## 使用构建器（Working with the builder）

1. **描述你的工作流：** 你可以选择一个示例提示词，或者直接用自然语言描述你的需求。
2. **观察构建过程：** 构建器会分几个阶段实时给你反馈，你可以看到它正在做什么。
3. **审查并优化生成的工作流：** 检查需要填写的凭据（Credentials，账号/密钥等认证信息）和其他参数，然后继续用提示词来优化工作流。

    ![ai-workflow-builder.png](../.gitbook/assets/ai-workflow-builder.png)

### 可以在构建器中运行的命令（Commands you can run in the builder）

* `/clear`：清空 LLM（大语言模型）的上下文，让你从零开始重新来。

{% hint style="info" %}
**小白解释——什么是 LLM 上下文？**
上下文（Context）就是 AI 记住的「当前对话的相关信息」。如果你发现 AI 一直在受前面对话的影响、回答跑偏了，输入 `/clear` 可以清空这些记忆，让它「失忆」，从头开始构建。
{% endhint %}

## 了解积分（Understanding credits）

### 积分如何运作（How credits work）

每次你向构建器发送一条消息，要求它创建或修改工作流，就算一次**交互（interaction）**，会消耗 **1 个积分（credit）**。

✅ **算作一次交互的情况**

* 发送消息创建一个新工作流
* 让构建器修改一个现有的工作流
* 工作流构建完成后，点击构建器窗口中的 **Execute and refine**（执行并优化）按钮

❌ **不算作一次交互的情况**

* 发送失败或产生生成错误的消息
* 你手动点击停止按钮取消的请求

### 获取更多积分（Getting more credits）

如果你已经用完了每月的积分额度，可以升级到更高的套餐。

关于套餐和定价的详情，请参见 [n8n 套餐与价格](https://n8n.io/pricing/)。

## AI 模型与数据处理（AI model and data handling）

以下数据会发送给 LLM（大语言模型）：

* 你提供的、用于创建/优化/调试工作流的文字提示词；
* 节点定义、参数和连接关系，以及当前的工作流定义；
* 使用构建器时加载的任何模拟执行数据（mock execution data）。

以下数据**不会**发送：

* 你使用的任何凭据（Credentials）的详情；
* 工作流过去的执行记录。

{% hint style="info" %}
**小白解释——为什么这个很重要？**
简单说：AI 能看到「你的工作流长什么样」（结构、参数），但**看不到你的密码和密钥**，也看不到历史上跑过的真实数据。这保证了你的敏感信息不会泄露给 AI 服务商。
{% endhint %}
