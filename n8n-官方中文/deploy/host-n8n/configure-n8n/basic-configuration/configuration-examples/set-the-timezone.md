---
title: 设置自托管实例的时区
description: 更改自托管 n8n 实例的默认时区。
contentType: howto
nodeTitle: 设置时区
originalFilePath: hosting/configuration/configuration-examples/time-zone.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/configuration-examples/time-zone'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/set-the-timezone
layout:
  description:
    visible: false
---

# 设置自托管实例的时区 / Set the self-hosted instance timezone

默认时区是 America/New_York（纽约）。例如，Schedule（定时）节点用这个时区来判断工作流应该在什么时间启动。要设置不同的默认时区，请把 `GENERIC_TIMEZONE` 设置为合适的值。例如，如果你想设置成柏林（德国）的时区：

```bash
export GENERIC_TIMEZONE=Europe/Berlin
```

{% hint style="info" %}
**大白话**：时区就是「地球哪个地区的标准时间」。定时节点（Schedule Trigger）的「每天几点几分跑」就是按时区算的。n8n 默认按纽约时间（美国东部）算——如果你不在这个时区，你会发现定时触发的时间「对不上号」：你以为早上 8 点跑，其实是纽约的早上 8 点（= 北京时间晚上 8 点）。所以**部署 n8n 后第一件事，建议就是把时区改成你自己的**，否则所有定时任务都会跑偏。
{% endhint %}

你可以在[这里](https://momentjs.com/timezone/)找到你所在时区的名称。

{% hint style="info" %}
**国内部署提示**：中国用户请设置为 `Asia/Shanghai`（北京时间），即：

```bash
export GENERIC_TIMEZONE=Asia/Shanghai
```

时区名称使用标准的 IANA 时区名（格式是「大洲/城市」），比如 `Asia/Shanghai`、`Asia/Hong_Kong`、`Asia/Taipei`、`Europe/Berlin`。除了在环境变量里设置，别忘了：如果你的服务器系统时区本身不是北京时间（比如云服务器默认是 UTC），定时任务还可能受系统时区影响，可以一并把系统时区改成 Asia/Shanghai。另外，docker-compose 部署时也可以设置 `TZ=Asia/Shanghai` 环境变量（影响容器内的系统时间）。
{% endhint %}

关于此变量的更多信息，请参阅[环境变量参考](../use-environment-variables/timezone-and-localization.md)。
