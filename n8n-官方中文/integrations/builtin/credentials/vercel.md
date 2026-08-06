---
title: Vercel AI Gateway 凭证
description: >-
  Vercel AI Gateway 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Vercel AI Gateway 进行身份验证。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Vercel AI Gateway credentials
originalFilePath: integrations/builtin/credentials/vercel.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/vercel'
url: 'https://docs.n8n.io/integrations/builtin/credentials/vercel'
layout:
  description:
    visible: false
---

# Vercel AI Gateway 凭证

> **大白话**：Vercel AI Gateway 是统一调用各种 AI 模型的网关。n8n 连它有两种方式：一种是去 Vercel 控制台生成 API Key（简单，推荐）；另一种是用 OIDC token（适合在 Vercel 部署环境中用，本地要用 vc link 和 vercel env pull 两个命令）。

你可以使用这些凭证对以下节点进行身份验证：

- [Chat Vercel AI Gateway](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatvercel.md)

## 前置条件

创建一个 [Vercel](https://vercel.com/) 账户。

## 支持的认证方式

- API key（API 密钥）
- OIDC token

## 相关资源

更多关于该服务的信息，请参考 [Vercel AI Gateway 文档](https://vercel.com/docs/ai-gateway)。

## 使用 API key

要配置此凭证，你需要：

- **API Key**（API 密钥）

要生成你的 API Key：

1. [登录 Vercel](https://vercel.com/login) 或[创建账户](https://vercel.com/signup)。
2. 进入 Vercel 控制台，选择 **AI Gateway** 标签页。
3. 在左侧边栏选择 **API keys**（API 密钥）。
4. 选择 **Add key**（添加密钥），并在弹出的对话框中继续选择 **Create key**（创建密钥）。
5. 复制你的密钥，填入 n8n 的 **API Key** 字段。

## 使用 OIDC token

要配置此凭证，你需要：

- **OIDC token**

要生成你的 OIDC token：

1. 在本地开发中，使用 `vc link` 命令将你的应用关联到 Vercel 项目。
2. 运行 `vercel env pull` 命令，从 Vercel 拉取环境变量。
3. 复制你的 token，填入 n8n 的 **OIDC TOKEN** 字段。
