---
title: GitLab 触发器节点文档
description: >-
  Learn how to use the GitLab Trigger node in n8n.
contentType:
  - integration
  - reference
priority: medium
nodeTitle: GitLab 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.gitlabtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gitlabtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gitlabtrigger
layout:
  description:
    visible: false
---

# GitLab 触发器节点

> **大白话**：这个节点监听你 GitLab 仓库/项目里的各种事件——有人推送代码、创建 issue、提合并请求、跑流水线、发 release、打标签、改 wiki 等，都会触发你的工作流。

[GitLab](https://gitlab.com/) 是一个基于网页的 DevOps 生命周期工具，提供 Git 仓库管理，并内置 wiki、问题跟踪以及持续集成/持续部署（CI/CD）流水线功能。

{% hint style="info" %}
**凭据（Credentials）**

你可以在此处找到该节点的认证信息：[GitLab 凭据](../credentials/gitlab.md)。
{% endhint %}

{% hint style="info" %}
**示例与模板**

如需使用示例和入门模板，请参阅 n8n 的 [GitLab 触发器集成](https://n8n.io/integrations/gitlab-trigger/) 页面。
{% endhint %}

## 事件（Events）

* Comment（评论）
* Confidential issues（机密 Issue）
* Confidential comments（机密评论）
* Deployments（部署）
* Issue
* Job（作业）
* Merge request（合并请求）
* Pipeline（流水线）
* Push（推送）
* Release（发布）
* Tag（标签）
* Wiki page（Wiki 页面）

## 相关资源

n8n 也为 GitLab 提供了应用节点（app node）。你可以在这里找到节点文档：[GitLab 应用节点](../app-nodes/n8n-nodes-base.gitlab.md)。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/gitlab-trigger/)。

关于其 API 的细节，请参阅 [GitLab 官方文档](https://docs.gitlab.com/api/rest/)。
