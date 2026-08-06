---
title: CrowdStrike 凭证
description: >-
  CrowdStrike 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  CrowdStrike 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: CrowdStrike credentials
originalFilePath: integrations/builtin/credentials/crowdstrike.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/crowdstrike'
url: 'https://docs.n8n.io/integrations/builtin/credentials/crowdstrike'
layout:
  description:
    visible: false
---

# CrowdStrike 凭证

> **大白话**：CrowdStrike 是网络安全公司（终端防护）。n8n 通过 **OAuth2** 连接它，需要填：你的 **CrowdStrike 实例地址**、**Client ID** 和 **Client Secret**（后两个在 CrowdStrike 后台的 Support > API Clients and Keys 里创建）。创建 API Client 时记得给它 `usermgmt:read` 权限，n8n 要靠这个权限测试凭证是否可用。注意：这是纯凭证节点，需要配合 HTTP Request 节点手动调接口。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作（Prerequisites）

创建一个 [CrowdStrike](https://www.crowdstrike.com/en-us/) 账号。

## 验证方式（Authentication methods）

- OAuth2

## 相关资源（Related resources）

关于该服务的更多信息，请参考 CrowdStrike 的文档。他们的文档需要登录后才能查看，所以你必须先登录官网账号才能访问 API 文档。

这是一个纯凭证（credential-only）节点。更多信息请参考[自定义 API 操作（Custom API operations）](../custom-api-actions-for-existing-nodes.md)。也可以在 n8n 官网上查看[示例工作流和相关内容](https://n8n.io/integrations/crowdstrike/)。

## 使用 OAuth2

要配置这个凭证，你需要准备：

- **URL**：你的 CrowdStrike 实例地址
- **Client ID**：在 CrowdStrike 的 **Support > API Clients and Keys** 中新建 API Client 时生成。
- **Client Secret**：在 CrowdStrike 的 **Support > API Clients and Keys** 中新建 API Client 时生成。

设置 API client 时，请给它授予 `usermgmt:read` 权限。n8n 依赖该权限来测试凭证是否可用。

大致步骤可以公开参考 CrowdStrike 博客：[Getting Access to the CrowdStrike API](https://www.crowdstrike.com/blog/tech-center/get-access-falcon-apis/)。CrowdStrike 的完整文档需要登录，所以你必须登录账号才能查看完整的 API 文档。
