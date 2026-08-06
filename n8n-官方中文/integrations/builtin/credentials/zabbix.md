---
title: Zabbix 凭证
description: >-
  Zabbix 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Zabbix 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Zabbix credentials
originalFilePath: integrations/builtin/credentials/zabbix.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/zabbix'
url: 'https://docs.n8n.io/integrations/builtin/credentials/zabbix'
layout:
  description:
    visible: false
---

# Zabbix 凭证

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

> **大白话**：Zabbix 是监控系统（盯着服务器、网络、服务有没有挂）。连它只要两样：**API Token（API 令牌）**——这是你的 Zabbix 用户对应的 API 密钥；**URL**——你的 Zabbix 服务器地址，注意不要带 `/zabbix` 后缀。可以用 Zabbix 云账号，也可以自己部署 Zabbix 服务器。

## 前提条件

创建一个 [Zabbix Cloud](https://www.zabbix.com/) 账户，或自行托管你自己的 Zabbix 服务器。

## 支持的认证方式

* API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Zabbix 的 API 文档](https://www.zabbix.com/documentation/current/en/manual/api)。

这是一个纯凭证节点。更多信息请参考 [Custom API operations](../custom-api-actions-for-existing-nodes.md)。在 n8n 官网上查看[示例工作流和相关内容](https://n8n.io/integrations/zabbix/)。

## 使用 API key

要配置此凭证，你需要：

- 一个 **API Token**（API 令牌）：你的 Zabbix 用户的 API 密钥。
- 一个 **URL**：你的 Zabbix 服务器地址。不要把 `/zabbix` 包含在 URL 中。

关于如何向该服务进行身份验证，请参考 [Zabbix 的 API 文档](https://www.zabbix.com/documentation/current/en/manual/api#authentication)。
