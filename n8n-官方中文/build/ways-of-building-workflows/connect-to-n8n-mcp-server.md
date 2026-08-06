---
title: Build with MCP
status: beta
nodeTitle: Use n8n MCP server
url: https://docs.n8n.io/build/ways-of-building-workflows/connect-to-n8n-mcp-server
description: >-
  Understand what it means to build and
  run n8n workflows from MCP clients.
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

# 使用 MCP 构建（Build with MCP）

MCP（Model Context Protocol，模型上下文协议）是 AI 工具连接其他应用的一种**标准方式**。n8n 内置了一个 **MCP 服务器（MCP server）**，所以你可以直接在你喜欢的 AI 工具里——比如 Claude、ChatGPT 或编程 Agent——用文字描述你想要的工作流，AI 工具会直接连接到你的 n8n 实例，帮你**构建并运行**这个工作流。

{% hint style="info" %}
**小白解释——MCP 是什么？打个比方：**
MCP 就像 AI 世界的「USB 接口」。以前每个 AI 工具连外部软件都要各写各的「驱动程序」，很麻烦；现在大家统一用 MCP 这个标准接口，AI 工具只要支持 MCP，就能插上任何提供 MCP 服务的应用。n8n 提供 MCP 服务，就等于给 AI 工具开了一个「官方插座」，AI 可以直接指挥你的 n8n 干活。
{% endhint %}

本页介绍在 n8n 中使用 MCP 构建工作流是什么样的。至于具体的**安装配置、身份认证（authentication）和客户端配置**，请参考 **Connect**（连接）章节里的 MCP 指南。

{% hint style="info" %}
**准备好开始配置了吗？** 完整的操作指南在 Connect（连接）章节：

* [连接到 n8n MCP 服务器](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/connect-to-n8n-mcp-server) —— 启用服务器、认证客户端、开放工作流。
* [MCP 服务器工具参考](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/connect-to-n8n-mcp-server/mcp-server-tools-reference) —— MCP 客户端可以调用的每个工具。
{% endhint %}

## 什么是 MCP？（What is MCP?）

MCP（Model Context Protocol，模型上下文协议）是一个**开放标准**，用于把 AI 应用连接到外部系统。它定义了两个角色：

* **MCP 服务器（MCP server）：** 对外暴露一组工具（tools）和资源（resources）。n8n 提供了内置的 MCP 服务器，让 AI 应用可以和 n8n 的工作流及资源交互。
* **MCP 客户端（MCP client）：** 比如 Claude Desktop、Claude Code、Codex 或自定义 Agent——它连接到服务器，并**代表你**调用那些工具。

## 在 n8n 中使用 MCP 构建意味着什么（What building with MCP means in n8n）

当你把某个 AI 工具连接到 n8n 的 MCP 服务器后，你的 n8n 实例就变成了那个 AI 工具可以直接「施工」的地方。你不用再手动把节点拖到画布上、一个个连线，而是直接用**大白话**向你的 AI 工具描述想要的工作流，AI 就会在你的 n8n 里帮你把它搭好。

![Describing a workflow to build in n8n to Claude](../.gitbook/assets/build-n8n-workflow-claude.png)

* **创建新工作流**（通过一段描述即可），以及**编辑现有的工作流**（n8n 2.13 版本起支持）。
* **构建和管理数据表（Data Tables）**，用来在工作流之间存储和复用数据。
* **边做边迭代：** 运行和测试你刚构建的内容、查看结果、继续优化——全程在同一个对话里完成，不用切回编辑器。
* **搜索并运行**你已经有权访问的工作流。

[启用实例级 MCP 访问](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/connect-to-n8n-mcp-server#enabling-mcp-access)，然后就可以从 AI 应用里构建、测试和运行你的 n8n 工作流了。

### 相关的 MCP 功能（Related MCP features）

实例级 MCP 并不是 n8n 与 MCP 合作的唯一方式：

* **[MCP Server Trigger 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-langchain.mcptrigger)：** 把**单个工作流**变成它自己的 MCP 服务器，只对外暴露你在工作流里设计的那些工具。适合手工打造一个供其他 AI 应用调用的自定义 MCP 服务器。
* **[MCP Client Tool 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp)：** 反方向操作——让 n8n 工作流充当 **MCP 客户端**，去调用外部其他的 MCP 服务器。

{% hint style="info" %}
**小白解释——什么时候用哪种？**
* 想让**所有** AI 工具都能指挥你的 n8n 建流程 → 用**实例级 MCP**（本页介绍的方式）。
* 只想把**某一个特定工作流**的能力开放给 AI 工具 → 用 **MCP Server Trigger 节点**。
* 想让你的 n8n 工作流去调用**别人的 MCP 服务**（比如第三方 AI 工具）→ 用 **MCP Client Tool 节点**。
{% endhint %}

## 了解更多（Learn more）

* [连接到 n8n MCP 服务器](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/connect-to-n8n-mcp-server) —— 设置实例级 MCP 访问、认证客户端（OAuth2 或访问令牌）、开放工作流，并查看客户端示例。
* [MCP 服务器工具参考](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/connect-to-n8n-mcp-server/mcp-server-tools-reference) —— 所有可用工具及其参数的完整列表。
* [MCP Server Trigger 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-langchain.mcptrigger) —— 从单个工作流中开放工具。
