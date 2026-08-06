---
title: Xata 凭证
description: >-
  Xata 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Xata 进行身份验证。
contentType:
  - integration
  - reference
nodeTitle: Xata credentials
originalFilePath: integrations/builtin/credentials/xata.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/xata'
url: 'https://docs.n8n.io/integrations/builtin/credentials/xata'
layout:
  description:
    visible: false
---

# Xata 凭证

> **大白话**：Xata 是云数据库（给 AI 应用存数据、存记忆用的）。连它要填三样：**Database Endpoint（数据库地址）**——格式是 `https://{工作区名}-{工作区ID}.{地区}.xata.sh/db/{数据库名}`，照着填就行；**Branch（分支）**——填你数据库对应的 GitHub 分支名；**API Key（API 密钥）**——在 [Account Settings](https://app.xata.io/settings) 里点 **+ Add a key** 生成。

你可以使用这些凭证对以下节点进行身份验证：

* [Xata](../cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryxata.md)

## 前提条件

创建一个 [Xata](https://xata.io/) 数据库，或在现有数据库上创建一个账户。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Xata 的文档](https://xata.io/docs/rest-api/authentication)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key

要配置此凭证，你需要：

- **Database Endpoint**（数据库地址）：Workspace API（工作区 API）要求你用这种格式标识你要查询的数据库：`https://{workspace-display-name}-{workspace-id}.{region}.xata.sh/db/{dbname}`。更多信息请参考 [Workspace API](https://xata.io/docs/rest-api#workspace-api)。
    - `{workspace-display-name}`：工作区显示名称，是可选的标识符。API 会忽略它，但如果你保存多个凭证，加上它可以更容易分辨这个数据库属于哪个工作区。
    - `{workspace-id}`：工作区的唯一 ID，6 个字母数字字符。
    - `{region}`：数据库所在的托管区域。这个值必须与数据库的地区配置一致。
    - `{dbname}`：你要操作的数据库名称。
- 一个 **Branch**（分支）：输入你数据库对应的 GitHub 分支名称。
- 一个 **API Key**（API 密钥）：要生成 API 密钥，进入 [**Account Settings**](https://app.xata.io/settings)，点击 **+ Add a key**。更多信息请参考 [Generate an API Key](https://xata.io/docs/rest-api#generate-an-api-key)。
