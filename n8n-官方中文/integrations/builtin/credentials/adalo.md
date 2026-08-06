---
title: Adalo 凭证
description: >-
  Adalo 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Adalo 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Adalo credentials
originalFilePath: integrations/builtin/credentials/adalo.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/adalo'
url: 'https://docs.n8n.io/integrations/builtin/credentials/adalo'
layout:
  description:
    visible: false
---

# Adalo 凭证

{% hint style="info" %}
**大白话**：Adalo 是一个「不用写代码就能做 App」的可视化工具。n8n 连它需要两样东西：**API Key（API 密钥）** 和 **App ID（应用 ID）**，都在创建好 App 之后的设置里能找到。注意：必须购买 Team（团队版）或 Business（商业版）套餐才能用 API。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Adalo](../app-nodes/n8n-nodes-base.adalo.md)

{% hint style="info" %}
**API 访问权限**

你需要 Team 或 Business 套餐才能使用 Adalo 的 API。
{% endhint %}

## 支持的验证方式

- API key（API 密钥）

## 相关资源

关于该服务的更多信息，请参考 [Adalo 的 API 数据集合（collections）文档](https://help.adalo.com/integrations/the-adalo-api/collections)。

## 使用 API key（API 密钥）

要配置这个凭证，你需要一个 [Adalo](https://www.adalo.com/) 账号，以及：

- 一个 **API Key（API 密钥）**
- 一个 **App ID（应用 ID）**

获取方法：先创建一个 Adalo 应用：

1. 在顶部导航的应用下拉菜单里，选择 **CREATE NEW APP（创建新应用）**。
2. 选择适合你的 App 布局类型（App Layout），然后点 **Next（下一步）**。
    - 如果你是新手，Adalo 推荐选 **Mobile Only（仅手机端）**。
3. 选一个模板开始，或者选 **Blank（空白）**，然后点 **Next（下一步）**。
4. 填写 **App Name（应用名称）**，比如 `n8n integration`。
5. 如果适用的话，为该应用选择所属的 **Team（团队）**。
6. 选择品牌配色。
7. 点 **Create（创建）**。应用编辑器会打开。
8. 在左侧菜单里，选择 **Settings（设置）**（齿轮图标）。
9. 选择 **App Access（应用访问）**。
10. 在 **API Key** 区域，点 **Generate Key（生成密钥）**。
    - 如果你的套餐等级不够，这里会提示你先升级套餐。
11. 复制生成的密钥，作为 **API Key** 填进 n8n 凭证。
12. 你的应用 URL 里，`https://app.adalo.com/apps/` 后面那一串就是 **App ID**。例如，如果你的应用 URL 是 `https://app.adalo.com/apps/b78bdfcf-48dc-4550-a474-dd52c19fc371/app-settings`，那么 `b78bdfcf-48dc-4550-a474-dd52c19fc371` 就是 App ID。复制这串值，填进 n8n 凭证。

关于在 Adalo 中创建应用的更多信息，请参考 [创建应用](https://help.adalo.com/design/designing-your-app/creating-an-app)。关于生成 API key 的更多信息，请参考 [The Adalo API](https://help.adalo.com/integrations/the-adalo-api)。
