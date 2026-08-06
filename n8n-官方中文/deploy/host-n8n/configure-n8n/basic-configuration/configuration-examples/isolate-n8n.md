---
title: 隔离 n8n
description: 阻止你的 n8n 实例与 n8n 官方服务器通信。
contentType: howto
nodeTitle: 隔离 n8n
originalFilePath: hosting/configuration/configuration-examples/isolation.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/configuration-examples/isolation'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/isolate-n8n
layout:
  description:
    visible: false
---

# 隔离 n8n / Isolate n8n

默认情况下，自托管的 n8n 实例会向 n8n 官方的服务器发送一些数据。它用这些连接来通知用户可用的更新（updates）、工作流模板（workflow templates）和诊断信息（diagnostics）。

{% hint style="info" %}
**大白话**：n8n 默认会「联网」跟官方服务器通信，主要有三件事：①检查并提示有新版本（类似手机 App 的更新提醒）；②拉取官方模板库的数据（模板加载）；③上报诊断信息（比如版本号、系统环境等，帮助官方改进产品）。这些数据一般不含你的工作流内容，但如果你有严格的安全要求（比如内网部署、数据不能出域），就需要把这三条通道全部关掉——这就是「隔离」。
{% endhint %}

要阻止你的 n8n 实例连接 n8n 官方服务器，请把这些环境变量设置为 `false`：

```
N8N_DIAGNOSTICS_ENABLED=false
N8N_VERSION_NOTIFICATIONS_ENABLED=false
N8N_TEMPLATES_ENABLED=false
```

{% hint style="info" %}
**大白话**：三条设置分别是三个开关，逐一对应上面说的三件事：`N8N_DIAGNOSTICS_ENABLED=false` 关闭诊断信息上报；`N8N_VERSION_NOTIFICATIONS_ENABLED=false` 关闭版本更新通知；`N8N_TEMPLATES_ENABLED=false` 关闭模板功能（模板数据也就不再拉取了）。注意：模板被关闭后，编辑器里「使用模板」的入口就没了——如果你还需要模板，请看本目录下「配置自定义工作流模板库」那一页，把模板源换成你自己的服务器。
{% endhint %}

清除 n8n 的诊断配置：

```
EXTERNAL_FRONTEND_HOOKS_URLS=
N8N_DIAGNOSTICS_CONFIG_FRONTEND=
N8N_DIAGNOSTICS_CONFIG_BACKEND=
```

{% hint style="info" %}
**大白话**：上面这三个变量是「诊断配置」的补充项。如果它们曾经被设置过值，就要把它们**清空**（等号后面什么都不填），否则 n8n 可能仍然会尝试连接官方服务器。设置空值就等于把这些配置删掉。`N8N_DIAGNOSTICS_CONFIG_FRONTEND` / `N8N_DIAGNOSTICS_CONFIG_BACKEND` 是前后端的诊断配置（一般没人设置），`EXTERNAL_FRONTEND_HOOKS_URLS` 是外部前端钩子网址（一般也没人设置）。总之：保险起见，把这三个一起清空即可，确保 n8n 彻底「断联」。
{% endhint %}

{% hint style="info" %}
**国内部署提示**：国内网络访问 n8n 官方服务器可能不稳定或超时，这有时会导致：①编辑器启动变慢（卡在加载模板）；②日志里出现连接超时的报错。如果你不需要官方模板和更新提示，直接按本页方法全部关掉，n8n 运行会更「干净」、更快，也彻底避免了数据出境。关掉后 n8n 的日常使用（建工作流、跑流程）完全不受影响。
{% endhint %}

关于这些变量的更多信息，请参阅[环境变量参考](../use-environment-variables/deployment.md)。
