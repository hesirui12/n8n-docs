---
title: Databricks 凭证
description: >-
  Databricks 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Databricks 的身份。
contentType:
  - integration
  - reference
nodeTitle: Databricks credentials
originalFilePath: integrations/builtin/credentials/databricks.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/databricks'
url: 'https://docs.n8n.io/integrations/builtin/credentials/databricks'
layout:
  description:
    visible: false
---

# Databricks 凭证

> **大白话**：Databricks 是数据分析/机器学习平台（跑 Spark 之类）。n8n 连接它有两种方式：**个人访问令牌**（自己用，最简单，生成的令牌以 `dapi` 开头）和 **OAuth2 服务主体**（适合自动化流程、不需要人工登录）。个人或小团队直接用第一种就够了，按下面步骤 1-7 走。

这些凭证可以用来验证以下节点的身份：

- [Databricks](../app-nodes/n8n-nodes-base.databricks.md)

## 准备工作（Prerequisites）

- 一个位于 AWS、Azure 或 GCP 上的 [Databricks](https://www.databricks.com/) 工作区（workspace）。
- 一个拥有你要执行的操作所需权限的 Databricks 用户账号。

## 支持的验证方式（Supported authentication methods）

- Personal access token（个人访问令牌）
- OAuth2（service principal，服务主体）

## 相关资源（Related resources）

关于该服务的更多信息，请参考 [Databricks 的认证文档](https://docs.databricks.com/aws/en/dev-tools/auth/)。

## 使用个人访问令牌（personal access token）

要配置这个凭证，你需要准备：

- **Host**：你的 Databricks 工作区地址（例如 `https://adb-1234567890123456.7.azuredatabricks.net`）。
- **Access Token**：在你的 Databricks 工作区中生成的个人访问令牌。

生成个人访问令牌的步骤：

1. 在 Databricks 工作区中，点击右上角的用户名，然后选择 **Settings**（设置）。
2. 选择 **Developer**（开发者）。
3. 在 **Access tokens** 旁边选择 **Manage**（管理）。
4. 选择 **Generate new token**（生成新令牌）。
5. 可选：输入一个 **Comment**（备注）来标识这个令牌，然后选择 **Generate**（生成）。
6. 复制令牌并保存在安全的地方。关闭这个对话框后就再也看不到这个令牌了。
7. 在 n8n 凭证中把它填为 **Access Token**。

{% hint style="info" %}
**令牌格式（Token format）**

个人访问令牌以 `dapi` 开头，例如 `dapi1234abcd5678efgh`。
{% endhint %}

更多信息请参考 [Databricks 个人访问令牌认证](https://docs.databricks.com/en/dev-tools/auth/pat.html)。

## 使用 OAuth2（service principal，服务主体）

这种方法使用 Databricks 的服务主体配合 OAuth M2M（机器对机器）流程。它是自动化工作流的推荐方式，因为全程不需要人工交互。

要配置这个凭证，你需要准备：

- **Host**：你的 Databricks 工作区地址（例如 `https://adb-1234567890123456.7.azuredatabricks.net`）。
- **Client ID**：你的服务主体的应用程序 ID。
- **Client Secret**：为服务主体生成的 OAuth 密钥。

设置此凭证分两步：

1. **在 Databricks 中创建服务主体和 OAuth 密钥**（见下一小节）。
2. **在 n8n 中配置 OAuth2 凭证**（见下下小节）。

### 创建服务主体和 OAuth 密钥（Create a service principal and OAuth secret）

1. 在 Databricks 账号控制台（account console）中，选择 **User management**（用户管理）。
2. 选择 **Service principals**（服务主体），然后选择 **Add service principal**（添加服务主体）。
3. 输入服务主体的名称，然后选择 **Add**（添加）。
4. 打开该服务主体，进入 **Configuration**（配置）标签页，授予它需要的工作区权限。
5. 进入 **Secrets**（密钥）标签页，选择 **Generate secret**（生成密钥）。
6. 设置密钥的有效天数（最多 730 天），然后选择 **Generate**（生成）。
7. 复制显示的 **Secret** 和 **Client ID**（与应用程序 ID 相同）。注意：密钥只会显示一次，记得马上保存。

{% hint style="info" %}
**工作区分配（Workspace assignment）**

服务主体必须被分配到它将访问的工作区。进入 **Permissions**（权限）标签页，授予所需的用户或组管理和使用该服务主体的权限。
{% endhint %}

更多信息请参考 [使用 OAuth 授权服务主体访问 Databricks](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html)。

### 配置 OAuth2 凭证（Set up the OAuth2 credential）

在 n8n 凭证中：

1. 把 **Authentication**（认证方式）设为 **OAuth2**。
2. 在 **Host** 中填入你的工作区地址。
3. 填入从服务主体复制的 **Client ID**。
4. 填入你生成的 **Client Secret**。
