---
title: Okta 凭证
description: >-
  Okta 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Okta 的身份。
contentType:
  - integration
  - reference
nodeTitle: Okta credentials
originalFilePath: integrations/builtin/credentials/okta.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/okta'
url: 'https://docs.n8n.io/integrations/builtin/credentials/okta'
layout:
  description:
    visible: false
---

# Okta 凭证

{% hint style="info" %}
**大白话**：Okta 是国外很主流的企业「身份认证 / 单点登录（SSO）」服务，公司用它统一管理员工的账号登录。n8n 想管理你的 Okta 用户，需要两样：**URL（你的 Okta 组织地址，比如 `https://dev-123456.okta.com`）**和 **SSWS Access Token（SSWS 访问令牌）**——去后台 **Security > API > Tokens > Create token（安全 > API > 令牌 > 创建令牌）** 里生成。填 URL 时有个小技巧：如果从管理后台复制地址，要记得去掉 `-admin` 后缀、加上 `https://` 前缀。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Okta](../app-nodes/n8n-nodes-base.okta.md)

## 准备工作

创建一个 [Okta 免费试用](https://www.okta.com/free-trial/) 账号，或者在现有的 Okta 组织里创建一个管理员账号。

## 支持的验证方式

- SSWS API Access token（SSWS API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Okta 官方文档](https://developer.okta.com/docs/reference/)。

## 使用 SSWS API access token（SSWS API 访问令牌）

要配置这个凭证，你需要准备：

- **URL**：你的 Okta 组织的基础地址，也就是你独有的子域名（subdomain）。有两种快捷方法可以找到它：
    1. 在管理后台（Admin Console）里，点击你的 **Profile（个人资料）**，把鼠标悬停在用户名下方的域名上，点击 **Copy（复制）** 图标。粘贴到 n8n 里，记得在前面加上 `https://`。
    2. 复制你的管理后台地址的基础部分，例如 `https://dev-123456-admin.okta.com`。粘贴到 n8n 里，并去掉 `-admin`，例如改成：`https://dev-123456.okta.com`。
- 一个 **SSWS Access Token（SSWS 访问令牌）**：通过进入 **Security > API > Tokens > Create token（安全 > API > 令牌 > 创建令牌）** 创建令牌。更多信息请参考 [Create Okta API tokens（创建 Okta API 令牌）](https://help.okta.com/en-us/content/topics/security/api.htm?cshid=ext-create-api-token#create-okta-api-token)。
