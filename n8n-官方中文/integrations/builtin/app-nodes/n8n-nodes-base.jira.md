---
title: Jira Software 节点文档
description: >-
  学习如何在 n8n 中使用 Jira Software 节点。按照技术文档将
  Jira Software 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Jira Software 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.jira.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jira'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jira'
---

{% hint style="info" %}
**大白话**：Jira Software 是 Atlassian 出品的「项目管理和敏捷开发（看板 / Scrum）」工具，全世界开发团队都在用。这个节点能让你在 n8n 里：管理问题（Issue）及它的附件、评论、状态流转（Transition）和变更日志，还能管理用户。适合做「客服表单 → 自动创建 Jira 工单」「代码合并 → 自动更新 Jira 状态」这类流程。
{% endhint %}

# Jira Software 节点

使用 Jira Software 节点来自动化你在 Jira 中的工作，并把它与其它应用集成。n8n 内置支持 Jira 的大量功能，包括创建、更新、删除、获取问题（Issue）和用户（User）。

在本页你可以看到 Jira Software 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Jira 凭证](../credentials/jira.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* Issue（问题）
    * Get issue changelog（获取问题的变更日志）
    * Create a new issue（创建新问题）
    * Delete an issue（删除问题）
    * Get an issue（获取单个问题）
    * Get all issues（获取全部问题）
    * Create an email notification for an issue and add it to the mail queue（为问题创建邮件通知，并加入邮件队列）
    * Return either all transitions or a transition that can be performed by the user on an issue, based on the issue's status（根据问题当前状态，返回该用户可对问题执行的全部状态流转或单个流转）
    * Update an issue（更新问题）
* Issue Attachment（问题附件）
    * Add attachment to issue（给问题添加附件）
    * Get an attachment（获取单个附件）
    * Get all attachments（获取全部附件）
    * Remove an attachment（删除附件）
* Issue Comment（问题评论）
    * Add comment to issue（给问题添加评论）
    * Get a comment（获取单个评论）
    * Get all comments（获取全部评论）
    * Remove a comment（删除评论）
    * Update a comment（更新评论）
* User（用户）
    * Create a new user.（创建新用户）
    * Delete a user.（删除用户）
    * Retrieve a user.（获取用户）

## 模板与示例

[浏览 Jira Software 节点的官方集成模板](https://n8n.io/integrations/jira-software)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

## 相关资源

想更深入了解 JQL（Jira 查询语言），请参考[官方 JQL 文档](https://www.atlassian.com/software/jira/guides/expand-jira/jql)。

## 获取指定项目的问题

**Get All（获取全部）** 操作会返回 Jira 里的全部问题。如果只想获取某个项目的所有问题，你需要使用 JQL（Jira 查询语言）。

例如，你想获取名为 `n8n` 的项目下的全部问题，可以这样做：

- 在 **Operation（操作）** 下拉框里选择 **Get All（获取全部）**。
- 把 **Return All（返回全部）** 开关打开。
- 选择 **Add Option（添加选项）**，然后选择 **JQL**。
- 在 **JQL** 输入框里填 `project=n8n`。

这条查询会获取名为 `n8n` 的项目下的全部问题。把 `n8n` 换成你自己的项目名，就能获取你项目下的全部问题。
