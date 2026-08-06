---
title: AWS Bedrock Chat Model 节点文档
description: >-
  了解如何在 n8n 中使用 AWS Bedrock Chat Model 节点。阅读技术文档，把
  AWS Bedrock Chat Model 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS Bedrock Chat Model 节点文档
originalFilePath: >-
  integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatawsbedrock.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatawsbedrock
url: >-
  https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatawsbedrock
layout:
  description:
    visible: false
---

# AWS Bedrock Chat Model 节点

> **大白话**：这个节点让你在 n8n 里用 AWS Bedrock 平台上的大模型（Claude、Llama、Titan 等），给 AI Agent 当"大脑"。Bedrock 相当于 AWS 的"模型超市"，一个接口用多家模型。它还支持给模型调用加"护栏"（Guardrail，内容安全过滤）和延迟优化，适合已经在用 AWS 的企业。

AWS Bedrock Chat Model 节点允许你使用 AWS Bedrock 平台上的 LLM 模型。

在本页中，你可以找到 AWS Bedrock Chat Model 节点的参数，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此](../../credentials/aws.md)找到该节点的认证信息。

如果你通过[VPC 接口端点（PrivateLink）](https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html)路由 Bedrock 流量，且没有启用私有 DNS，需要在凭据里手动设置 **Bedrock Endpoint**（Bedrock 端点）和 **Bedrock Runtime Endpoint**（Bedrock 运行时端点）这两个自定义端点。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/X6JM1Mgg5iwvZLDpGEB0/" %}

## 节点参数

* **Authentication**（认证方式）：选择认证方法：
	* **AWS (IAM)**：使用 IAM 访问密钥。选择 **AWS** 凭据。
	* **AWS (Assume Role)**：临时扮演（assume）一个 IAM 角色。选择 **AWS (Assume Role)** 凭据。
* **Model**（模型）：选择生成补全内容的模型。

想了解有哪些可用模型，请看 [Amazon Bedrock 模型文档](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html)。

## 节点选项

* **Maximum Number of Tokens**（最大 token 数）：输入使用的最大 token 数，用来限制回复的长度。
* **Sampling Temperature**（采样温度）：控制采样过程的随机性。温度越高，输出越多样，但也更容易产生幻觉。
* **Top P**：设置选择 token 的概率阈值。数值越低，越偏向高概率的 token；数值越高，允许更多样的选择。
* **Max Retries**（最大重试次数）：输入请求失败后的最大重试次数。
* **Timeout**（超时时间）：输入等待请求完成的最大时间（毫秒）。生成长文本时建议调大。设为 `0` 表示不设超时。
* **Additional Model Request Fields**（附加模型请求字段）：按 JSON 格式输入模型家族专属的推理参数，例如 Claude 的 `top_k` 或 Nova 的 `inferenceConfig`。每个模型家族支持哪些参数，请看 [AWS 模型参数文档](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html)。
* **Latency Optimization**（延迟优化）：选择请求使用 **Standard**（标准）还是 **Optimized**（优化）延迟。优化模式可以缩短受支持模型和区域的响应时间。可用范围请看 [AWS 延迟优化推理文档](https://docs.aws.amazon.com/bedrock/latest/userguide/latency-optimized-inference.html)。
* **Guardrail**（护栏）：给请求套用 [Amazon Bedrock 护栏](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)。详见[使用 AWS 护栏](#using-aws-guardrails)。

### 使用 AWS 护栏（Using AWS Guardrails）

护栏让你的组织可以对模型调用强制执行内容与安全策略。护栏必须和模型在同一个 AWS 区域。**Guardrail** 选项包含以下字段：

* **Guardrail Identifier**（护栏标识符）：要套用的护栏 ID 或完整 ARN。
* **Guardrail Version**（护栏版本）：要使用的护栏版本：数字版本字符串（例如 `1`），或 `DRAFT`（使用正在编辑的草稿版本）。默认为 `DRAFT`。
* **Trace**（追踪）：AWS 是否在响应中包含护栏评估的诊断追踪信息：**Disabled**（禁用，默认）、**Enabled**（启用）或 **Enabled (Full)**（完整启用）。注意：启用追踪会让 AWS 在响应中带上护栏评估详情（可能会回显被匹配的输入内容，例如 PII 敏感信息）；n8n 目前不会在 AI 日志里展示这些内容。

当护栏介入时，节点会返回护栏配置的"拦截提示消息"来替代模型输出，并且是当作正常响应返回，而不是报错。n8n 不会暴露底层的停止原因：如果要在下游检测拦截是否发生，可以用你护栏里配置的拦截消息文本来匹配。如果护栏标识符或版本无效，节点会因 AWS 校验错误而失败。护栏对流式和非流式请求都生效。

{% hint style="info" %}
**IAM 权限**

除了调用权限外，凭据还需要护栏资源上的 `bedrock:ApplyGuardrail` 权限。没有这个权限，一旦设置了护栏，请求就会以 `AccessDeniedException`（拒绝访问异常）失败。如果你的组织要求每次调用都必须带护栏，建议在 IAM 的调用权限上强制 `bedrock:GuardrailIdentifier` 条件键，而不是依赖节点上这个可选字段。
{% endhint %}

## 代理限制（Proxy limitations）

该节点不支持 [`NO_PROXY` 环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment)。

## 模板与示例

[浏览 AWS Bedrock Chat Model 节点集成模板](https://n8n.io/integrations/aws-bedrock-chat-model) 或 [搜索所有模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [LangChain 的 AWS Bedrock Chat Model 文档](https://js.langchain.com/docs/integrations/chat/bedrock/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}
