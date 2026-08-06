---
title: ERPNext 凭证（ERPNext credentials）
description: >-
  ERPNext 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  ERPNext。
contentType:
  - integration
  - reference
nodeTitle: ERPNext 凭证（ERPNext credentials）
originalFilePath: integrations/builtin/credentials/erpnext.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/erpnext'
url: 'https://docs.n8n.io/integrations/builtin/credentials/erpnext'
layout:
  description:
    visible: false
---

# ERPNext 凭证（ERPNext credentials）

> **大白话**：ERPNext 是开源的企业管理软件（ERP，含财务、库存、销售等模块）。n8n 连它需要：**API Key** + **API Secret**（在你自己账号的「API Access」里生成），再加上你的 ERPNext **环境（Environment）**：云版填子域名（Subdomain）和域名（Domain），自托管版填完整的域名地址。想查子域名？看浏览器地址栏就行——`https://` 和 `.erpnext.com`（或 `frappe.cloud`）之间的那串就是。

你可以使用这些凭证来认证以下节点：

- [ERPNext](../app-nodes/n8n-nodes-base.erpnext.md)

## 前置条件（Prerequisites）

- 创建一个 [ERPNext](https://erpnext.com) 账号。

## 支持的认证方式（Supported authentication methods）

- API key

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [ERPNext 的文档](https://docs.erpnext.com/docs/user/manual/en/introduction)。

更多关于框架使用的信息，请参考 [ERPNext 的开发者文档](https://frappeframework.com/docs/user/en/introduction)。

## 使用 API key（Using API key）

要配置这个凭证，你需要：

- 一个 **API Key**：在你自己的 ERPNext 用户账号的 **Settings > My Settings > API Access** 中生成。
- 一个 **API Secret**：和 API key 一起生成。
- 你的 ERPNext **Environment**（环境）：
    - 如果是**云托管（Cloud-hosted）**：
        - 你的 ERPNext **Subdomain**（子域名）：参考 [常见问题](#如何查找云托管-erpnext-账号的子域名how-to-find-the-subdomain-of-an-erpnext-cloud-hosted-account)
        - 你的 **Domain**（域名）：在 `erpnext.com` 和 `frappe.cloud` 之间选择。
    - 如果是**自托管（Self-hosted）**：
        - 你托管 ERPNext 的完整限定 **Domain**（域名）
- 选择是否 **Ignore SSL Issues**（忽略 SSL 问题）：勾选后，即使无法进行 SSL 证书校验，n8n 也会照常连接。

如果你是 ERPNext 的系统管理员（System Manager），也可以为其他用户生成 API key 和 secret。更多信息请参考 [ERPNext 添加用户文档](https://docs.erpnext.com/docs/user/manual/en/adding-users)。

## 如何查找云托管 ERPNext 账号的子域名（How to find the subdomain of an ERPNext cloud-hosted account）

查看你浏览器的地址栏就能找到 ERPNext 子域名。`https://` 与 `.erpnext.com` 或 `frappe.cloud` 之间的那串字符串就是你的子域名。

例如，如果地址栏里的 URL 是 `https://n8n.erpnext.com`，那么子域名就是 `n8n`。
