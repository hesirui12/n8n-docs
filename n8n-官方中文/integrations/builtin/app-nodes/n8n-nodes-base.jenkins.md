---
title: Jenkins 节点文档
description: >-
  学习如何在 n8n 中使用 Jenkins 节点。按照技术文档将
  Jenkins 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Jenkins 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.jenkins.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jenkins'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.jenkins'
---

{% hint style="info" %}
**大白话**：Jenkins 是程序员最常用的「持续集成 / 自动化构建」服务器（CI/CD，比如自动跑测试、自动打包发布）。这个节点能让你在 n8n 里操作它：列出构建记录（Build）、管理实例运行状态（Instance，如重启、关闭、进入安静模式）、创建和复制任务（Job）并触发任务执行。适合做「代码提交 → 自动触发 Jenkins 构建」这类 DevOps 流程。
{% endhint %}

# Jenkins 节点

使用 Jenkins 节点来自动化你在 Jenkins 中的工作，并把它与其它应用集成。n8n 内置支持 Jenkins 的大量功能，包括列出构建（Build）、管理实例（Instance），以及创建和复制任务（Job）。

在本页你可以看到 Jenkins 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Jenkins 凭证](../credentials/jenkins.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* Build（构建）
    * List Builds（列出构建记录）
* Instance（实例）
    * Cancel quiet down state（取消「安静模式」）
    * Put Jenkins in quiet mode, no builds can be started, Jenkins is ready for shutdown（让 Jenkins 进入安静模式：此时不能再启动新构建，Jenkins 准备关机）
    * Restart Jenkins immediately on environments where it's possible（在可行的环境下立即重启 Jenkins）
    * Restart Jenkins once no jobs are running on environments where it's possible（在可行的环境下，等没有任务在运行时再重启 Jenkins）
    * Shutdown once no jobs are running（等没有任务在运行时再关机）
    * Shutdown Jenkins immediately（立即关闭 Jenkins）
* Job（任务）
    * Copy a specific job（复制指定任务）
    * Create a new job（创建新任务）
    * Trigger a specific job（触发指定任务）
    * Trigger a specific job（触发指定任务）

## 模板与示例

[浏览 Jenkins 节点的官方集成模板](https://n8n.io/integrations/jenkins)，或[搜索全部模板](https://n8n.io/workflows/)。
