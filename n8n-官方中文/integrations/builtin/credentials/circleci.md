---
title: CircleCI 凭证
description: >-
  CircleCI 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  CircleCI（持续集成工具）的身份。
contentType:
  - integration
  - reference
nodeTitle: CircleCI credentials
originalFilePath: integrations/builtin/credentials/circleci.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/circleci'
url: 'https://docs.n8n.io/integrations/builtin/credentials/circleci'
layout:
  description:
    visible: false
---

# CircleCI 凭证

> 大白话：CircleCI 是自动化测试/构建代码的工具（持续集成 CI）。n8n 想帮你看构建状态、触发构建等，需要你去 CircleCI 账号设置里创建一把 Personal API Token（个人 API 令牌）填进 n8n 就行。

这些凭证可以用来验证以下节点的身份：

- [CircleCI](../app-nodes/n8n-nodes-base.circleci.md)

## 准备工作

先注册一个 [CircleCI](https://circleci.com/) 账号。

## 支持的验证方式

- Personal API token（个人 API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [CircleCI 官方 API 文档](https://circleci.com/docs/api/v2/index.html)。

## 使用 personal API token（个人 API 令牌）

要配置这个凭证，你需要准备：

- 一个 **Personal API Token（个人 API 令牌）**：如何创建，请参考 [CircleCI 创建个人 API 令牌文档](https://circleci.com/docs/managing-api-tokens/#creating-a-personal-api-token)。
