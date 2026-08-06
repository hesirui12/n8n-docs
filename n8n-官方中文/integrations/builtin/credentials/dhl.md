---
title: DHL 凭证（DHL credentials）
description: >-
  DHL 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证 DHL。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: DHL 凭证（DHL credentials）
originalFilePath: integrations/builtin/credentials/dhl.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/dhl'
url: 'https://docs.n8n.io/integrations/builtin/credentials/dhl'
layout:
  description:
    visible: false
---

# DHL 凭证（DHL credentials）

> **大白话**：DHL 是国际快递公司，这个凭证用来让 n8n 调用 DHL 的物流查询 API（比如查包裹送到哪了）。你只需要去 DHL 开发者平台注册一个账号、创建一个「应用（App）」，然后把生成的 **API Key** 填进 n8n 就行。

你可以使用这些凭证来认证以下节点：

- [DHL](../app-nodes/n8n-nodes-base.dhl.md)

## 支持的认证方式（Supported authentication methods）

- API key

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [DHL 的开发者文档](https://support-developer.dhl.com/support/home)。

## 使用 API key（Using API key）

要配置这个凭证，你需要一个 [DHL Developer](https://developer.dhl.com/user/register)（DHL 开发者）账号，以及：

- 一个 **API Key**

要获取 API key，需要先创建一个应用：

1. 在 DHL 开发者门户中，点击用户图标，打开你的 [User Apps](https://developer.dhl.com/user/apps)（用户应用列表）。
2. 点击 **+ Create App**（创建应用）。
3. 输入一个 **App name**（应用名称），例如 `n8n integration`。
4. 输入一个 **Machine name**（机器名称），例如 `n8n_integration`。
5. 在 **SELECT APIs**（选择 API）中，选择 **Shipment Tracking - Unified**（统一物流跟踪）。该 API 会被添加到 **Add API to app**（把 API 添加到应用）区域。
6. 在 **Add API to app** 区域中，点击 **Shipment Tracking - Unified** API 旁边的 **+** 号。
7. 点击 **Create App**（创建应用）。**Apps**（应用）页面会打开，显示你刚刚创建的应用。
8. 点击你刚创建的应用，查看它的详细信息。
9. 在 **API Key** 旁边点击 **Show key**（显示密钥）。
10. 复制这个 **API Key**，填入你的 n8n 凭证中。

更多信息请参考 [How to create an app?](https://support-developer.dhl.com/support/solutions/articles/47001177011-how-to-create-an-app-)（如何创建应用？）。
