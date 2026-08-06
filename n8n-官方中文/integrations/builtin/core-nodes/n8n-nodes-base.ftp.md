---
title: FTP
contentType:
  - integration
  - reference
priority: medium
nodeTitle: FTP
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.ftp.md
originalUrl: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ftp
url: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ftp
description: >-
  n8n（工作流自动化平台）中 FTP 节点的文档。
  包含使用指南和示例链接。
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

# FTP

> **大白话**：这个节点是"远程服务器的文件管家"。FTP/SFTP 服务器就像一个网盘/远程文件夹，这个节点能帮你**上传、下载、删除、重命名、列出**上面的文件。比如：网站服务器用 FTP 存放图片，工作流生成图片后自动传上去；或者定时从服务器下载日志文件来分析。SFTP 就是 FTP 的加密安全版。

FTP 节点用于访问 FTP 或 SFTP 服务器并上传文件，非常实用。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/ftp.md)找到此节点的身份验证信息。
{% endhint %}

要连接 SFTP 服务器，请使用 SFTP 凭据。更多信息请参考 [FTP 凭据](../credentials/ftp.md)。

## 操作（Operations）

* [**删除（Delete）**](n8n-nodes-base.ftp.md#delete) 一个文件或文件夹
* [**下载（Download）**](n8n-nodes-base.ftp.md#download) 一个文件
* [**列出（List）**](n8n-nodes-base.ftp.md#list) 文件夹内容
* [**重命名（Rename）**](n8n-nodes-base.ftp.md#rename) 或移动一个文件或文件夹
* [**上传（Upload）**](n8n-nodes-base.ftp.md#upload) 一个文件

{% hint style="info" %}
**上传文件**

要附加一个文件用于上传，你需要使用额外的节点，比如 [从磁盘读写文件（Read/Write Files from Disk）](n8n-nodes-base.readwritefile.md) 节点或 [HTTP 请求（HTTP Request）](n8n-nodes-base.httprequest/README.md) 节点，把文件作为数据属性传入。
{% endhint %}

> **小白提示**：简单说就是——在 n8n 里文件不是"悬浮在空气里"的，必须先有一个节点把文件变成"二进制数据"放进工作流，FTP 节点才能拿到它并传上去。

## 删除（Delete）

此操作包含一个参数：**Path（路径）**。输入你想要连接的远程路径。

> **小白提示**：路径要填服务器上文件的位置，比如 `/home/user/backups/old-file.zip`。可以填文件名（删文件）或文件夹名（删文件夹）。

### 删除选项（Delete options）

删除操作新增一个选项：**Folder（文件夹）**。如果打开此选项，节点既可以删除文件夹，也可以删除文件。此配置还会显示一个额外的选项：

* **Recursive（递归）**：如果打开此选项，当你删除一个文件夹或目录时，节点会一并删除目标目录内的所有文件和子目录。

> **小白提示**：**Recursive** 就像是"连锅端"。不打开它时，如果文件夹里还有文件，通常会拒绝删除（防止误删）；打开后它会一口气把里面所有东西都删光，请谨慎使用！

## 下载（Download）

使用以下参数配置此操作：

* **Path（路径）**：输入你想要连接的远程路径。
* **Put Output File in Field（将输出文件放入字段）**：输入用于存放文件的输出二进制字段的名称。

{% hint style="info" %}
**SFTP 并发读取**

使用 SFTP 时，你可以启用并发读取（concurrent reads）。这可以提高下载速度，但并非所有 SFTP 服务器都支持。
{% endhint %}

> **小白提示**：下载下来的文件会以"二进制数据"形式放在你填写的字段里，后面接一个「从磁盘读写文件」节点就能把它保存到本地，或者接「发送邮件」节点把它作为附件发出去。

## 列出（List）

使用以下参数配置此操作：

* **Path（路径）**：输入你想要连接的远程路径。
* **Recursive（递归）**：选择是否返回一个对象，表示在 FTP/SFTP 服务器中递归查找到的所有目录/对象：打开（turned on）则返回，关闭（turned off）则不返回。

> **小白提示**：关闭递归时，只列出当前文件夹"这一层"的内容；打开递归后，会一层一层钻进去，把该路径下所有子文件夹里的文件都列出来。

## 重命名（Rename）

使用以下参数配置此操作：

* **Old Path（旧路径）**：在此字段中输入你想要重命名的文件的现有路径。
* **New Path（新路径）**：在此字段中输入重命名后文件的新路径。

> **小白提示**：把 "旧路径" 改成 "新路径" 就能实现：改名（如 `/a.txt` → `/b.txt`）或者移动（如 `/a.txt` → `/folder/a.txt`）。

### 重命名选项（Rename options）

此操作新增一个选项：**Create Directories（创建目录）**。如果打开此选项，当重命名现有文件或文件夹时，节点会递归地创建目标目录。

> **小白提示**：比如你把文件移到 `/new/deep/folder/b.txt`，而 `new/deep/folder` 这些目录还不存在，打开这个开关后节点会先自动把这些目录一层层建好，再移动文件，不会报"目录不存在"。

## 上传（Upload）

使用以下参数配置此操作：

* **Path（路径）**：输入你想要连接的远程路径。
* **Binary File（二进制文件）**：选择是要上传一个二进制文件（打开，turned on），还是输入要上传的文本内容（关闭，turned off）。其他参数取决于你在此字段中的选择。
  * **Input Binary Field（输入二进制字段）**：当你打开 **Binary File** 时显示。在此字段中输入包含你要上传文件的输入二进制字段名称。
  * **File Content（文件内容）**：当你关闭 **Binary File** 时显示。在此字段中输入你要上传的文件的文本内容。

{% hint style="info" %}
**上传文件**

要附加一个文件用于上传，你需要使用额外的节点，比如 [从磁盘读写文件（Read/Write Files from Disk）](n8n-nodes-base.readwritefile.md) 节点或 [HTTP 请求（HTTP Request）](n8n-nodes-base.httprequest/README.md) 节点，把文件作为数据属性传入。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 FTP 集成模板](https://n8n.io/integrations/ftp) 或 [搜索所有模板](https://n8n.io/workflows/)
