---
title: 导出和导入工作流
contentType: howto
nodeTitle: Export and import
originalFilePath: workflows/export-import.md
originalUrl: https://docs.n8n.io/workflows/export-import
url: https://docs.n8n.io/build/manage-workflows/export-and-import
description: 在 n8n 中导出和导入工作流的不同方法。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 导出和导入 / Export and import

n8n 以 JSON 格式保存工作流。你可以把工作流导出为 JSON 文件，也可以把 JSON 文件导入到你的 n8n 库（library）中。导出和导入工作流有几种方式。

{% hint style="info" %}
**大白话**：简单说，一条工作流在 n8n 内部就是一个 JSON 文件——包含所有节点、连线、设置。所以「导出」就是把工作流下载成一个 `.json` 文件（可以发给别人、备份、或搬到另一台 n8n 上）；「导入」就是把这个 JSON 文件传回 n8n，还原成一条工作流。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/OlpV1rtc5ZIqBmvX4lBQ/" %}

{% hint style="info" %}
**大白话**：上面嵌入的这段内容会给你一个关于「导入」的补充说明（比如：导入时如果工作流里用到的凭证（credentials）在你当前的实例里没有，会提示你怎么处理等）。翻译版这里保留了原链接，方便你查看。
{% endhint %}

## 复制粘贴 / Copy-Paste

你可以通过**复制粘贴**的方式复制工作流（或其中的一部分）：选中要复制的节点后按 `Ctrl + c`（Mac 上是 `cmd + c`）复制到剪贴板，然后在编辑器界面（Editor UI）中按 `Ctrl + v`（Mac 上是 `cmd + v`）粘贴。

要选中所有节点或一组节点，点击并拖动鼠标框选即可：![选择一组节点](../.gitbook/assets/selectingnodes.gif)

{% hint style="info" %}
**大白话**：复制粘贴是最快的「移动/复制工作流」方式——在画布上拖框选中需要的节点，复制，然后粘贴到当前画布的空白处（或另一条工作流里），节点和连线会一起带过来。注意：节点里的凭证引用也能带上，但凭证本身（密钥）不会跟着复制。
{% endhint %}

## 从编辑器界面菜单导出/导入 / From the Editor UI menu

在顶部导航栏中，点击右上角的三个点 <img src="../.gitbook/assets/three-dots-horizontal (1).png" alt="Workflow menu icon" data-size="line">，可以看到以下选项：

* **Download（下载）**：把当前工作流以 JSON 文件的形式下载到你的电脑上。
* **Import from URL（从 URL 导入）**：从 URL 导入工作流 JSON，例如[这个 GitHub 上的工作流 JSON 文件](https://raw.githubusercontent.com/n8n-io/self-hosted-ai-starter-kit/refs/heads/main/n8n/demo-data/workflows/srOnR8PAY3u4RSwb.json)。
* **Import from File（从文件导入）**：从电脑上选择一个 JSON 文件导入工作流。

{% hint style="info" %}
**大白话**：这是最常用的两个入口：「Download」= 把当前工作流存成文件（备份/分享用）；「Import from File」= 选择别人给你的 JSON 文件还原工作流。「Import from URL」适合导入网上分享的工作流——直接把 JSON 的下载链接填进去就行，不用先下载到本地。注意：导入时如果工作流用到的凭证（credentials）不在你当前实例里，需要重新配置。
{% endhint %}

## 从命令行导出/导入 / From the command line

### 使用新的 n8n package CLI（命令行工具）

请参阅 [n8n packages（n8n 包）](n8n-packages.md) 了解如何导入和导出工作流。
此功能仍在开发中（Beta 测试阶段）。

### 使用 Server CLI

* 导出：请参阅[导出命令（export commands）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/use-the-command-line#export-entities)，了解如何导出工作流或凭证。
* 导入：请参阅[导入命令（import commands）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/use-the-command-line#import-entities)，了解如何导入工作流或凭证。

{% hint style="info" %}
**大白话**：如果你习惯在服务器上操作（比如自托管 n8n），可以用命令行导入导出——特别适合批量操作（一次导出一大堆工作流/凭证），或者写脚本定时备份。操作对象既可以是工作流（workflows），也可以是凭证（credentials）。
{% endhint %}

## 通过公共 API（Public API）

请参阅 [n8n packages（n8n 包）](n8n-packages.md) 了解如何通过我们的公共 API（Public API）导入和导出工作流。
此功能仍在开发中（Beta 测试阶段）。

{% hint style="info" %}
**大白话**：如果你的 n8n 实例开启了公共 API（Public API），你还可以通过调用 API 的方式来导入导出——这是「程序化」的方式，适合接入你自己的自动化系统（比如 CI/CD 流水线、脚本），实现全自动的发布与备份。
{% endhint %}
