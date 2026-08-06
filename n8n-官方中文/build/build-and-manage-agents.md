---
title: 构建和管理 Agent（智能体）
status: preview
description: >-
  在 n8n 中与工作流一起构建 Agent（智能体）、发布它们，并让人们通过聊天、频道（channels）和定时任务（schedules）触达它们。
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
  - tag: preview
    primary: true
---

# 构建和管理 Agent / Build and manage agents

Agent（智能体）是你用 n8n 构建的**自主助手（autonomous assistant）**。每个 Agent 都有一个语言模型（language model）、指令（instructions），以及你配置的各种能力（capabilities），比如工具（tools）、技能（skills）和知识库（knowledge base）的访问权限。Agent 和你的工作流（workflows）**平级共存**，是项目（project）里的一等公民（first-class artifacts）。

{% hint style="info" %}
**大白话（什么是 Agent）**：普通工作流（workflow）是「按部就班的流水线」——每一步做什么都提前定死了；而 Agent 是「有个脑子的员工」——你给它一个模型当大脑、一段指令当岗位说明、一堆工具当工具箱，它就能自己思考该用什么工具、该问什么、该怎么回答，灵活处理那些没法提前定死步骤的任务。
{% endhint %}

什么时候该用 Agent？当任务对固定的工作流来说**太开放**（没有固定套路、答案不唯一），你需要一个能**理解请求、挑选合适的工具、并根据回应灵活调整**的助手时，就用 Agent。

{% hint style="info" %}
Agent 在 **n8n 云版（n8n Cloud）** 和 **自托管版（self-hosted）** 上都可用。**知识库（Knowledge bases）** 在 n8n 云版上可用；在自托管版上它是一个**预览功能（preview feature）**，需要一个 **Daytona 沙箱（Daytona sandbox）**。

Agent 目前处于 **Preview（预览）** 阶段。它们可能会犯错，而且随着功能开发，它们的行为可能会发生变化。
{% endhint %}

### 你能用 Agent 做什么 / What you can build with agents

用 Agent 可以：基于你上传的文件和已连接的服务来**回答问题**；在 Slack、Google Sheets 或 Linear 等工具里**执行操作**（比如发消息、改表格）；触发或协调工作流来完成更大的任务。Agent 还可以**把任务委托给其他 Agent**（Sub-agents），并且**按计划定时运行**（schedules）。详见下方的 [子 Agent（Sub-agents）](build-and-manage-agents.md#add-sub-agents) 和 [定时运行（Schedules）](build-and-manage-agents.md#run-agents-on-a-schedule)。

### Agent 是怎么工作的 / How agents work

Agent 运行一个「**推理循环（reasoning loop）**」。当你给它发一条消息，或者定时任务触发它时，Agent 会：先**阅读你的指令**，再**查看请求**，然后**决定下一步做什么**——是调用某个工具（tool）、搜索知识库（knowledge base）、把任务转交给另一个 Agent，还是问你一个追问的问题。它会**一直循环**这个过程，直到生成最终回复为止。

Agent 的每一次对话都是一个**会话（session）**。n8n 会存储这些会话，这样你以后可以继续对话，Agent 也能通过**记忆（memory）**回忆起之前的上下文。

{% hint style="info" %}
**大白话（推理循环）**：就像你给客服打电话——客服先听你说完（读指令、看请求），然后判断：这事我能直接办（调工具），还是要查一下资料（搜知识库），还是要转给别的部门（子 Agent），或者我还得再问你一句（追问）。一次没办完就再走一轮，直到把问题解决、给你一个最终答复。
{% endhint %}

### Agent 的组成部分 / Parts of an agent

在 Agent Builder（Agent 构建器）里配置以下这些组成部分：

| 组成部分 | 作用 |
| --- | --- |
| **Model（模型）** | 负责推理和生成回复的语言模型。搭建 Agent 时选择提供商（provider）和具体模型。 |
| **Instructions（指令）** | 系统提示词（system prompt），描述 Agent 的角色、语气（tone）和约束（constraints）。 |
| **Tools（工具）** | Agent 可以执行的动作：工作流、自定义代码、n8n 内置集成（integrations）和 MCP 服务器。 |
| **Skills（技能）** | 可复用的行为包：把「指令 + 完成任务所需的工具」打包在一起。 |
| **Channels（频道）** | 人们可以触达 Agent 的地方，比如 Slack、Telegram 或 Linear。 |
| **Schedules（定时任务）** | 发布后，Agent 按固定周期自动运行的任务。 |
| **Sub-agents（子 Agent）** | 这个 Agent 可以把工作委托给的其他**已发布** Agent。 |
| **Knowledge base（知识库）** | Agent 可以搜索和阅读的、用于获取上下文的文件（n8n 云版；自托管版需要 Daytona 沙箱的预览功能）。 |
| **Memory（记忆）** | 会话记忆（session memory）保留当前对话；情景记忆（episodic memory）回忆更早会话里的上下文。 |

Model（模型）、Instructions（指令）、Tools（工具）、Skills（技能）、Knowledge（知识）、Memory（记忆）和 Sub-agents（子 Agent）在**构建** Agent 时配置；Channels（频道）和 Schedules（定时任务）则在你**发布**之后才生效。

{% hint style="info" %}
**大白话（对照现实岗位）**：模型 = 员工的大脑；指令 = 岗位说明书；工具 = 员工能用的软件和设备；技能 = 成套的「工作手册 + 配套工具」；频道 = 客户能联系到员工的渠道；定时任务 = 员工每天几点自动干什么；子 Agent = 可以转交给其他部门/同事；知识库 = 员工能查的内部资料库；记忆 = 员工记住的聊天记录和往事。
{% endhint %}

### 草稿版和已发布版 / Draft and published versions

每个 Agent 都有一个**草稿（draft）**版本，等你准备好了，还有一个**已发布（published）**版本。

* **草稿**：你改动的地方，n8n **自动保存**。
* **已发布版本**：当有人在聊天里找 Agent、某个频道触发它、或定时任务触发它时，**实际运行的是已发布版本**。

发布时 n8n 会**给草稿拍一张快照（snapshot）**，所以你在编辑草稿时，正在运行的 Agent 不会变化。**每次发布**都会在发布历史（publish history）里新增一个版本，你可以随时**恢复（restore）或回退（revert）**到更早的版本。

{% hint style="info" %}
**大白话（为什么要分两份）**：就像「正式上线的小程序」和「测试环境的小程序」是分开的。你在后台随便改草稿，前台用户看到的一直是稳定的正式版；改好了再点一次「发布」，新版本才上线。万一新版本有问题，还能一键回滚到老版本。
{% endhint %}

### 构建一个 Agent / Build an agent

在 **Agent Builder（Agent 构建器）** 里构建 Agent。先起个名字、选个模型，再写指令，然后挂上它需要的工具（tools）、技能（skills）、知识（knowledge）、记忆（memory）和子 Agent（sub-agents）。n8n 会自动把你的修改保存到草稿里。

#### 创建 Agent / Create the agent

1. 从左侧菜单选择你的**项目（project）**，然后进入 **Agents（Agent 列表）** 标签页。
2. 选择 **Create Agent（创建 Agent）**。n8n 会打开 Agent Builder，里面是一份空白草稿。
3. 在 **Agent** 标签页里，给 Agent 起个名字。可以用图标选择器（icon picker）更换图标。

{% hint style="info" %}
**使用 AI 助手（AI Assistant）**

向 [AI Assistant（AI 助手）](ways-of-building-workflows/ai-assistant.md) 描述你希望 Agent 做什么。它会建议要添加的指令（instructions）、工具（tools）和技能（skills）。你可以在 Agent Builder 里一边构建一边完善这些建议。
{% endhint %}

#### 选择模型 / Choose a model

在 **Agent** 标签页里，打开 **Model（模型）** 字段，选择一个提供商（provider）和模型。如果该提供商需要凭证（credentials），按提示添加即可。

#### 写指令 / Write instructions

在 **Instructions（指令）** 字段里，描述 Agent 的：角色（role）、语气（tone）和回复格式（response format）、应该做什么 / 不应该做什么，以及处理常见任务时它应该优先使用哪些工具或技能。

指令要写得**具体**；如果 Agent 的表现不符合预期，**先改进指令**，再考虑加更多工具。

{% hint style="info" %}
**大白话（写指令）**：指令写得越像「给外包员工的详细需求文档」，Agent 表现越稳。它表现不好时，优先怀疑是需求文档没写清楚，而不是工具不够多。
{% endhint %}

#### 添加工具 / Add tools

在 **Tools（工具）** 区域，选择 **Add tool（添加工具）**，然后从下面这些里选：内置工具（built-in tools，比如 Slack、Google Sheets 这类 n8n 集成）、同一项目里的工作流、用 JSON schema 定义的自定义工具（custom tools）、或者通过 MCP 服务器接入的外部工具。

Agent 会根据你的指令和当前任务**自己决定**用哪个工具，使用你添加工具时所附带的凭证（credentials）。对于**敏感工具**，你可以要求 Agent 在执行前先**获得批准（approval）**。详见 [批准工具调用（Approve tool calls）](build-and-manage-agents.md#approve-tool-calls)。

#### 用技能打包能力 / Bundle capabilities with skills

技能（skill）把「**指令 + 完成特定任务所需工具**」打包在一起。当 Agent 要处理**好几个不同任务、每个任务各有自己的一套步骤**时，就用技能。

添加技能的方法：

1. 打开 **Skills（技能）** 区域，选择 **Add skill（添加技能）**。
2. 给技能起个名字，写一句简短描述。
3. 选择该技能可以使用的工具。
4. 编写 Agent 运行该技能时应遵循的指令。

Agent 会根据**描述**和**当前请求**来选择正确的技能。

{% hint style="info" %}
**大白话（技能 vs 工具）**：工具是「单个动作」（发一条 Slack 消息）；技能是「一套流程」（比如「周报」技能 = 收集本周数据 → 汇总 → 写成 Slack 消息 → 发出去）。把常用流程打包成技能，Agent 遇到相关请求时直接整套执行。
{% endhint %}

#### 上传知识 / Upload knowledge

从 **Knowledge（知识）** 标签页添加 Agent 可以搜索和阅读的文件。支持的文件类型：**csv、pdf、markdown、txt**。

{% hint style="info" %}
**知识库（Knowledge bases）** 在 n8n 云版（n8n Cloud）上可用。在自托管版上，它是需要 **Daytona 沙箱**的预览功能。见 [自托管（Self-hosted）](build-and-manage-agents.md#self-hosted)。
{% endhint %}

一旦你上传了文件，Agent 就能搜索你的知识库来回答问题、把相关上下文纳入回复。

#### 配置记忆 / Configure memory

**会话记忆（session memory）** 保留当前对话的上下文。它**默认开启**，不需要任何设置。

想让 Agent 回忆起**更早会话**的上下文：

1. 打开 **Memory（记忆）** 标签页。
2. 开启 **Episodic memory（情景记忆）**。

情景记忆需要一个 **OpenAI 凭证（credential）** 来存储和读取记忆。

#### 添加子 Agent / Add sub-agents

**子 Agent（Sub-agents）** 让这个 Agent 可以把工作转交给**其他已发布的 Agent**。当任务有**明显可分的多个部分**，且每个部分由一个专门化的 Agent 处理效果更好时，就用子 Agent。

1. 打开能力列表里的 **Agents** 区域。
2. 选择 **Add agent（添加 Agent）**，从你的项目里挑一个已发布的 Agent。
3. 在 **When should this agent be used?（什么时候应该使用这个 Agent？）** 下面，描述该子 Agent 应该在什么情况下被调用。

你可以在 Agent 设置里设置**同时并行运行**的子 Agent 的最大数量。

#### 预览你的 Agent / Preview your agent

选择顶栏的 **Preview（预览）** 来测试 Agent（无需发布）。n8n 会用当前草稿开启一个聊天会话。在发布之前，用预览功能检查 Agent 的行为、工具选择和回复。

如果 **Preview（预览）** 是**禁用**状态，说明草稿存在**配置错误**。n8n 会列出你需要解决的问题项。

### 发布 Agent / Publish an agent

发布 Agent 才能让用户、频道和定时任务使用它。**只有已发布版本会在生产环境运行**，所以你可以继续编辑草稿，而不影响别人看到的东西或你的定时任务。

1. 在 Agent Builder 里打开这个 Agent。
2. 检查有没有错误。如果 **Publish（发布）** 是禁用状态，n8n 会列出你需要解决的配置项。
3. 选择 **Publish（发布）**。

发布会**给当前草稿拍快照**，并把它标记为**当前生效版本（active version）**。

#### 更新已发布的 Agent / Update a published agent

Agent 发布后，你的编辑都进入**草稿**。已发布版本会**继续运行**，直到你再次发布。

要把改动上线：

1. 在 Agent Builder 里编辑草稿。n8n 会自动保存你的修改。
2. 用 **Preview（预览）** 测试改动。
3. 再次选择 **Publish（发布）** 来发布新版本。

想**丢弃未保存的改动**、让草稿和已发布版本一致？从发布菜单里选择 **Revert changes（还原改动）**。

#### 取消发布 Agent / Unpublish an agent

想下线一个 Agent，但又想**把草稿留在项目里**？从发布菜单里选择 **Unpublish（取消发布）**。在你重新发布之前，用户、频道和定时任务都无法再运行这个 Agent。草稿仍然可以继续编辑。

### 和已发布的 Agent 聊天 / Chat with a published agent

Agent Builder 里的**聊天面板（chat panel）**让你能直接和 Agent 对话。

1. 打开聊天面板。
2. 输入一条消息并发送。Agent 会开启一个会话并回复。
3. 想查看或继续过去的对话，打开**会话历史（session history）**，选择某个会话即可。

n8n 会把每一次对话都存成一个**会话（session）**。在 **Sessions（会话）** 标签页里可以查看会话，包括：交换的消息、Agent 使用过的工具，以及任何**待处理的批准（pending approvals）**。

#### 批准工具调用 / Approve tool calls

对于**敏感工具**，Agent 会在运行该工具之前**暂停并请求批准**。在聊天里选择 **Approve（批准）** 让工具运行，或选择 **Reject（拒绝）** 取消它。Agent 会根据你的决定从暂停的地方继续。

{% hint style="info" %}
**大白话（为什么要有批准）**：有些工具（比如「发送邮件」「删除数据」）一旦执行就不可逆。n8n 让这类工具在动手前先问你要不要执行——相当于给 Agent 装了个「重大操作必须请示」的开关，防止它擅自动手。
{% endhint %}

### 从其他渠道触达 Agent / Reach agents from other places

连接一个**频道（channel）**，让人们可以在 Agent Builder 的聊天之外触达 Agent。

可用的频道：

* **Slack**
* **Telegram**
* **Linear**

打开 Agent 上的 **Channels（频道）** 区域，按你想用的频道的设置说明操作。每个频道都有自己的**连接模型和权限模型**。

### 让 Agent 定时运行 / Run agents on a schedule

**定时任务（Schedules）** 让 Agent 可以按固定周期**自主运行**。从 **Schedules（定时任务）** 区域添加一个计划，描述 Agent 应该完成的任务，然后选择频率：

* Hourly（每小时）
* Daily（每天）
* Weekly（每周）
* Monthly（每月）
* Custom cron（自定义 cron 表达式）

定时任务**只针对已发布版本**运行。n8n 会为每个定时任务显示：下次运行时间、上次运行时间、以及上次运行的结果。

### 在工作流中使用 Agent / Use agents in workflows

你可以在工作流中以两种方式使用 Agent：

* **内联创建 Agent（Create agents inline）**：把 Agent 作为**节点（node）**直接加进工作流。这样你不用离开工作流编辑器，就能构建和配置一个 Agent。
* **给已有 Agent 发消息（Message existing agents）**：从工作流里给**已经创建好的 Agent**发消息。这样你可以调用已发布的 Agent，把它的能力整合进你的自动化（automation）。

### 自托管 / Self-hosted

Agent 从 **`2.32.3` 版本（Beta）** 起可在自托管版 n8n 上运行。有两种搭建方式：

* **手动搭建（Build manually）**：启用 `agents` 模块（在 `N8N_ENABLED_MODULES` 里加上 `agents`）。你自己选模型、写指令、挂工具和技能。要构建和运行 Agent，这种方式就够了。
* **完整体验（Full experience）**：另外再配置 [AI 助手（AI Assistant）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/set-up-ai-assistant)（`instance-ai`）实现 AI 辅助构建——你描述一个 Agent，n8n 帮你搭出骨架。**知识库**需要一个 **Daytona 沙箱**；**连接频道**需要一个**公开的 `WEBHOOK_URL`**。

{% hint style="warning" %}
自托管**企业版（Enterprise）**暂时还不能用 Agent。对自托管企业版的支持即将推出。
{% endhint %}

{% hint style="warning" %}
Agent 目前**不支持队列模式（Queue mode）**，而且**连接频道（比如 Telegram）可能会失败**。现阶段请在**常规模式（regular mode）**下运行 Agent。
{% endhint %}

环境变量和搭建步骤，请看 [启用 Agent（Enable agents）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/set-up-ai-assistant#enable-agents)。

### Agent 的执行次数和计费 / Agent executions and pricing

Agent 的**一次回合（turn）算一次执行（execution）**。所谓回合，就是一次单次往来：你给 Agent 发一条消息，它生成一个回复。

Agent 和普通工作流**共用同一个执行配额（execution quota）**。Agent 和工作流的执行次数，都计入你套餐里的**同一个总数**。

{% hint style="info" %}
**大白话（计费提醒）**：Agent 每「说一句话」就消耗一次执行额度，聊得越多消耗越多。如果你的套餐有执行次数上限，别忘了把 Agent 的对话也预算进去。
{% endhint %}
