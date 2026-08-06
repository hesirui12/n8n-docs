---
title: MCP Client Tool 节点文档
description: >-
  了解如何在 n8n 中使用 MCP Client Tool 节点。阅读技术文档，把
  MCP Client Tool 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: MCP Client Tool 节点文档
originalFilePath: integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp
layout:
  description:
    visible: false
---

# MCP Client Tool 节点

> **大白话**：MCP 是 AI 界的"USB 接口"标准——让 AI 应用统一接外部工具。这个节点就是 MCP 的**客户端**：连上任意一个 MCP 服务器，把服务器暴露的工具交给你的 AI Agent 用。连接方式填 SSE 端点地址，认证支持 Bearer、Header、多 Header、OAuth2。还可以选择只暴露哪些工具给 Agent（全部/选中的/除了某些）。

MCP Client Tool 节点是一个 [Model Context Protocol（MCP）](https://modelcontextprotocol.io/introduction) 客户端，允许你使用外部 MCP 服务器暴露的工具。你可以把 MCP Client Tool 节点连到模型上，用 n8n Agent 调用外部工具。

{% hint style="info" %}
**凭据（Credentials）**

MCP Client Tool 节点支持 [Bearer](../../credentials/httprequest.md#using-bearer-auth)、通用 [header](../../credentials/httprequest.md#using-header-auth)、多个 headers 以及 [OAuth2](../../credentials/httprequest.md#using-oauth2) 认证方式。
{% endhint %}

## 节点参数

用下面的参数配置节点。

* **SSE Endpoint**（SSE 端点）：你要连接的 MCP 服务器的 SSE 端点地址。
* **Authentication**（认证）：连接你的 MCP 服务器的认证方式。MCP 工具支持 [bearer](../../credentials/httprequest.md#using-bearer-auth)、通用 [header](../../credentials/httprequest.md#using-header-auth)、多个 headers 以及 [OAuth2](../../credentials/httprequest.md#using-oauth2) 认证。选择 **None** 表示不带认证直接连接。
	* **Multiple Headers Auth**（多 Header 认证）：当你的 MCP 服务器需要不止一个 header 时使用（比如既要 API key 又要用户名）。在凭据里把每个 header 添加为 **Name**（名称）和 **Value**（值）对。你需要多少就能加多少。
* **Tools to Include**（要包含的工具）：选择把哪些工具暴露给 AI Agent：
	* **All**（全部）：暴露 MCP 服务器提供的全部工具。
	* **Selected**（选中的）：激活一个 **Tools to Include** 参数，你可以从中选择要暴露给 AI Agent 的工具。
	* **All Except**（除了……全部）：激活一个 **Tools to Exclude**（要排除的工具）参数，你可以选择不想分享给 AI Agent 的工具。AI Agent 将能访问 MCP 服务器上所有没被选中的工具。

## 模板与示例

[浏览 MCP Client Tool 节点集成模板](https://n8n.io/integrations/mcp-client-tool) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

n8n 还有一个 [MCP Server Trigger](../../core-nodes/n8n-nodes-langchain.mcptrigger.md) 节点，可以把 n8n 的工具暴露给外部 AI Agent 使用。

关于协议、服务器和客户端的更多细节，请参考 [MCP 文档](https://modelcontextprotocol.io/introduction) 和 [MCP 规范](https://modelcontextprotocol.io/specification/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Yl56nEscwQQAbBUeWfvp/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
