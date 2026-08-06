---
title: 限制账号注册：只允许邮箱已验证的用户
description: 要求所有新账号都必须通过邮箱验证。
contentType: howto
nodeTitle: 验证用户邮箱
originalFilePath: hosting/securing/restrict-by-email-verification.md
originalUrl: 'https://docs.n8n.io/hosting/securing/restrict-by-email-verification'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/verify-user-emails'
layout:
  description:
    visible: false
---

# 限制账号注册：只允许邮箱已验证的用户（Restrict account registration to email-verified users）

你可以要求所有新账号都必须通过邮箱验证。这可以防止恶意管理员（malicious admins）在未经邮箱验证的情况下注册账号。

{% hint style="info" %}
**小白提示**：为什么需要这个功能？如果有人拿到了一个管理员邀请链接，他就可以注册一个账号而不暴露真实身份。开启邮箱验证后，注册必须提供一个「真实且能收到邮件」的邮箱，并且要点开邮件里的验证链接才能注册成功，让冒名注册变难。简单说：这功能 = 给「注册账号」这道门加一道「邮箱验明正身」的关卡。
{% endhint %}

## 前置条件（Prerequisites）

* 必须已设置好 SMTP，并且 n8n 必须能够发送邮件。

{% hint style="info" %}
**小白提示**：SMTP = 发送邮件用的服务配置（服务器地址、端口、账号密码，通常由你的邮箱服务商提供）。n8n 要靠它发出「验证邮件」给注册用户——如果没有 SMTP，n8n 发不出邮件，验证链接也就到不了用户手里，这个功能自然无法工作。
{% endhint %}

## 如何限制账号注册（How to restrict account registration）

把环境变量 `N8N_INVITE_LINKS_EMAIL_ONLY` 设置为 `true`。这会锁定你的实例，使只有邮箱已验证的用户才能注册。

{% hint style="info" %}
**小白提示**：环境变量要在 n8n 启动之前设置好（比如写进 `.env` 文件或 Docker Compose 的 `environment` 配置里），然后重启 n8n 才会生效。这个变量名可以拆开记：`INVITE_LINKS`（邀请链接）`EMAIL_ONLY`（仅限邮箱）——即「邀请链接只发给邮箱已验证的人」。
{% endhint %}

关于配置 SMTP 的更多细节，请参考[设置 SMTP](../user-management.md#step-one-smtp)。
