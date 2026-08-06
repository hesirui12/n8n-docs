---
title: Zep 凭证
description: >-
  Zep 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Zep 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Zep credentials
originalFilePath: integrations/builtin/credentials/zep.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/zep'
url: 'https://docs.n8n.io/integrations/builtin/credentials/zep'
layout:
  description:
    visible: false
---

# Zep 凭证

> **大白话**：Zep 是给 AI 应用做「长期记忆」的服务（让 AI 记住跨会话的对话内容）。连它需要一个 Zep 服务器（至少有一个项目），然后填 **API URL** 和 **API Key** 两样。用官方云服务（Zep Cloud）的话，去 Project Settings > Project Keys 里 Add Key 生成密钥，并打开 **Cloud** 开关；自己部署开源版的话，把 JWT 令牌填为 API Key、关掉 Cloud 开关。注意：Zep 开源版已于 2025 年 4 月停止维护。

你可以使用这些凭证对以下节点进行身份验证：

* [Zep](../cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryzep.md)
* [Zep Vector Store](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorezep.md)

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Zep 的 Cloud SDK 文档](https://help.getzep.com/install-sdks)。关于 API 的信息，请参考 [Zep 的 REST API 文档](https://getzep.github.io/zep/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key

要配置此凭证，你需要一个至少有 1 个项目的 [Zep 服务器](https://www.getzep.com/)，以及：

- 一个 **API URL**（API 地址）
- 一个 **API Key**（API 密钥）

具体配置方式取决于你用的是 Zep Cloud 还是自托管的 Zep 开源版。

### Zep Cloud 配置

如果你使用的是 [Zep Cloud](https://app.getzep.com)，请按以下步骤操作：

1. 在 Zep 中打开 **Project Settings**（项目设置）。
2. 在 **Project Keys**（项目密钥）区域，点击 **Add Key**（添加密钥）。
3. 输入一个 **Key Name**（密钥名称），比如 `n8n integration`。
4. 点击 **Create**（创建）。
5. 复制密钥，在 n8n 集成中填为 **API Key**。
6. 打开 **Cloud** 开关。

### 自托管 Zep 开源版配置

{% hint style="warning" %}
**已弃用**

Zep 团队已于 2025 年 4 月[弃用开源版 Zep Community Edition](https://blog.getzep.com/announcing-a-new-direction-for-zeps-open-source-strategy/)。这些说明将来可能不再有效。
{% endhint %}

如果你正在自托管 Zep 开源版，请按以下步骤操作：

1. 在 n8n 中把 Zep 服务器的 JWT 令牌填为 **API Key**。
2. 确保 **Cloud** 开关处于关闭状态。
3. 把 Zep 服务器的地址填为 **API URL**。
