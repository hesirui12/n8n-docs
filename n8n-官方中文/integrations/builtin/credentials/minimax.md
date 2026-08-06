---
title: MiniMax 凭证
description: >-
  MiniMax 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  MiniMax 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: MiniMax credentials
originalFilePath: integrations/builtin/credentials/minimax.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/minimax'
url: 'https://docs.n8n.io/integrations/builtin/credentials/minimax'
layout:
  description:
    visible: false
---

# MiniMax 凭证

> **大白话**：MiniMax 是国内的 AI 大模型服务商（能聊天的那个）。在 n8n 里连它，先选你的账号是「国际版」还是「中国版」，再去 MiniMax 后台的 API Keys 里创建一个密钥填进来。

你可以使用这些凭证来验证以下节点的身份：

* [MiniMax](../app-nodes/n8n-nodes-langchain.minimax.md)
* [MiniMax Chat Model](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatminimax.md)

## 前提条件

注册一个 [MiniMax](https://platform.minimax.io/) 账号。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [MiniMax 的 API 文档](https://platform.minimax.io/docs/guides/models-intro)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key

要配置这个凭证，你需要：

- 一个 **Region（区域）**：根据你的 MiniMax 账号选择 **International**（国际）或 **China**（中国）。
- 一个 **API Key（API 密钥）**

获取 API key 的步骤：

1. 登录你的 [MiniMax 账号](https://platform.minimax.io/)。
2. 进入 **Account**（账号）> **API Keys**。
3. 选择 **Create API Key**（创建 API 密钥）。
4. 复制密钥并填进你的 n8n 凭证。
