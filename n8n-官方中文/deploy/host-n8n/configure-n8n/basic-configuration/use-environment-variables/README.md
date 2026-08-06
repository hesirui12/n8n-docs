---
title: 环境变量总览
description: 自托管 n8n 的配置环境变量总览。
contentType: overview
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 使用环境变量
originalFilePath: hosting/configuration/environment-variables/index.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables
layout:
  description:
    visible: false
---

# 环境变量总览（Environment variables overview）

{% hint style="info" %}
**大白话**：环境变量就是在启动 n8n 之前预先设定好的「开关和参数」，用来调整 n8n 的各种默认行为，比如改端口、换数据库、开日志、调安全设置等。你不需要改任何代码，只要设置好环境变量，再重启 n8n 就能生效。本节就是把 n8n 支持的所有环境变量列出来给你查。
{% endhint %}

本节列出了自托管 n8n 时，可以用来修改 n8n 配置设置的环境变量。

如需完整且最新的环境变量列表，请参见 n8n 文档仓库中的完整参考：[环境变量完整索引](https://github.com/n8n-io/n8n-docs/tree/main/docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables)。

{% hint style="info" %}
**基于文件的配置**

你可以为 n8n 提供一个[配置文件](../../basic-configuration.md)。你也可以在某些变量名后面追加 `_FILE`，用单独的文件来提供这些配置（比如把密码放在一个单独的文件里，避免直接写进环境变量）。
{% endhint %}
