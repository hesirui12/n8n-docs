---
title: 外部密钥（External secrets）环境变量
description: >-
  配置自托管 n8n 实例检查外部密钥更新的时间间隔。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 外部密钥（External secrets）
originalFilePath: hosting/configuration/environment-variables/external-secrets.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/environment-variables/external-secrets
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/external-secrets
layout:
  description:
    visible: false
---

# 外部密钥（External secrets）环境变量

{% hint style="info" %}
**大白话**：外部密钥（external secrets）就是把密码、API 密钥这类敏感信息放到专门的「密钥保险柜」（比如 Vault、AWS Secrets Manager）里管理，而不是存在 n8n 自己的数据库里。这一页只有一个变量：n8n 每隔多久去检查一次密钥有没有更新。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

你可以使用外部密钥存储来管理 n8n 的凭据。详细信息请参见[外部密钥](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/use-external-secret-stores)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_EXTERNAL_SECRETS_UPDATE_INTERVAL` | Number | `300` (5 minutes) | 每隔多久（秒）检查一次密钥更新。 |
