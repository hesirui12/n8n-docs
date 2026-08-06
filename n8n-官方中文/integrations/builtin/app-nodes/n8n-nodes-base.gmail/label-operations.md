---
title: Gmail 节点 Label 操作文档
description: >-
  了解如何在 n8n 中使用 Gmail 节点 Label 节点。按照技术文档把 Gmail 节点 Label 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Gmail 节点 Label 操作文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.gmail/label-operations.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/label-operations
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/label-operations
layout:
  description:
    visible: false
---
# Gmail 节点 Label 操作

> **大白话**：这个页面教你用 Gmail 节点对「标签」做增删查等操作。标签就是 Gmail 里给邮件分类的小标记（比如"重要"、"工作"），你可以用它新建、删除、获取单个或批量获取标签。

使用 Label 操作可以在 Gmail 中创建、删除、获取单个标签，或列出多个标签。关于 Gmail 节点本身的更多信息，请参考 [Gmail 节点](README.md)。

## 创建标签

用这个操作来创建一个新标签。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Label**。
* **Operation**（操作）：选择 **Create**。
* **Name**（名称）：输入标签的显示名称。

### 创建标签选项

用这些选项进一步调整节点的行为：

* **Label List Visibility**（标签列表可见性）：设置在 Gmail 网页版的标签列表中，该标签是否可见。选项如下：
    * **Hide**（隐藏）：不在标签列表中显示该标签。
    * **Show**（显示，默认）：在标签列表中显示该标签。
    * **Show if Unread**（有未读时显示）：只有当带有该标签的邮件存在未读时，才显示该标签。
* **Message List Visibility**（邮件列表可见性）：设置在 Gmail 网页版的邮件列表中，带有该标签的邮件是否可见。选择 **Show**（显示）或 **Hide**（隐藏）。

更多信息请参考 [Gmail API 方法：users.labels.create](https://developers.google.com/gmail/api/reference/rest/v1/users.labels/create) 文档。

## 删除标签

用这个操作删除一个已有标签。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Label**。
* **Operation**（操作）：选择 **Delete**。
* **Label ID**（标签 ID）：输入要删除的标签的 ID。

更多信息请参考 [Gmail API 方法：users.labels.delete](https://developers.google.com/gmail/api/reference/rest/v1/users.labels/delete) 文档。

## 获取单个标签

用这个操作获取一个已有标签。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Label**。
* **Operation**（操作）：选择 **Get**。
* **Label ID**（标签 ID）：输入要获取的标签的 ID。

更多信息请参考 [Gmail API 方法：users.labels.get](https://developers.google.com/gmail/api/reference/rest/v1/users.labels/get) 文档。

## 获取多个标签

用这个操作一次性获取两个或更多标签。

填写以下参数：

* 选择 **Credential to connect with**（要连接的凭证），或新建一个。
* **Resource**（资源）：选择 **Label**。
* **Operation**（操作）：选择 **Get Many**。
* **Return All**（返回全部）：选择节点是返回所有标签（开启）还是只返回设定数量上限的标签（关闭）。
* **Limit**（限制）：输入最多返回的标签数量。只有关闭了 **Return All** 时才使用。

更多信息请参考 [Gmail API 方法：users.labels.list](https://developers.google.com/gmail/api/reference/rest/v1/users.labels/list) 文档。

## 常见问题

如果遇到常见的报错或问题，以及对应的解决步骤，请参考 [常见问题](common-issues.md)。
