---
title: Groq 凭证
description: >-
  Groq 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Groq 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Groq credentials
originalFilePath: integrations/builtin/credentials/groq.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/groq'
url: 'https://docs.n8n.io/integrations/builtin/credentials/groq'
layout:
  description:
    visible: false
---

# Groq 凭证

{% hint style="info" %}
**大白话**：Groq 是一家提供「超快 AI 模型推理」的云服务商（以响应速度快著称）。n8n 里要用它的聊天模型，只需要去 Groq 官网生成一把 **API Key（API 密钥）**，填进 n8n 凭证就行。注意：Groq 的 key 是绑定「组织」的，不是绑定个人的，别弄混了。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Groq Chat Model（Groq 聊天模型）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgroq.md)

## 前提条件

创建一个 [Groq](https://groq.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Groq 的文档](https://console.groq.com/docs/quickstart)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**

获取 API key 的步骤：

1. 打开 Groq 控制台的 [API Keys（API 密钥）](https://console.groq.com/keys) 页面。
2. 点击 **Create API Key（创建 API 密钥）**。
3. 给这把钥匙起个显示名称（display name），比如 `n8n integration`，然后点 **Submit（提交）**。
4. 复制生成的 key，粘贴到 n8n 的凭证里。

更多信息请参考 [Groq 的 API Keys 文档](https://console.groq.com/docs/quickstart)。

{% hint style="info" %}
**Groq API keys（Groq API 密钥）**

Groq 的 API 密钥是绑定到**组织（organization）**的，不是绑定到用户的。
{% endhint %}
