---
contentType: overview
title: 基于角色的访问控制（RBAC）
description: 在 n8n 中设置和使用基于角色的访问控制（RBAC）。
nodeTitle: 设置权限和角色（RBAC）
originalFilePath: user-management/rbac/index.md
originalUrl: 'https://docs.n8n.io/user-management/rbac'
url: >-
  https://docs.n8n.io/administer/manage-users-and-access/set-permissions-and-roles-rbac
layout:
  description:
    visible: false
---

# 基于角色的访问控制（RBAC）/ Role-based access control (RBAC)

{% hint style="info" %}
**功能可用性（Feature availability）**

* 项目角色（Project roles）在除 **Community（社区版）** 之外的所有套餐中可用。
* 自定义角色（Custom roles，包括实例级和项目级）需要 **Enterprise（企业版）** 套餐。

有关套餐的详细信息，请参阅 n8n 的[定价页面（pricing page）](https://n8n.io/pricing/)。
{% endhint %}

n8n 中的 RBAC 让你可以在**两个层级**上控制访问：

* **实例角色（Instance roles）**：决定用户在整个实例上能做什么。内置的实例角色有 Owner（所有者）、Admin（管理员）和 Member（成员）。你还可以创建自定义实例角色，以获得更细粒度的控制。请参考[实例角色（Instance roles）](../understand-instance-roles.md)。
* **项目角色（Project roles）**：决定用户在某个特定项目内能做什么。你把工作流和凭证分组到项目中，同一个用户可以在不同的项目中拥有不同的项目角色。请参考[查看可用角色（See available roles）](see-available-roles.md)。

{% hint style="info" %}
**大白话（两个层级怎么理解）**：可以类比一家公司：
* **实例角色** = 「职位」。你的职位决定了你在整个公司（所有部门）能干什么。
* **项目角色** = 「你在某个部门的头衔」。你在 A 项目可能是组长（Admin），在 B 项目可能只是组员（Editor），在 C 项目可能连门都进不去。
所以「Owner 身份的普通成员」是完全可能的——实例层面你是老板，但在具体某个项目里，你的权限按项目角色算。
{% endhint %}

本节提供了在 n8n 中设置和使用 RBAC 的指导。
