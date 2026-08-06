---
title: SyncroMSP 节点文档
description: 学习如何在 n8n 中使用 SyncroMSP 节点（中文小白版）。
contentType:
  - integration
  - reference
nodeTitle: SyncroMSP node documentation
layout:
  description:
    visible: false
---

# SyncroMSP 节点 / SyncroMSP node

> 💡 **大白话**：SyncroMSP 是一个面向 IT 服务商（MSP）的托管服务管理平台。用这个节点，你可以在 n8n 里自动管理它的客户、工单、联系人，比如「客户提交工单时自动创建客户档案」。

使用 SyncroMSP 节点来自动化 SyncroMSP 中的工作，并将其与其他应用集成。n8n 内置支持 SyncroMSP 的多种功能，包括创建和删除新客户、工单和联系人。

本页列出了 SyncroMSP 节点支持的操作及更多资源链接。

{% hint style="info" %}
**凭证（Credentials）**

关于认证设置，请参考 [SyncroMSP 凭证](../credentials/syncromsp.html)。
{% endhint %}

## 操作（Operations）

* 联系人（Contact）
    * 创建新联系人（Create new contact）
    * 删除联系人（Delete contact）
    * 检索联系人（Retrieve contact）
    * 检索全部联系人（Retrieve all contacts）
    * 更新联系人（Update contact）
* 客户（Customer）
    * 创建新客户（Create new customer）
    * 删除客户（Delete customer）
    * 检索客户（Retrieve customer）
    * 检索全部客户（Retrieve all customers）
    * 更新客户（Update customer）
* RMM（远程监控管理）
    * 创建新 RMM 警报（Create new RMM Alert）
    * 删除 RMM 警报（Delete RMM Alert）
    * 检索 RMM 警报（Retrieve RMM Alert）
    * 检索全部 RMM 警报（Retrieve all RMM Alerts）
    * 静音 RMM 警报（Mute RMM Alert）
* 工单（Ticket）
    * 创建新工单（Create new ticket）
    * 删除工单（Delete ticket）
    * 检索工单（Retrieve ticket）
    * 检索全部工单（Retrieve all tickets）
    * 更新工单（Update ticket）

## 模板与示例（Templates and examples）

[浏览 SyncroMSP 节点集成模板](https://n8n.io/integrations/syncromsp) 或 [搜索全部模板](https://n8n.io/workflows/)
