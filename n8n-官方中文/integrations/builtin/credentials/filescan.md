---
title: Filescan 凭证（Filescan credentials）
description: >-
  Filescan 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Filescan。
contentType:
  - integration
  - reference
nodeTitle: Filescan 凭证（Filescan credentials）
originalFilePath: integrations/builtin/credentials/filescan.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/filescan'
url: 'https://docs.n8n.io/integrations/builtin/credentials/filescan'
layout:
  description:
    visible: false
---

# Filescan 凭证（Filescan credentials）

> **大白话**：Filescan 是在线文件沙箱检测服务——上传可疑文件，它帮你分析是不是恶意软件。n8n 连它只需要一个 **API Key**：登录 Filescan 后，在 **profile settings**（个人设置）里的 **API Key** 处生成即可。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前置条件（Prerequisites）

创建一个 [Filescan](https://www.filescan.io/auth/signup/) 账号。

## 相关资源（Related resources）

更多关于如何与该服务进行身份认证的信息，请参考 [Filescan 的 API 文档](https://www.filescan.io/api/docs)。

这是一个纯凭证（credential-only）节点。想了解更多，请参考 [自定义 API 操作（Custom API operations）](../custom-api-actions-for-existing-nodes.md)。你也可以在 n8n 官网上查看 [示例工作流及相关内容](https://n8n.io/integrations/filescan/)。

## 使用 API key（Using API key）

要配置这个凭证，你需要：

- 一个 **API Key**：从你的 [**profile settings**](https://www.filescan.io/users/profile)（个人设置）**> API Key** 中生成。更多信息请参考 [Filescan 常见问题（FAQ）](https://www.filescan.io/help/faq)。
