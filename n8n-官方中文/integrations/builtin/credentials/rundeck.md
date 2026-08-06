---
title: Rundeck 凭证
description: >-
  Rundeck 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Rundeck 的身份。
contentType:
  - integration
  - reference
nodeTitle: Rundeck credentials
originalFilePath: integrations/builtin/credentials/rundeck.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/rundeck'
url: 'https://docs.n8n.io/integrations/builtin/credentials/rundeck'
layout:
  description:
    visible: false
---

# Rundeck 凭证

{% hint style="info" %}
**大白话**：Rundeck 是「自动化运维/任务调度」工具，可以编排服务器上的脚本、命令和运维流程。n8n 连它需要两样东西：**URL**（你 Rundeck 服务器的地址，比如 `http://myserver:4440`）和一把用户 API **Token（令牌）**——在你的 **Profile（个人资料）> User API Tokens（用户 API 令牌）** 里生成。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Rundeck](../app-nodes/n8n-nodes-base.rundeck.md)

## 准备工作

在一台 [Rundeck](https://www.rundeck.com/) 服务器上创建一个用户账号。

## 支持的验证方式

- API token（API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [Rundeck 官方 API 文档](https://docs.rundeck.com/docs/api/)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要准备：

- **URL**：输入你的 Rundeck 服务器基础地址，比如 `http://myserver:4440`。更多说明请参考 [URLs](https://docs.rundeck.com/docs/api/#urls) 文档。
- 一把用户 API **Token（令牌）**：要生成用户 API 令牌，请前往你的 **Profile（个人资料）> User API Tokens（用户 API 令牌）**。更多说明请参考[用户 API 令牌](https://docs.rundeck.com/docs/manual/10-user.html#user-api-tokens)文档。
