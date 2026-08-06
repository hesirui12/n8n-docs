---
title: Tutorial - Create environments with source control
description: How to use n8n's source control feature to create environments.
contentType: tutorial
nodeTitle: 'Tutorial: Create environments with source control'
originalFilePath: source-control-environments/create-environments.md
originalUrl: 'https://docs.n8n.io/source-control-environments/create-environments'
url: >-
  https://docs.n8n.io/administer/use-source-control-and-environments/tutorial-create-environments-with-source-control
layout:
  description:
    visible: false
---

# 教程：用源码控制创建环境 (Tutorial: Create environments with source control)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/2T2SmMUgiLyck7FDDwRD/" %}

本教程带你从头到尾走一遍设置"环境"的完整流程。你将创建两个环境：**开发（development）**和**生产（production）**。教程使用 GitHub 作为 Git 服务商，其他服务商的操作流程类似。

n8n 在 Git（一种版本控制软件）的基础上构建了环境功能。你把一个 n8n 实例链接到一个 Git 分支，然后用"推送-拉取"（push-pull）模式在环境之间搬运工作。你应当对环境（environments）和 Git 有一些基本了解。如果你需要更多背景知识，请参阅：

* [n8n 中的环境 (Environments in n8n)](work-with-environments.md)：环境的用途，以及它们在 n8n 中如何运作。
* [Git 与 n8n (Git and n8n)](use-git-in-n8n.md)：n8n 中的 Git 概念和源码控制。

{% hint style="info" %}
**小白解释：本教程你要做什么？**

1. 想清楚用哪种"分支模式"（下面两种选一种）。
2. 在 GitHub 上建好仓库和分支。
3. 把两个 n8n 实例分别连接到 Git。
4. 在开发实例里做好工作并推送（push）。
5. 到生产实例里拉取（pull）下来。

跟着做一遍，你就拥有了一套"开发 → 生产"的完整流程。
{% endhint %}

## 选择你的源码控制模式 (Choose your source control pattern)

在开始设置源码控制和环境之前，你需要先规划好你的环境，以及它们与 Git 分支的关系。n8n 支持不同的[分支模式 (Branch patterns)](choose-branching-patterns.md)。对于环境来说，你需要在两种模式中选择：**多实例、多分支**，或者**多实例、单分支**。本教程两种模式都会讲到。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/sVOSvjfqJPLqOGb1x77B/" %}

### 多实例、多分支 (Multiple instances, multiple branches)

![Diagram](../.gitbook/assets/vc-multi-multi.png)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/O5AqRfApNuiINXZOe5j1/" %}

### 多实例、单分支 (Multiple instances, one branch)

![Diagram](../.gitbook/assets/vc-multi-one.png)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Vo4DpZeEyTa0iuufMDB8/" %}

## 设置你的仓库 (Set up your repository)

选好模式之后，你需要设置你的 GitHub 仓库。

{% tabs %}
{% tab title="多分支 (Multi-branch)" %}
1. [创建一个新仓库 (Create a new repository)](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)。
    * 确保仓库是**私有的（private）**，除非你希望你的工作流、标签、变量和凭据占位符暴露到公网上。
    * 创建仓库时勾选添加一个 README 文件，这样你就能立刻创建分支。
1. 创建一个名为 `production` 的分支，再创建一个名为 `development` 的分支。创建分支的方法请参考[在你的仓库内创建和删除分支 (Creating and deleting branches within your repository)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)。
{% endtab %}

{% tab title="单分支 (Single-branch)" %}
[创建一个新仓库 (Create a new repository)](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)。

  * 确保仓库是**私有的（private）**，除非你希望你的工作流、标签、变量和凭据占位符暴露到公网上。
  * 创建仓库时勾选添加一个 README 文件。这会创建 `main` 分支，也就是你要连接的分支。
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**小白解释：为什么仓库要建私有？**

仓库里会存放你的工作流、标签，以及变量和凭据的占位信息。虽然凭据的真实值不会同步进去，但这些信息仍然属于你的业务内容，最好别公开。所以一定要勾选 **Private（私有）**。
{% endhint %}

## 把你的 n8n 实例连接到仓库 (Connect your n8n instances to your repository)

创建两个 n8n 实例：一个用于开发，一个用于生产。

### 在 n8n 里配置 Git (Configure Git in n8n)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/UqTgO2VbAzax4T8z4Fyh/" %}

### 设置部署密钥 (Set up a deploy key)

使用 n8n 提供的 SSH 密钥，为仓库创建一个部署密钥（deploy key），从而设置 SSH 访问。该密钥必须具有写入（write）权限。具体做法请参考 [GitHub | 管理部署密钥 (Managing deploy keys)](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys)。

### 连接 n8n 并配置你的实例 (Connect n8n and configure your instance)

{% tabs %}
{% tab title="多分支 (Multi-branch)" %}
1. 在 n8n 的 **Settings**（设置）> **Environments**（环境）中，选择 **Connect**（连接）。n8n 会连接到你的 Git 仓库。
1. 在 **Instance settings**（实例设置）下，选择当前 n8n 实例要使用哪个分支。把 **production（生产）分支**连接到生产实例，把 **development（开发）分支**连接到开发实例。
1. 仅生产实例：选择 **Protected instance**（受保护实例），防止用户在此实例中编辑工作流。
1. 选择 **Save settings**（保存设置）。
{% endtab %}

{% tab title="单分支 (Single-branch)" %}
1. 在 n8n 的 **Settings**（设置）> **Environments**（环境）中，选择 **Connect**（连接）。
  1. 在 **Instance settings**（实例设置）下，选择 `main` 分支。
1. 仅生产实例：选择 **Protected instance**（受保护实例），防止用户在此实例中编辑工作流。
1. 选择 **Save settings**（保存设置）。
{% endtab %}
{% endtabs %}

## 从开发环境推送工作 (Push work from development)

在你的开发实例中，创建几个工作流、标签、变量和凭据。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/jlwygEO1bOtH6HDbN3We/" %}

## 把工作拉取到生产环境 (Pull work to production)

现在你的工作已经在 GitHub 里了。如果你用的是多分支设置，它在 development（开发）分支上；如果你选的是单分支设置，它在 main 分支上。

{% tabs %}
{% tab title="多分支 (Multi-branch)" %}
1. 在 GitHub 上创建一个拉取请求（pull request），把 development 合并到 production。
1. 合并这个拉取请求。
1. 在你的生产实例中，在主菜单中选择 **Pull**（拉取）<img src="../.gitbook/assets/pull-icon.png" alt="Pull icon" data-size="line">。
{% endtab %}

{% tab title="单分支 (Single-branch)" %}
在你的生产实例中，在主菜单中选择 **Pull**（拉取）<img src="../.gitbook/assets/pull-icon.png" alt="Pull icon" data-size="line">。
{% endtab %}
{% endtabs %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/z7oYIete6nifvfi0QZKs/" %}

### 可选：用 GitHub Action 自动化拉取 (Optional: Use a GitHub Action to automate pulls)

如果你不想每次都要登录生产实例去手动拉取，可以使用一个 [GitHub Action](https://docs.github.com/en/actions/creating-actions/about-custom-actions) 配合 [n8n API](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api)，实现每次向 production 或 main 分支推送新工作时自动拉取。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/niFQjDjbGJDJTKB57Z1s/" %}

## 下一步 (Next steps)

继续学习：

* [n8n 中的环境 (Environments in n8n)](work-with-environments.md) 和 [Git 与 n8n (Git and n8n)](use-git-in-n8n.md)
* [源码控制模式 (Source control patterns)](choose-branching-patterns.md)
