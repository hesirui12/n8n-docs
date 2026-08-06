---
title: 设置 SAML（Set up SAML）
description: 在 n8n 中使用 SAML SSO 的通用设置说明。
contentType: howto
nodeTitle: 设置 SAML（Set up SAML）
originalFilePath: user-management/saml/setup.md
originalUrl: 'https://docs.n8n.io/user-management/saml/setup'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-saml/set-up-saml
layout:
  description:
    visible: false
---

# 设置 SAML（Set up SAML）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/9DXSTQsxYGisAV8xk6p4/" %}

{% hint style="info" %}
**使用环境变量配置（Configure using environment variables）**

你也可以通过环境变量而不是界面来配置 SAML。从 n8n v2.18.0 开始可用。参见[SSO 环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/sso)。
{% endhint %}

{% hint style="info" %}
**小白解释：** 设置 SAML 的流程总结：① 在 n8n 的 SSO 页面拿到**重定向 URL（Redirect URL）**和**实体 ID（Entity ID）**——这是 IdP 那边要填的「n8n 的地址和身份」；② 去你的 IdP（Okta、Azure AD、Keycloak、Auth0 等）里创建 n8n 应用并填入这两个值；③ 把 IdP 生成的**元数据（metadata XML，含地址和证书的配置文件）**贴回 n8n；④ 保存、测试、激活。测试通过后，员工就能用公司账号单点登录 n8n 了。
{% endhint %}

## 启用 SAML（Enable SAML）

1. 在 n8n 中，前往 **设置（Settings）** > **SSO**。
1. 记下 n8n 的**重定向 URL（Redirect URL）**和**实体 ID（Entity ID）**。
	* **可选**：如果你的 IdP 允许通过导入元数据来设置 SAML，请访问**实体 ID（Entity ID）**URL 并保存其中的 XML。
	* **可选**：如果你在负载均衡器后面运行 n8n，请确保已配置 `N8N_EDITOR_BASE_URL`。
1. 在你的身份提供方（IdP）中设置 SAML。你需要**重定向 URL（Redirect URL）**和**实体 ID（Entity ID）**。你可能还需要一个用于 IdP 用户的电子邮件地址和姓名。
1. 在你的 IdP 中完成设置后，将元数据 XML 载入 n8n。你可以使用元数据 URL 或原始 XML：
	* **元数据 URL（Metadata URL）**：将你的 IdP 中的元数据 URL 复制到 n8n 的**身份提供方设置（Identity Provider Settings）**字段中。
	* **原始 XML（Raw XML）**：从你的 IdP 下载元数据 XML，将**身份提供方设置（Identity Provider Settings）**切换为 **XML**，然后将原始 XML 复制到**身份提供方设置（Identity Provider Settings）**中。
1. 选择 **保存设置（Save settings）**。
1. 选择 **测试设置（Test settings）** 检查你的 SAML 设置是否正常工作。
1. 将 SAML 2.0 设置为**已激活（Activated）**。

{% hint style="info" %}
**SAML 请求类型（SAML Request Type）**

n8n 不支持 `POST` 绑定（binding）。请配置你的 IdP 改用 `HTTP` 请求绑定（即 HTTP-Redirect 绑定）。
{% endhint %}

## 通用 IdP 设置（Generic IdP setup）

配置 IdP 的步骤因你选择的 IdP 而异。以下是一些常见的设置任务：

* 在你的 IdP 中为 n8n 创建一个应用。
* 将 n8n 属性映射到 IdP 属性：

| 值（IdP 侧） | 名称格式（Name format） | 名称（Name） |
| ---------------- | ----------- | ---- |
| 用户邮箱（User email） | URI Reference | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` |
| 用户名字（User First Name） | URI Reference | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/firstname`    |
| 用户姓氏（User Last Name） | URI Reference | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/lastname`     |
| 用户邮箱（User Email） | URI Reference | `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn`          |

{% hint style="info" %}
**小白解释：** 上面的表格是 IdP 侧「属性映射」的通用清单：n8n 需要 IdP 在登录时至少提供用户的邮箱（用于识别账号）、名字和姓氏（用于显示）。那些长长的 `http://schemas.xmlsoap.org/...` 是标准属性标识符，直接把表格里的值复制到 IdP 的对应字段即可，不需要理解其含义。
{% endhint %}

### 实例和项目访问供给（Instance and project access provisioning）

n8n 支持通过 SSO 供给实例角色和项目角色。当用户通过 SAML 登录时，n8n 可以根据 SAML 响应中的属性自动分配他们的实例角色和项目访问权限。

角色供给功能在版本 `1.122.2` 中引入。

{% hint style="info" %}
**小白解释：** 「供给」=自动发权限。开启后，n8n 会读取 IdP 在 SAML 响应里带来的 `n8n_instance_role`（实例角色）和 `n8n_projects`（项目权限）属性，自动给用户安排对应的权限，管理员不用再手动逐个分配。
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

- **在 IdP 上映射规则（Map rules on your IdP）**：n8n 直接从 SAML 响应中读取 n8n 特定的属性（`n8n_instance_role` 和 `n8n_projects`）。由你的 IdP 管理员配置每个用户或组应该获得哪个 n8n 角色或项目。
- **在 n8n 内映射规则（Map rules inside n8n）**：你在 n8n 中定义表达式，对用户的 SAML 属性求值并返回一个角色。当你的 IdP 无法编码 n8n 特定的角色逻辑，或者 IT 治理导致 IdP 端更改很慢时，使用此方式。

#### 在你的 IdP 上映射规则（Map rules on your IdP）

在你的 IdP 中的组或单个用户上配置这些属性：

| 值（IdP 侧） | 数据类型（Data type） | 名称（Name） |
| ---------------- | ----------- | ---- |
| `n8n_instance_role` | string | `n8n_instance_role` |
| `n8n_projects` | array | `n8n_projects` |

**配置 `n8n_instance_role` 属性**

`n8n_instance_role` 是为 IdP 上的组或用户配置的字符串。如果未设置任何值，n8n 会回退到 `global:member`（普通成员）。

支持的实例角色：

- `global:member`
- `global:admin`
- `global:chatUser`

**配置 `n8n_projects` 属性**

`n8n_projects` 是为 IdP 上的组或用户配置的字符串数组。每个元素必须遵循格式 `<project-id>:<role>`（项目 ID:角色）。

例如：

- `bHsykgeFirmIhezz:viewer`
- `4K3zrg3DvlMFFTB7:editor`
- `dCjnYuEpYOUBVaNe:admin`

对于启用项目供给时已有的访问权限，可以在下载的 CSV 文件中找到项目 ID。

对于新项目，在浏览器中查看项目时，从 URL 中获取项目 ID。在 URL `<your-domain>/projects/VVRWZaq5DRxaf9O1/workflows` 中，项目 ID 是 `VVRWZaq5DRxaf9O1`。

{% hint style="info" %}
**小白解释：** `n8n_projects` 里每一项都是「项目ID:角色名」，例如 `4K3zrg3DvlMFFTB7:editor` 表示「在项目 4K3zrg3DvlMFFTB7 里当编辑」。项目 ID 怎么看？打开项目页面，浏览器地址栏里 `/projects/` 后面那串字符就是。
{% endhint %}

#### 在 n8n 内映射规则（Map rules inside n8n）

**在 n8n 内映射规则（Map rules inside n8n）**从版本 `2.19.0` 起可用。

使用此选项可以在 n8n 内部定义「组到角色」的映射，而不是在 IdP 中定义。每条规则都是一个表达式，n8n 会根据 IdP 响应中的 SAML 属性对其求值。

**表达式如何工作（How expressions work）**

- 表达式通过 `$claims` 对象访问 IdP 响应中的所有 SAML 属性。
- 如果表达式返回 `true`，n8n 就会分配你在该规则上选择的角色。
- 规则从上到下依次求值。第一个匹配的规则生效。
- 规则在每次登录时重新求值，因此角色更改会在用户的下一个会话生效。
- `$claims` 暴露的是原始的 SAML 属性。n8n 不会对它们做标准化处理，所以请针对你的 IdP 实际发送的结构编写表达式。SAML 组成员身份通常以多值属性的形式传送，但具体结构取决于你的 IdP。

{% hint style="info" %}
**检查你的 SAML 响应结构（Check your SAML response structure）**

不同的 IdP 序列化组和其他属性的方式不同。在编写规则之前，使用浏览器工具（如 SAML Chrome Panel）或你的 IdP 的测试工具检查 SAML 响应，确认属性名称和结构。
{% endhint %}

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

## 常见 IdP 的设置资源（Setup resources for common IdPs）

常见 IdP 的文档链接，方便你直接去对应服务商查找详细步骤：

| IdP | 文档（Documentation） |
| --- | ------------- |
| Auth0 | [将 Auth0 配置为 SAML 身份提供方：手动配置 SSO 集成](https://auth0.com/docs/authenticate/protocols/saml/saml-sso-integrations/configure-auth0-saml-identity-provider#manually-configure-sso-integrations) |
| Authentik | [应用程序（Applications）](https://goauthentik.io/docs/applications) 和 [SAML 提供方（SAML Provider）](https://docs.goauthentik.io/add-secure-apps/providers/saml/) |
| Azure AD | [使用 Azure Active Directory 进行 SAML 认证](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/auth-saml) |
| JumpCloud | [如何使用 JumpCloud 设置 SAML（SSO）应用程序](https://jumpcloud.com/support/integrate-with-zoom#configuring-the-sso-integration)（以 `Zoom` 为例） |
| Keycloak | 根据你的托管方式选择合适的[入门（Getting Started）](https://www.keycloak.org/guides#getting-started)指南。 |
| Okta | n8n 提供了一份 [Workforce Identity 设置指南](set-up-okta-workforce-identity-saml.md)，内含分步 PDF 指南 |
| PingIdentity | [PingOne SSO](https://docs.pingidentity.com/pingone/getting_started_with_pingone/p1_p1sso_start.html) |
