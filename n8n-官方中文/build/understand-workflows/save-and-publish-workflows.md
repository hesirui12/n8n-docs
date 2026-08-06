---
description: 保存、发布、取消发布工作流，以及为工作流版本命名。
---

# 保存与发布工作流 / Save and publish workflows

n8n 会在你编辑工作流的时候自动保存。当你准备把工作流投入正式使用（生产环境，Production）时，再点击发布（Publish）。这种方式可以防止不小心改到正式运行的东西，同时又能安全地反复修改和检查。

## 保存是怎么工作的 / How saving works

你在编辑时，改动会自动保存，通常 1 到 5 秒内就存好了，不需要手动点保存按钮。所有改动在发布之前都只是"草稿"状态。

## 发布是怎么工作的 / How publishing works

发布会让你的工作流"上线"，并把它锁定在某个特定版本上。正式环境的执行（Production executions）用的是这个已发布的版本，而不是你最新的编辑内容。发布之后，你的工作流会启用以下功能：

* Webhook 和表单触发器会使用它们的正式 URL
* 定时计划（Schedule）会按照你设置的时间运行
* 来自已连接应用的事件会触发这个工作流

**初始状态（Initial state）**：当你打开一个没有任何可发布改动的工作流时，**Publish**（发布）按钮是灰色的、点不了的。

![](../.gitbook/assets/publish-initial.png)

**可以发布了（Ready to publish）**：工作流还没发布过，但已经有了改动，这时按钮会变成可点击状态。

![](../.gitbook/assets/publish-ready.png)

**已发布且是最新（Published, up to date）**：工作流当前已发布，并且上次发布之后没有新改动。

![](../.gitbook/assets/published.png)

**已发布但有改动（Published, has changes）**：工作流已发布，但你上次发布之后又改了东西，这些改动还没生效。

![](../.gitbook/assets/published-changes.png)

**已发布但改动无效（Published, invalid changes）**：工作流已发布，但目前的状态没办法重新发布（比如没有需要发布的触发器）。

![](../.gitbook/assets/published-invalid.png)

**已发布但有错误（Published, error）**：工作流已发布，但你最近的改动里有错误，需要先修好才能再次发布。

![](../.gitbook/assets/published-error.png)

## 多人协作是怎么工作的 / How collaboration works

同一个时间，只能有一个人编辑一个工作流。如果别人正在编辑：

* 你会看到这个工作流处于只读模式
* 等对方停止编辑或变为不活跃状态后，编辑锁会释放
* 之后你就能接手编辑，并看到最新的改动

## 查看发布状态 / Checking publishing status

在 **Workflows**（工作流）页面上，如果某个工作流已发布，卡片上会显示一个已发布的标识。

![](../.gitbook/assets/published-indicator-wf-list.png)

## 发布工作流 / Publishing a workflow

画布顶部的 **Publish**（发布）按钮，只要存在未发布的改动就会亮起。

每次你修改工作流，n8n 都会自动把这些改动保存成一个新版本。这些保存下来的版本，只有在你修改后点击发布，才会在正式环境生效。

1. 点击 **Publish**（发布）按钮（或按快捷键 `Shift` + `p`），打开发布弹窗。
2. 版本名默认是一个 UUID（随机字符串）。你可以自己改个名字，顺便给这个版本加一句描述。
3. 点击 **Publish**（发布），让你的改动在正式环境生效。正式环境的执行永远指向当前已发布的版本。

   如果只是更新工作流设置，n8n 会自动重新发布版本，不需要你额外操作。

![](../.gitbook/assets/publish-modal.png)

## 给版本命名 / Naming versions

{% hint style="info" %}
**功能可用范围**

命名版本（Named versions）功能在 Pro 和 Enterprise 云套餐，以及 Enterprise 自托管套餐中可用。
{% endhint %}

命名版本可以给任何工作流版本起一个有意义的名字和描述，帮你标记开发过程中的重要里程碑。被命名的版本还会受到保护，不会被自动清理（[版本历史修剪](../manage-workflows/view-change-history.md)），所以它们会一直保留。

从画布顶部给版本命名：

1. 点击 **Publish**（发布）按钮旁边的下拉箭头（或按快捷键 `Cmd/Ctrl` + `s`）。
2. 选择 **Name version**（命名版本）。
3. 输入名称，可选的描述。
4. 点击 **Save**（保存）。

![](../.gitbook/assets/publish-dropdown.png)

从版本历史页面给版本命名：

1. 点击顶部的历史图标，打开版本历史。
2. 在你想命名的版本上，点击 **Options**（选项）<img src="../.gitbook/assets/three-dot-options-menu (1).png" alt="Options icon" data-size="line">。
3. 选择 **Name version**（命名版本）。
4. 输入名称，可选的描述。
5. 点击 **Save**（保存）。

## 管理版本历史 / Managing version history

点击顶部的历史图标，就可以查看和管理版本历史。在版本历史视图里，你可以做这些操作：

* 取消发布工作流，把它从正式环境撤下来
* 恢复之前的某个版本。恢复后你可以在这个版本上继续工作，而不会影响正式环境的执行
* 发布工作流的另一个版本
* 给版本命名，防止它被自动清理

{% hint style="info" %}
**大白话**：n8n 是"自动存草稿、手动发正式"。你编辑时它自动保存草稿，点 **Publish** 才让改动在正式环境生效。改了没发布？那正式环境跑的还是老版本，放心折腾。
{% endhint %}

## 如何取消发布工作流 / How to unpublish a workflow

取消发布工作流，可以通过以下任一方式：

* 画布顶部 **Publish**（发布）按钮旁的下拉箭头（或按快捷键 `Cmd/Ctrl` + `u`）
* 在工作流列表里操作
* 在版本历史页面操作（对已发布的版本执行取消发布）
