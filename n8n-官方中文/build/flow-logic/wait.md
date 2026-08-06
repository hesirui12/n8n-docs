---
title: 等待（Waiting）
description: 如何让你的工作流执行「等一等」。
contentType: howto
nodeTitle: Wait
originalFilePath: flow-logic/waiting.md
originalUrl: 'https://docs.n8n.io/flow-logic/waiting'
url: 'https://docs.n8n.io/build/flow-logic/wait'
layout:
  description:
    visible: false
---

# 等待（Waiting）

「等待」功能允许你让工作流在执行到**一半时暂停**，然后从暂停的地方继续执行，并且继续使用**相同的数据**。当你需要限制对某个服务的调用频率（rate limit），或者需要等待某个外部事件完成时，这个功能非常有用。你可以等待一段指定的时间，或者一直等到某个 Webhook 被触发。

{% hint style="info" %}
**大白话解释：工作流「暂停再继续」是什么意思？**

普通的工作流就像一条流水线，从头跑到尾。而加了 Wait（等待）节点后，流水线跑到等待节点那里会先「停下来」，过一段时间（或者等某个外部事件发生）再继续往下跑。而且继续跑的时候，后面的节点拿到的是暂停时的同一份数据，不会丢。
{% endhint %}

让工作流等待，需要使用 [Wait](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.wait)（等待）节点。具体用法请参考该节点的文档。

{% hint style="info" %}
**大白话解释：什么时候会用上「等待」？**

- 调用某个 API 有频率限制（比如每分钟最多 10 次），你可以每调一次就等 6 秒，防止被限流。
- 你在等外部系统给你回消息（比如等支付回调、等别人审核完），可以先把工作流挂起来，等 Webhook 一触发再继续。
{% endhint %}

n8n 提供了一个工作流模板，其中包含一个基础的 [Rate limiting and waiting for external events（限流与等待外部事件）](https://n8n.io/workflows/1749-rate-limiting-and-waiting-for-external-events/) 示例。
