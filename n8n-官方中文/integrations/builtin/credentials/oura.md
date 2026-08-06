---
title: Oura 凭证
description: >-
  Oura 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Oura 的身份。
contentType:
  - integration
  - reference
nodeTitle: Oura credentials
originalFilePath: integrations/builtin/credentials/oura.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/oura'
url: 'https://docs.n8n.io/integrations/builtin/credentials/oura'
layout:
  description:
    visible: false
---

# Oura 凭证

{% hint style="info" %}
**大白话**：Oura 是做智能戒指的公司，记录睡眠、心率、活动等健康数据，也开放了 API。n8n 连它用一把 **Personal Access Token（个人访问令牌）**，去 Oura 开发者后台的「Personal Access Tokens」页面新建一个，复制进 n8n 即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Oura](../app-nodes/n8n-nodes-base.oura.md)

## 准备工作

注册一个 [Oura](https://ouraring.com/developer) 开发者账号。

## 支持的验证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Oura 官方 API 文档](https://cloud.ouraring.com/v2/docs)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要：

- 一个 **Personal Access Token（个人访问令牌）**：要生成个人访问令牌，进入 [Personal Access Tokens（个人访问令牌）](https://cloud.ouraring.com/personal-access-tokens) 页面，点击 **Create A New Personal Access Token（新建一个个人访问令牌）**。

更多说明请参考[如何生成个人访问令牌](https://support.ouraring.com/hc/en-us/articles/4415266939155-The-Oura-API#h_01H5B94SP4P9YHG9ZKN1H69E7Z)。
