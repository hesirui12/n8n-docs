---
title: Peekalink 凭证
description: >-
  Peekalink 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Peekalink 的身份。
contentType:
  - integration
  - reference
nodeTitle: Peekalink credentials
originalFilePath: integrations/builtin/credentials/peekalink.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/peekalink'
url: 'https://docs.n8n.io/integrations/builtin/credentials/peekalink'
layout:
  description:
    visible: false
---

# Peekalink 凭证

{% hint style="info" %}
**大白话**：Peekalink 是一个「链接预览」服务——给它一个网址，它返回这个网页的标题、缩略图、简介等卡片信息。n8n 连它只需要一把 **API Key（API 密钥）**，登录 Peekalink 后台，在「Your API Key」区域复制即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Peekalink](../app-nodes/n8n-nodes-base.peekalink.md)

## 准备工作

注册一个 [Peekalink](https://www.peekalink.io/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Peekalink 官方 API 文档](https://docs.peekalink.io/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：登录你的 Peekalink [后台](https://www.peekalink.io/app/overview)，在 **Your API Key（你的 API 密钥）** 区域复制 key。更多说明请参考[获取你的 API key](https://docs.peekalink.io/setup#get-your-api-key)。
