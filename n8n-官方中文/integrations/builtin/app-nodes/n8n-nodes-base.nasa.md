---
title: NASA 节点文档
description: >-
  学习如何在 n8n 中使用 NASA 节点。按照技术文档将 NASA
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: NASA 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.nasa.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.nasa'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.nasa'
layout:
  description:
    visible: false
---

# NASA 节点

> 💡 **大白话**：NASA 是美国航天局，开放了很多公开数据和图片接口。用这个节点，你可以让 n8n 自动抓取「每日天文图片」、小行星数据、太阳活动（太阳耀斑、日冕物质抛射等）预警、地球卫星影像等，比如「每天早上自动把当天的天文美图发到群里」。

使用 NASA 节点来自动化你在 NASA 中的工作，并把它与其它应用集成。n8n 内置支持 NASA 的大量功能，包括获取影像和数据。

在本页你可以看到 NASA 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [NASA 凭证](../credentials/nasa.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

* Astronomy Picture of the Day（每日天文图片）
    * Get the Astronomy Picture of the Day（获取每日天文图片）
* Asteroid Neo-Feed（小行星近地天体列表）
    * Retrieve a list of asteroids based on their closest approach date to Earth（按小行星最接近地球的日期获取列表）
* Asteroid Neo-Lookup（小行星近地天体查询）
    * Look up an asteroid based on its NASA SPK-ID（按 NASA SPK-ID 查询小行星）
* Asteroid Neo-Browse（小行星近地天体浏览）
    * Browse the overall asteroid dataset（浏览整个小行星数据集）
* DONKI Coronal Mass Ejection（DONKI 日冕物质抛射）
    * Retrieve DONKI coronal mass ejection data（获取 DONKI 日冕物质抛射数据）
* DONKI Interplanetary Shock（DONKI 行星际激波）
    * Retrieve DONKI interplanetary shock data（获取 DONKI 行星际激波数据）
* DONKI Solar Flare（DONKI 太阳耀斑）
    * Retrieve DONKI solar flare data（获取 DONKI 太阳耀斑数据）
* DONKI Solar Energetic Particle（DONKI 太阳高能粒子）
    * Retrieve DONKI solar energetic particle data（获取 DONKI 太阳高能粒子数据）
* DONKI Magnetopause Crossing（DONKI 磁层顶穿越）
    * Retrieve data on DONKI magnetopause crossings（获取 DONKI 磁层顶穿越数据）
* DONKI Radiation Belt Enhancement（DONKI 辐射带增强）
    * Retrieve DONKI radiation belt enhancement data（获取 DONKI 辐射带增强数据）
* DONKI High Speed Stream（DONKI 高速太阳风流）
    * Retrieve DONKI high speed stream data（获取 DONKI 高速太阳风流数据）
* DONKI WSA+EnlilSimulation（DONKI WSA+Enlil 模拟）
    * Retrieve DONKI WSA+EnlilSimulation data（获取 DONKI WSA+EnlilSimulation 数据）
* DONKI Notifications（DONKI 通知）
    * Retrieve DONKI notifications data（获取 DONKI 通知数据）
* Earth Imagery（地球影像）
    * Retrieve Earth imagery（获取地球影像）
* Earth Assets（地球数据资产）
    * Retrieve Earth assets（获取地球数据资产）

## 模板与示例（Templates and examples）

[浏览 NASA 节点文档集成模板](https://n8n.io/integrations/nasa)，或[搜索全部模板](https://n8n.io/workflows/)。
