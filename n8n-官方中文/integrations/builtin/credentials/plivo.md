---
title: Plivo 凭证
description: >-
  Plivo 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Plivo 的身份。
contentType:
  - integration
  - reference
nodeTitle: Plivo credentials
originalFilePath: integrations/builtin/credentials/plivo.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/plivo'
url: 'https://docs.n8n.io/integrations/builtin/credentials/plivo'
layout:
  description:
    visible: false
---

# Plivo 凭证

{% hint style="info" %}
**大白话**：Plivo 是「语音 / 短信 API」服务商，让程序能自动打电话、发短信。n8n 连它用 **Basic auth（基本身份验证）**，本质上是填 **Auth ID（账号 ID，相当于用户名）+ Auth Token（令牌，相当于密码）** 两个值，都从 Plivo 控制台的 Overview（概览）页复制。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Plivo](../app-nodes/n8n-nodes-base.plivo.md)

## 准备工作

注册一个 [Plivo](https://www.plivo.com/) 账号。

## 支持的验证方式

- Basic auth（基本身份验证）

## 相关资源

关于该服务的更多信息，请参考 [Plivo 官方 API 文档](https://www.plivo.com/docs/voice/api/overview/)。

## 使用 basic auth（基本身份验证）

要配置这个凭证，你需要：

- 一个 **Auth ID（账号 ID）**：相当于你的用户名。从 Plivo [控制台](https://console.plivo.com/dashboard/)的 **Overview（概览）** 页复制。
- 一个 **Auth Token（令牌）**：相当于你的密码。从 Plivo [控制台](https://console.plivo.com/dashboard/)的 **Overview（概览）** 页复制。

更详细的说明请参考[如何修改我的 Auth ID 或 Auth Token？](https://support.plivo.com/hc/en-us/articles/360041731231-How-can-I-change-my-Auth-ID-or-Auth-Token)
