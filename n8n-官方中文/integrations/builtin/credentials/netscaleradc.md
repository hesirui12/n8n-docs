---
title: Netscaler ADC 凭证
description: >-
  Netscaler ADC 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Netscaler ADC 的身份。
contentType:
  - integration
  - reference
nodeTitle: Netscaler ADC credentials
originalFilePath: integrations/builtin/credentials/netscaleradc.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/netscaleradc'
url: 'https://docs.n8n.io/integrations/builtin/credentials/netscaleradc'
layout:
  description:
    visible: false
---

# Netscaler ADC 凭证

{% hint style="info" %}
**大白话**：Netscaler ADC（也叫 Citrix ADC）是 Citrix 出的一款企业级负载均衡/应用交付设备（常用来给大型网站做流量分发、安全防护）。n8n 想远程管理它，只需要填三个东西：**URL（你的 ADC 设备地址）**、**Username（登录用户名）**、**Password（登录密码）**，就是最简单的「基本认证（Basic auth）」。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Netscaler ADC 节点](../app-nodes/n8n-nodes-base.netscaleradc.md)

## 准备工作

安装一台 [NetScaler/Citrix ADC 设备](https://docs.netscaler.com/en-us/citrix-adc/current-release/getting-started-with-citrix-adc)。

## 支持的验证方式

- Basic auth（基本认证）

## 相关资源

关于该服务的更多信息，请参考 [Netscaler ADC 的 14.1 NITRO API 文档](https://developer-docs.netscaler.com/en-us/adc-nitro-api/current-release)。

## 使用 basic auth（基本认证）

要配置这个凭证，你需要准备：

* 一个 **URL**：输入你的 NetScaler/Citrix ADC 实例的 URL 地址。
* 一个 **Username（用户名）**：输入你的 NetScaler/Citrix ADC 用户名。
* 一个 **Password（密码）**：输入你的 NetScaler/Citrix ADC 密码。

更多信息请参考 [Performing Basic Netscaler ADC Operations（执行基本的 Netscaler ADC 操作）](https://developer-docs.netscaler.com/en-us/adc-nitro-api/current-release/performing-basic-netscaler-operations)。
