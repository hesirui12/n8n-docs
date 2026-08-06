---
title: Zscaler ZIA 凭证
description: >-
  Zscaler ZIA 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Zscaler ZIA 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Zscaler ZIA credentials
originalFilePath: integrations/builtin/credentials/zscalerzia.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/zscalerzia'
url: 'https://docs.n8n.io/integrations/builtin/credentials/zscalerzia'
layout:
  description:
    visible: false
---

# Zscaler ZIA 凭证

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

> **大白话**：Zscaler ZIA 是企业级网络安全服务（上网安全网关）。连它要填四样：**Base URL（基础地址）**——登录 ZIA 管理后台，在 **Administration > Cloud Service API Security** 里能看到；**Username** 和 **Password**——你的 ZIA 管理员账号密码；**Api Key**——在 **Administration > Cloud Service API Security > Cloud Service API Key** 里创建一个。四样齐了就能连上。

## 前提条件

在 [Zscaler Internet Access (ZIA)](https://www.zscaler.com/products/zscaler-internet-access) 云实例上创建一个管理员账户。

## 支持的认证方式

- Basic auth 与 API key 组合（基本认证 + API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Zscaler ZIA 的文档](https://help.zscaler.com/zia/getting-started-zia-api)。

这是一个纯凭证节点。更多信息请参考 [Custom API operations](../custom-api-actions-for-existing-nodes.md)。在 n8n 官网上查看[示例工作流和相关内容](https://n8n.io/integrations/zscaler-zia/)。

## 使用 basic auth 与 API key 组合

要配置此凭证，你需要：

- 一个 **Base URL**（基础地址）：填写你的 Zscaler ZIA 云名称的基础地址。要获取基础地址，请登录 ZIA 管理后台，进入 **Administration > Cloud Service API Security**。该基础地址会同时显示在 **Cloud Service API Key** 和 **OAuth 2.0 Authorization Servers** 两个选项卡中。
- 一个 **Username**（用户名）：填写你的 ZIA 管理员用户名。
- 一个 **Password**（密码）：填写你的 ZIA 管理员密码。
- 一个 **Api Key**（API 密钥）：进入 **Administration > Cloud Service API Security > Cloud Service API Key**，创建一个 API 密钥。

更多详细说明请参考 [About Cloud Service API Key](https://help.zscaler.com/zia/about-cloud-service-api-key)。
