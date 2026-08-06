---
title: n8n v3.0 breaking changes
description: Breaking changes coming in version 3.0
contentType: reference
nodeTitle: v3.0 breaking changes
layout:
  description:
    visible: false
---

# n8n v3.0 破坏性变更

{% hint style="info" %}
**大白话**：n8n 准备在 2026 年 10 月发布 3.0 大版本。大版本升级会带来一些"不兼容"的变化——也就是说，升级后有些老功能可能不能用了，需要你先动手改一改。本文就是提前告诉你：哪些东西会被改掉、被删掉，以及你该做什么准备。
{% endhint %}

本文列出了即将到来的 n8n v3.0 升级中需要注意的破坏性变更，以及你需要做的准备工作。这些更新旨在提升安全性、简化配置，并移除过时的旧功能。

n8n 3.0 的发布延续了 n8n 致力于提供安全、可靠、可用于生产环境的自动化平台的承诺。这个大版本包含重要的安全增强和对废弃功能的清理。

## 部署（Deployment）

### 自托管 n8n 必须使用基于 Docker 的部署方式

- 自托管的 n8n 将要求使用基于 Docker 的部署方式。通过 `npm` / `npx n8n` 安装运行的方式将不再受支持。
- **你需要做什么：** 如果你目前是用 `npm` 或 `npx n8n` 运行 n8n，请计划在升级到 v3 之前迁移到基于 Docker 的部署方式。对于本地安装，Docker Compose 预计是最简单的迁移路径。
- *分步迁移指南即将推出*

## 移除的节点和辅助功能（Removed nodes and helpers）

一些已被更新模式取代的旧节点、旧模式和辅助功能将在 v3 中被移除。

### 移除的节点

- **Function（函数）** 节点（旧版）
- **Function Item（函数条目）** 节点（旧版）
- **Item Lists（条目列表）** 节点（旧版）
- **你需要做什么：** 升级前，把受影响的流程迁移到当前推荐的替代方案：
  - 用 [Code](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code)（代码）节点替代 **Function** 和 **Function Item** 节点。用 **Run Once for All Items（所有条目运行一次）** 模式替代 **Function**，用 **Run Once for Each Item（每个条目各运行一次）** 模式替代 **Function Item**。
  - 根据你使用的操作，用对应的节点替代 **Item Lists** 节点：[Split Out](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.splitout)（拆分）、[Aggregate](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.aggregate)（聚合）、[Sort](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.sort)（排序）、[Limit](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.limit)（限制）、[Remove Duplicates](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.removeduplicates)（去重）或 [Summarize](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.summarize)（汇总）。

### 变更的节点行为

- **Execute Workflow（执行工作流）** 节点：旧行为将被移除。

### 移除的表达式辅助功能

- 已废弃的 `$getPairedItem` 表达式辅助功能将被移除。
- **你需要做什么：** 改用 n8n 标准的 [条目关联（item linking）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/reference-data/link-data-items/how-items-link-through-workflows) 机制，例如 `pairedItem` 属性或 `$("<node-name>").item`。

## 安全（Security）

安全默认值将变得更严格，让 n8n 默认更安全。这些变化可能会影响现有的工作流或凭证。

- **对高风险资源名称的处理更严格。**
- **凭证行为更安全。**
- **默认启用密钥轮换（key rotation）。**

## 退役的能力（Retired capabilities）

一些旧有的、使用率较低的产品能力将在 v3 中退役。凡是存在迁移路径或替代方案的地方，都会提供指导。

- **Chat hub（聊天中心）** —— 正在退役。
- **编辑器中的"从 URL 导入工作流"功能** —— 将被移除。其他[导入方式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/export-and-import)仍然受支持：复制粘贴、编辑器 UI 菜单中的 **Import from File（从文件导入）**、CLI 以及 Public API（公共 API）。
- **无功能的节点（Non-functional nodes）** —— 将被移除。

---

_随着 v3 发布日期的临近，本页面将补充完整细节、迁移指南和链接。_
