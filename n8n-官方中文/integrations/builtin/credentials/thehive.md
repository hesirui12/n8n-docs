---
title: TheHive 凭证
description: >-
  TheHive 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  TheHive 的身份。
contentType:
  - integration
  - reference
nodeTitle: TheHive credentials
originalFilePath: integrations/builtin/credentials/thehive.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/thehive'
url: 'https://docs.n8n.io/integrations/builtin/credentials/thehive'
layout:
  description:
    visible: false
---

# TheHive 凭证

{% hint style="info" %}
**大白话**：TheHive 是安全应急响应平台（安全团队用来管理安全事件、调查分析的）。n8n 连它主要用一个 **API Key（API 密钥）**，再填上服务器的 **URL（地址）** 和 **API Version（API 版本）**。注意：如果你用的是 TheHive 5，请改用 [TheHive 5 凭证](thehive5.md)；本页凭证对应的是 TheHive 3 或 4。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [TheHive](../app-nodes/n8n-nodes-base.thehive.md)

{% hint style="info" %}
**TheHive 与 TheHive 5**

n8n 为 TheHive 提供了两个节点。如果你用 TheHive 3 或 TheHive 4，请配合 TheHive 节点使用这些凭证。如果你用的是 TheHive5 节点，请使用 [TheHive 5 凭证](thehive5.md)。
{% endhint %}

## 先决条件

在你的服务器上安装 [TheHive](https://docs.strangebee.com/thehive/installation/installation-methods/)。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [TheHive 3 的 API 文档](https://docs.thehive-project.org/thehive/legacy/thehive3/api/) 和 [TheHive 4 的 API 文档](https://docs.thehive-project.org/thehive/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：在 **Organization（组织）> Create API Key（创建 API 密钥）** 里创建。更多信息请参考 [API 身份验证](https://docs.thehive-project.org/thehive/legacy/thehive3/api/authentication/)。
- 你的 **URL（地址）**：你的 TheHive 服务器地址。
- 一个 **API Version（API 版本）**：在以下选项中选择：
    - **TheHive 3 (api v0)**
    - **TheHive 4 (api v1)**
    - 如果你用的是 TheHive 5，请改用 [TheHive 5 凭证](thehive5.md)。
- **Ignore SSL Issues（忽略 SSL 问题）**：开启后，即使 SSL 证书校验失败，n8n 也会照常连接。
