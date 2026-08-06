---
title: Box 触发器节点文档（Box Trigger node documentation）
description: >-
  了解如何在 n8n 中使用 Box 触发器节点。按照技术文档将 Box
  触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Box Trigger node documentation
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.boxtrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.boxtrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.boxtrigger
layout:
  description:
    visible: false
---

# Box 触发器节点（Box Trigger node）

{% hint style="info" %}
**大白话**：Box 是云盘/文件协作平台，类似 Dropbox、OneDrive，支持文件共享、多人协作。这个触发器节点会监听 Box 里某个文件夹或文件的变化（比如上传了新文件、有人编辑了文件），一旦发生就自动触发工作流。关键是先找到要监听的文件夹的 **Target ID（目标 ID）**——就是网址 `folder/` 后面那串数字。下面有详细步骤。
{% endhint %}

[Box](https://www.box.com/) 是一家云计算公司，提供文件共享、协作以及其他处理上传到其服务器文件的相关工具。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../credentials/box.md)找到此节点的认证（账号授权）信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想找使用示例和入门模板，请参考 n8n 的 [Box Trigger 集成](https://n8n.io/integrations/box-trigger/)页面。
{% endhint %}

## 如何找到你的 Box Target ID（Find your Box Target ID）

要在 Box 中获取你的 Target ID（目标 ID）：

1. 打开你想监控的文件/文件夹。
2. 复制浏览器地址栏 URL 中 `folder/` 之后的那串字符。这就是目标 ID。例如，如果网址是 `https://app.box.com/folder/12345`，那么 `12345` 就是目标 ID。
3. 把它粘贴到 n8n 的 **Target ID（目标 ID）** 字段中。
