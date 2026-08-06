---
title: Odoo 凭证
description: >-
  Odoo 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Odoo 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Odoo credentials
originalFilePath: integrations/builtin/credentials/odoo.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/odoo'
url: 'https://docs.n8n.io/integrations/builtin/credentials/odoo'
layout:
  description:
    visible: false
---

# Odoo 凭证

{% hint style="info" %}
**大白话**：Odoo 是一套开源的 ERP/企业管理软件（客户管理、销售、库存、财务等模块一体）。n8n 想操作你的 Odoo 数据，需要填四样：**Site URL（你的 Odoo 网站地址）**、**Username（用户名）**、**Database name（数据库名）**，再加上密码或 API key。推荐用 **API key（API 密钥）**：在 Odoo 里打开「个人资料 > 偏好设置 > 账号安全 > Developer API Keys」生成一个，比直接填密码更安全、兼容性更好。注意：外部 API 功能只有 Odoo 的 **Custom（定制版）** 付费方案才开放，免费版用不了。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Odoo](../app-nodes/n8n-nodes-base.odoo.md)

## 支持的验证方式

- API key（API 密钥，推荐）
- Password（密码）

## 相关资源

关于该服务的更多信息，请参考 [Odoo 官方外部 API 文档](https://www.odoo.com/documentation/17.0/developer/reference/external_api.html)。

如果你是 Odoo 新手，请参考 Odoo 的 [Getting Started（入门）教程](https://www.odoo.com/slides/getting-started-15)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Odoo](https://www.odoo.com/) 数据库上的用户账号，以及：

- 你的 **Site URL（网站地址）**
- 你的 **Username（用户名）**
- 一个 **API key（API 密钥）**
- 你的 **Database name（数据库名）**

用 API key 设置凭证：

1. 把 Odoo 服务器或网站地址填为 **Site URL（网站地址）**。
2. 输入你的 **Username（用户名）**，和你在 Odoo 的 **Change password（修改密码）** 界面显示的用户名一致。
4. 要使用 API key，进入 **Your Profile（你的个人资料）> Preferences（偏好设置）> Account Security（账号安全）> Developer API Keys（开发者 API 密钥）**。
    - 如果你没有这个选项，可能需要升级你的 Odoo 套餐。更多信息请参考 [所需套餐类型](#所需套餐类型)。
5. 选择 **New API Key（新建 API 密钥）**。
6. 给这个密钥输入一个 **Description（描述）**，比如 `n8n integration`。
7. 选择 **Generate Key（生成密钥）**。
8. 复制这个密钥，作为 **Password or API key（密码或 API 密钥）** 填到你的 n8n 凭证里。
9. 输入你的 Odoo **Database name（数据库名）**，也叫实例名（instance name）。

更多信息请参考 [Odoo API Keys（API 密钥）](https://www.odoo.com/documentation/15.0/developer/reference/external_api.html?#api-keys)。

## 使用 password（密码）

要配置这个凭证，你需要一个 [Odoo](https://www.odoo.com/) 数据库上的用户账号，以及：

- 你的 **Site URL（网站地址）**
- 你的 **Username（用户名）**
- 你的 **Password（密码）**
- 你的 **Database name（数据库名）**

用密码设置凭证：

1. 把 Odoo 服务器或网站地址填为 **Site URL（网站地址）**。
2. 输入你的 **Username（用户名）**，和你在 Odoo 的 **Change password（修改密码）** 界面显示的用户名一致。
3. 要使用密码，把用户密码填进 **Password or API key（密码或 API 密钥）** 字段。
4. 输入你的 Odoo **Database name（数据库名）**，也叫实例名（instance name）。

{% hint style="info" %}
**密码兼容性**

如果你用密码凭证在某个节点功能上不生效，试试换成 API key。某些模块或某些设置下，Odoo 要求使用 API key。
{% endhint %}

## 所需套餐类型

{% hint style="info" %}
**所需套餐类型**

外部 API 访问权限只在 Odoo 的 **Custom（定制版）** 套餐上可用。（One App Free 免费版或 Standard 标准版套餐都不提供该权限。）

更多信息请参考 [Odoo 定价套餐](https://www.odoo.com/pricing-plan)。
{% endhint %}
