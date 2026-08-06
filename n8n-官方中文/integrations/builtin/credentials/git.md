---
title: Git 凭证
description: >-
  Git 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Git 的身份。
contentType:
  - integration
  - reference
nodeTitle: Git credentials
originalFilePath: integrations/builtin/credentials/git.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/git'
url: 'https://docs.n8n.io/integrations/builtin/credentials/git'
layout:
  description:
    visible: false
---

# Git 凭证

{% hint style="info" %}
**大白话**：Git 是程序员用的代码版本管理工具。n8n 有一个 Git 节点，能帮你自动拉取/提交/推送代码到 GitHub、GitLab 等平台。要让它干活，只需要填你代码托管平台账号的 **用户名** 和 **密码**（密码建议用平台生成的访问令牌更安全）就行了。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Git](../core-nodes/n8n-nodes-base.git.md)

## 准备工作

在 [GitHub](https://github.com)、[GitLab](https://about.gitlab.com/) 或类似的平台上创建一个账号，用于配合 [Git](https://git-scm.com) 使用。

## 支持的验证方式

- Basic auth（基础认证，用账号密码登录）

## 相关资源

关于该服务的更多信息，请参考 [Git 官方文档](https://git-scm.com/doc)。

## 使用 basic auth（基础认证）

要配置这个凭证，你需要准备：

- 一个 GitHub、GitLab 或类似平台的 **Username（用户名）**
- 一个 GitHub、GitLab 或类似平台的 **Password（密码）**
