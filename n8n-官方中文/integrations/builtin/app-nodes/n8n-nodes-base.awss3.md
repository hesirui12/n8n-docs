---
title: AWS S3 节点文档
description: 学习如何在 n8n 中使用 AWS S3 节点。按照技术文档将 AWS S3 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: AWS S3 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.awss3.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awss3'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awss3'
layout:
  description:
    visible: false
---

# AWS S3 节点

> 💡 **大白话**：AWS S3 是亚马逊的「云网盘」，用来存文件。用这个节点，你可以在 n8n 里自动上传、下载、复制、删除文件，还能创建和删除「存储桶」（放文件的文件夹/空间），不用自己写代码。

使用 AWS S3 节点自动化 AWS S3 中的工作，并将 AWS S3 与其他应用集成。n8n 内置支持大量 AWS S3 功能，包括创建和删除存储桶（bucket）、复制和下载文件、获取文件夹等。

本页列出了 AWS S3 节点支持的操作，以及更多资源链接。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置认证，请参考 [AWS 凭据](../credentials/aws.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作（Operations）

* Bucket（存储桶）
    * Create a bucket（创建存储桶）
    * Delete a bucket（删除存储桶）
    * Get all buckets（获取所有存储桶）
    * Search within a bucket（在存储桶内搜索）
* File（文件）
    * Copy a file（复制文件）
    * Delete a file（删除文件）
    * Download a file（下载文件）
    * Get all files（获取所有文件）
    * Upload a file（上传文件）
* Folder（文件夹）
    * Create a folder（创建文件夹）
    * Delete a folder（删除文件夹）
    * Get all folders（获取所有文件夹）

## 模板和示例（Templates and examples）

[浏览 AWS S3 节点文档集成模板](https://n8n.io/integrations/aws-s3) 或 [搜索所有模板](https://n8n.io/workflows/)

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
