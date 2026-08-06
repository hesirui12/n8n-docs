---
title: GoToWebinar 节点文档
description: 学习如何在 n8n 中使用 GoToWebinar 节点。按照技术文档将 GoToWebinar 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: GoToWebinar 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.gotowebinar.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gotowebinar'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gotowebinar'
layout:
  description:
    visible: false
---

# GoToWebinar 节点

> 💡 **大白话**：GoToWebinar 是一个在线研讨会（webinar）平台。用这个节点，n8n 可以自动管理研讨会的「人」：报名者（Registrant）、参会者（Attendee）、联办人（Co-Organizer）、嘉宾（Panelist）以及研讨会本身（Webinar）和场次（Session），比如报名后自动发送提醒。

使用 GoToWebinar 节点自动化 GoToWebinar 中的工作，并将 GoToWebinar 与其他应用集成。n8n 内置支持大量 GoToWebinar 功能，包括创建、获取和删除参会者、组织者和报名者。

本页列出了 GoToWebinar 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [GoToWebinar 凭据](../credentials/gotowebinar.md)。
{% endhint %}

## 支持的操作（Operations）

* Attendee（参会者）
    * Get（获取）
    * Get All（获取全部）
    * Get Details（获取详情）
* Co-Organizer（联办人）
    * Create（创建）
    * Delete（删除）
    * Get All（获取全部）
    * Re-invite（重新邀请）
* Panelist（嘉宾）
    * Create（创建）
    * Delete（删除）
    * Get All（获取全部）
    * Re-invite（重新邀请）
* Registrant（报名者）
    * Create（创建）
    * Delete（删除）
    * Get（获取）
    * Get All（获取全部）
* Session（场次）
    * Get（获取）
    * Get All（获取全部）
    * Get Details（获取详情）
* Webinar（研讨会）
    * Create（创建）
    * Get（获取）
    * Get All（获取全部）
    * Update（更新）

## 模板和示例（Templates and examples）

[浏览 GoToWebinar 节点文档集成模板](https://n8n.io/integrations/gotowebinar) 或 [搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
