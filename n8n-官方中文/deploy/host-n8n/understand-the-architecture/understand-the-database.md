---
description: 理解 n8n 数据库结构
contentType: explanation
nodeTitle: 理解数据库（Understand the database）
originalFilePath: hosting/architecture/database-structure.md
originalUrl: 'https://docs.n8n.io/hosting/architecture/database-structure'
url: >-
  https://docs.n8n.io/deploy/host-n8n/understand-the-architecture/understand-the-database
layout:
  description:
    visible: false
---

# 数据库结构（Database structure）

本页介绍 n8n 数据库中每张表的用途。

## 数据库与查询技术（Database and query technology）

默认情况下，n8n 使用 SQLite 作为数据库。如果你使用其他数据库，结构会类似，但数据类型可能因数据库而异。

n8n 使用 [TypeORM](https://github.com/typeorm/typeorm) 进行查询和迁移（migrations）。

要检查 n8n 数据库，你可以使用 [DBeaver](https://dbeaver.io)——一个开源的全能数据库工具。

## 数据表（Tables）

这些是 n8n 在安装设置期间创建的数据表。

### auth_identity

存储使用 [SAML](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/verify-user-identity/use-saml) 时外部认证提供方的详细信息。

### auth_provider_sync_history

存储 SAML 连接的历史记录。

### credentials_entity

存储用于与集成进行认证的凭据[^1]。

### event_destinations

包含[日志流（Log streaming）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems)的目标（destination）配置。

### execution_data

包含运行时刻的工作流，以及执行数据。

### execution_entity

存储所有保存的工作流执行记录。工作流设置会影响 n8n 保存哪些执行记录。

### execution_metadata

存储[自定义执行数据（Custom executions data）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/understand-executions/customize-executions-data)。

### installed_nodes

列出你的 n8n 实例中安装的[社区节点（community nodes）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/community-nodes/installation-and-management)。

### installed_packages

你的 n8n 实例中安装的 npm 社区节点包的详细信息。[installed_nodes](#installed_nodes) 列出每个单独的节点。`installed_packages` 列出 npm 包，一个包可能包含多个节点。

### migrations

所有数据库迁移的日志。更多关于[迁移（Migrations）](https://typeorm.io/docs/advanced-topics/migrations/)的内容请参阅 TypeORM 的文档。

### project

列出你实例中的[项目（projects）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects)。

### project_relation

描述用户与[项目（project）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects)之间的关系，包括用户的[角色类型（role type）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles)。

### role

目前未使用。供未来的自定义角色功能使用。

### settings

记录自定义实例设置。这些是无法通过环境变量控制的设置。它们包括：

* 实例所有者是否已设置
* 用户是否选择跳过所有者和用户管理设置
* 某些类型的认证（包括 SAML 和 LDAP）是否开启
* 许可证密钥

### shared_credentials

把凭据映射到用户。

### shared_workflow

把工作流映射到用户。

### tag_entity

n8n 实例中创建的所有工作流标签。这张表列出标签本身。[workflows_tags](#workflows_tags) 记录哪些工作流有哪些标签。

### user

包含用户数据。

### variables

存储[变量（variables）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/define-custom-variables)。

### webhook_entity

记录你的 n8n 实例工作流中的活跃 webhook。这不仅仅是 Webhook 节点中使用的 webhook，还包括任何触发器节点使用的所有活跃 webhook。

### workflow_entity

你的 n8n 实例中保存的工作流。

### workflow_history

存储工作流的旧版本。

### workflow_statistics

统计工作流 ID 及其状态。

### workflows_tags

把标签映射到工作流。[tag_entity](#tag_entity) 包含标签详情。

## 实体关系图（Entity Relationship Diagram, ERD）

!["n8n ERD"](../../.gitbook/assets/n8n-database-diagram.png)

{% hint style="info" %}
**小白提示**：看不懂每张表没关系——记住几个关键的就够了：`workflow_entity`（工作流本体）、`execution_entity`/`execution_data`（执行记录）、`credentials_entity`（凭据，千万要保护好！）、`user`（用户）、`shared_workflow`/`shared_credentials`（谁对什么有访问权限）。后面以 `auth_`、`event_` 开头的表一般是企业版功能在用的。
{% endhint %}

[^1]: 在 n8n 中，凭据（credentials）存储用于连接特定应用和服务的认证信息。用你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）创建凭据后，就可以使用相应的应用节点与服务交互。
