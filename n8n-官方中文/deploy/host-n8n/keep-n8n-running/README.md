---
layout:
  description:
    visible: false
---
# 保持 n8n 正常运行（Keep n8n running）

{% content-ref url="set-up-logging.md" %}
[set-up-logging.md](set-up-logging.md)
{% endcontent-ref %}

{% content-ref url="monitor-n8n.md" %}
[monitor-n8n.md](monitor-n8n.md)
{% endcontent-ref %}

{% content-ref url="visualize-metrics-with-grafana.md" %}
[visualize-metrics-with-grafana.md](visualize-metrics-with-grafana.md)
{% endcontent-ref %}

{% content-ref url="update-n8n.md" %}
[update-n8n.md](update-n8n.md)
{% endcontent-ref %}

{% content-ref url="trace-executions-with-opentelemetry.md" %}
[trace-executions-with-opentelemetry.md](trace-executions-with-opentelemetry.md)
{% endcontent-ref %}

{% hint style="info" %}
**小白提示**：这一章讲的是"运维"——n8n 装好之后，怎么让它一直好好跑着：看日志（logging）、监控健康状态（monitoring）、用 Grafana 可视化指标、升级版本（update），以及用 OpenTelemetry 追踪每次执行的详细过程。生产环境跑业务之前，建议至少先把"日志"和"监控"这两件事做好。
{% endhint %}
