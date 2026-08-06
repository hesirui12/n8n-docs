---
title: Cortex 凭证
description: >-
  Cortex 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Cortex 的身份。
contentType:
  - integration
  - reference
nodeTitle: Cortex credentials
originalFilePath: integrations/builtin/credentials/cortex.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/cortex'
url: 'https://docs.n8n.io/integrations/builtin/credentials/cortex'
layout:
  description:
    visible: false
---

# Cortex 凭证

> **大白话**：Cortex 是开源的网络安全分析工具（威胁情报、文件分析等），通常是**自己部署在服务器上**用的。n8n 连接它需要：你自己服务器的 **Cortex 地址**（默认端口 9001）和一把 **API Key**。先把 Cortex 装起来，再去它的 API 文档里学怎么生成密钥。

这些凭证可以用来验证以下节点的身份：

- [Cortex](../app-nodes/n8n-nodes-base.cortex.md)

## 准备工作（Prerequisites）

在你的服务器上安装 [Cortex](https://docs.strangebee.com/cortex/installation-and-configuration/)。

## 支持的验证方式（Supported authentication methods）

- API key（API 密钥）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Cortex 的 API 文档](https://docs.strangebee.com/cortex/api/api-guide/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API Key（API 密钥）**：生成 API 密钥的详细步骤请参考 [Cortex 的 API 认证文档](https://docs.strangebee.com/cortex/api/api-guide/#authentication)。
- **Cortex Instance（Cortex 实例）** 的 URL/服务器地址（默认为 `http://<your_server_address>:9001/`）。
