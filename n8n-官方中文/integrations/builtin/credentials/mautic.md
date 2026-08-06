---
title: Mautic 凭证
description: >-
  Mautic 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Mautic 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Mautic credentials
originalFilePath: integrations/builtin/credentials/mautic.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mautic'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mautic'
layout:
  description:
    visible: false
---

# Mautic 凭证

> **大白话**：Mautic 是开源的营销自动化软件（管理客户、群发邮件等）。在 n8n 里连它，要先在 Mautic 后台把 API 功能打开，然后二选一：简单点的「账号密码登录」（Basic auth）或更正规的「OAuth2 授权」。

你可以使用这些凭证来验证以下节点的身份：

- [Mautic](../app-nodes/n8n-nodes-base.mautic.md)
- [Mautic Trigger](../trigger-nodes/n8n-nodes-base.mautictrigger.md)

## 支持的认证方式

- Basic auth（账号密码认证）
- OAuth2（授权码认证）

## 相关资源

关于该服务的更多信息，请参考 [Mautic 的 API 文档](https://developer.mautic.org/#rest-api)。

## 使用 Basic auth（账号密码认证）

{% hint style="info" %}
**需要开启 API**

要配置这个凭证，你的 Mautic 实例必须已启用 API。启用方法见下文[启用 API](#启用-api)。
{% endhint %}

要配置这个凭证，你需要一个 [Mautic](https://www.mautic.org/) 实例上的账号，以及：

- 你的 **URL（地址）**
- 一个 **Username（用户名）**
- 一个 **Password（密码）**

配置步骤如下：

1. 在 Mautic 中，进入 **Configuration > API Settings**（配置 > API 设置）。
2. 如果 **Enable HTTP basic auth?**（启用 HTTP 基本认证？）是 **No**，把它改成 **Yes** 并保存。更多信息请参考 [API 设置文档](https://docs.mautic.org/en/5.x/configuration/settings.html#api-settings)。
3. 在 n8n 中，输入你的 Mautic 实例的 Base **URL**（地址）。
4. 输入你的 Mautic **Username**（用户名）。
5. 输入你的 Mautic **Password**（密码）。

## 使用 OAuth2

{% hint style="info" %}
**需要开启 API**

要配置这个凭证，你的 Mautic 实例必须已启用 API。启用方法见下文[启用 API](#启用-api)。
{% endhint %}

要配置这个凭证，你需要一个 [Mautic](https://www.mautic.org/) 实例上的账号，以及：

- 一个 **Client ID（客户端 ID）**：创建新的 API 凭证时自动生成。
- 一个 **Client Secret（客户端密钥）**：创建新的 API 凭证时自动生成。
- 你的 **URL（地址）**

配置步骤如下：

1. 在 Mautic 中，进入 **Configuration > Settings**（配置 > 设置）。
2. 选择 **API Credentials**（API 凭证）。

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>找不到「API 凭证」菜单？</strong></p><p>如果你在 <strong>Configuration &gt; Settings</strong>（配置 &gt; 设置）下看不到 <strong>API Credentials</strong> 选项，请先确认已经<a href="#启用-api">启用 API</a>。如果启用了仍然看不到，可以试试<a href="https://forum.mautic.org/t/cant-find-api-credentials-menu/10689">手动清理缓存</a>。</p></div>

3. 选择 **Create new client**（创建新客户端）。
4. 选择 **OAuth 2** 作为 **Authorization Protocol**（授权协议）。
5. 为凭证输入一个 **Name（名称）**，比如 `n8n integration`。
6. 在 n8n 中复制 **OAuth Callback URL**（OAuth 回调地址），把它作为 **Redirect URI**（重定向地址）填到 Mautic 里。
7. 选择 **Apply**（应用）。
8. 从 Mautic 复制 **Client ID**，填进 n8n 凭证。
9. 从 Mautic 复制 **Client Secret**，填进 n8n 凭证。
10. 输入你的 Mautic 实例的 Base **URL**（地址）。

更多信息请参考[Mautic 的 API 是什么？](https://kb.mautic.org/article/what-is-mautic-039%3bs-api.html#mcetoc_1g7n1bgoo0)。

## 启用 API

要在你的 Mautic 实例中启用 API：

1. 进入 **Settings > Configuration**（设置 > 配置）。
2. 选择 **API Settings**（API 设置）。
3. 把 **API enabled?**（启用 API？）设为 **Yes**。
4. **Save**（保存）你的更改。

更多信息请参考[如何使用 Mautic API](https://kb.mautic.org/article/what-is-mautic-039;s-api.html)。
