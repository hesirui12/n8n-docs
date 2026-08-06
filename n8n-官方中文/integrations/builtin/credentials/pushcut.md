---
title: Pushcut 凭证
description: >-
  Pushcut 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Pushcut 的身份。
contentType:
  - integration
  - reference
nodeTitle: Pushcut credentials
originalFilePath: integrations/builtin/credentials/pushcut.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/pushcut'
url: 'https://docs.n8n.io/integrations/builtin/credentials/pushcut'
layout:
  description:
    visible: false
---

# Pushcut 凭证

{% hint style="info" %}
**大白话**：Pushcut 是一款 iPhone 上的「自动化通知」App，可以按条件触发手机通知、捷径或 HomeKit 场景。n8n 连它只需要一把 **API Key（API 密钥）**，在 App 的 **Account（账号）> Integrations（集成）> Add API Key（添加 API 密钥）** 里生成即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Pushcut](../app-nodes/n8n-nodes-base.pushcut.md)
- [Pushcut Trigger（触发器）](../trigger-nodes/n8n-nodes-base.pushcuttrigger.md)

## 准备工作

下载 [Pushcut](https://www.pushcut.io) App。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Pushcut 的指南文档](https://www.pushcut.io/guides)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API Key（API 密钥）**：要生成 API 密钥，请前往 **Account（账号）> Integrations（集成）> Add API Key（添加 API 密钥）**。更多说明请参考[创建 API 密钥](https://www.pushcut.io/guides/homekit-api-schedule-cancel#step_2)。
