---
title: Monica CRM 凭证
description: >-
  Monica CRM 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Monica CRM 的身份。
contentType:
  - integration
  - reference
nodeTitle: Monica CRM credentials
originalFilePath: integrations/builtin/credentials/monicacrm.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/monicacrm'
url: 'https://docs.n8n.io/integrations/builtin/credentials/monicacrm'
layout:
  description:
    visible: false
---

# Monica CRM 凭证

{% hint style="info" %}
**大白话**：Monica 是一个「个人关系管理」工具（CRM，帮你记录家人朋友的联系方式、生日、互动等）。n8n 想访问你的 Monica 数据，只需要一个 **API token（API 令牌）**。填的时候要先告诉 n8n 你的 Monica 是「官方云版（Cloud-Hosted）」还是「自己搭的（Self-Hosted）」——如果是自己搭的，还要填你的服务器域名。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Monica CRM](../app-nodes/n8n-nodes-base.monicacrm.md)

## 准备工作

注册一个 [Monica CRM](https://www.monicahq.com/) 账号，或者自己搭建一个实例（self-host，自己部署）。

## 支持的验证方式

- API token（API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [Monica 官方 API 文档](https://www.monicahq.com/api)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要准备：

- 你的 **Environment（环境类型）**：
    - 如果你是通过 Monica 官方访问你的实例，选择 **Cloud-Hosted（云托管）**。
    - 如果你在自己服务器上搭建了 Monica，选择 **Self-Hosted（自托管）**，并填写你的 **Self-Hosted Domain（自托管域名）**。
- 一个 **API Token（API 令牌）**：在 **Settings > API（设置 > API）** 里生成一个令牌。
