---
title: Motorhead 凭证
description: >-
  Motorhead 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Motorhead 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Motorhead credentials
originalFilePath: integrations/builtin/credentials/motorhead.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/motorhead'
url: 'https://docs.n8n.io/integrations/builtin/credentials/motorhead'
layout:
  description:
    visible: false
---

# Motorhead 凭证

{% hint style="warning" %}
**已弃用（Deprecated）**

Motorhead 项目已经不再维护了。[Motorhead 节点](../cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymotorhead.md) 已被标记为弃用，并将在未来的版本中移除。
{% endhint %}

{% hint style="info" %}
**大白话**：Motorhead 是一个给 AI 聊天机器人提供「记忆」功能的服务（记住对话历史）。**注意：它已经被官方放弃维护了**，n8n 里的 Motorhead 节点也即将被删除，所以不建议新项目再用它。如果你非要用，需要填四个东西：**Host（服务地址）**、**API Key（API 密钥）**、**Client ID（客户端 ID）**——key 和 clientID 都在 Motorhead 后台的 API Keys 里一起生成。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Motorhead](../cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymotorhead.md)

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Motorhead 官方 API 文档](https://docs.getmetal.io/rest-api/introduction)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Motorhead](https://www.metal.ai/) 账号，以及：

- 你的 **Host（服务地址）** URL
- 一个 **API Key（API 密钥）**
- 一个 **Client ID（客户端 ID）**

设置时，你需要生成一个 API key：

1. 如果你是自托管 Motorhead，把 **Host（服务地址）** 改成你自己的 Motorhead URL。
2. 在 Motorhead 里，进入 **Settings > Organization（设置 > 组织）**。
3. 在 **API Keys（API 密钥）** 区域，选择 **Create（创建）**。
4. 给你的 API Key 起一个 **Name（名称）**，比如 `n8n integration`。
5. 选择 **Generate（生成）**。
6. 复制 **apiKey**，填到你的 n8n 凭证里。
7. 回到 API key 列表。
8. 复制这个 key 对应的 **clientID**，作为 **Client ID（客户端 ID）** 填到你的 n8n 凭证里。

更多信息请参考 [Generate an API key（生成 API 密钥）](https://docs.getmetal.io/guides/misc-get-keys)。
