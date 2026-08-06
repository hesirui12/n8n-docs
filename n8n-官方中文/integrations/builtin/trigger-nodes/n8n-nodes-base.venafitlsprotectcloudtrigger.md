---
title: Venafi TLS Protect Cloud 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Venafi TLS Protect Cloud 触发器节点。按照本文档将
  Venafi TLS Protect Cloud 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Venafi TLS Protect Cloud 触发器节点文档
originalFilePath: >-
  integrations/builtin/trigger-nodes/n8n-nodes-base.venafitlsprotectcloudtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.venafitlsprotectcloudtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.venafitlsprotectcloudtrigger
layout:
  description:
    visible: false
---

# Venafi TLS Protect Cloud 触发器节点

> **大白话**：Venafi 是一家做「机器身份管理」的网络安全公司，帮你管理和保护各种机器设备的数字身份。这个触发器节点的作用是：当云端版 Venafi TLS Protect 服务里发生事件时，就自动启动你的 n8n 工作流，比如证书过期、签发等变化都能第一时间通知你并触发后续处理。

[Venafi](https://www.venafi.com/) 是一家网络安全公司，提供机器身份管理服务。他们提供各种解决方案来管理和保护多种机器类型的身份，提供全局可见性、生命周期自动化和可操作的情报。

使用 n8n Venafi TLS Protect Cloud 触发器节点，可以在基于云的 [Venafi TLS Protect](https://vaas.venafi.com/) 服务中发生事件时启动 n8n 工作流。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/venafitlsprotectcloud.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Venafi TLS Protect Cloud Trigger integrations](https://n8n.io/integrations/venafi-tls-protect-cloud-trigger/) 页面。
{% endhint %}
