---
title: Fortinet FortiGate 凭证
description: >-
  Fortinet FortiGate 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Fortinet FortiGate 的身份。
contentType:
  - integration
  - reference
nodeTitle: Fortinet FortiGate credentials
originalFilePath: integrations/builtin/credentials/fortigate.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/fortigate'
url: 'https://docs.n8n.io/integrations/builtin/credentials/fortigate'
layout:
  description:
    visible: false
---

# Fortinet FortiGate 凭证

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

{% hint style="info" %}
**大白话**：FortiGate 是 Fortinet 公司的一款防火墙/网络安全设备。n8n 想调用它的 API 来读写配置、查看日志等，需要先在 FortiGate 里创建一个「REST API 管理员」账号，拿到它的 **Access Token（访问令牌）**，填进 n8n 就行。另外注意：这个节点本身不带任何现成的操作，只负责「提供凭证」，具体调什么 API 要用自定义 API 请求节点自己拼。
{% endhint %}

## 准备工作

创建一个 [Fortinet FortiGate](https://www.fortinet.com/) 账号。

## 支持的验证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Fortinet FortiGate 官方 API 文档](https://docs.fortinet.com/document/fortigate/7.4.3/administration-guide/940602/using-apis)。

这是一个只提供凭证（credential-only）的节点。想了解怎么用它发起自定义 API 请求，请参考 [自定义 API 操作](../../custom-api-actions-for-existing-nodes.md)。也可以在 n8n 官网查看 [示例工作流和相关内容](https://n8n.io/integrations/fortinet-fortigate/)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- 一个 API **Access Token（访问令牌）**：要生成访问令牌，先创建一个 [REST API 管理员](https://docs.fortinet.com/document/fortigate/7.4.3/administration-guide/399023/rest-api-administrator)。

关于 FortiGate 里基于令牌的身份验证，请参考 [Fortinet FortiGate 使用 API 文档](https://docs.fortinet.com/document/fortigate/7.4.3/administration-guide/940602/using-apis)。
