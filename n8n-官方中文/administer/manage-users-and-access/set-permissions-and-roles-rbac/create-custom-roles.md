---
title: 自定义角色（Custom roles）
description: n8n 中自定义角色概述，包括项目级别和实例级别。
contentType: overview
nodeTitle: 自定义角色（Custom roles）
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles
layout:
  description:
    visible: false
---

# 自定义角色（Custom roles）

{% hint style="info" %}
**功能可用性（Feature availability）**

自定义角色适用于自托管企业版（Self-hosted Enterprise）和云企业版（Cloud Enterprise）套餐。有关套餐详情，请参阅 n8n 的[定价页面](https://n8n.io/pricing/)。
{% endhint %}

{% hint style="info" %}
**小白解释：** n8n 内置了固定的角色（比如 Admin 管理员、Member 成员）。但有时候你希望给某人「能管理用户，但不能改系统设置」这种内置角色做不到的组合——这时就用「自定义角色」自己拼一个。自定义角色分两种：**实例角色**管「整个平台」（全平台范围），**项目角色**管「某个项目小组」（项目内范围）。先看完这篇概览，再按需进入对应的详细教程。
{% endhint %}

自定义角色让你可以定义超出内置角色的精细权限。与其给用户完整的管理员（Admin）访问权限，你可以创建一个只包含他们所需能力的角色。

n8n 有两种类型的自定义角色：

* **自定义项目角色（Custom project roles）**：定义特定项目内的权限，包括对工作流、凭据、文件夹和其他项目资源的访问权限。把它们分配给项目成员，控制他们在该项目内能做什么。

  参见[创建自定义项目角色](create-custom-project-roles.md)。

* **自定义实例角色（Custom instance roles）**：定义适用于整个 n8n 实例的权限，例如管理用户、标签、API 密钥或自定义角色本身。把它们分配给需要特定实例级能力但又不需要完整管理员权限的用户。

  参见[创建自定义实例角色](create-custom-instance-roles.md)。
