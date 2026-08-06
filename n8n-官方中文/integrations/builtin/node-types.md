---
contentType: overview
nodeTitle: Node types
originalFilePath: integrations/builtin/node-types.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/node-types'
url: 'https://docs.n8n.io/integrations/builtin/node-types'
layout:
  description:
    visible: false
---

# 内置集成（Built-in integrations）

{% hint style="info" %}
**大白话**：这一页是 n8n 内置节点的「图书馆目录」。n8n 的所有内置节点，以及它们需要的凭据（登录认证信息），都能在这里找到文档。下面先简单介绍几大类：**核心节点（Core nodes）** 管逻辑和通用功能（不连某个具体 App）；**集群节点（Cluster nodes）** 用于多台 n8n 组成集群；**凭据（Credentials）** 存各种服务的登录信息；**社区节点（Community nodes）** 是社区开发者做的额外节点。
{% endhint %}

本部分包含节点[^1]库：n8n 中每个内置节点的参考文档，以及它们的凭据。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/nqwVeyXZtOyDsX8afllD/" %}

## 核心节点（Core nodes）

核心节点可以是动作（actions）或触发器（triggers）[^2]。大多数节点连接的是某个特定的外部服务，而核心节点提供的是逻辑、调度或通用 API 调用等功能。

## 集群节点（Cluster nodes）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/nQYOCBZiuZBtHlBAOFq9/" %}

## 凭据（Credentials）

外部服务需要一种方式来识别和认证用户。这些数据可以是 API 密钥（API key）、邮箱/密码组合，甚至是一段很长的多行私钥。你可以把这些数据以凭据[^3]的形式保存在 n8n 中。

然后，n8n 中的节点就可以请求这些凭据信息。作为另一层安全防护，只有具有特定访问权限的节点类型才能访问这些凭据。

为了确保数据安全，凭据会加密后保存在数据库中。n8n 使用一个随机的个人加密密钥，它在 n8n 首次运行时自动生成，并保存在 `~/.n8n/config` 下。

想了解更多关于创建、管理和共享凭据的内容，请参阅 [管理凭据（Manage credentials）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/create-and-edit-credentials)。

## 社区节点（Community nodes）

n8n 支持由社区构建的自定义节点。安装和使用这些节点的指南，请参阅 [社区节点（Community nodes）](../community-nodes/installation-and-management/README.md)。

如果你需要帮助构建自己的自定义节点，并将其发布到 [npm](https://www.npmjs.com/)，请参阅 [创建节点（Creating nodes）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/create-nodes/overview) 了解更多信息。

[^1]: 在 n8n 中，节点（nodes）是你组合起来创建工作流的各个独立组件。节点定义工作流何时运行，允许你获取、发送和处理数据，可以定义流程控制逻辑，并与外部服务连接。
[^2]: 触发器节点（trigger node）是一种特殊节点，负责在满足某些条件时执行工作流。所有生产环境的工作流至少需要一个触发器，来决定工作流应该在何时运行。
[^3]: 在 n8n 中，凭据（credentials）存储用于连接特定应用和服务的认证信息。在创建包含你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）的凭据后，你可以使用关联的应用节点与服务交互。
