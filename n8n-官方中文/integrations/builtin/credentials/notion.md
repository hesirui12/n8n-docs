---
title: Notion 凭证
contentType:
  - integration
  - reference
priority: high
nodeTitle: Notion credentials
originalFilePath: integrations/builtin/credentials/notion.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/notion
url: https://docs.n8n.io/integrations/builtin/credentials/notion
description: >-
  Notion 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Notion 的身份。
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

# Notion 凭证

{% hint style="info" %}
**大白话**：Notion 是现在最火的「笔记 + 项目管理 + 数据库」一体工具。n8n 想自动读写你的 Notion 页面/数据库，需要在 Notion 里创建一个「集成（Integration）」，有两种类型：**内部集成（Internal）**——只服务你自己的工作区，用一个集成密钥（Internal Integration Secret）就能验证，简单、不用审核，个人用推荐这个；**公开集成（Public）**——可以给多个不相关的工作区用，走 OAuth2 授权流程，发布前还要过 Notion 的安全审核，适合做产品给别人用。**重要**：无论哪种集成，都必须在 Notion 里把你需要操作的页面「共享」给这个集成，否则 API 会报错。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [Notion](../app-nodes/n8n-nodes-base.notion/README.md)
* [Notion Trigger](../trigger-nodes/n8n-nodes-base.notiontrigger.md)

## 准备工作

创建一个有管理员权限的 [Notion](https://notion.so) 账号。

## 支持的验证方式

* API integration token（API 集成令牌）：用于内部集成。
* OAuth2：用于公开集成。

{% hint style="info" %}
**集成类型**

不知道该用哪种集成类型？请参考下面的 [内部集成 vs. 公开集成](#内部集成-vs-公开集成) 了解更多信息。
{% endhint %}

## 相关资源

关于该服务的更多信息，请参考 [Notion 官方 API 文档](https://developers.notion.com/reference/intro)。

## 使用 API integration token（API 集成令牌）

要配置这个凭证，你需要准备：

* 一个 **Internal Integration Secret（内部集成密钥）**：创建 Notion 集成后生成。

要生成集成密钥，请 [创建一个 Notion 集成](https://developers.notion.com/docs/create-a-notion-integration#create-your-integration-in-notion)，然后从 **Secrets（密钥）** 标签页里拿集成密钥：

1. 打开你的 Notion [集成管理后台](https://www.notion.com/my-integrations)。
2. 点击 **+ New integration（新建集成）** 按钮。
3. 给你的集成输入一个 **Name（名称）**，例如 `n8n integration`。如果需要，可以加一个 **Logo（图标）**。
4. 选择 **Submit（提交）** 创建你的集成。
5. 打开 **Capabilities（能力）** 标签页，勾选以下能力：
   * `Read content`（读取内容）
   * `Update content`（更新内容）
   * `Insert content`（插入内容）
   * `User information without email addresses`（不含邮箱地址的用户信息）
6. 记得 **Save changes（保存更改）**。
7. 选择 **Secrets（密钥）** 标签页。
8. 复制 **Internal Integration Token（内部集成令牌）**，作为你的 n8n **Internal Integration Secret（内部集成密钥）** 填进去。

关于如何向该服务验证身份的更多信息，请参考 [内部集成认证流程设置文档](https://developers.notion.com/docs/authorization#internal-integration-auth-flow-set-up)。

### 把 Notion 页面共享给集成

要让你的集成能操作 Notion，你必须 [给集成授予页面权限](https://developers.notion.com/docs/create-a-notion-integration#give-your-integration-page-permissions)，让它能操作你工作区里的页面：

1. 打开你 Notion 工作区里的目标页面。
2. 点击页面右上角的「•••」（三点）菜单。
3. 在 **Connections（连接）** 里，选择 **Connect to（连接到）**。
4. 用搜索框从下拉列表里找到并选择你的集成。

只要你和集成共享了至少一个页面，就可以开始发 API 请求了。如果页面没有共享，发出的任何 API 请求都会返回错误。

更多信息请参考 [Integration permissions（集成权限）](https://developers.notion.com/docs/authorization#integration-permissions)。

## 使用 OAuth2

要配置这个凭证，你需要准备：

* 一个 **Client ID（客户端 ID）**：配置公开集成后生成。
* 一个 **Client Secret（客户端密钥）**：配置公开集成后生成。

你必须 [创建一个 Notion 集成](https://developers.notion.com/docs/create-a-notion-integration#create-your-integration-in-notion)，并把它设为公开分发：

1. 打开你的 Notion [集成管理后台](https://www.notion.so/my-integrations)。
2. 点击 **+ New integration（新建集成）** 按钮。
3. 给你的集成输入一个 **Name（名称）**，例如 `n8n integration`。如果需要，可以加一个 **Logo（图标）**。
4. 选择 **Submit（提交）** 创建你的集成。
5. 打开 **Capabilities（能力）** 标签页，勾选以下能力：
   * `Read content`（读取内容）
   * `Update content`（更新内容）
   * `Insert content`（插入内容）
   * `User information without email addresses`（不含邮箱地址的用户信息）
6. 选择 **Save changes（保存更改）**。
7. 进入 **Distribution（分发）** 标签页。
8. 打开 **Do you want to make this integration public?（你希望把这个集成设为公开吗？）** 开关。
9. 在 **Organization Information（组织信息）** 区域输入你的公司名称和网站。
10. 复制 n8n 的 **OAuth Redirect URL（OAuth 重定向地址）**，添加到 Notion 集成 **OAuth Domain & URLs（OAuth 域名与地址）** 区域的 **Redirect URI（重定向地址）** 里。
11. 进入 **Secrets（密钥）** 标签页。
12. 复制 **Client ID（客户端 ID）** 和 **Client Secret（客户端密钥）**，填到你的 n8n 凭证里。

关于如何向该服务验证身份的更多信息，请参考 Notion 的 [公开集成认证流程设置](https://developers.notion.com/docs/authorization#public-integration-auth-flow-set-up)。

## 内部集成 vs. 公开集成

**内部集成（Internal）** 的特点是：

* 只针对单个工作区。
* 只有该工作区的成员能访问。
* 适合做自定义的工作区增强功能。

内部集成使用更简单的认证方式（集成密钥），发布前不需要任何安全审核。

**公开集成（Public）** 的特点是：

* 可以在多个互不相关的工作区使用。
* 任何 Notion 用户都能访问，不管他在哪个工作区。
* 适合面向广泛使用场景。

公开集成使用 OAuth 2.0 协议进行认证，发布前需要通过 Notion 的安全审核。

关于这两种集成类型更详细的区别，请参考 Notion 的 [Internal vs. Public Integrations（内部集成 vs. 公开集成）文档](https://developers.notion.com/docs/getting-started#internal-vs-public-integrations)。
