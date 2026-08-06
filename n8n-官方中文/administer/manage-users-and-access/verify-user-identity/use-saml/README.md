---
contentType: overview
nodeTitle: 使用 SAML（Use SAML）
originalFilePath: user-management/saml/index.md
originalUrl: 'https://docs.n8n.io/user-management/saml'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-saml
layout:
  description:
    visible: false
---

# 安全断言标记语言（SAML）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/9DXSTQsxYGisAV8xk6p4/" %}

{% hint style="info" %}
**小白解释：** SAML（Security Assertion Markup Language，安全断言标记语言）是一种非常成熟的企业「单点登录（SSO）」协议。原理概括：员工先在公司的身份系统（IdP，身份提供方）登录一次，之后访问 n8n 时，公司系统会发给 n8n 一张「电子通行证」（SAML 断言，一种 XML 格式的信息），n8n 验证无误就放行。员工不用记 n8n 的账号密码，管理员也只需要在公司系统里管账号。常见 IdP 有 Okta、Azure AD、Keycloak、Auth0 等。
{% endhint %}

本节介绍如何在 n8n 中启用 SAML SSO（单点登录）。它假设你熟悉 SAML。如果你不熟悉，[SAML 简明英文讲解（SAML Explained in Plain English）](https://www.onelogin.com/learn/saml)可以帮助你理解 SAML 的工作原理及其好处。

* [设置 SAML（Set up SAML）](set-up-saml.md)：在 n8n 中设置 SAML 的通用指南，以及常见 IdP 的资源链接。
* [Okta Workforce Identity SAML 设置（Okta Workforce Identity SAML setup）](set-up-okta-workforce-identity-saml.md)：配置 Okta 的分步指导。
* [Azure AD SAML 设置（Azure AD SAML setup）](set-up-azure-ad-saml.md)：使用 Azure AD 配置的分步指导。
* [故障排查（Troubleshooting）](troubleshoot-saml.md)：遇到问题时要检查的事项清单。
* [使用 SAML 管理用户（Managing users with SAML）](manage-users-with-saml.md)：启用 SAML 后执行用户管理任务的方法。
