---
title: Yahoo
description: >-
  Yahoo IMAP 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Yahoo IMAP 的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Yahoo
originalFilePath: integrations/builtin/credentials/imap/yahoo.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/imap/yahoo'
url: 'https://docs.n8n.io/integrations/builtin/credentials/imap/yahoo'
layout:
  description:
    visible: false
---

# Yahoo IMAP 凭证

{% hint style="info" %}
**大白话**：想让 n8n 用 IMAP 读你的 Yahoo 邮箱，先要生成一个**应用专用密码**（app password，不能用 Yahoo 登录密码），然后按下面填：用户名 = 你的 Yahoo 邮箱，密码 = 应用专用密码，Host = `imap.mail.yahoo.com`，端口 993，打开 SSL/TLS 开关，就搞定了。
{% endhint %}

按下面的步骤，用 Yahoo 账号配置 IMAP 凭证。

## 前提条件

要按本说明操作，你必须先生成一个应用专用密码：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/2ZBcW11hezK8c3JZNsKm/" %}

## 配置凭证

要用 Yahoo Mail 账号配置 IMAP 凭证，请使用这些设置：

1. 在 **User（用户名）** 里填你的 Yahoo 邮箱地址。
2. 在 **Password（密码）** 里填上面生成的应用专用密码。
3. 在 **Host（主机）** 里填 `imap.mail.yahoo.com`。
4. **Port（端口）** 保持默认的 `993`。如果这个端口不通，请咨询你的邮箱管理员。
5. 打开 **SSL/TLS** 开关。
6. 关于是否 **Allow Self-Signed Certificates（允许自签名证书）**，请咨询你的邮箱管理员。

更多信息请参考[为 Yahoo 邮箱设置 IMAP](https://help.yahoo.com/kb/sln4075.html)。
