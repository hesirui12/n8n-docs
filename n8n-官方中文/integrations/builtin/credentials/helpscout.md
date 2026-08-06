---
title: Help Scout 凭证
description: >-
  Help Scout 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Help Scout 的身份。
contentType:
  - integration
  - reference
nodeTitle: Help Scout credentials
originalFilePath: integrations/builtin/credentials/helpscout.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/helpscout'
url: 'https://docs.n8n.io/integrations/builtin/credentials/helpscout'
layout:
  description:
    visible: false
---

# Help Scout 凭证

{% hint style="info" %}
**大白话**：Help Scout 是一款客服邮件 / 帮助台（help desk）软件。n8n 连它只能用 **OAuth2（网页授权登录）** 这一种方式。如果用的是 n8n 官方云服务，直接在凭证里点「用 OAuth2 登录」就行，全程自动；如果是自己部署（自托管）n8n，需要先去 Help Scout 开发者后台创建一个应用，拿到 Client ID 和 Client Secret 再填回来。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Help Scout](../app-nodes/n8n-nodes-base.helpscout.md)
- [Help Scout Trigger（Help Scout 触发器）](../trigger-nodes/n8n-nodes-base.helpscouttrigger.md)

## 前提条件

创建一个 [Help Scout](https://www.helpscout.com/) 账号。

## 支持的验证方式

- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Help Scout 的 API 文档](https://developer.helpscout.com/)。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从零开始配置 OAuth2，或者想了解 OAuth 网页授权流程的更多细节，你需要先创建一个 Help Scout 应用。请参考 [Help Scout 的 OAuth 文档](https://developer.helpscout.com/mailbox-api/overview/authentication/#oauth2-application) 里的说明。
