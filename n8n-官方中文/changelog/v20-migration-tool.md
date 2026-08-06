---
title: v2.0 Migration Tool
description: Tool to help you migrate to v2.0
contentType: reference
nodeTitle: v2.0 Migration tool
originalFilePath: migration-tool-v2.md
originalUrl: 'https://docs.n8n.io/migration-tool-v2'
url: 'https://docs.n8n.io/release-notes/v20-migration-tool'
layout:
  description:
    visible: false
---

# n8n v2.0 迁移工具

{% hint style="info" %}
**大白话**：升级到 n8n 2.0 之前，最好先体检一下你的 n8n。这个迁移工具就是"体检报告"——它会自动扫描你实例里的所有工作流和配置，告诉你哪些工作流升级后还能正常跑、哪些会出问题、哪些设置要改。看到报告后，照着问题清单一个个修就行。
{% endhint %}

迁移工具通过在升级前识别需要处理的工作流和配置，帮助你为升级到版本 2.0 做好准备。

![Migration tool](.gitbook/assets/migration-tool.png)

你可以在[此页面](v20-breaking-changes.md)查看 v2 的所有破坏性变更。

## 访问工具（Accessing the Tool）

导航到 **Settings > Migration Report（设置 > 迁移报告）** 查看你的兼容性状态。

{% hint style="info" %}
**用户角色权限**

迁移工具仅供全局管理员（global admins）使用。
{% endhint %}

## 理解你的迁移状态（Understanding Your Migration Status）

在页面顶部，你会看到：

"X out of Y workflows are compatible with n8n 2.0"（Y 个工作流中有 X 个与 n8n 2.0 兼容）

这告诉你升级后有多少工作流可以无需修改继续工作。你的目标是解决阻止其余工作流兼容的问题，以及全局实例级别的问题。

## 查看问题（Viewing Issues）

该工具将潜在问题分为两类：

### 工作流问题选项卡（Workflow Issues Tab）

显示影响实例中特定工作流的破坏性变更。
每个问题你会看到：

* **问题标题（Issue title）：** 问题的清晰名称
* **严重程度徽章（Critical/Medium/Low，严重/中等/低）：** 修复的紧急程度
    * **Critical（严重）：** 升级前必须修复，否则工作流会失败
    * **Medium（中等）：** 可能导致意外行为，或需要尽快处理
    * **Low（低）：** 不会破坏功能的小改动或弃用提示
* **描述（Description）：** 说明发生了什么变化以及为什么重要
* **文档链接（Documentation link）：** 点击阅读详细的迁移说明
* **受影响的工作流数量（Affected workflow count）：** 你有多少工作流存在此问题

#### 工作流问题详情页（Workflow Issue Detail Page）

点击 **X workflows affected（X 个工作流受影响）** 查看所有受影响的工作流。
每个工作流你会看到：

* **名称（Name）：** 工作流名称。点击名称可打开工作流编辑器。
* **状态（State）：** 工作流是否已发布
* **受影响的节点（Node affected）：** 受该问题影响的所有工作流节点列表。你可以点击每个节点，打开已定位到该节点视图的工作流编辑器。
* **执行次数（Number of executions）：** 工作流的总执行次数
* **最后执行时间（Last executed）：** 工作流最后一次执行的日期
* **最后更新时间（Last updated）：** 工作流最后一次更新的日期

### 实例问题选项卡（Instance Issues Tab）

显示影响整个 n8n 实例（而不是特定工作流）的配置变更。
每个问题你会看到：

* 与工作流问题相同的信息（标题、严重程度、描述、文档）
* **无工作流数量：** 这些是应用于整个实例的全局设置

v2.0 迁移工具会扫描你的 n8n 实例，识别升级到 v2.0 所需的潜在兼容性问题和配置变更。本参考文档详细说明了工具执行的每项检查、检测到问题的影响，并提供了让实例为迁移做好准备的建议。

## 理解空状态（Understanding Empty States）

### 未发现工作流问题（No Workflow Issues Found）

你所有的工作流都与 v2.0 兼容。请检查 **Instance Issues（实例问题）** 选项卡，确保服务器配置也已就绪。

### 未发现实例问题（No Instance Issues Found）

你的实例配置与 v2.0 兼容。请检查 **Workflow Issues（工作流问题）** 选项卡，确保所有工作流也已就绪。

### 两个选项卡均为空（Both Tabs Empty）

你的 n8n 实例已完全准备好升级到版本 2.0。

## 推荐工作流程（Recommended Workflow）

### 初次评估（Initial Assessment）
* 查看兼容性摘要
* 浏览两个选项卡中的所有问题，了解问题范围

### 按严重程度排序（Sort by Severity）
* 从 Critical（严重）问题开始（它们会破坏工作流）
* 然后是 Medium（中等）问题（可能导致问题）
* 最后处理 Low（低）问题（弃用警告）

### 修复工作流问题（Fix Workflow Issues）
* 点击每个问题，查看受影响的工作流
* 阅读文档获取修复说明
* 按需更新每个工作流
* 在开发环境中测试工作流

### 处理实例问题（Address Instance Issues）
* 更新环境变量或服务器配置
* 按照文档执行每一项实例级变更

### 验证你的工作（Verify Your Work）
* 点击 **Refresh（刷新）** 重新扫描。如果看不到 **Refresh** 按钮，直接刷新页面即可重新扫描。
* 确认没有遗留未解决的问题
* 确认兼容性数量与工作流总数一致

### 继续升级（Proceed with Upgrade）
处理完所有问题后，你就可以升级到 n8n 2.0 了。
