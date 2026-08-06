---
title: Microsoft Agent 365 凭证
description: >-
  Microsoft Agent 365 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Microsoft Agent 365 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Microsoft Agent 365 credentials
originalFilePath: integrations/builtin/credentials/microsoftagent365.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/microsoftagent365'
url: 'https://docs.n8n.io/integrations/builtin/credentials/microsoftagent365'
layout:
  description:
    visible: false
---

# Microsoft Agent 365 凭证

> **大白话**：Microsoft Agent 365 是微软的 AI 智能体（Agent）功能，目前还是早期预览版。想用 n8n 连它，需要先加入微软的 Frontier 预览计划，然后在 Azure 里注册应用，把 Tenant ID、Client ID、Client Secret 三个值填进 n8n。

你可以使用这些凭证来验证以下节点的身份：

- [Microsoft Agent 365 Trigger](../cluster-nodes/root-nodes/n8n-nodes-langchain.microsoftagent365trigger.md)

{% hint style="warning" %}
**早期预览**

Microsoft Agent 365 是早期预览功能。你需要加入 [Frontier 预览计划](https://adoption.microsoft.com/copilot/frontier-program/)才能提前使用。
{% endhint %}

## 前提条件

- 已加入 [Microsoft Frontier 预览计划](https://adoption.microsoft.com/copilot/frontier-program/)
- 一个 [Microsoft Azure](https://azure.microsoft.com/) 账号
- 用 Agent 365 CLI 创建好的 Agent 365 blueprint（蓝图）

## 支持的认证方式

- OAuth2（App Registration，应用注册）

## 相关资源

关于该服务的更多信息，请参考 [Microsoft Agent 365 开发者文档](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/)。

## 使用 OAuth2

要配置这个凭证，你需要：

- **Tenant ID（租户 ID）**：你的 Microsoft Entra 租户 ID
- **Client ID（客户端 ID）**：你的 Azure 应用注册中的 Application (client) ID
- **Client Secret（客户端密钥）**：为你的应用注册生成的密钥

配置步骤如下：

1. 在 [Microsoft Entra ID](https://entra.microsoft.com/#home) 中找到你的 Tenant ID，复制到 n8n 中作为 **Tenant ID**。
2. 打开 [Microsoft Application Registration Portal](https://aka.ms/appregistrations)（微软应用注册门户），按照 [Microsoft Agent 365 自定义客户端应用注册指南](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/custom-client-app-registration)操作。自定义客户端应用创建好后，把 Application (client) ID 复制到 n8n 中作为 **Client ID**。
3. 按照[凭证指南](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-credentials?tabs=client-secret)生成一个客户端密钥，复制 **Value**（值）列中的 **Secret**（密钥），粘贴到 n8n 中作为 **Client Secret**。

{% hint style="info" %}
**入站请求校验**

Microsoft Agent 365 Trigger 节点也会用你的 **Client ID** 来校验传入的 webhook 请求，所以它必须与你智能体应用注册的 Application (client) ID 一致。请参考[Webhook 认证](../cluster-nodes/root-nodes/n8n-nodes-langchain.microsoftagent365trigger.md#webhook-authentication)。
{% endhint %}

我们建议使用 [Agent 365 CLI](https://learn.microsoft.com/en-us/microsoft-agent-365/developer/agent-365-cli) 来创建你的智能体 blueprint 和 manifest。
