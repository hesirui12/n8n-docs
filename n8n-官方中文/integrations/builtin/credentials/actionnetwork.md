---
title: Action Network 凭证
description: >-
  Action Network 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Action Network 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Action Network credentials
originalFilePath: integrations/builtin/credentials/actionnetwork.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/actionnetwork'
url: 'https://docs.n8n.io/integrations/builtin/credentials/actionnetwork'
layout:
  description:
    visible: false
---

# Action Network 凭证

{% hint style="info" %}
**大白话**：Action Network 是一个给公益组织、活动主办方用的「行动平台」（组织签名、活动、募捐等）。n8n 想操作它，只需要一把 **API Key（API 密钥）**，但这把钥匙不是注册就有，而是要主动向官方申请开通。照着下面的步骤先申请、再回来填进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Action Network](../app-nodes/n8n-nodes-base.actionnetwork.md)

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Action Network 官方 API 文档](https://actionnetwork.org/docs/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要有一个 [Action Network](https://actionnetwork.org/) 账号，并且已经开通了 API key 访问权限（申请方法见下文），还需要：

- 一个 **API Key（API 密钥）**

获取 API key 的步骤：

1. 登录你的 Action Network 账号。
2. 在 **Start Organizing（开始组织）** 菜单里，选择 **Details（详情）>** [**API & Sync（API 与同步）**](https://actionnetwork.org/apis)。
3. 选择你想为哪个名单（list）生成 API key。
4. 为该名单生成一个 API key。
5. 复制这个 **API Key**，填进 n8n 的凭证里。

更多信息请参考 [Action Network API 身份验证说明](https://actionnetwork.org/docs/v2/#auth)。

## 申请 API 访问权限

Action Network 上每个用户账号和每个群组都有各自独立的 API key，用来访问该用户或群组的数据。

你必须主动向 Action Network 申请 API 访问权限，有两种方式：

1. 如果你已经是付费客户：直接[联系他们](https://actionnetwork.org/contact) 申请合作伙伴（partner）访问权限，合作伙伴权限里包含 API key 访问权限。
2. 如果你是开发者：[申请一个开发者账号](https://actionnetwork.org/developers)，申请通过后你就自动拥有 API key 访问权限。
