---
title: Qwen Cloud（通义千问）节点文档
contentType:
  - integration
  - reference
nodeTitle: Qwen Cloud（通义千问）节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.alibabacloud.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.alibabacloud
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.alibabacloud
description: >-
  与 Qwen Cloud（阿里云百炼）上提供的模型进行交互。本页说明如何在 n8n 工作流中
  使用该节点来生成文本补全、分析或生成图片，以及从文本生成视频。
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
**大白话**：Qwen Cloud（也就是阿里云「百炼」平台，通义千问的 API 服务）节点，让你在 n8n 里直接调用阿里云的大模型。它主要能干四件事：1）文字对话——让 Qwen 模型生成回答（类似 ChatGPT）；2）看图——用视觉模型分析图片、回答图片相关问题；3）画图——用提示词生成图片；4）生成视频——用文字或图片生成短视频。适合做客服问答、图片审核、内容创作等自动化流程。
{% endhint %}

# Qwen Cloud（通义千问）

Qwen Cloud 节点让你在 n8n 中调用 Qwen Cloud 上提供的模型。你可以用它来生成补全文本、分析或创建图片，以及从文本或图片生成短视频。

{% hint style="info" %}
**凭证（Credentials）**

关于此节点的认证信息，请参考[这里](../credentials/alibaba.md)。
{% endhint %}

## 资源与操作

* **Text（文本）**：给模型发消息，生成文本补全和类似智能体的回答。
* **Image（图片）**：用视觉语言模型分析图片，或根据提示词生成图片。
* **Video（视频）**：根据文本或一张/多张图片生成短视频。

### 给模型发消息

用 Qwen 模型生成一次补全回答。

**参数（Parameters）**

* **Model**（类型：options，字段：`modelId`）：用于生成的模型（例如 Qwen3.5 Flash、Qwen3 Max）。
* **Messages**（类型：fixedCollection，字段：`messages`）：构成对话的一条或多条消息。
  * 消息的值：
    * **Content**（类型：string，字段：`content`）：消息的内容。
    * **Role**（类型：options，字段：`role`）：消息发送者的角色（User 用户或 Assistant 助手）。
* **Simplify Output**（类型：boolean，字段：`simplify`）：返回简化版的响应，而不是完整的原始 API 输出。

**选项（Options）**

* **Enable Search**（类型：boolean，字段：`enableSearch`）：开启联网搜索，获取最新信息。
* **Max Tokens**（类型：number，字段：`maxTokens`）：要生成的最大 token 数量。
* **Max Tools Iterations**（类型：number，字段：`maxToolsIterations`）：停止前最多允许的工具调用迭代次数。设为 0 表示不限制。
* **Repetition Penalty**（类型：number，字段：`repetitionPenalty`）：对重复 token 的惩罚值。值越大越不容易重复。
* **Seed**（类型：number，字段：`seed`）：随机种子，用于生成可复现的输出。
* **Stop Sequences**（类型：string，字段：`stop`）：逗号分隔的停止序列列表，模型生成到这些内容时就会停止。
* **System Message**（类型：string，字段：`system`）：给模型的系统指令。
* **Temperature**（类型：number，字段：`temperature`）：控制随机性。值越低越确定。
* **Top K**（类型：number，字段：`topK`）：把采样范围限制在前 K 个 token。
* **Top P**（类型：number，字段：`topP`）：核采样（nucleus sampling）参数。

### 分析图片

输入图片，并就图片内容提问视觉语言模型。

**参数（Parameters）**

* **Model**（类型：options，字段：`modelId`）：要使用的视觉语言模型（例如 Qwen-VL Flash）。
* **Input Type**（类型：options，字段：`inputType`）：提供图片的方式（URL 或二进制数据）。
* **Image URL**（类型：string，字段：`imageUrl`）：要分析的图片的 URL（使用 URL 输入时必填）。
* **Input Data Field Name**（类型：string，字段：`binaryPropertyName`）：使用二进制输入时，读取图片的二进制字段名。
* **Question**（类型：string，字段：`question`）：关于图片的问题或指令。
* **Simplify Output**（类型：boolean，字段：`simplify`）：返回简化版的响应。

**选项（Options）**

* **Temperature**（类型：number，字段：`temperature`）：控制视觉模型的随机性。
* **Max Tokens**（类型：number，字段：`maxTokens`）：视觉模型输出的最大 token 数。

### 生成图片

根据文本提示词创建一张图片。

**参数（Parameters）**

* **Model**（类型：options，字段：`modelId`）：要使用的图片生成模型（例如 Z-Image Turbo）。
* **Prompt**（类型：string，字段：`prompt`）：描述要生成的图片的文本提示词。
* **Download Image**（类型：boolean，字段：`downloadImage`）：设为 true 时，把生成的图片下载为二进制数据；否则只返回 URL。

**选项（Options）**

* **Size**（类型：options，字段：`size`）：生成图片的尺寸（例如 1024_1024、1664_928）。
* **Prompt Extend**（类型：boolean，字段：`promptExtend`）：自动扩展和优化提示词。

### 根据文本生成视频

根据文本提示词生成一段短视频。

**参数（Parameters）**

* **Model**（类型：options，字段：`modelId`）：要使用的文生视频模型（例如 Wan 2.6 Text-to-Video）。
* **Prompt**（类型：string，字段：`prompt`）：用于生成视频的文本提示词。
* **Resolution**（类型：options，字段：`resolution`）：分辨率档位（720P 或 1080P）。
* **Duration (Seconds)**（类型：number，字段：`duration`）：生成视频的时长（秒），范围 2–15。
* **Shot Type**（类型：options，字段：`shotType`）：Single（单镜头）或 Multi（多镜头叙事）。
* **Download Video**（类型：boolean，字段：`downloadVideo`）：设为 true 时，把生成的视频下载为二进制数据；否则只返回 URL。
* **Simplify Output**（类型：boolean，字段：`simplify`）：返回简化版的响应。

**选项（Options）**

* **Prompt Extend**（类型：boolean，字段：`promptExtend`）：自动扩展和优化提示词。
* **Audio**（类型：boolean，字段：`audio`）：是否同时为视频生成音频。
* **Audio Input Type**（类型：options，字段：`audioInputType`）：当 **Audio** 选项开启时必须指定。它定义如何提供音频：通过音频 URL 或二进制文件。
* **Audio URL**（类型：string，字段：`audioUrl`）：当 **Audio Input Type** 设为 URL 时必须指定。定义要使用的音频文件的 URL。
* **Audio Data Field Name**（类型：string，字段：`audioBinaryPropertyName`）：当 **Audio Input Type** 设为 **Binary File** 时必须指定。定义音频输入的二进制字段名。

### 根据图片生成视频

使用 Wan 模型，根据一张或多张图片生成视频。

**参数（Parameters）**

* **Model**（类型：options，字段：`modelId`）：要使用的图生视频模型（例如 Wan 2.6 Image-to-Video Flash）。
* **Input Type**（类型：options，字段：`inputType`）：定义如何提供图片：通过图片 URL 或二进制文件。
* **Image URL**（类型：string，字段：`imgUrl`）：用于生成视频的首帧图片的 URL。
* **Input Data Field Name**（类型：string，字段：`binaryPropertyName`）：使用二进制输入时，读取图片的二进制字段名。
* **Prompt**（类型：string，字段：`prompt`）：可选，描述期望的内容和画面特征的文本。
* **Resolution**（类型：options，字段：`resolution`）：分辨率档位（720P 或 1080P）。
* **Duration (Seconds)**（类型：number，字段：`duration`）：时长（秒），范围 2–15。
* **Shot Type**（类型：options，字段：`shotType`）：单镜头或多镜头叙事。
* **Download Video**（类型：boolean，字段：`downloadVideo`）：设为 true 时，把生成的视频下载为二进制数据；否则只返回 URL。
* **Simplify Output**（类型：boolean，字段：`simplify`）：返回简化版的响应。

**选项（Options）**

* **Prompt Extend**（类型：boolean，字段：`promptExtend`）：自动扩展和优化提示词。
* **Audio**（类型：boolean，字段：`audio`）：是否同时为视频生成音频。
* **Audio Input Type**（类型：options，字段：`audioInputType`）：定义如何提供音频：通过音频 URL 或二进制文件。
* **Audio URL**（类型：string，字段：`audioUrl`）：当 **Audio Input Type** 设为 URL 时，要使用的音频文件的 URL。
* **Audio Data Field Name**（类型：string，字段：`audioBinaryPropertyName`）：当 **Audio Input Type** 设为二进制数据时，音频输入的二进制字段名。

## 模板与示例

[浏览 Qwen Cloud 节点的官方集成模板](https://n8n.io/integrations/alibaba-cloud-model-studio)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于可用的模型和 API 行为，请参考 [Qwen Cloud 文档](https://docs.qwencloud.com/)。
