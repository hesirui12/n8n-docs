---
title: 执行数据脱敏（Execution data redaction）
contentType: howto
nodeTitle: 脱敏执行数据
originalFilePath: workflows/executions/execution-data-redaction.md
originalUrl: https://docs.n8n.io/workflows/executions/execution-data-redaction
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/redact-execution-data
description: >-
  控制工作流中执行数据的可见性，以保护敏感信息并满足合规要求。
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

# 脱敏执行数据（Redact execution data）

{% hint style="info" %}
**功能可用性**

数据脱敏在 Enterprise 自托管版（Self-hosted）和 Enterprise 云版（Cloud）上可用。

**可用版本：** n8n 2.16.0 起支持「按工作流」脱敏；n8n 2.26.0 起支持「实例级强制」。
{% endhint %}

{% hint style="info" %}
**小白提示**：执行数据（execution data）= 工作流每次运行（执行）时，每个节点收到的输入和吐出的输出。比如一个处理客户订单的工作流，执行数据里就可能夹着客户的手机号、地址、订单金额。开启脱敏后，这些内容会被打码隐藏，但「执行了没有、成功还是失败、花了多久、经过了哪些节点」这些基本信息仍然可见。
{% endhint %}

执行数据脱敏（execution data redaction）让你隐藏工作流执行时的输入和输出数据。这有助于保护敏感信息——比如个人数据、认证令牌、财务记录——避免那些「能查看工作流、但不需要看到底层数据」的用户看到这些内容。

当你启用脱敏时，执行元数据（状态、时间、节点名称）仍然可见，但 n8n 会把每个节点实际处理的数据内容替换成一个「已脱敏」的提示标记。

你可以按工作流配置脱敏，也可以[在实例级别强制开启](redact-execution-data.md#instance-level-enforcement)，让每个工作流都执行数据脱敏。

## 为什么要用执行数据脱敏（Why use execution data redaction）

工作流经常处理「工作流构建者或查看者本不该在 n8n 之外访问」的数据。常见场景包括：

* **PII（个人身份信息）与合规要求**：处理客户个人数据（邮箱、地址、财务记录）的工作流，需要满足 GDPR、SOC 2 或内部安全标准。
* **跨部门工作流**：一个团队构建的工作流，会处理另一个团队的敏感数据，而这些数据构建者本来是无权访问的。
* **最小权限原则（least privilege）**：只让「真正需要的人」看到数据，而不是所有有工作流查看权限的人都能看到。

在执行数据脱敏功能出现之前，唯一的办法是直接在「工作流级别」禁用整个执行历史记录，但那样连「成功/失败」状态都看不到了。执行数据脱敏既能保留执行监控（还能看到执行结果），又能隐藏敏感的数据内容。

{% hint style="info" %}
**小白提示**：最小权限原则是安全领域的一条黄金法则——只给每个人「完成工作所必需的最小权限」。就像办公室钥匙：保洁只需要公共区域钥匙，就绝不给档案室钥匙，这样出事的概率最低。
{% endhint %}

## 配置脱敏设置（Configure redaction settings）

你在工作流设置（workflow settings）里为每个工作流单独配置脱敏。你需要 `workflow:enableRedaction`（启用脱敏）或 `workflow:disableRedaction`（禁用脱敏）权限（或者两个都有），才能修改这些设置。

{% hint style="info" %}
**小白提示**：权限范围（scope）= n8n 用来精确控制「谁能做什么」的权限单位。这里的 `workflow:enableRedaction` / `workflow:disableRedaction` 分别对应「允许打开脱敏」「允许关闭脱敏」，可以通过自定义角色（custom roles）分配给用户。
{% endhint %}

配置步骤：

1. 打开你的工作流。
2. 点击右上角的**三个点图标** <img src="../../../.gitbook/assets/three-dots-horizontal (1).png" alt="three dots icon" data-size="line">。
3. 选择 **Settings（设置）**。
4. 找到 **Redact production execution data（脱敏生产执行数据）** 和 **Redact manual execution data（脱敏手动执行数据）** 设置。
5. 对每个设置，选择 **Default - Do not redact（默认 - 不脱敏）** 或 **Redact（脱敏）**。
6. 点击 **Save（保存）**。

{% hint style="info" %}
**被实例级强制锁定的设置**

当[实例级强制](redact-execution-data.md#instance-level-enforcement)开启时，n8n 会把被强制范围覆盖的设置锁定为 **Redact（脱敏）**。你在工作流级别无法把它关掉。
{% endhint %}

### 脱敏设置详解（Redaction settings explained）

有两个独立的开关控制脱敏：

| 设置 | 控制什么 |
| --- | --- |
| **Redact production execution data（脱敏生产执行数据）** | 控制 n8n 是否对「生产执行」（非手动触发的执行）的数据脱敏。生产执行包括：工作流处于「激活」状态时，由 webhook、定时任务（schedule）或其他触发器触发的执行。 |
| **Redact manual execution data（脱敏手动执行数据）** | 控制 n8n 是否对「手动触发的执行」的数据脱敏。手动执行包括你在编辑器中点击 **Execute Workflow（执行工作流）** 启动的执行。 |

{% hint style="info" %}
**小白提示**：生产执行 vs 手动执行——手动执行 = 你自己点按钮跑一次（通常用来测试）；生产执行 = 工作流被保存为「激活」状态后，由定时器、webhook 自动触发（真正在「干活」）。通常生产数据更敏感，所以把「脱敏生产执行」作为起点最合理。
{% endhint %}

## 实例级强制（Instance-level enforcement）

实例所有者和管理员可以在实例级别强制所有工作流脱敏，而不必依赖每个工作流各自的设置。强制会设定一个「最低脱敏标准」（一个"底线"floor），在所有地方都生效。

要启用强制，进入 **Settings（设置）** > **Security（安全）**，配置 **Data redaction（数据脱敏）** 区域。分步说明请参考[安全设置](manage-security-policies.md#enforce-execution-data-redaction)。

### 强制范围（Enforcement scope）

强制范围控制 n8n 在实例上对哪些执行脱敏：

| 范围 | 强制内容 |
| --- | --- |
| **Production executions（生产执行）** | n8n 对每个工作流的生产执行数据脱敏。手动执行仍然遵循各工作流自己的设置。这是推荐设置：既能保护真实数据，又能保留手动测试运行的可见性，方便调试。 |
| **Manual and production executions（手动和生产执行）** | n8n 对每个工作流的所有执行数据都脱敏。当连测试数据都敏感时（例如测试环境用了生产数据的副本），使用此选项。 |

### 强制与工作流设置的相互作用（How enforcement interacts with workflow settings）

* **只要执行数据被读取，强制就生效**：任何人查看一次执行时，n8n 都会对「强制范围覆盖的数据」脱敏——包括那些「自己设置里没开脱敏」的工作流。
* **工作流设置不能比强制范围更宽松**：工作流设置界面会把受影响的脱敏开关锁住，[公开 API](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api) 也会拒绝「创建或更新为低于底线脱敏策略」的工作流。但工作流仍然可以主动选择比底线更严格的脱敏。
* **新建的工作流默认采用底线**：强制开启时创建的工作流，其脱敏策略默认等于强制范围。如果你通过公开 API 创建工作流且没有指定脱敏策略，n8n 也会把它设为底线。
* **已有工作流的设置保持不变**：启用强制不会改变现有工作流存储的设置。它们的执行数据仍然会按强制范围脱敏；如果之后你关闭强制，每个工作流会恢复回它自己的设置。

## 哪些内容会被脱敏（What gets redacted）

当 n8n 脱敏一次执行时，会脱敏以下内容：

* **节点 JSON 数据（Item JSON data）**：n8n 会把每个节点的所有输入和输出数据（`item.json`）替换成空对象。
* **二进制数据（Binary data）**：n8n 会移除二进制数据（`item.binary`），比如文件和图片。
* **被声明为敏感的字段**：n8n 始终会脱敏节点作者标记为敏感（通过 `sensitiveOutputFields` 声明）的字段，并且即使是有「查看已脱敏数据」权限的用户也无法查看它们。
* **错误元数据**：n8n 会脱敏错误消息，只保留错误类型和 HTTP 状态码（针对 API 错误），以便排查问题。

在被脱敏的执行中：

* 执行查看器会显示一个带「碎纸机（shredder）图标」的 **"Data redacted（数据已脱敏）"** 提示，代替平时显示的数据表格。
* 执行元数据仍然可见：节点名称、执行状态（成功/失败）、时间信息、工作流结构。

{% hint style="info" %}
**错误信息**

当 n8n 脱敏执行数据时，也会脱敏错误详情，防止敏感信息通过错误消息泄露。只有错误类型（例如 `NodeApiError`）和 HTTP 状态码保留。这足以让你判断失败的大类，而不会暴露具体数据。
{% endhint %}

## 查看已脱敏的数据（Reveal redacted data）

拥有 **Reveal execution data（查看执行数据）**（`execution:reveal`）权限的用户，可以临时查看某次具体执行的已脱敏数据。实例所有者和管理员默认拥有此权限。

{% hint style="info" %}
**小白提示**：这个功能是给「管理员/审计人员」用的例外通道——正常情况下数据被打码，但当出现问题时（比如排查故障），有权限的人可以临时解开某一次执行的数据来看。每一次解开都会被记录到审计日志里，方便追责。
{% endhint %}

查看步骤：

1. 在执行查看器中打开该执行。
2. 点击被脱敏数据区域显示的 **Reveal data（查看数据）** 按钮。
3. 查看确认对话框。它会说明：
   * 系统会把这次操作记录到审计日志（audit trail）中。
   * 你只应该在有正当理由时查看数据。
   * 不必要的访问可能违反你所在组织的政策。
4. 点击 **Reveal data（查看数据）** 确认。

之后，在当前会话中，该次执行的（被脱敏的）数据就会可见。

{% hint style="info" %}
**使用了动态凭据的执行**

对于使用了动态凭据（dynamic credentials）的执行，n8n 会拒绝「查看数据」请求，无论用户有什么权限、当前脱敏策略是什么。这是为了防止暴露执行时动态解析出来的凭据。
{% endhint %}

{% hint style="info" %}
**小白提示**：动态凭据 = 在执行过程中才通过代码/表达式动态获取的账号信息（比如密码放在环境变量里，执行时才读出来）。因为连 n8n 自己都不确定里面是什么，所以干脆一律不允许查看，这是「宁可拒绝、不可泄露」的稳妥做法。
{% endhint %}

## 审计日志（Audit logging）

[日志流（Log streaming）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems)会记录「查看数据」操作和「强制策略变更」。可用的审计事件如下：

| 事件 | 描述 |
| --- | --- |
| `n8n.audit.execution.data.revealed` | 当用户查看了已脱敏的执行数据时，n8n 会发出此事件。包含用户、执行 ID、工作流 ID、时间戳、IP 地址，以及当时生效的脱敏策略。 |
| `n8n.audit.execution.data.reveal_failure` | 当 n8n 拒绝一次「查看数据」尝试时（例如权限不足），会发出此事件。包含与上面相同的字段，外加拒绝原因。 |
| `n8n.audit.redaction-enforcement.updated` | 当用户修改了实例级强制策略时，n8n 会发出此事件。包含用户，以及变更前后的策略值。 |

这些事件会接入你现有的日志流目的地（syslog、webhooks、Sentry），支持合规报告和访问审计。

{% hint style="info" %}
**小白提示**：审计（audit）= 把关键操作一笔一笔记录下来，出了问题能追溯「谁、在什么时候、做了什么」。日志流 = 把这些记录实时转发到外部日志系统（比如 Sentry、自己的日志服务器），这样 n8n 就算挂了，日志也还在。
{% endhint %}

## 权限范围（Permission scopes）

执行数据脱敏引入了以下权限范围，你可以通过[自定义项目角色（custom project roles）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles)来分配：

| 权限范围 | 用途 |
| --- | --- |
| `workflow:enableRedaction` | 允许在工作流设置中打开脱敏。在角色配置界面中显示为 **Enable data redaction（启用数据脱敏）**。 |
| `workflow:disableRedaction` | 允许在工作流设置中关闭脱敏。在角色配置界面中显示为 **Disable data redaction（禁用数据脱敏）**。 |

默认情况下，实例所有者、管理员和项目管理员拥有启用/禁用脱敏以及查看已脱敏数据的权限。你可以创建自定义角色，把其中一个或两个权限单独授予更多用户（例如工作流构建者）。

## 脱敏不覆盖哪些内容（What redaction doesn't cover）

脱敏控制的是「用户查看执行时」数据的可见性。它不是后端访问控制（backend access control），有些数据路径不在它的范围内。在评估脱敏是否符合合规要求时，请记住这些限制：

* **Code 节点的 `console.log` 输出**：Code 节点用 `console.log` 记录的数据不会被脱敏。在手动执行中，输出会显示在编辑器的 Logs 面板里；在生产执行中，输出会进入服务器标准输出（stdout）以及任何挂接在其上的日志基础设施。
* **节点之间流动的数据**：脱敏不限制下游节点能接收到什么。执行过程中，数据在节点之间不受限制地流动，所以工作流中的任何节点都可以把执行数据发送到外部系统。脱敏控制的是「用户在执行查看器里看到什么」，而不是「工作流自己拿数据去做什么」。
* **Webhook 响应**：工作流返回给调用方的响应体（例如通过 Respond to Webhook 节点或某个节点的 respond 选项）是原始数据，不是脱敏后的版本。
* **出站请求中的认证头**：脱敏不会修改工作流对外部服务发出的请求，包括请求中携带的任何认证头（authentication headers）。
* **没有字段级脱敏**：脱敏针对的是节点的「整个数据负载」（data payload）。你不能对数据中的单个字段单独配置脱敏。唯一的例外是节点作者声明为敏感的字段，n8n 始终会脱敏它们。
* **存储的数据保持原样**：脱敏不会加密或修改数据库中的执行数据。n8n 是在通过 API 提供数据时才应用脱敏。任何能直接访问数据库的人都能读取底层数据。
* **强制不会通过源代码控制传播**：实例级强制是一项实例策略，在你用[源代码控制（source control）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/use-source-control-and-environments)推送工作流时不会一起携带。从「已强制实例」推送到「未强制实例」的工作流，在目标实例上不会被脱敏。这与其它实例级策略（如双因素认证强制）的行为一致。

{% hint style="info" %}
**小白提示**：简单概括上面几点——脱敏只影响「人在界面上查看执行数据」这一件事。工作流把数据发给谁、写进日志、返回给调用方，都不受脱敏约束。所以脱敏是「防君子、补合规」的手段，不是替代数据库加密或访问控制的方案。
{% endhint %}

## 最佳实践（Best practices）

### 选择正确的脱敏策略（Choosing the right redaction policy）

| 场景 | 推荐设置 |
| --- | --- |
| 生产环境中处理 PII、财务数据或认证令牌的工作流 | 脱敏生产执行数据 |
| 连测试数据都敏感的工作流（例如使用了生产数据的副本） | 同时脱敏生产执行和手动执行数据 |
| 处理非敏感数据的工作流，或处于初始开发阶段 | 不脱敏 |

### 通用建议（General recommendations）

* **从生产脱敏开始**：对大多数处理敏感数据的工作流来说，脱敏生产执行、保留手动执行可见，是「安全性」和「调试便利性」之间的良好平衡。
* **需要时再脱敏手动数据**：如果你的测试环境使用真实或接近生产的数据，也请启用手动执行脱敏。
* **使用日志流**：启用[日志流](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems)来捕获「查看数据」的审计事件。这为合规性提供了审计轨迹，并允许你监控谁访问了敏感的执行数据。
* **在工作流评审中检查脱敏设置**：把脱敏策略纳入你的工作流评审或审批流程，特别是处理跨部门或面向客户数据的工作流。

## 安全注意事项（Security considerations）

* n8n 在 API 层应用脱敏，绝不会把已脱敏的数据发送到浏览器。
* 当你[创建自定义节点](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/create-nodes/overview)时，可以把特定的输出字段声明为敏感（在节点类型定义中使用 `sensitiveOutputFields`）。n8n 始终会脱敏这些字段并禁止查看，即使对有查看权限的用户也一样。
* 如果脱敏服务无法解析某个节点的类型定义（例如卸载社区节点之后），n8n 会将该节点的所有输出数据全部脱敏。这种「失败即关闭」（fail-closed）的做法可以防止未知节点泄露敏感字段。
* 启用脱敏后，执行数据也会自动从[日志流](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems)和日志输出中脱敏。
