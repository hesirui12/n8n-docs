---
title: Taiga 凭证
description: >-
  Taiga 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Taiga 的身份。
contentType:
  - integration
  - reference
nodeTitle: Taiga credentials
originalFilePath: integrations/builtin/credentials/taiga.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/taiga'
url: 'https://docs.n8n.io/integrations/builtin/credentials/taiga'
layout:
  description:
    visible: false
---

# Taiga 凭证

{% hint style="info" %}
**大白话**：Taiga 是敏捷项目管理工具（管项目、看板、任务）。n8n 连它用的是**基础认证（Basic auth）**，也就是用户名 + 密码。填的时候注意 **Environment（环境）** 要选对：用官方云端服务就选 **Cloud**；如果 Taiga 是你自己服务器上装的，就选 **Self-Hosted（自托管）**，还要多填一个你自己的 **URL（地址）**。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Taiga](../app-nodes/n8n-nodes-base.taiga.md)
- [Taiga Trigger（触发器）](../trigger-nodes/n8n-nodes-base.taigatrigger.md)

## 先决条件

注册一个 [Taiga](https://taiga.io/) 账号。

## 支持的验证方式

- Basic auth（基础认证）

## 相关资源

关于该服务的更多信息，请参考 [Taiga 官方 API 文档](https://docs.taiga.io/api.html)。

## 使用 Basic auth（基础认证）

要配置这个凭证，你需要：

- 一个 **Username（用户名）**：填写你的用户名或用户邮箱。更多信息请参考[常规登录说明](https://docs.taiga.io/api.html#auth-normal-login)。
- 一个 **Password（密码）**：填写你的密码。
- **Environment（环境）**：在 **Cloud（云）** 或 **Self-Hosted（自托管）** 之间选择。如果选 **Self-Hosted（自托管）**，还需要额外填写：
    - **URL（地址）**：填写你的 Taiga 地址。
