---
title: TheHive 5 凭证
description: >-
  TheHive 5 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  TheHive 的身份。
contentType:
  - integration
  - reference
nodeTitle: TheHive 5 credentials
originalFilePath: integrations/builtin/credentials/thehive5.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/thehive5'
url: 'https://docs.n8n.io/integrations/builtin/credentials/thehive5'
layout:
  description:
    visible: false
---

# TheHive 5 凭证

{% hint style="info" %}
**大白话**：TheHive 5 是 TheHive 安全应急响应平台的最新版本。n8n 连它需要一个 **API Key（API 密钥）** 和服务器 **URL（地址）**。生成 API Key 需要 `orgAdmin`（组织管理员）或 `superAdmin`（超级管理员）权限。如果你用的是 TheHive 3 或 4，请改用 [TheHive 凭证](thehive.md)。
{% endhint %}

这些凭证可以用来验证以下节点（配合 TheHive 5）的身份：

- [TheHive 5](../app-nodes/n8n-nodes-base.thehive5.md)

{% hint style="info" %}
**TheHive 与 TheHive 5**

n8n 为 TheHive 提供了两个节点。请配合 TheHive 5 节点使用这些凭证。如果你用的是 TheHive 3 或 TheHive 4 的 TheHive 节点，请使用 [TheHive 凭证](thehive.md)。
{% endhint %}

## 先决条件

在你的服务器上安装 [TheHive 5](https://docs.strangebee.com/thehive/download/)。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [TheHive 官方 API 文档](https://docs.strangebee.com/thehive/api-docs/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：拥有 `orgAdmin` 和 `superAdmin` 账号的用户可以生成 API 密钥：
    - `orgAdmin` 账号：进入 **Organization（组织）> Create API Key（创建 API 密钥）**，为你想生成密钥的用户创建。
    - `superAdmin` 账号：进入 **Users（用户）> Create API Key（创建 API 密钥）**，为你想生成密钥的用户创建。
    - 更多信息请参考 [API 身份验证](https://docs.strangebee.com/cortex/api/api-guide/?h=api+key#authentication)。
- 一个 **URL（地址）**：你的 TheHive 服务器地址。
- **Ignore SSL Issues（忽略 SSL 问题）**：开启后，即使 SSL 证书校验失败，n8n 也会照常连接。
