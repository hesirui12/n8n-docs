---
title: Harvest 凭证
description: >-
  Harvest 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Harvest 的身份。
contentType:
  - integration
  - reference
nodeTitle: Harvest credentials
originalFilePath: integrations/builtin/credentials/harvest.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/harvest'
url: 'https://docs.n8n.io/integrations/builtin/credentials/harvest'
layout:
  description:
    visible: false
---

# Harvest 凭证

{% hint style="info" %}
**大白话**：Harvest 是一款团队计时（工时统计）+ 项目追踪工具。n8n 连它有两种方式：一种是拿你个人账号的 **Access Token（访问令牌）** 直接填（最简单）；另一种是走 **OAuth2（网页授权登录）**（官方更推荐给正式应用用）。自己部署 n8n 的，两种都可以按下面的说明操作。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Harvest](../app-nodes/n8n-nodes-base.harvest.md)

## 前提条件

创建一个 [Harvest](https://www.getharvest.com/) 账号。

## 支持的验证方式

- API access token（API 访问令牌）
- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Harvest 的 API 文档](https://help.getharvest.com/api-v2/)。

## 使用 API Access Token（API 访问令牌）

要配置这个凭证，你需要：

- 一个 Personal **Access Token（个人访问令牌）**：创建个人访问令牌的方法请参考 [Harvest 个人访问令牌身份验证文档](https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/#personal-access-tokens)。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从零开始配置 OAuth2，或者想了解 OAuth 网页授权流程的更多细节，请参考 [Harvest 的 OAuth2 文档](https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/#oauth2-application) 里的说明来设置。
