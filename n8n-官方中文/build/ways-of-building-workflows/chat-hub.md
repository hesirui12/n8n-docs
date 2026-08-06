---
title: Chat Hub
status: beta
nodeTitle: Chat Hub
originalFilePath: advanced-ai/chat-hub.md
originalUrl: https://docs.n8n.io/advanced-ai/chat-hub
url: https://docs.n8n.io/build/ways-of-building-workflows/chat-hub
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

# Chat Hub 聊天中心（Chat Hub）

## 概览（Overview）

Chat Hub（聊天中心）是一个**集中式的 AI 聊天界面**。在这里你可以：使用多个 AI 模型、与 n8n 工作流 Agent（智能代理）对话、以及创建你自己的 Agent。

Chat Hub 还引入了 **Chat 用户（Chat user）** 这个角色：拥有该角色的人可以**只使用聊天界面**，而无需接触 n8n 的工作流画布——适合团队里「只想用、不想搭」的成员。

{% hint style="info" %}
**小白解释——Chat Hub 是什么场景用的？**
想象一下：你们公司用 n8n 搭好了一些自动化流程（比如「查订单物流状态」）。以前大家得学会操作 n8n 才能用；有了 Chat Hub，普通同事只需要打开一个类似 ChatGPT 的聊天框，直接问「帮我查一下订单 12345 的物流」，后台就会调用工作流来处理，完全不用学 n8n。
{% endhint %}

## 使用方法（How to use）

使用 Chat Hub 很简单：在导航栏里找到 **Chat**（聊天）选项，选择一个模型，然后开始对话即可。

### 创建简单的个人 Agent（Creating simple personal agents）

对于一些简单、重复的任务，为了让 AI 更可靠，你可以创建带**自定义指令**的「自定义 Agent（Custom Agents）」。创建简单个人 Agent 的步骤：

1. 点击 **Personal Agents**（个人 Agent），然后点击 **+New Agent**（新建 Agent）。
2. 定义以下内容：名称（name）、描述（description）、系统提示词（system prompt）、偏好的模型（preferred model），以及能访问哪些工具（tools）。
3. 点击 **Save**（保存）。

创建完成后，你就可以在模型选择器（model selector）里选中这个个人 Agent 来使用它。

{% hint style="info" %}
**小白解释——系统提示词（system prompt）是什么？**
系统提示词就是「给 AI 定的规矩」。你可以通过它告诉 AI：你是什么角色、要按什么风格回答、遇到什么情况该怎么处理。比如「你是一位耐心的客服，回答要简洁、用中文」。这样 AI 每次对话都会遵守这套规矩，表现更稳定。
{% endhint %}

### 使用 n8n 工作流 Agent（Using n8n workflows agents）

对于更复杂的场景，你可以使用 n8n 工作流 Agent（你自己或同事搭建的），让这些工作流在 Chat Hub 里可以被调用。目前，只有**包含「Chat Trigger（聊天触发器）」节点且 AI Agent 节点开启了流式输出（streaming）**的工作流才能在 Chat Hub 中使用。

要让你的工作流在 Chat Hub 中可用，请按以下步骤操作：

1. 打开你要使用的工作流。
2. 打开 **Chat Trigger**（聊天触发器）节点。

{% hint style="info" %}
**注意：** 只有**最新版本**的聊天触发器才能用。想获取最新版本，请删除现有的聊天触发器，重新插入一个新的。
{% endhint %}

3. 开启 **Make Available in n8n Chat**（在 n8n Chat 中可用）选项，并设置该 Agent 的名称和描述。
4. 确保你的 **AI Agent** 节点开启了 **Enable Streaming**（启用流式输出）选项。
5. **发布（Publish）** 你的工作流。

设置完成后，你就可以在 Chat Hub 的模型选择器中选中你的工作流了。你的同事要使用它，需要能访问该工作流——要么你把它共享给他们，要么它放在一个他们至少有查看者（viewer）权限的项目里。

{% hint style="info" %}
**小白解释——流式输出（Streaming）是什么？**
流式输出就是 AI 的回答**一个字一个字地蹦出来**，而不是等全部生成完才一次性显示。开启后体验更接近 ChatGPT 的实时打字效果，也更适合在聊天界面里用。
{% endhint %}

## 管理权限（Managing permissions）

你可以通过 n8n 的角色（Role）系统来定义哪些用户可以执行哪些操作。Chat Hub 还额外给了你更多控制权。

### Chat 用户角色（Chat user role）

Chat 用户是给组织里「想用工作流、但不想搭建工作流」的人准备的角色。默认情况下，Chat 用户**只能看到聊天界面**，**不能**添加凭据或工作流。

Chat 用户角色只在 **Starter、Pro、Business 和 Enterprise** 套餐中可用。

### 模型提供商设置（Provider settings）

管理员可以控制用户在 Chat Hub 中能访问哪些模型和提供商（Provider，即模型服务商，比如 OpenAI、Anthropic 等）。可以控制的内容包括：

* 启用或禁用特定的模型和提供商；
* 禁止用户添加自己的模型；
* 为每个提供商设置默认凭据；
* 限制用户添加自己的凭据（通过 n8n 的权限系统实现）。

要管理这些设置，请进入 **Settings（设置） > Chat**，然后编辑提供商。

## 注意事项与限制（Considerations and limitations）

1. 创建简单的个人 Agent 时，**不能添加文件知识**（比如不能把文档上传给 AI 当知识库）。
2. 工具（Tools）的可选项有限，只能从少数几个选项中挑选。
3. 只有包含 [Chat Trigger 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-langchain.chattrigger) 并且 [AI Agent 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent) 开启了流式输出的工作流，才能作为工作流 Agent 使用。你的工作流必须满足这些特定要求。
