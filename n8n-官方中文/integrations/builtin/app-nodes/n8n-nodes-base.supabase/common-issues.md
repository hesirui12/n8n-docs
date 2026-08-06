---
title: Supabase 节点常见问题
contentType:
  - integration
  - reference
priority: high
nodeTitle: Supabase 节点常见问题
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.supabase/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.supabase/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.supabase/common-issues
description: >-
  关于 n8n 中 Supabase 节点的常见问题和疑问的文档，一个工作流自动化平台。
  包含问题详情和建议的解决方案。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

{% hint style="info" %}
**大白话**：这一页收集了用 Supabase 节点时最常踩的几个坑：①怎么按元数据（metadata）过滤行数据；②Docker 里跑 Supabase 连不上怎么办；③为什么用 Postgres 能查到数据、用 Supabase 节点却查不到（多半是行级安全 RLS 策略挡住了）。照着下面一步步改就行。
{% endhint %}

# 常见问题

这里收集了 [Supabase 节点](./README.md) 的一些常见报错和问题，以及解决或排查的步骤。

## 按元数据（metadata）过滤行

要按 [Supabase 元数据](https://supabase.com/docs/guides/ai/python/metadata) 过滤行，请把 **Select Type（选择类型）** 设置为 **String（字符串）**。

然后，你可以在 **Filters (String)（筛选，字符串）** 参数里构造查询，用 [Supabase 元数据查询语言](https://supabase.com/docs/guides/ai/python/metadata#metadata-query-language) 过滤元数据。这种写法借鉴了 [MongoDB 选择器](https://www.mongodb.com/docs/manual/reference/operator/query/) 的格式。访问元数据属性时，使用 [Postgres 的 `->>` 箭头 JSON 运算符](https://www.postgresql.org/docs/current/functions-json.html#FUNCTIONS-JSON-PROCESSING)，格式如下（花括号表示你要填的内容）：

```
metadata->>{your-property}={comparison-operator}.{comparison-value}
```

例如，想读取元数据里的 `age` 属性、返回大于等于 21 的结果，可以在 **Filters (String)** 字段里填：

```
metadata->>age=gte.21
```

你可以把这些运算符组合起来，构造更复杂的查询。

## Docker 环境下连不上本地 Supabase 数据库

当你在 Docker 里跑 Supabase 时，需要配置网络，让 n8n 能连上 Supabase。

具体解决办法取决于这两个组件各自怎么部署。

### 只有 Supabase 在 Docker 里

如果只有 Supabase 在 Docker 里跑，[自托管指南](https://supabase.com/docs/guides/self-hosting/docker) 使用的 Docker Compose 文件已经把 Supabase 绑定到了正确的网络接口。

配置 [Supabase 凭证](../../credentials/supabase.md) 时，`localhost` 地址应该没问题（把 **Host（主机）** 设为 `localhost`）。

### Supabase 和 n8n 分别在两个 Docker 容器里

如果 n8n 和 Supabase 分别运行在两个 Docker 容器里，可以用 Docker 网络把它们连起来。

在容器里把 Supabase 绑定到 `0.0.0.0`，让它监听所有网络接口（官方的 [Docker Compose 配置](https://supabase.com/docs/guides/self-hosting/docker) 已经这么做了）。如果你没有把两者放在同一个 Docker Compose 文件里管理，请把 Supabase 和 n8n 的组件都加到同一个[用户自定义桥接网络](https://docs.docker.com/engine/network/drivers/bridge/)中。

配置 [Supabase 凭证](../../credentials/supabase.md) 时，主机地址用 Supabase API 网关容器的名称（默认是 `supabase-kong`），而不是 `localhost`。例如，使用默认配置时，把 **Host（主机）** 设为 `http://supabase-kong:8000`。

## 用 Postgres 能查到记录，但 Supabase 查不到

如果用 Supabase 节点查询记录返回空，但通过 [Postgres](../n8n-nodes-base.postgres/README.md) 节点或 Postgres 客户端能查到，那可能是 Supabase 的[行级安全（Row Level Security，RLS）](https://supabase.com/docs/guides/database/postgres/row-level-security) 策略起了冲突。

Supabase 在你用 Table Editor（表编辑器）在 public schema 下创建表时，总是会启用 RLS。RLS 开启时，在你创建策略（policy）之前，API 用公开的 `anon` 密钥不会返回任何数据。这是一种安全措施，确保你只暴露你打算公开的数据。

要以 `anon` 角色访问启用了 RLS 的表里的数据，请[创建策略](https://supabase.com/docs/guides/database/postgres/row-level-security#creating-policies)，放开你打算使用的访问模式。
