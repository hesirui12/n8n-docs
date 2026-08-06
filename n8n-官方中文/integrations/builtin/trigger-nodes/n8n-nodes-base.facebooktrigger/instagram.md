---
title: Facebook 触发器 Instagram 对象文档
description: >-
  Learn how to use the Instagram object of the Facebook Trigger node in n8n.
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook 触发器 Instagram 对象文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/instagram.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/instagram
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/instagram
layout:
  description:
    visible: false
---

# Facebook 触发器 Instagram 对象

> **大白话**：这个对象管的是 Instagram 上和你应用用户相关的事——有人评论他们的帖子、@提及他们、给他们发私信，或者他们的 Story 到期了，都会触发工作流。

使用此对象来接收以下更新：有人评论你的应用用户的 Media（媒体）对象、@提及你的应用用户，或你的应用用户的 Story（快拍）到期。关于触发器本身的更多信息，请参阅 [Facebook 触发器](README.md)。

{% hint style="info" %}
**凭据（Credentials）**

你可以在此处找到该节点的认证信息：[Facebook App 凭据](../../credentials/facebookapp.md)。
{% endhint %}

{% hint style="info" %}
**示例与模板**

如需使用示例和入门模板，请参阅 n8n 的 [Facebook 触发器集成](https://n8n.io/integrations/facebook-trigger/) 页面。
{% endhint %}

## 触发器配置

使用此对象配置触发器：

1. 选择 **Credential to connect with（要连接的凭据）**。选择一个已有的或新建一个 [Facebook App 凭据](../../credentials/facebookapp.md)。
1. 输入与你凭据关联应用的 **APP ID**。更多信息请参阅 [Facebook App 凭据](../../credentials/facebookapp.md) 文档。
1. 在 **Object（对象）** 中选择 **Instagram**。
1. **Field Names or IDs（字段名或 ID）**：默认情况下，节点会使用 `*` 通配符过滤器触发所有可用事件。如果你想限定事件范围，点击 `X` 去掉星号，然后用下拉框或表达式选择你关心的更新。选项包括：
    * **Comments（评论）**：当有人评论你的应用所关联 Instagram 用户拥有的 IG Media（帖子）时通知你。
    * **Messaging Handover（消息交接）**
    * **Mentions（提及）**：当 Instagram 用户在评论或文案中 @提及某个 Instagram 商业号或创作者号时通知你。
    * **Messages（私信）**：当有人给你应用关联的 Instagram 用户发私信时通知你。
    * **Messaging Seen（消息已读）**：当有人已读你应用关联的 Instagram 用户发送的消息时通知你。
    * **Standby（待命）**
    * **Story Insights（快拍数据）**：快拍到期一小时后，通知你该快拍互动的指标数据。
1. 在 **Options（选项）** 中，打开 **Include Values（包含值）** 开关。此对象类型如果不开这个选项就无法正常工作。

## 相关资源

更多信息请参阅 [Instagram Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-instagram) 和 Meta 的 [Instagram](https://developers.facebook.com/docs/graph-api/webhooks/reference/instagram/) Graph API 参考文档。
