---
title: OpenAI 图片操作
description: >-
  OpenAI 节点中图片操作的文档，适用于 n8n 这个工作流
  自动化平台。包括操作和配置的详细信息，以及
  示例和凭证信息的链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: OpenAI 图片操作
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-langchain.openai/image-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/image-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.openai/image-operations
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：这一页讲 OpenAI 节点的「图片（Image）」操作，一共三个：1）分析图片——上传图片让模型看图并回答问题（可传 URL 或二进制文件，还能调详细程度 Detail）；2）生成图片——用提示词画图（DALL·E 系列，可选尺寸、风格、质量）；3）编辑图片——上传原图+提示词来修改图片（需要遮罩 mask 指定修改区域，支持 `dall-e-2` 和 `gpt-image-1`）。适合做图片理解、配图生成、图片批量修改等流程。
{% endhint %}

# OpenAI 图片操作

使用这些操作在 OpenAI 中分析或生成图片。关于 OpenAI 节点本身，请参考 [OpenAI](README.md)。

## 分析图片

使用此操作输入图片并回答关于图片的问题。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Image（图片）**。
- **Operation（操作）**：选择 **Analyze Image（分析图片）**。
- **Model（模型）**：选择用于分析图片的模型。
- **Text Input（文本输入）**：提出关于图片的问题。
- **Input Type（输入类型）**：选择输入图片的方式。选项包括：
    - **Image URL(s)（图片 URL）**：输入要分析的图片的 **URL(s)**。多个 URL 用逗号分隔的列表输入。
    - **Binary File(s)（二进制文件）**：在 **Input Data Field Name** 中输入包含图片的二进制属性名。

### 选项（Options）

- **Detail（详细程度）**：指定响应时间与 token 消耗之间的平衡。
- **Length of Description (Max Tokens)（描述长度）**：默认值 300。token 越少，图片描述越短、细节越少。

更多信息请参考 [图片 | OpenAI](https://platform.openai.com/docs/api-reference/images) 文档。

## 生成图片

使用此操作根据文本提示词创建图片。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Image（图片）**。
- **Operation（操作）**：选择 **Generate an Image（生成图片）**。
- **Model（模型）**：选择用于生成图片的模型。
- **Prompt（提示词）**：输入期望图片的文字描述。`dall-e-2` 最多 1000 个字符，`dall-e-3` 最多 4000 个字符。

### 选项（Options）

- **Quality（质量）**：生成图片的质量。**HD** 生成细节更精细、整图更一致的图片。此选项只支持 `dall-e-3`。否则选择 **Standard**。
- **Resolution（分辨率）**：选择生成图片的分辨率。`dall-e-2` 选择 **1024x1024**。`dall-e-3` 模型选择 **1024x1024**、**1792x1024** 或 **1024x1792** 之一。
- **Style（风格）**：选择生成图片的风格。此选项只支持 `dall-e-3`。
    - **Natural（自然）**：生成更自然的图片。
    - **Vivid（生动）**：生成超现实、戏剧化的图片。
- **Respond with image URL(s)（返回图片 URL）**：是否返回图片 URL 而不是二进制文件。
- **Put Output in Field（输出字段）**：默认值 `data`。输入存放二进制文件数据的输出字段名。仅在 **Respond with image URL(s)** 关闭时可用。

更多信息请参考 [创建图片 | OpenAI](https://platform.openai.com/docs/api-reference/images/create) 文档。

## 编辑图片

使用此操作根据文本提示词编辑图片。

填写以下参数：

- **Credential to connect with（连接凭证）**：创建或选择已有的 [OpenAI 凭证](../../credentials/openai.md)。
- **Resource（资源）**：选择 **Image（图片）**。
- **Operation（操作）**：选择 **Edit Image（编辑图片）**。
- **Model（模型）**：选择用于生成图片的模型。支持 `dall-e-2` 和 `gpt-image-1`。
- **Prompt（提示词）**：输入对输入图片进行期望修改的文字描述。
- **Image(s)（图片）**：添加一个或多个二进制字段，随提示词一起提交图片。每张图片应为小于 50MB 的 png、webp 或 jpg 文件。最多可以提交 16 张图片。
- **Number of Images（图片数量）**：要生成的图片数量。必须在 1 到 10 之间。
- **Size（尺寸）**：生成图片的尺寸和大小（以像素为单位）。
- **Quality（质量）**：要生成的图片的质量（auto、low、medium、high、standard）。只支持 `gpt-image-1`。
- **Output Format（输出格式）**：生成图片的返回格式（png、webp 或 jpg）。只支持 `gpt-image-1`。
- **Output Compression（输出压缩）**：生成图片的压缩级别（0-100%）。只支持 `gpt-image-1` 且输出格式为 webp 或 jpeg 时可用。

### 选项（Options）

- **Background（背景）**：允许为生成的图片设置透明背景。只支持 `gpt-image-1`。
- **Input Fidelity（输入保真度）**：控制模型在匹配输入图片的风格和特征上投入多少努力。只支持 `gpt-image-1`。
- **Image Mask（图片遮罩）**：包含图片的二进制属性名。第二张图片的完全透明区域（例如 alpha 为零的地方）表示图片应该被编辑的位置。如果提供了多张图片，遮罩会应用于第一张图片。必须是有效的 PNG 文件，小于 4MB，且与图片尺寸相同。
- **User（用户）**：代表你的终端用户的唯一标识符，可以帮助 OpenAI 监控和检测滥用。

## 常见问题

关于常见错误或问题及建议的解决步骤，请参考[常见问题](common-issues.md)。
