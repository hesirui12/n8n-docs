---
title: AI 转换（AI Transform）
contentType:
  - integration
  - reference
nodeTitle: AI 转换
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.aitransform.md
originalUrl: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aitransform
url: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aitransform
description: >-
  n8n 工作流自动化平台中「AI 转换」节点的文档。包含用法说明和示例链接。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# AI 转换（AI Transform）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：不会写代码也能转换数据？AI Transform 节点就是干这个的：你用大白话描述「我想要怎么处理数据」（比如「把每个人的名字格式化成『姓氏+名』」），节点调用 AI 自动生成一段 JavaScript 代码来完成这件事。它甚至能「看懂」你工作流里其他节点的数据结构，生成出来的代码可以直接用。
{% endhint %}

使用「AI 转换」（AI Transform）节点，根据你的提示（prompt）生成代码片段。AI 是具备上下文感知能力的——它能理解工作流的节点及其数据类型。

{% hint style="info" %}
**功能可用性（Feature availability）**

仅在[云套餐（Cloud plans）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud)中可用。

{% hint style="info" %}
**大白话（什么意思）**：这个功能是 n8n 云服务的付费套餐专属功能。如果你使用的是自托管（self-hosted）版本或免费版云套餐，是看不到这个节点的。
{% endhint %}
{% endhint %}

## 节点参数（Node parameters）

### 说明（Instructions）

输入你的提示（prompt），然后点击 **Generate code（生成代码）** 按钮，会自动填充 **Transformation Code（转换代码）**。例如，你可以说明你想要如何处理或分类数据。更多信息请参阅[如何写出好的提示（Writing good prompts）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/get-coding-help-from-ai#writing-good-prompts)。

提示应该使用简单的英文，并且不超过 500 个字符。

{% hint style="info" %}
**小白提示（怎么写提示）**：描述得越具体越好。与其说「处理一下数据」，不如说「把每个条目的 fullName 字段拆成 firstName 和 lastName 两个字段，中间没有空格」。告诉 AI 输入数据长什么样、想要什么样的输出，它生成的代码才准确。虽然官方建议用英文，但提示词写得清楚（包括用中文描述字段对应关系）通常也能正常工作。
{% endhint %}

### 转换代码（Transformation Code）

节点生成的代码片段是只读的。要编辑这段代码，请调整 **Instructions（说明）** 中的提示，或者把它复制粘贴到一个 [Code（代码）](n8n-nodes-base.code/README.md) 节点中。

{% hint style="info" %}
**大白话（为什么不让我直接改代码）**：AI 生成的代码是「一次性产物」，直接改容易和提示不一致。想微调，就回去改提示重新生成；想完全自由地改，把代码复制到 Code 节点里再编辑（Code 节点还能继续用 n8n 内置的辅助方法）。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 AI Transform 集成模板](https://n8n.io/integrations/ai-transform) 或[搜索所有模板](https://n8n.io/workflows/)
