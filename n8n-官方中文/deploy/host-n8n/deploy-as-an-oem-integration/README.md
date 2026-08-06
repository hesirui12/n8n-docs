---
title: OEM 部署（OEM deployment）
description: >-
  OEM 部署概述——根据 OEM 协议，在你的产品界面内部嵌入并展示 n8n 的界面。
contentType: overview
nodeTitle: 作为 OEM 集成部署（Deploy as an OEM integration）
originalFilePath: hosting/oem-deployment/index.md
originalUrl: 'https://docs.n8n.io/hosting/oem-deployment'
url: 'https://docs.n8n.io/deploy/host-n8n/deploy-as-an-oem-integration'
layout:
  description:
    visible: false
---

# OEM 部署（OEM deployment）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6kdIvlPPl0XWVn5z8UJh/" %}

n8n 的 OEM 部署选项允许你把 n8n 的界面嵌入并展示在你自己的产品界面中。这样，你的用户无需离开你的产品，就能构建工作流、配置连接、运行工作流自动化。OEM 集成必须保留 n8n 的品牌标识（n8n branding）。

这与[把 n8n 用作后端（using n8n as a backend）](../README.md)不同：后端模式下，工作流在后台执行，最终用户永远看不到 n8n。在那个模式中，你的产品通过 webhook 或 [API](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api) 调用 n8n 来触发工作流，n8n 就像你基础设施中的任何其他自托管服务一样——你的用户完全看不到 n8n 的界面。这种模式在所有付费套餐的标准许可证下都可用，无需单独签署协议。只有当你想让用户直接与 n8n 编辑器交互时，才需要 OEM 部署。

## 覆盖哪些内容（What's covered）

- [前置条件（Prerequisites）](prerequisites.md)：关于规划部署时 CPU、内存和数据库需求的指南。
- [管理工作流（Managing workflows）](manage-workflows.md)：在嵌入式部署中，跨多个用户或组织管理工作流的模式。
- [令牌交换（Token exchange）](set-up-token-exchange.md)：通过 iframe SSO 从你自己的身份提供方（identity provider）认证用户，并代表用户调用 n8n API。
- [工作流模板（Workflow templates）](../configure-n8n/basic-configuration/configuration-examples/configure-a-custom-workflow-templates-library.md)：为你的用户配置自定义工作流模板库。
- [凭据覆盖（Credential overwrites）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/credential-overwrites)：全局设置 OAuth 凭据，让你的用户无需看到或输入客户端密钥（client secrets）即可完成认证。

## 支持（Support）

请使用签署 OEM 协议时提供的邮箱联系 [n8n 支持团队（n8n support）](mailto:support@n8n.io)。一般性问题也可以到[社区论坛（community forum）](https://community.n8n.io/) 提问。

{% hint style="info" %}
**小白提示**：OEM = 把 n8n 的"引擎"和"操作界面"整个塞进你自己的软件里，给你的客户用。你的客户感觉不到 n8n 的存在，只觉得自己在用你的产品里的"自动化功能"。这适合做 SaaS 产品的公司，把工作流自动化作为卖点集成进自家产品；注意 OEM 部署需要与 n8n 签署专门的协议。
{% endhint %}
