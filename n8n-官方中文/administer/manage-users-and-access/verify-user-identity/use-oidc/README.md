---
contentType: overview
nodeTitle: 使用 OIDC（Use OIDC）
originalFilePath: user-management/oidc/index.md
originalUrl: 'https://docs.n8n.io/user-management/oidc'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-oidc
layout:
  description:
    visible: false
---

# OpenID Connect（OIDC）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/3sB2Mxc1yXYEg1FeAYjK/" %}

{% hint style="info" %}
**小白解释：** OIDC（OpenID Connect）是一种「单点登录（SSO）」标准协议。它建立在 OAuth 2.0 之上，让用户在公司身份服务（身份提供方 IdP，例如 Okta、Auth0、Azure AD、Google）登录一次，就能带着身份信息直接进入 n8n，不用再输一遍 n8n 的账号密码。对员工来说体验是「点一下就能进」，对管理员来说账号统一管理。
{% endhint %}

本节介绍如何启用和管理 OpenID Connect（OIDC）以实现单点登录（SSO）。你可以通过 OpenID 基金会的[什么是 OpenID Connect](https://openid.net/developers/how-connect-works/)了解 OIDC 的工作原理。

* [设置 OIDC（Set up OIDC）](set-up-oidc.md)：在 n8n 中设置 OpenID Connect（OIDC）SSO 的通用指南。
* [故障排查（Troubleshooting）](troubleshoot-oidc.md)：遇到 OIDC 问题时要检查的事项清单。
