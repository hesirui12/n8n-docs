---
title: Notion 节点常见问题
contentType:
  - integration
  - reference
priority: high
nodeTitle: Notion 节点常见问题
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.notion/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.notion/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.notion/common-issues
description: >-
  n8n（一个工作流自动化平台）中 Notion 节点的常见问题与疑问文档。包括问题详情
  和建议的解决方案。
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

# 常见问题

> **大白话**：这一页汇总了用 Notion 节点时最容易踩的坑和解决办法：数据库「关联属性」在 n8n 里选不到（要用双向关联）、想创建「可折叠标题」节点不支持（要用 HTTP Request 手工改属性）、以及字段传了空值报校验错误（要先检查再发送）。照着步骤排查就行。

这里列出使用 [Notion 节点](./README.md) 时常见的一些错误和问题，以及解决或排查步骤。

## 关联属性（Relation property）显示不出来

Notion 节点只支持显示[双向关联](https://www.notion.com/help/relations-and-rollups)（two-way relations）的数据关联属性。当你用双向关系连接两个 Notion 数据库后，在使用 Notion 节点的 **Database Page（数据库页面）** 资源时，就可以按关联属性来选择或筛选。

要启用双向关联，请在 Notion 里编辑该关联属性，并开启 **Show on \[相关数据库名称]**（显示在\[相关数据库]上）选项，以创建一条反向关联。在新的上下文中为这个关联选一个名称。这样该关联在 n8n 中筛选或选择时就可以用了。

如果你需要处理单向关联的 Notion 数据库，可以用[HTTP Request 节点](../../core-nodes/n8n-nodes-base.httprequest/README.md)配合你现有的 Notion 凭证来实现。例如，要更新一条单向关联，你可以向下面的 URL 发送一个 `PATCH` 请求：

```
https://api.notion.com/v1/pages/<page_id>
```

启用 **Send Body（发送请求体）**，把 **Body Content Type（请求体内容类型）** 设为 **JSON**，并将 **Specify Body（指定请求体）** 设为 **Using JSON（使用 JSON）**。然后你可以在 **JSON** 字段里填入类似下面的 JSON 对象：

```json
{
	"properties": {
		"Account": {
			"relation": [
				{
					"id": "<your_relation_ID>"
				}
			]
		}
	}
}
```

## 创建可折叠标题（Toggle heading）

Notion 节点允许你在 **Page（页面）**、**Database Page（数据库页面）** 或 **Block（内容块）** 资源中添加标题（heading）和折叠块（toggle）。但 Notion 节点本身目前还不支持直接创建「可折叠的标题」。

你可以通过先创建一个普通标题、再修改它来启用 [`is_toggleable` 属性](https://developers.notion.com/reference/block#headings)，以此绕过限制：

1. 用 Notion 节点添加一个标题。
2. 选择你要把标题加到哪个资源上：
   * 要新建一个带标题的页面，选择 **Page** 或 **Database Page** 资源，使用 **Create（创建）** 操作。
   * 要把标题添加到已有页面，选择 **Block** 资源，使用 **Append After（在后面追加）** 操作。
3. 选择 **Add Block（添加块）**，并把 **Type Name or ID（类型名称或 ID）** 设为 **Heading 1**、**Heading 2** 或 **Heading 3**。
4. 添加一个 [HTTP Request 节点](../../core-nodes/n8n-nodes-base.httprequest/README.md) 连接到 Notion 节点后面，选择 `GET` 方法。
5. 把 **URL** 设为 `https://api.notion.com/v1/blocks/<block_ID>`。例如，如果你是把标题添加到已有页面，可以使用这样的 URL：`https://api.notion.com/v1/blocks/{{ $json.results[0].id }}`。如果你是新建页面而不是追加内容块，可能需要先查询页面内容来发现块 ID。
6. 选择 **Predefined Credential Type（预定义凭证类型）**，并连接你现有的 Notion 凭证。
7. 在 HTTP Request 节点后面添加一个 [Edit Fields (Set) 节点（编辑字段/设置）](../../core-nodes/n8n-nodes-base.set.md)。
8. 添加 `heading_1.is_toggleable` 作为一个新的 **Boolean（布尔）** 字段，值设为 `true`。如果用的是别的标题级别，把 `heading_1` 换成对应的级别即可。
9. 在 Edit Fields (Set) 节点后面添加第二个 HTTP Request 节点。
10. 把 **Method（方法）** 设为 `PATCH`，并使用 `https://api.notion.com/v1/blocks/{{ $json.id }}` 作为 **URL** 值。
11. 选择 **Predefined Credential Type（预定义凭证类型）**，并连接你现有的 Notion 凭证。
12. 启用 **Send Body（发送请求体）** 并设置一个参数。
13. 把参数 **Name（名称）** 设为 `heading_1`（换成你实际使用的标题级别）。
14. 把参数 **Value（值）** 设为 `{{ $json.heading_1 }}`（换成你实际使用的标题级别）。

上面的流程会创建一个普通的标题块，然后查询这个新建的标题，添加 `is_toggleable` 属性，最后更新该标题块。

## 处理空值（null）和空字符串

如果你提交的字段带有空值或 null 值，Notion 节点可能会报校验错误。当你从前面的节点填充字段、而该数据缺失时，就可能出现这种情况。

解决办法是：在把数据发送给 Notion 之前，先检查字段数据是否存在，或者使用默认值。

要在执行 Notion 节点前检查数据，可以使用 [If 节点](../../core-nodes/n8n-nodes-base.if.md) 检查字段是否未设置。这样你就可以用 [Edit Fields (Set) 节点](../../core-nodes/n8n-nodes-base.set.md) 在字段没有有效值时按条件把它移除。

另外，你也可以在传入数据没有提供值的时候，设置一个默认值。
