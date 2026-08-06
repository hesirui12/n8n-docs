---
title: 下载工作流
description: 如何通过管理后台从 n8n Cloud 下载工作流。
contentType: howto
nodeTitle: 下载工作流
originalFilePath: manage-cloud/download-workflows.md
originalUrl: 'https://docs.n8n.io/manage-cloud/download-workflows'
url: 'https://docs.n8n.io/deploy/use-n8n-cloud/download-workflows'
layout:
  description:
    visible: false
---

# 下载工作流（Download workflows）

n8n Cloud 实例的**归属人（owner）**可以从最近一次的备份中下载工作流。

你可以通过 [Cloud 管理后台（Cloud admin dashboard）](use-the-admin-dashboard.md) 来完成这个操作。

{% hint style="info" %}
**小白提示**：这个功能相当于「官方帮你做的自动备份」——n8n 会定期为你的实例做备份，而你可以从备份里把工作流导出来，存到本地以防万一（比如换平台、迁移服务器、或者担心哪天数据丢了）。
{% endhint %}

## 如何下载工作流（How to download workflows）

1. [登录 n8n](https://app.n8n.cloud/magic-link)。
2. 选择 **Admin Dashboard**（管理后台）打开仪表盘。
3. 在 **Manage**（管理）区域，选择 **Export**（导出）标签页。
4. 选择 **Download Workflows**（下载工作流）。

## 免费试用结束后访问工作流（Accessing workflows after your free trial）

你的免费试用结束之后，有 **90 天** 的时间可以下载你的工作流。超过这个期限后，所有工作流都会被**永久删除（permanently deleted）**，并且**无法恢复**。

{% hint style="warning" %}
**重要提醒**：90 天倒计时从免费试用结束那天就开始算了。如果试用期间没有升级到付费套餐，请务必在 90 天内把重要的工作流下载备份好，否则数据就真的找不回来了。
{% endhint %}
