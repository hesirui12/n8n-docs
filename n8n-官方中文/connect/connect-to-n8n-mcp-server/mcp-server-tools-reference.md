---
title: n8n MCP 服务器工具参考
description: >-
  n8n MCP 服务器暴露的所有工具的完整参考，包括工作流管理、工作流构建器和数据表工具。
nodeTitle: MCP 服务器工具参考
originalFilePath: advanced-ai/mcp/mcp_tools_reference.md
originalUrl: 'https://docs.n8n.io/advanced-ai/mcp/mcp_tools_reference'
url: >-
  https://docs.n8n.io/connect/connect-to-n8n-mcp-server/mcp-server-tools-reference
layout:
  description:
    visible: false
---

# n8n MCP 服务器工具参考

本页介绍实例级 MCP 服务器暴露的所有工具。

{% hint style="info" %}
**小白提示**：这篇是「工具说明书」。你（或你连接的 AI 工具）通过 MCP 调用 n8n 时，能用的就是下面这些工具。每个工具都有：功能说明、参数（Parameters，调用时要传什么）、返回结果（Output，会拿回什么）、注意事项（Notes）。AI 客户端会自动根据这些说明生成正确的调用，人看这篇是为了了解 n8n 到底能做什么。
{% endhint %}

---

## 工作流管理（Workflow management）

### search_workflows（搜索工作流）

按可选筛选条件搜索工作流。返回每个工作流的预览。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 默认值 | 说明 |
|------|------|----------|---------|-------------|
| `query` | `string` | 否 | | 按名称或描述筛选 |
| `projectId` | `string` | 否 | | 按项目 ID 筛选 |
| `tags` | `string[]` | 否 | | 按标签名称筛选。使用 AND 逻辑——工作流必须包含列表中的所有标签才算匹配。 |
| `limit` | `integer` | 否 | `200` | 限制结果数量（最大 200） |
| `sortBy` | `string` | 否 | `"updatedAt:desc"` | 结果排序方式。可选值：`"updatedAt:desc"`、`"updatedAt:asc"`、`"createdAt:desc"`、`"createdAt:asc"`、`"name:asc"`、`"name:desc"` |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `data` | `array` | 工作流预览列表 |
| `data[].id` | `string` | 工作流的唯一标识符 |
| `data[].name` | `string \| null` | 工作流名称 |
| `data[].description` | `string \| null` | 工作流描述 |
| `data[].active` | `boolean \| null` | 工作流是否处于激活状态 |
| `data[].createdAt` | `string \| null` | 工作流创建时的 ISO 时间戳 |
| `data[].updatedAt` | `string \| null` | 工作流最后保存时的 ISO 时间戳 |
| `data[].triggerCount` | `number \| null` | 与该工作流关联的触发器数量 |
| `data[].scopes` | `string[]` | 用户对该工作流的权限 |
| `data[].canExecute` | `boolean` | 用户是否有权限执行该工作流 |
| `data[].availableInMCP` | `boolean` | 该工作流是否对 MCP 工具可见 |
| `data[].tags` | `array` | 分配给工作流的标签，每个标签包含 `id` 和 `name` |
| `count` | `integer` | 符合筛选条件的工作流总数 |

#### 注意事项（Notes）

- 结果数量上限为 200。
- 默认按最近更新的工作流优先排序。
- 结果中包含每个工作流的用户权限范围（scopes），这样 MCP 客户端可以知道该工作流有哪些可用操作。
- 按 `tags` 筛选以及结果中的 `tags` 字段，从 n8n v2.27.0 起可用。可以使用 `list_tags` 来发现可用的标签名称。
- **重要**：该工具可以列出用户有权访问的所有工作流，无论其「可在 MCP 中使用（Available in MCP）」设置如何。

### get_workflow_details（获取工作流详情）

获取某个特定工作流的详细信息，包括触发器详情。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `workflowId` | `string` | 是 | 要获取的工作流 ID |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `workflow` | `object` | 经过脱敏（sanitized）处理、可供 MCP 安全消费的工作流数据 |
| `workflow.id` | `string` | 工作流 ID |
| `workflow.name` | `string \| null` | 工作流名称 |
| `workflow.active` | `boolean` | 工作流是否有已发布的激活版本 |
| `workflow.isArchived` | `boolean` | 工作流是否已归档 |
| `workflow.versionId` | `string` | 当前工作流版本 ID |
| `workflow.activeVersionId` | `string \| null` | 激活的工作流版本 ID（如果存在） |
| `workflow.triggerCount` | `number` | 触发器数量 |
| `workflow.createdAt` | `string \| null` | 工作流创建时的 ISO 时间戳 |
| `workflow.updatedAt` | `string \| null` | 工作流最后保存时的 ISO 时间戳 |
| `workflow.settings` | `object \| null` | 工作流设置 |
| `workflow.connections` | `object` | 工作流连接图 |
| `workflow.nodes` | `array` | 工作流节点列表。凭据引用已被剥离 |
| `workflow.activeVersion` | `object \| null` | 激活版本的工作流图（如果存在） |
| `workflow.activeVersion.nodes` | `array` | 激活版本中的节点。凭据引用已被剥离 |
| `workflow.activeVersion.connections` | `object` | 激活版本中的连接 |
| `workflow.tags` | `array` | 带 `id` 和 `name` 的标签 |
| `workflow.meta` | `object \| null` | 工作流元数据 |
| `workflow.parentFolderId` | `string \| null` | 父文件夹 ID |
| `workflow.description` | `string` | 工作流描述（如果已设置） |
| `workflow.scopes` | `string[]` | 用户对该工作流的权限 |
| `workflow.canExecute` | `boolean` | 用户是否有权限执行该工作流 |
| `triggerInfo` | `string` | 描述如何触发该工作流的人类可读说明 |

#### 注意事项（Notes）

- 返回的节点会剥离敏感的凭据数据。
- 如果工作流已发布，会包含激活版本的详情。
- 包含用户权限范围，以及当前用户是否可以执行该工作流。
- 使用 `triggerInfo` 来了解如何调用受支持的触发器节点。

---

### execute_workflow（执行工作流）

按 ID 执行工作流。立即返回执行 ID，不等待执行完成。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 默认值 | 说明 |
|------|------|----------|---------|-------------|
| `workflowId` | `string` | 是 | | 要执行的工作流 ID |
| `executionMode` | `"manual" \| "production"` | 否 | `"production"` | `"manual"` 测试当前版本，`"production"` 执行已发布（激活）的版本 |
| `inputs` | `object` | 否 | | 提供给工作流的输入（可判别联合，见下文） |

**`inputs` 变体（由 `type` 判别）：**

| 类型 | 字段 | 说明 |
|------|--------|-------------|
| `chat` | `chatInput: string` | 面向聊天型工作流的输入 |
| `form` | `formData: Record<string, unknown>` | 面向表单型工作流的输入数据 |
| `webhook` | `webhookData: { method?, query?, body?, headers? }` | 面向 Webhook 型工作流的输入数据 |

**`webhookData` 字段：**

| 字段 | 类型 | 必填 | 默认值 | 说明 |
|-------|------|----------|---------|-------------|
| `method` | `"GET" \| "POST" \| "PUT" \| "DELETE" \| "PATCH" \| "HEAD" \| "OPTIONS"` | 否 | `"GET"` | HTTP 方法 |
| `query` | `Record<string, string>` | 否 | | 查询字符串参数 |
| `body` | `Record<string, unknown>` | 否 | | 请求体数据 |
| `headers` | `Record<string, string>` | 否 | | HTTP 请求头 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `executionId` | `string \| null` | 执行 ID；如果无法启动执行则为 `null` |
| `status` | `"started" \| "error"` | 工作流执行是否成功启动 |
| `error` | `string` | 执行无法启动时的错误信息 |

#### 注意事项（Notes）

- 该工具会启动工作流并立即返回。使用返回的 `executionId` 调用 `get_execution` 来查看最终执行状态或获取执行数据。
- 生产模式支持包含 Webhook、Chat Trigger（聊天触发器）、Form Trigger（表单触发器）和 Schedule Trigger（计划触发器）节点的工作流。
- 手动模式还支持 Manual Trigger（手动触发器）节点。
- 当 `executionMode` 为 `"production"` 时，工作流必须有已发布（激活）的版本。
- 如果工作流中有多个受支持的触发器，使用工作流执行工具时，MCP 客户端可能只能使用其中第一个来触发工作流。
- 不支持执行包含多步骤表单或任何人工参与（human-in-the-loop）交互的工作流。

---

### test_workflow（测试工作流）

{% hint style="info" %}
**n8n v2.15.0 起可用**

{% endhint %}

使用钉住数据（pin data）测试工作流，从而绕过外部服务。触发器节点、带凭据的节点和 HTTP Request（HTTP 请求）节点会被钉住（使用模拟数据）。其他节点（Set、If、Code 等）正常执行，包括不需要凭据的 I/O 节点，如 Execute Command（执行命令）或文件读写节点。

{% hint style="info" %}
**小白提示**：「钉住数据」是 n8n 的一个功能：手动给节点指定固定的假数据。测试时，凡是会碰到真实服务的节点都用假数据代替，这样测试永远不会真的调用外部 API、不会真的扣费、也不会污染你的数据。相当于给工作流做「不带真料」的彩排。
{% endhint %}

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `workflowId` | `string` | 是 | 要测试的工作流 ID |
| `pinData` | `Record<string, array>` | 是 | 所有工作流节点的钉住数据。 |
| `triggerNodeName` | `string` | 否 | 可选：指定从哪个触发器节点开始执行。默认使用第一个触发器节点。 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `executionId` | `string \| null` | 测试执行 ID |
| `status` | `string` | 测试执行的状态。可选值：`"success"`、`"error"`、`"running"`、`"waiting"`、`"canceled"`、`"crashed"`、`"new"`、`"unknown"` |
| `error` | `string` | 执行失败时的错误信息 |

#### 注意事项（Notes）

- 可以用来在不设置凭据、不触碰外部服务的情况下测试工作流逻辑。
- 该工具同步执行工作流（会等待执行完成）。
- 有强制执行的 MCP 执行超时时间（5 分钟）。

---

### prepare_test_pin_data（准备测试钉住数据）

{% hint style="info" %}
**n8n v2.15.0 起可用**

{% endhint %}

为工作流准备测试钉住数据。触发器节点、带凭据的节点和 HTTP Request（HTTP 请求）节点需要钉住数据。逻辑节点（Set、If、Code 等）和不需要凭据的 I/O 节点（Execute Command、文件读写）无需钉住数据即可正常执行。返回描述每个需要钉住数据的节点预期输出形状的 JSON Schema。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `workflowId` | `string` | 是 | 要为其生成测试钉住数据的工作流 ID |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `nodeSchemasToGenerate` | `Record<string, JsonSchema>` | 需要钉住数据的节点。键是节点名称，值是描述预期输出形状的 JSON Schema 对象。 |
| `nodesWithoutSchema` | `string[]` | 需要钉住数据但没有输出 schema 的节点名称。每个节点使用空默认值 `[{"json": {}}]`。 |
| `nodesSkipped` | `string[]` | 不需要钉住数据、测试时会正常执行的节点。 |
| `coverage` | `object` | 覆盖率统计 |
| `coverage.withSchemaFromExecution` | `number` | 根据最近一次成功执行的输出推断出 schema 的节点数 |
| `coverage.withSchemaFromDefinition` | `number` | 从节点类型定义中获得 schema 的节点数 |
| `coverage.withoutSchema` | `number` | 没有数据或 schema 的节点数 |
| `coverage.skipped` | `number` | 将正常执行（无需钉住数据）的节点数 |
| `coverage.total` | `number` | 已启用节点的总数 |

#### 注意事项（Notes）

- 应使用这些 schema 来为 `test_workflow` 生成逼真的示例数据。

---

### publish_workflow（发布工作流）

{% hint style="info" %}
**n8n v2.12.0 起可用**

{% endhint %}

发布（激活）工作流，使其可用于生产执行。这会从当前草稿创建一个激活版本。

{% hint style="info" %}
**小白提示**：n8n 里「发布」= 把草稿正式「上线」。发布后，计划触发器、Webhook 等生产环境事件才会真正触发这个工作流。编辑草稿不会影响线上版本，这就是为什么有「草稿」和「激活版本」两个概念。
{% endhint %}

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `workflowId` | `string` | 是 | 要发布的工作流 ID |
| `versionId` | `string` | 否 | 可选：要发布的版本 ID。如果不提供，则发布当前的草稿版本。 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `success` | `boolean` | 发布是否成功 |
| `workflowId` | `string` | 工作流 ID |
| `activeVersionId` | `string \| null` | 发布后的激活版本 ID |
| `error` | `string` | 发布失败时的错误信息 |


---

### unpublish_workflow（取消发布工作流）

{% hint style="info" %}
**n8n v2.12.0 起可用**

{% endhint %}

取消发布（停用）工作流，使其不再可用于生产执行。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `workflowId` | `string` | 是 | 要取消发布的工作流 ID |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `success` | `boolean` | 取消发布是否成功 |
| `workflowId` | `string` | 工作流 ID |
| `error` | `string` | 取消发布失败时的错误信息 |


---

### search_projects（搜索项目）

{% hint style="info" %}
**n8n v2.14.0 起可用**

{% endhint %}

搜索当前用户可以访问的项目。在特定项目中创建工作流或数据表之前，请先用它解析出项目 ID。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `query` | `string` | 否 | 按名称筛选项目。结果先按大小写不敏感的精确匹配排序，再按部分匹配排序。 |
| `type` | `"personal" \| "team"` | 否 | 按项目类型筛选 |
| `limit` | `integer` | 否 | 限制结果数量（最大 100） |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `data` | `array` | 匹配的项目列表，按大小写不敏感的精确匹配优先排序 |
| `data[].id` | `string` | 项目的唯一标识符 |
| `data[].name` | `string` | 项目名称 |
| `data[].type` | `"personal" \| "team"` | 项目类型 |
| `data[].matchType` | `"exact" \| "partial"` | 项目名称是与查询完全匹配还是部分匹配。仅在提供了 `query` 时出现 |
| `count` | `integer` | 匹配项目总数 |
| `teamProjectsEnabled` | `boolean` | 此实例是否已获得团队项目许可。为 `false` 时，`create_workflow_from_code` 默认会省略 `projectId`，因此工作流会在调用者的个人项目中创建，除非用户显式选择了返回的可访问项目之一。错误响应中会省略此字段。从 n8n v2.26.0 起可用。 |
| `hint` | `string` | 选择结果的指导提示。当匹配存在歧义时（例如没有精确匹配但有多条部分匹配），或当实例未获得团队项目许可时出现 |

#### 注意事项（Notes）

- 结果数量上限为 100。
- 如果用户指定了项目名称，请先调用此工具，再把解析出的项目 ID 传给 `create_workflow_from_code`、`update_workflow` 或数据表工具。
- 如果存在 `hint`，先遵循它的建议再行动。例如，不要在多条部分匹配之间乱猜，而是请用户澄清。

---

### search_folders（搜索文件夹）

{% hint style="info" %}
**n8n v2.14.0 起可用**

{% endhint %}

搜索项目内的文件夹。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `projectId` | `string` | 是 | 要在其中搜索文件夹的项目 ID |
| `query` | `string` | 否 | 按名称筛选文件夹（大小写不敏感的部分匹配） |
| `limit` | `integer` | 否 | 限制结果数量（最大 100） |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `data` | `array` | 匹配的文件夹列表 |
| `data[].id` | `string` | 文件夹的唯一标识符 |
| `data[].name` | `string` | 文件夹名称 |
| `data[].parentFolderId` | `string \| null` | 父文件夹 ID；如果在项目根目录则为 `null` |
| `count` | `integer` | 匹配文件夹总数 |

#### 注意事项（Notes）

- 结果数量上限为 100。
- 该工具让 MCP 客户端能够在特定文件夹中创建工作流。

---

### list_tags（列出标签）

{% hint style="info" %}
**n8n v2.27.0 起可用**

{% endhint %}

列出实例中的所有工作流标签。标签是全局的（不限定项目），可以与 `search_workflows` 一起使用来筛选结果。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 默认值 | 说明 |
|------|------|----------|---------|-------------|
| `limit` | `integer` | 否 | `500` | 限制结果数量（最大 500） |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `data` | `array` | 实例中可用的工作流标签 |
| `data[].id` | `string` | 标签的唯一标识符 |
| `data[].name` | `string` | 标签的显示名称 |
| `data[].usageCount` | `integer` | 使用该标签的未归档工作流数量 |
| `data[].createdAt` | `string` | 标签创建时的 ISO 时间戳 |
| `data[].updatedAt` | `string` | 标签最后更新时的 ISO 时间戳 |
| `count` | `integer` | 返回的标签数量 |
| `totalCount` | `integer` | 应用限制前的标签总数 |

#### 注意事项（Notes）

- 结果数量上限为 500。
- 标签是全局的，不限定项目。
- `usageCount` 只统计未归档的工作流。
- 需要 `tag:list` 全局权限。
- 仅当实例上启用了工作流标签时才可用。如果实例设置中禁用了标签，则不会暴露此工具。

---

## 执行管理（Execution management）

### get_execution（获取执行详情）

{% hint style="info" %}
**n8n v2.12.0 起可用**

{% endhint %}

按执行 ID 和工作流 ID 获取执行详情。默认只返回元数据。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `workflowId` | `string` | 是 | 执行所属的工作流 ID |
| `executionId` | `string` | 是 | 要获取的执行 ID |
| `includeData` | `boolean` | 否 | 是否包含完整的执行结果数据。默认为 false（仅元数据）。 |
| `nodeNames` | `string[]` | 否 | 当 `includeData` 为 true 时，只返回这些节点的数据。如果省略，则包含所有节点的数据。 |
| `truncateData` | `integer` | 否 | 当 `includeData` 为 true 时，限制每个节点输出返回的数据条数。 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `execution` | `object \| null` | 执行元数据；发生错误时为 `null` |
| `execution.id` | `string` | 执行 ID |
| `execution.workflowId` | `string` | 工作流 ID |
| `execution.mode` | `string` | 执行模式 |
| `execution.status` | `string` | 执行状态 |
| `execution.startedAt` | `string \| null` | 执行开始时的 ISO 时间戳 |
| `execution.stoppedAt` | `string \| null` | 执行停止时的 ISO 时间戳 |
| `execution.retryOf` | `string \| null` | 本次执行是对哪次执行的重试（ID） |
| `execution.retrySuccessId` | `string \| null` | 重试成功的执行 ID |
| `execution.waitTill` | `string \| null` | 执行将等待到的 ISO 时间戳 |
| `data` | `unknown` | 执行结果数据（仅当 `includeData` 为 true 时出现） |
| `error` | `string` | 请求失败时的错误信息 |

#### 注意事项（Notes）

- 在不需要完整执行数据时，使用轻量级的元数据查询（默认）。
- 通过 `nodeNames` 筛选和 `truncateData` 截断，有助于管理大型结果集。

---

### search_executions（搜索执行）

{% hint style="info" %}
**n8n v2.20.0 起可用**

{% endhint %}

按可选筛选条件搜索工作流执行记录。返回包含状态、时间和工作流 ID 的执行元数据。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `workflowId` | `string` | 否 | 按工作流 ID 筛选执行 |
| `status` | `string[]` | 否 | 按执行状态筛选。可选值：`"canceled"`、`"crashed"`、`"error"`、`"new"`、`"running"`、`"success"`、`"unknown"`、`"waiting"` |
| `startedAfter` | `string` | 否 | ISO 8601 时间戳。只返回在此时间之后开始的执行。 |
| `startedBefore` | `string` | 否 | ISO 8601 时间戳。只返回在此时间之前开始的执行。 |
| `limit` | `integer` | 否 | 限制结果数量（最大 200） |
| `lastId` | `string` | 否 | 分页游标。传入上一页的最后一条执行 ID。 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `data` | `array` | 匹配查询的执行列表 |
| `data[].id` | `string` | 执行的唯一标识符 |
| `data[].workflowId` | `string` | 该执行所属的工作流 |
| `data[].status` | `string` | 执行状态 |
| `data[].mode` | `string` | 执行是如何触发的。可选值：`"cli"`、`"error"`、`"integrated"`、`"internal"`、`"manual"`、`"retry"`、`"trigger"`、`"webhook"`、`"evaluation"`、`"chat"` |
| `data[].startedAt` | `string \| null` | 执行开始时的 ISO 时间戳 |
| `data[].stoppedAt` | `string \| null` | 执行停止时的 ISO 时间戳 |
| `data[].waitTill` | `string \| null` | 执行等待到的 ISO 时间戳 |
| `count` | `integer` | 匹配的执行总数；如果计数不可用则为 `-1` |
| `estimated` | `boolean` | 对于大型数据集，计数是否为估算值 |
| `error` | `string` | 查询失败时的错误信息 |

---

## 凭据管理（Credential management）

### list_credentials（列出凭据）

{% hint style="info" %}
**n8n v2.21.0 起可用**

{% endhint %}

列出当前用户可以访问的凭据。在从工作流节点引用凭据之前，先用它找到凭据 ID。永远不会返回凭据的机密数据。

{% hint style="info" %}
**小白提示**：凭据（credential）就是你存进 n8n 的各种账号密码、API 密钥。这个工具只告诉你「有哪些凭据、叫什么、什么类型」，绝不把密码本身拿出来——这是安全底线。
{% endhint %}

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `limit` | `integer` | 否 | 限制结果数量（最大 200） |
| `query` | `string` | 否 | 按名称筛选凭据（部分匹配） |
| `type` | `string` | 否 | 按凭据类型筛选，例如 `"slackApi"` 或 `"httpHeaderAuth"`（部分匹配） |
| `projectId` | `string` | 否 | 将结果限制为属于该项目的凭据 |
| `onlySharedWithMe` | `boolean` | 否 | 只返回直接共享给当前用户的凭据。默认为 false。 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `data` | `array` | 当前用户可以访问的凭据列表 |
| `data[].id` | `string` | 凭据的唯一标识符 |
| `data[].name` | `string` | 凭据名称 |
| `data[].type` | `string` | 凭据类型，例如 `"slackApi"` |
| `data[].scopes` | `string[]` | 用户对该凭据的权限，例如 `"credential:read"` |
| `data[].isManaged` | `boolean` | 凭据是否由 n8n 管理、用户无法编辑 |
| `data[].isGlobal` | `boolean` | 凭据是否对所有用户可用 |
| `data[].homeProject` | `object \| null` | 拥有该凭据的项目（如果存在） |
| `data[].homeProject.id` | `string` | 项目的唯一标识符 |
| `data[].homeProject.name` | `string` | 项目名称 |
| `data[].homeProject.type` | `string` | 项目类型。`"personal"` 是用户的私人项目；`"team"` 是多个用户可访问的共享项目。 |
| `count` | `integer` | 返回的凭据数量 |
| `error` | `string` | 请求失败时的错误信息 |

#### 注意事项（Notes）

- 结果数量上限为 200。
- 永远不会返回凭据的机密数据。
- 默认包含全局凭据。将 `onlySharedWithMe` 设为 true 可以排除全局凭据，只返回直接共享给当前用户的凭据。

---

## 工作流构建器（Workflow builder）

### get_sdk_reference（获取 SDK 参考）

{% hint style="info" %}
**n8n v2.12.0 起可用**

{% endhint %}

获取 n8n Workflow SDK 参考文档，包括模式（patterns）、表达式语法、函数、规则、导入语法、指南和设计指导。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 默认值 | 说明 |
|------|------|----------|---------|-------------|
| `section` | `string` | 否 | `"all"` | 要获取的文档部分。可选值：`"patterns"`、`"patterns_detailed"`、`"expressions"`、`"functions"`、`"rules"`、`"import"`、`"guidelines"`、`"design"`、`"all"` |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `reference` | `string` | 所请求部分的 SDK 参考文档内容 |

#### 注意事项（Notes）

- 在构建任何工作流之前，应该先调用它。
- 省略 `section` 或将其设为 `"all"`，可以获取完整参考。
- 使用 `"patterns_detailed"` 获取更详细的工作流模式示例。

---

### search_nodes（搜索节点）

{% hint style="info" %}
**n8n v2.12.0 起可用**

{% endhint %}

按服务名称、触发器类型或工具函数搜索 n8n 节点。返回节点 ID、判别符（resource/operation/mode，即资源/操作/模式）以及 `get_node_types` 工具需要的相关节点。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `queries` | `string[]` | 是（至少 1 个） | 搜索查询——服务名称（例如 `"gmail"`、`"slack"`）、触发器类型（例如 `"schedule trigger"`、`"webhook"`）或工具节点（例如 `"set"`、`"if"`、`"merge"`、`"code"`） |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `results` | `string` | 搜索结果，包含匹配的节点 ID、判别符和相关节点 |


---

### get_node_types（获取节点类型）

{% hint style="info" %}
**n8n v2.12.0 起可用**

{% endhint %}

获取 n8n 节点的 TypeScript 类型定义。返回精确的参数名称和结构。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `nodeIds` | `array` | 是（至少 1 个） | 节点类型请求对象数组。始终传递对象（即使只有一个节点），例如 `{ "nodeId": "n8n-nodes-base.gmail" }`。如果 `search_nodes` 的结果中有判别符，请一并包含。 |

**节点 ID 对象格式：**

| 字段 | 类型 | 必填 | 说明 |
|-------|------|----------|-------------|
| `nodeId` | `string` | 是 | 节点类型 ID（例如 `"n8n-nodes-base.gmail"`） |
| `version` | `string` | 否 | 特定版本（例如 `"2.1"`） |
| `resource` | `string` | 否 | 资源判别符（例如 `"message"`） |
| `operation` | `string` | 否 | 操作判别符（例如 `"send"`） |
| `mode` | `string` | 否 | 模式判别符 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `definitions` | `string` | 所请求节点的 TypeScript 类型定义 |

#### 注意事项（Notes）

- 对正确配置节点至关重要——MCP 客户端在编写工作流代码之前应始终调用它。
- 从 n8n v2.27.0 起，`nodeIds` 中的每一项都必须是对象。不再接受纯字符串形式的节点 ID——请把它们包装成 `{ "nodeId": "..." }`。
- 对于多变体节点，请使用 `resource`、`operation` 和 `mode` 判别符。

---

### get_workflow_best_practices（获取工作流最佳实践）

{% hint style="info" %}
**n8n v2.26.0 起可用**

{% endhint %}

获取某种工作流技术的最佳实践指导。在搜索节点或编写工作流代码之前使用它很有用。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `technique` | `string` | 是 | 要获取指导的工作流技术键。传入 `"list"` 可以查看所有可用的技术。可选值包括：`"scheduling"`、`"chatbot"`、`"form_input"`、`"scraping_and_research"`、`"monitoring"`、`"enrichment"`、`"triage"`、`"content_generation"`、`"document_processing"`、`"data_extraction"`、`"data_analysis"`、`"data_transformation"`、`"data_persistence"`、`"notification"`、`"knowledge_base"`、`"human_in_the_loop"`、`"web_app"` |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `technique` | `string` | 所请求的技术键；列出所有可用技术时为 `"list"` |
| `message` | `string` | 响应的人类可读摘要 |
| `documentation` | `string` | 所请求技术的最佳实践文档（如果可用） |
| `availableTechniques` | `array` | 可用技术列表；当 `technique` 为 `"list"` 时返回 |
| `availableTechniques[].technique` | `string` | 技术键 |
| `availableTechniques[].description` | `string` | 技术说明 |
| `availableTechniques[].hasDocumentation` | `boolean` | 该技术是否有详细的最佳实践文档 |

#### 注意事项（Notes）

- 以 `technique: "list"` 调用时，会列出所有可用技术。
- 某些已知技术可能还没有详细的文档。此时，工具会返回一条不包含 `documentation` 的消息。
- 它取代了之前用于工作流规划的 `get_suggested_nodes` 指导。

---

### explore_node_resources（探索节点资源）

{% hint style="info" %}
**n8n v2.27.0 起可用**

{% endhint %}

解析节点资源定位器（resource locator）或加载选项下拉框背后的真实值（例如 Slack 频道、Google Sheets 工作表选项卡或可用的 AI 模型）。需要为目标服务设置凭据。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `nodeType` | `string` | 是 | 来自 `search_nodes` / `get_node_types` 的完整限定节点类型 ID，例如 `"n8n-nodes-base.slack"` |
| `version` | `number` | 是 | 节点版本，例如 `4.7`。必须与 `search_nodes` 返回的版本之一匹配。 |
| `methodName` | `string` | 是 | 节点类型定义中 `@searchListMethod` 或 `@loadOptionsMethod` 注解中的确切方法名。先调用 `get_node_types` 读取真实的方法名——不要猜测。 |
| `methodType` | `"listSearch" \| "loadOptions"` | 是 | `@searchListMethod` 注解用 `"listSearch"`（支持筛选和分页）；`@loadOptionsMethod` 注解用 `"loadOptions"`。 |
| `credentialType` | `string` | 是 | 节点的凭据类型键，例如 `"slackApi"` 或 `"googleSheetsOAuth2Api"` |
| `credentialId` | `string` | 是 | 用户可访问的凭据 ID，从 `list_credentials` 获取 |
| `filter` | `string` | 否 | 可选的搜索/筛选文本，用于缩小结果范围 |
| `paginationToken` | `string` | 否 | 上一次调用返回的分页令牌，用于获取下一页（仅限 `listSearch`） |
| `currentNodeParameters` | `object` | 否 | 用于依赖型查找的当前节点参数。某些方法需要先有前置选择——例如，列出电子表格中的工作表需要 `{ documentId: { __rl: true, mode: "id", value: "<spreadsheetId>" } }`。查看类型定义中的 `displayOptions` 可以知道方法依赖哪些参数。 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `results` | `array` | 节点方法返回的资源 |
| `results[].name` | `string` | 资源的显示标签 |
| `results[].value` | `string \| number \| boolean` | 在工作流代码中使用的 ID |
| `results[].url` | `string` | 资源的 URL（如果有） |
| `results[].description` | `string` | 资源的说明（如果有） |
| `paginationToken` | `string` | 作为 `paginationToken` 传回以获取下一页。没有更多结果时该字段不出现。 |
| `builderHint` | `string` | 节点 `@builderHint` 注解给出的选择指导（如果有） |

#### 注意事项（Notes）

- 需要 `list_credentials` 提供的 `credentialId`；查找操作会以当前用户身份使用该凭据执行。
- `listSearch` 方法支持 `filter` 和通过 `paginationToken` 分页；`loadOptions` 方法不支持。
- 与其他大多数只读工具不同，此工具会实际访问外部服务。

---

### validate_workflow（校验工作流）

{% hint style="info" %}
**n8n v2.12.0 起可用**

{% endhint %}

校验 n8n Workflow SDK 代码。把代码解析为工作流并检查错误。在创建或更新工作流之前，务必先进行校验。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `code` | `string` | 是 | 使用 n8n Workflow SDK 编写的完整 TypeScript/JavaScript 工作流代码。必须包含工作流导出。 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `valid` | `boolean` | 工作流代码是否有效 |
| `nodeCount` | `number` | 工作流中的节点数。仅在有效时出现 |
| `warnings` | `array` | 校验警告（如果有） |
| `warnings[].code` | `string` | 标识警告类型的警告代码 |
| `warnings[].message` | `string` | 警告信息 |
| `warnings[].nodeName` | `string` | 触发警告的节点（如适用） |
| `warnings[].parameterPath` | `string` | 触发警告的参数路径（如适用） |
| `errors` | `string[]` | 校验错误。仅在无效时出现 |
| `hint` | `string` | 可操作的恢复提示（如果有） |

#### 注意事项（Notes）

- 必须在 `create_workflow_from_code` 或 `update_workflow` 之前调用。
- 即使代码有效，也可能存在警告。
- 如果 `valid` 为 `false` 且存在 `hint`，请在重试前遵循该提示。

---

### validate_node_config（校验节点配置）

{% hint style="info" %}
**n8n v2.25.1 起可用**

{% endhint %}

独立地根据生成的节点 schema 校验一个或多个节点配置。在组合节点时、组装工作流代码或调用 `update_workflow` 之前使用很有用。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `nodes` | `array` | 是（至少 1 个，最多 50 个） | 要独立校验的一个或多个节点配置 |
| `nodes[].name` | `string` | 否 | 可选的节点名称。会原样返回在结果中，帮助对应响应 |
| `nodes[].type` | `string` | 是 | 完整节点类型，例如 `"n8n-nodes-base.set"` 或 `"@n8n/n8n-nodes-langchain.agent"` |
| `nodes[].typeVersion` | `number` | 否 | 节点类型版本。默认为 `1` |
| `nodes[].parameters` | `object` | 否 | 节点参数对象，使用与工作流 JSON 相同的结构。默认为 `{}` |
| `nodes[].subnodes` | `unknown` | 否 | AI 父节点（例如 LangChain 代理的模型、记忆或工具引用）的可选子节点配置 |
| `nodes[].isToolNode` | `boolean` | 否 | 当校验的节点是通过 `ai_tool` 连接接入的 AI 工具子节点时，设为 `true` |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `valid` | `boolean` | 是否所有节点配置都有效 |
| `results` | `array` | 按输入顺序排列的逐节点校验结果 |
| `results[].index` | `number` | 该节点在输入数组中的位置 |
| `results[].name` | `string` | 输入节点名称的回显（如果提供了） |
| `results[].type` | `string` | 输入节点类型的回显 |
| `results[].valid` | `boolean` | 该节点配置是否有效 |
| `results[].errors` | `array` | 该节点的校验错误。节点有效时省略 |
| `results[].errors[].path` | `string` | 错误的参数路径 |
| `results[].errors[].message` | `string` | 人类可读的错误信息 |
| `error` | `string` | 校验无法运行时的顶层错误信息 |

#### 注意事项（Notes）

- 只校验节点参数 schema。
- 它不检查工作流层面的事项，例如连接、必需输入、触发器、断开连接的节点或凭据是否存在。
- 对于 LangChain 或 AI 工具子节点，请将 `isToolNode` 设为 `true`，以便 schema 评估正确的 display options（显示选项）分支。

---

### create_workflow_from_code（从代码创建工作流）

{% hint style="info" %}
**n8n v2.12.0 起可用**

{% endhint %}

从经过校验的 SDK 代码在 n8n 中创建工作流。把代码解析为工作流并保存。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `code` | `string` | 是 | 使用 n8n Workflow SDK 编写的完整 TypeScript/JavaScript 工作流代码。必须先用 `validate_workflow` 校验。 |
| `skillsUsed` | `string[]` | 否 | MCP 客户端生成该工作流时使用的 n8n skills 名称。值会在服务端规范化。 |
| `name` | `string` | 否 | 可选的工作流名称（最多 128 个字符）。如果不提供，使用代码中的名称。 |
| `description` | `string` | 否 | 工作流描述。超过 255 个字符的文本在保存前会缩短到 255。 |
| `projectId` | `string` | 否 | 要在其中创建工作流的项目 ID。默认为用户的个人项目。如果用户指定了项目名称，请先使用 `search_projects`。 |
| `folderId` | `string` | 否 | 要在其中创建工作流的文件夹 ID。要求同时提供 `projectId`。使用 `search_folders` 按名称在项目内查找文件夹。 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `workflowId` | `string` | 已创建工作流的 ID |
| `name` | `string` | 已创建工作流的名称 |
| `nodeCount` | `number` | 工作流中的节点数 |
| `url` | `string` | 在 n8n 中打开该工作流的 URL |
| `autoAssignedCredentials` | `array` | 自动分配给节点的凭据列表 |
| `autoAssignedCredentials[].nodeName` | `string` | 自动分配了凭据的节点名称 |
| `autoAssignedCredentials[].credentialName` | `string` | 自动分配的凭据名称 |
| `autoAssignedCredentials[].credentialType` | `string` | 自动分配的凭据类型 |
| `targetProject` | `object` | 工作流被创建于其中的项目 |
| `targetProject.id` | `string` | 项目 ID |
| `targetProject.name` | `string` | 项目的显示名称 |
| `targetProject.type` | `"personal" \| "team"` | 工作流创建在个人项目还是团队项目中 |
| `note` | `string` | 关于工作流创建的附加说明，例如凭据自动分配时跳过的节点，或缩短到 255 个字符的描述 |
| `hint` | `string` | 出错后可操作的恢复提示（如果有） |

#### 注意事项（Notes）

- 自动为节点分配可用的凭据。
- HTTP Request（HTTP 请求）节点在凭据自动分配时会被跳过，必须手动配置。
- 会在创建的工作流上把 `availableInMCP` 标志设为 true。
- 会给工作流打上 `aiBuilderAssisted` 元数据标记和 `builderVariant: mcp`。
- 自动解析 webhook 节点 ID。
- `folderId` 要求同时提供 `projectId`。
- 如果用户指定了目标项目，请先调用 `search_projects` 并传入解析后的 `projectId`；不要猜测。
- 创建后，使用 `targetProject` 字段告诉用户工作流创建在哪个项目中。
- 从 n8n v2.27.0 起，超过 255 个字符的 `description` 会被截断（而不是拒绝）；响应中的 `note` 会在发生这种情况时提到。

---

### update_workflow（更新工作流）

{% hint style="info" %}
**n8n v2.12.0 起可用。从 v2.20.0 开始，该工具改为执行部分更新（partial updates），而不是每次更新都重写整个工作流。**

{% endhint %}

通过应用一批有序的定向部分更新来更新 n8n 中已有的工作流。这批更新是原子性的：如果任何操作失败，则不会保存任何更改。

{% hint style="info" %}
**小白提示**：「原子性」的意思是——要么整批操作全部成功，要么全部失败回滚。不会出现改了一半、留下一半的情况，保证了工作流不会被改坏。
{% endhint %}

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `workflowId` | `string` | 是 | 要更新的工作流 ID |
| `skillsUsed` | `string[]` | 否 | MCP 客户端生成该工作流更新时使用的 n8n skills 名称。值会在服务端规范化。 |
| `operations` | `array` | 是 | 要应用的有序操作列表。必须包含 1-100 个操作。 |

#### 支持的操作（Supported operations）

| 操作 | 必填字段 | 可选字段 | 说明 |
|-----------|-----------------|-----------------|-------------|
| `updateNodeParameters` | `nodeName`、`parameters` | `replace` | 把 `parameters` 深度合并（deep-merge）到现有节点的参数中。如果 `replace` 为 `true`，则替换整个参数对象。 |
| `setNodeParameter` | `nodeName`、`path`、`value` |  | 使用 RFC 6901 JSON Pointer 路径设置一个参数，例如 `/jsonSchema` 或 `/options/systemMessage`。必要时会创建中间对象。不支持数组索引；请直接设置整个数组。 |
| `addNode` | `node.name`、`node.type`、`node.typeVersion` | `node.id`、`node.parameters`、`node.position`、`node.credentials`、`node.disabled`、`node.notes` | 添加一个节点。`position` 是 `[x, y]`。省略 `id` 时会自动生成。节点名称必须唯一。 |
| `removeNode` | `nodeName` |  | 移除一个节点以及所有入站和出站连接。相连的子节点会保留在工作流中，但会变成断开连接状态。 |
| `renameNode` | `oldName`、`newName` |  | 重命名节点并重写连接引用。新名称必须唯一。 |
| `addConnection` | `source`、`target` | `sourceIndex`、`targetIndex`、`connectionType` | 添加一条连接。`sourceIndex` 和 `targetIndex` 默认为 `0`；`connectionType` 默认为 `main`。已存在的相同连接不会重复添加。 |
| `removeConnection` | `source`、`target` | `sourceIndex`、`targetIndex`、`connectionType` | 移除一条匹配的连接。`sourceIndex` 和 `targetIndex` 默认为 `0`；`connectionType` 默认为 `main`。 |
| `setNodeCredential` | `nodeName`、`credentialKey`、`credentialId`、`credentialName` |  | 设置或替换节点的凭据引用。凭据必须可访问，并且与节点类型接受的凭据键匹配。 |
| `setNodePosition` | `nodeName`、`position` |  | 以 `[x, y]` 形式更新节点在画布上的位置。 |
| `setNodeDisabled` | `nodeName`、`disabled` |  | 启用或禁用节点。 |
| `setNodeSettings` | `nodeName`、`settings` |  | 更新节点级别的执行设置。`settings` 必须至少包含一个受支持的设置。 |
| `setWorkflowMetadata` |  | `name`、`description` | 更新工作流元数据。`name` 最大长度为 128 个字符；`description` 最大长度为 255 个字符。 |

#### `setNodeSettings` 字段

| 字段 | 类型 | 必填 | 说明 |
|-------|------|----------|-------------|
| `onError` | `"stopWorkflow" \| "continueRegularOutput" \| "continueErrorOutput"` | 否 | 节点出错时的行为 |
| `retryOnFail` | `boolean` | 否 | 节点失败时是否重试 |
| `maxTries` | `integer` | 否 | `retryOnFail` 为 true 时的尝试次数。必须是 2-5 |
| `waitBetweenTries` | `integer` | 否 | 重试尝试之间的等待毫秒数。必须是 0-5000 |
| `alwaysOutputData` | `boolean` | 否 | 节点是否应该始终输出数据 |
| `executeOnce` | `boolean` | 否 | 节点是否应该只执行一次 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `workflowId` | `string` | 已更新工作流的 ID |
| `name` | `string` | 已更新工作流的名称 |
| `nodeCount` | `number` | 工作流中的节点数 |
| `url` | `string` | 在 n8n 中打开该工作流的 URL |
| `appliedOperations` | `number` | 已应用的操作数量 |
| `autoAssignedCredentials` | `array` | 本次更新中添加的节点被自动分配的凭据 |
| `autoAssignedCredentials[].nodeName` | `string` | 自动分配了凭据的节点 |
| `autoAssignedCredentials[].credentialName` | `string` | 自动分配的凭据 |
| `autoAssignedCredentials[].credentialType` | `string` | 自动分配的凭据类型 |
| `validationWarnings` | `array` | 结果工作流的图和 JSON 校验警告。这些警告不会阻止保存 |
| `validationWarnings[].code` | `string` | 警告代码 |
| `validationWarnings[].message` | `string` | 警告信息 |
| `validationWarnings[].nodeName` | `string` | 与警告关联的可选节点 |
| `note` | `string` | 关于工作流更新的附加说明，例如凭据自动分配时跳过的 HTTP Request 节点 |
| `error` | `string` | 更新失败时的错误信息 |

#### 注意事项（Notes）

- 操作按顺序应用并原子保存。
- 除非显式更改，否则现有的凭据会被保留。
- 凭据自动分配只针对当前调用中添加的节点运行。
- HTTP Request（HTTP 请求）节点在凭据自动分配时会被跳过，必须手动配置。
- 结果工作流在保存前会经过校验。校验警告通过 `validationWarnings` 返回。
- 会给工作流打上 `aiBuilderAssisted` 元数据标记和 `builderVariant: mcp`。

---

### archive_workflow（归档工作流）

{% hint style="info" %}
**n8n v2.12.0 起可用**

{% endhint %}

按 ID 归档 n8n 中的工作流。

{% hint style="info" %}
**小白提示**：归档（archive）不等于删除。归档后工作流从列表中收起来，但数据还在，以后可以恢复。
{% endhint %}

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `workflowId` | `string` | 是 | 要归档的工作流 ID |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `archived` | `boolean` | 工作流是否已归档 |
| `workflowId` | `string` | 已归档工作流的 ID |
| `name` | `string` | 已归档工作流的名称 |

#### 注意事项（Notes）

- 幂等（idempotent）——对已归档的工作流再次调用会直接跳过。

---

## 数据表（Data tables）

### search_data_tables（搜索数据表）

{% hint style="info" %}
**n8n v2.16.0 起可用**

{% endhint %}

搜索当前用户可以访问的数据表。在修改数据表或向其中添加数据之前，先用它找到数据表 ID。

{% hint style="info" %}
**小白提示**：数据表（data table）是 n8n 内置的表格存储功能，像一个小型数据库。你可以让 AI 帮你建表、加列、加行，把工作流的运行结果存进去。
{% endhint %}

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `query` | `string` | 否 | 按名称筛选数据表（大小写不敏感的部分匹配） |
| `projectId` | `string` | 否 | 按项目 ID 筛选 |
| `limit` | `integer` | 否 | 限制结果数量（最大 100） |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `data` | `array` | 匹配查询的数据表列表 |
| `data[].id` | `string` | 数据表的唯一标识符 |
| `data[].name` | `string` | 数据表名称 |
| `data[].projectId` | `string` | 该数据表所属的项目 |
| `data[].createdAt` | `string` | 数据表创建时的 ISO 时间戳 |
| `data[].updatedAt` | `string` | 数据表最后更新时的 ISO 时间戳 |
| `data[].columns` | `array` | 该数据表中定义的列 |
| `data[].columns[].id` | `string` | 列的唯一标识符 |
| `data[].columns[].name` | `string` | 列名 |
| `data[].columns[].type` | `string` | 列数据类型。可选值：`"string"`、`"number"`、`"boolean"`、`"date"` |
| `data[].columns[].index` | `integer` | 列在表中的位置 |
| `count` | `integer` | 匹配的数据表总数 |

#### 注意事项（Notes）

- 结果数量上限为 100。

---

### create_data_table（创建数据表）

{% hint style="info" %}
**n8n v2.16.0 起可用**

{% endhint %}

创建一个包含指定列的新数据表。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `projectId` | `string` | 是 | 将在其中创建数据表的项目 ID |
| `name` | `string` | 是 | 数据表名称（最少 1、最多 128 个字符，在项目内必须唯一） |
| `columns` | `array` | 是（至少 1 个） | 要在数据表中创建的列 |
| `columns[].name` | `string` | 是 | 列名。必须以字母开头，只能包含字母、数字和下划线（最多 63 个字符）。 |
| `columns[].type` | `string` | 是 | 列的数据类型。可选值：`"string"`、`"number"`、`"boolean"`、`"date"` |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `id` | `string` | 已创建数据表的唯一标识符 |
| `name` | `string` | 已创建数据表的名称 |
| `projectId` | `string` | 已创建数据表的项目 ID |

#### 注意事项（Notes）

- 至少需要一列。
- 表名在项目内必须唯一。
- 列名必须匹配正则：`^[a-zA-Z][a-zA-Z0-9_]*$`（最多 63 个字符）。

---

### add_data_table_column（添加数据表列）

{% hint style="info" %}
**n8n v2.16.0 起可用**

{% endhint %}

向现有数据表添加新列。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `dataTableId` | `string` | 是 | 要添加列的数据表 ID |
| `projectId` | `string` | 是 | 该数据表所属的项目 ID |
| `name` | `string` | 是 | 列名。必须以字母开头，只能包含字母、数字和下划线（最多 63 个字符）。 |
| `type` | `string` | 是 | 新列的数据类型。可选值：`"string"`、`"number"`、`"boolean"`、`"date"` |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `success` | `boolean` | 操作是否成功 |
| `message` | `string` | 结果说明 |
| `column` | `object` | 已创建的列 |
| `column.id` | `string` | 列的唯一标识符 |
| `column.name` | `string` | 列名 |
| `column.type` | `string` | 列数据类型 |

#### 注意事项（Notes）

- 列名必须匹配正则：`^[a-zA-Z][a-zA-Z0-9_]*$`（最多 63 个字符）。
- 列创建后类型不可更改（通过 MCP 时）。

---

### rename_data_table_column（重命名数据表列）

{% hint style="info" %}
**n8n v2.16.0 起可用**

{% endhint %}

重命名数据表中的列。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `dataTableId` | `string` | 是 | 包含该列的数据表 ID |
| `projectId` | `string` | 是 | 该数据表所属的项目 ID |
| `columnId` | `string` | 是 | 要重命名的列 ID |
| `name` | `string` | 是 | 新的列名。必须遵循列命名规则。 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `success` | `boolean` | 操作是否成功 |
| `message` | `string` | 结果说明 |
| `column` | `object` | 已重命名的列 |
| `column.id` | `string` | 列的唯一标识符 |
| `column.name` | `string` | 新的列名 |
| `column.type` | `string` | 列数据类型 |

#### 注意事项（Notes）

- 新名称必须遵循列命名规则：`^[a-zA-Z][a-zA-Z0-9_]*$`（最多 63 个字符）。

---

### delete_data_table_column（删除数据表列）

{% hint style="info" %}
**n8n v2.16.0 起可用**

{% endhint %}

从数据表中删除一列。这会永久移除该列及其所有数据。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `dataTableId` | `string` | 是 | 包含该列的数据表 ID |
| `projectId` | `string` | 是 | 该数据表所属的项目 ID |
| `columnId` | `string` | 是 | 要删除的列 ID |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `success` | `boolean` | 操作是否成功 |
| `message` | `string` | 结果说明 |

#### 注意事项（Notes）

- 通过 MCP 删除列无法撤销。

---

### rename_data_table（重命名数据表）

{% hint style="info" %}
**n8n v2.16.0 起可用**

{% endhint %}

重命名现有的数据表。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `dataTableId` | `string` | 是 | 要重命名的数据表 ID |
| `projectId` | `string` | 是 | 该数据表所属的项目 ID |
| `name` | `string` | 是 | 数据表的新名称（最少 1、最多 128 个字符） |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `success` | `boolean` | 操作是否成功 |
| `message` | `string` | 结果说明 |

#### 注意事项（Notes）

- 名称在项目内必须唯一。

---

### add_data_table_rows（添加数据表行）

{% hint style="info" %}
**n8n v2.16.0 起可用**

{% endhint %}

向现有数据表插入行。每行是一个把列名映射到值的对象。

#### 参数（Parameters）

| 名称 | 类型 | 必填 | 说明 |
|------|------|----------|-------------|
| `dataTableId` | `string` | 是 | 要插入行的数据表 ID |
| `projectId` | `string` | 是 | 该数据表所属的项目 ID |
| `rows` | `array` | 是（至少 1 个，最多 1000 个） | 行对象数组。每个对象把列名映射到值（`string`、`number`、`boolean` 或 `null`）。 |

#### 输出（Output）

| 字段 | 类型 | 说明 |
|-------|------|-------------|
| `success` | `boolean` | 插入操作是否成功 |
| `insertedCount` | `integer` | 成功插入的行数 |

#### 注意事项（Notes）

- 每次调用最多 1000 行。
- 行值必须是 `string`、`number`、`boolean` 或 `null`。
- 行对象中的列名必须与数据表中现有的列名一致。
