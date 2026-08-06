---
title: Yahoo
description: >-
  Yahoo Send Email 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证通过 Yahoo 验证
  Send Email。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Yahoo
originalFilePath: integrations/builtin/credentials/sendemail/yahoo.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/sendemail/yahoo'
url: 'https://docs.n8n.io/integrations/builtin/credentials/send-email/yahoo'
layout:
  description:
    visible: false
---

# Yahoo Send Email 凭证

> **大白话**：想用 Yahoo 邮箱通过 n8n 发邮件？步骤很简单：先到 Yahoo 生成一个「应用专用密码」，然后把它（不是你的邮箱登录密码）填进 n8n 凭证里，服务器填 `smtp.mail.yahoo.com` 就行。

按照以下步骤，用 Yahoo 账号配置 Send Email 凭证。

## 前置条件

要按这些说明操作，你必须先生成一个应用专用密码：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/2ZBcW11hezK8c3JZNsKm/" %}

## 设置凭证

要把 Send Email 凭证配置为使用 Yahoo Mail：

1. 在 **User** 里填入你的 Yahoo 邮箱地址。
2. 在 **Password** 里填入你上面生成的应用专用密码。
3. 在 **Host** 里填入 `smtp.mail.yahoo.com`。
4. 关于 **Port（端口）**：
    - 使用 SSL 或不确定用什么时，保留默认值 `465`。
    - 使用 TLS 时填 `587`。
5. 打开 **SSL/TLS** 开关。

更多信息请参阅 [Yahoo Mail 的 IMAP 服务器设置](https://help.yahoo.com/kb/sln4075.html)。如果以上设置对你不起作用，请联系你的邮箱管理员确认。
