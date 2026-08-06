---
title: Bannerbear 凭证
description: >-
  Bannerbear 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Bannerbear 的身份。
contentType:
  - integration
  - reference
nodeTitle: Bannerbear credentials
originalFilePath: integrations/builtin/credentials/bannerbear.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/bannerbear'
url: 'https://docs.n8n.io/integrations/builtin/credentials/bannerbear'
layout:
  description:
    visible: false
---

# Bannerbear 凭证

> 大白话：Bannerbear 是一个「自动生成图片/海报」的在线工具，比如给商品图自动加文字、套模板。你要做的只有一件事：去它的后台建一个项目，复制一把 API Key（项目钥匙）填进 n8n，之后 n8n 就能替你去 Bannerbear 里自动做图了。

这些凭证可以用来验证以下节点的身份：

- [Bannerbear](../app-nodes/n8n-nodes-base.bannerbear.md)

## 准备工作

先注册一个 [Bannerbear](https://www.BannerBear.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Bannerbear 官方 API 文档](https://developers.bannerbear.com/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **Project API Key（项目 API 密钥）**：要生成 API key，先创建一个 Bannerbear 项目。然后进入 **Settings > API Key**（设置 > API 密钥）就能看到。更详细的步骤请参考 [Bannerbear API 身份验证文档](https://developers.bannerbear.com/#authentication)。
