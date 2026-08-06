---
title: Sysdig 凭证
description: >-
  Sysdig 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Sysdig 的身份。
contentType:
  - integration
  - reference
nodeTitle: Sysdig credentials
originalFilePath: integrations/builtin/credentials/sysdig.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/sysdig'
url: 'https://docs.n8n.io/integrations/builtin/credentials/sysdig'
layout:
  description:
    visible: false
---

# Sysdig 管理凭证

{% hint style="info" %}
**大白话**：Sysdig 是云安全与容器监控平台（监控服务器和云环境的安全）。n8n 连它只需要一个 **Access Key（访问密钥）**，去 Sysdig 应用里找到它填进来就行。这个凭证是**仅凭证节点**——也就是说它不是直接操作某个功能的节点，而是配合「自定义 API 操作」功能，让你自己调用 Sysdig 的 API。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 先决条件

注册一个 [Sysdig](https://sysdig.com) 账号，或配置一个本地实例。

## 支持的验证方式

- Access Key（访问密钥）

## 相关资源

关于该服务的更多信息，请参考 [Sysdig 官方文档](https://docs.sysdig.com/en/docs/developer-tools/sysdig-api/)。

这是一个仅凭证节点。更多内容请参考[为现有节点自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。

## 使用 API access key（API 访问密钥）

要配置这个凭证，你需要：

- 一个 **Access Key（访问密钥）**

关于如何从应用里获取 Access Key 的说明，请参考 [Sysdig Agent Access Keys 文档](https://docs.sysdig.com/en/docs/administration/agent_access_key/)。
