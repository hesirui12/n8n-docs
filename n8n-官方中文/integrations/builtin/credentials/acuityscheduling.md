---
title: Acuity Scheduling 凭证
description: >-
  Acuity Scheduling 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Acuity Scheduling 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Acuity Scheduling credentials
originalFilePath: integrations/builtin/credentials/acuityscheduling.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/acuityscheduling'
url: 'https://docs.n8n.io/integrations/builtin/credentials/acuityscheduling'
layout:
  description:
    visible: false
---

# Acuity Scheduling 凭证

{% hint style="info" %}
**大白话**：Acuity Scheduling 是国外很流行的「在线预约/排期」工具（让客户自己选时间来约你）。n8n 连它有两种方式：简单版是填 **API Key + User ID**；进阶版是 **OAuth2**（网页授权登录，点一下授权就行，更安全省心）。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Acuity Scheduling Trigger（触发器）](../trigger-nodes/n8n-nodes-base.acuityschedulingtrigger.md)

## 准备工作

先注册一个 [Acuity Scheduling](https://acuityscheduling.com/) 账号。

## 支持的验证方式

- API key（API 密钥）
- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Acuity 官方 API 文档](https://developers.acuityscheduling.com/reference/quick-start)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 数字形式的 **User ID（用户 ID）**
- 一个 **API Key（API 密钥）**

如何生成 API key 并查看你的 User ID，请参考 [Acuity API 快速入门里的身份验证说明](https://developers.acuityscheduling.com/reference/quick-start#authentication)。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从零开始配置，先填写 [Acuity OAuth2 账号注册页面](https://acuityscheduling.com/oauth2/register)，把注册后获得的 **Client ID** 和 **Client Secret** 填进 n8n 凭证即可。
