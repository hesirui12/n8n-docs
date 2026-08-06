---
title: Elasticsearch 凭证（Elasticsearch credentials）
description: >-
  Elasticsearch 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Elasticsearch。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Elasticsearch 凭证（Elasticsearch credentials）
originalFilePath: integrations/builtin/credentials/elasticsearch.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/elasticsearch'
url: 'https://docs.n8n.io/integrations/builtin/credentials/elasticsearch'
layout:
  description:
    visible: false
---

# Elasticsearch 凭证（Elasticsearch credentials）

> **大白话**：Elasticsearch 是流行的搜索和分析引擎（常用于日志检索、全文搜索）。n8n 连它用「账号密码」认证（Basic auth）：填用户名、密码，再加上你 Elasticsearch 应用的 **Base URL**（接入地址，就是部署里的应用端点）就行。

你可以使用这些凭证来认证以下节点：

- [Elasticsearch](../app-nodes/n8n-nodes-base.elasticsearch.md)

## 支持的认证方式（Supported authentication methods）

- Basic auth（基础认证）

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Elasticsearch 的文档](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)。

## 使用 Basic auth（Using basic auth）

要配置这个凭证，你需要一个带[部署（deployment）](https://www.elastic.co/guide/en/cloud/current/ec-create-deployment.html)的 [Elasticsearch](https://www.elastic.co/) 账号，以及：

- 一个 **Username**（用户名）
- 一个 **Password**（密码）
- 你 Elasticsearch 应用的 **Base URL**（基础地址，也叫 Elasticsearch 应用端点）

设置凭证的步骤：

1. 输入你的 Elasticsearch **Username**（用户名）。
2. 输入你的 Elasticsearch **Password**（密码）。
3. 在 Elasticsearch 中，进入 **Deployments**（部署）。
4. 选择你的部署。
5. 点击 **Manage this deployment**（管理此部署）。
6. 在 **Applications**（应用）区域，复制 **Elasticsearch** 应用的端点地址。
7. 把它作为 **Base URL** 填入 n8n。
8. 默认情况下，n8n 只有在 SSL 证书校验成功时才会连接。如果你希望在 SSL 证书校验失败时也照常连接，请打开 **Ignore SSL Issues**（忽略 SSL 问题）。

{% hint style="info" %}
**自定义端点别名（Custom endpoint aliases）**

如果你给部署添加了[自定义端点别名](https://www.elastic.co/guide/en/cloud/current/ec-regional-deployment-aliases.html)，请把 n8n 凭证中的 **Base URL** 更新为新端点。
{% endhint %}
