---
title: 自托管 AI 入门套件（Self-hosted AI Starter Kit）
description: >-
  使用 n8n 精选的自托管 AI 入门套件，快速获取一批 AI 组件，开始构建 AI 工作流。
contentType: howto
nodeTitle: 用 AI 入门套件部署（Deploy with the AI starter kit）
originalFilePath: hosting/starter-kits/ai-starter-kit.md
originalUrl: 'https://docs.n8n.io/hosting/starter-kits/ai-starter-kit'
url: 'https://docs.n8n.io/deploy/host-n8n/deploy-with-the-ai-starter-kit'
layout:
  description:
    visible: false
---

# 自托管 AI 入门套件（Self-hosted AI Starter Kit）

自托管 AI 入门套件是一个开源的 Docker Compose 模板，可以帮你一键搭建一个功能完整的"本地 AI + 低代码"开发环境。

它由 [n8n](https://github.com/n8n-io) 精心挑选组件组成：把自托管的 n8n 平台与一系列兼容的 AI 产品和组件组合在一起，让你能快速开始构建自托管的 AI 工作流。

## 包含哪些组件（What's included）

✅ [**自托管 n8n**](README.md)：低代码平台，拥有 400 多个集成和先进的 AI 组件。

✅ [**Ollama**](https://ollama.com/)：跨平台的 LLM 平台，用于安装和运行最新的本地大语言模型。

✅ [**Qdrant**](https://qdrant.tech/)：开源的高性能向量数据库，提供完善的 API。

✅ [**PostgreSQL**](https://www.postgresql.org/)：数据工程领域的"主力军"，能安全地处理大量数据。

## 你能用它构建什么（What you can build）

⭐️ [AI 智能体（AI Agents）](#user-content-fn-1)[^1]，能帮你预约日程

⭐️ 在不泄露数据的前提下，总结公司的 PDF 文档

⭐️ 更智能的 Slack 机器人，用于公司沟通和 IT 运维

⭐️ 私密、低成本的金融文档分析

## 获取套件（Get the kit）

前往 [GitHub 仓库](https://github.com/n8n-io/self-hosted-ai-starter-kit) 克隆该仓库，然后开始使用！

{% hint style="info" %}
**仅供测试使用（For testing only）**

n8n 设计这个套件的目的是帮助你快速上手自托管 AI 工作流。虽然它没有针对生产环境做完全优化，但它组合的都是稳健的组件，非常适合概念验证（proof-of-concept）类项目。你可以按需定制它。在用于生产环境之前，请务必做好安全加固。
{% endhint %}

{% hint style="info" %}
**小白提示**：这套件相当于一个"开箱即用"的 AI 全家桶——n8n 负责编排流程，Ollama 负责在你自己的电脑上跑大模型（不用花钱调 API，数据也不出本机），Qdrant 负责存向量（给 AI 提供"记忆"），PostgreSQL 负责存业务数据。克隆下来后运行 `docker compose up -d` 就能全部启动。
{% endhint %}

[^1]: AI 智能体（AI agents）是能够响应用户请求、做出决策并帮助用户完成实际任务的人工智能系统。它们使用大语言模型（LLM）来解释用户输入，并根据手头掌握的信息和资源，决定如何最好地处理请求。
