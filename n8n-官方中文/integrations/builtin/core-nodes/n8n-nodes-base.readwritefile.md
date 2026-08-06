---
title: 从磁盘读写文件（Read/Write Files from Disk）
contentType:
  - integration
  - reference
priority: critical
nodeTitle: 从磁盘读写文件（Read/Write Files from Disk）
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.readwritefile.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.readwritefile
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.readwritefile
description: >-
  n8n（工作流自动化平台）中「从磁盘读写文件」节点的文档。
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

# 从磁盘读写文件（Read/Write Files from Disk）

> **大白话**：这个节点是"本地电脑的文件出入口"。它能在**运行 n8n 的那台机器**上读取文件（把文件变成工作流里的二进制数据）或写入文件（把二进制数据保存成真实文件）。它的使用频率非常高——比如把网上下载的 PDF 存到本地、把生成的报表保存下来、读取本地文件夹里的图片做处理。注意：文件是存在"跑 n8n 的那台电脑/容器"里的，不是随便哪台电脑。

使用「从磁盘读写文件」节点，在运行 n8n 的机器上读取文件或写入文件。

此节点可以访问的路径取决于你的 n8n 部署方式。详见 [文件位置](#文件位置)。

## 操作（Operations）

* [**从磁盘读取文件（Read File(s) From Disk）**](#从磁盘读取文件)：使用此操作从运行 n8n 的计算机上获取一个或多个文件。
* [**将文件写入磁盘（Write File to Disk）**](#将文件写入磁盘)：使用此操作在运行 n8n 的计算机上创建一个二进制文件。

请参考下文各节，了解如何为每个操作配置节点。

## 从磁盘读取文件（Read File(s) From Disk）

使用以下参数配置此操作：

* **File(s) Selector（文件选择器）**：输入你想要读取的文件的路径。
  * 要读取多个文件，请输入一个路径模式（page path pattern）。你可以使用以下字符来定义路径模式：
    * `*`：匹配任意字符零次或多次，但不匹配路径分隔符。
    * `**`：匹配任意字符零次或多次，包括路径分隔符。
    * `?`：匹配除路径分隔符之外的任意单个字符一次。
    * `[]`：匹配方括号内的任意字符。例如，`[abc]` 会匹配字符 `a`、`b` 或 `c`，且只匹配这些。

> **小白提示**：这些符号叫"通配符"，用来一次匹配很多文件。比如 `/home/user/Pictures/**/*.png` 的意思是"Pictures 文件夹下所有子文件夹里的所有 .png 图片"。`*.txt` 是"当前文件夹下所有 .txt 文件"。

更多关于这些字符及其预期行为的信息，请参考 [Picomatch 的基础 glob 匹配文档](https://github.com/micromatch/picomatch#basic-globbing)。

### 从磁盘读取文件选项（Read File(s) From Disk options）

你还可以使用这些**选项（Options）**配置此操作：

* **File Extension（文件扩展名）**：输入节点输出中文件的扩展名。
* **File Name（文件名）**：输入节点输出中文件的名称。
* **MIME Type（MIME 类型）**：输入节点输出中文件的 MIME 类型。关于文件扩展名及其 MIME 类型的列表，请参考 [常见 MIME 类型（Common MIME types）](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)。
* **Put Output File in Field（将输出文件放入字段）**：输入输出数据中用于存放文件的字段名称。

> **小白提示**：读出来的文件会放在某个"二进制字段"里，后面的节点（比如「发送邮件」的附件、FTP 上传）都从这个字段取文件。想自定义这个字段叫什么名字，就用 **Put Output File in Field**。

## 将文件写入磁盘（Write File to Disk）

使用以下参数配置此操作：

* **File Path and Name（文件路径和名称）**：输入文件的保存位置、文件名和扩展名。
* **Input Binary Field（输入二进制字段）**：输入节点输入数据中包含该二进制文件的字段名称。

> **小白提示**：比如前面的节点下载了一个 Excel，这里路径填 `/home/node/reports/report.xlsx`，它就会把二进制数据里的内容保存成那个文件。路径里的文件夹要提前存在，否则可能报错。

### 将文件写入磁盘选项（Write File to Disk options）

你还可以使用这些**选项（Options）**配置此操作：

此操作包含一个选项：是 **Append（追加）** 数据到现有文件（打开，turned on，而不是创建新文件），还是创建新文件而不是追加到现有文件（关闭，turned off）。

> **小白提示**：打开"追加"后，如果文件已存在，新内容会接在文件末尾；常用于日志累加。关闭时每次都会覆盖/新建文件。

## 模板和示例（Templates and examples）

[浏览「从磁盘读写文件」集成模板](https://n8n.io/integrations/readwrite-files-from-disk) 或 [搜索所有模板](https://n8n.io/workflows/)

## 文件位置（File locations）

此节点可以读取和写入的路径取决于你的 n8n 部署方式。

### n8n Cloud（n8n 云版）

在 n8n Cloud 上，节点只能访问 `/home/node/` 下的路径。此目录之外的路径（例如 `/tmp/` 或 `/data/`）会因访问错误而失败。

{% hint style="info" %}
**云版字段占位符**

节点 **File(s) Selector（文件选择器）** 和 **File Path and Name（文件路径和名称）** 字段中的默认占位符（如 `/home/user/Pictures/**/*.png` 和 `/data/example.jpg`）只是示例。在云版上，请把它们替换为 `/home/node/` 下的路径。
{% endhint %}

{% hint style="warning" %}
**云版文件系统是临时的**

此节点在云版上写入的文件不保证在工作流执行之间、工作器重启或实例重新部署后仍然存在。不要使用此节点存储你需要长期保留的文件。

n8n 保留 `/home/node/.n8n/` 目录用于其内部状态。不要把自己的文件写到那里。

在云版上需要持久化文件时，请使用云存储节点，例如 [AWS S3](../app-nodes/n8n-nodes-base.awss3.md)、[Google Drive](../app-nodes/n8n-nodes-base.googledrive/README.md) 或 [FTP](n8n-nodes-base.ftp.md)。
{% endhint %}

> **小白提示**：翻译成人话就是——云版里"写文件只是临时放一下，随时可能被清掉"，要长期保存文件请用网盘类节点（S3、Google Drive、FTP 等）。

### 自托管 n8n（Self-hosted n8n）

在自托管 n8n 上，默认情况下节点可以访问 n8n 进程能到达的任何路径。要限制访问，请将 [`N8N_RESTRICT_FILE_ACCESS_TO`](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/security) 环境变量设置为一个或多个允许访问的目录（用分号分隔）。

{% hint style="info" %}
**n8n 2.0 中的默认值变化**

从 n8n 2.0 开始，`N8N_RESTRICT_FILE_ACCESS_TO` 默认值为 `~/.n8n-files`。要在其他地方进行文件操作，请显式设置该变量。详见 [n8n 2.0 破坏性变更](https://app.gitbook.com/s/hhM8Cox90Piiv0u0EgHM/v20-breaking-changes#set-default-value-for-n8n_restrict_file_access_to)。
{% endhint %}

如果你用 Docker 运行 n8n，路径指的是 n8n **容器内**的文件系统，而不是 Docker 宿主机。要让宿主机目录对该节点可用，需要把它们以卷（volume）方式挂载进容器。

n8n 建议使用绝对文件路径，以避免出错。

> **小白提示**：绝对路径就是从根目录写起的完整路径，比如 `/home/node/data/report.csv`；相对路径则像 `./report.csv`，取决于当前目录，容易出错，所以官方建议尽量用绝对路径。
