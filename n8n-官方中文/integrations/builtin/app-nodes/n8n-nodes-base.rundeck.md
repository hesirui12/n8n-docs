---
title: Rundeck 节点文档
description: >-
  学习如何在 n8n 中使用 Rundeck 节点。按照技术文档将 Rundeck
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Rundeck 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.rundeck.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.rundeck'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.rundeck'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Rundeck 是一款开源的任务编排/运维自动化工具（类似可以图形化编排的「运维脚本中心」），里面运行着一个个「作业（job）」。用这个节点，你可以在 n8n 里触发 Rundeck 的作业执行，或获取作业的元数据（meta data）。
{% endhint %}

# Rundeck 节点

使用 Rundeck 节点来自动化你在 Rundeck 中的工作，并把它与其它应用集成。n8n 内置支持执行作业（job）和获取元数据。

在本页你可以看到 Rundeck 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Rundeck 凭证](../credentials/rundeck.md)。
{% endhint %}

## 操作（Operations）

- **Job**（作业）
    - Execute a job（执行作业）
    - Get metadata of a job（获取作业的元数据）

## 模板与示例（Templates and examples）

[浏览 Rundeck 节点文档集成模板](https://n8n.io/integrations/rundeck)，或[搜索全部模板](https://n8n.io/workflows/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

## 找到作业 ID（Find the job ID）

1. 登录你的 Rundeck 控制台（dashboard）。
2. 打开包含你想在 n8n 中使用的作业的那个项目（project）。
3. 在侧边栏中选择 **JOBS**（作业）。
4. 在 **All Jobs**（全部作业）下，选择你想在 n8n 中使用的作业名称。
5. 在左上角、作业名称下方，复制以小号字体显示的那串字符串。这就是你的作业 ID（job ID）。
6. 把这个作业 ID 粘贴到 n8n 的 **Job Id**（作业 ID）字段里。
