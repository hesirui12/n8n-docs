---
description: 在 n8n 中使用 LDAP。
contentType: howto
nodeTitle: 连接 LDAP（Connect LDAP）
originalFilePath: user-management/ldap.md
originalUrl: 'https://docs.n8n.io/user-management/ldap'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/connect-ldap
layout:
  description:
    visible: false
---

# 轻量目录访问协议（LDAP）

{% hint style="info" %}
**功能可用性（Feature availability）**

* 适用于自托管商业版（Self-hosted Business）和企业版（Enterprise）、以及云企业版（Cloud Enterprise）套餐。
* 你需要有 n8n 实例所有者（Owner）账号的访问权限。
{% endhint %}

{% hint style="info" %}
**小白解释：** LDAP（Lightweight Directory Access Protocol，轻量目录访问协议）是很多公司用来统一管理员工账号的「通讯录」。开启 LDAP 后，员工可以直接用公司账号（比如公司邮箱和密码）登录 n8n，不用在 n8n 里再注册一遍账号，密码也统一由公司目录管理。本页假设你已经熟悉 LDAP，并且已经搭好了一台 LDAP 服务器——n8n 这边只是「接上」它。
{% endhint %}

本页介绍如何在 n8n 中启用 LDAP。它假设你熟悉 LDAP，并且已经设置好了现有的 LDAP 服务器。

LDAP 允许用户使用其组织凭据（公司账号）登录 n8n，而不是使用 n8n 自己的登录。

## 启用 LDAP（Enable LDAP）

1. 以实例所有者（Owner）身份登录 n8n。
2. 选择 **设置（Settings）** <img src="../../.gitbook/assets/settings.png" alt="Settings icon" data-size="line"> > **LDAP**。
3. 打开 **启用 LDAP 登录（Enable LDAP Login）** 开关。
4. 使用 LDAP 服务器的信息填写各字段。
5. 选择 **测试连接（Test connection）** 检查你的连接设置，或选择 **保存连接（Save connection）** 直接创建连接。

启用 LDAP 后，除非你使用**用户过滤器（User Filter）**设置将他们排除在外，否则 LDAP 服务器上的任何人都可以登录 n8n 实例。

你仍然可以在 **设置（Settings）** > **用户（Users）** 页面上创建非 LDAP 用户（邮箱用户）。

{% hint style="info" %}
**小白解释：** 默认情况下「LDAP 目录里有什么人，谁就能登录 n8n」。如果只想让特定部门或特定组的人登录，就在**用户过滤器（User Filter）**里写过滤条件；想保留一部分人用邮箱密码登录，就继续用 **设置 > 用户** 页面创建邮箱用户。两种登录方式可以并存。
{% endhint %}

## 合并 n8n 账号和 LDAP 账号（Merging n8n and LDAP accounts）

如果 n8n 发现邮箱用户和 LDAP 用户有匹配的账号（邮箱相同），该用户必须使用其 LDAP 账号登录。n8n 实例所有者账号不受此规则影响：n8n 永远不会把所有者账号转换为 LDAP 用户。

{% hint style="info" %}
**小白解释：** 当某个邮箱既存在于 n8n 里、又存在于 LDAP 目录里时，n8n 以 LDAP 为准——以后这位用户只能用公司账号登录。只有「实例所有者」例外，永远是 n8n 自己的账号，不会变成 LDAP 账号。这样即使 LDAP 出问题，你也不会被锁在门外。
{% endhint %}

## n8n 中的 LDAP 用户账号（LDAP user accounts in n8n）

首次登录时，n8n 会为该 LDAP 用户创建一个 n8n 用户账号。

你必须在 LDAP 服务器上管理用户详情，而不是在 n8n 中管理。如果你在 LDAP 服务器上更新或删除了用户，n8n 账号会在下一次计划同步时更新，或在该用户下次尝试登录时更新，以先发生者为准。

{% hint style="info" %}
**用户删除（User deletion）**

如果你从 LDAP 服务器上移除了某位用户，他们会在下一次同步时失去 n8n 的访问权限。
{% endhint %}

## 关闭 LDAP（Turn LDAP off）

要关闭 LDAP：

1. 以实例所有者（Owner）身份登录 n8n。
2. 选择 **设置（Settings）** <img src="../../.gitbook/assets/settings.png" alt="Settings icon" data-size="line"> > **LDAP**。
3. 关闭 **启用 LDAP 登录（Enable LDAP Login）** 开关。

如果关闭 LDAP，n8n 会在现有 LDAP 用户下次登录时将其转换为邮箱用户。这些用户必须重置密码。
