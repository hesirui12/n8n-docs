---
title: Google 凭证
contentType: overview
nodeTitle: Google
originalFilePath: integrations/builtin/credentials/google/index.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/google
url: https://docs.n8n.io/integrations/builtin/credentials/google
description: >-
  Google 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Google 的身份。
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

# Google

{% hint style="info" %}
**大白话**：Google 的一大堆服务（Gmail、日历、表格、网盘……）都能被 n8n 自动操作，但需要先建一个「Google 凭证」告诉 Google「n8n 是你信得过的应用」。下面有几种方式：**OAuth2 single service**（单个服务授权，最常用，其中 n8n 云端用户还能用免配置的 Managed OAuth2 一键登录）、**OAuth2 generic**（通用版，配合自定义 API 请求用）、**Service Account**（服务账号，适合服务器后台自动跑的场景）、**Gemini API key**（用 AI 模型时填密钥）。绝大部分 Google 节点都支持 OAuth2，Service Account 只有部分节点支持。
{% endhint %}

本部分包含以下内容：

- [OAuth2 single service（单服务授权）](oauth-single-service.md)：为某个特定服务节点创建 OAuth2 凭证，比如 Gmail 节点。有两种选择：
  - [Managed OAuth2（托管授权）](oauth-single-service.md#managed-oauth2)：直接在 n8n 上用 Google 账号登录，完全不用去 Google Cloud Console 配置。仅限 n8n Cloud 用户、且仅限部分 Google 节点使用。
  - [Custom OAuth2（自定义授权）](oauth-single-service.md#custom-oauth2)：在 Google Cloud Console 里配置一个 OAuth2 应用，再连到你的 n8n 凭证上。
- [OAuth2 API (generic)（通用版）](oauth-generic.md)：创建用于 [自定义 API 操作](../../custom-api-actions-for-existing-nodes.md) 的 OAuth2 凭证。
- [Service Account（服务账号）](service-account.md)：为部分特定服务节点创建 [Service Account](https://cloud.google.com/iam/docs/service-account-overview) 凭证。
- [Google PaLM 和 Gemini](../googleai.md)：获取 Google Gemini / Google PaLM 的 API key。

## OAuth2 和 Service Account

Google 服务节点有两种身份验证方式：

- [OAuth2](https://developers.google.com/identity/protocols/oauth2)：推荐使用，因为它适用范围更广、设置也更简单。
- [Service Account](https://cloud.google.com/iam/docs/understanding-service-accounts)：什么时候需要用到服务账号，请参考 [Google 文档：了解服务账号](https://cloud.google.com/iam/docs/understanding-service-accounts)。

### n8n Cloud 用户的 Managed OAuth2（托管授权）

对于以下 Google 节点，n8n Cloud 用户可以使用 [Managed OAuth2](oauth-single-service.md#managed-oauth2)。它提供了一种简化版的凭证创建流程：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/OI5s27oyRBdDvpwcuMQF/" %}

## 兼容的节点

配置好之后，你可以用这些凭证来验证以下节点的身份。大多数节点都兼容 OAuth2 验证。对 Service Account 验证的支持比较有限。

| 节点 | OAuth | Service Account |
| ----------------------------------------------------------------------------------------------- | :---: | :-------------: |
| [Google Ads](../../app-nodes/n8n-nodes-base.googleads.md) | ✅ | ❌ |
| [Gmail](../../app-nodes/n8n-nodes-base.gmail/README.md) | ✅ | ⚠️ |
| [Google Analytics](../../app-nodes/n8n-nodes-base.googleanalytics.md) | ✅ | ❌ |
| [Google BigQuery](../../app-nodes/n8n-nodes-base.googlebigquery.md) | ✅ | ✅ |
| [Google Books](../../app-nodes/n8n-nodes-base.googlebooks.md) | ✅ | ✅ |
| [Google Calendar](../../app-nodes/n8n-nodes-base.googlecalendar/README.md) | ✅ | ❌ |
| [Google Chat](../../app-nodes/n8n-nodes-base.googlechat.md) | ✅ | ✅ |
| [Google Cloud Storage](../../app-nodes/n8n-nodes-base.googlecloudstorage.md) | ✅ | ✅ |
| [Google Contacts](../../app-nodes/n8n-nodes-base.googlecontacts.md) | ✅ | ❌ |
| [Google Cloud Firestore](../../app-nodes/n8n-nodes-base.googlecloudfirestore.md) | ✅ | ✅ |
| [Google Cloud Natural Language](../../app-nodes/n8n-nodes-base.googlecloudnaturallanguage.md) | ✅ | ❌ |
| [Google Cloud Realtime Database](../../app-nodes/n8n-nodes-base.googlecloudrealtimedatabase.md) | ✅ | ❌ |
| [Google Docs](../../app-nodes/n8n-nodes-base.googledocs.md) | ✅ | ✅ |
| [Google Drive](../../app-nodes/n8n-nodes-base.googledrive/README.md) | ✅ | ✅ |
| [Google Drive Trigger](../../trigger-nodes/n8n-nodes-base.googledrivetrigger/README.md) | ✅ | ✅ |
| [Google Perspective](../../app-nodes/n8n-nodes-base.googleperspective.md) | ✅ | ❌ |
| [Google Sheets](../../app-nodes/n8n-nodes-base.googlesheets/README.md) | ✅ | ✅ |
| [Google Slides](../../app-nodes/n8n-nodes-base.googleslides.md) | ✅ | ✅ |
| [Google Tasks](../../app-nodes/n8n-nodes-base.googletasks.md) | ✅ | ❌ |
| [Google Translate](../../app-nodes/n8n-nodes-base.googletranslate.md) | ✅ | ✅ |
| [Google Workspace Admin](../../app-nodes/n8n-nodes-base.gsuiteadmin.md) | ✅ | ❌ |
| [YouTube](../../app-nodes/n8n-nodes-base.youtube.md) | ✅ | ❌ |

{% hint style="warning" %}
**Gmail 与服务账号**

Google 技术上支持用 Service Account 访问 Gmail，但这需要开启域级授权（domain-wide delegation），Google 不推荐这样做，而且它的行为可能不稳定。

n8n 建议 Gmail 节点使用 OAuth2。
{% endhint %}
