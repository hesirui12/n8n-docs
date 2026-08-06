---
title: Microsoft Outlook Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft Outlook Trigger 节点。按照本文档将
  Microsoft Outlook Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Microsoft Outlook Trigger 节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftoutlooktrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftoutlooktrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftoutlooktrigger
layout:
  description:
    visible: false
---

# Microsoft Outlook Trigger 节点

> **大白话**：Microsoft Outlook 是微软的邮件+日历软件。这个触发器节点监听 Outlook 里的新邮件，一来信就启动你的工作流——非常适合做「收到邮件自动转发、自动归档、自动回复、丢给 AI 处理」这类自动化。认证方式有三种可选，按需挑选即可。

使用 Microsoft Outlook Trigger 节点来响应 [Microsoft Outlook](https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook) 中的事件，并将 Microsoft Outlook 与其他应用程序集成。

本页面列出了 Microsoft Outlook Trigger 节点可以响应的事件，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

此节点的 **Authentication（认证方式）** 下拉框提供三个选项：

- **Outlook OAuth2**：Microsoft Outlook 专用的 OAuth2 凭证（默认）。
- **Microsoft OAuth2 (Graph)**：通用的 Microsoft Graph 凭证，可以在其他 Microsoft 节点之间复用。选择此选项时，请确保为凭证授予此节点所需的 scopes（权限范围，例如 `Mail.ReadWrite`）。
- **Microsoft Entra Service Principal (App-Only)**：通过 Microsoft Entra 应用注册实现的应用专用（app-only）访问，无需登录用户。设置方法和所需的应用权限请参考 [Microsoft Entra Service Principal 凭证](../credentials/microsoftentraserviceprincipal.md)。

你可以[在这里](../credentials/microsoft.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**政府云支持（Government Cloud Support）**

如果你使用的是政府云租户（US Government、US Government DOD 或 China），请务必在 Microsoft 凭证配置中选择对应的 **Microsoft Graph API Base URL（Microsoft Graph API 基础 URL）**。
{% endhint %}

{% hint style="info" %}
**示例与模板**

想找使用示例和入门模板，可以查看 n8n 的 [Microsoft Outlook 集成](https://n8n.io/integrations/microsoft-outlook-trigger/) 页面。
{% endhint %}

## 事件（Events）

* Message Received（收到新邮件时）

## 相关资源

n8n 为 Microsoft Outlook 提供了一个应用节点（app node）。你可以[在这里](../app-nodes/n8n-nodes-base.microsoftoutlook.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/microsoft-outlook-trigger/)。
