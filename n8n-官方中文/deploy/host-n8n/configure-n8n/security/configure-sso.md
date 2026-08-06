---
title: 设置单点登录（SSO）
description: 为你的自托管 n8n 实例设置 SAML 或 OIDC 单点登录。
contentType: howto
nodeTitle: 配置 SSO
originalFilePath: hosting/securing/set-up-sso.md
originalUrl: 'https://docs.n8n.io/hosting/securing/set-up-sso'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/configure-sso'
layout:
  description:
    visible: false
---

# 设置单点登录（SSO）/ Set up Single Sign-On (SSO)

{% hint style="info" %}
**功能可用性**

* 在 Business（商业版）和 Enterprise（企业版）套餐上可用。
* 你需要是实例所有者（instance owner）或管理员（admin），才能启用和配置 SAML 或 OIDC。
{% endhint %}

{% hint style="info" %}
**大白话**：SSO（Single Sign-On，单点登录）的意思是：用户不用在 n8n 里单独注册账号密码，而是用公司统一的身份系统登录（比如钉钉、企业微信、Okta、Azure AD 等）。用户登录一次公司系统，就能直接进入 n8n，不用再记 n8n 的密码。这样既方便用户，也方便管理员统一管账号（离职了直接在身份系统里禁用即可）。注意：这个功能是付费功能，Community Edition（社区版）没有，需要 Business 或 Enterprise 套餐。
{% endhint %}

n8n 支持 SAML 和 OIDC 两种认证协议来实现单点登录（SSO）。关于这两种协议的一般信息、两者之间的区别以及各自的优点，请参阅 [OIDC vs SAML](https://www.onelogin.com/learn/oidc-vs-saml)。

{% hint style="info" %}
**大白话**：SAML 和 OIDC 都是「怎么证明你是谁」的行业标准协议，由你的身份提供商（IdP，Identity Provider，比如 Okta、Azure AD）来负责验证身份。两者的区别简单说：SAML 比较老派，在企业软件里很常见；OIDC 是较新的基于 OAuth 2.0 的协议，更受现代互联网应用欢迎。具体选哪个，通常看你公司现有的身份系统支持哪个——不用纠结，能用哪个用哪个。
{% endhint %}

* [设置 SAML](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/verify-user-identity/use-saml/set-up-saml)：一份在 n8n 中设置 SAML 的通用指南，并附有常见身份提供商（IdPs）的资源链接。
* [设置 OIDC](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/verify-user-identity/use-oidc/set-up-oidc)：一份在 n8n 中设置 OpenID Connect（OIDC）SSO 的通用指南。

## 通过环境变量配置 SSO / Configure SSO with environment variables

你也可以不通过界面，而是直接用环境变量来配置 SSO。该方式自 n8n v2.18.0 起可用。完整的变量列表请参阅 [SSO 环境变量](../basic-configuration/use-environment-variables/sso.md)，关于激活模式（activation pattern）如何工作，请参阅[使用环境变量管理实例设置](../manage-settings-using-environment-variables.md)。

{% hint style="info" %}
**大白话**：正常情况下，配置 SSO 需要在 n8n 的「设置 → 用户管理」界面里一步步操作。但如果你的部署方式是「一切配置都放在环境变量/配置文件里」（比如 Docker、Kubernetes 的配置管理），从 n8n v2.18.0 开始也可以直接把 SSO 配置写成环境变量，这样更利于自动化部署和版本管理。注意：环境变量方式配置的内容在界面里可能只读，要修改时直接改环境变量再重启即可。想了解「激活模式」的原理（环境变量和界面设置如何相互覆盖），可以点进「使用环境变量管理实例设置」那页看看。
{% endhint %}
