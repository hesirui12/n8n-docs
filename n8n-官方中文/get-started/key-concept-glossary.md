---
description: n8n 概念术语表（小白友好中文版）
layout:
  width: default
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# 关键概念术语表 / Key concept glossary

> 本篇为官方《Key concept glossary》的中文小白版。遇到看不懂的英文术语，随时回来查。

## 工作流与节点 / Workflow & Nodes

#### 工作流 / Workflow <a href="#workflow" id="workflow"></a>

工作流（Workflow）是一组节点的集合，用于自动化某个流程。当触发条件发生时，工作流开始执行，并按顺序运行以完成复杂任务。

> 💡 **大白话**：工作流就是一张「自动化流程图」。

#### 节点 / Node <a href="#node" id="node"></a>

节点（Node）是你组合成工作流的独立组件。节点决定工作流何时运行、允许你获取/发送/处理数据、可以定义流程控制逻辑，并与外部服务连接。

> 💡 **大白话**：节点就是「积木块」，每个积木做一件小事。

#### 触发器节点 / Trigger Node <a href="#trigger-node" id="trigger-node"></a>

触发器（Trigger）是一种特殊节点，负责在特定条件下执行工作流。**所有生产环境的工作流至少需要一个触发器**来决定何时运行。

#### 子工作流 / Sub-workflow <a href="#sub-workflow" id="sub-workflow"></a>

子工作流（Sub-workflow）是嵌入其他工作流的工作流。用 **Execute Workflow** 节点调用，用 **Execute Workflow Trigger** 作为子工作流的入口。子工作流的执行不计入套餐的执行次数配额。

#### 凭证 / Credential <a href="#credential" id="credential"></a>

凭证（Credential）存储连接特定应用和服务的认证信息。创建好凭证（用户名密码、API Key、OAuth 密钥等）后，就能用对应节点与该服务交互。

#### 执行 / Execution <a href="#execution" id="execution"></a>

执行（Execution）是工作流的一次运行。有手动执行（Manual，测试用）和生产执行（Production，自动触发）两种模式。

#### 项目 / Project <a href="#project" id="project"></a>

项目（Project）用于组织和共享工作流与凭证，团队成员在项目内按角色协作。

#### 环境 / Environment <a href="#environment" id="environment"></a>

环境（Environment）是同一工作流在不同运行阶段（开发/暂存/生产）的版本，通常用 Git 分支管理。

## 数据 / Data

#### 数据项 / Item <a href="#item" id="item"></a>

数据项（Item）是工作流中数据的基本单位，每个 item 由 `json` 和可选的 `binary`（二进制，如文件）组成。

#### 表达式 / Expression <a href="#expression" id="expression"></a>

表达式（Expression）允许你通过执行 JavaScript 代码动态填充节点参数，用 `{{ }}` 语法引用前面节点的数据。

#### 二进制数据 / Binary data <a href="#binary-data" id="binary-data"></a>

二进制数据（Binary data）指文件类数据（图片、文档、音视频）。n8n 用它来处理非 JSON 内容。

## AI 概念 / AI Concepts

#### AI 智能体 / AI Agent <a href="#ai-agent" id="ai-agent"></a>

智能体（Agent）是能自己做决策、调用工具完成任务的 AI 系统。在 n8n 中，Agent 节点可以用记忆（Memory），Chain 节点不行。

#### AI 链 / AI Chain <a href="#ai-chain" id="ai-chain"></a>

链（Chain）是把模型与输入输出连接起来的固定流程。n8n 中的 Chain 节点**不支持记忆**，需要连续对话请用 Agent。

#### AI 模型 / AI Model (LLM) <a href="#ai-model" id="ai-model"></a>

大语言模型（LLM）是处理文本的 AI 模型。n8n 通过各家的 Chat Model 节点接入（OpenAI、Anthropic、Google 等）。

#### AI 记忆 / AI Memory <a href="#ai-memory" id="ai-memory"></a>

记忆（Memory）让 AI 工具在多次交互间保留消息上下文，实现连续对话。n8n 中 Agent 节点可以用记忆，Chain 不能用。

#### AI 检索增强生成 / RAG <a href="#ai-rag" id="ai-rag"></a>

检索增强生成（Retrieval-Augmented Generation，RAG）是一种让 LLM 从外部来源获取新信息来改进回答的技术。RAG 系统先检索相关文档，把回答「锚定」在最新、领域专属的知识上，减少编造（幻觉）。

#### AI 向量库 / AI Vector Store <a href="#ai-vector-store" id="ai-vector-store"></a>

向量库（Vector Store）存储信息的数学表示（向量）。配合 Embeddings（嵌入）和 Retriever（检索器），可以建立一个 AI 回答问题时可访问的知识库。

#### AI 工具 / AI Tool <a href="#ai-tool" id="ai-tool"></a>

工具（Tool）是 AI 在回答请求时可调用的附加资源，用来查询外部系统或完成特定任务。

#### AI 幻觉 / AI Hallucination <a href="#ai-hallucination" id="ai-hallucination"></a>

幻觉（Hallucination）是 LLM 错误地「感知」出不存在的内容——也就是一本正经地胡说八道。RAG 和检索可以显著减少幻觉。

#### AI 重排序 / AI Reranking <a href="#ai-reranking" id="ai-reranking"></a>

重排序（Reranking）是优化候选文档排序的技术，让 RAG 等应用优先使用最相关的信息。

#### AI 嵌入 / Embeddings <a href="#ai-embeddings" id="ai-embeddings"></a>

嵌入（Embeddings）把文本转换成数学向量表示，用于语义相似度搜索。**注意：插入和查询必须用同一个 Embedding 模型。**

## 其他 / Other

#### API <a href="#api" id="api"></a>

API（应用程序接口）提供对服务数据和功能的编程式访问，是软件与外部系统交互的方式，也是 n8n 节点连接各服务的基础。

#### Fair-code / 公平代码许可 <a href="#fair-code" id="fair-code"></a>

n8n 采用 Sustainable Use License（可持续使用许可）：免费使用，限制的是把 n8n 转售或托管给他人使用。个人和团队自用完全免费。
