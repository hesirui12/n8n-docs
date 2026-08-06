---
tags:
  - Keyboard
  - Move canvas
  - Move nodes
  - Drag and drop
description: n8n 中可用的键盘快捷键。
hide:
  - tags
contentType: reference
nodeTitle: 键盘快捷键
originalFilePath: keyboard-shortcuts.md
originalUrl: 'https://docs.n8n.io/keyboard-shortcuts'
url: 'https://docs.n8n.io/build/keyboard-shortcuts'
layout:
  description:
    visible: false
---

# 键盘快捷键与操作 / Keyboard shortcuts and controls

n8n 为一些常用操作提供了**键盘快捷键**（不用鼠标点点点，直接按键盘就行）。

{% hint style="info" %}
**大白话（符号说明）**：`Ctrl/Cmd` 表示 Windows/Linux 上按 **Ctrl** 键、macOS 上按 **Cmd（⌘）** 键；`+` 表示「同时按下」；「Shift」就是键盘上的上档键（⇧）。后面列出的快捷键把按键和对应功能一一对应好了，照着用即可。
{% endhint %}

## 工作流控制 / Workflow controls

 - **Ctrl/Cmd** + **Alt** + **n**：新建工作流（create new workflow）
 - **Ctrl/Cmd** + **o**：打开工作流（open workflow）
 - **Ctrl/Cmd** + **s**：保存当前工作流（save the current workflow）
 - **Ctrl/Cmd** + **z**：撤销（undo）
 - **Ctrl/Cmd** + **shift** + **z**：重做（redo）
 - **Ctrl/Cmd** + **Enter**：执行工作流（execute workflow）

## 画布 / Canvas

画布（Canvas）就是中间那块你可以拖放节点的空白区域，相当于你的「工作台」。

### 移动画布 / Move the canvas

 - **Ctrl/Cmd** + **鼠标左键** + 拖动：移动节点视图（move node view）
 - **Ctrl/Cmd** + **鼠标中键** + 拖动：移动节点视图
 - **空格键（Space）** + 拖动：移动节点视图
 - **鼠标中键** + 拖动：移动节点视图
 - 触摸屏上用**两根手指**：移动节点视图

{% hint style="info" %}
**大白话**：节点多了、屏幕放不下时，可以像「抓住白板挪一挪」一样拖动整个视图。以上任意一种方式都能挪，挑你顺手的即可。
{% endhint %}

### 画布缩放 / Canvas zoom

- **+** 或 **=**：放大（zoom in）
- **-** 或 **_（下划线）**：缩小（zoom out）
- **0**：重置缩放级别（reset zoom level）
- **1**：缩放到刚好看到整个工作流（zoom to fit workflow）
- **Ctrl/Cmd** + **鼠标滚轮**：放大 / 缩小

### 画布上的节点 / Nodes on the canvas

- **双击**某个节点：打开节点详情（node details）
- **Ctrl/Cmd** + **双击**子工作流节点（sub-workflow node）：在新标签页中打开该子工作流
- **Alt** + **g**：展开所有分组（expand all groups）
- **Shift** + **Alt** + **g**：折叠所有分组（collapse all groups）
- **Ctrl/Cmd** + **a**：全选所有节点（select all nodes）
- **Ctrl/Cmd** + **v**：粘贴节点（paste nodes）
- **Shift** + **s**：添加便签（add sticky note，就是那种贴在画布上的黄色小纸条）

### 在画布上选中一个或多个节点时 / With one or more nodes selected in canvas

 - **Alt** + **g**：展开选中的分组（如果选中的是分组里的节点，同样生效）
 - **Shift** + **Alt** + **g**：折叠选中的分组（如果选中的是分组里的节点，同样生效）
 - **ArrowDown（↓）**：选中当前节点**下方**的兄弟节点（select sibling node below the current one）
 - **ArrowLeft（←）**：选中当前节点**左边**的节点
 - **ArrowRight（→）**：选中当前节点**右边**的节点
 - **ArrowUp（↑）**：选中当前节点**上方**的兄弟节点
 - **Ctrl/Cmd** + **c**：复制（copy）
 - **Ctrl/Cmd** + **g**：把选中的节点编成一组（group selected nodes）
 - **Ctrl/Cmd** + **shift** + **g**：取消分组（ungroup selected nodes）
 - **Ctrl/Cmd** + **x**：剪切（cut）
 - **D**：停用（deactivate，让节点暂时不参与执行）
 - **Delete**：删除（delete）
 - **Enter**：打开（open）
 - **F2**：重命名（rename）
 - **P**：固定节点数据（pin data in node，把节点当前的数据「钉住」）。更多信息见 [数据固定（Data pinning）](work-with-data/pin-and-mock-data.md)。
 - **Shift** + **ArrowLeft（←）**：选中当前节点**左边所有**节点
 - **Shift** + **ArrowRight（→）**：选中当前节点**右边所有**节点
 - **Space（空格）**：重命名选中的分组
 - **Ctrl/Cmd** + **Shift** + **o**（在子工作流节点上）：在新标签页中打开该子工作流

{% hint style="info" %}
**大白话（几个容易搞混的）**：`Ctrl/Cmd + g` 是「把选中的节点打包成一个组」，`Ctrl/Cmd + shift + g` 是「拆包」；`D` 是停用节点（节点还在，但不执行了），`Delete` 是彻底删除；`P` 是「钉住」节点当前的数据，方便你在它前面节点还没跑的时候也能看到样例数据。
{% endhint %}

## 节点面板 / Node panel

节点面板（Node Panel）就是左侧那个「所有节点列表」，按分类收纳了 n8n 的全部节点。

 - **N**：打开节点面板（open the Node Panel）
 - **Enter**：把选中的节点插入到工作流中（insert selected node into workflow）
 - **Escape**：关闭节点面板（close Node panel）

### 节点面板分类 / Node panel categories

- **Enter**：把节点插入工作流 / 折叠或展开分类 / 打开子分类
- **ArrowRight（→）**：展开分类、打开子分类
- **ArrowLeft（←）**：折叠分类、关闭子分类视图

## 节点内部 / Within nodes

- **=**：在**空的参数输入框**里按等号，会切换成**表达式（expressions）**[^1] 模式（这样你就能写 `{{ ... }}` 表达式了）。

{% hint style="info" %}
**大白话**：很多参数框默认只接受普通文本/数字；按一下 `=` 就变成「表达式模式」，可以写 `{{ $json.xxx }}` 这样的动态取值。注意只对**空**输入框生效，已经填了内容的输入框要先清空。
{% endhint %}

## 命令栏 / Command bar

命令栏（Command Bar）提供了在整个 n8n 中快速执行操作和导航的入口。用 **Ctrl/Cmd + K** 打开，或者点击画布上的**放大镜图标**。命令会根据你**当前的视图**和**权限**自动调整。

* **工作流操作（Workflow actions）**：添加节点、保存、测试、整理、发布/取消发布、复制、导入/导出、归档、删除
* **资源导航（Resource navigation）**：创建和打开工作流、凭证（credentials）、数据表（data tables）、项目（projects）；访问最近使用的资源
* **执行操作（Execution actions）**：调试（debug）、复制、重试（retry）、停止或删除执行记录（executions）
* **通用导航（General navigation）**：访问模板（Templates）、变量（Variables）、洞察（Insights）、设置（Settings）、帮助资源（Help resources）和文档（Documentation）

{% hint style="info" %}
**大白话（命令栏）**：把它想成 n8n 的「快捷搜索框」——不用满界面找按钮，按 `Ctrl/Cmd + K` 输入关键词，就能快速执行操作或跳转到某个页面，就像浏览器的地址栏一样方便。
{% endhint %}

[^1]: 在 n8n 中，表达式（expressions）允许你通过执行 JavaScript 代码来动态填充节点参数。与其提供一个写死的静态值，你可以用 n8n 的表达式语法，根据前面节点的数据、其他工作流或你的 n8n 环境（environment）来定义参数的值。
