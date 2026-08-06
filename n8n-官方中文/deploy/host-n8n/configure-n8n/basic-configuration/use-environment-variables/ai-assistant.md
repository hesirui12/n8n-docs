---
title: Ask n8n AI（AI 助手）环境变量
description: 用于配置 Ask n8n AI（AI 助手）的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: Ask n8n AI（AI 助手）
originalFilePath: hosting/configuration/environment-variables/ai-assistant.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/ai-assistant'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/ai-assistant
layout:
  description:
    visible: false
---

# Ask n8n AI（AI 助手）环境变量

{% hint style="info" %}
**大白话**：Ask n8n AI 是 n8n 内置的「问答助手」，能回答你在 n8n 里遇到的使用问题。自托管用户想启用它，只需要配置一个环境变量，告诉 n8n 去哪里找 AI 助手服务。
{% endhint %}

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_AI_ASSISTANT_BASE_URL` | String | (empty) | AI 助手服务的 Base URL（基础地址），填写为 `https://ai-assistant.n8n.io `。如果你自托管 n8n 并想启用 Ask n8n AI，就必须设置这个变量。 |
