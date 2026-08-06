---
title: Mattermost 凭证
description: >-
  Mattermost 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Mattermost 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: Mattermost credentials
originalFilePath: integrations/builtin/credentials/mattermost.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/mattermost'
url: 'https://docs.n8n.io/integrations/builtin/credentials/mattermost'
layout:
  description:
    visible: false
---

# Mattermost 凭证

> **大白话**：Mattermost 是公司内部用的聊天工具（类似 Slack 的开源版）。在 n8n 里连它，需要你本人去 Mattermost 里生成一个「个人访问令牌」，再把令牌和服务器地址填进 n8n。

你可以使用这些凭证来验证以下节点的身份：

- [Mattermost](../app-nodes/n8n-nodes-base.mattermost.md)

## 支持的认证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Mattermost 的 API 文档](https://api.mattermost.com/)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要一个 [Mattermost](https://www.mattermost.com/) 账号，以及：

- 一个个人 **Access Token（访问令牌）**
- 你的 Mattermost **Base URL（服务器地址）**

配置步骤如下：

1. 在 Mattermost 中，进入 **Profile > Security > Personal Access Tokens**（个人资料 > 安全 > 个人访问令牌）。

    <div data-gb-custom-block data-tag="hint" data-style="warning" class="hint hint-warning"><p><strong>找不到「个人访问令牌」选项？</strong></p><p>如果你看不到 Personal Access Tokens 选项，请参考下方「启用个人访问令牌」一节的排查步骤。</p></div>

2. 选择 **Create Token**（创建令牌）。
3. 输入一个 **Token description（令牌说明）**，比如 `n8n integration`。
4. 选择 **Save**（保存）。
5. 复制 **Token ID（令牌 ID）**，把它作为 **Access Token** 填进 n8n 凭证。
6. 把 Mattermost 的地址作为 **Base URL** 填进去。
7. 默认情况下，n8n 只在 SSL 证书校验通过时才连接。如果你想即使证书校验失败也照常连接，请打开 **Ignore SSL Issues（忽略 SSL 问题）**。

更多信息请参考 Mattermost 的[个人访问令牌文档](https://developers.mattermost.com/integrate/reference/personal-access-token/)。

## 启用个人访问令牌

看不到 **Personal Access Tokens（个人访问令牌）** 选项，通常有两种原因：

- Mattermost 没有启用「个人访问令牌」这个集成功能。
- 你用的是非管理员账号，没有权限生成个人访问令牌。

要找出原因并解决：

1. 用管理员账号登录 Mattermost。
2. 进入 **System Console > Integrations > Integration Management**（系统控制台 > 集成 > 集成管理）。
3. 确认 **Enable personal access tokens**（启用个人访问令牌）设为 **true**。如果不是，请改过来。
4. 进入 **System Console > User Management > Users**（系统控制台 > 用户管理 > 用户）。
5. 找到你想允许其生成个人访问令牌的用户账号。
6. 点击该用户的 **Actions**（操作）下拉菜单，选择 **Manage roles**（管理角色）。
7. 勾选 **Allow this account to generate personal access tokens**（允许该账号生成个人访问令牌），然后 **Save**（保存）。

更多信息请参考 Mattermost 的[个人访问令牌文档](https://developers.mattermost.com/integrate/reference/personal-access-token/)。
