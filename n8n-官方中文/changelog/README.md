# 更新日志（Changelog）

{% hint style="info" %}
**大白话**：n8n 每次发布新版本，都会在这里告诉你"这次最值得关注的新东西"。这一页是"精选摘要"——挑最重要的功能讲故事；想看所有功能级更新的完整列表，翻到 [发布说明（Release notes）](release-notes.md)；想看每个版本的全部改动细节（包括 bug 修复），去 [GitHub releases](https://github.com/n8n-io/n8n/releases)。老版的发布说明页面（[2.x](release-notes-2.x.md)、[1.x](release-notes-1.x.md)、[0.x](release-notes-0.x.md)）已归档保留，2.x 归档里的内容都已涵盖在本更新日志和发布说明中。
{% endhint %}

每一次 n8n 发布都在推动平台向前发展。更新日志是我们专门为在 n8n 上构建的技术团队指出最重要变更的地方：新能力、对工作流运行方式的更多控制、以及对工作流实际行为的更清晰可见性。每条记录都与它发布的版本挂钩，最新的在最上面，并且独立成篇，方便你分享团队一直等待的那条更新。

{% hint style="info" %}
根据你的需要，把本页面与 n8n 的其他发布资源搭配使用：

* **更新日志（Changelog）**（本页）：按时间推出的最重要新功能的精选叙事摘要。
* [发布说明（Release notes）](release-notes.md)：每个版本中所有功能级更新的列表。
* [GitHub releases](https://github.com/n8n-io/n8n/releases)：每个版本的完整变更详情，链接到提交记录，包括 bug 修复和小改动。

旧式发布说明页面 [2.x](release-notes-2.x.md)、[1.x](release-notes-1.x.md) 和 [0.x](release-notes-0.x.md) 已归档保留。2.x 归档中的一切内容都已涵盖在本更新日志和发布说明中。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iFLUKG9zJaouigaM7IOo/" %}

***

## 让 Worker 返回任意大小的 Webhook 响应

**发布时间：** 2026-08-04，在 [n8n 2.34](release-notes.md#n8n234) 中

你的队列模式 worker 现在可以返回任意大小的 webhook 响应，无论负载多大。在队列模式下，worker 负责执行，但发起请求的客户端仍连接在主实例或 webhook 实例上，因此 [Respond to Webhook（响应 Webhook）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.respondtowebhook)节点的响应必须经由队列传回。Redis 在消息传输过程中会持有整个响应，这就是 n8n 默认将其上限设为 64 MiB 的原因（`N8N_WEBHOOK_RESPONSE_RELAY_SIZE_MAX`）。响应序列化后超过该上限，节点就会失败：例如数据库查询返回的大结果集、一批聚合的 API 调用、或在工作流中组装的 CSV 或 XML 文档。

在你的 worker 上设置 `N8N_WEBHOOK_RESPONSE_RELAY_OFFLOAD_ENABLED=true`，n8n 就会把超过该上限的响应体存入[二进制数据存储](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/scaling/handle-binary-data)中。此时队列消息只携带一个引用，主实例把响应体从存储流式传输给客户端，n8n 在交付响应后会删除存储的副本，所以不会累积任何东西。无论响应多大，Redis 内存都保持平稳。

卸载（offloading）需要一个存储数据的 `N8N_DEFAULT_BINARY_DATA_MODE`（除 `default` 外的任何模式），以及所有实例都能读取的存储。n8n 推荐 `s3` 或 `azure`，因为两者都能分块流式传输响应体。只有运行 2.34.0 或更高版本的主实例才能读取已卸载的响应体，所以该变量默认是关闭的：先升级主实例和 webhook 实例，然后在你的 worker 上启用它。

完整的配置、升级顺序和故障排查，请参阅 [Large webhook responses（大型 Webhook 响应）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/scaling/enable-queue-mode#large-webhook-responses)。

***

## Microsoft 节点的应用专用（App-only）身份验证

**发布时间：** 2026-07-07，在 [n8n 2.30](release-notes.md#n8n230) 中

你现在可以用 [Microsoft Entra Service Principal](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/credentials/microsoftentraserviceprincipal)（服务主体）对 Microsoft 节点进行身份验证，让工作流以"应用程序"的身份而不是"登录用户"的身份运行。OneDrive 和 Outlook 在 2.29 中获得了此选项；Excel 365、Microsoft Teams 和 Microsoft To Do 在 2.30 中跟进，它们共享一个应用专用凭证。

在此之前，Microsoft 自动化都绑定在某个人的 OAuth 会话上：当这个人离职或令牌过期，工作流就坏了。有了应用专用身份验证，工作流就可以用租户级权限进行非交互式身份验证，并精准指向你指定的用户、邮箱、驱动器或站点：读取共享邮箱、处理任何用户驱动器中的文件、或在没有任何人登录的情况下向 Teams 频道发帖。OAuth2 在所有地方仍然是默认方式，因此现有工作流不受影响；只对登录用户有意义的操作会在各节点中禁用，并给出清晰的错误提示。

_OneDrive 和 Outlook 的支持在 2.29（2026-06-30）中发布。_

### Kafka 的 mTLS 身份验证

[Kafka 凭证](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/credentials/kafka)现在支持双向 TLS（mutual TLS）：提供 CA 证书、客户端证书和私钥（PEM），即可连接到要求客户端证书身份验证的 broker。mTLS 适用于 Kafka 节点、Kafka 触发器（Trigger）和凭证测试，n8n 会在你保存前验证证书和密钥是否匹配。

***

## AI 助手：描述一个目标，得到可运行的自动化

**发布时间：** 2026-07-09，在 [n8n 2.29.9](release-notes.md#n8n229) 中

你现在可以用自然语言描述一个自动化需求，让 AI 助手去规划、构建、测试并迭代，直到它真正跑起来。从实例的任何地方打开聊天窗口，或把它展开成与工作流画布并排的视图，然后告诉它你想自动化什么。它会提出一个结构化的计划、提出澄清问题、在你选择的项目中构建工作流、边构建边执行，并修复它发现的错误。

<figure><img src=".gitbook/assets/ai-assistant-entry-point.png" alt="The AI Assistant entry point: a chat box asking what to automate, with suggestions like Score my leads."><figcaption><p>Describe what you want to automate, or start from a suggestion.</p></figcaption></figure>

AI 助手取代了 AI 工作流构建器（AI Workflow Builder），区别在于自主性。AI 工作流构建器生成工作流后就交给你，让你自己运行和调试失败。AI 助手则朝着你的目标推进：它运行自己构建的东西、检测失败、重试，直到自动化真正可用。它的范围也比构建更广。它可以管理执行、凭证、节点和数据表（Data Tables），运行一次性任务，并在启用网络访问时研究网页。凭证设置会在构建过程中渐进完成：手动填写值、让它抓取能抓到的内容，或在需要的地方模拟并跳过，密钥永远不会暴露在聊天中。

它构建的每个工作流都是普通的 n8n 工作流：一个可见的画布，你可以打开、检查、编辑和发布，带有一步步的执行日志可供审计，基于 n8n 已内置的 400+ 集成构建，而不是重建 API 连接。你全程保持控制：诸如发布之类的高影响操作会等待你的批准。这是早期第一步，我们期待你反馈接下来该往哪里发展。

{% hint style="warning" %}
此功能处于**预览（preview）**阶段。它可能会出错，开发期间行为也可能变化。在生产中使用生成的任何工作流之前，请务必审查。
{% endhint %}

更多信息请参阅 [AI Assistant 文档](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/ways-of-building-workflows/ai-assistant)。

{% hint style="info" %}
**可用性：** 仅限 n8n Cloud。自托管支持即将推出。
{% endhint %}

***

## MCP 服务器更新

**发布时间：** 2026-06-30，在 [n8n 2.29](release-notes.md#n8n229) 中

过去几周我们发布了大量 n8n MCP 服务器的更新。以下是汇总，并注明每项变更落在哪个版本。

* **用自定义和社区节点构建。** 你现在可以在构建的工作流中使用已安装的自定义节点和社区节点，而不仅仅是内置节点（v2.29）。
* **读取和修改工作流设置。** 现在可以通过 MCP 服务器编辑工作流设置，因此你可以连接错误工作流、设置时区或调整执行选项（v2.29）。
* **查看和恢复工作流历史。** 你现在可以浏览工作流的版本历史并恢复更早的版本（v2.29）。
* **更可靠的凭证分配。** 修复了一个 bug：服务器可能分配对节点无效的凭证（v2.28）。
* **查询真实的字段值。** Slack 频道或 Google Sheets 标签页等动态字段现在会解析为真实值，因此节点会配置有效的选项，而不是占位符 ID（v2.27）。
* **使用标签。** 现在支持标签，你可以按标签过滤工作流搜索，并在创建或更新工作流时应用标签（v2.27）。
* **更快、更有针对性的编辑。** 工作流更新现在只修改需要修改的节点，而不是重写整个工作流（v2.22）。
* **列出并选择凭证。** 你现在可以列出实例上的凭证，并在多个凭证都适用时选择合适的那个，例如在五个 Gmail 凭证中做选择（v2.21）。

更多信息请参阅 [n8n MCP 服务器文档](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/connect-to-n8n-mcp-server)。

### GitHub App 身份验证

[GitHub 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.github)现在可以以 GitHub App 的身份进行身份验证，而不是使用个人访问令牌。身份验证基于 JWT，并采用标准化的私钥处理方式，因此你的 GitHub 自动化属于组织，而不是属于创建令牌的人，拥有细粒度的权限，而且人离开时无需轮换 PAT。

### Insights 会在日期范围超出可用数据时提醒你

在 Insights 仪表板中选择日期范围时，你现在可以一眼看出你的数据保留策略是否覆盖该时段。不必再盯着空图表猜是不是哪里坏了——一个提醒横幅会准确告诉你数据覆盖发生了什么。

使用自定义日期范围时，有三种状态引导你：

* **范围内无数据（No data in range）：** 整个所选时段都在你的保留窗口之外，因此没有可显示的执行记录。
* **部分数据（Partial data）：** 范围内存在部分执行记录。提醒会指明最早可用日期，让你知道数据从何时开始。
* **完整数据（Complete data）：** 所选范围内所有执行记录都存在。不显示提醒。

使用方法：打开 Insights 仪表板，用日期范围选择器选择一个日期范围，然后查看仪表板顶部的提醒横幅。如果看到部分或无数据提醒，请调整你的范围，使其与保留策略覆盖的日期对齐。请注意，这些提醒反映的是你当前的保留配置，并不会延长执行数据的存储时间。

更多信息请参阅[文档](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/track-usage-with-insights#disable-or-configure-insights-metrics-collection)。

{% hint style="info" %}
**可用性：** Pro、Business 和 Enterprise 套餐。
{% endhint %}

***

## 用画布分组（Canvas Groups）组织大型工作流

**发布时间：** 2026-06-29，在 [n8n 2.28](release-notes.md#n8n228) 中

你现在可以把相关的节点组织到一个命名的画布分组中，并折叠起来获得更干净的视图。把处理工作流某一部分的节点分组，给分组起个名字，然后折叠起来隐藏细节，直到你需要时再展开。一个过去摊满整个画布的大型工作流，会缩成几个一眼就能读完的带标签的块，让你能更快地在同事构建的、或你几个月没打开过的工作流中找到方向。

<figure><img src=".gitbook/assets/canvas-groups.jpg" alt="Three connected nodes selected on the canvas, with the Group nodes action and its Ctrl/Cmd + G shortcut shown above the selection."><figcaption><p>Select a connected run of nodes, then group them with the Group nodes button or Ctrl/Cmd + G.</p></figcaption></figure>

要创建分组，请通过拖出一个框框选、或按住 `Ctrl/Cmd` 逐个点击，选中一段相连的节点，然后按 `Ctrl/Cmd` + `G`，或在工具栏中选择 **Group nodes（节点分组）** 图标。n8n 会创建分组并高亮名称字段，方便你立刻命名。用分组上的切换图标折叠或展开分组，随时可以用 `Ctrl/Cmd` + `Shift` + `G` 取消分组，节点会留在画布上。

画布分组会随工作流一起保存，所以任何人打开它都会看到相同的结构。分组是折叠还是展开属于个人偏好，存储在浏览器中，因此你的视图在你回来时保持不变，同时不会改变同事看到的视图。有几条规则决定哪些节点可以组合成一个分组：触发器保持在分组之外、节点必须构成一条相连的链、AI 节点的子节点（聊天模型、记忆和工具）必须保持在同一个分组内。

更多信息请参阅 [Canvas Groups 文档](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/workflow-components/canvas-groups)。

### GitHub 节点：管理完整的 Pull Request 生命周期

[GitHub 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.github#operations)现在有一个专用的 Pull Request 资源。创建 Pull Request（包括草稿和跨 fork 的 PR）、更新、关闭和重新打开它们、读取和添加评论、获取 diff 和 patch，并用 merge、squash 或 rebase 方式合并。这些原生操作取代了此类任务过去需要的自定义 HTTP Request 配置。错误完全按照 GitHub 返回的方式呈现，因此失败很容易诊断。

### Webhook 节点：Only Run If（仅当…才运行）

[Webhook 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.webhook)新增一个基于表达式的 **Only run if（仅当…才运行）** 选项，会在执行开始前拒绝不满足条件的请求。把健康检查、重试或不相关的事件挡在门口，而不是启动一个立即退出的执行：更少的空执行、执行列表里更少的噪音、节省执行配额。

***

## 把工作流打包成包在实例间移动

**发布时间：** 2026-06-16，在 [n8n 2.27](release-notes.md#n8n227) 中

你现在可以把工作流打包成可移植的 `.n8np` 包，通过 Public API（公共 API）或一组包装了相同端点的匹配 CLI 命令，在 n8n 实例之间移动它们。手动复制工作流 JSON 对一次性移动总是有效的。包让这个过程可重复、可自动化：一个文件里携带一组工作流、它们的凭证占位（credential stubs）以及描述其依赖关系的 `manifest.json`。

导入会在开始时进行检查。如果冲突或无法解析的凭证会阻止导入，n8n 会停下来列出问题，而不是让你处于半迁移状态。每次导入你都可以选择：把工作流作为新版本引入、在第一个冲突时失败、或跳过已存在的那些。凭证按 ID 匹配，其密钥永远不会随包传输；n8n 导出一个占位，你在目标实例上匹配它，或留空占位以后填写。

这使得以下操作变得容易：把工作流从开发环境提升到生产环境、备份和恢复实例、在不共享密钥的情况下把手工作流交给同事、或在实例之间迁移。

{% hint style="warning" %}
此功能处于**预览（preview）**阶段。包格式和 API 仍在开发中，可能会在未提升大版本号的情况下发生破坏性变更。
{% endhint %}

更多信息请参阅 [n8n Packages 文档](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/n8n-packages)。

### 从 UI 配置 OpenTelemetry 追踪

你现在可以从 **Settings > OpenTelemetry（设置 > OpenTelemetry）** 而不是环境变量来设置 OpenTelemetry 追踪，这使工作流执行追踪首次进入 n8n Cloud。输入你的 collector 端点、调整采样和 span 选项，然后选择 **Send test trace（发送测试追踪）** 确认 n8n 在依赖它之前能到达你的后端。更改无需重启即可生效；在队列模式下，n8n 会自动在 worker 和 webhook 处理器之间重新加载配置。在自托管实例上，环境变量仍然有效，并优先于 UI 设置。你需要是实例 owner 或 admin 才能在 UI 中配置追踪。

更多信息请参阅 [OpenTelemetry 追踪文档](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/keep-n8n-running/trace-executions-with-opentelemetry)。

***

## AI Agent 的网页搜索

**发布时间：** 2026-06-02，在 [n8n 2.25](release-notes.md#n8n2251) 中

你的 AI Agent 现在开箱即可搜索网页。在 agent 的 Advanced（高级）面板中启用网页搜索：如果模型提供商提供原生搜索工具，agent 会直接使用它；对于没有原生工具的提供商，n8n 会回退到 Brave Search 或自托管的 SearXNG 实例。在此之前，给 agent 实时网页访问意味着手动接一个社区节点或外部 API；现在它是内置的，agent 可以用价格、文档和新闻等最新信息来支撑它们的回答，无需额外设置。

### Form Trigger（表单触发器）：把表单限制给已登录用户

[Form Trigger](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.formtrigger)（v2.6）新增一个 **n8n User Auth（n8n 用户认证）** 选项，把表单限定给你的实例的已认证用户。未登录的访客会被重定向到 n8n 登录页，触发器会在提交数据旁边输出已认证用户的 ID、邮箱和姓名（可退出）。它适用于所有 n8n 认证模式和跨多页表单，非常适合那些你需要可靠知道是谁提交的内部请求表单。

### Microsoft 凭证的自定义 OAuth 作用域

OneDrive、Outlook 和 SharePoint 的 OAuth2 凭证现在包含一个 **Custom Scopes（自定义作用域）** 开关。默认值保持不变，但你可以授予额外的 Microsoft Graph 权限，或把作用域裁剪到你的租户允许的范围，而不必受限于 n8n 的默认同意集。

***

## 重建的 Odoo 节点与 Oracle 向量搜索

**发布时间：** 2026-05-27，在 [n8n 2.23](release-notes.md#n8n223) 中

[Odoo 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.odoo)已重建为 v2，现有 v1 工作流保持不变继续工作。新版本支持 Odoo 19+ 的 API-key 身份验证、可搜索的资源定位器（你可以从列表中选择记录而不是粘贴 ID），以及在创建和更新时的动态字段映射——显示你的 Odoo 实例的实际字段，只读和计算字段被隐藏，这样你就无法写入不可写的内容。Contact（联系人）、Opportunity（商机）、Activity（活动）和 Custom（自定义）资源补全了覆盖面，节点会自动为你的 Odoo 版本选择正确的 API 传输方式。

### Oracle Database 作为向量存储

新的 [Oracle DB Vector Store](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreoracledb)（Oracle 数据库向量存储）和 [Oracle ONNX Embedding](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsoracledb)（Oracle ONNX 嵌入）节点，为存储在 Oracle 中的数据带来检索增强生成（RAG）。插入、加载和检索文档（包括为 AI Agent 提供的"作为工具检索"），支持可配置的距离策略和元数据过滤（支持嵌套的 AND/OR 条件）。嵌入由数据库内加载的 ONNX 模型生成，因此向量和源数据留在同一个地方。需要在数据库中有 ONNX 模型。

### 多运行子工作流的完整结果

当子工作流的最后一个节点运行多次时，[Execute Workflow Trigger](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger)（v1.2）现在会返回每一次运行的条目，按输出分支拼接。以前你只能得到最后一次运行的结果。更旧的触发器版本保持现有行为，并新增一个 **Items to return（要返回的条目）** 选项供选择启用。

***

## 用更少的设置连接 MCP 服务器

**发布时间：** 2026-05-19，在 [n8n 2.22](release-notes.md#n8n222) 中

无需手动搭建 [MCP Client 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-langchain.mcpClient)和凭证，即可把 agent 连接到选定的 MCP 服务器。从节点面板中选择一个服务器、登录，它就可以供你的 agent 使用了。

初始覆盖包括官方 MCP 注册表中一些最常用的服务——Apify、Linear、monday.com、Notion 和 PostHog——我们将很快扩展列表以覆盖更多服务。

如果你需要连接列表中没有的 MCP 服务器，你仍然可以使用带手动配置的 [MCP Client 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-langchain.mcpClient)。

{% embed url="https://youtu.be/RGhHFbLMXhQ" %}
Connect to MCP servers with less setup
{% endembed %}

### OpenTelemetry 自定义遥测标签

你现在可以在节点、工作流和项目级别为 OpenTelemetry 追踪附加自定义 span 属性，从而可以按租户、环境、客户 ID 或任何其他维度过滤和分组执行 span。属性值支持表达式，因此它们可以在运行时从 webhook 负载或 API 响应中拉取实时数据，而不是依赖硬编码的值。在启用追踪时（`N8N_OTEL_ENABLED=true`），可在节点或工作流设置中配置标签。

更多信息请参阅[文档](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/keep-n8n-running/trace-executions-with-opentelemetry#custom-span-attributes)。

{% hint style="info" %}
**可用性：** Enterprise 套餐。
{% endhint %}

***

## 十四个触发器节点的已验证 Webhook

**发布时间：** 2026-05-12，在 [n8n 2.21](release-notes.md#n8n221) 中

十四个触发器节点现在会验证传入 webhook 的签名，伪造或篡改的请求在开始执行之前就会收到 401 被拒绝：Acuity Scheduling、Asana、Cal.com、Calendly、Customer.io、Figma、Formstack、GitLab、MailerLite、Mautic、Onfleet、Taiga、Trello 和 Twilio。

验证使用每个服务自己的签名机制，通常是 HMAC 签名头，采用恒定时间比较，并在服务支持的情况下提供重放保护。n8n 创建 webhook 时会自动生成并注册签名密钥，并与工作流一起存储。没有存储密钥的现有 webhook 继续工作，因此升级不会破坏任何东西；新的 webhook 只是默认更安全了。

这是跨版本更广泛加固工作的一部分：Netlify 验证在 2.20 发布，AWS SNS、Box 和 Microsoft Teams 在 2.22 跟进。

### Jira：OAuth2 身份验证

[Jira 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.jira)和 [Jira 触发器](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/trigger-nodes/n8n-nodes-base.jiratrigger)新增 **Cloud (OAuth2)** 身份验证选项，使用 Atlassian 的 OAuth 2.0 授权码流程（3LO）。通过 auth.atlassian.com 连接，你的 Atlassian cloud ID 会自动解析并缓存。无需再为 Jira Cloud 手动创建和轮换 API 令牌。

***

## Microsoft Agent 365 触发器节点

**发布时间：** 2026-05-05，在 [n8n 2.20](release-notes.md#n8n220) 中

### Microsoft Agent 365 触发器节点

[Microsoft Agent 365 触发器节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.microsoftagent365trigger)让你构建的 n8n agent 以 Microsoft 365 应用内团队成员的身份出现。部署后，你的 agent 会在你的 Microsoft 租户中获得自己的身份，拥有一个邮箱地址——你可以像对待同事一样在 Teams 中 @提及它、给它发邮件、或授予 SharePoint 权限。

<figure><img src=".gitbook/assets/microsoft_agent_365.png" alt="A Microsoft Agent 365 Trigger node with a chat model, memory, and tools across Zendesk, Salesforce, PagerDuty, Datadog, and a sub-workflow."><figcaption><p>A Microsoft Agent 365 Trigger node with a chat model, memory, and tools across<br>Zendesk, Salesforce, PagerDuty, Datadog, and a sub-workflow.</p></figcaption></figure>

你在 n8n 中使用触发器节点构建 agent：添加系统提示词，并利用[子工作流作为工具](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/flow-logic/break-workflows-into-smaller-parts)让它访问工具、MCP 服务器和你现有的工作流。然后你在 Microsoft 一侧设置 agent，它会获得一个带邮箱地址的 Entra ID 身份。Microsoft 处理身份、生命周期、安全和合规（通过 Entra ID、Purview 和 Defender）；n8n 处理工作流级治理，如 RBAC、凭证管理和执行日志。

如果你已经通过单个节点（Outlook、Teams、SharePoint 等）把 n8n 与 Microsoft 服务结合使用，这些工作流会照常工作。Agent 365 是为那些希望 agent 出现在 Microsoft 应用**内部**并像团队成员一样互动的团队提供的全新路径。该节点需要一个 Microsoft 365 租户。

完整的发布故事请参见 [n8n 博客文章](https://blog.n8n.io/deploy-n8n-agents-that-show-up-as-members-of-the-team-inside-microsoft-apps/)。

### Insights 数据保留时长

自托管实例现在默认可以保留 Insights 数据最多 365 天，可配置的最大值为 730 天。保留由新的 `N8N_INSIGHTS_MAX_AGE_DAYS` 环境变量控制，不再与许可逻辑绑定。参见 [insights 文档](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/track-usage-with-insights)。

***

## IdP 角色映射与实例引导配置

**发布时间：** 2026-04-28，在 [n8n 2.19](release-notes.md#n8n219) 中

### 在 n8n 内部进行 IdP 角色映射

实例管理员现在可以在 n8n 内部定义"组到角色"的映射，而不是在 IdP 中对 n8n 特定的角色逻辑进行编码。启用 JIT 配置（JIT provisioning）后，管理员针对 SAML 属性或 OIDC 声明编写表达式，在登录时自动分配实例角色和项目角色。IdP 只需要发送标准的组成员数据：n8n 负责映射，并且每次登录都会重新评估角色分配，因此无需更改 IdP，访问权限就能保持同步。

打开 **Settings → SSO（设置 → 单点登录）**，在 User role provisioning（用户角色配置）下选择 **Instance roles via SSO** 或 **Instance and project roles via SSO**，把映射卡片从 "Map rules on your IdP"（在 IdP 上映射规则）切换到 "Map rules inside n8n"（在 n8n 内部映射规则），然后使用 `$claims` 对象添加表达式来为每个角色匹配用户。基于表达式的匹配可以处理纯字符串匹配无法覆盖的非标准组结构。

{% hint style="info" %}
**可用性：** Business 和 Enterprise 套餐。
{% endhint %}

### 实例引导配置（Instance bootstrapping）

n8n 现在可以在启动时通过环境变量完全配置。owner 账号、SSO（OIDC 和 SAML）、安全策略和日志流目标都会在首次启动时应用，无需手动 UI 交互。以这种方式管理的字段在 UI 中被锁定，并在每次重启时重新应用。

这使得部署配置成为唯一的事实来源，你可以在任何用户登录之前，仅凭一个 Helm chart 或 Docker Compose 文件就搭建起一个完全配置的实例，包括 SSO 和安全策略。

{% hint style="info" %}
**可用性：** Enterprise 套餐。
{% endhint %}

***

## 收藏（Favorites）

**发布时间：** 2026-04-21，在 [n8n 2.18](release-notes.md#n8n218) 中

你现在可以收藏项目、文件夹、工作流和数据表，让你每天使用的资源一键可达，而不是每次搜索。

### Slack 触发器：App Home 作为专用事件打开

[Slack 触发器](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/trigger-nodes/n8n-nodes-base.slacktrigger)现在提供 **app\_home\_opened** 作为专用事件选项。以前，响应 App Home 打开意味着订阅 Any Event（任意事件）并在下游过滤，这会让每个无关的 Slack 事件都启动一次执行。

### Linear 触发器：webhook 签名验证

Linear 凭证新增一个可选的签名密钥。设置后，[Linear 触发器](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/trigger-nodes/n8n-nodes-base.lineartrigger)会验证每个传入 webhook 的 HMAC-SHA256 签名，并在 60 秒窗口内验证其时间戳，用 401 拒绝无效或重放的请求。

***

## 新模型提供商：Moonshot Kimi 与阿里云百炼（Alibaba Cloud Model Studio）

**发布时间：** 2026-04-13，在 [n8n 2.17](release-notes.md#n8n217) 中

两个模型提供商原生加入 n8n 的 AI 阵容。**Moonshot Kimi** 既作为 AI Agent 的[聊天模型子节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmoonshot)到来（带动态模型列表，默认为 kimi-k2.5），也作为[独立节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-langchain.moonshot)到来，支持多轮聊天、工具调用、内置网页搜索、思考模式、JSON 响应和图像分析。[**阿里云百炼**](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-langchain.alibabacloud)带来通义（Qwen）系列：支持网页搜索和 agent 工具的聊天、视觉语言图像分析、文生图，以及文本/图像转视频生成（结果自动下载）。

后续版本中加入了更多提供商：

### MiniMax

_发布于 2.18（2026-04-21）。_

一个 [MiniMax 聊天模型子节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatminimax)（兼容 OpenAI 的 API，默认为 MiniMax-M2.7，带 Hide Thinking 选项——剥离推理痕迹以获得干净响应），加上一个[独立的 MiniMax 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-langchain.minimax)，涵盖聊天、图像生成、异步视频生成，以及带语音、情感、速度和音调控制的文本转语音。

### NVIDIA Nemotron 嵌入

_发布于 2.26（2026-06-09）。_

NVIDIA Nemotron Embeddings 节点通过 build.nvidia.com 或自托管的 NIM 从 NeMo Retriever 模型生成嵌入，复用现有的 NVIDIA 凭证。节点会根据每次调用自动设置正确的输入类型（索引时用 "passage"，搜索时用 "query"），防止因输入类型不匹配而导致的检索质量无声下降。

***

## 嵌入访问与执行数据脱敏

**发布时间：** 2026-04-07，在 [n8n 2.16](release-notes.md#n8n216) 中

### 嵌入访问的令牌交换身份验证

n8n 现在支持 OAuth 2.0 令牌交换（Token Exchange，RFC 8693），作为与 API 密钥并列的第二种身份验证机制。涵盖两种场景：无缝 iframe 嵌入——用户无需单独的登录界面即可在另一个产品中看到 n8n；以及委托式 API 访问——系统代表用户执行操作，并保留完整的审计归属。

嵌入系统持有一把非对称私钥，并用包含用户身份声明的 JWT 签名（短期有效）。n8n 使用配置的公钥验证签名，在用户首次出现时即时配置（just-in-time provisioning）该用户，并根据流程签发会话 cookie 或受限的 API 令牌。审计轨迹中同时保留 subject 和 actor，因此每个操作都会显示是谁发起的、以及是谁执行的。

{% hint style="info" %}
**可用性：** Enterprise 套餐。需要通过 `N8N_TOKEN_EXCHANGE_TRUSTED_KEYS` 配置非对称密钥对。使用基于角色的作用域。
{% endhint %}

### 执行数据脱敏

实例和项目管理员现在可以对执行数据进行脱敏。启用后，生产运行中的敏感数据永远不会显示在 UI 中，并且除非拥有 reveal 权限的用户明确请求，否则不会从数据库获取。手动执行可以保持完全可见，让开发者可以不间断地继续构建和调试。每次 reveal 都会记录为审计事件。

脱敏在 **Workflow settings（工作流设置）** 下按工作流配置，reveal 权限通过项目或实例设置只授予特定用户。参见[执行数据脱敏文档](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/security/redact-execution-data)。

{% hint style="info" %}
**可用性：** Enterprise 套餐。
{% endhint %}

### Public API 改进

* **社区包。** 通过 `/api/v1/community-packages` 下的新端点，以编程方式安装、列出、更新和卸载社区包。每个操作都需要带匹配 `communityPackage:*` 作用域的 API 密钥。
* **Insights 作用域。** 新的 `insights:read` API 密钥作用域，为 v2.17 中发布的 insights 摘要端点做准备。

***

## 工作流的 OpenTelemetry 支持

**发布时间：** 2026-03-30，在 [n8n 2.15](release-notes.md#n8n215) 中

n8n 现在为工作流执行发出 OpenTelemetry 追踪。运行会变成你现有 OpenTelemetry 后端中的追踪，无需 sidecar、自定义导出器或计时技巧。已经在用 Jaeger、Datadog、Grafana Tempo、Honeycomb、New Relic 或 Splunk 的团队，会在他们监控的所有其他东西旁边看到 n8n。

每次执行都表现为一个根追踪 span，带有工作流 ID、名称、执行 ID、状态、时长、节点数和项目信息作为 span 属性。失败的运行会在 span 上呈现错误详情，因此你可以用监控堆栈其他部分的同一套工具搜索工作流失败并发出告警。

启用方式：把 n8n 指向任何兼容 OTLP 的 collector。最小配置是两个环境变量：

```
N8N_OTEL_ENABLED=true
N8N_OTEL_EXPORTER_OTLP_ENDPOINT=http://your-collector:4318
```

标准 OTel 变量（`OTEL_EXPORTER_OTLP_ENDPOINT`、`OTEL_SERVICE_NAME`）也同样被识别。

这是基础性的 T1 功能。它在后续版本中不断扩展：节点级 span（v2.16）、span 中的工作流版本 ID 和分布式追踪上下文传播（v2.18 到 v2.19）、以及 AI Agent 遥测（v2.20）。

{% hint style="info" %}
**可用性：** 仅限自托管。
{% endhint %}

***

## Databricks 节点

**发布时间：** 2026-03-24，在 [n8n 2.14](release-notes.md#n8n214) 中

n8n 现在原生连接 Databricks。新节点支持：用异步轮询和分块结果运行 SQL（每一行都作为自己的条目到达）、管理 Unity Catalog 对象（目录、模式、表、卷和函数）、调用 Model Serving 端点（带自动输入检测和验证）、与 Genie AI 交互、处理最大 5 GiB 的文件操作、以及管理 Vector Search 索引。Lakehouse 数据可以通过与你技术栈其他部分相同的工作流流动，无需自定义 HTTP 接线。更多信息请参阅 [Databricks 节点文档](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.databricks)。

### Perplexity 节点 v2

[Perplexity 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-langchain.perplexity)升级到 v2，提供完整的 API 覆盖，同时保持 v1 工作流兼容：带第三方模型、工具和 JSON-schema 结构化输出的 agent 响应；带高级过滤器的原始搜索；以及嵌入，包括上下文嵌入。

### 查看谁依赖谁

工作流、凭证和数据表卡片，以及数据表详情视图，现在都会显示依赖信息，让你在删除或更改某个资源之前，可以检查哪些东西依赖它。

***

## 版本历史中的可视化差异对比（Visual diff）

**发布时间：** 2026-03-16，在 [n8n 2.13](release-notes.md#n8n213) 中

### 可视化 diff 来到版本历史

打开版本历史，点击 **Compare changes（比较变更）**，选择任意两个版本，画布就会并排渲染两者，变更过的节点会被高亮。每个版本上的变更数量徽章帮助你一眼发现重要编辑。

{% hint style="info" %}
**可用性：** Pro、Business 和 Enterprise 套餐。
{% endhint %}

### 项目级外部密钥：完整团队访问

新增内容：

* 项目管理员在项目设置中管理自己的 vault 连接。
* 一旦实例管理员启用访问，项目编辑者就可以在凭证中使用项目级密钥。
* [自定义角色](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles)现在包含五个密钥作用域：list（列出）、read（读取）、create（创建）、update（更新）和 delete（删除）。
* 实例管理员/owner 不再需要是项目成员，密钥也能被解析。

**对于实例管理员：** 前往 **Settings > External Secrets（设置 > 外部密钥）** 并启用 **System Roles（系统角色）** 开关，或使用自定义角色进行更细粒度的控制。

**对于项目管理员：** 前往 **Project Settings > External Secrets（项目设置 > 外部密钥）** 创建和管理项目级连接。与你共享的实例级连接会显示为只读。

更多信息请参阅[外部密钥](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/use-external-secret-stores)。

{% hint style="info" %}
**可用性：** Enterprise 套餐。
{% endhint %}

### 推送和拉取对话框中的文件夹过滤

推送（push）和拉取（pull）对话框现在除了 Status（状态）和 Owner（所有者）之外，还包含一个 **Folder（文件夹）** 过滤器。选择文件夹会把列表限定到该文件夹及其子文件夹中的工作流，显示为带文件夹级复选框的层级树。文本搜索也匹配文件夹名称。

{% hint style="info" %}
**可用性：** Enterprise 套餐。需要配置[环境（Environments）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/use-source-control-and-environments/set-up-source-control)。
{% endhint %}

***

## 1Password 作为外部密钥提供方

**发布时间：** 2026-03-09，在 [n8n 2.12](release-notes.md#n8n212) 中

n8n 现在支持 1Password Connect Server 作为[外部密钥](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/use-external-secret-stores)提供方，与 HashiCorp Vault、AWS Secrets Manager、Azure Key Vault 和 GCP Secret Manager 并列。

密钥在运行时获取，永远不会存储在 n8n 中：1Password 保持唯一的事实来源。多字段条目可以作为结构化子路径使用：`$secrets.<vault>.<item>.<field>`。

**如何连接：**

1. 部署一个 1Password Connect Server，并创建一个限定到 n8n 应读取的 vault 的访问令牌。
2. 在 n8n 中，前往 **Settings > External Secrets（设置 > 外部密钥）**，选择 **1Password**，输入你的 Connect Server URL 和令牌。

需要一个只读访问的自托管 1Password Connect Server。

{% hint style="info" %}
**可用性：** Enterprise 套餐。
{% endhint %}

***

## Cloud 上更简单的凭证设置

**发布时间：** 2026-03-02，在 [n8n 2.11](release-notes.md#n8n211) 中

### Cloud 上更简单的凭证设置

在 n8n Cloud 上设置凭证现在简单多了。对于受支持的服务，只需点击 **Connect（连接）** 按钮，用服务完成身份验证，就可以开始使用了。跳过 Slack、Firecrawl、HubSpot、GitHub、Google Calendar、PagerDuty、Apify 等的手动设置。

<figure><img src=".gitbook/assets/quick_connect_slack.png" alt="Setting up Slack credentials with managed OAuth"><figcaption><p>Setting up Slack credentials with managed OAuth</p></figcaption></figure>

需要记住的事情：

* 如果你更愿意使用自己的 OAuth 配置，你可以随时从认证模式下拉菜单切换到手动设置。
* n8n 代表你管理 OAuth 应用。

{% hint style="info" %}
**可用性：** 仅限 Cloud。
{% endhint %}

### 自定义角色：Assignments（分配）选项卡

实例管理员现在在每个[自定义角色](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles)上都有一个专用的 **Assignments** 选项卡，显示分配了该角色的每个用户、他们所在的项目，以及一个直接管理他们的链接——不再需要逐个项目导航。

### 项目级外部密钥：实例管理员设置

实例管理员现在可以创建限定到特定项目范围的 vault 连接。来自该连接的密钥只会出现在该项目的凭证中，而不会出现在整个实例中。实例级连接不受影响。更多信息请参阅[外部密钥](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/use-external-secret-stores)。

### 工作流执行作为独立的权限范围

`workflow:execute` 现在是[自定义项目角色](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles)中一个独立的范围，与编辑和发布分开。可以授予用户运行权限，而不允许他们修改工作流，这是敏感工作流的常见合规要求。

{% hint style="info" %}
**可用性：** 自定义角色和项目级外部密钥在 Enterprise 套餐上可用。
{% endhint %}

***

## 个人空间策略与更细粒度的治理

**发布时间：** 2026-02-09 – 2026-02-13，在 [n8n 2.8.0–2.8.3](release-notes.md#n8n28) 中

### 个人空间策略

_发布于 2.8.3（2026-02-13）。_

新的 **Security & policies（安全与策略）** 设置区为在你的实例上执行安全要求提供了一个集中位置。除了现有的双因素身份验证强制要求外，管理员现在还可以控制用户在其个人空间中能做什么。

可用的策略包括：

* **Sharing（共享）**：控制用户是否可以从个人空间共享工作流和凭证。
* **Workflow publishing（工作流发布）**：控制用户是否可以从个人空间发布工作流。

此版本建立在权限模型近期更新的基础上，包括[自定义项目角色](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles)，以更好地支持策略驱动的治理。

<figure><img src=".gitbook/assets/personal_space_policies.png" alt="The new Security &#x26; policies settings section"><figcaption><p>The new Security &#x26; policies settings section</p></figcaption></figure>

### 自定义角色：更好的可发现性和权限可见性

_发布于 2.8.3（2026-02-13）。_

项目角色选择器现在把内置系统角色和自定义角色分成不同的部分，更容易找到并选择合适的角色。悬停在角色上会显示其配置权限的摘要，并提供查看完整权限详情的选项。

<figure><img src=".gitbook/assets/custom_roles_selector.png" alt="System roles and custom roles are now displayed in separate sections"><figcaption><p>System roles and custom roles are now displayed in separate sections</p></figcaption></figure>

### 更强的外部密钥验证

_发布于 2.8.0（2026-02-09）。_

n8n 现在会在允许保存使用 `$secrets...` 表达式的凭证之前，验证当前用户是否有权访问所引用的 vault。如果缺少访问权限，保存操作会失败。这可以防止通过猜测密钥路径来暴露密钥值。

### 改进的 API 可审计性

_发布于 2.8.0（2026-02-09）。_

API 端点已扩展，以提供对项目成员资格和凭证的更清晰可见性：

* `GET /projects/{projectId}/users` 返回项目的所有成员，包括他们分配的角色。
* `GET /credentials` 返回实例中所有凭证的分页列表，包括它们所属的项目。

这使得审计谁可以访问哪些项目和凭证变得更加容易，而无需在 UI 中逐一手动检查。

### 更细粒度的工作流权限

_发布于 2.8.0（2026-02-09）。_

[自定义角色](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles)的工作流发布权限已拆分为两个独立范围：`workflow:publish` 和 `workflow:unpublish`。这可以在需要独立管理取消发布的治理场景中实现更精确的访问控制。

{% hint style="info" %}
**可用性：** 个人空间策略、自定义角色、更强的外部密钥验证和改进的 API 可审计性在 Enterprise 套餐上可用。
{% endhint %}

***

## AI 工具调用的人工介入（Human-in-the-loop）

**发布时间：** 2026-01-26，在 [n8n 2.6](release-notes.md#n8n26) 中

你现在可以要求 AI Agent 在执行特定工具之前获得明确的人工批准。

AI 工具调用的人工介入（HITL）直接在工具层面强制审查。一个被门控（gated）的工具除非有人明确批准该操作，否则无法执行，让你对删除记录、写入生产系统或发送高影响邮件等高影响操作拥有确定性控制。这消除了基于提示词的保护措施的不确定性，并让你免受概率性 agent 行为的影响。

由于审查步骤是使用标准 n8n 集成实现的，审批不限于单个用户或界面。决策可以在人和系统之间路由，使用他们已经在使用的渠道，强制要求正确的人批准。

**你可以做什么：**

* 要求对 agent 可以调用的任何工具进行明确的人工批准，包括 MCP Client 工具或作为工具暴露的子工作流。
* 有选择地应用审批，使某些工具自主执行，而其他工具需要审查。
* 跨用户和渠道路由审批（例如，通过邮件把 Slack 发起的操作发送给另一个用户审批）。
* 无需复杂的工作流模式或脆弱的提示词逻辑，为高影响或潜在破坏性操作添加安全检查。

**如何使用：** 在从 AI Agent 到你想要门控的工具的连接上，点击 **+** 图标并选择 **Add human review step（添加入工审查步骤）**。Tools 面板会打开，显示可用于处理审查的节点；选择一个并配置审批人、消息和可用操作。

精确控制哪些地方需要人工判断，而不限制你的 agent 能做什么。更多信息请参阅[工具人工介入文档](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/ai-examples/human-in-the-loop-for-tools)。

{% embed url="https://youtu.be/B-_nIFI27VY" %}
Human in the loop for AI tool calls
{% endembed %}

***

## Chat 节点：人工介入操作

**发布时间：** 2026-01-20，在 [n8n 2.5](release-notes.md#n8n25) 中

**Chat（聊天）** 节点现在包含两个用于 agent 工作流中人工介入交互的新操作：

* **Send a message（发送消息）**：向用户发送一条消息并继续工作流。
* **Send a message and wait for response（发送消息并等待响应）**：发送一条消息并暂停执行，直到用户回复。用户可以在聊天中回复自由文本，或按节点配置中的定义点击内联批准按钮。

这些操作可以用作确定性的工作流步骤，也可以用作 **AI Agent** 的工具，在使用 **Chat Trigger（聊天触发器）** 时，实现在单次执行中的多轮人工交互。

当用作 agent 工具时，agent 可以在继续之前要求澄清，帮助它更好地解读用户意图并遵循指令。Agent 还可以在长时间运行的工作流中使用这些操作发送更新。

**操作方法：**

1. 用 **Chat Trigger** 节点触发你的工作流。在节点参数中，添加 _Response Mode（响应模式）_ 选项并将其设置为 _Using Response Nodes（使用响应节点）_。
2. 在工作流的后续位置添加一个 **Chat** 节点，或把它作为 **AI Agent** 的工具添加。选择其中一个操作：_Send a message（发送消息）_ 或 _Send a message and wait for response（发送消息并等待响应）_。

请记住：如果你希望 AI Agent 在发送消息或等待输入之间做选择，请添加两个 **Chat** 工具节点，每个操作一个。对于由 **Chat Trigger** 节点触发的 AI Agent，建议添加 **Send a message and wait for response**，这样 agent 可以在需要时请求澄清。

更多信息请参阅 [Chat 节点文档](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-langchain.chat#operation)。

{% embed url="https://youtu.be/CpFqawY0RCc" %}
Human in the loop for the Chat node
{% endembed %}

***

## Syslog 日志流的 TLS 与通过 API 更新凭证

**发布时间：** 2026-01-12，在 [n8n 2.4](release-notes.md#n8n24) 中

### Syslog 日志流支持 TLS

Syslog 日志流目标现在支持基于 TCP 的 TLS，用于加密连接。这使加密传输的企业 SIEM 和可观测性平台能够安全地进行日志流传输。通过此版本，日志流现在兼容更广泛的企业 SIEM 平台。

### 通过 API 更新凭证

n8n 的公共 API 现在通过新的 `PATCH /credentials/:id` 端点支持按 ID 更新现有凭证。以前，凭证只能通过 API 创建，因此任何更改都需要删除并重新创建凭证。

更新时，你可以一次性替换所有凭证数据（适用于批量更新），也可以设置 `isPartialData: true` 把变更与现有数据合并。非常适合自动密钥轮换或修复单个值，而不会丢失你的配置。

***

## 更细粒度的工作流权限和更丰富的审计事件

**发布时间：** 2025-12-22，在 [n8n 2.2](release-notes.md#n8n22) 中

### 自定义项目角色中更细粒度的工作流权限

自定义项目角色允许你在项目级别定义细粒度的权限。通过此版本，通过把工作流编辑与工作流发布分开，工作流权限得到了进一步细化。

这一变更使访问控制更容易与内部流程对齐——在这些流程中，构建工作流和发布工作流由不同的用户或团队负责。

<figure><img src=".gitbook/assets/WorkflowEditor.png" alt="Custom Project Roles"><figcaption><p>Custom Project Roles</p></figcaption></figure>

{% hint style="info" %}
**可用性：** Enterprise 套餐。
{% endhint %}

### 日志流：更多审计事件以改进可观测性

日志流现在包含额外的审计事件，以提高对运营和安全相关变更的可见性。

此更新增加了以下事件：手动工作流取消、工作流激活/停用（发布/取消发布）、变量生命周期事件（创建/更新/删除），以及用户管理操作（包括启用/禁用 2FA）。

工作流设置更新也会记录具体更改的参数（例如，选择了一个新的错误工作流），而不是一个笼统的 "updated（已更新）" 事件。

***

## Time Saved（节省时间）节点

**发布时间：** 2025-12-16，在 [n8n 2.1](release-notes.md#n8n21) 中

以前，无论执行走哪条路径，团队只能为每个工作流跟踪一个固定的节省时间值。新的 Time Saved 节点支持更精确的节省时间计算——不同的执行路径节省不同的时间。

通过此版本，你现在可以：

* **选择固定值或动态时间跟踪**：简单工作流使用固定的节省时间值，或使用一个或多个 Time Saved 节点根据实际执行的路径动态计算节省的时间。
* **配置按条目计算**：使用 Time Saved 节点时，选择对所有条目计算一次节省时间，还是乘以处理的条目数。

<figure><img src=".gitbook/assets/time_saved_node_1.png" alt="Time saved node in a workflow"><figcaption><p>Time saved node in a workflow</p></figcaption></figure>

n8n 会自动汇总每次工作流运行中执行的所有 Time Saved 节点的时间，并在 insights 仪表板中报告。

<figure><img src=".gitbook/assets/time_saved_node_2.png" alt=""><figcaption><p>Total time saved calculation</p></figcaption></figure>
