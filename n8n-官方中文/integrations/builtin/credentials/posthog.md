---
title: PostHog 凭证
description: >-
  PostHog 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  PostHog 的身份。
contentType:
  - integration
  - reference
nodeTitle: PostHog credentials
originalFilePath: integrations/builtin/credentials/posthog.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/posthog'
url: 'https://docs.n8n.io/integrations/builtin/credentials/posthog'
layout:
  description:
    visible: false
---

# PostHog 凭证

{% hint style="info" %}
**大白话**：PostHog 是开源的「产品分析」工具（看用户怎么用你的产品、做漏斗分析、A/B 测试等），可以云端用也可以自己部署。n8n 连它要填两个东西：**API URL（接口地址，取决于你在哪个区域的云或自己部署）** 和 **API Key（API 密钥）**。注意：访问公开接口和私有接口用的 key 不一样，下面有详细说明。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [PostHog](../app-nodes/n8n-nodes-base.posthog.md)

## 准备工作

注册一个 [PostHog](https://posthog.com/) 账号，或者把 PostHog 部署在你自己的服务器上。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [PostHog 官方 API 文档](https://posthog.com/docs/api)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- API **URL（接口地址）**：输入你的 API 请求对应的正确域名：
    - 美国云（US Cloud），公开的仅 POST 接口用 `https://us.i.posthog.com`，私有接口用 `https://us.posthog.com`。
    - 欧洲云（EU Cloud），公开的仅 POST 接口用 `https://eu.i.posthog.com`，私有接口用 `https://eu.posthog.com`。
    - 自建部署（self-hosted），用你自己的部署域名。
    - 不确定的话，看一下你的 PostHog 实例地址即可确认。
- 一个 **API Key（API 密钥）**：用哪个 API key 取决于你访问的是公开接口还是私有接口：
    - 访问公开的仅 POST 接口，用你项目 **General（通用）** 设置里的 [Project API key（项目 API 密钥）](https://app.posthog.com/project/settings)。
    - 访问私有接口，用你用户账号 **Personal API Keys（个人 API 密钥）** 设置里的 [Personal API key（个人 API 密钥）](https://app.posthog.com/settings/user-api-keys)。更多说明请参考[如何获取个人 API 密钥](https://posthog.com/docs/api#private-endpoint-authentication)。
