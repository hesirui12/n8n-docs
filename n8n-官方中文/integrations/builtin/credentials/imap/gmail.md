---
title: Gmail
description: >-
  Gmail IMAP 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Gmail IMAP 的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Gmail
originalFilePath: integrations/builtin/credentials/imap/gmail.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/imap/gmail'
url: 'https://docs.n8n.io/integrations/builtin/credentials/imap/gmail'
layout:
  description:
    visible: false
---

# Gmail IMAP 凭证

{% hint style="info" %}
**大白话**：想让 n8n 用 IMAP 读你的 Gmail 邮件，必须做两步前置准备：① 开启**两步验证**（2-step Verification）；② 生成一个**应用专用密码**（app password）——注意不能用你的 Gmail 登录密码。然后按下面填：用户名 = 你的 Gmail 邮箱，密码 = 应用专用密码，Host = `imap.gmail.com`，端口 993，打开 SSL/TLS 开关，就搞定了。
{% endhint %}

按下面的步骤，用 Gmail 账号配置 IMAP 凭证。

## 前提条件

要按本说明操作，你必须先：

1. 在 Gmail 账号上[开启两步验证](#enable-2-step-verification)。
2. [生成应用专用密码](#generate-an-app-password)。

### 开启两步验证

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ysY7mHC9pN3kCUPncSi8/" %}

### 生成应用专用密码

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/rJn9WooD0IwP7abKawNZ/" %}

## 配置凭证

要用 Gmail 账号配置 IMAP 凭证，请使用这些设置：

1. 在 **User（用户名）** 里填你的 Gmail 邮箱地址。
2. 在 **Password（密码）** 里填上面生成的应用专用密码。
3. 在 **Host（主机）** 里填 `imap.gmail.com`。
4. **Port（端口）** 保持默认的 `993`。如果这个端口不通，请咨询你的邮箱管理员。
5. 打开 **SSL/TLS** 开关。
6. 关于是否 **Allow Self-Signed Certificates（允许自签名证书）**，请咨询你的邮箱管理员。

更多信息请参考[把 Gmail 添加到其他客户端](https://support.google.com/mail/answer/7126229?hl=en)。如果你是 2024 年 6 月之前注册的个人 Google 账号，可能需要 **Enable IMAP（启用 IMAP）**。
