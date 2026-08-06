---
title: Cisco Meraki 凭证
description: >-
  Cisco Meraki 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Cisco Meraki（企业网络设备管理）的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Cisco Meraki credentials
originalFilePath: integrations/builtin/credentials/ciscomeraki.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/ciscomeraki'
url: 'https://docs.n8n.io/integrations/builtin/credentials/ciscomeraki'
layout:
  description:
    visible: false
---

# Cisco Meraki 凭证

> 大白话：Cisco Meraki 是思科的「云管理网络」产品（路由器、交换机、AP 都归它管）。注意：这是一个「纯凭证节点」，n8n 只负责登录，具体调哪个接口得你自己写（HTTP Request 自定义调用）。配置只需一样东西：你的 Meraki API Key（密钥），去 Meraki 后台按官方文档生成即可。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

- 注册一个 [Cisco DevNet 开发者账号](https://developer.cisco.com)。
- 能访问一个 [Cisco Meraki 账号](https://meraki.cisco.com/)。

## 验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Cisco Meraki 官方 API 文档](https://developer.cisco.com/meraki/api-v1/introduction/)。

这是一个纯凭证节点。更多说明请参考 [Custom API operations（自定义 API 操作）](../custom-api-actions-for-existing-nodes.md)。也可以到 n8n 官网查看 [示例工作流和相关内容](https://n8n.io/integrations/cisco-meraki/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：如何获取，请参考 [Cisco Meraki 获取 Meraki API Key 文档](https://developer.cisco.com/meraki/api-v1/authorization/#obtaining-your-meraki-api-key)。
