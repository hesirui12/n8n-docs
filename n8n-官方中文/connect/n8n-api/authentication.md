---
description: n8n 公开 REST API 的认证。
contentType: howto
nodeTitle: 认证
originalFilePath: api/authentication.md
originalUrl: 'https://docs.n8n.io/api/authentication'
url: 'https://docs.n8n.io/connect/n8n-api/authentication'
layout:
  description:
    visible: false
---

# API 认证

n8n 使用 API 密钥（API keys）对 API 调用进行认证。

{% hint style="info" %}
**功能可用性（Feature availability）**

免费试用期间不提供 n8n API。请升级后使用该功能。
{% endhint %}

{% hint style="info" %}
**小白提示**：API 密钥就像「程序专用密码」。你在网页上操作 n8n 用账号密码登录，而程序调用 API 时就用 API 密钥证明身份。每个密钥可以设置有效期（Expiration）和权限范围（Scopes），丢了还能删除重建，比直接暴露账号密码安全。
{% endhint %}

## 创建 API 密钥

1. 登录 n8n。
2. 进入 **设置（Settings）** > **n8n API**。
3. 选择 **创建一个 API 密钥（Create an API key）**。
4. 为密钥选择一个**标签（Label）**并设置**过期时间（Expiration）**。
5. 如果使用的是企业版（Enterprise）套餐，请选择要授予密钥的**范围（Scopes）**。完整的可用范围列表参见[API 范围](#api-scopes)。
6. 复制 **我的 API 密钥（My API Key）**，使用这个密钥来认证你的调用。

## 使用密钥调用 API

在你的 API 调用中，以名为 `X-N8N-API-KEY` 的请求头（header）发送 API 密钥。

例如，假设你想获取所有激活的工作流。你的 curl 请求将如下所示：

```shell
# For a self-hosted n8n instance <a href="#for-a-self-hosted-n8n-instance" id="for-a-self-hosted-n8n-instance"></a>
curl -X 'GET' \
  '<N8N_HOST>:<N8N_PORT>/<N8N_PATH>/api/v<version-number>/workflows?active=true' \
  -H 'accept: application/json' \
  -H 'X-N8N-API-KEY: <your-api-key>'

# For n8n Cloud <a href="#for-n8n-cloud" id="for-n8n-cloud"></a>
curl -X 'GET' \
  '<your-cloud-instance>/api/v<version-number>/workflows?active=true' \
  -H 'accept: application/json' \
  -H 'X-N8N-API-KEY: <your-api-key>'
```

{% hint style="info" %}
**小白提示**：逐段拆解这个请求——
- `curl -X 'GET'`：发起一个 GET 请求（获取数据）。
- `'<N8N_HOST>:<N8N_PORT>/<N8N_PATH>/api/v<version-number>/workflows?active=true'`：把尖括号里的占位符换成你的实际地址。`?active=true` 是查询参数，表示只要激活的工作流。
- `-H 'accept: application/json'`：告诉服务器「请返回 JSON 格式」。
- `-H 'X-N8N-API-KEY: <your-api-key>'`：**最关键的一行**——把你的 API 密钥放进请求头，n8n 靠它认出你是谁。
{% endhint %}

## 节点配置（Node configuration）

要从工作流内部调用 n8n API，请使用 [n8n 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.n8n)。创建凭据时，填写以下字段：

- **API Key（API 密钥）**：粘贴你在[创建 API 密钥](#create-an-api-key)中创建的密钥。
- **Base URL（基础 URL）**：按以下格式之一输入你实例的 API 根地址：
	- Cloud（云版）：`https://<name>.app.n8n.cloud/api/v1`，其中 `<name>` 是你的 Cloud 子域名。
	- 自托管：`https://<your-instance-url>/api/v1`。

可用的操作和参数，请参阅 [n8n 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.n8n) 文档。

## 删除 API 密钥

1. 登录 n8n。
2. 进入 **设置** > **n8n API**。
3. 在要删除的密钥旁边选择 **删除（Delete）**。
4. 选择 **永久删除（Delete Forever）** 确认删除。

## API 范围（API Scopes）

[企业版实例](https://n8n.io/enterprise/)的用户可以使用范围（scopes）来限制 API 密钥可以访问哪些资源和操作。选择密钥预期用途所需的最小范围。

非企业版的 API 密钥拥有账户所有资源和能力的完整访问权限。

{% hint style="info" %}
**API 密钥范围 vs. 项目角色范围**

API 密钥范围控制 API 密钥在实例级别能做什么。它们不同于项目内用于定义自定义角色的**项目角色范围（project role scopes）**。项目角色范围请参阅[自定义项目角色](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles)。
{% endhint %}

{% hint style="info" %}
**小白提示**：范围 = 给密钥上「权限保险」。比如你只想让程序读工作流，就只勾 `workflow:read`；别把 `workflow:delete` 也勾上，万一程序出错也不会把工作流删了。原则：**只给够用的最小权限**。
{% endhint %}

下表按资源分组，列出了创建带范围 API 密钥时可用的范围。

### 社区包范围（Community package scopes）

| 范围 | 说明 |
|-------|-------------|
| `communityPackage:install` | 在实例上安装社区节点包。 |
| `communityPackage:list` | 列出已安装的社区节点包。 |
| `communityPackage:uninstall` | 卸载社区节点包。 |
| `communityPackage:update` | 更新已安装的社区节点包。 |

### 凭据范围（Credential scopes）

| 范围 | 说明 |
|-------|-------------|
| `credential:create` | 创建凭据。 |
| `credential:read` | 获取一个凭据及其数据 schema。 |
| `credential:list` | 列出凭据。 |
| `credential:update` | 更新凭据。 |
| `credential:delete` | 删除凭据。 |
| `credential:move` | 把凭据转移到另一个项目。 |

### 数据表范围（Data table scopes）

| 范围 | 说明 |
|-------|-------------|
| `dataTable:create` | 创建数据表。 |
| `dataTable:read` | 获取一个数据表。 |
| `dataTable:list` | 列出数据表。 |
| `dataTable:update` | 更新数据表的元数据。 |
| `dataTable:delete` | 删除数据表。 |

### 数据表列范围（Data table column scopes）

| 范围 | 说明 |
|-------|-------------|
| `dataTableColumn:create` | 向数据表添加列。 |
| `dataTableColumn:read` | 获取数据表列。 |
| `dataTableColumn:update` | 更新数据表列。 |
| `dataTableColumn:delete` | 删除数据表列。 |

### 数据表行范围（Data table row scopes）

| 范围 | 说明 |
|-------|-------------|
| `dataTableRow:create` | 向数据表插入行。 |
| `dataTableRow:read` | 从数据表读取行。 |
| `dataTableRow:update` | 更新数据表中的现有行。 |
| `dataTableRow:delete` | 从数据表删除行。 |
| `dataTableRow:upsert` | 更新数据表中的现有行；如果没有行匹配筛选条件，则插入新行。 |

### 执行范围（Execution scopes）

| 范围 | 说明 |
|-------|-------------|
| `execution:read` | 获取一次执行及其详情。 |
| `execution:list` | 列出执行。 |
| `execution:retry` | 重试失败的执行。 |
| `execution:stop` | 停止正在运行的执行。 |
| `execution:delete` | 删除执行。 |

### 执行标签范围（Execution tags scopes）

| 范围 | 说明 |
|-------|-------------|
| `executionTags:list` | 读取分配给一次执行的注释标签。 |
| `executionTags:update` | 更新分配给一次执行的注释标签。 |

### 文件夹范围（Folder scopes）

| 范围 | 说明 |
|-------|-------------|
| `folder:create` | 在项目中创建文件夹。 |
| `folder:read` | 获取一个文件夹。 |
| `folder:list` | 列出项目中的文件夹。 |
| `folder:update` | 更新文件夹。 |
| `folder:delete` | 删除文件夹。 |

### 洞察范围（Insights scopes）

| 范围 | 说明 |
|-------|-------------|
| `insights:read` | 读取实例洞察数据，包括执行次数、失败率、节省的时间和平均运行时间。 |

### 项目范围（Project scopes）

| 范围 | 说明 |
|-------|-------------|
| `project:create` | 创建项目。 |
| `project:list` | 列出项目。 |
| `project:update` | 更新项目。 |
| `project:delete` | 删除项目。 |

### 安全审计范围（Security audit scopes）

| 范围 | 说明 |
|-------|-------------|
| `securityAudit:generate` | 为实例生成安全审计报告。 |

### 源代码控制范围（Source control scopes）

| 范围 | 说明 |
|-------|-------------|
| `sourceControl:pull` | 把更改从连接的源代码控制仓库拉取到实例。 |

### 标签范围（Tag scopes）

| 范围 | 说明 |
|-------|-------------|
| `tag:create` | 在全局标签注册表中创建标签。 |
| `tag:read` | 获取一个标签。 |
| `tag:list` | 列出标签。 |
| `tag:update` | 更新标签。 |
| `tag:delete` | 删除标签。 |

### 用户范围（User scopes）

| 范围 | 说明 |
|-------|-------------|
| `user:create` | 在实例上邀请或创建用户。 |
| `user:read` | 获取一个用户。 |
| `user:list` | 列出用户。 |
| `user:changeRole` | 更改用户的全局（实例级）角色。 |
| `user:enforceMfa` | 保留范围。没有 `/api/v1/` 端点使用它，所以在 Public API 密钥上选择此范围没有公开效果。 |
| `user:delete` | 从实例删除用户。 |

### 变量范围（Variable scopes）

| 范围 | 说明 |
|-------|-------------|
| `variable:create` | 创建实例变量。 |
| `variable:list` | 列出实例变量。 |
| `variable:update` | 更新实例变量。 |
| `variable:delete` | 删除实例变量。 |

### 工作流范围（Workflow scopes）

| 范围 | 说明 |
|-------|-------------|
| `workflow:create` | 创建工作流。 |
| `workflow:read` | 获取一个工作流及其详情。 |
| `workflow:list` | 列出工作流。 |
| `workflow:update` | 更新工作流。 |
| `workflow:delete` | 删除、归档或取消归档工作流。 |
| `workflow:move` | 把工作流转移到另一个项目。 |
| `workflow:activate` | 激活或停用工作流。在公开 API 中也被称为「发布/取消发布（publish/unpublish）」（`/workflows/{id}/activate` 和 `/workflows/{id}/deactivate`）。 |

### 工作流标签范围（Workflow tags scopes）

| 范围 | 说明 |
|-------|-------------|
| `workflowTags:list` | 读取分配给工作流的标签。 |
| `workflowTags:update` | 更新分配给工作流的标签。 |
