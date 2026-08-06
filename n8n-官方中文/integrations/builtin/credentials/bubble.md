---
title: Bubble 凭证
description: >-
  Bubble 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Bubble（无代码应用搭建平台）的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Bubble credentials
originalFilePath: integrations/builtin/credentials/bubble.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/bubble'
url: 'https://docs.n8n.io/integrations/builtin/credentials/bubble'
layout:
  description:
    visible: false
---

# Bubble 凭证

> 大白话：Bubble 是「不写代码搭应用」的平台。n8n 想读你 Bubble 应用里的数据，要点有三：①必须付费套餐才开放 API；②在 Bubble 里创建一个应用并打开 Data API 开关；③从页面网址里抠出「应用名」，再生成一把 API Token（令牌）填进 n8n，最后选对环境（开发/正式）和托管方式（Bubble 官方/自定义域名）。

这些凭证可以用来验证以下节点的身份：

- [Bubble](../app-nodes/n8n-nodes-base.bubble.md)

{% hint style="info" %}
**API 访问权限**

你需要付费套餐才能访问 Bubble 的 API。
{% endhint %}

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Bubble 官方 API 文档](https://manual.bubble.io/help-guides/integrations/api)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个付费的 [Bubble](https://bubble.io) 账号，以及：

- 一个 **API Token（API 令牌）**
- 一个 **App Name（应用名称）**
- 如果你用了自定义域名，还需要你的 **Domain（域名）**

配置前，你需要先创建一个应用：

1. 进入 Bubble 的 [**Apps（应用）**](https://bubble.io/home/apps) 页面。
1. 选择 **Create an app（创建应用）**。
1. 为应用填写一个 **Name（名称）**，例如 `n8n-integration`。
1. 选择 **Get started（开始）**，应用详情页会打开。
1. 在左侧导航中选择 **Settings（设置）**（齿轮图标）。
1. 选择 **API** 标签页。
1. 在 **Public API Endpoints（公开 API 端点）** 区域，勾选 **Enable Data API（启用数据 API）**。
1. 页面上会显示 **Data API root URL（数据 API 根地址）**，例如：`https://n8n-integration.bubbleapps.io/version-test/api/1.1/obj`。
1. 复制这个网址中 `https://` 之后、`.bubbleapps.io` 之前的部分，作为 n8n 里的 **App Name（应用名称）**。以上面为例，就填 `n8n-integration`。
1. 选择 **Generate a new API token（生成新的 API 令牌）**。
8. 填写一个 **API Token Label（API 令牌标签）**，例如 `n8n integration`。
1. 复制 **Private key（私钥）**，作为 n8n 凭证里的 **API Token（API 令牌）**。
    - 关于生成 API 令牌的更多信息，请参考 [Data API | Authentication（数据 API | 身份验证）](https://manual.bubble.io/core-resources/api/the-bubble-api/the-data-api/authentication)。
1. 在 n8n 中，选择与你应用最匹配的 **Environment（环境）**：
    - 还没上线发布的应用选 **Development（开发）**，访问地址形如 `https://appname.bubbleapps.io/version-test` 或 `https://www.mydomain.com/version-test`。
    - 已经[发布上线](https://manual.bubble.io/help-guides/getting-started/navigating-the-bubble-editor/deploying-your-app)的应用选 **Live（正式）**，访问地址形如 `https://appname.bubbleapps.io` 或 `https://www.mydomain.com`。
1. 在 n8n 中，选择你的 **Hosting（托管方式）**：
    - 如果没有设置自定义域名，选择 **Bubble Hosting（Bubble 托管）**。
    - 如果已经配置了[自定义域名](https://manual.bubble.io/help-guides/getting-started/navigating-the-bubble-editor/tabs-and-sections/settings-tab/web-app/custom-domain-and-dns)，选择 **Self Hosted（自托管）** 并填写你的自定义 **Domain（域名）**。

更多信息请参考 Bubble 的 [创建和管理应用](https://manual.bubble.io/help-guides/getting-started/creating-and-managing-apps) 文档。
