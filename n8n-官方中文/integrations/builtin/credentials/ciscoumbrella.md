---
title: Cisco Umbrella 凭证
description: >-
  Cisco Umbrella 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Cisco Umbrella（网络安全产品）的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Cisco Umbrella credentials
originalFilePath: integrations/builtin/credentials/ciscoumbrella.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/ciscoumbrella'
url: 'https://docs.n8n.io/integrations/builtin/credentials/ciscoumbrella'
layout:
  description:
    visible: false
---

# Cisco Umbrella 凭证

> 大白话：Cisco Umbrella 是思科的云安全产品（DNS 过滤/防钓鱼那类）。注意：这是「纯凭证节点」，n8n 只负责登录，具体调哪个接口得你自己写。配置需要两样：API Key 和 Secret（密钥的密钥），都在创建 API key 时一起给你。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

- 注册一个 [Cisco DevNet 开发者账号](https://developer.cisco.com)。
- 一个拥有 **Full Admin（完全管理员）** 角色的 [Cisco Umbrella 用户账号](https://umbrella.cisco.com/)。

## 验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Cisco Umbrella 官方 API 文档](https://developer.cisco.com/docs/cloud-security/)。

这是一个纯凭证节点。更多说明请参考 [Custom API operations（自定义 API 操作）](../custom-api-actions-for-existing-nodes.md)。也可以到 n8n 官网查看 [示例工作流和相关内容](https://n8n.io/integrations/cisco-umbrella/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**
- 一个 **Secret（密钥）**：创建 API key 时提供。

如何创建 Umbrella API key，请参考 [Cisco Umbrella 管理 API 密钥文档](https://developer.cisco.com/docs/cloud-security/authentication/#manage-api-keys)。
