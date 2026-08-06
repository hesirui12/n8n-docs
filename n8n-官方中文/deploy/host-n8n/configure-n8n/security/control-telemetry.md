---
title: 选择退出数据收集
contentType: howto
nodeTitle: 控制遥测
originalFilePath: hosting/securing/telemetry-opt-out.md
originalUrl: https://docs.n8n.io/hosting/securing/telemetry-opt-out
url: https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/control-telemetry
description: 在 n8n 实例上选择退出数据遥测收集。
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

# 控制遥测 / Control telemetry

n8n 会从自托管的 n8n 安装实例收集匿名的遥测数据（telemetry data）。你可以选择退出数据遥测收集。

{% hint style="info" %}
**大白话**：遥测（telemetry）就是软件「自己上报使用情况」的功能，有点类似很多软件里的「发送匿名诊断数据帮助改进产品」。n8n 默认开着这个功能，会向官方服务器发送一些匿名数据（比如你用了什么版本、节点用得多的信息等，一般不含工作流内容和个人数据）。如果你有隐私顾虑或合规要求（比如公司规定数据不能出境），可以按本页方法把它关掉。下面是具体的关闭方法。
{% endhint %}

## 收集的数据 / Collected data

关于 n8n 收集哪些数据的详细信息，请参阅 [隐私 | 自托管 n8n 中的数据收集](https://app.gitbook.com/s/ukPPOMQ6NId4gpAIkPXa/#data-collection-in-self-hosted-n8n)。

## 收集机制 / How collection works

n8n 在事件发生时发送大部分数据。工作流执行次数（workflow execution counts）和实例心跳（instance pulse）会定期发送（每 6 小时一次）。

{% hint style="info" %}
**大白话**：数据分两类发送方式：①「事件触发型」——比如某个节点被用了、某个报错发生了，当时就发一条；②「定期汇总型」——工作流总共执行了多少次、你的实例还活着吗（心跳），这类数据每 6 小时打包发送一次。心跳的作用是让官方知道有哪些版本在使用，以便判断各版本占比。
{% endhint %}

## 选择退出数据收集 / Opting out of data collection

n8n 默认启用遥测收集。要禁用它，请配置以下环境变量。

### 退出遥测事件 / Opt out of telemetry events

要退出诊断遥测（diagnostic telemetry），将 `N8N_DIAGNOSTICS_ENABLED` 环境变量设置为 `false`：

```bash
export N8N_DIAGNOSTICS_ENABLED=false
```

{% hint style="info" %}
**大白话**：`export` 是在 Linux/macOS 终端里设置环境变量的命令，也可以把它写进 `.env` 文件或 Docker 的环境变量配置里。把 `N8N_DIAGNOSTICS_ENABLED` 设成 `false` 后，n8n 就不再上报诊断遥测数据（即上面说的「事件触发型」数据）。设置完成后记得重启 n8n 服务，配置才会生效。
{% endhint %}

### 退出检查 n8n 新版本 / Opt out of checking for new versions of n8n

要退出版本通知（version notifications），将 `N8N_VERSION_NOTIFICATIONS_ENABLED` 环境变量设置为 `false`：

```bash
export N8N_VERSION_NOTIFICATIONS_ENABLED=false
```

{% hint style="info" %}
**大白话**：这个开关管的是「有没有新版本提示」。默认 n8n 会定期联系官方检查新版本，有新版时在界面上提醒你升级。设成 `false` 就彻底不检查、不提示了。如果你不希望 n8n 与外界有任何通信（比如完全内网部署），就把这个也关掉。
{% endhint %}

## 禁用所有与 n8n 服务器的连接 / Disable all connection to n8n servers

要阻止与 n8n 服务器的**所有**通信，请参阅[隔离 n8n](../basic-configuration/configuration-examples/isolate-n8n.md)。

{% hint style="info" %}
**大白话**：上面两个开关只关掉了「诊断数据」和「版本检查」两件事。但 n8n 与官方服务器之间可能还有别的通信通道（比如拉取官方模板库、加载前端资源等）。如果你想要的是「彻底断网、一个字节都不往外发」，那就去「隔离 n8n」那一页，把所有通道全部关掉。
{% endhint %}

## 相关资源 / Related resources

* [部署环境变量](../basic-configuration/use-environment-variables/deployment.md)：关于这些环境变量的更多信息。
* [配置](../basic-configuration.md)：如何设置环境变量。
