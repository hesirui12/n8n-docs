---
layout:
  description:
    visible: false
---
# 观察与日志记录 (Observe and log)

这一部分介绍如何"观察"你的 n8n 实例：查看它的运行状态、把运行日志发到自己的日志系统、以及跟踪工作流的使用情况。

{% hint style="info" %}
**小白解释：什么是"观察与日志记录"？**

n8n 就像一台机器，运行时会不断产生"运行记录"（日志）和"使用数据"（谁、在什么时候、跑了多少次工作流）。"观察与日志记录"就是教你如何查看这些信息，以及如何把这些信息导出到你自己已有的监控工具（比如 Sentry、ELK、Zabbix 等）里，方便统一管理、告警和排错。
{% endhint %}

{% content-ref url="track-usage-with-insights.md" %}
[用 Insights 跟踪使用情况 (track-usage-with-insights.md)](track-usage-with-insights.md)
{% endcontent-ref %}

{% content-ref url="stream-logs-to-external-systems.md" %}
[把日志流式传输到外部系统 (stream-logs-to-external-systems.md)](stream-logs-to-external-systems.md)
{% endcontent-ref %}
