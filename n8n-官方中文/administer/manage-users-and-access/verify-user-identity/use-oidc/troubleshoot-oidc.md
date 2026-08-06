---
title: OIDC SSO 故障排查（Troubleshooting for OIDC SSO）
description: OIDC 在 n8n 中需要注意的事项和故障排查
contentType: howto
nodeTitle: OIDC 故障排查（Troubleshoot OIDC）
originalFilePath: user-management/oidc/troubleshooting.md
originalUrl: 'https://docs.n8n.io/user-management/oidc/troubleshooting'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-oidc/troubleshoot-oidc
layout:
  description:
    visible: false
---

# OIDC SSO 故障排查（Troubleshooting OIDC SSO）

{% hint style="info" %}
**小白解释：** 这一页专门讲 OIDC 登录时可能遇到的两个「已知问题」：state 参数和 PKCE。这两个都是安全机制，n8n 目前还没有完整支持。如果你遇到登录报错，先看下面的内容，很可能就是这两个原因之一；解决办法一般是去你的 IdP 设置里把这些要求关掉。
{% endhint %}

## 已知问题（Known issues）

### 不支持 state 参数（State parameter not supported）

当使用强制使用 `state` CSRF 令牌参数的 OIDC 提供商时，认证会失败并出现以下错误：

```json
{"code":0,"message":"authorization response from the server is an error"}
```

n8n 当前的 OIDC 实现不处理某些 OIDC 提供商作为针对 CSRF 攻击的安全措施而发送的 `state` 参数。

目前，唯一的解决办法是：如果可能的话，配置你的 OIDC 提供商禁用 `state` 参数。

n8n 正在开发中，计划在未来的版本中添加对 OIDC `state` 参数的完整支持。

{% hint style="info" %}
**小白解释：** `state` 参数是浏览器登录跳转时附带的一串「防伪标记」，用来防止黑客伪造登录请求。n8n 暂时不认识这个标记，所以对方强制要求时就会报错。遇到这个报错，就去 IdP 设置里找到相关的 state/CSRF 选项关掉，这是当前唯一的绕行办法。
{% endhint %}

### 不支持 PKCE（PKCE not supported）

要求 PKCE（Proof Key for Code Exchange，代码交换证明密钥）的 OIDC 提供商可能会让认证失败，或拒绝 n8n 的授权请求。n8n 当前的 OIDC 实现不支持 PKCE。

唯一的解决办法是：如果该选项在你的提供商设置中可用，请配置你的 OIDC 提供商对 n8n 客户端不要求 PKCE。

n8n 计划在未来的版本中添加 PKCE 支持。

{% hint style="info" %}
**小白解释：** PKCE 是另一种让登录流程更安全的技术，主要用在移动应用和单页网站里。如果你的 IdP 强制要求 PKCE（比如某些配置下的 Keycloak），n8n 会连不上。解决办法同样是在 IdP 里针对 n8n 这个客户端关掉「要求 PKCE」的选项。如果关不掉，就需要等 n8n 后续版本支持。
{% endhint %}
