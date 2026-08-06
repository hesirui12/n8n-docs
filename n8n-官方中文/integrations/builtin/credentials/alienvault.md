---
title: AlienVault 凭证
description: >-
  AlienVault 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  AlienVault 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: AlienVault credentials
originalFilePath: integrations/builtin/credentials/alienvault.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/alienvault'
url: 'https://docs.n8n.io/integrations/builtin/credentials/alienvault'
layout:
  description:
    visible: false
---

# AlienVault 凭证

{% hint style="info" %}
**大白话**：AlienVault（也叫 OTX，Open Threat Exchange）是一个「威胁情报共享」平台，安全圈常用它查病毒、恶意 IP、攻击特征等。n8n 连它只需要一把 **OTX Key**，注册账号后去 **Settings（设置）** 里就能看到。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

注册一个 [AlienVault](https://otx.alienvault.com) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [AlienVault 官方文档](https://otx.alienvault.com/api)。

这是一个「仅凭证」节点（credential-only node），没有自带的可视化操作界面。更多信息请参考[为已有节点添加自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。你也可以在 n8n 官网上查看 [AlienVault 示例工作流和相关内容](https://n8n.io/integrations/alienvault/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **OTX Key**：注册好 AlienVault 账号后，**OTX Key** 会显示在你的 **Settings（设置）** 里。
