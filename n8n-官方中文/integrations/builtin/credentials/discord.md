---
title: Discord 凭证（Discord credentials）
contentType:
  - integration
  - reference
priority: high
nodeTitle: Discord 凭证（Discord credentials）
originalFilePath: integrations/builtin/credentials/discord.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/discord
url: https://docs.n8n.io/integrations/builtin/credentials/discord
description: >-
  Discord 凭证文档。在 n8n（工作流自动化平台）中使用这些凭证来认证
  Discord。
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

# Discord 凭证（Discord credentials）

> **大白话**：Discord 是聊天软件（游戏圈常用）。n8n 想读写你的 Discord 服务器，有三种「钥匙」可以选：**Bot**（机器人，功能最全）、**OAuth2**（用授权流程安装机器人，装起来更方便）、**Webhook**（最简单，只能往一个频道发消息，不能收消息）。新手只想「把消息发到某个频道」，直接用 Webhook；想做的复杂一点，用 Bot。

你可以使用这些凭证来认证以下节点：

* [Discord](../app-nodes/n8n-nodes-base.discord/README.md)

## 前置条件（Prerequisites）

* 创建一个 [Discord](https://www.discord.com/) 账号。
* 如果使用 Bot 或 OAuth2 凭证：
  * [设置你的本地开发者环境](https://discord.com/developers/docs/quick-start/getting-started#step-0-project-setup)。
  * [创建一个应用和一个机器人用户](https://discord.com/developers/docs/quick-start/getting-started#step-1-creating-an-app)。
* 如果使用 webhook 凭证，请先[创建一个 webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)。

## 支持的认证方式（Supported authentication methods）

* Bot（机器人）
* OAuth2
* Webhook

不确定该用哪种方式？请参考 [选择认证方式（Choose an authentication method）](#选择认证方式choose-an-authentication-method) 获取更多指导。

## 相关资源（Related resources）

更多关于该服务的信息，请参考 [Discord 的开发者文档](https://discord.com/developers/docs/intro)。

## 使用 Bot（Using bot）

如果你想把机器人用**机器人令牌（bot token）**的方式添加到 Discord 服务器（而不是用 OAuth2），就用这个方法。

要配置这个凭证，你需要：

* 一个 **Bot Token**（机器人令牌）：创建带机器人功能的应用后就会生成。

要创建带机器人的应用并生成 **Bot Token**：

1. 如果还没有应用，先在[开发者门户](https://discord.com/developers/applications?new_application=true)创建一个应用。
2. 为你的应用输入一个 **Name**（名称）。
3. 点击 **Create**（创建）。
4. 在左侧菜单选择 **Bot**（机器人）。
5. 在 **Token**（令牌）下，点击 **Reset Token**（重置令牌）生成一个新的机器人令牌。
6. 复制这个令牌，添加到你的 n8n 凭证中。
7. 在 **Bot > Privileged Gateway Intents**（特权网关意图）中，添加你希望机器人拥有的特权意图。更多关于特权意图的信息，请参考 [配置你的机器人](https://discord.com/developers/docs/quick-start/getting-started#configuring-your-bot)。
   * n8n 建议开启 **SERVER MEMBERS INTENT**（服务器成员意图）：你的机器人需要它才能接收 **GUILD_MEMBERS** 下列出的事件。
8. 在 **Installation > Installation Contexts**（安装上下文）中，选择你希望机器人使用的安装方式：
   * 选择 **Guild Install**（服务器安装），用于安装到服务器中的应用。（对 n8n 用户来说最常见。）
   * 选择 **User Install**（用户安装），用于安装到用户账户中的应用。（n8n 用户较少用到，但可能适合测试。）
   * 更多关于安装上下文的信息，请参考 Discord 的[选择安装上下文](https://discord.com/developers/docs/quick-start/getting-started#choosing-installation-contexts)文档。
9. 在 **Installation > Install Link**（安装链接）中，如果没有选中的话，选择 **Discord Provided Link**（Discord 提供的链接）。
10. 仍然在 **Installation** 页面，在 **Default Install Settings**（默认安装设置）区域，勾选 `applications.commands` 和 `bot` 这两个 scope（权限范围）。更多相关信息，请参考 Discord 的 [Scopes](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes) 文档。
11. 在 **Bot > Bot Permissions**（机器人权限）页面添加权限。更多信息请参考 Discord 的 [Permissions](https://discord.com/developers/docs/topics/permissions) 文档。n8n 建议为 [Discord](../app-nodes/n8n-nodes-base.discord/README.md) 节点勾选以下权限：
    * Manage Roles（管理角色）
    * Manage Channels（管理频道）
    * Read Messages/View Channels（读取消息/查看频道）
    * Send Messages（发送消息）
    * Create Public Threads（创建公开帖子）
    * Create Private Threads（创建私密帖子）
    * Send Messages in Threads（在帖子中发送消息）
    * Send TTS Messages（发送 TTS 消息）
    * Manage Messages（管理消息）
    * Manage Threads（管理帖子）
    * Embed Links（嵌入链接）
    * Attach Files（附加文件）
    * Read Message History（读取消息历史）
    * Add Reactions（添加表情回应）
12. 把应用添加到你的服务器或测试服务器：
    1. 前往 **Installation > Install Link**，复制列出的链接。
    2. 把链接粘贴到浏览器地址栏并回车。
    3. 在安装提示中选择 **Add to server**（添加到服务器）。
    4. 应用添加成功后，你会在成员列表里看到它。

以上步骤涵盖了搭建 n8n 凭证所需的基本功能。更多创建应用的信息（尤其是下面这些），请参考 [Discord 创建应用](https://discord.com/developers/docs/quick-start/getting-started#step-1-creating-an-app) 指南：

* [获取你的凭证](https://discord.com/developers/docs/quick-start/getting-started#fetching-your-credentials)：把应用的凭证导入你的本地开发者环境。
* [处理交互功能](https://discord.com/developers/docs/quick-start/getting-started#step-3-handling-interactivity)：为 `/slash` 交互命令设置公开端点。

## 使用 OAuth2（Using OAuth2）

如果你希望通过 OAuth2 流程把机器人添加到 Discord 服务器（这样安装你的应用的人操作会更简单），就用这个方法。

要配置这个凭证，你需要：

* 一个 **Client ID**（客户端 ID）
* 一个 **Client Secret**（客户端密钥）
* 选择是在 **Header**（请求头）还是 **Body**（请求体）中发送 **Authentication**（认证信息）
* 一个 **Bot Token**（机器人令牌）

关于创建带机器人的应用并生成令牌的详细步骤，请按照上面 [使用 Bot（Using bot）](#使用-botusing-bot) 中的步骤操作。

然后：

1. 复制你生成的 **Bot Token**，添加到 n8n 凭证中。
2. 打开 Discord 应用中的 **OAuth2** 页面，查看你的 **Client ID**，并生成一个 **Client Secret**。把这两项添加到你的 n8n 凭证中。
3. 在 n8n 中复制 **OAuth Redirect URL**（OAuth 回调地址），把它填入 Discord 应用的 **OAuth2 > Redirects** 中。记得保存这些更改。

## 使用 Webhook（Using webhook）

要配置这个凭证，你需要：

* 一个 **Webhook URL**：创建 webhook 后就会生成。

要获取 Webhook URL，你需要创建一个 webhook 并复制生成的 URL：

1. 打开你的 Discord **Server Settings**（服务器设置），进入 **Integrations**（集成）标签页。
2. 点击 **Create Webhook**（创建 webhook）新建一个 webhook。
3. 给你的 webhook 起一个**有意义的名称（Name）**。
4. 点击 **Name** 旁边的**头像（avatar）**，可以修改或上传新头像。
5. 在 **CHANNEL**（频道）下拉框中，选择这个 webhook 要发消息的频道。
6. 点击 **Copy Webhook URL**（复制 Webhook URL）复制地址，把它填入你的 n8n 凭证中。

更多信息请参考 [Discord 创建 Webhook 文档](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)。

## 选择认证方式（Choose an authentication method）

最简单的安装方式是 **webhook**。你可以在 Discord 服务器的某个频道上创建并添加 webhook。Webhook 可以向频道发送消息。它不需要机器人用户或认证，但**不能**监听或回复用户的消息/命令。如果你只是想简单地把消息发到某个频道，不需要互动或反馈，就用 webhook。

**Bot（机器人）** 比 webhook 更进一步，可以互动。你可以把机器人添加到 Discord 服务器（在 Discord API 文档中称为 `guild`）或用户账户中。添加到服务器的机器人可以在服务器的所有频道上与用户互动：可以管理频道、发送和读取消息、获取所有用户的列表、修改用户角色。如果你要构建互动式、复杂或多步骤的工作流，就用机器人。

**OAuth2** 本质上就是 **Bot**，只是用 OAuth2 流程代替了单纯的 bot token。和机器人一样，可以添加到 Discord 服务器或用户账户。这类凭证提供的功能和机器人一样，但可以让机器人在你服务器上的安装过程更简单。
