---
title: Customer.io 凭证
description: >-
  Customer.io 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Customer.io 的身份。
contentType:
  - integration
  - reference
nodeTitle: Customer.io credentials
originalFilePath: integrations/builtin/credentials/customerio.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/customerio'
url: 'https://docs.n8n.io/integrations/builtin/credentials/customerio'
layout:
  description:
    visible: false
---

# Customer.io 凭证

> **大白话**：Customer.io 是做用户运营消息推送的（邮件、推送、短信等）。它有两套 API（Track 和 App），所以凭证里要填**两组**东西：Track 用的 **Tracking API Key + Tracking Site ID**，以及 App 用的 **App API Key**。另外还要选区域——不在欧盟就选 Global（全球），在欧盟选 EU。n8n 会自动根据操作选用对应的钥匙，你只管都填上。

这些凭证可以用来验证以下节点的身份：

- [Customer.io](../app-nodes/n8n-nodes-base.customerio.md)
- [Customer.io Trigger](../trigger-nodes/n8n-nodes-base.customeriotrigger.md)

## 准备工作（Prerequisites）

先注册一个 [Customer.io](https://customer.io/) 账号。

## 支持的验证方式（Supported authentication methods）

- API Key（API 密钥）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Customer.io 的 API 汇总文档](https://customer.io/docs/api/?api=journeys)。

各 API 的详细参考文档请参考 [Track API 文档](https://customer.io/docs/api/track/) 和 [App API 文档](https://customer.io/docs/api/app/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **Tracking API Key**：配合 [Track API](https://customer.io/docs/api/track/) 使用，接口地址为 `https://track.customer.io/api/v1/`。详见下方常见问题。
- **Region（区域）**：Customer.io 会根据你选择的区域使用不同的 API 子域名。选项包括：
    - **Global region（全球区域）**：两个 API 都使用默认地址；适用于所有非欧盟国家/地区。
    - **EU region（欧盟区域）**：把 Track API 的子域名调整为 `track-eu`，把 App API 的子域名调整为 `api-eu`；只有你在欧盟时才使用。
- **Tracking Site ID**：与 **Tracking API Key** 配套使用。
- **App API Key**：配合 [App API](https://customer.io/docs/api/app/) 使用，接口地址为 `https://api.customer.io/v1/api/`。详见下方常见问题。

关于如何创建 Tracking API 和 App API 密钥，请参考 [Customer.io 的查找和管理 API 凭证文档](https://customer.io/docs/accounts-and-workspaces/managing-credentials/)。

## 为什么需要 Tracking API Key 和 App API Key

Customer.io 有两个不同的 API 端点，两个密钥的生成和存储方式也略有不同：

- [Track API](https://customer.io/docs/api/track/)，地址为 `https://track.customer.io/api/v1/`
- [App API](https://customer.io/docs/api/app/)，地址为 `https://api.customer.io/v1/api/`

Track API 需要 Tracking Site ID；App API 不需要。

n8n 会根据你要执行的操作，自动使用对应的 API 密钥和它的端点。
