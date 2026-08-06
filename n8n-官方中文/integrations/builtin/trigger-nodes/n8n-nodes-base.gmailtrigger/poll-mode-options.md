---
title: Gmail 触发器节点 Poll Mode 选项文档
description: >-
  Learn about the poll mode options available to the Gmail Trigger node in n8n
  and how to configure them.
contentType: howto
priority: high
nodeTitle: Gmail 触发器节点 Poll Mode 选项文档
originalFilePath: >-
  integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/poll-mode-options.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/poll-mode-options
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/poll-mode-options
layout:
  description:
    visible: false
---

# Gmail 触发器节点 Poll Mode（轮询模式）选项

> **大白话**：Gmail 触发器有两种工作方式：轮询模式（按设定时间隔定期去检查新邮件）和 webhook 模式（邮件一到马上推给你）。这篇讲的是轮询模式下有哪些选项、每个选项怎么用。**Poll Time（轮询时间）** 参数控制多久检查一次，选不同的 **Mode（模式）** 会出现不同的字段。

使用 [Gmail 触发器节点](README.md) 的 **Poll Time（轮询时间）** 参数来设置多久触发一次轮询。你选择的 **Mode（模式）** 会相应地增加或移除相关字段。

## Poll Mode 选项

关于每种 **Mode（模式）** 的使用细节，请参阅以下各节。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/DnRpcOvtlMPcHD6I3kyx/" %}
