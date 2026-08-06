---
title: Invoice Ninja 凭证
description: >-
  Invoice Ninja 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Invoice Ninja 的身份。
contentType:
  - integration
  - reference
nodeTitle: Invoice Ninja credentials
originalFilePath: integrations/builtin/credentials/invoiceninja.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/invoiceninja'
url: 'https://docs.n8n.io/integrations/builtin/credentials/invoiceninja'
layout:
  description:
    visible: false
---

# Invoice Ninja 凭证

{% hint style="info" %}
**大白话**：Invoice Ninja 是一款开源的发票/账单管理软件（也可以托管使用）。n8n 连它需要三样东西：**URL**（你的 Invoice Ninja 安装地址，托管版用官方默认地址）、**API Token**（在后台 Settings > Account Management > API Tokens 里生成）、以及 v5 用户可选的 **Secret（密钥）**。注意：只有 **Pro 和 Enterprise 付费套餐**才支持 API 集成，免费版不行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Invoice Ninja](../app-nodes/n8n-nodes-base.invoiceninja.md)
- [Invoice Ninja Trigger（Invoice Ninja 触发器）](../trigger-nodes/n8n-nodes-base.invoiceninjatrigger.md)

## 前提条件

创建一个 [Invoice Ninja](https://www.invoiceninja.com/) 账号。只有 **Pro（专业版）** 和 **Enterprise（企业版）** 套餐支持 API 集成。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于这些 API 的更多信息，请参考 Invoice Ninja 的 [v4 API 文档](https://invoice-ninja.readthedocs.io/en/latest/api.html) 和 [v5 API 文档](https://api-docs.invoicing.co/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **URL**：如果你的 Invoice Ninja 由官方托管，使用下面提到的默认地址之一。如果你是自托管，填你自己 Invoice Ninja 实例的地址。
- 一个 **API Token（API 令牌）**：在 **Settings（设置）> Account Management（账号管理）> API Tokens（API 令牌）** 里生成。
- 一个可选的 **Secret（密钥）**，仅 v5 API 用户可用。
