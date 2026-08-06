---
title: 二进制数据（Binary data）环境变量
description: >-
  通过环境变量为你的自托管 n8n 实例自定义二进制数据的存储模式和路径。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 二进制数据（Binary data）
originalFilePath: hosting/configuration/environment-variables/binary-data.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/binary-data'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/binary-data
layout:
  description:
    visible: false
---

# 二进制数据（Binary data）环境变量

{% hint style="info" %}
**大白话**：二进制数据（binary data）就是工作流里跑过的文件数据，比如图片、PDF、Excel、视频。默认情况下 n8n 把这类数据存在内存里；这一页的变量让你改成存到硬盘、数据库或云存储（AWS S3、Azure Blob），并且控制单个文件的大小上限和存储路径。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

默认情况下，n8n 使用内存来存储二进制数据。企业版用户可以改为使用外部服务。更多关于为二进制数据使用外部存储的信息，请参见[外部存储（External storage）](../../scaling/use-external-storage.md)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_AVAILABLE_BINARY_DATA_MODES` | String | `filesystem` | 可用的二进制数据模式列表，用逗号分隔。 |
| `N8N_BINARY_DATA_DATABASE_MAX_FILE_SIZE` | Number | `512` | 当 `N8N_DEFAULT_BINARY_DATA_MODE` 为 `database` 时，n8n 存储的单个文件的最大大小（MiB）。不能超过 `1024`（这是数据库列的上限）。存储更大的文件会失败。 |
| `N8N_BINARY_DATA_STORAGE_PATH` | String | `N8N_USER_FOLDER/binaryData` | n8n 存储二进制数据的路径。 |
| `N8N_DEFAULT_BINARY_DATA_MODE` | String | `default` | 默认的二进制数据模式。`default` 把二进制数据保存在内存中。设为 `filesystem` 使用文件系统，`s3` 使用 AWS S3，`azure` 使用 Azure Blob Storage，`database` 使用数据库。注意：二进制数据的清理（pruning）只作用于当前激活的二进制数据模式。例如，如果你的实例之前把数据存在 S3，后来又切换到了文件系统模式，n8n 只会清理文件系统中的二进制数据。这一行为将来可能会改变。 |
