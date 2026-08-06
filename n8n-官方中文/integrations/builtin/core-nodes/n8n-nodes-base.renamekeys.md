---
title: 重命名键（Rename Keys）
description: >-
  n8n 工作流自动化平台中「重命名键」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: 重命名键
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.renamekeys.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.renamekeys'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.renamekeys'
layout:
  description:
    visible: false
---

# 重命名键（Rename Keys）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：在 n8n 里，数据是一组「键值对（key-value pair）」，键就是字段名，值就是内容。Rename Keys 节点用来批量修改字段名。最常见的场景：A 系统返回的字段叫 `customer_name`，而你的数据库要求 `name`，就用它把 `customer_name` 改名为 `name`，不用写代码。
{% endhint %}

使用「重命名键」（Rename Keys）节点来重命名 n8n 中键值对的键。

## 节点参数（Node parameters）

你可以使用「重命名键」节点重命名一个或多个键。选择 **Add new key（添加新键）** 按钮来重命名一个键。

对每个键，输入：

- **Current Key Name（当前键名）**：你想要重命名的键的当前名称。
- **New Key Name（新键名）**：你想要分配给键的新名称。

{% hint style="info" %}
**大白话（怎么用）**：点击 **Add new key**，会出现两行输入框：上面填「现在的字段名」，下面填「改成的字段名」。比如当前键名填 `customer_name`，新键名填 `name`，运行后这条数据的字段名就变成 `name` 了。想要改多个字段，就多添加几组。
{% endhint %}

## 节点选项（Node options）

选择是否使用**正则表达式（Regex）**来识别要重命名的键。要使用此选项，你还需要输入：

* 你想要使用的**正则表达式（Regular Expression）**。
* **Replace With（替换为）**：输入你想要分配给匹配**正则表达式**的键的新名称。
* 你还可以选择这些正则表达式专属的选项：
    * **Case Insensitive（不区分大小写）**：设置正则表达式是否区分大小写（关闭为区分）或不区分大小写（打开）。
    * **Max Depth（最大深度）**：输入替换键的最大深度，使用 `-1` 表示不限制，`0` 表示仅顶层。

{% hint style="info" %}
**大白话（正则表达式是什么）**：正则表达式（Regex）是一种「按模式匹配文字」的规则，相当于高级查找。比如正则 `^user_` 能匹配所有以 `user_` 开头的字段名（`user_id`、`user_name`…），把它们统一改名为你填在 **Replace With** 里的名字。不会写正则也没关系，多数需求手动添加键就够用了。**Max Depth** 里的「深度」指数据的嵌套层数：`0` 只改最外层字段，`-1` 不管嵌套多深都改。
{% endhint %}

{% hint style="warning" %}
**正则表达式的影响（Regex impacts）**

使用正则表达式可能会影响到任何匹配该表达式的键，包括你已经重命名过的键。

{% hint style="info" %}
**大白话（小心重复改名）**：比如你先把 `user_id` 改成了 `id`，而你的正则会匹配所有以 `id` 结尾的字段——那么刚改好的 `id` 可能又被规则改一遍，甚至改出意料之外的结果。所以用正则时，先想清楚它会不会「误伤」你已改过的字段。
{% endhint %}
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 Rename Keys 集成模板](https://n8n.io/integrations/rename-keys) 或[搜索所有模板](https://n8n.io/workflows/)
