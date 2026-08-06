---
title: Toggl 凭证
description: >-
  Toggl 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Toggl 的身份。
contentType:
  - integration
  - reference
nodeTitle: Toggl credentials
originalFilePath: integrations/builtin/credentials/toggl.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/toggl'
url: 'https://docs.n8n.io/integrations/builtin/credentials/toggl'
layout:
  description:
    visible: false
---

# Toggl 凭证

{% hint style="info" %}
**大白话**：Toggl 是计时工具（记录你干每件事花了多长时间）。n8n 连它用的是**基础认证（Basic auth）**：把你 Toggl 账号的**邮箱**和**密码**填进来就行，非常简单。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Toggl Trigger（触发器）](../trigger-nodes/n8n-nodes-base.toggltrigger.md)

## 先决条件

注册一个 [Toggl](https://toggl.com/) 账号。

## 支持的验证方式

- Basic auth（基础认证）

## 相关资源

关于该服务的更多信息，请参考 [Toggl 官方 API 文档](https://engineering.toggl.com/docs/)。

## 使用 Basic auth（基础认证）

要配置这个凭证，你需要：

- 一个 **Username（用户名）**：填写你的用户邮箱地址。
- 一个 **Password（密码）**：填写你的用户密码。

更多信息请参考[身份验证说明](https://engineering.toggl.com/docs/authentication)。
