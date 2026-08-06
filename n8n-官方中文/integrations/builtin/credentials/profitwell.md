---
title: ProfitWell 凭证
description: >-
  ProfitWell 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  ProfitWell 的身份。
contentType:
  - integration
  - reference
nodeTitle: ProfitWell credentials
originalFilePath: integrations/builtin/credentials/profitwell.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/profitwell'
url: 'https://docs.n8n.io/integrations/builtin/credentials/profitwell'
layout:
  description:
    visible: false
---

# ProfitWell 凭证

{% hint style="info" %}
**大白话**：ProfitWell 是给 SaaS 订阅制公司用的「营收分析」工具（算 MRR、流失率、订阅指标等）。n8n 连它只需要一把 **API Token（API 令牌）**，去 ProfitWell 后台的「Account Settings > Integrations」里找到 ProfitWell API 即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [ProfitWell](../app-nodes/n8n-nodes-base.profitwell.md)

## 准备工作

注册一个 [ProfitWell](https://www2.profitwell.com/signup/start) 账号。

## 支持的验证方式

- API token（API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [ProfitWell 官方 API 文档](https://profitwellapiv2.docs.apiary.io/)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要：

- 一个 **API Token（API 令牌）**：要获取 API key 或 token，进入 **Account Settings（账号设置）> Integrations（集成）**，选择 **ProfitWell API**。
