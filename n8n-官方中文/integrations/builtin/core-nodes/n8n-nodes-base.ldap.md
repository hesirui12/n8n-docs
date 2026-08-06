---
title: LDAP
description: >-
  n8n（工作流自动化平台）中 LDAP 节点的文档。
  包含使用指南和示例链接。
contentType:
  - integration
  - reference
nodeTitle: LDAP
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.ldap.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ldap'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.ldap'
layout:
  description:
    visible: false
---

# LDAP

> **大白话**：LDAP 是很多公司内部的"员工花名册系统"——里面按树状结构存着人员、部门、电脑、打印机等对象（比如 Active Directory 就是基于 LDAP 的）。这个节点让你在工作流里去查、建、改这些对象。常见场景：新员工入职自动在 LDAP 里建账号、定时同步人员信息、查询某人的部门或邮箱。如果你公司没有 LDAP 系统，这个节点暂时用不上，了解即可。

此节点允许你与 LDAP 服务器交互，用来创建（create）、查找（find）和更新（update）对象。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/ldap.md)找到此节点的身份验证信息。
{% endhint %}

> **小白提示**：LDAP 里的每个对象都有一个"唯一地址"叫 DN（Distinguished Name，专有名称），看起来像 `cn=zhangsan,ou=people,dc=company,dc=com`，作用类似文件路径，用来定位"这个人是哪棵树下的哪个节点"。

## 操作（Operations）

* [**比较（Compare）**](#比较) 一个属性
* [**创建（Create）**](#创建) 一个新条目
* [**删除（Delete）**](#删除) 一个条目
* [**重命名（Rename）**](#重命名) 一个现有条目的 DN
* [**搜索（Search）**](#搜索) LDAP
* [**更新（Update）**](#更新) 属性

请参考下文各节，了解如何为每个操作配置节点。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 比较（Compare）

使用以下参数配置此操作：

* **Credential to connect with（连接凭据）**：选择或创建一个 [LDAP 凭据](../credentials/ldap.md) 用于连接。
* **DN**：输入要比较的条目的专有名称（DN）。
* **Attribute ID（属性 ID）**：输入要比较的属性 ID。
* **Value（值）**：输入要比较的值。

> **小白提示**：Compare 就像"核对一个格子里的内容"。比如检查"张三这个人的手机号是不是 138xxxx"，是就返回匹配结果，方便后面做条件判断。

## 创建（Create）

使用以下参数配置此操作：

* **Credential to connect with（连接凭据）**：选择或创建一个 [LDAP 凭据](../credentials/ldap.md) 用于连接。
* **DN**：输入要创建的条目的专有名称（DN）。
* **Attributes（属性）**：添加你想要创建的 **Attribute ID（属性 ID）** / **Value（值）** 键值对。

## 删除（Delete）

使用以下参数配置此操作：

* **Credential to connect with（连接凭据）**：选择或创建一个 [LDAP 凭据](../credentials/ldap.md) 用于连接。
* **DN**：输入要删除的条目的专有名称（DN）。

## 重命名（Rename）

使用以下参数配置此操作：

* **Credential to connect with（连接凭据）**：选择或创建一个 [LDAP 凭据](../credentials/ldap.md) 用于连接。
* **DN**：输入要重命名的条目的当前专有名称（DN）。
* **New DN（新 DN）**：在此字段中输入条目的新专有名称（DN）。

## 搜索（Search）

使用以下参数配置此操作：

* **Credential to connect with（连接凭据）**：选择或创建一个 [LDAP 凭据](../credentials/ldap.md) 用于连接。
* **Base DN（基础 DN）**：输入要搜索的子树的专有名称（DN）。
* **Search For（搜索对象）**：选择要搜索的目录对象类（directory object class）。
* **Attribute（属性）**：选择要搜索的属性。
* **Search Text（搜索文本）**：输入要搜索的文本。使用 `*` 作为通配符。
* **Return All（返回全部）**：打开时，节点将返回所有结果。关闭时，节点将只返回不超过设定 **Limit（数量上限）** 的结果。
* **Limit（数量上限）**：仅当你关闭 **Return All** 时可用。输入要返回的最大结果数量。

> **小白提示**：搜索就相当于在"员工花名册"里按条件找人。比如在 Base DN 填公司根目录、Search For 选"人员"、属性选"邮箱"、Search Text 填 `*@company.com`，就能把公司所有员工邮箱都找出来。`*` 是"任意字符"的意思。

### 搜索选项（Search options）

你还可以使用以下选项配置此操作：

* **Attribute Names or IDs（属性名称或 ID）**：输入要返回的属性列表，用逗号分隔。可以从列表中选择，也可以使用表达式指定 ID。
* **Page Size（每页大小）**：输入一次请求的最大结果数量。设置为 0 可禁用分页。
* **Scopes（搜索范围）**：在 **Base DN** 处或其下要搜索潜在匹配的条目集合。可选：
    * **Base Tree（基础树）**：通常被称为 subordinateSubtree 或简称为"subordinates（下级）"。选择此选项将搜索 **Base DN** 条目的下级条目，但不搜索 **Base DN** 条目本身。
    * **Single Level（单层）**：通常被称为"one"。选择此选项将只搜索 **Base DN** 条目的直接子条目。
    * **Whole Subtree（整个子树）**：通常被称为"sub"。选择此选项将搜索 **Base DN** 条目及其所有任意深度的下级条目。

> **小白提示**：搜索范围就是"往多深的地方找"：
> - **Single Level**：只找"这一层的孩子"（一层）。
> - **Base Tree**：找"这一层往下的所有子孙"，但不包括起点本身。
> - **Whole Subtree**：从起点开始，连同它自己和所有子孙全找一遍（最彻底）。

更多关于搜索范围的信息，请参考 [LDAP 搜索操作（The LDAP Search Operation）](https://ldap.com/the-ldap-search-operation/)。

## 更新（Update）

使用以下参数配置此操作：

* **Credential to connect with（连接凭据）**：选择或创建一个 [LDAP 凭据](../credentials/ldap.md) 用于连接。
* **DN**：输入要更新的条目的专有名称（DN）。
* **Update Attributes（更新属性）**：选择是 **Add（添加）** 新属性、**Remove（移除）** 现有属性，还是 **Replace（替换）** 现有属性。
* 然后输入你想要更新的 **Attribute ID（属性 ID）** / **Value（值）** 键值对。

> **小白提示**：比如员工换了手机号：选 **Replace**，属性填手机号字段，值填新号码，就能把花名册里的旧号码替换掉。

## 模板和示例（Templates and examples）

[浏览 LDAP 集成模板](https://n8n.io/integrations/ldap) 或 [搜索所有模板](https://n8n.io/workflows/)
