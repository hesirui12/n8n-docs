---
title: 响应 Webhook Respond to Webhook
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Respond to Webhook
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.respondtowebhook
description: >-
  n8n 工作流自动化平台中「响应 Webhook Respond to Webhook」节点的中文文档。
  包含使用方法说明和示例链接。
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

# 响应 Webhook Respond to Webhook

> **大白话**：这个节点是「回信的人」——当别人（第三方系统）通过 webhook 调用你的工作流时，由它决定把什么内容、以什么形式回给对方。比如收到支付回调后，返回一个「成功」的 JSON 给对方。它必须配合 [Webhook](n8n-nodes-base.webhook/README.md) 节点使用，并且在 Webhook 节点里把 **响应方式 Respond** 设为 **使用「响应 Webhook」节点 Using 'Respond to Webhook' node**。

使用「响应 Webhook Respond to Webhook」节点控制对传入 webhook 的响应。这个节点与 [Webhook](n8n-nodes-base.webhook/README.md) 节点配合使用。

{% hint style="info" %}
**只对第一个数据项运行一次**

「响应 Webhook Respond to Webhook」节点只运行一次，使用第一个传入的数据项。更多信息请参考 [返回多个数据项](#return-more-than-one-data-item-deprecated)。
{% endhint %}

## 如何使用「响应 Webhook Respond to Webhook」

要使用「响应 Webhook Respond to Webhook」节点：

1. 添加一个 [Webhook](n8n-nodes-base.webhook/README.md) 节点作为工作流的触发器节点。
2. 在 Webhook 节点中，把 **响应方式 Respond** 设置为 **使用「响应 Webhook」节点 Using 'Respond to Webhook' node**。
3. 在工作的任何位置添加「响应 Webhook Respond to Webhook」节点。如果你想让它返回其他节点的数据，请把它放在这些节点的后面。

## 节点参数

使用这些参数配置节点的行为。

### 响应内容 Respond With

选择在 webhook 响应中发送什么数据。

* **所有传入数据项 All Incoming Items**：用输入中的所有 JSON 数据项响应。
* **二进制文件 Binary File**：用 **响应数据源 Response Data Source** 中定义的二进制文件响应。
* **第一个传入数据项 First Incoming Item**：用第一个传入数据项的 JSON 响应。
* **JSON**：用 **响应正文 Response Body** 中定义的 JSON 对象响应。
* **JWT 令牌 JWT Token**：用一个 JSON Web Token（JWT）响应。
* **无数据 No Data**：没有响应负载（只返回状态码等，不返回正文）。
* **重定向 Redirect**：重定向到 **重定向 URL Redirect URL** 中设置的 URL。
* **文本 Text**：用 **响应正文 Response Body** 中设置的文本响应。默认情况下这以 HTML 发送（`Content-Type: text/html`）。

## 节点选项

点击 **添加选项 Add Option** 查看并设置这些选项。

* **响应代码 Response Code**：设置要使用的 [响应代码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)（比如 200 成功、404 找不到等）。
* **响应头 Response Headers**：定义要发送的响应头。
* **把响应放入字段 Put Response in Field**：当你用 **所有传入数据项 All Incoming Items** 或 **第一个传入数据项 First Incoming Item** 响应时可用。设置包含响应数据的字段名。
* **启用流式传输 Enable Streaming**：启用后，使用流式传输把数据发回给用户。需要一个配置了 **响应模式 Response mode** 为 **流式传输 Streaming** 的触发器。

## n8n 如何保护 HTML 响应

从 n8n 1.103.0 版本开始，n8n 会自动把对 webhook 的 HTML 响应包裹在 `<iframe>` 标签中。这是一种保护实例用户的安全机制。

这有以下影响：

* HTML 会在一个沙箱化的 iframe 中渲染，而不是直接在父文档中渲染。
* 试图访问顶层窗口或本地存储（local storage）的 JavaScript 代码将失败。
* 认证头在沙箱化的 iframe 中不可用（例如基本认证 basic auth）。你需要使用替代方案，比如在 HTML 内嵌入一个短期有效的访问令牌。
* 相对 URL（例如 `<form action="/">`）将无法工作。请改用绝对 URL。

## 模板和示例

[浏览响应 Webhook（Respond to Webhook）的集成模板](https://n8n.io/integrations/respond-to-webhook) 或 [搜索所有模板](https://n8n.io/workflows/)

## 工作流行为

使用「响应 Webhook Respond to Webhook」节点时，工作流的行为如下：

* 工作流在没有执行「响应 Webhook Respond to Webhook」节点的情况下完成：它会返回一条标准消息，状态码为 200。
* 工作流在第一个「响应 Webhook Respond to Webhook」节点执行之前出错：工作流返回一条错误消息，状态码为 500。
* 第一个「响应 Webhook Respond to Webhook」节点之后又执行了第二个：工作流会忽略它。
* 「响应 Webhook Respond to Webhook」节点执行了，但没有 webhook：工作流会忽略这个「响应 Webhook Respond to Webhook」节点。

（白话解释：总结就是「谁先到谁说话、没有 webhook 就闭嘴、出错就报 500」。）

## 输出发送给 webhook 的响应

默认情况下，「响应 Webhook Respond to Webhook」节点只有一个输出分支，包含节点的输入数据。

你可以选择启用第二个输出分支，包含发送给 webhook 的响应。要启用这个次要输出，请在画布上打开「响应 Webhook Respond to Webhook」节点，选择 **设置 Settings** 标签页，激活 **启用响应输出分支 Enable Response Output Branch** 选项。

现在节点将有两个输出：

* **输入数据 Input Data**：原始输出，传递节点的输入。
* **响应 Response**：发送给 webhook 的响应对象。

## 返回多个数据项（已弃用）

{% hint style="info" %}
**在 1.22.0 版本中弃用**

n8n 1.22.0 版本使用 **所有传入数据项 All Incoming Items** 选项增加了返回所有数据项的支持。n8n 建议升级到最新版本的 n8n，而不是使用本节中描述的变通方法。
{% endhint %}

「响应 Webhook Respond to Webhook」节点只运行一次，使用第一个传入的数据项。这包括使用[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)的情况。你无法通过循环节点强制循环：工作流会运行，但 webhook 响应仍然只包含第一次执行的结果。

如果你需要返回多个数据项，请选择以下选项之一：

* 不使用「响应 Webhook Respond to Webhook」节点，而是在 Webhook 节点中使用 **响应方式 Respond** 里的 **最后一个节点完成时 When Last Node Finishes** 选项。当你想返回工作流输出的最终数据时，请使用这个选项。
* 使用 [聚合 Aggregate](n8n-nodes-base.aggregate.md) 节点在把数据传给「响应 Webhook Respond to Webhook」节点之前，把多个数据项变成一个数据项。把 **聚合方式 Aggregate** 设置为 **所有数据项数据（到单个列表中）All Item Data (Into a Single List)**。
