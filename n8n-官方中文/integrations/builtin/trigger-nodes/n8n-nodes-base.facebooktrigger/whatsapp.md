---
title: Facebook 触发器 WhatsApp Business Account 对象文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook 触发器 WhatsApp Business Account 对象文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/whatsapp.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/whatsapp
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/whatsapp
description: >-
  Learn how to use the WhatsApp Business Account object of the Facebook Trigger
  node in n8n.
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

# WhatsApp Business Account（WhatsApp 商业账户）

> **大白话**：这个对象监听你的 WhatsApp 商业账户（WABA）的变动——消息模板状态更新、电话号码质量分变化、账户审核结果等，都会触发工作流。不过官方更推荐直接用专门的 WhatsApp 触发器节点（见下面的提醒）。

使用此对象来接收你的 WhatsApp Business Account（WABA，WhatsApp 商业账户）发生变更时的更新。关于触发器本身的更多信息，请参阅 [Facebook 触发器](./README.md)。

{% hint style="warning" %}
**请使用 WhatsApp 触发器节点**

n8n 建议使用 [WhatsApp 触发器节点](../n8n-nodes-base.whatsapptrigger.md) 搭配 [WhatsApp 凭据](../../credentials/whatsapp.md)，而不是 Facebook 触发器节点。那个触发器节点可订阅的事件数量是这个的两倍。
{% endhint %}

{% hint style="info" %}
**凭据（Credentials）**

你可以在此处找到该节点的认证信息：[Facebook App 凭据](../../credentials/facebookapp.md)。
{% endhint %}

{% hint style="info" %}
**示例与模板**

如需使用示例和入门模板，请参阅 n8n 的 [Facebook 触发器集成](https://n8n.io/integrations/facebook-trigger/) 页面。
{% endhint %}

## 前置条件（Prerequisites）

使用此对象前，需要先在应用和 WhatsApp 账户中做一些配置：

1. 在你的 WhatsApp 商业账户下订阅你的应用。你必须订阅一个由你的企业拥有的应用。共享给你企业的应用无法接收 webhook 通知。
2. 如果你是解决方案合作伙伴（Solution Partner），请确保你的应用已完成 App Review（应用审核），并申请了 `whatsapp_business_management` 权限。

## 触发器配置

使用此对象配置触发器：

1. 选择 **Credential to connect with（要连接的凭据）**。选择一个已有的或新建一个 [Facebook App 凭据](../../credentials/facebookapp.md)。
2. 输入与你凭据关联应用的 **APP ID**。更多信息请参阅 [Facebook App 凭据](../../credentials/facebookapp.md) 文档。
3. 在 **Object（对象）** 中选择 **WhatsApp Business Account（WhatsApp 商业账户）**。
4. **Field Names or IDs（字段名或 ID）**：默认情况下，节点会使用 `*` 通配符过滤器触发所有可用事件。如果你想限定事件范围，点击 `X` 去掉星号，然后用下拉框或表达式选择你关心的更新。选项包括：
   * **Message Template Status Update（消息模板状态更新）**
   * **Phone Number Name Update（电话号码名称更新）**
   * **Phone Number Quality Update（电话号码质量分更新）**
   * **Account Review Update（账户审核更新）**
   * **Account Update（账户更新）**
5. 在 **Options（选项）** 中，打开 **Include Values（包含值）** 开关。此对象类型如果不开这个选项就无法正常工作。

更多信息请参阅 [WhatsApp 商业账户 Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-whatsapp) 和 Meta 的 [WhatsApp Business Account](https://developers.facebook.com/docs/graph-api/webhooks/reference/whatsapp-business-account/) Graph API 参考文档。
