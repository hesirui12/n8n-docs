---
title: 合并 Merge
description: >-
  n8n 工作流自动化平台中「合并 Merge」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Merge
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.merge.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.merge'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.merge'
layout:
  description:
    visible: false
---

# 合并 Merge

> **大白话**：这个节点负责把「多条数据流」合并到一起，等所有数据流的数据都到齐了才干活。比如你同时从两个接口各拿到一份名单，想拼成一张表，就用它。它有好几种合并方式（简单拼接、按字段匹配、按顺序一一配对、两两全组合、写 SQL 合并等），下面一个个讲清楚。

使用「合并 Merge」节点，在来自多个数据流的数据全部就绪后，把它们合并到一起。

{% hint style="info" %}
**0.194.0 版本的重大变更**

n8n 团队在 n8n 0.194.0 版本中彻底重构了这个节点。本文档反映的是该节点的最新版本。如果你使用的是旧版本的 n8n，可以在[这里](https://github.com/n8n-io/n8n-docs/blob/4ff688642cc9ee7ca7d00987847bf4e4515da59d/docs/integrations/builtin/core-nodes/n8n-nodes-base.merge.md)找到本文档的旧版本。
{% endhint %}

{% hint style="info" %}
**1.49.0 版本的次要变更**

n8n 1.49.0 版本新增了支持多于两个输入端口的功能。旧版本只支持最多两个输入。如果你运行的是旧版本，并且想合并多个输入，请改用 [Code 节点](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/)。

**模式 Mode > SQL 查询 SQL Query** 功能也是在 n8n 1.49.0 版本中加入的，旧版本没有这个功能。
{% endhint %}

## 节点参数

你可以通过选择一种**模式 Mode** 来指定「合并 Merge」节点应该如何合并来自不同数据流的数据：

### 追加 Append

保留所有输入的数据。选择**输入数量 Number of Inputs**，然后把每个输入的每个数据项一个接一个地输出。这个节点会等待所有已连接的输入都执行完毕。

<figure>
<img src="../../.gitbook/assets/append-diagram.png" alt="">
<figcaption>追加模式的输入和输出示意图</figcaption>
</figure>

（白话解释：追加 = 把第二份数据直接接在第一份数据的屁股后面，像排队一样首尾相连，不做任何配对。）

### 组合 Combine

组合来自两个输入的数据。在 **组合方式 Combine By** 中选择一个选项，来决定你想如何合并输入数据。

#### 匹配字段 Matching Fields

按照字段值来比较数据项。在 **要匹配的字段 Fields to Match** 中输入你要比较的字段。

n8n 的默认行为是保留匹配的数据项。你可以使用 **输出类型 Output Type** 设置来改变这一行为：

* **保留匹配项 Keep Matches**：合并匹配的数据项。这就像数据库里的内连接（inner join）。
* **保留不匹配项 Keep Non-Matches**：合并不匹配的数据项。
* **全部保留 Keep Everything**：合并匹配的数据项，同时把不匹配的数据项也保留下来。这就像外连接（outer join）。
* **充实输入 1 Enrich Input 1**：保留输入 1 的所有数据，并添加上来自输入 2 的匹配数据。这就像左连接（left join）。
* **充实输入 2 Enrich Input 2**：保留输入 2 的所有数据，并添加上来自输入 1 的匹配数据。这就像右连接（right join）。

<figure>
<img src="../../.gitbook/assets/merge-by-field-diagram.png" alt="">
<figcaption>按匹配字段组合模式的输入和输出示意图</figcaption>
</figure>

（白话解释：匹配字段 = 两个输入都有一列共同的「钥匙」，比如都有的 `language`（语言）字段，n8n 把钥匙相同的两行拼成一行。）

#### 位置 Position

按照数据项的顺序来组合。输入 1 中索引为 0 的数据项与输入 2 中索引为 0 的数据项合并，以此类推（第一个配第一个、第二个配第二个……）。

<figure>
<img src="../../.gitbook/assets/merge-by-position-diagram.png" alt="">
<figcaption>按位置组合模式的输入和输出示意图</figcaption>
</figure>

#### 所有可能组合 All Possible Combinations

输出所有可能的数据项组合，同时合并同名字段。

<figure>
<img src="../../.gitbook/assets/multiplex-diagram.png" alt="">
<figcaption>按所有可能组合模式的输入和输出示意图</figcaption>
</figure>

（白话解释：这就像「配对联欢」——输入 1 里的每个人都要和输入 2 里的每个人各配一次。输入 1 有 3 行、输入 2 有 2 行，就会得到 3 × 2 = 6 行。）

#### 组合模式的选项

当你通过 **模式 Mode > 组合 Combine** 合并数据时，可以设置以下**选项 Options**：

* **冲突处理 Clash Handling**：当数据流之间发生字段冲突，或者存在子字段时，选择如何合并。详细说明请参考 [冲突处理](#clash-handling)。
* **模糊比较 Fuzzy Compare**：在比较字段时是否容忍类型差异（开启 = 容忍，关闭 = 不容忍，默认关闭）。例如开启后，n8n 会把 `"3"`（字符串）和 `3`（数字）当成同一个值。
* **禁用点号表示法 Disable Dot Notation**：禁止在字段名中使用 `parent.child` 这种形式访问子字段。
* **多重匹配 Multiple Matches**：选择 n8n 在比较数据流时如何处理多个匹配项。
    * **包含所有匹配项 Include All Matches**：如果有多个匹配项，则输出多个数据项，每个匹配项对应一个。
    * **仅包含第一个匹配项 Include First Match Only**：每个匹配只保留第一个数据项，丢弃其余的匹配项。
* **包含任何未配对的数据项 Include Any Unpaired Items**：按位置合并时，选择是保留还是丢弃未配对的数据项。默认行为是丢弃没有匹配的数据项。

##### 冲突处理 Clash Handling

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/VJPiDgC5Bx5FmuGODmCq/" %}

（注：此处的「冲突处理」详细说明来自 GitBook 公共复用内容，未在本镜像中展开。简单来说，它决定当两份数据里同一个字段名出现不同值时，该听谁的。）

### SQL 查询 SQL Query

编写自定义 SQL 查询来合并数据。

示例：
```sql
SELECT * FROM input1 LEFT JOIN input2 ON input1.name = input2.id
```

（上面这句 SQL 的意思是：把 input1 和 input2 做左连接，连接条件是 input1 的 name 字段等于 input2 的 id 字段。）

来自前面节点的数据会以表（table）的形式提供，你可以按顺序把它们当作 input1、input2、input3 等来使用。支持的 SQL 语句完整列表，请参考 [AlaSQL GitHub 页面](https://github.com/alasql/alasql/wiki/Supported-SQL-statements)。

#### 使用查询参数

在「合并 Merge」节点中创建 SQL 查询时，你可以使用 **选项 Options** 部分中的 **查询参数 Query Parameters** 字段把值加载进查询。n8n 把查询参数的值当作数据来处理，这有助于避免用动态值改变 SQL 查询的结构（也就是防止 SQL 注入）。

举个例子，你想按名字查找一个人。假设 `input1` 中有以下数据：

```js
[
    {
        "name": "Alex",
        "age": 21
    },
    {
        "name": "Jamie",
        "age": 33
    }
]
```

你可以用 `?` 占位符来写查询：

```sql
SELECT * FROM input1 WHERE name = ? AND age > ?;
```

然后在 **查询参数 Query Parameters** 中提供要使用的值。你可以提供逗号分隔的值，或者一个返回数组的表达式。对于这个例子，用一个数组：

```js
{{ [ "Alex", 20 ] }}
```

（`?` 是占位符，按顺序对应数组里的值：第一个 `?` 对应 `"Alex"`，第二个 `?` 对应 `20`。最终查询等价于 `SELECT * FROM input1 WHERE name = "Alex" AND age > 20`，会查到 Alex 这一行。）

### 选择分支 Choose Branch

选择保留哪个输入的数据。这个选项总是会等待两个输入的数据都就绪后才执行。你可以选择**输出 Output**：

* **输入 1 的数据 The Input 1 Data**
* **输入 2 的数据 The Input 2 Data**
* **一个单独的空数据项 A Single, Empty Item**

节点会原封不动地输出所选输入的数据，不做任何修改。

## 模板和示例

[浏览合并（Merge）的集成模板](https://n8n.io/integrations/merge) 或 [搜索所有模板](https://n8n.io/workflows/)

## 合并数据项数量不均等的数据流

传入「合并 Merge」节点输入 1 的数据项优先。例如，如果「合并 Merge」节点在输入 1 收到 5 个数据项、在输入 2 收到 10 个数据项，它只会处理 5 个数据项。输入 2 中剩余的 5 个数据项不会被处理。

## 使用 If 和 Merge 节点进行分支执行

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/o5sVhTw0cyO5aAAkAVDj/" %}

（注：此处的「分支执行」详细说明来自 GitBook 公共复用内容，未在本镜像中展开。简单来说，它讲解的是用 If 节点分叉、再用 Merge 节点把分叉的支流汇合回一条主线的常见用法。）

## 动手试试：一个逐步示例

创建一个带有示例输入数据的工作流，来试用「合并 Merge」节点。

### 使用 Code 节点设置示例数据

1. 在画布上添加一个 Code 节点，并把它连接到 Start（开始）节点。
2. 在 **JavaScript 代码 JavaScript Code** 字段中粘贴以下 JavaScript 代码片段：
```js
return [
  {
    json: {
      name: 'Stefan',
      language: 'de',
    }
  },
  {
    json: {
      name: 'Jim',
      language: 'en',
    }
  },
  {
    json: {
      name: 'Hans',
      language: 'de',
    }
  }
];
```
（这段代码生成 3 条数据：Stefan 说德语 de、Jim 说英语 en、Hans 说德语 de。它作为输入 1。）
3. 再添加一个 Code 节点，并连接到 Start（开始）节点。
4. 在 **JavaScript 代码 JavaScript Code** 字段中粘贴以下 JavaScript 代码片段：
```js
return [
	  {
    json: {
      greeting: 'Hello',
      language: 'en',
    }
  },
  {
    json: {
      greeting: 'Hallo',
      language: 'de',
    }
  }
];
```
（这段代码生成 2 条数据：greeting 为 Hello 对应英语 en、greeting 为 Hallo 对应德语 de。它作为输入 2，也就是「问候语表」。）

### 尝试不同的合并模式

添加「合并 Merge」节点。把第一个 Code 节点连接到 **输入 1 Input 1**，第二个 Code 节点连接到 **输入 2 Input 2**。运行工作流，把数据加载进「合并 Merge」节点。

最终的工作流应该长这样：

{% @n8n-blocks/n8n-workflow-demo content="" url="https://api.n8n.io/workflows/templates/655" %}

现在试试 **模式 Mode** 里的不同选项，看看它们如何影响输出数据。

#### 追加 Append

选择 **模式 Mode** > **追加 Append**，然后点击 **执行步骤 Execute step**。

你在表格视图中的输出应该长这样：

| **name（姓名）** | **language（语言）** | **greeting（问候语）** |
| --- | --- | --- |
| Stefan | de |  |
| Jim | en |  |
| Hans | de |  |
|   | en | Hello |
|   | de | Hallo |

（追加模式把输入 2 的两行直接接在输入 1 的三行后面，同一行里没有互相匹配的字段，所以 greeting 列和 name 列各自为空。）

#### 按匹配字段组合 Combine by Matching Fields

你可以合并这两个数据输入，让每个人都能得到符合自己语言的问候语。

1. 选择 **模式 Mode** > **组合 Combine**。
2. 选择 **组合方式 Combine by** > **匹配字段 Matching Fields**。
3. 在 **输入 1 字段 Input 1 Field** 和 **输入 2 字段 Input 2 Field** 中都输入 `language`。这告诉 n8n 通过匹配每个数据集中 `language` 字段的值来组合数据。
4. 点击 **执行步骤 Execute step**。

你在表格视图中的输出应该长这样：

| **name（姓名）** | **language（语言）** | **greeting（问候语）** |
| --- | --- | --- |
| Stefan | de | Hallo |
| Jim | en | Hello  |
| Hans | de | Hallo |

（语言相同的行被拼在了一起：Stefan 和 Hans 都说德语 de，所以配到 Hallo；Jim 说英语 en，配到 Hello。）

#### 按位置组合 Combine by Position

选择 **模式 Mode** > **组合 Combine**、**组合方式 Combine by** > **位置 Position**，然后点击 **执行步骤 Execute step**。

你在表格视图中的输出应该长这样：

| **name（姓名）** | **language（语言）** | **greeting（问候语）** |
| --- | --- | --- |
| Stefan | en | Hello |
| Jim | de | Hallo  |

（按位置配对 = 输入 1 的第 1 行配输入 2 的第 1 行、输入 1 的第 2 行配输入 2 的第 2 行。因为输入 2 只有 2 行，输入 1 的第 3 行（Hans）没有配对对象，默认被丢弃。）

##### 保留未配对的数据项

如果你想保留所有数据项，选择 **添加选项 Add Option** > **包含任何未配对的数据项 Include Any Unpaired Items**，然后打开 **包含任何未配对的数据项 Include Any Unpaired Items** 开关。

你在表格视图中的输出应该长这样：

| **name（姓名）** | **language（语言）** | **greeting（问候语）** |
| --- | --- | --- |
| Stefan | en | Hello |
| Jim | de | Hallo  |
| Hans | de |  |

（开了这个选项后，Hans 也被保留下来了，只是没有配对到问候语，所以 greeting 列为空。）

#### 按所有可能组合 Combine by All Possible Combinations

选择 **模式 Mode** > **组合 Combine**、**组合方式 Combine by** > **所有可能组合 All Possible Combinations**，然后点击 **执行步骤 Execute step**。

你在表格视图中的输出应该长这样：

| **name（姓名）** | **language（语言）** | **greeting（问候语）** |
| --- | --- | --- |
| Stefan | en | Hello |
| Stefan | de | Hallo |
| Jim | en | Hello  |
| Jim | de | Hallo |
| Hans | en | Hello |
| Hans | de | Hallo |

（3 个人 × 2 句问候语 = 6 行，穷举所有组合。）
