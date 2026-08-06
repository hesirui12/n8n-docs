---
title: Jotform 凭证
description: >-
  Jotform 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Jotform 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Jotform credentials
originalFilePath: integrations/builtin/credentials/jotform.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/jotform'
url: 'https://docs.n8n.io/integrations/builtin/credentials/jotform'
layout:
  description:
    visible: false
---

# Jotform 凭证

{% hint style="info" %}
**大白话**：Jotform 是「拖拽式表单生成器」，普通人不用写代码就能做报名表、问卷、订单表。n8n 连它：先在 Jotform 后台生成一个 **API Key**，再按你用的表单类型选对应的 **API Domain（API 域名）** 填进去就行。欧盟数据（EU Safe Forms）或医疗 HIPAA 表单要选不同的域名，别选错。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Jotform Trigger（触发器）](../trigger-nodes/n8n-nodes-base.jotformtrigger.md)

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Jotform 的 API 文档](https://api.jotform.com/docs/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Jotform](https://www.jotform.com/) 账号，以及：

- 一个 **API Key（API 密钥）**
- **API Domain（API 域名）**

设置步骤：

1. 进入 **Settings（设置）>** [**API**](https://www.jotform.com/myaccount/api)。
2. 选择 **Create New Key（创建新密钥）**。
3. 在 Jotform 里选择这个 **Name（名称）**，把 API key 改成更有意义的名字，比如 `n8n integration`。
4. 复制 **API Key**，填进你的 n8n 凭证里。
5. 在 n8n 里根据你使用的表单选择对应的 **API Domain（API 域名）**：
    - **api.jotform.com**：除非你属于下面两种情况，否则都用这个。
    - **eu-api.jotform.com**：如果你在使用 Jotform [EU Safe Forms（欧盟安全表单）](https://www.jotform.com/eu-safe-forms/) 就选这个。
    - **hipaa-api.jotform.com**：如果你在使用 Jotform [HIPAA 表单（医疗合规表单）](https://www.jotform.com/hipaa/) 就选这个。

关于创建密钥和 API 域名的更多信息，请参考 [Jotform API 文档](https://api.jotform.com/docs/)。
