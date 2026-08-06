---
title: Execute Sub-workflow 节点文档
description: >-
  n8n（工作流自动化平台）中 Execute Sub-workflow（执行子工作流）节点的文档。
  包含用法指南和示例链接。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Execute Sub-workflow 节点文档
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow
layout:
  description:
    visible: false
---

# Execute Sub-workflow 节点

> **大白话**：这个节点是「工作流里再调工作流」的入口。你可以在当前工作流的任意位置，把另一个工作流（子工作流）叫过来运行，还能把当前的数据传给对方。适合把重复的流程抽出来做成公共子工作流，比如"发报告"、"发邮件"这种，谁要用谁就调用一次。

使用 Execute Sub-workflow（执行子工作流）节点，可以在运行 n8n 的主机上运行另一个工作流。

## 节点参数

### Source（来源）

选择节点从哪里获取子工作流的信息：

- **Database（数据库）**：选择此选项，可以按 ID 从数据库加载工作流。你还必须输入以下任一项：
	- **From list（从列表选择）**：从你的账户可用的工作流列表中选择一个工作流。
	- **Workflow ID（工作流 ID）**：输入工作流的 ID。工作流的 URL 中，`/workflow/` 之后的部分就是 ID。例如，如果某个工作流的 URL 是 `https://my-n8n-acct.app.n8n.cloud/workflow/abCDE1f6gHiJKL7`，那么 **Workflow ID** 就是 `abCDE1f6gHiJKL7`。
- **Local File（本地文件）**：选择此选项，可以从本地保存的 JSON 文件加载工作流。你还必须输入：
	- **Workflow Path（工作流路径）**：输入你要让节点执行的本地 JSON 工作流文件的路径。
- **Parameter（参数）**：选择此选项，可以从参数加载工作流。你还必须输入：
	- **Workflow JSON（工作流 JSON）**：输入你要让节点执行的 JSON 代码。
- **URL（网址）**：选择此选项，可以从 URL 加载工作流。你还必须输入：
	- **Workflow URL（工作流 URL）**：输入你要从中加载工作流的 URL。

### Workflow Inputs（工作流输入）

如果你使用 **database（数据库）** 和 **From list（从列表选择）** 选项选择了子工作流，子工作流的输入项会自动显示出来，方便你填写或映射值。

你可以选择性地删除某些请求的输入项，这种情况下，子工作流收到的该项值会是 `null`（空值）。你还可以启用 **Attempt to convert types（尝试转换类型）**，尝试自动把数据转换成子工作流输入项所要求的类型。

如果子工作流的 Workflow Input Trigger（工作流输入触发器）节点使用了 "Accept all data（接受所有数据）" 的输入数据模式，那么输入项就不会显示出来。

### Mode（模式）

使用此参数来控制节点的执行模式。从以下选项中选择：

- **Run once with all items（把所有数据项合并成一次运行）**：把所有的输入数据项合并到节点的一次执行中。
- **Run once for each item（每个数据项单独运行一次）**：依次为每个输入数据项执行一次节点。

## 节点选项

该节点包含一个选项：**Wait for Sub-Workflow Completion（等待子工作流完成）**。它用来控制主工作流是应该等子工作流完成后才继续下一步（打开），还是主工作流不用等、直接继续（关闭）。

## 模板与示例

[浏览 Execute Sub-workflow 的集成模板](https://n8n.io/integrations/execute-workflow) 或 [搜索所有模板](https://n8n.io/workflows/)

## 设置和使用子工作流

本节将带你一步步完成父工作流和子工作流的设置。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/wlwT5JcWyWTecnDN6aul/" %}

> **小白提示**：上面嵌入的是官方文档中"如何搭建父工作流和子工作流"的分步图文教程，内容会在文档站点中自动渲染。

## 数据如何在工作流之间传递

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/edKlUxnfiRMq38CujuFv/" %}

> **小白提示**：上面嵌入的是官方文档中关于"数据如何在主工作流和子工作流之间传递"（如输入、输出、`null` 值等）的说明，内容会在文档站点中自动渲染。
