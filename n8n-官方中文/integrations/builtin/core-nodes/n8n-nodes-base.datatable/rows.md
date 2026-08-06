---
title: 数据表节点行操作（Data Table node row operations）
description: >-
  数据表节点行操作的参考文档，包括删除、获取、插入、更新和 upsert。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: 数据表节点行操作
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.datatable/rows.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.datatable/rows
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.datatable/rows
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话（这一页是讲什么的）**：Data Table 节点分「表操作」和「行操作」两大类。这一页讲**行操作**——也就是对表里的「一行行数据」做增删改查：删除行、获取行、判断行存不存在、插入新行、更新已有行、upsert（有则更新、无则插入）。简单说：表是「仓库」，行是「货架上的每件货」，这一页教你如何在货架上取放货物。
{% endhint %}

使用行操作来删除、获取、插入、更新、upsert 或过滤数据表中的行。关于节点本身的更多信息，请参阅 [数据表节点](README.md) 文档。

## 删除行（Delete row）

使用此操作，根据定义的一个或多个条件，从数据表中删除一行或多行。

输入以下参数：

- **Resource（资源）：** 选择 **Row（行）**。
- **Operation（操作）：** 选择 **Delete（删除）**。
- **Data table（数据表）：** 选择如何指定要操作的数据表：
    - **From list（从列表选择）：** 从所有数据表的下拉列表中选择该表。
    - **By Name（按名称）：** 输入你的数据表的名称。
    - **By ID（按 ID）：** 输入你的数据表的 ID。
- **Must Match（匹配要求）：** 选择要删除满足**任何条件（Any Condition）** 还是**所有条件（All Conditions）** 的行。
- **Conditions（条件）：** 点击 **Add Condition（添加条件）** 来定义要操作数据表中的哪些行。你可以添加多个条件。每个条件包含：
    - **Column（列）：** 选择你想要比较的列。
    - **Condition（比较方式）：** 选择如何比较列值：**Equals（等于）**、**Not Equals（不等于）**、**Greater Than（大于）**、**Greater Than or Equal（大于等于）**、**Less Than（小于）**、**Less Than or Equal（小于等于）**、**Is Empty（为空）** 或 **Is Not Empty（不为空）**。
    - **Value（值）：** 输入要与列进行比较的值。你可以使用固定值，或引用前面节点数据的表达式。对于 **Is Empty** 和 **Is Not Empty** 条件，此字段不存在。

{% hint style="info" %}
**大白话（删除行的逻辑）**：删除不是随便删，要按条件「圈定」删除范围。比如删掉「所有 status 为 cancelled 的订单」：先选好表，**Must Match** 保持 **All Conditions**，添加一个条件：**Column** 选 `status`，**Condition** 选 **Equals**，**Value** 填 `cancelled`。想删「满足任意一个条件」的行（比如 status 是 A 或 B），就把 **Must Match** 改成 **Any Condition**。
{% endhint %}

### 删除行的选项（Delete row options）

使用这些选项进一步细化操作行为：

- **Dry Run（试运行）：** 启用后模拟删除，不真正修改表。节点会返回将被删除的行，包括它们在操作前和操作后的状态。

{% hint style="info" %}
**小白提示（Dry Run 是什么）**：Dry Run 就像「删除前先预览一下」——先看看这次操作会删掉哪些行（以及它们会变成什么样），确认无误后再关掉 Dry Run 正式执行。删除不可恢复，建议批量删除前先试运行一次。
{% endhint %}

## 获取行（Get row）

使用此操作，根据定义的一个或多个条件，从数据表中获取一行或多行。

输入以下参数：

- **Resource（资源）：** 选择 **Row（行）**。
- **Operation（操作）：** 选择 **Get（获取）**。
- **Data table（数据表）：** 选择如何指定要操作的数据表：
    - **From list（从列表选择）：** 从所有数据表的下拉列表中选择该表。
    - **By Name（按名称）：** 输入你的数据表的名称。
    - **By ID（按 ID）：** 输入你的数据表的 ID。
- **Must Match（匹配要求）：** 选择要获取满足**任何条件（Any Condition）** 还是**所有条件（All Conditions）** 的行。
- **Conditions（条件）：** 点击 **Add Condition（添加条件）** 来定义要操作数据表中的哪些行。你可以添加多个条件。每个条件包含：
    - **Column（列）：** 选择你想要比较的列。
    - **Condition（比较方式）：** 选择如何比较列值：**Equals（等于）**、**Not Equals（不等于）**、**Greater Than（大于）**、**Greater Than or Equal（大于等于）**、**Less Than（小于）**、**Less Than or Equal（小于等于）**、**Is Empty（为空）** 或 **Is Not Empty（不为空）**。
    - **Value（值）：** 输入要与列进行比较的值。你可以使用固定值，或引用前面节点数据的表达式。对于 **Is Empty** 和 **Is Not Empty** 条件，此字段不存在。
- **Return All（返回全部）：** 启用后返回所有匹配的行。或者，禁用并输入要返回的行数 **Limit（上限）**，例如 `50`。
- **Order By（排序）：** 启用后可以定义结果按哪一列排序，以及排序方向（升序或降序）。或者，禁用以不排序。

{% hint style="info" %}
**大白话（获取行的逻辑）**：获取就是「按条件查数据」。查询结果默认可能很多，用 **Return All** 关闭 + **Limit** 限制条数（如 `50`）可以只取前 50 条；需要固定顺序（比如「按创建时间最新的在前」）就打开 **Order By** 选列和方向。
{% endhint %}

## 如果行存在（If row exists）

使用此操作来检查数据表中是否存在满足定义条件的行。如果找到匹配的行，节点会原样输出它收到的输入数据，不做任何修改。如果没有匹配的行，则不输出任何内容。

输入以下参数：

- **Resource（资源）：** 选择 **Row（行）**。
- **Operation（操作）：** 选择 **If Row Exists（如果行存在）**。
- **Data table（数据表）：** 选择如何指定要操作的数据表：
    - **From list（从列表选择）：** 从所有数据表的下拉列表中选择该表。
    - **By Name（按名称）：** 输入你的数据表的名称。
    - **By ID（按 ID）：** 输入你的数据表的 ID。
- **Must Match（匹配要求）：** 选择行必须满足**任何条件（Any Condition）** 还是**所有条件（All Conditions）**。
- **Conditions（条件）：** 点击 **Add Condition（添加条件）** 来定义要操作的数据表行。你可以添加多个条件。每个条件包含：
    - **Column（列）：** 选择你想要比较的列。
    - **Condition（比较方式）：** 选择如何比较列值：**Equals（等于）**、**Not Equals（不等于）**、**Greater Than（大于）**、**Greater Than or Equal（大于等于）**、**Less Than（小于）**、**Less Than or Equal（小于等于）**、**Is Empty（为空）** 或 **Is Not Empty（不为空）**。
    - **Value（值）：** 输入要与列进行比较的值。你可以使用固定值，或引用前面节点数据的表达式。对于 **Is Empty** 和 **Is Not Empty** 条件，此字段不存在。

{% hint style="info" %}
**大白话（和 Get 有什么区别）**：「如果行存在」不返回查询到的行本身，它只是一个「闸门」：找到匹配行 → 输入数据原样放行；找不到 → 什么都不输出。配合后面的节点用「有数据/没数据」来分流，比如「该用户是否已注册」→ 有则走「欢迎回来」分支，无则走「注册」分支。
{% endhint %}

## 如果行不存在（If row does not exist）

使用此操作来检查数据表中不存在满足定义条件的行。如果没有找到匹配的行，节点会原样输出它收到的输入数据，不做任何修改。如果存在匹配的行，则不输出任何内容。

输入以下参数：

- **Resource（资源）：** 选择 **Row（行）**。
- **Operation（操作）：** 选择 **If Row Does Not Exist（如果行不存在）**。
- **Data table（数据表）：** 选择如何指定要操作的数据表：
    - **From list（从列表选择）：** 从所有数据表的下拉列表中选择该表。
    - **By Name（按名称）：** 输入你的数据表的名称。
    - **By ID（按 ID）：** 输入你的数据表的 ID。
- **Must Match（匹配要求）：** 选择行必须满足**任何条件（Any Condition）** 还是**所有条件（All Conditions）**。
- **Conditions（条件）：** 点击 **Add Condition（添加条件）** 来定义要操作的数据表行。你可以添加多个条件。每个条件包含：
    - **Column（列）：** 选择你想要比较的列。
    - **Condition（比较方式）：** 选择如何比较列值：**Equals（等于）**、**Not Equals（不等于）**、**Greater Than（大于）**、**Greater Than or Equal（大于等于）**、**Less Than（小于）**、**Less Than or Equal（小于等于）**、**Is Empty（为空）** 或 **Is Not Empty（不为空）**。
    - **Value（值）：** 输入要与列进行比较的值。你可以使用固定值，或引用前面节点数据的表达式。对于 **Is Empty** 和 **Is Not Empty** 条件，此字段不存在。

{% hint style="info" %}
**大白话（和上一个正好相反）**：逻辑和「如果行存在」相反：**找不到**匹配行 → 输入数据原样放行；**找到了** → 什么都不输出。常用来做「防重复」：比如插入前先检查「这个订单号是否已存在」，不存在才继续插入。
{% endhint %}

## 插入行（Insert row）

使用此操作向数据表中插入一个新行。

输入以下参数：

- **Resource（资源）：** 选择 **Row（行）**。
- **Operation（操作）：** 选择 **Insert（插入）**。
- **Data table（数据表）：** 选择如何指定要操作的数据表：
    - **From list（从列表选择）：** 从所有数据表的下拉列表中选择该表。
    - **By Name（按名称）：** 输入你的数据表的名称。
    - **By ID（按 ID）：** 输入你的数据表的 ID。
- **Mapping Column Mode（列映射模式）：** 选择以下方式之一：
    - **Map Each Column Manually（手动映射每一列）：** 明确选择把哪些输入数据字段映射到哪一列。即使输入数据字段名与数据表列名不一致，也能映射。你可以选择从映射中删除某些值。
    - **Map Automatically（自动映射）：** 让节点自动按名称把数据字段与列进行匹配。要映射成功，输入数据中的字段名必须与数据表中的列名完全一致。所有字段都会被映射。

{% hint style="info" %}
**小白提示（两种映射模式怎么选）**：数据字段名和表的列名**完全对得上**（比如字段 `email` → 列 `email`）→ 选 **Map Automatically**，省事；字段名和列名**不一样**（比如上游叫 `user_email`，列叫 `email`）→ 选 **Map Each Column Manually**，自己拖对应关系。不想写入的字段（比如插入时不需要 `id`），手动模式下可以直接从映射里去掉。
{% endhint %}

### 插入行的选项（Insert row options）

使用这些选项进一步细化操作行为：

- **Optimize Bulk（批量优化）：** 启用后，阻止返回已插入的数据。这可以把批量插入性能提升最高 5 倍。

{% hint style="info" %}
**小白提示（Optimize Bulk 什么时候开）**：插入很多行（成百上千条）且不需要「插入后拿回数据」时打开它，速度会快很多；如果插入后还要用插入的数据（比如拿到自动生成的 ID），就保持关闭。
{% endhint %}

## 更新行（Update row）

使用此操作，根据定义的一个或多个条件，更新数据表中的一行或多行。

输入以下参数：

- **Resource（资源）：** 选择 **Row（行）**。
- **Operation（操作）：** 选择 **Update（更新）**。
- **Data table（数据表）：** 选择如何指定要操作的数据表：
    - **From list（从列表选择）：** 从所有数据表的下拉列表中选择该表。
    - **By Name（按名称）：** 输入你的数据表的名称。
    - **By ID（按 ID）：** 输入你的数据表的 ID。
- **Must Match（匹配要求）：** 选择要更新满足**任何条件（Any Condition）** 还是**所有条件（All Conditions）** 的行。
- **Conditions（条件）：** 点击 **Add Condition（添加条件）** 来定义要操作的数据表行。你可以添加多个条件。每个条件包含：
    - **Column（列）：** 选择你想要比较的列。
    - **Condition（比较方式）：** 选择如何比较列值：**Equals（等于）**、**Not Equals（不等于）**、**Greater Than（大于）**、**Greater Than or Equal（大于等于）**、**Less Than（小于）**、**Less Than or Equal（小于等于）**、**Is Empty（为空）** 或 **Is Not Empty（不为空）**。
    - **Value（值）：** 输入要与列进行比较的值。你可以使用固定值，或引用前面节点数据的表达式。对于 **Is Empty** 和 **Is Not Empty** 条件，此字段不存在。
- **Mapping Column Mode（列映射模式）：** 选择以下方式之一：
    - **Map Each Column Manually（手动映射每一列）：** 明确选择把哪些输入数据字段映射到哪一列。即使输入数据字段名与数据表列名不一致，也能映射。你可以选择从映射中删除某些值。
    - **Map Automatically（自动映射）：** 让节点自动按名称把数据字段与列进行匹配。要映射成功，输入数据中的字段名必须与数据表中的列名完全一致。所有字段都会被映射。

### 更新行的选项（Update row options）

使用这些选项进一步细化操作行为：

- **Dry Run（试运行）：** 启用后模拟更新，不真正修改表。节点会返回将被更新的行，包括它们在操作前和操作后的状态。

{% hint style="info" %}
**大白话（更新的逻辑）**：更新 = 先按 **Conditions** 圈定「哪些行」，再用映射的字段值覆盖这些行的对应列。批量修改重要数据前，建议先开 **Dry Run** 看看会改到哪些行。
{% endhint %}

## Upsert 行（Upsert row）

使用此操作对数据表执行 upsert。如果存在满足定义条件的行，就用提供的值更新它。如果不存在匹配的行，则创建新行。

- **Resource（资源）：** 选择 **Row（行）**。
- **Operation（操作）：** 选择 **Upsert**。
- **Data table（数据表）：** 选择如何指定要操作的数据表：
    - **From list（从列表选择）：** 从所有数据表的下拉列表中选择该表。
    - **By Name（按名称）：** 输入你的数据表的名称。
    - **By ID（按 ID）：** 输入你的数据表的 ID。
- **Must Match（匹配要求）：** 选择要 upsert 满足**任何条件（Any Condition）** 还是**所有条件（All Conditions）** 的行。
- **Conditions（条件）：** 点击 **Add Condition（添加条件）** 来定义要操作的数据表行。你可以添加多个条件。每个条件包含：
    - **Column（列）：** 选择你想要比较的列。
    - **Condition（比较方式）：** 选择如何比较列值：**Equals（等于）**、**Not Equals（不等于）**、**Greater Than（大于）**、**Greater Than or Equal（大于等于）**、**Less Than（小于）**、**Less Than or Equal（小于等于）**、**Is Empty（为空）** 或 **Is Not Empty（不为空）**。
    - **Value（值）：** 输入要与列进行比较的值。你可以使用固定值，或引用前面节点数据的表达式。对于 **Is Empty** 和 **Is Not Empty** 条件，此字段不存在。
- **Mapping Column Mode（列映射模式）：** 选择以下方式之一：
    - **Map Each Column Manually（手动映射每一列）：** 明确选择把哪些输入数据字段映射到哪一列。即使输入数据字段名与数据表列名不一致，也能映射。你可以选择从映射中删除某些值。
    - **Map Automatically（自动映射）：** 让节点自动按名称把数据字段与列进行匹配。要映射成功，输入数据中的字段名必须与数据表中的列名完全一致。所有字段都会被映射。

### Upsert 行的选项（Upsert row options）

使用这些选项进一步细化操作行为：

- **Dry Run（试运行）：** 启用后模拟 upsert 操作，不真正修改表。节点会返回将受影响的行，包括它们在操作前和操作后的状态。

{% hint style="info" %}
**大白话（Upsert 是什么）**：Upsert = Update（更新）+ Insert（插入）的组合词：先按条件找，**找到了就更新，找不到就新建**。比如每天同步客户资料：客户已存在就更新其最新信息，不存在就新增一条。这样不用先查一遍再决定用 Insert 还是 Update，一步到位。
{% endhint %}
