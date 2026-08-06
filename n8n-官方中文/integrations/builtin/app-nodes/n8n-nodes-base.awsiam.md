---
title: AWS IAM 节点文档
description: >-
  学习如何在 n8n 中使用 AWS IAM 节点。按照技术文档将 AWS IAM
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS IAM 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.awsiam.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awsiam'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awsiam'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：AWS IAM（Identity and Access Management，身份与访问管理）是 AWS 的「账号权限管家」：谁（User 用户）能用什么、谁能进哪个组（Group），都归它管。这个节点让你在 n8n 里自动创建/删除用户、组，以及把用户加入或移出组。典型场景：新员工入职 → 自动创建 AWS 账号并加入对应权限组；离职 → 自动禁用。
{% endhint %}

# AWS IAM 节点

使用 AWS IAM 节点来自动化你在 AWS Identity and Access Management（IAM，身份与访问管理）中的工作，并把它与其它应用集成。n8n 内置支持 AWS IAM 的大量功能，包括创建、更新、获取、删除用户和组，以及管理组成员关系。

在本页你可以看到 AWS IAM 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

本节点的认证信息见[这里](../credentials/aws.md)。
{% endhint %}

## 操作

* **User（用户）**:
	* **Add to Group（加入组）**：把已有用户加入一个组。
	* **Create（创建）**：创建一个新用户。
	* **Delete（删除）**：删除一个用户。
	* **Get（获取）**：获取一个用户。
	* **Get Many（获取多个）**：获取用户列表。
	* **Remove From Group（移出组）**：把用户从一个组中移除。
	* **Update（更新）**：更新一个已有用户。
* **Group（组）**:
	* **Create（创建）**：创建一个新组。
	* **Delete（删除）**：删除一个组。
	* **Get（获取）**：获取一个组。
	* **Get Many（获取多个）**：获取组列表。
	* **Update（更新）**：更新一个已有组。

## 模板与示例

[浏览 AWS IAM 节点的官方集成模板](https://n8n.io/integrations/aws-iam)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [AWS IAM 官方文档](https://docs.aws.amazon.com/IAM/latest/APIReference/welcome.html)。

（官方此处嵌入了通用资源组件，此处从略。）
