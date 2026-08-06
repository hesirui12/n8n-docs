---
title: Webhook 节点文档
priority: critical
contentType:
  - integration
  - reference
hide:
  - tags
nodeTitle: n8n-nodes-base.webhook
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.webhook/index.md
originalUrl: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook
url: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook
description: >-
  学习如何在 n8n 中使用 Webhook 节点。按照技术文档，把 Webhook 节点集成到你的工作流中。
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
tags:
  - webhook set route parameters
  - get webhook URL
  - call workflow externally
---

# Webhook

{% hint style="info" %}
**大白话**：Webhook 节点给你的工作流开了一个「对外接口」。外部应用或服务在某个事件发生时（比如有人下单、有人填了表单），会往一个网址（webhook URL）发送数据，Webhook 节点收到后就会启动你的工作流。它还能把工作流最后的结果返回给调用方——这样你的工作流就像一个小型 API 接口。它还支持测试 URL 和生产 URL 两套地址，方便你先试后上线。
{% endhint %}

使用 Webhook 节点来创建 [webhook](https://en.wikipedia.org/wiki/Webhook)。当某个事件发生时，应用和服务可以向 webhook 发送数据。它是一个触发器节点，也就是说它可以启动一个 n8n 工作流。这样，外部服务就能连接 n8n 并运行工作流。

当你想接收数据、并基于这些数据运行工作流时，可以把 Webhook 节点用作工作流的触发器。Webhook 节点还支持返回工作流结束时生成的数据。这使得它很适合用来构建一个「处理数据并返回结果」的工作流，就像一个 API 端点。

Webhook 让你可以从那些没有专用应用触发器节点的服务触发工作流。

## 工作流开发流程（Workflow development process）

n8n 为测试和生产提供了不同的 **Webhook URL**。测试 URL 带有一个 **Listen for test event（监听测试事件）** 选项。关于构建、测试以及把 Webhook 节点迁移到生产环境的更多信息，请参阅 [工作流开发（Workflow development）](workflow-development.md)。

## 节点参数（Node parameters）

使用这些参数配置你的节点。

### Webhook URLs（Webhook 网址）

Webhook 节点有两个 **Webhook URL**：测试（test）和生产（production）。n8n 会在节点面板的顶部显示这些 URL。

选择 **Test URL（测试 URL）** 或 **Production URL（生产 URL）**，可以在两者之间切换 n8n 显示的 URL。

<figure><img src="../../../.gitbook/assets/webhook-urls.png" alt=""><figcaption><p>Webhook 节点「参数」选项卡中的 Webhook URL 示例</p></figcaption></figure>

* **Test（测试）**：当工作流未激活时，你选择 **Listen for Test Event（监听测试事件）** 或 **Execute workflow（执行工作流）**，n8n 就会注册一个测试 webhook。当你调用该 webhook URL 时，n8n 会在工作流中显示收到的数据。
* **Production（生产）**：当你发布工作流时，n8n 会注册一个生产 webhook。使用生产 URL 时，n8n 不会在工作流中显示收到的数据。你仍然可以查看生产执行的工作流数据：选择工作流中的 **Executions（执行记录）** 选项卡，然后选择你想查看的工作流执行记录。

### HTTP Method（HTTP 方法）

Webhook 节点支持标准的 [HTTP 请求方法（HTTP Request Methods）](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)：

* DELETE
* GET
* HEAD
* PATCH
* POST
*   PUT<br>

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>Webhook 最大负载</strong></p><p>Webhook 的最大负载（payload）大小是 16MB。如果你是自托管 n8n，可以通过 <a href="https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/endpoints">端点环境变量</a> <code>N8N_PAYLOAD_SIZE_MAX</code> 来修改这个值。</p></div>

### Path（路径）

默认情况下，这个字段包含一个随机生成的 webhook URL 路径，以避免与其他 webhook 节点冲突。

你也可以手动指定 URL 路径，包括添加路由参数（route parameters）。例如，当你用 n8n 来搭建 API 原型、希望端点 URL 保持一致时，可能就需要这样做。

**Path（路径）** 字段可以接受以下格式：

* `/:variable`
* `/path/:variable`
* `/:variable/path`
* `/:variable1/path/:variable2`
* `/:variable1/:variable2`

### Supported authentication methods（支持的认证方法）

你可以要求任何调用你的 webhook URL 的服务进行身份认证。从以下认证方法中选择：

* Basic auth（基本认证）
* Header auth（请求头认证）
* JWT auth（JWT 认证）
* None（无）

关于每种凭据类型的更多设置信息，请参阅 [Webhook 凭据（Webhook credentials）](../../credentials/webhook.md)。

### Respond（响应方式）

* **Immediately（立即）**：Webhook 节点返回响应代码和消息 **Workflow got started（工作流已启动）**。
* **When Last Node Finishes（当最后一个节点完成时）**：Webhook 节点返回响应代码，以及工作流中最后执行的节点输出的数据。
* **Using 'Respond to Webhook' Node（使用「Respond to Webhook」节点）**：Webhook 节点按照 [Respond to Webhook](../n8n-nodes-base.respondtowebhook.md) 节点中定义的方式响应。
* **Streaming response（流式响应）**：在工作流处理过程中，实时把数据流式传回给用户。需要工作流中有支持流式的节点（例如 [AI 智能体（AI agent）](../../cluster-nodes/root-nodes/n8n-nodes-langchain.agent/README.md) 节点）。

### Response Code（响应代码）

自定义 Webhook 节点在成功执行后返回的 [HTTP 响应代码（HTTP response code）](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)。可以从常见的响应代码中选择，也可以创建自定义代码。

### Response Data（响应数据）

选择在响应体中包含哪些数据：

* **All Entries（所有条目）**：Webhook 以数组形式返回最后一个节点的所有条目。
* **First Entry JSON（第一条目的 JSON）**：Webhook 以 JSON 对象形式返回最后一个节点第一条目的 JSON 数据。
* **First Entry Binary（第一条目的二进制数据）**：Webhook 以二进制文件形式返回最后一个节点第一条目的二进制数据。
* **No Response Body（无响应体）**：Webhook 返回时不带响应体。

仅适用于 **Respond > When Last Node Finishes（响应 > 当最后一个节点完成时）**。

## 节点选项（Node options）

选择 **Add Option（添加选项）** 查看更多配置选项。可用选项取决于你的节点参数。请参考下表了解选项的可用性。

* **Allowed Origins (CORS)（允许的来源）**：设置允许的跨域来源域名。输入允许进行跨域非预检（non-preflight）请求的 URL 列表，用逗号分隔。使用 `*`（默认）允许所有来源。
* **Binary Property（二进制属性）**：启用这个设置后，Webhook 节点可以接收二进制数据，比如图片或音频文件。输入要写入所接收文件数据的二进制属性名称。
* **Ignore Bots（忽略机器人）**：忽略来自机器人（比如链接预览器和网络爬虫）的请求。
* **IP(s) Whitelist（IP 白名单）**：启用这个选项来限制谁（或什么）可以调用 Webhook 触发 URL。输入允许的 IP 地址列表，用逗号分隔。来自白名单之外的 IP 地址的访问会抛出 403 错误。如果留空，所有 IP 地址都可以调用 webhook 触发 URL。
* **No Response Body（无响应体）**：启用这个选项，防止 n8n 随响应发送响应体。
* **Raw Body（原始请求体）**：指定 Webhook 节点将以原始格式（如 JSON 或 XML）接收数据。
* **Response Content-Type（响应内容类型）**：选择 webhook 响应体的格式。
* **Response Data（响应数据）**：随响应发送自定义数据。
* **Response Headers（响应请求头）**：在 Webhook 响应中发送额外的请求头。关于响应请求头的更多信息，请参阅 [MDN Web Docs | Response header（响应请求头）](https://developer.mozilla.org/en-US/docs/Glossary/Response_header)。
* **Property Name（属性名称）**：默认情况下，n8n 返回所有可用数据。你可以选择返回某个特定的 JSON 键，这样 n8n 就只返回它的值。

| 选项（Option） | 所需节点配置（Required node configuration） |
| ---------------------- | ------------------------------------------------------------------------------------- |
| Allowed Origins (CORS) | 任意（Any） |
| Binary Property | 任一（Either）：<br>HTTP Method > POST<br>HTTP Method > PATCH<br>HTTP Method > PUT |
| Ignore Bots | 任意（Any） |
| IP(s) Whitelist | 任意（Any） |
| Property Name | 两者都需要（Both）：<br>Respond > When Last Node Finishes<br>Response Data > First Entry JSON |
| No Response Body | Respond > Immediately（立即响应） |
| Raw Body | 任意（Any） |
| Response Code | 除「Respond > Using 'Respond to Webhook' Node」之外的任意配置 |
| Response Content-Type | 两者都需要（Both）：<br>Respond > When Last Node Finishes<br>Response Data > First Entry JSON |
| Response Data | Respond > Immediately（立即响应） |
| Response Headers | 任意（Any） |

## n8n 如何保护 HTML 响应（How n8n secures HTML responses）

从 n8n 版本 1.103.0 开始，n8n 会自动把对 webhook 的 HTML 响应包裹在 `<iframe>` 标签中。这是一种保护实例用户的安全机制。

这带来以下影响：

* HTML 在沙箱化的 iframe 中渲染，而不是直接在父文档中渲染。
* 尝试访问顶层窗口或本地存储的 JavaScript 代码会失败。
* 在沙箱化的 iframe 中无法使用认证请求头（例如基本认证）。你需要使用替代方案，比如在 HTML 中嵌入一个短时效的访问令牌。
* 相对 URL（例如 `<form action="/">`）将无法工作。请改用绝对 URL。

## 模板和示例（Templates and examples）

[浏览 n8n-nodes-base.webhook 集成模板](https://n8n.io/integrations/webhook) 或 [搜索所有模板](https://n8n.io/workflows/)

## 常见问题（FAQ）

### 如何从外部事件触发工作流？

把 Webhook 节点添加为触发器。它会创建一个 [webhook URL](#webhook-urls)，当事件发生时接收来自应用和服务的数据，然后用这些数据启动你的工作流。这对于没有专用应用触发器节点的服务非常有用。

### 测试和生产 webhook URL 有什么区别？

节点有两个 [webhook URL](#webhook-urls)。**测试** URL 在你选择 **Listen for Test Event（监听测试事件）** 时生效，并且会在编辑器中显示传入的数据。**生产** URL 在你发布工作流时注册，并且不会在编辑器中显示数据。你可以在工作流的 **Executions（执行记录）** 选项卡中查看生产运行记录。

### 如何保护 webhook 的安全？

在 [支持的认证方法（Supported authentication methods）](#supported-authentication-methods) 中要求身份认证。你可以为任何调用该 URL 的服务使用 Basic auth、Header auth 或 JWT auth。你也可以用 **IP(s) Whitelist（IP 白名单）** 节点选项限制调用方。请参阅 [Webhook 凭据（Webhook credentials）](../../credentials/webhook.md)。

## 常见问题（Common issues）

对于常见问题或疑问以及建议的解决方案，请参阅 [常见问题（Common issues）](common-issues.md)。
