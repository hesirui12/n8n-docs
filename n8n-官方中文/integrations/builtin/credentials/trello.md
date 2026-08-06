---
title: Trello 凭证
description: >-
  Trello 凭证文档。使用这些凭证在 n8n（工作流自动化平台）中对 Trello 进行身份验证。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Trello credentials
originalFilePath: integrations/builtin/credentials/trello.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/trello'
url: 'https://docs.n8n.io/integrations/builtin/credentials/trello'
layout:
  description:
    visible: false
---

# Trello 凭证

> **大白话**：想用 n8n 连接 Trello，需要去 Trello 官网申请一对「钥匙 + 令牌」。别怕，就是跟着下面几步点一点、复制粘贴的事。

你可以使用这些凭证对以下节点进行身份验证：

- [Trello](../app-nodes/n8n-nodes-base.trello.md)
- [Trello Trigger](../trigger-nodes/n8n-nodes-base.trellotrigger.md)

## 支持的认证方式

- API key（API 密钥）

## 相关资源

更多关于该服务的信息，请参考 [Trello 的 API 文档](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/)。

## 使用 API key

要配置此凭证，你需要一个 [Trello](https://trello.com/) 账户，以及：

- **API Key**（API 密钥）
- **API Token**（API 令牌）

要同时生成 API Key 和 API Token，你需要创建一个 Trello Power-Up（小应用）：

1. 打开 Trello 的 [Power-Up 管理门户](https://trello.com/power-ups/admin)。
2. 选择 **New**（新建）。
3. 为你的 Power-Up 输入一个 **Name**（名称），例如 `n8n integration`。
4. 选择 Power-Up 可以访问的 **Workspace**（工作区）。
5. **iframe connector URL**（iframe 连接器 URL）留空即可。
6. 输入合适的联系信息。
7. 选择 **Create**（创建）。
8. 创建后应该会自动打开 **API Key** 页面。（如果没有，请手动打开该页面。）
9. 选择 **Generate a new API Key**（生成新的 API 密钥）。
10. 从 Trello 复制 **API key**，填入 n8n 凭证中。
11. 在 Trello 的 API key 页面，把你的 n8n 基础 URL 填写为 **Allowed origin**（允许的来源）。
12. 在 **Capabilities**（权限能力）中确保勾选你需要的选项。
13. 点击 Trello **API Key** 旁边的 **Token** 链接。
14. 出现提示时选择 **Allow**（允许），授予其请求的所有权限。
15. 复制 Trello 的 **Token**，填入 n8n 凭证中的 **API Token** 字段。

更多关于 API key 和 token 的信息，请参考 Trello 的 [API 入门](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/#api-introduction)。更多关于创建 Power-Up 的信息，请参考 Trello 的 [Power-Up 管理门户](https://developer.atlassian.com/cloud/trello/guides/power-ups/managing-power-ups/#power-up-admin-portal)。
