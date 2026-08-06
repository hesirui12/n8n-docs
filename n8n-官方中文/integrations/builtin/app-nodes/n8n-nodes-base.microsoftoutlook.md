---
title: Microsoft Outlook 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft Outlook 节点。按照
  技术文档将 Microsoft Outlook 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Microsoft Outlook 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.microsoftoutlook.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftoutlook
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftoutlook
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Outlook 就是微软的邮箱 + 日历 + 联系人客户端。这个节点是目前最强大的 Microsoft 节点之一，能操作一大片东西：邮件（Message）、草稿（Draft）、文件夹（Folder）、日历（Calendar）、日程（Event）、联系人（Contact）、邮件附件（Attachment），甚至还能「发送邮件并等待回复」。典型场景：收到特定邮件 → 自动归档、回复或转发；表单提交 → 自动发邮件。
{% endhint %}

# Microsoft Outlook 节点

使用 Microsoft Outlook 节点来自动化你在 Microsoft Outlook 中的工作，并把它与其它应用集成。n8n 内置支持 Microsoft Outlook 的大量功能，包括创建、更新、删除和获取文件夹、邮件和草稿。

在本页你可以看到 Microsoft Outlook 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

此节点的 **Authentication**（认证方式）下拉框提供三个选项：

- **Outlook OAuth2**：专用于 Microsoft Outlook 的 OAuth2 凭证（默认）。
- **Microsoft OAuth2 (Graph)**：通用的 Microsoft Graph 凭证，可以在其它 Microsoft 节点之间复用。选择此选项时，请确保给凭证授予此节点所需的范围（例如 `Mail.ReadWrite`、`Mail.Send`、`Calendars.ReadWrite` 和 `Contacts.ReadWrite`）。
- **Microsoft Entra Service Principal (App-Only)**：通过 Microsoft Entra 应用注册实现仅应用访问（没有登录用户），从节点第 2 版开始可用。设置方法和所需的应用权限请参考 [Microsoft Entra Service Principal 凭证](../credentials/microsoftentraserviceprincipal.md)。

关于如何设置认证，请参考 [Microsoft 凭证](../credentials/microsoft.md)。
{% endhint %}

{% hint style="info" %}
**政府云支持**

如果你使用的是政府云租户（US Government 美国政府云、US Government DOD 美国国防部云或 China 中国云），请务必在 Microsoft 凭证配置中，选择对应的 **Microsoft Graph API Base URL**（Microsoft Graph API 基础 URL）。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* Calendar（日历）
	* Create（创建）
	* Delete（删除）
	* Get（获取）
	* Get Many（获取多个）
	* Update（更新）
* Contact（联系人）
	* Create（创建）
	* Delete（删除）
	* Get（获取）
	* Get Many（获取多个）
	* Update（更新）
* Draft（草稿）
	* Create（创建）
	* Delete（删除）
	* Get（获取）
	* Send（发送）
	* Update（更新）
* Event（日程/事件）
	* Create（创建）
	* Delete（删除）
	* Get（获取）
	* Get Many（获取多个）
	* Update（更新）
* Folder（文件夹）
	* Create（创建）
	* Delete（删除）
	* Get（获取）
	* Get Many（获取多个）
	* Update（更新）
* Folder Message（文件夹邮件）
    * Get Many（获取多个）
* Message（邮件）
	* Delete（删除）
	* Get（获取）
	* Get Many（获取多个）
	* Move（移动）
	* Reply（回复）
	* Send（发送）
	* Send and Wait for Response（发送并等待回复）
	* Update（更新）
* Message Attachment（邮件附件）
	* Add（添加）
	* Download（下载）
	* Get（获取）
	* Get Many（获取多个）

（官方此处嵌入了通用资源组件，此处从略。）

## 模板与示例

[浏览 Microsoft Outlook 节点的官方集成模板](https://n8n.io/integrations/microsoft-outlook)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Outlook API 官方文档](https://learn.microsoft.com/en-us/outlook/rest/get-started)。

（官方此处嵌入了通用资源组件，此处从略。）
