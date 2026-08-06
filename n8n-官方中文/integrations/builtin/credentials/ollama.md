---
title: Ollama 凭证
contentType:
  - integration
  - reference
priority: high
nodeTitle: Ollama credentials
originalFilePath: integrations/builtin/credentials/ollama.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/ollama
url: https://docs.n8n.io/integrations/builtin/credentials/ollama
description: >-
  Ollama 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Ollama 的身份。
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

# Ollama 凭证

{% hint style="info" %}
**大白话**：Ollama 是一个让你在自己电脑/服务器上免费跑开源大模型（Llama、Qwen、DeepSeek 等）的工具，数据不出本机、完全免费。n8n 想调用你本地跑的模型，只需要填一个 **Base URL（基础地址）**，默认是 `http://localhost:11434`。两个小坑：一是如果本机连不上，试试把 `localhost` 换成 `127.0.0.1`；二是如果你是通过带认证的代理（比如 Open WebUI）访问 Ollama，需要在 **API Key** 里填上令牌，否则留空。自托管 n8n 时如果 n8n 和 Ollama 跑在不同容器里，要设置 `OLLAMA_ORIGINS` 或 `OLLAMA_HOST` 让它们能互相通信。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Ollama](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmollama/README.md)
* [Chat Ollama](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatollama/README.md)
* [Embeddings Ollama](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsollama.md)

## 准备工作

创建并运行一个 [Ollama](https://ollama.com/) 实例，配一个用户。更多信息请参考 Ollama 的 [Quick Start（快速开始）](https://github.com/ollama/ollama/blob/main/README.md#quickstart)。

## 支持的验证方式

* Instance URL（实例地址）

## 相关资源

关于该服务的更多信息，请参考 [Ollama 官方 API 文档](https://github.com/ollama/ollama/blob/main/docs/api.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mjXhKRIw98UJ5hk9LWBl/" %}

## 使用 instance URL（实例地址）

要配置这个凭证，你需要准备：

* 你的 Ollama 实例的 **Base URL（基础地址）**，或者远程的需要认证的 Ollama 实例地址。
* （可选）如果要连接远程的、需要认证的代理，填 **API Key（API 密钥）**，用于 Bearer token（携带令牌）认证。

**Base URL（基础地址）** 的默认值是 `http://localhost:11434`，但如果你设置了 `OLLAMA_HOST` 环境变量，就填那个值。如果连接本地 n8n 服务器有问题，试试用 `127.0.0.1` 代替 `localhost`。

如果你是通过需要认证的代理服务连接 Ollama（例如 [Open WebUI](https://docs.openwebui.com/getting-started/api-endpoints/#-ollama-api-proxy-support)），必须填 API key。如果不需要认证，这个字段留空。填写后，API key 会作为 Bearer token 放在请求的 `Authorization` 请求头里，发送给 Ollama API。

更多信息请参考 [How do I configure Ollama server?（如何配置 Ollama 服务器？）](https://github.com/ollama/ollama/blob/main/docs/faq.mdx#how-do-i-configure-ollama-server)。

### Ollama 与自托管 n8n

如果你在同一台机器上自托管 n8n 和 Ollama，但两者运行在不同的容器（container）里，可能会遇到连接问题。

针对这种情况，请为 n8n 开放一个特定的端口与 Ollama 通信：设置 `OLLAMA_ORIGINS` 变量，或把 `OLLAMA_HOST` 调整为另一个容器可以访问的地址。

更多信息请参考 Ollama 的 [How can I allow additional web origins to access Ollama?（如何允许额外的 Web 来源访问 Ollama？）](https://docs.ollama.com/faq#how-can-i-allow-additional-web-origins-to-access-ollama)。
