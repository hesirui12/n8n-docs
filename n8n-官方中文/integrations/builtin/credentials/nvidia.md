---
title: NVIDIA Nemotron 凭证
description: >-
  NVIDIA Nemotron 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  NVIDIA Nemotron 的身份。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: NVIDIA Nemotron credentials
originalFilePath: integrations/builtin/credentials/nvidia.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/nvidia'
url: 'https://docs.n8n.io/integrations/builtin/credentials/nvidia'
layout:
  description:
    visible: false
---

# NVIDIA Nemotron 凭证

{% hint style="info" %}
**大白话**：NVIDIA Nemotron 是英伟达自家的大语言模型。n8n 想调用它，一个凭证可以同时支持两种用法：**云版（Cloud）**——直接调用英伟达官方托管在 build.nvidia.com 上的模型，需要注册账号并生成 **API Key**，Base URL 用默认的 `https://integrate.api.nvidia.com/v1` 就行；**自托管 NIM（Self-hosted NIM）**——把英伟达的 NIM 推理容器部署在你自己服务器上，然后填你自己的地址（比如 `http://localhost:8000/v1`），如果自托管的不要求登录，API Key 留空即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [NVIDIA Nemotron Chat Model](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatnvidia.md)

一个凭证同时覆盖两种部署模式：

- **Cloud（云）**：由 NVIDIA 托管的 Nemotron 模型，位于 [build.nvidia.com](https://build.nvidia.com/)。
- **Self-hosted NIM（自托管 NIM）**：运行在你自己的基础设施上的 [NVIDIA Inference Microservice（NVIDIA 推理微服务）](https://docs.nvidia.com/nim/) 容器。

## 准备工作

云访问：创建一个 [NVIDIA build](https://build.nvidia.com/) 账号。

自托管访问：运行一个暴露了 OpenAI 规范兼容接口的 NIM 容器。搭建指引请参考 [NVIDIA NIM 文档](https://docs.nvidia.com/nim/)。

## 支持的验证方式

- API key（API 密钥，在连接不需要认证的自托管 NIM 时可选）

## 相关资源

关于可用 Nemotron 模型的列表，请参考 NVIDIA 的 [build catalogue（模型目录）](https://build.nvidia.com/models)；关于自托管的指引，请参考 [NIM 文档](https://docs.nvidia.com/nim/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **Base URL（基础地址）**：要调用的 OpenAI 规范兼容接口。build.nvidia.com 云服务使用默认的 `https://integrate.api.nvidia.com/v1`，或者改成你的自托管 NIM 地址（例如 `http://localhost:8000/v1`）。
- 一个 **API Key（API 密钥）**：build.nvidia.com 云服务必需。如果自托管 NIM 不要求认证，留空即可。

为 build.nvidia.com 生成 API key：

1. 登录你的 [NVIDIA build](https://build.nvidia.com/) 账号。
2. 在目录里打开一个 Nemotron 模型，选择 **Get API Key（获取 API 密钥）**。
3. 复制你的密钥，作为 **API Key（API 密钥）** 填到 n8n 里。

连接自托管 NIM：

1. 把 **Base URL（基础地址）** 设置为你的 NIM 接口，包括 `/v1` 路径（例如 `http://localhost:8000/v1`）。
2. 如果你的 NIM 要求认证，把令牌粘贴到 **API Key（API 密钥）** 里。否则，留空即可。
