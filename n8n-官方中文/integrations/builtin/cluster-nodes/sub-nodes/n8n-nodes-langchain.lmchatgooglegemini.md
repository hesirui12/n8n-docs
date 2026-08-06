---
title: Google Gemini Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 Google Gemini Chat Model 节点。阅读技术文档，把
  Google Gemini Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Google Gemini Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini
layout:
  description:
    visible: false
---

# Google Gemini Chat Model 节点

> **大白话**：这个节点把谷歌 Gemini 系列大模型接进 n8n，给 AI Agent 当"大脑"。Gemini 模型多模态能力强（能看图、看视频、听音频），免费额度也比较大方。配置很简单：填好 Google 凭据，选个模型就能用。注意一点：这个节点用的是谷歌官方 SDK，不支持代理。

使用 Google Gemini Chat Model 节点，将谷歌的 Gemini 对话模型用于会话式 AI Agent。

在本页中，你可以找到 Google Gemini Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/googleai.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Model**（模型）：选择用来生成补全内容的模型。

n8n 会从 Google Gemini API 动态加载模型，你只会看到自己账号可用的模型。

## 节点选项

* **Maximum Number of Tokens**（最大 Token 数）：输入使用的最大 token 数量，用来设置补全内容的长度。
* **Sampling Temperature**（采样温度）：用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。
* **Top K**：输入模型在生成下一个 token 时会考虑的候选 token 数量。
* **Top P**：用这个选项设置补全内容应该使用的概率。用更低的数值可以忽略那些不太可能被选中的选项。
* **Safety Settings**（安全设置）：Gemini 支持可调的安全设置。关于可用的过滤器和级别，请参考谷歌的 [Gemini API 安全设置文档](https://ai.google.dev/docs/safety_setting_gemini)。

## 限制

### 不支持代理

Google Gemini Chat Model 节点使用的是谷歌的 SDK，它不支持代理配置。

如果你需要走代理，变通的办法是：为 Gemini 请求专门搭一个反向代理，然后把 [Google Gemini 凭据](../../credentials/googleai.md)里的 **Host** 参数改成你的代理地址：

![Google Gemini credentials proxy configuration](../../../.gitbook/assets/google-gemini-proxy-config.png)

## 模板与示例

[浏览 Google Gemini Chat Model 节点集成模板](https://n8n.io/integrations/google-gemini-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Google Gemini 文档](https://js.langchain.com/docs/integrations/chat/google_generativeai)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
