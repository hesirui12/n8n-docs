---
title: Brave Search 凭证
description: >-
  Brave Search 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Brave Search（搜索引擎）的身份。
contentType:
  - integration
  - reference
layout:
  description:
    visible: false
---

# Brave Search 凭证

> 大白话：Brave Search 是注重隐私的搜索引擎，n8n 可以用它来做「AI 联网搜索」。配置很简单：去 Brave 官网注册账号、选一个套餐（有免费档，每月限次数），把 API Keys 页面里那串密钥复制进 n8n 就完事了。

## 准备工作

注册一个 [Brave Search API](https://api.search.brave.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Brave Search 官方 API 文档](https://api-dashboard.search.brave.com/documentation)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- 一个 **API Key（API 密钥）**：也就是你的 Brave Search 订阅令牌。

获取 API key 的方法：

1. 打开 [api.search.brave.com](https://api.search.brave.com/) 注册或登录。
2. 选择一个订阅套餐。Brave 提供免费档，每月有查询次数限制。
3. 在控制台里进入 [API Keys（API 密钥）](https://api-dashboard.search.brave.com/app/keys) 页面。
4. 复制你的 API key，在 n8n 凭证里填到 **API Key** 一栏。
