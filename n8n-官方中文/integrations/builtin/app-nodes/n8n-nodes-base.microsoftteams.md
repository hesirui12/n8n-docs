---
title: Microsoft Teams 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft Teams 节点。按照技术文档将 Microsoft
  Teams 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Microsoft Teams 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.microsoftteams.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftteams
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftteams
layout:
  description:
    visible: false
---

# Microsoft Teams 节点

> 💡 **大白话**：Teams 是微软的「企业聊天+开会」工具。用这个节点，你可以让 n8n 自动创建/删除频道（channel）、发消息（包括发完消息等用户回复）、管理任务，比如「收到新订单就自动在 Teams 群里发消息提醒」。

使用 Microsoft Teams 节点来自动化你在 Microsoft Teams 中的工作，并把它与其它应用集成。n8n 内置支持 Microsoft Teams 的大量功能，包括创建和删除频道、消息和任务。

在本页你可以看到 Microsoft Teams 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Microsoft 凭证](../credentials/microsoft.md)。从版本 2 开始，该节点还支持 [Microsoft Entra Service Principal 凭证](../credentials/microsoftentraserviceprincipal.md)，用于「无登录用户」的纯应用访问：在 **Authentication（认证方式）** 下拉框中选择 **Service Principal (App-Only)（服务主体-仅应用）** 即可。
{% endhint %}

{% hint style="info" %}
**政府云支持（Government Cloud Support）**

如果你使用的是政府云租户（US Government、US Government DOD 或 China），请务必在 Microsoft 凭证配置中选择正确的 **Microsoft Graph API Base URL（Microsoft Graph API 基础 URL）**。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/sYWM3IB0LEL4RkPx8ndF/" %}

## 操作（Operations）

* Channel（频道）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get Many（获取多个）
    * Update（更新）
* Channel Message（频道消息）
    * Create（创建）
    * Get Many（获取多个）
* Chat Message（聊天消息）
	* Create（创建）
	* Get（获取）
	* Get Many（获取多个）
	* Send and Wait for Response（发送并等待回复）
* Task（任务）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get Many（获取多个）
    * Update（更新）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/c0Jp2CWNEFSR2IfIVdlL/" %}

## 模板与示例（Templates and examples）

[浏览 Microsoft Teams 节点文档集成模板](https://n8n.io/integrations/microsoft-teams)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Microsoft Teams 的 API 文档](https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
