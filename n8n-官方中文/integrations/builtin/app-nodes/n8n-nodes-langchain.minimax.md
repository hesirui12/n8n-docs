---
title: MiniMax 节点文档
contentType:
  - integration
  - reference
nodeTitle: MiniMax 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.minimax.md
originalUrl: https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.minimax
url: https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.minimax
description: >-
  MiniMax 节点让你在 n8n 中与 MiniMax AI 模型交互。本
  文档说明如何把 MiniMax 集成到你的 n8n 工作流中，
  用于生成图片、从文本合成语音、生成视频等。
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

{% hint style="info" %}
**大白话**：MiniMax 是一家中国 AI 公司，提供多种模型能力。这个节点让你在 n8n 里调用它们：1）文字对话——和 MiniMax 的语言模型聊天；2）语音合成——把文字转成真人感语音（还能调音色、语速、情绪、音调）；3）生成图片——用提示词画图；4）生成视频——用文字或首帧图片生成短视频（海螺 Hailuo 系列），还能保持人脸一致、指定最后一帧。适合做语音播报、内容创作、短视频生成等流程。
{% endhint %}

# MiniMax

MiniMax 节点把 n8n 工作流连接到 MiniMax AI 模型。你可以用它根据文本提示词生成图片、合成语音、从文本或图片创建视频，以及向 MiniMax 语言模型发送消息。

{% hint style="info" %}
**凭证（Credentials）**

关于此节点的认证信息，请参考[这里](../credentials/minimax.md)。
{% endhint %}

## 资源与操作

* **Audio（音频）**：使用 MiniMax 语音合成模型把文本转成语音。
* **Image（图片）**：根据文本提示词生成图片。
* **Text（文本）**：向 MiniMax 语言模型发送消息并接收回复。
* **Video（视频）**：根据文本提示词或首帧图片生成视频。

### 文字转语音

使用 MiniMax 语音合成模型把文本转成语音。

**参数（Parameters）**

* **Model**（类型：options，字段：`modelId`）：要使用的语音合成模型。默认值：`speech-2.8-hd`
* **Text**（类型：string，字段：`text`）：要转成语音的文本。最多 10,000 个字符。必填。
* **Voice ID**（类型：string，字段：`voiceId`）：合成时使用的音色。可以在 [MiniMax 文档](https://platform.minimax.io/docs/faq/system-voice-id)中浏览可用音色。默认值：`English_Graceful_Lady`。必填。
* **Download Audio**（类型：boolean，字段：`downloadAudio`）：是否把生成的音频下载为二进制数据。关闭时，节点只返回音频 URL。默认值：`true`

**选项（Options）**

* **Audio Format**（类型：options，字段：`audioFormat`）：输出音频格式。选项：MP3、PCM、FLAC、WAV。WAV 只在非流式模式下支持。默认值：`mp3`
* **Emotion**（类型：options，字段：`emotion`）：应用于合成语音的情绪。模型会自动选择最自然的情绪。默认值：`calm`
* **Language Boost**（类型：options，字段：`languageBoost`）：增强对特定语言的识别准确度。默认值：`auto`
* **Pitch**（类型：number，字段：`pitch`）：语音的音调调整，范围 –12 到 12。`0` 保持原始音调。默认值：`0`
* **Speed**（类型：number，字段：`speed`）：语速，范围 0.5 到 2。值越大语速越快。默认值：`1`
* **Volume**（类型：number，字段：`volume`）：音量，范围 0.1 到 10。值越大声音越响。默认值：`1`

### 生成图片

使用 MiniMax 图片生成模型，根据文本提示词创建图片。

**参数（Parameters）**

* **Model**（类型：options，字段：`modelId`）：要使用的图片生成模型。默认值：`image-01`
* **Prompt**（类型：string，字段：`prompt`）：要生成的图片的文字描述。最多 1500 个字符。必填。
* **Aspect Ratio**（类型：options，字段：`aspectRatio`）：生成图片的宽高比。选项包括 1:1、16:9、9:16、4:3、3:4、3:2、2:3 和 21:9。默认值：`1:1`
* **Number of Images**（类型：number，字段：`numberOfImages`）：每次请求生成的图片数量，1 到 9 张。默认值：`1`
* **Download Image**（类型：boolean，字段：`downloadImage`）：是否把生成的图片下载为二进制数据。关闭时，节点只返回图片 URL。默认值：`true`

**选项（Options）**

* **Prompt Optimizer**（类型：boolean，字段：`promptOptimizer`）：是否自动优化提示词以获得更好效果。默认值：`false`
* **Seed**（类型：number，字段：`seed`）：随机种子，用于生成可复现的输出。使用相同种子和相同参数会生成相同的图片。默认值：`0`

### 给模型发消息

向 MiniMax 语言模型发送一条或多条消息，并接收它的回复。

**参数（Parameters）**

* **Model**（类型：options，字段：`modelId`）：要使用的语言模型。默认值：`MiniMax-M2.7`
* **Messages**（类型：fixedCollection，字段：`messages`）：构成对话的一条或多条消息。每条消息包含：
  * **Prompt**（类型：string，字段：`content`）：消息的文本内容。
  * **Role**（类型：options，字段：`role`）：消息发送者的角色。用 `user` 发消息并接收回复，或用 `assistant` 设定模型的语气或人设。
* **Simplify Output**（类型：boolean，字段：`simplify`）：启用时，节点返回简化版的响应，而不是完整的原始 API 输出。默认值：`true`

**选项（Options）**

* **Hide Thinking**（类型：boolean，字段：`hideThinking`）：从响应中去掉思维链推理过程，只返回最终答案。默认值：`true`
* **Maximum Number of Tokens**（类型：number，字段：`maxTokens`）：要生成的最大 token 数量。默认值：`1024`
* **Max Tool Calls Iterations**（类型：number，字段：`maxToolsIterations`）：模型在停止前最多运行的工具迭代轮数。一轮迭代可包含多次工具调用。设为 `0` 表示不限制。默认值：`15`
* **Output Randomness (Temperature)**（类型：number，字段：`temperature`）：控制输出的随机性。值越低，输出越确定、越容易重复。范围：0–1。默认值：`0.7`
* **Output Randomness (Top P)**（类型：number，字段：`topP`）：采样时考虑的最大累计概率。范围：0–1。默认值：`0.95`
* **System Message**（类型：string，字段：`system`）：指导模型行为和语气的系统级指令。

### 根据文本生成视频

使用 MiniMax 视频生成模型，根据文本提示词生成视频。

**参数（Parameters）**

* **Model**（类型：options，字段：`modelId`）：要使用的视频生成模型。默认值：`MiniMax-Hailuo-2.3`
* **Prompt**（类型：string，字段：`prompt`）：视频的文字描述。最多 2000 个字符。你可以用 `[command]` 语法控制镜头运动，例如 `[Push in]`（推近）或 `[Pan left]`（左摇）。必填。
* **Duration (Seconds)**（类型：options，字段：`duration`）：生成视频的时长。选项：6 秒或 10 秒。默认值：`6`
* **Resolution**（类型：options，字段：`resolution`）：生成视频的分辨率。可用选项取决于模型。选项：720P、768P、1080P。默认值：`768P`
* **Download Video**（类型：boolean，字段：`downloadVideo`）：是否把生成的视频下载为二进制数据。关闭时，节点只返回视频 URL。默认值：`true`

**选项（Options）**

* **Prompt Optimizer**（类型：boolean，字段：`promptOptimizer`）：是否自动优化提示词以获得更好效果。默认值：`true`

### 根据图片生成视频

用一张图片作为首帧来生成视频。

**参数（Parameters）**

* **Model**（类型：options，字段：`modelId`）：要使用的视频生成模型。默认值：`MiniMax-Hailuo-2.3`
* **Image Input Type**（类型：options，字段：`imageInputType`）：如何提供首帧图片。选项：URL 或 Binary File。默认值：`url`
* **Image URL**（类型：string，字段：`imageUrl`）：首帧图片的公开 URL。支持 JPG、JPEG、PNG 和 WebP 文件，最大 20MB。当 **Image Input Type** 为 `URL` 时显示。必填。
* **Input Data Field Name**（类型：string，字段：`binaryPropertyName`）：包含二进制图片数据的输入字段名。当 **Image Input Type** 为 `Binary File` 时显示。默认值：`data`。必填。
* **Prompt**（类型：string，字段：`prompt`）：可选，视频的文字描述。最多 2000 个字符。你可以用 `[command]` 语法控制镜头运动，例如 `[Zoom in]`（推进）。
* **Duration (Seconds)**（类型：options，字段：`duration`）：生成视频的时长。选项：6 秒或 10 秒。默认值：`6`
* **Resolution**（类型：options，字段：`resolution`）：生成视频的分辨率。可用选项取决于模型。选项：512P、720P、768P、1080P。默认值：`768P`
* **Download Video**（类型：boolean，字段：`downloadVideo`）：是否把生成的视频下载为二进制数据。关闭时，节点只返回视频 URL。默认值：`true`

**选项（Options）**

* **Prompt Optimizer**（类型：boolean，字段：`promptOptimizer`）：是否自动优化提示词。默认值：`true`
* **Last Frame Image Input Type**（类型：options，字段：`lastFrameInputType`）：提供一张最后一帧图片，生成「首帧+末帧」视频。只有 MiniMax-Hailuo-2.3 和 MiniMax-Hailuo-02 支持此选项。默认值：`none`
  * **Last Frame Image URL**（类型：string，字段：`lastFrameImageUrl`）：最后一帧图片的公开 URL。当 **Last Frame Image Input Type** 为 `URL` 时显示。
  * **Last Frame Data Field Name**（类型：string，字段：`lastFrameBinaryPropertyName`）：包含最后一帧图片的二进制字段名。当 **Last Frame Image Input Type** 为 `Binary File` 时显示。默认值：`lastFrame`
* **Subject Reference Input Type**（类型：options，字段：`subjectReferenceInputType`）：提供一张人脸照片，保持生成视频中人脸的一致性。只有 MiniMax-Hailuo-2.3 支持此选项。默认值：`none`
  * **Subject Reference Image URL**（类型：string，字段：`subjectReferenceImageUrl`）：参考人脸图片的公开 URL。当 **Subject Reference Input Type** 为 `URL` 时显示。
  * **Subject Reference Data Field Name**（类型：string，字段：`subjectReferenceBinaryPropertyName`）：包含参考人脸图片的二进制字段名。当 **Subject Reference Input Type** 为 `Binary File` 时显示。默认值：`subjectReference`

## 模板与示例

[浏览 MiniMax 节点的官方集成模板](https://n8n.io/integrations/minimax)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [MiniMax 文档](https://platform.minimax.io/docs)。
