---
title: AWS Certificate Manager 节点文档
description: >-
  学习如何在 n8n 中使用 AWS Certificate Manager 节点。按照技术文档将 AWS
  Certificate Manager 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS Certificate Manager 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.awscertificatemanager.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awscertificatemanager
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awscertificatemanager
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：AWS Certificate Manager（ACM）是 AWS 用来管理 SSL/TLS 证书（网站 HTTPS 加密证书）的服务。这个节点让你在 n8n 里查看、删除、续期证书。典型场景：定期检查证书快要到期了，自动发起续期，避免网站 HTTPS 过期出问题。
{% endhint %}

# AWS Certificate Manager 节点

使用 AWS Certificate Manager 节点来自动化你在 AWS Certificate Manager 中的工作，并把它与其它应用集成。n8n 内置支持 AWS Certificate Manager 的大量功能，包括创建、删除、获取和续期 SSL 证书。

在本页你可以看到 AWS Certificate Manager 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [AWS Certificate Manager 凭证](../credentials/aws.md)。
{% endhint %}

## 操作

* Certificate（证书）
	* Delete（删除）
	* Get（获取）
	* Get Many（获取多个）
	* Get Metadata（获取元数据）
	* Renew（续期）

## 模板与示例

[浏览 AWS Certificate Manager 节点的官方集成模板](https://n8n.io/integrations/aws-certificate-manager)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [AWS Certificate Manager 官方文档](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html)。

（官方此处嵌入了通用资源组件，此处从略。）
