---
title: Use AI Assistant
description: >-
  Use the AI Assistant to create, edit, test, and troubleshoot n8n workflows from
  a chat.
tags:
  - tag: preview
    primary: true
layout:
  description:
    visible: false
---

# 使用 AI 助手（Use AI Assistant）

AI 助手（AI Assistant）是 n8n 内置的一个**聊天式智能代理（Agent）**。你可以像跟朋友聊天一样，用自然语言（大白话）让它帮你**创建、编辑、测试和排查**工作流。它还可以帮你构建 Agent（智能代理），以及完成一些实例级别的操作，比如给工作流改名、发布工作流等。

你只需要描述清楚你想自动化的东西。AI 助手就能帮你规划工作流、在你选定的项目（Project）中把它搭建出来、进行测试，并帮你修复出现的错误。

最终产出的结果就是一个**普通的 n8n 工作流**。你可以像对待任何其他工作流一样，打开它、检查它、编辑它、测试它，然后发布它——完全在你掌控之中。

{% hint style="info" %}
**小白提示：**
* AI 助手目前**仅在 n8n Cloud（云端版）**可用，自托管（self-hosted）默认不提供。
* 该功能目前处于**预览（Preview）阶段**，可能会犯错，而且功能开发过程中行为可能随时变化。**在生产环境使用前，请务必先人工检查 AI 生成的工作流**，确认没问题再上线。
{% endhint %}

## AI 助手能帮你做什么（What the AI Assistant can help with）

你和 AI 助手通过聊天窗口互动。它可以在 n8n 内部调用各种工具，帮你创建和调试工作流。

你可以让 AI 助手做这些事情：

- **创建工作流（Create workflows）：** 描述你想要的自动化，AI 助手就能帮你生成一个工作流。
- **构建 Agent（Build agents）：** 描述你想要的 Agent，AI 助手可以建议添加哪些指令（instructions）、工具（tools）和技能（skills）。另外，Agent 在自托管版本中也可以使用（需要 `agents` 模块）。更多信息见 [构建和管理 Agent](../build-and-manage-agents.md) 和 [启用 Agent](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/set-up-ai-assistant#enable-agents)。
- **编辑工作流（Edit workflows）：** 让它修改某个工作流，比如添加节点、更新逻辑或调整配置。
- **测试和排查工作流（Test and troubleshoot workflows）：** 让它运行检查、查看相关错误、并给出修复建议。
- **凭据协助（Help with credentials）：** 它会提示你选择已有的凭据（Credentials，即账号密码/密钥等认证信息），或创建新的凭据，**你不需要把密钥粘贴到聊天框里**，更安全。
- **使用 n8n 资源（Use n8n resources）：** 在需要时帮你创建或更新配套资源，例如 [数据表 Data Tables](../work-with-data/data-tables.md)。
- **访问审核过的网站（Research approved websites）：** 当联网访问功能开启时，AI 助手在访问某个域名前，会先征求你的许可。

{% hint style="info" %}
**小白解释——什么是「凭据 Credentials」？**
凭据就是你连接外部服务（比如 Gmail、Google Drive、Slack）时需要的认证信息，例如 API 密钥、账号密码、Token 等。n8n 把它们集中保存，工作流运行到需要连接外部服务的节点时就会用上。
{% endhint %}

## 开始之前（Before you start）

要使用 AI 助手，你需要能访问一个**已开启该功能的 n8n 实例**（服务器）。

请确保以下几点：

- 你能访问想让 AI 助手工作的那个项目（Project）。
- 你有权限使用完成任务所需的工作流、凭据和资源。
- 你自己心里清楚，想让工作流做什么。

AI 助手会**继承你账号的权限**。它只能访问你在所选项目里有权限访问的工作流、凭据和资源——它不会比你拥有更多权限。

## 写出有效的提示词（Write effective prompts）

提示词（Prompt）写得越具体，AI 助手的结果就越好，需要反复修改的次数也越少。

写提示词时，建议包含以下信息：

- 什么**事件触发**这个工作流（比如「每天早上」）；
- 工作流要使用哪些**应用或服务**；
- 工作流应该**读取、发送或更新**哪些数据；
- 工作流**成功**后应该做什么；
- 工作流**失败**时应该做什么；
- AI 助手在**发布工作流之前**是否应该先询问你（建议让它问，安全第一）。

## 提示词示例（Example prompts）

下面给出三个常用的示例，你可以照着这个风格写自己的提示词。

### 创建一个工作流

```text
Create a workflow that checks Gmail every morning for invoices,
saves PDF attachments to Google Drive, and adds a row to a Data Table.
Ask me before publishing the workflow.
```

（中文含义：创建一个每天早上检查 Gmail 找发票、把 PDF 附件保存到 Google Drive、并往数据表里加一行的流程；发布前先问我。）

### 调试一次失败的执行

```text
Debug the latest failed execution of this workflow.
Explain what failed, then suggest a fix before changing anything.
```

（中文含义：调试这个工作流最近一次失败的运行。先解释失败原因，再在改动任何东西之前提出修复建议。）

### 更新一个现有的工作流

```text
Update this workflow so failed orders are sent to Slack,
then retry the API request after 10 minutes.
```

（中文含义：更新这个工作流，让失败的订单发到 Slack，然后在 10 分钟后重试 API 请求。）

## 审核 AI 生成的改动（Review AI-generated changes）

AI 助手可以在你的 n8n 实例中执行操作，但**最终决定权始终在你手里**。

在把 AI 生成的工作流用于生产环境之前，建议：

- 检查工作流的整体逻辑；
- 检查节点的配置和凭据；
- 用预期的输入数据测试工作流；
- 检查运行结果和错误处理是否合理；
- 确认工作流不会执行你没打算让它做的操作。

对于高风险操作（比如发布、删除或其他重要改动），AI 助手会**先征求你的确认**再执行。

## 凭据处理（Credential handling）

你的凭据密钥**永远不会**发送给 AI，AI 也永远看不到它们。

当工作流需要凭据时，AI 助手会在聊天窗口里给你弹出一张「凭据卡片」，你可以：

- 选择该项目中你已有的某个凭据；
- 创建一个新凭据。

如果你选择创建新凭据，需要在标准的 n8n 凭据界面里输入密钥，**而不是在聊天框里输入**。请**不要把 API 密钥、密码或 Token 粘贴到对话里**。

{% hint style="warning" %}
**安全警告：** 不要在聊天里粘贴敏感数据，除非该任务确实需要。AI 生成的内容可能出错，所以在用于生产环境前，务必人工检查工作流和配置。
{% endhint %}

## 联网访问（Web access）

当联网研究功能开启时，AI 助手在访问外部域名之前会先请求你的许可。

请先**检查请求的域名**再批准访问，避免让它访问你不信任的网站。

## 预览版的限制（Preview limitations）

AI 助手目前是预览功能，可用性、支持的操作和行为都可能发生变化。

在预览期间：

- 某些操作 AI 助手可能还不支持；
- 部分能力可能会逐步上线（先到一部分用户，再慢慢铺开）；
- AI 助手可能比你预期更频繁地追问澄清问题；
- 生成的工作流可能需要人工检查和修正；
- 界面、积分消耗以及支持的资源可能会变化。

## 数据与隐私（Data and privacy）

AI 助手只会处理「帮助构建和排查工作流」所必需的信息。

根据任务的不同，可能包括：

- 你的提示词和聊天消息；
- 工作流结构和节点配置；
- 用于排错的选中执行记录和错误详情；
- 凭据的名称、类型或连接状态（注意：**不是密钥本身**）；
- 当联网研究开启时，你批准访问的网页或域名。

AI 助手**不要求**你把密钥粘贴到聊天中。API 密钥、密码和 Token 请一律通过标准的 n8n 凭据界面输入。

{% hint style="warning" %}
**再次提醒：** 除非任务确实必要，否则不要把敏感数据粘贴到聊天里。AI 生成的结果可能不正确，请在使用前审查工作流和配置。
{% endhint %}

## 积分消耗（Credit usage）

AI 助手会根据底层 AI 模型处理的 **token（令牌）数量**来消耗积分（Credits，n8n 的计费单位）。

对话越长、工作流越大、调试会话越多、反复迭代次数越多，消耗的积分就越多。

为了减少不必要的消耗：

- 尽量说清楚工作流的目标和约束条件；
- 不相关的任务请新开一个对话；
- 在让 AI 助手动手构建之前，先看看它的计划；
- 避免在没有添加新指示的情况下，反复让它重新生成同一个工作流。

预览期间如果积分不够用，可以升级你的套餐。未来还会推出更多充值方式。

关于当前套餐的详情，请参见 [n8n 套餐与价格](https://n8n.io/pricing/)。
