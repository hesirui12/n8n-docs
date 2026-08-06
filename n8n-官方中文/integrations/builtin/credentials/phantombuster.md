---
title: PhantomBuster 凭证
description: >-
  PhantomBuster 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  PhantomBuster 的身份。
contentType:
  - integration
  - reference
nodeTitle: PhantomBuster credentials
originalFilePath: integrations/builtin/credentials/phantombuster.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/phantombuster'
url: 'https://docs.n8n.io/integrations/builtin/credentials/phantombuster'
layout:
  description:
    visible: false
---

# PhantomBuster 凭证

{% hint style="info" %}
**大白话**：PhantomBuster 是「社交媒体自动化」工具（自动加好友、自动发消息、抓取领英/推特数据等）。n8n 连它只需要一把 **API Key（API 密钥）**，去 PhantomBuster 的 Workspace settings（工作区设置）> Third party API keys 里新建一把，复制进 n8n 即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [PhantomBuster](../app-nodes/n8n-nodes-base.phantombuster.md)

## 准备工作

注册一个 [PhantomBuster](https://www.phantombuster.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [PhantomBuster 官方 API 文档](https://hub.phantombuster.com/reference)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：要获取 API key，进入 [**Workspace settings（工作区设置）**](https://phantombuster.com/workspace-settings) **> Third party API keys（第三方 API 密钥）**，点击 **+ Add API Key（+ 添加 API 密钥）**。更多说明请参考[如何找到我的 API key](https://hub.phantombuster.com/docs/api#how-to-find-my-api-key)。
