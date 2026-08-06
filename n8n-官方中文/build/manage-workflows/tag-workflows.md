---
title: 工作流标签（Workflow tags）
description: '使用标签给工作流做标记，更方便浏览你的工作流。'
contentType: howto
nodeTitle: Tag workflows
originalFilePath: workflows/tags.md
originalUrl: 'https://docs.n8n.io/workflows/tags'
url: 'https://docs.n8n.io/build/manage-workflows/tag-workflows'
layout:
  description:
    visible: false
---

# 标签 / Tags

工作流标签（tags）允许你给工作流打上标记。之后你就可以**按标签筛选**工作流。

标签是**全局（global）** 的。也就是说，当你创建一个标签后，你 n8n 实例上的**所有用户**都能使用它。

{% hint style="info" %}
**大白话**：标签就像给文件贴的彩色贴纸——「重要」「待办」「营销」「测试」……想找某类工作流时按标签一筛就有。关键点：标签是全局共享的，不是每个用户私有的；你建的标签，全公司的人都能看到和使用。所以标签命名时尽量用大家都懂的名字。
{% endhint %}

## 给工作流添加标签 / Add a tag to a workflow

给工作流添加标签：

1. 在你的工作流中，选择 **+ Add tag（添加标签）**。
2. 选择已有的标签，或输入一个新标签名称。
3. 选好标签后，点击标签弹窗以外的位置，n8n 就会把标签显示在工作流名称旁边。

你可以添加不止一个标签。

{% hint style="info" %}
**大白话**：三步搞定：点「+ Add tag」→ 选已有标签或直接输入新名字 → 点旁边空白处确认。一条工作流可以挂多个标签（比如「营销」+「重要」）。标签会显示在工作流名称旁边，一目了然。
{% endhint %}

## 按标签筛选 / Filter by tag

在浏览实例上的工作流时，你可以按标签筛选。

1. 在 **Workflows（工作流）** 页面，选择 **Filters（筛选）**。
2. 选择 **Tags（标签）**。
3. 选择你想按哪个标签（或多个标签）筛选。n8n 会列出带该标签的工作流。

{% hint style="info" %}
**大白话**：在「Workflows」列表页 → 点「Filters」→ 选「Tags」→ 勾选标签，列表就只剩带这些标签的工作流了。工作流多了以后，这是最快的查找方式。
{% endhint %}

## 管理标签 / Manage tags

你可以编辑已有的标签。实例所有者（owners）可以删除标签。

1. 选择 **Manage tags（管理标签）**。这个入口在 **Workflows** 页面的 **Filters（筛选）> Tags（标签）** 中，或在你的工作流中的 **+ Add tag** 弹窗里。
2. 鼠标悬停在你想修改的标签上。
3. 选择 **Edit（编辑）** <img src="../.gitbook/assets/edit.png" alt="Add node icon" data-size="line"> 来重命名，或选择 **Delete（删除）** <img src="../.gitbook/assets/delete.png" alt="Add node icon" data-size="line"> 来删除它。

{% hint style="warning" %}
**全局标签（Global tags）**

标签是全局的。如果你编辑或删除了一个标签，这会影响你 n8n 实例上的**所有用户**。
{% endhint %}

{% hint style="info" %}
**大白话（重要提醒）**：改/删标签是「全局生效」的——你重命名一个标签，所有用户、所有工作流上挂的旧标签都会跟着变成新名字；你删除标签，所有工作流上的这个标签都会消失。所以操作前想清楚：这不是你私人的标签，是全公司共用的。普通用户只能改、不能删；只有实例所有者才能删除标签。
{% endhint %}
