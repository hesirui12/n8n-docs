---
title: Microsoft Entra ID 节点文档
description: >-
  学习如何在 n8n 中使用 Microsoft Entra ID 节点。按照
  技术文档将 Microsoft Entra ID 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: Microsoft Entra ID 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.microsoftentra.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftentra
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.microsoftentra
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Microsoft Entra ID（以前叫 Azure Active Directory / Azure AD）就是微软的「企业账号管理」系统，管组织里有哪些用户、哪些组、谁能访问什么。这个节点让你在 n8n 里管用户（User）和组（Group）：增删改查，以及把用户加入/移出组。典型场景：新员工入职 → 自动创建账号并加入对应权限组。
{% endhint %}

# Microsoft Entra ID 节点

使用 Microsoft Entra ID 节点来自动化你在 Microsoft Entra ID 中的工作，并把它与其它应用集成。n8n 内置支持 Microsoft Entra ID 的大量功能，包括创建、获取、更新和删除用户与组，以及把用户加入组和从组中移除。

在本页你可以看到 Microsoft Entra ID 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

你可以在这里找到该节点的认证信息：[Microsoft Entra ID 凭证](../credentials/microsoftentra.md)。
{% endhint %}

{% hint style="info" %}
**政府云支持**

如果你使用的是政府云租户（US Government 美国政府云、US Government DOD 美国国防部云或 China 中国云），请务必在 Microsoft Entra ID 凭证配置中，选择对应的 **Microsoft Graph API Base URL**（Microsoft Graph API 基础 URL）。
{% endhint %}

## 操作

* **Group（组）**
	* **Create（创建）**：Create a new group（创建新组）
	* **Delete（删除）**：Delete an existing group（删除已有组）
	* **Get（获取）**：Retrieve data for a specific group（获取指定组的数据）
	* **Get Many（获取多个）**：Retrieve a list of groups（获取组列表）
	* **Update（更新）**：Update a group（更新组）
* **User（用户）**
	* **Create（创建）**：Create a new user（创建新用户）
	* **Delete（删除）**：Delete an existing user（删除已有用户）
	* **Get（获取）**：Retrieve data for a specific user（获取指定用户的数据）
	* **Get Many（获取多个）**：Retrieve a list of users（获取用户列表）
	* **Update（更新）**：Update a user（更新用户）
	* **Add to Group（加入组）**：Add user to a group（把用户加入组）
	* **Remove from Group（移出组）**：Remove user from a group（把用户移出组）

## 模板与示例

[浏览 Microsoft Entra ID 节点的官方集成模板](https://n8n.io/integrations/microsoft-entra-id-azure-active-directory)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Microsoft Entra ID 官方文档](https://learn.microsoft.com/en-us/graph/api/resources/identity-network-access-overview?view=graph-rest-1.0)。

（官方此处嵌入了通用资源组件，此处从略。）

## 常见问题

这里列出 Microsoft Entra ID 节点的一些常见报错与问题，以及解决或排查方法。

### 更新「允许外部发件人」和「自动订阅新成员」选项失败

新建组之后，你无法立即直接更新 **Allow External Senders**（允许外部发件人）和 **Auto Subscribe New Members**（自动订阅新成员）这两个选项。创建组后必须等待一段时间，才能修改这两个选项的值。

在设计使用多个 Microsoft Entra ID 节点的工作流时（先用一个节点创建组、再用另一个节点更新这些选项），请在两步操作之间添加一个 [Wait（等待）](../core-nodes/n8n-nodes-base.wait.md) 节点。把 Wait 节点配置为至少暂停两秒，给组留出完全初始化的时间。等待结束后，更新操作就能正常完成而不再报错。
