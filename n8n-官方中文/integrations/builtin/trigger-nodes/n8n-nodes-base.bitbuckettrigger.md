---
title: Bitbucket 触发器节点文档（Bitbucket Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Bitbucket 触发器节点。按照技术文档将 Bitbucket
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Bitbucket Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.bitbuckettrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.bitbuckettrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.bitbuckettrigger
layout:
  description:
    visible: false
---

# Bitbucket 触发器节点（Bitbucket Trigger node）

{% hint style="info" %}
**大白话**：Bitbucket 是 Atlassian 公司旗下的代码托管平台（类似 GitHub），用来存放和管理 Git/Mercurial 代码仓库，常用于团队协作开发。这个触发器节点会监听 Bitbucket 上的事件（比如代码推送、提 PR、建 Issue 等），一有动静就自动触发你的工作流。用法：把节点放工作流开头，授权 Bitbucket 账号，选择要监听的仓库和事件即可。
{% endhint %}

[Bitbucket](https://bitbucket.org/) 是由 Atlassian 拥有的基于 Web 的版本控制仓库托管服务，用于存放使用 Mercurial 或 Git 版本控制系统的源代码和开发项目。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/bitbucket.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Bitbucket Trigger 集成](https://n8n.io/integrations/bitbucket-trigger/)页面。
{% endhint %}
