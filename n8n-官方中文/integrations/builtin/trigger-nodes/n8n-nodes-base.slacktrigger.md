---
title: Slack 触发器节点文档
description: >-
  学习如何在 n8n 中使用 Slack 触发器节点。按照本文档将
  Slack 触发器节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Slack 触发器节点文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.slacktrigger.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.slacktrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.slacktrigger
layout:
  description:
    visible: false
---

# Slack 触发器节点

> **大白话**：这个节点是 Slack 工作群的「消息哨兵」。它盯着 Slack 里的消息、表情回应、新建频道等事件，一有动静就启动你的工作流。比如：有人 @ 你的机器人 → 自动回复；有新消息发到某个频道 → 自动归档或转发。它是个触发器节点，放在工作流开头用。

使用 Slack 触发器节点来响应 [Slack](https://slack.com/) 中的事件，并把 Slack 与其他应用集成起来。n8n 内置支持多种多样的 Slack 事件，包括新消息、表情回应和新频道。

在本页，你会看到 Slack 触发器节点可以响应的事件列表，以及更多资源的链接。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/slack.md)找到此节点的身份验证信息。
{% endhint %}
{% hint style="info" %}
**示例和模板（Examples and templates）**

想查看使用示例和模板来快速上手，请访问 n8n 的 [Slack integrations](https://n8n.io/integrations/slack-trigger/) 页面。
{% endhint %}

## 事件（Events）

* **Any Event（任意事件）**：只要 Slack 里发生任何事件，节点就触发。
* **App Home Opened（应用主页被打开）**：当用户打开你 Slack 应用的 [App Home（应用主页）](https://api.slack.com/surfaces/app-home) 标签页时触发。
* **Bot / App Mention（机器人/应用被提及）**：当你的机器人或应用在某个频道里被[提及](https://slack.com/help/articles/205240127-Use-mentions-in-Slack)时触发。
* **File Made Public（文件被设为公开）**：当文件被[设为公开](https://slack.com/help/articles/4412651915539-Manage-public-file-sharing)时触发。
* **File Shared（文件被分享）**：当文件在应用所在的频道里被[分享](https://slack.com/help/articles/201330736-Add-files-to-Slack)时触发。
* **New Message Posted to Channel（新消息发布到频道）**：当新消息发布到应用所在的频道时触发。
* **New Public Channel Created（新公开频道创建）**：当创建了新的[公开频道](https://slack.com/help/articles/360017938993-What-is-a-channel)时触发。
* **New User（新用户）**：当有新人加入 Slack 时触发。
* **Reaction Added（表情回应被添加）**：当消息上被添加了[表情回应](https://slack.com/help/articles/202931348-Use-emoji-and-reactions)时触发。

## 参数（Parameters）

设置好要触发的事件后，可以用其余参数进一步定义节点的行为：

* **Watch Whole Workspace（监听整个工作区）**：是否监听工作区内所有频道中所选的 **Events（事件）**（打开 = 监听，关闭 = 不监听，默认关闭）。<br>

    <div data-gb-custom-block data-tag="hint" data-style="warning" class="hint hint-warning"><p><strong>注意（Caution）</strong></p><p>开启后，你的机器人或应用所在任何频道里的每个事件都会消耗一次执行额度。请谨慎使用！</p></div>

* **Channel to Watch（要监听的频道）**：选择节点要监听所选 **Events（事件）** 的频道。只有当你没有开启 **Watch Whole Workspace（监听整个工作区）** 时，这个参数才会出现。你可以通过以下方式选择频道：
    * **From list（从列表选择）**：节点用你的凭据去查询工作区里的频道列表，方便你选择想要的频道。
    * **By ID（按 ID）**：输入你想监听的频道 ID。Slack 会在频道详情底部显示频道 ID，并提供一键复制按钮。
    * **By URL（按 URL）**：输入你想监听的频道 URL，格式为 `https://app.slack.com/client/<channel-address>`。
* **Download Files（下载文件）**：是否下载文件并在节点输出中使用（打开 = 下载，关闭 = 不下载，默认关闭）。配合 **File Made Public（文件被设为公开）** 和 **File Shared（文件被分享）** 事件使用。

## 选项（Options）

当你 **Add Option（添加选项）** 时，可以进一步细化节点的行为：

* **Resolve IDs（解析 ID）**：是否把 ID 解析成对应的名称并返回（打开 = 解析，关闭 = 不解析，默认关闭）。
* **Usernames or IDs to ignore（要忽略的用户名或 ID）**：选择用户名，或输入一串以逗号分隔的编码用户 ID，来忽略来自这些用户的事件。可以从列表中选择，也可以用[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)来指定 ID。
* **Emoji Names to Filter（要过滤的表情名称）**：输入一个以逗号分隔（**不是**冒号分隔）的表情名称列表（例如 `thumbsup, eyes, white_check_mark`），把 **Reaction Added（表情回应被添加）** 事件限制为只针对这些特定回应。留空则任何回应都会触发。

## 相关资源（Related resources）

n8n 为 Slack 提供了一个应用节点（app node）。你可以[在此处](../app-nodes/n8n-nodes-base.slack/README.md)找到该节点的文档。

在 n8n 官网查看[示例工作流和相关内容](https://n8n.io/integrations/slack-trigger/)。

更多 API 细节请参考 [Slack 的官方文档](https://api.slack.com/apis/connections/events-api)。

## 所需权限范围（Required scopes）

要使用此节点，你需要在 Slack 中创建一个应用，并启用事件订阅（event subscriptions）。更多信息请参考 [Slack credentials | Slack Trigger configuration（Slack 凭据 | Slack 触发器配置）](../credentials/slack.md#slack-trigger-configuration)。

你必须为你的 Slack 应用添加合适的权限范围（scopes），这个触发器节点才能正常工作。

该节点至少需要 [conversations.list](https://api.slack.com/methods/conversations.list) 和 [users.list](https://api.slack.com/methods/users.list) 方法的权限范围。完整的权限范围列表请查看 [Scopes | Slack credentials（权限范围 | Slack 凭据）](../credentials/slack.md#scopes)。

## 验证 Webhook（Verify the webhook）

从版本 `1.106.0` 开始，你可以在配置 [Slack 凭据](../credentials/slack.md#slack-trigger-configuration)时设置一个 [Slack Signing Secret（Slack 签名密钥）](https://api.slack.com/authentication/verifying-requests-from-slack#signing_secrets_admin_page)。设置后，Slack 触发器节点会自动验证请求确实来自 Slack，并且带有可信签名。n8n 建议设置它，以确保你只处理从 Slack 发来的请求。

## 常见问题（Common issues）

以下是使用 Slack 触发器节点时的一些常见错误和问题，以及解决或排查步骤。

### 工作流只在测试或生产环境中生效（Workflow only works in testing or production）

Slack 只允许每个应用注册一个 webhook。这意味着，你不能在测试 URL 和生产 URL 之间来回切换（反之亦然），除非你重新配置已注册的 webhook URL。

如果你试图测试一个已发布的工作流，可能会遇到这个问题。Slack 只会把事件发送到两个 webhook URL 中的一个，另一个将永远收不到事件通知。

要解决这个问题，你可以在测试时停用工作流：

{% hint style="warning" %}
**会中断生产流量（Halts production traffic）**

这会临时停用你的生产工作流来测试。工作流在未发布期间将不再接收生产流量。
{% endhint %}

1. 进入你的工作流页面。
2. 在工作流设置下拉菜单中，点击 **Unpublish（取消发布）** 来临时停用工作流。
3. 编辑 [Slack Trigger configuration（Slack 触发器配置）](../credentials/slack.md#slack-trigger-configuration) 中的 **Request URL（请求 URL）**，把生产 webhook URL 改成测试 webhook URL。
4. 使用测试 webhook URL 测试你的工作流。
5. 测试结束后，编辑 [Slack Trigger configuration（Slack 触发器配置）](../credentials/slack.md#slack-trigger-configuration) 中的 **Request URL（请求 URL）**，把测试 webhook URL 改回生产 webhook URL。
6. 点击 **Publish（发布）** 重新启用工作流。生产 webhook URL 应该会恢复工作。

### 令牌过期（Token expired）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/aLQxqepKmNn7Oz3PDTB7/" %}
