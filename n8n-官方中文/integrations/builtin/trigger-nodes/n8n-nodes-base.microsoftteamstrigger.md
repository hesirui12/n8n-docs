---
title: Microsoft Teams Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft Teams Trigger 节点。按照本文档将
  Microsoft Teams Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Microsoft Teams Trigger 节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftteamstrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftteamstrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftteamstrigger
layout:
  description:
    visible: false
---

# Microsoft Teams Trigger 节点

> **大白话**：Microsoft Teams 是微软的团队协作/群聊软件。这个触发器节点监听 Teams 里的动态——比如有人建了新频道、在频道或私聊里发了新消息、团队来了新成员——一有动静就启动你的工作流，方便你自动回复、通知、记录消息等。

使用 Microsoft Teams Trigger 节点来响应 [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software) 中的事件，并将 Microsoft Teams 与其他应用程序集成。

本页面列出了 Microsoft Teams Trigger 节点可以响应的事件，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

你可以[在这里](../credentials/microsoft.md)找到此节点的认证信息。该节点还支持 [Microsoft Entra Service Principal 凭证](../credentials/microsoftentraserviceprincipal.md)，用于无需登录用户的应用专用（app-only）访问：在 **Authentication（认证方式）** 下拉框中选择 **Service Principal (App-Only)** 即可。
{% endhint %}

{% hint style="info" %}
**政府云支持（Government Cloud Support）**

如果你使用的是政府云租户（US Government、US Government DOD 或 China），请务必在 Microsoft 凭证配置中选择对应的 **Microsoft Graph API Base URL（Microsoft Graph API 基础 URL）**。
{% endhint %}

## 事件（Events）

* **New Channel**（新频道）
* **New Channel Message**（频道新消息）
* **New Chat**（新聊天/会话）
* **New Chat Message**（私聊新消息）
* **New Team Member**（新团队成员）

## 相关资源

n8n 为 Microsoft Teams 提供了一个应用节点（app node）。你可以[在这里](../app-nodes/n8n-nodes-base.microsoftteams.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/microsoft-teams-trigger/)。

关于其 API 的详细信息，请参考 [Microsoft Teams 文档](https://learn.microsoft.com/en-us/graph/api/resources/teams-api-overview?view=graph-rest-1.0)。
