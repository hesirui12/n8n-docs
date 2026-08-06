---
title: n8n
contentType:
  - integration
  - reference
priority: medium
nodeTitle: n8n
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.n8n.md
originalUrl: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n
url: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n
description: >-
  n8n（工作流自动化平台）中 n8n 节点的文档。
  包含使用指南和示例链接。
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

# n8n

> **大白话**：这个节点是用来"管理 n8n 自己"的。就像"n8n 管理自己"，你可以在工作流里调用 n8n 的 API 去创建/删除/获取工作流、创建/删除凭据、查看或删除执行记录、生成安全审计报告等。适合：自动化备份工作流、批量清理执行历史、监控实例安全状态等"自己管自己"的场景。

一个用于与 n8n 本身集成的节点。此节点允许你在工作流中使用 [n8n API](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api)。

更多关于使用 n8n API 的信息，请参考 [n8n REST API 文档](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api)。要直接使用 API 端点，请参考 [API 端点参考（API endpoint reference）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api/api-reference)。

{% hint style="info" %}
**凭据（Credentials）**

你可以在 [API 身份验证（API authentication）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api/authentication) 文档中找到此节点的身份验证信息。
{% endhint %}

{% hint style="warning" %}
**SSL**

此节点不支持 SSL。如果你的服务器要求 SSL 连接，请使用 [HTTP 请求节点](n8n-nodes-base.httprequest/README.md) 来调用 [n8n API](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api)。HTTP 请求节点有 [提供 SSL 证书](../credentials/httprequest.md#provide-an-ssl-certificate) 的相关选项。
{% endhint %}

## 操作（Operations）

* Audit（审计）
  * [**生成（Generate）** 一次安全审计](n8n-nodes-base.n8n.md#generate-audit)
* Credential（凭据）
  * [**创建（Create）** 一个凭据](n8n-nodes-base.n8n.md#create-credential)
  * [**删除（Delete）** 一个凭据](n8n-nodes-base.n8n.md#delete-credential)
  * [**获取结构（Get Schema）**](n8n-nodes-base.n8n.md#get-credential-schema)：使用此操作获取某种凭据类型的数据结构
* Execution（执行记录）
  * [**获取（Get）** 一条执行记录](n8n-nodes-base.n8n.md#get-execution)
  * [**获取多条（Get Many）** 执行记录](n8n-nodes-base.n8n.md#get-many-executions)
  * [**删除（Delete）** 一条执行记录](n8n-nodes-base.n8n.md#delete-execution)
* Workflow（工作流）
  * [**发布（Publish）** 一个工作流](n8n-nodes-base.n8n.md#activate-deactivate-delete-and-get-workflow)
  * [**创建（Create）** 一个工作流](n8n-nodes-base.n8n.md#create-workflow)
  * [**取消发布（Unpublish）** 一个工作流](n8n-nodes-base.n8n.md#activate-deactivate-delete-and-get-workflow)
  * [**删除（Delete）** 一个工作流](n8n-nodes-base.n8n.md#activate-deactivate-delete-and-get-workflow)
  * [**获取（Get）** 一个工作流](n8n-nodes-base.n8n.md#activate-deactivate-delete-and-get-workflow)
  * [**获取多条（Get Many）** 工作流](n8n-nodes-base.n8n.md#get-many-workflows)
  * [**更新（Update）** 一个工作流](n8n-nodes-base.n8n.md#update-workflow)

## 生成安全审计（Generate audit）

此操作没有参数。使用以下选项配置它：

* **Categories（类别）**：选择你希望审计包含的风险类别。选项包括：
  * **Credentials（凭据）**
  * **Database（数据库）**
  * **Filesystem（文件系统）**
  * **Instance（实例）**
  * **Nodes（节点）**
* **Days Abandoned Workflow（废弃工作流天数）**：使用此选项设置"多少天没有执行"后就把某个工作流视为废弃。输入一个天数。默认是 `90`。

> **小白提示**：安全审计相当于"体检报告"，检查 n8n 实例有没有安全隐患（比如用了弱密码、证书有问题、有长时间没运行的工作流等）。选好类别和废弃天数，运行后把报告交给管理员看看即可。

## 创建凭据（Create credential）

使用以下参数配置此操作：

* **Name（名称）**：输入你想要创建的凭据的名称。
* **Credential Type（凭据类型）**：输入凭据的类型。可用的类型取决于 n8n 实例上安装的节点。一些内置类型包括 `githubApi`、`notionApi` 和 `slackApi`。
* **Data（数据）**：输入一个有效的 JSON 对象，包含该 **Credential Type（凭据类型）** 所需的属性。要查看预期格式，请使用 **Get Schema（获取结构）** 操作。

> **小白提示**：比如你想用工作流自动创建一个 GitHub 凭据，Credential Type 填 `githubApi`，Data 里按 schema 要求的格式填上 accessToken 等字段的 JSON。

## 删除凭据（Delete credential）

使用以下参数配置此操作：

* **Credential ID（凭据 ID）**：输入你想要删除的凭据的 ID。

## 获取凭据结构（Get credential schema）

使用以下参数配置此操作：

* **Credential Type（凭据类型）**：输入凭据的类型。可用的类型取决于 n8n 实例上安装的节点。一些内置类型包括 `githubApi`、`notionApi` 和 `slackApi`。

> **小白提示**：想创建某个类型的凭据但不知道要填哪些字段？先运行一次"获取结构"，它会告诉你这个类型需要哪些属性、格式长什么样。

## 获取执行记录（Get execution）

使用以下参数配置此操作：

* **Execution ID（执行记录 ID）**：输入你想要检索的执行记录的 ID。

### 获取执行记录选项（Get execution option）

你还可以使用此**选项（Option）**进一步配置此操作：

* **Include Execution Details（包含执行详情）**：使用此开关设置是否包含详细的执行数据：打开（turned on）则包含，关闭（turned off）则不包含。

## 获取多条执行记录（Get many executions）

使用以下参数配置此操作：

* **Return All（返回全部）**：设置是返回所有结果（打开，turned on），还是将结果限制在输入的 **Limit（数量上限）** 内（关闭，turned off）。
* **Limit（数量上限）**：当 **Return All** 开关关闭时，设置要返回的结果数量。

### 获取多条执行记录筛选条件（Get many executions filters）

你还可以使用这些**筛选条件（Filters）**进一步配置此操作：

* **Workflow（工作流）**：按工作流筛选执行记录。选项包括：
  * **From list（从列表选择）**：选择一个工作流作为筛选条件。
  * **By URL（按 URL）**：输入一个工作流 URL 作为筛选条件。
  * **By ID（按 ID）**：输入一个工作流 ID 作为筛选条件。
* **Status（状态）**：按状态筛选执行记录。选项包括：
  * **Error（出错）**
  * **Success（成功）**
  * **Waiting（等待中）**

### 获取多条执行记录选项（Get many execution options）

你还可以使用此**选项（Option）**进一步配置此操作：

* **Include Execution Details（包含执行详情）**：使用此开关设置是否包含详细的执行数据：打开（turned on）则包含，关闭（turned off）则不包含。

## 删除执行记录（Delete execution）

使用以下参数配置此操作：

* **Execution ID（执行记录 ID）**：输入你想要删除的执行记录的 ID。

## 发布、取消发布、删除和获取工作流（Publish, unpublish, delete, and get workflow）

**Publish（发布）**、**Unpublish（取消发布）**、**Delete（删除）** 和 **Get（获取）** 工作流操作都包含同一个参数：选择你要执行操作的那个 **Workflow（工作流）**。选项包括：

* **From list（从列表选择）**：从列表中选择工作流。
* **By URL（按 URL）**：输入工作流的 URL。
* **By ID（按 ID）**：输入工作流的 ID。

## 创建工作流（Create workflow）

使用以下参数配置此操作：

* **Workflow Object（工作流对象）**：输入一个有效的 JSON 对象，包含新工作流的详细信息。该对象需要以下字段：
  * `name`
  * `nodes`
  * `connections`
  * `settings`

更多信息请参考 [n8n API 参考（n8n API reference）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api/api-reference)。

> **小白提示**：`nodes` 是工作流里所有节点的配置数组，`connections` 是节点之间的连线关系。如果你已经有一个工作流，可以把它的导出 JSON 当作模板来改。这算高级用法，不熟悉 JSON 的话建议手动在界面上创建。

## 获取多条工作流（Get many workflows）

使用以下参数配置此操作：

* **Return All（返回全部）**：设置是返回所有结果（打开，turned on），还是将结果限制在输入的 **Limit（数量上限）** 内（关闭，turned off）。
* **Limit（数量上限）**：当 **Return All** 开关关闭时，设置要返回的结果数量。

### 获取多条工作流筛选条件（Get many workflows filters）

你还可以使用这些**筛选条件（Filters）**进一步配置此操作：

* **Return Only Published Workflows（只返回已发布的工作流）**：选择是只返回已发布的工作流（打开，turned on），还是返回已发布和未发布的工作流（关闭，turned off）。
* **Tags（标签）**：输入返回的工作流必须具备的标签列表，用逗号分隔。

## 更新工作流（Update workflow）

使用以下参数配置此操作：

* **Workflow（工作流）**：选择你想要更新的工作流。选项包括：
  * **From list（从列表选择）**：从列表中选择工作流。
  * **By URL（按 URL）**：输入工作流的 URL。
  * **By ID（按 ID）**：输入工作流的 ID。
* **Workflow Object（工作流对象）**：输入一个有效的 JSON 对象来更新工作流。该对象需要以下字段：
  * `name`
  * `nodes`
  * `connections`
  * `settings`

更多信息请参考 [n8n API | 更新工作流（Update a workflow）文档](https://docs.n8n.io/api/api-reference/#tag/Workflow/paths/~1workflows~1%7Bid%7D/put)。

## 模板和示例（Templates and examples）

[浏览 n8n 集成模板](https://n8n.io/integrations/n8n) 或 [搜索所有模板](https://n8n.io/workflows/)
