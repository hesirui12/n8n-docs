---
title: Lemonade Model 节点文档
description: >-
  了解如何在 n8n 中使用 Lemonade Model 节点。阅读技术文档，把
  Lemonade Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Lemonade Model 节点文档
originalFilePath: integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmlemonade.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmlemonade
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmlemonade
layout:
  description:
    visible: false
---

# Lemonade Model 节点

> **大白话**：这个节点跟 Lemonade Chat Model 差不多，也是连接你自己的 **Lemonade Server**（自托管模型服务器），但它是"补全（completion）"风格的语言模型，适合做文本续写、摘要这类任务。它是个简单的 LLM 根节点，直接用在你自己的链里即可，不要求对话格式。

使用 Lemonade Model 节点，用 Lemonade 服务器托管和管理的大语言模型生成文本补全。这是一个简单的、兼容 LangChain 的语言模型根节点，适合 n8n 工作流里的文本补全任务。

在本页中，你可以找到 Lemonade Model 节点支持的操作列表，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/lemonade.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

用下面的参数配置节点。

### Model（模型）

负责生成补全内容的模型。模型由 Lemonade 服务器加载和管理；从节点提供的列表里选择你要用的模型。

## 节点选项

用这些选项进一步微调节点的行为。

### Sampling Temperature（采样温度）

控制生成文本的随机性。数值越低，输出越聚焦、越确定；数值越高，输出越多样、越随机。

| 属性（Property） | 值（Value） |
|----------|-------|
| 类型（Type） | number |
| 是否必填（Required） | no |
| 默认值（Default） | 0.7 |

### Top P

控制模型生成文本时可以从哪些词里挑选。数值越低，越不可能的选项会被逐步剔除，模型只能在更小、置信度更高的候选池里挑选。

| 属性（Property） | 值（Value） |
|----------|-------|
| 类型（Type） | number |
| 是否必填（Required） | no |
| 默认值（Default） | 1 |

### Frequency Penalty（频率惩罚）

调整对"已在生成文本中出现过的 token"的惩罚力度。正值会抑制重复，负值会鼓励重复。

| 属性（Property） | 值（Value） |
|----------|-------|
| 类型（Type） | number |
| 是否必填（Required） | no |
| 默认值（Default） | 0 |

### Presence Penalty（存在惩罚）

根据 token 是否已经出现在生成文本中来调整惩罚力度。正值会惩罚已出现过的 token，从而鼓励输出更多样。

| 属性（Property） | 值（Value） |
|----------|-------|
| 类型（Type） | number |
| 是否必填（Required） | no |
| 默认值（Default） | 0 |

### Max Tokens to Generate（最大生成 Token 数）

最多生成多少个 token。设为 `-1` 表示不限制。设置成很大的值时要注意，可能导致非常长的输出。

| 属性（Property） | 值（Value） |
|----------|-------|
| 类型（Type） | number |
| 是否必填（Required） | no |
| 默认值（Default） | -1 |

### Stop Sequences（停止序列）

用逗号分隔的序列列表，模型遇到这些序列就会停止生成文本。

| 属性（Property） | 值（Value） |
|----------|-------|
| 类型（Type） | string |
| 是否必填（Required） | no |
| 默认值（Default） | "" |

## 模板与示例

[浏览 Lemonade Model 节点集成模板](https://n8n.io/integrations/lemonade-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [Lemonade Server 的文档](https://lemonade-server.ai/docs/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
