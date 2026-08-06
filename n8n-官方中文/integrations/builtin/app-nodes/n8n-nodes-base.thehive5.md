---
title: TheHive 5 节点文档
description: >-
  学习如何在 n8n 中使用 TheHive 5 节点。按照技术文档将 TheHive 5
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: TheHive 5 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.thehive5.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.thehive5'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.thehive5'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：TheHive 5 是 TheHive 平台的新版本（网络安全应急响应平台）。这个节点让你在 n8n 里操作它，覆盖告警（Alert）、案件（Case）、评论（Comment）、可观察对象（Observable）、页面（Page）、查询（Query）、任务（Task）和任务日志（Task Log）的增删改查，还能执行响应器（Responder）和分析器（Analyzer）——也就是 TheHive 里的自动化工具插件。注意：本节点只对接 5 版本 API；用 3/4 版本请看 [TheHive](n8n-nodes-base.thehive.md)。
{% endhint %}

# TheHive 5 节点

使用 TheHive 5 节点来自动化你在 TheHive 中的工作，并把它与其它应用集成。n8n 内置支持 TheHive 的大量功能，包括创建告警（Alert）、统计任务日志、处理案件（Case）和可观察对象（Observable）。

在本页你可以看到 TheHive 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**TheHive 与 TheHive 5**

n8n 为 TheHive 提供了两个节点。如果你想使用 TheHive 的 5 版本 API，请使用本节点（TheHive 5）。如果你想使用 3 或 4 版本，请使用 [TheHive](n8n-nodes-base.thehive.md)。
{% endhint %}
{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [TheHive 5 凭证](../credentials/thehive5.md)。
{% endhint %}

## 操作

* Alert（告警）
	* Create（创建）
	* Delete（删除）
	* Execute Responder（执行响应器）
	* Get（获取）
	* Merge Into Case（合并进案件）
	* Promote to Case（升级为案件）
	* Search（搜索）
	* Update（更新）
	* Update Status（更新状态）
* Case（案件）
	* Add Attachment（添加附件）
	* Create（创建）
	* Delete Attachment（删除附件）
	* Delete Case（删除案件）
	* Execute Responder（执行响应器）
	* Get（获取）
	* Get Attachment（获取附件）
	* Get Timeline（获取时间线）
	* Search（搜索）
	* Update（更新）
* Comment（评论）
	* Create（创建）
	* Delete（删除）
	* Search（搜索）
	* Update（更新）
* Observable（可观察对象）
	* Create（创建）
	* Delete（删除）
	* Execute Analyzer（执行分析器）
	* Execute Responder（执行响应器）
	* Get（获取）
	* Search（搜索）
	* Update（更新）
* Page（页面）
	* Create（创建）
	* Delete（删除）
	* Search（搜索）
	* Update（更新）
* Query（查询）
	* Execute Query（执行查询）
* Task（任务）
	* Create（创建）
	* Delete（删除）
	* Execute Responder（执行响应器）
	* Get（获取）
	* Search（搜索）
	* Update（更新）
* Task Log（任务日志）
	* Add Attachment（添加附件）
	* Create（创建）
	* Delete（删除）
	* Delete Attachment（删除附件）
	* Execute Responder（执行响应器）
	* Get（获取）
	* Search（搜索）

## 模板与示例

[浏览 TheHive 5 节点的官方集成模板](https://n8n.io/integrations/thehive-5)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

n8n 还提供了 TheHive 的触发器节点。触发器节点文档见[这里](../trigger-nodes/n8n-nodes-base.thehive5trigger.md)。

关于该服务的更多信息，请参考 TheHive 的[官方文档](https://docs.strangebee.com/)。
