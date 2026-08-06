---
title: Hunter 节点文档
description: >-
  学习如何在 n8n 中使用 Hunter 节点。按照技术文档将
  Hunter 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Hunter 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.hunter.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.hunter'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.hunter'
---

{% hint style="info" %}
**大白话**：Hunter 是专业的「找邮箱」工具，做外贸和销售拓客的人很常用。这个节点就做三件事：根据域名找出全网公开的邮箱（带来源）、根据「域名 + 姓 + 名」猜测最可能的邮箱、验证一个邮箱是否真实有效。适合做「找客户邮箱 → 验证 → 发邮件」的自动拓客流程。
{% endhint %}

# Hunter 节点

使用 Hunter 节点来自动化你在 Hunter 中的工作，并把它与其它应用集成。n8n 内置支持 Hunter 的大量功能，包括获取、生成和验证电子邮件地址。

在本页你可以看到 Hunter 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Hunter 凭证](../credentials/hunter.md)。
{% endhint %}

## 操作

* Get every email address found on the internet using a given domain name, with sources（用指定域名获取互联网上能找到的所有邮箱地址，并带来源）
* Generate or retrieve the most likely email address from a domain name, a first name and a last name（根据域名、名字和姓氏生成或获取最可能的邮箱地址）
* Verify the deliverability of an email address（验证邮箱地址是否可送达）

## 模板与示例

[浏览 Hunter 节点的官方集成模板](https://n8n.io/integrations/hunter)，或[搜索全部模板](https://n8n.io/workflows/)。
