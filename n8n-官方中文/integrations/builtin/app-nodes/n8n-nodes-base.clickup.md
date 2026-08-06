---
title: ClickUp 节点文档
description: >-
  学习如何在 n8n 中使用 ClickUp 节点。按照技术文档将 ClickUp
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: ClickUp 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.clickup.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.clickup'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.clickup'
layout:
  description:
    visible: false
---

# ClickUp 节点

> **大白话**：ClickUp 是一个集项目管理、任务清单、目标 OKR、时间记录于一体的一站式协作工具。这个节点让 n8n 能自动操作 ClickUp——比如自动建任务、更新任务、管理清单（Checklist）、文件夹、标签、评论、目标和工时记录。举例：别人在表格里提交了新需求，工作流自动在 ClickUp 里建好任务，省去手动操作。

使用 ClickUp 节点可以自动化处理 ClickUp 里的工作，并让 ClickUp 与其他应用程序互通。n8n 内置支持 ClickUp 的众多功能，包括创建、获取、删除和更新文件夹、清单（Checklist）、标签、评论和目标等。

本页列出了 ClickUp 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [ClickUp 凭证](../credentials/clickup.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作

* Checklist（清单）
    * 创建清单
    * 删除清单
    * 更新清单
* Checklist Item（清单条目）
    * 创建清单条目
    * 删除清单条目
    * 更新清单条目
* Comment（评论）
    * 创建评论
    * 删除评论
    * 获取所有评论
    * 更新评论
* Folder（文件夹）
    * 创建文件夹
    * 删除文件夹
    * 获取一个文件夹
    * 获取所有文件夹
    * 更新文件夹
* Goal（目标）
    * 创建目标
    * 删除目标
    * 获取一个目标
    * 获取所有目标
    * 更新目标
* Goal Key Result（目标关键结果 KR）
    * 创建关键结果
    * 删除关键结果
    * 更新关键结果
* List（列表）
    * 创建列表
    * 获取列表的自定义字段
    * 删除列表
    * 获取一个列表
    * 获取所有列表
    * 获取列表成员
    * 更新列表
* Space Tag（空间标签）
    * 创建空间标签
    * 删除空间标签
    * 获取所有空间标签
    * 更新空间标签
* Task（任务）
    * 创建任务
    * 删除任务
    * 获取一个任务
    * 获取所有任务
    * 获取任务成员
    * 设置自定义字段
    * 更新任务
* Task List（任务列表）
    * 把任务添加到列表
    * 把任务从列表移除
* Task Tag（任务标签）
    * 给任务添加标签
    * 从任务移除标签
* Task Dependency（任务依赖）
    * 创建任务依赖
    * 删除任务依赖
* Time Entry（时间记录）
    * 创建时间记录
    * 删除时间记录
    * 获取一条时间记录
    * 获取所有时间记录
    * 开始一条时间记录
    * 停止当前正在运行的计时器
    * 更新时间记录
* Time Entry Tag（时间记录标签）
    * 给时间记录添加标签
    * 获取所有时间记录标签
    * 从时间记录移除标签

## 操作详情

### 获取一个任务（Get a task）

使用 **Get a task** 操作时，你可以按需开启以下选项：

- **Include Subtasks（包含子任务）**：开启后，会同时获取并返回指定任务下的子任务。
- **Include Markdown Description（包含 Markdown 描述）**：开启后，返回结果中会带上 `markdown_description` 字段，它保留任务描述里的链接和格式。如果任务描述里包含链接或富文本格式，这个选项会很有用。

## 模板与示例


[浏览 ClickUp 节点集成模板](https://n8n.io/integrations/clickup) 或 [搜索全部模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

