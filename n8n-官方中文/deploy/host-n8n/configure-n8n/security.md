---
title: 保护 n8n 安全（Securing n8n）
contentType: overview
nodeTitle: 安全（Security）
originalFilePath: hosting/securing/overview.md
originalUrl: 'https://docs.n8n.io/hosting/securing/overview'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/security'
layout:
  description:
    visible: false
---

# 保护 n8n 安全（Securing n8n）

你可以通过多种方式保护自托管的 n8n 实例，以保护凭据[^1]和工作流数据：运行安全审计、设置 SSL 和 SSO、限制节点和公开 API、对执行数据进行脱敏（redact）。

保护你的 n8n 实例安全可以采取多种形式。

{% hint style="info" %}
**小白提示**：自托管 = 数据全在你自己的服务器上，所以安全责任也全在你身上。下面列出的每一项都对应一个「安全动作」，你可以按需选用。最小安全配置建议至少做：开启 SSL（访问加密）、设置好密码策略、定期做安全审计。规模越大、越正式的环境，需要做的越多。
{% endhint %}

从宏观层面看，你可以：

* 进行[安全审计](security/run-security-audits.md)来识别安全风险。
* [设置 SSL](security/set-up-ssl.md) 来强制使用安全连接。
* [设置单点登录（SSO）](security/configure-sso.md) 用于用户账号管理。
* 使用[令牌交换（token exchange）](../deploy-as-an-oem-integration/set-up-token-exchange.md)，在把 n8n 嵌入你自己的产品时，让你的身份提供商（identity provider）为用户登录，或代表他们调用 n8n API。
* 为你的用户启用[双因素认证（2FA）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/verify-user-identity/require-two-factor-auth)。
* 启用[加密密钥轮换（encryption key rotation）](security/rotate-encryption-keys.md)，定期更换用于加密凭据和其他敏感数据的密钥。
* 启用 [OAuth 2.0 凭据的 JWE 令牌解密](security/decrypt-oauth-20-tokens-with-jwe.md)，让你的身份提供商可以加密访问令牌和 ID 令牌，而只有你的实例能解密它们。

你还可以保护工作流处理的敏感数据：

* [对执行数据脱敏](security/redact-execution-data.md)，隐藏工作流执行时的输入和输出数据。

{% hint style="info" %}
**小白提示**：脱敏（redact）= 把敏感内容打码/抹掉。n8n 默认会在执行记录里保存每个节点传入传出的完整数据，万一里面夹着手机号、身份证、密钥等敏感信息，就相当于存在服务器上了。开启脱敏后，执行记录里这些数据会以 `[REDACTED]` 之类的方式显示，防止泄密。
{% endhint %}

更细致地，可以考虑屏蔽或关闭你不想要的功能和数据收集：

* 如果你不使用[公开 API](security/disable-the-public-api.md)，可以禁用它。
* [退出数据收集](security/control-telemetry.md)，即关闭 n8n 自动收集的匿名数据。
* [屏蔽特定节点](security/block-specific-nodes.md)，让某些节点对你的用户不可用。
* [防范 SSRF 攻击](security/enable-ssrf-protection.md)，控制工作流节点可以连接的主机和 IP 范围。
* [限制账号注册](security/verify-user-emails.md)，只允许邮箱已验证的用户注册。

{% hint style="info" %}
**小白提示**：SSRF（Server-Side Request Forgery，服务端请求伪造）是一种攻击手段：攻击者诱导服务器去访问它本不该访问的内网地址（比如你公司内网的其他服务）。n8n 提供防护开关后，你可以规定「工作流里的 HTTP 类节点只能连哪些域名/IP」，把内网敏感地址挡在外面。
{% endhint %}

[^1]: 在 n8n 中，凭据（credentials）用于保存连接到特定应用和服务的认证信息。创建好包含你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）的凭据后，就可以使用对应的应用节点（app node）与该服务交互。
