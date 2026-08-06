---
title: Telegram 凭证
description: >-
  Telegram 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Telegram 的身份。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Telegram credentials
originalFilePath: integrations/builtin/credentials/telegram.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/telegram
url: https://docs.n8n.io/integrations/builtin/credentials/telegram
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

# Telegram 凭证

{% hint style="info" %}
**大白话**：Telegram 是流行的即时通讯软件，n8n 经常用它来「发消息到群里/给用户」。n8n 连它只需要一个 **bot 的 Access Token（机器人访问令牌）**。获取方法：在 Telegram 里找官方机器人 **BotFather**，发 `/newbot` 命令创建一个新机器人，它会给你一串令牌（形如一串数字加冒号加字母），复制填进 n8n 就行。注意机器人的用户名必须以 `bot` 结尾。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Telegram](../app-nodes/n8n-nodes-base.telegram/README.md)
* [Telegram Trigger（触发器）](../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md)

## 先决条件

注册一个 [Telegram](https://telegram.org/) 账号。

## 支持的验证方式

* API bot access token（API 机器人访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Telegram Bot API 文档](https://core.telegram.org/bots/api)。

关于创建和使用机器人的更多信息，请参考 [Telegram Bot Features（机器人功能）](https://core.telegram.org/bots/features) 文档。

## 使用 API bot access token（API 机器人访问令牌）

要配置这个凭证，你需要：

* 一个 bot 的 **Access Token（访问令牌）**

生成你的访问令牌：

1. 和 [BotFather](https://telegram.me/BotFather) 开始对话。
2. 输入 `/newbot` 命令来创建一个新机器人。
3. BotFather 会问你要新机器人的名称和用户名：
   * **name（名称）** 是机器人在联系人详情等地方显示的名字。之后可以修改。
   * **username（用户名）** 是在搜索、提及和 t.me 链接里使用的短名称。创建用户名时请遵守以下规则：
     * 长度必须在 5 到 32 个字符之间。
     * 不区分大小写。
     * 只能包含拉丁字母、数字和下划线。
     * 必须以 `bot` 结尾，比如 `tetris_bot` 或 `TetrisBot`。
     * 用户名之后不能修改。
4. 复制 BotFather 生成的 bot **token（令牌）**，填进 n8n 的 **Access Token（访问令牌）** 字段。

更多信息请参考 [BotFather 创建新机器人文档](https://core.telegram.org/bots/features#creating-a-new-bot)。
