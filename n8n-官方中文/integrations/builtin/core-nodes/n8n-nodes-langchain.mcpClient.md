---
title: MCP 客户端（MCP Client）节点文档
description: >-
  学习如何在 n8n 中使用 MCP 客户端（MCP Client）节点。参考技术文档，
  将 MCP 客户端节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: MCP 客户端（MCP Client）节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-langchain.mcpClient.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcpClient
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcpClient
layout:
  description:
    visible: false
---

# MCP 客户端（MCP Client）节点

> **大白话**：MCP（Model Context Protocol，模型上下文协议）是一种"AI 工具插头标准"——很多服务（比如 Notion、GitHub）会暴露一个 MCP 服务器，上面挂着各种"工具"。这个节点让你在 n8n 工作流里**直接调用外部 MCP 服务器上的工具**，把工具当成普通步骤用。比如调用 Notion 的 MCP 工具去创建页面、查数据库。如果你想把这些工具**喂给 AI 智能体**（让 AI 自己决定何时调用），请改用「MCP Client Tool」节点。

MCP 客户端节点是一个 [模型上下文协议（Model Context Protocol，MCP）](https://modelcontextprotocol.io/introduction) 客户端，允许你使用外部 MCP 服务器暴露的工具。

你可以使用 MCP 客户端节点，把 MCP 工具当作工作流中的普通步骤来使用。

如果你想把这些 MCP 工具当作 AI 智能体的工具来使用，请改用 [MCP Client Tool 节点](../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp.md)。

{% hint style="info" %}
**凭据（Credentials）**

MCP 客户端节点支持 [Bearer](../credentials/httprequest.md#using-bearer-auth)、通用 [header（请求头）](../credentials/httprequest.md#using-header-auth)、多个请求头，以及 [OAuth2](../credentials/httprequest.md#using-oauth2) 身份验证方法。
{% endhint %}

## 节点参数（Node parameters）

使用以下参数配置节点。

* **Server Transport（服务器传输协议）**：你要连接的 MCP 服务器端点使用的传输协议。
* **MCP Endpoint URL（MCP 端点 URL）**：外部 MCP 服务器的 URL。例如，`https://mcp.notion.com/mcp`。
* **Authentication（身份验证）**：向你的 MCP 服务器进行身份验证的方法。MCP 客户端节点支持 [bearer](../credentials/httprequest.md#using-bearer-auth)、通用 [header（请求头）](../credentials/httprequest.md#using-header-auth)、多个请求头，以及 [OAuth2](../credentials/httprequest.md#using-oauth2) 身份验证。选择 **None（无）** 则尝试不带身份验证地连接。
	* **Multiple Headers Auth（多请求头认证）**：当你的 MCP 服务器需要多个请求头时使用，例如一个 API key 加一个用户名。在凭据中把每个请求头作为 **Name（名称）** 和 **Value（值）** 键值对添加。你需要多少请求头就可以添加多少。
* **Tool（工具）**：选择要在节点中使用的工具。工具列表会自动从外部 MCP 服务器获取。
* **Input Mode（输入模式）**：
	* **Manual（手动）**：手动指定每个工具参数。
	* **JSON**：以 JSON 对象的形式指定工具参数。对于带嵌套参数的工具，使用此模式。

> **小白提示**：MCP 工具和普通 API 的区别有点像"插座标准"——只要对方支持 MCP，n8n 就能自动发现它上面有哪些工具（列表自动拉取），不用你手动一个个配请求格式。

## 选项（Options）

* **Convert to Binary（转换为二进制）**：是否把图片和音频转换为二进制数据。如果为 false，图片和音频会以 base64 编码字符串的形式返回。
* **Timeout（超时时间）**：等待工具调用完成的毫秒数。

> **小白提示**：超时就是"最多等多久"。如果工具偶尔很慢，可以适当调大；如果经常超时失败，说明对方服务器慢或参数有问题。

## 模板和示例（Templates and examples）

[浏览 MCP 客户端节点文档集成模板](https://n8n.io/integrations/mcp-client) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

要在 AI 智能体中使用 MCP 工具，n8n 提供了 [MCP Client Tool 节点](../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp.md)。

n8n 还有一个 [MCP 服务器触发器（MCP Server Trigger）](n8n-nodes-langchain.mcptrigger.md) 节点，可以让你把 n8n 的工具暴露给外部的 AI 智能体。

关于协议、服务器和客户端的更多细节，请参考 [MCP 文档](https://modelcontextprotocol.io/introduction) 和 [MCP 规范](https://modelcontextprotocol.io/specification/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Yl56nEscwQQAbBUeWfvp/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
