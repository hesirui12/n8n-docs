---
description: n8n 实例角色
contentType: reference
nodeTitle: 理解实例角色（Understand instance roles）
originalFilePath: user-management/account-types.md
originalUrl: 'https://docs.n8n.io/user-management/account-types'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/understand-instance-roles
layout:
  description:
    visible: false
---

# 实例角色 / Instance roles

每个用户都有**一个实例角色（instance role）**。实例角色决定了该用户在整个 n8n 实例上的权限和访问范围。

有三个内置的实例角色：**Owner（所有者）**、**Admin（管理员）** 和 **Member（成员）**。如果这些角色不满足你的需求，你可以创建带有细粒度权限的[自定义实例角色（custom instance roles）](set-permissions-and-roles-rbac/create-custom-instance-roles.md)。

{% hint style="info" %}
**功能可用性（Feature availability）**

Admin（管理员）角色在 **Pro（专业版）** 和 **Enterprise（企业版）** 套餐中可用。
{% endhint %}

{% hint style="info" %}
**实例角色与项目角色（Instance roles and project roles）**

n8n 有两个层级的角色。**实例角色**控制用户在整个实例上能做什么。**项目角色**（属于 [RBAC](set-permissions-and-roles-rbac/README.md) 的一部分）控制用户在**某个特定项目内**能做什么，同一个用户可以在不同的项目中拥有不同的项目角色。
{% endhint %}

{% hint style="info" %}
**为所有者创建一个 Member 角色账号**

n8n 建议所有者为自己创建第二个 **Member（成员）** 角色的账号。所有者可以看到和编辑所有工作流、凭证和项目。然而，**没有办法查看某个工作流是谁创建的**，所以如果你以所有者身份构建和编辑工作流，就有覆盖他人工作的风险。
{% endhint %}

{% hint style="info" %}
**大白话（三个角色的通俗理解）**：
* **Owner（所有者）**：整个 n8n 的「老板」。拥有全部权限，包括访问 Cloud 控制台（Cloud dashboard）。**注意**：权限最大 ≠ 干活最方便——老板号日常编辑工作流反而容易误伤同事的成果，所以官方建议老板用小号干活。
* **Admin（管理员）**：仅次于老板的「总经理」。能管用户、管所有工作流/凭证/项目、能用源代码控制，但**不能**访问 Cloud 控制台（这是 Owner 独有的）。
* **Member（成员）**：普通「员工」。管理自己的邮箱密码、自己的工作流和标签，**看不到**别人的工作流和凭证，**不能**删标签、加人、建项目。
{% endhint %}

| 权限（Permission） | Owner（所有者） | Admin（管理员） | Member（成员） |
| ---------- |------ | ----- | ------ |
| 管理自己的邮箱和密码（Manage own email and password） | ✅ | ✅ | ✅ |
| 管理自己的工作流（Manage own workflows） | ✅ | ✅ | ✅ |
| 查看、创建和使用标签（View, create, and use tags） | ✅ | ✅ | ✅ |
| 删除标签（Delete tags） | ✅ | ✅ | ❌ |
| 查看和共享所有工作流（View and share all workflows） | ✅ | ✅ | ❌ |
| 查看、编辑和共享所有凭证（View, edit, and share all credentials） | ✅ | ✅ | ❌ |
| 设置和使用[源代码控制（Source control）](../use-source-control-and-environments/README.md) | ✅ | ✅ | ❌ |
| 创建[项目（projects）](set-permissions-and-roles-rbac/organize-work-in-projects.md) | ✅ | ✅ | ❌ |
| 查看所有项目（View all projects） | ✅ | ✅ | ❌ |
| 添加和删除用户（Add and remove users） | ✅ | ✅ | ❌ |
| 访问 Cloud 控制台（Access the Cloud dashboard） | ✅ | ❌ | ❌ |

{% hint style="info" %}
**大白话（怎么读这张表）**：从左到右是「角色」，从上到下是「能力」，✅=可以，❌=不可以。可以看到三个角色的能力是逐级递减的：Owner 全有；Admin 和 Owner 的差距只在「Cloud 控制台」一项；Member 则只有「个人相关」的能力，没有全局能力。如果你发现团队里有人不该看到别人的工作流，多半是误给了 Admin 角色。
{% endhint %}

## 自定义实例角色 / Custom instance roles

如果内置角色不符合你的访问需求，你可以创建带有细粒度权限的自定义实例角色。自定义实例角色允许你授予特定的实例级能力（例如管理用户、标签或 API 密钥），而无需给出完整的 Admin（管理员）权限。

创建和管理自定义实例角色的说明，请参考[创建自定义实例角色（Create custom instance roles）](set-permissions-and-roles-rbac/create-custom-instance-roles.md)。
