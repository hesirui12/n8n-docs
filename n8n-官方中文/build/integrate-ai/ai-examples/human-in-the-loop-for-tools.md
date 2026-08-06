---
title: AI 工具调用中的人工介入（Human-in-the-loop for AI tool calls）
description: >-
  了解如何要求 AI Agent 在执行特定工具前获得人工批准。
contentType: explanation
nodeTitle: Human-in-the-loop for tools
originalFilePath: advanced-ai/human-in-the-loop-tools.md
originalUrl: 'https://docs.n8n.io/advanced-ai/human-in-the-loop-tools'
url: 'https://docs.n8n.io/build/integrate-ai/ai-examples/human-in-the-loop-for-tools'
layout:
  description:
    visible: false
---

# AI 工具调用中的人工介入（Human-in-the-loop for AI tool calls）

你可以要求 AI Agent 在执行某个特定工具之前先获得人工批准。当某个工具需要人工审核时，工作流会暂停，等待一个人采取以下两种操作之一：

- **Approve（批准）**：工具使用 AI 指定的输入执行。
- **Deny（拒绝）**：操作被取消，不会执行。

{% hint style="info" %}
**什么是 Human-in-the-loop（HITL）？——大白话版**

「Human-in-the-loop」字面意思是「人在这条流程的回路里」，中文常叫**人工介入**或**人在回路**。

正常情况下，AI Agent 自己决定用哪个工具就用了，全程没人管。但有些操作「后果比较严重」——比如**删数据、发邮件、下单买东西**——如果 AI 判断失误，损失可能很大。HITL 的做法是：在 AI 执行这类高风险工具**之前，先暂停下来，把「它想做什么、用什么参数做」发给一个真人审核员**，真人点头才执行，摇头就取消。相当于给 AI 装了一道「人工闸门」。
{% endhint %}

这个功能允许你对 AI 工作流中的工具使用进行**选择性监督**：可以只给风险较高的工具（例如发送消息、修改记录、删除数据）加上额外的人工审核，其他低风险工具仍然全自动运行。

## 何时使用人工审核（When to use human review）

人工介入（HITL）审核在以下情况很有用：

- **工具执行不可逆的操作**：删除数据、发送外部通信（邮件/消息）或进行购买。这类操作一旦执行就无法撤回，最好先让人看一眼。
- **存在合规要求**：受监管的行业（如金融、医疗）可能要求某些自动化操作必须获得人工批准。
- **涉及高价值决策**：对业务有重大影响的操作，有人工监督更稳妥。
- **你正在建立对 AI 工作流的信任**：刚开始用 AI 时可以先开启人工审核，随着对 AI 表现越来越有信心，再逐步减少监督。

HITL 可以应用于连接到 AI Agent 节点的**所有工具**，也可以只应用于**选定的个别工具**，这比笼统的「输出门控（output gating）」提供更精确的控制。

{% hint style="info" %}
**什么是 output gating（输出门控）？**

输出门控是一种更「粗」的控制方式：它只检查 AI Agent 最后输出的内容（比如输出里不能包含某些词），但管不到 AI「中间做了什么操作」。而 HITL 是在**工具执行前**把关，能看到「AI 要调用哪个工具、传什么参数」，控制粒度细得多。
{% endhint %}

## 工作原理（How it works）

1. AI Agent 判断出自己需要使用一个已启用人工审核的工具。
2. 工作流暂停，并通过你配置的渠道（例如 Slack、Telegram 或 n8n Chat 界面）发送一个批准请求。
3. 人工审核员收到请求，请求中会显示：AI 想用哪个工具、以及要传什么参数。
4. 审核员批准或拒绝该请求。
5. 如果批准，工具使用 AI 指定的输入执行；如果拒绝，操作被取消，AI 会收到「被拒绝」的反馈。

{% hint style="info" %}
**不同的批准渠道**

审核步骤可以通过与主要交互**不同的渠道**进行。例如，你可以让用户通过 n8n Chat 界面与 AI 智能体对话，但把批准请求发给 Slack 里的某个特定人员（比如值班的客服经理）。这样「用户聊天」和「内部审批」就分开了，互不打扰。
{% endhint %}

## 为工具设置人工审核（Setting up human review for tools）

### 第 1 步：打开工具面板（Step 1: Open the Tools Panel）

在你的工作流中，点击 AI Agent 节点上的 **Tools**（工具）连接器，打开工具面板。

{% hint style="info" %}
**什么是「连接器」？——大白话版**

在 n8n 的 AI Agent 节点上，除了普通的数据连接点（main，主连接），还有几个特殊的「AI 连接点」：Tools（工具）、Memory（记忆）、Language Model（语言模型）等。它们不是用来传数据的，而是用来「插上」相应的 AI 组件。点击 Tools 连接器，就会弹出管理工具的面板。
{% endhint %}

### 第 2 步：添加人工审核步骤（Step 2: Add a human review step）

1. 在工具面板中找到 **Human review**（人工审核）区域。
2. 从可用选项中选择你偏好的批准渠道（channel）。
3. 使用合适的凭据（credentials）和设置来配置这个批准渠道。

### 第 3 步：把工具连接到审核步骤（Step 3: Connect tools to the review step）

1. 把需要批准的工具添加到人工审核步骤的工具连接器上。
2. 像平常一样配置每个工具。

{% hint style="info" %}
**设置思路——大白话版**

- 如果你希望**所有工具**都要审核：把全部工具都接到 Human review 步骤上。
- 如果你只希望**个别工具**要审核（比如只有「删除记录」这个工具需要批准，其他工具不用）：只把那个工具接到 Human review 步骤上，其余工具照常直接连到 AI Agent 的 Tools 连接器。
{% endhint %}

## 可用的批准渠道（Available approval channels）

你可以使用以下任何服务作为人工审核渠道：

| 渠道（Channel） | 说明（Description） |
|---------|-------------|
| [Chat](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-langchain.chat) | n8n 内置的聊天界面 |
| [Slack](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.slack) | 向 Slack 频道或私信（DM）发送批准请求 |
| [Discord](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.discord) | 向 Discord 频道发送批准请求 |
| [Telegram](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.telegram) | 通过 Telegram 发送批准请求 |
| [Microsoft Teams](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.microsoftteams) | 向 Teams 频道或聊天发送批准请求 |
| [Gmail](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.gmail) | 通过电子邮件发送批准请求 |
| [WhatsApp Business Cloud](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.whatsapp) | 通过 WhatsApp 发送批准请求 |
| [Google Chat](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.googlechat) | 向 Google Chat 发送批准请求 |
| [Microsoft Outlook](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.microsoftoutlook) | 通过 Outlook 邮件发送批准请求 |

## 在人工审核工具中使用表达式（Using expressions in human review tools）

### `$tool` 变量（The $tool variable）

配置人工审核步骤时，你可以使用 `$tool` 变量为审核员构造一条消息，提供「AI 正在试图做什么」的上下文。这个变量有两个属性：

| 属性（Property） | 说明（Description） |
|----------|-------------|
| `$tool.name` | AI Agent 试图调用的工具名称。也就是 n8n 画布（canvas）上显示的节点名称。 |
| `$tool.parameters` | AI Agent 在工具调用中试图使用的参数。包括工具输入模式（input schema）中配置了 `$fromAI()` 表达式的任何字段。 |

**示例消息配置：**

```
The AI wants to use {{ $tool.name }} with the following parameters:
{{ JSON.stringify($tool.parameters, null, 2) }}
```

{% hint style="info" %}
**上面这串代码是干嘛的？——大白话版**

这是给「批准消息」写的一个模板（可以在审核步骤的消息设置里使用）。它的意思是：

- `{{ $tool.name }}`：把工具名称填进来（比如「Send Email」）；
- `{{ JSON.stringify($tool.parameters, null, 2) }}`：把 AI 要传的参数整理成格式清晰的 JSON 文本展示出来。

审核员看到的效果就是：「AI 想使用 **Send Email** 工具，参数如下：{收件人：xxx，内容：xxx}」，一目了然，方便快速决定批准还是拒绝。
{% endhint %}

这能帮助审核员在批准或拒绝请求之前，准确了解 AI 正在尝试执行什么操作。

### 在人工审核工具中使用 `$fromAI()`（Using $fromAI() in human review tools）

[`$fromAI()` 函数](use-ai-for-parameters.md)可以与连接到人工审核步骤的工具一起使用。这意味着 AI 可以动态地指定工具参数，而人工审核员看到并批准的就是这些**由 AI 决定的参数值**。

{% hint style="info" %}
**为什么这很重要？**

如果没有 `$fromAI()`，工具的某些参数是空白的，审核员批准时看不到 AI 到底打算填什么；有了 `$fromAI()`，AI 会先把参数填好（比如从用户对话里提取出收件人邮箱），审核员看到的就是「最终要执行的实际值」，审核才有意义。想深入了解 `$fromAI()`，请看《[用 $fromAI() 让 AI 指定工具参数](use-ai-for-parameters.md)》这篇。
{% endhint %}

## 系统提示词最佳实践（System prompt best practices）

为了让 AI Agent 正确理解并得体地处理「被拒绝的工具调用」，请在系统提示词（system prompt）中包含关于人工审核设置的信息。

{% hint style="warning" %}
**必须配置系统提示词**

请确保在系统提示词中说明工具设置和人工审核步骤。这能帮助 AI 理解：哪些工具需要批准，以及在工具调用被拒绝时该如何优雅地回应（而不是报错或死循环重试）。
{% endhint %}

可以考虑在系统提示词中包含以下内容：

- 哪些工具需要人工批准
- 批准被拒绝时会发生什么
- AI 应如何回应拒绝（例如：告知用户、建议替代方案，或要求用户澄清）

## 链式调用与子智能体（Chaining and subagents）

当你把一个 AI Agent 当作另一个 AI Agent 的工具（即「子智能体」，subagent）时，子智能体里设置的人工审核步骤可以正常工作——也就是说，你可以放心地把带审核功能的智能体嵌套使用。

## 相关资源（Related resources）

- [AI Agent 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent)
- [Tools Agent（工具智能体）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent)
- [什么是 AI 中的工具？](../understand-ai-components/how-tools-work.md)
- [用 `$fromAI()` 让 AI 指定工具参数](use-ai-for-parameters.md)
