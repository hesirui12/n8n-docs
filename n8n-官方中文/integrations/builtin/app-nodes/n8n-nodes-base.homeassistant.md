---
title: Home Assistant 节点文档
description: >-
  学习如何在 n8n 中使用 Home Assistant 节点。按照技术文档将
  Home Assistant 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Home Assistant 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.homeassistant.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.homeassistant
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.homeassistant
---

{% hint style="info" %}
**大白话**：Home Assistant 是开源的智能家居控制中心（相当于家里所有智能设备的「大脑」）。这个节点能让你在 n8n 里操作它：查看摄像头截图（Camera Proxy）、读取/检查配置（Config）、创建事件（Event）、查日志（Log）、调用服务（Service，比如开关灯）、读写设备状态（State）、创建模板（Template）。适合做「传感器触发 → 自动执行家庭自动化」的流程。
{% endhint %}

# Home Assistant 节点

使用 Home Assistant 节点来自动化你在 Home Assistant 中的工作，并把它与其它应用集成。n8n 内置支持 Home Assistant 的大量功能，包括获取、创建和检查摄像头代理（Camera Proxy）、配置（Config）、日志（Log）、服务（Service）和模板（Template）。

在本页你可以看到 Home Assistant 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Home Assistant 凭证](../credentials/homeassistant.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作

* Camera Proxy（摄像头代理）
    * Get the camera screenshot（获取摄像头截图）
* Config（配置）
    * Get the configuration（获取配置）
    * Check the configuration（检查配置）
* Event（事件）
    * Create an event（创建事件）
    * Get all events（获取全部事件）
* Log（日志）
    * Get a log for a specific entity（获取指定实体的日志）
    * Get all logs（获取全部日志）
* Service（服务）
    * Call a service within a specific domain（在指定域内调用服务）
    * Get all services（获取全部服务）
* State（状态）
    * Create a new record, or update the current one if it already exists (upsert)（新建记录，若已存在则更新，即「存在则更新」）
    * Get a state for a specific entity（获取指定实体的状态）
    * Get all states（获取全部状态）
* Template（模板）
    * Create a template（创建模板）

## 模板与示例

[浏览 Home Assistant 节点的官方集成模板](https://n8n.io/integrations/home-assistant)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Home Assistant 的文档](https://developers.home-assistant.io/docs/api/rest/)。
