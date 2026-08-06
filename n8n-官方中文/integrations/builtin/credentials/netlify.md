---
title: Netlify 凭证
description: >-
  Netlify 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Netlify 的身份。
contentType:
  - integration
  - reference
nodeTitle: Netlify credentials
originalFilePath: integrations/builtin/credentials/netlify.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/netlify'
url: 'https://docs.n8n.io/integrations/builtin/credentials/netlify'
layout:
  description:
    visible: false
---

# Netlify 凭证

{% hint style="info" %}
**大白话**：Netlify 是一个很流行的网站托管/部署平台（把 GitHub 上的代码一键部署成网站）。n8n 想自动部署、管理你的 Netlify 站点，只需要一个 **Access Token（访问令牌）**：登录 Netlify 后，在 **Applications > Personal Access Tokens（应用 > 个人访问令牌）** 里生成一个，复制粘贴进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Netlify](../app-nodes/n8n-nodes-base.netlify.md)
- [Netlify Trigger](../trigger-nodes/n8n-nodes-base.netlifytrigger.md)

## 准备工作

创建一个 [Netlify](https://netlify.com/) 账号。

## 支持的验证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Netlify 官方 API 文档](https://docs.netlify.com/api/get-started/)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- 一个 **Access Token（访问令牌）**：在 **Applications > Personal Access Tokens（应用 > 个人访问令牌）** 里生成一个访问令牌。更详细的步骤请参考 [Netlify API Authentication（API 身份验证）](https://docs.netlify.com/api/get-started/#authentication)。
