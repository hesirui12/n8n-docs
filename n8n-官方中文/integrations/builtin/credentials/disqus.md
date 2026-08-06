---
title: Disqus 凭证（Disqus credentials）
description: >-
  Disqus 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Disqus。
contentType:
  - integration
  - reference
nodeTitle: Disqus 凭证（Disqus credentials）
originalFilePath: integrations/builtin/credentials/disqus.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/disqus'
url: 'https://docs.n8n.io/integrations/builtin/credentials/disqus'
layout:
  description:
    visible: false
---

# Disqus 凭证（Disqus credentials）

> **大白话**：Disqus 是给网站加评论功能的第三方服务。n8n 想管理你的 Disqus 评论，只需要一个 **Access Token**（访问令牌）——它其实就是你在 Disqus 注册「API 应用」后拿到的 API Key，换个名字填进 n8n 就行。

你可以使用这些凭证来认证以下节点：

- [Disqus](../app-nodes/n8n-nodes-base.disqus.md)

## 前置条件（Prerequisites）

- 创建一个 [Disqus](https://www.disqus.com/) 账号。
- 注册一个 [API 应用（API application）](https://help.disqus.com/en/articles/1717083-how-to-create-an-api-application)。

## 支持的认证方式（Supported authentication methods）

- API access token（API 访问令牌）

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Disqus 的 API 文档](https://disqus.com/api/docs/)。

## 使用 API access token（Using API access token）

要配置这个凭证，你需要：

- 一个 **Access Token**（访问令牌）：注册完 API 应用后，复制 **API Key**，把它作为 **Access Token** 填入 n8n。
