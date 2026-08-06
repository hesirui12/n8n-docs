---
description: 配置自托管 n8n 以支持用户管理
contentType: howto
nodeTitle: 用户管理（User management）
originalFilePath: hosting/configuration/user-management-self-hosted.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/user-management-self-hosted'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/user-management'
layout:
  description:
    visible: false
---

# 配置自托管 n8n 以支持用户管理（Configure self-hosted n8n for user management）

n8n 的用户管理功能允许你邀请其他人一起在你的 n8n 实例中工作。

本文档介绍如何配置你的 n8n 实例以支持用户管理，以及开始邀请用户的步骤。

{% hint style="info" %}
**小白提示**：用户管理 = 让多个人各自用账号登录同一个 n8n，而不是共用一个账号。默认情况下，n8n 实例只有一个所有者账号；开启用户管理后，你可以创建成员账号并分配不同权限。多人协作、给客户交付工作流时很有用。
{% endhint %}

更多使用信息请参考主指南 [用户管理（User management）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access)，包括：

* [管理用户（Managing users）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/add-and-remove-users)
* [实例角色（Instance roles）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/understand-instance-roles)
* [最佳实践（Best practices）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/follow-best-practices)

LDAP 设置信息请参见 [LDAP](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/verify-user-identity/connect-ldap)。

SAML 设置信息请参见 [SAML](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/verify-user-identity/use-saml)。

{% hint style="info" %}
**不支持的旧用户管理方式**

在 1.0 版本中，n8n：
- 移除了对 **basic auth（基础认证）** 和 **JWT** 的支持
- 移除了 `N8N_USER_MANAGEMENT_DISABLED` 环境变量。在 n8n 的近期版本中，不存在受支持的「禁用登录界面」的方式，包括本地或开发用途也不支持。如果你需要简化本地开发的登录流程，可以考虑使用密码管理器、设置一个简单的本地密码，或者用脚本化方式走一遍标准登录流程。
{% endhint %}

## 设置（Setup）

设置 n8n 的用户管理分三个阶段：

1. 配置你的 n8n 实例使用你的 SMTP 服务器。
2. 启动 n8n，并按应用内的设置步骤操作。
3. 邀请用户。

### 第一步：SMTP

n8n 建议设置一个 SMTP 服务器，用于用户邀请和密码重置。

{% hint style="info" %}
**自 0.210.1 起为可选项**

从 0.210.1 版本开始，这一步是可选的。你可以选择手动复制并发送邀请链接，而不设置 SMTP。注意：如果跳过这一步，用户将无法重置密码。
{% endhint %}

{% hint style="info" %}
**小白提示**：SMTP 是「发邮件」的协议标准。n8n 用它来给新用户发邀请邮件、给忘记密码的用户发重置邮件。你不需要自己搭邮件服务器——使用 QQ 邮箱、163 邮箱、Gmail、企业邮箱等的 SMTP 服务即可（在邮箱设置里开启 SMTP 后会给你服务器地址和授权码）。
{% endhint %}

从你的 SMTP 提供商那里获取以下信息：

* 服务器名称（Server name）
* SMTP 用户名
* SMTP 密码
* SMTP 发件人名称

要用 n8n 设置 SMTP，请为你的 n8n 实例配置 SMTP 环境变量。关于如何设置环境变量，请参见 [配置（Configuration）](basic-configuration.md)

| 变量（Variable） | 类型（Type） | 说明（Description） | 是否必需（Required?） |
| -------- | ---- | ----------- | --------- |
| `N8N_EMAIL_MODE` | string | `smtp` | 必需 |
| `N8N_SMTP_HOST` | string | _你的_SMTP_服务器名称_ | 必需 |
| `N8N_SMTP_PORT` | number | _你的_SMTP_服务器端口_ 默认为 `465`。| 可选 |
| `N8N_SMTP_USER` | string | _你的_SMTP_用户名_ | 可选 |
| `N8N_SMTP_PASS` | string | _你的_SMTP_密码_ | 可选 |
| `N8N_SMTP_OAUTH_SERVICE_CLIENT` | string | _你的_OAuth_服务客户端_ | 可选 |
| `N8N_SMTP_OAUTH_PRIVATE_KEY` | string | _你的_OAuth_私钥_ | 可选 |
| `N8N_SMTP_SENDER` | string | 发件人邮箱地址。你可以选择性地包含发件人名称。带名称的示例：_n8n `<contact@n8n.com>`_ | 必需 |
| `N8N_SMTP_SSL` | boolean | 是否对 SMTP 使用 SSL（true）或不使用（false）。默认为 `true`。 | 可选 |
| `N8N_UM_EMAIL_TEMPLATES_INVITE` | string | HTML 邮件模板的完整路径。这会覆盖邀请邮件的默认模板。 | 可选 |
| `N8N_UM_EMAIL_TEMPLATES_PWRESET` | string | HTML 邮件模板的完整路径。这会覆盖密码重置邮件的默认模板。 | 可选 |
| `N8N_UM_EMAIL_TEMPLATES_WORKFLOW_SHARED` | String | 覆盖「工作流被共享」通知的默认 HTML 模板。请提供模板的完整路径。 | 可选 |
| `N8N_UM_EMAIL_TEMPLATES_CREDENTIALS_SHARED` | String | 覆盖「凭据被共享」通知的默认 HTML 模板。请提供模板的完整路径。 | 可选 |
| `N8N_UM_EMAIL_TEMPLATES_PROJECT_SHARED` | String | 覆盖「项目被共享」通知的默认 HTML 模板。请提供模板的完整路径。 | 可选 |

如果你的 n8n 实例已经在运行，你需要重启它，新的 SMTP 设置才会生效。

{% hint style="info" %}
**更多配置选项**

还有更多配置选项可以作为环境变量使用。完整的列表请参见 [环境变量（Environment variables）](basic-configuration/use-environment-variables/README.md)。其中包括一些选项，可以禁用标签（tags）、工作流模板（workflow templates）和个人化调查问卷（personalization survey），如果你不想让你的用户看到它们的话。
{% endhint %}

{% hint style="info" %}
**SMTP 新手？**

如果你不熟悉 SMTP，这篇 [SendGrid 的博客文章](https://sendgrid.com/blog/what-is-an-smtp-server/) 提供了简短介绍，而 [维基百科的简单邮件传输协议文章](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) 提供了更详细的技术背景。
{% endhint %}

### 第二步：应用内设置（In-app setup）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/c0111xcskz1G8PKOQogB/" %}

#### 用环境变量预配置实例所有者（Pre-provision the instance owner from environment variables）

{% hint style="info" %}
**自 n8n v2.17.0 起可用**


{% endhint %}

你可以用环境变量预配置实例所有者，而不必走应用内的设置流程。把 `N8N_INSTANCE_OWNER_MANAGED_BY_ENV` 设为 `true` 并提供所有者的详细信息。关于这个「激活模式」如何工作，请参见 [使用环境变量管理实例设置（Manage instance settings using environment variables）](manage-settings-using-environment-variables.md)。

要在初始化之后修改所有者邮箱，请参见 [修改自托管 n8n 的实例所有者邮箱（Change the instance owner email for self-hosted n8n）](change-instance-owner-email.md)。

{% hint style="warning" %}
**`N8N_INSTANCE_OWNER_PASSWORD_HASH` 必须是 bcrypt 哈希值**

这个变量要求填入「已经用 bcrypt 算法哈希过」的值。如果直接填明文密码，会导致登录失败。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/75cM0VtFejV1gnDTFOSV/" %}

{% hint style="info" %}
**小白提示**：这是「自动化部署」最常用的技巧：第一次启动 n8n 时，它不会让你在浏览器里注册账号，而是直接用环境变量里的信息创建所有者账号，全程无人值守。需要同时提供邮箱、名字、姓氏和密码哈希，缺一不可。
{% endhint %}

### 第三步：邀请用户（Invite users）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/8qoOEjsLz4RnydVBogNy/" %}

{% hint style="info" %}
**小白提示**：邀请用户 = 在 n8n 界面里进入「用户管理」，输入对方的邮箱发送邀请（如果配置了 SMTP）或手动复制邀请链接发给他。对方打开链接设置自己的密码后，就成为实例成员。之后可以随时调整每个用户的角色（所有者、管理员、成员等）和权限。
{% endhint %}
