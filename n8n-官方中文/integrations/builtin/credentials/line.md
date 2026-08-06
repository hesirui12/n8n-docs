---
title: Line 凭证
description: >-
  Line 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Line 节点的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Line credentials
originalFilePath: integrations/builtin/credentials/line.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/line'
url: 'https://docs.n8n.io/integrations/builtin/credentials/line'
layout:
  description:
    visible: false
---

# Line 凭证

{% hint style="warning" %}
**已废弃：服务终止**

LINE Notify 已于 2025 年 4 月 1 日停止服务，该节点在那之后不再可用。更多信息请查看 LINE Notify 的[服务终止公告](https://notify-bot.line.me/closing-announce)。
{% endhint %}

{% hint style="info" %}
**大白话**：Line 是日本、东南亚用户超多的聊天软件。这个凭证是给 n8n 的 Line 节点发 LINE Notify（Line 通知）用的——也就是工作流有结果时推一条消息到你的 Line。不过要注意：**LINE Notify 服务已于 2025 年 4 月 1 日停运**，这条凭证基本已经没法用了，除非 Line 官方恢复了它。整个配置走 OAuth2，去 Line Notify 官网注册个服务，把 Client ID 和 Client Secret 抄回来。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Line](../app-nodes/n8n-nodes-base.line.md)

## 支持的验证方式

- Notify OAuth2（通知网页授权）

## 相关资源

关于该服务的更多信息，请参考 [Line Notify 的 API 文档](https://notify-bot.line.me/doc/en/)。

## 使用 Notify OAuth2（通知网页授权）

要配置这个凭证，你需要一个 [Line](https://line.me/en/) 账号，以及：

- 一个 **Client ID（客户端 ID）**
- 一个 **Client Secret（客户端密钥）**

要生成这两个信息，先把 Line 账号连接到 [Line Notify](https://notify-bot.line.me/en/)。然后：

1. 打开 Line Notify 页面，[添加一个新服务](https://notify-bot.line.me/my/services/new)。
2. 输入 **Service name（服务名称）**。当有人尝试连接这个服务时，会显示这个名称。
3. 输入 **Service description（服务描述）**。
4. 输入 **Service URL（服务网址）**。
5. 输入你的 **Company/Enterprise（公司/企业）**。
6. 选择你的 **Country/region（国家/地区）**。
7. 用你的名字或团队名称填写 **Representative（负责人）**。
8. 输入一个有效的 **Email address（邮箱地址）**。Line 会在服务正式注册前验证这个邮箱。请使用你能及时收到邮件的邮箱。
9. 从 n8n 凭证里复制 **OAuth Redirect URL（OAuth 回调地址）**，作为 **Callback URL（回调地址）** 填进 Line Notify。
10. 选择 **Agree and continue（同意并继续）** 以同意服务条款。
11. 核对填写的信息无误后，选择 **Add（添加）**。
12. 查收邮件，打开 Line Notify 的注册链接验证你的邮箱地址。
13. 验证完成后，打开 [**My services（我的服务）**](https://notify-bot.line.me/my/services/)。
14. 选择你刚添加的服务。
15. 复制 **Client ID**，填进你的 n8n 凭证。
16. 选择 **Display（显示）** **Client Secret** 的选项。复制 **Client Secret**，填进你的 n8n 凭证。
17. 在 n8n 里选择 **Connect my account（连接我的账号）**，按屏幕提示完成凭证配置。

更多信息请参考 [Line Notify 的 API 文档](https://notify-bot.line.me/doc/en/) 中的 Authentication（认证）部分。
