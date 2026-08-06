---
title: DFIR-IRIS 凭证（DFIR-IRIS credentials）
description: >-
  DFIR-IRIS 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  DFIR-IRIS。
contentType:
  - integration
  - reference
nodeTitle: DFIR-IRIS 凭证（DFIR-IRIS credentials）
originalFilePath: integrations/builtin/credentials/dfiriris.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/dfiriris'
url: 'https://docs.n8n.io/integrations/builtin/credentials/dfiriris'
layout:
  description:
    visible: false
---

# DFIR-IRIS 凭证（DFIR-IRIS credentials）

> **大白话**：DFIR-IRIS 是一个开源的安全事件响应平台。想用 n8n 连上它，你只需要准备两样东西：一个 **API Key**（相当于「通行证」），以及你自己部署的 DFIR-IRIS 实例地址（**Base URL**，相当于「门牌号」）。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前置条件（Prerequisites）

你需要有一个可访问的 [DFIR-IRIS](https://docs.dfir-iris.org/latest/getting_started/) 实例。

## 相关资源（Related resources）

关于如何与该服务进行身份认证，请参考 [DFIR-IRIS 的 API 文档](https://docs.dfir-iris.org/operations/api/)。

这是一个纯凭证（credential-only）节点。想了解更多，请参考 [自定义 API 操作（Custom API operations）](../custom-api-actions-for-existing-nodes.md)。你也可以在 n8n 官网上查看 [示例工作流及相关内容](https://n8n.io/integrations/iris-dfir/)。

## 使用 API Key（Using API Key）

要配置这个凭证，你需要准备：

- 一个 **API Key**：关于如何获取 API key，请参考 [DFIR-IRIS 的 API 文档](https://docs.dfir-iris.org/operations/api/)。
- 你 DFIR-IRIS 实例的 **Base URL**（基础地址）。
