---
title: Information Extractor 节点文档
description: >-
  学习如何在 n8n 中使用 Information Extractor 节点。按照技术文档把 Information Extractor 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Information Extractor node documentation
originalFilePath: >-
  integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.information-extractor
layout:
  description:
    visible: false
---

# Information Extractor 节点（信息提取器）

{% hint style="info" %}
**大白话**：Information Extractor 节点的作用是「从一堆文字里抽出结构化数据」。比如你给它一段合同文本，它能按你定义好的字段（合同编号、签约方、金额、日期……）把信息自动填进一个规整的 JSON 里，方便后续节点处理。只要先定义好「要抽哪些字段」或「输出的 JSON 长什么样」就行。
{% endhint %}

使用 Information Extractor 节点从传入的数据中提取结构化信息。

在这个页面上，你可以找到 Information Extractor 节点的节点参数，以及更多资源的链接。

## 节点参数（Node parameters）

* **Text（文本）** 定义要从中提取信息的输入文本。这通常是一个引用输入项（input items）中某个字段的表达式。例如，如果输入来自聊天触发器，可以写成 `{{ $json.chatInput }}`；如果上一个节点是 Extract from PDF（从 PDF 提取），可以写成 `{{ $json.text }}`。
* 使用 **Schema Type（结构类型）** 来选择如何描述期望的输出数据格式。你可以在以下选项之间选择：
    * **From Attribute Descriptions（根据属性描述）**：这个选项允许你通过指定属性列表及其描述来定义结构（schema）。
    * **Generate From JSON Example（从 JSON 示例生成）**：输入一个示例 JSON 对象来自动生成结构。节点使用对象属性的类型和名称，忽略实际的值。当从 JSON 示例生成结构时，n8n 会把每个字段都当作必填字段。
    * **Define using JSON Schema（使用 JSON Schema 定义）**：手动输入 JSON schema。阅读 JSON Schema 的[指南和示例](https://json-schema.org/learn/miscellaneous-examples)来帮助你创建有效的 JSON schema。

## 节点选项（Node options）

* **System Prompt Template（系统提示词模板）**：使用这个选项来更改用于信息提取的系统提示词。n8n 会自动在提示词末尾附加格式规范说明。

## 相关资源（Related resources）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
