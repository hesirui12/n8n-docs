---
title: CrateDB 凭证
description: >-
  CrateDB 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  CrateDB 的身份。
contentType:
  - integration
  - reference
nodeTitle: CrateDB credentials
originalFilePath: integrations/builtin/credentials/cratedb.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/cratedb'
url: 'https://docs.n8n.io/integrations/builtin/credentials/cratedb'
layout:
  description:
    visible: false
---

# CrateDB 凭证

> **大白话**：CrateDB 是分布式数据库（适合存海量时序/分析数据）。n8n 连接它就像连普通数据库一样：填**主机名、数据库名、用户名、密码、端口**，再选一个 **SSL** 策略（允许/禁用/必须）。一般自建就用「Allow」，没配 SSL 就用「Disable」。

这些凭证可以用来验证以下节点的身份：

- [CrateDB](../app-nodes/n8n-nodes-base.cratedb.md)

## 准备工作（Prerequisites）

一个可用的 CrateDB 实例。

## 支持的验证方式（Supported authentication methods）

- account connection（账号连接）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [CrateDB 的文档](https://cratedb.com/docs/crate/reference/en/latest/)。

## 使用账号连接（account connection）

要配置这个凭证，你需要准备：

- **Host（主机）** 名称
- **Database（数据库）** 名称
- **User（用户名）**
- 用户的 **Password（密码）**
- 设置 **SSL** 参数。更多信息请参考 [CrateDB 的安全通信（SSL/TLS）文档](https://cratedb.com/docs/crate/reference/en/5.7/admin/ssl.html#admin-ssl)。n8n 支持的选项有：
    - Allow（允许）
    - Disable（禁用）
    - Require（必须）
- **Port（端口）** 号

这些字段及其默认值的详细说明，请参考[连接 CrateDB 集群的文档](https://cratedb.com/docs/crate/clients-tools/en/latest/connect/)。
