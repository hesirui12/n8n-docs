---
title: Malcore 凭证
description: >-
  Malcore 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Malcore 的身份。
contentType:
  - integration
  - reference
nodeTitle: Malcore credentials
originalFilePath: integrations/builtin/credentials/malcore.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/malcore'
url: 'https://docs.n8n.io/integrations/builtin/credentials/malcore'
layout:
  description:
    visible: false
---

# Malcore 凭证

> **大白话**：Malcore 是一个分析恶意文件/恶意软件的服务。想让 n8n 调用它，只需一个 API Key，去 Malcore 账号的「Account > API」里拿就行。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 前提条件

注册一个 [Malcore](https://app.malcore.io/register) 账号。

## 相关资源

关于如何用该服务做认证，请参考 [Malcore 的 API 文档](https://malcore.readme.io/reference/)。

这是一个仅凭证（credential-only）节点。更多信息请参考[为现有节点自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。也可以到 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/malcore/)。

## 使用 API key

要配置这个凭证，你需要：

- 一个 **API Key**：从你的 **Account > API**（账号 > API）里获取 API Key。

更多信息请参考[使用 Malcore API](https://support.malcore.io/hc/en-au/articles/17711707070617-Using-the-Malcore-API)。
