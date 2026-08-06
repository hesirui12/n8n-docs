---
title: 二进制数据
description: 理解并在 n8n 中使用二进制数据。
contentType: overview
tags:
  - binary data
hide:
  - tags
nodeTitle: 处理文件与图片
originalFilePath: data/specific-data-types/binary-data.md
originalUrl: 'https://docs.n8n.io/data/specific-data-types/binary-data'
url: >-
  https://docs.n8n.io/build/work-with-data/handle-special-data-types/work-with-files-and-images
layout:
  description:
    visible: false
---

# 二进制数据 / Binary data

{% hint style="info" %}
**大白话**：什么是二进制数据（binary data）？凡是「文件」类型的数据都算——图片、PDF、Word 文档、压缩包、视频等等。为什么叫「二进制」？因为它们在电脑里不是普通文字，而是一串 0 和 1，没法直接当文本读。这篇文章是个「资源总览页」：告诉你 n8n 里有哪些节点专门处理文件类数据、怎么用代码处理它们，以及自托管（self-hosted）时怎么配置二进制数据的存储。
{% endhint %}

二进制数据是指任何文件类型的数据，比如图片文件或文档。

这个页面汇集了 n8n 中与二进制数据相关的资源。

## 在工作流中处理二进制数据 / Working with binary data in your workflows

你可以在 n8n 工作流中处理二进制数据。n8n 提供了一些节点来帮助你处理二进制数据，你也可以使用代码。

### 节点 / Nodes

有三个专门用于处理二进制数据文件的关键节点：

- [转换为文件（Convert to File）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.converttofile)：把输入数据转换并输出成一个文件。
- [从文件提取（Extract From File）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.extractfromfile)：从二进制格式中取出数据，并转换成 JSON。
- [从磁盘读/写文件（Read/Write Files from Disk）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.readwritefile)：从运行 n8n 的那台机器上读取或写入文件。

{% hint style="info" %}
**大白话**：把这三个节点记成一套「文件处理三件套」就行——**Convert to File** 是把数据「打包成文件」；**Extract From File** 是「拆开文件取数据」；**Read/Write Files from Disk** 是「直接读写服务器硬盘上的文件」。比如接口返回了一段 JSON，你想把它存成文件发出去，就用 Convert to File；反过来收到一个 CSV 文件想读里面的内容，就用 Extract From File。
{% endhint %}

另外还有专门处理 XML 和 HTML 数据的节点：

* [HTML](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.html)
* [XML](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.xml)

以及用来完成常见任务的节点：

* [压缩（Compression）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.compression)
* [编辑图片（Edit Image）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.editimage)
* [FTP](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.ftp)

你还可以使用[本地文件触发器（Local File trigger）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.localfiletrigger)，让工作流在某个本地文件发生变化时被触发运行。

要拆分或合并二进制数据条目（binary data items），请使用[数据转换节点（data transformation nodes）](../expressions-versus-data-nodes.md#other-data-transformation-nodes)。

### 代码 / Code

你可以使用[代码节点（Code node）](../../code-in-n8n/using-the-code-node.md)在工作流中操作二进制数据。例如，[获取二进制数据缓冲区（Get the binary data buffer）](../../code-in-n8n/cookbook/code-node/get-the-binary-data-buffer.md)：获取工作流中可用的二进制数据。

{% hint style="info" %}
**大白话**：除了现成的节点，你还能在代码节点（Code node）里直接读写二进制数据——比如把工作流里当前的二进制内容「抽」出来，做自定义处理。「缓冲区（buffer）」你可以理解成「二进制数据在内存里的暂存区」，是编程里对这段数据最常见的称呼。
{% endhint %}

## 自托管时配置二进制数据模式 / Configure binary data mode when self-hosting

你可以使用[二进制数据环境变量（Binary data environment variables）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/binary-data)来配置自托管（self-hosted）n8n 实例如何处理二进制数据。这包括设置存储路径、选择二进制数据的存储方式等任务。

你的配置会影响 n8n 的扩展能力（scaling）：[扩展 | 二进制数据文件系统模式（Scaling | Binary data filesystem mode）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/scaling/handle-binary-data)。

读写二进制文件可能带来安全隐患。如果你想禁用二进制数据的读写，可以使用 `NODES_EXCLUDE` 环境变量。更多信息请参考[环境变量 | 节点（Environment variables | Nodes）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/nodes)。

{% hint style="info" %}
**大白话**：这一节是给「自己搭服务器跑 n8n」的人看的。n8n 默认把二进制数据存哪里、用什么方式存，都可以通过环境变量改。另外，文件读写功能有安全风险（比如别人上传恶意文件），如果不需要，可以用 `NODES_EXCLUDE` 环境变量把这些节点「关掉」。用官方云服务（cloud）的读者可以跳过这节。
{% endhint %}
