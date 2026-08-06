---
title: Marketstack 凭证
description: >-
  Marketstack 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Marketstack 的身份。
contentType:
  - integration
  - reference
nodeTitle: Marketstack credentials
originalFilePath: integrations/builtin/credentials/marketstack.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/marketstack'
url: 'https://docs.n8n.io/integrations/builtin/credentials/marketstack'
layout:
  description:
    visible: false
---

# Marketstack 凭证

> **大白话**：Marketstack 是查股票行情数据的服务（有免费版）。在 n8n 里想用它查股价，就填一个 API Key，再按你的套餐档位决定要不要勾选 HTTPS。

你可以使用这些凭证来验证以下节点的身份：

- [Marketstack](../app-nodes/n8n-nodes-base.marketstack.md)

## 前提条件

注册一个 [Marketstack](https://marketstack.com/) 账号。

## 支持的认证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Marketstack 的 API 文档](https://marketstack.com/documentation)。

## 使用 API key

要配置这个凭证，你需要：

- 一个 **API Key**：在你的 Marketstack [账号控制台](https://marketstack.com/dashboard)里查看和生成 API key。
- 选择是否 **Use HTTPS（使用 HTTPS）**：根据你的 Marketstack 套餐档位决定：
  - 免费版（Free plan）：关闭 **Use HTTPS**
  - 其他所有套餐：打开 **Use HTTPS**
