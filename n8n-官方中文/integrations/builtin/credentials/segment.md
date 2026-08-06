---
title: Segment 凭证
description: >-
  Segment 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Segment。
contentType:
  - integration
  - reference
nodeTitle: Segment 凭证
originalFilePath: integrations/builtin/credentials/segment.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/segment'
url: 'https://docs.n8n.io/integrations/builtin/credentials/segment'
layout:
  description:
    visible: false
---

# Segment 凭证

> **大白话**：Segment 是一个「数据收集管道」，帮你把用户行为数据收集起来再发送到各种分析工具。这篇文档教你怎么在 n8n 里配置凭证，让 n8n 能把事件数据发到 Segment。

你可以使用这些凭证来验证以下节点：

- [Segment](../app-nodes/n8n-nodes-base.segment.md)

## 前置条件

先创建一个 [Segment](https://segment.com/) 账号。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参阅 [Segment 的 Sources 文档](https://segment.com/docs/connections/sources/)。

## 使用 API key（API 密钥）

要配置此凭证，你需要准备：

- **Write Key（写入密钥）**：要获取 Write Key，请前往 **Sources > Add Source（数据源 > 添加数据源）**。添加一个 **Node.js** 类型的数据源，然后复制该数据源的 write key，填入 n8n 凭证中。

更多信息请参阅 [查找你的 Write Key](https://segment.com/docs/connections/find-writekey/)。
