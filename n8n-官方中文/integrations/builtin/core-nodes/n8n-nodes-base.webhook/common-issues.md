---
title: Webhook 节点常见问题
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Webhook node common issues
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.webhook/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/common-issues
description: >-
  n8n（工作流自动化平台）中 Webhook 节点的常见问题文档。包含问题详情和建议的解决方案。
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

# 常见问题（Common issues）

{% hint style="info" %}
**大白话**：这一页收集了用 Webhook 节点时最常见的问题和解决办法：怎么让它同时接受多种 HTTP 方法、怎么用 HTTP Request 节点或 curl 命令来触发它、怎么返回字符串类型的响应、测试 URL 和生产 URL 有什么区别、IP 白名单连不上怎么办、同一个路径只能注册一个 webhook 等。
{% endhint %}

以下是 [Webhook 节点](./README.md) 的一些常见问题和疑问，以及建议的解决方案。

## 监听多种 HTTP 方法（Listen for multiple HTTP methods）

默认情况下，Webhook 节点只接受使用单一方法的调用。例如，它可以接受 GET 或 POST 请求，但不能同时接受两者。如果你想接受使用多种方法的调用：

1. 打开节点的 **Settings（设置）**。
2. 打开 **Allow Multiple HTTP Methods（允许多种 HTTP 方法）**。
3. 回到 **Parameters（参数）**。默认情况下，节点现在接受 GET 和 POST 调用。你可以在 **HTTP Methods（HTTP 方法）** 字段中添加其他方法。

Webhook 节点为每种方法各有一个输出，所以你可以根据不同的方法执行不同的操作。

## 使用 HTTP Request 节点触发 Webhook 节点（Use the HTTP Request node to trigger the Webhook node）

[HTTP Request](../n8n-nodes-base.httprequest/README.md) 节点会向你指定的 URL 发出 HTTP 请求。

1. 创建一个新的工作流。
2. 在工作流中添加 HTTP Request 节点。
3. 从 **Request Method（请求方法）** 下拉列表中选择一个方法。例如，如果你在 Webhook 节点中把 **HTTP method（HTTP 方法）** 选为 GET，就在 HTTP Request 节点中选择 GET 作为请求方法。
4. 复制 Webhook 节点中的 URL，粘贴到 HTTP Request 节点的 **URL** 字段中。
5. 如果使用 webhook 节点的测试 URL：先执行带 Webhook 节点的工作流。
6. 执行 HTTP Request 节点。

## 使用 curl 触发 Webhook 节点（Use curl to trigger the Webhook node）

你可以使用 [curl](https://curl.se/) 发出 HTTP 请求来触发 Webhook 节点。

{% hint style="info" %}
在下面的示例中，把 `<https://your-n8n.url/webhook/path>` 替换成你的 webhook URL。\
这些示例发出的是 GET 请求。你可以使用你在 **HTTP Method（HTTP 方法）** 中设置的任意 HTTP 方法。
{% endhint %}

发出一个不带任何参数的 HTTP 请求：

```sh
curl --request GET <https://your-n8n.url/webhook/path>
```

发出一个带请求体参数的 HTTP 请求：

```sh
curl --request POST <https://your-n8n.url/webhook/path> --data 'key=value'
```

发出一个带请求头参数的 HTTP 请求：

```sh
curl --request GET <https://your-n8n.url/webhook/path> --header 'key=value'
```

发出一个发送文件的 HTTP 请求：

```sh
curl --request POST <https://your-n8n.url/webhook/path> --form 'key=@/path/to/file'
```

把 `/path/to/file` 替换成你想发送的文件的路径。

## 发送字符串类型的响应（Send a response of type string）

默认情况下，响应格式是 JSON 或数组。要发送字符串类型的响应：

1. 选择 **Response Mode（响应模式）** > **When Last Node Finishes（当最后一个节点完成时）**。
2. 选择 **Response Data（响应数据）** > **First Entry JSON（第一条目的 JSON）**。
3. 选择 **Add Option（添加选项）** > **Property Name（属性名称）**。
4. 输入包含响应的属性名称。默认值为 `data`。
5. 把一个 [Edit Fields 节点（编辑字段）](../n8n-nodes-base.set.md) 连接到 Webhook 节点。
6. 在 Edit Fields 节点中，选择 **Add Value（添加值）** > **String（字符串）**。
7. 在 **Name（名称）** 字段中输入属性名称。名称应与第 4 步中的属性名称一致。
8. 在 **Value（值）** 字段中输入字符串值。
9. 把 **Keep Only Set（只保留设置的值）** 切换为开启（绿色）。

当你调用 Webhook 时，它会发送来自 Edit Fields 节点的字符串响应。

## 测试 URL 与生产 URL（Test URL versus Production URL）

n8n 会为每个 Webhook 节点生成两个 **Webhook URL**：一个 **Test URL（测试 URL）** 和一个 **Production URL（生产 URL）**。

在构建或测试工作流时，请使用 **Test URL（测试 URL）**。当你准备在生产环境使用你的 Webhook URL 时，请使用 **Production URL（生产 URL）**。

| **URL 类型（URL type）** | **如何触发（How to trigger）** | **监听时长（Listening duration）** | **是否在编辑器界面显示数据（Data shown in editor UI?）** |
| -------------- | -------------------------------------------------------------------------- | ----------------------------- | :--------------------------: |
| Test URL（测试 URL） | 选择 **Listen for test event（监听测试事件）**，并从来源触发一个测试事件。 | 120 秒 | ✅ |
| Production URL（生产 URL） | 发布工作流 | 直到工作流取消发布 | ❌ |

更多信息请参阅 [工作流开发（Workflow development）](workflow-development.md)。

## 白名单中的 IP 地址连接失败（IP addresses in whitelist are failing to connect）

如果你无法从 IP 白名单中的 IP 地址连接，请检查你是否在反向代理（reverse proxy）后面运行 n8n。

如果是，请把 `N8N_PROXY_HOPS` [环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables) 设置为 n8n 运行在其后的反向代理数量。

## 每个路径和方法只能注册一个 webhook（Only one webhook per path and method）

n8n 只允许为每个路径和 HTTP 方法的组合注册一个 webhook（例如，对 `/my-request` 的 `GET` 请求）。这是为了避免「哪个 webhook 应该接收请求」的歧义。

如果你收到消息说所选路径和方法已被使用，你可以选择：

* 取消发布带有冲突 webhook 的工作流。
* 更改其中一个冲突 webhook 的路径和/或方法。

## n8n Cloud 上的超时（Timeouts on n8n Cloud）

n8n Cloud 使用 Cloudflare 来防护恶意流量。如果你的 webhook 在 100 秒内没有响应，传入的请求会以 [524 状态码](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-524/) 失败。

因此，对于可能超过这个限制的长时间运行的进程，你可能需要配置两个独立的 webhook 来引入轮询（polling）逻辑：

* 一个 webhook 用于启动长时间运行的进程并立即发送响应。
* 第二个 webhook 用于定时调用，查询进程状态，并在进程完成时取回结果。
