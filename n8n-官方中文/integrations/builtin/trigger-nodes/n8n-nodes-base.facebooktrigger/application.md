---
title: Facebook 触发器 Application 对象文档
description: >-
  Learn how to use the Application object of the Facebook Trigger node in n8n.
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook 触发器 Application 对象文档
originalFilePath: >-
  integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/application.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/application
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/application
layout:
  description:
    visible: false
---

# Facebook 触发器 Application（应用）对象

> **大白话**：这个对象监听的是"应用"层面的事件——凡是发到你某个 Facebook 应用（App）的通知更新，都会触发工作流，比如用户给应用评论、广告规则引擎出结果等等。

使用此对象来接收发送到特定应用（App）的更新。关于触发器本身的更多信息，请参阅 [Facebook 触发器](README.md)。

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
1. 在 **Object（对象）** 中选择 **Application（应用）**。
1. **Field Names or IDs（字段名或 ID）**：默认情况下，节点会使用 `*` 通配符过滤器触发所有可用事件。如果你想限定事件范围，点击 `X` 去掉星号，然后用下拉框或表达式选择你关心的更新。选项包括：
    * **Add Account（添加账户）**
    * **Ads Rules Engine（广告规则引擎）**
    * **Async Requests（异步请求）**
    * **Async Sessions（异步会话）**
    * **Group Install（群组安装）**
    * **Oe Reseller Onboarding Request Created（OE 经销商入驻请求已创建）**
    * **Plugin Comment（插件评论）**
    * **Plugin Comment Reply（插件评论回复）**
1. 在 **Options（选项）** 中，打开 **Include Values（包含值）** 开关。此对象类型如果不开这个选项就无法正常工作。

## 相关资源

更多信息请参阅 Meta 的 [Application](https://developers.facebook.com/docs/graph-api/webhooks/reference/application/) Graph API 参考文档。
