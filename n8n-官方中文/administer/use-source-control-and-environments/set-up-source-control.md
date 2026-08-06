---
title: Set up source control
description: Link n8n to your Git provider.
contentType: howto
nodeTitle: Set up source control
originalFilePath: source-control-environments/setup.md
originalUrl: 'https://docs.n8n.io/source-control-environments/setup'
url: >-
  https://docs.n8n.io/administer/use-source-control-and-environments/set-up-source-control
layout:
  description:
    visible: false
---

# 为环境设置源码控制 (Set up source control for environments)

把 Git 仓库链接到 n8n 实例，并配置你的源码控制。

n8n 用源码控制来提供"环境"（environments）功能。想了解更多，请参阅[n8n 中的环境 (Environments in n8n)](work-with-environments.md)。

{% hint style="info" %}
**小白解释：本章目标**

读完之后，你的 n8n 实例就能连接上自己的 Git 仓库，可以开始推送（push）/拉取（pull）工作了。整个过程分 4 步：准备仓库和分支 → 在 n8n 里配置 Git → 配置认证（SSH 或 HTTPS）→ 连接并保存设置。
{% endhint %}

## 前置条件 (Prerequisites)

要在 n8n 中使用源码控制，你需要一个 Git 仓库，并且要满足以下两种访问方式之一：

- SSH 访问（使用 deploy keys，部署密钥），或者
- HTTPS 访问（使用 Personal Access Tokens，个人访问令牌）

本文档假设你已经熟悉 Git 和你的 Git 服务商（比如 GitHub、GitLab 等）。

## 第 1 步：设置你的仓库和分支 (Step 1: Set up your repository and branches)

对于全新设置：

1. 创建一个专门给 n8n 用的新仓库。
1. 创建你需要的分支。例如，如果你打算为"测试"和"生产"准备不同的环境，就为每个环境各建一个分支。

如果你想了解你的使用场景需要哪些分支，请参阅[分支模式 (Branch patterns)](choose-branching-patterns.md)。

## 第 2 步：在 n8n 里配置 Git (Step 2: Configure Git in n8n)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/UqTgO2VbAzax4T8z4Fyh/" %}

## 第 3 步：设置认证 (Step 3: Set up authentication)

根据你选择的连接方式来配置认证。

### SSH 认证（使用部署密钥）(SSH authentication using deploy keys)

使用 n8n 提供的 SSH 密钥，为仓库创建一个部署密钥（deploy key），从而设置 SSH 访问。该密钥必须具有写入（write）权限。

具体步骤取决于你的 Git 服务商。常见服务商的帮助链接：

* [GitHub | 管理部署密钥 (Managing deploy keys)](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys)
* [GitLab | 部署密钥 (Deploy keys)](https://docs.gitlab.com/ee/user/project/deploy_keys/)

### HTTPS 认证（使用个人访问令牌）(HTTPS authentication using Personal Access Tokens)

创建一个具有仓库访问权限的个人访问令牌（Personal Access Token，简称 PAT）。

常见服务商创建 PAT 的帮助链接：

* [GitHub | 管理个人访问令牌 (Managing personal access tokens)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
* [GitLab | 个人访问令牌 (Personal access tokens)](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
* [Bitbucket | 应用密码 (App passwords)](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/)

你的令牌需要以下权限：

- 仓库读写权限（Repository read/write）
- 内容读写权限（Contents read/write，针对 GitHub）
- 源代码拉取/推送权限（Source code pull/push，针对 GitLab）

{% hint style="info" %}
**小白解释：SSH 和 HTTPS 选哪个？**

* **SSH + 部署密钥**：部署密钥是"只针对某个仓库"的专用钥匙，权限范围小，更安全，是官方推荐的方式。
* **HTTPS + 个人访问令牌（PAT）**：PAT 相当于你账号的一把"子密码"，配置起来直观一些。注意给 PAT 授权时要勾选上面列出的权限，别多给。
{% endhint %}

## 第 4 步：连接 n8n 并配置你的实例 (Step 4: Connect n8n and configure your instance)

1. 在 n8n 的 **Settings**（设置）> **Environments**（环境）中，选择 **Connect**（连接）。n8n 会连接到你的 Git 仓库。
1. 在 **Instance settings**（实例设置）下，选择当前 n8n 实例要使用哪个分支。
1. **可选**：选择 **Protected instance**（受保护实例），防止用户在此实例中编辑受源码控制的资源。这对保护生产实例很有用。
1. **可选**：为实例选择一个自定义颜色。这个颜色会显示在菜单中、源码控制的推送和拉取按钮旁边，帮助用户知道自己当前在哪个实例中。
1. 选择 **Save settings**（保存设置）。

{% hint style="info" %}
**小白解释：最后两步是干什么的？**

* **Protected instance（受保护实例）**：生产环境推荐开启。开启后，普通用户就不能直接改里面的工作流了，所有改动必须从开发环境推送过来——防止线上被误改。
* **自定义颜色**：如果你同时开好几个实例的页面，不同颜色能一眼区分"我现在在开发还是生产"。
{% endhint %}
