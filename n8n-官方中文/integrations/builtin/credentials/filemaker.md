---
title: FileMaker 凭证（FileMaker credentials）
description: >-
  FileMaker 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  FileMaker。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: FileMaker 凭证（FileMaker credentials）
originalFilePath: integrations/builtin/credentials/filemaker.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/filemaker'
url: 'https://docs.n8n.io/integrations/builtin/credentials/filemaker'
layout:
  description:
    visible: false
---

# FileMaker 凭证（FileMaker credentials）

> **大白话**：FileMaker（Claris 出品）是低代码数据库/应用开发工具，常用来做企业内部的数据管理系统。n8n 连它用的是「数据库连接」方式：填你的 FileMaker 服务器地址（Host）、数据库名（Database），以及一个有 `fmrest` 权限的用户账号和密码。

你可以使用这些凭证来认证以下节点：

- [FileMaker](../app-nodes/n8n-nodes-base.filemaker.md)

## 前置条件（Prerequisites）

- 在 [FileMaker Server](https://www.claris.com/filemaker/) 上创建一个用户账号，并赋予 `fmrest` 扩展权限，以便[访问 FileMaker Data API](https://help.claris.com/en/data-api-guide/content/enable-access.html)。
- 确保 FileMaker Server 可以使用 [FileMaker Data API](https://help.claris.com/en/data-api-guide/content/index.html)：
    1. 使用 FileMaker Pro 为 FileMaker Data API 访问准备你的数据库。你可以新建数据库，也可以准备现有的数据库。
        - 更多信息请参考[为 FileMaker Data API 访问准备数据库](https://help.claris.com/en/data-api-guide/content/prepare-databases-for-access.html)。
    2. 编写调用 FileMaker Data API 方法的代码，以查找、创建、编辑、复制和删除托管数据库中的记录。
        - 更多信息请参考[编写 FileMaker Data API 调用](https://help.claris.com/en/data-api-guide/content/write-data-api-calls.html)。
    3. 托管你的解决方案，并启用 FileMaker Data API 访问。
        - 更多信息请参考[托管 FileMaker Data API 解决方案](https://help.claris.com/en/data-api-guide/content/host-data-api-app.html)。
    4. 测试 FileMaker Data API 访问是否正常工作。
        - 更多信息请参考[测试 FileMaker Data API 解决方案](https://help.claris.com/en/data-api-guide/content/test-data-api-app.html)。
    5. 使用 Admin Console 监控你托管的解决方案。
        - 更多信息请参考[监控 FileMaker Data API 解决方案](https://help.claris.com/en/data-api-guide/content/monitor-data-api-app.html)。

## 支持的认证方式（Supported authentication methods）

- Database connection（数据库连接）

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [FileMaker 的 Data API 指南](https://help.claris.com/en/data-api-guide/content/index.html)。

## 使用数据库连接（Using database connection）

要配置这个凭证：

1. 输入你的 FileMaker Server 的 **Host**（主机）名称或 IP 地址。
2. 输入 **Database**（数据库）名称。它应该与 FileMaker 中 **Databases**（数据库）列表里显示的名称一致。
3. 输入拥有 `fmrest` 扩展权限的用户账号的 **Login**（登录名）。更多信息请参考前面的[前置条件](#前置条件prerequisites)部分。
4. 输入该用户账号的 **Password**（密码）。
