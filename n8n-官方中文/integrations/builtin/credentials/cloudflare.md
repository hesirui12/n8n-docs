---
title: Cloudflare 凭证
description: >-
  Cloudflare 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Cloudflare 的身份。
contentType:
  - integration
  - reference
nodeTitle: Cloudflare credentials
originalFilePath: integrations/builtin/credentials/cloudflare.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/cloudflare'
url: 'https://docs.n8n.io/integrations/builtin/credentials/cloudflare'
layout:
  description:
    visible: false
---

# Cloudflare 凭证

> **大白话**：Cloudflare 是 CDN/域名/网络安全服务商。n8n 想操作你的 Cloudflare（比如改 DNS 记录），需要你创建一个 API Token（接口令牌）填进来。记住：只创建一把**够用就好**的令牌，权限别给太大，更安全。

这些凭证可以用来验证以下节点的身份：

- [Cloudflare](../app-nodes/n8n-nodes-base.cloudflare.md)

## 准备工作（Prerequisites）

- 创建一个 [Cloudflare 账号](https://developers.cloudflare.com/fundamentals/setup/account/)。
- [添加一个域名（domain）](https://developers.cloudflare.com/fundamentals/setup/manage-domains/add-site/)。

## 支持的验证方式（Supported authentication methods）

- API token（API 令牌）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Cloudflare 的 API 文档](https://developers.cloudflare.com/fundamentals/api/)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要准备：

- **API token（API 令牌）**：按照 [Cloudflare 文档创建 API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) 的步骤操作。
