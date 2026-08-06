---
title: 免费试用 n8n Cloud，然后选择合适的套餐
description: >-
  开始 n8n Cloud 免费试用，然后对比 Starter、Pro 和 Enterprise 套餐，选择最适合你的那一个。
contentType: overview
nodeTitle: 免费试用，然后选择套餐
originalFilePath: manage-cloud/cloud-free-trial.md
originalUrl: 'https://docs.n8n.io/manage-cloud/cloud-free-trial'
url: 'https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial'
layout:
  description:
    visible: false
---

# 免费试用，然后选择套餐（Try free then choose a plan）

[n8n Cloud](README.md) 是运行 n8n 的「托管方式（managed way）」：由 n8n 官方帮你托管实例，你完全不需要自己搭建或维护任何基础设施。最好的入门方式就是：**先免费试用，再选择适合你的付费套餐**。

{% hint style="info" %}
**小白提示**：「托管」= 别人帮你把服务器、环境、升级、备份全部搞定，你只管用。对于不想碰服务器的新手来说，这是最省事的选择。本篇文章带你走完「免费试用 → 选套餐 → 升级付费」的完整流程。
{% endhint %}

## 从免费试用开始（Start with a free trial）

当你创建一个新的 n8n Cloud 试用账号后，你有 **14 天** 的时间体验 [Pro 套餐](https://n8n.io/pricing/) 的全部功能，包括：

- 全局变量（Global variables）
- 洞察仪表盘（Insights dashboard）
- 执行记录搜索（Execution search）
- 5 天的工作流历史回滚（workflow history to roll back）

试用版给你 Pro 套餐的功能，但**执行次数上限为 1000 次**，计算能力与 [Starter 套餐](https://n8n.io/pricing/) 相同。

{% hint style="info" %}
**小白提示**：简单说就是「Pro 的功能、Starter 的性能、1000 次执行的额度」。这 14 天足够你把 n8n 的核心功能都摸一遍，看看它能不能满足你的需求。
{% endhint %}

## 对比 n8n Cloud 的各套餐（Compare n8n Cloud plans）

试用结束后，你可以升级到付费套餐。每个套餐面向不同的用户群体，包含不同的功能、使用限额和计算能力。

n8n Cloud 目前提供以下套餐：

| 套餐（Plan） | 适用人群（Designed for） |
|------|--------------|
| **Free trial（免费试用）** | 想用 Pro 功能体验 n8n Cloud，试用 14 天 |
| **Starter（入门）** | 刚开始使用 n8n 的个人和小型项目 |
| **Pro（专业）** | 需要更高限额、管理员账号（admin accounts）和洞察（insights）功能的进阶用户和小团队 |
| **Enterprise（企业版）** | 需要高级安全（advanced security）、可扩展性（scaling）和专属支持（dedicated support）的组织 |

{% hint style="info" %}
**务必以官网的最新价格和条款为准（Always check current pricing and conditions）**

每个套餐的具体功能、使用限额和价格都可能变化。要看最新信息，请访问[定价页面（pricing page）](https://n8n.io/pricing/)。本页面只解释这些套餐大概是什么，不负责列出每个套餐的具体内容。
{% endhint %}

{% hint style="info" %}
**国内访问提示**：n8n 官网和 Cloud 服务部署在海外，国内访问时加载速度可能较慢；打开定价页面或注册账号时如果遇到打不开、加载慢的情况，可以多刷新几次或稍后再试。
{% endhint %}

## 升级到付费套餐（Upgrade to a paid plan）

你可以在任何时间升级到付费的 n8n 账号。升级步骤：

1. 登录你的账号。
2. 点击右上角的 **Upgrade**（升级）按钮。
3. 选择你的套餐，以及按年（annually）还是按月（by the month）付费。
4. 选择支付方式。

{% hint style="info" %}
**小白提示**：一般来说，**按年付费比按月付费更划算**（通常有折扣）。如果你确定会长期使用，建议直接选按年。
{% endhint %}

## 试用到期（Trial expiration）

如果你在试用期结束前没有升级，试用会自动到期（expires），n8n 会**删除你的工作区（workspace）**。

{% hint style="info" %}
**下载你的工作流（Download your workflows）**

你可以[下载你的工作流](download-workflows.md)，以便日后复用。免费试用结束后的 **90 天**内都可以下载。
{% endhint %}

### 取消试用（Cancelling your trial）

你**不需要**手动取消试用。试用期一结束，试用会自动到期，**不会产生任何费用**。此后不久，n8n 会删除你的所有数据。

{% hint style="info" %}
**小白提示**：很多 SaaS 的免费试用到期后会自动扣费续订，但 n8n 不是这样——到期就是到期，不扣钱，但数据会被删。所以如果你在试用期里做了重要的工作流，记得下载备份。
{% endhint %}

## Enterprise 试用（Enterprise trial）

如果你想体验 [Enterprise（企业版）套餐](https://n8n.io/pricing/)，请联系销售团队（sales team）。Enterprise 套餐包含的功能有：

- SSO SAML 和 LDAP（单点登录）
- 不同的环境（Different environments，例如开发/生产环境分离）
- 外部密钥存储集成（External secret store integration）
- 日志流式传输（Log streaming）
- 使用 Git 进行版本控制（Version control using Git）

在 [n8n 官网](https://n8n.io/pricing/) 上点击 **Contact**（联系我们）按钮即可联系销售。

{% hint style="info" %}
**小白提示**：这些功能主要是给企业用户用的：SSO 让员工用公司统一账号登录；环境分离让「开发环境」和「生产环境」互不干扰；Git 版本控制让团队可以像管理代码一样管理工作流。如果你只是个人使用，Starter 或 Pro 基本就够用了。
{% endhint %}
