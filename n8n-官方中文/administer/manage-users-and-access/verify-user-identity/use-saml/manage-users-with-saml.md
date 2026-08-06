---
title: 使用 SAML 管理用户（Manage users with SAML）
description: 启用 SAML 后如何管理用户和用户登录。
contentType: howto
nodeTitle: 使用 SAML 管理用户（Manage users with SAML）
originalFilePath: user-management/saml/managing.md
originalUrl: 'https://docs.n8n.io/user-management/saml/managing'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-saml/manage-users-with-saml
layout:
  description:
    visible: false
---

# 使用 SAML 管理用户（Manage users with SAML）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/9DXSTQsxYGisAV8xk6p4/" %}

{% hint style="info" %}
**小白解释：** 启用 SAML 后，绝大多数用户管理都在公司 IdP 那边做（加人、删人、改权限）。但有两个操作 n8n 这边仍然要手动处理：① 让个别用户「绕过 SAML」用邮箱密码登录（比如临时访客、或 IdP 暂时不可用时）；② 从 IdP 删除用户后，还要在 n8n 里手动删除一次（否则对方仍然保持着 n8n 的登录状态）。
{% endhint %}

有些用户管理任务会受到 SAML 的影响。

## 将用户排除在 SAML 之外（Exempt users from SAML）

你可以允许某些用户不使用 SAML 登录。方法如下：

1. 前往 **设置（Settings）** > **用户（Users）**。
2. 选择你想排除在 SAML 之外的用户的菜单图标。
3. 选择 **允许手动登录（Allow Manual Login）**。

{% hint style="info" %}
**小白解释：** 勾选「允许手动登录」后，这位用户就可以用 n8n 自己的邮箱+密码登录，不走 SAML。适合给没有公司账号的外部协作者用。注意：该用户需要先有 n8n 密码才能手动登录（密码可以在用户的个人设置里设置或重置）。
{% endhint %}

## 删除用户（Deleting users）

如果你从 IdP（身份提供方）中移除了某位用户，对方在 n8n 中仍然保持登录状态。你还需要在 n8n 中手动将其移除。删除用户的指导参见[管理用户](../../add-and-remove-users.md)。
