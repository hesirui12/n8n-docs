---
title: Moonshot 凭证
description: >-
  Moonshot 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Moonshot 的身份。
contentType:
  - integration
  - reference
nodeTitle: Moonshot credentials
originalFilePath: integrations/builtin/credentials/moonshot.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/moonshot'
url: 'https://docs.n8n.io/integrations/builtin/credentials/moonshot'
layout:
  description:
    visible: false
---

# Moonshot 凭证

{% hint style="info" %}
**大白话**：Moonshot 就是月之暗面（Kimi 的开发商），Kimi 是国内很火的 AI 聊天助手。n8n 想调用 Kimi 的模型，只需要去 Kimi 开放平台注册账号、创建一个 **API key（API 密钥）** 填进来就行。整个过程就三步：登录平台 → 创建密钥 → 复制粘贴。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Moonshot Kimi](../app-nodes/n8n-nodes-langchain.moonshot.md)
* [Moonshot Kimi Chat Model](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmoonshot.md)

## 准备工作

创建一个 [Kimi API Platform 账号](https://platform.kimi.ai/)。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Moonshot 官方文档](https://platform.kimi.ai/docs/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Kimi API Platform](https://platform.kimi.ai/) 账号和一个 API key：

1. 在 [Kimi API Platform 控制台](https://platform.kimi.ai/console/api-keys) 里，选择 **API Keys（API 密钥）**。
2. 选择 **Create API Key（创建 API 密钥）**。
3. 给这个 API key 输入一个 **name（名称）** 和 **project（项目）**。
4. 复制这个 API key，填到你的 n8n 凭证里。
