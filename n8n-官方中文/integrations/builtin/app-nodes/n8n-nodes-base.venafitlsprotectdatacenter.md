---
title: Venafi TLS Protect Datacenter 节点文档
description: >-
  学习如何在 n8n 中使用 Venafi TLS Protect Datacenter 节点。按照技术
  文档将 Venafi TLS Protect Datacenter 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Venafi TLS Protect Datacenter 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectdatacenter.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectdatacenter
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectdatacenter
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Venafi TLS Protect Datacenter 是 Venafi 的「本地部署版」证书管理平台（装在自己公司机房/服务器上），功能与 Cloud 版类似——集中管理 TLS/SSL 证书。这个节点可以帮你：创建、删除、下载、查询、续期证书（Certificate），以及获取证书策略（Policy）。适合公司内部证书的自动化管理。
{% endhint %}

# Venafi TLS Protect Datacenter 节点

使用 Venafi TLS Protect Datacenter 节点来自动化你在 Venafi TLS Protect Datacenter 中的工作，并把它与其它应用集成。n8n 内置支持 Venafi TLS Protect Datacenter 的大量功能，包括创建、删除和获取证书。

在本页你可以看到 Venafi TLS Protect Datacenter 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Venafi TLS Protect Datacenter 凭证](../credentials/venafitlsprotectdatacenter.md)。
{% endhint %}

## 操作

* Certificate（证书）
	* Create（创建）
	* Delete（删除）
	* Download（下载）
	* Get（获取）
	* Get Many（获取多个）
	* Renew（续期）
* Policy（策略）
	* Get（获取）

## 模板与示例

[浏览 Venafi TLS Protect Datacenter 节点的官方集成模板](https://n8n.io/integrations/venafi-tls-protect-datacenter)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

n8n 还提供：

* 一个用于 Venafi TLS Protect Cloud 的[节点](n8n-nodes-base.venafitlsprotectcloud.md)和[触发器节点](../trigger-nodes/n8n-nodes-base.venafitlsprotectcloudtrigger.md)。

（官方此处嵌入了通用资源组件，此处从略。）
