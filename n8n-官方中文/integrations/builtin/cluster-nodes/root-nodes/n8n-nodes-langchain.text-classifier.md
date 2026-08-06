---
title: Text Classifier 节点文档
description: >-
  学习如何在 n8n 中使用 Text Classifier 节点。按照技术文档把 Text Classifier 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Text Classifier node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier
layout:
  description:
    visible: false
---

# Text Classifier 节点（文本分类器）

{% hint style="info" %}
**大白话**：Text Classifier 节点是「自动分类器」：你先定义几个类别（比如「投诉」「咨询」「表扬」），它会把每一条输入文字自动分到其中一个类别里。跟情感分析有点像，但类别完全由你自己定，想分什么都行。没匹配上的数据还能选择丢弃或走「其他」分支。
{% endhint %}

使用 Text Classifier 节点来对传入的数据进行分类（归类）。使用参数中提供的类别（见下文），每一条数据都会被传给模型来确定它的类别。

在这个页面上，你可以找到 Text Classifier 节点的节点参数，以及更多资源的链接。

## 节点参数（Node parameters）

* **Input Prompt（输入提示词）** 定义要分类的输入。这通常是一个引用输入项（input items）中某个字段的表达式。例如，如果输入来自聊天触发器，可以写成 `{{ $json.chatInput }}`。默认情况下它引用 `text` 字段。
* **Categories（类别）**：添加你希望把输入划分成的类别。类别有一个名称和一个描述。用描述告诉模型这个类别的含义。如果含义不明显，这一点很重要。你可以随意添加任意多个类别。

## 节点选项（Node options）

* **Allow Multiple Classes To Be True（允许多个类别同时成立）**：你可以配置分类器总是为每条数据输出单一类别（关闭），或允许模型选择多个类别（开启）。
* **When No Clear Match（没有明确匹配时）**：定义模型找不到好的匹配时会发生什么。有两个选项：
	- **Discard Item（丢弃数据项）**（默认）：如果节点没有检测到任何类别，它就丢弃这条数据。
	- **Output on Extra, 'Other' Branch（输出到额外的 Other 分支）**：创建一个名为 **Other（其他）** 的独立输出分支。当节点没有检测到任何类别时，它会把数据输出到这个分支。
* **System Prompt Template（系统提示词模板）**：使用这个选项来更改用于分类的系统提示词。它使用 `{categories}` 占位符来表示类别。

* **Enable Auto-Fixing（启用自动修复）**：启用后，节点会自动修复模型输出，确保它们符合期望的格式。做法是把结构解析错误发给 LLM，让它自己修正。

## 相关资源（Related resources）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
