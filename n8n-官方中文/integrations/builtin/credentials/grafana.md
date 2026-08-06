---
title: Grafana 凭证
description: >-
  Grafana 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Grafana 的身份。
contentType:
  - integration
  - reference
nodeTitle: Grafana credentials
originalFilePath: integrations/builtin/credentials/grafana.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/grafana'
url: 'https://docs.n8n.io/integrations/builtin/credentials/grafana'
layout:
  description:
    visible: false
---

# Grafana 凭证

{% hint style="info" %}
**大白话**：Grafana 是看监控数据、做可视化仪表盘的工具。n8n 想自动读你的监控数据（比如自动导出报表、出故障时发通知），需要两样东西：一把 **API Key（API 密钥）**（在 Grafana 后台创建）和你的 Grafana **Base URL（基础地址）**，比如 `https://n8n.grafana.net`。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Grafana](../app-nodes/n8n-nodes-base.grafana.md)

## 准备工作

- 创建一个 [Grafana](https://grafana.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于如何向该服务做身份验证，请参考 [Grafana 官方 API 文档](https://grafana.com/docs/grafana/latest/developers/http_api/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：创建 API key 的详细步骤请参考 [创建 API key 文档](https://grafana.com/docs/grafana/latest/administration/api-keys/#create-an-api-key)。
- 你的 Grafana 实例的 **Base URL（基础地址）**，例如：`https://n8n.grafana.net`。
