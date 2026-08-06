---
title: Weaviate 凭证
description: >-
  Weaviate 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Weaviate 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Weaviate credentials
originalFilePath: integrations/builtin/credentials/weaviate.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/weaviate'
url: 'https://docs.n8n.io/integrations/builtin/credentials/weaviate'
layout:
  description:
    visible: false
---

# Weaviate 凭证

> **大白话**：Weaviate 是向量数据库（给 AI 存"记忆"用的）。连它有两种方式：用官方云服务（Weaviate Cloud，最简单，还有免费沙盒试用）或自己部署服务器（Custom Connection，要填一堆主机、端口参数）。

你可以使用这些凭证对以下节点进行身份验证：

* [Weaviate Vector Store](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreweaviate.md)

## 支持的认证方式

- API key（API 密钥）

## 相关资源

更多关于如何连接 Weaviate 的信息，请参考 [Weaviate 的连接文档](https://docs.weaviate.io/weaviate/connections)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key

### 连接类型：Weaviate Cloud

创建你的 [Weaviate Cloud 数据库](https://docs.weaviate.io/cloud/quickstart)，并[按照这些说明](https://docs.weaviate.io/cloud/quickstart#13-connect-to-your-weaviate-cloud-instance)从你的 Weaviate Cloud 数据库获取以下参数值：

* **Weaviate Cloud Endpoint**（Weaviate 云端点）
* **Weaviate Api Key**（Weaviate API 密钥）

注意：Weaviate 提供免费的沙盒环境供测试使用。

### 连接类型：Custom Connection（自定义连接）

对于这种连接类型，你需要[自己部署 Weaviate](https://docs.weaviate.io/deploy) 到服务器上，并配置好让 n8n 能够访问。更多关于创建和使用 API key 的信息，请参考 [Weaviate 的认证文档](https://docs.weaviate.io/deploy/configuration/authentication#api-key-authentication)。

然后你可以为自定义连接提供以下参数：

* **Weaviate Api Key**：你的 Weaviate API 密钥。
* **Custom Connection HTTP Host**：用于 HTTP API 调用的 Weaviate 实例域名或 IP 地址。
* **Custom Connection HTTP Port**：Weaviate 实例用于 HTTP API 调用的端口，默认为 8080。
* **Custom Connection HTTP Secure**：HTTP API 调用是否通过 HTTPS 连接 Weaviate。
* **Custom Connection gRPC Host**：用于 gRPC 的 Weaviate 实例主机名或 IP 地址。
* **Custom Connection gRPC Port**：Weaviate 实例的 gRPC API 端口，默认为 50051。
* **Custom Connection gRPC Secure**：gRPC 调用是否通过 HTTPS 连接 Weaviate。

如需社区支持，请参考 [Weaviate 论坛](https://forum.weaviate.io/)。
