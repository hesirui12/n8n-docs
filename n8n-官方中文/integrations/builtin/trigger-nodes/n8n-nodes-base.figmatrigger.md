---
title: Figma 触发器（测试版）节点文档
description: >-
  Learn how to use the Figma Trigger node in n8n.
contentType:
  - integration
  - reference
nodeTitle: Figma 触发器（测试版）节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.figmatrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.figmatrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.figmatrigger
layout:
  description:
    visible: false
---

# Figma 触发器（Beta 测试版）节点

> **大白话**：用这个节点"盯"你的 Figma 设计文件——有人评论文件、删除文件、保存更新、发布库文件等，都会触发你的工作流。注意：免费的 Starter 套餐不支持 webhook，需要用 Professional 套餐。

[Figma](https://www.figma.com/) 是一个以网页为主的原型设计工具，macOS 和 Windows 桌面应用还支持更多离线功能。

{% hint style="warning" %}
**支持的 Figma 套餐**

Figma 不支持免费版 "Starter" 套餐上的 webhook。你的团队需要升级到 "Professional" 套餐才能使用此节点。
{% endhint %}

{% hint style="info" %}
**凭据（Credentials）**

你可以在此处找到该节点的认证信息：[Figma 凭据](../credentials/figma.md)。
{% endhint %}

{% hint style="info" %}
**示例与模板**

如需使用示例和入门模板，请参阅 n8n 的 [Figma 触发器集成](https://n8n.io/integrations/figma-trigger-beta/) 页面。
{% endhint %}

## 事件（Events）

- **File Commented（文件被评论）**：当有人评论文件时触发。
- **File Deleted（文件被删除）**：当有人删除单个文件时触发；但整文件夹连同里面所有文件一起删除时不会触发。
- **File Updated（文件被更新）**：当有人保存或删除文件时触发。保存指的是：有人在做出更改后的 30 秒内关闭文件。
- **File Version Updated（文件版本更新）**：当有人在文件的版本历史中创建了一个命名版本时触发。
- **Library Publish（库发布）**：当有人发布库文件时触发。
