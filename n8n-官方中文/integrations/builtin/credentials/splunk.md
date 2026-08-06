---
title: Splunk 凭证
description: >-
  Splunk 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Splunk。
contentType:
  - integration
  - reference
nodeTitle: Splunk 凭证
originalFilePath: integrations/builtin/credentials/splunk.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/splunk'
url: 'https://docs.n8n.io/integrations/builtin/credentials/splunk'
layout:
  description:
    visible: false
---

# Splunk 凭证

> **大白话**：Splunk 是安全运维领域最常用的「日志分析平台」，把服务器和应用的日志收集起来做搜索和告警。这篇文档教你怎么在 n8n 里配置凭证：先在 Splunk 里开启「令牌认证（token authentication）」并创建一个 auth token，然后把令牌和你的 Splunk 地址填进 n8n。注意：Splunk Cloud 免费试用账号用不了 REST API。

你可以使用这些凭证来验证以下节点：

- [Splunk](../app-nodes/n8n-nodes-base.splunk.md)

## 前置条件

- [下载并安装](https://www.splunk.com/en_us/download/splunk-enterprise.html) Splunk Enterprise。
- 在 **Settings（设置）> Tokens（令牌）** 中[开启令牌认证](https://docs.splunk.com/Documentation/Splunk/9.2.1/Security/EnableTokenAuth)。

{% hint style="info" %}
**Splunk Cloud 平台免费试用账号无法访问 REST API**

Splunk Cloud 平台的免费试用账号没有 REST API 的访问权限。请确保你有必要的权限。更多细节请参阅 [Splunk Cloud 平台 REST API 的访问要求和限制](https://docs.splunk.com/Documentation/SplunkCloud/8.2.2203/RESTTUT/RESTandCloud)。
{% endhint %}

## 支持的认证方式

- API auth token（API 认证令牌）

## 相关资源

关于该服务的更多信息，请参阅 [Splunk Enterprise 的 API 文档](https://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTprolog)。

## 使用 API auth token（API 认证令牌）

要配置此凭证，你需要准备：

- **Auth Token（认证令牌）**：开启令牌认证后，在 **Settings（设置）> Tokens（令牌）** 中创建一个认证令牌。更多信息请参阅 [创建认证令牌](https://docs.splunk.com/Documentation/Splunk/9.2.1/Security/CreateAuthTokens)。
- **Base URL（基础网址）**：你的 Splunk 实例地址。应该包含协议、域名和端口，例如：`https://localhost:8089`。
- **Allow Self-Signed Certificates（允许自签名证书）**：如果打开，即使 SSL 验证失败，n8n 也会照常连接。

## 所需的权限（capabilities）

你的 Splunk 平台账号和角色必须拥有某些权限（capabilities）才能创建认证令牌：

- `edit_tokens_own`：如果你想为自己创建令牌，必需。
- `edit_tokens_all`：如果你想为实例上的任何用户创建令牌，必需。

更多信息请参阅 [在 Splunk 平台上用 capabilities 定义角色](https://docs.splunk.com/Documentation/Splunk/9.2.1/Security/Rolesandcapabilities)。
