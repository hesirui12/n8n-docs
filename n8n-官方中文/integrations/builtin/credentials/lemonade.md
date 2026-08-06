---
title: Lemonade 凭证
description: >-
  Lemonade 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Lemonade 的身份。
contentType:
  - integration
  - reference
nodeTitle: Lemonade credentials
originalFilePath: integrations/builtin/credentials/lemonade.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/lemonade'
url: 'https://docs.n8n.io/integrations/builtin/credentials/lemonade'
layout:
  description:
    visible: false
---
# Lemonade 凭证

{% hint style="info" %}
**大白话**：这个 Lemonade 不是保险公司的那个，而是跑在你自己电脑/服务器上的「本地 AI 推理服务器」（跑开源大模型用的，本地跑更省钱、数据不出门）。n8n 连它只要填 **Base URL（服务器地址）**，默认装在本机就是 `http://localhost:8000/api/v1`。如果你用 Docker 跑 n8n，就要填 `http://host.docker.internal:8000/api/v1`。API key 一般不用填。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Lemonade Chat Model（聊天模型）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatlemonade.md)
* [Lemonade Model（模型）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmlemonade.md)
* [Embeddings Lemonade（向量嵌入）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingslemonade.md)

## 准备工作

Lemonade 在本地运行 AI 推理。这些节点直接连接运行在你机器或网络上的 Lemonade 服务器进程。在 n8n 里创建凭证之前，请先[安装并运行 Lemonade 服务器](https://lemonade-server.ai/install_options.html)。

## 支持的验证方式

- Lemonade server connection（Lemonade 服务器连接）

## 相关资源

关于该服务的更多信息，请参考 [Lemonade 的文档](https://lemonade-server.ai/docs/)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 配置 Lemonade server connection（Lemonade 服务器连接）

要配置这个凭证，你需要准备：

- **Base URL（基础地址）**：你的 Lemonade 服务器地址，包含 API 路径。本地安装的默认值是 `http://localhost:8000/api/v1`。如果你在 Docker 里运行 n8n，请改用 `http://host.docker.internal:8000/api/v1`。如果你的 Lemonade 服务器在远程机器上，把 `localhost` 换成该服务器的地址。
- **API key（API 密钥）**（可选）：Lemonade 服务器认证用的可选 API key。默认安装的 Lemonade 不需要这个。
