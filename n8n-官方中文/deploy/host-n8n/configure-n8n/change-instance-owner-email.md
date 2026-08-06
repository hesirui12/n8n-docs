---
title: 修改自托管 n8n 的实例所有者邮箱（Change the instance owner email for self-hosted n8n）
description: >-
  通过界面（UI）或环境变量修改自托管 n8n 实例的所有者（owner）邮箱地址。
contentType: howto
nodeTitle: 修改实例所有者邮箱（Change instance owner email）
originalFilePath: hosting/configuration/change-instance-owner-email.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/change-instance-owner-email'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/change-instance-owner-email'
layout:
  description:
    visible: false
---

# 修改自托管 n8n 的实例所有者邮箱（Change the instance owner email for self-hosted n8n）

你可以在界面（UI）里修改实例所有者的邮箱；如果你是用环境变量来管理实例所有者的话，也可以通过环境变量来修改。

{% hint style="info" %}
**所有者邮箱必须唯一**

所有者邮箱不能与实例上其他用户的邮箱重复。如果你想用的邮箱已经被另一个用户占用了，请先修改或删除那个用户，让该邮箱空出来后再使用。
{% endhint %}

修改所有者邮箱只是更新现有「实例所有者」账号的邮箱地址。它不会把所有权转让给另一个已存在的用户，也不会合并用户账号。

## 在界面里修改所有者邮箱（Change the owner email in the UI）

1. 用「实例所有者」账号登录 n8n。
2. 进入 **设置（Settings）** > **个人（Personal）**。
3. 修改 **邮箱（Email）** 字段。
4. 点击 **保存（Save）**。

## 使用环境变量修改所有者邮箱（Change the owner email using environment variables）

如果你是用环境变量来管理实例所有者的：

1. 把 `N8N_INSTANCE_OWNER_MANAGED_BY_ENV` 设为 `true`。
2. 把 `N8N_INSTANCE_OWNER_EMAIL` 设为新的所有者邮箱。
3. 保持 `N8N_INSTANCE_OWNER_FIRST_NAME`、`N8N_INSTANCE_OWNER_LAST_NAME` 和 `N8N_INSTANCE_OWNER_PASSWORD_HASH` 的设置不变。
4. 重启 n8n。

当 `N8N_INSTANCE_OWNER_MANAGED_BY_ENV` 为 `true` 时，n8n 会在**每次启动时**重新应用所有者的信息。对应的界面控件会变成**只读**状态（不能再在界面上修改）。

{% hint style="warning" %}
**`N8N_INSTANCE_OWNER_PASSWORD_HASH` 必须是 bcrypt 哈希值**

这个变量要求填入「已经用 bcrypt 算法哈希过」的值。如果直接填明文密码，会导致登录失败。
{% endhint %}

{% hint style="info" %}
**小白提示**：什么是 bcrypt 哈希？简单说，bcrypt 是一种把密码「打乱加密」的算法。这里的环境变量要的是加密后的结果（一串很长的乱码字符串），而不是你平时输入的原始密码。你可以用在线工具或命令行工具（比如 `htpasswd -bnBC 10 "" 你的密码 | tr -d ':\n'`）生成这个哈希值。
{% endhint %}

更多信息请参见 [使用环境变量管理实例设置（Manage instance settings using environment variables）](manage-settings-using-environment-variables.md#instance-owner)。
