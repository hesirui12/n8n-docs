---
title: Qualys 凭证
description: >-
  Qualys 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Qualys 的身份。
contentType:
  - integration
  - reference
nodeTitle: Qualys credentials
originalFilePath: integrations/builtin/credentials/qualys.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/qualys'
url: 'https://docs.n8n.io/integrations/builtin/credentials/qualys'
layout:
  description:
    visible: false
---

# Qualys 凭证

{% hint style="info" %}
**大白话**：Qualys 是「云端安全与合规扫描」平台，常用来做漏洞扫描、资产盘点。n8n 连它用的是最朴素的 **Basic auth（账号密码验证）**：填上你在 Qualys 的用户名、密码，再加一个 **Requested With** 字符串（相当于声明「我是谁家的应用」，保持默认的 `n8n application` 就行）。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7QbEnpnpOks3Rq0SiMFb/" %}

## 准备工作

注册一个 [Qualys](https://www.qualys.com/) 用户账号（除 Contact（联系人）之外的任何用户角色都可以）。

## 支持的验证方式

- Basic auth（账号密码验证）

## 相关资源

关于该服务的更多信息，请参考 [Qualys 官方文档](https://qualysguard.qg2.apps.qualys.com/qwebhelp/fo_portal/api_doc/index.htm)。

这是一个「仅凭证」节点（credential-only node），没有自带的可视化操作界面。更多信息请参考[为已有节点添加自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。你也可以在 n8n 官网上查看 [Qualys 示例工作流和相关内容](https://n8n.io/integrations/qualys/)。

## 使用 Basic auth（账号密码验证）

要配置这个凭证，你需要准备：

- **Username（用户名）**
- **Password（密码）**
- **Requested With** 字符串：填写一段用户说明，比如一个 user agent（用户代理），或者保持默认的 `n8n application`。它会设置请求头里必需的 `X-Requested-With` 字段。
