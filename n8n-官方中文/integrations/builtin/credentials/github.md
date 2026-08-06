---
title: GitHub 凭证
description: >-
  GitHub 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  GitHub 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: GitHub credentials
originalFilePath: integrations/builtin/credentials/github.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/github'
url: 'https://docs.n8n.io/integrations/builtin/credentials/github'
layout:
  description:
    visible: false
---

# GitHub 凭证

{% hint style="info" %}
**大白话**：GitHub 是全世界最大的代码托管平台。n8n 想自动操作你的仓库（建 issue、看 PR、读代码等），有两条路：**API access token（访问令牌）**——去 GitHub 后台生成一个 Personal Access Token 填进来，简单直接，所有 GitHub 节点都能用；**OAuth2**——走标准授权流程，点一下「登录 GitHub」就行，但只有 GitHub 和 GitHub Trigger 两个节点支持，GitHub Document Loader 节点不支持 OAuth。小白推荐用第一种（API token）。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [GitHub](../app-nodes/n8n-nodes-base.github.md)
- [GitHub Trigger](../trigger-nodes/n8n-nodes-base.githubtrigger.md)
- [GitHub Document Loader](../cluster-nodes/sub-nodes/n8n-nodes-langchain.documentgithubloader.md)：这个节点不支持 OAuth。

## 准备工作

创建一个 [GitHub](https://github.com/) 账号。

## 支持的验证方式

- API access token（API 访问令牌）：任何 GitHub 节点都可以用这种方式。
- OAuth2：只能用于 [GitHub](../app-nodes/n8n-nodes-base.github.md) 和 [GitHub Trigger](../trigger-nodes/n8n-nodes-base.githubtrigger.md) 节点；不要用在 [GitHub Document Loader](../cluster-nodes/sub-nodes/n8n-nodes-langchain.documentgithubloader.md) 上。

## 相关资源

关于该服务的更多信息，请参考 [GitHub 官方 API 文档](https://docs.github.com/en/rest)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要一个 [GitHub](https://github.com/) 账号。

设置这个凭证分两步：

1. [生成 GitHub personal access token（个人访问令牌）](#生成-personal-access-token个人访问令牌)。
2. [设置凭证](#设置凭证)。

详细步骤请看下面的小节。

### 生成 personal access token（个人访问令牌）

{% hint style="info" %}
**推荐的访问令牌类型**

n8n 推荐使用 personal access token (classic)（经典个人访问令牌）。GitHub 的细粒度（fine-grained）个人访问令牌虽然可以限制只访问特定仓库和特定权限，但它有一些 [限制](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#fine-grained-personal-access-tokens-limitations)。
{% endhint %}

生成你的 personal access token 的步骤：

1. 如果你还没验证过邮箱，先去 GitHub 验证你的邮箱地址。更多信息请参考 [验证邮箱地址](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address)。
2. 打开你的 GitHub 个人资料页的 [Settings（设置）](https://github.com/settings/profile)。
3. 在左侧导航里选择 [**Developer settings（开发者设置）**](https://github.com/settings/apps)。
4. 在左侧导航的 **Personal access tokens** 下面，选择 **Tokens (classic)**。
5. 选择 **Generate new token > Generate new token (classic)**。
6. 在 **Note（备注）** 字段里给令牌起个容易认的名字，比如 `n8n integration`。
7. 选择你想要的令牌 **Expiration（有效期）**，或者选 **No expiration（永不过期）**。
8. 为令牌选择 **Scopes（权限范围）**。对于大多数 n8n GitHub 节点，勾选 `repo` 范围即可。
    - 没有勾选任何范围的令牌只能访问公开信息。
9. 选择 **Generate token（生成令牌）**。
10. 复制这个令牌。

更多信息请参考 [创建个人访问令牌（classic）](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)。关于 GitHub 权限范围的更多信息，请参考 [OAuth 应用的 Scopes](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)。

### 设置凭证

然后在你的 n8n 凭证里：

1. 如果你不是用 GitHub Enterprise Server，**GitHub server** 的 URL 保持默认不要改。
    - 如果你用的是 [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server@3.9/admin/overview/about-github-enterprise-server)，把 **GitHub server** 改成你自己服务器的 URL。
2. 填你的 **User（用户名）**，和你 GitHub 个人资料里显示的名字一致。
3. 填你上面生成的 **Access Token（访问令牌）**。

## 使用 OAuth2

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是 [自己部署 n8n](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n)，需要新建一个 GitHub [OAuth app](https://docs.github.com/en/apps/oauth-apps)：

1. 打开你的 GitHub 个人资料页的 [Settings（设置）](https://github.com/settings/profile)。
2. 在左侧导航里选择 [**Developer settings（开发者设置）**](https://github.com/settings/apps)。
3. 在左侧导航里选择 **OAuth apps**。
4. 选择 **New OAuth App**。
    - 如果你之前没创建过应用，这里可能显示的是 **Register a new application**。选它即可。
5. 填一个 **Application name（应用名称）**，比如 `n8n integration`。
6. 填你应用网站的 **Homepage URL（主页地址）**。
7. 如果愿意，可以填可选的 **Application description（应用描述）**，GitHub 会把它展示给终端用户。
8. 从 n8n 里复制 **OAuth Redirect URL（OAuth 回调地址）**，粘贴到 GitHub 的 **Authorization callback URL（授权回调地址）** 里。
9. 选择 **Register application（注册应用）**。
10. 复制生成的 **Client ID（客户端 ID）** 和 **Client Secret（客户端密钥）**，填到你的 n8n 凭证里。

关于授权过程的更多信息，请参考 [GitHub 授权 OAuth 应用文档](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)。
