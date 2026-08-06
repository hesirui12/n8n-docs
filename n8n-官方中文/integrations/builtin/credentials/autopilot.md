---
title: Autopilot 凭证
description: >-
  Autopilot 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Autopilot 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Autopilot credentials
originalFilePath: integrations/builtin/credentials/autopilot.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/autopilot'
url: 'https://docs.n8n.io/integrations/builtin/credentials/autopilot'
layout:
  description:
    visible: false
---

# Autopilot 凭证

{% hint style="info" %}
**大白话**：Autopilot 是一个「客户旅程自动化」工具（给客户自动发邮件、走营销流程）。n8n 连它只需要一把 **API Key**，在 **Settings > Autopilot API** 里生成即可。注意：Autopilot 现在已经改名 Ortto，但 n8n 这套凭证/节点只兼容老版 Autopilot，不兼容新 Ortto 的 API。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Autopilot](../app-nodes/n8n-nodes-base.autopilot.md)
- [Autopilot Trigger（触发器）](../trigger-nodes/n8n-nodes-base.autopilottrigger.md)

{% hint style="warning" %}
**Autopilot 品牌变更提醒**

Autopilot 已经更名为 Ortto。Autopilot 凭证和节点只兼容 Autopilot，不兼容新的 Ortto API。
{% endhint %}

## 准备工作

注册一个 [Autopilot](https://app.autopilothq.com) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Autopilot 官方 API 文档](https://autopilot.docs.apiary.io/#)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：在 **Settings（设置）> Autopilot API** 里生成。更多信息请参考 [Autopilot API 身份验证](https://autopilot.docs.apiary.io/#reference/authentication)。
