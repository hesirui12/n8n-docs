---
title: 时区与本地化（Timezone and localization）环境变量
description: 为自托管 n8n 实例设置时区和默认语言区域。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 时区与本地化（Timezone and localization）
originalFilePath: hosting/configuration/environment-variables/timezone-localization.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/environment-variables/timezone-localization
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/timezone-and-localization
layout:
  description:
    visible: false
---

# 时区与本地化（Timezone and localization）环境变量

{% hint style="info" %}
**大白话**：时区决定 Cron 等定时节点按哪个时区计算触发时间，本地化决定 n8n 界面默认显示哪种语言。这一页就两个变量，简单实用。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `GENERIC_TIMEZONE` | * | `America/New_York` | n8n 实例的时区。对定时节点（如 Cron）很重要。 |
| `N8N_DEFAULT_LOCALE` | String | `en` | 语言区域标识符，兼容 [Accept-Language 请求头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)。n8n 不支持带地区的标识符，例如 `de-AT`。当运行在非默认区域时，n8n 会用所选区域显示界面文本，任何未翻译的字符串则回退到 `en`。 |
