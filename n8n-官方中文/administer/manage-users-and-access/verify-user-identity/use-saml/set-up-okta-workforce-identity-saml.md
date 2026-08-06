---
title: Okta Workforce Identity SAML 设置（Okta Workforce Identity SAML setup）
description: 将 Okta Workforce Identity 与 n8n 一起使用。
contentType: tutorial
nodeTitle: 设置 Okta Workforce Identity SAML（Set up Okta Workforce Identity SAML）
originalFilePath: user-management/saml/okta.md
originalUrl: 'https://docs.n8n.io/user-management/saml/okta'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/verify-user-identity/use-saml/set-up-okta-workforce-identity-saml
layout:
  description:
    visible: false
---

# Okta Workforce Identity SAML 设置（Okta Workforce Identity SAML setup）

在 n8n 中使用 Okta 设置 SAML SSO。

{% hint style="info" %}
**Workforce Identity 和 Customer Identity**

本指南介绍的是设置 Workforce Identity。这是 Okta 的原始产品。Customer Identity 是 Okta 对 Auth0 的称呼（Auth0 已被 Okta 收购）。
{% endhint %}

{% hint style="info" %}
**小白解释：** Okta 是一家很流行的企业身份服务商，提供两类产品：Workforce Identity（管员工账号，本指南用这个）和 Customer Identity（管外部客户账号，其实就是原来的 Auth0）。跟着本文，你会在 Okta 后台创建一个 SAML 应用，把 n8n 需要的地址填进去，再把 Okta 给的元数据（metadata XML）贴回 n8n，SSO 就打通了。
{% endhint %}

## 前置条件（Prerequisites）

你需要一个 Okta Workforce Identity 账号，以及来自 n8n SAML 设置的重定向 URL（redirect URL）和实体 ID（entity ID）。

根据你的 Okta 配置，Okta Workforce 可能会对用户强制进行双因素认证。

请先阅读[设置 SAML（Set up SAML）](set-up-saml.md)指南。

## 设置（Setup）

除了以下说明外，这份可视化分步指南还展示了如何用 Okta 在 n8n 中设置 SAML：

{% file src="../../../.gitbook/assets/n8n-saml-with-okta.pdf" %}
使用 Okta 设置 SAML 的可视化分步指南
{% endfile %}

1. 在 Okta 管理后台中，选择 **应用程序（Applications）** > **应用程序（Applications）**。
1. 选择 **创建应用集成（Create App Integration）**。Okta 会打开应用创建弹窗。
1. 选择 **SAML 2.0**，然后选择 **下一步（Next）**。
1. 在**常规设置（General Settings）**选项卡中，将 `n8n` 输入为**应用名称（App name）**。
1. 选择 **下一步（Next）**。
1. 在**配置 SAML（Configure SAML）**选项卡中，完成以下**常规（General）**字段：
	* **单点登录 URL（Single sign-on URL）**：来自 n8n 的**重定向 URL（Redirect URL）**。
	* **受众 URI（SP 实体 ID）（Audience URI (SP Entity ID)）**：来自 n8n 的**实体 ID（Entity ID）**。
	* **默认 RelayState（Default RelayState）**：留空。
	* **名称 ID 格式（Name ID format）**：`EmailAddress`。
	* **应用程序用户名（Application username）**：`Okta username`。
	* **更新应用程序用户名的时间（Update application username on）**：`Create and update`（创建和更新）。
1. 创建**属性语句（Attribute Statements）**：

	| **名称（Name）** | **名称格式（Name format）** | **值（Value）** |
	| -------- | --------------- | --------- |
	| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/firstname` | URI Reference | user.firstName |
	| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/lastname` | URI Reference | user.lastName |
	| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` | URI Reference | user.login |
	| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` | URI Reference | user.email |

1. 选择 **下一步（Next）**。Okta 可能会提示你填写营销表单，也可能直接带你到新的 n8n Okta 应用。
1. 将 n8n 应用分配给人员：
	1. 在 Okta 的 n8n 应用仪表板上，选择 **分配（Assignments）**。
	1. 选择 **分配（Assign）** > **分配给人员（Assign to People）**。Okta 会显示一个包含可用人员列表的弹窗。
	1. 点击要添加的人员旁边的**分配（Assign）**。Okta 会显示确认用户名的提示。
	1. 保持用户名不变（使用电子邮件地址）。选择 **保存并返回（Save and Go Back）**。
	1. 选择 **完成（Done）**。
1. 获取元数据 XML：在**登录（Sign On）**选项卡上，复制元数据 URL（Metadata URL）。访问该 URL，并复制其中的 XML。将 XML 粘贴到 n8n 的**身份提供方设置（Identity Provider Settings）**中。
1. 选择 **保存设置（Save settings）**。
1. 选择 **测试设置（Test settings）**。n8n 会打开一个新标签页。如果你当前未登录，Okta 会提示你登录。随后 n8n 会显示一条成功消息，确认 Okta 返回的属性。

{% hint style="info" %}
**小白解释：** 上面步骤里的「属性语句（Attribute Statements）」表，作用是让 Okta 在登录时把用户的名字、姓氏、邮箱等基本信息发给 n8n（用标准的 URI 格式标识），n8n 才能自动创建/匹配用户账号。步骤 10 的「元数据 XML」相当于 IdP 的「自我介绍文件」，里面写着它的地址和证书，n8n 拿到它就能和 Okta 安全通信。
{% endhint %}

### 实例和项目访问供给（Instance and project access provisioning）

n8n 支持两种通过 SSO 供给实例和项目角色的方式。根据你希望映射逻辑放在哪里选择一种：

- **在 IdP 上映射规则（Map rules on your IdP）**：在 Okta 中配置 n8n 特定的属性（`n8n_instance_role` 和 `n8n_projects`），n8n 直接从 SAML 响应中读取它们。步骤如下。
- **在 n8n 内映射规则（Map rules inside n8n）**：将 Okta 的组成员身份作为 SAML 属性发送，并在 n8n 内定义映射表达式。除组属性外，Okta 中不需要任何 n8n 特定的配置。参见主 SAML 设置页面的[在 n8n 内映射规则（Map rules inside n8n）](set-up-saml.md#map-rules-inside-n8n)。

在 n8n 中，将**角色分配（Role assignment）**设置为**通过 SSO 分配实例角色（Instance roles via SSO）**或**通过 SSO 分配实例和项目角色（Instance and project roles via SSO）**，然后选择你偏好的**角色映射方法（Role mapping method）**。

{% hint style="info" %}
**小白解释：** 和 OIDC 那篇一样，「供给」就是自动发权限。第一种方式：在 Okta 里把用户/组和 n8n 的角色、项目绑定好，n8n 登录时直接读；第二种方式：只把「用户属于哪些组」发给 n8n，由 n8n 里的规则来翻译成角色。按你希望「规则放在哪一端维护」来选择即可。
{% endhint %}

#### 在你的 IdP 上映射规则（Map rules on your IdP）

**添加所需的属性（Adding the required attributes）**

1. 在 Okta 管理后台中，选择 **应用程序（Applications）** > **应用程序（Applications）**。
2. 进入你的 n8n 应用程序的配置。
3. 在**常规（General）**选项卡上，点击 **SAML 设置（SAML Settings）** 旁边的 **编辑（Edit）**。
4. 在打开的页面中，继续到第 2 步：**配置 SAML（Configure SAML）**。
5. 添加以下两个**属性语句（Attribute Statements）**：

	| **名称（Name）** | **名称格式（Name format）** | **值（Value）** |
	| -------- | --------------- | --------- |
	| n8n_instance_role | Basic | appuser.n8n_instance_role |
	| n8n_projects | Basic | appuser.n8n_projects |

6. 点击 **下一步（Next）**。
7. 点击 **完成（Finish）**。

**更新应用档案（Updating the app profile）**

1. 在 Okta 管理后台中，选择 **目录（Directory）** > **档案编辑器（Profile Editor）**。
2. 进入你的 n8n 应用程序的档案。
3. 点击 **添加属性（Add Attribute）**。
4. 添加 **n8n_instance_role** 属性：
	* **数据类型（Data type）**：string
	* **显示名称（Display name）**：n8n_instance_role
	* **变量名称（Variable name）**：n8n_instance_role
	* **属性类型（Attribute type）**：Group（组）
4. 添加 **n8n_projects** 属性：
	* **数据类型（Data type）**：string array（字符串数组）
	* **显示名称（Display name）**：n8n_projects
	* **变量名称（Variable name）**：n8n_projects
	* **属性类型（Attribute type）**：Group（组）
	* **组优先级（Group priority）**：跨组组合值（Combine values across groups）

现在，当你前往 **目录（Directory）** > **组（Groups）** 并编辑已分配的 n8n 应用程序时，你就可以配置 **n8n_instance_role** 和 **n8n_projects**，让它们在该用户通过 SAML 登录时发送给 n8n。

{% hint style="info" %}
**小白解释：** 这里做的事情是：① 在 SAML 应用里声明「我们要发两个属性（角色、项目）给 n8n」；② 在应用档案里定义这两个属性，且都挂到「组（Group）」级别——这样你就能在 Okta 的组设置里，为每个组指定发给 n8n 的角色和项目。注意 `n8n_projects` 要选「跨组组合值」，这样用户属于多个组时，多个组的项目权限会合并而不是互相覆盖。
{% endhint %}
