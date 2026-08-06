---
title: SyncroMSP 凭证
description: >-
  SyncroMSP 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  SyncroMSP 的身份。
contentType:
  - integration
  - reference
nodeTitle: SyncroMSP credentials
originalFilePath: integrations/builtin/credentials/syncromsp.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/syncromsp'
url: 'https://docs.n8n.io/integrations/builtin/credentials/syncromsp'
layout:
  description:
    visible: false
---

# SyncroMSP 凭证

{% hint style="info" %}
**大白话**：SyncroMSP 是给 IT 服务商用的「托管服务平台」（管理客户的电脑、工单等）。n8n 连它需要两样东西：**API Token（API 令牌，在 SyncroMSP 里叫 API token）** 和你的 **Subdomain（子域名）**。子域名就是你 SyncroMSP 网址里 `https://` 和 `.syncromsp.com` 之间的那部分。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [SyncroMSP](../app-nodes/n8n-nodes-base.syncromsp.md)

## 先决条件

注册一个 [SyncroMSP](https://syncromsp.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [SyncroMSP 官方 API 文档](https://api-docs.syncromsp.com/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 一个 **API Key（API 密钥）**：在 SyncroMSP 里它叫 **API token**。要创建 API token，进入**用户菜单 > Profile/Password（资料/密码）> API Tokens（API 令牌）**，选择 **Create New Token（创建新令牌）** 选项。选择 **Custom Permissions（自定义权限）** 可以为你的令牌起名，并按你的需求调整权限。
- 你的 **Subdomain（子域名）**：填写你的 SyncroMSP 子域名。它显示在你的 SyncroMSP 网址里，位于 `https://` 和 `.syncromsp.com` 之间。如果你的完整网址是 `https://n8n-instance.syncromsp.com`，那么子域名就填 `n8n-instance`。

关于创建新令牌的更多信息，请参考 [API Tokens（API 令牌）](https://docs.syncromsp.com/imported/api-tokens)。
