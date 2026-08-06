---
contentType: howto
nodeTitle: 使用界面映射器
originalFilePath: data/data-mapping/data-mapping-ui.md
originalUrl: 'https://docs.n8n.io/data/data-mapping/data-mapping-ui'
url: 'https://docs.n8n.io/build/work-with-data/reference-data/use-the-ui-mapper'
layout:
  description:
    visible: false
---

# 在界面中引用数据 / Referencing data in the UI

{% hint style="info" %}
**大白话**：这一页讲的是「在界面上引用数据」的两种最直观的做法。重点划一下：**数据映射（data mapping）只负责「引用」，不负责「修改」**——它就像「把前面节点的某个值『抄』到后面节点的参数框里」，抄过来的还是原来的值，数据本身没变。想在界面上把数据改掉？那是「转换数据」的事。
{% endhint %}

数据映射（data mapping）的意思是引用前面节点的数据。它不包括修改（转换）数据，只是引用。

当你在工作流中需要某个特定节点的数据时，你可以[按名称引用节点（reference nodes by name）](reference-previous-nodes.md)。当你的工作流有多个分支（branches），或者你需要访问好几步之前的数据时，这种方法特别有用。

你可以用以下方式映射（引用）数据：

* 使用表达式编辑器（expressions editor）。
* 把 **INPUT**（输入）面板中的数据**拖拽**到节点参数里。n8n 会自动为你生成表达式。

![Creating expressions in the UI](../../.gitbook/assets/expressionEditor.gif)

{% hint style="info" %}
**大白话**：上面这个 GIF 演示的就是最常用的「拖拽映射」：左边 **INPUT**（输入）面板里能看到前面节点输出的每个字段，你用鼠标把需要的字段拖到某个节点的参数输入框里，松开鼠标，n8n 就自动帮你写好 `{{ ... }}` 表达式了。不用记语法、不用手打，对小白特别友好。
{% endhint %}

关于映射和链接条目时的报错，请参考[条目链接错误（Item linking errors）](link-data-items/item-linking-errors.md)。

参见[常用的引用方式（Common ways of referencing）](reference-previous-nodes.md#common-ways-of-referencing)。
