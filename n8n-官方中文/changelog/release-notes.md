# 发布说明（Release notes）

{% hint style="info" %}
**大白话**：这一页是 n8n 每一次发布的功能级更新流水账：编辑器和集成节点里发了什么，一个功能一行，最新的在最上面。想看"讲故事"式的重要功能精选，去[更新日志](README.md)；想看每个版本的全部细节（包括 bug 修复），去 [GitHub releases](https://github.com/n8n-io/n8n/releases)。这一页还有 RSS 订阅，可以放进你的阅读器里追更。
{% endhint %}

本页面是 n8n 每次发布的功能级更新运行日志：编辑器和集成节点中发布了什么，每个功能一行，最新的在最前面。

同样的条目也作为 [RSS 订阅源](https://raw.githubusercontent.com/n8n-io/n8n-docs/main/feeds/release-notes.xml)发布，你可以订阅并在阅读器中直接获得新条目。

根据你的需要，把本页面与 n8n 的其他两个发布资源搭配使用：

* [更新日志（Changelog）](README.md)：按时间推出的最重要新功能的精选叙事摘要。
* **发布说明（Release notes）**（本页）：每个版本中所有功能级更新的列表。
* [GitHub releases](https://github.com/n8n-io/n8n/releases)：每个版本的完整变更详情，链接到提交记录，包括 bug 修复和小改动。

{% hint style="info" %}
条目由已合并的 Pull Request 生成，发布前经过审核。在这里发布并不保证该功能已经对你可用：有些功能在功能开关（feature flag）后面，你可能需要启用；另一些会先逐步推广到 Cloud 或自托管实例，然后才覆盖所有人。
{% endhint %}

## 如何更新 n8n

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/D8oFoz7X85mQuXGFYlv9/" %}

## n8n 中的语义化版本

n8n 使用[语义化版本](https://semver.org/)。所有版本号都采用 `MAJOR.MINOR.PATCH`（主版本.次版本.补丁版本）格式。版本号的递增规则如下：

* MAJOR（主版本）：进行不兼容的变更，可能需要用户采取行动。
* MINOR（次版本）：以向后兼容的方式添加功能。
* PATCH（补丁版本）：进行向后兼容的 bug 修复。

---

## `n8n 2.34` 新增 OIDC 登出支持并改为可选用，另加 18 项其他功能

**发布时间：** 2026-08-04

* [Make OIDC RP-initiated logout an opt-in setting](https://github.com/n8n-io/n8n/pull/35146)（让 OIDC RP-Initiated Logout 成为可选用设置）：OIDC RP-Initiated Logout 现在是可选的，默认关闭。SSO 设置中新增的 'Log out from identity provider（从身份提供商登出）' 开关（也可通过公共 API 使用）控制登出 n8n 是否也结束在身份提供商的会话。本地登出 n8n 始终会发生。这也修复了一个罕见情况：登录期间的令牌加密错误可能让用户停留在错误页面上。
* [Slack Node: Show user real names and handles in user pickers](https://github.com/n8n-io/n8n/pull/35279)（Slack 节点：在用户选择器中显示用户的真实姓名和用户名）：Slack 节点（V2）的用户选择器现在在用户名旁显示真实姓名，例如 "John Doe (@john.doe)"，更容易找到同事。由于 Slack 中真实姓名不唯一，用户名仍保留在标签中。没有真实姓名的用户（机器人、未配置的账号）仍然只显示用户名。搜索支持按真实姓名或用户名，下拉列表排序现在不区分大小写。存储的值不变，因此现有工作流继续指向相同的用户。Slack V1 不受影响。
* [Add ap-east-2 and ap-southeast-6 AWS regions](https://github.com/n8n-io/n8n/pull/35278)（新增 ap-east-2 和 ap-southeast-6 AWS 区域）：n8n 中的 AWS 凭证现在支持两个额外的区域：ap-east-2（台北）和 ap-southeast-6（新西兰）。用户配置 AWS 凭证时可以选中这些区域，而不会触发 'Unsupported AWS region（不支持的 AWS 区域）' 错误。
* [Auto-select credentials for pasted and imported nodes](https://github.com/n8n-io/n8n/pull/34687)（为粘贴和导入的节点自动选择凭证）：粘贴或导入到工作流中的节点现在会立即自动选择匹配的凭证，而不只是打开节点编辑器时才选择。这消除了过去在粘贴或导入的节点上闪现的凭证错误。凭证被自动选中时会有 toast 通知，单个节点会显示凭证名称，多个节点显示通用消息。HTTP Request 节点被排除，因为它们的凭证是通用的。
* [Close directly opened MCP settings after saving](https://github.com/n8n-io/n8n/pull/35018)（保存后关闭直接打开的 MCP 设置）：从 Connections 卡片直接打开 MCP 服务器的设置时，工具成功保存后设置弹窗现在会自动关闭。如果设置是从工具列表打开的，弹窗会保持打开，以便保留返回按钮；两种情况下失败的保存都会让弹窗保持打开，方便用户重试。
* [OpenAI Chat Model Node: Add optional extraBody option](https://github.com/n8n-io/n8n/pull/13992)（OpenAI 聊天模型节点：新增可选的 extraBody 选项）：OpenAI Chat Model 节点现在支持可选的 Extra Body（额外请求体）字段，让你可以向发送给兼容 OpenAI 的 API（如 Qwen-Max 或 vLLM）的请求体添加自定义 JSON 属性。这使你能够使用节点本身未暴露的提供商特定参数。无效或非对象的 JSON 输入会被拒绝并显示清晰的错误。
* [Brandfetch Node: Use explicit route types and simplify operations](https://github.com/n8n-io/n8n/pull/28846)（Brandfetch 节点：使用明确的路线类型并简化操作）：Brandfetch 节点现在有新的 v2 版本，使用 Brandfetch 明确的类型化路线（如 Domain、Stock or ETF Ticker、Crypto Symbol 和 ISIN）而不是单一的通用端点，避免标识符冲突。它新增了 Type（类型）选择器和 Identifier（标识符）字段，以及简化的操作：Return Logos or Symbols or Icon（返回标志或符号或图标）、Return Colors（返回颜色）、Return All Brand Data（返回所有品牌数据）和 Return Brand Context（返回品牌上下文）。之前的版本仍以 v1 形式可用。
* [Make the review inbox URL-addressable with deep-linkable reviews](https://github.com/n8n-io/n8n/pull/35201)（让审核收件箱可通过 URL 访问，审核可深链）：工作流审核收件箱现在可以通过 URL 访问：选择一条审核会更新 URL，Open/Closed（打开/关闭）选项卡状态存储在查询字符串中，因此刷新页面会保持相同的审核和选项卡被选中。审核现在可以深链，包括从提交审核和更新审核的确认对话框中——它们直接链接到相关审核。未知或无法访问的审核链接会显示内联的未找到消息，而不是重定向。
* [Cal.com Trigger Node: Fully migrate to API v2](https://github.com/n8n-io/n8n/pull/35055)（Cal.com 触发器节点：完全迁移到 API v2）：Cal.com Trigger 节点现在有一个新版本，完全使用 Cal.com 的 API v2，修复了自 API v1 被弃用以来一直导致错误的错误端点和响应处理。凭证认证和测试也已更新以配合 API v2。使用旧节点版本的现有工作流不受影响，因为之前的版本保持不变。
* [Embeddings AWS Bedrock Node: Add inference profile models and node options](https://github.com/n8n-io/n8n/pull/34991)（Embeddings AWS Bedrock 节点：新增推理配置文件模型和节点选项）：Embeddings AWS Bedrock 节点现在在其模型选择器中列出推理配置文件模型以及按需基础模型，并新增一个 Options（选项）集合，包含 Timeout（超时）、Max Retries（最大重试次数）和 Additional Model Request Fields（额外模型请求字段，JSON 透传，支持 Titan 和 Cohere 特定参数）。现在支持 Cohere 嵌入模型。现有工作流和已存储的向量不受影响。
* [Execute Workflow Node: Deprecate Local File and URL sources](https://github.com/n8n-io/n8n/pull/34959)（Execute Workflow 节点：弃用 Local File 和 URL 来源）：Execute Workflow 节点现在在其 Source（来源）设置为 'Local File' 或 'URL'（1.1 及更早版本）时显示弃用通知，建议用户改用 'Database'（数据库）来源，或把工作流 JSON 粘贴到 'Parameter'（参数）来源中。这些来源计划在未来的大版本中移除。此变更只添加警告和迁移报告规则；没有运行时行为变化，移除本身不在此版本范围内。
* [Show restricted API keys and instance roles sections with a reason instead of hiding them](https://github.com/n8n-io/n8n/pull/34644)（显示受限的 API 密钥和实例角色部分并说明原因，而不是隐藏它们）：权限不足的自定义实例角色用户不再看到整个部分被隐藏。Roles 页面现在显示两个选项卡，未经授权时 Instance roles 被禁用并带工具提示。API 密钥页面对所有用户可见，让用户无论角色如何都可以查看和撤销自己的密钥；创建、编辑或轮换密钥仍受角色作用域限制，按钮禁用并显示只读视图解释原因。
* [Add OIDC logout support](https://github.com/n8n-io/n8n/pull/32756)（新增 OIDC 登出支持）：n8n 现在支持 OIDC RP-Initiated Logout。当用户登出且其会话是通过 OIDC 提供商建立的，n8n 不仅会在本地结束会话，还会使身份提供商的会话失效。登录期间提供商的 ID 令牌会加密存储在 cookie 中，用于构建登出 URL；如果提供商不支持此功能或令牌不可用，登出仍会在本地完成。
* [Inconsistent spacing of buttons on canvas (in top-right vs bottom-left)](https://github.com/n8n-io/n8n/pull/35319)（画布上按钮间距不一致（右上与左下））：通过引入共享的 ButtonList 布局组件，对成组按钮应用统一的水平与垂直间距，修复了画布控件（右上角和左下角）上按钮组之间间距不一致的问题。
* [Migrate API keys settings page to new instance settings UI](https://github.com/n8n-io/n8n/pull/34925)（把 API 密钥设置页迁移到新的实例设置 UI）：API 密钥设置页面已用新的实例设置布局重新设计。密钥表现在有更清晰的 owner 过滤、Mine（我的）和 All（全部）选项卡、可用的作用域对话框，以及改进的创建和编辑流程，显示包括 Never（永不过期）在内的过期状态——这解释了密钥在手动撤销之前一直有效。生成的密钥使用带截断显示和复制反馈的复制字段，Revoke（撤销）现在使用更清晰的危险样式操作。
* [Add a guided setup view for Simplified Custom Auth credentials](https://github.com/n8n-io/n8n/pull/35324)（为 Simplified Custom Auth 凭证添加引导式设置视图）：Simplified Custom Auth 凭证现在在凭证弹窗中提供引导式设置体验。不再是原始 JSON，而是一个表单，每个模板占位符对应一个带标签的输入，值被掩码并按原生凭证字段的方式预填。就地 "Edit setup（编辑设置）" 视图会暴露认证模板、字段定义、测试 URL 和状态码。连接测试现在探测已保存的凭证并报告服务是否接受，而不是声称完全验证通过。
* [HTTP Request Node: Add Simplified Custom Auth generic credential](https://github.com/n8n-io/n8n/pull/35068)（HTTP Request 节点：新增 Simplified Custom Auth 通用凭证）：为 HTTP Request 节点新增了一个通用凭证类型 Simplified Custom Auth。它让用户定义带占位值的 JSON 认证模板（请求头、查询或请求体），用于对自定义 API 进行身份验证，预览时敏感值会被脱敏。新的后端探测端点让凭证可以针对自己保存的测试 URL 自测，报告服务是否接受。这是三个计划中 PR 的第一个；引导式设置 UI 和 AI 助手集成将随后推出。
* [Add Require Workflow Execute Permission toggle for n8n User Auth (Webhook trigger)](https://github.com/n8n-io/n8n/pull/35195)（为 n8n 用户认证添加 Require Workflow Execute Permission 开关（Webhook 触发器））：Webhook 节点在使用 n8n User Auth (OAuth2) 认证时，现在显示一个 "Require Workflow Execute Permission（要求工作流执行权限）" 开关。默认启用，它要求已认证的调用者还持有 workflow:execute 权限，webhook 才能运行；关闭它则允许任何已认证调用者通过。这与现有的 MCP Server Trigger 行为一致。该开关只在 N8N_ENV_FEAT_WEBHOOK_PRIVATE_CREDENTIALS 环境开关后面可见。
* [Show the latest workflow review state in the canvas header](https://github.com/n8n-io/n8n/pull/35233)（在画布头部显示最新的工作流审核状态）：画布头部现在显示一个紧凑的胶囊，指示最新的工作流审核状态：in progress（进行中）、needs action（需要操作）或 approved（已批准）。点击它会打开一个弹出框，解释状态并提供相关操作，例如为已批准但未发布的版本重试发布。已批准版本（或更新版本）发布后，横幅消失。需要启用工作流审核的企业许可证。

---

## `n8n 2.33` 为 AI 助手重新设计实例设置，另加 10 项其他功能

**发布时间：** 2026-07-28

* [Allow custom OAuth scopes for Microsoft Azure Monitor, Dynamics, Graph Security and Azure Storage](https://github.com/n8n-io/n8n/pull/34612)（允许 Microsoft Azure Monitor、Dynamics、Graph Security 和 Azure Storage 使用自定义 OAuth 作用域）：你现在可以为 Microsoft Azure Monitor、Microsoft Dynamics、Microsoft Graph Security 和 Azure Storage 凭证自定义 OAuth 作用域。新的 Custom Scopes（自定义作用域）开关会显示一个 Enabled Scopes（启用的作用域）字段，Graph Security 和 Azure Storage 会预填默认值，Dynamics 和 Azure Monitor 则显示占位符示例（其作用域取决于其他字段）。开关保持关闭时默认行为不变。
* [Gmail Node: Add warning notice when Simplify is disabled](https://github.com/n8n-io/n8n/pull/34611)（Gmail 节点：关闭 Simplify 时添加警告提示）：Gmail Trigger 和 Gmail 节点（Message Get/Get Many、Thread Get）在关闭 Simplify 时现在显示警告提示，说明获取完整原始邮件会使用更多内存并可能导致崩溃。提示直接出现在 Simplify 开关下方。AI Builder 指导也已更新，除非确实需要完整邮件内容，否则保持 Simplify 启用。
* [Adds modal to see all projects a user can access in a list](https://github.com/n8n-io/n8n/pull/34619)（新增弹窗以列表查看用户可访问的所有项目）：在管理员的 Users 列表中，具有特定项目访问权限的成员的 Projects 列现在可以点击，打开一个列出其所有项目及每个项目角色（如 admin、editor）和图标弹窗。弹窗包含一个按项目名称过滤的搜索字段。这不适用于 Owner/Admin（'All projects（所有项目）'）或只有个人项目的用户。
* [Allow custom OAuth scopes for the remaining Google credentials](https://github.com/n8n-io/n8n/pull/34631)（为剩余的 Google 凭证允许自定义 OAuth 作用域）：Gmail、Google Ads、Analytics、Books、Business Profile、Chat、Cloud Natural Language、Contacts、Docs、Drive、Firebase（Firestore 和 Realtime Database）、Perspective、Sheets Trigger、Slides、Tasks、Translate、YouTube 和 Workspace Admin 的 Google OAuth2 凭证现在支持自定义 OAuth 作用域。Custom Scopes 开关会显示一个警告和一个可编辑的 Enabled Scopes 字段（预填每个凭证的默认值），让用户在授权期间请求额外的 Google API 权限，开关关闭时默认行为保持不变。
* [AWS Bedrock Chat Model Node: Surface inference-profile models in the default model picker](https://github.com/n8n-io/n8n/pull/34983)（AWS Bedrock Chat Model 节点：在默认模型选择器中展示推理配置文件模型）：AWS Bedrock Chat Model 节点的 Model 下拉列表现在同时显示按需基础模型和跨区域推理配置文件，因此 Claude Sonnet 4.x 和 Nova 等较新模型无需切换单独的 Model Source 开关就能看到。这适用于 IAM 和 Assume Role 凭证，并尊重自定义 Bedrock Endpoint 覆盖。旧节点版本上的现有工作流保持其之前的 Model Source 开关和设置不变。
* [Microsoft Excel (SharePoint) Node: Add node for Excel workbooks in SharePoint document libraries](https://github.com/n8n-io/n8n/pull/34847)（Microsoft Excel (SharePoint) 节点：为 SharePoint 文档库中的 Excel 工作簿添加节点）：Microsoft Excel (SharePoint) 节点现在在节点面板中可见。它之前已注册但被隐藏，直到操作构建完成以匹配 OneDrive Excel 节点；现在已达到完全对等，并已针对真实的 Microsoft 365 租户（同时使用 OAuth2 和 Entra Service Principal 凭证）验证。使用它的现有工作流不受影响，因为该节点一直可用。
* [Show confirmation modal when updating a custom instance role with assigned users](https://github.com/n8n-io/n8n/pull/34544)（更新带有已分配用户的自定义实例角色时显示确认弹窗）：编辑分配给一个或多个用户的自定义实例角色（Settings → Roles → Instance）时，保存更改现在会显示一个确认弹窗，警告这些用户的权限将立即更新。取消则放弃更改；确认则应用。没有分配用户的角色照常保存，不显示弹窗。这与项目角色现有的确认行为一致。需要启用自定义角色的企业许可证。
* [Revamp MCP settings view with instance settings components](https://github.com/n8n-io/n8n/pull/34041)（用实例设置组件改造 MCP 设置视图）：实例级 MCP 设置页面已用 n8n 更新的设置组件重新设计。选项卡被一个单一页面取代，显示 MCP 状态、带针对流行 AI 助手、IDE 和 CLI 量身定制设置步骤的引导式 "Connect a client（连接客户端）" 对话框、工作流暴露摘要、允许回调 URL 对话框，以及带完整子视图链接的已连接客户端预览。底层功能和权限不变；这只是前端重新设计。
* [Configure the AI Assistant through a redesigned instance settings page](https://github.com/n8n-io/n8n/pull/34493)（通过重新设计的实例设置页面配置 AI 助手）：自托管实例的 owner 和 admin 现在可以从一个重新设计的设置页面内联配置 AI 助手的模型、沙箱和搜索提供商连接。连接存储为实例级凭证，与工作流凭证分开，并在保存时验证。环境变量配置仍作为后备方案，并清晰指示环境管理设置与手动配置设置，外加引导式的模型到沙箱设置流程。
* [Migrate OpenTelemetry settings page to new instance settings UI](https://github.com/n8n-io/n8n/pull/34965)（把 OpenTelemetry 设置页面迁移到新的实例设置 UI）：OpenTelemetry 设置页面已用 n8n 更新的实例设置 UI 重新设计。启用或禁用追踪现在通过单个控件即时生效，其他更改（如端点、采样率和请求头）使用浮动保存栏。采样率和超时字段现在的格式一致，配置错误和环境管理字段显示得更清晰。
* [Polish end-user credential setup modal and NDV states](https://github.com/n8n-io/n8n/pull/34766)（打磨终端用户凭证设置弹窗和 NDV 状态）：改进了 OAuth 凭证的终端用户凭证设置体验。凭证类型选择器现在是下拉列表，对无权更改的用户禁用并带工具提示。连接横幅更清晰：一个中性的未连接状态，以及一个显示仅对你私有的已连接状态（带 Switch account（切换账号）和 Disconnect（断开连接）选项）。NDV 凭证选择器也新增一个简化的连接占位符，带 Switch account/Disconnect 操作。

---

## `n8n 2.32` MCP OAuth 同意的作用域选择，另加 12 项其他功能

**发布时间：** 2026-07-21

* [Add scope selection to MCP OAuth consent screen](https://github.com/n8n-io/n8n/pull/33710)（在 MCP OAuth 同意屏幕添加作用域选择）：MCP OAuth 同意屏幕现在让用户准确选择 MCP 客户端（如 Claude Code）可以访问什么，使用与 API 密钥弹窗相同的范围选择器：跨工作流、执行、凭证、数据表和项目/文件夹的 All（全部）、Read only（只读）或 Custom（自定义）预设。授予的作用域端到端强制执行，因此超出范围的工具不会被列出或调用。更新后现有连接保持完全访问权限。
* [AWS Bedrock Chat Model Node: Add Timeout option](https://github.com/n8n-io/n8n/pull/34072)（AWS Bedrock Chat Model 节点：新增 Timeout 选项）：AWS Bedrock Chat Model 节点现在包含一个 Timeout（超时）选项（默认 60000ms，0 表示禁用），防止 AI Agent 执行在连接静默断开时无限挂起。此外，现有的 Max Retries（最大重试次数）选项现在真正生效了——之前由于 bug 它被忽略，重试总是由 AWS SDK 的默认值控制，而不是配置的值。
* [Grist Node: Use a single Grist URL field in the credential](https://github.com/n8n-io/n8n/pull/34190)（Grist 节点：在凭证中使用单一 Grist URL 字段）：Grist API 凭证现在使用单一的 Grist URL 字段，而不是单独的 Plan Type（套餐类型）、Custom Subdomain（自定义子域）和 Self-Hosted URL（自托管 URL）字段，默认指向托管的 Grist API。API Key 字段现在显示在哪里找到你的密钥。凭证测试更严格，验证账号确实能访问至少一个组织，而不仅仅是认证。现有凭证无需重新输入即可继续工作。
* [Add descriptions to canvas groups](https://github.com/n8n-io/n8n/pull/34219)（为画布分组添加描述）：画布分组现在可以有可选的纯文本描述（最多 155 个字符）来说明其用途。展开的分组在标题下方显示它；折叠的分组显示一个信息图标，悬停时显示描述，并可以选择固定打开。描述支持带撤销/重做的编辑，在复制、粘贴和导入中持久保留，并在编辑器、REST API 和公共 API 中验证，导入时超长值会被截断并给出警告。
* [Add Mine/All tabs, search and filters to MCP connected clients](https://github.com/n8n-io/n8n/pull/33857)（为 MCP 已连接客户端添加 Mine/All 选项卡、搜索和过滤器）：Settings → MCP → Clients 现在支持管理员监督：owner/admin 看到 Mine/All 选项卡（带未过滤的计数徽章）、搜索框，以及按客户端类型、连接用户和连接日期过滤的过滤器。All 选项卡显示每个用户的同意记录，带 Connected by（由谁连接）列。撤销客户端现在需要确认，admin 撤销其他用户的客户端会向 owner 触发通知邮件。
* [Improve sub workflow extraction](https://github.com/n8n-io/n8n/pull/34169)（改进子工作流提取）：把节点转换为子工作流现在会自动包含连接到所选节点的任何 AI 子节点（如 Chat Models 或 Memory）。如果某个子节点也被父级中剩余的其他节点使用，它会被复制到新的子工作流中，同时在父级中保持连接；没有其他使用者的子节点会被整体移动，防止提取后出现断开的连接。
* [Mailgun Node: Add reply-to, custom headers, and tags](https://github.com/n8n-io/n8n/pull/28558)（Mailgun 节点：新增回复地址、自定义请求头和标签）：Mailgun 节点现在支持设置 Reply-To（回复地址）、添加自定义邮件头（以 h: 前缀发送），以及通过逗号分隔的标签为消息打标签，用于细分和分析。这些新字段作为节点参数出现在编辑器中，让用户无需额外配置即可自定义外发邮件元数据。
* [Rename N8nActionBox to N8nEmptyState and add icon-cards variant](https://github.com/n8n-io/n8n/pull/34407)（把 N8nActionBox 重命名为 N8nEmptyState 并新增 icon-cards 变体）：设计系统的空状态组件（原名 ActionBox）已重命名为 N8nEmptyState 以更好地反映其用途，并更新了测试 id 和 CSS 类。它还新增一个 'icon-cards' 变体，显示一个扇形展开的三张图标卡片（可选动画），用于实例 MCP 设置等页面。组件内部间距也已细化，以获得更好的视觉节奏。仅供内部使用；除受影响页面上的视觉打磨外，没有直接面向终端用户的功能变化。
* [Save canvas group description pinned state in local storage](https://github.com/n8n-io/n8n/pull/34220)（在本地存储中保存画布分组描述的固定状态）：当你固定折叠画布分组的描述使其保持可见时，该固定状态现在按工作流持久保存在本地存储中，刷新页面后依然保留。取消固定也会持久保存。此外，新的上下文菜单项让你可以从画布或空画布菜单显示或隐藏单个分组的描述，或一次显示/隐藏所有分组描述。
* [Show access and client details in the connected MCP clients list](https://github.com/n8n-io/n8n/pull/33714)（在已连接的 MCP 客户端列表中显示访问和客户端详情）：MCP 设置中的 Connected clients 表格现在显示更多每次连接的信息：Claude、Cursor 和 VS Code 等已识别客户端的品牌图标和客户端类型（CLI、IDE、Editor、Assistant）、授予的访问作用域摘要，以及连接授予的相对时间。点击一行会打开详情弹窗，显示客户端、连接时间，以及分组为 Read-only 和 Write 的作用域，行和弹窗中都有 Revoke access（撤销访问）操作。
* [Show per-scope tool details on the MCP consent screen](https://github.com/n8n-io/n8n/pull/33783)（在 MCP 同意屏幕上显示每作用域工具详情）：MCP OAuth 同意屏幕现在为每个作用域组（Workflows、Executions、Credentials、Data tables、Projects and folders）显示一个胶囊，指示该组解锁的 MCP 工具数量。悬停或聚焦胶囊会打开一个弹出框，列出每个工具并带启用/禁用指示器，在 All、Read only 和 Custom 作用域模式之间切换时实时更新。
* [Add `showOnDeployment` option, show warning for read file node on cloud](https://github.com/n8n-io/n8n/pull/34417)（新增 `showOnDeployment` 选项，在 Cloud 上为读取文件节点显示警告）：Read/Write File 节点现在在 n8n Cloud 上显示一条提示，说明它只能访问 /home/node/ 下的路径，解释为什么 /tmp/ 或 /data/ 等其他路径会以访问错误失败。在内部，这引入了一个新的 showOnDeployment 选项，控制字段或提示是否根据 Cloud 与托管部署显示，取代了多个凭证和节点中较旧的 hideOnCloud 标志。
* [Add sticky support for canvas groups](https://github.com/n8n-io/n8n/pull/34317)（为画布分组添加便签支持）：便签（Sticky notes）现在可以成为画布分组的正式成员，与常规节点一起移动、保存和显示，而不是被排除在外或破坏分组有效性。创建分组现在必须包含至少两个可连接（非便签）节点，防止无意义单节点分组，但现有分组仍可以退化为更少的成员而不会被删除。

---

## `n8n 2.31` Notion 节点用新 API 全面改造，另加 17 项其他功能

**发布时间：** 2026-07-14

* [Microsoft Excel Node: Rename node to Microsoft Excel (OneDrive)](https://github.com/n8n-io/n8n/pull/33963)（Microsoft Excel 节点：重命名为 Microsoft Excel (OneDrive)）：Microsoft Excel 节点已重命名为 "Microsoft Excel (OneDrive)"，以澄清它操作的是存储在 OneDrive 中的工作簿。节点描述和节点内提示已相应更新，并添加 "OneDrive" 作为搜索别名。这是纯显示变化；节点的底层类型标识符不变，因此现有工作流无需修改即可继续工作。
* [AWS Bedrock Chat Model Node: Expand inference parameters](https://github.com/n8n-io/n8n/pull/33668)（AWS Bedrock Chat Model 节点：扩展推理参数）：AWS Bedrock Chat Model 节点现在支持五个额外的可选推理参数：Top P、Max Retries（最大重试次数）、Additional Model Request Fields（额外模型请求字段，用于模型特定的 JSON 参数，如 Claude 的 top_k 或 Nova 的 inferenceConfig）、Latency Optimization（延迟优化）和 Guardrail（护栏）设置。这让用户可以更精细地控制 Bedrock 模型，而无需切换提供商。所有新字段都是可选的，未设置时默认保持之前的行为；Additional Model Request Fields 中的无效 JSON 会显示清晰错误。
* [AWS IAM Node: Add Assume Role authentication to Cognito and IAM nodes](https://github.com/n8n-io/n8n/pull/32016)（AWS IAM 节点：为 Cognito 和 IAM 节点添加 Assume Role 认证）：AWS IAM 和 AWS Cognito 节点现在支持 Authentication 选项，可以在 AWS (IAM) 和 AWS (Assume Role) 凭证之间选择，与其他 AWS 节点（如 S3、Lambda 和 SNS）一致。现有工作流和凭证不变继续工作，默认使用之前的 IAM 访问密钥认证。
* [Remove preview label from Instance-level MCP settings](https://github.com/n8n-io/n8n/pull/34084)（移除实例级 MCP 设置的预览标签）：实例级 MCP 设置现已全面可用。MCP 设置侧边栏项和 MCP 设置页面标题上的 "preview（预览）" 标签及其解释性工具提示已被移除，反映该功能不再处于预览状态。
* [Zendesk Node: Allow custom OAuth2 scopes](https://github.com/n8n-io/n8n/pull/33734)（Zendesk 节点：允许自定义 OAuth2 作用域）：Zendesk OAuth2 凭证现在支持自定义 OAuth 作用域。以前作用域被硬编码为 "read write" 且无法更改。新的 Custom Scopes 开关让用户启用可编辑的 Enabled Scopes 字段以请求额外的 Zendesk 权限，这些自定义作用域在重新连接凭证时会保留，而不会被重置为默认值。
* [Form Trigger Node: Add "Show Headers" option](https://github.com/n8n-io/n8n/pull/30205)（Form Trigger 节点：新增 "Show Headers" 选项）：Form Trigger 节点现在有一个新的 "Show Headers（显示请求头）" 选项，启用后会把表单提交的 HTTP 请求头包含在节点的输出数据中。authorization 和 cookie 值等敏感请求头会在执行日志中自动脱敏，与现有 Webhook 节点行为一致。
* [Google BigQuery Node: Allow custom OAuth2 scopes](https://github.com/n8n-io/n8n/pull/33822)（Google BigQuery 节点：允许自定义 OAuth2 作用域）：Google BigQuery OAuth2 凭证现在支持自定义 OAuth2 作用域。默认情况下它继续使用所需的 BigQuery 作用域，但用户可以打开 Custom Scopes 显示可编辑的 Enabled Scopes 字段（预填默认值），以请求额外或更窄的权限。自定义作用域现在在重新连接时保留，而不会重置为默认值，与其他 Google 和 Slack/Discord OAuth2 凭证已有的行为一致。
* [Form Node: Support multiple files when returning binary from form ending](https://github.com/n8n-io/n8n/pull/33780)（Form 节点：从表单结束返回二进制时支持多个文件）：Form 节点的 "Return Binary File（返回二进制文件）" 完成模式现在支持返回多个文件。在 Input Data Field Name(s)（输入数据字段名）设置中，你可以指定多个用逗号分隔的二进制字段名，表单完成页面加载时每个文件都会被下载，而不是以前只支持的单个文件。
* [Link to data tables referenced by ID in resource locator](https://github.com/n8n-io/n8n/pull/33654)（在资源定位器中链接按 ID 引用的数据表）：在 Data Table 节点的资源定位器中，按 ID 选择表现在显示一个可点击的外部链接图标，就像列表模式一样。n8n 会跨你可访问的所有项目查找该表，只有存在且对你可见时才显示链接。解析为具体表 ID 的表达式也受支持。
* [MCP Server Trigger Node: Present credential-connect link via elicitation](https://github.com/n8n-io/n8n/pull/33868)（MCP Server Trigger 节点：通过 elicitation 呈现凭证连接链接）：当 MCP Server Trigger 因必需的凭证未连接而阻止工具调用时，连接链接现在通过客户端的原生 URL elicitation UI 呈现（适用于支持的客户端，如宣传 elicitation.url 的客户端），而不是以某些客户端标记为可疑的纯文本形式出现。没有此能力的客户端，或 elicitation 失败时，仍会收到带连接 URL 的原始纯文本响应，因此它们的行为不受影响。
* [Merge Node: Add `NODES_MERGE_SQL_SANDBOX_MEMORY_LIMIT_MB` variable](https://github.com/n8n-io/n8n/pull/33652)（Merge 节点：新增 `NODES_MERGE_SQL_SANDBOX_MEMORY_LIMIT_MB` 变量）：新增环境变量 NODES_MERGE_SQL_SANDBOX_MEMORY_LIMIT_MB，让管理员配置 Merge 节点基于 SQL 的组合模式所用沙箱的内存限制（MB，默认 64）。这有助于避免在 SQL 沙箱中处理大型数据集时出现内存不足错误——可以根据需要提高限制。
* [Open logs panel on artifact execution and make execute button secondary](https://github.com/n8n-io/n8n/pull/34049)（在工件执行时打开日志面板，并把执行按钮设为次要操作）：当 AI 助手显示工作流工件时，一旦执行开始（无论由你还是 agent 触发），日志面板现在会自动打开，让你更容易观察数据流过节点。嵌入的 'Execute workflow（执行工作流）' 按钮现在样式为次要操作，因为对话是主要焦点。常规编辑器行为不变。
* [Merge Node: Add queryParameters option](https://github.com/n8n-io/n8n/pull/33385)（Merge 节点：新增 queryParameters 选项）：Merge 节点的 Combine by SQL 模式现在支持 Query Parameters（查询参数）选项，让你用 ? 占位符把值与 SQL 查询文本分开绑定，类似 Postgres 和 MySQL 节点。这有助于避免直接把表达式值注入查询字符串，提高安全性和可读性。新增了说明如何使用查询参数的提示，并附文档链接。
* [Notion Node: Migrate to new API and overhaul the node](https://github.com/n8n-io/n8n/pull/33749)（Notion 节点：迁移到新 API 并全面改造节点）：Notion 节点已用新的 v3 全面改造，迁移到 Notion API 2026-03-11，该版本用数据源（data sources）取代了数据库查询。它新增 Data Source 资源（Get、Search）、页面和块的 markdown 获取/更新操作、JSON 块支持、数据库页面的文件下载，以及可排序的块构建器。Notion Trigger 现在也支持数据源。数据库 ID 不再被接受用于数据库页面查询/创建；必须选择数据源。
* [Add Group/Ungroup context menu actions](https://github.com/n8n-io/n8n/pull/33839)（新增 Group/Ungroup 上下文菜单操作）：你现在可以直接从画布上下文菜单对节点分组和取消分组。右键单击有效的节点选区会显示新的 Group 选项（选区无法形成有效分组时禁用），右键单击分组会显示 Rename group（重命名分组）和 Ungroup nodes（取消节点分组）选项，无需键盘快捷键即可更轻松地组织工作流。
* [Rocketchat Node: Add Subscriptions & IM ops](https://github.com/n8n-io/n8n/pull/31432)（Rocketchat 节点：新增 Subscriptions 和 IM 操作）：Rocket.Chat 节点现在支持 Subscriptions 资源，让你检索所有订阅或将房间标记为已读，以及 Direct Message (IM) 资源，用于从私信房间获取消息，可通过 Return All/Limit 进行分页。这些新增扩展了节点在现有 Chat 操作之外的 API 覆盖范围。
* [Rename private credentials to end-user credentials](https://github.com/n8n-io/n8n/pull/33629)（把 "private credentials" 重命名为 "end-user credentials"）：为了一致性，整个应用中的 "private credentials（私有凭证）" 已重命名为 "end-user credentials（终端用户凭证）"。工具提示、对话框、凭证类型卡片、连接屏幕文本、节点/工作流问题消息和后端错误现在都使用新术语。"Private" 胶囊在凭证列表、节点选择器、凭证标题和画布徽章中被身份图标取代。删除已连接的终端用户凭证或把它切换为 Fixed 时，现在会显示一个带正确复数化受影响人数计数的输入确认对话框，不受支持的触发器警告现在会点名具体的触发器。
* [Improve node group selection UX](https://github.com/n8n-io/n8n/pull/33893)（改进节点分组选择体验）：画布上的节点分组在选中和上下文菜单方面现在表现得像节点。选择标题栏或所有成员会选中整个分组并显示单个选中环，选择在折叠/展开后仍保留。分组上下文菜单反映针对分组措辞的多选操作，新增 Expand/Collapse all groups（展开/折叠所有分组）和 Expand/Collapse selected（展开/折叠所选）选项，以及键盘快捷键。选择矩形现在完全包裹分组。

---

## `n8n 2.30` Microsoft 节点的 Service Principal 认证，另加 12 项其他功能

**发布时间：** 2026-07-07

* [Add certificate authentication to the Microsoft Entra Service Principal credential](https://github.com/n8n-io/n8n/pull/33420)（为 Microsoft Entra Service Principal 凭证添加证书认证）：Microsoft Entra Service Principal 凭证现在支持基于证书的认证，作为 Client Secret（客户端密钥）的替代方案。选择 Certificate（证书）会显示 Private Key（私钥）和 Certificate (PEM) 字段；n8n 为 OAuth 令牌交换签署客户端断言（带 SHA-1 指纹的 RS256 JWT）。Client Secret 仍是默认值，现有凭证不变继续工作。使用此凭证的所有节点自动获得证书支持，无需任何更改。
* [Include response timestamp in Send and Wait responses](https://github.com/n8n-io/n8n/pull/33283)（在 Send and Wait 响应中包含响应时间戳）：Send and Wait（人工介入）响应现在包含一个 respondedAt 字段，带 n8n 收到回复时的 ISO-8601 时间戳。它适用于批准、自由文本和自定义表单响应类型，并自动适用于所有使用 Send and Wait 的节点，包括 Slack、Telegram、Discord、WhatsApp、Google Chat、Gmail、Outlook、Email、Microsoft Teams 和 Chat Trigger 节点。这一新增是可选的，不改变现有输出字段。
* [Deprecate $getPairedItem in the expression editor](https://github.com/n8n-io/n8n/pull/33549)（在表达式编辑器中弃用 $getPairedItem）：未记录的 $getPairedItem 表达式辅助函数现在在表达式编辑器中被标记为弃用，使用时显示错误消息。它在实际工作流执行期间继续像以前一样工作，因此现有工作流不受影响；此变更只是在编辑器 UI 中警告用户，阻止进一步使用该辅助函数。
* [Improve data table node](https://github.com/n8n-io/n8n/pull/28199)（改进数据表节点）：Data Table 节点的 "Update" 表操作已重命名为 "Rename"，以更好地反映它只是重命名表。新的 "Clear" 操作让你删除数据表的所有行，同时保持其结构和 ID 不变。这个 clear 操作也可通过公共 API 作为 DELETE /data-tables/{dataTableId}/rows/clear 使用。
* [Microsoft To Do Node: Add Service Principal (app-only) authentication](https://github.com/n8n-io/n8n/pull/33081)（Microsoft To Do 节点：新增 Service Principal（应用专用）认证）：Microsoft To Do 节点现在支持 Microsoft Entra Service Principal（应用专用）认证，除现有 OAuth2 凭证外。由于应用专用的 Graph 访问没有个人的 '/me' 上下文，需要一个必填的 User（用户）字段（UPN 或对象 ID）来指定管理谁的任务列表和任务。现有 OAuth2 工作流不受影响，完全照常工作。
* [Make data table artifacts editable when AI is not running](https://github.com/n8n-io/n8n/pull/33210)（AI 不运行时使数据表工件可编辑）：AI 助手显示的数据表工件在 agent 完成工作后现在可编辑：你可以在预览面板中直接编辑单元格、添加或删除行、管理列。agent 流式传输、发送消息或在后台运行时网格会自动锁定，并在每次 agent 编辑后刷新。权限与主数据表视图相同的规则，只读的源代码控制分支保持不可编辑。还修复了两个边缘情况：粘贴和列拖拽可能绕过只读限制。
* [Microsoft Teams Node: Add Service Principal (app-only) authentication](https://github.com/n8n-io/n8n/pull/33105)（Microsoft Teams 节点：新增 Service Principal（应用专用）认证）：Microsoft Teams 操作节点和 Trigger 节点现在支持通过 Microsoft Entra Service Principal（应用专用）凭证进行认证，与现有的 Teams OAuth2 和通用 Microsoft Graph OAuth2 选项并列。这实现了应用专用自动化：列出团队、频道操作、Planner 任务和频道消息检索，以及 New Channel/Channel Message/Team Member 触发器。聊天相关资源和某些操作在此凭证下不可用，节点内有清晰提示和友好错误。现有 OAuth2 工作流不受影响。
* [Render AI Assistant reasoning as separate blocks in the run timeline](https://github.com/n8n-io/n8n/pull/33676)（在运行时间线中把 AI 助手推理渲染为独立块）：AI 助手聊天现在把推理显示为独立的可折叠块，放置在实际发生的位置，而不是把全部推理合并到消息顶部的一个块中。当助手流式处理多个步骤和工具调用时，每个推理阶段都会按顺序交错显示，直播中和刷新页面后都是如此。较旧的对话仍将其推理显示为顶部单一块。
* [Kafka Node: Add mTLS (client certificate) authentication](https://github.com/n8n-io/n8n/pull/33236)（Kafka 节点：新增 mTLS（客户端证书）认证）：Kafka 凭证现在支持双向 TLS（mTLS）认证，让 n8n 连接到需要客户端证书的 broker。启用 SSL 时，你可以可选地提供 CA 证书、客户端证书和客户端私钥，外加用于测试的 'Ignore SSL Issues（忽略 SSL 问题）' 开关。这一致适用于 Kafka 节点、Kafka Trigger 和凭证测试。现有 SSL 和 SASL 凭证不受影响，无效或不完整的证书/密钥对现在会以清晰错误失败，而不是模糊的 TLS 握手失败。
* [Show private credential icon on execution list runs](https://github.com/n8n-io/n8n/pull/32957)（在执行列表的运行上显示私有凭证图标）：执行列表现在在运行使用了私有（终端用户解析）凭证时显示一个图标，即使使用它的节点出错了。该图标同时出现在工作流级执行侧边栏和全局项目执行表中，带工具提示说明它使用终端用户凭证运行。这有助于一眼识别涉及动态解析凭证的执行。
* [NDV one-line credential row with connect/connected/disconnect states](https://github.com/n8n-io/n8n/pull/33371)（NDV 单行凭证行，带连接/已连接/断开状态）：节点编辑视图（NDV）中的凭证部分已重新设计为紧凑的单行，显示凭证名称、私有凭证指示器和清晰的连接状态。用户看到带 'Not connected（未连接）' 的红点和 Connect（连接）按钮，或带 'Connected（已连接）' 下拉（提供 Modify（修改）和 Disconnect（断开连接））的绿点。断开连接现在显示一个带 'Don't show again（不再显示）' 选项的确认对话框，使模板编辑与个人账号连接分离得更清晰。
* [Read-only credential view and connect banner for private credentials](https://github.com/n8n-io/n8n/pull/33055)（私有凭证的只读凭证视图和连接横幅）：对私有凭证只有只读访问权限的用户现在会看到完整的凭证表单，字段被禁用，而不是一个空弹窗。新的 credential:connect 权限让没有编辑权限的成员可以直接授权或重新连接 OAuth 凭证，而不会触发误导性的保存。该能力现在可以在自定义角色编辑器中分配，团队拥有的凭证的只读提示也已为清晰而改写。
* [Microsoft Excel Node: Add Service Principal (app-only) authentication](https://github.com/n8n-io/n8n/pull/33014)（Microsoft Excel 节点：新增 Service Principal（应用专用）认证）：Microsoft Excel 节点现在支持 Microsoft Entra Service Principal（应用专用）认证，与现有 OAuth2 凭证并列。由于应用专用的 Graph 访问没有个人驱动器上下文，一个新的 "Access As（以…身份访问）" 选项让你按 ID 指定目标用户、驱动器或站点。基于 OAuth2 的现有 Excel 工作流不变继续工作，因为认证选择器默认使用之前的 OAuth2 凭证。此新凭证类型下不支持工作簿搜索/列出；工作簿必须按 ID 引用。

---

## `n8n 2.29` 支持 Microsoft Entra Service Principal 认证，另加 13 项其他功能

**发布时间：** 2026-06-30

* [Add AI disclaimer to Instance AI chat](https://github.com/n8n-io/n8n/pull/33101)（在实例 AI 聊天中添加 AI 免责声明）：实例 AI 聊天现在在消息撰写器下方显示一条小的低调免责声明："AI can make mistakes. Check important info.（AI 可能会犯错。请核对重要信息。）" 它只出现在活跃的聊天会话中，提醒用户核实 AI 回复中的重要信息，与其他 AI 聊天工具中的类似提示一致。
* [Add instance role permission grouping config and selector](https://github.com/n8n-io/n8n/pull/32907)（新增实例角色权限分组配置和选择器）：为未来的实例角色权限编辑器添加了内部基础工作，引入一个按资源（如 Members、Roles、API keys、Tags）组织权限作用域的配置分组，归并为 View/Manage 等更简单的选项。还内部重组了角色功能文件夹结构。此版本尚未在任何面向用户的屏幕中暴露，对用户没有可见影响。
* [Add Microsoft Entra Service Principal credential](https://github.com/n8n-io/n8n/pull/32759)（新增 Microsoft Entra Service Principal 凭证）：新增 Microsoft Entra Service Principal 凭证，用于使用客户端密钥（OAuth2 client_credentials 授权）对 Microsoft Graph 进行应用专用认证。它支持 Global、US Gov、US Gov DOD 和 China 云环境，自动请求正确的令牌主机和作用域，并缓存/刷新访问令牌。此凭证尚未连接到任何节点；基于证书的登录计划在未来的版本中推出。
* [Snowflake Node: Add optional origin hostname support](https://github.com/n8n-io/n8n/pull/29653)（Snowflake 节点：新增可选的源主机名支持）：Snowflake 凭证现在支持可选的 Origin Hostname（源主机名）字段，让用户为经过代理或需要显式主机名的连接指定自定义主机，而不是默认的从账号派生的地址。字段留空时现有连接不受影响，标准 Snowflake 设置照常工作。
* [Update AI Assistant input disclaimer copy](https://github.com/n8n-io/n8n/pull/33213)（更新 AI 助手输入免责声明文案）：更新了 AI 助手输入字段下方显示的免责声明文本。现在显示 "Preview version. AI can make mistakes; always verify responses.（预览版。AI 可能会犯错；请始终核实回复。）"，取代之前的 "AI can make mistakes. Check important info."。这澄清了 AI 助手是预览功能，并鼓励用户核实其回复。
* [Slack Node: Add schedule message and look up user by email operations](https://github.com/n8n-io/n8n/pull/31243)（Slack 节点：新增定时消息和按邮箱查找用户操作）：Slack 节点现在支持四个新操作：按邮箱地址查找用户、定时在未来日期/时间发送消息、删除之前定时发送的消息，以及检索待发送定时消息列表（带可选的频道/日期过滤器）。这些是增量操作，不改变现有工作流或节点版本。
* [GitHub Node: Add GitHub App API credential](https://github.com/n8n-io/n8n/pull/31235)（GitHub 节点：新增 GitHub App API 凭证）：GitHub 和 GitHub Trigger 节点现在支持通过 GitHub App 凭证进行认证，除现有的个人访问令牌和 OAuth2 选项外。用户可以配置 App ID、Installation ID 和私钥；n8n 自动处理 JWT 签名和安装访问令牌检索，并在需要时为 API 请求刷新令牌。
* [Microsoft Outlook Node: Add Service Principal (app-only) authentication](https://github.com/n8n-io/n8n/pull/33098)（Microsoft Outlook 节点：新增 Service Principal（应用专用）认证）：Microsoft Outlook 节点（v2）和 Outlook Trigger 现在支持 Microsoft Entra Service Principal（应用专用）认证，与现有 OAuth2 选项并列。选中后，必填的 Mailbox（邮箱）字段（UPN 或对象 ID）指定对哪个邮箱操作，因为应用专用的 Graph 访问没有 '/me'。所有资源——消息、草稿、联系人、日历、事件、文件夹和附件——都针对所选邮箱工作，触发器也会轮询它。现有 OAuth2 工作流不受影响。
* [Show AI Assistant disclaimer only after the AI responds](https://github.com/n8n-io/n8n/pull/33234)（仅在 AI 响应后显示 AI 助手免责声明）：在 AI 助手面板中，输入免责声明（'Preview version. AI can make mistakes; always verify responses.'）现在只在助手产生可见响应后出现。在空会话和第一条消息仍在处理时它保持隐藏，在实际有 AI 回复需要提示之前减少杂乱。
* [xAI Grok Chat Model Node: Add reasoning effort and priority options](https://github.com/n8n-io/n8n/pull/32931)（xAI Grok Chat Model 节点：新增 reasoning effort 和 priority 选项）：xAI Grok Chat Model 节点现在支持两个新选项：Reasoning Effort（推理强度，none/low/medium/high）控制模型在回复前思考多少，以及 Enable Priority（启用优先）通过 xAI 的优先处理层请求更高的调度优先级。两个设置都作为请求的一部分发送给 xAI API，并且只适用于支持它们的推理型 Grok 模型。
* [Add instance role create/edit/view page behind env flag](https://github.com/n8n-io/n8n/pull/32942)（在环境开关后面新增实例角色创建/编辑/查看页面）：新增实例级（全局）自定义角色的创建、编辑和只读视图，在启用 Custom Roles 的企业许可证上通过 N8N_ENV_FEAT_CUSTOM_INSTANCE_ROLES 开关提供。管理员可以定义带所选作用域的自定义实例角色，基于与系统角色匹配的预设，并通过复制和删除操作管理它们，而系统角色保持只读。需要适当的 role:manage 权限。
* [Allow assigning custom instance roles and restyle the Users page role dropdown](https://github.com/n8n-io/n8n/pull/33029)（允许分配自定义实例角色并重新设计 Users 页面角色下拉列表）：自定义实例角色现在可以在整个管理体验中分配给用户：在 Invite Users（邀请用户）弹窗、Users 表格角色下拉列表、重新邀请流程和个人设置中，分配后正确显示。当前许可证未覆盖的角色显示为禁用而不是隐藏。Users 页面角色下拉列表也已重新设计，以匹配项目角色下拉列表的设计，共享底层组件减少重复逻辑。
* [Microsoft OneDrive Node: Add Service Principal (app-only) authentication](https://github.com/n8n-io/n8n/pull/32911)（Microsoft OneDrive 节点：新增 Service Principal（应用专用）认证）：Microsoft OneDrive 节点和触发器现在支持应用专用的 Microsoft Entra Service Principal 凭证，让工作流无需登录用户即可运行，通过指定特定的 User、Drive 或 Site。文件与文件夹新增 Move（移动）操作。此凭证下搜索被禁用（Graph 限制），显示清晰消息而不是原始错误。基于 OAuth2 的现有工作流不受影响。
* [Add reusable PrivateCredentialIcon component](https://github.com/n8n-io/n8n/pull/32866)（新增可复用的 PrivateCredentialIcon 组件）：使用私有（动态解析）凭证的工作流现在在工作流卡片上显示一个带工具提示的紧凑钥匙图标，取代之前的徽章。还修复了一个 bug：在 'Add credential（添加凭证）' 弹窗中搜索凭证类型时，开发模式下可能抛出 'Maximum call stack size exceeded（超出最大调用栈大小）' 错误；搜索现在可靠地按凭证名称过滤。

---

## `n8n 2.28` GitHub 节点新增 Pull Request 资源，另加 27 项其他功能

**发布时间：** 2026-06-23

* [Microsoft Teams Node: Accept the generic Microsoft OAuth2 (Graph) credential](https://github.com/n8n-io/n8n/pull/32455)（Microsoft Teams 节点：接受通用的 Microsoft OAuth2 (Graph) 凭证）：Microsoft Teams 操作节点和 Trigger 现在支持新的 Authentication 选项，让你在现有的 Teams 专用 OAuth2 凭证（默认）和通用 Microsoft OAuth2 (Graph) 凭证之间选择。这让使用 Entra 管理的 Graph 应用注册的企业可以集中认证 Teams 工作流。现有工作流不变继续工作，因为 Teams 凭证仍是默认。
* [AWS Transcribe Node: Add AWS Assume Role authentication](https://github.com/n8n-io/n8n/pull/32017)（AWS Transcribe 节点：新增 AWS Assume Role 认证）：AWS Transcribe 节点现在支持 AWS Assume Role 认证，除标准 AWS (IAM) 凭证外。新的 Authentication 下拉列表让用户在 AWS (IAM) 和 AWS (Assume Role) 之间选择，选中后使用通过角色扮演获得的临时凭证签署请求。使用静态 IAM 凭证的现有工作流不变继续工作，因为 IAM 仍是默认认证方法。
* [Compression Node: Add tar and tar.gz support](https://github.com/n8n-io/n8n/pull/32547)（Compression 节点：新增 tar 和 tar.gz 支持）：Compression 节点现在支持 tar 归档。Decompress（解压）处理 .tar、.tar.gz 和 .tgz 文件（以前会静默产生空输出），.rar 等不支持格式现在会引发清晰错误。Compress（压缩）新增两个输出格式 Tar 和 Tar (Gzip)，把输入二进制字段捆绑到单个归档中，使用与 Zip 相同的 File Name（文件名）/输出字段体验。包含与现有 zip 处理匹配的大小、条目数、路径穿越和符号链接防护。
* [Google Calendar Node: Allow custom OAuth2 scopes](https://github.com/n8n-io/n8n/pull/32661)（Google Calendar 节点：允许自定义 OAuth2 作用域）：Google Calendar OAuth2 凭证现在支持 Custom Scopes 开关。默认情况下，现有凭证的作用域不变，但用户可启用该选项显示可编辑的 Enabled Scopes 字段（预填当前默认值），允许他们在连接时请求额外或不同的 OAuth 权限。手动输入的作用域现在在凭证重新连接后保留。
* [Google Cloud Storage Node: Allow custom OAuth2 scopes](https://github.com/n8n-io/n8n/pull/32659)（Google Cloud Storage 节点：允许自定义 OAuth2 作用域）：Google Cloud Storage 节点的 OAuth2 凭证现在支持 Custom Scopes 开关。默认行为与以前完全相同，但启用开关会显示预填标准作用域的可编辑 Enabled Scopes 字段，让用户请求额外或不同的权限。手动输入的作用域在重新连接后保留，与 Strava、Wordpress、Figma 和 Discord 等凭证已有的行为一致。
* [Google Sheets Trigger Node: Add Service Account credential support](https://github.com/n8n-io/n8n/pull/32312)（Google Sheets Trigger 节点：新增 Service Account 凭证支持）：Google Sheets Trigger 节点现在支持 Service Account 认证，除 OAuth2 外，与常规 Google Sheets 节点一致。选择 Service Account 并选择一个 Google Service Account 凭证，即可启用服务器到服务器的非交互式认证。现有 OAuth2 工作流不受影响，仍为默认并保留已保存的设置。Service Account 认证下，行更新检测现在通过请求所需的最小额外 Drive 只读作用域正常工作。
* [Microsoft To Do Node: Accept the generic Microsoft OAuth2 (Graph) credential](https://github.com/n8n-io/n8n/pull/32492)（Microsoft To Do 节点：接受通用的 Microsoft OAuth2 (Graph) 凭证）：Microsoft To Do 节点现在支持新的 Authentication 下拉列表，让你在现有的节点专用 OAuth2 凭证（默认）和通用 Microsoft OAuth2 (Graph) 凭证之间选择。这让企业或 Entra 管理的租户可以使用带 Tasks.ReadWrite 作用域的集中管理的 Graph 应用注册来认证 To Do。现有已保存工作流不变继续工作，因为默认仍是原始凭证类型。
* [Microsoft To Do Node: Allow custom OAuth2 scopes](https://github.com/n8n-io/n8n/pull/32538)（Microsoft To Do 节点：允许自定义 OAuth2 作用域）：Microsoft To Do OAuth2 凭证现在支持自定义作用域。新的 Custom Scopes 开关让用户显示可编辑的 Enabled Scopes 字段，预填默认作用域（openid offline_access Tasks.ReadWrite），因此可以请求额外的 Microsoft Graph 权限。开关关闭时行为不变，现有凭证照常工作。
* [Rename n8n Connect usage table header from Model to Resource](https://github.com/n8n-io/n8n/pull/32448)（把 n8n Connect 使用量表的表头从 Model 重命名为 Resource）：在 Settings → n8n Connect 中，之前标记为 "Model" 的使用历史表列现在标记为 "Resource"，以更好地反映 Firecrawl 等非模型提供商。这只是标签变化；底层数据和 API 字段保持不变。
* [AI Agent Node: Add binary PDF passthrough for models with native PDF support](https://github.com/n8n-io/n8n/pull/28038)（AI Agent 节点：为具有原生 PDF 支持的模型添加二进制 PDF 透传）：AI Agent 节点现在支持新的 'Automatically Passthrough Binary PDFs（自动透传二进制 PDF）' 选项，与现有的图像透传选项并列。启用后，二进制 PDF 附件会被转换为 base64 并作为文件内容发送给模型，让连接了原生 PDF 支持模型（如 Google Gemini）的 agent 直接读取 PDF 文档，无需先提取文本。可配置的大小限制（默认 50 MB）防止发送超大文件。
* [Improve credential saving UX for OAuth credentials](https://github.com/n8n-io/n8n/pull/32653)（改进 OAuth 凭证的凭证保存体验）：改进了 OAuth 凭证的保存体验。Save（保存）按钮现在始终可见，而不是在账号连接前隐藏，并在必填字段填好且做出更改前保持禁用。Save/Saved 状态现在平滑过渡，每次保存都出现成功 toast，"Connect your account（连接你的账号）" 横幅已移到私有凭证开关下方，移除了一个冗余的独立连接按钮。
* [Microsoft Excel 365 Node: Accept the generic Microsoft OAuth2 (Graph) credential](https://github.com/n8n-io/n8n/pull/32434)（Microsoft Excel 365 节点：接受通用的 Microsoft OAuth2 (Graph) 凭证）：Microsoft Excel 365 节点（v2）现在支持通用 Microsoft OAuth2 (Graph) 凭证，与现有的 Excel 专用凭证并列。新的 Authentication 下拉列表让你在两者之间选择，默认使用原始的 Excel OAuth2 凭证，因此现有工作流不变继续工作。这使 Excel 365 与其他采用共享 Graph 认证的 Microsoft 节点保持一致。
* [Microsoft Graph Security Node: Support authenticating with the generic Microsoft OAuth2 credential](https://github.com/n8n-io/n8n/pull/32529)（Microsoft Graph Security 节点：支持用通用 Microsoft OAuth2 凭证认证）：Microsoft Graph Security 节点现在提供 Authentication 选项，让你在现有的节点专用 Graph Security OAuth2 凭证（默认，不变）和通用 Microsoft OAuth2 凭证之间选择，对使用单个集中管理的 Graph 应用注册的企业/Entra 管理租户很有用。现有工作流无需更改继续工作。通用选项需要带管理员同意的 SecurityEvents.ReadWrite.All offline_access 作用域。
* [Microsoft Outlook Node: Accept the generic Microsoft OAuth2 (Graph) credential](https://github.com/n8n-io/n8n/pull/32531)（Microsoft Outlook 节点：接受通用的 Microsoft OAuth2 (Graph) 凭证）：Microsoft Outlook v2 操作节点和 Outlook Trigger 现在也接受通用 Microsoft OAuth2 (Graph) 凭证，除现有的 Outlook 专用 OAuth2 凭证外。这让你可以在 Outlook、OneDrive 和 Excel 节点之间复用单个 Microsoft Graph 凭证。使用 Outlook 专用凭证的现有工作流不变继续工作，因为这是完全向后兼容的。
* [Telegram Node: Add rich message and message draft operations](https://github.com/n8n-io/n8n/pull/32173)（Telegram 节点：新增富消息和消息草稿操作）：Telegram 节点现在支持三个新的 Message 操作：Send Message Draft（发送消息草稿）、Send Rich Message（发送富消息）和 Send Rich Message Draft（发送富消息草稿）。消息草稿会向用户流式显示实时的 'generating...（生成中...）' 预览，富消息让你通过 Markdown 或 HTML 发送富格式内容（标题、列表、表格、媒体、引用），无需手动构建底层对象结构。这些操作复用现有的 Chat ID 和附加字段设置，不需要升级节点版本。
* [Add rotate action for API keys](https://github.com/n8n-io/n8n/pull/32342)（为 API 密钥新增 rotate 操作）：你现在可以从 Settings > n8n API 轮换自己的 API 密钥。从行菜单中选择 Rotate（轮换）会重新签发密钥的 secret，同时保留其名称、作用域和过期时间，并立即使旧 secret 失效。确认对话框警告当前密钥停止工作，然后新密钥显示一次供复制。过期密钥或其他用户拥有的密钥不能轮换。
* [GitHub Node: Add Pull Request resource with create, update, merge, comments, diff and patch](https://github.com/n8n-io/n8n/pull/32261)（GitHub 节点：新增 Pull Request 资源，支持创建、更新、合并、评论、diff 和 patch）：GitHub 节点现在包含一个专用的 Pull Request 资源。它支持创建 Pull Request（包括跨 fork 和草稿 PR）、更新标题/正文/状态/基础分支、关闭和重新打开、获取单个 PR、添加和编辑评论、检索原始 diff 和 patch，以及用 merge、squash 或 rebase 方法合并，包括 merge-queue 处理。
* [Google Sheets Node: Allow custom OAuth2 scopes](https://github.com/n8n-io/n8n/pull/32660)（Google Sheets 节点：允许自定义 OAuth2 作用域）：Google Sheets OAuth2 凭证现在支持 Custom Scopes 开关。启用后会出现 Enabled Scopes 字段，预填当前默认值，让用户请求超出 n8n 通常要求的额外 OAuth 作用域。现有凭证不受影响：除非打开开关，否则默认行为和作用域保持不变。自定义作用域也会在凭证重新连接后保留。
* [Add owner filter to API keys "All" tab](https://github.com/n8n-io/n8n/pull/32430)（在 API 密钥 "All" 选项卡中添加 owner 过滤器）：具有 API 密钥管理权限的管理员现在可以使用搜索框旁新的多选控件，按 owner 过滤 API 密钥 "All" 选项卡。它支持实时搜索、按 owner 的密钥计数、清除/重置选项，默认显示所有 owner。过滤器在 Mine 选项卡上隐藏，只对具有适当权限的用户生效。
* [Add Roles settings area with instance roles tab](https://github.com/n8n-io/n8n/pull/32775)（新增带实例角色选项卡的 Roles 设置区）：在 N8N_ENV_FEAT_CUSTOM_INSTANCE_ROLES 开关后面，Settings 菜单项 'Project roles' 重命名为 'Roles'，现在打开一个带 Instance roles（默认）和 Project roles 选项卡的选项卡式页面。实例角色选项卡列出系统和自定义实例角色及成员数，锁定系统角色免受破坏性操作，同时允许对自定义角色执行复制/删除。旧的 /settings/project-roles 链接重定向到新页面。开关关闭时行为不变。
* [LoneScale Node: Add Contact (enrich, source) and Company (search) resources](https://github.com/n8n-io/n8n/pull/32009)（LoneScale 节点：新增 Contact（enrich、source）和 Company（search）资源）：LoneScale 节点现在支持三个新操作：Contact Enrich（把邮箱、电话或个人资料数据添加到联系人）、Contact Source（查找与给定人物画像和过滤器匹配的公司中的联系人）和 Company Search（按域名、LinkedIn ID、slug 或名称查找公司，可选丰富化）。现有的 List 和 Item 资源以及 LoneScale Trigger 节点不变，复用相同的 LoneScale API 凭证。
* [Phantombuster Node: Add Launch Sync operation](https://github.com/n8n-io/n8n/pull/31101)（Phantombuster 节点：新增 Launch Sync 操作）：Phantombuster 节点的 Agent 资源现在支持 Launch Sync 操作，它调用 /agents/launch-sync 端点运行 agent 并在单次节点执行中返回其结果，无需单独的获取步骤。它流式解析 NDJSON 输出，流在完成前断开时自动重新连接，并直接在流程中呈现 agent 错误。
* [Surface execution data size in the executions view](https://github.com/n8n-io/n8n/pull/32505)（在执行视图中显示执行数据大小）：执行视图现在在执行详情头部显示总执行数据大小（JSON 加二进制数据，例如 144KB），与运行时间和执行 ID 并列。没有记录到数据大小时该段隐藏。这是纯前端变化；底层大小数据 API 早已跟踪并提供。
* [Webhook Node: Add "Only Run If" option to filter requests](https://github.com/n8n-io/n8n/pull/28872)（Webhook 节点：新增 "Only Run If" 选项过滤请求）：Webhook 节点现在支持 "Only Run If" 选项，让你用针对请求数据（body、headers、params、query）求值的表达式过滤传入请求。不满足条件的请求会收到 200 响应而不触发执行，减少空运行。如果表达式求值失败，请求被放行并记录警告。
* [Render workflow history and template previews natively](https://github.com/n8n-io/n8n/pull/32468)（原生渲染工作流历史和模板预览）：模板详情页和工作流历史面板中的工作流预览现在原生渲染，而不是在 iframe 中，移除了 postMessage 握手。预览加载更快更可靠，以只读方式显示，永不显示 pin 数据。模板预览也能正确解析社区节点图标和形状。
* [Investigate failed executions on Instance AI editor hand-offs](https://github.com/n8n-io/n8n/pull/32675)（在实例 AI 编辑器交接时调查失败执行）：实例 AI 编辑器交接现在能识别失败的执行：从节点错误或失败的画布运行打开助手时，会启动一个新会话要求 agent 调查，而不是空白的问候。修复了一个 bug：从节点错误视图使用 Ask AI Assistant 时，由于导航前节点详情视图未关闭，可能留下空白屏幕。另外，新选项卡中的凭证设置问题不再误导性地引用节点名称，而会话内的凭证问题仍会。
* [Open the current workflow and credentials in Instance AI from the editor](https://github.com/n8n-io/n8n/pull/32398)（从编辑器在实例 AI 中打开当前工作流和凭证）：启用实例 AI 时，编辑器的 AI 入口点现在交给实例 AI，而不是内置的构建器面板。点击画布 AI 按钮、'Build with AI（用 AI 构建）' 或节点错误上的 'Ask AI Assistant（询问 AI 助手）'，会打开一个带当前工作流（及其执行）作为工件附加的新实例 AI 会话。在凭证设置中，'Ask AI Assistant' 会在新选项卡中打开实例 AI 并带设置问题，或者如果已经在实例 AI 工件内，则追加到当前会话。
* [Redesign API key scope picker with grouped tree](https://github.com/n8n-io/n8n/pull/32167)（用分组树重新设计 API 密钥作用域选择器）：API 密钥创建/编辑弹窗现在使用重新设计的作用域选择器，而不是多选下拉列表。通过单选组选择 All、Read only 或 Custom，看到所选作用域的实时计数，并浏览按域组织（workflows、credentials、data tables、projects、folders/tags、members、instance operations）的可搜索分组树，带三态组复选框和每作用域读/写徽章。

---

## `n8n 2.27.4` Google Ads 节点升级到 API v21

**发布时间：** 2026-06-24

* [Google Ads Node: Upgrade API from v20 to v21](https://github.com/n8n-io/n8n/pull/32791)（Google Ads 节点：把 API 从 v20 升级到 v21）：Google Ads 节点现在使用 Google Ads API v21，取代已弃用的 v20，更新了用于凭证测试、广告系列搜索和相关请求的所有端点 URL。这确保在 v20 被淘汰期间与 Google Ads 保持兼容。

---

## `n8n 2.27` 从添加菜单创建变量和数据表，另加 17 项其他功能

**发布时间：** 2026-06-16

* [Add docs links for data redaction](https://github.com/n8n-io/n8n/pull/32220)（为数据脱敏添加文档链接）：数据脱敏设置和提示现在包含指向官方文档的 'Learn more（了解更多）' 链接。链接已添加到安全设置的数据脱敏部分、工作流设置脱敏工具提示、节点输入/输出面板和日志中显示的脱敏数据状态，以及揭示数据警告弹窗。所有链接都在新选项卡中打开执行数据脱敏文档，让用户更容易理解脱敏行为和强制执行选项。
* [JWT Node: Support custom header claims for the Sign operation](https://github.com/n8n-io/n8n/pull/31918)（JWT 节点：为 Sign 操作支持自定义请求头声明）：JWT 节点的 Sign 操作现在支持可选的 Header Claims (JSON)（请求头声明）字段，让你添加 x5t、x5c 或 kid 等自定义 JWT 请求头参数。显式值会覆盖自动生成的 alg/typ/kid。这支持 Microsoft Entra (Azure AD) 证书客户端断言等用例。字段留空（默认）保持现有行为，对当前工作流无影响。
* [Kafka Node: Add Schema Registry credential type](https://github.com/n8n-io/n8n/pull/32026)（Kafka 节点：新增 Schema Registry 凭证类型）：Kafka 节点和 Kafka Trigger 现在支持新的可选 Schema Registry 凭证，通过 HTTP Basic Auth 连接已认证的 Confluent Schema Registries（如 Confluent Cloud）。使用普通 Schema Registry URL 参数的现有工作流不变继续工作。还改进了错误处理：配置错误现在以清晰消息失败，registry 错误被记录而不会泄漏敏感数据。
* [Microsoft OneDrive Node: Support the generic Microsoft OAuth2 credential](https://github.com/n8n-io/n8n/pull/32295)（Microsoft OneDrive 节点：支持通用 Microsoft OAuth2 凭证）：Microsoft OneDrive 节点和触发器现在支持通用 Microsoft OAuth2 API 凭证，除现有的 OneDrive 专用凭证外。新的 Authentication 选项让你选择使用哪个凭证，因此你可以在 OneDrive 和其他 Microsoft 节点之间复用单个 Microsoft Graph 凭证（带 Files.ReadWrite.All 等适当作用域）。现有工作流默认使用之前的凭证，不受影响。
* [Allow creating variables and data tables from the universal add menu](https://github.com/n8n-io/n8n/pull/32079)（允许从通用添加菜单创建变量和数据表）：你现在可以直接从全局 "+" 添加菜单创建变量和数据表，带子菜单选择作用域（Global、Personal 或团队项目）；选项会根据权限或只读分支被禁用。Variables 选项卡现在也出现在个人项目中。此外，在没有工作流的全新实例上，空状态视图现在在显示简化布局前还会检查现有凭证、变量和数据表。
* [Force Microsoft account selection on OAuth for all Microsoft credentials](https://github.com/n8n-io/n8n/pull/32015)（为所有 Microsoft 凭证强制在 OAuth 时选择 Microsoft 账号）：Microsoft OAuth2 连接现在在登录时总是显示 Microsoft 的账号选择器，而不是静默复用浏览器的活跃会话。这让连接凭证到特定账号（如共享邮箱或共享 SharePoint 站点）更容易。影响 Outlook、SharePoint、OneDrive、Teams、Dynamics、Entra、Excel、Graph Security、To Do 和 Azure Storage 凭证。现有已授权凭证不受影响；只有新连接或重新认证显示选择器。Azure Monitor OAuth2 不受影响。
* [GitHub Node: Introduce get members operation on organization resource](https://github.com/n8n-io/n8n/pull/23822)（GitHub 节点：在 organization 资源上引入 get members 操作）：GitHub 节点现在在 Organization 资源下支持新的 Get Members 操作，让用户检索指定 GitHub 组织的所有成员。它通过现有的 Return All 和 Limit 选项支持分页，与节点中其他列表操作一致。
* [Pipedrive Trigger Node: Allow lead entities to be triggered upon](https://github.com/n8n-io/n8n/pull/23977)（Pipedrive Trigger 节点：允许对 lead 实体触发）：Pipedrive Trigger 节点现在把 Lead 作为可选实体类型，让工作流直接对 lead 相关事件触发，无需变通方案。以前 Lead 缺失于实体选项列表。
* [Show the workflow name on the OAuth consent screen](https://github.com/n8n-io/n8n/pull/32362)（在 OAuth 同意屏幕上显示工作流名称）：为按工作流 MCP 资源授权 OAuth 访问时，同意屏幕现在点名正在授权的特定工作流（例如 "{client} requests access to workflow {workflowName}"），而不是只显示通用的实例级权限，提高透明度和防钓鱼能力。实例级 MCP 授权保持不变。如果目标工作流在同意前不可用，用户现在会看到清晰错误，而不是损坏的屏幕。
* [Use an action menu for API key row actions](https://github.com/n8n-io/n8n/pull/32339)（为 API 密钥行操作使用操作菜单）：在 Settings → n8n API 中，每个 API 密钥行现在使用单个 kebab（三点）操作菜单，而不是独立的内联按钮。你拥有的密钥显示 Edit（编辑）和 Revoke（撤销）；其他人拥有的密钥显示 View（查看）和 Revoke（撤销），分别打开只读或编辑弹窗。这整理了行布局，并使操作菜单与 n8n 其他 UI 一致。
* [MCP Server Trigger Node: Add n8n OAuth2 authentication option](https://github.com/n8n-io/n8n/pull/32326)（MCP Server Trigger 节点：新增 n8n OAuth2 认证选项）：MCP Server Trigger 节点（v2+）现在支持 'n8n OAuth2' 作为认证选项，让工作流要求限定到工作流 MCP 端点的有效 OAuth 2.1 bearer 令牌。没有有效令牌的请求会收到带发现请求头的 401，OAuth 服务器不可用时收到 503。需要 oauth-server 模块；适用于队列模式下的专用 webhook 进程。较旧的 v1 节点不能使用此选项。
* [Open API key modal in read-only mode for non-owners](https://github.com/n8n-io/n8n/pull/32254)（对非 owner 以只读模式打开 API 密钥弹窗）：在 Settings → API 中，点击其他用户的 API 密钥行现在会打开只读弹窗，而不是直接跳到删除确认。弹窗在标题中显示 owner 的邮箱，显示禁用的 Label（标签）和 Scopes（作用域）字段，并提供 Close（关闭）和 Revoke（撤销）操作。Revoke 仍触发现有的确认对话框和删除流程。查看和编辑自己的 API 密钥不变。
* [Rewrite icon picker with search, full Lucide set, emoji sections, and color/skin tone pickers](https://github.com/n8n-io/n8n/pull/25649)（用搜索、完整 Lucide 集、表情符号分区和颜色/肤色选择器重写图标选择器）：用于项目的图标选择器已重写，带可搜索界面，覆盖全部 1,626 个 Lucide 图标和 1,914 个分类表情符号。新增内容包括防抖搜索、平滑性能的虚拟化滚动、图标颜色选择器、表情符号肤色选择器、分类浏览和随机按钮。图标和表情符号现在懒加载以加快打开速度，所选颜色与图标一起保存。
* [Computer use supports reading local pdf and image files](https://github.com/n8n-io/n8n/pull/30704)（计算机使用支持读取本地 PDF 和图像文件）：Computer Use 现在可以从本地文件系统读取 PDF 和图像文件（PNG、JPEG、GIF、WebP），让 AI 模型直接分析它们，结果内联显示在工具响应查看器中。读写操作的最大文件大小也从 512 KB 提高到 1 MB。音频和视频等不支持的二进制格式仍返回错误。
* [Redesign API key created modal](https://github.com/n8n-io/n8n/pull/32256)（重新设计 API 密钥创建完成弹窗）：API 密钥创建完成确认弹窗已重新设计。现在显示更新的标题、提示和单行边框字段中内联显示的新密钥——首尾各 30 个字符用省略号分隔——外加复制图标按钮。点击复制仍复制完整密钥。这取代了之前基于卡片的悬停显示复制框布局。
* [Calendly Trigger Node: Deprecate API key auth and default to OAuth2](https://github.com/n8n-io/n8n/pull/28367)（Calendly Trigger 节点：弃用 API 密钥认证并默认 OAuth2）：由于 Calendly 停止支持 API 密钥认证，Calendly Trigger 节点已更新。节点现在有版本化：新的默认版本（v2）只支持 OAuth2 认证，完全移除损坏的 API 密钥选项，而之前的版本（v1）为现有工作流保留，API 密钥选项现在标记为已弃用。新节点默认使用 OAuth2 以获得可靠运行。
* [LmChatAnthropic Node: Add streaming option](https://github.com/n8n-io/n8n/pull/30991)（LmChatAnthropic 节点：新增流式选项）：Anthropic Chat Model 节点现在在 Options 下有一个可选的 'Stream Responses（流式响应）' 选项。启用后，响应通过 Server-Sent Events 流式传输，而不是单个非流式请求。它默认禁用，因此现有工作流行为不变，返回给 agent 的最终输出格式保持不变。
* [Reposition nodes on group collapse/expand](https://github.com/n8n-io/n8n/pull/32128)（在分组折叠/展开时重新定位节点）：在画布上展开分组现在会自动把重叠的节点和分组推到一边，折叠时它们会回到原来的位置。这些推动纯粹是视觉上的，直到你拖动被推的节点、拖动展开的分组或取消分组，此时新位置才会保存。分组展开/折叠状态按工作流记忆。新分组默认展开且不推动邻居；导入或粘贴的分组默认折叠。

---

## `n8n 2.26` Bedrock 支持 AWS Assume Role，另加 6 项其他功能

**发布时间：** 2026-06-09

* [Add pagination to MCP workflows table](https://github.com/n8n-io/n8n/pull/31780)（为 MCP 工作流表添加分页）：MCP 设置页面上的工作流表现在支持分页和可选页大小，取代之前固定的 200 个工作流限制。以前超过该限制的工作流无法为 MCP 访问而访问或管理；现在所有工作流都可以通过分页导航访问，表格正确反映工作流总数。
* [Add support for NVIDIA Nemotron Embeddings Node](https://github.com/n8n-io/n8n/pull/31797)（新增 NVIDIA Nemotron Embeddings 节点支持）：新增 NVIDIA Nemotron Embeddings 节点，通过 build.nvidia.com 或自托管的 NIM 使用 NVIDIA NeMo Retriever 模型生成嵌入。它复用现有的 NVIDIA Nemotron 凭证，自动设置所需的 input_type 字段（索引用 passage，检索用 query），提供可搜索的精选模型列表加上自托管使用的自由文本模型 ID，并支持批大小、维度、strip-new-lines 和超时选项。
* [NVIDIA Nemotron Chat Model Node: Restrict model selector to supported models](https://github.com/n8n-io/n8n/pull/31698)（NVIDIA Nemotron Chat Model 节点：把模型选择器限制为受支持模型）：NVIDIA Nemotron Chat Model 节点的 Model 选择器现在只显示受支持的 Nemotron 聊天模型，使用显式允许列表而不是子串匹配。这防止 reward 或 embedding 模型等非聊天模型出现在下拉列表中。如果 API 不可达，同一个允许列表作为静态后备显示。默认模型仍为 nvidia/llama-3.3-nemotron-super-49b-v1。
* [Trello Node: Add OAuth1 credential support](https://github.com/n8n-io/n8n/pull/30369)（Trello 节点：新增 OAuth1 凭证支持）：Trello 和 Trello Trigger 节点现在支持通过 Trello 的 OAuth 1.0a 流程连接，除现有的 API Key 认证（仍为默认，因此现有工作流不受影响）外。Authentication 选择器让你选择方法；触发器 webhook 的创建、删除和签名验证对两者都正确处理。这也修复了 n8n 通用 OAuth1 实现中的一个 bug：访问令牌交换请求未被签名。
* [Add AWS Assume Role support for Bedrock nodes](https://github.com/n8n-io/n8n/pull/28663)（为 Bedrock 节点新增 AWS Assume Role 支持）：AWS Bedrock Chat Model 和 Embeddings AWS Bedrock 节点现在支持 'AWS (Assume Role)' 作为认证选项，与标准 IAM 凭证并列。这让工作流通过角色 ARN 和外部 ID 使用短期 STS 会话，而不是静态 AWS 密钥，与其他 AWS 节点已有的 Assume Role 支持一致。现有工作流不受影响，默认使用之前的 IAM 认证路径。
* [Add Mine and All tabs to the API keys settings](https://github.com/n8n-io/n8n/pull/31239)（为 API 密钥设置添加 Mine 和 All 选项卡）：Settings > API keys 页面已重新设计，对可管理 API 密钥的用户提供 Mine 和 All 选项卡、可排序的分页表，以及带标签搜索和 Create API key（创建 API 密钥）按钮的工具栏。新列显示 owner 和过期时间，行操作悬停出现，撤销其他用户的密钥显示定制的确认文案。后端端点现在支持 owner、标签和排序过滤器。
* [Google Cloud Storage Node: Add service account authentication](https://github.com/n8n-io/n8n/pull/30928)（Google Cloud Storage 节点：新增服务账号认证）：Google Cloud Storage 节点现在支持用 Google 服务账号认证（通过现有的 Google API 凭证），除 OAuth2 外。这对 OAuth2 会话频繁过期的自动化工作负载很有用，适用于项目搜索、对象列出和可恢复文件上传。新的 Authentication 选项让你在 OAuth2 和 Service Account（推荐）之间选择。

---

## `n8n 2.25.1` Agent 网页搜索，另加 13 项其他功能

**发布时间：** 2026-06-02

* [Crypto Node: Add HMAC-SHA1 support](https://github.com/n8n-io/n8n/pull/29740)（Crypto 节点：新增 HMAC-SHA1 支持）：Crypto 节点的 Hash 和 HMAC 操作（V1 和 V2）现在包含 SHA1 作为可选算法，对与传统 API 的互操作、webhook 签名验证和较旧的完整性检查很有用。这只是 UI 添加，不改变凭证、执行逻辑或现有默认值（V2 仍默认 SHA256，V1 默认 MD5）。Sign 操作的算法列表不受影响。
* [Microsoft OneDrive Node: Allow custom OAuth scopes (CE-949)](https://github.com/n8n-io/n8n/pull/31255)（Microsoft OneDrive 节点：允许自定义 OAuth 作用域 (CE-949)）：Microsoft OneDrive OAuth2 凭证现在包含 Custom Scopes 开关，让用户覆盖默认 OAuth 作用域（openid offline_access Files.ReadWrite.All），授予额外的 Microsoft Graph 权限或为其租户限制作用域。禁用时行为不变。启用时出现可编辑的 Enabled Scopes 字段，预填默认值，并附警告：更改可能导致节点故障。
* [Microsoft Outlook Node: Allow custom OAuth scopes (CE-950)](https://github.com/n8n-io/n8n/pull/31262)（Microsoft Outlook 节点：允许自定义 OAuth 作用域 (CE-950)）：Microsoft Outlook OAuth2 凭证现在支持自定义 OAuth 作用域。新的 Custom Scopes 开关让你直接编辑启用的作用域列表，带警告：更改可能影响节点功能。默认情况下开关关闭，现有凭证使用不变的之前默认作用域列表继续工作。这与 Microsoft Excel、Teams、OneDrive 和 SharePoint 凭证已有的自定义作用域选项一致。
* [Microsoft SharePoint Node: Allow custom OAuth scopes](https://github.com/n8n-io/n8n/pull/31256)（Microsoft SharePoint 节点：允许自定义 OAuth 作用域）：Microsoft SharePoint OAuth2 凭证现在支持自定义 OAuth 作用域。新的 'Custom Scopes' 开关显示可编辑的 'Enabled Scopes' 字段，让用户添加或修改作用域（如 Sites.Read.All），同时保留动态子域替换。开关关闭时默认认证行为不变，与 Microsoft Excel 和 Entra 凭证已有的功能一致。
* [Add private credential badge, callout, and not-connected validation in NDV](https://github.com/n8n-io/n8n/pull/31204)（在 NDV 中添加私有凭证徽章、提示和未连接验证）：NDV 凭证选择器现在在关闭的选择器和下拉列表中，都为使用按用户（可解析）认证的凭证显示 Private 徽章。选择器下方有一个提示，指示你的账号是否已连接，未连接时带 Connect 链接打开凭证编辑弹窗。使用当前用户未连接的私有凭证的节点现在也显示画布警告三角和解释性工具提示。静态凭证不受影响。
* [Form Trigger Node: Add n8n user authentication option](https://github.com/n8n-io/n8n/pull/30539)（Form Trigger 节点：新增 n8n 用户认证选项）：Form Trigger 节点（typeVersion 2.6+）现在支持 'n8n User Auth' 选项，要求访客登录同一个 n8n 实例才能查看或提交表单。未认证的 GET 请求重定向到登录页；POST 以 401 拒绝。提交的数据默认包含登录用户的 id、邮箱、名和姓，带新的 'Include User in Output（在输出中包含用户）' 选项退出。适用于所有 n8n 登录方法和多步骤表单。
* [Refine plan review with chat-input edits](https://github.com/n8n-io/n8n/pull/31124)（用聊天输入编辑细化计划审查）：细化了 AI 助手中的计划审查体验。请求更改计划现在直接在聊天输入中进行，处于专注的 'Plan edits（计划编辑）' 模式，而不是计划卡片上的单独文本框。计划卡片现在显示三个清晰操作——Deny（拒绝）、Ask for edits（请求编辑）、Approve（批准）——外加 'Plan approved（计划已批准）'、'Plan denied（计划已拒绝）'、'Updating plan…（正在更新计划…）' 等状态指示器，以及计划仍在生成时的 'Building plan…（正在构建计划…）' 指示器。
* [Show data redaction scope dropdown to unlicensed users](https://github.com/n8n-io/n8n/pull/30966)（向未授权用户显示数据脱敏作用域下拉列表）：在 Settings > Security & policies 中，Redact executions 作用域下拉列表现在对未授权用户显示，与 Enforce data redaction 开关一致。它显示 Upgrade 徽章、被禁用，并带链接到升级页面的工具提示。如果许可证过期，下拉列表仍为管理员显示之前保存的作用域值，禁用期间不发送任何更改。
* [Validate private credentials only run under manual triggers](https://github.com/n8n-io/n8n/pull/31211)（验证私有凭证只在手动触发器下运行）：n8n 现在在节点使用私有（按用户）凭证但工作流包含非手动触发器（如 webhook、计划、表单或聊天触发器）时，在编辑器中发出警告。由于私有凭证只在手动用户身份下解析，以前这会在运行时静默失败。警告建议改用 Manual 触发器或使用静态凭证。
* [Add N8nMarkdown editor to @n8n/design-system and Agents](https://github.com/n8n-io/n8n/pull/29988)（把 N8nMarkdown 编辑器添加到 @n8n/design-system 和 Agents）：为设计系统新增了一个富文本 Markdown 编辑器，带加粗、斜体、删除线、标题、列表、任务列表、代码块、引用块和撤销/重做的格式工具栏控件，外加原始 Markdown 和只读模式。AI Agent 指令编辑器现在使用这个新组件。聊天消息 Markdown 渲染也已更新，共享相同的底层样式，确保产品内格式一致。
* [Default workflow resolver to n8n system resolver](https://github.com/n8n-io/n8n/pull/31116)（把工作流解析器默认为 n8n 系统解析器）：在工作流设置中，凭证解析器下拉列表现在在未显式选择解析器时显示 "n8n private credentials" 作为默认选择，而不是显示为空。这只是显示变化：选择系统解析器不会保存 credentialResolverId，因此工作流继续依赖后端默认回退，而不是固定到特定播种的解析器。
* [Show private credential connection state in credentials list](https://github.com/n8n-io/n8n/pull/31117)（在凭证列表中显示私有凭证连接状态）：项目 Credentials 选项卡现在显示私有、可解析凭证（与动态凭证一起使用）的按用户连接状态。如果你还没有连接私有凭证，会出现 Connect（连接）按钮，让你直接从列表完成 OAuth 流程，而无需打开编辑弹窗。授权后显示 Connected 标签。项目芯片和操作菜单在两种状态下都保持可见。
* [Add fallback web search for agents](https://github.com/n8n-io/n8n/pull/31010)（为 agent 添加后备网页搜索）：Agent 现在可以执行网页搜索，在可用时使用原生提供商工具，或通过现有凭证回退到 Brave/SearXNG，可从 Advanced 面板配置。还修复了技能加载，使 agent 不再猜测 SKILL.md 等错误文件路径，提高了网页搜索和记忆默认值的可靠性，为未知凭证类型添加验证，并规范化了聊天中的网页搜索工具名称。
* [Introduce new project/folder actions menu](https://github.com/n8n-io/n8n/pull/30614)（引入新的项目/文件夹操作菜单）：在项目和文件夹面包屑上新增操作菜单，让用户批量启用或禁用项目或文件夹内所有工作流的 MCP 访问，带总结已更新、未变化和跳过工作流的确认 toast。底层批量 MCP 切换端点现在正确地把未变化的工作流与实际更新的分开报告，提供更准确的反馈。

---

## `n8n 2.23` 快速访问新 AI 聊天，另加 9 项其他功能

**发布时间：** 2026-05-27

* [Gumroad Trigger Node: Add OAuth2 authentication](https://github.com/n8n-io/n8n/pull/29974)（Gumroad Trigger 节点：新增 OAuth2 认证）：Gumroad Trigger 节点现在支持 OAuth2 认证，除现有的访问令牌凭证外。新的 Authentication 选择器让你选择 Access Token（访问令牌）或 OAuth2，新的 Gumroad OAuth2 API 凭证默认只请求最小的 view_sales 作用域，外加可选的 Custom Scopes 开关以获得更广访问。现有工作流不受影响，因为 Authentication 默认使用 Access Token。
* [Add new AI chat to universal create dropdown](https://github.com/n8n-io/n8n/pull/30719)（把新 AI 聊天添加到通用创建下拉列表）：通用创建（+）下拉列表新增 New AI chat 条目，让用户从任何地方快速启动新的实例 AI 聊天。它作为菜单最后一项出现，但只在实例 AI 模块激活、启用且用户有权限时。此外，实例 AI 侧边栏中现有的新会话按钮现在作为链接工作，支持中键和 cmd/ctrl 点击在新选项卡中打开聊天。
* [Execute Workflow Node: Return items from every run of the sub-workflow's last node](https://github.com/n8n-io/n8n/pull/30716)（Execute Workflow 节点：返回子工作流最后一个节点每次运行的条目）：Execute Workflow Trigger 现在控制子工作流最后一个节点多次运行时返回什么（例如使用 Loop Over Items 时）。新的 v1.2 触发器默认返回每次运行的条目，按分支拼接。现有的 v1/v1.1 触发器保持旧的只返回最后一次运行的行为，带新的 'Items to Return（要返回的条目）' 选项选择合并所有运行。LangChain Tool/Retriever Workflow 调用者总是保持只返回最后一次运行的输出。
* [Make plan approval UX clearer](https://github.com/n8n-io/n8n/pull/31054)（让计划批准体验更清晰）：计划批准卡片现在根据是否输入了反馈，在其主要按钮 Allow（允许）和 Request changes（请求更改）之间变形，并新增单独的 Deny（拒绝）按钮。拒绝计划会直接取消它并告诉 AI agent 停止，而不是修改，让用户能更清楚地完全拒绝计划，而不是请求更改。
* [Odoo Node: Add v2 with resource locators, field mapping, and API key auth](https://github.com/n8n-io/n8n/pull/30796)（Odoo 节点：新增带资源定位器、字段映射和 API 密钥认证的 v2）：Odoo 节点现在有新的 v2，与不变的 v1 并列。V2 为 Odoo 19+ 添加使用其 REST 风格 /json/2 端点的 API 密钥认证，而旧式用户名/密码凭证继续通过 /jsonrpc 用于 Odoo 14-18。它还引入资源定位器从可搜索列表中选择记录，以及一个资源映射器，为创建/更新操作从 Odoo 动态加载字段。支持的资源是 Contact、Opportunity、Activity 和 Custom Resource；Note 资源不再可用。
* [Open workflow artifact when builder spawns to edit it](https://github.com/n8n-io/n8n/pull/30862)（构建器启动编辑时打开工作流工件）：要求实例 AI 编辑现有工作流时，工件面板和画布预览现在在 workflow-builder 子 agent 启动时立即打开，而不是等待第一个编辑结果。这消除了用户之前从请求编辑到看到工作流出现之间的空白面板延迟。创建新工作流不受影响，因为启动时还没有工作流 id。
* [Oracle DB Vector Store Node: Add support for vectorstore and embedding node support](https://github.com/n8n-io/n8n/pull/29014)（Oracle DB Vector Store 节点：新增向量存储和嵌入节点支持）：为 Oracle Database AI 工作流新增两个节点：Oracle Vector Store 节点支持 Insert、Load、Retrieve 和 Retrieve-as-tool 模式，带距离策略选择和元数据过滤（节点级和运行时过滤深度合并），以及 Oracle ONNX Embeddings 节点，使用数据库内加载的模型生成嵌入，可通过资源定位器选择。两者都使用池化的 Oracle 连接以高效处理资源。需要在 Oracle Database 中预加载 ONNX 模型。
* [Per-user OAuth connection banner for resolvable credentials](https://github.com/n8n-io/n8n/pull/30994)（可解析凭证的按用户 OAuth 连接横幅）：对于共享、可解析的 OAuth 凭证，凭证编辑弹窗现在显示每个用户自己的 OAuth 连接状态，而不是共享状态。如果同事已连接共享凭证，查看同一凭证的其他用户仍会看到 'Connect' 提示，而不是虚假的 'Account connected（账号已连接）' 横幅，直到他们自己连接。静态（不可解析）OAuth 凭证不受影响。
* [Lock workflow redaction settings when enforced at instance level](https://github.com/n8n-io/n8n/pull/30520)（实例级强制执行时锁定工作流脱敏设置）：启用实例级脱敏强制执行（在 REDACTION_ENFORCEMENT 功能开关后面）时，Workflow Settings 抽屉现在锁定两个数据脱敏选择器，显示锁图标和 'Enforced at instance level（实例级强制执行）' 工具提示。这会覆盖按工作流的编辑权限，因此强制执行生效时编辑者不能再更改脱敏设置。强制执行关闭或开关未设置时行为不变。强制执行的向后端支持有待后续版本。
* [Require production redaction when enabling manual redaction](https://github.com/n8n-io/n8n/pull/30913)（启用手动脱敏时要求生产脱敏）：在 Workflow Settings 中，'Redact manual execution data（脱敏手动执行数据）' 选项现在要求 'Redact production execution data（脱敏生产执行数据）' 也设置为 Redact。如果未启用生产脱敏，手动脱敏控件被禁用并带解释性工具提示。关闭生产脱敏会自动把手动脱敏重置为默认值。这防止工作流以手动数据已脱敏但生产数据未脱敏的不一致状态保存。

---

## `n8n 2.22.5-exp` 工作流卡片上的快速 MCP 访问开关

**发布时间：** 2026-06-01

* [Surface MCP access toggle on workflow cards](https://github.com/n8n-io/n8n/pull/30683)（在工作流卡片上显示 MCP 访问开关）：对于一部分用户（通过 A/B 测试的 50%），工作流列表中的工作流卡片现在显示一个内联开关，可以直接启用或移除 MCP 访问，而不必使用 3 点菜单。如果实例级 MCP 关闭，点击开关会打开引导弹窗启用它；非管理员看到禁用的开关，并提示联系管理员。显示给 MCP 客户端的 MCP 访问错误消息也已更新，提到这个新开关。
---

## `n8n 2.22` Crypto 节点新增加密和解密，另加 10 项其他功能

**发布时间：** 2026-05-19

* [Crypto Node: Add encryption and decryption actions](https://github.com/n8n-io/n8n/pull/30540)（Crypto 节点：新增加密和解密操作）：Crypto 节点现在支持 Encrypt（加密）和 Decrypt（解密）操作。对称模式使用带 scrypt 密钥派生和认证密码（如 AES-256-GCM、AES-192-GCM、AES-128-GCM 或 ChaCha20-Poly1305）的密码短语，产生带版本的 base64 输出。非对称模式使用 RSA-OAEP-SHA256，分别用公钥或私钥加密/解密。三个新的凭证字段（密码短语、公钥和私钥）支持这些操作。解密失败返回通用错误，避免泄漏细节。
* [Facebook Graph API Node: Add OAuth2 support](https://github.com/n8n-io/n8n/pull/27112)（Facebook Graph API 节点：新增 OAuth2 支持）：Facebook Graph API 和 Facebook Trigger 节点现在支持 OAuth2 认证，作为访问令牌的替代方案。两个新的凭证类型 Facebook Graph OAuth2 API 和 Facebook Graph (App) OAuth2 API 让用户通过可配置作用域的 OAuth2 认证，而现有访问令牌凭证仍受支持。节点的版本选择器还新增了 Graph API 版本 v24.0 和 v25.0。
* [Microsoft Teams Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29490)（Microsoft Teams Trigger 节点：新增 webhook 请求验证）：Microsoft Teams Trigger 节点现在使用 Microsoft Graph 的 clientState 机制验证传入的 webhook 通知。创建订阅时，节点自动生成密钥并作为 clientState 发送；传入通知会对照这个存储的密钥检查，未经验证的请求以 401 响应被拒绝。没有存储密钥创建的现有订阅继续未验证工作，确保向后兼容，同时提高对伪造 webhook 调用的安全性。
* [AWS Node: Add IRSA to AWS AssumeRole system credential strategies](https://github.com/n8n-io/n8n/pull/22316)（AWS 节点：把 IRSA 添加到 AWS AssumeRole 系统凭证策略）：AWS 节点现在支持 IAM Roles for Service Accounts（IRSA，服务账号 IAM 角色）作为自动凭证来源。设置 AWS_ROLE_ARN 和 AWS_WEB_IDENTITY_TOKEN_FILE 环境变量后，n8n 读取 web 身份令牌并调用 STS AssumeRoleWithWebIdentity 获取临时凭证，让在 EKS 中运行的工作流无需静态密钥即可认证 AWS，与现有的 pod 身份、容器元数据和实例元数据策略并列。
* [AWS SNS Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/30456)（AWS SNS Trigger 节点：新增 webhook 请求验证）：AWS SNS Trigger 节点现在按照 AWS SNS 的要求，使用基于证书的 RSA 签名验证来验证传入的 webhook 请求。它检查消息主题、下载并验证签名证书，并在处理前确认 RSA 签名。签名无效或缺失的请求会收到 401 Unauthorized 响应，通过防止伪造通知触发工作流提高安全性。
* [Box Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29483)（Box Trigger 节点：新增 webhook 请求验证）：Box Trigger 节点现在可以按照 Box 的 V2 webhook 签名规范，使用 HMAC-SHA256 签名检查验证传入的 webhook 请求。可以在 Box OAuth2 凭证上设置可选的主签名密钥和次签名密钥；签名无效或过期的请求以 401 响应被拒绝。未配置签名密钥的现有工作流不变继续工作。
* [Snowflake Node: Add OAuth2 credential support](https://github.com/n8n-io/n8n/pull/29391)（Snowflake 节点：新增 OAuth2 凭证支持）：Snowflake 节点现在支持 OAuth2 认证（PKCE 流程），作为用户名/密码和密钥对凭证的替代方案。添加一个带账号、仓库、数据库和模式的 Snowflake OAuth2 API 凭证，然后通过 OAuth2 连接授权并使用生成的令牌运行查询。角色通过 OAuth 作用域指定，而不是单独的字段。
* [Add Workflow Publish Timeline tab to Workflow History](https://github.com/n8n-io/n8n/pull/26907)（为工作流历史添加 Workflow Publish Timeline 选项卡）：工作流历史现在包含一个 Publish Timeline（发布时间线）选项卡，显示工作流何时被发布或取消发布的按时间顺序视图，包括版本名称和谁做的更改。该选项卡只出现在至少发布过一次的工作流上，否则显示空状态。Publish 下拉菜单中新增 'View timeline（查看时间线）' 项，直接链接到该选项卡。
* [Move MCP Client Tool into the MCP category](https://github.com/n8n-io/n8n/pull/30441)（把 MCP Client Tool 移入 MCP 类别）：AI > Tools 面板已重组：MCP Client Tool 节点现在出现在重命名的 'MCP servers' 部分下，而不是 Recommended Tools 中，并带分隔线列在 MCP 服务器首位。部分标题和描述已更新以更清晰，MCP 服务器超过 8 个时其下方会出现搜索栏。
* [NocoDB Node: Add new data apis and use new api version](https://github.com/n8n-io/n8n/pull/18626)（NocoDB 节点：新增数据 API 并使用新的 API 版本）：NocoDB 节点已更新到新版本 4，支持 NocoDB API 版本 v0.200 和 v0.260。现有的行操作（Create、Update、Delete、Get、Get Many）继续受支持，而新的 v0.260 API 新增 Create or Update（upsert）、Row Count、Row Upload、Base Get/Get Many 以及链接行 list、link 和 unlink 操作。
* [Add instance-level data redaction policy UI](https://github.com/n8n-io/n8n/pull/30303)（新增实例级数据脱敏策略 UI）：在 Settings → Security & Policies 中新增 Data Redaction 部分，让管理员跨执行强制执行脱敏并选择作用域（manual、production 或 both）。仅在环境功能开关后面可用，需要包含数据脱敏的许可证，并在环境管理的实例上禁用。注意：此版本中该 UI 只是前端；后端 API 接线计划作为后续工作。

---

## `n8n 2.21` 跨触发器节点新增 Webhook 签名验证，另加 23 项其他功能

**发布时间：** 2026-05-12

* [Figma Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29262)（Figma Trigger 节点：新增 webhook 请求验证）：Figma Trigger 节点现在通过检查 webhook 创建时生成的 passcode（使用恒定时间比较）来验证传入的 webhook 请求。缺少或不正确 passcode 的请求以 401 Unauthorized 被拒绝，帮助防止伪造的 webhook 调用。此更改之前创建的 webhook 不变继续工作，因为未存储 passcode 时跳过验证。
* [Taiga Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29487)（Taiga Trigger 节点：新增 webhook 请求验证）：Taiga Trigger 节点现在使用 X-TAIGA-WEBHOOK-SIGNATURE 请求头和存储在工作流数据中的每 webhook 密钥来验证传入的 webhook 请求。签名无效的请求以 401 Unauthorized 响应被拒绝，提高对伪造 webhook 调用的安全性。没有存储密钥的现有工作流不变继续工作，确保向后兼容。
* [Acuity Scheduling Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29261)（Acuity Scheduling Trigger 节点：新增 webhook 请求验证）：Acuity Scheduling Trigger 节点现在通过对照 x-acuity-signature 请求头检查 HMAC SHA-256 签名来验证传入的 webhook 请求，使用配置的 API 密钥作为共享密钥。签名无效的请求以 401 Unauthorized 响应被拒绝。使用 OAuth2 认证或没有 API 密钥时跳过验证，与现有设置保持向后兼容。
* [Asana Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29258)（Asana Trigger 节点：新增 webhook 请求验证）：Asana Trigger 节点现在通过对照 X-Hook-Signature 请求头检查 HMAC SHA-256 摘要（使用 webhook 设置期间交换的密钥计算）来验证传入的 webhook 请求。签名缺失或无效的请求以 401 Unauthorized 响应被拒绝，提高对伪造或篡改 webhook 调用的安全性。此更改之前创建的现有 webhook 不受影响继续工作，因为未存储密钥时跳过验证。
* [Cal Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29484)（Cal Trigger 节点：新增 webhook 请求验证）：Cal Trigger 节点现在使用 HMAC SHA-256 签名通过 X-Cal-Signature-256 请求头验证传入的 Cal.com webhook 请求。创建 webhook 时自动生成签名密钥并存储在工作流数据中，防止未经授权或伪造的请求。签名无效的请求以 401 响应被拒绝。此更新之前创建的现有 webhook 无需更改继续工作。
* [Cap eval concurrency slider at admin-set limit](https://github.com/n8n-io/n8n/pull/29807)（把评估并发滑块限制在管理员设置的上限）：评估结果页面的并发滑块现在尊重管理员配置的 N8N_CONCURRENCY_EVALUATION_LIMIT 环境变量。以前滑块总是允许 1-10 的值，即使后端会静默地把实际并发限制在更低。现在滑块的最大值调整为匹配配置的限制（仍封顶 10），让用户只能看到和选择后端真正会接受的值。在应用限制之前存储的偏好会保留，如果之后提高上限会重新出现。
* [Customer.io Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29480)（Customer.io Trigger 节点：新增 webhook 请求验证）：Customer.io Trigger 节点现在使用 HMAC-SHA256 签名验证（对照 X-CIO-Signature 请求头）验证传入的报表 webhook 请求。Customer.io API 凭证新增可选的 Webhook Signing Key（webhook 签名密钥）字段，可在 Customer.io 仪表板的 Integrations > Reporting webhooks 下找到。签名无效的请求以 401 响应被拒绝，并通过 5 分钟时间戳窗口缓解重放攻击。未配置签名密钥的现有工作流不变继续工作。
* [Figma Trigger Node: Add OAuth2 authentication support](https://github.com/n8n-io/n8n/pull/30079)（Figma Trigger 节点：新增 OAuth2 认证支持）：Figma Trigger 节点现在支持 OAuth2 认证，除现有的个人访问令牌外。新的认证选择器让用户在 Access Token（默认，保留现有工作流）或 OAuth2 之间选择，使用带 webhook 管理默认作用域和自定义作用域选项的新 Figma OAuth2 凭证。
* [Formstack Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29495)（Formstack Trigger 节点：新增 webhook 请求验证）：Formstack Trigger 节点现在使用 HMAC SHA-256 签名验证传入的 webhook 请求。创建 webhook 时，n8n 生成密钥并在 Formstack 注册；传入请求对照 X-FS-Signature 请求头检查，无效请求以 401 响应被拒绝。没有存储密钥的现有 webhook 继续未验证工作，webhook 删除时密钥会被清理。
* [GitLab Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29260)（GitLab Trigger 节点：新增 webhook 请求验证）：GitLab Trigger 节点现在验证传入的 webhook 请求。创建 webhook 时，n8n 生成随机密钥令牌并在 GitLab 注册；传入请求对照 X-Gitlab-Token 请求头使用恒定时间比较检查，不匹配以 401 Unauthorized 拒绝。没有存储密钥的现有 webhook 不变继续工作，因此这提高了安全性而不破坏当前设置。
* [MailerLite Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29491)（MailerLite Trigger 节点：新增 webhook 请求验证）：MailerLite Trigger 节点现在使用 HMAC-SHA256 签名验证验证传入的 webhook 请求。创建 webhook 时，n8n 存储 MailerLite 提供的密钥，并在每个传入请求上对照 Signature 请求头检查，无效请求以 401 响应被拒绝。此更改之前创建的现有工作流继续无中断工作，因为未存储密钥时跳过验证。
* [Mautic Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29658)（Mautic Trigger 节点：新增 webhook 请求验证）：Mautic Trigger 节点现在验证传入的 webhook 请求。创建 webhook 时，n8n 生成随机 HMAC-SHA256 密钥并在 Mautic 注册；传入请求对照 Webhook-Signature 请求头使用恒定时间比较检查，无效请求以 401 拒绝。没有存储密钥的现有 webhook 不变继续工作，因此这提高了安全性而不破坏当前设置。
* [Microsoft Outlook Node: Add location and attendees fields to calendar events](https://github.com/n8n-io/n8n/pull/29844)（Microsoft Outlook 节点：为日历事件添加 location 和 attendees 字段）：Microsoft Outlook 节点的 Create 和 Update Event 操作现在在 Additional Fields 下支持 Location（位置）和 Attendees（与会者）字段。Location 接受自由文本，如会议室名称、地址或会议链接。Attendees 是多值字段，用于添加一个或多个带邮箱、可选姓名和 Required/Optional/Resource 类型的人。两个字段都是可选的，不影响现有工作流。
* [Onfleet Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29485)（Onfleet Trigger 节点：新增 webhook 请求验证）：Onfleet Trigger 节点现在支持使用 HMAC-SHA512 签名验证传入的 webhook 请求。Onfleet API 凭证新增可选的 Signing Secret（签名密钥）字段；设置后，n8n 对照请求体验证签名头，不匹配以 401 响应拒绝。未配置密钥时跳过验证，因此现有工作流不变继续工作。Onfleet 的设置验证请求仍绕过签名检查。
* [Strava Node: Allow custom OAuth2 scopes](https://github.com/n8n-io/n8n/pull/29972)（Strava 节点：允许自定义 OAuth2 作用域）：Strava 的 OAuth2 凭证现在支持自定义作用域。新的 'Custom Scopes' 开关显示可编辑的 'Enabled Scopes' 字段，让用户请求额外权限，如 profile:read_all 或 read_all，超出默认的 activity:read_all 和 activity:write。现有凭证不变继续工作，因为开关关闭时默认行为被保留。
* [Trello Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29252)（Trello Trigger 节点：新增 webhook 请求验证）：Trello Trigger 节点现在使用 HMAC-SHA1 签名验证验证传入的 webhook 请求。Trello API 凭证上的 OAuth Secret 字段现在可编辑，让用户输入他们的 Power-Up 密钥，以便 n8n 确认请求真正来自 Trello。签名无效的请求以 401 响应被拒绝。未配置密钥的工作流照常工作，不受影响。
* [Add fully dynamic disclaimer to Quick Connect offer](https://github.com/n8n-io/n8n/pull/29852)（为 Quick Connect 提供项添加完全动态的免责声明）：通过 N8N_QUICK_CONNECT_OPTIONS 配置的 Quick Connect 提供项现在可以包含可选的带文本和链接的免责声明，让管理员向 Quick Connect 提示添加条款或法律声明。免责声明出现在凭证编辑视图、节点详情视图、社区节点信息和节点创建器操作面板中现有提供文本的下方，链接文本和 URL 可按提供项配置。
* [Microsoft Outlook Node: Add support for recurring event instances](https://github.com/n8n-io/n8n/pull/29802)（Microsoft Outlook 节点：新增对重复事件实例的支持）：Microsoft Outlook 节点的 Get Many Events 操作现在包含 'Include Recurring Event Instances（包含重复事件实例）' 开关。启用后，它使用 Microsoft Graph 的 calendarView 端点，带指定的开始和结束日期，把重复事件展开为单个事件实例，而不是只返回系列主事件。开关默认关闭，保留之前的行为。
* [Twilio Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29259)（Twilio Trigger 节点：新增 webhook 请求验证）：Twilio Trigger 节点现在使用 Twilio 的 Event Streams 签名方案验证传入的 webhook 请求，通过 SHA-256 哈希检查请求体完整性，并通过对照 auth token 的 HMAC-SHA1 签名检查真实性。验证失败的请求以 401 响应被拒绝。使用 API Key 认证（没有 auth token 可用）时跳过验证，为现有工作流保持向后兼容。
* [Calendly Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29482)（Calendly Trigger 节点：新增 webhook 请求验证）：Calendly Trigger 节点现在使用 HMAC-SHA256 签名验证验证传入的 webhook 请求。创建 webhook 订阅时生成唯一签名密钥并存储在工作流中，然后用于检查每个请求上的 Calendly-Webhook-Signature 请求头，无效请求以 401 响应被拒绝。此更改之前创建的现有 webhook 继续未验证工作，以保持向后兼容。
* [Show locked state and permission notice on data redaction workflow settings](https://github.com/n8n-io/n8n/pull/30022)（在数据脱敏工作流设置上显示锁定状态和权限提示）：工作流设置中的数据脱敏设置不再对无权更改的用户隐藏。控件改为显示为禁用，带锁图标和解释权限要求的工具提示，外加一个链接到列出可编辑该设置的项目成员的新弹窗。
* [Jira Node: Add OAuth2 (3LO) support](https://github.com/n8n-io/n8n/pull/29414)（Jira 节点：新增 OAuth2 (3LO) 支持）：Jira 节点和 Jira Trigger 现在支持通过新的 'Cloud (OAuth2)' 选项进行 OAuth2 Authorization Code (3LO) 认证，与现有的 Cloud (API token)、Server 和 Server PAT 模式并列。新的 Jira SW Cloud OAuth2 API 凭证处理 Atlassian 的认证流程，自动解析所需的 cloudId，触发器支持用于 OAuth2 连接的 Dynamic Webhooks，带有限的事件集。
* [Redesign evaluation run detail page](https://github.com/n8n-io/n8n/pull/29592)（重新设计评估运行详情页）：评估运行详情页已用更清晰的布局重新设计：带百分比分数和与上次运行相比趋势差的指标摘要卡片、类别徽章（AI-based、String similarity、Categorization、Tools used、Custom）带源节点工具提示，以及重新样式的每测试用例部分，带查看执行的快捷链接。还修复了点击 'Run test（运行测试）' 可能因缺失工作流 ID 而失败的 bug，测试运行查找现在按工作流正确限定范围以保障安全。
* [Eval run detail loading + error states (TRUST-70 follow-up)](https://github.com/n8n-io/n8n/pull/29817)（评估运行详情加载和错误状态（TRUST-70 后续））：评估测试运行详情页现在显示实时状态：运行级状态胶囊、带旋转器和微光动画的每用例 running/pending/failed/cancelled 状态、失败用例的 Re-run（重新运行）按钮，以及待处理用例的 Cancel（取消）按钮。后端现在预先播种待处理用例行并原子性地认领它们，实现排队用例的抢先取消，并在启动运行时立即返回新的运行 ID。
---

## `n8n 2.20` Netlify Trigger 节点验证 webhook 请求，另加 6 项其他功能

**发布时间：** 2026-05-05

* [Netlify Trigger Node: Add webhook request verification](https://github.com/n8n-io/n8n/pull/29256)（Netlify Trigger 节点：新增 webhook 请求验证）：Netlify Trigger 节点现在验证传入的 webhook 请求。创建 hook 时生成签名密钥并存储在工作流中，然后用于验证 X-Webhook-Signature 请求头中的 JWT，并确认请求体的 SHA-256 摘要匹配。验证失败的请求收到 401 响应。此更新之前创建的现有 hooks 继续未验证工作。
* [Slack Node: Allow users to configure OAuth2 scopes](https://github.com/n8n-io/n8n/pull/28728)（Slack 节点：允许用户配置 OAuth2 作用域）：Slack OAuth2 凭证现在让用户自定义请求的 OAuth 作用域。默认情况下行为不变，自动请求相同的完整用户作用域集。启用新的 'Custom Scopes' 开关会显示可编辑的 User Scope（用户作用域）字段，允许用户连接 Slack 账号时限制或自定义请求哪些权限。
* [Add environment variable to disable workflow autosave](https://github.com/n8n-io/n8n/pull/25144)（新增禁用工作流自动保存的环境变量）：新增 N8N_WORKFLOWS_AUTOSAVE_DISABLED 环境变量，让自托管用户禁用编辑器中的工作流自动保存。启用后，工作流头部出现 Save（保存）按钮，Ctrl+S（Mac 上 Cmd+S）触发手动保存而不是自动保存。还改进了协作处理：当本地编辑未保存而工作流在远端被更新时，会警告用户，而不是静默丢弃更改。
* [Add reveal redacted data permission to custom roles execution section](https://github.com/n8n-io/n8n/pull/29526)（为自定义角色执行部分添加 reveal redacted data 权限）：自定义角色现在包含 Executions（执行）部分，带 'Reveal redacted data（揭示脱敏数据）' 权限，让管理员按角色控制用户是否可以在启用数据脱敏的工作流上揭示脱敏执行数据。以前这只能用于固定的 admin/owner 角色。现有 admin 和个人项目 owner 角色保持 reveal 访问不变；这是 Enterprise 自定义角色功能。
* [Add transition on Sidebar collapsed](https://github.com/n8n-io/n8n/pull/29650)（侧边栏折叠添加过渡动画）：主侧边栏在折叠、展开或调整大小时现在平滑动画，让布局变化更精致。手动拖拽调整侧边栏大小时过渡自动禁用，保持响应性并防止滞后于光标。
* [Track IdP role mapping in provisioning telemetry](https://github.com/n8n-io/n8n/pull/29416)（在配置遥测中跟踪 IdP 角色映射）：SSO 角色配置的内部遥测已扩展。n8n 现在跟踪角色映射使用的是基于 IdP 的规则还是 n8n 定义的规则，以及配置的实例和项目级规则数量，并在角色分配或映射设置更改、或添加/移除规则时记录。这是内部分析变更，对面向用户的功能没有可见影响。
* [Update copy for mcp settings](https://github.com/n8n-io/n8n/pull/29399)（更新 MCP 设置的文案）：更新了实例级 MCP 设置页面的措辞。描述和标题现在强调连接 Claude Code 和 Cursor 等 MCP 客户端来构建、运行和迭代工作流，而不只是发现和执行它们，给用户更清晰的 MCP 集成能做什么的信息。

---

## `n8n 2.19` 新增独立 MiniMax 节点，另加 10 项其他功能

**发布时间：** 2026-04-28

* [Add Delete permanently link to workflow archive toast](https://github.com/n8n-io/n8n/pull/29157)（为工作流归档 toast 添加 Delete permanently 链接）：归档工作流时，成功 toast 现在包含 'Delete permanently（永久删除）' 链接，打开标准删除确认弹窗，让你立即永久移除工作流，而无需导航到其他地方。这在工作流列表和编辑器头部都可用。
* [AwsS3 Node: Add option to return common prefixes in bucket search](https://github.com/n8n-io/n8n/pull/28571)（AWS S3 节点：新增在桶搜索中返回公共前缀的选项）：AWS S3 节点的桶搜索操作现在在 Additional Fields 下有 'Include Common Prefixes（包含公共前缀）' 选项（默认关闭）。与 Delimiter 一起启用时，节点返回 S3 分组的 'virtual folder（虚拟文件夹）' 前缀，而不是单独的对象内容，实现浅层目录式列表。这适用于 return-all 和分页两条代码路径。
* [Google Drive Node: Add Markdown export option for Google Docs download](https://github.com/n8n-io/n8n/pull/27006)（Google Drive 节点：为 Google Docs 下载添加 Markdown 导出选项）：Google Drive 节点的 Download 操作现在让你直接从 Google Docs 转换下拉列表把 Google Docs 导出为 Markdown (.md)，无需手动编写 MIME 类型表达式。以前 UI 中只有 HTML 和 MS Word 等格式；text/markdown 现在是一等选项，与 Google Drive 支持的导出格式一致。
* [Postgres Node: Sort PostgreSQL schemas and tables alphabetically when fetching](https://github.com/n8n-io/n8n/pull/28036)（Postgres 节点：获取时按字母顺序排序 PostgreSQL 模式和表）：在 Postgres 节点中，配置节点时显示的模式和表列表现在按字母顺序出现，而不是不可预测的数据库相关顺序，更容易找到需要的模式或表。
* [Salesforce Node: Add middle name, suffix, and identity fields to contacts](https://github.com/n8n-io/n8n/pull/23905)（Salesforce 节点：为联系人添加中间名、后缀和身份字段）：Salesforce 节点的 Create 和 Update Contact 操作现在支持额外字段：Middle Name（中间名）、Suffix（后缀）、Email Opt Out（邮件退订）、Pronouns（代词）和 Gender Identity（性别认同）。这些直接映射到相应的 Salesforce Contact API 字段，让用户捕获更完整的联系人信息，包括某些地区常用的中间名。
* [Slack Node: Add emoji reaction filter to Slack Trigger](https://github.com/n8n-io/n8n/pull/28628)（Slack 节点：为 Slack Trigger 添加表情反应过滤器）：Slack Trigger 节点现在在 Options 下支持可选的 'Emoji Names to Filter（要过滤的表情名称）' 字段，当 Trigger On 设置为 Reaction Added 时可用。设置后，只有匹配逗号分隔、不区分大小写的表情名称列表的 reaction_added 事件才会启动工作流，让用户在高流量工作区减少不必要的执行。字段留空保留现有行为，对所有反应触发。
* [Warn when data table cell value exceeds safe integer range](https://github.com/n8n-io/n8n/pull/28904)（数据表单元格值超过安全整数范围时警告）：数据表现在在数字列中输入的数字超过 JavaScript 的安全整数范围（9,007,199,254,740,991）时警告你。值仍会成功保存，但会出现警告 toast，说明精度可能丢失，并建议如果需要精确值，把大数字存储为文本。范围内的值不触发警告。
* [Alibaba Cloud Node: Switch to dynamic model list fetched from API](https://github.com/n8n-io/n8n/pull/28839)（阿里云节点：切换到从 API 获取的动态模型列表）：阿里云百炼节点现在从 DashScope API 动态获取可用模型，而不是使用硬编码的下拉列表。Text、Image 和 Video 操作各自显示过滤到相关类别的模型，你仍然可以手动输入自定义模型 ID。这在新的节点版本 1.1 中可用；使用版本 1 的现有工作流保留静态下拉列表以保持向后兼容。
* [Google Gemini Node: Gemini default models update](https://github.com/n8n-io/n8n/pull/28853)（Google Gemini 节点：Gemini 默认模型更新）：更新了 Google Gemini 节点的默认 Gemini 模型：Chat Model 节点的 LLM 现在默认 models/gemini-3-flash-preview，Google Gemini 节点的 Text Message 操作默认 models/gemini-3-flash-preview，其 Image Generate 操作默认 models/gemini-3.1-flash-image-preview（Nano Banana 2）。现有工作流通过版本化节点更新保留之前配置的模型；只有新节点获得更新的默认值。
* [Track favorite toggle events](https://github.com/n8n-io/n8n/pull/28810)（跟踪收藏切换事件）：n8n 现在在用户收藏或取消收藏项目（工作流、项目、文件夹或数据表）时跟踪内部遥测，记录是添加还是移除以及资源类型。这是帮助改进产品的后端分析变更；它只在成功切换后触发，不添加任何对用户可见的功能或 UI 变化。
* [MiniMax Node: Add standalone MiniMax vendor node](https://github.com/n8n-io/n8n/pull/28748)（MiniMax 节点：新增独立 MiniMax 厂商节点）：为 LangChain 包新增独立 MiniMax 节点，提供四个资源：Text（聊天补全，带工具调用、令牌跟踪和推理显示）、Image（文生图，带可配置宽高比）、Video（文生视频和图生视频，带异步轮询）和 Audio（文本转语音，带多种声音和情感/速度/音调控制）。使用现有的 MiniMax API 凭证。

---

## `n8n 2.18.5` 发布时对 AI 网关凭证发出警告，另加 2 项其他功能

**发布时间：** 2026-04-29

* [Add warning when publishing workflow, if some nodes in it are using ai gateway credentials](https://github.com/n8n-io/n8n/pull/29174)（发布工作流时，如果其中某些节点使用 AI 网关凭证则发出警告）：发布工作流时，如果任何活跃节点使用 n8n Connect（AI 网关）凭证，n8n 现在会显示警告，点名受影响的节点并说明一旦 AI 网关余额耗尽，工作流将停止工作。这帮助用户在发布前识别依赖网关积分的工作流。
* [In the n8n Connect table on row click open execution related to that usage row](https://github.com/n8n-io/n8n/pull/29195)（在 n8n Connect 表中点击行时打开与该使用行相关的执行）：在 AI 网关使用表（Settings > n8n Connect）中，点击一行现在会打开与该使用条目关联的执行（如果可用）。这是由网关现在记录每个 AI 请求背后的工作流和执行 ID 驱动的，让用户可以把使用情况追溯回生成它的工作流运行。
* [OpenAI Node: Use dynamic model selection for image edit and update analyze model filter](https://github.com/n8n-io/n8n/pull/29330)（OpenAI 节点：图像编辑使用动态模型选择并更新分析模型过滤器）：OpenAI 节点的 Image Edit（图像编辑）操作（新版本 2.3）现在让你从 OpenAI 账号动态选择模型，而不是固定的 dall-e-2/gpt-image-1 列表，与 Generate 操作一致。早期版本的现有工作流保留旧下拉列表。Analyze Image 模型过滤器也已扩大，以呈现更多视觉能力模型（gpt-5、gpt-4.1、gpt-4-turbo、o1/o3/o4-mini、chatgpt-4o 变体），同时排除无关的模型变体。

---

## `n8n 2.18` 项目、文件夹、工作流和数据表的收藏，另加 4 项其他功能

**发布时间：** 2026-04-21

* [Slack Node: Add app_home_opened as a dedicated trigger event](https://github.com/n8n-io/n8n/pull/28626)（Slack 节点：新增 app_home_opened 作为专用触发器事件）：Slack Trigger 节点现在支持 'App Home Opened' 作为专用、可选择的事件类型。以前，对该事件触发需要选择 'Any Event（任意事件）' 并在下游过滤，这会让每个 Slack 事件都消耗一次执行。现在用户可以订阅 app_home_opened，减少不必要的执行。该事件跳过频道验证，因为它是工作区范围的，而不是绑定到特定频道。
* [Linear Trigger Node: Add signing secret validation](https://github.com/n8n-io/n8n/pull/28522)（Linear Trigger 节点：新增签名密钥验证）：Linear API 和 OAuth2 凭证现在包含可选的 Signing Secret（签名密钥）字段。设置后，Linear Trigger 节点通过验证 Linear-Signature 请求头（HMAC-SHA256）并检查 webhook 时间戳在 60 秒窗口内，来验证传入的 webhook 请求，帮助确保 webhook 真正来自 Linear。未配置签名密钥时跳过验证，现有工作流不变继续工作。
* [MiniMax Chat Model Node: Add MiniMax Chat Model sub-node](https://github.com/n8n-io/n8n/pull/28305)（MiniMax Chat Model 节点：新增 MiniMax Chat Model 子节点）：新增 MiniMax Chat Model 子节点，用于 AI Agent 和 Chain 工作流，连接到 MiniMax 兼容 OpenAI 的 API。包括带区域选择（International/China）和连接测试的新 MiniMax 凭证、对 7 个 MiniMax 模型的支持，以及 Hide Thinking 选项（默认启用），从响应中剥离思维链推理。
* [Enable workflow execution from instance AI preview canvas](https://github.com/n8n-io/n8n/pull/28412)（允许从实例 AI 预览画布执行工作流）：你现在可以直接从只读的 AI 预览画布运行工作流，而不仅仅是查看它们。预览支持 Run（运行）按钮、按节点运行按钮和键盘快捷键，有执行数据可用时节点输出选项卡自动选中。这专门适用于实例 AI 预览 iframe 体验。
* [Add favoriting for projects, folders, workflows and data tables](https://github.com/n8n-io/n8n/pull/26228)（新增项目、文件夹、工作流和数据表的收藏）：你现在可以收藏项目、文件夹、工作流和数据表，标记它们以便快速访问。收藏通过新的 API 端点添加或移除，底层资源被删除时自动清理。注意，此版本中收藏在 UI 中的可发现性有限，后续更新中计划进一步改进。

---

## `n8n 2.17` 新增 Moonshot Kimi 和阿里云百炼节点，另加 5 项其他功能

**发布时间：** 2026-04-13

* [Disable manual role management when expression-based mapping is enabled](https://github.com/n8n-io/n8n/pull/28105)（启用基于表达式的映射时禁用手动角色管理）：当实例或项目角色被自动管理（由 SSO 提供商的配置设置或基于表达式的角色映射规则）时，n8n 现在在 API 层面阻止手动角色更改，而不仅仅是在 UI 中。通过 users 或 project members 端点更改角色的尝试返回 403 错误。Settings > Users 和 Project > Settings 页面也显示更清晰、更明确的横幅，解释是 SSO 还是表达式映射在控制角色。
* [MCP Client Tool Node: Prefix MCP tool names with server name](https://github.com/n8n-io/n8n/pull/28094)（MCP Client Tool 节点：用服务器名作为 MCP 工具名称前缀）：MCP Client Tool 节点现在用清洗后的节点名称作为暴露给 AI agent 的工具名称前缀（例如 MCP_Client_get_weather），防止多个 MCP 服务器连接到同一个 agent 时发生命名冲突。原始、无前缀的工具名称仍会发送给 MCP 服务器本身，因此服务器端行为不变。
* [Moonshot Kimi Chat Model Node: Add Moonshot Kimi Chat Model sub-node](https://github.com/n8n-io/n8n/pull/28156)（Moonshot Kimi Chat Model 节点：新增 Moonshot Kimi Chat Model 子节点）：新增 Moonshot Kimi Chat Model 子节点，用于把 AI Agent 和 chain 工作流连接到 Moonshot AI 兼容 OpenAI 的 API。包括带 API 密钥认证（国际和中国端点）的新 Moonshot 凭证、动态模型加载，以及温度、top-p、惩罚、最大令牌、响应格式、超时和重试等可配置选项。默认模型为 kimi-k2.5。
* [Moonshot Kimi Node: Add new node](https://github.com/n8n-io/n8n/pull/28189)（Moonshot Kimi 节点：新增节点）：新增 Moonshot Kimi 节点，用于与 Moonshot AI 模型交互。它支持带系统提示词的消息模型、多轮聊天、工具调用、内置网页搜索、思考模式、JSON 响应和图像附件，外加用于二进制图像输入的专用图像分析操作。模型从 Moonshot API 动态选择，节点复用现有的 Moonshot 凭证。
* [Alibaba Cloud Model Studio Node: Add new node](https://github.com/n8n-io/n8n/pull/27928)（阿里云百炼节点：新增节点）：新增阿里云百炼节点，为 n8n 带来通义（Qwen）模型支持。它支持文本聊天补全（多轮对话、网页搜索和 AI Agent 工具使用）、图像分析和生成（Qwen-VL、Z-Image Turbo、Wan 2.6、Qwen Image），以及文本/图像转视频生成（Wan 2.6）。使用带区域和工作区选择的共享阿里云凭证。
* [Refactor role provisioning to two-dropdown layout](https://github.com/n8n-io/n8n/pull/28024)（把角色配置重构为双下拉布局）：SSO 设置现在把角色配置拆分为两个更清晰的下拉列表：Role assignment（角色分配：manual、instance roles via SSO，或 instance and project roles via SSO），以及（适用时）Role mapping method（角色映射方法：通过 IdP 映射或在 n8n 内部映射规则）。选项显示描述性文本，基于 IdP 的映射出现信息提示，只显示与你选择相关的规则编辑器。重新加载设置时保留现有配置。

---

## `n8n 2.16` Notion 节点支持 OAuth 认证，另加 4 项其他功能

**发布时间：** 2026-04-07

* [Put data redaction settings behind enterprise license](https://github.com/n8n-io/n8n/pull/28001)（把数据脱敏设置放到企业许可证后面）：工作流数据脱敏设置现在由企业许可证（feat:dataRedaction）门控。没有许可证时，redactionPolicy 会从工作流创建/更新请求中静默剥离，执行期间现有脱敏策略被视为 'none'。在编辑器中，脱敏设置显示为灰色并带链接到定价或计费页面的 Upgrade 徽章。有许可证的实例行为不变。
* [Alibaba Cloud Chat Model Node: Add new node](https://github.com/n8n-io/n8n/pull/27882)（阿里云 Chat Model 节点：新增节点）：为 AI Agent 新增阿里云 Chat Model 子节点，连接到 DashScope 兼容 OpenAI 的 API。它支持多个区域（包括需要 Workspace ID 的德国端点）、动态模型加载（默认 qwen-plus），以及温度、top-p、惩罚、最大令牌、响应格式、超时和重试等可配置选项。需要新的阿里云 API 凭证。
* [Notion Node: Add support for OAuth](https://github.com/n8n-io/n8n/pull/27419)（Notion 节点：新增 OAuth 支持）：Notion 节点和 Notion Trigger 节点现在支持 OAuth2 认证，除现有的 API 密钥方法外。用户可以选择 Authentication 选项在 API Key 和 OAuth2 之间选择，从而使用 OAuth 凭证连接 Notion，而不是手动管理集成令牌。
* [Chat Trigger Node: Auto-add highlighted execution data](https://github.com/n8n-io/n8n/pull/18778)（Chat Trigger 节点：自动添加高亮执行数据）：Chat Trigger、Respond To Chat 和 Tools Agent 节点现在自动保存高亮执行数据，如聊天输入、响应文本和会话 ID，使用从节点名称派生的键。这些数据可用于在 Executions 视图中过滤执行。每个节点都包含一个新选项来禁用此行为，默认启用。未来的版本将支持更多节点。
* [Add missing agent permissions for workflow and data table actions](https://github.com/n8n-io/n8n/pull/27927)（为工作流和数据表操作添加缺失的 agent 权限）：n8n Agent 权限设置现在包含创建和更新工作流、删除数据表的控件。这些加入现有的 agent 权限，默认要求 agent 执行前获得你的批准。每个权限的开关都已添加到实例 AI 设置页面，让管理员在需要时自动允许这些操作。

---

## `n8n 2.15` WordPress 节点新增 OAuth2 支持，另加 3 项其他功能

**发布时间：** 2026-03-30

* [Wordpress Node: Add support for OAuth2](https://github.com/n8n-io/n8n/pull/27113)（WordPress 节点：新增 OAuth2 支持）：WordPress 节点现在支持 OAuth2 认证，除现有的 Basic Auth 外。OAuth2 只适用于 WordPress.com 托管的站点，需要一个 WordPress.com 站点标识符。新的认证选择器让用户在 Basic Auth 和 OAuth2 (WordPress.com) 之间选择，请求自动路由到相应的 WordPress.com 或自托管 API 端点。
* [Zammad Node: Add support for updating tickets](https://github.com/n8n-io/n8n/pull/16800)（Zammad 节点：新增更新工单支持）：Zammad 节点现在支持 Update Ticket 操作。你可以更新工单的标题、组、状态、优先级、owner、客户、待处理时间和自定义字段，并添加内部备注。新的下拉选项从你的 Zammad 实例动态填充状态、优先级、组、owner 和客户。
* [Add canvas-only mode](https://github.com/n8n-io/n8n/pull/27184)（新增仅画布模式）：新增 N8N_CANVAS_ONLY 环境变量，启用仅画布模式，在工作流视图中隐藏头部、侧边栏和助手按钮、聊天浮层等覆盖元素。这让用户可以在极简、无干扰的布局中嵌入或查看工作流画布。未设置变量时默认行为不变。
* [Support error workflows in workflow dependency](https://github.com/n8n-io/n8n/pull/27542)（在工作流依赖中支持错误工作流）：工作流依赖跟踪器和依赖 UI 现在识别错误工作流关系。如果工作流在其设置中配置了错误工作流，这会被跟踪为依赖，反向关系（哪些工作流把给定工作流用作错误处理程序）也会显示。依赖面板把这些显示为新的 'Error workflow（错误工作流）' 和 'Error handler for（错误处理程序服务于）' 条目，让用户直接导航到相关工作流。

---

## `n8n 2.14` 新 Databricks 节点带完整 API 支持，另加 8 项其他功能

**发布时间：** 2026-03-24

* [Add new execution filter by workflow version](https://github.com/n8n-io/n8n/pull/26904)（新增按工作流版本的执行过滤器）：你现在可以按执行所针对的特定工作流版本过滤工作流执行。执行过滤器面板新增 Version（版本）选择器，列出带名称（或 "Autosave（自动保存）"）和时间戳的版本，首次打开过滤器时加载。选择版本会把结果缩小到在该确切版本上运行的执行；如果没有版本数据，选择器被禁用。
* [databricks Node: Add basic databricks node](https://github.com/n8n-io/n8n/pull/27004)（databricks 节点：新增基础 Databricks 节点）：新增 Databricks 节点，支持 Databricks SQL（执行语句并把结果作为条目返回）、Unity Catalog（管理目录、模式、表、卷、函数）、Model Serving（查询 ML 端点，带自动输入格式检测）、Genie（AI 数据助手对话和查询结果）、Files（在 Unity Catalog 卷中上传、下载、删除、列出文件和目录）和 Vector Search（创建、查询和管理向量索引）。同时支持访问令牌和 OAuth2 凭证。
* [Perplexity Node: Update Perplexity node for full API coverage](https://github.com/n8n-io/n8n/pull/26970)（Perplexity 节点：更新节点以实现完整 API 覆盖）：Perplexity 节点现在支持版本 2，提供完整 API 覆盖，同时保持 v1 工作流兼容。新资源包括 Agent（通过 Perplexity 的 Agent API 的第三方模型响应）、Search（原始网页搜索结果）和 Embeddings（包括上下文嵌入）。Chat completions 获得许多新选项，如搜索模式、日期和语言过滤器、推理强度和结构化输出。还修复了错误的 search_recency_filter 参数，并移除了损坏的 sonar-reasoning 模型。
* [Add history version info to execution page](https://github.com/n8n-io/n8n/pull/26768)（在执行页面添加历史版本信息）：执行详情页现在显示执行运行在哪个工作流历史版本上，标签为其自定义名称或 'Autosave'，工具提示中包含创建日期。点击标签直接链接到工作流历史视图中的该版本，更容易追溯哪个工作流状态产生了给定的执行结果。
* [Microsoft Agent 365 Trigger Node: Mcp tools logs](https://github.com/n8n-io/n8n/pull/27215)（Microsoft Agent 365 Trigger 节点：MCP 工具日志）：Microsoft Agent 365 Trigger 节点现在捕获 Microsoft MCP 工具调用的日志，包括服务器和工具名称、输入、输出、错误状态、持续时间和时间戳，并作为 microsoftMcpToolLogs 附加到节点的 activity 输出。这让用户在 n8n 执行数据中直接看到 agent 运行期间调用了哪些 MCP 工具及其结果。该节点还扩展了受支持的 Microsoft MCP 服务器列表。
* [Use server-side search for project sharing dropdowns](https://github.com/n8n-io/n8n/pull/27093)（项目共享下拉列表使用服务器端搜索）：项目选择下拉列表（用于共享工作流/凭证、移动资源、过滤等）现在使用带防抖查询的服务器端搜索，而不是一开始就把所有项目加载到浏览器中。这修复了用户或项目数量庞大的实例的 UI 冻结，并在存在超过显示数量的结果时显示指示器。
* [Show redacted state in execution viewer with reveal flow](https://github.com/n8n-io/n8n/pull/26543)（在执行查看器中显示脱敏状态并带揭示流程）：当工作流的脱敏策略隐藏执行数据时，Node Details View 现在在输入/输出面板上显示解释原因的锁图标，而不是空白数据。授权用户（带 execution:reveal 作用域）可以点击 'Reveal data（揭示数据）'、确认警告弹窗并查看未脱敏数据。使用动态凭证的执行总是被脱敏，即使授权用户也永远无法揭示。固定数据和错误/未运行状态仍正常显示。工作流设置现在为生产和手动执行暴露单独的脱敏开关。
* [Enable secure invite links](https://github.com/n8n-io/n8n/pull/27107)（启用安全邀请链接）：邀请和注册链接现在使用单个防篡改令牌，而不是单独的 inviterId/inviteeId 参数。注册 URL 使用 token 查询参数，邀请接受通过接受令牌加用户详情的统一端点处理。旧的基于 inviterId/inviteeId 的邀请流程已移除，提高了邀请链接的安全性。
* [Display workflow, credential and data table dependencies](https://github.com/n8n-io/n8n/pull/26912)（显示工作流、凭证和数据表依赖）：n8n 现在通过新的 API 端点暴露工作流、凭证和数据表的依赖信息。工作流卡片可以显示相关凭证、数据表和工作流的计数，详情视图可以列出解析后的依赖名称，尊重每个用户的访问权限，并把无法访问的依赖报告为计数。需要启用工作流依赖索引。
---

## `n8n 2.13` Baserow 节点新增批量操作支持，另加 7 项其他功能

**发布时间：** 2026-03-16

* [Allow instance admin to re-enable disabled secret provider connections](https://github.com/n8n-io/n8n/pull/26760)（允许实例管理员重新启用已禁用的密钥提供商连接）：被项目管理员禁用（软删除）的外部密钥连接现在在 Settings > External Secrets 中显示 'Inactive（未激活）' 徽章。具有适当权限的实例管理员可以通过新的 activate 操作重新启用此类连接，无需重新创建即可恢复为活跃状态。未激活连接的重载操作被禁用，成功或错误 toast 确认结果。
* [Baserow Node: Add batch operations, more filters, add DB token credential](https://github.com/n8n-io/n8n/pull/19758)（Baserow 节点：新增批量操作、更多过滤器、添加 DB 令牌凭证）：Baserow 节点现在支持 Batch Create、Batch Update 和 Batch Delete 操作，让你在单个请求中处理最多 200 行，可以通过手动定义字段或自动映射输入数据。Get Many 操作获得大幅扩展的过滤器操作符集，覆盖更多字段类型和比较。此外，新的 Database Token 凭证类型允许用 Baserow API 令牌而不是用户名和密码认证。
* [Add opt-in toggle for external secrets system roles](https://github.com/n8n-io/n8n/pull/26684)（为外部密钥系统角色添加可选开关）：为外部密钥启用基于角色的访问控制时，管理员现在可以切换项目 admin 和 editor 角色是否自动在其项目中获得外部密钥权限（查看、管理、同步提供商、列出密钥）。新设置位于 External Secrets 设置页面，禁用时显示确认提示，并动态应用而无需重启。
* [Add telemetry events for workflow diff in version history](https://github.com/n8n-io/n8n/pull/26778)（为版本历史中的工作流 diff 添加遥测事件）：此版本添加内部遥测，以更好地了解用户如何与版本历史和 push/pull 比较中的工作流 diff 视图交互。它跟踪 diff 视图何时打开（现在记录是来自版本历史还是 push/pull 弹窗）、用户何时切换源或目标版本、更改列表下拉列表何时打开，以及何时从更改列表中选择节点。这是内部分析改进，对用户没有可见 UI 变化。
* [Conditional credit usage banner](https://github.com/n8n-io/n8n/pull/26891)（条件性积分使用横幅）：AI Builder 的聊天界面现在默认把积分使用保持在视线之外。聊天输入下始终可见的积分条已被侧边栏头部的设置图标取代，点击打开一个显示积分数量、进度条和获取更多积分链接的下拉列表。现在只在积分降到 10% 或以下时，聊天输入上方出现一个可关闭的警告横幅。
* [Enable project editors to view external secret vaults](https://github.com/n8n-io/n8n/pull/27007)（让项目编辑者查看外部密钥 vault）：只有外部密钥 vault 访问权限（没有完整项目更新权限）的项目编辑者现在可以查看 Project Settings 页面，查看和管理外部密钥 vault，无需更广泛的项目 admin 权限。名称、描述、成员和危险区等其他设置部分保持隐藏，除非用户有项目更新权限。
* [Custom auth redacts values correctly](https://github.com/n8n-io/n8n/pull/26895)（自定义认证正确脱敏值）：对于 Custom Auth 凭证，JSON 认证值现在可以在凭证保存前正常查看和编辑，保存后自动掩码，保护敏感数据而不需要把字段定义为密码类型。凭证编辑器现在为已保存的 Custom Auth JSON 值显示带编辑选项的脱敏占位符。
* [Show folder tree view in source control push/pull modals](https://github.com/n8n-io/n8n/pull/26758)（在源代码控制 push/pull 弹窗中显示文件夹树视图）：源代码控制 Push 和 Pull 弹窗现在按文件夹结构分组显示工作流，而不是平面列表。文件夹行可以折叠/展开，在 Push 弹窗中，文件夹复选框让你选择或取消选择文件夹内的所有工作流，外加一个新的文件夹过滤器，把列表限定到特定路径。这让管理许多文件夹的实例上的更改更容易审查和管理。

---

## `n8n 2.12` 在工作流历史 diff 中直接切换版本，另加 6 项其他功能

**发布时间：** 2026-03-09

* [Add 'New' badge to project roles and upgrade landing page](https://github.com/n8n-io/n8n/pull/26348)（为项目角色和升级落地页添加 'New' 徽章）：项目角色现在在设置侧边栏和项目角色页面标题上显示 "New（新）" 徽章，取代之前的 "Beta" 标签。对于没有企业许可证的用户，升级提示已重新设计为更清晰的空白布局，包括图标、描述、"Learn more（了解更多）" 链接，以及根据部署类型显示的升级或查看套餐按钮。
* [Implement read-only mode for external secrets connections](https://github.com/n8n-io/n8n/pull/26432)（为外部密钥连接实现只读模式）：在项目内查看全局共享的外部密钥连接时，连接弹窗现在显示只读提示并隐藏保存和删除按钮，防止没有足够权限的编辑。实例管理员看到指向实例级设置的消息，其他人被告知联系其管理员。项目密钥连接现在也按名称字母排序，而不是按密钥数量排序。
* [Make it possible to pick Chat hub model by ID even if no models are loaded](https://github.com/n8n-io/n8n/pull/26435)（即使没有加载模型，也可以按 ID 选择 Chat hub 模型）：修复了 Azure 等无法自动获取模型列表的提供商的 Chat Hub 模型选择。以前，如果配置的凭证没有填充模型列表，手动输入模型 ID 的选项会被隐藏。现在，只要凭证已设置，用户就可以选择 'Choose model by ID（按 ID 选择模型）' 并手动输入模型标识符（如 gpt-5-mini）来使用它。
* [Add option to hide credential overwrites](https://github.com/n8n-io/n8n/pull/26489)（新增隐藏凭证覆盖的选项）：新增 N8N_SKIP_CREDENTIAL_OVERWRITE 环境变量，接受逗号分隔的凭证类型列表。对于列出的类型，带有凭证覆盖的现有凭证继续工作，但不能使用托管覆盖创建新凭证，编辑器 UI 默认使用自定义凭证输入而不是托管选项。这帮助管理员弃用托管云凭证，同时保持现有工作流可用。
* [Chat Node: Return chat message instead of input data if Chat is not waiting for user input](https://github.com/n8n-io/n8n/pull/26167)（Chat 节点：如果 Chat 未等待用户输入，返回聊天消息而不是输入数据）：Chat 节点已更新到版本 1.3。当节点未等待用户输入时，它现在返回实际发送的聊天消息，而不是原始输入数据，修复了早期版本中令人困惑的输出。使用旧版本的现有工作流保留之前的行为；新建或升级的节点默认使用版本 1.3。
* [Implement additional checkbox confirmation for quick connect flow](https://github.com/n8n-io/n8n/pull/26472)（为快速连接流程实现额外的复选框确认）：Quick Connect 确认对话框（例如 Firecrawl 的）现在可以包含一个必填的同意复选框，与同意文本并列，可按集成配置。用户必须在确认前勾选复选框，确保显式确认。未配置横幅文本时，快速连接推广横幅现在也被隐藏，避免空提示。
* [Allow switching versions in workflow history diff view](https://github.com/n8n-io/n8n/pull/26418)（允许在工作流历史 diff 视图中切换版本）：工作流历史 diff 视图现在包含用于选择要比较的两个版本的下拉选择器，让用户直接从 diff 屏幕切换版本，而无需导航回历史列表。版本按日期分组，并显示 latest、published 和 default 状态指示器，使审查和比较工作流历史中的更改更容易。

---

## `n8n 2.11.2` 快速连接新增复选框确认

**发布时间：** 2026-03-09

* [Implement additional checkbox confirmation for quick connect flow (backport to release-candidate/2.11.x)](https://github.com/n8n-io/n8n/pull/26686)（为快速连接流程实现额外的复选框确认（回移植到 release-candidate/2.11.x））：Quick Connect 凭证设置现在可以在继续前要求显式的复选框确认，除现有的同意文本外。节点创建者可以在同意文本旁边配置同意复选框消息，复选框勾选前确认对话框不会继续。此外，未配置横幅文本时，Quick Connect 推广横幅不再显示。

---

## `n8n 2.11` 并排比较工作流历史版本，另加 12 项其他功能

**发布时间：** 2026-03-03

* [Chat Trigger Node: Add Suggested prompts, shown on Chat hub](https://github.com/n8n-io/n8n/pull/26217)（Chat Trigger 节点：新增建议提示词，显示在 Chat hub 上）：Chat Trigger 节点现在支持定义建议提示词，在 'Available in Chat（在聊天中可用）' 启用时可配置。这些提示词作为可点击建议出现在 Chat Hub 中与 Workflow Agent 开始新对话时的空状态上，让用户快速开始常见任务。每个提示词可以包含可选的自定义图标或表情符号，点击一个会把提示词文本填入聊天输入。
* [Expose workflow:execute scope checkbox in custom role UI](https://github.com/n8n-io/n8n/pull/26405)（在自定义角色 UI 中暴露 workflow:execute 作用域复选框）：自定义角色编辑器现在为工作流显示专用的 "Execute（执行）" 复选框，而不是静默地把执行权限与编辑权限绑定。勾选 Execute 会自动启用 View（因为执行需要读访问），取消勾选 View 会自动禁用 Execute。编辑工作流不再隐式授予或撤销执行访问，让管理员对自定义角色中的工作流权限有更清晰、更可预测的控制。
* [Add project badge in data table overview](https://github.com/n8n-io/n8n/pull/26289)（在数据表概览中添加项目徽章）：概览列表中的数据表现在显示项目徽章，与工作流已有的徽章类似。徽章指示数据表属于哪个项目（个人或团队），让你直接从数据表卡片一眼看到归属。
* [Add success button variant and fix trial banner CTA styling](https://github.com/n8n-io/n8n/pull/26190)（新增 success 按钮变体并修复试用横幅 CTA 样式）：为 n8n 设计系统添加新的 'success'（绿色）按钮变体，可在整个 UI 中使用。试用横幅的号召性用语按钮现在直接从后端配置支持这种现代变体，同时仍为向后兼容正确渲染基于旧样式的颜色（success、warning、danger、primary），修复了 CTA 按钮样式不一致的问题。
* [Forward rich message types from SDK instead of flattening to text](https://github.com/n8n-io/n8n/pull/26177)（从 SDK 转发富消息类型，而不是平铺为文本）：AI 工作流构建器助手现在把摘要消息、agent 建议和代码片段显示为格式正确的富块，而不是把它们转换为纯 markdown 文本。这让这些消息类型在聊天 UI 中获得预期的视觉呈现，提高助手回复的可读性。还更新了助手遇到非递归错误时使用的通用错误指导措辞。
* [Add assignments tab for custom roles with project visibility](https://github.com/n8n-io/n8n/pull/25992)（为自定义角色添加带项目可见性的分配选项卡）：自定义项目角色现在有 Assignments（分配）选项卡，显示哪些项目使用该角色，包括成员数和最后分配日期。管理员可以查看项目成员及其角色标签，并在删除角色前重新分配用户。角色删除对话框现在具有上下文感知，角色在使用中时提供到分配的链接，未使用时提供简单确认。
* [Update Replace Me placeholder in Loop Over Items](https://github.com/n8n-io/n8n/pull/23756)（更新 Loop Over Items 中的 Replace Me 占位符）：Loop Over Items（及类似节点）内自动添加的 "Replace Me" 占位符节点现在在画布上显示为清晰标记的占位符，带虚线边框和加号图标。双击它打开节点创建器，标记为 "Replace this step（替换此步骤）"，快速换入真实节点，让所需操作更明显。
* [Use single select dropdown for selecting scope of a secrets store](https://github.com/n8n-io/n8n/pull/26146)（使用单选下拉列表选择密钥存储的作用域）：配置密钥存储时，选择其作用域（Global 或特定项目）现在使用单选下拉列表，而不是之前的项目共享多选组件，简化了选择体验。更新的辅助文本澄清：选择项目只把密钥存储共享给该项目，选择 Global 则共享给所有项目。
* [Add quick connect inside the credential edit modal](https://github.com/n8n-io/n8n/pull/26058)（在凭证编辑弹窗内添加快速连接）：从凭证编辑弹窗创建新凭证时，Quick Connect 现在默认显示在受支持的服务上，让用户无需手动输入凭证详情即可连接账号。点击 "or enter manually（或手动输入）" 切换到手动设置。编辑现有凭证时 Quick Connect 不可用。
* [Allow comparing workflow history versions](https://github.com/n8n-io/n8n/pull/26060)（允许比较工作流历史版本）：你现在可以直接从 Workflow History 列表比较工作流的任意两个版本。每个版本上（当前选中的除外）出现一个新的 Compare（比较）按钮，打开全屏 diff 视图，复用现有的 diff 查看器。比较状态反映在 URL 中，因此特定版本比较的链接可以共享或刷新。
* [Add dynamic credentials UI for ChatHub](https://github.com/n8n-io/n8n/pull/25685)（为 ChatHub 添加动态凭证 UI）：ChatHub 现在显示工作流在运行前何时需要 OAuth 凭证，聊天输入中有警告，侧面板用于连接或断开账号。用户可以通过 OAuth 弹窗授权所需凭证，看到实时已连接/总数，发送在所需凭证全部认证前被阻止。此功能在开关后面，并限定到使用动态凭证解析的 ChatHub 工作流。
* [Enable adding secret store from project settings page](https://github.com/n8n-io/n8n/pull/26122)（允许从项目设置页面添加密钥存储）：具有正确项目权限的用户现在可以直接从项目设置页面添加密钥存储，而不需要实例管理员访问。除非用户有权全局共享，否则密钥存储连接弹窗中的共享选项卡现在被隐藏。这些区域的权限检查现在一致使用 RBAC 存储，而不是用户角色检查。
* [Add searching and sorting to data table overviews](https://github.com/n8n-io/n8n/pull/25623)（为数据表概览添加搜索和排序）：数据表概览页面现在支持按名称搜索，按名称、创建日期、最后更新日期和大小排序，外加项目胶囊显示。排序和搜索偏好按项目持久保存，但由于额外的查询成本，基于大小的排序被排除在持久化默认值之外。这让查找和组织数据表更容易，尤其是在有大量表的空间中。

---

## `n8n 2.10` 带 Chat SDK 的流式画布聊天，另加 7 项其他功能

**发布时间：** 2026-02-23

* [Allow discarding and renaming columns during CSV import](https://github.com/n8n-io/n8n/pull/25605)（允许在 CSV 导入期间丢弃和重命名列）：从 CSV 导入数据表时，你现在可以在设置期间排除不需要的列并重命名列，数据按名称而不是位置正确映射。类型检测也通过采样最多 100 行而不是只采样第一行而改进，因此早期空值的列不再被错误分类。尝试导入所有列都被丢弃现在会被拒绝并显示清晰错误。
* [Improve quick connect frontend implementation](https://github.com/n8n-io/n8n/pull/26055)（改进快速连接前端实现）：改进了 Quick Connect 体验：社区节点预览现在在 Quick Connect 标签上显示解释性工具提示，窄节点面板上 "or setup manually（或手动设置）" 文本正确换行，取消 Pinecone 快速连接不再显示错误消息，并修复了重新打开 Pinecone 连接弹窗时创建重复凭证的 bug。
* [Refine external secrets management on project settings …](https://github.com/n8n-io/n8n/pull/26016)（细化项目设置中的外部密钥管理）：项目设置中的 External secrets 部分已细化。密钥现在按连接分组，显示每个连接的密钥数量，并且只在连接行展开时加载密钥，提高分页列表的性能。冗余的密钥存储列被移除，长密钥列表现在在固定高度容器内滚动，而不是扩展页面。
* [Show inline error messages for testing connection feedback](https://github.com/n8n-io/n8n/pull/25873)（为测试连接反馈显示内联错误消息）：测试密钥提供商连接时，反馈现在显示为连接弹窗内的内联横幅，而不是 toast 通知，让成功和错误状态在上下文中更清晰。错误消息现在包含失败的细节。此外，获取现有 vault 连接现在正确检索并显示其密钥数量。
* [Add tab scoped collaboration](https://github.com/n8n-io/n8n/pull/25646)（新增选项卡范围协作）：工作流编辑锁现在限定到单个浏览器选项卡，而不是用户。如果你在多个选项卡中打开同一个工作流，一次只有一个选项卡可以编辑；其他选项卡显示只读指示器，带接管编辑的选项，切换选项卡不再需要从不同的设备或会话释放锁。
* [Enable streaming in canvas chat](https://github.com/n8n-io/n8n/pull/20991)（在画布聊天中启用流式）：画布聊天现在直接集成 Chat SDK，使它更接近托管聊天体验，并在手动执行期间启用流式响应。聊天触发器按会话注册测试 webhook，类似常规 webhook 触发器。聊天还获得消息历史导航（方向键）、重发和复制到输入等消息操作，以及精细的样式选项。
* [Build pinecone quick connect integration flow](https://github.com/n8n-io/n8n/pull/25854)（构建 Pinecone 快速连接集成流程）：为 Pinecone 新增 Quick Connect 支持，让用户通过基于弹窗的连接流程认证 Pinecone Vector Store 节点（和社区 Pinecone Assistant 节点），而不是手动输入 API 凭证，简化设置。这需要通过环境变量进行管理员侧配置，默认不启用。还添加了可配置的 Cross-Origin-Opener-Policy 头设置以支持基于弹窗的流程。
* [Show execution data in preview](https://github.com/n8n-io/n8n/pull/25501)（在预览中显示执行数据）：嵌入的画布视图现在可以通过新的 openExecutionPreview 消息渲染工作流预览，带每个节点的执行状态（success、error 或 canceled），而无需加载真实执行输出数据。节点输出列可选地从轻量模式近似得出以提供上下文，实际数据保持隐藏。这面向嵌入 n8n 画布的父应用，而不是标准 n8n UI。

---

## `n8n 2.9.4-exp` 设置面板在标记完成前验证凭证

**发布时间：** 2026-02-27

* [In setup panel only mark credentials as completed if they are tested](https://github.com/n8n-io/n8n/pull/25658)（在设置面板中只把经过测试的凭证标记为完成）：设置面板现在只在凭证通过后台连接测试后才把它标记为完成，而不是选中后立即标记。选择凭证、在凭证弹窗中保存凭证或刷新页面都会触发自动测试；只有成功时显示勾选标记，失败或进行中的测试让卡片保持未完成状态。这防止凭证实际无效时工作流显得已就绪。

---

## `n8n 2.9` 用于定向 AI Builder 上下文的 Focused Nodes，另加 10 项其他功能

**发布时间：** 2026-02-16

* [Stripe Node: Add more triggers for invoice payments](https://github.com/n8n-io/n8n/pull/25454)（Stripe 节点：为发票支付添加更多触发器）：Stripe Trigger 节点现在支持两个额外的 webhook 事件：invoice.paid，在发票支付成功或带外标记为已支付时触发；以及 invoice_payment.paid，在 InvoicePayment 成功支付时触发。用户现在可以直接从这些 Stripe 事件触发工作流，无需额外变通。
* [Improve focused nodes chips with message display, tooltips, and "All nodes" state](https://github.com/n8n-io/n8n/pull/25582)（用消息显示、工具提示和 "All nodes" 状态改进焦点节点芯片）：AI 助手聊天的焦点节点上下文标签现在作为芯片直接显示在你发送的消息内部，而不是纯文本，当每个节点都被选中时显示单个 "All nodes（所有节点）" 芯片。未确认的节点芯片现在显示解释点击它们作用的工具提示。未确认节点现在在消息之间保留，而不是被清除，芯片折叠更早发生，关闭按钮更容易点击，该功能现在默认开启。
* [Add custom color picker for sticky notes](https://github.com/n8n-io/n8n/pull/23699)（为便签添加自定义颜色选择器）：便签现在支持自定义颜色，而不仅仅是 7 个预设选项。新的第 8 个色板打开一个选择器，可以选择任意十六进制颜色，最近的 自定义颜色会被记住。自定义颜色自动获得主题感知边框，在浅色和深色模式下都有良好可见性，现有预设颜色不变继续工作。
* [Set default header auth domains in the UI for new credentials](https://github.com/n8n-io/n8n/pull/25563)（在 UI 中为新凭证设置默认请求头认证域）：新的 Header Auth 凭证现在默认为 HTTP 请求不允许任何域，而不是不受限制的默认值。此变更只适用于 UI 中新创建的凭证；现有的 Header Auth 凭证不受影响。此更新通过要求用户创建新凭证时显式指定允许域来提高安全性。
* [Show Quick connect banner in the NDV](https://github.com/n8n-io/n8n/pull/25506)（在 NDV 中显示快速连接横幅）：节点详情视图（NDV）现在在节点支持 Quick Connect 但尚未配置凭证时显示 Quick Connect 推广横幅。横幅只在 Quick Connect 功能启用且 NDV 可编辑（不在预览或只读模式）时出现，帮助用户发现更快的凭证设置方式。
* [UX improvements for external secret providers](https://github.com/n8n-io/n8n/pull/25686)（外部密钥提供商的 UX 改进）：外部密钥提供商连接获得多项 UX 改进：连接列表卡片现在显示徽章指示连接是全局共享还是与特定项目共享；共享选项卡在显式选择作用域前禁用保存；删除没有关联凭证的连接现在显示更简单的无影响确认；测试连接现在显示清晰的成败 toast 消息。
* [Add Firecrawl handler to the Quick connect module](https://github.com/n8n-io/n8n/pull/25528)（为快速连接模块添加 Firecrawl 处理器）：Quick Connect 现在支持 Firecrawl：企业管理员可以为 Firecrawl 配置后端 Quick Connect 选项，它自动创建 Firecrawl 用户并检索 API 密钥来设置凭证，无需手动输入 API 密钥。这取代了开发期间使用的早期示例/测试处理器。
* [Allow manual login setting for OIDC alongside SAML](https://github.com/n8n-io/n8n/pull/25687)（允许 OIDC 与 SAML 并行的手动登录设置）：启用 OIDC 时，管理员现在可以为个别用户允许或禁止手动（非 SSO）登录，与现有 SAML 行为一致。以前这个按用户的手动登录开关和邀请按钮限制只在 SAML SSO 激活时应用；现在它们也在 OIDC SSO 启用时应用，为两种 SSO 方法提供一致的用户管理控件。
* [Enable deletion of external secret stores](https://github.com/n8n-io/n8n/pull/25573)（启用外部密钥存储的删除）：你现在可以直接从 n8n 删除外部密钥存储连接。新的确认弹窗在删除前显示将影响多少密钥和凭证，要求你输入连接名称确认。从该弹窗导航时，凭证列表也可以按密钥存储过滤，帮助你在删除连接前审查受影响的凭证。
* [Add Focused Nodes feature](https://github.com/n8n-io/n8n/pull/25452)（新增 Focused Nodes 功能）：新增 Focused Nodes，让用户选择或 @ 提及特定节点，给 AI Builder 定向上下文，而不是推理整个工作流。选中的节点作为芯片出现在聊天中，与画布选择同步，可以通过右键添加。AI 现在把 "this" 或 "it" 等引用解析到选中的节点。目前在功能开关后面用于实验。
* [Implement credentials setup in the setup panel](https://github.com/n8n-io/n8n/pull/25514)（在设置面板中实现凭证设置）：工作流设置面板现在包含凭证设置卡片，让你直接从侧边栏为每个节点配置所需凭证。卡片显示每个节点的凭证字段，指示完成状态，并在凭证设置后支持测试节点。启用该功能时，Setup Template 按钮现在打开这个侧边栏，简化模板和工作流的凭证配置。

---

## `n8n 2.8` 外部密钥共享和项目设置集成，另加 12 项其他功能

**发布时间：** 2026-02-11

* [Add projects to credentials list response](https://github.com/n8n-io/n8n/pull/25384)（把项目添加到凭证列表响应）：公共 API 的 GET /credentials 端点现在为每个凭证返回一个 shared 字段，列出与之共享的项目，包括项目 id、名称、共享角色和时间戳。以前此端点完全省略共享信息，因此用户现在可以一眼看到哪些项目可以访问给定凭证。
* [Motorhead Node: Hide deprecated Motorhead memory node from UI](https://github.com/n8n-io/n8n/pull/25536)（Motorhead 节点：从 UI 隐藏已弃用的 Motorhead 记忆节点）：Motorhead Memory 节点已从节点选择器中移除，因为 Motorhead 项目不再维护。使用此节点的现有工作流继续正常功能，但节点设置中现在出现弃用通知，告知用户它可能在未来的版本中被移除。
* [Add text search to IconPicker](https://github.com/n8n-io/n8n/pull/25357)（为 IconPicker 添加文本搜索）：用于项目图标和 ChatHub 工作流/agent 图标的 IconPicker 组件现在支持跨图标和表情符号的文本搜索。表情符号元数据从 emojibase 懒加载，以支持按标签和标签匹配。新的随机选择按钮让用户快速挑选独特的图标或表情符号，无需手动浏览。
* [Auto-focus chat input when typing](https://github.com/n8n-io/n8n/pull/25317)（打字时自动聚焦聊天输入）：在 AI 聊天视图中，在输入字段外的任何地方打字现在会自动聚焦聊天输入并插入所打字符，类似 ChatGPT 风格的行为。当另一个字段或文本框活跃、弹窗打开、键盘快捷键或 IME 组合期间、欢迎屏幕显示或消息正在处理时，输入不会抢占焦点。
* [Extend secrets provider connection modal with project s…](https://github.com/n8n-io/n8n/pull/25295)（用项目共享扩展密钥提供商连接弹窗）：外部密钥存储连接弹窗现在包含 Sharing（共享）选项卡，让用户把密钥提供商连接共享给单个项目或全局（默认全局）。连接卡片新增 Share（共享）操作，权限检查现在控制谁可以编辑或更改共享范围。这让管理员更精细地控制哪些团队可以访问外部密钥。
* [Support Chat node's 'Send and Wait for Response' mode approval buttons on Chat hub](https://github.com/n8n-io/n8n/pull/25338)（在 Chat hub 上支持 Chat 节点 'Send and Wait for Response' 模式的批准按钮）：当工作流的 Chat 节点以 'Send and Wait for Response' 模式使用时，Chat hub 现在渲染批准按钮。点击按钮会用所选响应恢复暂停的执行，聊天 UI 显示等待状态，直到按钮被点击，需要时阻止进一步输入。
* [Kafka Trigger Node: Refactoring and fixes](https://github.com/n8n-io/n8n/pull/25088)（Kafka Trigger 节点：重构和修复）：Kafka Trigger 节点已用新的 1.3 版本重构，提供控制偏移解析时机的选项（immediately、on completion、on success 或 on allowed statuses）、可配置的错误重试延迟，以及改进的心跳处理，防止长时间执行期间会话超时。它现在还在再平衡期间检查消费者运行/停滞状态，避免在手动/测试执行时等待 donePromise，并包含更清晰的参数描述。
* [Add `Name version` action to workflow history](https://github.com/n8n-io/n8n/pull/25316)（为工作流历史添加 `Name version` 操作）：你现在可以直接从工作流编辑器和工作流历史页面命名和描述工作流版本，作为授权功能。可用时版本详情会预填充。Unpublish（取消发布）操作已从主操作菜单移到 Publish 按钮旁边的新下拉列表中，与新的 Name version 选项并列。
* [Boost Claude Opus 4.6 priority in chat hub model selector](https://github.com/n8n-io/n8n/pull/25434)（提高 Chat hub 模型选择器中 Claude Opus 4.6 的优先级）：在 Chat Hub 模型选择器中添加 Claude Opus 4.6 作为可用的 Anthropic 模型，并使其成为最高优先级默认选择，出现在列表中 Opus 4.5、Sonnet 4.5 和 Haiku 4.5 之上。
* [Improve sticky note behavior during node insertion](https://github.com/n8n-io/n8n/pull/25207)（改进节点插入期间的便签行为）：在画布上插入节点时，便签现在表现得更智能：包含源节点的便签保持锚定并拉伸以适合新节点，而与移动位置节点分组的便签一起移动和拉伸以保留视觉分组。节点之间的连接线在插入期间也保持严格垂直，修复了节点位置意外偏移的 bug。
* [Preview not installed community tools](https://github.com/n8n-io/n8n/pull/24859)（预览未安装的社区工具）：导入使用你未安装的社区工具节点的工作流或模板时，n8n 现在显示带正确节点图标和句柄的适当预览，而不是无法识别/损坏的节点，让你查看并安装缺失的社区节点。社区节点现在也出现在节点搜索面板的 Tools 部分。
* [Refine permission checks in Secrets Provider Connection…](https://github.com/n8n-io/n8n/pull/25389)（细化 Secrets Provider 连接中的权限检查）：改进了外部密钥提供商连接的权限处理。项目范围用户现在可以在自己的项目内管理和更新连接，而全局或跨项目共享连接仍需要全局权限。更新权限检查现在考虑连接的原始项目范围，允许编辑或取消共享而无需额外的共享权限。还修复了密钥数量可能显示不正确的问题。
* [Add external secrets section to project settings](https://github.com/n8n-io/n8n/pull/25453)（为项目设置添加外部密钥部分）：项目设置现在包含 External Secrets 部分，显示项目可用密钥，按提供商分组，带展开/折叠、搜索和分页。项目管理员可以直接从此视图添加密钥存储连接，而实例管理员被引导共享现有密钥存储。空状态根据用户角色和可用提供商调整。

---

## `n8n 2.7` 多提供商的密钥存储连接弹窗，另加 10 项其他功能

**发布时间：** 2026-02-02

* [Add option to select eval suite on manual workflow dispatch](https://github.com/n8n-io/n8n/pull/24998)（在手动工作流调度时添加选择评估套件的选项）：内部 AI evals GitHub Actions 工作流现在让维护者在手动触发时选择运行哪个评估套件：两个套件（默认）、只跑 spec（pairwise）或只跑 matrix（LLM judge）。由推送到 master 触发的自动运行继续照常运行两个套件。这是内部 CI 和测试工具变更，不影响 n8n 的终端用户。
* [FormTrigger Node: Support ip filtering for the FormTrigger node](https://github.com/n8n-io/n8n/pull/24644)（FormTrigger 节点：支持 FormTrigger 节点的 IP 过滤）：Form Trigger 节点现在支持 IP 允许列表，与现有 Webhook 节点能力一致。你可以通过新的 IP(s) Allowlist 选项把表单提交限制到特定 IP 地址、CIDR 范围或 IPv6 地址。底层 Webhook 节点的允许列表逻辑也已增强，支持 CIDR 范围和 IPv6，超出之前仅 IPv4 的支持。
* [Kafka Trigger Node: Add option to keep binary data for downstream processing](https://github.com/n8n-io/n8n/pull/21843)（Kafka Trigger 节点：新增为下游处理保留二进制数据的选项）：Kafka Trigger 节点现在有版本 1.2，带新的 "Keep Binary Data（保留二进制数据）" 选项。启用后，消息值作为原始二进制数据保留，与常规字符串/JSON 输出并列，允许下游节点处理 Avro 序列化消息等格式而不会丢失数据。v1.0 和 v1.1 的现有工作流不受影响，v1.2 中该选项默认关闭。
* [Remove success toasts on workflow creation](https://github.com/n8n-io/n8n/pull/24979)（移除创建工作流时的成功 toast）：n8n 在创建工作流时不再显示成功 toast 通知，无论是在个人空间、项目还是文件夹中。保存新工作流仍然照常工作，但没有额外的确认弹窗，简化了工作流创建体验。
* [Show ChatHub action buttons on hover](https://github.com/n8n-io/n8n/pull/24923)（悬停时显示 ChatHub 操作按钮）：在 ChatHub 中，聊天消息上的操作按钮（复制、编辑、重新生成、替代方案）现在在支持悬停的设备上默认隐藏，只在悬停消息或焦点在消息内时出现，带平滑淡入过渡。这减少聊天界面中的视觉杂乱。触摸设备不受影响，按钮在那里保持可见。
* [Zendesk Trigger Node: Add webhook signature verification](https://github.com/n8n-io/n8n/pull/24881)（Zendesk Trigger 节点：新增 webhook 签名验证）：Zendesk Trigger 节点现在使用 HMAC-SHA256 签名检查（对照 Zendesk 的 X-Zendesk-Webhook-Signature 请求头）验证传入的 webhook 请求，无效或未签名请求以 401 响应被拒绝。创建 webhook 时自动从 Zendesk 获取签名密钥并安全存储。没有存储密钥的现有工作流不受影响继续工作，确保向后兼容，同时提高对伪造 webhook 调用的安全性。
* [Crypto Node: Add credentials for Hmac and Sign operations](https://github.com/n8n-io/n8n/pull/24798)（Crypto 节点：为 Hmac 和 Sign 操作添加凭证）：Crypto 节点已更新到版本 2，把 Hmac Secret 和 Sign Private Key 从节点参数移到新的专用 Crypto 凭证中。以前这些值以纯文本存储在节点内；现在作为凭证安全存储，提高安全性。使用版本 1 的现有工作流不变继续工作。
* [Pause autosave on connection failures](https://github.com/n8n-io/n8n/pull/24456)（连接失败时暂停自动保存）：n8n 现在通过定期健康检查检测后端连接问题，并在离线时自动暂停工作流自动保存，连接恢复后恢复。连接状态指示器也已更新，区分网络中断和推送连接丢失，显示 'Offline（离线）' 消息和工具提示，说明重新连接后更改将被保存。
* [Add Currents.dev node](https://github.com/n8n-io/n8n/pull/24566)（新增 Currents.dev 节点）：新增 Currents.dev 集成，包含两个节点。Currents 节点让你管理测试操作规则，并通过 Currents API 查看项目、运行、实例、spec 文件、测试、测试结果和签名。Currents Trigger 节点在 Currents 事件（运行开始、完成、取消或超时）时启动工作流，在工作流发布或取消发布时自动创建、更新和移除 webhook。需要 Currents API 密钥凭证。
* [Secret Store connection modal for multiple providers](https://github.com/n8n-io/n8n/pull/25004)（多提供商的密钥存储连接弹窗）：你现在可以直接从 Settings 中的新弹窗添加和编辑外部密钥连接。它让你选择密钥提供商类型、命名连接、配置提供商特定设置、测试连接并保存更新，带验证和更清晰的错误/成功消息，外加连接卡上的断开状态指示器。
* [Microsoft Agent 365 Trigger Node: Integration for Microsoft Agents 365](https://github.com/n8n-io/n8n/pull/25145)（Microsoft Agent 365 Trigger 节点：Microsoft Agents 365 集成）：新增早期预览 Microsoft Agent 365 Trigger 节点和凭证，让工作流充当 Microsoft 365 Agents。它通过租户 ID、客户端 ID 和客户端密钥认证，通过 webhook 处理传入的 agent 活动，并支持连接语言模型、记忆、工具、输出解析器和可选的 Microsoft MCP 工具（如 Calendar 和 Mail）。需要加入 Microsoft 的 Frontier 预览计划。
---

## `n8n 2.6` Kafka 触发器节点新增批量处理，另加 12 项其他功能

**发布时间：** 2026-01-26

* [Add new Button component to design system (no-changleog)](https://github.com/n8n-io/n8n/pull/24467)（为设计系统添加新 Button 组件（无更新日志））：这是仅内部变更：n8n 设计系统新增 Button 组件，支持多种变体、大小、加载/禁用/仅图标状态、链接渲染和无障碍警告。它尚未在产品中的任何地方使用，替换现有按钮实现计划在未来版本中进行。此 PR 不产生面向用户的变化。
* [Add support for custom scopes in the MS Excel credential](https://github.com/n8n-io/n8n/pull/24756)（在 MS Excel 凭证中支持自定义作用域）：Microsoft Excel OAuth2 凭证现在支持自定义作用域。新的 'Custom Scopes' 开关让用户用自定义作用域覆盖默认 OAuth 作用域（openid、offline_access、Files.ReadWrite），在需要时启用对额外 Microsoft Graph 权限的访问，同时保持之前的默认值不变（如果保持禁用）。
* [Add support for custom scopes in the MS Teams credential](https://github.com/n8n-io/n8n/pull/24755)（在 MS Teams 凭证中支持自定义作用域）：Microsoft Teams OAuth2 凭证现在支持自定义作用域。新的开关让用户启用自定义作用域并指定自己的启用作用域列表，而不是默认集，与现有 Entra 凭证行为一致。禁用时，凭证继续使用节点正常运行所需的默认作用域。
* [Airtop Node: Add resource locator in the agent node](https://github.com/n8n-io/n8n/pull/23008)（Airtop 节点：在 agent 节点中添加资源定位器）：Airtop 节点的 Run Agent 操作现在让你从可搜索列表中选择 agent 或直接输入其 ID，而不是粘贴 webhook URL。Agent 输入参数现在通过动态资源映射器配置，自动加载所选 agent 的预期字段，并验证必填参数，取代手动 JSON 输入。
* [Kafka Trigger Node: Additional options for batch processing](https://github.com/n8n-io/n8n/pull/24596)（Kafka Trigger 节点：批量处理的其他选项）：Kafka Trigger 节点现在支持批量处理选项。新设置包括 Batch Size（批大小，一次处理多条消息而不是逐条）、Fetch Max Bytes 和 Fetch Min Bytes（控制每次请求获取多少数据），以及 Partitions Consumed Concurrently（并行处理多个分区）。这些选项让从 Kafka 消费时对吞吐量和性能有更多控制，解决了并行处理和批量行为的问题。
* [Prioritize newer models on Chat hub model picker](https://github.com/n8n-io/n8n/pull/24867)（在 Chat hub 模型选择器中优先选择较新模型）：Chat hub 的模型选择器现在优先显示更新、更强大的模型。模型可以分配优先级值，选择器按此优先级排序（最高在前），而不是按列表顺序。未选择凭证时，自动选择最高优先级的可用模型，因此用户默认看到并获得 GPT-5.x、Claude Opus 4.5 和 Grok 4.1 等现代模型，而不是 chatgpt-4o-latest 等旧模型。
* [New operations in the Slack node](https://github.com/n8n-io/n8n/pull/24643)（Slack 节点中的新操作）：Slack 节点的 User Group 资源现在支持两个新操作：Get Users（获取成员，可选解析完整用户详情）和 Add Users（添加成员，同时保留现有成员）。这让直接从 n8n 工作流管理和检查 Slack 用户组成员更容易。
* [Add unpublish to workflow list](https://github.com/n8n-io/n8n/pull/23228)（在工作流列表中添加取消发布）：你现在可以直接从工作流列表取消发布已发布的工作流，无需先打开它。工作流已发布且你有更新权限时，工作流卡片的操作菜单中出现 'Unpublish（取消发布）' 选项，确认后把工作流恢复为未发布状态。
* [AI Agent Node: Pass chat input in denial messages](https://github.com/n8n-io/n8n/pull/24748)（AI Agent 节点：在拒绝消息中传递聊天输入）：当用户在 AI Agent 节点中拒绝人工介入工具调用时，发回给 agent 的拒绝消息现在包含用户的聊天输入/反馈（如果提供），而不是通用的拒绝通知。这给 agent 更多关于工具调用被拒绝原因和如何继续的上下文，改进对拒绝工具调用的处理。
* [Microsoft Teams Node: Add support for government cloud tenants](https://github.com/n8n-io/n8n/pull/17297)（Microsoft Teams 节点：新增对政府云租户的支持）：Microsoft OAuth2 凭证现在包含可配置的 Graph API Base URL 选项，带 Global、US Government、US Government DOD 和 China 云端点预设。这修复了 '401 InvalidCloudInstance' 错误，让 Teams、Outlook、OneDrive、Excel、Entra 和 Graph Security 节点连接到政府和主权云租户，而不仅仅是默认的公共 Microsoft Graph 端点。
* [Dynamic creds workflow fails if no dynamic creds exist](https://github.com/n8n-io/n8n/pull/24660)（没有动态凭证时动态凭证工作流失败）：修复了使用动态凭证的工作流在未配置动态凭证解析器时可能静默回退到静态凭证的问题。现在，如果凭证标记为可解析但没有解析器 ID，执行会以清晰的解析错误正确失败，而不是使用静态凭证，封堵了依赖按用户动态认证的工作流的安全缺口。
* [Add workflow demo diff view](https://github.com/n8n-io/n8n/pull/24585)（新增工作流演示 diff 视图）：n8n 现在支持可嵌入的工作流 diff 演示视图，可通过新的 /workflows/demo/diff 路由访问。它通过 postMessage 接收前后工作流数据，并使用现有工作流 diff 画布并排显示它们，带可选的节点自动布局（整理）以对齐比较。用于在外部上下文中嵌入工作流 diff。
* [Make expression resolution async](https://github.com/n8n-io/n8n/pull/24249)（使表达式解析异步）：工作流编辑器中的表达式解析现在在内部异步处理，为未来的异步表达式解析器和更复杂的计算奠定基础，同时不阻塞 UI。这主要是影响编辑器跨表达式解析方式的内部架构变更；此版本预期没有新的面向用户功能或行为变化。

---

## `n8n 2.5` ChromaDB 节点新增本地向量数据库支持，另加 12 项其他功能

**发布时间：** 2026-01-20

* [Add a clarifying callout to Merge Node schema view](https://github.com/n8n-io/n8n/pull/24435)（为 Merge 节点模式视图添加澄清提示）：节点编辑器中的模式视图在处理 Merge 节点和多个条目时现在显示可关闭的提示：一个在 Merge 节点本身的输出面板上，一个在从 Merge 节点接收数据的节点输入面板上，两者都在条目多于一个时出现。提示澄清显示的字段可能来自多个条目，并且可能不是每个条目都存在。
* [HTTP Request Node: Add option to disallow cross-origin credentials sharing](https://github.com/n8n-io/n8n/pull/24526)（HTTP Request 节点：新增禁止跨源凭证共享的选项）：HTTP Request 节点现在包含新版本（4.4），带 'Send Credentials on Cross-Origin Redirect（在跨源重定向上发送凭证）' 选项。禁用后，如果重定向指向不同源，授权头和凭证不再被转发，提高安全性。这是新节点的默认行为，现有节点保留重定向时始终转发凭证的先前行为。
* [Add native browser notifications on AI workflow builder completion or waiting for input](https://github.com/n8n-io/n8n/pull/24224)（在 AI 工作流构建器完成或等待输入时添加原生浏览器通知）：AI 工作流构建器现在可以在工作流构建完成或需要你的输入时发送原生浏览器通知，即使你切换了浏览器选项卡也会提醒你。构建器侧边栏中的可关闭横幅提示你启用通知，带合理的冷却限制避免过度提示。通知只在选项卡不可见时触发。
* [Allow editing / deleting project variables if you have the project scope](https://github.com/n8n-io/n8n/pull/24532)（有项目作用域时允许编辑/删除项目变量）：项目 admin 和 editor 现在可以在其项目角色授予适当权限时编辑和删除项目内的变量，即使没有全局变量更新或删除权限。以前，编辑和删除按钮只根据全局权限启用，阻止了有项目级访问权限的用户。这只是前端变更，因为后端权限支持早已存在。
* [Data Table Node: Add Order By feature](https://github.com/n8n-io/n8n/pull/23677)（Data Table 节点：新增 Order By 功能）：Data Table 节点的 Get Row(s) 操作现在支持 Order By 选项。启用后，用户可以选择排序结果的列并选择升序或降序方向，排序即使与过滤器和分页组合也一致应用。
* [GitHub Trigger Node: Add automatic webhook signature verification](https://github.com/n8n-io/n8n/pull/24203)（GitHub Trigger 节点：新增自动 webhook 签名验证）：GitHub Trigger 节点现在在激活时自动生成 webhook 密钥，并使用 X-Hub-Signature-256 请求头以 HMAC-SHA256 验证传入的 webhook 请求。验证失败的请求以 401 响应被拒绝。此更改之前创建的现有 webhook 继续未验证工作，确保向后兼容。
* [LmChatOpenAi Node: Update default model to gpt-5-mini](https://github.com/n8n-io/n8n/pull/24342)（LmChatOpenAi 节点：把默认模型更新为 gpt-5-mini）：OpenAI Chat Model 节点（LmChatOpenAi）现在默认使用 gpt-5-mini 模型，而不是 gpt-4o-mini 或 gpt-4.1-mini（取决于节点版本）。使用此节点的新工作流将使用 gpt-5-mini，除非选择不同模型。占位符文本也已更新以反映新默认值。
* [Show tooltips for canvas edge buttons](https://github.com/n8n-io/n8n/pull/24311)（为画布边缘按钮显示工具提示）：画布边缘工具栏按钮（添加和删除连接）现在在悬停时显示描述性工具提示，让它们的用途更清晰。节点句柄标签定位也做了小幅调整，使标签与节点工具栏一致对齐。
* [Use number input component for time saved setting](https://github.com/n8n-io/n8n/pull/24331)（为节省时间设置使用数字输入组件）：工作流设置中的每次执行节省时间字段现在使用带增减控件的专用数字输入，改善可用性并修复之前在 Firefox 中看到的笨拙间距和布局问题。
* [Autosave - Implement exponential backoff](https://github.com/n8n-io/n8n/pull/24464)（自动保存——实现指数退避）：自动保存现在使用指数退避重试失败的保存请求，而不是静默失败。保存失败时，n8n 显示带错误的 toast，并在递增延迟后自动重试（从 2 秒开始，上限 32 秒），保存成功后恢复正常自动保存。这减少在瞬时网络或服务器问题期间丢失未保存工作流更改的机会。
* [Chat Node: Regroup actions and add different response types](https://github.com/n8n-io/n8n/pull/23028)（Chat 节点：重新分组操作并添加不同响应类型）：Chat 节点已全面改造，带两个操作：Send Message（发送消息）和 Send and Wait for Response（发送并等待响应），与其他人工介入节点一致，并在 Node Creator 中与 Chat Trigger 分组。等待操作现在支持响应类型：Free Text（自由文本，像以前一样的普通回复）和 Approval（批准），在聊天中显示 Approve/可选 Disapprove 按钮，带阻止自由文本回复的选项。适用于嵌入和托管聊天，以及用作工具时。
* [ChromaDB Node: Add local chromadb support for complete local vector database](https://github.com/n8n-io/n8n/pull/19806)（ChromaDB 节点：新增本地 chromadb 支持以实现完整本地向量数据库）：新增 ChromaDB Vector Store 节点，让自托管和云 ChromaDB 实例都作为 n8n 中的向量数据库。它支持 load、insert、retrieve、update 和 retrieve-as-tool 操作，带集合管理、元数据过滤，以及用于自托管和 Chroma Cloud 认证的专用凭证类型——对本地和云 RAG 工作流很有用。
* [Notify users on first prod error](https://github.com/n8n-io/n8n/pull/21764)（首次生产错误时通知用户）：n8n 现在在实例上工作流首次在生产环境失败时向工作流 owner 发送邮件，如果尚未配置错误工作流。邮件链接到设置错误工作流以捕获未来失败的指导。通知每个实例只发送一次，事件也记录用于遥测。

---

## `n8n 2.4` 工作流现在在编辑时自动保存，另加 6 项其他功能

**发布时间：** 2026-01-12

* [Show building and done status in page title for AI builder](https://github.com/n8n-io/n8n/pull/23987)（在 AI 构建器的页面标题中显示构建和完成状态）：浏览器选项卡标题现在反映 AI 构建器状态：AI 构建器生成工作流时显示 "[Building]" 前缀，生成完成时如果你在另一个选项卡则切换为 "[Done]"。返回选项卡会将标题重置为正常空闲状态。这帮助切换选项卡的用户知道他们的 AI 生成工作流何时就绪。
* [Mailjet Node: Add Custom Campaign and Deduplicate Campaign Additional Fields](https://github.com/n8n-io/n8n/pull/11715)（Mailjet 节点：新增 Custom Campaign 和 Deduplicate Campaign 附加字段）：Mailjet 节点的 Send 和 Send Template 邮件操作现在支持两个新的 Additional Fields：Custom Campaign（自定义广告系列），让你为消息分配自定义广告系列名称；以及 Deduplicate Campaign（广告系列去重），防止同一广告系列内的重复发送。两者都直接映射到 Mailjet 的 Send API v3.1 广告系列选项，让用户通过 n8n 发送邮件时对广告系列分组和去重有更精细的控制。
* [Allow to set ChatHub workflow agent icon in NDV](https://github.com/n8n-io/n8n/pull/23562)（允许在 NDV 中设置 ChatHub 工作流 agent 图标）：你现在可以通过节点编辑器中的新 Agent Icon 字段，为通过 Chat Trigger 节点 'Available in Chat' 选项暴露的工作流 agent 设置自定义图标或表情符号。该图标出现在 ChatHub 的模型选择器和对话历史中，让聊天用户更容易识别 agent。该图标取代了之前使用工作流所属项目图标的做法。
* [Support hours and days in prune time within workflow history](https://github.com/n8n-io/n8n/pull/24108)（在工作流历史中支持修剪时间的小时和天）：工作流版本历史保留限制现在以小时或天显示，而不是只以天显示，修复了 24 小时以下的保留期错误显示为 "0 days" 的问题。保留消息现在正确显示，例如 "limited to 5 hours" 或 "limited to 2 days"，带正确的单复数措辞。
* [Git Node: Add reflog action](https://github.com/n8n-io/n8n/pull/21105)（Git 节点：新增 reflog 操作）：Git 节点现在支持新的 Reflog 操作，让你检索 HEAD 或指定分支/引用的引用日志。结果包括解析后的 hash、ref、action 和 message 字段，带限制条目数或返回全部的选项。由于底层 git 库缺乏原生 reflog 支持，输出从原始 git 命令结果手动解析。
* [Use new generated links within the UI and emails if feature is enabled](https://github.com/n8n-io/n8n/pull/23962)（功能启用时在 UI 和邮件中使用新的生成链接）：通过功能开关启用时，n8n 现在生成防篡改、基于 JWT 的邀请链接，而不是之前可预测的 inviterId/inviteeId 查询参数。这适用于 Settings > Users 中显示的邀请链接和配置实例发送的邀请邮件。管理员可以直接从 Users 列表生成和复制这些安全邀请链接；开关禁用时旧链接行为不变。
* [Autosave workflows](https://github.com/n8n-io/n8n/pull/23036)（工作流自动保存）：工作流现在在编辑时自动保存，带防抖和显示进度的保存动画，因此手动保存按钮、命令栏保存和保存键盘快捷键已被移除。同时，协作编辑现在包含写锁系统，一次只有一个用户可以编辑工作流，访问更改时实时通知。
---

## `n8n 2.3` Data Table 节点获得完整 CRUD 操作，另加 4 项其他功能

**发布时间：** 2026-01-05

* [Add/remove files in editing ChatHub chat message](https://github.com/n8n-io/n8n/pull/23541)（在编辑 ChatHub 聊天消息时添加/移除文件）：ChatHub 现在让你在编辑聊天消息时添加或移除文件附件。你可以保留现有文件、删除不需要的文件或附加新文件，然后重新发送继续对话——对从与文件相关的模型错误中恢复很有用，无需重新开始。
* [Data Table Node: Add data table crud operations to data table node](https://github.com/n8n-io/n8n/pull/22951)（Data Table 节点：为数据表节点添加数据表 CRUD 操作）：Data Table 节点现在包含新的 "Table" 资源，带 Create、Delete、List 和 Update 操作，让工作流以编程方式管理数据表。Create 支持定义列和类型，带复用同名称现有表的选项；List 支持过滤和排序；Update 重命名表；Delete 永久移除表及其数据。表现在也可以按名称引用，而不仅仅按 ID 或列表选择。
* [Add `Stop All Executions` functionality](https://github.com/n8n-io/n8n/pull/23576)（新增 `Stop All Executions` 功能）：你现在可以一次停止多个进行中的执行。Executions 侧边栏和全局概览中新的 'Stop all（全部停止）' 选项打开一个弹窗，你可以选择取消排队、运行中和/或等待中的执行，可选限定到当前工作流过滤器和日期范围，而不是一个接一个停止执行。
* [Weaviate Node: Hybrid Search Support](https://github.com/n8n-io/n8n/pull/23252)（Weaviate 节点：混合搜索支持）：Weaviate 向量存储节点现在支持混合搜索，结合向量相似性和基于关键词的文本搜索。新选项让用户配置查询文本、向量和关键词搜索之间的 alpha 加权、融合类型（Relative Score 或 Ranked）、查询属性、最大向量距离、自动裁剪结果限制和分数解释输出，对搜索相关性和结果调优有更多控制。
* [Form Node: Dynamic attributes in form editor](https://github.com/n8n-io/n8n/pull/23433)（Form 节点：表单编辑器中的动态属性）：Form 节点编辑器现在在配置表单元素时默认隐藏可选字段，只显示必填字段。'Add Field（添加字段）' 选择器让你按需有选择地显示可选属性，减少节点配置 UI 中的杂乱。这适用于 Form 节点的字段编辑器（版本 2.5），由新的 fixedCollection 类型选项（requiredOnly 和相关设置）驱动。

---

## `n8n 2.2` 从设置连接工作流到 MCP，另加 1 项其他功能

**发布时间：** 2025-12-22

* [Group sub-node execution errors with same messages inside a tooltip](https://github.com/n8n-io/n8n/pull/23402)（在工具提示内对相同消息的子节点执行错误分组）：画布上的节点执行错误工具提示不再对每次失败执行重复相同的错误消息。重复错误现在分组为单个条目显示计数（例如 'Error message (x3)'），防止工具提示溢出，让读取 Structured Output Parser 等子节点的错误更容易。
* [Connect workflows from MCP settings page](https://github.com/n8n-io/n8n/pull/23025)（从 MCP 设置页面连接工作流）：你现在可以直接从设置页面上的新弹窗为工作流启用 MCP 访问，让符合条件的工作流更容易被发现和连接。在幕后，按触发器类型过滤工作流现在支持多种触发器类型，启用 MCP 访问时只显示你有权限更新的工作流。

---

## `n8n 2.1` 用于动态凭证映射的凭证解析器，另加 10 项其他功能

**发布时间：** 2025-12-15

* [Edit workflow descriptions from the MCP page](https://github.com/n8n-io/n8n/pull/22967)（从 MCP 页面编辑工作流描述）：你现在可以直接从 MCP 设置页面编辑工作流的描述。工作流表添加 'Edit description（编辑描述）' 操作（点击描述单元格也会打开编辑器），让有工作流更新权限的用户无需离开 MCP 视图即可快速更新描述。
* [FTP Node: Add timeout option](https://github.com/n8n-io/n8n/pull/21868)（FTP 节点：新增超时选项）：FTP 节点现在支持可配置的连接超时选项，在 Delete、Rename、Upload 和 List 操作的 Options 下可用（并普遍应用于连接）。这有助于处理响应缓慢的 FTP/SFTP 服务器，防止握手机制期间过早超时。未设置时默认保持 10 秒。
* [Add JS method aliases](https://github.com/n8n-io/n8n/pull/21799)（添加 JS 方法别名）：表达式和 Code 节点自动补全现在识别 JavaScript 方法的常见别名，如 append/push、remove/pop、contains/includes、size/count/length、upper/toUpperCase 和 lower/toLowerCase。输入熟悉的替代名称现在会浮现匹配的 n8n 方法，并指导实际应使用哪个方法，让来自其他语言或工具的用户更容易发现表达式。
* [Form Node: Split form name and label](https://github.com/n8n-io/n8n/pull/22304)（Form 节点：拆分表单名称和标签）：Form 节点和 Form Trigger 在新版本 2.4 中支持单独的 Field Name（字段名）和 Label（标签）属性。以前字段标签兼作查询参数、输出键和二进制数据引用使用的内部标识符；现在字段名用于这些技术用途，而标签纯粹用于显示，避免标签更改或包含特殊字符时的问题。更早的节点版本继续像以前一样使用标签。
* [Google Gemini Node: Introduce built-in Gemini tools](https://github.com/n8n-io/n8n/pull/22454)（Google Gemini 节点：引入内置 Gemini 工具）：Google Gemini 节点（v1.1+）现在支持 Gemini 的内置工具：Google Search（谷歌搜索）、Google Maps（谷歌地图，带可选经纬度定位）、URL Context（URL 上下文）、File Search（文件搜索，带存储名称和元数据过滤）和 Code Execution（代码执行）。新选项还让你包含合并的文本响应，组合所有响应部分，外加原始候选输出。
* [Enable time saved node for testing](https://github.com/n8n-io/n8n/pull/22650)（为测试启用节省时间节点）：Time Saved 节点现已全面可用，移除了之前的功能开关限制和隐藏状态。用户可以向工作流添加 Time Saved 节点，根据执行路径和处理的条目动态计算节省时间。工作流设置现在让用户选择固定的节省时间值或通过这些节点动态计算，两种配置都存在时显示更清晰的 UI 消息。
* [Google Gemini Node: Ability to create a file store and upload files to it](https://github.com/n8n-io/n8n/pull/22988)（Google Gemini 节点：创建文件存储并上传文件的能力）：Google Gemini 节点现在支持用于检索增强生成（RAG）的 File Search 存储。新操作让你创建 File Search 存储、列出现有存储、删除存储，以及从 URL 或二进制数据向存储上传文件，实现在 n8n 内部直接进行文档搜索工作流。
* [Implement modal to edit/create credential resolver, and resolver workflow settings](https://github.com/n8n-io/n8n/pull/22977)（实现编辑/创建凭证解析器的弹窗及解析器工作流设置）：工作流设置现在包含 Credential Resolver（凭证解析器）选项，让用户通过新弹窗直接从工作流的设置创建、选择和编辑动态凭证解析器。解析器可以配置类型特定字段、编辑或带确认删除。此功能需要启用 N8N_ENV_FEAT_DYNAMIC_CREDENTIALS 功能开关。
* [Rename columns in data tables](https://github.com/n8n-io/n8n/pull/21747)（在数据表中重命名列）：你现在可以在数据表中重命名列。新的 API 端点验证新名称的唯一性和保留系统列名，然后更新 n8n 元数据和底层数据库表中的列，权限检查基于项目角色（需要 editor、admin 或 owner）。
* [UI improvements for credential resolver modal](https://github.com/n8n-io/n8n/pull/23027)（凭证解析器弹窗的 UI 改进）：改进了凭证解析器弹窗：配置为动态解析的凭证现在显示 Dynamic 标签，保存错误显示内联错误提示而不只是 toast，你现在可以在编辑时更改解析器的类型，现有配置会对照新类型重新验证。此功能仍由授权的、带功能开关的动态凭证模块门控。
* [Add credentials resolvers list UI](https://github.com/n8n-io/n8n/pull/23082)（新增凭证解析器列表 UI）：新增 Credential Resolvers 设置页面，用户可以在其中查看、创建、编辑和删除用于把动态凭证映射到触发用户身份的凭证解析器。解析器编辑器现在与新的列表视图复用共享逻辑，确保一致行为。这是工作流设置中持续动态凭证支持的一部分。

---

## `n8n 2.0` 工作流激活现在需要触发器节点，另加 4 项其他功能

**发布时间：** 2025-12-08

* [Automizy Node Remove Automizy node](https://github.com/n8n-io/n8n/pull/22471)（移除 Automizy 节点）：Automizy 节点及其凭证类型已从 n8n 中移除，因为 Automizy 服务已关闭。使用 Automizy 节点的工作流需要更新为使用替代服务，因为它在 n8n 中不再可用。
* [Crowd.dev node Remove crowd.dev node](https://github.com/n8n-io/n8n/pull/22469)（移除 crowd.dev 节点）：crowd.dev 节点、crowd.dev Trigger 节点和 crowd.dev API 凭证已从 n8n 中移除，因为第三方 crowd.dev 服务已退役。使用这些节点的工作流将不再起作用，应迁移离开 crowd.dev 集成。
* [Kitemaker node Remove Kitemaker node](https://github.com/n8n-io/n8n/pull/22470)（移除 Kitemaker 节点）：Kitemaker 节点及其凭证已从 n8n 中移除，因为 Kitemaker 服务已被其提供商退役。使用 Kitemaker 节点的工作流将不再起作用，应迁移离开此集成。
* [Spontit Node Remove Spontit node](https://github.com/n8n-io/n8n/pull/22467)（移除 Spontit 节点）：Spontit 节点及其凭证类型已从 n8n 中移除，因为 Spontit 服务已退役且集成不再起作用。使用 Spontit 节点的工作流需要更新为使用替代通知服务。
* [Validate nodes before activating](https://github.com/n8n-io/n8n/pull/22916)（激活前验证节点）：工作流激活现在在激活前验证工作流包含至少一个类似触发的节点（trigger、poller 或 webhook），修复了此检查在多主实例中不可靠的 bug。尝试激活无效工作流会返回清晰的验证错误，工作流之前的活跃状态被保留。目前只在前端执行的额外验证检查将在未来更新中添加。
