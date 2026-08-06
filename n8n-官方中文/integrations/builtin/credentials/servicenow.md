---
title: ServiceNow 凭证
description: >-
  ServiceNow 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  ServiceNow。
contentType:
  - integration
  - reference
nodeTitle: ServiceNow 凭证
originalFilePath: integrations/builtin/credentials/servicenow.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/servicenow'
url: 'https://docs.n8n.io/integrations/builtin/credentials/servicenow'
layout:
  description:
    visible: false
---

# ServiceNow 凭证

> **大白话**：ServiceNow 是很多大公司用的「IT 服务管理平台」（比如报修、工单系统）。这篇文档教你怎么在 n8n 里配置凭证，有两种方式：简单直接的基础认证（用户名+密码）和更安全的 OAuth2。关键是搞清楚你的实例子域名（Subdomain）。

你可以使用这些凭证来验证以下节点：

- [ServiceNow](../app-nodes/n8n-nodes-base.servicenow.md)

## 前置条件

创建一个 [ServiceNow](https://developer.servicenow.com/dev.do#!/reference) 开发者账号。

## 支持的认证方式

- Basic auth（基础认证）
- OAuth2

## 相关资源

关于该服务的更多信息，请参阅 [ServiceNow 的 API 文档](https://developer.servicenow.com/dev.do#!/reference/api/washingtondc/rest/)。

## 使用 basic auth（基础认证）

要配置此凭证，你需要准备：

- **User（用户名）**：输入你的 ServiceNow 用户名。
- **Password（密码）**：输入你的 ServiceNow 密码。
- **Subdomain（子域名）**：你的 servicenow 实例子域名就在实例网址里：`https://<subdomain>.service-now.com/`。例如，完整网址是 `https://dev99890.service-now.com`，那么子域名就是 `dev99890`。

## 使用 OAuth2

要配置此凭证，你需要准备：

- **Client ID**：注册新应用后生成。
- **Client Secret**：注册新应用后生成。
- **Subdomain（子域名）**：你的 servicenow 实例子域名就在实例网址里：`https://<subdomain>.service-now.com/`。例如，完整网址是 `https://dev99890.service-now.com`，那么子域名就是 `dev99890`。

要生成你的 **Client ID** 和 **Client Secret**，请在 **System OAuth（系统 OAuth）> Application Registry（应用注册）> New（新建）> Create an OAuth API endpoint for external clients（为外部客户端创建 OAuth API 端点）** 中注册一个新应用。为你的应用使用以下设置：

- 复制 **Client ID** 并填入你的 n8n 凭证。
- 输入 **Client Secret**，或留空让它自动生成随机密钥。把这个密钥填入你的 n8n 凭证。
- 复制 n8n 的 **OAuth Redirect URL（OAuth 重定向地址）**，把它添加为 **Redirect URL（重定向地址）**。

更多信息请参阅 [如何为 RESTMessageV2 集成设置 OAuth2 认证](https://www.servicenow.com/community/in-other-news/how-to-setup-oauth2-authentication-for-restmessagev2/ba-p/2271823)。
