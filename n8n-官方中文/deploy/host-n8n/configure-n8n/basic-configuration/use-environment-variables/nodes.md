---
title: 节点（Nodes）环境变量
description: >-
  在自托管 n8n 中配置节点管理和节点专属限制的环境变量。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: 节点（Nodes）
originalFilePath: hosting/configuration/environment-variables/nodes.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/environment-variables/nodes'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/nodes
layout:
  description:
    visible: false
---

# 节点（Nodes）环境变量

{% hint style="info" %}
**大白话**：节点（node）就是工作流里的一块块积木（HTTP 请求、发邮件、处理数据等）。这一页的变量让你控制 n8n 加载哪些节点、禁用哪些有安全风险的节点、Code 节点里能不能导入模块，以及社区节点怎么装。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

本页列出了管理 n8n 中节点[^1]的环境变量配置选项，包括指定加载或排除哪些节点、在 Code 节点中导入内置或外部模块、启用社区节点，以及配置节点专属限制。

## 节点与社区节点设置

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
|:-----------------------------------------|:-----------------|:------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `N8N_COMMUNITY_PACKAGES_AUTH_TOKEN` | String | - | 私有 npm 仓库的认证令牌。与 `N8N_COMMUNITY_PACKAGES_REGISTRY` 一起使用，从私有仓库安装社区节点时用来认证请求。 |
| `N8N_COMMUNITY_PACKAGES_ENABLED` | Boolean | `true` | 启用（true）或禁用（false）安装和加载社区节点的功能。如果设为 false，那么无论各包的单独设置如何，已验证和未验证的社区包都不可用。 |
| `N8N_COMMUNITY_PACKAGES_PREVENT_LOADING` | Boolean | `false` | 防止（true）或允许（false）在实例启动时加载已安装的社区节点。如果某个有问题的节点导致实例无法启动，可以使用此选项。 |
| `N8N_COMMUNITY_PACKAGES_REGISTRY` | String | `https://registry.npmjs.org` | 拉取社区包的 NPM 仓库 URL（需要许可证）。 |
| `N8N_CUSTOM_EXTENSIONS` | String | - | 指定包含自定义节点的目录路径。 |
| `N8N_PYTHON_ENABLED` | Boolean | `true` | 是否在 Code 节点上启用 Python 执行。 |
| `N8N_UNVERIFIED_PACKAGES_ENABLED` | Boolean | `true` | 当 `N8N_COMMUNITY_PACKAGES_ENABLED` 为 true 时，此变量控制是否启用从 NPM 仓库安装和使用未经认证的社区节点（true）或是不启用（false）。 |
| `N8N_VERIFIED_PACKAGES_ENABLED` | Boolean | `true` | 当 `N8N_COMMUNITY_PACKAGES_ENABLED` 为 true 时，此变量控制是否在节点面板中显示经过认证的社区节点供安装和使用（true），或隐藏它们（false）。 |
| `NODE_FUNCTION_ALLOW_BUILTIN` | String | - | 允许用户在 Code 节点中导入特定的内置模块。使用 * 表示允许全部。n8n 默认禁止导入模块。 |
| `NODE_FUNCTION_ALLOW_EXTERNAL` | String | - | 允许用户在 Code 节点中导入特定的外部模块（来自 `n8n/node_modules`）。n8n 默认禁止导入模块。 |
| `NODES_ERROR_TRIGGER_TYPE` | String | `n8n-nodes-base.errorTrigger` | 指定把哪种节点类型用作错误触发器（Error Trigger）。 |
| `NODES_EXCLUDE` | Array of strings | `[\"n8n-nodes-base.executeCommand\", \"n8n-nodes-base.localFileTrigger\"]` | 指定不加载哪些节点。例如，要阻止那些在用户不可信时存在安全风险的节点：`NODES_EXCLUDE: "[\"n8n-nodes-base.executeCommand\", \"@n8n/n8n-nodes-langchain.lmChatDeepSeek\"]"`。要启用所有节点，请指定 `NODES_EXCLUDE: "[]"`。 |
| `NODES_INCLUDE` | Array of strings | - | 指定加载哪些节点。 |
| `NODES_MERGE_SQL_SANDBOX_MEMORY_LIMIT_MB` | Number | `64` | Merge 节点 SQL 沙箱的内存限制（MB）。如果「按 SQL 合并」（Combine by SQL）在处理大数据集时失败，而你的实例又有足够内存，可以调大这个值。 |

## 压缩节点设置

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
|:-----------------------------------------------------|:-------|:---------------|:-------------------------------------------------------------------------------------|
| `N8N_COMPRESSION_NODE_MAX_DECOMPRESSED_SIZE_BYTES` | Number | `2147483648` | 解压后的最大总输出大小（字节）。默认是 2 GiB。 |
| `N8N_COMPRESSION_NODE_MAX_ZIP_ENTRIES` | Number | `5000` | 一个 ZIP 压缩包中允许的最大条目数。 |

## 管理已安装的社区包

{% hint style="info" %}
**n8n v2.21.0 起可用**

{% endhint %}

可以通过环境变量预先配置（预置）已安装的[社区包](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/community-nodes/installation-and-management)。关于 `*_MANAGED_BY_ENV` 模式，参见[使用环境变量管理实例设置](../../manage-settings-using-environment-variables.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/w3ftfKhp9KdsaTfUFHE8/" %}

[^1]: 在 n8n 中，节点（nodes）是组成工作流的独立组件。节点决定了工作流何时运行，允许你获取、发送和处理数据，可以定义流程控制逻辑，并与外部服务连接。
