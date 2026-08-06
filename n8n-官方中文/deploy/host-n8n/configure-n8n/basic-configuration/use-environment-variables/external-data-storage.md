---
title: 外部数据存储环境变量
description: >-
  用于为自托管 n8n 实例配置外部数据存储的环境变量。
contentType: reference
tags:
  - environment variables
  - external storage
  - storage
hide:
  - toc
  - tags
nodeTitle: 外部数据存储
originalFilePath: hosting/configuration/environment-variables/external-data-storage.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/environment-variables/external-data-storage
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/external-data-storage
layout:
  description:
    visible: false
---

# 外部数据存储环境变量

{% hint style="info" %}
**大白话**：n8n 的「大文件数据」（比如二进制文件、执行记录）默认存在本地，数据多了会占满磁盘。这一页教你把这些数据存到外部（S3 或 Azure 云存储），用便宜的海量存储来装，还能让多个实例共享数据。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

关于把二进制数据和执行数据存到外部存储的更多信息，请参见[外部存储](../../scaling/use-external-storage.md)。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_EXTERNAL_STORAGE_S3_HOST` | String | - | S3 兼容外部存储中 n8n 桶（bucket）的主机。例如 `s3.us-east-1.amazonaws.com` |
| `N8N_EXTERNAL_STORAGE_S3_BUCKET_NAME` | String | - | S3 兼容外部存储中 n8n 桶（bucket）的名称。 |
| `N8N_EXTERNAL_STORAGE_S3_BUCKET_REGION` | String | - | S3 兼容外部存储中 n8n 桶（bucket）的区域。例如 `us-east-1` |
| `N8N_EXTERNAL_STORAGE_S3_ACCESS_KEY` | String | - | S3 兼容外部存储的访问密钥（Access key）。 |
| `N8N_EXTERNAL_STORAGE_S3_ACCESS_SECRET` | String | - | S3 兼容外部存储的访问密钥密文（Access secret）。 |
| `N8N_EXTERNAL_STORAGE_S3_AUTH_AUTO_DETECT` | Boolean | - | 使用自动凭据检测来认证外部存储的 S3 调用。这会忽略 access key 和 access secret，改用默认的[凭据提供者链](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html#credchain)。 |

## Azure Blob Storage

{% hint style="info" %}
**企业版功能**

要把执行数据或二进制数据存到 Azure Blob Storage，你需要[企业版许可证密钥](../../manage-your-license.md)。
{% endhint %}

要把执行数据存到 Azure Blob Storage，请把 `N8N_EXECUTION_DATA_STORAGE_MODE` 设为 `azure`。要把二进制数据存到 Azure Blob Storage，请把 `N8N_DEFAULT_BINARY_DATA_MODE` 设为 `azure`（参见[外部存储](../../scaling/use-external-storage.md#storing-n8ns-binary-data-in-azure-blob-storage)）。一个容器可以同时存放两类数据。请配置下面的变量；其中 `N8N_EXTERNAL_STORAGE_AZURE_CONTAINER_NAME` 是必须的。

认证方式可以从下面三种中任选其一，n8n 按以下顺序检测：

1. **连接字符串（Connection string）**：设置 `N8N_EXTERNAL_STORAGE_AZURE_CONNECTION_STRING`。它的优先级高于其他选项，所以一旦设置，n8n 会忽略账户名、密钥和自动检测。这是最简单的选项，非常适合用 Azurite 做本地测试。
2. **自动检测（Auto-detect）**：设置 `N8N_EXTERNAL_STORAGE_AZURE_ACCOUNT_NAME`，并把 `N8N_EXTERNAL_STORAGE_AZURE_AUTH_AUTO_DETECT` 设为 `true`。n8n 通过 Azure 的 `DefaultAzureCredential` 链（托管身份、环境变量或 Azure CLI）认证，因此你的 n8n 配置中不需要存放任何密钥。最适合在 Azure 上做生产部署。
3. **账户名和密钥（Account name and key）**：设置 `N8N_EXTERNAL_STORAGE_AZURE_ACCOUNT_NAME` 和 `N8N_EXTERNAL_STORAGE_AZURE_ACCOUNT_KEY`。

只有当使用自定义端点（例如 Azurite 或主权云）时，才需要设置 `N8N_EXTERNAL_STORAGE_AZURE_ENDPOINT`。

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :---- | :------- | :---------- |
| `N8N_EXTERNAL_STORAGE_AZURE_CONNECTION_STRING` | String | - | Azure Blob Storage 的连接字符串。设置后优先于账户名和密钥。 |
| `N8N_EXTERNAL_STORAGE_AZURE_ACCOUNT_NAME` | String | - | 存储账户名。与账户密钥或托管身份一起使用。 |
| `N8N_EXTERNAL_STORAGE_AZURE_ACCOUNT_KEY` | String | - | 存储账户密钥。与账户名一起使用。 |
| `N8N_EXTERNAL_STORAGE_AZURE_CONTAINER_NAME` | String | - | 存放执行数据和/或二进制数据的 blob 容器名称。Azure Blob Storage 必需。 |
| `N8N_EXTERNAL_STORAGE_AZURE_ENDPOINT` | String | - | 自定义 blob 端点，例如用于 Azurite 或主权云。 |
| `N8N_EXTERNAL_STORAGE_AZURE_AUTH_AUTO_DETECT` | Boolean | `false` | 通过 `DefaultAzureCredential`（托管身份、环境变量或 Azure CLI）认证，而不是使用账户密钥。启用时会忽略账户密钥。 |
