---
title: GitHub 触发器节点文档
description: >-
  Learn how to use the GitHub Trigger node in n8n.
contentType:
  - integration
  - reference
priority: medium
nodeTitle: GitHub 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.githubtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.githubtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.githubtrigger
layout:
  description:
    visible: false
---

# GitHub 触发器节点

> **大白话**：这个节点是 GitHub 的"哨兵"——仓库里任何动静都能触发工作流：有人 push 代码、开 issue、提 PR、发 release、加星标、创建标签等等，你都能第一时间收到并自动处理。

[GitHub](https://github.com/) 基于 Git 提供软件开发托管和版本控制。它提供 Git 的分布式版本控制与源代码管理（SCM）功能、访问控制，以及多种协作功能，如缺陷跟踪、功能请求、任务管理和每个项目的 wiki。

{% hint style="info" %}
**凭据（Credentials）**

你可以在此处找到该节点的认证信息：[GitHub 凭据](../credentials/github.md)。
{% endhint %}

{% hint style="info" %}
**示例与模板**

如需使用示例和入门模板，请参阅 n8n 的 [GitHub 触发器集成](https://n8n.io/integrations/github-trigger/) 页面。
{% endhint %}

## 事件（Events）

* Check run（检查运行）
* Check suite（检查套件）
* Commit comment（提交评论）
* Create（创建）
* Delete（删除）
* Deploy key（部署密钥）
* Deployment（部署）
* Deployment status（部署状态）
* Fork（复刻）
* GitHub app authorization（GitHub 应用授权）
* Gollum（Wiki 页面更新）
* Installation（应用安装）
* Installation repositories（安装的仓库）
* Issue comment（Issue 评论）
* Label（标签）
* Marketplace purchase（市场购买）
* Member（成员）
* Membership（成员关系）
* Meta（元事件）
* Milestone（里程碑）
* Org block（组织屏蔽）
* Organization（组织）
* Page build（页面构建）
* Project（项目）
* Project card（项目卡片）
* Project column（项目列）
* Public（转为公开）
* Pull request（拉取请求）
* Pull request review（PR 审核）
* Pull request review comment（PR 审核评论）
* Push（推送）
* Release（发布）
* Repository（仓库）
* Repository import（仓库导入）
* Repository vulnerability alert（仓库漏洞警报）
* Security advisory（安全公告）
* Star（加星标）
* Status（状态）
* Team（团队）
* Team add（添加团队）
* Watch（关注）

## 相关资源

n8n 也为 GitHub 提供了应用节点（app node）。你可以在这里找到节点文档：[GitHub 应用节点](../app-nodes/n8n-nodes-base.github.md)。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/github-trigger/)。

关于其 API 的细节，请参阅 [GitHub 官方文档](https://docs.github.com/en/rest)。
