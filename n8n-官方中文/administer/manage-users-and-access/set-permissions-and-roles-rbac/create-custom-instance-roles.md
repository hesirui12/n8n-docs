---
title: 自定义实例角色（Custom instance roles）
description: 在 n8n 中创建和管理具有精细权限的自定义实例角色。
contentType: howto
nodeTitle: 创建自定义实例角色（Create custom instance roles）
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-instance-roles
layout:
  description:
    visible: false
---

# 自定义实例角色（Custom instance roles）

{% hint style="info" %}
**功能可用性（Feature availability）**

自定义实例角色适用于自托管企业版（Self-hosted Enterprise）和云企业版（Cloud Enterprise）套餐。有关套餐详情，请参阅 n8n 的[定价页面](https://n8n.io/pricing/)。

**可用版本：** n8n 2.30.0 及以上版本（2026 年 7 月 7 日发布）
{% endhint %}

{% hint style="info" %}
**实例角色 vs 项目角色（Instance roles vs project roles）**

n8n 有两种类型的自定义角色：

**自定义实例角色（Custom instance roles）**：与用户在「实例级别」所需的行政管理能力相关的角色。

**自定义项目角色（Custom project roles）**：在特定项目内部适用的角色。参见[创建自定义项目角色](create-custom-project-roles.md)。
{% endhint %}

{% hint style="info" %}
**小白解释：** 什么是「实例（instance）」？你可以把整个 n8n 平台（无论自托管还是云端）看作一个「实例」。实例级别就是「全平台范围」——比如管理所有用户、所有标签、API 密钥等系统级功能。而「项目（project）」就像平台里的一个个工作小组，项目角色只在那个小组内部生效。简单说：**实例角色管「全平台」，项目角色管「某个小组」。**
{% endhint %}

自定义实例角色让你可以为用户授予特定的实例级权限，而无需给他们完整的管理员（Admin）权限。与内置角色（Owner 所有者、Admin 管理员、Member 成员）不同，自定义实例角色允许你为实例设置、用户管理以及其他实例级管理功能定义精细的权限。

## 创建自定义实例角色（Create a custom instance role）

实例所有者（Owner）和实例管理员（Admin）可以创建自定义实例角色。

要创建自定义实例角色：

1. 前往 **设置（Settings）** > **角色（Roles）** > **实例角色（Instance roles）**。
2. 选择 **创建角色（Create role）**。
3. 输入角色名称和可选的角色描述。
4. 可选：选择一个**预设（Preset）**（**Admin 管理员**、**Member 成员**），基于内置角色预填权限，然后再按需调整。预设的作用是帮你「抄作业」——先复制一个现成内置角色的权限，再改。
5. 为该角色选择权限：
   * **实例设置（Instance settings）** > **管理（Manage）**：查看和更改全局实例设置
   * **成员（Members）** > **管理（Manage）**：在整个实例中邀请、移除和更新用户
   * **角色（Roles）** > **管理项目角色（Manage project roles）**：仅创建、编辑和删除自定义项目角色
   * **角色（Roles）** > **管理所有角色（Manage all roles）**：创建、编辑和删除所有自定义角色（实例角色和项目角色）。选择此项会自动包含**管理项目角色（Manage project roles）**。
   * **API 密钥（API keys）** > **管理自己的（Manage own）**：创建和删除用户自己的 API 密钥
   * **API 密钥（API keys）** > **管理他人的（Manage others）**：查看和删除其他用户的 API 密钥。自动包含**管理自己的（Manage own）**。
   * **标签（Tags）** > **查看（View）**：查看所有标签
   * **标签（Tags）** > **管理（Manage）**：创建、编辑和删除标签
   * **项目（Projects）** > **创建（Create）**：创建新项目
   * **洞察（Insights）** > **查看（View）**：查看实例级别的洞察数据
6. 选择 **保存（Save）**。

## 将自定义实例角色分配给用户（Assign a custom instance role to users）

拥有**角色：管理所有角色（Roles: Manage all roles）**权限的用户可以分配自定义实例角色。

要分配自定义实例角色：

1. 前往 **设置（Settings）** > **用户（Users）**。
2. 找到你想要更新的用户。
3. 点击该用户当前的角色，打开角色下拉菜单。
4. 在**自定义角色（Custom roles）**下，选择你要分配的角色。

## 编辑自定义实例角色（Edit a custom instance role）

要更新现有的自定义实例角色：

1. 前往 **设置（Settings）** > **角色（Roles）** > **实例角色（Instance roles）**。
2. 找到你要编辑的自定义角色。
3. 选择**三点菜单（three-dot menu）** > **编辑（Edit）**。
4. 更新角色名称、描述或权限。
5. 选择 **保存更改（Save changes）**。

{% hint style="warning" %}
**编辑会影响所有已分配的用户（Editing affects all assigned users）**

对自定义实例角色的更改会立即作用于整个实例中拥有该角色的所有用户。也就是说：改一个人，等于同时改了一群人。
{% endhint %}

## 复制自定义实例角色（Duplicate a custom instance role）

要基于现有角色创建新角色（比如想做一个「和某某角色差不多，但少一个权限」的新角色）：

1. 前往 **设置（Settings）** > **角色（Roles）** > **实例角色（Instance roles）**。
2. 找到你要复制的角色。
3. 选择**三点菜单（three-dot menu）** > **复制（Duplicate）**。
4. 按需更新角色名称和权限。
5. 选择 **创建角色（Create role）**。

## 删除自定义实例角色（Delete a custom instance role）

要删除自定义实例角色：

1. 前往 **设置（Settings）** > **角色（Roles）** > **实例角色（Instance roles）**。
2. 找到你要删除的角色。
3. 选择**三点菜单（three-dot menu）** > **删除（Delete）**。
4. 确认删除。

{% hint style="info" %}
**删除前请先重新分配用户（Reassign users before deletion）**

如果有用户拥有该角色，请在删除之前先将其重新分配到其他角色，否则这些用户会失去相应权限。
{% endhint %}

## 权限参考（Permissions reference）

下表描述了**实例角色（Instance roles）**编辑器中出现的每个权限组及其复选框。翻译为中文便于对照界面查看。

| 权限组（Group） | 复选框（Checkbox） | 允许做什么（What it allows） |
| ----- | -------- | -------------- |
| 实例设置（Instance settings） | 管理（Manage） | 查看和更改全局实例设置 |
| 成员（Members） | 管理（Manage） | 在整个实例中邀请、移除和更新用户 |
| 角色（Roles） | 管理项目角色（Manage project roles） | 仅创建、编辑、复制、删除和分配自定义项目角色 |
| 角色（Roles） | 管理所有角色（Manage all roles） | 创建、编辑、复制、删除和分配所有自定义角色（实例角色和项目角色）。自动包含**管理项目角色（Manage project roles）**。 |
| API 密钥（API keys） | 管理自己的（Manage own） | 创建和删除用户自己的 API 密钥 |
| API 密钥（API keys） | 管理他人的（Manage others） | 查看和删除其他用户的 API 密钥。自动包含**管理自己的（Manage own）**。 |
| 标签（Tags） | 查看（View） | 查看所有标签 |
| 标签（Tags） | 管理（Manage） | 创建、编辑和删除标签 |
| 项目（Projects） | 创建（Create） | 创建新项目 |
| 洞察（Insights） | 查看（View） | 查看实例级别的洞察数据和使用数据 |

{% hint style="warning" %}
**权限提升风险（Privilege escalation risk）**

某些权限组合会造成「权限提升」风险（即：拥有普通权限的人可以通过操作变成更高权限，从而绕开安全限制）：

* 拥有**角色：管理所有角色（Roles: Manage all roles）**的用户可以编辑自己的自定义角色，给自己添加上原本未被授予的权限。
* 拥有**成员：管理（Members: Manage）**的用户可以邀请一个自己控制的用户，然后授予该用户管理员级别的访问权限。

只把这些权限分配给完全信任的用户，除非必要，避免组合使用它们。
{% endhint %}
