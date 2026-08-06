---
title: Beeminder 凭证
description: >-
  Beeminder 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Beeminder 的身份。
contentType:
  - integration
  - reference
nodeTitle: Beeminder credentials
originalFilePath: integrations/builtin/credentials/beeminder.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/beeminder'
url: 'https://docs.n8n.io/integrations/builtin/credentials/beeminder'
layout:
  description:
    visible: false
---

# Beeminder 凭证

> 大白话：Beeminder 是一个「用钱逼你坚持习惯」的目标打卡工具。n8n 想帮你自动往 Beeminder 里提交进度数据，需要一把只属于你个人的 Auth Token（身份令牌）。拿到令牌后，把「用户名 + 令牌」填进 n8n 就完成了。

这些凭证可以用来验证以下节点的身份：

- [Beeminder](../app-nodes/n8n-nodes-base.beeminder.md)

## 准备工作

先注册一个 [Beeminder](https://www.beeminder.com/) 账号。

## 支持的验证方式

- API user token（API 用户令牌）

## 相关资源

关于该服务的更多信息，请参考 [Beeminder 官方 API 文档](https://api.beeminder.com/#beeminder-api-reference)。

## 使用 API user token（API 用户令牌）

要配置这个凭证，你需要准备：

- 一个 **User（用户名）**：必须和生成 Auth Token 的那个用户保持一致。
- 该用户的个人 **Auth Token（身份令牌）**。可以用下面任意一种方式生成：
    - 图形界面方式：进入 **Account Settings（账户设置）** 里的 [Apps & API（应用与 API）](https://help.beeminder.com/article/110-apps-and-api#API-token) 选项。
    - API 方式：调用 [`auth_token` API 接口](https://api.beeminder.com/#auth) 获取。
