---
title: SearXNG 凭证
description: >-
  SearXNG 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  SearXNG 的身份。
contentType:
  - integration
  - reference
nodeTitle: SearXNG credentials
originalFilePath: integrations/builtin/credentials/searxng.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/searxng'
url: 'https://docs.n8n.io/integrations/builtin/credentials/searxng'
layout:
  description:
    visible: false
---

# SearXNG 凭证

{% hint style="info" %}
**大白话**：SearXNG 是一个「尊重隐私的元搜索引擎」，自己部署后可以同时搜多个搜索引擎而不被跟踪（常用于给 AI Agent 当搜索工具）。n8n 连它非常简单，只需要一个 **API URL**：填上你自己部署的 SearXNG 实例地址，并且确保 n8n 能访问到它。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [SearXNG Tool（工具）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolsearxng.md)

## 支持的验证方式

* API URL（API 地址）

## 相关资源

关于该服务的更多信息，请参考 [SearXNG 官方文档](https://docs.searxng.org/index.html)。

## 使用 API URL（API 地址）

要配置这个凭证，你需要一个运行中、且地址能被 n8n 访问到的 SearXNG 实例：

- **API URL**：你想连接的 SearXNG 实例的 URL 地址。

关于运行该服务的更多信息，请参考 [SearXNG 管理员文档](https://docs.searxng.org/admin/index.html)。
