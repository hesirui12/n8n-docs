---
title: VirusTotal 凭证
description: >-
  VirusTotal 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 VirusTotal 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: VirusTotal credentials
originalFilePath: integrations/builtin/credentials/virustotal.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/virustotal'
url: 'https://docs.n8n.io/integrations/builtin/credentials/virustotal'
layout:
  description:
    visible: false
---

# VirusTotal 凭证

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

> **大白话**：VirusTotal 是多引擎病毒扫描网站。登录后点右上角头像菜单，找到「API key」页面把密钥复制出来，填进 n8n 的 API Token 字段就行。注意这个只有凭证、没有配套节点，需要配合「自定义 API 操作」功能使用。

## 前置条件

创建一个 [VirusTotal](https://www.virustotal.com) 账户。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

更多关于该服务的信息，请参考 [VirusTotal 的文档](https://docs.virustotal.com/reference/overview)。

这是一个仅凭证（credential-only）节点。更多信息请参考[现有节点的自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/virustotal/)。

## 使用 API key

要配置此凭证，你需要：

- **API Token**：前往你的 **user account menu > API key**（用户账户菜单 > API 密钥）获取 API key，填入 n8n 凭证的 **API Token** 字段。更多信息请参考 [API authentication](https://docs.virustotal.com/reference/authentication)。
