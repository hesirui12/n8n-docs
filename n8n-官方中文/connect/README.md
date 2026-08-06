---
contentType: guide
status: beta
nodeTitle: n8n CLI
originalFilePath: api/n8n-cli/index.md
originalUrl: https://docs.n8n.io/api/n8n-cli
url: https://docs.n8n.io/connect/
description: 使用 API、CLI 和 MCP 服务器以编程方式连接 n8n。
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
    visible: false
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 连接（Connect）

从代码、脚本和 AI 工具连接 n8n。

当你需要在编辑器之外操作 n8n 时，请使用本文档。你可以调用公开 API（public API）、用 CLI 编写脚本，或者连接兼容 MCP 的客户端。

本节包含 n8n API 指南与参考资料、n8n CLI 参考文档，以及 n8n 内置 MCP 服务器的文档。同时还涵盖身份认证（authentication）、连接设置，以及把各种工具和 AI 代理（agents）连接到 n8n 的客户端专属说明。

{% hint style="info" %}
**小白提示**：如果你之前只会在 n8n 网页界面里拖拖拽拽，那这篇就是教你怎么用「程序」的方式操作 n8n——比如让别的系统自动触发你的工作流、用代码批量导入工作流、或者让 AI 工具直接调用你的 n8n。三种方式任选其一，看哪种适合你。
{% endhint %}

{% hint style="info" %}
选择与你工作方式匹配的接口。每种选项使用不同的访问模型，适合不同的任务。
{% endhint %}

{% tabs %}
{% tab title="n8n API" %}
通过 HTTP 以编程方式管理 n8n。

最适合：

* 在 n8n 之上构建平台和工具
* 从外部系统触发和监控执行（executions）
* 自动化管理工作流和凭据

从 [n8n API](n8n-api/README.md) 开始。
{% endtab %}

{% tab title="n8n CLI" %}
直接在终端里控制 n8n。

最适合：

* 导入和导出工作流
* 在脚本和 CI 流水线中运行执行
* 本地开发和调试

从 [n8n CLI](n8n-cli.md) 开始。
{% endtab %}

{% tab title="MCP server" %}
把 AI 代理和 MCP 客户端直接连接到你的 n8n 实例。

最适合：

* Claude Code、Claude Desktop、Lovable 等类似工具
* 从 AI 代理发现并执行工作流
* 通过 MCP 客户端管理工作流

从 [连接到 n8n MCP 服务器（Connect to n8n MCP server）](connect-to-n8n-mcp-server.md) 开始。
{% endtab %}
{% endtabs %}
