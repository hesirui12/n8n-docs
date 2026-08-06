---
title: Facebook 触发器 Group 对象文档
description: >-
  Learn how to use the Group object of the Facebook Trigger node in n8n.
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook 触发器 Group 对象文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/group.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/group
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/group
layout:
  description:
    visible: false
---

# Facebook 触发器 Group（群组）对象

> **大白话**：这个对象监听 Facebook 群组（Workplace 群组）里的动静——有人发帖、评论、加人、改群设置等，都会触发你的工作流。

使用此对象来接收群组（Group）中活动和事件的更新。关于触发器本身的更多信息，请参阅 [Facebook 触发器](README.md)。

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
1. 在 **Object（对象）** 中选择 **Group（群组）**。
1. **Field Names or IDs（字段名或 ID）**：默认情况下，节点会使用 `*` 通配符过滤器触发所有可用事件。如果你想限定事件范围，点击 `X` 去掉星号，然后用下拉框或表达式选择你关心的更新。
1. 在 **Options（选项）** 中，打开 **Include Values（包含值）** 开关。此对象类型如果不开这个选项就无法正常工作。

## 相关资源

更多信息请参阅 Meta 的 [Groups（群组）](https://developers.facebook.com/docs/workplace/reference/webhooks/#groups) Workplace API 参考文档。
