---
title: Lemonade Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 Lemonade Chat Model 节点。阅读技术文档，把
  Lemonade Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Lemonade Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatlemonade.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatlemonade
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatlemonade
layout:
  description:
    visible: false
---

# Lemonade Chat Model 节点

> **大白话**：这个节点用来连接你自己的 **Lemonade Server**（一个本地/自托管的大模型推理服务器），在 n8n 里调用它上面跑着的对话模型。适合数据不能出内网、或者想完全掌控模型部署的公司场景。模型由你的 Lemonade 服务器提供，参数里选一下模型别名（比如 `gpt-4`）就行。

使用 Lemonade Chat Model 节点，在 n8n 中运行由 Lemonade 服务器托管的支持对话的大语言模型。这个节点相当于一个兼容 LangChain 的对话模型根节点，适合聊天类工作负载。你可以选择托管在自己 Lemonade 服务器上的模型，并用常见的采样和解码选项来控制生成行为。

在本页中，你可以找到节点参数列表，以及用来微调生成的可用选项。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/lemonade.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

### Model（模型）

负责生成补全内容的模型。模型由 Lemonade 服务器加载和管理。该参数为必填。选择你的 Lemonade 服务器上提供的模型名称（例如 `gpt-4` 这样的模型别名，或 Lemonade 暴露出来的任意自定义模型名）。

模型由 Lemonade 服务器提供；如果你没看到预期的模型，请检查你的 Lemonade 服务器配置和凭据。

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

用逗号分隔的序列列表，模型遇到这些序列就会停止生成。用这个选项可以为响应定义明确的终止字符串。

| 属性（Property） | 值（Value） |
|----------|-------|
| 类型（Type） | string |
| 是否必填（Required） | no |
| 默认值（Default） | "" |

## 模板与示例

[浏览 Lemonade Chat Model 节点集成模板](https://n8n.io/integrations/lemonade-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [Lemonade Server 的文档](https://lemonade-server.ai/docs/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
