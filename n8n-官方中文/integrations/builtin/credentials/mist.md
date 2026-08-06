---
title: Mist 凭证
description: 学习如何在 n8n 中配置 Mist 凭证（中文小白版）。
contentType:
  - integration
  - reference
nodeTitle: Mist credentials
originalFilePath: integrations/builtin/credentials/mist.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mist'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mist'
layout:
  description:
    visible: false
---

# Mist 凭证 / Mist credentials

> 💡 **大白话**：Mist 是瞻博网络（Juniper）旗下的 AI 驱动的企业无线网络管理平台。在 n8n 里配置好 Mist 凭证，就能自动管理你的无线网络设备、查看网络状态等。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前置条件（Prerequisites）

创建一个 [Mist](https://www.mist.com/) 账号和组织。详细步骤参考 [Create a Mist account and Organization](https://www.mist.com/documentation/create-mist-org/)。

## 支持的认证方式（Supported authentication methods）

- API token（API 令牌）

## 相关资源（Related resources）

更多关于该服务的信息请参考 [Mist 官方文档](https://www.mist.com/documentation/mist-api-introduction/)。如果你已登录 Mist 账号，可访问 [https://api.mist.com/api/v1/docs/Home](https://api.mist.com/api/v1/docs/Home) 查看完整 API 文档。

这是一个仅凭证节点（credential-only node）。了解更多请参考 [自定义 API 操作](../custom-api-actions-for-existing-nodes.html)。在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/mist/)。

## 使用 API token（Using API token）

要配置此凭证，你需要：

- 一个 **API Token**：可以使用用户 API 令牌或组织 API 令牌。参考 [How to generate a user API token](https://www.mist.com/documentation/using-postman/) 生成用户 API 令牌；参考 [Org API token](https://www.mist.com/documentation/org-api-token/) 生成组织 API 令牌。
- 选择你所在的 **Region（区域）**。选项包括：
    - **Europe（欧洲）**：如果你的云环境在任一 EMEA（欧洲、中东、非洲）区域，选这个。
    - **Global（全球）**：如果你的云环境在全球其他区域，选这个。
