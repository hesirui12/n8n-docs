---
title: 自定义项目角色（Custom project roles）
description: 在 n8n 中创建和管理具有精细权限的自定义项目角色。
contentType: howto
nodeTitle: 创建自定义角色（Create custom roles）
originalFilePath: user-management/rbac/custom-roles.md
originalUrl: 'https://docs.n8n.io/user-management/rbac/custom-roles'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-project-roles
layout:
  description:
    visible: false
---

# 自定义项目角色（Custom project roles）

{% hint style="info" %}
**功能可用性（Feature availability）**

自定义角色适用于自托管企业版（Self-hosted Enterprise）和云企业版（Cloud Enterprise）套餐。有关套餐详情，请参阅 n8n 的[定价页面](https://n8n.io/pricing/)。

**可用版本：** n8n 1.122.0 及以上版本（2025 年 11 月 24 日发布）

密钥保险库（Secret vault）权限范围自 n8n 版本 `2.13.0` 起可用。
{% endhint %}

{% hint style="info" %}
**实例角色 vs 项目角色（Instance roles vs project roles）**

n8n 有两种类型的自定义角色：

**自定义实例角色（Custom instance roles）**：与用户在实例级别所需的行政管理能力相关的角色。参见[创建自定义实例角色](create-custom-instance-roles.md)。

**自定义项目角色（Custom project roles）**：在特定项目内部适用的角色。
{% endhint %}

{% hint style="info" %}
**小白解释：** 内置的项目角色只有三种固定搭配（Admin 管理员、Editor 编辑、Viewer 查看）。自定义项目角色让你「自己配」——比如做一个「只能创建和编辑工作流、但不能删除凭据」的角色。这样权限可以精细到单个操作级别，团队分工更灵活。
{% endhint %}

自定义项目角色允许你创建具有特定权限的角色，以满足团队的需求。与内置项目角色（Admin 管理员、Editor 编辑、Viewer 查看）不同，自定义角色允许你定义对工作流、凭据和其他项目资源的精细访问权限。

## 创建自定义角色（Create a custom role）

实例所有者（Owner）和实例管理员（Admin）可以创建自定义角色。

要创建自定义角色：

1. 前往 **设置（Settings）** > **角色（Roles）** > **项目角色（Project roles）**。
2. 选择 **创建角色（Create role）**。
3. 输入角色名称和可选的角色描述。
4. 为该角色选择权限（范围 scopes）：
	* **工作流权限（Workflow permissions）**：查看、执行、编辑、创建、发布、转移、删除工作流，或管理工作流的数据脱敏
	* **凭据权限（Credential permissions）**：查看、编辑、创建、共享、取消共享、转移或删除凭据
	* **项目权限（Project permissions）**：查看、编辑或删除项目
	* **文件夹权限（Folder permissions）**：查看、编辑、创建、转移或删除文件夹
	* **执行权限（Execution permission）**：查看已脱敏的执行数据
	* **密钥保险库权限（Secret vault permissions）**：查看、创建、编辑、删除或同步项目的密钥保险库
	* **密钥权限（Secrets permission）**：在凭据中使用密钥
	* **数据表权限（Data table permissions）**：查看表、查看行、编辑表、编辑行、创建或删除表
	* **项目变量权限（Project variable permissions）**：查看、编辑、创建或删除项目变量
	* **源代码控制（Source control）**：推送到源代码控制
5. 选择 **创建角色（Create role）**。

{% hint style="info" %}
**小白解释：** 「凭据（credentials）」就是 n8n 里存放各种账号密码、API 密钥的地方。项目里的工作流要连接外部服务（比如发邮件、调接口），靠的就是这些凭据。「密钥保险库（secret vault）」是存放密钥的保险柜；「数据脱敏（redaction）」是指执行记录里自动打码敏感数据的功能，只有特定角色能看被打码前的内容。
{% endhint %}

## 将自定义角色分配给用户（Assign a custom role to users）

项目管理员（Project admins）可以将自定义角色分配给项目成员。自定义角色仅在被分配的特定项目内生效。同一用户可以在不同项目中拥有不同角色（比如在 A 项目是管理员，在 B 项目只是查看者）。

要将自定义角色分配给用户：

1. 选择项目。
2. 选择 **项目设置（Project settings）**。
3. 在**项目成员（Project members）**下，浏览或搜索用户。
4. 选择用户，并从下拉菜单中选择自定义角色。
5. 选择 **保存（Save）**。

{% hint style="info" %}
**项目级权限（Project-level permissions）**

自定义角色权限仅在使用该角色的项目内生效。要在多个项目中授予相同权限，需要在每个项目中分别分配该自定义角色。
{% endhint %}

## 编辑自定义角色（Edit a custom role）

要更新现有的自定义角色：

1. 前往 **设置（Settings）** > **角色（Roles）** > **项目角色（Project roles）**。
2. 找到你要编辑的自定义角色。
3. 选择**三点菜单（three-dot menu）** > **编辑（Edit）**。
4. 更新角色名称、描述或权限。
5. 选择 **保存更改（Save changes）**。

{% hint style="warning" %}
**编辑会影响所有已分配的用户（Editing affects all assigned users）**

对自定义角色的更改会作用于任何项目中拥有该角色的所有用户。如果该角色在多个项目中使用，权限更改将应用到分配了该角色的所有地方。
{% endhint %}

## 复制自定义角色（Duplicate a custom role）

要基于现有角色创建新角色：

1. 前往 **设置（Settings）** > **角色（Roles）** > **项目角色（Project roles）**。
2. 找到你要复制的角色。
3. 选择**三点菜单（three-dot menu）** > **复制（Duplicate）**。
4. 按需更新角色名称和权限。
5. 选择 **创建角色（Create role）**。

## 删除自定义角色（Delete a custom role）

要删除自定义角色：

1. 前往 **设置（Settings）** > **角色（Roles）** > **项目角色（Project roles）**。
2. 找到你要删除的角色。
3. 选择**三点菜单（three-dot menu）** > **删除（Delete）**。
4. 确认删除。

{% hint style="info" %}
**删除前请先重新分配用户（Reassign users before deletion）**

如果有用户被分配了该角色，必须先将其重新分配到其他角色，然后才能删除它。
{% endhint %}

## 权限范围参考（Permission scopes reference）

自定义角色使用「权限范围（permission scopes）」来定义用户在项目内可以做什么。下面的每个范围对应**项目角色（Project roles）**编辑器中的一个复选框。小节标题与编辑器中的分区名称对应；范围代码（scope code，如 `workflow:create`）是你在 API 响应和审计日志（audit logs）中看到的内容。

{% hint style="info" %}
**自动授予的范围（Automatically granted scopes）**

n8n 会将某些范围成对组合，因此它们不会作为单独的复选框出现：

* 授予 `<resource>:read`（读取）也会授予该资源的列表范围（例如，`workflow:read` 会同时授予 `workflow:list`）。
* 授予 `workflow:publish`（发布）也会授予 `workflow:unpublish`（取消发布）。
{% endhint %}

{% hint style="info" %}
**小白解释：** 范围（scope）的写法是「资源类型:操作」。比如 `workflow:create` 就是「创建工作流」的权限，`credential:delete` 就是「删除凭据」的权限。每个权限范围都有对应的代码，看到这些代码你就知道它管什么了。
{% endhint %}

### 工作流范围（Workflow scopes）
* `workflow:create` - 创建新工作流
* `workflow:read` - 查看工作流详情
* `workflow:update` - 编辑工作流
* `workflow:execute` - 执行工作流
* `workflow:publish` - 发布工作流（同时授予 `workflow:unpublish`）
* `workflow:delete` - 删除工作流
* `workflow:move` - 在项目之间转移工作流
* `workflow:enableRedaction` - 为工作流开启数据脱敏（参见[执行数据脱敏（Execution data redaction）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/security/redact-execution-data)）
* `workflow:disableRedaction` - 为工作流关闭数据脱敏（参见[执行数据脱敏（Execution data redaction）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/security/redact-execution-data)）

### 凭据范围（Credential scopes）
* `credential:create` - 创建新凭据
* `credential:read` - 查看凭据详情
* `credential:update` - 编辑凭据
* `credential:delete` - 删除凭据
* `credential:move` - 在项目之间转移凭据
* `credential:share` - 与其他用户共享凭据
* `credential:unshare` - 取消凭据共享

### 项目范围（Project scopes）
* `project:read` - 查看项目详情
* `project:update` - 编辑项目设置
* `project:delete` - 删除项目

### 文件夹范围（Folder scopes）
* `folder:create` - 创建新文件夹
* `folder:read` - 查看文件夹内容
* `folder:update` - 重命名文件夹
* `folder:delete` - 删除文件夹
* `folder:move` - 转移文件夹

### 执行范围（Execution scopes）
* `execution:reveal` - 查看已脱敏的执行数据（参见[执行数据脱敏（Execution data redaction）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/security/redact-execution-data)）

### 密钥保险库范围（Secret vault scopes）
范围代码使用 `externalSecretsProvider` 前缀。角色编辑器将该分区列为**密钥保险库（Secrets vaults）**。

* `externalSecretsProvider:create` - 在项目中创建新的密钥保险库
* `externalSecretsProvider:read` - 查看项目中的密钥保险库
* `externalSecretsProvider:update` - 编辑密钥保险库配置
* `externalSecretsProvider:delete` - 从项目中删除密钥保险库
* `externalSecretsProvider:sync` - 重新加载保险库的密钥

### 密钥范围（Secrets scope）
范围代码使用 `externalSecret` 前缀。角色编辑器将该分区列为**密钥（Secrets）**。

* `externalSecret:list` - 在凭据中使用密钥

### 数据表范围（Data table scopes）
* `dataTable:create` - 创建新的数据表
* `dataTable:read` - 查看数据表结构
* `dataTable:update` - 编辑数据表结构
* `dataTable:delete` - 删除数据表
* `dataTable:readRow` - 从数据表中读取行
* `dataTable:writeRow` - 在数据表中插入或更新行

### 项目变量范围（Project variable scopes）
* `projectVariable:create` - 创建新变量
* `projectVariable:read` - 查看变量值
* `projectVariable:update` - 编辑变量值
* `projectVariable:delete` - 删除变量

### 源代码控制范围（Source control scopes）
* `sourceControl:push` - 将更改推送到源代码控制

## 常见自定义角色示例（Common custom role examples）

以下是可以为常见使用场景创建的自定义项目角色示例。请记住，这些角色仅在单个项目内生效，而不是在整个 n8n 实例范围内生效。

### 工作流开发者（Workflow developer）
适用于只与工作流打交道的用户（能干活，但不能碰凭据等敏感内容）：
* `workflow:create`、`workflow:read`、`workflow:update`、`workflow:execute`、`workflow:delete`
* `credential:read`（可以查看凭据但不能编辑）
* `project:read`

### 凭据管理员（Credential manager）
适用于专门管理凭据的用户：
* `credential:create`、`credential:read`、`credential:update`、`credential:delete`、`credential:share`
* `workflow:read`（查看工作流以了解凭据的使用情况）
* `project:read`

### 密钥使用者（Secrets user）
适用于在凭据中使用外部密钥、但不管理保险库的用户：
* `externalSecret:list`（在凭据表达式中使用密钥）
* `credential:create`、`credential:read`、`credential:update`（管理带密钥的凭据）
* `workflow:read`
* `project:read`

### 工作流发布者（Workflow publisher）
适用于可以发布工作流、但没有完整编辑权限的用户：
* `workflow:read`、`workflow:publish`
* `credential:read`
* `project:read`

{% hint style="info" %}
**组合范围（Combining scopes）**

你可以组合任意范围来创建符合你特定需求的角色。请遵循「最小权限原则」（principle of least privilege）：只授予用户完成任务所需的权限，不要多给。权限越小，出安全问题的风险越低。
{% endhint %}
