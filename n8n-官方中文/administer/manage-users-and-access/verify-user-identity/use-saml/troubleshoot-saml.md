---
title: SAML SSO 故障排查（Troubleshooting SAML SSO）
description: 遇到 SAML 问题时需要检查的事项清单。
contentType: howto
nodeTitle: SAML 故障排查（Troubleshoot SAML）
originalFilePath: user-management/saml/troubleshooting.md
originalUrl: 'https://docs.n8n.io/user-management/saml/troubleshooting'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-saml/troubleshoot-saml
layout:
  description:
    visible: false
---

# SAML SSO 故障排查（Troubleshooting SAML SSO）

{% hint style="info" %}
**小白解释：** 测试 SAML 登录报错时，绝大多数问题出在「配置两边没对上」：要么 IdP 里的应用类型不对，要么 n8n 的地址填错了位置，要么粘贴的元数据 XML 有问题。按下面的三个问题逐个检查，基本能解决九成的情况。
{% endhint %}

如果在测试你的 SAML 设置时遇到错误，请检查以下事项：

* 你在 IdP 中创建的应用是否支持 SAML？
* 你是否在 IdP 的正确字段中输入了 n8n 的重定向 URL（redirect URL）和实体 ID（entity ID）？
* 元数据 XML 是否正确？检查你复制到 n8n 的元数据格式是否正确。

如需更多支持，请使用[论坛（forum）](https://community.n8n.io/)，如果你有付费支持套餐，也可以联系你的支持代表。
