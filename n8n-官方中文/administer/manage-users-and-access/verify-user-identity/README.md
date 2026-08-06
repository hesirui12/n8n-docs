---
layout:
  description:
    visible: false
---

# 验证用户身份（Verify user identity）

{% hint style="info" %}
**小白解释：** 这一节讲的是「怎么确认登录的人确实是本人」。n8n 支持几种企业常见的身份验证方式：

* **双因素认证（2FA）**：登录时除了密码，还要输入手机验证码，安全性更高。
* **LDAP**：公司的统一账号目录。员工直接用公司账号登录 n8n，不用单独注册。
* **SAML**：企业单点登录（SSO）协议。用户在公司系统登录一次，就能直接进入 n8n。
* **OIDC**：另一种单点登录协议（基于 OpenID Connect），作用类似 SAML，很多现代身份服务都用它。

点击下面的链接，分别查看对应的详细教程。
{% endhint %}

{% content-ref url="require-two-factor-auth.md" %}
[要求双因素认证 (require-two-factor-auth.md)](require-two-factor-auth.md)
{% endcontent-ref %}

{% content-ref url="connect-ldap.md" %}
[连接 LDAP (connect-ldap.md)](connect-ldap.md)
{% endcontent-ref %}

{% content-ref url="use-saml/README.md" %}
[使用 SAML (use-saml/README.md)](use-saml/README.md)
{% endcontent-ref %}

{% content-ref url="use-oidc/README.md" %}
[使用 OIDC (use-oidc/README.md)](use-oidc/README.md)
{% endcontent-ref %}
