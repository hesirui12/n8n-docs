---
title: Anthropic 凭证
description: >-
  Anthropic 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Anthropic 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Anthropic credentials
originalFilePath: integrations/builtin/credentials/anthropic.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/anthropic'
url: 'https://docs.n8n.io/integrations/builtin/credentials/anthropic'
layout:
  description:
    visible: false
---

# Anthropic 凭证

{% hint style="info" %}
**大白话**：Anthropic 就是 Claude 大模型的开发商。n8n 里用 Claude 相关节点（比如聊天模型、Agent 背后的语言模型）时，需要在 Anthropic 控制台生成一把 **API Key** 填进来。如果你有特殊需求，还可以给请求加自定义请求头（Custom Header）。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Anthropic](../app-nodes/n8n-nodes-langchain.anthropic.md)
- [Anthropic Chat Model（聊天模型）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatanthropic.md)

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Anthropic 官方文档（开始使用 API）](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个能使用 Claude 的 [Anthropic Console 账号](https://console.anthropic.com)。

然后按以下步骤：

1. 在 Anthropic Console 中，打开 **Settings（设置）>** [**API Keys（API 密钥）**](https://console.anthropic.com/settings/keys)。
2. 点 **+ Create Key（创建密钥）**。
3. 给你的 key 取个 **Name（名称）**，比如 `n8n-integration`。
4. 点 **Copy Key（复制密钥）** 复制 key。
5. 把它作为 **API Key** 填进 n8n 的凭证里。
6. （可选）想给 API 请求添加自定义请求头：
    1. 打开 **Add Custom Header（添加自定义请求头）** 开关。
    2. 输入自定义请求头的 **Header Name（请求头名称）**。
    3. 输入自定义请求头的 **Header Value（请求头值）**。

更多信息请参考 Anthropic 的 [Claude 入门介绍](https://docs.anthropic.com/en/docs/intro-to-claude) 和 [快速上手](https://docs.anthropic.com/en/docs/quickstart)。
