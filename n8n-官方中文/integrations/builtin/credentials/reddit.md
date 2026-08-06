---
title: Reddit 凭证
description: >-
  Reddit 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Reddit 的身份。
contentType:
  - integration
  - reference
nodeTitle: Reddit credentials
originalFilePath: integrations/builtin/credentials/reddit.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/reddit'
url: 'https://docs.n8n.io/integrations/builtin/credentials/reddit'
layout:
  description:
    visible: false
---

# Reddit 凭证

{% hint style="info" %}
**大白话**：Reddit 是著名的「社区论坛」网站。n8n 连它用的是 OAuth2，需要 **Client ID（客户端 ID）** 和 **Client Secret（客户端密钥）**。注意：2025 年 11 月起 Reddit 收紧了公共数据 API 的开放，**要先人工申请批准**才能创建应用——先提交申请，批准后再去创建第三方应用拿密钥。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Reddit](../app-nodes/n8n-nodes-base.reddit.md)

## 准备工作

注册一个 [Reddit](https://reddit.com/) 账号。

## 支持的验证方式

- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Reddit 开发者文档](https://support.reddithelp.com/hc/en-us/articles/14945211791892-Developer-Platform-Accessing-Reddit-Data)。

## 使用 OAuth2

要配置这个凭证，你需要准备：

- **Client ID（客户端 ID）**
- **Client Secret（客户端密钥）**

{% hint style="warning" %}
**API 访问需要预先批准**

Reddit 在 2025 年 11 月关闭了公共数据 API 的自助访问。现在，Reddit 要求先获得人工批准，之后才能创建新应用。请先阅读 Reddit 的[负责任开发者政策（Responsible Builder Policy）](https://support.reddithelp.com/hc/en-us/articles/42728983564564-Responsible-Builder-Policy)，并通过 [Reddit 开发者支持表单](https://support.reddithelp.com/hc/en-us/requests/new?ticket_form_id=14868593862164)提交申请。
{% endhint %}

获批之后，创建一个[第三方应用](https://www.reddit.com/prefs/apps)。访问上面这个链接，或者进入你的 **profile（个人资料）> Settings（设置）> Privacy（隐私）> Third-party app authorizations（第三方应用授权）> are you a developer? create an app（你是开发者吗？创建应用）**，然后使用以下设置：

- 把 n8n 里的 **OAuth Callback URL（OAuth 回调地址）** 复制过来，作为应用的 **redirect uri（重定向地址）**。
- 应用的 client ID（客户端 ID）会显示在应用名称下方。复制它作为 n8n 的 **Client ID**。
- 复制应用的 **secret（密钥）** 作为 n8n 的 **Client Secret**。
