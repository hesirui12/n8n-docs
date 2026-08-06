---
title: Box 凭证
description: >-
  Box 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证 Box
  （企业网盘）的身份。
contentType:
  - integration
  - reference
nodeTitle: Box credentials
originalFilePath: integrations/builtin/credentials/box.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/box'
url: 'https://docs.n8n.io/integrations/builtin/credentials/box'
layout:
  description:
    visible: false
---

# Box 凭证

> 大白话：Box 是国外常用的企业网盘。n8n 想帮你自动上传/下载/管理 Box 里的文件，用的是 OAuth2 网页授权方式：在 n8n 里填好凭证名称，点一下「Connect my account（连接我的账号）」，然后按浏览器里的提示登录 Box 授权即可，全程不用手动抄什么密钥。

这些凭证可以用来验证以下节点的身份：

- [Box](../app-nodes/n8n-nodes-base.box.md)
- [Box Trigger（触发器）](../trigger-nodes/n8n-nodes-base.boxtrigger.md)

## 准备工作

先注册一个 [Box](https://www.box.com/) 账号。

## 支持的验证方式

- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Box 官方 API 文档](https://developer.box.com/reference/)。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你需要从零开始配置 OAuth2，或者想详细了解网页授权流程中发生了什么，你需要先创建一个 Custom App（自定义应用）。更多信息请参考 [Box OAuth2 配置文档](https://developer.box.com/guides/authentication/oauth2/oauth2-setup/)。
