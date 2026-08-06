---
description: n8n 性能和资源消耗基准测试。
contentType: explanation
nodeTitle: 测量性能（Measure performance）
originalFilePath: hosting/scaling/performance-benchmarking.md
originalUrl: 'https://docs.n8n.io/hosting/scaling/performance-benchmarking'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/measure-performance'
layout:
  description:
    visible: false
---

# 性能与基准测试（Performance and benchmarking）

n8n 在单个实例上每秒可以处理多达 220 次工作流执行，并且可以通过增加更多实例进一步扩容。

本文档概述了 n8n 的性能基准测试。它描述了影响性能的因素，并包含两个示例基准测试。

{% hint style="info" %}
**大白话**：这一页告诉你 n8n 到底能跑多快、哪些因素会影响速度，以及两个官方实测例子（单实例 vs 多实例）。如果你关心「n8n 能不能扛住我的业务量」，先看这一页再决定要不要上队列模式多开几个实例。
{% endhint %}

## 影响性能的因素（Performance factors）

n8n 的性能取决于以下因素：

* 工作流的类型
* n8n 可用的资源
* 你如何配置 n8n 的扩展选项

## 运行你自己的基准测试（Run your own benchmarking）

要针对你的使用场景获得准确的估算，请运行 n8n 的[基准测试框架（benchmarking framework）](https://github.com/n8n-io/n8n/tree/master/packages/%40n8n/benchmark)。该仓库中包含更多关于基准测试的信息。

## 示例：单实例性能（Example: Single instance performance）

该测试衡量的是随着每秒请求数增加，响应时间如何增长。它测试的是调用 Webhook 触发器节点时的响应时间。

测试环境（Setup）：

- 硬件：ECS c5a.large 实例（4GB 内存）
- n8n 配置：单个 n8n 实例（以 main 模式运行，使用 Postgres 数据库）
- 工作流：Webhook 触发器节点 + 编辑字段（Edit Fields）节点

<figure markdown>
  <img src="../../../.gitbook/assets/benchmarking-single-instance-100-250.png" alt="">
  <figcaption>这张图显示了发送到 Webhook 触发器节点的请求中，在 100 秒内获得响应的比例，以及该比例如何随负载变化。在较高负载下，n8n 通常仍会处理数据，但响应时间会超过 100 秒。</figcaption>
</figure>

## 示例：多实例性能（Example: Multi-instance performance）

该测试衡量的是随着每秒请求数增加，响应时间如何增长。它测试的是调用 Webhook 触发器节点时的响应时间。

测试环境（Setup）：

- 硬件：七台 ECS c5a.4xlarge 实例（每台 8GB 内存）
- n8n 配置：两个 webhook 实例、四个 worker 实例、一个数据库实例（MySQL）、一个同时运行 n8n 和 Redis 的主实例
- 工作流：Webhook 触发器节点 + 编辑字段（Edit Fields）节点
- 多实例配置使用[队列模式（Queue mode）](enable-queue-mode.md)

<figure markdown>
  <img src="../../../.gitbook/assets/benchmarking-multi-instance-500-2500.png" alt="">
  <figcaption>这张图显示了发送到 Webhook 触发器节点的请求中，在 100 秒内获得响应的比例，以及该比例如何随负载变化。在较高负载下，n8n 通常仍会处理数据，但响应时间会超过 100 秒。</figcaption>
</figure>

{% hint style="info" %}
**小白对比总结**：单实例（4GB 内存）在压力增大时响应会明显变慢；多实例（7 台机器、队列模式）能承受高得多的吞吐量。如果你的业务是「Webhook 一进来就要马上处理」且量很大，建议参考多实例方案（webhook 进程 + worker + Redis + 数据库分开部署）。
{% endhint %}
