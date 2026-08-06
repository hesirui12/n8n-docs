---
title: RBAC 项目（RBAC projects）
contentType: howto
nodeTitle: 在项目中组织工作（Organize work in projects）
originalFilePath: user-management/rbac/projects.md
originalUrl: https://docs.n8n.io/user-management/rbac/projects
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects
description: >-
  了解 n8n 如何使用项目实现 RBAC（基于角色的访问控制）。学习如何创建和管理
  项目。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 在项目中组织工作（Organize work in projects）

{% hint style="info" %}
**功能可用性（Feature availability）**

RBAC 在所有套餐上均可用，但 Community（社区版）除外。不同套餐提供不同数量的项目和角色。有关套餐详情，请参阅 n8n 的[定价页面](https://n8n.io/pricing/)。
{% endhint %}

{% hint style="info" %}
**小白解释：** 什么是 RBAC？就是「基于角色的访问控制」——把「谁」（用户）和「能做什么」（角色/权限）分开管理。n8n 用「项目」把工作流和凭据分组，再给每个项目里的用户分配角色。这样一来，同一个用户可以在 A 项目是管理员、在 B 项目只能看，互不影响，非常适合团队协作场景。
{% endhint %}

n8n 使用项目（projects）来分组工作流和凭据[^1]，并为每个项目中的用户分配[角色](see-available-roles.md)。这意味着同一个用户可以在不同项目中拥有不同角色，从而获得不同级别的访问权限。

### 创建项目（Create a project）

实例所有者（Owner）和实例管理员（Admin）可以创建项目。

要创建项目：

1. 选择 <img src="../../.gitbook/assets/plus.png" alt="Plus icon" data-size="line"> **添加项目（Add project）**。
2. 填写项目设置。
3. 选择 **保存（Save）**。

### 在项目中添加和移除用户（Add and remove users in a project）

项目管理员（Project admins）可以添加和移除用户。

要将用户添加到项目：

1. 选择项目。
2. 选择 **项目设置（Project settings）**。
3. 在**项目成员（Project members）**下，浏览用户或按用户名或电子邮件地址搜索。
4. 选择你要添加的用户。
5. 检查[角色类型](see-available-roles.md)，如有需要则更改。
6. 选择 **保存（Save）**。

要从项目中移除用户：

1. 选择项目。
2. 选择 **项目设置（Project settings）**。
3. 在你要移除的用户的**三点菜单（three-dot menu）**中，选择 **移除用户（Remove user）**。
4. 选择 **保存（Save）**。

### 删除项目（Delete a project）

要删除项目：

1. 选择项目。
2. 选择 **项目设置（Project settings）**。
3. 选择 **删除项目（Delete project）**。
4. 选择如何处理其中的工作流和凭据。你可以选择：
   * **将其工作流和凭据转移到另一个项目**：n8n 会提示你选择要移动数据的项目。
   * **删除其工作流和凭据**：n8n 会提示你确认删除项目中的所有数据。

{% hint style="warning" %}
**删除项目不可逆（Delete is irreversible）**

删除项目并选择「删除其工作流和凭据」后，项目里的所有数据都会被永久删除，无法恢复。如果还有可能用到，建议优先选择「转移到另一个项目」。
{% endhint %}

### 在项目或用户之间移动工作流和凭据（Move workflows and credentials between projects or users）

工作流和凭据的所有者可以将工作流或凭据（更改所有权）移动到他们有权限访问的其他用户或项目。

{% hint style="warning" %}
**移动会撤销共享（Moving revokes sharing）**

移动工作流或凭据会移除所有现有的共享关系。请注意，这可能会影响当前共享这些资源的其他工作流。
{% endhint %}

1.  选择**工作流菜单** <img src="../../.gitbook/assets/three-dot-options-menu (1).png" alt="Workflow menu icon" data-size="line"> 或**凭据菜单** <img src="../../.gitbook/assets/three-dot-options-menu (1).png" alt="Workflow menu icon" data-size="line"> > **移动（Move）**。<br>

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>移动带凭据的工作流（Moving workflows with credentials）</strong></p><p>当移动一个包含你拥有共享权限的凭据的工作流时，你可以选择同时共享这些凭据。这样可以确保工作流在移动后仍能访问执行所需的凭据。n8n 会提示哪些凭据无法移动（即你没有共享权限的凭据）。</p></div>
2. 选择要移动到的项目或用户。
3. 选择 **下一步（Next）**。
4. 确认你理解移动的影响：如果目标项目中没有工作流所需的凭据，工作流可能会停止运行，并且 n8n 会移除所有当前的单独共享关系。
5. 选择 **确认移动到新项目（Confirm move to new project）**。

[^1]: 在 n8n 中，凭据（credentials）用于存储连接到特定应用和服务的认证信息。创建包含你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）的凭据后，就可以使用对应的应用节点与服务进行交互。
