---
title: Grist 凭证
description: >-
  Grist 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Grist 的身份。
contentType:
  - integration
  - reference
nodeTitle: Grist credentials
originalFilePath: integrations/builtin/credentials/grist.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/grist'
url: 'https://docs.n8n.io/integrations/builtin/credentials/grist'
layout:
  description:
    visible: false
---

# Grist 凭证

{% hint style="info" %}
**大白话**：Grist 是一个「电子表格 + 数据库」二合一的在线工具（有点像 Airtable）。n8n 想读写你的 Grist 表格，只需要一把 **API Key（API 密钥）**，再告诉 n8n 你的 Grist 服务地址（URL）就行了。照着下面的步骤去 Grist 账号里生成钥匙，填进 n8n 就能连上。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Grist](../app-nodes/n8n-nodes-base.grist.md)

## 前提条件

创建一个 [Grist](https://getgrist.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Grist 的 API 文档](https://support.getgrist.com/api/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：在 Grist 里打开右上角的账号菜单，然后进入 **Account settings（账号设置）** > **Developer（开发者）** 来创建或复制你的 API key。更多信息请参考 [Grist API 身份验证文档](https://support.getgrist.com/rest-api/#authentication)。
- 一个 **Grist URL（Grist 网址）**：这个地址告诉 n8n 你的 Grist 服务器在哪里：
    - 默认值 `https://api.getgrist.com` 适用于托管版 Grist（getgrist.com）上的任何账号。
    - 如果只想让连接限制在单个团队内，可以使用 `https://YOUR_TEAM.getgrist.com`（把 YOUR_TEAM 换成你的团队名）。
    - 如果是自托管（自己部署）的 Grist，填它自己的网址，注意**不要**带 `/api`、结尾**不要**带斜杠（例如 `https://grist.example.com`）。
