---
title: Form.io Trigger 凭证
description: >-
  Form.io Trigger 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Form.io Trigger 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Form.io Trigger credentials
originalFilePath: integrations/builtin/credentials/formiotrigger.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/formiotrigger'
url: 'https://docs.n8n.io/integrations/builtin/credentials/formiotrigger'
layout:
  description:
    visible: false
---

# Form.io Trigger 凭证

{% hint style="info" %}
**大白话**：Form.io 是一个在线表单平台（用来做表单、存表单数据）。n8n 的 Form.io Trigger（触发器）节点要在「有人提交了新表单」时自动干活，就得先告诉 n8n 怎么登录你的 Form.io。方法很简单：填你的登录邮箱和密码就行，另外还要选一下你的环境是云端版还是自建版。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Form.io Trigger](../trigger-nodes/n8n-nodes-base.formiotrigger.md)

## 支持的验证方式

- Basic auth（基础认证，用账号密码登录）

## 相关资源

关于该服务的更多信息，请参考 [Form.io 官方 API 文档](https://apidocs.form.io/)。

## 使用 basic auth（基础认证）

要配置这个凭证，你需要一个 [Form.io](https://www.form.io/) 账号，以及：

- 你的 **Environment（环境）**
- 你的登录 **Email address（邮箱地址）**
- 你的 **Password（密码）**

配置步骤：

1. 选择你的 **Environment（环境）**：
    - 如果你不是自己搭建 Form.io，就选 **Cloud hosted（云端托管）**。
    - 如果你是自己搭建的 Form.io，就选 **Self-hosted（自建托管）**，然后补充：
        - 你的 **Self-Hosted Domain（自建域名）**。只填域名本身即可。例如，如果你在 `https://yourserver.com/yourproject/manage/view` 查看表单，那 Self-Hosted Domain 就填 `https://yourserver.com`。
2. 填入你登录 Form.io 用的 **Email address（邮箱地址）**。
3. 填入你登录 Form.io 用的 **Password（密码）**。
