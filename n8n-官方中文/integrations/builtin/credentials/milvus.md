---
title: Milvus 凭证
description: >-
  Milvus 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Milvus 的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Milvus credentials
originalFilePath: integrations/builtin/credentials/milvus.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/milvus'
url: 'https://docs.n8n.io/integrations/builtin/credentials/milvus'
layout:
  description:
    visible: false
---

# Milvus 凭证

> **大白话**：Milvus 是开源的向量数据库（存 AI 嵌入向量的）。在 n8n 里连它，填三个默认值就能跑：地址 `http://localhost:19530`、用户名 `root`、密码 `Milvus`。

你可以使用这些凭证来验证以下节点的身份：

* [Milvus Vector Store](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremilvus.md)

## 前提条件

创建并运行一个 [Milvus](https://milvus.io/) 实例。更多信息请参考[安装 Milvus](https://milvus.io/docs/install-overview.md)。

## 支持的认证方式

- Basic auth（账号密码认证）

## 相关资源

关于如何设置认证的更多信息，请参考 [Milvus 的认证文档](https://milvus.io/docs/authenticate.md?tab=docker#Authenticate-User-Access)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 Basic auth（账号密码认证）

要配置这个凭证，你需要：

* **Base URL（基础地址）**：你的 Milvus 实例的基础地址。默认是 `http://localhost:19530`。
* **Username（用户名）**：用于登录你的 Milvus 实例的用户名。默认值是 `root`。
* **Password（密码）**：用于登录你的 Milvus 实例的密码。默认值是 `Milvus`。
