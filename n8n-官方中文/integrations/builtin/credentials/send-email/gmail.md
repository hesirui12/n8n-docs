---
title: Gmail
description: >-
  Gmail Send Email 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证通过 Gmail 验证
  Send Email。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Gmail
originalFilePath: integrations/builtin/credentials/sendemail/gmail.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/sendemail/gmail'
url: 'https://docs.n8n.io/integrations/builtin/credentials/send-email/gmail'
layout:
  description:
    visible: false
---

# Gmail Send Email 凭证

> **大白话**：想用你的 Gmail 邮箱通过 n8n 发邮件？这篇文档手把手教你：先开启「两步验证」，再生成一个「应用专用密码」，最后把这些信息填进 n8n 凭证里。注意：**千万别把 Gmail 登录密码直接填进去，要用应用专用密码**。

按照以下步骤，用 Gmail 账号配置 Send Email 凭证。

## 前置条件

要按这些说明操作，你必须先：

1. 在你的 Gmail 账号上[开启两步验证](#enable-2-step-verification)。
2. [生成应用专用密码](#generate-an-app-password)。

### 开启两步验证

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ysY7mHC9pN3kCUPncSi8/" %}

### 生成应用专用密码

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/rJn9WooD0IwP7abKawNZ/" %}

## 设置凭证

要把 Send Email 凭证设置为使用 Gmail：

1. 在 **User** 里填入你的 Gmail 邮箱地址。
2. 在 **Password** 里填入你上面生成的应用专用密码。
3. 在 **Host** 里填入 `smtp.gmail.com`。
4. 关于 **Port（端口）**：
    - 使用 SSL 或不确定用什么时，保留默认值 `465`。
    - 使用 TLS 时填 `587`。
5. 打开 **SSL/TLS** 开关。

更多信息请参阅 [使用 POP 在其它邮件客户端上读取 Gmail 邮件](https://support.google.com/mail/answer/7104828?hl=en) 中的「发送邮件（SMTP）服务器」设置。如果以上设置对你不起作用，请联系你的邮箱管理员确认。
