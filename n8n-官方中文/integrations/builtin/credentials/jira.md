---
title: Jira 凭证
description: >-
  Jira 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Jira 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Jira credentials
originalFilePath: integrations/builtin/credentials/jira.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/jira'
url: 'https://docs.n8n.io/integrations/builtin/credentials/jira'
layout:
  description:
    visible: false
---

# Jira 凭证

{% hint style="info" %}
**大白话**：Jira 是团队最常用的项目管理工具（管需求、管 Bug、看板迭代）。n8n 连它有三种方式：云版推荐用 **OAuth2（网页授权）** 或 **API token（API 令牌）**；自己搭服务器（Server 版）就用**邮箱 + 密码**。跟着下面的步骤复制粘贴就行，别怕麻烦。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Jira](../app-nodes/n8n-nodes-base.jira.md)
- [Jira Trigger（触发器）](../trigger-nodes/n8n-nodes-base.jiratrigger.md)

## 准备工作

创建一个 [Jira](https://www.atlassian.com/software/jira) Software Cloud（云版）或 Server（服务器版）账号。

## 支持的验证方式

- [SW Cloud OAuth2（云版网页授权）](#使用-sw-cloud-oauth2)：用于 [Jira Software Cloud](https://www.atlassian.com/software/jira)（云版）的 OAuth2 验证。
- [SW Cloud API token（云版 API 令牌）](#使用-sw-cloud-api-token)：用于 [Jira Software Cloud](https://www.atlassian.com/software/jira)（云版）。
- [SW Server account（服务器版账号）](#使用-sw-server-account)：用于 [Jira Software Server](https://www.atlassian.com/software/jira/download.)（服务器版）。

## 相关资源

关于该服务的更多信息，请参考 [Jira 的 API 文档](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#about)。

## 使用 SW Cloud OAuth2（云版网页授权）

要配置这个凭证，你需要一个 [Jira Software Cloud](https://www.atlassian.com/software/jira)（云版）账号，并且能访问 [Atlassian Developer Console（开发者控制台）](https://developer.atlassian.com/console/myapps/)。

然后：

1. 打开 [Atlassian Developer Console](https://developer.atlassian.com/console/myapps/)，选择 **Create（创建）** > **OAuth 2.0 integration（OAuth 2.0 集成）**。
2. 给你的应用输入一个 **Name（名称）**，同意条款后选择 **Create（创建）**。
3. 在左侧边栏选择 **Authorization（授权）**。
4. 在 **OAuth 2.0 (3LO)** 旁边选择 **Add（添加）**。
5. 在 n8n 里复制 **OAuth Redirect URL（OAuth 回调地址）**。
6. 把该地址粘贴到 Atlassian Developer Console 的 **Callback URL（回调地址）** 字段里。
7. 选择 **Save changes（保存更改）**。
8. 在左侧边栏选择 **Permissions（权限）**，然后在 **Jira API** 旁边选择 **Add（添加）**。
9. 在 **Jira API** 旁边选择 **Configure（配置）** > **Edit Scopes（编辑权限范围）**。至少启用以下权限范围，然后保存：
	- `read:jira-user`
	- `read:jira-work`
	- `write:jira-work`
	- `manage:jira-webhook`
	- `manage:jira-user`
	- `offline_access`
10. 在左侧边栏选择 **Settings（设置）**。
11. 复制 **Client ID（客户端 ID）**，粘贴到 n8n 里。
12. 复制 **Secret（密钥）**，作为 **Client Secret（客户端密钥）** 粘贴到 n8n 里。
13. 输入你访问 Jira 用的 **Domain（域名）**，例如 `https://example.atlassian.net`。
14. 选择 **Connect to Jira SW Cloud（连接 Jira SW Cloud）**，按提示完成 OAuth2 授权流程。

更多信息请参考 Atlassian 文档中的 [OAuth 2.0 (3LO) apps](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/)。

## 使用 SW Cloud API token（云版 API 令牌）

要配置这个凭证，你需要一个 [Jira Software Cloud](https://www.atlassian.com/software/jira)（云版）账号。

然后：

1. 登录你的 Atlassian 个人资料 > **Security（安全）> API tokens（API 令牌）** 页面，或者直接用这个[链接](https://id.atlassian.com/manage-profile/security/api-tokens)跳转过去。
2. 选择 **Create API Token（创建 API 令牌）**。
3. 给令牌输入一个 **Name（名称）**，比如 `n8n integration`。
4. 设置 **Expires on（到期时间）**，或者保留默认日期。
5. 选择 **Create（创建）**。
6. 复制这个 API token。
7. 在 n8n 里输入与你的 Jira 账号关联的 **Email（邮箱）**。
8. 把你复制的 API token 作为 **API Token** 粘贴进去。
9. 输入你访问 Jira 用的 **Domain（域名）**，例如 `https://example.atlassian.net`。

更多信息请参考 [管理 Atlassian 账号的 API tokens](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)。

{% hint style="info" %}
**新令牌**

新创建的令牌可能需要最多一分钟才能生效。如果第一次验证失败，等一分钟再重试。
{% endhint %}

## 使用 SW Server account（服务器版账号）

要配置这个凭证，你需要一个 [Jira Software Server](https://www.atlassian.com/software/jira/download.)（服务器版）账号。

然后：

1. 输入与你的 Jira 账号关联的 **Email（邮箱）**。
2. 输入你的 Jira 账号 **Password（密码）**。
3. 输入你访问 Jira 用的 **Domain（域名）**。
