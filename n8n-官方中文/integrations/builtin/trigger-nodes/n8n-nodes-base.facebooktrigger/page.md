---
title: Facebook 触发器 Page 对象文档
description: >-
  Learn how to use the Page object of the Facebook Trigger node in n8n.
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook 触发器 Page 对象文档
originalFilePath: integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/page.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/page
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/page
layout:
  description:
    visible: false
---

# Facebook 触发器 Page（主页）对象

> **大白话**：这个对象监听你 Facebook 主页（Page）的一举一动——主页资料被改动、有人发帖评论、有人提到你的主页、评分变了、视频状态变了等等，都会触发工作流。

使用此对象来接收主页资料字段或主页设置发生更新，或有人提及你的主页时的通知。关于触发器本身的更多信息，请参阅 [Facebook 触发器](README.md)。

{% hint style="info" %}
**凭据（Credentials）**

你可以在此处找到该节点的认证信息：[Facebook App 凭据](../../credentials/facebookapp.md)。
{% endhint %}

{% hint style="info" %}
**示例与模板**

如需使用示例和入门模板，请参阅 n8n 的 [Facebook 触发器集成](https://n8n.io/integrations/facebook-trigger/) 页面。
{% endhint %}

## 前置条件（Prerequisites）

使用此对象前，需要先在应用和主页中做一些配置：

1. 至少需要一位主页管理员授予你的应用 `manage_pages`（管理主页）权限。
1. 这位主页管理员至少需要拥有版主（moderator）权限。如果没有，他将无法收到全部内容。
1. 你还需要把应用添加到主页，并且可能需要前往 [Graph API 浏览器](https://developers.facebook.com/tools/explorer/)，用你的应用令牌（app token）执行以下调用：

    ```
    {page-id}/subscribed_apps?subscribed_fields=feed
    ```

## 触发器配置

使用此对象配置触发器：

1. 选择 **Credential to connect with（要连接的凭据）**。选择一个已有的或新建一个 [Facebook App 凭据](../../credentials/facebookapp.md)。
1. 输入与你凭据关联应用的 **APP ID**。更多信息请参阅 [Facebook App 凭据](../../credentials/facebookapp.md) 文档。
1. 在 **Object（对象）** 中选择 **Page（主页）**。
1. **Field Names or IDs（字段名或 ID）**：默认情况下，节点会使用 `*` 通配符过滤器触发所有可用事件。如果你想限定事件范围，点击 `X` 去掉星号，然后用下拉框或表达式选择你关心的更新。选项包括各个主页资料字段，以及：
    * **Feed（动态）**：描述主页动态的大多数变更，包括帖子、点赞、分享等。
    * **Leadgen（线索广告）**：当主页的线索广告（lead generation）设置变更时通知你。
    * **Live Videos（直播视频）**：当主页的直播视频状态变更时通知你。
    * **Mention（提及）**：当主页、评论等出现新的提及时通知你。
    * **Merchant Review（商家评价）**：当主页的商家评价设置变更时通知你。
    * **Page Change Proposal（主页变更建议）**：当 Facebook 为你的主页建议变更时通知你。
    * **Page Upcoming Change（主页即将发生的变更）**：通知你主页即将发生的变更。这些变更是 Facebook 建议的，可能带有接受或拒绝的截止期限，超过期限会自动生效。
    * **Product Review（产品评价）**：当主页的产品评价设置变更时通知你。
    * **Ratings（评分）**：当主页的评分变更时通知你，包括新评分，或用户评论、回应某个评分。
    * **Videos（视频）**：当主页上视频的编码状态变更时通知你。
1. 在 **Options（选项）** 中，打开 **Include Values（包含值）** 开关。此对象类型如果不开这个选项就无法正常工作。

## 相关资源

更多信息请参阅 [主页 Webhooks](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-pages) 和 Meta 的 [Page](https://developers.facebook.com/docs/graph-api/webhooks/reference/page/) Graph API 参考文档。
