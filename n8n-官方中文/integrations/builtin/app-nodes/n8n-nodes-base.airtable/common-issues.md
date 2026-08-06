---
title: Airtable 节点常见问题
description: >-
  n8n（工作流自动化平台）中 Airtable 节点的常见问题与解答文档，包括问题详情和
  建议的解决方案。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Airtable 节点常见问题
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.airtable/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtable/common-issues
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这一页收集了用 Airtable 节点时最容易踩的两个坑：一是提示「Forbidden（禁止访问）」，多半是 API 密钥权限不够；二是「请求太多」（429 错误），因为 Airtable 对免费/个人令牌的请求速度有限制。遇到别慌，照着下面的检查步骤排查就行。
{% endhint %}

# Airtable 节点常见问题

以下是 [Airtable 节点](README.md) 的常见错误和问题，以及排查或解决步骤。

## Forbidden - perhaps check your credentials（禁止访问——请检查你的凭证）

当你尝试执行当前访问级别不允许的操作时，会显示这个错误。完整的报错文字大致如下：

```
There was a problem loading the parameter options from server: "Forbidden - perhaps check your credentials?"
```

（翻译：从服务器加载参数选项时出现问题："禁止访问——请检查你的凭证？"）

这个错误最常出现的原因是：你使用的凭证（API 密钥/令牌）在你尝试管理的资源上，不具备所需的权限范围（scopes）。

更多信息请参考 [Airtable 凭证](../../credentials/airtable.md) 和 [Airtable 的 scopes 文档](https://airtable.com/developers/web/api/scopes)。

## Service is receiving too many requests from you（服务收到太多来自你的请求）

Airtable 对使用个人访问令牌（personal access tokens）发出的请求数量有硬性 API 限制。

如果对同一个 base 每秒发送超过 5 个请求，你会收到 429 错误，表示请求过于频繁。你需要等待 30 秒才能继续请求。同一限制也适用于：每个访问令牌在所有 base 上合计每秒超过 50 个请求。

更多细节见 [Airtable 的速率限制文档](https://airtable.com/developers/web/api/rate-limits)。如果你在用 Airtable 节点时频繁触发速率限制，可以参考[处理速率限制](../../handle-rate-limits.md)页面上的建议来优化。
