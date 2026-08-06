---
contentType: overview
nodeTitle: 扩展集群（Scaling）
originalFilePath: hosting/scaling/overview.md
originalUrl: 'https://docs.n8n.io/hosting/scaling/overview'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling'
layout:
  description:
    visible: false
---

# 扩展 n8n（Scaling n8n）

当你在大规模场景下运行 n8n（大量用户、大量工作流、大量执行记录）时，你需要调整 n8n 的配置来保证良好的性能。

{% hint style="info" %}
**小白提示**：什么时候需要考虑「扩展」？当你的 n8n 出现以下情况时：同时在线操作的人很多、工作流数量巨大、每秒钟要执行很多次工作流、服务器内存或 CPU 长期吃紧、定时任务经常延误。个人使用阶段通常不需要，等业务量上来再按本文思路调整。
{% endhint %}

根据你的需求，n8n 可以运行在不同的[模式](scaling/enable-queue-mode.md)下。**队列模式（queue mode）** 提供了最佳的可扩展性。配置细节请参见 [队列模式（Queue mode）](scaling/enable-queue-mode.md)。

{% hint style="info" %}
**小白提示**：队列模式的大致思路：把「跑工作流」这个体力活交给一批专门的「工人进程」（workers），主进程只负责调度和派活，任务通过消息队列（Redis 等）分发。这样业务量大了以后，只要多启动几个 worker，就能水平扩展处理能力。代价是部署结构更复杂，所以只有规模真的大了才值得上。
{% endhint %}

你可以配置数据保存与清理（pruning）策略来提升数据库性能。细节请参见 [执行数据（Execution data）](scaling/manage-execution-data.md)。

{% hint style="info" %}
**小白提示**：n8n 默认会保存每一次工作流执行的输入/输出数据，时间久了数据库会越变越大、越来越慢。通过配置「数据保留策略」（比如只保留最近 N 天、执行成功的不保留数据等）可以给数据库瘦身，显著提升性能。
{% endhint %}
