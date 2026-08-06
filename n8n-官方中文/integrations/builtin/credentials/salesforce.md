---
title: Salesforce 凭证
description: >-
  Salesforce 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Salesforce 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Salesforce credentials
originalFilePath: integrations/builtin/credentials/salesforce.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/salesforce'
url: 'https://docs.n8n.io/integrations/builtin/credentials/salesforce'
layout:
  description:
    visible: false
---

# Salesforce 凭证

{% hint style="info" %}
**大白话**：Salesforce 是全世界最出名的「客户关系管理（CRM）」平台。n8n 连它支持 **JWT** 和 **OAuth2** 两种方式，原理都是去 Salesforce 里创建一个「外部客户端应用（External Client App）」拿到 **Client ID / Client Secret**，再配一把私钥或回调地址。**新项目推荐用 External Client App**（老式的 Connected App 正在被淘汰）。配置步骤比较多，跟着下面一步步做就行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Salesforce](../app-nodes/n8n-nodes-base.salesforce.md)
- [Salesforce trigger（触发器）](../trigger-nodes/n8n-nodes-base.salesforcetrigger.md)

## 支持的验证方式

- JWT
- OAuth2

## 相关资源

关于该服务的更多信息，请参考 [Salesforce 开发者文档](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)。

{% hint style="info" %}
**Salesforce 外部客户端应用（External Client Apps）**

Salesforce 正在逐步淘汰 Connected Apps（已连接应用），改用 External Client Apps（外部客户端应用）。两种方式在 n8n 里都能用。如果你是新建集成，请使用 External Client Apps。已有的 Connected Apps 会继续正常工作。
{% endhint %}

## 使用 JWT

要配置这个凭证，你需要一个 [Salesforce](https://www.salesforce.com/) 账号，以及：

- **Environment Type（环境类型）**（Production（生产）或 Sandbox（沙箱））
- **Client ID（客户端 ID）**：创建外部客户端应用或已连接应用时生成。
- 你的 Salesforce **Username（用户名）**
- 自签名数字证书对应的 **Private Key（私钥）**

### 创建外部客户端应用（推荐）

要完成配置，你先要创建一把私钥和证书，然后创建外部客户端应用：

1. 在 n8n 中，为连接选择 **Environment Type（环境类型）**。从 **Production（生产）** 或 **Sandbox（沙箱）** 中选择最符合你环境的选项。
2. 输入你的 Salesforce **Username（用户名）**。
3. 登录你在 Salesforce 的组织（org）。
4. 你需要一把由证书颁发机构签发的私钥和证书。可以使用你自己的密钥/证书，或者用 OpenSSL 创建一把密钥和一张自签名数字证书。关于创建自己的密钥和证书的操作说明，请参考 Salesforce 的[创建私钥和自签名数字证书文档](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm)。
5. 在 Salesforce 的 **Setup（设置）** 中，在 Quick Find（快速查找）框里输入 `App Manager`，然后选择 **App Manager**。
6. 在 App Manager 页面，选择 **New External Client App（新建外部客户端应用）**。
7. 输入外部客户端应用所需的 **Basic Info（基本信息）**，包括 **Name（名称）** 和 **Contact Email address（联系人邮箱）**。
8. 在 **API (Enable OAuth Settings)**（启用 OAuth 设置）下，选择 **Enable OAuth（启用 OAuth）**。
9. 在 **Callback URL（回调地址）** 框里填入回调地址：`http://localhost:1717/OauthRedirect`（如果是自托管，则填你的 n8n 实例地址）。
10. 在 **OAuth Scopes（OAuth 作用域）** 区域，勾选以下作用域：
    - **Full access（完全访问，full）**
    - **Perform requests at any time（随时执行请求，refresh_token、offline_access）**
11. 在 **Flow Enablement（流程启用）** 区域，选择 **Enable JWT Bearer Flow（启用 JWT Bearer 流程）**。
12. 选择 **Upload Files（上传文件）**，上传包含你的数字证书的文件，比如 `server.crt`。
13. 在 **OAuth Policies（OAuth 策略）** 下，确保以下设置处于**未勾选**状态：
    - **Require Secret for Web Server Flow（Web 服务器流程要求密钥）**
    - **Require Secret for Refresh Token Flow（刷新令牌流程要求密钥）**
    - **Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flows（受支持的授权流程要求 PKCE 扩展）**
14. 选择 **Save（保存）**，然后 **Continue（继续）**。
15. 复制 **Consumer Key（消费者密钥）**，作为 n8n 凭证里的 **Client ID** 填入。
16. 把私钥文件的内容填入 n8n 的 **Private Key（私钥）**。
    - 使用 n8n 里的多行编辑器。
    - 私钥请使用标准 PEM 密钥格式输入：
        ```
        -----BEGIN PRIVATE KEY-----
        KEY DATA GOES HERE
        -----END PRIVATE KEY-----
        ```

更多说明请参考 Salesforce 的[外部客户端应用基础](https://help.salesforce.com/s/articleView?id=sf.external_client_app_about.htm&type=5)文档。

### 创建已连接应用（旧方法）

{% hint style="info" %}
**旧方法**

Salesforce 正在逐步淘汰 Connected Apps（已连接应用）。新建集成请改用 External Client Apps。
{% endhint %}

要完成配置，你先要创建一把私钥和证书，然后创建已连接应用：

1. 在 n8n 中，为连接选择 **Environment Type（环境类型）**。从 **Production（生产）** 或 **Sandbox（沙箱）** 中选择最符合你环境的选项。
2. 输入你的 Salesforce **Username（用户名）**。
3. 登录你在 Salesforce 的组织（org）。
4. 你需要一把由证书颁发机构签发的私钥和证书。可以使用你自己的密钥/证书，或者用 OpenSSL 创建一把密钥和一张自签名数字证书。关于创建自己的密钥和证书的操作说明，请参考 Salesforce 的[创建私钥和自签名数字证书文档](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm)。
5. 在 Salesforce 的 **Setup（设置）** 中，在 Quick Find（快速查找）框里输入 `App Manager`，然后选择 **App Manager**。
6. 在 App Manager 页面，选择 **New Connected App（新建已连接应用）**。
7. 输入已连接应用所需的 **Basic Info（基本信息）**，包括 **Name（名称）** 和 **Contact Email address（联系人邮箱）**。更多说明请参考 Salesforce 的[配置已连接应用基本设置](https://help.salesforce.com/s/articleView?id=sf.connected_app_create_basics.htm&type=5)文档。
8. 勾选 **Enable OAuth Settings（启用 OAuth 设置）**。
9. 在 **Callback URL（回调地址）** 里输入 `http://localhost:1717/OauthRedirect`。
10. 勾选 **Use digital signatures（使用数字签名）**。
11. 选择 **Choose File（选择文件）**，上传包含你的数字证书的文件，比如 `server.crt`。
12. 添加以下 **OAuth scopes（OAuth 作用域）**：
    - **Full access（完全访问，full）**
    - **Perform requests at any time（随时执行请求，refresh_token、offline_access）**
13. 选择 **Save（保存）**，然后 **Continue（继续）**。**Manage Connected Apps（管理已连接应用）** 页面应该会打开到你刚创建的应用。
14. 在 **API (Enable OAuth Settings)**（启用 OAuth 设置）区域，选择 **Manage Consumer Details（管理消费者详情）**。
15. 复制 **Consumer Key（消费者密钥）**，作为 n8n 凭证里的 **Client ID** 填入。
16. 把私钥文件的内容填入 n8n 的 **Private Key（私钥）**。
    - 使用 n8n 里的多行编辑器。
    - 私钥请使用标准 PEM 密钥格式输入：
        ```
        -----BEGIN PRIVATE KEY-----
        KEY DATA GOES HERE
        -----END PRIVATE KEY-----
        ```

以上是 n8n 这边需要做的。Salesforce 还建议设置刷新令牌策略、会话策略和 OAuth 策略：

17. 在 Salesforce 中，选择 **Back to Manage Connected Apps（返回管理已连接应用）**。
18. 选择 **Manage（管理）**。
19. 选择 **Edit Policies（编辑策略）**。
20. 检查 **Refresh Token Policy（刷新令牌策略）** 字段。Salesforce 建议设置为刷新令牌在 90 天后过期。
21. 在 **Session Policies（会话策略）** 区域，Salesforce 建议把 **Timeout Value（超时值）** 设置为 15 分钟。
22. 在 **OAuth Policies（OAuth 策略）** 区域，把 **Permitted Users（允许的用户）** 设置为 **Admin approved users are pre-authorized for permitted users（管理员批准的用户可预先授权）**，然后选择 **OK（确定）**。
23. 选择 **Save（保存）**。
24. 选择 **Manage Profiles（管理配置文件）**，勾选被预先授权使用此已连接应用的配置文件，然后选择 **Save（保存）**。
25. 选择 **Manage Permission Sets（管理权限集）** 来选择权限集。如有必要，先创建权限集。

更多说明请参考 Salesforce 的[在你的组织中创建已连接应用](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)文档。

## 使用 OAuth2

要配置这个凭证，你需要一个 [Salesforce](https://www.salesforce.com/) 账号。

你需要选择 **Environment Type（环境类型）**。在 **Production（生产）** 和 **Sandbox（沙箱）** 之间选择。

### 创建外部客户端应用（推荐）

如果你在[自托管](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，需要从零开始配置 OAuth2，即创建一个外部客户端应用：

1. 在 n8n 中，为连接选择 **Environment Type（环境类型）**。从 **Production（生产）** 或 **Sandbox（沙箱）** 中选择最符合你环境的选项。
2. 输入你的 Salesforce **Username（用户名）**。
3. 登录你在 Salesforce 的组织（org）。
4. 在 Salesforce 的 **Setup（设置）** 中，在 Quick Find（快速查找）框里输入 `App Manager`，然后选择 **App Manager**。
5. 在 App Manager 页面，选择 **New External Client App（新建外部客户端应用）**。
6. 输入外部客户端应用所需的 **Basic Info（基本信息）**，包括 **Name（名称）** 和 **Contact Email address（联系人邮箱）**。
7. 在 **API (Enable OAuth Settings)**（启用 OAuth 设置）下，选择 **Enable OAuth（启用 OAuth）**。
8. 在 **Callback URL（回调地址）** 框里填入你的 n8n OAuth 回调地址（例如 `https://your-n8n-instance.com/rest/oauth2-credential/callback`。对于 n8n Cloud，这将是 `https://oauth.n8n.cloud/oauth2/callback`）。
9. 在 **OAuth Scopes（OAuth 作用域）** 区域，勾选以下作用域：
    - **Full access（完全访问，full）**
    - **Perform requests at any time（随时执行请求，refresh_token、offline_access）**
10. 在 **Flow Enablement（流程启用）** 区域，选择 **Enable Authorization Code and Credentials Flow（启用授权码和凭据流程）**。
11. 在 **OAuth Policies（OAuth 策略）** 下，确保以下设置处于**已勾选**状态：
    - **Require Secret for Web Server Flow（Web 服务器流程要求密钥）**
    - **Require Secret for Refresh Token Flow（刷新令牌流程要求密钥）**
    - **Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flows（受支持的授权流程要求 PKCE 扩展）**
12. 选择 **Save（保存）**，然后 **Continue（继续）**。
13. 复制 **Consumer Key（消费者密钥）**，作为 n8n 凭证里的 **Client ID** 填入。
14. 复制 **Consumer Secret（消费者密钥）**，作为 n8n 凭证里的 **Client Secret** 填入。

更多说明请参考 Salesforce 的[外部客户端应用基础](https://help.salesforce.com/s/articleView?id=sf.external_client_app_about.htm&type=5)文档。

### 创建已连接应用（旧方法）

{% hint style="info" %}
**旧方法**

Salesforce 正在逐步淘汰 Connected Apps（已连接应用）。新建集成请改用 External Client Apps。
{% endhint %}

如果你在[自托管](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n) n8n，也可以通过创建已连接应用来配置 OAuth2：

1. 在 n8n 中，为连接选择 **Environment Type（环境类型）**。从 **Production（生产）** 或 **Sandbox（沙箱）** 中选择最符合你环境的选项。
2. 输入你的 Salesforce **Username（用户名）**。
3. 登录你在 Salesforce 的组织（org）。
4. 在 Salesforce 的 **Setup（设置）** 中，在 Quick Find（快速查找）框里输入 `App Manager`，然后选择 **App Manager**。
5. 在 App Manager 页面，选择 **New Connected App（新建已连接应用）**。
6. 输入已连接应用所需的 **Basic Info（基本信息）**，包括 **Name（名称）** 和 **Contact Email address（联系人邮箱）**。更多说明请参考 Salesforce 的[配置已连接应用基本设置](https://help.salesforce.com/s/articleView?id=sf.connected_app_create_basics.htm&type=5)文档。
7. 勾选 **Enable OAuth Settings（启用 OAuth 设置）**。
8. 在 **Callback URL（回调地址）** 里输入 `http://localhost:1717/OauthRedirect`。
9. 添加以下 **OAuth scopes（OAuth 作用域）**：
    - **Full access（完全访问，full）**
    - **Perform requests at any time（随时执行请求，refresh_token、offline_access）**
10. 确保以下设置处于**未勾选**状态：
    - **Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flows（受支持的授权流程要求 PKCE 扩展）**
    - **Require Secret for Web Server Flow（Web 服务器流程要求密钥）**
    - **Require Secret for Refresh Token Flow（刷新令牌流程要求密钥）**
11. 选择 **Save（保存）**，然后 **Continue（继续）**。**Manage Connected Apps（管理已连接应用）** 页面应该会打开到你刚创建的应用。
12. 在 **API (Enable OAuth Settings)**（启用 OAuth 设置）区域，选择 **Manage Consumer Details（管理消费者详情）**。
13. 复制 **Consumer Key（消费者密钥）**，作为 n8n 凭证里的 **Client ID** 填入。
14. 复制 **Consumer Secret（消费者密钥）**，作为 n8n 凭证里的 **Client Secret** 填入。

以上是 n8n 这边需要做的。Salesforce 还建议设置刷新令牌策略和会话策略：

15. 在 Salesforce 中，选择 **Back to Manage Connected Apps（返回管理已连接应用）**。
16. 选择 **Manage（管理）**。
17. 选择 **Edit Policies（编辑策略）**。
18. 检查 **Refresh Token Policy（刷新令牌策略）** 字段。Salesforce 建议设置为刷新令牌在 90 天后过期。
19. 在 **Session Policies（会话策略）** 区域，Salesforce 建议把 **Timeout Value（超时值）** 设置为 15 分钟。

更多说明请参考 Salesforce 的[在你的组织中创建已连接应用](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm)文档。

## 常见问题

### 从 n8n Cloud 连接 Salesforce 时出现连接问题

如果你从 n8n Cloud 连接 Salesforce 时遇到连接问题，可能需要在你的 Salesforce 用户配置（profile）中启用一个特定的系统权限：

1. 在 Salesforce 中，进入 **Setup（设置）**。
2. 在 **Quick Find（快速查找）** 框里搜索 `Profiles`。
3. 选择连接到 n8n 的用户所使用的配置文件（例如 System Administrator（系统管理员）或相关配置文件）。
4. 点击 **Edit（编辑）**，或者使用新的 **Profile** 界面（如果可用的话）。
5. 找到 **Administrative Permissions（管理权限）** 区域。
6. 勾选 **Approve Connected Apps for Non-Admins（为非管理员批准已连接应用）**。根据你的 Salesforce 语言或翻译，这个复选框也可能显示为 **Approve apps connected not installed（批准连接的未安装应用）**。
7. 点击 **Save（保存）**。

这个权限默认没有启用，即使是管理员配置文件也一样，必须手动激活。没有这个权限，你在把 n8n 连接到 Salesforce 时可能会遇到验证失败。
