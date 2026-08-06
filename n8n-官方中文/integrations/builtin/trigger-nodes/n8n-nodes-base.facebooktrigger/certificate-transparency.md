---
title: Facebook 触发器 Certificate Transparency 对象文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook 触发器 Certificate Transparency 对象文档
originalFilePath: >-
  integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/certificate-transparency.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/certificate-transparency
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/certificate-transparency
description: >-
  Learn how to use the Certificate Transparency object of the Facebook Trigger
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

# Certificate Transparency（证书透明）

> **大白话**：这个对象帮你"盯防"域名安全——只要你订阅的域名有新签发的 SSL 证书，或者出现疑似钓鱼的证书，它就立刻通知你，防止别人伪造你的域名证书搞钓鱼。

使用此对象来接收关于新签发证书的更新，前提是你已经订阅了相关域名的证书警报或钓鱼警报。关于触发器本身的更多信息，请参阅 [Facebook 触发器](./README.md)。

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
2. 输入与你凭据关联应用的 **APP ID**。更多信息请参阅 [Facebook App 凭据](../../credentials/facebookapp.md) 文档。
3. 在 **Object（对象）** 中选择 **Certificate Transparency（证书透明）**。
4. **Field Names or IDs（字段名或 ID）**：默认情况下，节点会使用 `*` 通配符过滤器触发所有可用事件。如果你想限定事件范围，点击 `X` 去掉星号，然后用下拉框或表达式选择你关心的更新。选项包括：
   * **Certificate（证书）**：当有人为你的订阅域名签发新证书时通知你。你需要先为域名订阅证书警报。
   * **Phishing（钓鱼）**：当有人签发了可能仿冒（钓鱼）你某个已订阅的合法域名的新证书时通知你。
5. 在 **Options（选项）** 中，打开 **Include Values（包含值）** 开关。此对象类型如果不开这个选项就无法正常工作。

要收到这些警报，你需要为域名订阅相应的警报：

* 证书警报的订阅方法，请参阅 [Certificate Alerts（证书警报）](https://developers.facebook.com/docs/certificate-transparency-api#certificate-alerts-subscribing)。
* 钓鱼警报的订阅方法，请参阅 [Phishing Alerts（钓鱼警报）](https://developers.facebook.com/docs/certificate-transparency-api#phishing-alerts-subscribing)。

## 相关资源

更多信息请参阅 [证书透明 Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-certificate-transparency) 和 Meta 的 [Certificate Transparency](https://developers.facebook.com/docs/graph-api/webhooks/reference/certificate-transparency/) Graph API 参考文档。
