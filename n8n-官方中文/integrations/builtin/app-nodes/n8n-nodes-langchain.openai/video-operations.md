---
title: OpenAI 视频操作
description: >-
  OpenAI 节点中视频操作的文档，适用于 n8n 这个工作流
  自动化平台。包括操作和配置的详细信息，以及
  示例和凭证信息的链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: OpenAI 视频操作
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.openai/video-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/video-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/video-operations
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这一页讲 OpenAI 节点的「视频（Video）」操作——用 Sora 生成视频。目前只有一个操作：Generate Video（生成视频），用文字提示词生成视频片段，支持设置时长（最多 25 秒）、分辨率（宽x高，如 1024x1792）、可选参考图（影响生成风格的参考图，需要以二进制形式传入）、等待超时等。适合做 AI 短视频生成、创意素材生产等流程。
{% endhint %}

# OpenAI 视频操作

使用此操作在 OpenAI 中生成视频。关于 OpenAI 节点本身，请参考 [OpenAI](README.md)。

## 生成视频

使用此操作根据文本提示词生成视频。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Video（视频）**。
- **Operation（操作）**：选择 **Generate Video（生成视频）**。
- **Model（模型）**：选择用于生成视频的模型。目前支持 `sora-2` 和 `sora-2-pro`。
- **Prompt（提示词）**：用于生成视频的提示词。
- **Seconds（秒数）**：视频片段时长（秒），最多 25 秒。
- **Size（尺寸）**：输出分辨率，格式为宽 x 高。1024x1792 和 1792x1024 仅 Sora 2 Pro 支持。

### 选项（Options）

- **Reference（参考图）**：可选的图片参考，用于引导生成。必须以二进制项的形式传入。
- **Wait Timeout（等待超时）**：等待视频生成的秒数。默认值 300。
- **Output Field Name（输出字段名）**：存放二进制文件数据的输出字段名。默认值 `data`。

更多信息请参考 [视频生成 | OpenAI](https://platform.openai.com/docs/guides/video-generation)。
