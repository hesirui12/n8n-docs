---
title: Venafi TLS Protect Cloud 节点文档
description: >-
  学习如何在 n8n 中使用 Venafi TLS Protect Cloud 节点。按照技术
  文档将 Venafi TLS Protect Cloud 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Venafi TLS Protect Cloud 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectcloud.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectcloud
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.venafitlsprotectcloud
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Venafi TLS Protect Cloud 是一个「证书安全管理云服务」——集中管理你公司所有的 TLS/SSL 数字证书，防止证书过期、防止证书被滥用。这个节点可以帮你：创建证书申请（Certificate Request）、删除/下载/查询/续期证书（Certificate）。适合做证书生命周期自动化管理。
{% endhint %}

# Venafi TLS Protect Cloud 节点

使用 Venafi TLS Protect Cloud 节点来自动化你在 Venafi TLS Protect Cloud 中的工作，并把它与其它应用集成。n8n 内置支持 Venafi TLS Protect Cloud 的大量功能，包括删除和下载证书，以及创建证书请求。

在本页你可以看到 Venafi TLS Protect Cloud 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Venafi TLS Protect Cloud 凭证](../credentials/venafitlsprotectcloud.md)。
{% endhint %}

## 操作

* Certificate（证书）
	* Delete（删除）
	* Download（下载）
	* Get（获取）
	* Get Many（获取多个）
	* Renew（续期）
* Certificate Request（证书申请）
	* Create（创建）
	* Get（获取）
	* Get Many（获取多个）

## 模板与示例

[浏览 Venafi TLS Protect Cloud 节点的官方集成模板](https://n8n.io/integrations/venafi-tls-protect-cloud)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Venafi 的 REST API 文档](https://docs.venafi.cloud/api/vaas-rest-api/)。

n8n 还提供：

* 一个用于 Venafi TLS Protect Cloud 的[触发器节点](../trigger-nodes/n8n-nodes-base.venafitlsprotectcloudtrigger.md)。
* 一个用于 Venafi TLS Protect Datacenter 的[节点](n8n-nodes-base.venafitlsprotectdatacenter.md)。

（官方此处嵌入了通用资源组件，此处从略。）
