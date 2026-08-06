---
title: AWS Cognito 节点文档
description: >-
  学习如何在 n8n 中使用 AWS Cognito 节点。按照技术文档将 AWS Cognito
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: AWS Cognito 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.awscognito.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awscognito'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.awscognito'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：AWS Cognito 是 AWS 的「用户账户系统」，管注册、登录、用户身份验证。它有三样东西：User Pool（用户池，装着用户账号）、User（用户）、Group（用户组，可以给一组人统一发权限）。这个节点让你在 n8n 里自动管理这些。典型场景：在别的系统创建了用户 → 自动同步到 Cognito 用户池并加入指定组。
{% endhint %}

# AWS Cognito 节点

使用 AWS Cognito 节点来自动化你在 AWS Cognito 中的工作，并把它与其它应用集成。n8n 内置支持 AWS Cognito 的大量功能，包括创建、获取、更新、删除组、用户和用户池。

在本页你可以看到 AWS Cognito 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

本节点的认证信息见[这里](../credentials/aws.md)。
{% endhint %}

## 操作

* Group（用户组）:
	* Create（创建）：创建一个新组。
	* Delete（删除）：删除一个已有组。
	* Get（获取）：获取某个已有组的详细信息。
	* Get Many（获取多个）：获取一组用户组列表。
	* Update（更新）：更新一个已有组。
* User（用户）:
	* Add to Group（加入组）：把已有用户加入一个组。
	* Create（创建）：创建一个新用户。
	* Delete（删除）：删除一个用户。
	* Get（获取）：获取某个已有用户的信息。
	* Get Many（获取多个）：获取用户列表。
	* Remove From Group（移出组）：把用户从一个组中移除。
	* Update（更新）：更新一个已有用户。
* User Pool（用户池）:
	* Get（获取）：获取某个已有用户池的信息。

## 模板与示例

[浏览 AWS Cognito 节点的官方集成模板](https://n8n.io/integrations/aws-cognito)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [AWS Cognito 官方文档](https://docs.aws.amazon.com/cognito/)。

（官方此处嵌入了通用资源组件，此处从略。）
