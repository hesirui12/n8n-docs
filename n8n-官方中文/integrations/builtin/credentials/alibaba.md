---
title: Qwen Cloud 凭证
description: >-
  Qwen Cloud 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Qwen Cloud 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Qwen Cloud credentials
originalFilePath: integrations/builtin/credentials/alibaba.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/alibaba'
url: 'https://docs.n8n.io/integrations/builtin/credentials/alibaba'
layout:
  description:
    visible: false
---

# Qwen Cloud 凭证

{% hint style="info" %}
**大白话**：Qwen Cloud 是阿里通义千问大模型的云服务平台（qwencloud.com）。n8n 连它只需要一把 **API Key（API 密钥）**，在 Qwen Cloud 后台生成后填进 n8n 即可。注意：Qwen Cloud 账号的 **Region（区域）** 要选 **Singapore（新加坡）**，只有用阿里云百炼（Alibaba Cloud Model Studio）时才选其他区域。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Qwen Cloud](../app-nodes/n8n-nodes-langchain.alibabacloud.md)
- [Qwen Cloud Chat Model（聊天模型）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatalibabacloud.md)

## 准备工作

注册一个 [Qwen Cloud](https://qwencloud.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Qwen Cloud API key 官方文档](https://docs.qwencloud.com/developer-guides/administration/api-keys)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**

获取步骤：

1. 登录 [Qwen Cloud](https://qwencloud.com/)。
2. 进入 **API Keys（API 密钥）** 页面。
3. 用侧边栏底部的工作区切换器，选择你想在哪创建 key 的工作区。
4. 点 **Create API key（创建 API 密钥）**。
5. 输入描述，然后点 **Generate Key（生成密钥）**。
6. 复制这个 API key。注意：它只显示一次，错过就看不到了。
7. 把 API key 填进 n8n 的凭证里。
8. Qwen Cloud 账号把 **Region（区域）** 设为 **Singapore（新加坡）**。只有使用 Alibaba Cloud Model Studio 时才选择其他区域。

更多信息请参考 [Qwen Cloud API key 官方文档](https://docs.qwencloud.com/developer-guides/administration/api-keys)。
