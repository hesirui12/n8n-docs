---
title: Bitwarden 凭证
description: >-
  Bitwarden 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Bitwarden 的身份。
contentType:
  - integration
  - reference
nodeTitle: Bitwarden credentials
originalFilePath: integrations/builtin/credentials/bitwarden.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/bitwarden'
url: 'https://docs.n8n.io/integrations/builtin/credentials/bitwarden'
layout:
  description:
    visible: false
---

# Bitwarden 凭证

> 大白话：Bitwarden 是密码管理器（保险库）。n8n 想帮你自动管理密码库里的条目，就需要它的官方 API 授权。重点是：你必须用「组织（Organization）」级别的 API Key，不是个人 API Key，还要分清你是用官方云版还是自己搭建的版本。

这些凭证可以用来验证以下节点的身份：

- [Bitwarden](../app-nodes/n8n-nodes-base.bitwarden.md)

## 准备工作

注册一个 [Bitwarden](https://vault.bitwarden.com/#/register?org=teams) Teams（团队）组织账号或 Enterprise（企业）组织账号。（Bitwarden 只对这两类 [组织](https://bitwarden.com/help/about-organizations/) 套餐开放官方 Public API。）

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Bitwarden 官方 Public API 文档](https://bitwarden.com/help/public-api/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **Client ID（客户端 ID）**：生成 API key 时会提供。
- 一个 **Client Secret（客户端密钥）**：生成 API key 时会提供。
- **Environment（运行环境）**：
    - 如果你没有自建 Bitwarden，选择 **Cloud-hosted（云托管）** 即可，无需其他配置。
    - 如果你在自己服务器上部署了 Bitwarden，选择 **Self-hosted（自建）**，并在对应字段填写你的 **Self-hosted domain（自建域名）**。

注意：Client ID 和 Client Secret 必须是 **Organization API Key（组织级 API 密钥）**，不能用个人级（Personal）的。如何生成组织级 API Key，请参考 [Bitwarden Public API 身份验证文档](https://bitwarden.com/help/public-api/#authentication)。
