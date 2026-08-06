---
title: Google Service Account（服务账号）
contentType:
  - integration
  - reference
nodeTitle: Google Service Account
originalFilePath: integrations/builtin/credentials/google/service-account.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/google/service-account
url: https://docs.n8n.io/integrations/builtin/credentials/google/service-account
description: >-
  Google 服务账号凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
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

# Google Service Account（服务账号）

{% hint style="info" %}
**大白话**：Service Account（服务账号）是 Google 给「程序/服务器」用的一种「机器人账号」——它不属于某个真人用户，可以自己生成一把私钥，让 n8n 用它去调 Google API。它的配置比 OAuth2 复杂，而且只有部分节点支持（先在上一页确认你的节点兼容）。适合的场景是：不想每次手动授权、想让工作流在后台长期自动跑。做法概括：在 Google Cloud Console 建一个服务账号 → 给它生成一把 JSON 格式的私钥 → 把 JSON 里的 `client_email` 和 `private_key` 填进 n8n。下面四步是完整流程。
{% endhint %}

用服务账号比 OAuth2 更复杂。开始之前：

- 先确认你的节点是否 [兼容](./README.md#compatible-nodes) 服务账号。
- 确认你真的需要服务账号。大多数情况下，[OAuth2](oauth-single-service.md) 是更好的选择。
- 阅读 Google 关于 [创建和管理服务账号](https://cloud.google.com/iam/docs/creating-managing-service-accounts) 的文档。

## 准备工作

- 创建一个 [Google Cloud](https://cloud.google.com/) 账号。

## 设置 Service Account

把 n8n 凭证连接到 Google 服务账号，一共四步：

1. [创建 Google Cloud Console 项目](#创建-google-cloud-console-项目)。
2. [启用 API](#启用-api)。
3. [设置 Google Cloud 服务账号](#设置-google-cloud-服务账号)。
4. [完成 n8n 凭证](#完成-n8n-凭证)。

### 创建 Google Cloud Console 项目

首先，创建一个 Google Cloud Console 项目。如果你已经有项目了，直接跳到下一节：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/n3k6ZZ7BRnKZ6enSxeVQ/" %}

### 启用 API

项目创建好之后，启用你需要的 API：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/Xs1r022aU39nYSgCg3At/" %}

### 设置 Google Cloud 服务账号

1. 打开 [Google Cloud Console - Library](https://console.cloud.google.com/apis/library)。确保你当前在正确的项目里。

    <figure><img src="../../../.gitbook/assets/google-cloud-project-dropdown (1).png" alt=""><figcaption><p>检查 Google Cloud 顶部导航栏里的项目下拉框</p></figcaption></figure>
2. 打开左侧导航菜单，进入 **APIs & Services > Credentials（凭证）**。Google 会带你到 **Credentials** 页面。
3. 选择 **+ Create credentials（创建凭证） > Service account（服务账号）**。
4. 在 **Service account name（服务账号名称）** 里填一个名字，在 **Service account ID** 里填一个 ID。更多信息请参考 [创建服务账号](https://cloud.google.com/iam/docs/creating-managing-service-accounts?hl=en#creating)。
5. 选择 **Create and continue（创建并继续）**。
6. 根据你的使用场景，你可以在对应的区域里 **Select a role（选择一个角色）** 并 **Grant users access to this service account（给用户授予访问该服务账号的权限）**。
7. 选择 **Done（完成）**。
8. 在 **Service Accounts（服务账号）** 区域选中你刚创建的服务账号。打开 **Keys（密钥）** 标签页。
9. 选择 **Add key（添加密钥） > Create new key（创建新密钥）**。
10. 在弹出的窗口里选择 **JSON**，然后选择 **CREATE（创建）**。Google 会把文件保存到你的电脑上。

### 完成 n8n 凭证

Google 项目和凭证都配置好之后，完成 n8n 凭证：

1. 打开下载下来的 JSON 文件。
2. 复制 `client_email`，填到你的 n8n 凭证里的 **Service Account Email（服务账号邮箱）** 字段。
3. 复制 `private_key`。不要带上两边的 `"` 引号。把它填到你的 n8n 凭证里的 **Private Key（私钥）** 字段。<br>

    {% hint style="warning" %}
    **旧版本的 n8n**

    如果你运行的是 0.156.0 之前的 n8n 版本，需要把 JSON 文件里所有的 `\n` 替换成真正的换行。
    {% endhint %}
4. **可选**：选择是否要 [**Impersonate a User（模拟某个用户）**](https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority)（默认开启）。
   1. 要用这个选项，你必须以 Google Workspace 超级管理员身份为服务账号 [启用域级授权](#启用域级授权)。
   2. 填你想模拟的那个用户的 **Email（邮箱）**。
5. 如果你打算把这个凭证用于 [HTTP Request](../../core-nodes/n8n-nodes-base.httprequest/README.md) 节点，打开 **Set up for use in HTTP Request node（为 HTTP Request 节点配置）**。
   1. 打开这个开关后，你需要为节点添加 **Scope(s)（权限范围）**。n8n 会预填一些 scope。更多信息请参考 [Google API 的 OAuth 2.0 Scopes](https://developers.google.com/identity/protocols/oauth2/scopes)。
6. **Save（保存）** 你的凭证。

## 视频

{% embed url="https://www.youtube.com/embed/FzQzGODb5Gk?si=YR9vDaTet8vsj-y2" %}

## 故障排查

### 服务账号无法访问 Google Drive 文件

{% hint style="danger" %}
**访问不了我的网盘**

Google 不再允许 2025 年 4 月 15 日之后创建的服务账号访问 `my drive`（个人网盘）。现在服务账号只能访问共享网盘（shared drives）。

虽然不推荐，但如果你确实需要用服务账号访问 `my drive`，可以通过 [启用域级授权](#启用域级授权) 来实现。更多信息可参考 [这个社区帖子](https://community.n8n.io/t/please-please-help-upload-file-google-drive-node-with-service-account-not-working/147750/15)。
{% endhint %}

服务账号无法访问没有共享给它的关联用户邮箱的 Google Drive 文件和文件夹。

1. 打开 [Google Cloud Console](https://console.cloud.google.com)，复制你的服务账号邮箱。
2. 打开 [Google Drive](https://drive.google.com)，找到对应的文件或文件夹。
3. 右键点击文件或文件夹，选择 **Share（共享）**。
4. 把服务账号邮箱粘贴到 **Add People and groups（添加人员和群组）** 里。
5. 选 **Editor（编辑者）** 表示读写权限，选 **Viewer（查看者）** 表示只读权限。

### 启用域级授权

要用服务账号模拟某个用户，你必须为服务账号启用域级授权。

{% hint style="warning" %}
**不推荐**

Google 建议你 [避免使用域级授权](https://cloud.google.com/iam/docs/best-practices-service-accounts#domain-wide-delegation)，因为它允许模拟任何用户（包括超级管理员），可能带来安全风险。
{% endhint %}

要给服务账号授予域级权限，你必须是 Google Workspace 域的超级管理员。然后：

1. 在 Google Workspace 域的 [Admin console（管理控制台）](https://admin.google.com/) 里，点击汉堡菜单，然后选择 **Security > Access and data control > API Controls**。
2. 在 **Domain wide delegation（域级授权）** 面板里，选择 **Manage Domain Wide Delegation（管理域级授权）**。
3. 选择 **Add new（新增）**。
4. 在 **Client ID** 字段里填服务账号的 **Client ID**。怎么拿到 Client ID：
   - 打开你的 Google Cloud Console 项目，再打开 [Service Accounts（服务账号）](https://console.cloud.google.com/iam-admin/serviceaccounts) 页面。
   - 复制 **OAuth 2 Client ID**，把它作为 **Domain Wide Delegation** 的 **Client ID**。
5. 在 **OAuth scopes（OAuth 权限范围）** 字段里，填一个逗号分隔的 scope 列表，用来授权你的应用访问。例如，如果你的应用需要对 Google Drive API 和 Google Calendar API 做域级完全访问，就填：`https://www.googleapis.com/auth/drive, https://www.googleapis.com/auth/calendar`。
6. 选择 **Authorize（授权）**。

从授权完成到你可以模拟 Workspace 里的所有用户，可能需要 5 分钟到 24 小时不等。
