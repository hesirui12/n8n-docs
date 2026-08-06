---
title: QRadar 凭证
description: >-
  QRadar 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  QRadar 的身份。
contentType:
  - integration
  - reference
nodeTitle: QRadar credentials
originalFilePath: integrations/builtin/credentials/qradar.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/qradar'
url: 'https://docs.n8n.io/integrations/builtin/credentials/qradar'
layout:
  description:
    visible: false
---

# QRadar 凭证

{% hint style="info" %}
**大白话**：QRadar 是 IBM 的「安全信息和事件管理（SIEM）」平台，安全团队用它集中分析日志、发现攻击。n8n 连它只需要一把 **API Key（API 密钥）**，官方叫「authorized service token（授权服务令牌）」——在 QRadar 后台的 **Admin（管理）** 标签页里，用 **Manage Authorized Services（管理授权服务）** 窗口创建一个认证令牌即可。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

注册一个 [QRadar](https://www.ibm.com/qradar) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [QRadar 官方文档](https://ibmsecuritydocs.github.io/qradar_api_overview/)。

这是一个「仅凭证」节点（credential-only node），没有自带的可视化操作界面。更多信息请参考[为已有节点添加自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。你也可以在 n8n 官网上查看 [QRadar 示例工作流和相关内容](https://n8n.io/integrations/qradar/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API Key（API 密钥）**：也叫授权服务令牌（authorized service token）。在 **Admin（管理）** 标签页的 **Manage Authorized Services（管理授权服务）** 窗口里创建一个认证令牌。更多说明请参考[创建认证令牌](https://www.ibm.com/docs/en/qradar-common?topic=forwarding-creating-authentication-token)文档。
