---
title: Onfleet 凭证
description: >-
  Onfleet 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Onfleet 的身份。
contentType:
  - integration
  - reference
nodeTitle: Onfleet credentials
originalFilePath: integrations/builtin/credentials/onfleet.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/onfleet'
url: 'https://docs.n8n.io/integrations/builtin/credentials/onfleet'
layout:
  description:
    visible: false
---

# Onfleet 凭证

{% hint style="info" %}
**大白话**：Onfleet 是给「同城配送 / 快递调度」用的平台（管理司机、派单、跟踪配送进度）。n8n 连它用一把 **API Key（API 密钥）**，需要用组织管理员账号登录，在后台「API & Webhooks」里新建一把钥匙，复制进 n8n 即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Onfleet](../app-nodes/n8n-nodes-base.onfleet.md)
- [Onfleet Trigger（触发器）](../trigger-nodes/n8n-nodes-base.onfleettrigger.md)

## 准备工作

注册一个 [Onfleet](https://onfleet.com/) 管理员账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Onfleet 官方 API 文档](https://docs.onfleet.com/reference/introduction)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API key（API 密钥）**：用你所在组织的管理员账号登录，依次选择 **Settings（设置）> API & Webhooks（API 与 Webhooks）**，然后点击 **+** 新建一个 key。更多说明请参考 Onfleet 的 [创建 API key 文档](https://support.onfleet.com/hc/en-us/articles/360045763292-API)。

