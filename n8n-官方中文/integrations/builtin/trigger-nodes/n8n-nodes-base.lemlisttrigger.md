---
title: Lemlist Trigger 节点文档
description: >-
  学习如何在 n8n 中使用 Lemlist Trigger 节点。按照本文档将
  Lemlist Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Lemlist Trigger 节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.lemlisttrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.lemlisttrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.lemlisttrigger
layout:
  description:
    visible: false
---

# Lemlist Trigger 节点

> **大白话**：Lemlist 是一款邮件外联（cold email）平台，能自动生成个性化图片和视频，还能自动发送个性化冷邮件。这个触发器节点监听 Lemlist 里的事件——比如邮件被打开、被回复、被退订，LinkedIn 邀请被接受等等——一有动静就启动你的工作流。

[Lemlist](https://Lemlist.com) 是一个邮件外联平台，允许你自动生成个性化图片和视频，并发送个性化的冷邮件（cold emails）。

{% hint style="info" %}
**凭证（Credentials）**

你可以[在这里](../credentials/lemlist.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例与模板**

想找使用示例和入门模板，可以查看 n8n 的 [Lemlist Trigger 集成](https://n8n.io/integrations/lemlist-trigger/) 页面。
{% endhint %}

## 事件（Events）


- *（全部事件）
- Aircall Created（Aircall 呼叫已创建）
- Aircall Done（Aircall 呼叫已完成）
- Aircall Ended（Aircall 呼叫已结束）
- Aircall Interested（Aircall 有兴趣）
- Aircall Not Interested（Aircall 没兴趣）
- Api Done（API 已完成）
- Api Failed（API 失败）
- Api Interested（API 有兴趣）
- Api Not Interested（API 没兴趣）
- Attracted（已吸引）
- Connection Issue（连接问题）
- Contacted（已联系）
- Custom Domain Errors（自定义域名错误）
- Emails Bounced（邮件被退回）
- Emails Clicked（邮件被点击）
- Emails Failed（邮件发送失败）
- Emails Interested（邮件回复有兴趣）
- Emails Not Interested（邮件回复没兴趣）
- Emails Opened（邮件被打开）
- Emails Replied（邮件被回复）
- Emails Send Failed（邮件发送失败）
- Emails Sent（邮件已发送）
- Emails Unsubscribed（邮件被退订）
- Hooked（已钩住）
- Interested（有兴趣）
- Lemwarm Paused（Lemwarm 暂停）
- LinkedIn Interested（LinkedIn 有兴趣）
- LinkedIn Invite Accepted（LinkedIn 邀请被接受）
- LinkedIn Invite Done（LinkedIn 邀请已完成）
- LinkedIn Invite Failed（LinkedIn 邀请失败）
- LinkedIn Not Interested（LinkedIn 没兴趣）
- LinkedIn Replied（LinkedIn 已回复）
- LinkedIn Send Failed（LinkedIn 发送失败）
- LinkedIn Sent（LinkedIn 已发送）
- LinkedIn Visit Done（LinkedIn 访问已完成）
- LinkedIn Visit Failed（LinkedIn 访问失败）
- LinkedIn Voice Note Done（LinkedIn 语音留言已完成）
- LinkedIn Voice Note Failed（LinkedIn 语音留言失败）
- Manual Interested（手动标记有兴趣）
- Manual Not Interested（手动标记没兴趣）
- Not Interested（没兴趣）
- Opportunities Done（机会已完成）
- Paused（已暂停）
- Resumed（已恢复）
- Send Limit Reached（已达发送上限）
- Skipped（已跳过）
- Warmed（已预热）
