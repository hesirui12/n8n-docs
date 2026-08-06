---
title: 数据模拟与固定
description: 在开发 n8n 工作流时模拟和固定数据的各种方法。
contentType: howto
nodeTitle: 固定数据与模拟数据
originalFilePath: data/data-pinning.md
originalUrl: 'https://docs.n8n.io/data/data-pinning'
url: 'https://docs.n8n.io/build/work-with-data/pin-and-mock-data'
layout:
  description:
    visible: false
---

# 固定数据与模拟数据 / Pinning and mocking data

开发工作流（workflow）的时候，你可能不想反复调用外部系统、或者用真实数据来测试你的逻辑。n8n 提供了两个相关的功能来帮你：

* **数据模拟（Data mocking）**：不连接真实数据源，直接创建或模拟测试数据。
* **数据固定（Data pinning）**：把测试数据（模拟的或真实的）保存下来，在以后的工作流执行中复用它，而不是每次重新获取新数据。

这两种方法都能在开发时节省时间和资源，帮你使用一致的数据集来测试，还能保护真实系统不被反复的测试调用打扰。

{% hint style="info" %}
**仅供开发使用**

数据固定（Data pinning）和模拟（mocking）都是帮助你在开发阶段测试工作流的功能。数据固定不适用于生产环境（production）的工作流执行。
{% endhint %}

{% hint style="info" %}
**大白话**：简单说——「模拟数据」就是造一批假数据来用；「固定数据」就是把某个节点跑出来的结果「钉」住，下次运行工作流时不再重新请求外部系统，直接用钉住的那份。这样测试又快又稳，还不怕把外部接口打爆。
{% endhint %}

## 数据模拟的方法 / Data mocking approaches

在开发阶段，你需要造一些测试数据来干活。创建模拟数据的方式有好几种：

### 用代码节点（Code node）或编辑字段（Set）节点生成自定义数据 / Generate custom data using the Code or Edit Fields nodes

你可以用 [代码节点（Code node）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.code) 或 [编辑字段（Set）节点（Edit Fields (Set) node）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.set) 在工作流里创建自定义数据集。

在代码节点里，你想造什么数据集都行，直接把它作为节点的输出返回。在编辑字段节点里，选择 **添加字段（Add fields）** 来添加你的自定义数据。

编辑字段节点适合做小规模的测试。要造更复杂的数据集，就用代码节点。

**什么时候用这种方法**：当你想完全掌控测试数据的结构和取值时，或者想用特定的数据模式来测试边界情况（edge cases）时。

### 从 Customer Datastore 节点输出一份示例数据集 / Output a sample data set from the Customer Datastore node

Customer Datastore 节点（Customer Datastore node）提供了一份假数据集供你使用。添加并执行这个节点，就能探索这份数据。

**什么时候用这种方法**：当你在探索 n8n、想找点测试数据，但手头没有真实用例时。

一旦你创建或拿到了想在工作流的多次执行中复用的测试数据，就可以用 [数据固定](#数据固定-data-pinning) 把它保存下来，保证测试的一致性。

## 数据固定 / Data pinning

在工作流开发过程中，你可以「固定（pin）」数据。数据固定是指：把某个节点的输出数据保存下来，在以后的工作流执行中，直接用这份已保存的数据，而不是重新获取新数据。

当你使用外部来源的数据时，可以用这个功能来避免反复请求外部系统。这样可以节省时间和资源：

* 如果你的工作流依赖外部系统来触发（比如 webhook 调用），能固定数据就意味着，你每次测试工作流时都不必再动用外部系统。
* 如果外部资源有数据量或使用次数限制，在测试时固定数据可以避免消耗你的资源额度。
* 你可以先获取并固定想要测试的数据，然后放心地保证，在你所有的测试里数据都是一致的。
* 你可以先模拟测试数据（用上面介绍的方法），然后固定起来，供多次执行复用。

注意：你只能固定那些有「单个主输出」的节点的数据（「error（错误）」输出不算）。

### 固定数据 / Pin data

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/3EMfTKLe60rEZQ4dBdBw/" %}

### 取消固定数据 / Unpin data

当数据固定处于激活状态时，节点的输出面板顶部会出现一条横幅（banner），提示 n8n 已固定了数据。要取消固定、并在下次执行时重新获取新数据，点击横幅里的 **取消固定（Unpin）** 链接即可。

### 编辑固定的数据 / Edit pinned data

n8n 允许你编辑已固定的数据。这意味着，你可以检查不同的场景，而不必为每个场景都搭建一遍、再让你的外部系统发送相应的数据。这让边界情况（edge cases）的测试变得更简单。

{% hint style="info" %}
**仅供开发使用**

数据编辑不适用于生产环境的工作流执行。它是帮助你在开发阶段测试工作流的功能。
{% endhint %}

#### 编辑输出数据 / Edit output data

要编辑输出数据：

1. 运行节点，加载数据。
2. 在 **OUTPUT**（输出）视图中，选择 **JSON** 切换到 JSON 视图。
3. 选择 **编辑（Edit）** <img src="../.gitbook/assets/edit-data.png" alt="Edit data icon" data-size="line">。
4. 编辑你的数据。
5. 选择 **保存（Save）**。n8n 会保存你的数据更改，并固定你的数据。

#### 使用以前执行中的数据 / Use data from previous executions

你可以复制以前工作流执行中某个节点的数据：

1. 打开左侧菜单。
2. 选择 **执行（Executions）**。
3. 浏览工作流执行列表，找到含有你想复制数据的那一次。
4. 选择 **打开过去的执行（Open Past Execution）** <img src="../.gitbook/assets/open-execution.png" alt="Open past execution icon" data-size="line">。
5. 双击你想复制数据的那个节点。
6. 如果是表格布局，选择 **JSON** 切换到 JSON 视图。
7. 复制 JSON 有两种方法：
  1. 像选中文本那样高亮选中你想复制的 JSON，然后按 `ctrl` + `c` 复制。
  2. 通过点击某个参数来选中要复制的 JSON。然后：
    1. 把鼠标悬停在 JSON 上。n8n 会显示 **复制（Copy）** <img src="../.gitbook/assets/copy-data.png" alt="Copy data icon" data-size="line"> 按钮。
    2. 选择 **复制（Copy）** <img src="../.gitbook/assets/copy-data.png" alt="Copy data icon" data-size="line">。
    3. 你可以选择复制的内容：
        * **复制条目路径（Copy Item Path）** 和 **复制参数路径（Copy Parameter Path）** 会给你能访问 JSON 某一部分的表达式。
        * **复制值（Copy Value）**：复制选中的整个 JSON。
8. 回到你正在做的工作流：
    1. 打开左侧菜单。
    2. 选择 **工作流（Workflows）**。
    3. 选择 **打开（Open）**。
    4. 选择你想打开的工作流。
9. 打开你想使用复制数据的节点。
10. 如果节点里没有数据，先运行节点加载数据。
11. 在 **OUTPUT**（输出）视图中，选择 **JSON** 切换到 JSON 视图。
12. 选择 **编辑（Edit）** <img src="../.gitbook/assets/edit-data.png" alt="Edit data icon" data-size="line">。
15. 粘贴上一步执行中的数据。
16. 选择 **保存（Save）**。n8n 会保存你的数据更改，并固定你的数据。

### 把模拟和固定结合起来 / Combine mocking with pinning

为了获得最接近真实情况的测试体验，你可以把模拟和固定两种方法结合起来：

1. 用上面提到的模拟方法之一（代码节点、编辑字段节点或 Customer Datastore）创建测试数据。
2. 编辑测试数据，制造特定的测试场景或边界情况。
3. 固定编辑后的数据，供多次工作流执行复用。
4. 继续用这份编辑过的、已固定的数据集进行开发。

这种方法能让你完全掌控测试数据，同时保证多次运行之间的测试一致性。
