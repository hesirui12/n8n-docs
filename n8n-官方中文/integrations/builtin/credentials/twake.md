---
title: Twake 凭证
description: >-
  Twake 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Twake 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Twake credentials
originalFilePath: integrations/builtin/credentials/twake.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/twake'
url: 'https://docs.n8n.io/integrations/builtin/credentials/twake'
layout:
  description:
    visible: false
---

# Twake 凭证

> **大白话**：Twake 是个团队协作工具。连 n8n 有两种方式：云版直接用「工作区密钥」，自己搭服务器（自托管）版就填「服务器地址 + 公钥 + 私钥」。

你可以使用这些凭证对以下节点进行身份验证：

- [Twake](../app-nodes/n8n-nodes-base.twake.md)

## 前置条件

创建一个 [Twake](https://twake.app/) 账户。

## 支持的认证方式

- Cloud API key（云端 API 密钥）
- Server API key（服务器 API 密钥）

## 相关资源

更多关于该服务的信息，请参考 [Twake 的文档](https://doc.twake.app/developers-api/api-reference)。

## 使用 Cloud API key

要配置此凭证，你需要：

- **Workspace Key**（工作区密钥）：当你在 Twake 云环境中安装 **n8n** 应用并选择 **Configure**（配置）时生成。更详细的说明请参考 [如何将 n8n 连接到 Twake](https://help.twake.app/en/latest/applications/connectors/index.html#how-to-connect-n8n-to-twake)。

## 使用 Server API key

要配置此凭证，你需要：

- **Host URL**（主机地址）：你的 Twake 自托管实例的 URL。
- **Public ID**（公共标识）：创建应用时生成。
- **Private API Key**（私有 API 密钥）：创建应用时生成。

要生成你的 **Public ID** 和 **Private API Key**，请[创建一个 Twake 应用](https://doc.twake.app/developers-api/get-started/create-your-first-application)：

1. 前往 **Workspace Settings > Applications and connectors > Access your applications and connectors > Create an application**（工作区设置 > 应用与连接器 > 访问你的应用与连接器 > 创建应用）。
2. 输入合适的信息。
3. 创建完成后，查看应用的 **API Details**（API 详情）。
4. 复制 **Public identifier**（公共标识符），填入 n8n 的 **Public ID** 字段。
5. 复制 **Private key**（私钥），填入 n8n 的 **Private API Key** 字段。

更多信息请参考 [API settings](https://doc.twake.app/developers-api/get-started/create-your-first-application#id-3.-api-settings)。
