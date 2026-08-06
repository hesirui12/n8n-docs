---
title: WhatsApp Business Cloud 节点常见问题
description: >-
  n8n 中 WhatsApp Business Cloud 节点常见问题和疑问的文档，一个工作流自动化平台。
  包括问题详情和建议的解决方案。
contentType:
  - integration
  - reference
priority: high
nodeTitle: WhatsApp Business Cloud 节点常见问题
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/common-issues
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这一页收集了 WhatsApp Business Cloud 节点最常见的两个坑：① 发模板消息时参数不对导致报「Bad request」；② 发图片/文件等非文本媒体时字段填法不对。看完照着改基本就能解决。
{% endhint %}

# WhatsApp Business Cloud 节点常见问题

以下是 [WhatsApp Business Cloud 节点](README.md) 的一些常见错误和问题，以及解决或排查步骤。

## Bad request - please check your parameters（请求无效——请检查你的参数）

这个错误发生在 WhatsApp Business Cloud 因为参数问题拒绝你的请求时。使用 **Send Template（发送模板消息）** 操作时，如果你发送的数据与你模板的格式不匹配，就很容易看到这个错误。

要解决这个问题，请检查你的[消息模板](https://www.facebook.com/business/help/2055875911147364?id=2129163877102343)中的参数。注意每个参数的数据类型，以及它们在模板中定义的顺序。

检查 n8n 映射到模板参数的数据。如果你用表达式来设置参数值，请检查输入数据，确保每个数据项都能解析出有效值。你可能想使用 [Edit Fields (Set) 节点](../../core-nodes/n8n-nodes-base.set.md) 或设置一个兜底默认值，确保你发送的值格式正确。

## Working with non-text media（处理非文本媒体）

WhatsApp Business Cloud 节点可以处理非文本消息和媒体，如图片、音频、文档等。

如果你的操作包含 **Input Data Field Name（输入数据字段名）** 或 **Property Name（属性名）** 参数，请把它设置为字段名本身，而不是在表达式中引用数据。

例如，如果你想发送一条 **MessageType（消息类型）** 为 "Image"、**Take Image From（图片来源）** 设为 "n8n" 的消息，就把 **Input Data Field Name** 设置为像 `data` 这样的字段名，而不要用 `{{ $json.input.data }}` 这样的表达式。
