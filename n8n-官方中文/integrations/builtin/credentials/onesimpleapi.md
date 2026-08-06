---
title: One Simple API 凭证
description: >-
  One Simple API 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  One Simple API 的身份。
contentType:
  - integration
  - reference
nodeTitle: One Simple API credentials
originalFilePath: integrations/builtin/credentials/onesimpleapi.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/onesimpleapi'
url: 'https://docs.n8n.io/integrations/builtin/credentials/onesimpleapi'
layout:
  description:
    visible: false
---

# One Simple API 凭证

{% hint style="info" %}
**大白话**：One Simple API 是一个「把各种小功能（截图、二维码、验证邮箱等）打包成接口」的服务，省得你一个个自己搭。n8n 想调用它，只需要填一个 **API Token（API 令牌）**，去它的官网后台生成一个、选好权限，复制过来填进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [One Simple API](../app-nodes/n8n-nodes-base.onesimpleapi.md)

## 准备工作

注册一个 [One Simple API](https://onesimpleapi.com/register) 账号。

## 支持的验证方式

- API token（API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [One Simple API 官方文档](https://onesimpleapi.com/docs)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要：

- 一个 **API Token（API 令牌）**：在 [API Tokens（API 令牌）](https://onesimpleapi.com/user/api-tokens) 页面新建一个 API token。记得给这个 token 选上合适的权限（permissions）。

你也可以通过点击你的 **Profile（个人资料）> API Tokens（API 令牌）** 进入 API Tokens 页面。

