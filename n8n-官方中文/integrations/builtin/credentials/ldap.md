---
title: LDAP 凭证
description: >-
  LDAP 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  LDAP 的身份。
contentType:
  - integration
  - reference
nodeTitle: LDAP credentials
originalFilePath: integrations/builtin/credentials/ldap.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/ldap'
url: 'https://docs.n8n.io/integrations/builtin/credentials/ldap'
layout:
  description:
    visible: false
---

# LDAP 凭证

{% hint style="info" %}
**大白话**：LDAP 是公司内部最常见的「统一账号目录服务」（比如公司所有员工的账号、部门信息都存在里面，OA、邮箱、WiFi 都用它登录）。n8n 连它需要填：**服务器地址和端口、一个管理员账号的 DN（绑定 DN）、对应密码**，再选连接方式（不加密 / TLS / STARTTLS）。看不懂 DN 没关系，照你公司 IT 给的填就行，或者问一下管 LDAP 的人。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [LDAP](../core-nodes/n8n-nodes-base.ldap.md)

## 准备工作

使用轻量目录访问协议（LDAP）创建一个服务器目录。

常见的 LDAP 服务商包括：

* [Jumpcloud](https://jumpcloud.com/blog/how-to-connect-your-application-to-ldap)
* [Azure ADDS](https://learn.microsoft.com/en-us/azure/active-directory-domain-services/tutorial-configure-ldaps)
* [Okta](https://help.okta.com/en-us/Content/Topics/Directory/LDAP-interface-connection-settings.htm)

## 支持的验证方式

- LDAP server details（LDAP 服务器信息）

## 相关资源

详细的信息请参考你的 LDAP 服务商自己的文档。

LDAP 基础知识请参考 [LDAP 基本概念](https://ldap.com/basic-ldap-concepts/)；bind 操作和认证原理请参考 [LDAP Bind 操作](https://ldap.com/the-ldap-bind-operation/)。

## 使用 LDAP server details（LDAP 服务器信息）

要配置这个凭证，你需要准备：

- **LDAP Server Address（LDAP 服务器地址）**：填你的 LDAP 服务器的 IP 地址或域名。
- **LDAP Server Port（LDAP 服务器端口）**：填连接 LDAP 服务器用的端口号。
- **Binding DN（绑定 DN）**：填你 LDAP 服务器的绑定 DN。这是凭证要以哪个用户身份登录的账号。如果你用的是 Active Directory，它看起来可能像 `cn=administrator, cn=Users, dc=n8n, dc=io`。如何找到这个 DN 以及对应的密码，请参考你的 LDAP 服务商文档。
- **Binding Password（绑定密码）**：填 **Binding DN** 那个用户对应的密码。
- 选择 **Connection Security（连接安全方式）**：可选值包括：
    - `None`（不加密）
    - `TLS`
    - `STARTTLS`
- _可选：_ 输入一个以秒为单位的数值，设置 **Connection Timeout（连接超时时间）**。
