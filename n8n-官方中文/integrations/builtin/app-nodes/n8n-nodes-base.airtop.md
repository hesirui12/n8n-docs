---
title: Airtop 节点文档
description: >-
  学习如何在 n8n 中使用 Airtop 节点。按照技术文档将 Airtop
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Airtop 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.airtop.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtop'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.airtop'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Airtop 是「云上的浏览器」，你可以通过它让 n8n 打开网页、抓取内容、点按钮、输入文字，就像有个虚拟人在替你上网。这个节点适合做网页数据抓取、页面自动化操作。基本套路：先创建会话（Session）拿到 Session ID → 打开一个浏览器窗口 → 抓取或操作 → 用完结束会话，省资源。
{% endhint %}

# Airtop 节点

使用 Airtop 节点来自动化你在 Airtop 中的工作，并把它与其它应用集成。n8n 内置支持 Airtop 的大量功能，让你能控制一个基于云的网页浏览器，用来查询、抓取和操作网页。

在本页你可以看到 Airtop 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Airtop 凭证](../credentials/airtop.md)。
{% endhint %}

## 操作

* Session（会话）
    * Create session（创建会话）
    * Save profile on termination（结束时保存浏览器配置文件）
    * Terminate session（结束会话）
* Window（窗口）
    * Create a new browser window（创建新的浏览器窗口）
    * Load URL（加载网址）
    * Take screenshot（截图）
    * Close window（关闭窗口）
* Extraction（内容提取）
    * Query page（查询页面）
    * Query page with pagination（带分页查询页面）
    * Smart scrape page（智能抓取页面）
* Interaction（交互操作）
    * Click an element（点击元素）
    * Hover on an element（悬停在元素上）
    * Type（输入文字）

## 模板与示例

[浏览 Airtop 节点的官方集成模板](https://n8n.io/integrations/airtop)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Airtop 官方文档](https://docs.airtop.ai/api-reference/airtop-api)。

（官方此处嵌入了通用资源组件，此处从略。）

需要帮助或想提功能需求，请联系 [Airtop 支持](https://docs.airtop.ai/guides/misc/support)。

## 节点参考

### 创建会话和窗口

先创建一个 Airtop 浏览器会话，拿到 **Session ID**，然后用它创建新的浏览器窗口。之后就可以使用任意提取或交互操作了。

### 提取内容

用下面这些操作从网页浏览器提取内容：

- **Query page（查询页面）**：从当前窗口提取信息。
- **Query page with pagination（带分页查询页面）**：从有分页或无限滚动的页面提取信息。
- **Smart scrape page（智能抓取页面）**：把窗口内容转成 markdown 格式返回。

在查询操作中填写 **JSON Output Schema（JSON 输出结构）** 参数，可以拿到 JSON 格式的返回结果。

### 与页面交互

通过描述你想操作的元素，来点击、悬停或在元素上输入文字。

### 结束会话

用完记得结束会话以节省资源。会话会根据 **Create Session** 操作里设置的 **Idle Timeout（空闲超时）** 自动结束，也可以用 **Terminate Session** 操作手动结束。
