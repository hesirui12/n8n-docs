---
title: Stackby 凭证
description: >-
  Stackby 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Stackby 的身份。
contentType:
  - integration
  - reference
nodeTitle: Stackby credentials
originalFilePath: integrations/builtin/credentials/stackby.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/stackby'
url: 'https://docs.n8n.io/integrations/builtin/credentials/stackby'
layout:
  description:
    visible: false
---

# Stackby 凭证

{% hint style="info" %}
**大白话**：Stackby 是一款「表格 + 数据库」工具（类似 Excel 与数据库的合体）。n8n 想操作它，只需要去 Stackby 的账号设置里生成一个 **API Key（API 密钥）**，填进来就行，非常简单。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Stackby](../app-nodes/n8n-nodes-base.stackby.md)

## 先决条件

注册一个 [Stackby](https://stackby.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Stackby 官方 API 文档](https://www.postman.com/lively-equinox-180638/stackby-s-public-workspace/overview)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：去 [**Account Settings（账号设置）> API**](https://www.stackby.com/account) 页面创建一个 API Key。更多信息请参考 [API Key 获取方法](https://help.stackby.com/en/articles/124-how-to-get-your-api-key-in-stackby)。
