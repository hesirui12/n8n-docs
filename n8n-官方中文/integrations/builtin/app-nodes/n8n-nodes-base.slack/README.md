---
title: Slack 节点文档
description: >-
  学习如何在 n8n 中使用 Slack 节点。按照技术文档将 Slack
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Slack 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.slack.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：Slack 是全世界最流行的「团队沟通工具」——相当于一个高级工作群，还能跟各种工具打通。这个节点是 n8n 里最常用的节点之一：可以自动发消息、管频道（建、归档、改名）、收发文件、搜消息、加表情、加星标、查用户资料，甚至直接在 Slack 里完成审批（参见 [Slack 中的审批](approvals.md)）。适合做消息通知、机器人自动回复、人工审批流程。
{% endhint %}

# Slack 节点

使用 Slack 节点来自动化你在 Slack 中的工作，并把它与其它应用集成。n8n 内置支持 Slack 的大量功能，包括创建、归档、关闭频道，获取用户和文件，以及删除消息。

在本页你可以看到 Slack 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [Slack 凭证](../../credentials/slack.md)。
{% endhint %}

（官方此处嵌入了通用资源组件，此处从略。）

## 操作

* **Channel（频道）**
    * **Archive**（归档一个频道）
    * **Close**（关闭一个私聊或群聊会话）
    * **Create**（创建一个公开或私密的频道会话）
    * **Get**（获取频道信息）
    * **Get Many**（获取 Slack 中的频道列表）
    * **History**（获取频道的消息和事件历史）
    * **Invite**（邀请用户加入频道）
    * **Join**（加入一个已有频道）
    * **Kick**（把用户从频道中移除）
    * **Leave**（离开一个频道）
    * **Member**（列出频道的成员）
    * **Open**（打开或继续一个私聊或群聊会话）
    * **Rename**（给频道重命名）
    * **Replies**（获取发到频道里的某个消息线程）
    * **Sets purpose**（设置频道的用途说明）
    * **Sets topic**（设置频道的主题）
    * **Unarchive**（解除频道的归档）
* **File（文件）**
    * **Get**（获取一个文件）
    * **Get Many**（获取并筛选团队文件）
    * **Upload**（创建或上传已有文件）
* **Message（消息）**
    * **Delete**（删除一条消息）
    * **Get permalink**（获取消息的固定链接 permalink）
    * **Search**（搜索消息）
    * **Send**（发送一条消息）
    * **Send and Wait for Response**（发送消息并等待对方回复后再继续；审批人还可以直接在 Slack 里回复。更多信息请参考 [Slack 中的审批](approvals.md)）
    * **Update**（更新一条消息）
* **Reaction（表情反应）**
    * **Add**（给消息添加表情反应）
    * **Get**（获取消息的表情反应）
    * **Remove**（移除消息上的表情反应）
* **Star（星标）**
    * **Add**（给一个项目添加星标）
    * **Delete**（删除项目上的星标）
    * **Get Many**（获取当前登录用户的星标列表）
* **User（用户）**
    * **Get**（获取用户信息）
    * **Get Many**（获取用户列表）
    * **Get User's Profile**（获取用户资料）
    * **Get User's Status**（获取用户状态）
    * **Update User's Profile**（更新用户资料）
* **User Group（用户组）**
    * **Create**（创建用户组）
    * **Disable**（停用用户组）
    * **Enable**（启用用户组）
    * **Get Many**（获取用户组列表）
    * **Update**（更新用户组）

## 模板与示例

[浏览 Slack 节点的官方集成模板](https://n8n.io/integrations/slack)，或[搜索全部模板](https://n8n.io/workflows/)。

## 相关资源

关于该服务的更多信息，请参考 [Slack 官方文档](https://api.slack.com/)。

## 需要的权限范围（Scopes）

为你的 [Slack 凭证](../../credentials/slack.md) 创建 Slack App 后，你必须给 Slack App 加上合适的权限范围（scopes），这个节点才能正常工作。先从 [Scopes | Slack 凭证](../../credentials/slack.md#scopes) 页面列出的权限范围开始。

如果这些还不够，用下表查你想用的「资源 + 操作」，然后点链接去看 Slack API 文档，找到对应的权限范围。

| **资源（Resource）** | **操作（Operation）** | **Slack API 方法** |
|--------------|----------------------------|------------------------------------------------------------------------------------|
| Channel      | Archive                    | [conversations.archive](https://api.slack.com/methods/conversations.archive)       |
| Channel      | Close                      | [conversations.close](https://api.slack.com/methods/conversations.close)           |
| Channel      | Create                     | [conversations.create](https://api.slack.com/methods/conversations.create)         |
| Channel      | Get                        | [conversations.info](https://api.slack.com/methods/conversations.info)             |
| Channel      | Get Many                   | [conversations.list](https://api.slack.com/methods/conversations.list)             |
| Channel      | History                    | [conversations.history](https://api.slack.com/methods/conversations.history)       |
| Channel      | Invite                     | [conversations.invite](https://api.slack.com/methods/conversations.invite)         |
| Channel      | Join                       | [conversations.join](https://api.slack.com/methods/conversations.join)             |
| Channel      | Kick                       | [conversations.kick](https://api.slack.com/methods/conversations.kick)             |
| Channel      | Leave                      | [conversations.leave](https://api.slack.com/methods/conversations.leave)           |
| Channel      | Member                     | [conversations.members](https://api.slack.com/methods/conversations.members)       |
| Channel      | Open                       | [conversations.open](https://api.slack.com/methods/conversations.open)             |
| Channel      | Rename                     | [conversations.rename](https://api.slack.com/methods/conversations.rename)         |
| Channel      | Replies                    | [conversations.replies](https://api.slack.com/methods/conversations.replies)       |
| Channel      | Set Purpose                | [conversations.setPurpose](https://api.slack.com/methods/conversations.setPurpose) |
| Channel      | Set Topic                  | [conversations.setTopic](https://api.slack.com/methods/conversations.setTopic)     |
| Channel      | Unarchive                  | [conversations.unarchive](https://api.slack.com/methods/conversations.unarchive)   |
| File         | Get                        | [files.info](https://api.slack.com/methods/files.info)                             |
| File         | Get Many                   | [files.list](https://api.slack.com/methods/files.list)                             |
| File         | Upload                     | [files.upload](https://api.slack.com/methods/files.upload)                         |
| Message      | Delete                     | [chat.delete](https://api.slack.com/methods/chat.delete)                           |
| Message      | Get Permalink              | [chat.getPermalink](https://api.slack.com/methods/chat.getPermalink)               |
| Message      | Search                     | [search.messages](https://api.slack.com/methods/search.messages)                   |
| Message      | Send                       | [chat.postMessage](https://api.slack.com/methods/chat.postMessage)                 |
| Message      | Send and Wait for Response | [chat.postMessage](https://api.slack.com/methods/chat.postMessage)                 |
| Message      | Update                     | [chat.update](https://api.slack.com/methods/chat.update)                           |
| Reaction     | Add                        | [reactions.add](https://api.slack.com/methods/reactions.add)                       |
| Reaction     | Get                        | [reactions.get](https://api.slack.com/methods/reactions.get)                       |
| Reaction     | Remove                     | [reactions.remove](https://api.slack.com/methods/reactions.remove)                 |
| Star         | Add                        | [stars.add](https://api.slack.com/methods/stars.add)                               |
| Star         | Delete                     | [stars.remove](https://api.slack.com/methods/stars.remove)                         |
| Star         | Get Many                   | [stars.list](https://api.slack.com/methods/stars.list)                             |
| User         | Get                        | [users.info](https://api.slack.com/methods/users.info)                             |
| User         | Get Many                   | [users.list](https://api.slack.com/methods/users.list)                             |
| User         | Get User's Profile         | [users.profile.get](https://api.slack.com/methods/users.profile.get)               |
| User         | Get User's Status          | [users.getPresence](https://api.slack.com/methods/users.getPresence)               |
| User         | Update User's Profile      | [users.profile.set](https://api.slack.com/methods/users.profile.set)               |
| User Group   | Create                     | [usergroups.create](https://api.slack.com/methods/usergroups.create)               |
| User Group   | Disable                    | [usergroups.disable](https://api.slack.com/methods/usergroups.disable)             |
| User Group   | Enable                     | [usergroups.enable](https://api.slack.com/methods/usergroups.enable)               |
| User Group   | Get Many                   | [usergroups.list](https://api.slack.com/methods/usergroups.list)                   |
| User Group   | Update                     | [usergroups.update](https://api.slack.com/methods/usergroups.update)               |

（官方此处嵌入了通用资源组件，此处从略。）
