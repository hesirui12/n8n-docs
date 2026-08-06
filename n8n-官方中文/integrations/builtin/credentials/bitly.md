---
title: Bitly 凭证
description: >-
  Bitly 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Bitly 的身份。
contentType:
  - integration
  - reference
nodeTitle: Bitly credentials
originalFilePath: integrations/builtin/credentials/bitly.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/bitly'
url: 'https://docs.n8n.io/integrations/builtin/credentials/bitly'
layout:
  description:
    visible: false
---

# Bitly 凭证

> 大白话：Bitly 是大家都知道的短链接工具。n8n 想自动帮你生成/管理短链接，需要你的授权。有两条路：简单版是填一把 Access Token（访问令牌）；进阶版是用 OAuth2（网页授权登录，点一下「连接我的账号」即可）。

这些凭证可以用来验证以下节点的身份：

- [Bitly](../app-nodes/n8n-nodes-base.bitly.md)

## 准备工作

先注册一个 [Bitly](https://www.bitly.com/) 账号。

## 支持的验证方式

- API token（API 令牌）
- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Bitly 官方 API 文档](https://dev.bitly.com/)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要准备：

- 一个 **Access Token（访问令牌）**：登录 Bitly 后，进入 [Settings > Developer Settings > API（设置 > 开发者设置 > API）](https://app.bitly.com/settings/api/) 页面生成一个 Access Token。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从零开始配置 OAuth2，或者想详细了解网页授权流程中发生了什么，请参考 [Bitly API 身份验证文档](https://dev.bitly.com/docs/getting-started/authentication/)。
