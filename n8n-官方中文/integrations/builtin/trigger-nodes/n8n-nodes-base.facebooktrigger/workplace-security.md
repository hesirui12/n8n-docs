---
title: Facebook 触发器 Workplace Security 对象文档
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Facebook 触发器 Workplace Security 对象文档
originalFilePath: >-
  integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/workplace-security.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/workplace-security
url: >-
  https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/workplace-security
description: >-
  Learn how to use the Workplace Security object of the Facebook Trigger node in
  n8n.
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

# Workplace Security（Workplace 安全）

> **大白话**：这个对象监听 Workplace（Facebook 的企业协作版）里的安全事件——管理员被添加或移除、员工加入或离开企业等，都会触发你的工作流。

使用此对象来接收 Workplace 安全事件发生时的更新，例如添加或移除管理员、用户加入或离开 Workplace 等。关于触发器本身的更多信息，请参阅 [Facebook 触发器](./README.md)。

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
3. 在 **Object（对象）** 中选择 **Workplace Security（Workplace 安全）**。
4. **Field Names or IDs（字段名或 ID）**：默认情况下，节点会使用 `*` 通配符过滤器触发所有可用事件。如果你想限定事件范围，点击 `X` 去掉星号，然后用下拉框或表达式选择你关心的更新。
5. 在 **Options（选项）** 中，打开 **Include Values（包含值）** 开关。此对象类型如果不开这个选项就无法正常工作。

## 相关资源

更多信息请参阅 Meta 的 [Security（安全）](https://developers.facebook.com/docs/workplace/reference/webhooks/#security) Workplace API 参考文档。
