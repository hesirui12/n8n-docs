---
description: 在 n8n Cloud 上设置用户管理
contentType: howto
nodeTitle: 为 Cloud 版设置（Set up for Cloud）
originalFilePath: user-management/cloud-setup.md
originalUrl: 'https://docs.n8n.io/user-management/cloud-setup'
url: 'https://docs.n8n.io/administer/manage-users-and-access/set-up-for-cloud'
layout:
  description:
    visible: false
---

# 在 n8n Cloud 上设置用户管理 / Set up user management on n8n Cloud

要使用用户管理功能，请把你的版本升级到 **0.195.0 或更新版本**。

{% hint style="warning" %}
**不可逆的升级（Irreversible upgrade）**

一旦你把 Cloud 实例升级到带用户管理功能的 n8n 版本，就**无法降级**你的版本。
{% endhint %}

{% hint style="info" %}
**大白话（为什么不可逆）**：用户管理会改变 n8n 的数据结构和登录方式（比如引入账号体系、加密方式变化），这是「往前走一步就回不去」的升级。所以升级前建议先确认：① 你确实需要多用户功能；② 升级前把重要工作流导出备份好。
{% endhint %}

## 第一步：应用内设置（Step one: In-app setup）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/c0111xcskz1G8PKOQogB/" %}

{% hint style="info" %}
**大白话**：这一步是在 n8n 界面里完成初始设置——通常包括：输入你的姓名、设置管理员邮箱和密码，以及设置 n8n 实例的 URL（这个 URL 会用于邀请邮件等场景）。具体步骤会以内嵌内容的形式显示在官方文档页面上。
{% endhint %}

## 第二步：邀请用户（Step two: Invite users）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/8qoOEjsLz4RnydVBogNy/" %}

{% hint style="info" %}
**大白话**：第二步是把同事拉进来：进入 **Settings（设置）** > **Users（用户）**，输入对方的邮箱发送邀请。对方收到邮件、点链接设置自己的密码后，就成为你实例里的一个用户。收到邀请后没注册的用户会一直显示为「待处理（pending）」状态。
{% endhint %}
