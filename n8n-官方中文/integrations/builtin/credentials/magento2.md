---
title: Magento 2 凭证
description: >-
  Magento 2 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  Magento 2 的身份。
contentType:
  - integration
  - reference
nodeTitle: Magento 2 credentials
originalFilePath: integrations/builtin/credentials/magento2.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/magento2'
url: 'https://docs.n8n.io/integrations/builtin/credentials/magento2'
layout:
  description:
    visible: false
---

# Magento 2 凭证

{% hint style="info" %}
**大白话**：Magento 2（现名 Adobe Commerce）是大型电商网站常用的开源商城系统。n8n 连它走 **API access token**：先在商城后台的 **System > Extensions > Integrations** 里新建一个集成，启用并拿到访问令牌，再填商城地址（Host）+ 令牌（Access Token）就行。**重要前提**：必须先去商城后台把「允许 OAuth 访问令牌作为独立的 Bearer token 使用」设为 Yes，否则连不上。改这个设置有两个办法：后台点几下，或者让管理员跑一行命令行。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

- [Magento 2](../app-nodes/n8n-nodes-base.magento2.md)

## 准备工作

- 创建一个 [Magento（Adobe Commerce）](https://business.adobe.com/products/commerce.html) 账号。
- 把商城设置为 **Allow OAuth Access Tokens to be used as standalone Bearer tokens（允许 OAuth 访问令牌作为独立的 Bearer token 使用）**。
    - 进入 **Admin（后台）> Stores（商店）> Configuration（配置）> Services（服务）> OAuth > Consumer Settings（消费者设置）**。
    - 把 **Allow OAuth Access Tokens to be used as standalone Bearer tokens** 选项设为 **Yes（是）**。
    - 你也可以通过命令行开启这个设置，运行以下命令：

        ```
        bin/magento config:set oauth/consumer/enable_integration_as_bearer 1
        ```

在 n8n 把 Magento 2 凭证升级为使用 OAuth 之前，这一步是必须的。更多信息请参考 [Integration Tokens（集成令牌）](https://developer.adobe.com/commerce/webapi/get-started/authentication/gs-authentication-token/#integration-tokens)。

## 支持的验证方式

- API access token（API 访问令牌）

## 相关资源

关于该服务的更多信息，请参考 [Magento 的 API 文档](https://developer.adobe.com/commerce/docs/)。

## 使用 API access token（API 访问令牌）

要配置这个凭证，你需要准备：

- 一个 **Host（商城地址）**：输入你的 Magento 商城地址。
- 一个 **Access Token（访问令牌）**：从 [**Admin Panel（管理后台）**](https://docs.magento.com/user-guide/stores/admin.html) 获取：
    1. 进入 **System（系统）> Extensions（扩展）> Integrations（集成）**。
    2. 添加一个新的 Integration（集成）。
    3. 进入 **API** 选项卡，选择你希望 n8n 集成访问的 Magento 资源。
    4. 在 **Integrations** 页面，**Activate（激活）** 这个新集成。
    5. 选择 **Allow（允许）** 显示你的访问令牌，这样你就能复制它并填进 n8n 了。
