---
title: 安全（Security）环境变量
description: >-
  在自托管 n8n 实例中配置认证和环境变量访问权限。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 安全（Security）
originalFilePath: hosting/configuration/environment-variables/security.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/security'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/security
layout:
  description:
    visible: false
---

# 安全（Security）环境变量

{% hint style="info" %}
**大白话**：这一页是 n8n 的「门锁和保险柜」设置——比如用户能不能在节点里读取服务器的环境变量、能不能访问 n8n 的敏感文件、Cookie 安不安全、浏览器安全策略（CSP）怎么配。如果你是单人小规模使用，保持默认即可；如果多人共用或暴露到公网，建议认真检查这些项。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_BLOCK_ENV_ACCESS_IN_NODE` | Boolean | `false` | 是否允许用户在表达式和 Code 节点中访问环境变量（false）或是不允许（true）。 |
| `N8N_BLOCK_FILE_ACCESS_TO_N8N_FILES` | Boolean | `true` | 设为 `true` 可阻止对 `.n8n` 目录中所有文件以及用户定义的配置文件的访问。 |
| `N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS` | Boolean | `false` | 设为 `true` 可尝试为设置文件设置 0600 权限，即只有属主可以读写。 |
| `N8N_RESTRICT_FILE_ACCESS_TO` | String | | 把文件访问限制在这些目录中。多个目录用分号分隔的列表提供（"`;`"）。 |
| `N8N_SECURITY_AUDIT_DAYS_ABANDONED_WORKFLOW` | Number | 90 | 一个工作流多少天没有执行就会被视为「已废弃」（abandoned）。 |
| `N8N_CONTENT_SECURITY_POLICY` | String | `{}` | 以 [helmet.js](https://helmetjs.github.io/#content-security-policy) 嵌套指令对象的形式设置 [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)（内容安全策略）响应头。例如 `{ "frame-ancestors": ["http://localhost:3000"] }` |
| `N8N_SECURE_COOKIE` | Boolean | `true` | 确保 Cookie 只在 HTTPS 下发送，增强安全性。 |
| `N8N_SAMESITE_COOKIE` | Enum string: `strict`, `lax`, `none` | `lax` | 控制 Cookie 的跨站行为（[了解更多](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)）：<ul><li>`strict`：只随第一方请求发送。</li><li>`lax`（默认）：随顶级导航请求发送。</li><li>`none`：在所有上下文中发送（需要 HTTPS）。</li></ul> |
| `N8N_GIT_NODE_DISABLE_BARE_REPOS` | Boolean | `false` | 设为 `true` 可阻止 [Git 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.git) 使用裸仓库（bare repositories），增强安全性。 |
| `N8N_GIT_NODE_ENABLE_HOOKS` | Boolean | `false` | 设为 `true` 可允许 [Git 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.git) 执行 Git 钩子（hooks）。 |
| `N8N_POSTMESSAGE_ALLOWED_ORIGINS` | String | | 当编辑器被嵌入到其他页面时，允许与编辑器交换 `postMessage` 命令的来源（origins）。只有当编辑器可以被嵌入时才相关，例如以 `N8N_PREVIEW_MODE=true` 运行时。多个来源用逗号分隔的列表提供，例如 `https://n8n.io,https://app.example.com`。为空（默认）时，编辑器接受来自任何来源的消息。 |

## 使用环境变量的安全策略

把 `N8N_SECURITY_POLICY_MANAGED_BY_ENV` 设为 `true`，即可通过环境变量管理安全策略。关于激活模式（`*_MANAGED_BY_ENV`）如何工作，参见[使用环境变量管理实例设置](../../manage-settings-using-environment-variables.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/xVIddGVtWAPFZlRYTrwL/" %}
