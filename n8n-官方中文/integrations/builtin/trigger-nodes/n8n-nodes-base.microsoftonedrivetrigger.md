---
title: Microsoft OneDrive Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft OneDrive Trigger 节点。按照本文档将
  Microsoft OneDrive Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Microsoft OneDrive Trigger 节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftonedrivetrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftonedrivetrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.microsoftonedrivetrigger
layout:
  description:
    visible: false
---

# Microsoft OneDrive Trigger 节点

> **大白话**：Microsoft OneDrive 是微软的网盘。这个触发器节点监听 OneDrive 里的文件/文件夹变化——比如新文件上传、文件被修改、新建了文件夹——一有动静就启动你的工作流，非常适合做「文件一进来就自动处理」。n8n 内置支持 OneDrive 的文件和文件夹事件。

使用 Microsoft OneDrive Trigger 节点来响应 [Microsoft OneDrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage) 中的事件，并将 Microsoft OneDrive 与其他应用程序集成。n8n 内置支持 OneDrive 中的文件和文件夹事件。

本页面列出了 Microsoft OneDrive Trigger 节点可以响应的事件，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

你可以[在这里](../credentials/microsoft.md)找到此节点的认证信息。该节点还支持 [Microsoft Entra Service Principal 凭证](../credentials/microsoftentraserviceprincipal.md)，用于无需登录用户的应用专用（app-only）访问：在 **Authentication（认证方式）** 下拉框中选择 **Microsoft Entra Service Principal (App-Only)** 即可。
{% endhint %}

{% hint style="info" %}
**政府云支持（Government Cloud Support）**

如果你使用的是政府云租户（US Government、US Government DOD 或 China），请务必在 Microsoft 凭证配置中选择对应的 **Microsoft Graph API Base URL（Microsoft Graph API 基础 URL）**。
{% endhint %}

{% hint style="info" %}
**示例与模板**

想找使用示例和入门模板，可以查看 n8n 的 [Microsoft OneDrive 集成](https://n8n.io/integrations/microsoft-onedrive-trigger/) 页面。
{% endhint %}

## 事件（Events）

* On File Created（文件创建时）
* On File Updated（文件更新时）
* On Folder Created（文件夹创建时）
* On Folder Updates（文件夹更新时）

## 相关资源

n8n 为 Microsoft OneDrive 提供了一个应用节点（app node）。你可以[在这里](../app-nodes/n8n-nodes-base.microsoftonedrive.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/microsoft-onedrive-trigger/)。

关于该服务的更多信息，请参考 [Microsoft 的 OneDrive API 文档](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/)。
