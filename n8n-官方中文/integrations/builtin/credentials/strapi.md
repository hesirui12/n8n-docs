---
title: Strapi 凭证
description: >-
  Strapi 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Strapi 的身份。
contentType:
  - integration
  - reference
nodeTitle: Strapi credentials
originalFilePath: integrations/builtin/credentials/strapi.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/strapi'
url: 'https://docs.n8n.io/integrations/builtin/credentials/strapi'
layout:
  description:
    visible: false
---

# Strapi 凭证

{% hint style="info" %}
**大白话**：Strapi 是开源的无头 CMS（内容管理后台）。n8n 连它有两种方式：**用用户账号（邮箱+密码）** 登录，或者**用 API Token（API 令牌）** 登录（需要管理员权限）。选用户账号方式的话，还要先在 Strapi 后台给用户配置好权限角色，稍微有一点步骤，跟着下面的教程一步步做就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Strapi](../app-nodes/n8n-nodes-base.strapi.md)

## 先决条件

创建一个 [Strapi](https://strapi.io/) 管理员账号，并且：

- 能访问一个已有的 Strapi 项目。
- 该项目里至少有一个集合类型（collection type）。
- 该集合类型里已经有发布的数据。

更多信息请参考 Strapi 开发者[快速入门指南](https://docs.strapi.io/dev-docs/quick-start)。

## 支持的验证方式

- API 用户账号：需要一个有相应内容权限的用户账号。
- API token（API 令牌）：需要一个管理员账号。

## 相关资源

关于该服务的更多信息，请参考 [Strapi 官方文档](https://docs.strapi.io/dev-docs/api/rest)。

## 使用 API 用户账号

要配置这个凭证，你需要：

- 用户 **Email（邮箱）**：必须是用户账号的邮箱，不能是管理员账号的。详见下面的详细步骤。
- 用户 **Password（密码）**：必须是用户账号的密码，不能是管理员账号的。详见下面的详细步骤。
- **URL（地址）**：使用你的 Strapi 服务器的公开地址，定义在 `./config/server.js` 的 `url` 参数里。Strapi 建议使用绝对地址。
    - 如果是 Strapi Cloud 项目，用你云项目的地址，例如：`https://my-strapi-project-name.strapiapp.com`
- **API Version（API 版本）**：选择你想让请求使用的 API 版本。选项包括：
    - **Version 3（版本 3）**
    - **Version 4（版本 4）**

在 Strapi 里，配置分两步：

1. [配置角色](#configure-a-role)。
2. [创建用户账号](#create-a-user-account)。

每一步的详细说明见下文。

### 配置角色

要开放 API 访问，请在 **Settings（设置）> Users & Permissions Plugin（用户与权限插件）** 里使用用户与权限插件。

关于该插件的更多信息，请参考[配置用户与权限插件](https://docs.strapi.io/user-docs/settings/configuring-users-permissions-plugin-settings)。关于角色的更多信息，请参考[配置终端用户角色](https://docs.strapi.io/user-docs/users-roles-permissions/configuring-end-users-roles)。

为了让 n8n 凭证能用，用户必须拥有一个授予其对应集合类型 API 权限的角色。对于角色，你可以：

* 修改默认的 **Authenticated（已认证）** 角色，把权限加进去，再把用户分配到这个角色。更多信息请参考[配置角色权限](https://docs.strapi.io/user-docs/users-roles-permissions/configuring-end-users-roles#configuring-roles-permissions)。
* 新建一个角色，把权限加进去，再把用户分配到这个角色。更多信息请参考[创建新角色](https://docs.strapi.io/user-docs/users-roles-permissions/configuring-end-users-roles#creating-a-new-role)。

无论选哪种方式，打开角色后：

1. 进入 **Permissions（权限）** 区域。
2. 打开对应集合类型的区域。
3. 勾选该角色应该拥有的集合类型权限。选项包括：
    - `create`（创建，POST）
    - `find` 和 `findone`（查询，GET）
    - `update`（更新，PUT）
    - `delete`（删除，DELETE）
4. 对所有相关的集合类型重复上述操作。
5. 保存角色。

关于权限选项的更多信息，请参考[端点说明](https://docs.strapi.io/dev-docs/api/rest#endpoints)。

### 创建用户账号

现在你有了合适的角色，创建一个终端用户账号并把角色分配给它：

1. 进入 **Content Manager（内容管理器）> Collection Types（集合类型）> User（用户）**。
2. 选择 **Add new entry（新增条目）**。
3. 填写用户信息。n8n 凭证需要这些字段，不过你的 Strapi 项目可能还有更多自定义必填字段：
    - **Username（用户名）**：所有 Strapi 用户必填。
    - **Email（邮箱）**：在 Strapi 里填写，并在 n8n 凭证中用作 **Email（邮箱）**。
    - **Password（密码）**：在 Strapi 里填写，并在 n8n 凭证中用作 **Password（密码）**。
    - **Role（角色）**：选择你在上一步设置好的角色。

更多信息请参考[管理终端用户账号](https://docs.strapi.io/user-docs/users-roles-permissions/managing-end-users)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要：

- 一个 **API Token（API 令牌）**：在 **Settings（设置）> Global Settings（全局设置）> API Tokens（API 令牌）** 里创建 API token。关于创建和重新生成 API token 的更多详情，请参考 Strapi 的[创建新 API 令牌文档](https://docs.strapi.io/user-docs/settings/API-tokens#creating-a-new-api-token)。

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>API tokens 权限</strong></p><p>如果你在 <strong>Global settings（全局设置）</strong> 里看不到 <strong>API tokens（API 令牌）</strong> 选项，说明你的账号没有 <strong>API tokens &gt; Read（读取）</strong> 权限。</p></div>

- **URL（地址）**：使用你的 Strapi 服务器的公开地址，定义在 `./config/server.js` 的 `url` 参数里。Strapi 建议使用绝对地址。
    - 如果是 Strapi Cloud 项目，用你云项目的地址，例如：`https://my-strapi-project-name.strapiapp.com`
- **API Version（API 版本）**：选择你想让请求使用的 API 版本。选项包括：
    - **Version 3（版本 3）**
    - **Version 4（版本 4）**
