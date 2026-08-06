---
title: Git
description: >-
  n8n（工作流自动化平台）中 Git 节点的文档。
  包含使用指南和示例链接。
contentType:
  - integration
  - reference
nodeTitle: Git
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.git.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.git'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.git'
layout:
  description:
    visible: false
---

# Git

> **大白话**：Git 是程序员最常用的"代码时光机 + 版本管理工具"。这个节点让你在工作流里直接操作 Git 仓库：把代码提交（commit）、推到远程（push）、拉取更新（pull）、查看历史记录（log）等。适合：自动化备份代码、定时发布版本、自动打标签等场景。如果你完全没接触过 Git，建议先大致了解它的概念（仓库 repository、提交 commit、分支 branch、远程 remote）。

[Git](https://git-scm.com/) 是一个免费开源的分布式版本控制系统，专为快速高效地处理从小到大各种规模的项目而设计。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/git.md)找到此节点的身份验证信息。
{% endhint %}

## 操作（Operations）

* **Add（添加）**：把一个文件或文件夹添加进来准备提交。执行的是 [git add](https://git-scm.com/docs/git-add)。
* **Add Config（添加配置）**：添加配置属性。执行的是 [git config](https://git-scm.com/docs/git-config) 的 set 或 add。
* **Clone（克隆）** 一个仓库：执行的是 [git clone](https://git-scm.com/docs/git-clone)。
* **Commit（提交）**：把文件或文件夹提交到 git。执行的是 [git commit](https://git-scm.com/docs/git-commit)。
* **Fetch（获取）**：从远程仓库获取。执行的是 [git fetch](https://git-scm.com/docs/git-fetch)。
* **List Config（列出配置）**：返回当前配置。执行的是 [git config](https://git-scm.com/docs/git-config) 查询。
* **Log（日志）**：返回 git 提交历史。执行的是 [git log](https://git-scm.com/docs/git-log)。
* **Pull（拉取）**：从远程仓库拉取：执行的是 [git pull](https://git-scm.com/docs/git-pull)。
* **Push（推送）**：推送到远程仓库：执行的是 [git push](https://git-scm.com/docs/git-push)。
* **Push Tags（推送标签）**：把标签推送到远程仓库：执行的是 [git push --tags](https://git-scm.com/docs/git-push#Documentation/git-push.txt---tags)。
* 返回当前仓库的 **Status（状态）**：执行的是 [git status](https://git-scm.com/docs/git-status)。
* **Switch Branch（切换分支）**：执行的是 [git switch](https://git-scm.com/docs/git-switch)。
* 创建一个新的 **Tag（标签）**：执行的是 [git tag](https://git-scm.com/docs/git-tag)。
* **User Setup（用户设置）**：设置用户。

> **小白提示**：这里的每个操作本质上就是在服务器/电脑的某个文件夹里执行对应的 git 命令，你只需要告诉它"仓库在哪里（Repository Path）"。

请参考下文各节，了解每个操作的参数和选项的详细信息。

## 添加（Add）

使用以下参数配置此操作：

* **Repository Path（仓库路径）**：输入 git 仓库的本地路径。
* **Paths to Add（要添加的路径）**：在此字段中输入要添加的文件或文件夹路径列表，用逗号分隔。你可以使用绝对路径，也可以使用相对于 **Repository Path** 的相对路径。

> **小白提示**：`git add` 的意思是"把这些文件纳入本次提交的候选名单"。想添加当前文件夹下的所有改动，通常填 `.` 即可。

## 添加配置（Add Config）

使用以下参数配置此操作：

* **Repository Path（仓库路径）**：输入 git 仓库的本地路径。
* **Key（键）**：输入要设置的配置键名称。
* **Value（值）**：输入要设置的配置键的值。

### 添加配置选项（Add Config options）

添加配置操作提供 **Mode（模式）** 选项。选择是 **Set（设置）** 还是 **Append（追加）** 本地配置中的设置。

> **小白提示**：比如设置提交者姓名，Key 填 `user.name`，Value 填你的名字。Append 适合给某个可能已存在多项值的配置追加一项。

## 克隆（Clone）

使用以下参数配置此操作：

* **Repository Path（仓库路径）**：输入 git 仓库的本地路径。
* **Authentication（身份验证）**：选择 **Authenticate（验证）** 来传入凭据，选择 **None（无）** 则不使用身份验证。
    * **Credential for Git（Git 凭据）**：如果你选择 **Authenticate**，必须选择或创建节点要使用的凭据。更多信息请参考 [Git 凭据](../credentials/git.md)。
* **New Repository Path（新仓库路径）**：输入你希望克隆后的仓库存放的本地路径。
* **Source Repository（源仓库）**：输入你想要克隆的仓库的 URL 或路径。

> **小白提示**：克隆 = 把远程仓库（比如 GitHub 上的项目）完整复制到本地一份。私有仓库需要填凭据（用户名/密码或 Token），公开仓库选 **None** 即可。

## 提交（Commit）

使用以下参数配置此操作：

* **Repository Path（仓库路径）**：输入 git 仓库的本地路径。
* **Message（提交信息）**：在此字段中输入要使用的提交信息。

### 提交选项（Commit options）

提交操作提供 **Paths to Add（要添加的路径）** 选项。要提交所有"已添加"的文件和文件夹，请将此字段留空。要提交特定的"已添加"文件和文件夹，请在此字段中输入文件或文件夹的路径列表，用逗号分隔。

你可以使用绝对路径，也可以使用相对于 **Repository Path** 的相对路径。

> **小白提示**：commit 信息建议写清楚"这次改了什么"，比如 `修复登录页面的按钮错位问题`。留空 Paths to Add 时，会把之前 add 过的所有文件一次性提交。

## 获取（Fetch）

此操作只需要你在 **Repository Path（仓库路径）** 参数中输入 git 仓库的本地路径。

> **小白提示**：`git fetch` 只是"把远程的更新下载下来看看"，但不会合并到你的工作区里，适合先检查远程有哪些新提交。

## 列出配置（List Config）

此操作只需要你在 **Repository Path（仓库路径）** 参数中输入 git 仓库的本地路径。

## 日志（Log）

使用以下参数配置此操作：

* **Repository Path（仓库路径）**：输入 git 仓库的本地路径。
* **Return All（返回全部）**：打开时，节点将返回所有结果。关闭时，节点将只返回不超过设定 **Limit（数量上限）** 的结果。
* **Limit（数量上限）**：仅当你关闭 **Return All** 时可用。输入要返回的最大结果数量。

### 日志选项（Log options）

日志操作提供 **File（文件）** 选项。在此字段中输入要获取历史的文件或文件夹的路径。

你可以使用绝对路径，也可以使用相对于 **Repository Path** 的相对路径。

> **小白提示**：想查看某个特定文件的修改历史，就在 File 里填那个文件路径；留空则查看整个仓库的提交历史。

## 拉取（Pull）

此操作只需要你在 **Repository Path（仓库路径）** 参数中输入 git 仓库的本地路径。

> **小白提示**：`git pull` = 先 fetch（下载远程更新）再 merge（合并到本地），一步到位把本地代码更新到和远程一致。

## 推送（Push）

使用以下参数配置此操作：

* **Repository Path（仓库路径）**：输入 git 仓库的本地路径。
* **Authentication（身份验证）**：选择 **Authenticate（验证）** 传入凭据，或选择 **None（无）** 不使用身份验证。
    * 如果你选择 **Authenticate**，必须选择或创建节点要使用的 **Credential for Git（Git 凭据）**。更多信息请参考 [Git 凭据](../credentials/git.md)。

### 推送选项（Push options）

推送操作提供 **Target Repository（目标仓库）** 选项。在此字段中输入要推送到的仓库的 URL 或路径。

> **小白提示**：把本地提交"上传"到远程仓库（比如 GitHub）就叫 push。如果提示要凭据，通常是填 GitHub/GitLab 的账号和 Personal Access Token。

## 推送标签（Push Tags）

此操作只需要你在 **Repository Path（仓库路径）** 参数中输入 git 仓库的本地路径。

> **小白提示**：标签（tag）相当于给某个提交贴个"里程碑"名字，比如 v1.0.0。推送标签就是把本地的这些标签同步到远程。

## 状态（Status）

此操作只需要你在 **Repository Path（仓库路径）** 参数中输入 git 仓库的本地路径。

> **小白提示**：`git status` 会告诉你：哪些文件被改过、哪些是新文件、哪些已暂存（staged）待提交。适合在提交前先检查一下当前仓库状态。

## 切换分支（Switch Branch）

使用以下参数配置此操作：

* **Repository Path（仓库路径）**：输入 git 仓库的本地路径。
* **Branch Name（分支名称）**：输入你想要切换到的分支名称。

## 标签（Tag）

使用以下参数配置此操作：

* **Repository Path（仓库路径）**：输入 git 仓库的本地路径。
* **Name（名称）**：在此字段中输入要创建的标签名称。

## 用户设置（User Setup）

此操作只需要你在 **Repository Path（仓库路径）** 参数中输入 git 仓库的本地路径。

> **小白提示**：执行它相当于设置 `git config user.name` 和 `user.email`，这样之后的提交才会带上正确的作者信息。第一次在新环境里提交代码前建议先运行一次。

## 模板和示例（Templates and examples）

[浏览 Git 集成模板](https://n8n.io/integrations/git) 或 [搜索所有模板](https://n8n.io/workflows/)
