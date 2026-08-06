---
title: Bitbucket 凭证
description: >-
  Bitbucket 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Bitbucket 的身份。
contentType:
  - integration
  - reference
nodeTitle: Bitbucket credentials
originalFilePath: integrations/builtin/credentials/bitbucket.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/bitbucket'
url: 'https://docs.n8n.io/integrations/builtin/credentials/bitbucket'
layout:
  description:
    visible: false
---

# Bitbucket 凭证

> 大白话：Bitbucket 是 Atlassian 家的代码托管平台（类似 GitHub/GitLab）。这里主要是给 Bitbucket Trigger（触发器）用的：你想在代码仓库有动静时自动触发 n8n 工作流，就得先在 Bitbucket 里建一把 Access Token（访问令牌），并勾选对应的权限范围，然后把令牌填进 n8n。注意：令牌只显示一次，记得立刻复制保存。

这些凭证可以用来验证以下节点的身份：

- [Bitbucket Trigger（触发器）](../trigger-nodes/n8n-nodes-base.bitbuckettrigger.md)

## 准备工作

先注册一个 [Bitbucket](https://www.bitbucket.com/) 账号。

## 支持的验证方式

- Access token（访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Bitbucket 官方 API 文档](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication)。

## 配置 Bitbucket 访问令牌

1. 登录 Bitbucket，打开你的账号或个人设置页面。
2. 找到 API tokens（API 令牌）或安全设置相关的栏目。
3. 创建一个新的 API token，按你的实际用途填写名称和有效期。
4. 应用选择 Bitbucket，然后勾选需要的权限范围（scopes）：

    ```bash
    read:user:bitbucket
    read:workspace:bitbucket
    read:repository:bitbucket
    read:webhook:bitbucket
    write:webhook:bitbucket
    delete:webhook:bitbucket
    ```

    > 上面这 6 行就是建议勾选的权限代码，照抄即可：前 3 个是「读取」用户/工作区/仓库，后 3 个是「读取/写入/删除」Webhook（网络钩子），Webhook 是触发器接收事件通知用的。

5. 检查无误后创建令牌。把生成的令牌复制出来填进 n8n。Bitbucket 只显示一次令牌，漏了就得重新建一个。

详细步骤请参考 [Create an API token（创建 API 令牌）](https://support.atlassian.com/bitbucket-cloud/docs/create-an-api-token/)。
