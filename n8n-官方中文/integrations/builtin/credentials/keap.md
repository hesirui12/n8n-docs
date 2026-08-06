---
title: Keap 凭证
description: >-
  Keap 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Keap 的身份。
contentType:
  - integration
  - reference
nodeTitle: Keap credentials
originalFilePath: integrations/builtin/credentials/keap.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/keap'
url: 'https://docs.n8n.io/integrations/builtin/credentials/keap'
layout:
  description:
    visible: false
---

# Keap 凭证

{% hint style="info" %}
**大白话**：Keap（原 Infusionsoft）是给小型企业用的「客户管理 + 营销自动化」软件（管客户、发邮件、跟销售线索）。n8n 连它走 **OAuth2 网页授权**：在 n8n 里点「连接账号」，会跳转到 Keap 授权页面，同意授权就完事了，不用手动复制粘贴一堆密钥。前提是你得先注册一个 Keap 开发者账号。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Keap](../app-nodes/n8n-nodes-base.keap.md)
- [Keap Trigger（触发器）](../trigger-nodes/n8n-nodes-base.keaptrigger.md)

## 准备工作

创建一个 [Keap](https://developer.keap.com/) 开发者账号。

## 支持的验证方式

- OAuth2（网页授权）

## 相关资源

关于该服务的更多信息，请参考 Keap 的 [REST API 文档](https://developer.keap.com/docs/restv2/)。

## 使用 OAuth2（网页授权）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从头配置 OAuth2，或者想深入了解 OAuth 网页授权流程中每一步在做什么，请参考 [Keap 的 OAuth2 入门文档](https://developer.keap.com/getting-started-oauth-keys/)。
