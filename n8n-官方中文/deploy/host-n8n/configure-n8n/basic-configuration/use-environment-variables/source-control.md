---
title: 源代码管理（Source control）环境变量
description: 用于设置源代码管理默认 SSH 密钥类型的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 源代码管理（Source control）
originalFilePath: hosting/configuration/environment-variables/source-control.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/source-control'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/source-control
layout:
  description:
    visible: false
---

# 源代码管理（Source control）环境变量

{% hint style="info" %}
**大白话**：源代码管理（source control）让 n8n 的工作流可以用 Git 仓库来管理，方便搭建「开发 → 生产」的环境隔离。这一页只有一个变量：设置配置源代码管理时默认使用哪种 SSH 密钥类型（默认是 ed25519，可以改成 rsa）。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

n8n 使用基于 Git 的源代码管理来支持环境（environments）。关于如何把 Git 仓库关联到 n8n 实例并配置源代码管理，请参见[源代码管理与环境（Source control and environments）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/use-source-control-and-environments/set-up-source-control)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_SOURCECONTROL_DEFAULT_SSH_KEY_TYPE` | String | `ed25519` | 设为 `rsa` 可以把 RSA 作为[源代码管理设置（Source control setup）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/use-source-control-and-environments/set-up-source-control)的默认 SSH 密钥类型。 |
