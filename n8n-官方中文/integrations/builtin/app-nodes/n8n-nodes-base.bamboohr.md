---
title: BambooHR 节点文档
description: 学习如何在 n8n 中使用 BambooHR 节点。按照技术文档将 BambooHR 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: BambooHR 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.bamboohr.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.bamboohr'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.bamboohr'
layout:
  description:
    visible: false
---

# BambooHR 节点

> 💡 **大白话**：BambooHR 是一款「人事管理（HR）软件」，用来管员工档案、工资、请假等。用这个节点，你可以在 n8n 里自动创建/更新员工档案、上传下载员工文档、查看公司报表，不用自己写代码。

使用 BambooHR 节点自动化 BambooHR 中的工作，并将 BambooHR 与其他应用集成。n8n 内置支持大量 BambooHR 功能，包括创建、删除、下载和获取公司报表、员工文档与文件。

本页列出了 BambooHR 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [BambooHR 凭据](../credentials/bamboohr.md)。
{% endhint %}

## 支持的操作（Operations）

* Company Report（公司报表）
    * Get a company report（获取公司报表）
* Employee（员工）
    * Create an employee（创建员工）
    * Get an employee（获取员工）
    * Get all employees（获取所有员工）
    * Update an employee（更新员工）
* Employee Document（员工文档）
    * Delete an employee document（删除员工文档）
    * Download an employee document（下载员工文档）
    * Get all employee document（获取所有员工文档）
    * Update an employee document（更新员工文档）
    * Upload an employee document（上传员工文档）
* File（文件）
    * Delete a company file（删除公司文件）
    * Download a company file（下载公司文件）
    * Get all company files（获取所有公司文件）
    * Update a company file（更新公司文件）
    * Upload a company file（上传公司文件）

## 模板和示例（Templates and examples）

[浏览 BambooHR 节点文档集成模板](https://n8n.io/integrations/bamboohr) 或 [搜索所有模板](https://n8n.io/workflows/)
