---
title: Compare changes with workflow diffs
description: Use workflow diffs to compare local and remote changes
contentType: howto
nodeTitle: Compare versions
originalFilePath: source-control-environments/using/compare-changes.md
originalUrl: 'https://docs.n8n.io/source-control-environments/using/compare-changes'
url: >-
  https://docs.n8n.io/administer/use-source-control-and-environments/compare-versions
layout:
  description:
    visible: false
---

# 用工作流差异对比 (Compare changes with workflow diffs) 来比较版本

工作流差异（workflow diffs）功能允许你直观地比较两个版本的工作流：一个是你实例上当前的工作流，另一个是你连接的 Git 仓库里最新保存的版本。这能帮你在决定"推送（push）还是拉取（pull）"之前，先看清楚这个工作流到底改了什么、改在哪里，避免误操作。

{% hint style="info" %}
**功能可用性**

- 仅 Enterprise（企业版）可用
- 工作流差异功能只有在实例上[启用了环境功能](set-up-source-control.md)（即配置了源码控制）时才可用
{% endhint %}

{% hint style="info" %}
**小白解释：什么时候需要对比？**

假设你在开发环境改了一个工作流，准备推到 Git；或者准备从 Git 拉取别人改过的版本到你的实例。在动手之前，用"差异对比"先看一眼：多了哪些节点？哪些节点被改过？哪些被删了？确认无误再执行，能避免"覆盖了别人的修改"这类事故。
{% endhint %}

## 访问工作流差异 (Accessing workflow diffs)

你可以在两个地方打开工作流差异：

1. **推送（push）时**：在提交（commit）弹窗中，点击你想检查的工作流旁边的工作流差异图标
2. **拉取（pull）时**：在修改（modified changes）弹窗中，点击你想检查的工作流旁边的工作流差异图标

## 理解工作流差异视图 (Understanding the workflow diff view)

当你打开一个工作流差异时，n8n 会垂直堆叠显示两个工作流：

### 推送时 (When pushing)

* **上方面板（远程分支）**：你的 Git 仓库里最新的版本
* **下方面板（本地）**：当前本地保存的工作流版本

### 拉取时 (When pulling)

* **上方面板（本地）**：你 n8n 实例上当前的版本
* **下方面板（远程分支）**：你要从 Git 仓库拉取的版本

在这两种情况下，**上方面板始终显示"将要被更新"的那个工作流**（也就是拉取/推送后内容会发生变化的那一个）。

差异视图会用三种方式高亮不同类型的改动：

* **新增的节点和连线 (Added nodes and connectors)**：新添加的节点或连线会显示为绿色，并带有 "N" 图标
* **修改的节点和连线 (Modified nodes and connectors)**：对已有节点或连线的修改会显示为橙色，并带有 "M" 图标
* **删除的节点和连线 (Deleted nodes and connectors)**：节点或连线的删除会显示为红色，并带有 "D" 图标

{% hint style="info" %}
**小白解释：N / M / D 是什么？**

这是三个英文首字母：N = New（新增）、M = Modified（修改）、D = Deleted（删除）。颜色也对应交通灯的直觉：绿色=新东西、橙色=有改动、红色=被删了。一眼就能看出这份改动属于哪种类型。
{% endhint %}

## 审查节点改动 (Reviewing node changes)

对于被修改（modified）的节点，你还可以进一步比较具体的改动内容。点击被修改的节点，会显示一个该节点改动的 JSON 差异。你可以查看某个节点在改动前和改动后的具体配置。

{% hint style="info" %}
**小白解释：什么是"JSON 差异"？**

n8n 的节点配置本质上是 JSON 数据（类似 `{"type": "..."}` 的键值结构）。JSON 差异就是把"改动前"和"改动后"的配置并排/逐行对比，新增的行用绿色、删除的行用红色标出来。这样你能精确看到这个节点到底是哪个参数被改了。
{% endhint %}

## 查看改动摘要 (Viewing the summary of changes)

在右上角，**changes**（改动）按钮会显示改动的数量。这个数字代表节点和节点连线改动总数，再加上工作流常规设置更新的总数。

## 逐个浏览每处改动 (Navigating through each change)

你可以使用右上角的 **next**（下一个）和 **previous**（上一个）箭头，按逻辑顺序逐个浏览所有改动。使用左上角的 **back**（返回）按钮，可以回到提交（commit）或拉取（pull）弹窗，选择另一个工作流来查看改动。

## 谁能使用工作流差异 (Who can use workflow diffs)

只有能为实例推送或拉取提交的用户才能访问工作流差异：

* 实例所有者（instance owners）
* 实例管理员（instance admins）
* 项目管理员（project admins）
