---
description: n8n 的隐私政策
tags:
  - gdpr
  - data collection
  - pid
  - payment processor
hide:
  - tags
contentType: explanation
nodeTitle: 隐私
originalFilePath: privacy-security/privacy.md
originalUrl: 'https://docs.n8n.io/privacy-security/privacy'
url: 'https://docs.n8n.io/privacy-and-security/privacy'
layout:
  description:
    visible: false
---



# 隐私

本页介绍 n8n 的数据隐私实践。

{% hint style="info" %}
**小白必读：这一页到底在讲什么？**

这一页回答一个核心问题：**"n8n 会收集我的哪些数据？这些数据安全吗？"** 无论你是用 n8n 的云服务（n8n Cloud），还是在自己服务器上部署（自托管），都建议先读一遍这一页，搞清楚 n8n 对你的数据做了什么，以及你有哪些权利可以行使。
{% endhint %}

## GDPR

{% hint style="info" %}
**小白必读：什么是 GDPR？**

GDPR 是 **《通用数据保护条例》**（General Data Protection Regulation）的缩写，是欧盟制定的一部非常严格的数据隐私法律。它规定了企业收集、存储、处理个人数据时必须遵守的规则，并赋予个人"被遗忘权"（要求删除自己数据）等权利。虽然它出自欧盟，但只要是面向欧盟用户提供服务的企业，基本都要遵守，所以 n8n 把它当作全球通用的数据隐私标准。
{% endhint %}

### 数据处理协议

对于 n8n 的云版本（n8n Cloud），按照 GDPR 的定义，n8n 既是**数据控制者**（Controller），也是**数据处理者**（Processor）。

{% hint style="info" %}
**小白必读：Controller 和 Processor 有什么区别？**

- **数据控制者（Controller）**：决定"为什么要收集数据、收集什么数据、怎么用数据"的一方。
- **数据处理者（Processor）**：受控制者委托，实际动手"处理"数据的一方（比如存储、传输、分析）。

在 n8n Cloud 场景下：你自己是控制者（你决定让工作流处理什么数据），n8n 是处理者（n8n 帮你运行、存储这些数据）。同时 n8n 自己也要处理你的账号信息（比如邮箱、用户名），所以它在这部分数据上也是控制者——这就是"既是控制者又是处理者"的意思。
{% endhint %}

作为数据处理者，n8n 实施了一系列保障你发送到平台上的个人数据安全的政策和措施，并把[数据处理协议](https://n8n.io/legal/#data)作为公司标准[服务条款](https://n8n.io/legal/#terms)的一部分。

n8n 的数据处理协议包含[标准合同条款（SCCs）](https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en)。

{% hint style="info" %}
**小白必读：什么是 SCCs？**

**标准合同条款**（Standard Contractual Clauses，简称 SCC）是欧盟委员会发布的官方合同模板。它的作用是在"数据被传输到欧盟以外地区"（比如传到美国的服务器）时，为这些数据提供法律上的保护。你可以把它理解为一份"数据出境的官方安全保证书"。n8n 把它纳入协议，说明 n8n 处理跨境数据时遵循了欧盟的最新标准。
{% endhint %}

你可以在[这里](https://n8n.io/legal/sub-processors/)查看 n8n 的次级处理者（sub-processor）列表。

{% hint style="info" %}
**小白必读：什么是次级处理者（sub-processor）？**

次级处理者就是 n8n 为了提供服务而"外包"出去帮忙处理数据的第三方公司，比如云服务器提供商、日志服务商等。就像你请了装修公司，装修公司又找了水电工——水电工就是次级处理者。n8n 公开这份名单，让你清楚知道你的数据最终被哪些公司碰过。
{% endhint %}

{% hint style="info" %}
**自托管版 n8n**

对于自托管版本（你自己在服务器上部署 n8n），n8n **既不是数据控制者，也不是数据处理者**，因为我们完全不接触、不管理你的数据——数据全都在你自己的服务器上。
{% endhint %}

### 提交账号删除请求

如需删除账号，请发送邮件到 help@n8n.io 提出请求。

### 次级处理者

次级处理者列表已迁移到 [n8n.io/legal/sub-processors](https://n8n.io/legal/sub-processors/)。

### 自托管用户的 GDPR

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iLayKGKnzGLWFd5VGZVk/" %}

{% hint style="info" %}
**小白提示：上面这行代码是什么？**

这是文档系统（GitBook）的"复用片段"引用标记，用来在多个页面里插入同一段内容。你在 n8n 官方网站上看到这个页面时，这里会自动显示"自托管用户的 GDPR 责任"相关内容。翻译版里我们原样保留这行代码，因为它是一个引用指令，不能改动。
{% endhint %}



## 数据收集

n8n 会收集部分使用情况和性能数据，用来帮助诊断问题、改进平台。想了解 n8n 如何存储和处理这些信息，请阅读[隐私政策](https://n8n.io/legal/#privacy)。

自托管版 n8n 和 n8n Cloud 收集的数据是不同的，下面分开说明。

### 自托管版 n8n 的数据收集

n8n 会尽量保持自托管数据的匿名性，并避免收集敏感数据。

#### n8n 会收集什么

- 失败执行（execution）的错误代码和错误信息（不包含任何载荷数据 payload，也不包含自定义节点的错误信息）
- 应用崩溃和 API 问题的错误报告
- 工作流的图结构（使用了哪些类型的节点，以及节点之间如何连接）

{% hint style="info" %}
**小白必读：什么是"工作流的图结构"？**

你在 n8n 画布上把各种节点拖拽连起来，形成的那个"流程图"，就是工作流的图结构。n8n 会记录这个结构（用了哪些节点、怎么连的），但**不会**记录节点里填的具体数据。
{% endhint %}

- 来自节点参数的数据：
    - 节点设置的"资源"（resource）和"操作"（operation）（如果适用）
    - 对于 HTTP 请求节点，会记录域名、路径和请求方法（个人数据会做匿名化处理）
- 与工作流执行相关的数据：
    - 执行状态（status）
    - 运行执行的用户 ID
    - 工作流第一次从外部来源加载数据的时间
    - 第一次成功的生产环境（非手动）工作流执行
- Webhook 调用的域名（如果指定了的话，不含子域名）
- UI 使用情况的详细信息（例如页面导航、节点面板的搜索操作）
- 诊断信息：
    - n8n 版本号
    - 部分选定的设置项：
        - DB_TYPE
        - N8N_VERSION_NOTIFICATIONS_ENABLED
        - N8N_DISABLE_PRODUCTION_MAIN_PROCESS
        - [执行相关变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/executions)
    - 操作系统（OS）、内存（RAM）和 CPU 信息
    - 匿名实例 ID
 - IP 地址

#### n8n 不会收集什么

n8n **不会**收集私有或敏感信息，例如：

- 个人身份信息（IP 地址除外）
- 凭据信息（credentials，比如 API 密钥、密码等）
- 节点参数（"资源"和"操作"除外）
- 执行数据（你工作流实际处理的数据）
- 敏感设置（例如端点、端口、数据库连接、用户名/密码）
- 错误载荷（error payloads）

{% hint style="info" %}
**小白必读：为什么 IP 地址算例外？**

IP 地址是访问网络时分配给设备的"门牌号"，理论上可以定位到大致地理位置，属于广义上的个人数据，所以 n8n 明确说明"个人身份信息不含 IP 地址"——即 IP 地址是会被收集的。但请放心，n8n 只把它用于诊断和防滥用等正当用途，不会用它去追踪某个具体个人。
{% endhint %}

#### 收集机制是怎样的

大多数数据是在事件发生时立即发送给 n8n 的。工作流的执行次数统计和实例心跳信号（instance pulse）则每隔 6 小时发送一次。

{% hint style="info" %}
**小白必读：什么是"实例心跳信号"？**

"心跳"（pulse）是一种"我还活着"的信号。你的 n8n 实例每隔 6 小时主动向 n8n 报告一次"我还在正常运行"，这样 n8n 可以大致了解有多少实例在活跃使用。它不包含你的业务数据。
{% endhint %}

#### 选择关闭遥测（telemetry）

遥测数据收集在默认情况下是**开启**的。如果你想关闭它，可以配置以下环境变量。

{% hint style="info" %}
**小白必读：什么是环境变量？**

环境变量是运行 n8n 之前，在操作系统或启动命令里设置的"配置开关"，格式一般是 `变量名=值`。下面每个 `export` 命令就是在设置一个环境变量，`false` 表示"关闭"。n8n 启动时会读取这些变量来决定行为。具体的设置方法，请看下文
{% endhint %}

要关闭遥测事件（不再发送诊断数据）：

```bash
export N8N_DIAGNOSTICS_ENABLED=false
```

要关闭新版本检查（不再联网检查 n8n 是否有新版本）：

```bash
export N8N_VERSION_NOTIFICATIONS_ENABLED=false
```

要关闭模板功能（可阻止后台健康检查请求）：

```bash
export N8N_TEMPLATES_ENABLED=false
```

{% hint style="info" %}
**如何设置环境变量（小白操作指南）**

- **Docker 部署**：在启动容器的命令里加 `-e N8N_DIAGNOSTICS_ENABLED=false`，或者在 docker-compose.yml 的 `environment` 列表里加上这一行。
- **npm/源码部署**：在启动命令前加上 `export`（Linux/macOS），Windows 则用 `set N8N_DIAGNOSTICS_ENABLED=false`。
- 设置后需要重启 n8n 才能生效。
- 更详细的说明见官方[配置文档](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration)。
{% endhint %}

### n8n Cloud 的数据收集

n8n Cloud 会收集[自托管版数据收集](#自托管版-n8n-的数据收集)中列出的全部数据。

此外，在 n8n Cloud 中，n8n 使用 [PostHog](https://posthog.com/) 来跟踪事件、可视化使用情况，包括使用**会话录制**（session recordings）功能。会话录制包含用户在屏幕上看到的数据，**但不包含凭据值**。n8n 的产品团队使用这些数据来改进产品。所有录制内容会在 21 天后删除。

{% hint style="info" %}
**小白必读：什么是"会话录制"？**

会话录制就像"录屏回放"——n8n 会记录你在界面上的操作轨迹（点了哪里、拖了什么），用来研究用户的使用习惯、改进产品体验。重要的一点是：**密码、API 密钥等凭据值不会被录进去**，而且录制内容 21 天后自动销毁。如果你用的是自托管版，则完全没有这个功能，因为数据不会离开你的服务器。
{% endhint %}

### n8n 中的 AI

为了提供增强的辅助功能，n8n 集成了基于大型语言模型（LLM）的 AI 功能。

{% hint style="info" %}
**小白必读：什么是 LLM？**

LLM（Large Language Model，大型语言模型）就是像 ChatGPT 那样的 AI 模型，能理解并生成自然语言。n8n 的 AI 助手就是靠它来帮你生成工作流、排查问题的。
{% endhint %}

#### n8n 如何使用 AI

为了帮助用户并改善使用体验，n8n 可能会向 LLM 发送特定的上下文数据。这些上下文数据**严格限制在"当前工作流"的相关信息范围内**。n8n **不会**向 AI 服务发送任何凭据字段的值或实际输出数据。这些数据**不会**被 AI 服务用于训练模型，也不会被纳入、使用或留存。任何数据都会在 **30 天后删除**。

#### AI 使用设置

{% hint style="info" %}
需要 n8n v2.7.0 及以上版本。
{% endhint %}

你可以在 n8n 实例中通过 **设置（Settings）** > **AI 使用（AI Usage）** 来管理你的 AI 使用设置。

更多细节见 [AI 助手文档页面](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/ways-of-building-workflows/use-the-ai-assistant#ai-usage-settings)。

#### n8n 何时共享数据

只有在工作区**主动选择开启** AI 助手的情况下，数据才会被发送给 AI 服务。对于 n8n Cloud 用户，AI 助手默认是开启的。当工作区选择使用助手后，节点相关的数据**只在与 AI 助手进行直接交互、或处于活跃会话期间**才会被传输，从而确保不会发生不必要的数据共享。

#### n8n 会共享什么

- **通用工作流信息**：包括你的工作流中有哪些节点、当前工作流中有多少条数据项、工作流是否处于激活状态。
- **节点的输入/输出结构（Schema）**：包括所有有输入数据的节点的输入结构，以及当前节点的输出结构。注意：我们**不会**发送结构对应的实际数据值。
- **节点配置**：包括所选节点的操作（operation）、选项（option）和设置（setting）。
- **代码和表达式**：包括节点中的任何代码或表达式，用于帮助排查潜在问题和优化。

{% hint style="info" %}
**小白必读：什么是"结构（Schema）"？**

结构（Schema）描述的是数据的"形状"而不是"内容"。举个例子：如果说一条数据是"张三，25 岁，北京"，那么它的 Schema 就是"姓名（文本）、年龄（数字）、城市（文本）"。n8n 只会告诉 AI "你的数据长什么样"，而不会告诉它"张三 25 岁住在北京"。
{% endhint %}

#### n8n 不会共享什么

- **凭据（Credentials）**：你节点里所有凭据字段的值（API 密钥、密码等）。
- **输出数据（Output Data）**：你的工作流实际处理的数据。
- **敏感信息（Sensitive Information）**：任何可能危害你隐私或安全的个人身份信息或其他敏感数据——除非你明确把它们写在了节点参数里，或写在了[代码节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code)的代码中。

{% hint style="warning" %}
**特别提醒（小白重点）**

最后一条要划重点：如果你自己在"代码节点"的代码里写入了敏感信息（比如写死了一个密码、一段用户隐私数据），那这些内容就属于"你自己明确提到"的数据，是可能被共享出去的。**不要把密钥和敏感数据写死在代码里**，请一律放到凭据（Credentials）里管理。
{% endhint %}

### 文档遥测

n8n 的文档（也就是这个网站）使用 cookie 来识别你的重复访问和偏好设置，同时用于衡量 n8n 文档的有效性，以及用户是否能找到他们想搜索的内容。在征得你同意的前提下，你就是在帮助 n8n 把文档做得更好。你可以通过页面上的 cookie 组件来控制 cookie 同意设置。

## 个人身份数据（PID）的保留与删除

PID（个人身份数据，personal identifiable data）是指与你的个人身份相关、能够识别出你是哪位具体个人的数据。

{% hint style="info" %}
**小白必读：PID 是什么？**

PID 就是"能认出你是谁"的数据，比如真实姓名、邮箱地址、手机号、身份证号等。和它相对的是"匿名数据"——比如"有 100 个人今天用了 n8n"这种统计数字，就没法认出具体是谁。
{% endhint %}

### n8n Cloud

#### PID 保留

n8n 只会在提供核心服务所必需的期限内保留数据。

对于 n8n Cloud，n8n 会无限期存储你的工作流代码、凭据和其他数据，直到你选择删除它们或关闭账号为止。平台会根据你账号上的保留规则（retention rules）来存储执行数据。

n8n 会在 90 天内删除大部分内部应用日志以及与次级处理者相关的日志。出于安全调查的需要，公司会保留一小部分日志更长的时间。

#### PID 删除

如果你选择删除 n8n 账号，n8n 会删除与该账号关联的所有客户数据和事件数据。n8n 会在 90 天内删除备份中的客户数据。

{% hint style="info" %}
**小白必读：为什么删除账号后，备份里的数据要等 90 天？**

"删除备份"和"删除在线数据"不同。在线数据可以立刻删掉，但 n8n 的备份系统是定期快照，出于数据安全（防止误删后无法恢复）和合规要求，备份里的旧副本需要等备份自然过期后才会被清掉，最长不超过 90 天。所以如果你彻底删号，90 天内相关数据会在所有备份中被清除干净。
{% endhint %}

### 自托管

自托管用户应该制定自己的 PID 政策和数据删除流程。更多信息请参阅[你能做什么](what-you-can-do.md)。

## 支付处理商

n8n 使用 Paddle.com 处理付款。当你订阅付费套餐时，Paddle 会根据其安全政策传输和存储你的支付方式详情。n8n 本身**不存储**任何关于你支付方式的信息。

{% hint style="info" %}
**小白必读：这意味着什么？**

你的银行卡号、支付信息全程由 Paddle 这家专业的支付公司处理，n8n 自己压根不碰、也不存你的支付信息。所以即使 n8n 服务器出现问题，你的银行卡数据也不会从 n8n 这边泄露。这也是常见的合规做法：让专业支付公司处理支付，降低商家自身的安全风险。
{% endhint %}
