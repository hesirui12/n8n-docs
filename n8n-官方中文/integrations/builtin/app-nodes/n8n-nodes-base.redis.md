---
title: Redis 节点文档
description: >-
  学习如何在 n8n 中使用 Redis 节点。按照技术文档将 Redis
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Redis 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.redis.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.redis'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.redis'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Redis 是一款超快的内存数据库，常用来做缓存、计数器、消息发布/订阅（pub/sub）。用这个节点，你可以在 n8n 里对 Redis 执行删除键、读写键值、给键加一、按模式查键等操作，还能往 Redis 频道发布消息，比如「记录接口调用次数」或「把数据缓存起来供其它系统读取」。
{% endhint %}

# Redis 节点

使用 Redis 节点来自动化你在 Redis 中的工作，并把它与其它应用集成。n8n 内置支持 Redis 的大量功能，包括删除键（key）、获取键的值、设置键的值，以及向 Redis 频道发布消息。

在本页你可以看到 Redis 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Redis 凭证](../credentials/redis.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* Delete a key from Redis（从 Redis 删除一个键）
* Get the value of a key from Redis（获取 Redis 中某个键的值）
* Returns generic information about the Redis instance（返回 Redis 实例的通用信息）
* Atomically increments a key by 1. Creates the key if it doesn't exist（把某个键原子地加 1；键不存在时会自动创建）
* Returns all the keys matching a pattern（返回匹配某个模式的全部键）
* Set the value of a key in Redis（设置 Redis 中某个键的值）
* Publish message to Redis channel（向 Redis 频道发布消息）

## 模板与示例（Templates and examples）

[浏览 Redis 节点文档集成模板](https://n8n.io/integrations/redis)，或[搜索全部模板](https://n8n.io/workflows/)。
