---
title: 安全审计（Security audit）
description: 在 n8n 实例上运行安全审计。
contentType: howto
nodeTitle: 运行安全审计
originalFilePath: hosting/securing/security-audit.md
originalUrl: 'https://docs.n8n.io/hosting/securing/security-audit'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/run-security-audits'
layout:
  description:
    visible: false
---

# 安全审计（Security audit）

你可以在 n8n 实例上运行安全审计，以发现常见的安全问题。

{% hint style="info" %}
**小白提示**：安全审计 = 让 n8n 自己检查一遍你的实例，找出常见的安全隐患，然后生成一份报告。报告会告诉你：哪些凭据没用却在吃灰、哪些节点有风险、webhook 有没有「裸奔」、实例版本是不是太旧等。建议定期跑一次（比如每次大版本升级前后、以及部署了敏感工作流之后），心里有底。
{% endhint %}

## 如何在 n8n 中运行安全审计？（How do I run a security audit in n8n?）

你可以通过 CLI（命令行）、公开 API 或 n8n 节点（node）来运行审计。


### CLI（命令行）

运行 `n8n audit`。

### API（接口）

向 `/audit` 端点发送 `POST` 请求。你必须以实例所有者（instance owner）身份认证。

### n8n 节点（node）

把 [n8n 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.n8n)添加到你的工作流中。选择 **Resource（资源）** > **Audit（审计）**，**Operation（操作）** > **Generate（生成）**。

{% hint style="info" %}
**小白提示**：这三种方式效果一样，都是触发一次审计。怎么选？——CLI 适合在服务器上随手跑一下、看结果；API 适合接入你自己的监控或自动化脚本（比如每周自动跑一次并保存报告）；n8n 节点适合把审计做成工作流的一部分（比如跑完自动把报告发邮件或存到数据库）。
{% endhint %}

## 安全审计报告里有什么？（What's in the security audit report?）

审计会生成五份风险报告：

### 凭据（Credentials）

这份报告显示：

* 没有在工作流中使用过的凭据。
* 没有在「激活的工作流」中使用过的凭据。
* 没有在「最近活跃的工作流」中使用过的凭据。

{% hint style="info" %}
**小白提示**：凭据（credentials）= n8n 里保存的账号密码、API 密钥等认证信息。长期不用的凭据是安全隐患——万一泄露了也没人发现、没人负责。看到报告后建议顺手清理，或者至少确认它们确实不需要了。
{% endhint %}

### 数据库（Database）

这份报告显示：

* SQL 节点 **Execute Query（执行查询）** 字段中使用的表达式（expressions）。
* SQL 节点 **Query Parameters（查询参数）** 字段中使用的表达式。
* SQL 节点中未使用的 **Query Parameters（查询参数）** 字段。

{% hint style="info" %}
**小白提示**：如果 SQL 查询里直接拼接表达式（把变量写进查询语句），可能被「SQL 注入」攻击利用——攻击者往查询里塞一段恶意 SQL，把你的数据库搞乱或把数据偷走。更安全的做法是使用「查询参数（Query Parameters）」方式传值：数据作为参数传入，而不是直接拼进 SQL 文本。这份报告就是在帮你找出「哪些查询还在用有风险的老写法」。
{% endhint %}

### 文件系统（File system）

这份报告列出与文件系统交互的节点。

{% hint style="info" %}
**小白提示**：能读写文件的节点（比如 Read/Write Files from Disk 这类节点）有潜在风险——如果工作流被恶意利用，可能读写服务器上的文件。报告只是列出它们，让你知道「谁有文件权限」，方便你评估是否需要调整。
{% endhint %}

### 节点（Nodes）

这份报告显示：

* 官方高风险节点（Official risky nodes）。这些是 n8n 内置节点，你可以用它们在主机系统上获取并运行任意代码，这会让实例暴露于被利用的风险。你可以在 [n8n code | Audit constants](https://github.com/n8n-io/n8n/blob/master/packages/cli/src/security-audit/constants.ts#L51) 的 `OFFICIAL_RISKY_NODE_TYPES` 下查看列表。
* 社区节点（community nodes）。
* 自定义节点（custom nodes）。

{% hint style="info" %}
**小白提示**：能「执行任意代码」的节点（比如 Code 节点、Execute Command 节点）权限极大——相当于能在你的服务器上跑任何程序。它们是攻击者的重点目标。如果担心安全，可以结合「屏蔽特定节点」功能，把不用的高危节点直接关掉。
{% endhint %}

### 实例（Instance）

这份报告显示：

* 实例中未受保护的 webhooks（unprotected webhooks）。
* 缺失的安全设置。
* 你的实例是否已过时（outdated）。

{% hint style="info" %}
**小白提示**：未受保护的 webhook = 任何人只要知道网址就能触发的工作流入口，可能被刷接口、被用来偷数据或干坏事，建议给 webhook 加上认证（auth）。实例过时 = 你的 n8n 版本太旧，可能缺少安全补丁，建议尽快升级。
{% endhint %}
