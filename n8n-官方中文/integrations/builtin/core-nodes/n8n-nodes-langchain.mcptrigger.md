---
title: MCP 服务器触发器（MCP Server Trigger）节点文档
description: >-
  学习如何在 n8n 中使用 MCP 服务器触发器（MCP Server Trigger）节点。参考技术文档，
  将 MCP 服务器触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: MCP 服务器触发器（MCP Server Trigger）节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger
layout:
  description:
    visible: false
---

# MCP 服务器触发器（MCP Server Trigger）节点

> **大白话**：这个节点让 n8n **反过来当"工具供应商"**——把 n8n 里已有的工具和工作流包装成一个 MCP 服务器，供外部的 MCP 客户端（比如 Claude Desktop、其它 AI 应用）来调用。也就是说：外面的 AI 想用你 n8n 里的工具，就通过这个节点提供的地址连进来，像点菜一样列出工具、挨个调用。

使用 MCP 服务器触发器节点，让 n8n 充当 [模型上下文协议（Model Context Protocol，MCP）](https://modelcontextprotocol.io/introduction) 服务器，把 n8n 的工具和工作流提供给 MCP 客户端使用。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/httprequest.md)找到此节点的身份验证信息。
{% endhint %}

## MCP 服务器触发器节点是如何工作的

MCP 服务器触发器节点充当 MCP 客户端进入 n8n 的入口。它的工作方式是暴露一个 URL，MCP 客户端可以与这个 URL 交互来访问 n8n 的工具。

与传统的[触发器节点](#用户内容备注-1)[^1]不同——传统触发器对事件作出响应，并把输出传给下一个[已连接的节点](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/workflow-components/connect-nodes-together)——MCP 服务器触发器节点只连接并执行[工具（tool）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/understand-ai-components/how-tools-work)节点。客户端可以列出可用的工具，并调用单个工具来完成工作。

你可以用 [自定义 n8n 工作流工具（Custom n8n Workflow Tool）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow.md) 节点把 n8n 工作流附加进来，暴露给客户端。

{% hint style="info" %}
**支持 Server-Sent Events (SSE) 和流式 HTTP（streamable HTTP）**

MCP 服务器触发器节点同时支持 [Server-Sent Events (SSE)](https://modelcontextprotocol.io/docs/concepts/transports#server-sent-events-sse)（一种建立在 HTTP 之上的长连接传输方式）和 [流式 HTTP（streamable HTTP）](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http)，用于客户端与服务器之间的连接。它目前不支持标准输入/输出（[stdio](https://modelcontextprotocol.io/docs/concepts/transports#standard-input%2Foutput-stdio)）传输方式。

> **小白提示**：传输方式就是"数据怎么在两边之间流动"。SSE 和流式 HTTP 都是走网络的；stdio 是"本机进程管道"，这个节点暂不支持。
{% endhint %}

## 节点参数（Node parameters）

使用这些参数配置你的节点。

### MCP URL

MCP 服务器触发器节点有两个 **MCP URL**：测试（test）和生产（production）。n8n 会在节点面板顶部显示这些 URL。

选择 **Test URL（测试 URL）** 或 **Production URL（生产 URL）** 来切换 n8n 显示哪个 URL。

* **Test（测试）**：当工作流未激活时，如果你选择 **Listen for Test Event（监听测试事件）** 或 **Execute workflow（执行工作流）**，n8n 会注册一个测试 MCP URL。当你调用这个 MCP URL 时，n8n 会在工作流中显示数据。
* **Production（生产）**：当你发布工作流时，n8n 会注册一个生产 MCP URL。使用生产 URL 时，n8n 不会在工作流中显示数据。你仍然可以查看生产执行的工作流数据：选择工作流中的 **Executions（执行记录）** 标签，然后选择你想查看的那次工作流执行。

> **小白提示**：测试 URL 用于开发调试（能看到每次调用进来了什么数据），生产 URL 用于正式上线（不再实时显示数据，想看历史从"执行记录"里找）。

### 身份验证（Authentication）

你可以要求连接到 MCP URL 的客户端进行身份验证。可选以下身份验证方法：

- Bearer auth（Bearer 令牌认证）
- Header auth（请求头认证）

关于如何配置每种凭据类型的更多信息，请参考 [HTTP 请求凭据](../credentials/httprequest.md)。

### 路径（Path）

默认情况下，此字段包含一个随机生成的 MCP URL 路径，以避免与其它 MCP 服务器触发器节点冲突。

你可以手动指定 URL 路径，包括添加路由参数。例如，当你用 n8n 做 API 原型、希望端点 URL 保持一致时，可能就需要这么做。

> **小白提示**：默认的随机路径每次重新生成都可能变；如果你想让地址固定（比如以后给外部系统配置白名单），就手动填一个固定路径。

## 模板和示例（Templates and examples）

[浏览 MCP 服务器触发器节点文档集成模板](https://n8n.io/integrations/mcp-server-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)

### 与 Claude Desktop 集成（Integrating with Claude Desktop）

你可以从 [Claude Desktop](https://claude.ai/download) 连接到 MCP 服务器触发器节点，方法是运行一个网关，把 SSE 消息代理给基于 stdio 的服务器。

为此，请在 Claude Desktop 的配置中添加以下内容：

```json
{
  "mcpServers": {
    "n8n": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "<MCP_URL>",
        "--header",
        "Authorization: Bearer ${AUTH_TOKEN}"
      ],
      "env": {
        "AUTH_TOKEN": "<MCP_BEARER_TOKEN>"
      }
    }
  }
}
```

请务必把 `<MCP_URL>` 和 `<MCP_BEARER_TOKEN>` 占位符替换为你的 MCP 服务器触发器节点参数和凭据中的实际值。

> **小白提示**：这段 JSON 就是告诉 Claude Desktop："去连接一个叫 n8n 的 MCP 服务器，地址填 MCP_URL，带一个 Bearer 令牌"。配置后，Claude Desktop 里就能直接调用你在 n8n 里暴露的工具了。

## 限制（Limitations）

### 在 webhook 副本（webhook replicas）场景下配置 MCP 服务器触发器节点

MCP 服务器触发器节点依赖 Server-Sent Events (SSE) 或流式 HTTP，这两种方式都需要**同一个服务器实例**来处理持久连接。当你在[队列模式（queue mode）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/scaling/enable-queue-mode)下运行 n8n 时，根据你的 [webhook 处理器（webhook processor）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/scaling/enable-queue-mode#webhook-processors) 配置，可能会出现问题：

* 如果你在队列模式下只使用**单个 webhook 副本（single webhook replica）**，MCP 服务器触发器节点可以正常工作。
* 如果你运行**多个 webhook 副本（multiple webhook replicas）**，你需要把所有 `/mcp*` 请求路由到**一个专用的 webhook 副本**上。创建一个只包含一个 webhook 容器的独立副本组，专门处理 MCP 请求。然后更新你的 ingress（入口）或负载均衡器配置，把所有 `/mcp*` 流量都指向那个实例。

{% hint style="warning" %}
**多 webhook 副本运行时请谨慎**

如果你用多个 webhook 副本运行 MCP 服务器触发器节点，但没有把所有 `/mcp*` 请求路由到单个专用 webhook 副本，你的 SSE 和流式 HTTP 连接会频繁断开，或无法可靠地传递事件。
{% endhint %}

> **小白提示**：翻译成人话——SSE/流式 HTTP 这类"长连接"认服务器，必须从头到尾由同一台机器服务。多副本部署时如果不把 `/mcp*` 的流量固定到一台机器，连接就会"东一下西一下"地断。自托管且用了多副本的朋友注意这条。

## 相关资源（Related resources）

n8n 还提供了一个 [MCP Client Tool](../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp.md) 节点，允许你把 n8n 的 AI 智能体连接到外部工具。

关于协议、服务器和客户端的更多细节，请参考 [MCP 文档](https://modelcontextprotocol.io/introduction) 和 [MCP 规范](https://modelcontextprotocol.io/specification/)。

## 常见问题（Common issues）

以下是 MCP 服务器触发器节点的一些常见错误和问题，以及解决或排查它们的步骤。

### 在反向代理后面运行 MCP 服务器触发器节点

当你在 nginx 之类的反向代理后面运行 n8n 时，如果 MCP 端点没有针对 SSE 或流式 HTTP 进行配置，你可能会遇到问题。

具体来说，你需要为端点禁用代理缓冲（proxy buffering）。你可能还想调整其它项目：禁用 gzip 压缩（n8n 自己会处理这个）、禁用分块传输编码（chunked transfer encoding），以及把 `Connection` 设置为空字符串，把它从转发的请求头中移除。在 MCP 端点中显式禁用这些设置，可以确保它们不会从 nginx 配置的其它地方继承过来。

一个使用这些设置来提供 MCP 流量的 nginx location 块示例大概长这样：

```
location /mcp/ {
    proxy_http_version          1.1;
    proxy_buffering             off;
    gzip                        off;
    chunked_transfer_encoding   off;

    proxy_set_header            Connection '';

    # The rest of your proxy headers and settings
    # . . .
}
```

> **小白提示**：反代是"中间传话人"，SSE 这类流式数据最怕中间人"攒一堆再转发"（缓冲）或者把连接搞断。上面这些配置就是告诉 nginx：对 `/mcp/` 路径别缓冲、别压缩、保持长连接，让数据实时流过去。这段话是给自托管 + 用 nginx 反代的用户准备的，普通云版用户用不上。

[^1]: 触发器节点是一种特殊节点，负责在满足特定条件时执行工作流。所有生产工作流都需要至少一个触发器来决定工作流何时运行。
