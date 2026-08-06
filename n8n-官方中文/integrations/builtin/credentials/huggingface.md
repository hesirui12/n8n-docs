---
title: Hugging Face 凭证
description: >-
  Hugging Face 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Hugging Face 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Hugging Face credentials
originalFilePath: integrations/builtin/credentials/huggingface.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/huggingface'
url: 'https://docs.n8n.io/integrations/builtin/credentials/huggingface'
layout:
  description:
    visible: false
---

# Hugging Face 凭证

{% hint style="info" %}
**大白话**：Hugging Face 是 AI 圈最出名的「模型仓库」网站，上面有海量开源 AI 模型。n8n 想调用它的推理（Inference）接口，只需要一把 **API Key（API 密钥）**——Hugging Face 里管它叫 API token。去账号的 Tokens 页面复制一把（以 `hf_` 开头），填进 n8n 就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Hugging Face Inference（Hugging Face 推理）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmopenhuggingfaceinference.md)
* [Embeddings Hugging Face Inference（Hugging Face 推理嵌入）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingshuggingfaceinference.md)

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Hugging Face 的文档](https://huggingface.co/docs/api-inference/quicktour)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Hugging Face](https://huggingface.co/) 账号，并且：

- 一个 **API Key（API 密钥）**：Hugging Face 把这种 key 叫做 API token（API 令牌）。

获取 API token 的步骤：

1. 打开你的 Hugging Face 个人主页，进入 [**Tokens（令牌）**](https://huggingface.co/settings/tokens) 区域。
2. 复制那里列出的令牌。它应该以 `hf_` 开头。
3. 把这个 API token 填进 n8n 凭证的 **API Key** 里。

更多信息请参考[获取你的 API token](https://huggingface.co/docs/api-inference/quicktour#get-your-api-token)。
