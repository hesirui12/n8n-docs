---
title: ActiveCampaign 凭证
description: >-
  ActiveCampaign 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  ActiveCampaign 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: ActiveCampaign credentials
originalFilePath: integrations/builtin/credentials/activecampaign.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/activecampaign'
url: 'https://docs.n8n.io/integrations/builtin/credentials/activecampaign'
layout:
  description:
    visible: false
---

# ActiveCampaign 凭证

{% hint style="info" %}
**大白话**：ActiveCampaign 是国外常用的「邮件营销 + 客户管理（CRM）」工具。n8n 要用它，需要两样东西：**API URL（API 地址）** 和 **API Key（API 密钥）**，这两样都可以在 ActiveCampaign 后台的 Developer（开发者）页面里直接复制，很简单。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [ActiveCampaign](../app-nodes/n8n-nodes-base.activecampaign.md)
- [Active Campaign Trigger（触发器）](../trigger-nodes/n8n-nodes-base.activecampaigntrigger.md)

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [ActiveCampaign 官方 API 文档](https://help.activecampaign.com/hc/en-us/sections/360005740979-ActiveCampaign-API-Resources)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [ActiveCampaign](https://www.activecampaign.com/) 账号，以及：

- **API URL（API 地址）**
- **API Key（API 密钥）**

获取这两样并配置凭证的步骤：

1. 在 ActiveCampaign 左侧菜单里，选择 **Settings（设置）**（齿轮图标）。
2. 选择 **Developer（开发者）**。
3. 复制 **API URL**，填进 n8n 的凭证里。
4. 复制 **API Key**，填进 n8n 的凭证里。

更多信息（包括如何重置 API key），请参考 [如何获取你的 ActiveCampaign API URL 和 Key](https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API#h_01HJ6REM2YQW19KYPB189726ST)。
