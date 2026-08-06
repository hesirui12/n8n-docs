---
title: Slack 凭证
description: >-
  Slack 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来验证
  Slack。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Slack 凭证
originalFilePath: integrations/builtin/credentials/slack.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/slack'
url: 'https://docs.n8n.io/integrations/builtin/credentials/slack'
layout:
  description:
    visible: false
---

# Slack 凭证

> **大白话**：Slack 是团队协作聊天工具。这篇文档教你怎么在 n8n 里配置 Slack 凭证。**两种方式选一种**：① 用「API access token（访问令牌）」——需要在 Slack 创建一个应用（推荐用官方给的 JSON 配置一键创建），拿到 Bot User OAuth Token 填进 n8n，**这种方式是 Slack Trigger（触发）节点唯一能用的**；② 用 OAuth2——n8n 弹窗授权登录，更安全，推荐给 Slack 节点用，但 Trigger 节点不支持。表格里的「Scopes」就是应用的权限清单，翻译后附了中文注释。

你可以使用这些凭证来验证以下节点：

- [Slack](../app-nodes/n8n-nodes-base.slack/README.md)
- [Slack Trigger](../trigger-nodes/n8n-nodes-base.slacktrigger.md)

## 支持的认证方式

- API access token（API 访问令牌）：
    - [Slack Trigger](../trigger-nodes/n8n-nodes-base.slacktrigger.md) 节点必需。
    - 也可以用于 [Slack](../app-nodes/n8n-nodes-base.slack/README.md) 节点，但不推荐。
- OAuth2：
    - [Slack](../app-nodes/n8n-nodes-base.slack/README.md) 节点的推荐方式。
    - 不适用于 [Slack Trigger](../trigger-nodes/n8n-nodes-base.slacktrigger.md) 节点。

## 相关资源

关于该服务的更多信息，请参阅 [Slack 的 API 文档](https://api.slack.com/apis)。

## 使用 API access token（API 访问令牌）

要配置此凭证，你需要一个 [Slack](https://slack.com/) 账号，以及：

- **Access Token（访问令牌）**

要生成访问令牌，需要创建一个 Slack 应用。n8n 推荐从清单（manifest）创建应用，这样可以一次性配置好所有权限范围：

{% tabs %}
{% tab title="从清单（manifest）创建" %}
1. 打开你的 [Slack API Apps](https://api.slack.com/apps) 页面。
2. 选择 **Create New App（创建新应用）> From a manifest（从清单创建）**。
3. 选择你要开发应用的 **Workspace（工作区）**，然后选择 **Next（下一步）**。
4. 选择 **JSON** 选项卡，用下面的 JSON 替换默认清单。如有需要，可以调整[权限范围](#scopes)。
5. 选择 **Next（下一步）**。
6. 查看摘要后选择 **Create（创建）**。应用详情页会打开。

```json
{
	"display_information": {
		"name": "n8n integration"
	},
	"features": {
		"bot_user": {
			"display_name": "n8n integration"
		}
	},
	"oauth_config": {
		"scopes": {
			"bot": [
				"channels:read",
				"channels:history",
				"chat:write",
				"files:read",
				"files:write",
				"groups:read",
				"groups:history",
				"im:read",
				"im:history",
				"mpim:read",
				"mpim:history",
				"reactions:read",
				"reactions:write",
				"usergroups:read",
				"usergroups:write",
				"users.profile:read",
				"users:read"
			]
		}
	},
	"settings": {
		"org_deploy_enabled": false,
		"socket_mode_enabled": false,
		"token_rotation_enabled": false
	}
}
```
{% endtab %}

{% tab title="从头创建" %}
1. 打开你的 [Slack API Apps](https://api.slack.com/apps) 页面。
2. 选择 **Create New App（创建新应用）> From scratch（从头创建）**。
3. 输入 **App Name（应用名称）**。
4. 选择你要开发应用的 **Workspace（工作区）**。
5. 选择 **Create App（创建应用）**。应用详情页会打开。
6. 在左侧菜单的 **Features（功能）** 下，选择 **OAuth & Permissions（OAuth 与权限）**。
7. 在 **Scopes（权限范围）** 部分，为你的应用选择合适的权限范围。推荐的权限范围列表请参阅 [权限范围](#scopes)。
{% endtab %}
{% endtabs %}

然后安装应用并复制令牌：

1. 在左侧菜单的 **Features（功能）** 下，选择 **OAuth & Permissions（OAuth 与权限）**。
2. 在 **OAuth Tokens（OAuth 令牌）** 部分，选择 **Install to Workspace（安装到工作区）**。你必须是 Slack 工作区管理员才能完成此操作。
3. 选择 **Allow（允许）**。
4. 复制 **Bot User OAuth Token（机器人用户 OAuth 令牌）**，把它填入 n8n 凭证的 **Access Token** 字段。
5. 如果你要把此凭证用于 [Slack Trigger](../trigger-nodes/n8n-nodes-base.slacktrigger.md)，请按照 [Slack Trigger 配置](#slack-trigger-configuration) 中的步骤完成应用设置。

更多信息请参阅 Slack API [快速入门](https://api.slack.com/quickstart)。

### Slack Trigger 配置

要把你的 Slack 应用与 [Slack Trigger](../trigger-nodes/n8n-nodes-base.slacktrigger.md) 节点一起使用：

1. 前往 Slack 中的 [Your Apps（你的应用）](https://api.slack.com/apps/)，选择你要使用的应用。
2. 前往 **Features（功能）** > **Event Subscriptions（事件订阅）**。
3. 打开 **Enable Events（启用事件）** 开关。
4. 在 n8n 中复制 **Webhook URL**，填入你的 Slack 应用的 **Request URL（请求地址）**。<br>

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>Request URL（请求地址）</strong></p><p>Slack 每个应用只允许一个请求地址。如果你想测试工作流，需要选择以下方式之一：</p><ul><li>先用你的 <strong>Test URL（测试地址）</strong> 测试，确认一切正常后，再把 Slack 应用改成使用 <strong>Production URL（生产地址）</strong></li><li>使用带执行日志的 <strong>Production URL（生产地址）</strong>。</li></ul></div>

5. 验证通过后，选择要订阅的机器人事件。使用 n8n 中的 **Trigger on（触发条件）** 字段来过滤这些请求。
    - 要使用列表中不存在的事件，把它添加为机器人事件，并在 n8n 节点中选择 **Any Event（任意事件）**。

更多信息请参阅 [快速入门 | 为事件监听配置应用](https://api.slack.com/quickstart#listening)。

{% hint style="info" %}
Slack 验证 **Request URL** 后，你也可以在应用的清单中管理事件订阅：前往 **Settings（设置）** > **App Manifest（应用清单）**，编辑 `settings.event_subscriptions` 块。
{% endhint %}

n8n 建议为你的 Slack Trigger 启用请求签名验证，以增强安全性：

1. 前往 Slack 中的 [Your Apps（你的应用）](https://api.slack.com/apps/)，选择你要使用的应用。
2. 前往 **Settings（设置）** > **Basic Information（基本信息）**。
3. 复制 **Signing Secret（签名密钥）** 的值。
4. 在 n8n 中，把这个值粘贴到凭证的 **Signature Secret（签名密钥）** 字段。

**Signature Secret** 字段也是 [Slack 审批功能](../app-nodes/n8n-nodes-base.slack/approvals.md) 所必需的。

## 使用 OAuth2

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

如果你是[自托管 n8n](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n)，需要从头配置 OAuth2，那么你需要一个 [Slack](https://slack.com/) 账号，以及：

- **Client ID**
- **Client Secret**

要同时获得这两项，请创建一个 Slack 应用。n8n 推荐从清单（manifest）创建应用，这样可以一次性配置好权限范围和重定向地址：

{% tabs %}
{% tab title="从清单（manifest）创建" %}
1. 在 n8n 中，从你的 Slack 凭证里复制 **OAuth Callback URL（OAuth 回调地址）**。
2. 打开你的 [Slack API Apps](https://api.slack.com/apps) 页面。
3. 选择 **Create New App（创建新应用）> From a manifest（从清单创建）**。
4. 选择你要开发应用的 **Workspace（工作区）**，然后选择 **Next（下一步）**。
5. 选择 **JSON** 选项卡，用下面的 JSON 替换默认清单。把 `<your-oauth-callback-url>` 替换成你从 n8n 复制的地址，如有需要再调整[权限范围](#scopes)。
6. 选择 **Next（下一步）**。
7. 查看摘要后选择 **Create（创建）**。应用详情页会打开。

```json
{
	"display_information": {
		"name": "n8n integration"
	},
	"features": {
		"bot_user": {
			"display_name": "n8n integration"
		}
	},
	"oauth_config": {
		"redirect_urls": [
			"<your-oauth-callback-url>"
		],
		"scopes": {
			"bot": [
				"channels:read",
				"channels:history",
				"chat:write",
				"files:read",
				"files:write",
				"groups:read",
				"groups:history",
				"im:read",
				"im:history",
				"mpim:read",
				"mpim:history",
				"reactions:read",
				"reactions:write",
				"usergroups:read",
				"usergroups:write",
				"users.profile:read",
				"users:read"
			],
			"user": [
				"channels:write",
				"search:read",
				"stars:read",
				"stars:write",
				"users.profile:write"
			]
		}
	},
	"settings": {
		"org_deploy_enabled": false,
		"socket_mode_enabled": false,
		"token_rotation_enabled": false
	}
}
```

<details>

<summary>仅用户权限范围的清单（Manifest with user scopes only）</summary>

一些 Slack API 端点（包括 Slack 的 MCP 端点）只支持用户令牌（user token），不支持机器人令牌（bot token）。如果你需要用户令牌，请使用这个清单。它会把所有权限范围都申请为用户权限范围：

```json
{
	"display_information": {
		"name": "n8n integration"
	},
	"oauth_config": {
		"redirect_urls": [
			"<your-oauth-callback-url>"
		],
		"scopes": {
			"user": [
				"channels:read",
				"channels:write",
				"channels:history",
				"chat:write",
				"files:read",
				"files:write",
				"groups:read",
				"groups:history",
				"im:read",
				"im:history",
				"mpim:read",
				"mpim:history",
				"reactions:read",
				"reactions:write",
				"stars:read",
				"stars:write",
				"usergroups:read",
				"usergroups:write",
				"users.profile:read",
				"users.profile:write",
				"users:read",
				"search:read"
			]
		}
	},
	"settings": {
		"org_deploy_enabled": false,
		"socket_mode_enabled": false,
		"token_rotation_enabled": false
	}
}
```

</details>
{% endtab %}

{% tab title="从头创建" %}
1. 打开你的 [Slack API Apps](https://api.slack.com/apps) 页面。
2. 选择 **Create New App（创建新应用）> From scratch（从头创建）**。
3. 输入 **App Name（应用名称）**。
4. 选择你要开发应用的 **Workspace（工作区）**。
5. 选择 **Create App（创建应用）**。应用详情页会打开。
6. 在左侧菜单的 **Features（功能）** 下，选择 **OAuth & Permissions（OAuth 与权限）**。
7. 在 **Redirect URLs（重定向地址）** 部分，选择 **Add New Redirect URL（添加新的重定向地址）**。
8. 从 n8n 复制 **OAuth Callback URL（OAuth 回调地址）**，把它作为新的 Redirect URL 填入 Slack。
9. 选择 **Add（添加）**。
10. 选择 **Save URLs（保存地址）**。
11. 在 **Scopes（权限范围）** 部分，为你的应用选择合适的权限范围。权限范围列表请参阅 [权限范围](#scopes)。
{% endtab %}
{% endtabs %}

然后把应用连接到 n8n：

1. 在 **Settings（设置）> Basic Information（基本信息）** 中，打开 **App Credentials（应用凭证）** 部分。
2. 复制 **Client ID** 和 **Client Secret**，粘贴到 n8n 中对应的字段。
3. 在左侧菜单的 **Features（功能）** 下，选择 **OAuth & Permissions（OAuth 与权限）**。
4. 在 **OAuth Tokens（OAuth 令牌）** 部分，选择 **Install to Workspace（安装到工作区）**。你必须是 Slack 工作区管理员才能完成此操作。
5. 选择 **Allow（允许）**。
6. 到这一步，你应该可以在 n8n 凭证中点击 OAuth 按钮进行连接了。

更多信息请参阅 Slack API [快速入门](https://api.slack.com/quickstart)。关于 OAuth 流程本身的更多细节，请参阅 Slack 的 [使用 OAuth 安装](https://api.slack.com/authentication/oauth-v2) 文档。

## 权限范围（Scopes）

权限范围决定了应用拥有哪些权限。

* 如果你希望应用代表授权它的用户来操作，请在 **User Token Scopes（用户令牌权限范围）** 部分添加所需权限。
* 如果你在构建机器人，请在 **Bot Token Scopes（机器人令牌权限范围）** 部分添加所需权限。

下面是 OAuth 凭证所需的权限范围列表，也是很好的起点。上面的应用清单已经包含了这些权限范围：

| **Scope name（权限范围名）** | **说明（Notes）** |
|-----------------------| -- |
| `channels:read`       | 读取频道信息 |
| `channels:write`      | 不可作为机器人令牌权限范围使用 |
| `channels:history`    | 读取频道历史消息 |
| `chat:write`          | 发送消息 |
| `files:read`          | 读取文件 |
| `files:write`         | 上传/写入文件 |
| `groups:read`         | 读取私密群组信息 |
| `groups:history`      | 读取私密群组历史消息 |
| `im:read`             | 读取私信（IM）信息 |
| `im:history`          | 读取私信历史消息 |
| `mpim:read`           | 读取多人私信（MPIM）信息 |
| `mpim:history`        | 读取多人私信历史消息 |
| `reactions:read`      | 读取表情回应 |
| `reactions:write`     | 添加/移除表情回应 |
| `stars:read`          | 不可作为机器人令牌权限范围使用 |
| `stars:write`         | 不可作为机器人令牌权限范围使用 |
| `usergroups:read`     | 读取用户组 |
| `usergroups:write`    | 管理用户组 |
| `users.profile:read`  | 读取用户资料 |
| `users.profile:write` | 不可作为机器人令牌权限范围使用 |
| `users:read`          | 读取用户信息 |
| `search:read`         | 不可作为机器人令牌权限范围使用 |

## 常见问题

### 令牌过期（Token expired）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/aLQxqepKmNn7Oz3PDTB7/" %}
