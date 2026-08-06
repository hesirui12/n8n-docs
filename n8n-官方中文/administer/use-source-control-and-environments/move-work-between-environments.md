---
title: Copy work between environments
description: How to get changes from one environment into another.
contentType: howto
nodeTitle: Move work between environments
originalFilePath: source-control-environments/using/copy-work.md
originalUrl: 'https://docs.n8n.io/source-control-environments/using/copy-work'
url: >-
  https://docs.n8n.io/administer/use-source-control-and-environments/move-work-between-environments
layout:
  description:
    visible: false
---

# 在环境之间复制工作 (Copy work between environments)

把工作从一个 n8n 实例发送到另一个 n8n 实例，具体步骤取决于你使用的是**单个 Git 分支**还是**多个 Git 分支**。

{% hint style="info" %}
**小白解释：本章解决什么问题？**

你在"开发环境"里做好了工作流，现在要把它弄到"生产环境"去跑。怎么弄？本章就是完整的操作指南。用一句话概括：**开发实例推（push）到 Git → 生产实例拉（pull）**；如果用了多分支，中间还要在 Git 平台上先合并分支。
{% endhint %}

## 单分支 (Single branch)

如果你只有一个 Git 分支，复制工作的步骤是：

1. 从一个实例把工作推送到 Git 分支。
1. 登录另一个实例，从 Git 拉取工作。你也可以[自动化拉取](#automatically-send-changes-to-n8n)（不用每次手动点）。

## 多分支 (Multiple branches)

如果你有不止一个 Git 分支，需要在你的 Git 服务商（Git provider）里**合并分支**，才能把工作从一个环境复制到另一个环境。你不能在 n8n 里直接跨环境复制工作。

一个常见的流程是：

1. 在开发实例里完成工作。
1. 把工作推送到 Git 里的开发分支（development branch）。
1. 把开发分支合并到生产分支（production branch）。合并的具体做法，请参考你的 Git 服务商的文档：
	* [GitHub：创建拉取请求 (Creating a pull request)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
	* [GitLab：创建合并请求 (Creating merge requests)](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
	* [Git：基本分支与合并 (Basic branching and merging)](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
1. 在生产的 n8n 实例里，拉取这些改动。你也可以[自动化拉取](#automatically-send-changes-to-n8n)。

{% hint style="info" %}
**小白解释：为什么多分支不能直接在 n8n 里复制？**

n8n 的源码控制设计是"一个实例只认一个分支"。要把开发分支的内容送到生产分支，必须借助 Git 本身的机制（Pull Request / Merge Request）在 Git 平台上完成合并——这也是 Git 的正常用法，能让你在合并前做代码审查。
{% endhint %}

## 自动把改动发送到 n8n (Automatically send changes to n8n)

你可以使用 `/source-control/pull` API 接口来自动化复制工作流程中的部分步骤。在合并改动之后调用这个 API 即可：

```curl
curl --request POST \
	--location '<YOUR-INSTANCE-URL>/api/v1/source-control/pull' \
	--header 'Content-Type: application/json' \
	--header 'X-N8N-API-KEY: <YOUR-API-KEY>' \
	--data '{"force": true}'
```

{% hint style="info" %}
**小白解释：上面这条命令在干什么？**

* `curl` 是一个命令行工具，用来发 HTTP 请求。
* `--request POST`：用 POST 方法请求。
* `--location '.../api/v1/source-control/pull'`：请求 n8n 的"拉取"接口。把 `<YOUR-INSTANCE-URL>` 换成你实例的地址。
* `--header 'X-N8N-API-KEY: <YOUR-API-KEY>'`：带上你的 API 密钥做身份验证（在 n8n 的 **Settings > API** 里创建）。把 `<YOUR-API-KEY>` 换成真实密钥。
* `--data '{"force": true}'`：请求体，`force: true` 表示强制拉取（覆盖本地改动）。
{% endhint %}

这意味着你可以用 GitHub Action 或 GitLab CI/CD（持续集成/持续交付流水线），在每次合并时自动把改动拉取到生产实例。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/niFQjDjbGJDJTKB57Z1s/" %}
