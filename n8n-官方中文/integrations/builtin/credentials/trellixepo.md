---
title: Trellix ePO 凭证
description: >-
  Trellix ePO 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Trellix ePO 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Trellix ePO credentials
originalFilePath: integrations/builtin/credentials/trellixepo.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/trellixepo'
url: 'https://docs.n8n.io/integrations/builtin/credentials/trellixepo'
layout:
  description:
    visible: false
---

# Trellix ePO 凭证

{% hint style="info" %}
**大白话**：Trellix ePO（ePolicy Orchestrator，安全策略编排器）是企业的防病毒/安全策略管理平台（集中管理全网电脑的安全防护）。n8n 连它用的是**基础认证（Basic auth）**：填**用户名**和**密码**就行。n8n 会把它们拼成 `-u username:pw` 这样的格式发给 Trellix 的 API。这个凭证是**仅凭证节点**，用来配合「自定义 API 操作」调用 Trellix ePO 的接口。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 先决条件

注册一个 [Trellix ePolicy Orchestrator](https://www.trellix.com/products/epo/) 账号。

## 支持的验证方式

- Basic auth（基础认证）

## 相关资源

关于该服务的更多信息，请参考 [Trellix ePO 官方文档](https://docs.trellix.com/bundle/epolicy-orchestrator-web-api-reference-guide/page/GUID-D87A6839-AED2-47B0-BE93-5BF83F710278.html)。

这是一个仅凭证节点。更多内容请参考[为现有节点自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。在 n8n 网站上查看[示例工作流和相关内容](https://n8n.io/integrations/trellix-epo/)。

## 使用 Basic auth（基础认证）

要配置这个凭证，你需要：

- 一个 **Username（用户名）**，用于连接。
- 一个 **Password（密码）**，该用户账号的密码。

n8n 会用这些字段构建 `-u` 参数，格式为 `-u username:pw`。更多信息请参考 [Web API 基础](https://docs.trellix.com/bundle/epolicy-orchestrator-web-api-reference-guide/page/GUID-2503B69D-2BCE-4491-9969-041838B39C1F.html)。
