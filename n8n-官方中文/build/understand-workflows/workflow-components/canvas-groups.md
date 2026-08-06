---
description: 在画布上把相关的节点分组到一起，让大型工作流保持清晰易读。
contentType: howto
nodeTitle: Canvas Groups
originalFilePath: workflows/components/canvas-groups.md
originalUrl: 'https://docs.n8n.io/workflows/components/canvas-groups'
url: >-
  https://docs.n8n.io/build/understand-workflows/workflow-components/canvas-groups
layout:
  description:
    visible: false
---

# 画布分组 / Canvas Groups

{% hint style="info" %}
**功能可用性 / Feature availability**

画布分组（Canvas Groups）从版本 `2.28.0` 开始逐步推出，从版本 `2.31.0` 起在所有实例（instance，也就是你运行 n8n 的那个环境）上可用。
{% endhint %}

画布分组（Canvas Group）让你可以把相关的节点组织成一个"有名有姓"的组，放在画布上。把负责工作流某一部分的节点归为一组，给它起个名字，当你想让视图更清爽时，还可以把它折叠起来。画布分组会随工作流一起保存，所以任何人打开这个工作流，看到的都是同样的结构。你可以折叠画布分组以获得更整洁的视图——折叠状态属于"个人偏好"，只保存在你自己的浏览器里。你还可以给画布分组添加一段描述，这样任何阅读这个工作流的人，一眼就能看出这一部分在做什么。

![A workflow with expanded and collapsed Canvas Groups, some with descriptions](../../.gitbook/assets/canvas-groups-overview.png)

{% hint style="info" %}
**大白话**：画布分组就像你桌面上整理文件用的"文件夹"：把同类文件放进一个文件夹，起个名字、写上备注，桌面就整齐了。不同的是，工作流里的分组是"虚的"——节点并不会被搬走，只是视觉上被圈在一起，方便人看，不影响工作流本身的运行逻辑。
{% endhint %}

## 创建画布分组 / Create a Canvas Group

1. 选中你想分组的节点。可以拖动鼠标画一个选择框把它们框住，也可以按住 `Ctrl/Cmd` 键，逐个点击节点。
2. 点击选区上方工具栏里的 **Group nodes**（分组节点）图标 <img src="../../.gitbook/assets/group.svg" alt="Group nodes icon" data-size="line">，或者在选区的右键菜单中选择 **Group nodes**，也可以直接按 `Ctrl/Cmd` + `G` 快捷键。
3. n8n 会创建画布分组，并高亮显示名称输入框，这样你就可以立刻输入一个名称。

只有当一个选区满足画布分组的全部规则时，你才能对它进行分组。具体规则见下文 [可以分组的内容](#what-you-can-group)。

## 给画布分组命名 / Name a Canvas Group

当你创建画布分组时，n8n 会自动分配一个默认名称（例如 "Group 1"），并高亮它，这样你可以立刻把它替换成更有描述性的名字，或者保留这个建议名称。

如果之后想重命名，可以选中该分组并按 `Space` 键，或者在其右键菜单中选择 **Rename group**（重命名分组）。对于展开状态的分组，这会高亮名称，让你能就地编辑；对于折叠状态的分组，则会打开一个对话框让你编辑名称。你也可以直接点击展开状态分组的名称来编辑它。点击分组外部的任意位置即可保存。分组名称不能为空。

## 给画布分组添加描述 / Add a description to a Canvas Group

你可以给画布分组添加一段可选的描述，最多 145 个字符，这样读者不用展开分组，也能看出工作流这一部分在做什么。描述会随工作流一起保存，当你复制（duplicate）或复制粘贴（copy and paste）画布分组时，描述也会跟着一起走。

对于展开状态的画布分组，描述显示在名称下方。点击 **Add description**（添加描述）来写描述，输入内容后按 `Enter` 键保存。

对于折叠状态的画布分组，名称旁边会出现一个信息图标。把鼠标悬停在上面即可阅读描述。

如果不想悬停也能一直看到描述，可以点击描述卡片上的眼睛图标把它"锁定展开"，或者右键点击画布分组，选择 **Show group description**（显示分组描述）。如果想一次性显示或隐藏所有描述，可以使用画布右键菜单里的 **Show group descriptions**（显示所有分组描述）/ **Hide group descriptions**（隐藏所有分组描述）。描述的可见性属于个人偏好，和折叠状态一样，只保存在你自己的浏览器里。

当你缩小画布视图缩得足够远时（大约低于三分之二缩放比例），描述会被隐藏。如果你导入的工作流中包含超过 145 个字符的描述，n8n 会将其截短，并显示一条警告。

{% hint style="info" %}
**大白话**：描述（description）就是给分组写的一句"说明书"。写清楚"这一块是在干什么"，别人打开你的工作流（甚至几个月后的你自己）就能秒懂，不用一个个点开节点去猜。
{% endhint %}

## 折叠和展开画布分组 / Collapse and expand a Canvas Group

折叠画布分组可以隐藏其中的节点，只显示名称，以及（如果你写了）描述（见[给画布分组添加描述](#add-a-description-to-a-canvas-group)）。这样能把一个庞大的工作流缩小成更易读的视图。

点击画布分组的标题栏即可折叠或展开它。如果想一次性操作多个分组，可以在画布右键菜单中选择 **Expand all groups**（展开全部分组）/ **Collapse all groups**（折叠全部分组），或者按 `Alt` + `G` 展开、`Shift` + `Alt` + `G` 折叠。当选中了分组（或选中了分组内部的节点）时，这些快捷键只作用于被选中的分组；什么都没选时，则作用于所有画布分组。

n8n 会记住你展开了哪些画布分组，并在你重新打开工作流时保持相同的视图。这个偏好保存在你的浏览器里，所以它只属于你和你的设备。它不会随工作流保存，也不会同步到其他浏览器或其他用户。

{% hint style="info" %}
**大白话**："折叠"就是把分组缩成一个小方块，里面的节点暂时"藏起来"；"展开"就是再把节点显示出来。折叠只看大概，展开看细节，非常适合节点很多的大工作流。
{% endhint %}

## 取消分组 / Ungroup

要把画布分组拆回单独的节点，可以点击分组上方工具栏里的 **Ungroup**（取消分组）图标 <img src="../../.gitbook/assets/ungroup.svg" alt="Ungroup icon" data-size="line">，或者在其右键菜单中选择 **Ungroup nodes**（取消节点分组），也可以按 `Ctrl/Cmd` + `Shift` + `G` 快捷键。取消分组后，节点仍然保留在画布上。

## 从右键菜单执行分组操作 / Group actions from the context menu

右键点击画布分组，会打开它的上下文菜单（context menu，也就是右键菜单）。**Rename group**（重命名分组）和 **Ungroup nodes**（取消节点分组）位于菜单顶部，接下来是和多节点选区相同的操作，只是措辞针对分组（例如 **Copy group**（复制分组）、**Delete group**（删除分组）等）。这个菜单对折叠状态的分组同样有效，此时操作会作用于其中被隐藏的节点。

右键点击画布上的空白区域，可以使用 **Expand all groups**（展开全部分组）和 **Collapse all groups**（折叠全部分组）。当你的选区中包含分组时，上下文菜单会改为提供 **Expand selected**（展开选中的）和 **Collapse selected**（折叠选中的）。

## 可以分组的内容 / What you can group

并不是任何选区都能成为画布分组。当你选中节点时，n8n 会检查几条规则，只有当所有规则都通过时，才会显示 **Group nodes**（分组节点）图标 <img src="../../.gitbook/assets/group.svg" alt="Group nodes icon" data-size="line">。如果图标没有出现，请对照下面这些规则检查你的选区：

- 这些节点不能已经属于另一个画布分组。
- 选区内不能包含触发节点（trigger node）。触发节点固定在工作流的起点，必须留在画布分组之外。
- 这些节点必须构成一条连续相连的链路。你不能把不相邻的节点加进同一个画布分组。
- 画布分组外部的节点只能连接到分组的第一个或最后一个节点，不能直接连接到中间的节点。
- AI 节点和它的子节点（sub-node，包括它的聊天模型 chat model、记忆 memory 和工具 tools）必须一起放进同一个画布分组。子节点的连接不能跨越画布分组的边界。
- 选区至少要包含两个对象。你不能创建只有一个节点的画布分组。
- 便签（Sticky note）可以和其他节点一起成为画布分组的一部分。

{% hint style="info" %}
**大白话**：这些规则是为了保证"分组"是清晰的：分组必须是一个"连续的段落"，而不是东一块西一块；触发器是工作流的起点，不能藏进组里；AI 节点和它的附属件必须在一起，就像手机和充电器不能分家一样。
{% endhint %}

如果一个已保存的工作流里包含违反这些规则的画布分组（例如导入了一个在别处编辑过的工作流），n8n 会在保存该工作流时自动取消这些分组，并显示一条警告。节点仍然保留在画布上。

## 只读工作流中的画布分组 / Canvas Groups in read-only workflows

当工作流以只读模式显示时（例如在历史版本（workflow history）或共享视图中），画布分组默认以展开状态显示，这样你就能看到整个工作流的全貌。

## 键盘快捷键 / Keyboard shortcuts

| 操作 | 快捷键 |
| ------ | -------- |
| 对选中的节点分组 | `Ctrl/Cmd` + `G` |
| 对选中的节点取消分组 | `Ctrl/Cmd` + `Shift` + `G` |
| 展开画布分组（选中的，或全部） | `Alt` + `G` |
| 折叠画布分组（选中的，或全部） | `Shift` + `Alt` + `G` |
| 重命名选中的画布分组 | `Space` |

{% hint style="info" %}
**大白话**：`Ctrl` 是 Windows / Linux 电脑上的按键，`Cmd` 是 Mac 电脑上对应的按键，两者作用相同。`Shift` 就是键盘上的"上档键"（Shift 键）。
{% endhint %}
