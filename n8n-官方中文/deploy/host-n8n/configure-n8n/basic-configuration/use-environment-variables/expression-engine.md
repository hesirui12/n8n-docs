---
title: 表达式引擎（Expression engine）环境变量
description: >-
  为你的自托管 n8n 实例配置表达式求值引擎及其 V8 隔离池（isolate pool）。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 表达式引擎（Expression engine）
originalFilePath: hosting/configuration/environment-variables/expression-engine.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/environment-variables/expression-engine
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/expression-engine
layout:
  description:
    visible: false
---

# 表达式引擎（Expression engine）环境变量

{% hint style="info" %}
**大白话**：表达式（expression）就是工作流里用双花括号写的动态小片段（比如 `{{ $json.name }}`），在运行时会被 n8n 计算成真正的值。表达式引擎就是负责「算」的组件。这一页的变量用来调这个引擎的性能（并发、缓存、超时、内存上限）和安全性（沙箱隔离）。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

[表达式（Expressions）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)是 n8n 在运行时求值的 JavaScript 片段，用来动态设置节点参数。表达式引擎就是执行该求值的组件。本页列出了用于配置它的环境变量。

{% hint style="info" %}
**实验性功能（Experimental）**

`vm` 引擎是实验性的。n8n 默认使用 `legacy` 引擎。除 `N8N_EXPRESSION_ENGINE` 之外的以下变量，只有在把 `N8N_EXPRESSION_ENGINE` 设为 `vm` 时才会生效。
{% endhint %}

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_EXPRESSION_ENGINE` | Enum string: `legacy`, `vm` | `legacy` | 使用哪个表达式引擎。`legacy` 在没有隔离的情况下运行表达式；`vm` 在沙箱化的 V8 隔离（isolate）中运行它们。`vm` 是实验性的，`legacy` 仍然是默认值。 |
| `N8N_EXPRESSION_ENGINE_POOL_SIZE` | Number | `1` | 在池中保持「预热」状态的 V8 隔离（isolate）数量。 |
| `N8N_EXPRESSION_ENGINE_MAX_CODE_CACHE_SIZE` | Number | `1024` | 最多缓存多少个已编译的表达式。 |
| `N8N_EXPRESSION_ENGINE_TIMEOUT` | Number | `5000` | 每次表达式求值的执行超时时间（毫秒）。 |
| `N8N_EXPRESSION_ENGINE_MEMORY_LIMIT` | Number | `128` | 每个 V8 隔离（isolate）的内存上限（MiB）。 |
| `N8N_EXPRESSION_ENGINE_IDLE_TIMEOUT` | Number | - | 如果设置了这个值，当池子在这么多秒内没有活动时，会把隔离池缩容到 0 个预热隔离（即空闲自动释放资源）。 |
