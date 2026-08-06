---
title: Travis CI 凭证
description: >-
  Travis CI 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Travis CI 的身份。
contentType:
  - integration
  - reference
nodeTitle: Travis CI credentials
originalFilePath: integrations/builtin/credentials/travisci.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/travisci'
url: 'https://docs.n8n.io/integrations/builtin/credentials/travisci'
layout:
  description:
    visible: false
---

# Travis CI 凭证

{% hint style="info" %}
**大白话**：Travis CI 是持续集成/持续部署（CI/CD）服务——你每次把代码推送到 GitHub，它自动帮你跑测试、构建。n8n 连它只需要一个 **API Token（API 令牌）**，从你的 Travis CI 账号设置里拿，或者用命令行客户端生成一个，填进来就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Travis CI](../app-nodes/n8n-nodes-base.travisci.md)

## 先决条件

注册一个 [Travis CI](https://travis-ci.com/) 账号。

## 支持的验证方式

- API token（API 令牌）

## 相关资源

关于该服务的更多信息，请参考 [Travis CI 官方 API 文档](https://docs.travis-ci.com/user/developer/)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要：

- 一个 **API Token（API 令牌）**：从 **Account Settings（账号设置）>** [**API Token（API 令牌）**](https://packagecloud.io/api_token) 获取你的 API token，或者通过 Travis CI [命令行客户端](https://github.com/travis-ci/travis.rb#installation)生成一个。
