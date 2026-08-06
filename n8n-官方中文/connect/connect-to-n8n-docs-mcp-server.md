---
description: >-
  将 AI 工具连接到 n8n 文档的模型上下文协议（Model Context Protocol，MCP）服务器，
  以便搜索文档和更广泛的知识库，并回答你的问题。
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

# 连接到 n8n 文档 MCP 服务器

n8n 官方文档发布了两个 [模型上下文协议（MCP）](https://modelcontextprotocol.io/) 服务器。把 AI 工具连接到其中一个服务器，就可以让它在工作过程中搜索 n8n 的知识库并回答你的问题。

两个服务器使用的数据来源不同，请根据你希望 AI 工具如何回答问题来选择：

| 服务器 | 数据来源 | 最适合 |
|--------|---------|----------|
| **GitBook 文档服务器** | 仅已发布的 n8n 官方文档 | 搜索和阅读确切的文档页面。文档是唯一、权威的信息来源。 |
| **Kapa.ai 服务器** | 文档、[社区论坛](https://community.n8n.io/) 和 [n8n 博客](https://blog.n8n.io/) | 更宽泛的问题，例如故障排查（troubleshooting）和真实世界案例——这些是纯文档覆盖不到的。文档站上的 AI 助手（AI Assistant）用的也是同一个引擎。 |

你也可以两个都连。想要答案以官方文档为准时用 GitBook 服务器；想要答案来自 n8n 更广泛的知识库时用 Kapa.ai 服务器。

两个服务器都使用 HTTP 传输方式，所以你的 AI 工具需要支持通过 HTTP 连接远程 MCP 服务器。两者都不支持 stdio 或 SSE。

{% hint style="info" %}
**小白提示**：MCP 是「AI 工具插件」的通用标准。你只要把网址（URL）填进支持 MCP 的工具里，AI 就能自动去 n8n 文档里查资料再回答你，不用你手动复制粘贴文档内容。本文就是教你填这两个网址。
{% endhint %}

## MCP 服务器地址（URL）

使用你要连接的服务器对应的端点（endpoint）：

| 服务器 | URL |
|--------|-----|
| GitBook 文档服务器 | `https://docs.n8n.io/~gitbook/mcp` |
| Kapa.ai 服务器 | `https://n8n.mcp.kapa.ai` |

## 连接你的 AI 工具

不同工具的步骤略有差异，但每个工具都需要用到上面表格里的服务器 URL。下面的示例同时配置了两个服务器。如果只想连一个，保留需要的条目、删掉另一个即可。

{% hint style="info" %}
Kapa.ai 服务器需要认证（authentication）。你的 AI 工具在首次连接（或首次使用）时会打开一个基于浏览器的登录流程，按照提示授权连接即可。
{% endhint %}

{% tabs %}
{% tab title="Claude Code" %}
在终端中运行以下命令：

```bash
claude mcp add --transport http n8n-docs https://docs.n8n.io/~gitbook/mcp
claude mcp add --transport http n8n-kapa https://n8n.mcp.kapa.ai
```
{% endtab %}

{% tab title="Cursor" %}
把服务器添加到你的 `mcp.json` 文件中：

```json
{
	"mcpServers": {
		"n8n-docs": {
			"url": "https://docs.n8n.io/~gitbook/mcp"
		},
		"n8n-kapa": {
			"url": "https://n8n.mcp.kapa.ai"
		}
	}
}
```
{% endtab %}

{% tab title="VS Code" %}
把服务器添加到你的 `mcp.json` 文件中：

```json
{
	"servers": {
		"n8n-docs": {
			"type": "http",
			"url": "https://docs.n8n.io/~gitbook/mcp"
		},
		"n8n-kapa": {
			"type": "http",
			"url": "https://n8n.mcp.kapa.ai"
		}
	}
}
```
{% endtab %}

{% tab title="其他工具" %}
对于任何其他 MCP 客户端，在其 MCP 设置中新增一个远程（HTTP）服务器，并填入服务器 URL：

```
https://docs.n8n.io/~gitbook/mcp
https://n8n.mcp.kapa.ai
```
{% endtab %}
{% endtabs %}

连接完成后，你的工具就可以在工作过程中搜索 n8n 的知识库了。

{% hint style="info" %}
具体的配置步骤和文件位置会因工具和版本而异。请查阅你的工具文档，了解它如何添加远程 MCP 服务器。关于 Kapa.ai 服务器的更多信息，请参阅 [Kapa.ai MCP 文档](https://docs.kapa.ai/overview/build-with-ai)。
{% endhint %}
