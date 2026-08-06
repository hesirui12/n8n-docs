---
title: Discord 节点文档
description: >-
  学习如何在 n8n 中使用 Discord 节点。按照技术文档将 Discord
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: n8n-nodes-base.discord
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.discord/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.discord'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.discord'
layout:
  description:
    visible: false
---

# Discord 节点

> **大白话**：Discord 是游戏玩家和社群常用的聊天平台（类似"QQ 群 + 语音房"）。这个节点让 n8n 能自动操作 Discord——比如向频道发消息、管理频道、给成员加角色、用表情回应消息。举例：网站收到新订单，工作流自动把订单信息发到你的 Discord 频道，并 @ 相关人员。

使用 Discord 节点可以自动化处理 Discord 里的工作，并让 Discord 与其他应用程序互通。n8n 内置支持 Discord 的众多功能，包括在 Discord 频道中发送消息以及管理频道等。

本页列出了 Discord 节点支持的操作清单，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Discord 凭证](../../credentials/discord.md)。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/sYWM3IB0LEL4RkPx8ndF/" %}

## 支持的操作



- Channel（频道）
	- 创建
	- 删除
	- 获取
	- 获取多个
	- 更新
- Message（消息）
	- 删除
	- 获取
	- 获取多个
	- 用表情回应
	- 发送
	* 发送并等待回复
- Member（成员）
	- 获取多个
	- 添加角色
	- 移除角色

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/c0Jp2CWNEFSR2IfIVdlL/" %}



## 模板与示例


[浏览 n8n-nodes-base.discord 集成模板](https://n8n.io/integrations/discord) 或 [搜索全部模板](https://n8n.io/workflows/)

## 相关资源

关于该服务的更多信息，请参考 [Discord 的官方文档](https://discord.com/developers/docs/intro)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}

## 常见问题

遇到常见错误或问题以及建议的解决步骤，请参考 [常见问题](common-issues.md)。
