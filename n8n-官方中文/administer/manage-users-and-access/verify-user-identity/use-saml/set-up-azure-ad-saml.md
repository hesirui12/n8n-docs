---
title: Azure AD SAML 设置（Azure AD SAML setup）
description: 将 Azure AD 与 n8n 一起使用。
contentType: tutorial
nodeTitle: 设置 Azure AD SAML（Set up Azure AD SAML）
originalFilePath: user-management/saml/azuread.md
originalUrl: 'https://docs.n8n.io/user-management/saml/azuread'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-saml/set-up-azure-ad-saml
layout:
  description:
    visible: false
---

# Azure AD SAML 设置（Azure AD SAML setup）

{% hint style="info" %}
**小白解释：** 这篇是「Azure AD（微软的账号系统，现叫 Entra ID）+ n8n」的专项配置教程。核心目标：让 Azure AD 在用户通过 SAML 登录 n8n 时，额外发送一个叫 `n8n_instance_role` 的自定义属性，n8n 据此自动给用户分配对应角色（比如管理员、成员）。这样你在 Azure AD 里把人拉进某个组，就自动决定了他在 n8n 里的权限，不需要在 n8n 里手动改。
{% endhint %}

本文档提供配置 Azure AD 通过 SAML 属性向 n8n 发送角色信息的说明。这样可以实现基于 Azure AD 组成员身份的自动角色分配。

## 前置条件（Prerequisites）

你需要一个有权访问企业应用程序（Enterprise Applications）的 Azure AD 账号，以及来自 n8n SAML 设置的重定向 URL（redirect URL）和实体 ID（entity ID）。

请先阅读[设置 SAML（Set up SAML）](set-up-saml.md)指南。

## n8n 需要什么（What n8n requires）

n8n 期望在 SAML 断言中包含一个自定义的 SAML 属性：

| **属性名称（Attribute Name）** | **数据类型（Data Type）** | **用途（Purpose）** |
| ------------------- | ------------- | ----------- |
| n8n_instance_role | String | 控制用户在 n8n 中的全局角色 |

`n8n_instance_role` 的有效值：

| **值（Value）** | **描述（Description）** |
| --------- | --------------- |
| `global:owner` | 完整的实例所有者（Owner）访问权限 |
| `global:admin` | 管理员（Administrator）访问权限 |
| `global:member` | 普通成员（Member）访问权限（未指定时的默认值） |
| `global:chatUser` | 受限的、非技术性角色，专为通过 Chat Hub 界面安全地与 AI 代理交互而设计 |

{% hint style="info" %}
**小白解释：** `chatUser` 是一个特殊的受限角色——只能通过 Chat Hub 界面和 AI 代理对话，不能碰工作流编辑、凭据等敏感内容。适合「只想让业务人员跟 AI 聊天」的场景。
{% endhint %}

## 设置（Setup）

**第 1 步：配置标准 SAML 属性（Configure Standard SAML Attributes）**

1. 在 Azure AD 门户中，导航到你的 n8n 企业应用程序（Enterprise Application）。
2. 前往 **单点登录（Single sign-on）** > **属性与声明（Attributes & Claims）**。
3. 确保以下标准属性已配置：

	| **声明名称（Claim Name）** | **源属性（Source Attribute）** |
	| -------------- | ------------------- |
	| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` | user.mail |
	| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/firstname` | user.givenname |
	| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/lastname` | user.surname |
	| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` | user.userprincipalname |

**第 2 步：添加 n8n_instance_role 声明（Add the n8n_instance_role Claim）**

此声明使用条件逻辑，根据 Azure AD 组成员身份发出不同的角色值。

1. 在**属性与声明（Attributes & Claims）**中，点击 **添加新声明（Add new claim）**。
2. 配置基本设置：
	* **名称（Name）**：`n8n_instance_role`
	* **命名空间（Namespace）**：留空
	* **源（Source）**：`Attribute`（属性）
3. 展开**声明条件（Claim conditions）**并点击 **添加条件（Add condition）**。
4. 为每个 Azure AD 组添加条件（按优先级顺序）：

	| **用户类型（User Type）** | **限定组（Scoped Groups）** | **源（Source）** | **值（Value）** |
	| ------------- | ----------------- | ---------- | --------- |
	| Members | n8n-chatusers | Attribute | `global:chatUser` |
	| Members | n8n-users | Attribute | `global:member` |
	| Members | n8n-admins | Attribute | `global:admin` |
	| Members | n8n-owners | Attribute | `global:owner` |

{% hint style="info" %}
**条件顺序（Condition order）**

条件按顺序求值。请把权限最高的组（owners）放在最后。
{% endhint %}

{% hint style="info" %}
**小白解释：** 上面表格里的意思是：如果用户在 `n8n-chatusers` 组 → 给 `global:chatUser`；在 `n8n-users` 组 → `global:member`；在 `n8n-admins` 组 → `global:admin`；在 `n8n-owners` 组 → `global:owner`。条件从上往下匹配，第一个命中的生效，所以权限最高的组要放最后，防止被前面的条件「截胡」。你可以在 Azure AD 里建好自己的组名，替换表格中的组名即可。
{% endhint %}

5. 点击 **保存（Save）**。

### 测试配置（Testing the configuration）

1. 在 n8n 中，前往 **设置（Settings）** > **SSO**。
1. 将**角色分配（Role assignment）**设置为**通过 SSO 分配实例角色（Instance roles via SSO）**。
1. 将**角色映射方法（Role mapping method）**设置为**在 IdP 上映射规则（Map rules on your IdP）**。
1. 点击 **测试设置（Test settings）**。
1. 验证 SAML 响应中显示正确的 `n8n_instance_role` 值。

### 故障排查（Troubleshooting）

**SAML 响应中未出现声明（Claim not appearing in SAML response）**

* 验证用户至少是所配置组之一的成员。
* 检查这些组是否已分配给企业应用程序（Enterprise Application）。
* 确保条件配置的源（Source）为 `Attribute`（属性）。
* 使用浏览器扩展插件（如「SAML Chrome Panel」）查看应用程序的 SAML 响应。

**用户获得了错误的角色（User gets wrong role）**

* 检查条件顺序（权限最高的组应该放在最后）。

## 使用应用角色（App Roles）而不是基于组的声明来分配多个项目角色（Assigning multiple project roles using app roles instead of group-based claims）

使用 Azure AD 基于组的声明条件为用户分配多个项目角色，往往会导致只有第一个匹配的组声明被发送到 SAML 断言中。这意味着即使用户属于多个组，也可能只看到一个项目的访问权限。

要可靠地分配多个项目及其相应角色，请使用**应用注册（App Registration）**中定义的应用角色（App Roles），而不是基于组的声明：

1. 在 n8n SAML 应用的**应用注册（App Registration）**中，定义代表每个项目和权限组合的应用角色（例如 `<projectId>:<role>`）。
2. 保存更新后的应用清单（App Manifest）。
3. 在**企业应用程序（Enterprise Application）**中，在**用户和组（Users and groups）**下将这些应用角色分配给用户或组。
4. 更新**单点登录（Single sign-on）> 属性与声明（Attributes & Claims）**中的 `n8n_projects` SAML 声明，使其来源为 `user.assignedroles`。这会在 SAML 响应中以数组形式发出所有已分配的角色。

此设置可确保 n8n 正确接收所有项目分配，从而在多个项目中授予适当的访问权限。虽然定义应用角色会增加一些初始管理开销，但它简化了后续的用户-角色管理，并保证了完整的项目角色同步。

从基于组的声明迁移到应用角色时，请相应调整你的角色定义和声明映射，以防项目访问不完整。

{% hint style="info" %}
**小白解释：** 这是本文一个常见的坑：在 Azure AD 里用「组条件」给用户发多个项目角色时，Azure 只发第一个匹配组的声明，导致用户只能看到部分项目。解决办法是改用「应用角色（App Roles）」机制：在应用注册里把每个「项目ID:角色」定义成一种应用角色，再把用户/组分配到这些应用角色上，最后让 `n8n_projects` 声明取 `user.assignedroles`（用户分配的所有角色）。这样多个项目权限就能一次性全部发给 n8n。
{% endhint %}

## 参考（References）

* [n8n SAML 设置](https://docs.n8n.io/user-management/saml/setup/)
* [n8n Okta 指南（参考）](https://docs.n8n.io/user-management/saml/okta/)
* [Azure AD 声明自定义（Azure AD Claims Customization）](https://learn.microsoft.com/en-us/entra/identity-platform/saml-claims-customization)
