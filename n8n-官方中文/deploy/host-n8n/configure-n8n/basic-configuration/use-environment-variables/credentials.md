---
title: 凭据（Credentials）环境变量
description: >-
  通过环境变量管理默认凭据，并在自托管 n8n 实例中覆盖它们。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 凭据（Credentials）
originalFilePath: hosting/configuration/environment-variables/credentials.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/credentials'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/credentials
layout:
  description:
    visible: false
---

# 凭据（Credentials）环境变量

{% hint style="info" %}
**大白话**：凭据就是各种服务的「钥匙」（API 密钥、账号密码）。这一页的变量让你不用在界面里一个个填，而是通过环境变量一次性批量「覆盖」默认凭据——适合统一管理、不让普通用户看到密钥的场景。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

使用以下环境变量来启用凭据覆盖（credential overwrites）。详细信息请参见[凭据覆盖](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/credential-overwrites)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `CREDENTIALS_OVERWRITE_DATA`<br>/`_FILE` | * | - | 用于覆盖凭据的数据。 |
| `CREDENTIALS_OVERWRITE_ENDPOINT` | String | - | 获取凭据的 API 端点。 |
| `CREDENTIALS_OVERWRITE_PERSISTENCE` | Boolean | `false` | 为凭据覆盖启用数据库持久化。多实例或队列模式需要此项，以便通过发布/订阅的方式把覆盖配置传播给工作实例。 |
| `CREDENTIALS_DEFAULT_NAME` | String | `My credentials` | 凭据的默认名称。 |
