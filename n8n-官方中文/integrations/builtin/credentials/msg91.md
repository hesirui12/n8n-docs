---
title: MSG91 凭证
description: >-
  MSG91 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  MSG91 的身份。
contentType:
  - integration
  - reference
nodeTitle: MSG91 credentials
originalFilePath: integrations/builtin/credentials/msg91.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/msg91'
url: 'https://docs.n8n.io/integrations/builtin/credentials/msg91'
layout:
  description:
    visible: false
---

# MSG91 凭证

{% hint style="info" %}
**大白话**：MSG91 是一个印度很流行的短信/消息发送服务（发验证码、营销短信等）。n8n 想用它发短信，只需要一个 **Authentication Key（认证密钥）**，在 MSG91 用户菜单里的 **Authkey** 页面能找到。有个坑要特别注意：MSG91 默认开启了 **IP Security（IP 安全限制）**，只允许白名单里的 IP 调用，所以你必须把 **n8n 的 IP 地址全部加进白名单**，否则 n8n 会连不上、发不出短信。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [MSG91](../app-nodes/n8n-nodes-base.msg91.md)

## 准备工作

创建一个 [MSG91](https://msg91.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [MSG91 官方 API 文档](https://docs.msg91.com/overview)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **Authentication Key（认证密钥）**：要获取你的 Authentication Key，请进入用户菜单并选择 **Authkey**。更多信息请参考 MSG91 的 [我在哪里能找到我的认证密钥？文档](https://msg91.com/help/api/where-can-i-find-my-authentication-ke)。

## IP Security（IP 安全限制）

MSG91 默认对 authkeys（认证密钥）启用 [IP Security（IP 安全限制）](https://msg91.com/help/api/what-do-you-mean-by-api-security)。

要在启用该设置的情况下让 n8n 凭证正常工作，你需要把全部 [n8n IP 地址](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud/configure-cloud/find-your-ip-addresses) 添加为 MSG91 里的白名单 IP。根据你想要的安全级别，可以在下面两个地方之一添加：

- 想让账号里**所有** authkeys 都能配合 n8n 使用：在 **Authkey（认证密钥）** 页面的 **Company's whitelisted IPs（公司白名单 IP）** 区域添加 n8n 的 IP 地址。
- 只想让**特定** authkeys 配合 n8n 使用：在该 authkey 详情里的 **Whitelisted IPs（白名单 IP）** 区域添加 n8n 的 IP 地址。
