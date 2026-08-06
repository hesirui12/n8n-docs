---
title: Daytona 凭证
description: >-
  Daytona 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Daytona 的身份。
contentType:
  - integration
  - reference
layout:
  description:
    visible: false
---

# Daytona 凭证

> **大白话**：Daytona 是云端开发环境（cloud development environment，在浏览器里跑代码）服务。n8n 连接它需要填：**API URL**（Daytona 官方托管服务填 `https://app.daytona.io/api`，自建就填自己的地址）和 **API Key**。去 Daytona 控制台的 Keys 页面创建一把密钥填进来即可。

## 准备工作（Prerequisites）

先注册一个 [Daytona](https://app.daytona.io/) 账号。

## 支持的验证方式（Supported authentication methods）

- API key（API 密钥）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Daytona 的 API 文档](https://www.daytona.io/docs/en/tools/api/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **API URL**：你的 Daytona API 端点地址。
- **API Key**：你的 Daytona API 密钥。

获取 API 密钥的步骤：

1. 登录 [Daytona Dashboard](https://app.daytona.io/dashboard/keys)。
2. 选择 **Create Key**（创建密钥）。
3. 输入密钥的名称，例如 `n8n integration`。
4. 设置过期日期，并勾选你的密钥需要的权限。
5. 选择 **Create**（创建）来生成密钥。
6. 复制 API 密钥，在 n8n 凭证中填为 **API Key**。

**API URL** 使用 `https://app.daytona.io/api`（Daytona 托管服务），或者填你自己托管的 Daytona 实例地址。

更多信息请参考 [Daytona 的 API Keys 文档](https://www.daytona.io/docs/en/api-keys/)。
