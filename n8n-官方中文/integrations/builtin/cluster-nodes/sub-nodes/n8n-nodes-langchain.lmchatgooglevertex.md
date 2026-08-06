---
title: Google Vertex Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 Google Vertex Chat Model 节点。阅读技术文档，把
  Google Vertex Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Google Vertex Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglevertex.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglevertex
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglevertex
layout:
  description:
    visible: false
---

# Google Vertex Chat Model 节点

> **大白话**：这个节点把谷歌云 Vertex AI（企业级 AI 平台）上的 Gemini 模型接进 n8n，给 AI Agent 当"大脑"。跟普通的 Gemini 节点相比，它走的是谷歌云的企业渠道，适合公司项目：数据隐私、管理、审计都更规范。配置时要填 Google Cloud 的项目 ID 和模型名，模型名一般是 `gemini-1.5-flash-001` 这种带版本号的形式。

使用 Google Vertex AI Chat Model 节点，将谷歌 Vertex AI 的对话模型用于会话式 AI Agent[^1]。

在本页中，你可以找到 Google Vertex AI Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/google/service-account.md)找到该节点的认证信息。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Project ID**（项目 ID）：选择要使用的 Google Cloud 账号中的项目 ID。n8n 会从 Google Cloud 账号动态加载项目，但你也可以手动输入。
* **Model Name**（模型名称）：选择用来生成补全内容的模型名称，例如 `gemini-1.5-flash-001`、`gemini-1.5-pro-001` 等。可用模型列表请参考 [Google 模型文档](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models)。

## 节点选项

* **Maximum Number of Tokens**（最大 Token 数）：输入使用的最大 token 数量，用来设置补全内容的长度。
* **Sampling Temperature**（采样温度）：用这个选项控制采样过程的随机性。温度越高，输出越多样，但幻觉风险也越高。
* **Thinking Budget**（思考预算）：控制思考模型用于推理的 token 数量。设为 `0` 可以关闭自动思考；设为 `-1` 使用动态思考；留空则使用自动模式。
* **Top K**：输入模型在生成下一个 token 时会考虑的候选 token 数量。
* **Top P**：用这个选项设置补全内容应该使用的概率。用更低的数值可以忽略那些不太可能被选中的选项。
* **Safety Settings**（安全设置）：Gemini 支持可调的安全设置。关于可用的过滤器和级别，请参考谷歌的 [Gemini API 安全设置文档](https://ai.google.dev/docs/safety_setting_gemini)。

## 模板与示例

[浏览 Google Vertex Chat Model 节点集成模板](https://n8n.io/integrations/google-vertex-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 Google Vertex AI 文档](https://js.langchain.com/docs/integrations/chat/google_vertex_ai/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

[^1]: AI Agent 是能够响应用户请求、做出决策并替用户完成实际任务的智能系统。它们用大语言模型（LLM）来理解用户输入，并根据手头的信息和资源决定如何最好地处理请求。
