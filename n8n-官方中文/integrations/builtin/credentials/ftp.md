---
title: FTP 凭证
description: >-
  FTP 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  FTP 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: FTP credentials
originalFilePath: integrations/builtin/credentials/ftp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/ftp'
url: 'https://docs.n8n.io/integrations/builtin/credentials/ftp'
layout:
  description:
    visible: false
---

# FTP 凭证

{% hint style="info" %}
**大白话**：FTP 是用来在电脑和服务器之间传文件的协议。n8n 想帮你自动上传/下载/管理服务器上的文件，就需要填服务器的连接信息。有两个选项：**FTP 账号**（普通 FTP，不支持加密/SSH 隧道时用）和 **SFTP 账号**（走 SSH 隧道、加密连接时用）。填的内容基本一样：服务器地址、端口、用户名、密码，SFTP 可能还要私钥。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [FTP](../core-nodes/n8n-nodes-base.ftp.md)

## 准备工作

在一个支持文件传输协议（FTP）的服务器上创建账号，比如 [JSCAPE](https://mft.jscape.com/lp/ftp-server)、[OpenSSH](https://www.openssh.com/) 或 [FileZilla Server](https://filezilla-project.org/)。

## 支持的验证方式

- **FTP account（FTP 账号）**：如果你的 FTP 服务器不支持 SSH 隧道或加密连接，用这种方式。
- **SFTP account（SFTP 账号）**：如果你的 FTP 服务器支持 SSH 隧道和加密连接，用这种方式。

## 相关资源

文件传输协议（FTP）和安全外壳文件传输协议（SFTP）都是用于在 FTP/SFTP 客户端和服务器之间直接传输文件的协议。

## 使用 FTP account（FTP 账号）

如果你的 FTP 服务器不支持 SSH 隧道或加密连接，用这种方式。

配置这个凭证，你需要：

1. 填你的 FTP 服务器 **Host（主机）** 名称或 IP 地址。
2. 填连接要用的 **Port（端口）** 号。
3. 填这个凭证用来登录的 **Username（用户名）**。
4. 填该用户的 **Password（密码）**。

怎么找到这些信息，请查阅你的 FTP 服务器服务商提供的文档。

## 使用 SFTP account（SFTP 账号）

如果你的 FTP 服务器支持 SSH 隧道和加密连接，用这种方式。

配置这个凭证，你需要：

1. 填你的 FTP 服务器 **Host（主机）** 名称或 IP 地址。
2. 填连接要用的 **Port（端口）** 号。
3. 填这个凭证用来登录的 **Username（用户名）**。
4. 填该用户的 **Password（密码）**。
5. 对于 **Private Key（私钥）**，填入一个用于基于密钥或基于主机用户认证的字符串。
    - 私钥要用 OpenSSH 格式填写。这种格式通常是用 ssh-keygen 的 `-o` 参数生成的，例如：`ssh-keygen -o -a 100 -t ed25519`。
6. 如果 **Private Key（私钥）** 是加密的，填解密用的 **Passphrase（口令）**。
    - 如果私钥没有设置口令，这个字段留空即可。

怎么找到这些信息，请查阅你的 FTP 服务器服务商提供的文档。
