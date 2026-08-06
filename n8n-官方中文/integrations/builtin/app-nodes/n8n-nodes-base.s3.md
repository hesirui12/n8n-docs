---
title: S3 节点文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: S3 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.s3.md
originalUrl: https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.s3
url: https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.s3
description: >-
  学习如何在 n8n 中使用 S3 节点。按照技术文档将 S3
  节点集成到你的工作流中。
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
**大白话**：S3 是「对象存储」的标准协议，最出名的是亚马逊的 AWS S3 云存储，但很多其它厂商也提供兼容 S3 的存储服务。用这个节点，你可以在 n8n 里自动创建/删除存储桶（bucket）、上传/下载/复制/删除文件、管理文件夹。注意：这个节点专用于**非 AWS** 的 S3 兼容存储；如果你用的是 AWS 本身，请改用 [AWS S3](n8n-nodes-base.awss3.md) 节点。
{% endhint %}

# S3

使用 S3 节点来自动化你在非 AWS 的 S3 存储中的工作，并把它与其它应用集成。n8n 内置支持 S3 的大量功能，包括创建、删除和获取存储桶（bucket）、文件和文件夹。如果你用的是 AWS S3，请改用 [AWS S3](n8n-nodes-base.awss3.md) 节点。

S3 节点适用于这类非 AWS 的 S3 兼容解决方案：

* [MinIO](https://min.io/)（开源的自建 S3 存储）
* [Wasabi](https://wasabi.com/)（云存储服务）
* [Digital Ocean spaces](https://www.digitalocean.com/products/spaces)（Digital Ocean 的云存储）

在本页你可以看到 S3 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [S3 凭证](../credentials/s3.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 操作（Operations）

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

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>上传时附加文件（Attach file for upload）</strong></p><p>要附加要上传的文件，请用另一个节点把文件作为数据属性（data property）传进来。像 <a href="../core-nodes/n8n-nodes-base.readwritefile.md">Read/Write Files from Disk（从磁盘读写文件）</a> 节点或 <a href="../core-nodes/n8n-nodes-base.httprequest/README.md">HTTP Request（HTTP 请求）</a> 节点就很好用。</p></div>
* Folder（文件夹）
  * Create a folder（创建文件夹）
  * Delete a folder（删除文件夹）
  * Get all folders（获取所有文件夹）

## 模板与示例（Templates and examples）

[浏览 S3 节点文档集成模板](https://n8n.io/integrations/s3)，或[搜索全部模板](https://n8n.io/workflows/)。

## 节点参考（Node reference）

### 在 Wasabi 中设置文件权限

当向 [Wasabi](https://wasabi.com/) 上传文件时，你必须用 **ACL** 下拉菜单来设置文件权限，而不要用旁边的开关（toggles）。

![File permissions when using the S3 node with Wasabi](../../.gitbook/assets/acl_dropdown.png)
