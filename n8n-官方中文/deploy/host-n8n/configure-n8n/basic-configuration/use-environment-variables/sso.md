---
title: 单点登录（SSO）环境变量
description: 使用环境变量为自托管 n8n 配置单点登录。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 单点登录（SSO）
originalFilePath: hosting/configuration/environment-variables/sso.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/sso'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/sso
layout:
  description:
    visible: false
---

# 单点登录（SSO）环境变量

{% hint style="info" %}
**大白话**：SSO（单点登录）就是让员工用公司已有的账号系统（如 Google、Microsoft Entra、Okta）一次登录所有系统，不用再单独注册 n8n 账号。这一页的变量让你用环境变量来配置 SSO 的激活开关、角色分配方式，以及 OIDC / SAML 两种登录协议的具体参数。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

{% hint style="info" %}
**功能可用性（Feature availability）**

单点登录在 Business（商业版）和 Enterprise（企业版）套餐上可用。
{% endhint %}

应用内设置步骤和身份提供方（identity provider）指南请参见[设置 SSO（Set up SSO）](../../security/configure-sso.md)。关于激活模式如何工作的说明，请参见[使用环境变量管理实例设置（Manage instance settings using environment variables）](../../manage-settings-using-environment-variables.md)。

## 激活与共享设置（Activation and shared settings）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/TJ7IUBpRrfLoXyEn4T4d/" %}

## OIDC

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/SBpz79jvy94Y5dKIvxqR/" %}

## SAML

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/NnYMdwgkElS7TK37owd0/" %}
