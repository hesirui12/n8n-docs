---
title: Kitemaker 凭证
description: >-
  Kitemaker 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Kitemaker 的身份。
contentType:
  - integration
  - reference
nodeTitle: Kitemaker credentials
originalFilePath: integrations/builtin/credentials/kitemaker.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/kitemaker'
url: 'https://docs.n8n.io/integrations/builtin/credentials/kitemaker'
layout:
  description:
    visible: false
---

# Kitemaker 凭证

{% hint style="info" %}
**大白话**：Kitemaker 是一个偏「产品研发团队」用的轻量项目管理工具（管理任务、Issue、路线图）。n8n 连它只要一个 **Personal Access Token（个人访问令牌）**：在 Kitemaker 的 **Manage > Developer settings（管理 > 开发者设置）** 里生成，复制粘贴进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Kitemaker](../app-nodes/n8n-nodes-base.kitemaker.md)

## 准备工作

创建一个 [Kitemaker](https://www.kitemaker.co/) 账号。

## 支持的验证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Kitemaker 的 API 文档](https://kitemakerhq.github.io/rest-docs/)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- 一个 **Personal Access Token（个人访问令牌）**：从 **Manage（管理）> Developer settings（开发者设置）** 里生成。更详细的步骤请参考 [API 认证](https://kitemakerhq.github.io/rest-docs/#documentationauthentication)。
