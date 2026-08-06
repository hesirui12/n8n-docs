---
contentType: overview
nodeTitle: 引用数据
originalFilePath: data/data-mapping/index.md
originalUrl: 'https://docs.n8n.io/data/data-mapping'
url: 'https://docs.n8n.io/build/work-with-data/reference-data'
layout:
  description:
    visible: false
---

# 引用数据 / Referencing data

{% hint style="info" %}
**大白话**：这一栏讲的是「数据映射 / 引用数据」（data mapping）——简单说就是：**把前面某个节点跑出来的数据，拿来给后面的节点用**。比如「Webhook 节点收到的订单号，喂给查询订单详情的节点」。注意关键词是「引用」：你只是「指向」已有的数据，并没有修改它。想改数据？那是下一个栏目「转换数据」的事。
{% endhint %}

引用数据（referencing data），也叫数据映射（data mapping），指的是访问工作流中前面节点的信息。这让你可以把前面步骤的输出用作后面节点的输入，从而创建出能跨多个操作传递数据的动态工作流。

当你引用数据时，你并没有改变它。你只是在「指向」已经存在的值，以便在节点参数、表达式或自定义代码中使用它们。

如果你想修改所引用的数据，请看[转换数据（Transforming data）](../transform-data/approaches-for-transforming-data.md)。

## 如何引用数据 / How to reference data

引用数据的主要方式是使用[表达式（expressions）](../expressions-versus-data-nodes.md#expressions)。你可以在某个参数的输入框里直接输入表达式，或者在界面（UI）中从 **INPUT**（输入）面板把字段拖拽到参数框里。表达式会自动利用[条目链接（item linking）](link-data-items/README.md)搞清楚该使用哪一条数据。

{% hint style="info" %}
**大白话**：在 n8n 里引用数据最省事的方式有两种：**① 手打表达式**——在参数框里输入 `{{ ... }}` 这样的表达式；**② 拖拽**——左边面板能看到前面节点的输出字段，直接用鼠标把它拖到参数框里，n8n 会自动帮你生成表达式。至于「条目链接（item linking）」：当每个节点有多条数据时，n8n 会自动判断「当前正在处理的这条数据，对应前面节点哪一条」，你基本不用操心。
{% endhint %}
