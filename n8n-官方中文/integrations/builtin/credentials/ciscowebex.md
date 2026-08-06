---
title: Webex by Cisco 凭证
description: >-
  Webex by Cisco 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Webex by Cisco（思科会议软件）的身份。
contentType:
  - integration
  - reference
nodeTitle: Webex by Cisco credentials
originalFilePath: integrations/builtin/credentials/ciscowebex.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/ciscowebex'
url: 'https://docs.n8n.io/integrations/builtin/credentials/ciscowebex'
layout:
  description:
    visible: false
---

# Webex by Cisco 凭证

> 大白话：Webex 是思科的视频会议/协作软件。n8n 想帮你自动发会议消息、管理会议录制等，用的是 OAuth2 网页授权。对 n8n 云端用户来说最省事：填个凭证名称，点「Connect my account」授权即可。如果你要自己从零配置 OAuth2，则需要注册一个 Integration（集成应用），并勾选官方推荐的下面那些权限范围（Scopes）。

这些凭证可以用来验证以下节点的身份：

- [Webex by Cisco](../app-nodes/n8n-nodes-base.ciscowebex.md)
- [Webex by Cisco Trigger（触发器）](../trigger-nodes/n8n-nodes-base.ciscowebextrigger.md)

## 准备工作

注册一个 [Webex by Cisco](https://www.webex.com/) 账号（注册后会自动获得[开发者账号权限](https://developer.webex.com)）。

## 支持的验证方式

- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [Webex 官方 API 文档](https://developer.webex.com/docs/getting-started)。

## 使用 OAuth2（网页授权登录）

{% hint style="info" %}
**给 n8n Cloud（云端）用户的提示**

如果你用的是 n8n 云端版，在 OAuth 凭证里只需要填好凭证名称，然后点 **Connect my account（连接我的账号）** 按钮，就能把你的 Webex by Cisco 账号连到 n8n 了。
{% endhint %}

如果你需要从零配置 OAuth2，就要先创建一个 integration（集成应用）才能使用这个凭证。请先参考 [Webex 注册你的集成](https://developer.webex.com/docs/integrations#registering-your-integration) 文档中的说明。

n8n 建议你的集成使用以下 **Scopes（权限范围）**：

* `spark:rooms_read`
* `spark:messages_write`
* `spark:messages_read`
* `spark:memberships_read`
* `spark:memberships_write`
* `meeting:recordings_write`
* `meeting:recordings_read`
* `meeting:preferences_read`
* `meeting:schedules_write`
* `meeting:schedules_read`

> 上面的权限代码照抄即可：`spark:` 开头的是房间/消息/成员相关权限，`meeting:` 开头的是会议录制/偏好/日程相关权限。
