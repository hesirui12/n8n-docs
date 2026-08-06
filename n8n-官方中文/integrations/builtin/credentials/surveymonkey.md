---
title: SurveyMonkey 凭证
description: >-
  SurveyMonkey 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  SurveyMonkey 的身份。
contentType:
  - integration
  - reference
nodeTitle: SurveyMonkey credentials
originalFilePath: integrations/builtin/credentials/surveymonkey.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/surveymonkey'
url: 'https://docs.n8n.io/integrations/builtin/credentials/surveymonkey'
layout:
  description:
    visible: false
---

# SurveyMonkey 凭证

{% hint style="info" %}
**大白话**：SurveyMonkey 是著名的在线问卷工具。n8n 连它有两种方式：**API Access Token（访问令牌）**（简单直接，复制三个值就行）或 **OAuth2（网页授权登录）**（更规范）。两种方式都要先去 SurveyMonkey 开发者后台**注册一个应用**，并且给应用勾选好必需的权限范围（scopes），否则没法用。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [SurveyMonkey Trigger（触发器）](../trigger-nodes/n8n-nodes-base.surveymonkeytrigger.md)

## 先决条件

- 注册一个 [SurveyMonkey](https://www.surveymonkey.com) 账号。
- 在[**开发者控制台 > My apps（我的应用）**](https://developer.surveymonkey.com/apps/)里[注册一个应用](https://api.surveymonkey.com/v3/docs?api_key=3yr7n6m8sjwvm48x8nhxej52#registering-an-app)。
    - 必须使用的权限范围（scopes）请参考[必需的应用权限范围](#required-app-scopes)。

## 支持的验证方式

- API access token（API 访问令牌）
- OAuth2（网页授权登录）

## 相关资源

关于该服务的更多信息，请参考 [SurveyMonkey 官方 API 文档](https://developer.surveymonkey.com/api/v3/#SurveyMonkey-Api)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要：

- 一个 **Access Token（访问令牌）**：创建应用后生成。
- 一个 **Client ID（客户端 ID）**：创建应用后生成。
- 一个 **Client Secret（客户端密钥）**：创建应用后生成。

创建好应用并分配好合适的权限范围后，进入 **Settings（设置）> Credentials（凭证）**。复制 **Access Token（访问令牌）**、**Client ID（客户端 ID）** 和 **Secret（密钥）**，填进 n8n。

## 使用 OAuth（网页授权登录）

要配置这个凭证，你需要：

- 一个 **Client ID（客户端 ID）**：创建应用后生成。
- 一个 **Client Secret（客户端密钥）**：创建应用后生成。

创建好应用并分配好合适的权限范围后：

1. 进入应用的 **Settings（设置）> Settings（设置）**。
2. 从 n8n 复制 **OAuth Redirect URL（OAuth 回调地址）**。
3. 用这个地址覆盖应用原有的 **OAuth Redirect URL（OAuth 回调地址）**。
4. 选择 **Submit Changes（提交更改）**。
5. 确保 **Scopes（权限范围）** 区域包含[必需的应用权限范围](#required-app-scopes)。

然后从应用的 **Settings（设置）> Credentials（凭证）** 复制 **Client ID（客户端 ID）** 和 **Client Secret（客户端密钥）**，填进你的 n8n 凭证。之后你就可以在 n8n 里选择 **Connect my account（连接我的账号）** 了。

{% hint style="info" %}
**SurveyMonkey 测试 OAuth 流程**

这个选项只在以下情况下有效：你保留 SurveyMonkey 默认的 **OAuth Redirect URL（OAuth 回调地址）**，并把 n8n 的 OAuth Redirect URL 添加为 **Additional Redirect URL（附加回调地址）**。
{% endhint %}

## 必需的应用权限范围

创建应用后，进入 **Settings（设置）> Scopes（权限范围）**。勾选以下权限范围，你的 n8n 凭证才能正常工作：

- **View Surveys（查看问卷）**
- **View Collectors（查看收集器）**
- **View Responses（查看回答）**
- **View Response Details（查看回答详情）**
- **Create/Modify Webhooks（创建/修改 Webhooks）**
- **View Webhooks（查看 Webhooks）**

选择 **Update Scopes（更新权限范围）** 来保存。
