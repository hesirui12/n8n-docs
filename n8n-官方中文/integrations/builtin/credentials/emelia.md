---
title: Emelia 凭证（Emelia credentials）
description: >-
  Emelia 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Emelia。
contentType:
  - integration
  - reference
nodeTitle: Emelia 凭证（Emelia credentials）
originalFilePath: integrations/builtin/credentials/emelia.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/emelia'
url: 'https://docs.n8n.io/integrations/builtin/credentials/emelia'
layout:
  description:
    visible: false
---

# Emelia 凭证（Emelia credentials）

> **大白话**：Emelia 是「冷邮件」（cold email）自动发送工具，用于批量发送开发客户的外联邮件。n8n 连它只需要一个 **API Key**：登录 Emelia 后，点右上角的头像（进入 **Settings** 设置）就能找到 **API Keys** 并生成。

你可以使用这些凭证来认证以下节点：

- [Emelia](../app-nodes/n8n-nodes-base.emelia.md)
- [Emelia Trigger](../trigger-nodes/n8n-nodes-base.emeliatrigger.md)

## 前置条件（Prerequisites）

创建一个 [Emelia](https://emelia.io) 账号。

## 支持的认证方式（Supported authentication methods）

- API key

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Emelia 的 API 文档](https://docs.emelia.io/)。

## 使用 API key（Using API key）

要配置这个凭证，你需要：

- 一个 **API Key**：要在 Emelia 中生成 API Key，请点击右上角的头像（即你的 **Settings** 设置）进入 **API Keys**。更多信息请参考 [Emelia 的 API 文档](https://docs.emelia.io/) 中的认证（Authentication）部分。
