---
title: PagerDuty 凭证
description: >-
  PagerDuty 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  PagerDuty 的身份。
contentType:
  - integration
  - reference
nodeTitle: PagerDuty credentials
originalFilePath: integrations/builtin/credentials/pagerduty.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/pagerduty'
url: 'https://docs.n8n.io/integrations/builtin/credentials/pagerduty'
layout:
  description:
    visible: false
---

# PagerDuty 凭证

{% hint style="info" %}
**大白话**：PagerDuty 是给运维团队用的「告警值班平台」——系统出问题就自动通知当班的人。n8n 连它有两种方式：**简单版**是填一把 **API Token（API 密钥）**（在 Integrations > Developer Tools 里生成）；**进阶版**是 **OAuth2**（去 PagerDuty 开发者后台注册一个应用，把 Client ID 和 Client Secret 填进 n8n）。一般用 API token 就够了。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [PagerDuty](../app-nodes/n8n-nodes-base.pagerduty.md)

## 准备工作

注册一个 [PagerDuty](https://pagerduty.com/) 账号。

## 支持的验证方式

- API token（API 密钥）
- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [PagerDuty 官方 API 文档](https://developer.pagerduty.com/docs/531092d4c6658-rest-api-v2-overview)。

## 使用 API token（API 密钥）

要配置这个凭证，你需要：

- 一个通用访问 **API Token（API 密钥）**：要生成 API token，进入 **Integrations（集成）> Developer Tools（开发者工具）> API Access Keys（API 访问密钥）> Create New API Key（新建 API 密钥）**。更多说明请参考[生成通用访问 REST API key](https://support.pagerduty.com/docs/api-access-keys#generate-a-general-access-rest-api-key)。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从零配置 OAuth2，先[注册一个新的 PagerDuty 应用](https://developer.pagerduty.com/docs/dd91fbd09a1a1-register-an-app)。

注册应用时使用这些设置：

- 在 **Category（类别）** 下拉列表里，选择 **Infrastructure Automation（基础设施自动化）**。
- 在 **Functionality（功能）** 区域，选择 **OAuth 2.0**。

保存（**Save**）应用后，打开应用详情并[编辑应用配置](https://developer.pagerduty.com/docs/dd91fbd09a1a1-register-an-app#editing-your-app-configuration)，使用这些设置：

- 在 **OAuth 2.0** 区域里，点击 **Add（添加）**。
- 把 n8n 里的 **OAuth Callback URL（OAuth 回调地址）** 复制到 PagerDuty 的 **Redirect URL（重定向地址）** 字段。
- 把 PagerDuty 生成的 **Client ID** 和 **Client Secret** 复制到 n8n 凭证里。
- 在 **Set Permission Scopes（设置权限范围）** 下拉列表里选择 **Read/Write（读/写）**。

更多可用功能请参考[应用功能说明](https://developer.pagerduty.com/docs/b25fd1b8acb1b-app-functionality)。更多关于 OAuth 流程的说明，请参考 PagerDuty 的 [OAuth 功能文档](https://developer.pagerduty.com/docs/f59fdbd94ceab-o-auth-functionality)。
