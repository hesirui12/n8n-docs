---
title: OpenAI 音频操作
description: >-
  OpenAI 节点中音频操作的文档，适用于 n8n 这个工作流
  自动化平台。包括操作和配置的详细信息，以及
  示例和凭证信息的链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: OpenAI 音频操作
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.openai/audio-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/audio-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/audio-operations
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这一页讲 OpenAI 节点的「音频」操作，一共三个：1）生成音频——把文字变成语音（TTS 语音合成，可选音色、语速、格式）；2）转写录音——把音频（录音、会议等）转成文字（语音识别）；3）翻译录音——把音频里的内容翻译成英文（注意是翻成英文，不是中文）。文件大小上限 25MB，默认用 `whisper-1` 模型。适合做语音播报、会议纪要、音频字幕等流程。
{% endhint %}

# OpenAI 音频操作

使用这些操作在 OpenAI 中生成音频，或转写、翻译录音。关于 OpenAI 节点本身，请参考 [OpenAI](README.md)。

## 生成音频

使用此操作根据文本提示词创建音频。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Audio（音频）**。
- **Operation（操作）**：选择 **Generate Audio（生成音频）**。
- **Model（模型）**：选择用于生成音频的模型。更多信息请参考 [TTS | OpenAI](https://platform.openai.com/docs/models/tts)。
    - **TTS-1**：优先考虑速度时使用。
    - **TTS-1-HD**：优先考虑质量时使用。
- **Text Input（文本输入）**：输入要生成音频的文本。最长 4096 个字符。
- **Voice（音色）**：选择生成音频时使用的音色。可以在 [文字转语音指南 | OpenAI](https://platform.openai.com/docs/guides/text-to-speech/quickstart) 中试听音色预览。

### 选项（Options）

- **Response Format（响应格式）**：选择音频响应的格式。可选 **MP3**（默认）、**OPUS**、**AAC**、**FLAC**、**WAV** 和 **PCM**。
- **Audio Speed（语速）**：输入生成音频的语速，取值 `0.25` 到 `4.0`。默认值 `1`。
- **Put Output in Field（输出字段）**：默认值 `data`。输入存放二进制文件数据的输出字段名。

更多信息请参考 [创建语音 | OpenAI](https://platform.openai.com/docs/api-reference/audio/createSpeech) 文档。

## 转写录音

使用此操作把音频转成文字。OpenAI API 限制音频文件大小不超过 25 MB。默认使用 `whisper-1` 模型。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Audio（音频）**。
- **Operation（操作）**：选择 **Transcribe a Recording（转写录音）**。
- **Input Data Field Name（输入数据字段名）**：默认值 `data`。输入包含音频文件的二进制属性名，支持以下格式之一：`.flac`、`.mp3`、`.mp4`、`.mpeg`、`.mpga`、`.m4a`、`.ogg`、`.wav` 或 `.webm`。

### 选项（Options）

- **Language of the Audio File（音频文件语言）**：按 [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) 格式输入音频的语言。用这个选项可以提高准确度和速度。
- **Output Randomness (Temperature)（输出随机性）**：默认值 `1.0`。调整响应的随机性。范围在 `0.0`（完全确定）和 `1.0`（最大随机）之间。建议只调整这个或 **Output Randomness (Top P)** 其中一个，不要两个都动。先从中间值（约 0.7）开始，再根据观察到的输出调整。如果回复过于重复或死板，就调高；如果太混乱或跑题，就调低。

更多信息请参考 [创建转写 | OpenAI](https://platform.openai.com/docs/api-reference/audio/createTranscription) 文档。

## 翻译录音

使用此操作把音频翻译成英文。OpenAI API 限制音频文件大小不超过 25 MB。默认使用 `whisper-1` 模型。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Audio（音频）**。
- **Operation（操作）**：选择 **Translate a Recording（翻译录音）**。
- **Input Data Field Name（输入数据字段名）**：默认值 `data`。输入包含音频文件的二进制属性名，支持以下格式之一：`.flac`、`.mp3`、`.mp4`、`.mpeg`、`.mpga`、`.m4a`、`.ogg`、`.wav` 或 `.webm`。

### 选项（Options）

- **Output Randomness (Temperature)（输出随机性）**：默认值 `1.0`。调整响应的随机性。范围在 `0.0`（完全确定）和 `1.0`（最大随机）之间。建议只调整这个或 **Output Randomness (Top P)** 其中一个，不要两个都动。先从中间值（约 0.7）开始，再根据观察到的输出调整。如果回复过于重复或死板，就调高；如果太混乱或跑题，就调低。

更多信息请参考 [创建转写 | OpenAI](https://platform.openai.com/docs/api-reference/audio/createTranscription) 文档。

## 常见问题

关于常见错误或问题及建议的解决步骤，请参考[常见问题](common-issues.md)。
