---
title: 扩展 n8n 中的二进制数据（Scaling binary data in n8n）
description: 如何在不让 n8n 性能下降的情况下处理大文件。
contentType: howto
nodeTitle: 处理二进制数据（Handle binary data）
originalFilePath: hosting/scaling/binary-data.md
originalUrl: 'https://docs.n8n.io/hosting/scaling/binary-data'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/handle-binary-data'
layout:
  description:
    visible: false
---

# 二进制数据（Binary data）

二进制数据（binary data）是指任何文件类型的数据，例如在工作流执行过程中生成或处理的图片文件或文档。

在队列模式下，二进制数据存储也用于承载因太大而无法通过队列发送的 Webhook 响应。详情请参考[大型 Webhook 响应](enable-queue-mode.md#large-webhook-responses)。

{% hint style="info" %}
**大白话**：二进制数据就是「不是文字的那些文件」，比如图片、PDF、Excel 表格、音频视频等。n8n 默认把这些文件整个塞进内存里处理，文件一多一大就很容易把服务器内存撑爆。这一页告诉你：怎么让 n8n 把文件存到磁盘（而不是内存），以及旧的二进制数据怎么被自动清理。
{% endhint %}

## 启用文件系统模式（Enable filesystem mode）

处理二进制数据时，n8n 默认把数据保存在内存中。处理大文件时，这可能导致崩溃。

为了避免这种情况，请把 `N8N_DEFAULT_BINARY_DATA_MODE` [环境变量](../basic-configuration/use-environment-variables/binary-data.md) 改为 `filesystem`。这会让 n8n 把数据保存到磁盘，而不是使用内存。

如果你使用队列模式，请把它切换为 `database`。n8n 不支持 `filesystem` 模式与队列模式搭配使用。

## 二进制数据清理（Binary data pruning）

n8n 会把二进制数据清理作为执行数据清理的一部分来执行。详情请参考[执行数据 | 启用执行数据清理](manage-execution-data.md#enable-executions-pruning)。

如果你配置了多种二进制数据模式，二进制数据清理只作用于当前活跃的二进制数据模式。例如，如果你的实例之前把数据存储在 S3，后来切换到了文件系统模式，n8n 只会清理文件系统中的二进制数据。详情请参考[外部存储](use-external-storage.md#usage)。
