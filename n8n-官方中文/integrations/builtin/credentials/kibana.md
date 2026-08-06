---
title: Kibana 凭证
description: >-
  Kibana 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Kibana 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Kibana credentials
originalFilePath: integrations/builtin/credentials/kibana.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/kibana'
url: 'https://docs.n8n.io/integrations/builtin/credentials/kibana'
layout:
  description:
    visible: false
---

# Kibana 凭证

{% hint style="info" %}
**大白话**：Kibana 是 Elasticsearch 的可视化面板，把日志和数据变成图表、仪表盘给人看。n8n 连它走最简单的 **Basic auth（账号密码）**：填你访问 Kibana 的网址 + 登录 Elastic 的用户名密码就行。注意：这个凭证只给「自定义 API 操作」用，n8n 没有现成的 Kibana 节点。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

- 创建一个 [Elasticsearch](https://www.elastic.co/) 账号。
- 如果你要新建账号来测试，先往 Kibana 里加载一些示例数据。更多信息请参考 [Kibana 快速入门](https://www.elastic.co/guide/en/kibana/current/get-started.html)。

## 支持的验证方式

- Basic auth（基本认证，账号密码）

## 相关资源

关于该服务的更多信息，请参考 [Kibana 的 API 文档](https://www.elastic.co/guide/en/kibana/current/api.html)。

这是一个仅用于凭证的节点，没有对应的操作节点。关于如何通过「自定义 API 操作」使用它，请参考[现有节点的自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。也可以到 n8n 官网查看 [示例工作流和相关内容](https://n8n.io/integrations/kibana/)。

## 使用 Basic auth（基本认证）

要配置这个凭证，你需要准备：

- 你访问 Kibana 用的 **URL（网址）**，例如 `http://localhost:5601`
- **Username（用户名）**：使用你登录 Elastic 时用的同一个用户名。
- **Password（密码）**：使用你登录 Elastic 时用的同一个密码。
