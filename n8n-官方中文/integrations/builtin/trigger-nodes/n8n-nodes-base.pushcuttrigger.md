---
title: Pushcut 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Pushcut 触发器节点。按照本文档将
  Pushcut 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Pushcut 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.pushcuttrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.pushcuttrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.pushcuttrigger
layout:
  description:
    visible: false
---

# Pushcut 触发器节点

> **大白话**：这个节点让 iOS 手机变成你的「遥控器」。你在 Pushcut 这个 iOS 应用里点一个通知按钮，就能远程启动 n8n 里的工作流。下面的步骤教你怎么把 Pushcut 应用和 n8n 接起来。

[Pushcut](https://pushcut.io) 是一个 iOS 应用，让你创建智能通知，用来触发快捷指令（shortcuts）、URL 和在线自动化。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/pushcut.md)找到此节点的身份验证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Pushcut Trigger integrations](https://n8n.io/integrations/pushcut-trigger/) 页面。
{% endhint %}

## 配置一个 Pushcut 动作（Configure a Pushcut action）

按以下步骤在 Pushcut 应用中配置你的 Pushcut 触发器节点。

1. 在 Pushcut 应用中，从 **Notifications（通知）** 界面选择一个通知。
2. 点击 **Add Action（添加动作）** 按钮。
3. 在 **Label（标签）** 字段中为动作输入一个名称。
4. 选择 **Server（服务器）** 标签页。
5. 选择 **Integration（集成）** 标签页。
6. 选择 **Integration Trigger（集成触发器）**。
7. 在 n8n 中，为该动作输入一个名称，然后选择 **Execute step（执行步骤）**。
8. 在 Pushcut 应用的 **Select Integration Trigger（选择集成触发器）** 界面中选择这个动作。
9. 点击右上角的 **Done（完成）** 来保存动作。
