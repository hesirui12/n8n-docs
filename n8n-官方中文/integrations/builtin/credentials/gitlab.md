---
title: GitLab 凭证
description: >-
  GitLab 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  GitLab 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: GitLab credentials
originalFilePath: integrations/builtin/credentials/gitlab.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/gitlab'
url: 'https://docs.n8n.io/integrations/builtin/credentials/gitlab'
layout:
  description:
    visible: false
---

# GitLab 凭证

{% hint style="info" %}
**大白话**：GitLab 是代码托管 + CI/CD 平台（GitHub 的同类产品）。n8n 想自动操作你的 GitLab 项目，有两条路：**API access token（访问令牌）**——去 GitLab 个人设置里生成一个 Access Token，填进 n8n，同时要填你的 GitLab 服务器地址；**OAuth2**——官方推荐的方式，需要先在 GitLab 里注册一个应用，拿到 Application ID 和 Secret。步骤都不难，照着下面做就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [GitLab](../app-nodes/n8n-nodes-base.gitlab.md)
- [GitLab Trigger](../trigger-nodes/n8n-nodes-base.gitlabtrigger.md)

## 支持的验证方式

- API access token（API 访问令牌）
- OAuth2（推荐）

## 相关资源

关于该服务的更多信息，请参考 [GitLab 官方 API 文档](https://docs.gitlab.com/ee/api/rest/)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要一个 [GitLab](https://gitlab.com/) 账号，以及：

- 你的 **GitLab Server（GitLab 服务器）** 的 URL
- 一个 **Access Token（访问令牌）**

配置步骤：

1. 在 GitLab 里点你的头像，然后选择 **Edit profile（编辑资料）**。
2. 在左侧边栏里选择 **Access tokens**。
3. 选择 **Add new token（添加新令牌）**。
4. 给令牌填一个 **Name（名称）**，比如 `n8n integration`。
5. 填令牌的 **expiry date（过期日期）**。如果不填，GitLab 会自动把它设为当前日期之后 365 天。
    - 令牌会在过期日当天 UTC 午夜零点过期。
6. 选择需要的 **Scopes（权限范围）**。对于 [GitLab](../app-nodes/n8n-nodes-base.gitlab.md) 节点，直接用 `api` 范围就能覆盖节点全部功能；或者参考 [个人访问令牌范围](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#personal-access-token-scopes) 按你想用的功能勾选范围。
7. 选择 **Create personal access token（创建个人访问令牌）**。
8. 复制生成的访问令牌，填到你的 n8n 凭证里的 **Access Token** 字段。
9. 在你的 n8n 凭证里填你的 **GitLab Server（GitLab 服务器）** 的 URL。

更多信息请参考 GitLab 的 [创建个人访问令牌文档](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#create-a-personal-access-token)。

## 使用 OAuth2

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是 [自己部署](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，需要先有一个 [GitLab](https://gitlab.com/) 账号，然后新建一个 GitLab 应用：

1. 在 GitLab 里点你的头像，然后选择 **Edit profile（编辑资料）**。
2. 在左侧边栏里选择 **Applications（应用）**。
3. 选择 **Add new application（添加新应用）**。
4. 给你的应用填一个 **Name（名称）**，比如 `n8n integration`。
5. 在 n8n 里复制 **OAuth Redirect URL（OAuth 回调地址）**，把它填到 GitLab 的 **Redirect URI（回调地址）** 里。
6. 选择需要的 **Scopes（权限范围）**。对于 [GitLab](../app-nodes/n8n-nodes-base.gitlab.md) 节点，直接用 `api` 范围就能覆盖节点全部功能；或者参考 [个人访问令牌范围](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#personal-access-token-scopes) 按你想用的功能勾选范围。
6. 选择 **Save application（保存应用）**。
7. 复制 **Application ID（应用 ID）**，填到你的 n8n 凭证里的 **Client ID** 字段。
8. 复制 **Secret（密钥）**，填到你的 n8n 凭证里的 **Client Secret** 字段。

更多信息请参考 GitLab 的 [把 GitLab 配置为 OAuth 2.0 身份验证提供方](https://docs.gitlab.com/ee/integration/oauth_provider.html) 文档，以及 [GitLab OAuth 2.0 身份提供方 API 文档](https://docs.gitlab.com/ee/api/oauth2.html)。
