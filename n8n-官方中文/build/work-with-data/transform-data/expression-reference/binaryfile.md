---
nodeTitle: Binaryfile
originalFilePath: data/expression-reference/binaryfile.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/binaryfile'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/binaryfile
layout:
  description:
    visible: false
---
# BinaryFile 二进制文件 <a href="#binaryfile" id="binaryfile"></a>

{% hint style="info" %}
**大白话**：`binaryFile` 是数据项里挂着的文件对象，能查到它存在哪个目录、文件名、后缀、大小、类型、MIME 类型等基本信息。
{% endhint %}

## `binaryFile`.**`directory`** <a href="#binaryfiledirectory" id="binaryfiledirectory"></a>

**说明：** 文件所在目录的路径。当不同目录里有同名文件时，用它来区分很有用。如果 n8n 配置成把文件存在数据库里，则此值不会设置。

**语法：** `binaryFile`.**`directory`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## `binaryFile`.**`fileExtension`** <a href="#binaryfilefileextension" id="binaryfilefileextension"></a>

**说明：** 文件名附带的后缀（例如 <code>txt</code>）

**语法：** `binaryFile`.**`fileExtension`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## `binaryFile`.**`fileName`** <a href="#binaryfilefilename" id="binaryfilefilename"></a>

**说明：** 文件名（包含扩展名）

**语法：** `binaryFile`.**`fileName`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## `binaryFile`.**`fileSize`** <a href="#binaryfilefilesize" id="binaryfilefilesize"></a>

**说明：** 表示文件大小的字符串

**语法：** `binaryFile`.**`fileSize`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## `binaryFile`.**`fileType`** <a href="#binaryfilefiletype" id="binaryfilefiletype"></a>

**说明：** 表示文件类型的字符串，例如 <code>image</code>。对应 MIME 类型的第一部分。

**语法：** `binaryFile`.**`fileType`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## `binaryFile`.**`id`** <a href="#binaryfileid" id="binaryfileid"></a>

**说明：** 文件的唯一 ID。当文件存在磁盘或 S3 之类的存储服务上时，用它来识别文件。

**语法：** `binaryFile`.**`id`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## `binaryFile`.**`mimeType`** <a href="#binaryfilemimetype" id="binaryfilemimetype"></a>

**说明：** 表示文件内容格式的字符串，例如 <code>image/jpeg</code>

**语法：** `binaryFile`.**`mimeType`**

**返回：** String（字符串）

**来源：** n8n 自定义功能
