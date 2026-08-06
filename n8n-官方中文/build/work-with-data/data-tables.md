---
title: 数据表
description: 在项目范围内管理工作流的结构化表格数据
contentType: overview
tags:
  - data tables
hide:
  - tags
nodeTitle: 数据表
originalFilePath: data/data-tables.md
originalUrl: 'https://docs.n8n.io/data/data-tables'
url: 'https://docs.n8n.io/build/work-with-data/data-tables'
layout:
  description:
    visible: false
---

# 数据表 / Data tables

## 总览 / Overview

数据表（Data tables）把数据存储功能集成到了你的 n8n 环境里。用数据表，你可以直接在 n8n 工作流（workflow）中保存、管理和使用数据，而不用依赖外部数据库系统。常见的使用场景比如：

- 在同一项目的多个工作流之间保存数据
- 存一些标记（marker），用来防止重复运行或控制工作流触发器（trigger）
- 在工作流之间复用提示词（prompt）或消息
- 为 AI 工作流保存评估（evaluation）数据
- 保存工作流执行（execution）产生的数据
- 把不同来源的数据合并起来，丰富你的数据集
- 在工作流里建立快速查用的查找表（lookup table）

{% hint style="info" %}
**大白话**：数据表（Data tables）就像是 n8n 自带的「小 Excel」。以前你想在工作流之间存点数据，要么接外部数据库，要么用变量（Variables）。现在直接在 n8n 里建张表就能存，还能在工作流里用 Data Table 节点（Data Table node）自动读写。
{% endhint %}

## 使用数据表 / Working with data tables

你可以通过三种方式来创建、过滤和管理数据表及其数据：使用 **Data Table 节点（Data Table node）**、**DataTable API 端点（DataTable API endpoint）**，或者 **数据表选项卡（Data tables tab）**。

### Data Table 节点 / Data Table node

在工作流里使用数据表来存储和管理数据，这样工作流运行时就可以自动地创建、读取、更新和删除数据。

完整文档请参阅 [Data Table 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.datatable)。

### DataTable API 端点 / DataTable API endpoint

你也可以通过 n8n API 的 `/datatables` 端点，用编程方式操作数据表。

完整文档请参阅 [API 参考文档](https://docs.n8n.io/api/api-reference/#tag/datatable)。

### 数据表选项卡 / Data table tab

在界面上通过可视化界面直接查看和操作数据表。这样你不用搭工作流，也能浏览、编辑数据和管理表。

1. 在你的 n8n 项目中，选择 **数据表（Data tables）** 选项卡。
2. 点击右上角的拆分按钮（split button），选择 **创建数据表（Create Data table）**。

    ![Data table creation](../.gitbook/assets/create-data-table.png)

3. 给你的表输入一个描述性的名称。

4. 选择创建表的方式：
    - **从零开始（From scratch）**：通过可视化界面手动定义列（columns）并添加行（rows），创建一张新表。
    - **导入 CSV（Import CSV）**：上传 CSV 文件，自动创建表结构并用文件里的数据填充。

    在出现的表视图里，你可以：

    * 重命名或删除数据表及其列
    * 添加列、调整列的顺序来整理数据
    * 添加、删除和更新行
    * 编辑已有数据

## 导出和导入数据 / Exporting and importing data

在 **数据表（Data tables）** 选项卡里，你可以：

- 直接把 CSV 数据导入到数据表中，方法见[上一节](#数据表选项卡-data-table-tab)
- 下载数据表的 CSV 文件：点击左上角的三个点菜单，选择 **下载 CSV（Download CSV）**。

## 数据表的注意事项和限制 / Considerations and limitations of data tables

- 数据表适合轻度到中度的数据存储。默认情况下，一个实例（instance）里所有数据表的总存储上限是 200 MiB。在自托管（self-hosted）环境里，你可以通过环境变量 `N8N_DATA_TABLES_MAX_SIZE_BYTES` 修改这个大小限制。
- 当数据表用到存储上限的 80% 时，n8n 会显示警告；达到存储上限时会再出现一次最终警告。超过上限后，往表里手动添加数据会被禁止，工作流执行时尝试插入或更新数据也会报错。
- 默认情况下，项目内创建的数据表，该项目里的所有团队成员都可以访问。
- 管理员（Admins）和所有者（Owner）可以看到所有用户的数据表。
- 不支持从代码节点（Code node）直接以编程方式访问数据表。你不能通过内置方法或变量获取数据表的值。

## 数据表 vs 变量 / Data tables versus variables

| 功能 | 数据表（Data tables） | 变量（Variables） |
|---------|-------------|-----------|
| 统一的表格视图 | ✓ | ✗ |
| 行与列的关系 | ✓ | ✗ |
| 跨项目访问 | ✗ | ✓ |
| 单个值的展示 | ✗ | ✓ |
| 针对短值做了优化 | ✗ | ✓ |
| 结构化数据 | ✓ | ✗ |
| 限定在项目范围内 | ✓ | ✗ |
| 值可以当作表达式使用 | ✗ | ✓ |

{% hint style="info" %}
**大白话**：简单记——数据表（Data tables）适合存「有结构、成行成列」的数据，比如日志、记录、提示词库；变量（Variables）适合存「单个的、短小的」值，比如某个 URL、某个编号，而且变量可以跨项目用、也能写进表达式里。两者搭配使用效果最好。
{% endhint %}
