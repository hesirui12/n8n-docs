---
title: Facebook Trigger 节点（Facebook Trigger）
description: >-
  学习如何在 n8n 中使用 Facebook Trigger 节点。按照技术文档把 Facebook
  Trigger 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: n8n-nodes-base.facebooktrigger
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/index.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**

简单来说，这个触发器节点就是帮你「盯住」Facebook 上的各种动静。只要 Facebook 上发生了你关心的事情（比如有人评论、页面有更新、权限变了等），它就自动启动你的工作流，省得你一直手动刷新去看。
{% endhint %}

# Facebook Trigger 节点

[Facebook](https://www.facebook.com/) 是一个社交网站，让你可以在线联系家人和朋友，并与他们分享内容。

使用 Facebook Trigger 节点，可以在 Facebook 中发生事件时触发工作流。

{% hint style="info" %}
**凭据（Credentials）**

你可以在[这里](../../credentials/facebookapp.md)找到此节点的认证信息。
{% endhint %}

{% hint style="info" %}
**示例和模板（Examples and templates）**

要获取帮助你快速上手的使用示例和模板，请参阅 n8n 的 [Facebook Trigger 集成](https://n8n.io/integrations/facebook-trigger/) 页面。
{% endhint %}

## 对象（Objects）

- [**Ad Account**](ad-account.md)：获取某些广告变更的更新。
- [**Application**](application.md)：获取发送到应用程序的更新。
- [**Certificate Transparency**](certificate-transparency.md)：当为你订阅的域名生成新的安全证书时获取更新，包括新证书和潜在的钓鱼（phishing）尝试。
- 一个[**Group**](group.md)中的活动和事件
- [**Instagram**](instagram.md)：当有人评论你应用用户的 Media 对象、@提及你的应用用户，或你的应用用户的 Stories 过期时获取更新。
- [**Link**](link.md)：获取外部提供商用于富预览（rich previews）的链接更新。
- [**Page**](page.md)更新
- [**Permissions**](permissions.md)：授予或撤销权限时的更新
- [**User**](user.md)个人资料更新
- [**WhatsApp Business Account**](whatsapp.md)<br>
    
    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>使用 WhatsApp Trigger</strong></p><p>对于这些事件，n8n 建议使用 <a href="../n8n-nodes-base.whatsapptrigger.md">WhatsApp Trigger 节点</a> 搭配 <a href="../../credentials/whatsapp.md">WhatsApp 凭据</a>，而不是 Facebook Trigger 节点。WhatsApp Trigger 节点可以监听的事件更多。</p></div>

- [**Workplace Security**](workplace-security.md)

对于每个**对象（Object）**，使用 **Field Names or IDs**（字段名称或 ID）下拉菜单来选择要接收哪些更详细的数据。请参阅相关链接页面了解更多详情。

## 相关资源（Related resources）

在 n8n 的网站上查看[示例工作流和相关内容](https://n8n.io/integrations/facebook-trigger/)。

有关其 API 的详细信息，请参阅 Meta 的 [Graph API 文档](https://developers.facebook.com/docs/graph-api/webhooks/reference)。
