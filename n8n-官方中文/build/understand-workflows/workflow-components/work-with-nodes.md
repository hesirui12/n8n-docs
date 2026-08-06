---
description: 节点（Node）是获取数据的入口、处理数据的函数，或是发送数据的出口。
---

# 使用节点 / Work with nodes

节点（Node）[^1] 是工作流（Workflow）[^2] 里最基本的积木。它们能做的事情很多，包括：

* 启动工作流（也就是当触发器用）。
* 获取数据、发送数据。
* 处理和加工数据（转换、判断、整理等）。

n8n 自带了一大堆内置节点，也支持你自己创建节点。可以参考：

* [内置集成](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/node-types)（Built-in integrations）：浏览节点库，看看都有哪些现成的节点。
* [社区节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/community-nodes/installation-and-management)（Community nodes）：了解如何找到并安装社区大佬们做的节点。
* [创建节点](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/create-nodes/overview)：学习如何打造属于你自己的节点。

## 向工作流中添加节点 / Add a node to your workflow

### 在空白工作流中添加节点 / Add a node to an empty workflow

1. 点击 **Add first step**（添加第一步）。n8n 会打开节点面板，你可以在这里搜索或浏览触发器节点（Trigger Node）[^3]。
2. 选择你想用的触发器。

{% hint style="info" %}
**选择正确的应用事件**

如果你选择 **On App Event**（应用事件触发），n8n 会列出所有支持的服务。你可以用这个列表浏览 n8n 的集成，并让工作流在所选服务发生某个事件时被触发。

不过要注意：**不是所有集成都有触发器**。想看某个节点能不能当触发器，就选中它；如果有触发器，它就会出现在可用操作列表的最上方。

例如，这是 Asana 的触发器：

<img src="../../.gitbook/assets/recommended-trigger.png" alt="Screenshot of the Asana node operations list, showing the Recommended section at the top of the list" data-size="original">
{% endhint %}

### 在已有工作流中添加节点 / Add a node to an existing workflow

点击 **Add node**（添加节点）<img src="../../.gitbook/assets/add-node-small (1).png" alt="Add node icon" data-size="line"> 连接器。n8n 会打开节点面板，你可以在里面搜索或浏览所有节点。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/nqwVeyXZtOyDsX8afllD/" %}

## 节点控制按钮 / Node controls

把鼠标悬停在画布（Canvas）上的节点上，就能看到节点的控制按钮：

* **Execute step**（执行步骤）<img src="../../.gitbook/assets/play-node.png" alt="Execute step icon" data-size="line">：运行这个节点。
* **Deactivate**（停用）<img src="../../.gitbook/assets/power-off.png" alt="Deactivate node icon" data-size="line">：停用节点。
* **Delete**（删除）<img src="../../.gitbook/assets/delete-node (1).png" alt="Delete node icon" data-size="line">：删除节点。
* **Node context menu**（节点右键菜单）<img src="../../.gitbook/assets/node-context-menu (1).png" alt="Node context menu icon" data-size="line">：选择节点的各项操作。可用的操作有：
  * Open node（打开节点）
  * Execute step（执行步骤）
  * Rename node（重命名节点）
  * Deactivate node（停用节点）
  * Pin node（固定节点）
  * Copy node（复制节点）
  * Duplicate node（复制一份节点）
  * Tidy up workflow（整理工作流）
  * Convert node to sub-workflow（把节点转成子工作流）
  * Select all（全选）
  * Clear selection（取消选择）
  * Delete node（删除节点）

## 节点设置 / Node settings

**Settings**（设置）标签页里的节点设置，可以控制节点的行为，还能给节点加备注。

启用或设置后，它们的作用如下：

* **Always Output Data**（始终输出数据）：即使节点执行时没返回任何数据，也会返回一个空条目。注意：**别在 IF 节点上开启这个选项**，否则可能导致无限循环。
* **Execute Once**（只执行一次）：节点只执行一次，用的是它收到的第一条数据，后面来的数据都不处理。
* **Retry On Fail**（失败重试）：执行失败时，节点会一直重试，直到成功为止。
* **On Error**（出错时怎么处理）：
  * **Stop Workflow**（停止工作流）：一旦出错，整个工作流立即停下来，后面的节点都不执行了。
  * **Continue**（继续）：即使出错也继续执行下一个节点，用的是最后一次有效的数据。
  * **Continue (using error output)**（继续，使用错误输出）：继续执行工作流，同时把错误信息传给下一个节点，方便你处理。
* **Custom Span Attributes**（自定义链路属性）：给节点的 OpenTelemetry 追踪链路加自定义的键值对。键是纯文本，值支持表达式。这个选项只有在开启 OpenTelemetry 追踪并且有企业版授权时才会出现。详见[自定义链路属性](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/keep-n8n-running/trace-executions-with-opentelemetry#custom-span-attributes)。

你还可以用节点备注来记录工作流：

* **Notes**（备注）：随节点一起保存的备注文字。
* **Display note in flow**（在工作流中显示备注）：开启后，n8n 会把备注作为小标题显示在工作流里。

{% hint style="info" %}
**大白话**：节点就是工作流里的"小积木"。想让它什么时候开始干活（触发器）、干什么活（处理数据）、干完发给谁（发送数据），都靠节点。把鼠标悬停在节点上能看到小按钮，点一下就能执行、停用或删除。
{% endhint %}

[^1]: 在 n8n 中，节点是组成工作流的单个部件。节点决定工作流何时运行，可以获取、发送和处理数据，可以定义流程控制逻辑，还能连接外部服务。
[^2]: n8n 工作流是一组用来自动化某个流程的节点集合。当触发条件发生时，工作流开始执行，并按顺序运行以完成复杂任务。
[^3]: 触发器节点是一种特殊节点，负责在满足某些条件时执行工作流。所有正式运行的工作流至少需要一个触发器，来决定工作流什么时候该跑。
