---
description: 选择使用 n8n 的方式：云版还是自托管？（小白友好中文版）
layout:
  width: default
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# 选择使用 n8n 的方式 / Choose how to use n8n

> 本篇为官方文档《Choose how to use n8n》的中文小白版，帮你决定：**用云版（n8n Cloud）还是自己部署（Self-hosted）**？

![Decision flowchart: n8n Cloud offers the Starter, Pro, and Enterprise plans; self-hosted offers the Community, registered Community, Business, and Enterprise editions](.gitbook/assets/choose-your-n8n-diag-light.png)

{% hint style="info" %}
**想快速试用 n8n？**

**从 n8n Cloud 开始**，免安装、立即可用。

[开始免费试用](https://n8n.io/cloud/)
{% endhint %}

## 决策一：云版还是自托管？/ Cloud or self-hosted?

| 你的情况 | 推荐 | 原因 |
|----------|------|------|
| 想快速开始 | **n8n Cloud** | 不用安装 |
| 不懂技术 | **n8n Cloud** | 全托管，零配置零维护 |
| 需要生产级部署 | **两者都行** | 云版和自托管都支持生产使用 |
| 不想管服务器 | **n8n Cloud** | n8n 负责托管、更新、扩容 |
| 需要完全控制部署 | **自托管** | 环境与配置都由你掌控 |
| 有定制化需求 | **自托管** | 部署和配置完全可控 |
| 需要企业功能（SSO、环境、项目等） | **两者都行** | 两者都有付费企业版 |
| 有基础设施和技术资源 | **自托管** | 自己管理部署 |
| 想免费跑 n8n | **自托管（Community 版）** | 免费且功能几乎完整 |

> 💡 **小白提示**：**新手首选 Cloud 免费试用**；国内访问 Cloud 不稳定的话，用 Docker 自托管也一样（见「部署」板块的中文教程）。

### 优缺点对比 / Pros and cons

| 方面 | n8n Cloud | 自托管 |
|------|-----------|--------|
| **安装部署** | | |
| 安装 | ✅ 免安装 | ❌ 需要自己装（npm/Docker/服务器） |
| 技术要求 | ✅ 无 | ❌ 需要会配置 |
| **基础设施** | | |
| 托管 | ✅ n8n 全托管 | ❌ 自己提供和管理 |
| 维护 | ✅ n8n 负责 | ❌ 自己负责 |
| **控制与定制** | | |
| 部署控制 | ❌ n8n 管理 | ✅ 完全控制 |
| 定制 | ❌ 选项有限 | ✅ 适合定制场景 |
| **费用** | | |
| 免费 | ⚠️ 有免费试用 | ✅ 免费 Community 版（功能几乎完整） |
| 付费 | ✅ 多种套餐 | ✅ Business / Enterprise |
| **场景** | | |
| 快速上手 | ✅ 理想 | ⚠️ 部署耗时 |
| 生产使用 | ✅ 支持 | ✅ 推荐 |
| 定制需求 | ⚠️ 定制有限 | ✅ 推荐 |

**图例**：✅ 优点 | ❌ 缺点 | ⚠️ 看情况

## 决策二：选择套餐或版本 / Choose a plan or edition

### 云版套餐 / n8n Cloud plans

| 套餐 | 适合 |
|------|------|
| **Free trial**（免费试用） | 14 天体验 Pro 功能 |
| **Starter** | 个人和小项目起步 |
| **Pro** | 重度用户和小团队（更高限额、管理员账号、Insights 统计） |
| **Enterprise** | 需要高级安全、扩容和专属支持的组织 |

### 自托管版本 / Self-hosted editions

| 版本 | 费用 | 适合 |
|------|------|------|
| **Community**（社区版） | 免费 | 功能几乎完整的自托管 |
| **Registered Community**（注册社区版） | 免费 | 额外解锁：文件夹、编辑器内 Debug、自定义执行数据（注册邮箱即可） |
| **Business** | 付费 | 需要 SSO、环境、项目等付费功能的团队 |
| **Enterprise** | 付费 | 需要最先进安全、扩容、治理的组织 |

注册 Community 解锁免费功能：**Settings > Usage and plan > Unlock**。

> 💡 详细功能与价格以 [定价页](https://n8n.io/pricing/) 为准（本教程「部署」「管理」板块有更多中文说明）。

## 哪些功能需要付费？/ Which features need a paid plan?

常见付费功能（云版对应套餐 / 自托管对应 Business、Enterprise 许可）：

- 自定义变量（Custom variables）
- 环境（Environments）
- 项目（Projects）与用户管理
- SSO（单点登录）、LDAP
- 日志流式传输（Log streaming）
- 外部密钥库、外部二进制存储
- 多实例高可用（Multi-main）

> 💡 **大白话**：个人学习/小团队自用，**免费的 Community 版已经够用**。付费主要是团队协作、安全合规、规模化运维这些需求。
