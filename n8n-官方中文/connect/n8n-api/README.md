---
title: n8n 公开 REST API 文档与指南（Documentation and Guides）
description: >-
  访问 n8n 公开 REST API 文档与指南。查找通过公开 API 以编程方式完成任务的
  全面资源，而不必使用图形界面。
contentType: overview
search:
  boost: 5
hide:
  - feedback
  - kapaButton
nodeTitle: n8n API
originalFilePath: api/index.md
originalUrl: 'https://docs.n8n.io/api'
url: 'https://docs.n8n.io/connect/'
layout:
  description:
    visible: false
---

# n8n 公开 REST API（n8n public REST API）

{% hint style="info" %}
**功能可用性（Feature availability）**

免费试用期间不提供 n8n API。请升级后使用该功能。
{% endhint %}

通过 n8n 的公开 API[^1]，你可以用编程的方式完成许多与图形界面（GUI）中相同的任务。本节介绍 n8n 的 REST API，包括：

* 如何[认证（authenticate）](authentication.md)
* [分页（Paginating）](pagination.md) 结果
* 使用[内置 API 试验场（built-in API playground）](use-an-api-playground.md)（仅限自托管 n8n）
* [端点参考（endpoint reference）](api-reference.md)

n8n 还提供了一个 [n8n API 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.n8n)，方便你在工作流中调用 API。

{% hint style="info" %}
**小白提示**：API 就是「别人给程序预留的遥控器」。你在网页上点按钮做的事（创建工作流、跑一次执行、看结果），用 API 都能让程序自动做。比如每天定时让外部系统调一次你的 n8n 接口，就能自动触发工作流，完全不用人工。
{% endhint %}

## 选择你的交互方式（Choose your interaction method）

### REST API（本节）（REST API (This section)）
直接用 HTTP 请求与 n8n 交互。适合：
- 自定义集成和应用
- 与语言无关的 HTTP 调用
- 在工作流中直接使用 REST API

### n8n CLI（推荐开发者使用）（n8n CLI (Recommended for developers)）
使用 [n8n CLI](../README.md) 获得命令行体验。它封装了公开 API，并针对以下场景做了优化：
- 命令行自动化和脚本编写
- CI/CD 流水线集成
- AI 代理集成（Claude Code、Cursor 等）
- 喜欢命令行工具的开发者

## 了解 REST API（Learn about REST APIs）

本文档假定你已经熟悉 REST API。如果你还不熟悉，下面这些资源可能对你有帮助：

* [KnowledgeOwl 的 API 使用指南](https://support.knowledgeowl.com/help/working-with-apis)：基础入门，包含如何调用 REST API 的示例。
* [IBM Cloud Learn Hub - 什么是应用程序编程接口（API）](https://www.ibm.com/cloud/learn/api)：对 API 的总体但偏技术性的介绍。
* [IBM Cloud Learn Hub - 什么是 REST API？](https://www.ibm.com/cloud/learn/rest-apis)：关于 REST API 更详细的介绍。
* [MDN 网络文档 - HTTP 概览](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)：REST API 基于 HTTP 运行，并使用 HTTP 动词（或方法）来指定要执行的操作。

{% hint style="info" %}
**使用 API 试验场（Use the API playground）**

在[试验场（playground）](use-an-api-playground.md)里试试 API，可以帮助你理解 API 的工作原理。如果担心改动真实数据，可以考虑先搭一个测试工作流或测试用 n8n 实例，安全地探索。
{% endhint %}

[^1]: API（应用程序编程接口，application programming interfaces）提供对服务数据和功能的编程式访问。API 让软件更容易与外部系统交互。它们通常作为传统用户界面（通过浏览器或 UI 访问）之外的另一种选择。
