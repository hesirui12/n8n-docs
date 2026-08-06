---
title: Jenkins 凭证
description: >-
  Jenkins 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Jenkins 的身份。
contentType:
  - integration
  - reference
nodeTitle: Jenkins credentials
originalFilePath: integrations/builtin/credentials/jenkins.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/jenkins'
url: 'https://docs.n8n.io/integrations/builtin/credentials/jenkins'
layout:
  description:
    visible: false
---

# Jenkins 凭证

{% hint style="info" %}
**大白话**：Jenkins 是程序员常用的自动化构建工具（自动编译、测试、部署代码）。n8n 要连它，只需要在 Jenkins 里给某个用户生成一个「个人 API Token」，再把用户名、Token、Jenkins 网址填进 n8n 凭证就行。老版本的 Jenkins 注意别用旧的 legacy token。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Jenkins](../app-nodes/n8n-nodes-base.jenkins.md)

## 准备工作

在 [Jenkins](https://www.jenkins.io/) 实例上创建一个账号。

## 支持的验证方式

- API token（API 令牌）

## 相关资源

Jenkins 没有提供公开的 API 文档；每个页面的 API 文档可以在用户界面右下角找到。关于该服务的更多信息，请参考这些详细页面。API 及 API 封装相关的信息，请参考 [Jenkins Remote Access API](https://www.jenkins.io/doc/book/using/remote-access-api/)。

## 使用 API token（API 令牌）

要配置这个凭证，你需要准备：

- **Jenkins Username（Jenkins 用户名）**：Token 所属的那个用户的用户名。
- **Personal API Token（个人 API 令牌）**：在用户的 **profile details（个人资料详情）> Configure（配置）> Add new token（添加新令牌）** 里生成。更详细的步骤请参考 [Stack Overflow 上的说明](https://stackoverflow.com/questions/45466090/how-to-get-the-api-token-for-jenkins)。
- **Jenkins Instance URL（Jenkins 实例地址）**

Jenkins 在 2018 年重建了 API token 的设置方式。如果你在用老版本的 Jenkins，请确认自己用的是新版 API token 而不是 legacy（旧版）token。更多信息请参考 [安全加固：Jenkins 2.129+ 的新 API token 系统](https://www.jenkins.io/blog/2018/07/02/new-api-token-system/)。
