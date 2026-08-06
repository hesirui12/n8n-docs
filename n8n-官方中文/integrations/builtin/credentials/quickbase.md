---
title: Quick Base 凭证
description: >-
  Quick Base 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Quick Base 的身份。
contentType:
  - integration
  - reference
nodeTitle: Quick Base credentials
originalFilePath: integrations/builtin/credentials/quickbase.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/quickbase'
url: 'https://docs.n8n.io/integrations/builtin/credentials/quickbase'
layout:
  description:
    visible: false
---

# Quick Base 凭证

{% hint style="info" %}
**大白话**：Quick Base 是一个「让非程序员也能搭业务应用」的低代码平台（表单、报表、数据库都行）。n8n 连它需要两样东西：一个是 **Hostname（主机名）**——就是你 Quick Base 网址里 `https://` 和 `/db` 之间那段字符；另一个是 **User Token（用户令牌）**——在个人资料里的「Manage my user tokens（管理我的用户令牌）」里生成。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Quick Base](../app-nodes/n8n-nodes-base.quickbase.md)

## 准备工作

注册一个 [Quick Base](https://www.quickbase.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Quick Base 官方 API 文档](https://developer.quickbase.com/auth/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要准备：

- **Hostname（主机名）**：你的 Quick Base 网址中位于 `https://` 和 `/db` 之间的那段字符。
- **User Token（用户令牌）**：要生成令牌，请前往 **Profile（个人资料）> My preferences（我的偏好设置）> My User Information（我的用户信息）> Manage my user tokens（管理我的用户令牌）**。详细操作请参考[创建和使用用户令牌](https://helpv2.quickbase.com/hc/en-us/articles/4570374095124-Creating-and-using-user-tokens)文档。
