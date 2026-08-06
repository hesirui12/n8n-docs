---
title: Supabase 凭证
description: >-
  Supabase 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Supabase 的身份。
contentType:
  - integration
  - reference
priority: high
nodeTitle: Supabase credentials
originalFilePath: integrations/builtin/credentials/supabase.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/supabase
url: https://docs.n8n.io/integrations/builtin/credentials/supabase
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

# Supabase 凭证

{% hint style="info" %}
**大白话**：Supabase 是开源的「后端即服务」平台（自带数据库、登录、存储等）。n8n 连它需要填两个值：**Host（主机地址）** 和 **Secret Key（密钥）**。注意 Host 只要填项目地址，**不要带末尾的 `/rest/v1` 路径**。另外 Supabase 正在淘汰旧的 `service_role` 密钥，建议尽快换成新的密钥格式。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Supabase](../app-nodes/n8n-nodes-base.supabase/README.md)
* [Supabase Vector Store（向量存储）](../cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoresupabase.md)

## 先决条件

注册一个 [Supabase](https://supabase.com/dashboard/sign-up) 账号。

## 支持的验证方式

* API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Supabase 官方 API 文档](https://supabase.com/docs/guides/api)。

## 使用 Secret key（密钥）

要配置这个凭证，你需要：

* 一个 **Host（主机）**
* 一个 **Secret Key（密钥）**

凭证通过 Supabase 的 [Data API](https://supabase.com/docs/guides/api) 连接你的项目，这个 API 必须处于启用状态。你可以在项目的 [Data API 设置](https://supabase.com/dashboard/project/_/integrations/data_api/overview) 里查看和启用它。

生成你的密钥：

1. 登录 Supabase 账号，进入 **Dashboard（控制台）**，创建或选择一个你想生成 API key 的项目。
2. 进入 [**Integrations（集成）> Data API**](https://supabase.com/dashboard/project/_/integrations/data_api/overview)，复制 **Project URL（项目地址）**。把它填成 n8n 的 **Host（主机）**，**去掉末尾的 `/rest/v1` 路径**（用 `https://your_project.supabase.co`，而不是 `https://your_project.supabase.co/rest/v1`）。
3. 进入 [**Project Settings（项目设置）> API Keys（API 密钥）**](https://supabase.com/dashboard/project/_/settings/api-keys) 查看你项目的 API 密钥。
4. 创建或显示一个 **secret key（密钥）**，把它填成 n8n 的 **Secret Key（密钥）**。更多信息请参考[理解 API 密钥](https://supabase.com/docs/guides/getting-started/api-keys)。

{% hint style="info" %}
使用旧版 `service_role` 密钥的既有凭证仍然可以继续工作，但 Supabase 正在[逐步淘汰旧版 API 密钥](https://supabase.com/docs/guides/getting-started/migrating-to-new-api-keys)。请在这些旧密钥于 2026 年底被禁用之前，把旧密钥换成新的 secret key。
{% endhint %}
