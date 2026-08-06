---
title: 对比版本与套餐（Compare plans and editions）
contentType: explanation
hide:
  - tags
nodeTitle: 对比版本与套餐（Compare plans and editions）
originalFilePath: hosting/community-edition-features.md
originalUrl: https://docs.n8n.io/hosting/community-edition-features
url: https://docs.n8n.io/deploy/host-n8n/community-edition-features
description: >-
  对比自托管 n8n 的版本与套餐：社区版（Community）、已注册社区版（registered
  Community）、商业版（Business）和企业版（Enterprise）。
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
tags:
  - Community edition
  - Enterprise edition
---

# 对比版本与套餐（Compare plans and editions）

所有自托管安装使用的都是同一个底层产品。你可以无限期免费使用基础的社区版（Community edition）。也可以选择注册（免费）来解锁额外功能，或者订阅付费套餐，获得一个能解锁该套餐全部功能的许可证密钥（license key）。

- **社区版（Community edition）**：免费版本。没有许可证密钥时，n8n 运行的就是这个版本。
- **已注册社区版（Registered Community edition）**：用邮箱注册后解锁了额外功能的免费社区版。仍然免费。
- **商业版（Business）**和**企业版（Enterprise）**套餐：付费套餐。订阅后会得到一枚许可证密钥，用来解锁该套餐的功能。

{% hint style="info" %}
**套餐（plan）、版本（edition）还是许可证（license）？**

**版本（edition）** 是你运行的自托管软件的具体变体：社区版、已注册社区版、商业版或企业版。**套餐（plan）** 是你购买的付费订阅等级，适用于自托管或 [n8n Cloud](../use-n8n-cloud/start-your-free-trial.md)。订阅付费套餐后，你会得到一枚**许可证（license）**密钥，用来解锁该套餐的功能。免费注册社区版同样会用到许可证密钥。相关定义请见[术语表（glossary）](https://app.gitbook.com/s/CxSeOtVxqqhfxMSac0AV/key-concept-glossary#edition-n8n)。
{% endhint %}

{% hint style="info" %}
**以定价页面为准（The pricing page is the source of truth）**

每个版本和套餐的准确功能列表都可能发生变化。最新的详细划分请见[定价页面（pricing page）](https://n8n.io/pricing/)。本页只解释这些版本和套餐是什么、它们之间的主要区别，并不是完整的功能清单。
{% endhint %}

## 社区版（Community edition）

社区版几乎包含了 n8n 的全部功能。以下功能不包括在内：

* [自定义变量（Custom Variables）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/define-custom-variables)
* [环境（Environments）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/use-source-control-and-environments)
* [外部密钥存储（External secrets）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/use-external-secret-stores)
* [二进制数据的外部存储（External storage for binary data）](configure-n8n/scaling/use-external-storage.md)
* [日志流（Log streaming）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/stream-logs-to-external-systems)（[本地日志（Logging）](keep-n8n-running/set-up-logging.md) _包含在社区版中_）
* [多主模式（Multi-main mode）](configure-n8n/scaling/enable-queue-mode.md#multi-main-setup)（[队列模式（Queue mode）](configure-n8n/scaling/enable-queue-mode.md) _包含在社区版中_）
* [项目（Projects）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects)
* 单点登录 SSO（[SAML](configure-n8n/security/configure-sso.md)、[LDAP](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/verify-user-identity/connect-ldap)）
* 共享功能（[工作流共享](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/share-with-others)、[凭据共享](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/share-credentials-securely)）（只有实例所有者（instance owner）和创建工作流/凭据的用户本人可以访问）
* [基于 Git 的版本控制（Version control using Git）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/use-source-control-and-environments)

这些功能在商业版和企业版套餐中可用。其中部分功能在 n8n Cloud 的 Starter、Pro 和 Enterprise 套餐中也可用。最新的详细划分请见[定价页面](https://n8n.io/pricing/)。

## 已注册社区版（Registered Community edition）

用你的邮箱注册社区版，即可免费获得一枚许可证密钥。它为社区版解锁以下功能：

* 文件夹（Folders）：把工作流整理到整齐的文件夹中
* [编辑器内调试（Debug in editor）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/understand-executions/debug-executions)：在工作流开发过程中复制和固定（pin）[^1] 执行数据
* [自定义执行数据（Custom execution data）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/understand-executions/customize-executions-data)：保存、查找并给执行元数据（execution metadata）加注释

注册一个新的社区版实例：在首次创建账号时选择相应的选项即可。

注册一个已有的社区版实例：

1. 点击左下角的**三个点图标** <img src="../.gitbook/assets/three-dots-horizontal (1).png" alt="three dots icon" data-size="line">。
2. 选择 **设置（Settings）**，然后选择 **用量与套餐（Usage and plan）**。
3. 点击 **解锁（Unlock）** 输入你的邮箱，然后选择 **发送免费许可证密钥（Send me a free license key）**。
4. 到你输入的邮箱里查收邮件。

拿到许可证密钥后，点击许可证邮件中的按钮即可激活；或者进入 **选项（Options）> 设置（Settings）> 用量与套餐（Usage and plan）**，选择 **输入激活密钥（Enter activation key）**。

## 商业版与企业版套餐（Business and Enterprise plans）

商业版和企业版套餐解锁了社区版不包含的付费功能，例如 SSO、环境、外部密钥存储和日志流。企业版在此基础上增加了面向安全、扩展和管理治理（governance）的最先进功能。

订阅付费套餐后，你会获得一枚解锁该套餐功能的许可证密钥。把密钥添加到你的实例即可激活。关于如何获取和激活密钥，请参见[管理许可证（Manage your license）](configure-n8n/manage-your-license.md)。关于各套餐包含的功能，请参见[定价页面](https://n8n.io/pricing/)。

## 哪个版本或套餐适合你（Which plan or edition is right for you）

- 使用**社区版（Community edition）**免费自托管 n8n，几乎拥有全部功能。
- **注册**你的社区版（免费），还能获得文件夹、编辑器内调试和自定义执行数据。
- 当你需要 SSO、环境、项目或外部密钥存储等付费功能时，订阅**商业版（Business）**或**企业版（Enterprise）**套餐。如果你完全不想自己管理基础设施，也可以考虑改用 [n8n Cloud](../use-n8n-cloud/start-your-free-trial.md)。

{% hint style="info" %}
**小白提示**：简单来说——想免费使用 n8n 的核心功能，就用社区版；花一分钟注册个邮箱，还能解锁文件夹、调试等小福利；需要 SSO 单点登录、项目共享、外部密钥这类企业级功能时，才需要花钱订阅商业版或企业版。个人学习和自用，社区版完全够用。
{% endhint %}

[^1]: 数据固定（data pinning）允许你在工作流开发期间临时冻结某个节点的输出数据。这样你就能用可预测的数据来开发工作流，而不必反复向外部服务发起请求。生产环境中的工作流会忽略固定的数据，每次执行都会重新请求新数据。
