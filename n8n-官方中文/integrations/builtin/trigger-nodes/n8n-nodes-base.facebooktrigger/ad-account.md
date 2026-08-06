---
title: Facebook 触发器 Ad Account 对象文档
description: >-
  Learn how to use the Ad Account object of the Facebook Trigger node in n8n.
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook 触发器 Ad Account 对象文档
originalFilePath: >-
  integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/ad-account.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/ad-account
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/ad-account
layout:
  description:
    visible: false
---

# Facebook 触发器 Ad Account（广告账户）对象

> **大白话**：Facebook 广告账户里的广告状态一变（比如广告创建完成、出现审核问题），这个节点就会通知你。用它来监控广告账户的各种状态更新。

使用此对象来接收广告账户（Ad Account）中某些广告变更的更新。关于触发器本身的更多信息，请参阅 [Facebook 触发器](README.md)。

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
1. 在 **Object（对象）** 中选择 **Ad Account（广告账户）**。
1. **Field Names or IDs（字段名或 ID）**：默认情况下，节点会使用 `*` 通配符过滤器触发所有可用的广告账户事件。如果你想限定事件范围，点击 `X` 去掉星号，然后用下拉框或表达式选择你关心的更新。选项包括：
    * **In Process Ad Objects（处理中的广告对象）**：当广告系列（campaign）、广告组（ad set）或广告退出 `IN_PROCESS` 状态时通知你。更多信息请参阅 Meta 的 [广告创建和编辑的后处理](https://developers.facebook.com/docs/marketing-api/using-the-api/post-processing/) 文档。
    * **With Issues Ad Objects（有问题的广告对象）**：当广告账户下的广告系列、广告组或广告收到 `WITH_ISSUES`（有问题）状态时通知你。
1. 在 **Options（选项）** 中，打开 **Include Values（包含值）** 开关。此对象类型如果不开这个选项就无法正常工作。

## 相关资源

更多信息请参阅 [广告账户 Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-ad-accounts) 和 Meta 的 [Ad Account](https://developers.facebook.com/docs/graph-api/webhooks/reference/ad-account/) Graph API 参考文档。
