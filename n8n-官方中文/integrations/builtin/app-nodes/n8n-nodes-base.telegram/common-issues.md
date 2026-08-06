---
title: Telegram 节点常见问题
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Telegram 节点常见问题
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.telegram/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/common-issues
description: >-
  n8n（工作流自动化平台）中 Telegram 节点的常见问题和疑问文档。
  包含问题详情和建议的解决方案。
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

{% hint style="info" %}
**大白话**：这一页收集了用 Telegram 节点时最常碰到的 4 个问题：①机器人没加进频道导致发消息报错；②想给群发消息但不知道群的 Chat ID 怎么查（给了 3 种方法）；③Telegram 限制每秒最多发 30 条消息，怎么绕过；④发出去的消息末尾自带「This message was sent automatically with n8n」这句 n8n 小尾巴，怎么去掉。小白照着步骤做就行。
{% endhint %}

# 常见问题

以下是 [Telegram 节点](./README.md) 的常见错误和问题，以及排查或解决步骤。

## 把机器人添加进 Telegram 频道

机器人要向频道发消息，你必须先把机器人加进这个频道。如果没加，你会看到类似这样的报错：`Error: Forbidden: bot is not a participant of the channel`（翻译：错误：禁止访问——机器人不是该频道的成员）。

把机器人加进频道的步骤：

1. 在 Telegram 应用中，进入目标频道，点击频道名称。
2. 将频道标记为**公开频道（public channel）**。
3. 点击 **Administrators**（管理员）> **Add Admin**（添加管理员）。
4. 搜索机器人的用户名并选中它。
5. 点击右上角的对勾，将机器人添加进频道。

## 获取 Chat ID（聊天 ID）

`@channelusername` 这种形式只能用于公开频道。要和 Telegram 群组交互，你需要该群组的 Chat ID。

有三种方法可以拿到这个 ID：

1. **通过 Telegram Trigger（触发器）**：在工作流中使用 [Telegram Trigger（触发器）](../../trigger-nodes/n8n-nodes-base.telegramtrigger/README.md) 节点来获取 Chat ID。该节点可以响应不同事件，执行成功后会返回一个 Chat ID。
2. **通过网页浏览器**：在网页浏览器中打开 Telegram，进入群聊。该群的 Chat ID 就是字母 "g" 后面的一串数字。在 n8n 里输入时，要在群 Chat ID 前面加上 `-`（负号）。
3. **邀请 Telegram 的 [@RawDataBot](https://t.me/RawDataBot) 进群**：把它加进来后，它会输出一个 JSON 文件，其中包含一个 `chat` 对象。该对象的 `id` 就是群的 Chat ID。拿到后记得把 RawDataBot 从群里移除。

## 每秒发送超过 30 条消息

Telegram API 有[限制](https://core.telegram.org/bots/faq#broadcasting-to-users)：每秒最多发送 30 条消息。要发送超过 30 条消息，请按以下步骤：

1. **Loop Over Items（遍历条目）节点**：使用 [Loop Over Items](../../core-nodes/n8n-nodes-base.splitinbatches.md) 节点，从你的数据库中每次最多取 30 个 Chat ID。
2. **Telegram 节点**：把 Telegram 节点和 Loop Over Items 节点连接起来。使用**表达式编辑器（Expression Editor）**从 Loop Over Items 节点中选择 Chat ID。
3. **Code（代码）节点**：把 [Code](../../core-nodes/n8n-nodes-base.code/README.md) 节点与 Telegram 节点连接。用 Code 节点让流程暂停几秒钟，再抓取下一批 Chat ID。把这个节点和 Loop Over Items 节点连接起来。

你也可以直接使用这个[现成工作流](https://n8n.io/workflows/772)。

## 去掉发送消息末尾的 n8n 署名

如果你用这个节点[发送 Telegram 消息](message-operations.md#send-message)，消息末尾会自动附带一段 n8n 署名：

> This message was sent automatically with n8n
> （翻译：这条消息由 n8n 自动发送）

去掉这段署名的步骤：

1. 在节点的 **Additional Fields**（附加字段）部分，点击 **Add Field**（添加字段）。
2. 选择 **Append n8n attribution**（追加 n8n 署名）。
3. 把开关关掉。

更多信息请参考 [Send Message 的附加字段](message-operations.md#send-message-additional-fields)。
