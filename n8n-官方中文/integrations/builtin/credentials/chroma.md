---
title: Chroma 凭证
description: >-
  Chroma 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Chroma（向量数据库）的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Chroma credentials
originalFilePath: integrations/builtin/credentials/chroma.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/chroma'
url: 'https://docs.n8n.io/integrations/builtin/credentials/chroma'
layout:
  description:
    visible: false
---

# Chroma 凭证

> 大白话：Chroma 是一个向量数据库，常配合 AI 做「记忆/知识检索」。n8n 连接它有两种方式：①用官方云端版（Chroma Cloud）——需要 API Key、Tenant ID（租户 ID）、Database Name（数据库名）；②连接你自己跑的实例——只要填一个 Base URL（服务地址），默认是 `http://localhost:8000`。二选一即可。

这些凭证可以用来验证以下节点的身份：

- Chroma Vector Store（Chroma 向量存储节点）

## 准备工作

先创建并运行一个 [Chroma](https://www.trychroma.com/home) 实例。更多信息请参考 [以客户端-服务器模式运行 Chroma](https://docs.trychroma.com/docs/run-chroma/client-server)。

## 支持的验证方式

- API key（API 密钥）
- Instance URL（实例地址）

## 相关资源

关于该服务的更多信息，请参考 [Chroma 官方文档](https://docs.trychroma.com/docs/overview/getting-started)。如果使用云端实例，请参考 [Chroma Cloud 文档](https://docs.trychroma.com/cloud/getting-started)。

还可以查看 n8n 的 [Advanced AI（高级 AI）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai) 文档。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Chroma](https://www.trychroma.com/) 账号，以及：

- 一个 **API Key（API 密钥）**
- 你的 **Tenant ID（租户 ID）**
- 你的 **Database Name（数据库名称）**

配置步骤：

1. 进入 **Cloud Dashboard（云控制台）**。
2. 创建一个 **Database（数据库）**。
3. 点击你想授权访问的那个数据库的 **Settings（设置）**。
4. 点击 **Create API key and copy code（创建 API 密钥并复制代码）**。
5. 把 **API Key（API 密钥）**、**Tenant ID（租户 ID）** 和 **Database Name（数据库名称）** 填进 n8n 凭证。

## 使用 Instance URL（实例地址）

要配置这个凭证，你需要准备：

- **Base URL（基础地址）**：你的 Chroma 实例的地址。默认值是 `http://localhost:8000`。
