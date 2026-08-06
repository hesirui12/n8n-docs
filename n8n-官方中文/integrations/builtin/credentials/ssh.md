---
title: SSH 凭证
description: >-
  SSH 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  SSH 的身份。
contentType:
  - integration
  - reference
nodeTitle: SSH credentials
originalFilePath: integrations/builtin/credentials/ssh.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/ssh'
url: 'https://docs.n8n.io/integrations/builtin/credentials/ssh'
layout:
  description:
    visible: false
---

# SSH 凭证

{% hint style="info" %}
**大白话**：SSH 是远程登录服务器的标准方式（类似远程命令行）。n8n 想连你的服务器执行命令时，要用这个凭证。登录方式二选一：**用密码登录**（最简单），或者**用私钥登录**（更安全，适合你已经配好了 SSH 密钥的情况）。照着下面把服务器地址、端口、用户名填上就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [SSH](../core-nodes/n8n-nodes-base.ssh.md)

## 先决条件

- 一台开启了 SSH 的远程服务器。
- 一个能通过下面任一方式 `ssh` 登录服务器的用户账号：
    - 使用自己的[密码](#using-password)登录
    - 使用 SSH [私钥](#using-private-key)登录

## 支持的验证方式

- [密码](#using-password)：如果你有一个能用自己的密码 `ssh` 登录服务器的用户账号，就用这种方式。
- [私钥](#using-private-key)：如果你有一个用 SSH 密钥访问服务器或服务的用户账号，就用这种方式。

## 相关资源

安全外壳协议（Secure Shell，SSH）是一种在网络上安全发送命令的方法。参考 [Connecting to GitHub with SSH（用 SSH 连接 GitHub）](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) 了解 SSH 配置示例。

## 使用密码

如果你有一个能用自己的密码 `ssh` 登录服务器的用户账号，就用这种方式。

要配置这个凭证，你需要：

1. 把要连接的服务器 IP 地址填到 **Host（主机）** 里。
2. 填写连接用的 **Port（端口）**。SSH 默认使用 `22` 端口。
3. 填写一个有服务器 `ssh` 访问权限的用户账号的 **Username（用户名）**。
4. 填写该用户账号的 **Password（密码）**。

## 使用私钥

如果你有一个用 SSH 密钥访问服务器或服务的用户账号，就用这种方式。

要配置这个凭证，你需要：

1. 把要连接的服务器 IP 地址填到 **Host（主机）** 里。
2. 填写连接用的 **Port（端口）**。SSH 默认使用 `22` 端口。
3. 填写生成这把私钥的账号的 **Username（用户名）**。
4. 把你 SSH **Private Key（私钥）** 的完整内容粘贴进来。
5. 如果你给 **Private Key（私钥）** 设置了 **Passphrase（口令）**，就填上这个口令。
    - 如果创建密钥时没有设置口令，就留空。
