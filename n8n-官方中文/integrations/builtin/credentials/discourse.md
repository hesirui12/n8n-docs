---
title: Discourse 凭证（Discourse credentials）
description: >-
  Discourse 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Discourse。
contentType:
  - integration
  - reference
nodeTitle: Discourse 凭证（Discourse credentials）
originalFilePath: integrations/builtin/credentials/discourse.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/discourse'
url: 'https://docs.n8n.io/integrations/builtin/credentials/discourse'
layout:
  description:
    visible: false
---

# Discourse 凭证（Discourse credentials）

> **大白话**：Discourse 是开源论坛软件（n8n 官方社区用的就是它）。要用 n8n 管理你自己的 Discourse 论坛，需要三样东西：论坛地址（URL）、管理员在后台生成的 **API Key**，以及一个 **Username**（用户名，相当于告诉 API「以谁的身份操作」）。

你可以使用这些凭证来认证以下节点：

- [Discourse](../app-nodes/n8n-nodes-base.discourse.md)

## 前置条件（Prerequisites）

- 自己部署（Host）一个 [Discourse](https://discourse.org/) 实例
- 在你部署的实例上创建账号，并确保你是管理员（admin）

## 支持的认证方式（Supported authentication methods）

- API key

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Discourse 的 API 文档](https://docs.discourse.org/)。

## 使用 API key（Using API key）

要配置这个凭证，你需要：

- 你 Discourse 实例的 **URL**（地址），例如 `https://community.n8n.io`
- 一个 **API Key**：通过 Discourse 管理后台（admin panel）创建 API key。关于如何创建 API key 并指定用户名，请参考 [Discourse 创建和配置 API key 文档](https://meta.discourse.org/t/create-and-configure-an-api-key/230124)。
- 一个 **Username**（用户名）：可以使用你自己的名字、`system`，或者其他用户。

更多示例请参考 [Discourse API 文档](https://docs.discourse.org/) 的认证（Authentication）部分。
