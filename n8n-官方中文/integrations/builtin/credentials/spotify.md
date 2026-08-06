---
title: Spotify 凭证
description: >-
  Spotify 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Spotify 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Spotify credentials
originalFilePath: integrations/builtin/credentials/spotify.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/spotify'
url: 'https://docs.n8n.io/integrations/builtin/credentials/spotify'
layout:
  description:
    visible: false
---

# Spotify 凭证

{% hint style="info" %}
**大白话**：Spotify 是超火的音乐流媒体平台。n8n 想操作你的 Spotify（比如查歌单、收藏歌曲），需要先注册一个 **Spotify 开发者应用**，拿到 **Client ID（客户端 ID）** 和 **Client Secret（客户端密钥）**，然后通过 **OAuth2（网页授权登录）** 连上。官方云版 n8n 填两个值就能连；自己搭建（自托管）的 n8n 才需要去建应用。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Spotify](../app-nodes/n8n-nodes-base.spotify.md)

## 支持的验证方式

- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Spotify 官方 Web API 文档](https://developer.spotify.com/documentation/web-api)。

## 使用 OAuth2（网页授权登录）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是[自托管](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，你需要一个 [Spotify 开发者](https://developer.spotify.com/) 账号，这样你才能创建 Spotify 应用：

1. 打开 [Spotify 开发者控制台](https://developer.spotify.com/dashboard)。
2. 选择 **Create an app（创建应用）**。
3. 输入一个 **App name（应用名称）**，比如 `n8n integration`。
4. 输入 **App description（应用描述）**。
5. 从 n8n 复制 **OAuth Redirect URL（OAuth 回调地址）**，把它填到 Spotify 应用的 **Redirect URI（回调地址）** 里。
6. 勾选同意 Spotify 服务条款（Terms of Service）和品牌规范（Branding Guidelines）的复选框。
7. 选择 **Create（创建）**。这时会打开 **App overview（应用概览）** 页面。
8. 复制 **Client ID（客户端 ID）**，填进 n8n 的凭证里。
9. 复制 **Client Secret（客户端密钥）**，填进 n8n 的凭证里。
10. 选择 **Connect my account（连接我的账号）**，按屏幕提示完成授权。

更多信息请参考 [Spotify Apps（Spotify 应用）](https://developer.spotify.com/documentation/web-api/concepts/apps)。
