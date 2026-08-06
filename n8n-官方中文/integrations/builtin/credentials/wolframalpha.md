---
title: Wolfram|Alpha 凭证
description: >-
  Wolfram|Alpha 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Wolfram|Alpha 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Wolfram|Alpha credentials
originalFilePath: integrations/builtin/credentials/wolframalpha.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/wolframalpha'
url: 'https://docs.n8n.io/integrations/builtin/credentials/wolframalpha'
layout:
  description:
    visible: false
---

# Wolfram|Alpha 凭证

> **大白话**：Wolfram|Alpha 是一个「知识计算引擎」（问数学、物理、百科类问题超强）。n8n 里是把它当 AI 工具用的（让大模型调用它来算题）。连它只需要一个 **App ID（应用 ID）**：注册 Wolfram ID 后，去开发者门户申请一个「Simple API」应用就能拿到。要是填了 App ID 却提示 Forbidden（被拒绝），多半是邮箱没验证——先收邮件点链接验证。

你可以使用这些凭证对以下节点进行身份验证：

* [Wolfram|Alpha](../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwolframalpha.md)

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Wolfram|Alpha 的 Simple API 文档](https://products.wolframalpha.com/simple-api/documentation)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key

要配置此凭证，你需要注册一个 [Wolfram ID](https://account.wolfram.com)，并且有：

- 一个 **App ID**（应用 ID）

获取 App ID 的步骤：

1. 打开 Wolfram|Alpha 开发者门户，进入 [**API Access**](https://developer.wolframalpha.com/access) 页面。
2. 点击 **Get an App ID**。
3. 为你的应用输入一个 **Name**（名称），比如 `n8n integration`。
4. 为你的应用输入一个 **Description**（描述）。
5. 在 **API** 处选择 **Simple API**。
6. 点击 **Submit**（提交）。
6. 复制生成的 **App ID** 并填进你的 n8n 凭证。

更多信息请参考 [Wolfram|Alpha Simple API 文档](https://products.wolframalpha.com/simple-api/documentation) 中的 **Getting Started**（入门）部分。

## 解决 Forbidden 连接错误

如果你填入了 App ID 却收到凭证 **Forbidden**（被拒绝）的错误，请确认你的 Wolfram ID 邮箱已验证：

1. 进入你的 [Wolfram ID Details](https://account.wolfram.com/wolframid) 页面。
2. 如果你的 **Email address** 下方没有 **Verified**（已验证）标签，点击 **Send a verification email**（发送验证邮件）链接。
3. 你必须打开邮件里的链接完成邮箱验证。

验证信息同步到 API 可能需要几分钟，同步完成后重试 n8n 凭证连接即可成功。
