---
title: TheHive 节点文档
description: >-
  学习如何在 n8n 中使用 TheHive 节点。按照技术文档将 TheHive
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: TheHive 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.thehive.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.thehive'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.thehive'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：TheHive 是网络安全应急响应（SOC/蓝队）团队用来管理安全事件的开源平台。这个节点让你在 n8n 里操作它，比如创建安全告警（Alert）、管理案件（Case）、任务（Task）、日志（Log）和可观察对象（Observable，比如恶意 IP、钓鱼域名这类线索）。注意：这个节点对应 TheHive 3/4 版本，用 5 版本请看 [TheHive 5](n8n-nodes-base.thehive5.md)。
{% endhint %}

# TheHive 节点

使用 TheHive 节点来自动化你在 TheHive 中的工作，并把它与其它应用集成。n8n 内置支持 TheHive 的大量功能，包括创建告警（Alert）、统计任务日志、处理案件（Case）和可观察对象（Observable）。

在本页你可以看到 TheHive 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**TheHive 与 TheHive 5**

n8n 为 TheHive 提供了两个节点。如果你想使用 TheHive 的 3 或 4 版本 API，请使用本节点（TheHive）。如果你想使用 5 版本，请使用 [TheHive 5](n8n-nodes-base.thehive5.md)。
{% endhint %}
{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [TheHive 凭证](../credentials/thehive.md)。
{% endhint %}

## 操作

可用的操作取决于你的 API 版本。要查看操作列表，请先创建你的凭证（包括选择你的 API 版本），然后回到节点，选择你想使用的资源，n8n 就会显示你这个 API 版本可用的操作。

* Alert（告警）
* Case（案件）
* Log（日志）
* Observable（可观察对象）
* Task（任务）

## 模板与示例

[浏览 TheHive 节点的官方集成模板](https://n8n.io/integrations/thehive)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）

## 相关资源

n8n 还提供了 TheHive 的触发器节点。触发器节点文档见[这里](../trigger-nodes/n8n-nodes-base.thehivetrigger.md)。

关于该服务的更多信息，请参考 TheHive 官方文档：

* [版本 3](https://docs.thehive-project.org/thehive/legacy/thehive3/api/)
* [版本 4](https://docs.thehive-project.org/cortex/api/api-guide/)
