---
contentType: howto
nodeTitle: 过滤掉不需要的数据
originalFilePath: data/data-filtering.md
originalUrl: 'https://docs.n8n.io/data/data-filtering'
url: 'https://docs.n8n.io/build/work-with-data/filter-out-unwanted-data'
layout:
  description:
    visible: false
---

# 过滤数据 / Filtering data

在 n8n 里，「过滤」这个词根据你想达成的目标不同，可能指不同的事情。本指南既会讲界面里的可视化过滤，也会讲工作流（workflow）执行过程中的数据过滤。

{% hint style="info" %}
**大白话**：先分清两种过滤——一种只是「界面上的筛选」，帮你找东西看，数据本身完全不动；另一种是「工作流里的真过滤」，按条件把不需要的数据真正删掉。下面分别介绍。
{% endhint %}

## 在界面里可视化地过滤数据 / Filter data visually in the UI

{% hint style="info" %}
**功能可用性**

在社区版（Community）、云专业版（Cloud Pro）和企业版（Enterprise）套餐中可用。
{% endhint %}

在节点的 **INPUT**（输入）和 **OUTPUT**（输出）面板里搜索和筛选数据。用这个功能来检查节点的数据、找到特定的数据项。

搜索方法：

1. 在节点中，点击 **INPUT** 或 **OUTPUT** 面板里的 **搜索（Search）** <img src="../.gitbook/assets/search.png" alt="Search icon" data-size="line">。
1. 输入你的搜索词。

n8n 会边输入边过滤，显示包含该搜索词的对象或行。

这种过滤纯粹是视觉上的：n8n 不会改动或删除任何数据。当你关闭并重新打开节点时，过滤条件会被重置。

## 在工作流执行过程中过滤数据 / Filter data during workflow execution

要真正地删除或过滤工作流里的数据，请使用下面这些方法：

### 过滤掉整条数据项 / Filter out items

要根据条件删除整条数据项，请使用 [Filter 节点（Filter node）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.filter)。这个节点会计算条件，只放行符合你要求的数据项。

### 过滤掉字段 / Filter out fields

要删掉一条数据项（或对象）里的某些字段、同时保留数据项本身，请使用 [编辑字段（Set）节点（Edit Fields (Set) node）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.set)。把它配置成删除你不想要的字段即可。

### 过滤数组元素 / Filter array elements

要过滤一条数据项内部数组里的元素，可以在表达式（Expressions）或代码节点（Code node）里使用 `.filter()` 方法。例如：

```javascript
{{ $json.myArray.filter(item => item.value > 10) }}
```

这会删掉不符合条件的数组元素，同时保留数据项本身的结构。

### 过滤掉上一次执行中出现过的重复数据 / Filter out duplicate items from previous executions

要删除之前几次工作流执行中已经出现过的数据项，请使用 [去除重复（Remove Duplicates）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.removeduplicates) 节点。当某个事件被触发了好几次、而你只想处理第一次出现的数据时，就用它。
