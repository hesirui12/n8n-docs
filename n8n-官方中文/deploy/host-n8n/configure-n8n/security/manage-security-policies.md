---
description: >-
  管理实例级安全策略，包括强制双因素认证（MFA）和个人空间控制。
contentType: howto
nodeTitle: 管理安全策略
originalFilePath: security-settings.md
originalUrl: 'https://docs.n8n.io/security-settings'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/manage-security-policies
layout:
  description:
    visible: false
---

# 安全设置（Security settings）

{% hint style="info" %}
**功能可用性**

安全设置（Security settings）在 Business（商业版）和 Enterprise（企业版）套餐上可用。部分设置需要特定的许可证（license）功能。如果你的套餐不支持某项设置，界面上会显示 **Upgrade（升级）** 徽章。
{% endhint %}

{% hint style="info" %}
**小白提示**：套餐（plan）= 你购买 n8n 时选择的版本档次。Business/Enterprise 是付费的高级版，安全相关的进阶功能一般都在这里。实例（instance）= 你的这一整套 n8n 部署（可以理解为「你的整个 n8n 服务」）。「实例级」设置 = 对所有用户、所有工作流统一生效的设置。
{% endhint %}

安全设置让你可以管理「实例级」的安全策略。你可以强制所有用户开启双因素认证（2FA），并控制用户能在自己的个人空间（personal space）里做什么。

要访问安全设置，进入 **Settings（设置）** > **Security（安全）**。

## 强制双因素认证（Enforce two-factor authentication）

你可以要求实例上的所有用户，在使用「邮箱 + 密码」登录时都必须先设置双因素认证（2FA）。

{% hint style="info" %}
**仅适用于邮箱和密码登录**

2FA 强制只对「使用邮箱和密码认证」的用户生效。通过 SSO（SAML 或 OIDC）登录的用户不受此设置影响。
{% endhint %}

{% hint style="info" %}
**小白提示**：双因素认证（2FA）= 除了密码之外，再要求第二样东西验证身份（比如手机上的验证码 App）。就算密码泄露，没有第二个因素也登不进去，安全性大大提升。SAML / OIDC 都是「企业单点登录」的标准协议，走这种登录方式的用户身份由企业统一管理，所以不强制 2FA。
{% endhint %}

要强制开启 2FA：

1. 进入 **Settings（设置）** > **Security（安全）**。
2. 在 **Enforce two-factor authentication（强制双因素认证）** 区域，把开关打开。

当你启用此设置后：

- 所有用户必须先设置好 2FA，才能继续使用实例。
- 还没配置 2FA 的用户，会在下次登录时被提示去配置。

想停止强制时，把开关关掉即可。已经设置过 2FA 的用户仍然保留 2FA（不会被自动关闭），只是新用户不再被强制要求配置。

关于单个用户如何设置 2FA 的更多信息，请参考 [双因素认证（Two-factor authentication）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/verify-user-identity/require-two-factor-auth)。

## 个人空间策略（Personal space policies）

个人空间策略让实例管理员（admin）控制：用户能否从自己的个人空间（personal space）分享、发布工作流和凭据。

{% hint style="info" %}
**小白提示**：个人空间（personal space）= 每个用户专属的工作流区域，只有自己能看到。默认情况下，用户可以从个人空间把工作流/凭据分享给别人，或者「发布」让它们可以被执行。管理员如果不想让用户随意分享，就可以在这里关掉。
{% endhint %}

### 分享工作流和凭据（Sharing workflows and credentials）

控制用户能否把个人空间里的工作流和凭据，分享给其他用户或项目。

要管理分享权限：

1. 进入 **Settings（设置）** > **Security（安全）**。
2. 在 **Personal Space（个人空间）** 区域，找到 **Sharing workflows and credentials（分享工作流和凭据）**。
3. 切换开关以启用或禁用分享。

当你禁用分享后：

- 已经存在的分享不受影响，此设置只影响「新的分享操作」。
- 当前已分享的工作流和凭据数量会显示在开关下方。

### 发布工作流（Publishing workflows）

控制用户能否从个人空间发布工作流，使其可以被执行（被调用）。

要管理发布权限：

1. 进入 **Settings（设置）** > **Security（安全）**。
2. 在 **Personal Space（个人空间）** 区域，找到 **Publishing workflows（发布工作流）**。
3. 切换开关以启用或禁用发布。

当你禁用发布后：

- 当前已发布的工作流仍然保持发布状态。该设置只影响新的发布操作。
- 当前已发布的个人工作流数量会显示在开关下方。

## 强制执行数据脱敏（Enforce execution data redaction）

你可以为实例上的所有工作流强制开启[执行数据脱敏](redact-execution-data.md)。强制开启后，会设置一个「实例级的最低脱敏标准」，单个工作流自己的设置不能比这个标准更宽松（只能更严格）。

{% hint style="info" %}
**功能可用性**

数据脱敏强制功能在 Enterprise 自托管版（Self-hosted）和 Enterprise 云版（Cloud）上可用。

**可用版本：** n8n 2.26.0 及以上
{% endhint %}

{% hint style="info" %}
**小白提示**：脱敏（redact）= 把敏感内容打码/抹掉。工作流执行时，每个节点都会处理数据，这些数据默认会被记录保存下来。开启「强制脱敏」后，所有工作流执行时记录的数据都会被打码，防止敏感信息泄露。为什么要「强制」？因为单靠每个工作流自己设置，总有人会忘开，强制 = 一刀切兜底。
{% endhint %}

要强制开启数据脱敏：

1. 进入 **Settings（设置）** > **Security（安全）**。
2. 在 **Data redaction（数据脱敏）** 区域，打开 **Enforce data redaction（强制数据脱敏）** 开关。
3. 在 **Redact executions（执行数据脱敏）** 下选择强制范围：
	- **Production executions（生产执行，推荐）**：n8n 对所有工作流的「生产执行」数据脱敏。
	- **Manual and production executions（手动和生产执行）**：n8n 对所有工作流的「手动执行」和「生产执行」数据都脱敏。
4. 在弹出的对话框中确认你的选择。

当你启用强制后：

- n8n 会对所选范围内所有工作流的执行数据脱敏，包括那些「自己在设置里没有开启脱敏」的工作流。
- 用户不能把工作流级别的脱敏设置调得比强制范围更宽松。但工作流仍然可以「主动选择」更严格的脱敏（例如：只强制了生产脱敏时，某个工作流可以额外对手动执行也脱敏）。
- 新建的工作流默认采用「强制范围」作为其脱敏策略。

{% hint style="info" %}
**小白提示**：生产执行（production execution）= 工作流被保存为「激活」状态后，由定时器、webhook 等自动触发的执行，也就是真正在干活的执行。手动执行（manual execution）= 你自己在编辑器里点「执行」按钮跑的那次，通常用来测试。生产数据通常更敏感，所以「只脱敏生产」是推荐起点。
{% endhint %}

脱敏强制功能需要包含「数据脱敏」功能的 Enterprise 许可证。关于脱敏覆盖哪些内容、如何查看已脱敏数据、以及相关权限的详细信息，请参考[执行数据脱敏](redact-execution-data.md)。

## 用环境变量配置安全策略（Configure security policy with environment variables）

你也可以不用界面（UI），而是通过环境变量来管理安全策略。从 n8n v2.18.0 起可用。把 `N8N_SECURITY_POLICY_MANAGED_BY_ENV` 设置为 `true`，并提供下面这些变量。关于「激活模式」如何工作的说明，请参考[使用环境变量管理实例设置](../manage-settings-using-environment-variables.md)。

{% hint style="info" %}
**小白提示**：环境变量（environment variable）= 启动 n8n 时传给它的配置参数（在 `.env` 文件或 Docker 命令里设置）。用环境变量管理安全策略，适合「配置即代码」的团队：策略跟部署脚本走，谁改了都能被审查（比如通过 Git 记录）。
{% endhint %}

当 `N8N_SECURITY_POLICY_MANAGED_BY_ENV` 为 `true` 时，本页面上的 **Enforce two-factor authentication（强制双因素认证）** 和 **Personal Space（个人空间）** 开关会变成只读（read-only）——也就是说，这些策略只能在环境变量里改，界面上改不了。

{% hint style="info" %}
**小白提示**：下面这一行 `{% include %}` 是文档系统（GitBook）的动态引用标签，用来嵌入一份「相关环境变量汇总表」。它在 n8n 官方文档网站上会自动渲染成表格；如果在你本地的 Markdown 预览器里看不到表格内容，属于正常现象，请以官方文档网站显示的内容为准。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/xVIddGVtWAPFZlRYTrwL/" %}
