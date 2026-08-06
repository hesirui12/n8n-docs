---
title: 护栏（Guardrails）节点文档
description: >-
  n8n（工作流自动化平台）中护栏（Guardrails）节点的文档。
  包含使用指南和示例链接。
contentType:
  - integration
  - reference
nodeTitle: 护栏（Guardrails）节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-langchain.guardrails.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.guardrails
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.guardrails
layout:
  description:
    visible: false
---

# 护栏（Guardrails）节点

> **大白话**：这个节点是 AI 应用的"安检门"。它检查一段文字有没有问题，比如：用户输入的"越狱"话术（想骗 AI 干坏事）、涉黄内容、泄露的手机号/信用卡号/密钥、超出业务范围的闲聊等。它可以放在 AI 模型**之前**（检查用户输入），也可以放在 AI 模型**之后**（检查 AI 的输出）。有问题就分流到 **Fail（失败）** 分支处理。另外还有"清洗模式"，能把敏感信息替换成占位符再放行。

使用护栏节点对文本强制执行安全、安全和内容策略（safety, security, and content policies）。你可以用它来验证用户输入——在把输入发送给 AI 模型**之前**，或者用来检查 AI 模型的**输出**——在把它用于你的工作流**之前**。

{% hint style="info" %}
**基于 LLM 的护栏需要连接聊天模型（Chat Model）**

当使用 **Check Text for Violations（检查文本违规）** 操作且采用基于 LLM 的护栏时，此节点需要把一个 Chat Model（聊天模型）节点连接到它的 Model（模型）输入上。许多护栏检查（如 Jailbreak 越狱、NSFW 涉黄、Topical Alignment 话题对齐）都是基于 LLM 的，会使用这个连接来评估输入文本。
{% endhint %}

## 节点参数（Node parameters）

使用这些参数配置护栏节点。

### 操作（Operation）

此节点的操作模式，用来定义它的行为。

- **Check Text for Violations（检查文本违规）**：提供一整套护栏。任何违规都会把数据项发送到 **Fail（失败）** 分支。
- **Sanitize Text（净化文本）**：提供一部分护栏，可以检测 URL、正则表达式、密钥或个人信息（PII，如手机号和信用卡号）。节点会把检测到的违规内容替换成占位符。

> **小白提示**：两者的区别：前者是"发现有违规就拦截（走 Fail 分支）"；后者是"发现问题就打个码（替换成占位符）放行"。比如用户输入里带了个手机号，净化模式会把它变成 `[PHONE]` 之类的占位符再继续处理。

### 要检查的文本（Text To Check）

护栏要评估的文本。通常，你用表达式把这个文本从前一个节点映射过来，比如用户查询中的文本，或 AI 模型的回复。

### 护栏（Guardrails）

选择要应用到 **Text To Check（要检查的文本）** 上的一个或多个护栏。当你从列表中添加一个护栏时，它的具体配置选项会出现在下方。

- **Keywords（关键词）**：检查输入文本中是否出现指定的关键词。
    - **Keywords（关键词）**：要拦截的词语列表，用逗号分隔。
- **Jailbreak（越狱）**：检测试图绕过 AI 安全措施或利用模型的企图。
    - **Customize Prompt（自定义提示词）**：（布尔值）打开后，会出现一个文本输入框，里面是越狱检测模型的默认提示词。你可以修改这个提示词来微调该护栏。
    - **Threshold（阈值）**：一个介于 0.0 和 1.0 之间的值。它表示 AI 模型判定输入为越狱企图所需的置信度。阈值越高越严格。
- **NSFW**：检测生成"不适合工作场合（Not Safe For Work）"内容的企图。
    - **Customize Prompt（自定义提示词）**：（布尔值）打开后，会出现一个文本输入框，里面是 NSFW 检测模型的默认提示词。你可以修改这个提示词来微调该护栏。
    - **Threshold（阈值）**：一个介于 0.0 和 1.0 之间的值，表示判定内容为 NSFW 所需的置信度。
- **PII**：检测文本中的个人信息（personally identifiable information）。
    - **Type（类型）**：选择要扫描哪些 PII 实体：
        - **All（全部）**：扫描所有可用的实体类型。
        - **Selected（选定）**：允许你从列表中选择特定实体。
    - **Entities（实体）**：（当 **Type** 为 **Selected** 时出现）要检测的 PII 类型的多选列表（例如 `CREDIT_CARD`、`EMAIL_ADDRESS`、`PHONE_NUMBER` 和 `US_SSN`）。
- **Secret Keys（密钥）**：检测文本中是否存在密钥或 API 凭据。
    - **Permissiveness（严格程度）**：判定密钥时，检测要多严格或多宽松：
        - **Strict（严格）**
        - **Permissive（宽松）**
        - **Balanced（平衡）**
- **Topical Alignment（话题对齐）**：确保对话保持在预定义的范围或话题内（也叫"业务范围"）。
    - **Prompt（提示词）**：一个预设提示词，定义**允许**的话题。护栏会检查 **Text To Check（要检查的文本）** 是否与这个提示词对齐。
    - **Threshold（阈值）**：一个介于 0.0 和 1.0 之间的值，表示判定输入为"偏离话题"所需的置信度。
- **URLs（网址）**：管理节点在输入文本中找到的 URL。除非你在 **Block All URLs Except（除以下 URL 外全部拦截）** 中指定，否则节点会把检测到的所有 URL 都视为违规。
    - **Block All URLs Except（除以下 URL 外全部拦截）**：（可选）你允许的 URL 列表，用逗号分隔。
    - **Allowed Schemes（允许的协议）**：选择要允许的 URL 协议（例如 `https`、`http`、`ftp` 和 `mailto`）。
    - **Block userinfo（拦截用户信息）**：（布尔值）打开后，节点会拦截包含用户凭据的 URL（例如 `user:pass@example.com`），以防止凭据注入。
    - **Allow subdomain（允许子域名）**：（布尔值）打开后，节点会自动允许 **Block All URLs Except（除以下 URL 外全部拦截）** 列表中任何 URL 的子域名（例如，如果列表中有 `example.com`，则 `sub.example.com` 会被允许）。
- **Custom（自定义）**：定义你自己的、基于 LLM 的自定义护栏。
    - **Name（名称）**：自定义护栏的描述性名称（例如"检查是否有粗鲁语言"）。
    - **Prompt（提示词）**：指示 AI 模型检查什么的提示词。
    - **Threshold（阈值）**：一个介于 0.0 和 1.0 之间的值，表示判定输入为违规所需的置信度。
- **Custom Regex（自定义正则表达式）**：定义你自己的自定义正则表达式模式。
    - **Name（名称）**：自定义模式的名称。在 **Sanitize Text（净化文本）** 模式下，节点会用这个名称作为占位符。
    - **Regex（正则表达式）**：你的正则表达式模式。

> **小白提示**：几个实用例子：
> - 想禁止用户聊暴力话题？用 **Keywords** 加几个词，或自定义一个 LLM 护栏。
> - 客服机器人不想处理"越狱"指令？开 **Jailbreak**。
> - 想防止用户把手机号/信用卡号发给 AI？开 **PII** 选对应实体。
> - 阈值（0~1）越小越敏感（更容易判违规），越大越宽松（更难判违规），一般默认值就行。

### 自定义系统消息（Customize System Message）

打开后，会出现一个文本输入框，里面有护栏用于强制执行阈值和按 schema 输出 JSON 的系统消息。修改它即可调整全局护栏行为。

> **小白提示**：这是高级选项，普通用户保持默认即可。只有当你了解护栏内部如何用系统提示词工作、想精细调教时才需要改。
