---
title: 设置 OIDC（Set up OIDC）
description: 在 n8n 中启用 OIDC SSO 的设置说明。
contentType: howto
nodeTitle: 设置 OIDC（Set up OIDC）
originalFilePath: user-management/oidc/setup.md
originalUrl: 'https://docs.n8n.io/user-management/oidc/setup'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-oidc/set-up-oidc
layout:
  description:
    visible: false
---

# 设置 OIDC（Set up OIDC）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/3sB2Mxc1yXYEg1FeAYjK/" %}

{% hint style="info" %}
**使用环境变量配置（Configure using environment variables）**

你也可以通过环境变量而不是界面来配置 OIDC。从 n8n v2.18.0 开始可用。参见[SSO 环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/sso)。
{% endhint %}

{% hint style="info" %}
**小白解释：** OIDC 设置的整体思路分三步：① 在 n8n 里拿到「重定向 URL（redirect URL）」——这是登录成功后身份提供方把人「送回」n8n 的地址；② 去你的身份提供方（IdP，比如 Okta、Auth0、Azure AD、Google）注册一个 OIDC 应用，拿到「客户端 ID（Client ID）」和「客户端密钥（Client Secret）」，并把重定向 URL 填进去；③ 把发现端点（Discovery Endpoint，一个自动公布配置信息的网址）和客户端信息填回 n8n，保存并激活。三步做完，SSO 就通了。
{% endhint %}

## 设置并启用 OIDC（Setting up and enabling OIDC）

1. 在 n8n 中，前往 **设置（Settings）** > **SSO**。
1. 在**选择认证协议（Select Authentication Protocol）**下，从下拉菜单中选择 **OIDC**。
1. 复制显示的**重定向 URL（redirect URL）**（例如 `https://yourworkspace.app.n8n.cloud/rest/sso/oidc/callback`）。<br>

	<div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>负载均衡器或代理的额外配置（Extra configuration for load balancers or proxies）</strong></p><p>如果你在负载均衡器后面运行 n8n，请务必设置 <a href="https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment"><code>N8N_EDITOR_BASE_URL</code> 环境变量</a>。</p></div>

1. 在你的身份提供方（IdP）中设置 OIDC。你需要：
	- 在你的 IdP 中创建一个新的 OIDC 客户端/应用程序。
	- 配置上一步的重定向 URL。
	- 记下你的 IdP 提供的**客户端 ID（Client ID）**和**客户端密钥（Client Secret）**。
1. 在你的 IdP 中找到**发现端点（Discovery Endpoint）**（也称为 well-known 配置端点）。它通常具有以下格式：
	```
	https://your-idp-domain/.well-known/openid-configuration
	```
1. 在 n8n 中完成 OIDC 配置：
	- **发现端点（Discovery Endpoint）**：输入来自你 IdP 的发现端点 URL。
	- **客户端 ID（Client ID）**：输入在 IdP 注册应用程序时获得的客户端 ID。
	- **客户端密钥（Client Secret）**：输入在 IdP 注册应用程序时获得的客户端密钥。
1. 选择 **保存设置（Save settings）**。
1. 将 OIDC 设置为**已激活（Activated）**。

{% hint style="info" %}
**小白解释：** 「发现端点」是一个公开的网址，专门用来告诉 n8n 你的 IdP 支持哪些登录功能、各种接口地址在哪里。所以 n8n 只需要这一个 URL，剩下的细节都能自动拿到——这也是为什么 OIDC 配置比老协议简单。
{% endhint %}

### 实例和项目访问供给（Instance and project access provisioning）

n8n 支持通过 SSO 供给实例角色和项目角色。当用户通过 OIDC 登录时，n8n 可以根据 IdP 响应中的声明（claims）自动分配他们的实例角色和项目访问权限。

角色供给功能在版本 `1.122.2` 中引入。

{% hint style="info" %}
**小白解释：** 「供给（provisioning）」在这里的意思是「自动发权限」。以前用户登录后，管理员要手动在 n8n 里给他们分配角色；开启供给后，n8n 自动读取 IdP 发来的身份信息里的角色声明，自动给用户安排对应的实例角色和项目权限。省去人工操作，也避免漏配。
{% endhint %}

#### 选择角色的分配方式（Choose how roles are assigned）

在 n8n 中，前往 **设置（Settings）** > **SSO**。使用**角色分配（Role assignment）**下拉菜单选择 n8n 如何为通过 SSO 登录的用户分配角色。默认是**在 n8n 中手动分配（Assigned manually in n8n）**。

选项如下：

- **在 n8n 中手动分配（Assigned manually in n8n）**：管理员直接在 n8n 中分配每个角色。不从你的 IdP 进行任何自动映射。
- **通过 SSO 分配实例角色（Instance roles via SSO）**：n8n 在登录时从 IdP 读取用户的实例角色。项目访问权限仍然在 n8n 中手动管理。
- **通过 SSO 分配实例和项目角色（Instance and project roles via SSO）**：n8n 在登录时同时从 IdP 读取实例角色和项目访问权限。

角色在每次登录时都会重新评估，因此 IdP 中的更改会在用户下次登录时生效。

{% hint style="warning" %}
**现有访问权限将被覆盖（Existing access will be overwritten）**

当你启用其中一个 SSO 供给模式时，在 n8n 内部授予的、但未反映在 IdP 响应中的任何访问权限，都会在用户下次登录时被移除。

在保存此更改之前，n8n 会要求你下载两个包含当前访问设置的 CSV 文件。请妥善保存这些文件以备参考（它们是迁移时的「底账」）。
{% endhint %}

#### 选择角色映射方法（Choose a role mapping method）

当**角色分配（Role assignment）**设置为**通过 SSO 分配实例角色（Instance roles via SSO）**或**通过 SSO 分配实例和项目角色（Instance and project roles via SSO）**时，会出现**角色映射方法（Role mapping method）**下拉菜单。你可以选择：

- **在 IdP 上映射规则（Map rules on your IdP）**：n8n 直接从 IdP 响应中读取 n8n 特定的声明（`n8n_instance_role` 和 `n8n_projects`）。由你的 IdP 管理员配置每个用户或组应该获得哪个 n8n 角色或项目。
- **在 n8n 内映射规则（Map rules inside n8n）**：你在 n8n 中定义表达式，对用户的 OIDC 声明求值并返回一个角色。当你的 IdP 无法编码 n8n 特定的角色逻辑，或者 IT 治理导致 IdP 端更改很慢时，使用此方式。

#### 在你的 IdP 上映射规则（Map rules on your IdP）

向你的 OIDC 授权服务器添加一个名为 `n8n` 的额外范围（scope），包含以下两个声明：

| **名称（Name）** | **数据类型（Data type）** | **范围（Scope）** | **令牌类型（Token type）** |
| -------- | ------------- | --------- | -------------- |
| `n8n_instance_role` | string | `n8n` | ID |
| `n8n_projects` | string array | `n8n` | ID |

你的授权服务器返回的 ID 令牌（ID Token）中必须始终包含这两个声明。在 IdP 中有权访问 n8n 的用户组上配置它们。

{% hint style="info" %}
**小白解释：** 声明（claims）就是 IdP 在登录时捎带过来的「身份信息卡片」，比如姓名、邮箱、角色。这里的 `n8n_instance_role` 声明告诉 n8n「这个用户在全平台是什么角色」，`n8n_projects` 声明告诉 n8n「这个用户在哪些项目里、各是什么角色」。两种声明都必须放进 ID 令牌里，n8n 才能读到。
{% endhint %}

**配置 `n8n_instance_role` 声明**

`n8n_instance_role` 是为 IdP 上的组或用户配置的字符串。如果未设置任何值，n8n 会回退到 `global:member`（普通成员）。

支持的实例角色：

- `global:member`
- `global:admin`
- `global:chatUser`

**配置 `n8n_projects` 声明**

`n8n_projects` 是为 IdP 上的组或用户配置的字符串数组。每个元素必须遵循格式 `<project-id>:<role>`（项目 ID:角色）。

例如：

- `bHsykgeFirmIhezz:viewer`
- `4K3zrg3DvlMFFTB7:editor`
- `dCjnYuEpYOUBVaNe:admin`

对于启用项目供给时已有的访问权限，可以在下载的 CSV 文件中找到项目 ID。

对于新项目，在浏览器中查看项目时，从 URL 中获取项目 ID。在 URL `<your-domain>/projects/VVRWZaq5DRxaf9O1/workflows` 中，项目 ID 是 `VVRWZaq5DRxaf9O1`。

{% hint style="info" %}
**小白解释：** `n8n_projects` 里每一项都是「项目ID:角色名」。比如 `4K3zrg3DvlMFFTB7:editor` 表示「在项目 4K3zrg3DvlMFFTB7 里当编辑」。项目 ID 怎么看？打开那个项目的页面，看浏览器地址栏里 `/projects/` 后面那串字符就是。
{% endhint %}

#### 在 n8n 内映射规则（Map rules inside n8n）

**在 n8n 内映射规则（Map rules inside n8n）**从版本 `2.19.0` 起可用。

使用此选项可以在 n8n 内部定义「组到角色」的映射，而不是在 IdP 中定义。每条规则都是一个表达式，n8n 会根据 IdP 响应中的 OIDC 声明对其求值。

**表达式如何工作（How expressions work）**

- 表达式通过 `$claims` 对象访问 IdP 响应中的所有 OIDC 声明。
- 如果表达式返回 `true`，n8n 就会分配你在该规则上选择的角色。
- 规则从上到下依次求值。第一个匹配的规则生效。
- 规则在每次登录时重新求值，因此角色更改会在用户的下一个会话生效。
- `$claims` 暴露的是 IdP 响应的原始内容。n8n 不会对它做标准化处理，所以请针对你的 IdP 实际发送的结构编写表达式。

{% hint style="info" %}
**让你的 IdP 发送 groups 声明（Send a groups claim from your IdP）**

大多数基于组的规则需要 OIDC 响应中的 `groups`（组）声明。这个声明默认不包含，你需要配置你的 IdP 来发送它。例如，在 Okta 中添加一个 `groups` 范围，或在 Azure AD 的令牌配置中配置 `groups` 声明。在编写规则之前，先检查你的 IdP 的响应，确保你确切知道声明名称和结构。
{% endhint %}

**示例 userinfo 响应（Example userinfo response）**

认证完成后，n8n 会调用 IdP 的 userinfo 端点来获取用户的声明。一个典型的响应看起来像这样：

```json
{
  "sub": "00uwyqw9raWrKRJ0Q697",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "email_verified": true,
  "given_name": "Jane",
  "family_name": "Doe",
  "groups": [
    "Everyone",
    "n8n admins",
    "n8n members",
    "Operations"
  ]
}
```

`$claims` 反映的就是这个负载。所以 `$claims.email` 是一个字符串，`$claims.groups` 是一个字符串数组，你可以对两者使用标准的 JavaScript 方法。具体的组名取决于你的 IdP。有些提供商（例如 Azure AD）发送的是组 UUID 而不是显示名称，这种情况下你的表达式需要引用 UUID。

{% hint style="info" %}
**小白解释：** `$claims` 就像一个「信封」，里面装着 IdP 告诉 n8n 的全部用户信息。上面的 JSON 就是信封里内容的例子。表达式写法如 `{{ $claims.groups.includes('admin') }}` 意思是「如果用户的组列表里包含 admin 组，就满足条件」。如果你对 JavaScript 不熟也没关系——照着示例改组名即可。
{% endhint %}

要在 Okta 中检查你自己的 userinfo 响应，直接用有效的访问令牌调用 userinfo 端点。你可以从 **安全（Security）** > **API** > **授权服务器（Authorization Servers）** > 你的服务器 > **令牌预览（Token Preview）** 选项卡获取测试访问令牌，然后运行：

```
curl -H "Authorization: Bearer <access-token>" https://<your-okta-domain>/oauth2/<auth-server-id>/v1/userinfo
```

**实例角色规则（Instance role rules）**

在**实例角色规则（Instance role rules）**下，选择 **添加规则（Add rule）** 来创建规则。输入一个条件表达式，并选择当条件返回 `true` 时要分配的实例角色。

例如，要给 IdP `admin` 组中的任何用户分配**管理员（Admin）**角色：

```
{{ $claims.groups.includes('admin') }}
```

**默认条件（Default condition）**行设置当没有规则匹配时用户获得的角色。默认是**成员（Member）**。

**项目角色规则（Project role rules）**

在**项目角色规则（Project role rules）**下，选择 **添加规则（Add rule）** 来创建规则，为一个或多个项目分配项目角色。

例如，要给 `operations` 组中的用户分配**运营（Operations）**项目中的**项目编辑（Project Editor）**角色，将表达式设置为：

```
{{ $claims.groups.includes('operations') }}
```

在**分配（assign）**字段中选择角色，在**于（in）**字段中选择目标项目。不匹配任何项目规则的用户将无法获得项目访问权限。

{% hint style="warning" %}
**手动角色管理被禁用（Manual role management is disabled）**

当**在 n8n 内映射规则（Map rules inside n8n）**激活时，手动分配用户角色的界面控件会被禁用。所有角色分配都通过映射规则进行。
{% endhint %}

{% hint style="warning" %}
**切换映射方法（Switching mapping methods）**

从**在 n8n 内映射规则（Map rules inside n8n）**切换回**在 IdP 上映射规则（Map rules on your IdP）**会移除 n8n 内的任何映射。如果在你的 IdP 中没有设置等效的映射，用户可能会在下次登录时丢失当前分配的角色。n8n 会在应用此更改前要求你确认。
{% endhint %}

## 特定提供商的 OIDC 设置（Provider-specific OIDC setup）

### Okta

在 Okta 中设置 OIDC 的步骤与下面描述的 Auth0 类似。

对于 Okta，你可以下载一个可视化的分步指南（PDF）：

{% file src="../../../.gitbook/assets/n8n-oidc-with-okta.pdf" %}
使用 Okta 设置 OIDC 的可视化分步指南
{% endfile %}

### Auth0

1. **在 Auth0 中创建应用程序（Create an application in Auth0）**：
	- 登录你的 Auth0 仪表板（Dashboard）。
	- 前往 **应用程序（Applications）** > **应用程序（Applications）**。
	- 点击 **创建应用程序（Create Application）**。
	- 输入一个名称（例如「n8n SSO」）并选择**常规 Web 应用程序（Regular Web Applications）**。
	- 点击 **创建（Create）**。
1. **配置应用程序（Configure the application）**：
	- 进入新应用程序的**设置（Settings）**选项卡。
	- **允许的回调 URL（Allowed Callback URLs）**：添加来自 **设置（Settings）** > **SSO** > **OIDC** 的 n8n 重定向 URL。
	- **允许的 Web 源（Allowed Web Origins）**：添加你的 n8n 基础 URL（例如 `https://yourworkspace.app.n8n.cloud`）。
	- 点击 **保存更改（Save Changes）**。
1. **获取你的凭据（Get your credentials）**：
	- **客户端 ID（Client ID）**：位于**设置（Settings）**选项卡中。
	- **客户端密钥（Client Secret）**：位于**设置（Settings）**选项卡中。
	- **发现端点（Discovery Endpoint）**：`https://{your-auth0-domain}.auth0.com/.well-known/openid-configuration`。
1. **在 n8n 中完成 OIDC 配置：**
	- **发现端点（Discovery Endpoint）**：输入 Auth0 提供的发现端点 URL。
	- **客户端 ID（Client ID）**：输入你在 Auth0 设置中找到的客户端 ID。
	- **客户端密钥（Client Secret）**：输入你在 Auth0 设置中找到的客户端密钥。
1. 选择 **保存设置（Save settings）**。
1. 将 OIDC 设置为**已激活（Activated）**。

## 发现端点参考（Discovery endpoints reference）

各主流 IdP 的发现端点示例，方便直接对照复制：

- **Google 发现端点示例（Google discovery endpoint example）**：
```
https://accounts.google.com/.well-known/openid-configuration
```
- **Microsoft Azure AD 发现端点示例（Microsoft Azure AD discovery endpoint example）**：
```
https://login.microsoftonline.com/{tenant-id}/v2.0/.well-known/openid-configuration
```
- **Auth0 发现端点示例（Auth0 discovery endpoint example）**：
```
https://{your-domain}.auth0.com/.well-known/openid-configuration
```
- **Okta 发现端点示例（Okta discovery endpoint example）**：
```
https://{your-domain}.okta.com/.well-known/openid-configuration
```
- **Amazon Cognito 发现端点示例（Amazon Cognito discovery endpoint example）**：
```
https://cognito-idp.{region}.amazonaws.com/{user-pool-id}/.well-known/openid-configuration
```
