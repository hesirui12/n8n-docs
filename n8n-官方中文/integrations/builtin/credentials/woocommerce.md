---
title: WooCommerce 凭证
description: >-
  WooCommerce 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 WooCommerce 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: WooCommerce credentials
originalFilePath: integrations/builtin/credentials/woocommerce.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/woocommerce'
url: 'https://docs.n8n.io/integrations/builtin/credentials/woocommerce'
layout:
  description:
    visible: false
---

# WooCommerce 凭证

> **大白话**：WooCommerce 是 WordPress 上的电商插件（开店用的）。连它要三样东西：**Consumer Key（消费者密钥）**、**Consumer Secret（消费者秘密）**和你的站点 **URL**。前两样在 WordPress 后台的 WooCommerce 设置里「Add key」生成，注意权限要选 **Read/Write**（可读可写）。如果连接时报「Consumer key is missing」（密钥缺失）错，多半是 SSL 下请求头解析不了，打开「把凭证放进查询参数」开关就行。

你可以使用这些凭证对以下节点进行身份验证：

- [WooCommerce](../app-nodes/n8n-nodes-base.woocommerce.md)
- [WooCommerce Trigger](../trigger-nodes/n8n-nodes-base.woocommercetrigger.md)

## 前提条件

- 在你的 WordPress 网站上安装 [WooCommerce](https://woocommerce.com/) 插件。
- 在 WordPress 中，进入 **Settings > Permalinks**，把固定链接（Permalinks）设置成除 **Plain**（朴素）以外的其他选项。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [WooCommerce 的 REST API 文档](https://developer.woocommerce.com/docs/getting-started-with-the-woocommerce-rest-api/)。

## 使用 API key

要配置此凭证，你需要：

- 一个 **Consumer Key**（消费者密钥）：生成 API key 时产生。
- 一个 **Consumer Secret**（消费者秘密）：生成 API key 时产生。
- 一个 **WooCommerce URL**（站点地址）

生成 API key 并配置凭证的步骤：

1. 进入 **WooCommerce > Settings > Advanced > Rest API > Add key**。
2. 在 **Permissions**（权限）下拉框中选择 **Read/Write**。
3. 复制生成的 **Consumer Key** 和 **Consumer Secret**，填进你的 n8n 凭证。
4. 把你的 WordPress 站点地址填为 **WooCommerce URL**。
5. 默认情况下，n8n 会把凭证信息放在 Authorization（授权）请求头里传递。如果你需要改为通过查询字符串参数传递，请打开 **Include Credentials in Query**（在查询中附带凭证）开关。

更多信息请参考 [Generate Keys](https://developer.woocommerce.com/docs/getting-started-with-the-woocommerce-rest-api/#3-generate-keys)。

## 解决 "Consumer key is missing" 错误

尝试连接凭证时，你可能会收到类似这样的错误：`Consumer key is missing`（缺少消费者密钥）。

这通常是因为通过 SSL 认证时，服务器无法解析 Authorization 请求头里的信息。

解决办法：打开 **Include Credentials in Query** 开关，改为把消费者密钥/秘密作为查询字符串参数传递，然后重试凭证连接。
