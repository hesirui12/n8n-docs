---
title: F5 Big-IP 凭证（F5 Big-IP credentials）
description: >-
  F5 Big-IP 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  F5 Big-IP。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: F5 Big-IP 凭证（F5 Big-IP credentials）
originalFilePath: integrations/builtin/credentials/f5bigip.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/f5bigip'
url: 'https://docs.n8n.io/integrations/builtin/credentials/f5bigip'
layout:
  description:
    visible: false
---

# F5 Big-IP 凭证（F5 Big-IP credentials）

> **大白话**：F5 Big-IP 是企业级的负载均衡/应用交付设备（帮网站分发流量、做安全防护的硬件或软件）。n8n 连它用的是「账号登录」方式：把你登录 F5 Big-IP 的用户名和密码填进去就行。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前置条件（Prerequisites）

创建一个 [F5 Big-IP](https://www.f5.com/products/big-ip-services) 账号。

## 认证方式（Authentication methods）

- Account login（账号登录）

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [F5 Big-IP 的 API 文档](https://clouddocs.f5.com/products/big-iq/mgmt-api/v0.0/)。

这是一个纯凭证（credential-only）节点。想了解更多，请参考 [自定义 API 操作（Custom API operations）](../custom-api-actions-for-existing-nodes.md)。你也可以在 n8n 官网上查看 [示例工作流及相关内容](https://n8n.io/integrations/f5-big-ip/)。

## 使用账号登录（Using account login）

要配置这个凭证，你需要：

- 一个 **Username**（用户名）：使用你登录 F5 Big-IP 时用的用户名。
- 一个 **Password**（密码）：使用你登录 F5 Big-IP 时用的用户密码。
