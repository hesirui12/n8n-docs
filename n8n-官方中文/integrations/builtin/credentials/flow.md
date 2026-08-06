---
title: Flow 凭证
description: >-
  Flow 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Flow 的身份。
contentType:
  - integration
  - reference
nodeTitle: Flow credentials
originalFilePath: integrations/builtin/credentials/flow.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/flow'
url: 'https://docs.n8n.io/integrations/builtin/credentials/flow'
layout:
  description:
    visible: false
---

# Flow 凭证

{% hint style="info" %}
**大白话**：Flow（getflow.com）是一款团队任务/项目管理工具。想让 n8n 帮你自动操作它（比如建任务、看任务），需要先准备好两样东西：你的 **Organization ID（组织编号）** 和 **Access Token（访问令牌）**。这两样都在 Flow 的后台里能生成/找到，复制进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Flow](../app-nodes/n8n-nodes-base.flow.md)
- [Flow Trigger](../trigger-nodes/n8n-nodes-base.flowtrigger.md)

## 准备工作

创建一个 [Flow](https://www.getflow.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Flow 官方 API 文档](https://developer.getflow.com/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 你的数字格式 **Organization ID（组织编号）**
- 一个 **Access Token（访问令牌）**

如何生成 Access Token、如何查看你的 Organization ID，请参考 [Flow API 快速入门文档](https://developer.getflow.com/#getting-started)。
