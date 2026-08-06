---
title: Push and pull
description: 'Send work to Git, and fetch work from Git to your instance.'
contentType: howto
nodeTitle: Push and pull changes
originalFilePath: source-control-environments/using/push-pull.md
originalUrl: 'https://docs.n8n.io/source-control-environments/using/push-pull'
url: >-
  https://docs.n8n.io/administer/use-source-control-and-environments/push-and-pull-changes
layout:
  description:
    visible: false
---

# 推送与拉取 (Push and pull)

如果你的 n8n 实例连接了一个 Git 仓库，你就需要让实例里的工作与 Git 保持同步。

{% hint style="info" %}
**小白解释：push 和 pull 是什么？**

* **Push（推送）**：把你 n8n 实例里的工作（工作流、标签、变量等）"上传"保存到 Git 仓库。
* **Pull（拉取）**：把 Git 仓库里最新的工作"下载"到你当前的 n8n 实例。

可以这样理解：Git 仓库是你所有实例之间交换工作的"公共快递站"。
{% endhint %}

本文档假设你稍微了解一些 Git 的概念和术语。如果你对 n8n 如何使用 Git 还不熟悉，请先阅读[Git 与 n8n (Git and n8n)](use-git-in-n8n.md) 的介绍。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/sVOSvjfqJPLqOGb1x77B/" %}

## 获取别人的工作 (Fetch other people's work)

{% hint style="info" %}
**n8n 角色决定谁能拉取（fetch）改动**

必须是实例所有者（instance owner）或实例管理员（instance admin）才能从 Git 拉取改动。
{% endhint %}

要从 Git 拉取工作，请在主菜单中选择 **Pull**（拉取）<img src="../.gitbook/assets/pull-icon.png" alt="Pull icon" data-size="line">。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/z7oYIete6nifvfi0QZKs/" %}

n8n 可能会显示一个"覆盖本地改动"的警告。选择 **Pull and override**（拉取并覆盖），用 Git 里的内容覆盖你本地的内容。

当改动中包含新的变量（variable）或凭据（credential）占位符（stub）时，n8n 会提醒你：在使用这些项目之前，需要先填写这些项的值。

{% hint style="info" %}
**小白解释：什么是"凭据占位符"（credential stub）？**

出于安全考虑，n8n 不会把真正的密码、API 密钥同步到 Git，只同步凭据的"占位信息"（ID、名称、类型）。你拉取到一个新环境后，需要在这个环境里重新填写真实的凭据值才能使用。
{% endhint %}

{% hint style="info" %}
**被删除的资源如何处理**

当工作流、凭据、变量、标签和数据表从仓库中被删除时，你本地对应的这些资源**不会**被自动删除。相反，当你拉取仓库改动时，n8n 会通知你有哪些过期的资源，并询问你是否要删除它们。
{% endhint %}

### 拉取后，工作流和凭据的所有者可能会改变 (Workflow and credential owner may change on pull)

当你从 Git 拉取到 n8n 实例时，n8n 会尝试把工作流和凭据分配给匹配的用户或项目。

如果原来的所有者是一个用户（user）：

如果两台实例上都有同一个所有者（通过匹配邮箱），那么所有者保持不变。如果原所有者不在新实例上，n8n 会把执行拉取操作的这个用户设为工作流所有者。

如果原来的所有者是一个[项目 (project)](../manage-users-and-access/set-permissions-and-roles-rbac/README.md)：

n8n 会尝试把原项目名称匹配到新实例上的项目名称。如果没有匹配的项目，n8n 会创建一个同名的**新项目**，把当前用户设为项目所有者，并把工作流和凭据导入到这个项目里。

### 拉取时自动发布工作流 (Auto publish workflows on pull)

拉取时，你可以通过拉取弹窗中的 **Auto publish**（自动发布）下拉框，选择是否自动发布工作流。它有三种模式：

* **Off（关闭）**（默认）：不尝试发布任何工作流。工作流保持当前本地的发布状态。
* **If workflow already published（如果工作流已发布）**：只尝试发布那些在本实例上已经发布的工作流。新工作流不会被发布。
* **On（开启）**：尝试发布所有拉取的工作流，包括新工作流。

无论自动发布设置如何，n8n 永远不会自动发布已归档（archived）的工作流。

在启用自动发布的拉取之后，n8n 会显示一个结果弹窗，告诉你哪些工作流发布成功了、哪些失败了。发布失败可能是因为工作流有校验错误或缺少凭据。

自动发布也可以通过 [API](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api/api-reference) 使用：在拉取接口上用 `autoPublish` 参数，取值为 `none`、`published` 或 `all`。

### 拉取可能会造成短暂的服务中断 (Pulling may cause brief service interruption)

如果你对一个已发布的工作流做拉取，n8n 在拉取期间会先把该工作流取消发布（unpublish），然后再重新发布。这可能会导致该工作流有几秒钟的停机（不可用）。

{% hint style="info" %}
**小白解释：为什么会短暂停机？**

n8n 更新已发布工作流的方式是"先下架、再上架"。整个过程通常只需要几秒钟，但对于正在被频繁调用的线上工作流，这段时间内的调用可能会失败。建议在业务低峰期执行拉取。
{% endhint %}

## 把你的工作发送到 Git (Send your work to Git)

{% hint style="info" %}
**n8n 角色决定谁能推送改动**

必须是实例所有者（instance owner）、实例管理员（instance admin）或项目管理员（project admin）才能向 Git 推送改动。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/jlwygEO1bOtH6HDbN3We/" %}

## 哪些内容会被提交 (What gets committed)

n8n 会把以下内容提交到 Git：

* **工作流 (Workflows)**：包括它们的标签，以及工作流所有者的邮箱地址。你可以自己选择要推送哪些工作流。
* **凭据占位符 (Credential stubs)**：只包含 ID、名称和类型。其他字段只有在是[表达式 (expressions)](https://docs.n8n.io/data/expressions/) 时才会被包含。你可以自己选择要推送哪些凭据。
* **变量占位符 (Variable stubs)**：只包含 ID 和名称。
* **数据表结构 (Data table schemas)**：表名和列定义，不包含行数据。你可以自己选择要推送哪些数据表。
* **项目 (Projects)**
* **文件夹 (Folders)**

{% hint style="info" %}
**小白解释：为什么凭据只同步"占位符"？**

因为安全：把明文密码/密钥同步到 Git 仓库非常危险（仓库可能被泄露）。所以 n8n 只同步"这个凭据存在、叫什么、什么类型"，真实的值需要你在每个环境里单独填写。这保证同一套工作流在不同环境里可以使用不同的凭据。
{% endhint %}

## 合并行为与冲突 (Merge behaviors and conflicts)

n8n 的源码控制实现是"有主见的"（opinionated）——它有自己的处理逻辑。它**会自动解决**凭据和变量的合并冲突。但对于**工作流**，n8n **无法检测冲突**。

### 工作流 (Workflows)

在推送或拉取工作流时，你必须明确告诉 n8n 要怎么做。Git 仓库被视为"事实的来源"（source of truth，即以仓库为准）。

拉取时，你可能会收到警告：你本地的工作流副本与 Git 里的不一致，如果接受，你的本地副本将被覆盖。拉取时要小心，别把有用的改动弄丢了。

推送时，你本地的工作流会覆盖 Git 里的内容，所以请确保你本地是最新版本，否则有覆盖掉别人最新改动的风险。

为了避免上面提到的问题，你应该在完成对一个工作流的修改后，**立刻**把它推送到 Git。这样之后再拉取就是安全的。

要避免数据丢失，请注意：

* 设计你的源码控制方案，让工作流**只朝一个方向流动**。例如：在开发实例上做修改 → 推送到 Git → 在生产实例拉取。不要在生成实例上做修改再推送。
* 不要一次性推送所有工作流，只选择你需要的那几个。
* 谨慎手动编辑 Git 仓库里的文件。

### 凭据、变量和工作流标签 (Credentials, variables and workflow tags)

凭据和变量不会出现合并问题，因为 n8n 会自动决定保留哪个版本。

拉取时（on pull）：

* 如果标签、变量或凭据不存在，n8n 会创建它。
* 如果标签、变量或凭据已存在，n8n 不会更新它，除非出现以下情况：
	* 你用 API 或在外部设置了变量的值。新值会覆盖任何已有值。
	* 凭据的名称发生了改变。n8n 使用 Git 里的版本。
	* 标签的名称发生了改变。n8n 会更新标签名。重命名标签时要小心，因为标签名是唯一的，这可能在校验唯一性的过程中引发数据库问题。

推送时（on push）：

* n8n 会覆盖整个变量文件和标签文件。
* 如果某个凭据已存在，n8n 会用改动覆盖它，但这些改动不会在拉取时应用到已有凭据上。

### 数据表 (Data tables)

n8n 会在各环境之间同步数据表的**结构**（schema：表结构和列定义）。行数据（row data）不同步。

推送时（on push）：

* 你可以选择要包含哪些数据表。
* n8n 会导出表名、列名、列类型和列顺序。

拉取时（on pull）：

* n8n 会创建本地不存在的数据表。
* n8n 会更新已有的数据表，使其与 Git 里的结构一致：添加新列，删除远程版本里已不存在的列。n8n 会保留其余列里的数据。
* n8n 按"项目内的表名"来匹配数据表。如果你在源环境中删除并重建了一个同名数据表，或者手动在两个环境里创建了同名数据表，n8n 会把它当作同一个表处理：把本地表的 ID 调整为与传入表一致，像其他改动一样更新结构，并保留本地行数据。
* 如果某个数据表本地存在但 Git 里没有，拉取时会被删除，包括它的所有行数据。交互式（手动）拉取时，n8n 会在任何操作发生前，在确认对话框中把这个表标为 **Deleted**（已删除）。使用 force（强制）选项的拉取（例如通过 API 或自动化配置），会直接删除该表，不做询问。要保留这样的表，请在拉取之前先把它推送上去。

{% hint style="warning" %}
**警告：删除列会导致数据丢失**

如果拉取的数据表与你本地版本相比少了某些列，n8n 会删除这些列以及列里的数据。**这个操作无法撤销。** 当这种情况将要发生时，n8n 会在拉取弹窗中显示警告。
{% endhint %}

{% hint style="info" %}
**用外部密钥保险库管理凭据**

如果你需要在不同的 n8n 环境里使用不同的凭据，请使用[外部密钥 (external secrets)](../manage-credentials/use-external-secret-stores.md) 功能。
{% endhint %}
