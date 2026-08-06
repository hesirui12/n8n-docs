---
title: Elastic Security 凭证（Elastic Security credentials）
description: >-
  Elastic Security 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Elastic Security。
contentType:
  - integration
  - reference
nodeTitle: Elastic Security 凭证（Elastic Security credentials）
originalFilePath: integrations/builtin/credentials/elasticsecurity.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/elasticsecurity'
url: 'https://docs.n8n.io/integrations/builtin/credentials/elasticsecurity'
layout:
  description:
    visible: false
---

# Elastic Security 凭证（Elastic Security credentials）

> **大白话**：Elastic Security 是 Elastic 家的安全分析产品（SIEM，用来分析安全日志、检测威胁）。n8n 连它有两种方式：**Basic auth**（账号密码）或 **API Key**。不管哪种，都要填你的 Elasticsearch 应用端点作为 **Base URL**。

你可以使用这些凭证来认证以下节点：

- [Elastic Security](../app-nodes/n8n-nodes-base.elasticsecurity.md)

## 前置条件（Prerequisites）

- 创建一个 [Elastic Security](https://www.elastic.co/security) 账号。
- [部署（Deploy）](https://www.elastic.co/guide/en/cloud/current/ec-create-deployment.html)一个应用。

## 支持的认证方式（Supported authentication methods）

- Basic auth（基础认证）
- API Key

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Elastic Security 的文档](https://www.elastic.co/guide/en/security/current/es-overview.html)。

## 使用 Basic auth（Using basic auth）

要配置这个凭证，你需要：

- 一个 **Username**（用户名）：用于登录 Elasticsearch 的用户账号。
- 一个 **Password**（密码）：用于登录 Elasticsearch 的用户账号。
- 你 Elasticsearch 应用的 **Base URL**（基础地址，也叫 Elasticsearch 应用端点）：

    1. 在 Elasticsearch 中，选择 **Manage this deployment**（管理此部署）。
    2. 在 **Applications**（应用）区域，复制 **Elasticsearch** 应用的端点地址。
    3. 把它作为 **Base URL** 填入 n8n。

{% hint style="info" %}
**自定义端点别名（Custom endpoint aliases）**

如果你给部署添加了[自定义端点别名](https://www.elastic.co/guide/en/cloud/current/ec-regional-deployment-aliases.html)，请把 n8n 凭证中的 **Base URL** 更新为新端点。
{% endhint %}

## 使用 API key（Using API key）

要配置这个凭证，你需要：

- 一个 **API Key**：用于你登录 Elasticsearch 的用户账号。更多信息请参考 Elasticsearch 的[创建 API key 文档](https://www.elastic.co/guide/en/elasticsearch/reference/current/security-api-create-api-key.html)。
- 你 Elasticsearch 应用的 **Base URL**（基础地址，也叫 Elasticsearch 应用端点）：

    1. 在 Elasticsearch 中，选择 **Manage this deployment**（管理此部署）。
    2. 在 **Applications**（应用）区域，复制 **Elasticsearch** 应用的端点地址。
    3. 把它作为 **Base URL** 填入 n8n。
