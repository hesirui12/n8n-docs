---
title: Gmail 节点常见问题
description: >-
  n8n（工作流自动化平台）中 Gmail 节点常见问题与疑问的文档。包含问题详情和建议的解决方案。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Gmail 节点常见问题
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.gmail/common-issues.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/common-issues
url: >-
  https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/common-issues
layout:
  description:
    visible: false
---

# Gmail 节点常见问题

> **大白话**：这一页汇总了用 Gmail 节点时最容易踩的坑和解决办法：怎么去掉邮件尾部的「n8n 自动发送」字样、为什么下拉框报 Forbidden 错误、401 认证失败、参数无效等，照着步骤排查就行。

这里汇总了 [Gmail 节点](README.md) 的一些常见错误和问题，以及排查解决步骤。

## 去掉已发送邮件中的 n8n 署名

如果你用该节点[发送邮件](message-operations.md#send-a-message)或[回复邮件](message-operations.md#reply-to-a-message)，节点会在邮件末尾自动加上这句话：

> This email was sent automatically with n8n

要去掉这个署名：

1. 在节点的 **Options（选项）** 区域，点击 **Add option（添加选项）**。
2. 选择 **Append n8n attribution（追加 n8n 署名）**。
3. 把这个开关关掉。

更多信息请参考[发送选项](message-operations.md#send-options)和[回复选项](message-operations.md#reply-options)。

## Forbidden - perhaps check your credentials（禁止访问——请检查你的凭据）

这个错误会显示在节点的某些下拉框旁边，比如 **Label Names or IDs（标签名称或 ID）** 下拉框。完整报错文本类似这样：

```
There was a problem loading the parameter options from server: "Forbidden - perhaps check your credentials?"
```

这个错误最常见的情况是：你用的是 Google Service Account（服务账号）作为凭据，但凭据里没有开启 **Impersonate a User（模拟某个用户）**。

更多信息请参考 [Google Service Account：完成你的 n8n 凭据](../../credentials/google/service-account.md#finish-your-n8n-credential)。

## 401 unauthorized 错误

完整报错文本类似这样：

```
401 - {"error":"unauthorized_client","error_description":"Client is unauthorized to retrieve access tokens using this method, or client not authorized for any of the scopes requested."}
```

这个错误说明你用的凭据在作用域（scopes）或权限上出了问题。

解决方法：

1. 对于 [OAuth2](../../credentials/google/oauth-single-service.md) 凭据：请确认你在 **APIs & Services（API 和服务）> Library（库）** 中已启用 Gmail API。更多信息请参考 [Google OAuth2 Single Service - 启用 API](../../credentials/google/oauth-single-service.md#enable-apis)。
2. 对于 [Service Account（服务账号）](../../credentials/google/service-account.md) 凭据：
    1. [启用全域委派（domain-wide delegation）](../../credentials/google/service-account.md#enable-domain-wide-delegation)。
    2. 确保你在全域委派配置里加入了 Gmail API。

## Bad request - please check your parameters（请求无效——请检查你的参数）

这个错误最常见的原因是：你填写的 Message ID（邮件 ID）、Thread ID（会话 ID）或 Label ID（标签 ID）不存在。

可以先对该 ID 执行一次 **Get（获取）** 操作，确认它是否真的存在。
