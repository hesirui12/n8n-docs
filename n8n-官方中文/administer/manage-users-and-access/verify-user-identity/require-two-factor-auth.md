---
description: 如何为你的 n8n 账号启用 2FA（双因素认证）
contentType: howto
nodeTitle: 要求双因素认证（Require two-factor auth）
originalFilePath: user-management/two-factor-auth.md
originalUrl: 'https://docs.n8n.io/user-management/two-factor-auth'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/require-two-factor-auth
layout:
  description:
    visible: false
---

# 双因素认证（2FA）

{% hint style="info" %}
**小白解释：** 双因素认证（Two-factor authentication，简称 2FA）就是「两步验证」：登录时除了输入密码（你知道的东西），还要输入手机验证码（你拥有的东西）。即使密码泄露，别人没有你的手机也进不去，安全性大幅提升。n8n 用的是「身份验证器 App」（authenticator app），比如 Google Authenticator、Microsoft Authenticator、1Password 等，手机上装一个就行。
{% endhint %}

双因素认证（2FA）在用户名和密码之外增加了第二种认证方式。这提高了账号安全性。n8n 支持使用身份验证器 App 进行 2FA。

## 启用 2FA（Enable 2FA）

你需要在手机上安装一个身份验证器 App。

要在 n8n 中启用 2FA：

1. 前往你的 **设置（Settings）** > **个人（Personal）**。
2. 选择 **启用 2FA（Enable 2FA）**。n8n 会打开一个带二维码的弹窗。
3. 在你的身份验证器 App 中扫描二维码。
4. 在**来自身份验证器 App 的代码（Code from authenticator app）**中输入你 App 上显示的代码。
5. 选择 **继续（Continue）**。n8n 会显示恢复代码（recovery codes）。
6. 保存好恢复代码。如果你丢失了身份验证器，需要用这些代码才能重新访问你的账号。

{% hint style="warning" %}
**恢复代码一定要保存好（Save your recovery codes）**

恢复代码是你在手机丢失、App 被删除等情况下的「救命钥匙」。建议把它们存到密码管理器里，或打印出来放在安全的地方。没有恢复代码又丢了手机，账号将无法登录。
{% endhint %}

## 为你的实例禁用 2FA（Disable 2FA for your instance）

自托管用户可以设置环境变量 `N8N_MFA_ENABLED` 为 false，从而配置他们的 n8n 实例为所有用户禁用 2FA。请注意，如果已有用户启用了 2FA，n8n 会忽略此设置（也就是说：只要还有用户开着 2FA，就不会强制关闭）。有关使用环境变量配置 n8n 实例的更多信息，参见[配置方法（Configuration methods）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration)。
