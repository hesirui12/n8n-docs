---
title: Gong 凭证
description: >-
  Gong 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Gong 的身份。
contentType:
  - integration
  - reference
nodeTitle: Gong credentials
originalFilePath: integrations/builtin/credentials/gong.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/gong'
url: 'https://docs.n8n.io/integrations/builtin/credentials/gong'
layout:
  description:
    visible: false
---

# Gong 凭证

{% hint style="info" %}
**大白话**：Gong 是一款销售通话/会议记录分析工具（自动录下销售和客户的通话并做分析）。n8n 想自动读取这些记录和分析结果，有两条路：**API access token**——需要 **Access Key** 和 **Access Key Secret** 两个值（要在 Gong 的 API 页面生成，需要技术管理员权限）；**OAuth2**——需要注册一个 OAuth 应用拿到 **Client ID** 和 **Client Secret**。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Gong](../app-nodes/n8n-nodes-base.gong.md)

## 支持的验证方式

- API access token（API 访问令牌）
- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Gong 官方 API 文档](https://gong.app.gong.io/settings/api/documentation)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要一个 [Gong](https://app.gong.io/welcome/sign-in) 账号，以及：

- 一个 **Access Key（访问密钥）**
- 一个 **Access Key Secret（访问密钥的 Secret）**

这两样东西都可以在 [Gong API 页面](https://app.gong.io/company/api) 上创建（要访问这个页面，你必须是 Gong 里的技术管理员）。

关于如何向该服务做身份验证，请参考 [Gong 官方 API 文档](https://gong.app.gong.io/settings/api/documentation)。

## 使用 OAuth2

要配置这个凭证，你需要一个 [Gong](https://app.gong.io/welcome/sign-in) 账号、一个 [Gong 开发者](https://gong.partnerfleet.app/application_forms/become-a-gong-technology-partner/partner_applications/new) 账号，以及：

- 一个 **Client ID（客户端 ID）**：在给 Gong 创建 OAuth 应用时生成。
- 一个 **Client Secret（客户端密钥）**：在给 Gong 创建 OAuth 应用时生成。

如果你是 [自己部署](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，需要先 [创建一个应用](https://help.gong.io/docs/create-an-app-for-gong) 才能配置 OAuth2。关于如何设置 OAuth2 的更多信息，请参考 [Gong 的 OAuth 文档](https://gong.app.gong.io/settings/api/documentation)。
