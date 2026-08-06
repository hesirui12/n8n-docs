---
title: npm 凭证
description: >-
  npm 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  npm 的身份。
contentType:
  - integration
  - reference
nodeTitle: npm credentials
originalFilePath: integrations/builtin/credentials/npm.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/npm'
url: 'https://docs.n8n.io/integrations/builtin/credentials/npm'
layout:
  description:
    visible: false
---

# npm 凭证

{% hint style="info" %}
**大白话**：npm 是 JavaScript/Node.js 世界的「应用商店」，几百万个代码包（如 React、Express）都从它那里下载。n8n 想帮你发布、管理 npm 包，需要一个 **Access Token（访问令牌）**：登录 npm 后在个人菜单里选 **Access Tokens（访问令牌）** 生成一个。另外如果你们公司用的是私有 npm 仓库，记得把 **Registry URL（仓库地址）** 改成你们自己的，否则用默认的公共仓库地址就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [npm](../app-nodes/n8n-nodes-base.npm.md)

## 准备工作

创建一个 [npm](https://www.npmjs.com/) 账号。

## 支持的验证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [npm 外部集成文档](https://docs.npmjs.com/integrations/integrating-npm-with-external-services)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- 一个 **Access Token（访问令牌）**：从你的个人资料菜单里选择 **Access Tokens（访问令牌）** 来创建一个访问令牌。更详细的步骤请参考 [npm 的创建和查看访问令牌文档](https://docs.npmjs.com/creating-and-viewing-access-tokens)。
- 一个 **Registry URL（仓库地址）**：如果你在使用自定义的 npm 仓库，把 **Registry URL（仓库地址）** 改成那个自定义仓库。否则，保留公共仓库的默认值。
