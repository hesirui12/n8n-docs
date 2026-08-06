---
title: Microsoft Graph Security 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft Graph Security 节点。按照
  技术文档将 Microsoft Graph Security 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Microsoft Graph Security 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.microsoftgraphsecurity.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftgraphsecurity
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftgraphsecurity
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Microsoft Graph Security 是微软的安全评分服务——它评估你整个 Microsoft 365 环境的安全状况，给出一个「安全分数」（Secure Score），并针对每个安全建议提供「控制项档案」（Control Profile）。这个节点让你在 n8n 里读取和更新这些分数与档案，方便做安全监控自动化，比如分数下降就自动报警。
{% endhint %}

# Microsoft Graph Security 节点

使用 Microsoft Graph Security 节点来自动化你在 Microsoft Graph Security 中的工作，并把它与其它应用集成。n8n 内置支持 Microsoft Graph Security 的大量功能，包括获取和更新安全分数（score）与档案（profile）。

在本页你可以看到 Microsoft Graph Security 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Microsoft 凭证](../credentials/microsoft.md)。
{% endhint %}

{% hint style="info" %}
**政府云支持**

如果你使用的是政府云租户（US Government 美国政府云、US Government DOD 美国国防部云或 China 中国云），请务必在 Microsoft 凭证配置中，选择对应的 **Microsoft Graph API Base URL**（Microsoft Graph API 基础 URL）。
{% endhint %}

## 操作

* Secure Score（安全分数）
    * Get（获取）
    * Get All（获取全部）
* Secure Score Control Profile（安全分数控制项档案）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）

## 模板与示例

[浏览 Microsoft Graph Security 节点的官方集成模板](https://n8n.io/integrations/microsoft-graph-security)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
