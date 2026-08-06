---
description: 为你的 n8n 实例提供二进制数据和执行数据的外部存储。
contentType: howto
tags:
  - external storage
  - storage
hide:
  - tags
search:
  boost: 1.5
nodeTitle: 使用外部存储（Use external storage）
originalFilePath: hosting/scaling/external-storage.md
originalUrl: 'https://docs.n8n.io/hosting/scaling/external-storage'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/use-external-storage'
layout:
  description:
    visible: false
---

# 外部存储（External storage）

{% hint style="info" %}
**功能可用性（Feature availability）**

* 适用于自托管企业版（Self-hosted Enterprise）套餐
{% endhint %}

n8n 可以把工作流执行产生的二进制数据和执行数据存储在外部。这个功能很有用，可以避免依赖数据库或文件系统来存储大量数据。

{% hint style="info" %}
**大白话**：如果你的工作流经常处理大文件（图片、PDF、音视频）或产生海量执行记录，都存在服务器本地磁盘/数据库里会很快塞满。这一页教你把这些数据存到「云对象存储」里——最常用的是 AWS S3（以及兼容 S3 的服务，如 Cloudflare R2、Backblaze B2），也支持微软 Azure Blob Storage。注意：这个功能需要企业版许可证。
{% endhint %}

## 把 n8n 的二进制数据存储在 S3 中（Storing n8n's binary data in S3）

n8n 支持 [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) 作为工作流执行产生的二进制数据的外部存储。你也可以使用其他兼容 S3 的服务，如 Cloudflare R2 和 Backblaze B2，但 n8n 并不官方支持这些服务。

{% hint style="info" %}
**企业版功能（Enterprise-tier feature）**

使用外部存储需要[企业版许可证密钥](../manage-your-license.md)。如果没有有效的许可证，n8n 不会以 `s3` 二进制数据模式启动：请把 `N8N_DEFAULT_BINARY_DATA_MODE` 设置为其他模式，或升级你的许可证。
{% endhint %}

### 设置（Setup）

按照 [AWS 文档](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) 创建并配置一个存储桶（bucket）。你可以使用下面的策略，把 `<bucket-name>` 替换为你创建的存储桶名称：

```json
{
 "Version": "2012-10-17",
 "Statement": [
  {
   "Sid": "VisualEditor0",
   "Effect": "Allow",
   "Action": ["s3:*"],
   "Resource": ["arn:aws:s3:::<bucket-name>", "arn:aws:s3:::<bucket-name>/*"]
  }
 ]
}
```

> 代码说明：这是一段 S3 访问策略（JSON 格式），作用是允许 n8n 对这个存储桶做任意操作（上传、读取、删除等）。如果你只是自己用，也可以把权限收窄到 `s3:PutObject`、`s3:GetObject`、`s3:DeleteObject` 等具体操作，但直接用官方示例也能正常工作。

设置存储桶级别的生命周期（lifecycle）配置，让 S3 自动删除旧的二进制数据。n8n 会把二进制数据的清理工作交给 S3 处理，因此除非你想无限期保留二进制数据，否则必须设置生命周期配置。

创建好存储桶后，你会得到一个主机地址（host）、存储桶名称和区域（region），以及访问密钥 ID（access key ID）和秘密访问密钥（secret access key）。你需要把它们设置到 n8n 的环境变量中：

```sh
export N8N_EXTERNAL_STORAGE_S3_HOST=... # example: s3.us-east-1.amazonaws.com
export N8N_EXTERNAL_STORAGE_S3_BUCKET_NAME=...
export N8N_EXTERNAL_STORAGE_S3_BUCKET_REGION=...
export N8N_EXTERNAL_STORAGE_S3_ACCESS_KEY=...
export N8N_EXTERNAL_STORAGE_S3_ACCESS_SECRET=...
```

> 代码说明：把 `...` 分别替换成你自己的实际值：S3 主机地址（例如 `s3.us-east-1.amazonaws.com`）、存储桶名、区域、Access Key ID 和 Secret Access Key。注意 `N8N_EXTERNAL_STORAGE_S3_ACCESS_SECRET` 里存的是密钥，请妥善保管，不要提交到代码仓库。

{% hint style="info" %}
**没有区域（No region）**

如果你的服务商不要求区域，你可以把 `N8N_EXTERNAL_STORAGE_S3_BUCKET_REGION` 设置为 `'auto'`。
{% endhint %}

## 校验并更新你的 S3 存储桶区域格式（v2.6.4 起）（Validate and update your S3 bucket region format (v2.6.4 onward)）

从 n8n v2.6.4 开始，环境变量 `N8N_EXTERNAL_STORAGE_S3_BUCKET_REGION` 的值必须满足以下条件：

- 只能包含字母数字字符（`a-z`、`A-Z`、`0-9`）和连字符（`-`）。
- 不能包含下划线（`_`）或其他特殊字符。

如果不满足这些条件，即使存储端点可达、并且旧版本中之前一直正常，n8n 也会因连接错误而启动失败。

如果在把 n8n 升级到 v2.6.4 后 S3 连接失败，请检查你的区域值是否符合上述条件，然后重新部署 n8n。

告诉 n8n 把二进制数据存储在 S3 中：

```sh
export N8N_AVAILABLE_BINARY_DATA_MODES=filesystem,s3
export N8N_DEFAULT_BINARY_DATA_MODE=s3
```

> 代码说明：第一行声明 n8n 支持哪些二进制数据存储模式（这里允许 filesystem 和 s3 两种），第二行把默认模式设为 `s3`，即新的二进制数据默认写入 S3。

{% hint style="info" %}
**认证自动检测（Auth autodetection）**

要自动检测用于 S3 调用的认证凭据，请把 `N8N_EXTERNAL_STORAGE_S3_AUTH_AUTO_DETECT` 设置为 `true`。这将使用默认的[凭据提供链（credential provider chain）](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html#credchain)。
{% endhint %}

重启服务器以加载新配置。

### 使用（Usage）

启用 S3 后，n8n 会把任何新的二进制数据写入 S3 存储桶，并从其中读取。n8n 以以下格式把二进制数据写入你的 S3 存储桶：

```
workflows/{workflowId}/executions/{executionId}/binary_data/{binaryFileId}
```

> 代码说明：这是 S3 存储桶里的目录/对象路径格式：按「工作流 ID → 执行 ID → 二进制数据」分层存放，方便你日后定位某个文件。

只要 `filesystem` 仍保留在 `N8N_AVAILABLE_BINARY_DATA_MODES` 选项中，n8n 就会继续从文件系统读取之前存储在文件系统中的旧二进制数据。

如果你把二进制数据存储在 S3 中，之后又切换到文件系统模式，只要 `s3` 仍保留在 `N8N_AVAILABLE_BINARY_DATA_MODES` 中且你的 S3 凭据仍然有效，实例就会继续读取存储在 S3 中的任何数据。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/kct3MUrE5xSbDyeytQIX/" %}

### S3 存储的升级最佳实践（Upgrade best practices for S3 storage）

使用 S3 或 S3 兼容存储时：

1. 同时把 n8n 的所有组件（主进程 main、worker、runner）升级到相同版本，以避免协议不兼容。
2. 对于使用 HTTP 的内部部署或 S3 兼容存储，请设置 `N8N_EXTERNAL_STORAGE_S3_PROTOCOL=http`，并在主机配置中包含该协议。
3. 只使用受支持的环境变量名称：对于访问密钥，请使用 `N8N_EXTERNAL_STORAGE_S3_ACCESS_KEY`。

较新版本的 n8n 有更严格的校验和协议处理。升级后，旧配置可能需要进行更新。

## 把 n8n 的二进制数据存储在 Azure Blob Storage 中（Storing n8n's binary data in Azure Blob Storage）

n8n 支持 [Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) 作为工作流执行产生的二进制数据的外部存储。它使用与[外部执行数据存储](../basic-configuration/use-environment-variables/external-data-storage.md#azure-blob-storage)相同的 Azure Blob 配置，因此一个容器可以同时存放二进制数据和执行数据。

{% hint style="info" %}
**企业版功能（Enterprise-tier feature）**

使用外部存储需要[企业版许可证密钥](../manage-your-license.md)。如果没有有效的许可证，n8n 不会以 `azure` 二进制数据模式启动：请把 `N8N_DEFAULT_BINARY_DATA_MODE` 设置为其他模式，或升级你的许可证。
{% endhint %}

### Azure 设置（Azure setup）

按照 [Azure 文档](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal) 在你的 Azure 存储账户中创建一个 blob 容器（container）。

在 n8n 的环境变量中设置容器名称。`N8N_EXTERNAL_STORAGE_AZURE_CONTAINER_NAME` 是始终必需的：

```sh
export N8N_EXTERNAL_STORAGE_AZURE_CONTAINER_NAME=...
```

对于认证，n8n 支持连接字符串（connection string）、账户名和密钥（account name and key），或托管身份（managed identity，即 `DefaultAzureCredential`）。关于完整的认证变量列表以及 n8n 检查它们的顺序，请参考[外部数据存储环境变量 | Azure Blob Storage](../basic-configuration/use-environment-variables/external-data-storage.md#azure-blob-storage)。

n8n 会把二进制数据的清理工作交给 Azure 处理，因此请在容器上设置[生命周期管理策略（lifecycle management policy）](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview)来自动删除旧的二进制数据。除非你想无限期保留二进制数据，否则必须设置生命周期策略。

告诉 n8n 把二进制数据存储在 Azure Blob Storage 中：

```sh
export N8N_AVAILABLE_BINARY_DATA_MODES=filesystem,azure
export N8N_DEFAULT_BINARY_DATA_MODE=azure
```

> 代码说明：与 S3 类似：第一行声明支持 `filesystem` 和 `azure` 两种模式，第二行把默认模式设为 `azure`，即新的二进制数据默认写入 Azure Blob。

重启服务器以加载新配置。

### Azure 使用（Azure usage）

启用 Azure Blob Storage 后，n8n 会把任何新的二进制数据写入容器，并从其中读取。n8n 以以下格式把二进制数据写入你的容器：

```
workflows/{workflowId}/executions/{executionId}/binary_data/{binaryFileId}
```

只要 `filesystem` 仍保留在 `N8N_AVAILABLE_BINARY_DATA_MODES` 选项中，n8n 就会继续从文件系统读取之前存储在文件系统中的旧二进制数据。

如果你把二进制数据存储在 Azure Blob Storage 中，之后又切换到文件系统模式，只要 `azure` 仍保留在 `N8N_AVAILABLE_BINARY_DATA_MODES` 中且你的 Azure 凭据仍然有效，实例就会继续读取存储在 Azure 中的任何数据。

## 把 n8n 的执行数据存储在 S3 中（Storing n8n's execution data in S3）

n8n 也可以把执行数据存储在 S3 中。

按照二进制数据[设置](#setup)一节中的说明配置 S3 存储桶和凭据，然后告诉 n8n 把执行数据存储在 S3 中：

```sh
export N8N_EXECUTION_DATA_STORAGE_MODE=s3
```

在[队列模式](enable-queue-mode.md)下，请在包括 worker 在内的所有实例上设置 `N8N_EXECUTION_DATA_STORAGE_MODE` 和 `N8N_EXTERNAL_STORAGE_S3_*` 变量。

{% hint style="warning" %}
**启动需要许可证（License required to start）**

S3 执行数据存储需要有效的[企业版许可证密钥](../manage-your-license.md)。如果你在许可证无效的情况下设置 `N8N_EXECUTION_DATA_STORAGE_MODE=s3`，n8n 将无法启动。要重新启动 n8n，请把模式切换回 `database` 或 `filesystem`，或恢复有效的许可证。
{% endhint %}

启用 S3 执行数据存储后，n8n 会把任何新执行的数据以以下格式写入你的 S3 存储桶：

```
workflows/{workflowId}/executions/{executionId}/execution_data/bundle.json
```

> 代码说明：这是执行数据在 S3 中的对象路径格式，每个执行对应一个 `bundle.json` 文件，里面是该次执行的全部数据。

n8n 会记录每个执行的数据存储在哪里，因此切换模式是**非破坏性**的。旧执行仍然可以从数据库或文件系统读取；如果你之后切换回其他模式，只要存储桶仍然配置着，存储在 S3 中的执行也仍然可读。

n8n 会自己清理 S3 中的执行数据，使用标准的[执行数据清理](manage-execution-data.md#enable-executions-pruning)设置（`EXECUTIONS_DATA_*` 变量）。与二进制数据不同，执行数据不依赖 S3 生命周期规则。**不要**为执行数据添加生命周期规则，因为它可能会删除 n8n 仍然引用的数据。
