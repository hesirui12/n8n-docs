---
title: 用户管理、SMTP 和双因素认证（User management, SMTP, and 2FA）环境变量
description: 用于设置用户管理和电子邮件（email）的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 用户管理和双因素认证（User management and 2FA）
originalFilePath: hosting/configuration/environment-variables/user-management-smtp-2fa.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/environment-variables/user-management-smtp-2fa
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/user-management-and-2fa
layout:
  description:
    visible: false
---

# 用户管理、SMTP 和双因素认证（User management, SMTP, and 2FA）环境变量

{% hint style="info" %}
**大白话**：这一页是「用户管理全家桶」：发邀请/重置密码邮件需要配置 SMTP 邮箱（host、端口、账号密码、SSL 等）；登录令牌（JWT）的有效期和自动刷新；双因素认证（2FA）的总开关；以及用环境变量预配置实例所有者账号。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

关于设置用户管理和电子邮件的更多信息，请参见[用户管理（User management）](../../user-management.md)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_EMAIL_MODE` | String | `smtp` | 启用电子邮件。 |
| `N8N_SMTP_HOST` | String | - | _你的 SMTP 服务器名称（your_SMTP_server_name）_ |
| `N8N_SMTP_PORT` | Number | - | _你的 SMTP 服务器端口（your_SMTP_server_port）_ |
| `N8N_SMTP_USER` | String | - | _你的 SMTP 用户名（your_SMTP_username）_ |
| `N8N_SMTP_PASS` | String | - | _你的 SMTP 密码（your_SMTP_password）_ |
| `N8N_SMTP_OAUTH_SERVICE_CLIENT` | String | - | 如果在服务账号中使用 2LO，这里是你的客户端 ID。 |
| `N8N_SMTP_OAUTH_PRIVATE_KEY` | String | - | 如果在服务账号中使用 2LO，这里是你的私钥。 |
| `N8N_SMTP_SENDER` | String | - | 发件人邮箱地址。你可以选择性地包含发件人名称。带名称的示例：_n8n `<contact@n8n.com>`_ |
| `N8N_SMTP_SSL` | Boolean | `true` | 是否对 SMTP 使用 SSL（true）或不使用（false）。 |
| `N8N_SMTP_STARTTLS` | Boolean | `true` | 是否对 SMTP 使用 STARTTLS（true）或不使用（false）。 |
| `N8N_UM_EMAIL_TEMPLATES_INVITE` | String | - | 你的 HTML 邮件模板的完整路径。这会覆盖邀请邮件（invite emails）的默认模板。 |
| `N8N_UM_EMAIL_TEMPLATES_PWRESET` | String | - | 你的 HTML 邮件模板的完整路径。这会覆盖密码重置邮件的默认模板。 |
| `N8N_UM_EMAIL_TEMPLATES_WORKFLOW_SHARED` | String | - | 覆盖用于通知用户某个工作流被共享的默认 HTML 模板。请提供模板的完整路径。 |
| `N8N_UM_EMAIL_TEMPLATES_CREDENTIALS_SHARED` | String | - | 覆盖用于通知用户某个凭据（credential）被共享的默认 HTML 模板。请提供模板的完整路径。 |
| `N8N_UM_EMAIL_TEMPLATES_PROJECT_SHARED` | String | - | 覆盖用于通知用户某个项目（project）被共享的默认 HTML 模板。请提供模板的完整路径。 |
| `N8N_USER_MANAGEMENT_JWT_SECRET` | String | - | 设置一个特定的 JWT 密钥。默认情况下，n8n 会在启动时生成一个。 |
| `N8N_USER_MANAGEMENT_JWT_DURATION_HOURS` | Number | 168 | 设置 JWT 的过期时间（小时）。 |
| `N8N_USER_MANAGEMENT_JWT_REFRESH_TIMEOUT_HOURS` | Number | 0 | 在 JWT 过期前多少小时自动刷新它。0 表示在 `N8N_USER_MANAGEMENT_JWT_DURATION_HOURS` 的 25% 时刷新。-1 表示永不刷新，这会强制用户在 `N8N_USER_MANAGEMENT_JWT_DURATION_HOURS` 定义的期限后重新登录。 |
| `N8N_MFA_ENABLED` | Boolean | `true` | 是否启用双因素认证（true）或禁用（false）。如果现有用户已经启用了 2FA，n8n 会忽略这个设置。 |
| `N8N_INVITE_LINKS_EMAIL_ONLY` | Boolean | `false` | 设为 true 时，n8n 只通过电子邮件发送邀请链接，不会通过 API 暴露它们。这个选项通过防止邀请 URL 被程序化访问或被高权限用户访问来增强安全性。 |

## 通过环境变量管理实例所有者（Instance owner using environment variables）

把 `N8N_INSTANCE_OWNER_MANAGED_BY_ENV` 设为 `true`，可以通过环境变量预先配置（pre-provision）实例所有者。关于激活模式如何工作的说明，请参见[使用环境变量管理实例设置（Manage instance settings using environment variables）](../../manage-settings-using-environment-variables.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/75cM0VtFejV1gnDTFOSV/" %}
