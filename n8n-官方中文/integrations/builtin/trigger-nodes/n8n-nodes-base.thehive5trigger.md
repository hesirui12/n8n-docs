---
title: TheHive 5 触发器节点文档
description: >-
  学习如何在 n8n 中使用 TheHive 5 触发器节点。按照本文档将
  TheHive 5 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: TheHive 5 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.thehive5trigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.thehive5trigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.thehive5trigger
layout:
  description:
    visible: false
---

# TheHive 5 触发器节点

> **大白话**：这个节点是 TheHive 5 安全事件平台的「警报哨兵」。当 TheHive 里发生"新建了警报、创建了案件、加了评论"等事件时，它就启动你的工作流，让安全团队自动收到通知、同步到其他工具。下面还教你如何在 TheHive 里配置 webhook，把这套监听接起来。

使用 TheHive 5 触发器节点来响应 [TheHive](https://strangebee.com/thehive/) 中的事件，并把 TheHive 与其他应用集成起来。n8n 内置支持多种多样的 TheHive 事件，包括警报（alerts）、案件（cases）、评论（comments）、页面（pages）和任务（tasks）。

在本页，你会看到 TheHive 5 触发器节点可以响应的事件列表，以及更多资源的链接。

{% hint style="info" %}
**TheHive 与 TheHive 5**

n8n 为 TheHive 提供了两个节点。如果你想使用 TheHive 的版本 5 API，请使用这个节点（TheHive 5 Trigger）。如果你想使用版本 3 或 4，请使用 [TheHive Trigger](n8n-nodes-base.thehivetrigger.md)。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [TheHive 5 Trigger integrations](https://n8n.io/integrations/thehive-5-trigger/) 页面。
{% endhint %}

## 事件（Events）

* Alert（警报）
	* Created（已创建）
	* Deleted（已删除）
	* Updated（已更新）
* Case（案件）
	* Created（已创建）
	* Deleted（已删除）
	* Updated（已更新）
* Comment（评论）
	* Created（已创建）
	* Deleted（已删除）
	* Updated（已更新）
* Observable（可观测项）
	* Created（已创建）
	* Deleted（已删除）
	* Updated（已更新）
* Page（页面）
	* Created（已创建）
	* Deleted（已删除）
	* Updated（已更新）
* Task（任务）
	* Created（已创建）
	* Deleted（已删除）
	* Updated（已更新）
* Task log（任务日志）
	* Created（已创建）
	* Deleted（已删除）
	* Updated（已更新）

## 相关资源（Related resources）

n8n 为 TheHive 5 提供了一个应用节点（app node）。你可以[在此处](../app-nodes/n8n-nodes-base.thehive5.md)找到该节点的文档。

关于该服务的更多信息，请参考 TheHive 的[官方文档](https://docs.strangebee.com/)。

## 在 TheHive 中配置 Webhook（Configure a webhook in TheHive）

要为你的 TheHive 实例配置 webhook：

1. 从 TheHive 5 触发器节点复制测试和生产 webhook URL。
2. 在 `application.conf` 文件中添加以下内容。这是 TheHive 的配置文件：

	```
	notification.webhook.endpoints = [
		{
			name: TESTING_WEBHOOK_NAME
			url: TESTING_WEBHOOK_URL
			version: 1
			wsConfig: {}
			includedTheHiveOrganisations: ["ORGANIZATION_NAME"]
			excludedTheHiveOrganisations: []
		},
		{
			name: PRODUCTION_WEBHOOK_NAME
			url: PRODUCTION_WEBHOOK_URL
			version: 1
			wsConfig: {}
			includedTheHiveOrganisations: ["ORGANIZATION_NAME"]
			excludedTheHiveOrganisations: []
		}
	]
	```

3. 把 `TESTING_WEBHOOK_URL` 和 `PRODUCTION_WEBHOOK_URL` 替换成你在上一步复制的 URL。
4. 把 `TESTING_WEBHOOK_NAME` 和 `PRODUCTION_WEBHOOK_NAME` 替换成你喜欢的端点名称。
5. 把 `ORGANIZATION_NAME` 替换成你的组织名称。
6. 执行下面的 cURL 命令来启用通知：
	```sh
	curl -XPUT -uTHEHIVE_USERNAME:THEHIVE_PASSWORD -H 'Content-type: application/json' THEHIVE_URL/api/config/organisation/notification -d '
	{
		"value": [
			{
			"delegate": false,
			"trigger": { "name": "AnyEvent"},
			"notifier": { "name": "webhook", "endpoint": "TESTING_WEBHOOK_NAME" }
			},
			{
			"delegate": false,
			"trigger": { "name": "AnyEvent"},
			"notifier": { "name": "webhook", "endpoint": "PRODUCTION_WEBHOOK_NAME" }
			}
		]
	}'
	```
