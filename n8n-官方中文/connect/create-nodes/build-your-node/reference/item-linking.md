---
contentType: howto
nodeTitle: Item linking
originalFilePath: integrations/creating-nodes/build/reference/paired-items.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/build/reference/paired-items'
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/item-linking
layout:
  description:
    visible: false
---

# 数据项关联（Item linking）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/kXGDlwgR3wBuMfOWaSGE/" %}

{% hint style="info" %}
**上面这行是什么？** 官方「可复用内容块」，在线渲染时自动展开。它的内容是 n8n 关于「数据项关联 / 配对数据项（paired items）」的标准讲解——简单说：当你的节点把 1 条输入数据变成 N 条输出数据（或 N 条输入变成 1 条输出）时，你必须用 `pairedItem` 信息告诉 n8n「每一条输出对应哪一条输入」。这样后面的节点才能正确地做字段映射、数据追踪（哪里来的数据）等功能。更多内容可以参考[编程式 execute() 方法](base-files/programmatic-style-execute-method.md)里的相关提示，以及在写 `execute()` 时使用 `this.helpers.constructExecutionMetaData(...)` 来自动生成配对信息。
{% endhint %}
