---
title: 事件响应
description: n8n 的事件响应流程。
contentType: explanation
nodeTitle: 事件响应
originalFilePath: privacy-security/incident-response.md
originalUrl: 'https://docs.n8n.io/privacy-security/incident-response'
url: 'https://docs.n8n.io/privacy-and-security/incident-response'
layout:
  description:
    visible: false
---

# 事件响应

{% hint style="info" %}
**小白必读：什么是"事件响应"？**

"事件"（incident）在这里指的是**安全问题**，比如服务器被入侵、数据泄露、系统故障等意外状况。**"事件响应"（incident response）** 就是一家公司预先制定好的一套标准流程：出了事之后，按部就班地发现问题 → 记录情况 → 解决问题 → 对外沟通，而不是手忙脚乱、乱了阵脚。简单来说，就是"出事前有预案，出事后不慌张"。
{% endhint %}

n8n 采用事件响应最佳实践来识别、记录、解决和沟通事件。

- **识别**（identifying）：第一时间发现异常，判断是不是真的发生了安全问题；
- **记录**（documenting）：把发生的过程、时间、影响范围如实记录下来，方便事后复盘；
- **解决**（resolving）：尽快修复问题、止损、恢复服务；
- **沟通**（communicating）：及时、透明地告诉用户发生了什么，以及会怎么处理。

n8n 会在状态页面发布事件通知：[n8n Status](https://status.n8n.cloud/)。

这个状态页面会显示 n8n 各项服务的实时运行状态。如果你发现 n8n 云服务出问题，可以先来这里看看是不是官方已经公告了；订阅后也能第一时间收到通知。

n8n 会根据公司的[数据处理附录](https://n8n.io/legal/#data)通知客户任何数据泄露事件。

数据处理附录（Data Processing Addendum，简称 DPA）是 n8n 与客户之间关于"数据怎么处理"的法律约定。如果发生数据泄露，n8n 会按照这份文件里的承诺，在规定的时限内通知受影响的客户。
