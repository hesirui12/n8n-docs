---
title: SSH
contentType:
  - integration
  - reference
priority: medium
nodeTitle: SSH
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.ssh.md
originalUrl: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ssh
url: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ssh
description: >-
  n8n（工作流自动化平台）中 SSH 节点的文档。
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

# SSH

> **大白话**：这个节点让你能"远程操控另一台电脑（服务器）"。SSH 是一种安全远程登录协议——就像你坐在这台电脑前，用键盘敲命令来控制远处的服务器。n8n 可以用它远程执行命令（比如重启服务、跑脚本）、下载文件、上传文件。适合：定时备份、自动化部署、服务器运维。

SSH 节点用于通过安全外壳协议（Secure Shell Protocol，SSH）执行命令，非常实用。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/ssh.md)找到此节点的身份验证信息。
{% endhint %}

> **小白提示**：SSH 凭据一般用"用户名 + 密码"或"用户名 + 私钥（private key）"来验证身份。如果你之前用过 Xshell、PuTTY 连服务器，那套账号密码或密钥文件就可以直接填进 n8n 的 SSH Credential 里。

## 操作（Operations）

* [**执行（Execute）** 一条命令](n8n-nodes-base.ssh.md#execute-command)
* [**下载（Download）** 一个文件](n8n-nodes-base.ssh.md#download-file)
* [**上传（Upload）** 一个文件](n8n-nodes-base.ssh.md#upload-file)

{% hint style="info" %}
**上传文件**

要附加一个文件用于上传，你需要使用额外的节点，比如 [从磁盘读写文件（Read/Write Files from Disk）](n8n-nodes-base.readwritefile.md) 节点或 [HTTP 请求（HTTP Request）](n8n-nodes-base.httprequest/README.md) 节点，把文件作为数据属性传入。
{% endhint %}

### 执行命令（Execute Command）

使用以下参数配置此操作：

* **Credential to connect with（连接凭据）**：选择现有的或创建一个新的 [SSH 凭据](../credentials/ssh.md) 用于连接。
* **Command（命令）**：输入要在远程设备上执行的命令。
* **Working Directory（工作目录）**：输入 n8n 应该在哪个目录下执行命令。

> **小白提示**：比如你想查看服务器磁盘占用，命令可以填 `df -h`；想重启 Nginx 服务可以填 `systemctl restart nginx`。工作目录类似于"先 cd 到哪个文件夹再执行命令"，可留空表示使用默认目录。命令执行后，输出结果会作为数据传给下一个节点。

### 下载文件（Download File）

* **Credential to connect with（连接凭据）**：选择现有的或创建一个新的 [SSH 凭据](../credentials/ssh.md) 用于连接。
* **Path（路径）**：输入你想要下载的文件的路径。此路径必须包含文件名。下载下来的文件将使用这个文件名。如果想用不同的名字，请使用 **File Name（文件名）** 选项。更多信息请参考 [下载文件选项](#下载文件选项)。
* **File Property（文件属性）**：输入用于存放你要下载的二进制数据的对象属性名称。

> **小白提示**：**File Property** 就是给下载下来的文件起一个"字段名"，比如填 `data`，后面接「从磁盘读写文件」节点保存时，就从 `data` 这个字段里取文件内容。

#### 下载文件选项（Download File options）

你可以使用 **File Name（文件名）** 选项进一步配置此操作。使用此选项可以把二进制数据的文件名覆盖为你想要的名字。

### 上传文件（Upload File）

* **Credential to connect with（连接凭据）**：选择现有的或创建一个新的 [SSH 凭据](../credentials/ssh.md) 用于连接。
* **Input Binary Field（输入二进制字段）**：输入包含你要上传文件的输入二进制字段名称。
* **Target Directory（目标目录）**：要将文件上传到的目录。文件名取自二进制数据的文件名。如果想输入不同的名字，请使用 **File Name（文件名）** 选项。更多信息请参考 [上传文件选项](#上传文件选项)。

#### 上传文件选项（Upload File options）

你可以使用 **File Name（文件名）** 选项进一步配置此操作。使用此选项可以把二进制数据的文件名覆盖为你想要的名字。

## 模板和示例（Templates and examples）

[浏览 SSH 集成模板](https://n8n.io/integrations/ssh) 或 [搜索所有模板](https://n8n.io/workflows/)
