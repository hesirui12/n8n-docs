---
title: Microsoft Agent 365 Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft Agent 365 Trigger 节点。按照技术文档把 Microsoft Agent 365 Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Root nodes
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.microsoftagent365trigger/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.microsoftagent365trigger
url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.microsoftagent365trigger'
layout:
  description:
    visible: false
---

# Microsoft Agent 365 Trigger 节点（微软 Agent 365 触发器）

{% hint style="info" %}
**大白话**：Microsoft Agent 365 是微软的 AI 智能体平台（早期预览阶段）。这个触发器节点让你的 n8n 工作流能接收 Agent 365 发来的消息，并返回 AI 智能体的回复——也就是说，n8n 可以充当你在 Agent 365 里创建的智能体的「后台大脑」。注意：目前需要用微软的 Frontier 预览计划才能提前体验。
{% endhint %}

{% hint style="warning" %}
**早期预览（Early preview）**

这是用 Microsoft Agent 365 和 n8n 构建智能体的早期预览。你需要加入 [Frontier 预览计划](https://adoption.microsoft.com/copilot/frontier-program/) 才能提前使用 Microsoft Agent 365。
{% endhint %}

使用 Microsoft Agent 365 Trigger 节点来接收 Microsoft Agent 365 的消息，并用 AI 智能体能力来响应。这个节点让 n8n 可以充当你的 Agent 365 智能体的后端。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在这里](../../credentials/microsoftagent365.md)找到这个节点的认证信息。
{% endhint %}

## 节点连接器（Node connectors）

Microsoft Agent 365 Trigger 节点可以连接以下子节点：

- **Model（模型）**：连接一个语言模型（Chat model 子节点）来处理传入的消息
- **Memory（记忆）**：连接一个记忆（memory）子节点来保持对话上下文。在微软那边，一个 n8n 工作流会同时支撑多个 Agent 实例，所以多个用户会与同一个工作流交互。请仔细选择你的 session ID 键，把对话按各个 Agent 实例隔离开，防止会话历史在它们之间「串台」。
- **Tool（工具）**：连接工具子节点，给你的智能体增加额外能力

## 节点选项（Node options）

### Enable Microsoft Work IQ Tools for A365（为 A365 启用微软 Work IQ 工具）

打开这个选项，可以让你的智能体通过 Model Context Protocol (MCP) 访问微软 365 工具。默认：关。

启用后，选择以下一项：

- **All（全部）**：启用所有可用的微软 MCP 工具
- **Selected（选择）**：从列表中挑选特定工具：
	- Calendar（日历）
	- Mail（邮件）
	- SharePoint
	- Teams
	- Word
	- 以及更多

## Webhook 认证（Webhook authentication）

从 n8n 版本 2.25.7 和 2.26.2 开始，Microsoft Agent 365 Trigger 节点会在运行你的工作流之前验证每一个传入请求。节点会检查微软随每个请求发送的 Bot Framework 令牌，并确认它确实是微软为你的智能体签发的。节点会拒绝任何没有有效令牌的请求，所以即使别人知道了你的 webhook URL，也无法注入伪造的活动（activities）。

这个验证使用的是你的 [Microsoft Agent 365 凭据](../../credentials/microsoftagent365.md) 中的 **Client ID**。Client ID 必须与你的智能体应用注册（app registration）的应用程序（客户端）ID 匹配。如果不匹配，节点会拒绝来自微软的合法请求。

## 入门指南（Getting started）

我们建议按照以下资源来设置你的 Agent 365 集成：

1. [Microsoft Agent 365 开发者文档](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/)：使用 Microsoft Agent 365 构建智能体的官方文档
2. [Agent 365 CLI 文档](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli)：用于在 Azure 上部署和管理 Agent 365 应用程序的跨平台命令行工具

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Microsoft Agent 365 开发者文档](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
