---
title: 压缩（Compression）
description: >-
  n8n 工作流自动化平台中「压缩」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: 压缩
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.compression.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.compression'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.compression'
layout:
  description:
    visible: false
---

# 压缩（Compression）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：压缩（zip）就是把文件变小、打包，方便传输和存储；解压就是把压缩包还原。Compression 节点负责做这两件事。常见场景：① 把工作流生成的多个报表文件打包成一个 zip 发给别人；② 收到别人发来的压缩包，先解压成原始文件再处理。
{% endhint %}

使用「压缩」（Compression）节点来压缩和解压文件。支持 Zip、Gzip、Tar 和 Tar.gz 格式。

{% hint style="info" %}
**小白提示（四种格式的区别）**：
- **Zip**：最常用的压缩格式，Windows、Mac、手机都能直接打开。
- **Gzip（.gz）**：一般只压缩单个文件，常用于网页传输、服务器日志。
- **Tar**：只把多个文件「打包」成一个文件，不压缩体积，常用于 Linux 系统。
- **Tar.gz（.tgz）**：先打包再压缩，是「Tar + Gzip」的组合，Linux 服务器上的常见格式。
{% endhint %}

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

节点参数取决于你选择的**操作（Operation）**。可选择：

* **压缩（Compress）**：从输入数据创建一个压缩文件。
* **解压（Decompress）**：解压一个已有的压缩文件。

请参阅下面的小节，了解每种**操作**专属的参数。

### 压缩（Compress）

- **Input Binary Field(s)（输入二进制字段）**：输入输入数据中包含你想要压缩的二进制文件的字段名称。如果要压缩多个文件，使用逗号分隔的列表。
- **Output Format（输出格式）**：选择压缩输出的格式：**Zip**、**Gzip**、**Tar** 或 **Tar (Gzip)**。
- **File Name（文件名）**：输入节点创建的压缩文件的名称。
- **Put Output File in Field（把输出文件放到哪个字段）**：输入输出数据中用来存放该文件的字段名称。

{% hint style="info" %}
**小白提示（输入多个文件）**：如果上游节点输出了多个二进制文件，而且你想把它们一起压进同一个压缩包，就在 **Input Binary Field(s)** 里用逗号分隔字段名，例如 `data,image`。
{% endhint %}

### 解压（Decompress）

「解压」（Decompress）操作会根据文件扩展名自动识别压缩包格式，支持以下格式：

- `.zip`
- `.gz` 和 `.gzip`
- `.tar`
- `.tar.gz` 和 `.tgz`

当你解压 `.tar.gz` 或 `.tgz` 压缩包时，节点会一步到位地提取出所有成员文件。你不需要先单独解压 gzip 层。

- **Input Binary Field(s)（输入二进制字段）**：输入输入数据中包含你想要解压的二进制文件的字段名称。如果要解压多个文件，使用逗号分隔的列表。
- **Output Prefix（输出前缀）**：输入一个添加到输出文件名前面的前缀。节点使用这个前缀加上递增的序号，来命名每一个提取出来的文件。

{% hint style="info" %}
**大白话（Output Prefix 是干什么的）**：一个压缩包里可能有很多文件，解压后每个文件都要有名字。节点会按「你填的前缀 + 数字」来命名，比如填 `extracted_`，文件就会叫 `extracted_1`、`extracted_2`……这样方便区分。
{% endhint %}

{% hint style="warning" %}
#### 不支持的格式（Unsupported formats）

如果你传入的文件扩展名不受支持，节点会抛出错误，而不是静默地产生空输出。支持的格式是 `zip`、`gzip`、`tar`、`tar.gz` 和 `tgz`。

{% hint style="info" %}
**大白话（为什么报错反而更好）**：如果遇到不认识的格式节点直接报错，你能立刻发现问题；如果它悄悄输出一个空文件，你可能会在后面的步骤里排查半天。所以看到这个报错，先去确认文件扩展名对不对。
{% endhint %}
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 n8n-nodes-base.compression 集成模板](https://n8n.io/integrations/compression) 或[搜索所有模板](https://n8n.io/workflows/)
