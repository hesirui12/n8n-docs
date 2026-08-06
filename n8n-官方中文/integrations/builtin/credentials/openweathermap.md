---
title: OpenWeatherMap 凭证
description: >-
  OpenWeatherMap 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  OpenWeatherMap 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: OpenWeatherMap credentials
originalFilePath: integrations/builtin/credentials/openweathermap.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/openweathermap'
url: 'https://docs.n8n.io/integrations/builtin/credentials/openweathermap'
layout:
  description:
    visible: false
---

# OpenWeatherMap 凭证

{% hint style="info" %}
**大白话**：OpenWeatherMap 是常用的免费天气数据服务，返回温度、降雨、预报等数据。n8n 连它需要一把 **Access Token（访问令牌）**——注册账号并验证邮箱后，官方会往你邮箱发一封带 **API Key** 的欢迎邮件，直接复制那串 key 填进 n8n 就行；也可以在后台手动新建一把。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [OpenWeatherMap](../app-nodes/n8n-nodes-base.openweathermap.md)

## 支持的验证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [OpenWeatherMap 官方 API 文档](https://openweathermap.org/api)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要一个 [OpenWeatherMap](https://openweathermap.org/) 账号，还需要：

- 一个 **Access Token（访问令牌）**

获取你的 **Access Token**：

1. 验证邮箱后，OpenWeatherMap 会在欢迎邮件里附上一个 **API Key**。
2. 复制那个 key，填进 n8n 的凭证里。

如果你想新建一把 key：

1. 进入 **Account（账号）>** [**API Keys（API 密钥）**](https://home.openweathermap.org/api_keys)。
2. 在 **Create Key（新建密钥）** 区域，输入一个 **API Key Name（密钥名称）**，比如 `n8n integration`。
3. 点击 **Generate（生成）** 生成你的 key。
4. 复制生成的 key，填进 n8n 的凭证里。
