---
title: LinkedIn 凭证
description: >-
  LinkedIn 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  LinkedIn 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: LinkedIn credentials
originalFilePath: integrations/builtin/credentials/linkedin.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/linkedin'
url: 'https://docs.n8n.io/integrations/builtin/credentials/linkedin'
layout:
  description:
    visible: false
---

# LinkedIn 凭证

{% hint style="info" %}
**大白话**：用 n8n 自动往 LinkedIn（领英）发帖、管理公司主页内容，就要配这个凭证。新用户/新应用推荐用 **Community Management OAuth2（社区管理网页授权）**；老应用才用旧版 **OAuth2**。核心就两步：在 LinkedIn 开发者后台建一个应用（选上「Share on LinkedIn」等产品），把 **Client ID** 和 **Client Secret** 抄进 n8n，然后点连接授权。想用「组织账号」发帖还要过 LinkedIn 的社区管理应用审核。文档后面还有一节「Lead Sync API」，是专门把 LinkedIn 广告/表单收集的销售线索通过 webhook 自动同步进 n8n 的进阶玩法，需要额外申请权限，普通用户跳过即可。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [LinkedIn](../app-nodes/n8n-nodes-base.linkedin.md)

## 准备工作

* 创建一个 [LinkedIn](https://www.linkedin.com/) 账号。
* 创建一个 LinkedIn [Company Page（公司主页）](https://www.linkedin.com/help/linkedin/answer/a543852)。

## 支持的验证方式

- **Community Management OAuth2（社区管理网页授权）**：如果你是 LinkedIn 新用户，或者正在创建新的 LinkedIn 应用，用这种方式。
- **OAuth2（网页授权）**：适用于老版本的 LinkedIn 应用和用户账号。

## 相关资源

关于该服务的更多信息，请参考 [LinkedIn 的 Community Management API 文档](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/community-management-overview?view=li-lms-2024-04)。

这个凭证使用 API 版本 `202404`。

## 使用 Community Management OAuth2（社区管理网页授权）

如果你是 LinkedIn 新用户，或者正在创建新的 LinkedIn 应用，用这种方式。

要配置这个凭证，你需要一个 [LinkedIn](https://www.linkedin.com/) 账号、一个 LinkedIn [Company Page（公司主页）](https://www.linkedin.com/help/linkedin/answer/a543852)，以及：

- 一个 **Client ID（客户端 ID）**：创建新的开发者应用后生成。
- 一个 **Client Secret（客户端密钥）**：创建新的开发者应用后生成。

创建新的开发者应用并配置凭证的步骤：

1. 登录 LinkedIn，用这个链接[创建一个新的开发者应用](https://www.linkedin.com/developers/apps/new)。
2. 给应用输入一个 **App name（应用名称）**，比如 `n8n integration`。
3. 在 **LinkedIn Page** 处，输入一个 LinkedIn [Company Page（公司主页）](https://www.linkedin.com/help/linkedin/answer/a543852)，或者用 **Create a new LinkedIn Page（创建新的 LinkedIn 主页）** 链接现场创建一个。更多信息请参考[将应用与 LinkedIn 主页关联](https://www.linkedin.com/help/linkedin/answer/a548360)。
4. 添加 **App logo（应用图标）**。
5. 勾选同意 **Legal agreement（法律协议）**。
6. 选择 **Create app（创建应用）**。
7. 这会打开 **Products（产品）** 选项卡。选择你要为应用启用的产品/API。要让 LinkedIn 节点正常工作，你必须包含并配置：
	- **Share on LinkedIn（在 LinkedIn 上分享）**
	- **Sign In with LinkedIn using OpenID Connect（使用 OpenID Connect 通过 LinkedIn 登录）**
 	- **Advertising API（广告 API）**（如果你以组织账号而非个人身份使用）
8. 申请好你需要的产品权限后，打开 **Auth（认证）** 选项卡。
9. 复制 **Client ID**，填进你的 n8n 凭证。
10. 选择 **Copy（复制）** **Primary Client Secret（主客户端密钥）** 的图标。把复制的内容作为 **Client Secret** 填进 n8n 凭证。

{% hint style="info" %}
**从组织账号发帖**

要以组织身份发帖，你需要让应用通过 LinkedIn 的 [Community Management App Review（社区管理应用审核）](https://learn.microsoft.com/en-us/linkedin/marketing/community-management-app-review) 流程。
{% endhint %}

关于权限范围和权限的更多信息，请参考 [获取 LinkedIn API 访问权限](https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access)。

## 使用 Lead Sync API（销售线索同步 API）

LinkedIn 的 Lead Sync API 允许你通过 webhook 把 LinkedIn 广告和自然表单（公司主页、活动、产品）收集的线索表单响应同步到 n8n 工作流。这需要更多设置和 LinkedIn 的批准。

### 准备工作

- 一个 LinkedIn 开发者应用（按上面的步骤创建）
- 与你的开发者应用关联的公司 LinkedIn 账号
- Lead Sync API 产品访问权限（需要单独申请）
- 一个公网可访问的 HTTPS webhook URL（你的 n8n 工作流 webhook 地址）

### 设置流程

1. **创建 LinkedIn 开发者应用**：按上面「Community Management OAuth2」或「OAuth2」部分的步骤操作。
2. **关联你的公司账号**：向 LinkedIn 提交请求，把公司 LinkedIn 账号关联到你的开发者应用。这需要通过 LinkedIn 开发者门户完成。
3. **申请 Lead Sync API 访问权限**：
   - 在[你的 LinkedIn 开发者应用](https://www.linkedin.com/developers/apps/)里，进入 **Products（产品）** 选项卡。
   - 申请 **Lead Sync API** 产品的访问权限。
4. **配置权限**：确保你的应用拥有 `r_marketing_leadgen_automation` 权限，该权限允许你：
   - 访问已认证成员的广告表单和自然表单
   - 访问表单响应（线索）
   - 管理线索通知（webhook）
5. **在 n8n 里设置 webhook**：
   - 在 n8n 里创建一个带 Webhook trigger（触发器）节点的工作流。
   - 从 n8n 复制 webhook URL（必须是 HTTPS）。
   - webhook URL 必须公网可访问，并且接受 POST 请求且不需要额外的授权。
6. **处理验证请求（challenge）**：
   - 当你向 LinkedIn 注册 webhook 时，LinkedIn 会发送一个带 `challengeCode` 查询参数的 GET 请求。
   - 你的 n8n 工作流必须在 3 秒内响应一个包含以下内容的 JSON 载荷：
     - `challengeCode`：LinkedIn 发来的验证码
     - `challengeResponse`：用你的应用 Client Secret 作为密钥，对验证码做 HMAC-SHA256 哈希
   - 响应格式示例：
     ```json
     {
       "challengeCode": "890e4665-4dfe-4ab1-b689-ed553bceeed0",
       "challengeResponse": "27b1d19678542072a7f1d0ce845d0c78cec22567f413697e25648f44fa3d1514"
     }
     ```
7. **创建线索通知订阅**：
   - 使用 `leadNotifications` API 创建 webhook 订阅。
   - 你可以在不同层级创建订阅：
     - **Owner level（所有者层级）**：接收组织或赞助账号下所有表单的通知
     - **Form level（表单层级）**：只接收特定表单的通知
     - **Associated entity level（关联实体层级）**：接收关联到特定实体（广告、活动等）的表单通知
   - API 调用示例：
     ```bash
     POST https://api.linkedin.com/rest/leadNotifications
     {
       "webhook": "https://your-n8n-instance.com/webhook/linkedin-leads",
       "owner": {"organization": "urn:li:organization:123456"},
       "leadType": "SPONSORED"
     }
     ```
8. **获取线索表单响应**：
   - webhook 通知设置好之后，有新线索提交时你会收到通知。
   - 使用 `leadFormResponses` API 获取实际的线索数据：
     ```bash
     GET https://api.linkedin.com/rest/leadFormResponses?owner=(organization:urn%3Ali%3Aorganization%3A123456)&leadType=(leadType:SPONSORED)&q=owner
     ```

### 线索类型

LinkedIn 支持同步不同类型的线索：

- **SPONSORED**：从赞助广告收集的线索
- **COMPANY**：从公司主页收集的线索
- **EVENT**：从活动页面收集的线索
- **ORGANIZATION_PRODUCT**：从组织产品页面收集的线索

### Webhook 验证

LinkedIn 会每 2 小时定期重新验证 webhook 端点。如果连续 3 次验证失败，该端点将被封禁，不再发送事件。请确保你的 webhook：

- 在 3 秒内响应验证请求
- 对所有通知返回 2xx 开头的 HTTP 状态码
- 使用 HTTPS（不支持 HTTP URL）
- 公网可访问且无需认证

### 安全性

要确认通知确实来自 LinkedIn：

1. 检查 POST 请求中的 `X-LI-Signature` 请求头
2. 该请求头包含用你的应用 Client Secret 对 JSON 编码的 POST 请求体计算的 HMAC-SHA256 哈希
3. 在你这边计算同样的哈希，确认两者一致
4. 丢弃任何签名不匹配的事件

更多信息请参考 LinkedIn 的 [Lead Sync API 文档](https://learn.microsoft.com/en-us/linkedin/marketing/lead-sync/leadsync) 和 [Webhook 验证指南](https://learn.microsoft.com/en-us/linkedin/shared/api-guide/webhook-validation)。

## 使用 OAuth2（网页授权）

只对老版本的 LinkedIn 应用和用户账号使用这种方式。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/HoGXnGIfupVt81dGox48/" %}

所有用户都必须选择：

- **Organization Support（组织支持）**：如果打开，凭证会使用 `w_organization_social` 权限范围请求以组织身份发帖的权限。
	- 要使用这个选项，你必须让应用通过 LinkedIn 的 [Community Management App Review（社区管理应用审核）](https://learn.microsoft.com/en-us/linkedin/marketing/community-management-app-review) 流程。
- **Legacy（旧版）**：如果打开，凭证使用旧版权限范围 `r_liteprofile` 和 `r_emailaddress`，而不是较新的 `profile` 和 `email` 权限范围。

如果你是[自己搭建（self-hosting）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，你需要通过创建新的开发者应用从头配置 OAuth2：

1. 登录 LinkedIn，用这个链接[创建一个新的开发者应用](https://www.linkedin.com/developers/apps/new)。
2. 给应用输入一个 **App name（应用名称）**，比如 `n8n integration`。
3. 在 **LinkedIn Page** 处，输入一个 LinkedIn [Company Page（公司主页）](https://www.linkedin.com/help/linkedin/answer/a543852)，或者用 **Create a new LinkedIn Page（创建新的 LinkedIn 主页）** 链接现场创建一个。更多信息请参考[将应用与 LinkedIn 主页关联](https://www.linkedin.com/help/linkedin/answer/a548360)。
4. 添加 **App logo（应用图标）**。
5. 勾选同意 **Legal agreement（法律协议）**。
6. 选择 **Create app（创建应用）**。
7. 这会打开 **Products（产品）** 选项卡。选择你要为应用启用的产品/API。要让 LinkedIn 节点正常工作，你必须包含：
	- **Share on LinkedIn（在 LinkedIn 上分享）**
	- **Sign In with LinkedIn using OpenID Connect（使用 OpenID Connect 通过 LinkedIn 登录）**
8. 申请好你需要的产品权限后，打开 **Auth（认证）** 选项卡。
9. 复制 **Client ID**，填进你的 n8n 凭证。
10. 选择 **Copy（复制）** **Primary Client Secret（主客户端密钥）** 的图标。把复制的内容作为 **Client Secret** 填进 n8n 凭证。

{% hint style="info" %}
**从组织账号发帖**

要以组织身份发帖，你需要让应用通过 LinkedIn 的 [Community Management App Review（社区管理应用审核）](https://learn.microsoft.com/en-us/linkedin/marketing/community-management-app-review) 流程。
{% endhint %}

关于权限范围和权限的更多信息，请参考 [获取 LinkedIn API 访问权限](https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access)。
