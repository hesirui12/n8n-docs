---
title: HaloPSA 凭证
description: >-
  HaloPSA 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  HaloPSA 的身份。
contentType:
  - integration
  - reference
nodeTitle: HaloPSA credentials
originalFilePath: integrations/builtin/credentials/halopsa.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/halopsa'
url: 'https://docs.n8n.io/integrations/builtin/credentials/halopsa'
layout:
  description:
    visible: false
---

# HaloPSA 凭证

{% hint style="info" %}
**大白话**：HaloPSA 是一款 IT 服务管理（工单、客户、报修）软件，有两种用法：装在你自己服务器上（On Premise），或者用官方托管的云版（Hosted）。不管哪种，n8n 连接它都需要一串「钥匙」：**Authorisation Server URL（授权服务器地址）**、**Resource Server URL（资源服务器地址）**、**Client ID** 和 **Client Secret**。云版用户还得额外填自己的租户名（Tenant）。全部信息都能在 HaloPSA 后台的 API 详情页找到。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [HaloPSA](../app-nodes/n8n-nodes-base.halopsa.md)

## 前提条件

创建一个 [HaloPSA](https://halopsa.com/) 账号。

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [HaloPSA 的 API 文档](https://usehalo.com/halopsa/guides/1823/)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要：

- 选择你的 **Hosting Type（托管类型）**：
    - **On Premise Solution（本地部署版）**：如果你把 Halo 应用装在自己的服务器上，选这个。
    - **Hosted Solution Of Halo（Halo 托管版）**：如果你的应用由 Halo 官方托管，选这个。选了这个的话，还需要提供你的 **Tenant（租户名）**。
- 你的 **HaloPSA Authorisation Server URL（授权服务器地址）**：这个地址会显示在 HaloPSA 的 **Configuration（配置）> Integrations（集成）> Halo API** 的 [API Details（API 详情）](https://halopsa.com/guides/article/?kbid=1737) 里。
- **Resource Server（资源服务器）** URL：同样显示在 HaloPSA 的 **Configuration（配置）> Integrations（集成）> Halo API** 的 [API Details（API 详情）](https://halopsa.com/guides/article/?kbid=1737) 里。
- 一个 **Client ID（客户端 ID）**：在 Halo API 设置里注册应用后获得。详细步骤请参考 [HaloPSA 的授权文档](https://usehalo.com/halopsa/guides/1823/)。n8n 建议使用这些设置：
    - **Authentication Method（验证方式）** 选择 `Client Credentials`（客户端凭证）。
    - 权限使用 `all`（全部）。
- 一个 **Client Secret（客户端密钥）**：在 Halo API 设置里注册应用后获得。
- 你的 **Tenant（租户名）**：如果 **Hosting Type（托管类型）** 选的是 **Hosted Solution of Halo（Halo 托管版）**，就必须填租户名。租户名显示在 HaloPSA 的 **Configuration（配置）> Integrations（集成）> Halo API** 的 [API Details（API 详情）](https://halopsa.com/guides/article/?kbid=1737) 里。

HaloPSA 判断 API 访问权限时，会同时参考**应用本身的权限**和**操作者（agent）账号的权限**。
