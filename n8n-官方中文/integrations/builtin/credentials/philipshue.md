---
title: Philips Hue 凭证
description: >-
  Philips Hue 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Philips Hue 的身份。
contentType:
  - integration
  - reference
nodeTitle: Philips Hue credentials
originalFilePath: integrations/builtin/credentials/philipshue.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/philipshue'
url: 'https://docs.n8n.io/integrations/builtin/credentials/philipshue'
layout:
  description:
    visible: false
---

# Philips Hue 凭证

{% hint style="info" %}
**大白话**：Philips Hue 是智能灯泡品牌，可以通过 API 控制灯光开关、颜色、亮度。n8n 连它用的是 **OAuth2**（网页授权登录）。如果用 n8n 自带的 OAuth 连接，基本什么都不用填；要自己配的话，需要去 Philips Hue 开发者后台注册一个「Remote API 应用」，把 **AppId、ClientId、ClientSecret** 填进 n8n。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Philips Hue](../app-nodes/n8n-nodes-base.philipshue.md)

## 准备工作

注册一个 [Philips Hue](https://www.philips-hue.com/en-us) 账号。

## 支持的验证方式

- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Philips Hue CLIP API 文档](https://developers.meethue.com/develop/hue-api-v2/api-reference/)。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你用的是内置的 OAuth 连接，不需要填写 **APP ID**。

如果你需要从零配置 OAuth2，你需要一个 [Philips Hue 开发者](https://developers.meethue.com/) 账号。

在 [Add new Hue Remote API app（新建 Hue Remote API 应用）](https://developers.meethue.com/add-new-hue-remote-api-app/) 页面新建一个 remote app（远程应用）。

给你的应用使用这些设置：

- 把 n8n 里的 **OAuth Callback URL（OAuth 回调地址）** 复制到 Hue 的 **Callback URL（回调地址）** 里。
- 把 **AppId**、**ClientId** 和 **ClientSecret** 复制到 n8n 里对应的字段。
