---
title: 外部钩子（External hooks）环境变量
description: >-
  用于把外部钩子集成到自托管 n8n 实例的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 外部钩子（External hooks）
originalFilePath: hosting/configuration/environment-variables/external-hooks.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/external-hooks'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/external-hooks
layout:
  description:
    visible: false
---

# 外部钩子（External hooks）环境变量

{% hint style="info" %}
**大白话**：外部钩子（external hooks）就是「在 n8n 发生某个事情时，自动执行你自己写的一段代码」——比如用户登录后、工作流发布前、节点执行后，都可以插入自定义逻辑。这一页只是告诉 n8n 去哪里找你的钩子代码文件。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

你可以定义外部钩子，让 n8n 在某个特定操作运行时执行它们。完整的钩子参考（包括可用的钩子和文件格式）请参见[外部钩子](../../external-hooks.md)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------ | :---------- |
| `EXTERNAL_HOOK_FILES` | String | - | 包含后端外部钩子的文件。要提供多个文件，请用 `EXTERNAL_HOOK_FILES_SEPARATOR` 定义的字符分隔。 |
| `EXTERNAL_HOOK_FILES_SEPARATOR` | String | `:` | `EXTERNAL_HOOK_FILES` 的分隔字符。在 Windows 上请用 `;`，避免与 `C:\` 之类的盘符路径冲突。 |
| `EXTERNAL_FRONTEND_HOOKS_URLS` | String | - | 包含前端外部钩子的文件 URL。多个 URL 用冒号分隔的列表提供（"`:`"）。 |
