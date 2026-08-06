---
description: 创建、运行和发布工作流。
---

# 创建和运行工作流 / Create and run workflows

工作流（Workflow）[^1] 就是把一堆节点连起来，用来自动化某个流程。你是在[工作流画布](#user-content-fn-2)（Canvas）[^2] 上搭建工作流的。

## 创建工作流 / Create a workflow

方法一：

1. 点击侧边菜单左上角的 <img src="../.gitbook/assets/universal-resource-button (1).png" alt="universal create resource icon" data-size="line"> **按钮**，然后选择"工作流"（Workflow）。
2. 如果你的 n8n 实例支持项目（Project），你还需要选择把工作流创建在你的**个人空间**（personal space）里，还是某个你有权限的**项目**里。如果你用的是社区版，工作流永远创建在个人空间里。
3. 开始搭建：点击 **Add first step...**（添加第一步…）来添加一个触发器节点。

或者：

1. 在 **Overview**（概览）页面或某个**项目**页面，点击右上角的 <img src="../.gitbook/assets/universal-resource-button (1).png" alt="universal create resource icon" data-size="line"> **create**（创建）按钮，然后选择"工作流"。
2. 如果在 **Overview** 页面操作，工作流会创建在你的个人空间里；如果在项目里操作，就会创建在那个项目里。
3. 开始搭建：点击 **Add first step...**（添加第一步…）来添加一个触发器节点。

{% hint style="info" %}
**大白话**：新建工作流就像"开一个新文件"。点左上角或右上角的"+"按钮选工作流，然后在画布上放第一个触发器节点，工作流就算开张了。
{% endhint %}

如果你是第一次搭建工作流，可以先用[快速入门指南](https://app.gitbook.com/s/CxSeOtVxqqhfxMSac0AV/build-your-first-workflow)，快速体验 n8n 的功能。

## 手动运行工作流 / Run workflows manually

在搭建和测试的时候，你可能需要手动运行工作流；或者你的工作流没有触发器节点，那就只能手动跑。

要手动运行，点击 **Execute Workflow**（执行工作流）即可。

## 自动运行工作流 / Run workflows automatically

所有新建的工作流默认都是未发布状态。参见[发布与保存工作流](save-and-publish-workflows.md)。

以触发器节点或 Webhook 节点开头的工作流，必须先**发布**（Publish）才能自动运行。工作流没发布时，你只能手动运行它。

要发布工作流，打开你的工作流，点击 **Publish**（发布）。取消发布（unpublish）的选项在工作流设置菜单里。

发布之后，只要触发条件一满足，工作流就会自动运行。

[^1]: n8n 工作流是一组用来自动化某个流程的节点集合。当触发条件发生时，工作流开始执行，并按顺序运行以完成复杂任务。
[^2]: 画布（Canvas）是 n8n 编辑器界面中搭建工作流的主界面。你在画布上添加节点、连接节点，从而组合出完整的工作流。
