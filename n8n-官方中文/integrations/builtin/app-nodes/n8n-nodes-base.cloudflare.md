---
title: Cloudflare 节点文档
description: >-
  学习如何在 n8n 中使用 Cloudflare 节点。按照技术文档将 Cloudflare
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Cloudflare 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.cloudflare.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cloudflare'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.cloudflare'
layout:
  description:
    visible: false
---

# Cloudflare 节点

> **大白话**：Cloudflare 是很有名的 CDN / 网络安全服务商，网站流量先经过它再到达你的服务器。这个节点目前专门用来管理"区域证书（Zone Certificate）"——也就是给 Cloudflare 托管的域名配置 SSL 证书，可以上传、删除、查看证书。举例：证书快过期时，工作流自动帮你上传新证书，避免网站打不开。

使用 Cloudflare 节点可以自动化处理 Cloudflare 里的工作，并让 Cloudflare 与其他应用程序互通。n8n 内置支持 Cloudflare 的众多功能，包括删除、获取和上传区域证书（Zone Certificate）等。

本页列出了 Cloudflare 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Cloudflare 凭证](../credentials/cloudflare.md)。
{% endhint %}

## 支持的操作

* Zone Certificate（区域证书）
	* Delete（删除）
	* Get（获取）
	* Get Many（获取多个）
	* Upload（上传）

## 模板与示例


[浏览 Cloudflare 节点集成模板](https://n8n.io/integrations/cloudflare) 或 [搜索全部模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [Cloudflare 的 API 文档（区域级认证）](https://api.cloudflare.com/#zone-level-authenticated-origin-pulls-properties)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

