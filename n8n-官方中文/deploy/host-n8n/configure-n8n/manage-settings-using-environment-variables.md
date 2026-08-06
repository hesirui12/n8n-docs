---
title: 使用环境变量管理实例设置（Manage instance settings using environment variables）
description: >-
  通过环境变量配置自托管 n8n 实例的所有者、SSO、安全策略、日志流、MCP 和社区包。
contentType: overview
nodeTitle: 使用环境变量管理设置（Manage settings using environment variables）
originalFilePath: hosting/configuration/settings-env-vars.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/settings-env-vars'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/manage-settings-using-environment-variables
layout:
  description:
    visible: false
---

# 使用环境变量管理实例设置（Manage instance settings using environment variables）

你可以通过环境变量管理一部分实例设置，而不必通过界面（UI）配置。当你需要自动化批量创建 n8n 实例时（例如通过内部的部署流水线），这非常有用。

每个受支持的配置区域都有一个专门的环境变量，命名为 `<区域名>_MANAGED_BY_ENV`。把这个变量设为 `true`，即可激活该区域的环境变量管理模式。之后 n8n 会应用相关的环境变量，并把对应的界面控件锁定为只读。

{% hint style="info" %}
**小白提示**：这里介绍的是「用配置文件 / 环境变量来管设置」的思路，适合需要批量部署、或者希望设置能被代码审查（review）的场景。一个区域开关打开后，界面上的相关设置项会变成灰色不可编辑，改设置只能通过改环境变量 + 重启来完成——这样就能保证「界面上谁也改不动」，配置完全由你掌控。
{% endhint %}

## 工作原理（How it works）

当你把 `<区域名>_MANAGED_BY_ENV` 设为 `true` 时：

* n8n 会在**每次启动时**从环境变量重新应用这些设置。
* 对应的界面控件会变成**只读**。

当 `<区域名>_MANAGED_BY_ENV` 为 `false`（默认值）时，即使你设置了相关的环境变量，n8n 也会忽略它们。

{% hint style="info" %}
**关闭 `*_MANAGED_BY_ENV` 后，之前的值仍然保留**

把 `*_MANAGED_BY_ENV` 改回 `false` 会恢复界面的写入权限，但会保留最后应用过的值。如果你想修改这些值，之后需要通过界面来编辑。
{% endhint %}

{% hint style="info" %}
**出现意外的只读控件**

如果某个设置显示为只读，而你并没有预期它只读，请检查你的环境中对应的 `*_MANAGED_BY_ENV` 变量是否被设为了 `true`。
{% endhint %}

支持的配置区域及其「激活变量」如下：

* 实例所有者（Instance owner）：`N8N_INSTANCE_OWNER_MANAGED_BY_ENV`
* 单点登录 SSO：`N8N_SSO_MANAGED_BY_ENV`
* 安全策略（Security policy）：`N8N_SECURITY_POLICY_MANAGED_BY_ENV`
* 日志流（Log streaming）：`N8N_LOG_STREAMING_MANAGED_BY_ENV`
* MCP：`N8N_MCP_MANAGED_BY_ENV`
* 社区包（Community packages）：`N8N_COMMUNITY_PACKAGES_MANAGED_BY_ENV`

{% hint style="info" %}
**设置 `<区域名>_MANAGED_BY_ENV` 才能激活整个分组**

某个区域的其他环境变量在 `<区域名>_MANAGED_BY_ENV` 为 `true` 之前都不起作用。把它设为 `true` 才能激活该分组。
{% endhint %}

## 实例所有者（Instance owner）

{% hint style="info" %}
**自 n8n v2.17.0 起可用**


{% endhint %}

可以通过环境变量预先配置（pre-provision）[实例所有者](user-management.md)，而不必走应用内的初始化设置流程。要在初始化之后修改所有者邮箱，请参见 [修改自托管 n8n 的实例所有者邮箱（Change the instance owner email for self-hosted n8n）](change-instance-owner-email.md)。

{% hint style="warning" %}
**`N8N_INSTANCE_OWNER_PASSWORD_HASH` 必须是 bcrypt 哈希值**

这个变量要求填入「已经用 bcrypt 算法哈希过」的值。如果直接填明文密码，会导致登录失败。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/75cM0VtFejV1gnDTFOSV/" %}

{% hint style="info" %}
**小白提示**：`N8N_INSTANCE_OWNER_MANAGED_BY_ENV=true` 意味着「实例所有者账号完全由环境变量管理」。你需要同时提供 `N8N_INSTANCE_OWNER_EMAIL`、`N8N_INSTANCE_OWNER_FIRST_NAME`、`N8N_INSTANCE_OWNER_LAST_NAME` 和 `N8N_INSTANCE_OWNER_PASSWORD_HASH`。这样在全新部署时，n8n 第一次启动就会自动创建好所有者账号，无需人工在界面上走一遍注册流程——非常适合自动化部署。
{% endhint %}

## 单点登录 SSO（SSO）

{% hint style="info" %}
**自 n8n v2.18.0 起可用**


{% endhint %}

{% hint style="info" %}
**功能可用性**

单点登录（Single sign-on）在 Business（商业版）和 Enterprise（企业版）套餐上可用。
{% endhint %}

可以通过环境变量配置[单点登录](security/configure-sso.md)。

### 激活与共享设置（Activation and shared settings）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/TJ7IUBpRrfLoXyEn4T4d/" %}

### OIDC

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/SBpz79jvy94Y5dKIvxqR/" %}

### SAML

{% hint style="warning" %}
**SAML 元数据变量互斥**

只能设置 `N8N_SSO_SAML_METADATA`（内联 XML）或 `N8N_SSO_SAML_METADATA_URL`（URL）中的其中一个，不能同时设置。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/NnYMdwgkElS7TK37owd0/" %}

{% hint style="info" %}
**小白提示**：SSO（单点登录）就是「用一个公司账号系统登录所有系统」。OIDC 和 SAML 是两种主流的 SSO 技术协议：OIDC 更现代，常用于 Google、Microsoft Entra、Okta 等；SAML 更老牌，常用于企业级 IdP（身份提供方）。企业版用户配置好其中一种后，员工就不用单独注册 n8n 账号了。
{% endhint %}

## 安全策略（Security policy）

{% hint style="info" %}
**自 n8n v2.18.0 起可用**


{% endhint %}

可以通过环境变量管理实例的安全策略，包括强制 MFA（多因素认证）和个人空间限制。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/xVIddGVtWAPFZlRYTrwL/" %}

## 日志流（Log streaming）

{% hint style="info" %}
**自 n8n v2.19.0 起可用**


{% endhint %}

可以通过环境变量管理[日志流（log streaming）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems) 的目标位置。每个目标对应的 JSON 结构请参见 [使用环境变量配置（Configure using environment variables）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems#configure-using-environment-variables)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/JvN9TDUUWTwpWaT83YrH/" %}

{% hint style="info" %}
**小白提示**：日志流 = 把 n8n 产生的运行日志实时转发到外部系统（比如你公司的日志平台、Splunk、ELK 等），方便集中监控和排查问题。用环境变量管理后，日志目标可以由部署配置统一决定。
{% endhint %}

## MCP

{% hint style="info" %}
**自 n8n v2.20.0 起可用**


{% endhint %}

可以通过环境变量管理[实例级别的 MCP 访问](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/connect-to-n8n-mcp-server)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Gf4nC8Xoy8uJDma1fIYg/" %}

{% hint style="info" %}
**小白提示**：MCP（Model Context Protocol）是一种让 AI 模型（比如 Claude、ChatGPT 等）与外部工具/系统对接的开放协议。开启后，AI 工具可以通过 MCP 直接调用你 n8n 实例上的工作流能力。
{% endhint %}

## 社区包（Community packages）

{% hint style="info" %}
**自 n8n v2.21.0 起可用**


{% endhint %}

可以通过环境变量管理已安装的[社区包](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/community-nodes/installation-and-management) 集合。n8n 会在每次启动时把「已安装的包」与「列表中的包」进行核对（reconcile）。被管理的包无法通过界面卸载或更新。

`N8N_COMMUNITY_PACKAGES_ENABLED` 也必须设为 `true`（这是默认值）。当社区包被禁用时，n8n 会忽略 `N8N_COMMUNITY_PACKAGES_MANAGED_BY_ENV` 并记录一条警告日志。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/w3ftfKhp9KdsaTfUFHE8/" %}

{% hint style="info" %}
**小白提示**：社区包 = 社区开发者写好的 n8n 节点插件，可以扩展 n8n 的功能。用环境变量管理社区包后，你可以在部署配置里写死「实例必须安装哪几个包、什么版本」，每次启动时 n8n 会自动装上、更新或移除，保证所有实例环境一致。
{% endhint %}

## 综合示例（Combined example）

下面的示例配置了一个实例，把全部六个区域都交给环境变量管理：它会创建实例所有者、配置 OIDC 单点登录、强制启用 MFA、注册一个 Webhook 日志流目标、开启 MCP 访问，并管理一个社区包。

```bash
# Instance owner <a href="#instance-owner" id="instance-owner"></a>
export N8N_INSTANCE_OWNER_MANAGED_BY_ENV=true
export N8N_INSTANCE_OWNER_EMAIL=<owner-email>
export N8N_INSTANCE_OWNER_FIRST_NAME=<first-name>
export N8N_INSTANCE_OWNER_LAST_NAME=<last-name>
export N8N_INSTANCE_OWNER_PASSWORD_HASH=<bcrypt-hash>

# SSO using OIDC <a href="#sso-using-oidc" id="sso-using-oidc"></a>
export N8N_SSO_MANAGED_BY_ENV=true
export N8N_SSO_USER_ROLE_PROVISIONING=instance_role
export N8N_SSO_OIDC_LOGIN_ENABLED=true
export N8N_SSO_OIDC_CLIENT_ID=<client-id>
export N8N_SSO_OIDC_CLIENT_SECRET=<client-secret>
export N8N_SSO_OIDC_DISCOVERY_ENDPOINT=<discovery-url>

# Security policy <a href="#security-policy" id="security-policy"></a>
export N8N_SECURITY_POLICY_MANAGED_BY_ENV=true
export N8N_MFA_ENFORCED_ENABLED=true
export N8N_PERSONAL_SPACE_PUBLISHING_ENABLED=false
export N8N_PERSONAL_SPACE_SHARING_ENABLED=false

# Log streaming <a href="#log-streaming" id="log-streaming"></a>
export N8N_LOG_STREAMING_MANAGED_BY_ENV=true
export N8N_LOG_STREAMING_DESTINATIONS='[{"type":"webhook","url":"https://logs.example.com/n8n"}]'

# MCP <a href="#mcp" id="mcp"></a>
export N8N_MCP_MANAGED_BY_ENV=true
export N8N_MCP_ACCESS_ENABLED=true

# Community packages <a href="#community-packages" id="community-packages"></a>
export N8N_COMMUNITY_PACKAGES_MANAGED_BY_ENV=true
export N8N_COMMUNITY_PACKAGES='[{"name":"n8n-nodes-foo","version":"1.2.3"}]'
```

{% hint style="info" %}
**小白提示**：上面 `#` 开头的是注释，说明下面这一组变量属于哪个区域。尖括号 `<...>` 是占位符，需要替换成你自己的真实值：`<owner-email>` 换成真实邮箱、`<bcrypt-hash>` 换成用 bcrypt 生成的哈希、`<client-id>` / `<client-secret>` 换成 OIDC 提供商给你的值等。如果某个区域你暂时用不到，把这组对应的 `export` 行删掉即可。
{% endhint %}

## 设置环境变量（Set environment variables）

设置环境变量的支持方式，请参见 [配置方式（Configuration methods）](basic-configuration.md)。
