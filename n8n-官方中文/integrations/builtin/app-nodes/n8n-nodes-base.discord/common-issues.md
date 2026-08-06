---
title: Discord 节点常见问题
contentType:
  - integration
  - reference
priority: high
nodeTitle: Discord 节点常见问题
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.discord/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.discord/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.discord/common-issues
description: >-
  n8n（工作流自动化平台）中 Discord 节点的常见问题与答疑文档。
  包含问题说明和建议的解决方法。
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

> **大白话**：这篇是 Discord 节点出问题时的排查指南——比如嵌入消息（Embed）怎么加自定义字段、怎么在消息里 @ 用户和频道。如果你发消息失败或格式不对，先来看这里。

这里汇总了使用 [Discord 节点](./README.md) 时常见的一些报错和问题，以及排查解决步骤。

## 给嵌入消息（Embed）添加额外字段

Discord 消息可以附带"嵌入内容"（embed）——一种富文本预览组件，可以包含标题、描述、图片、链接等等。

使用 **Message** 资源下的 **Send** 操作时，Discord 节点支持嵌入消息。勾选 **Add Embeds** 即可设置额外字段，包括 Description（描述）、Author（作者）、Title（标题）、URL 和 URL Image（图片链接）。

如果要添加默认选项里没有的字段，把 **Input Method**（输入方式）改为 **Raw JSON**，然后在 **Value** 参数里写一个 JSON 对象，定义你想包含的[字段名](https://discord.com/developers/docs/resources/message#embed-object)和值。

例如，`footer`（页脚）和 `fields`（字段列表）这两个用 **Enter Fields** 输入方式时是没有的，你可以用下面这样的 JSON 对象来实现：

```json
{
    "author": "My Name",
	"url": "https://discord.js.org",
	"fields": [
		{
			"name": "Regular field title",
			"value": "Some value here"
		}
	],
	"footer": {
		"text": "Some footer text here",
		"icon_url": "https://i.imgur.com/AfFp7pu.png"
	}
}
```

想了解更多嵌入消息的知识，可以看 [Using Webhooks and Embeds | Discord](https://discord.com/safety/using-webhooks-and-embeds)。

如果你在用 Discord 节点处理嵌入消息时遇到问题，也可以用 [HTTP Request](../../core-nodes/n8n-nodes-base.httprequest/README.md) 节点配合你现有的 Discord 凭证，向下面的地址发送 `POST` 请求：

```
https://discord.com/api/v10/channels/<CHANNEL_ID>/messages
```

在请求体（body）中，把嵌入消息的信息放进消息内容里，像这样：

```json
{
	"content": "Test",
	"embeds": [
		{
			"author": "My Name",
			"url": "https://discord.js.org",
			"fields": [
				{
					"name": "Regular field title",
					"value": "Some value here"
				}
			],
			"footer": {
				"text": "Some footer text here",
				"icon_url": "https://i.imgur.com/AfFp7pu.png"
			}
		}
	]
}
```

## @提及用户和频道

要在 Discord 消息里 @ 提及用户和频道，需要按照 [Discord 的消息格式规范](https://discord.com/developers/docs/reference#message-formatting)来写消息。

要 @ 一个用户，你得知道这个 Discord 用户的用户 ID。注意：用户 ID 和用户的显示名称不是一回事。同样，要链接到某个频道，也需要该频道的频道 ID。

如何开启开发者模式并复制用户/频道 ID，可以参考 [Discord 官方文档：查找用户/服务器/消息 ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID)。

拿到用户 ID 或频道 ID 之后，用下面的语法格式来写消息：

* **用户**：`<@USER_ID>`
* **频道**：`<#CHANNEL_ID>`
* **角色**：`<@&ROLE_ID>`
