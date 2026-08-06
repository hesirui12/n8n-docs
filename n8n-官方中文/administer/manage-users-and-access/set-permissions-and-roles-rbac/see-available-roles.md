---
title: RBAC 角色类型
description: '了解 n8n 中可用的 RBAC 角色，以及它们拥有的访问权限。'
contentType: reference
nodeTitle: 查看可用角色（See available roles）
originalFilePath: user-management/rbac/role-types.md
originalUrl: 'https://docs.n8n.io/user-management/rbac/role-types'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles
layout:
  description:
    visible: false
---

# RBAC 角色类型 / RBAC role types

{% hint style="info" %}
**功能可用性（Feature availability）**

* **项目编辑者（Project Editor）** 角色在 **Pro 云版（Pro Cloud）** 和 **自托管企业版（Self-hosted Enterprise）** 套餐中可用。
* **项目查看者（Project Viewer）** 角色仅在**自托管企业版（Self-hosted Enterprise）**和**云企业版（Cloud Enterprise）**套餐中可用。
{% endhint %}

在项目内部，有三种用户角色：**Admin（管理员）**、**Editor（编辑者）** 和 **Viewer（查看者）**。这些角色控制用户在项目内能做什么。同一个用户可以在不同的项目中拥有不同的角色。

{% hint style="info" %}
**大白话（三种角色一句话版）**：
* **Admin（管理员）**：项目里的「负责人」——管成员、管项目设置，还能干编辑者的所有事；
* **Editor（编辑者）**：项目里的「干活主力」——能改工作流、改凭证、能运行；
* **Viewer（查看者）**：项目里的「参观者」——只能看，不能动，也不能手动运行工作流。
{% endhint %}

## 项目管理员（Project Admin）

**Project Admin（项目管理员）** 角色拥有最高级别的权限。项目管理员可以：

* 管理项目设置：更改名称、删除项目。
* 管理项目成员：邀请成员和移除成员、更改成员的角色。
* 查看、创建、更新和删除项目内的任何工作流、凭证或执行记录（executions）。
* 创建[终端用户凭证（end-user credentials）](../../manage-credentials/end-user-credentials.md)。默认情况下，只有项目管理员可以创建这种凭证类型，但你可以通过自定义角色把它授予其他用户。

## 项目编辑者（Project Editor）

**Project Editor（项目编辑者）** 可以查看、创建、更新和删除项目内的任何工作流、凭证或执行记录。

## 项目查看者（Project Viewer）

**Project Viewer（项目查看者）** 实际上是一个 `read-only`（只读）角色，拥有项目内所有工作流、凭证和执行记录的访问权限。

查看者**无法手动执行**项目中的任何工作流。

{% hint style="info" %}
**项目角色与实例角色（Project roles and instance roles）**

n8n 有两个层级的角色。[实例角色（Instance roles）](../understand-instance-roles.md) 控制用户在整个实例上能做什么。项目角色控制用户在某个特定[项目（project）](organize-work-in-projects.md)内能做什么，同一个用户可以在不同的项目中拥有不同的项目角色。
{% endhint %}

| 权限（Permission） | Admin（管理员） | Editor（编辑者） | Viewer（查看者） |
| ---------- |------ | ------ | ------ |
| 查看项目中的工作流（View workflows in the project） | ✅ | ✅ | ✅ |
| 查看项目中的凭证（View credentials in the project） | ✅ | ✅ | ✅ |
| 查看执行记录（View executions） | ✅ | ✅ | ✅ |
| 编辑凭证和工作流（Edit credentials and workflows） | ✅ | ✅ | ❌ |
| 添加工作流和凭证（Add workflows and credentials） | ✅ | ✅ | ❌ |
| 执行工作流（Execute workflows） | ✅ | ✅ | ❌ |
| 管理成员（Manage members） | ✅ | ❌ | ❌ |
| 修改项目（Modify the project） | ✅ | ❌ | ❌ |
| 在凭证中使用外部密钥（Use external secrets in credentials） | ✅* | ✅* | ❌ |
| 管理项目密钥保险库（Manage project secret vaults） | ✅* | ❌ | ❌ |

\* 需要实例所有者或管理员启用 **Enable external secrets for project roles（为项目角色启用外部密钥）**。请参考[项目角色的访问权限（Access for project roles）](../../manage-credentials/use-external-secret-stores.md#access-for-project-roles)。该功能从 n8n 版本 `2.13.0` 起可用。

{% hint style="info" %}
**大白话（怎么读这张表）**：Viewer 只能「看」三样东西（工作流、凭证、执行记录）；Editor 在 View 的基础上多了「编辑、添加、执行」；Admin 又在 Editor 的基础上多了「管理成员、修改项目、管保险库」。带 `*` 的两行需要额外开关（外部密钥功能）才能生效。
{% endhint %}

[变量（Variables）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/define-custom-variables)和[标签（tags）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/tag-workflows)**不受 RBAC 影响**：它们在 n8n 实例上是**全局**的。

{% hint style="info" %}
**大白话（为什么变量和标签不受影响）**：RBAC 管的是「项目里的工作流和凭证」这种资源；而变量和标签是「整个实例通用」的东西，比如 `support_email` 这个变量任何项目都能用。所以即使某用户对某个项目没有任何权限，他仍然能读取全局变量、看到所有标签——这是设计如此，不是漏洞。
{% endhint %}
