---
title: 聊天触发器（Chat Trigger）节点文档
priority: critical
nodeTitle: n8n-nodes-base.compression
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger
description: >-
  学习如何在 n8n 中使用聊天触发器（Chat Trigger）节点。参考技术文档，
  将聊天触发器节点集成到你的工作流中。
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

# 聊天触发器（Chat Trigger）

> **大白话**：这个节点是"聊天机器人工作流的入口"。它负责：①提供一个聊天界面（n8n 自带的托管聊天窗口，或者嵌到你自己的网站里）；②把用户发的每一条消息"接住"并启动你的工作流；③把 AI 的回答送回去。你还需要给它接一个 **Agent（智能体）** 或 **Chain（链）** 根节点，它才能真正"会聊天"。

在构建聊天机器人和其它聊天界面的 AI 工作流时，使用聊天触发器节点。你可以配置用户如何访问聊天：使用 n8n 提供的界面之一，或使用你自己的界面。你还可以添加身份验证。

你必须连接一个 Agent（智能体）或 Chain（链）[根节点](../../cluster-nodes/root-nodes/README.md)。

{% hint style="warning" %}
**工作流执行用量**

发给聊天触发器的每一条消息都会执行一次你的工作流。这意味着：一个用户发 10 条消息的对话，会消耗你 10 次执行额度。请查看你的付费方案，了解你的额度详情。
{% endhint %}

> **小白提示**：翻译成人话——聊得越久、执行次数越多，额度消耗越快。免费额度有限的用户要注意别让用户无限刷消息。

{% hint style="info" %}
**手动聊天触发器**

从 1.24.0 版本开始，此节点取代了「手动聊天触发器（Manual Chat Trigger）」节点。
{% endhint %}

## 节点参数（Node parameters）

### 让聊天公开可用（Make Chat Publicly Available）

设置聊天是否公开可用（打开，turned on），还是只能通过手动聊天界面访问（关闭，turned off）。

在构建工作流时保持关闭状态。当你准备好发布工作流并允许用户访问聊天时，再将其打开。

> **小白提示**：开发调试时关着（只在小窗口里自己测），要上线给别人用时再打开。

#### 模式（Mode）

选择用户如何访问聊天。可选：

* **Hosted Chat（托管聊天）**：使用 n8n 的托管聊天界面。推荐大多数用户使用，因为你可以用 [节点选项](./README.md#节点选项) 配置界面，无需做任何其它设置。
* **Embedded Chat（嵌入式聊天）**：此选项要求你创建自己的聊天界面。你可以使用 n8n 的 [聊天组件（chat widget）](https://www.npmjs.com/package/@n8n/chat) 或自己构建。你的聊天界面必须调用节点中 **Chat URL（聊天 URL）** 显示的 webhook 地址。

> **小白提示**：托管聊天 = n8n 帮你把聊天窗口页面做好，你直接用；嵌入式聊天 = 把聊天气泡塞进你自己的网站里（比如公司官网右下角的客服小窗）。

#### 身份验证（Authentication）

选择是否以及如何限制对聊天的访问。可选：

* **None（无）**：聊天不使用身份验证。任何人都可以使用聊天。
* **Basic Auth（基础认证）**：聊天使用基础认证。
  * 选择或创建一个带用户名和密码的 **Credential for Basic Auth（基础认证凭据）**。所有用户都必须使用相同的用户名和密码。
* **n8n User Auth（n8n 用户认证）**：只有登录了 n8n 账号的用户才能使用聊天。

#### 初始消息（Initial Message(s)）

此参数仅在你使用 **Hosted Chat（托管聊天）** 时可用。用它配置 n8n 聊天界面在用户进入页面时显示的消息。

> **小白提示**：就是用户打开聊天窗口时，AI 说的第一句"开场白"，比如"你好！我是客服小助手，有什么可以帮你？"

### 在 n8n Chat 中可用（Make Available in n8n Chat）

选择是否让该智能体在 Chat Hub（n8n 的聊天中心）中可用。

#### 智能体名称（Agent Name）

该智能体在 Chat Hub 上显示的名称。

#### 智能体描述（Agent description）

该智能体在 Chat Hub 上显示的描述。

## 节点选项（Node options）

可用的选项取决于聊天模式。

### 托管聊天选项（Hosted chat options）

#### 允许的来源（CORS）（Allowed Origin (CORS)）

设置可以访问聊天 URL 的来源（origins）。输入允许进行跨域非预检请求的 URL 列表，用逗号分隔。

使用 `*`（默认）允许所有来源。

> **小白提示**：CORS 是浏览器的"跨域门禁"。如果你的聊天只被某个网站使用，可以填那个网站的域名，其它网站就打不开你的聊天接口；填 `*` 表示不限制。

#### 输入框占位符、标题和副标题（Input Placeholder, Title, and Subtitle）

在聊天界面中为这些元素输入文字。

<details>

<summary>查看截图</summary>

![Customizable text elements](../../../.gitbook/assets/hosted-text-elements.png)

</details>

#### 加载之前的会话（Load Previous Session）

选择是否加载之前聊天会话中的聊天消息。

如果你选择了除 **Off（关闭）** 之外的任何选项，必须把聊天触发器和你在用的 Agent 连接到同一个记忆（memory）子节点。当你把 **Load Previous Session** 设置为 **From Memory（从记忆加载）** 时，聊天触发器上会出现记忆连接口。n8n 建议把聊天触发器和 Agent 都连接到同一个记忆子节点，这可以确保两个节点共用唯一的数据源（single source of truth）。

<details>

<summary>查看截图</summary>

![Connect nodes to memory](../../../.gitbook/assets/connect-memory.png)

</details>

> **小白提示**：开启后，用户刷新页面或隔天再来，还能接着上次的对话聊（AI 记得之前的上下文）。这需要把"记忆"节点同时接到触发器和 Agent 上。

#### 响应模式（Response Mode）

当你在处理聊天的 Agent 或 Chain 之后还有后续步骤时，使用此选项。可选：

* **When Last Node Finishes（当最后一个节点完成时）**：聊天触发器节点返回响应代码，以及工作流中最后执行的那个节点输出的数据。
* **Using Response Nodes（使用响应节点）**：聊天触发器节点按照 [聊天（Chat）](../n8n-nodes-langchain.chat.md) 节点或 [响应 Webhook（Respond to Webhook）](../n8n-nodes-base.respondtowebhook.md) 节点中定义的方式来响应。在此响应模式下，聊天触发器将只显示这些节点中定义的消息，而不会输出工作流中最后执行节点的数据。

{% hint style="info" %}
**使用响应节点**

此模式取代了聊天触发器节点 1.2 版本中的 'Using Respond to Webhook Node'（使用响应 Webhook 节点）模式。
{% endhint %}

* **Streaming response（流式响应）**：在工作流处理过程中，把数据实时流式传回给用户。要求工作流中有支持流式的节点（例如 [AI 智能体（AI agent）](../../cluster-nodes/root-nodes/n8n-nodes-langchain.agent/README.md) 节点）。

> **小白提示**：流式响应就是"一个字一个字蹦出来"的实时打字机效果，用户不用干等；如果关闭流式，用户要等整个回答生成完才一次性看到。

#### 需要点击按钮才能开始聊天（Require Button Click to Start Chat）

设置是否在聊天界面上显示一个 **New Conversation（新对话）** 按钮：打开（turned on）则显示，关闭（turned off）则不显示。

<details>

<summary>查看截图</summary>

![New Conversation button](../../../.gitbook/assets/new-conversation-button.png)

</details>

### 嵌入式聊天选项（Embedded chat options）

#### 允许的来源（CORS）（Allowed Origin (CORS)）

设置可以访问聊天 URL 的来源（origins）。输入允许进行跨域非预检请求的 URL 列表，用逗号分隔。

使用 `*`（默认）允许所有来源。

#### 加载之前的会话（Load Previous Session）

选择是否加载之前聊天会话中的聊天消息。

如果你选择了除 **Off（关闭）** 之外的任何选项，必须把聊天触发器和你在用的 Agent 连接到同一个记忆（memory）子节点。当你把 **Load Previous Session** 设置为 **From Memory（从记忆加载）** 时，聊天触发器上会出现记忆连接口。n8n 建议把聊天触发器和 Agent 都连接到同一个记忆子节点，这可以确保两个节点共用唯一的数据源（single source of truth）。

<details>

<summary>查看截图</summary>

![Connect nodes to memory](../../../.gitbook/assets/connect-memory.png)

</details>

#### 响应模式（Response Mode）

当你在处理聊天的 Agent 或 Chain 之后还有后续步骤时，使用此选项。可选：

* **When Last Node Finishes（当最后一个节点完成时）**：聊天触发器节点返回响应代码，以及工作流中最后执行的那个节点输出的数据。
* **Using Response Nodes（使用响应节点）**：聊天触发器节点按照 [聊天（Chat）](../n8n-nodes-langchain.chat.md) 节点或 [响应 Webhook（Respond to Webhook）](../n8n-nodes-base.respondtowebhook.md) 节点中定义的方式来响应。在此响应模式下，聊天触发器将只显示这些节点中定义的消息，而不会输出工作流中最后执行节点的数据。

{% hint style="info" %}
**使用响应节点**

此模式取代了聊天触发器节点 1.2 版本中的 'Using Respond to Webhook Node'（使用响应 Webhook 节点）模式。
{% endhint %}

* **Streaming response（流式响应）**：在工作流处理过程中，把数据实时流式传回给用户。要求工作流中有支持流式功能的节点。

## 模板和示例（Templates and examples）

[浏览 n8n-nodes-base.compression 集成模板](https://n8n.io/integrations/chat-trigger) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源（Related resources）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 手动设置聊天回复（Set the chat response manually）

当你不想直接把 Agent 或 Chain 节点的输出原样发给用户时，你需要手动设置聊天回复。相反，你希望先拿到 Agent 或 Chain 节点的输出，对它进行修改或做点别的处理，再发回给用户。

在基础工作流中，Agent 和 Chain 节点会输出一个名为 `output` 或 `text` 的参数，聊天触发器会把该参数的值作为聊天回复发送给用户。

如果你需要手动创建发送给用户的回复，必须创建一个名为 `text` 或 `output` 的参数。如果你使用其它参数名，聊天触发器会把**整个对象**作为回复发送出去，而不只是某个值。

{% hint style="info" %}
**聊天节点**

当你使用 [聊天（Chat）](../n8n-nodes-langchain.chat.md) 节点手动创建发送给用户的回复时，必须把聊天触发器的响应模式设置为 'Using Response Nodes'。
{% endhint %}

> **小白提示**：核心规则就一条——想让聊天回复"只是某段文字"，就把那段文字放到名为 `text` 或 `output` 的字段里；否则用户会收到一坨 JSON 数据。

## 常见问题（FAQ）

### 如何把聊天界面连接到 n8n 工作流？

把聊天触发器节点作为工作流的触发器，然后连接一个 Agent 或 Chain 根节点。用户发送的每一条消息都会运行工作流，所以你的后端逻辑会处理每条消息。

### 如何让聊天公开，或把它嵌入我的网站？

打开 [让聊天公开可用](#让聊天公开可用)，然后选择一种 **Mode（模式）**。**Hosted Chat（托管聊天）** 使用 n8n 的托管界面，无需额外设置。**Embedded Chat（嵌入式聊天）** 让你使用 n8n 的 [聊天组件（chat widget）](https://www.npmjs.com/package/@n8n/chat) 或你自己的界面，该界面会调用节点中显示的 **Chat URL（聊天 URL）** webhook。

### 如何从我的工作流设置聊天机器人的回复？

在基础工作流中，聊天触发器会把 Agent 或 Chain 节点的 `output` 或 `text` 值发送给用户。要自定义回复，请创建一个名为 `text` 或 `output` 的参数。参见 [手动设置聊天回复](#手动设置聊天回复)。如果你使用聊天（Chat）节点，请把 **Response Mode（响应模式）** 设置为 **Using Response Nodes（使用响应节点）**。

## 常见问题（Common issues）

关于常见问题或疑问以及建议的解决方案，请参考 [常见问题（Common Issues）](common-issues.md)。
