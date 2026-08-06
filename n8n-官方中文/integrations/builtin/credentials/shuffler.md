---
title: Shuffler 凭证
description: >-
  Shuffler 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Shuffle。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Shuffler 凭证
originalFilePath: integrations/builtin/credentials/shuffler.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/shuffler'
url: 'https://docs.n8n.io/integrations/builtin/credentials/shuffler'
layout:
  description:
    visible: false
---

# Shuffler 凭证

> **大白话**：Shuffler（Shuffle）是一个开源的安全自动化编排工具（SOAR），可以自动响应安全事件。这篇文档教你怎么在 n8n 里填 API 密钥，让 n8n 能调用 Shuffler 的 API。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前置条件

在云端或自托管实例上创建一个 [Shuffler](https://shuffler.io) 账号。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参阅 [Shuffler 的文档](https://shuffler.io/docs/API#authentication)。

这是一个仅凭证（credential-only）节点。更多信息请参阅 [自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。在 n8n 官网上查看 [示例工作流及相关内容](https://n8n.io/integrations/shuffler/)。

## 使用 API key（API 密钥）

要配置此凭证，你需要准备：

- **API Key（API 密钥）**：从 **Settings（设置）** 页面获取你的 API 密钥。
