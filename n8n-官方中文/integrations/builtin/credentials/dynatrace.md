---
title: Dynatrace 凭证（Dynatrace credentials）
description: >-
  Dynatrace 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Dynatrace。
contentType:
  - integration
  - reference
nodeTitle: Dynatrace 凭证（Dynatrace credentials）
originalFilePath: integrations/builtin/credentials/dynatrace.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/dynatrace'
url: 'https://docs.n8n.io/integrations/builtin/credentials/dynatrace'
layout:
  description:
    visible: false
---

# Dynatrace 凭证（Dynatrace credentials）

> **大白话**：Dynatrace 是一个应用监控（APM）平台，用来监控服务器和应用的性能、报错等。n8n 连它只需要一个 **Access Token**（访问令牌），在 Dynatrace 后台生成一个就行。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前置条件（Prerequisites）

创建一个 [Dynatrace](https://www.dynatrace.com/signup/) 账号。

## 相关资源（Related resources）

更多关于如何与该服务进行身份认证的信息，请参考 [Dynatrace 的 API 文档](https://docs.dynatrace.com/docs/dynatrace-api)。

这是一个纯凭证（credential-only）节点。想了解更多，请参考 [自定义 API 操作（Custom API operations）](../custom-api-actions-for-existing-nodes.md)。你也可以在 n8n 官网上查看 [示例工作流及相关内容](https://n8n.io/integrations/dynatrace-api/)。

## 使用 Access Token（Using Access Token）

要配置这个凭证，你需要：

- 一个 **Access Token**（访问令牌）

更多信息请参考 Dynatrace 官网的 [Access Tokens](https://docs.dynatrace.com/docs/manage/identity-access-management/access-tokens-and-oauth-clients/access-tokens)（访问令牌）文档。
