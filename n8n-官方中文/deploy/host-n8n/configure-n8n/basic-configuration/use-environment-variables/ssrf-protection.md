---
title: SSRF 防护（SSRF protection）环境变量
description: 为你的自托管 n8n 实例配置 SSRF 防护。
contentType: reference
tags:
  - environment variables
hide:
  - toc
  - tags
nodeTitle: SSRF 防护（SSRF protection）
originalFilePath: hosting/configuration/environment-variables/ssrf-protection.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/environment-variables/ssrf-protection
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/ssrf-protection
layout:
  description:
    visible: false
---

# SSRF 防护（SSRF protection）环境变量

{% hint style="info" %}
**大白话**：SSRF 攻击就是黑客诱导服务器去访问它不该访问的内网地址（比如 `localhost`、内网网段、云厂商的元数据接口 `169.254.169.254`）。因为工作流可以用用户输入来拼请求 URL，n8n 提供了防护开关，默认关闭。这一页教你用变量开启防护，并设置允许/禁止访问的 IP 网段和域名。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ASsLuMLGKMy2O0q7awMF/" %}

服务器端请求伪造（Server-Side Request Forgery，SSRF）是一种攻击：攻击者诱骗服务器向攻击者选定的地址发起 HTTP 请求，比如只允许内部访问的目标，如 `localhost`、私有网络网段，或云提供商的元数据端点（`169.254.169.254`）。由于工作流可以根据用户可控的输入来构建请求 URL，n8n 可以对「目标地址来自该输入」的出站请求进行防护。

SSRF 防护默认是关闭的。本页列出了开启并微调它的变量。

## 防护覆盖哪些内容（What protection covers）

| 变量名 (Variable) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :------- | :--- | :------ | :---------- |
| `N8N_SSRF_PROTECTION_ENABLED` | Boolean | `false` | 为发送到用户可控目标的请求开启 SSRF 防护。 |
| `N8N_SSRF_BLOCKED_IP_RANGES` | String | `default` | 要禁止的 CIDR 网段列表，用逗号分隔。关键字 `default`（不区分大小写）会展开为 n8n 内置的网段集合。可以追加你自己的网段：`default,100.64.0.0/10`。 |
| `N8N_SSRF_ALLOWED_IP_RANGES` | String | - | 要允许的 CIDR 网段列表，用逗号分隔。它优先于黑名单，所以可以用它来访问一个已知的内网主机。 |
| `N8N_SSRF_ALLOWED_HOSTNAMES` | String | - | 要允许的主机名列表，用逗号分隔。支持以 `*.` 开头的通配符：`*.internal.example.com` 匹配任意子域名（包括多级子域名），但不匹配裸域名本身。匹配不区分大小写。 |
| `N8N_SSRF_BLOCKED_HOSTNAMES` | String | - | 按名称禁止的主机名列表，用逗号分隔，在 DNS 解析之前检查。使用与 `N8N_SSRF_ALLOWED_HOSTNAMES` 相同的 `*.` 通配符和不区分大小写的匹配规则。允许的主机名总是覆盖被禁止的主机名。 |
| `N8N_SSRF_DNS_CACHE_MAX_SIZE` | Number | `1048576` | 内部 DNS 解析缓存的最大大小，单位为字节（默认 1 MB）。缓存满时，n8n 会淘汰最近最少使用（LRU）的条目。 |

如果你在 `N8N_SSRF_BLOCKED_IP_RANGES` 或 `N8N_SSRF_ALLOWED_IP_RANGES` 中设置了无效的 CIDR 网段，n8n 会记录一条警告日志并跳过该网段，所以拼写错误不会阻止实例启动。

### 默认禁止的内容（Blocked by default）

当 `N8N_SSRF_BLOCKED_IP_RANGES` 包含 `default` 时，n8n 会禁止以下网段：

- 私有网络（[RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918)）：`10.0.0.0/8`、`172.16.0.0/12`、`192.168.0.0/16`
- 回环地址（Loopback）：`127.0.0.0/8`、`::1/128`
- 链路本地地址（Link-local），包括云元数据：`169.254.0.0/16`、`fe80::/10`
- IPv6 唯一本地地址（unique-local）：`fc00::/7`、`fd00::/8`
- 保留或特殊用途地址：`0.0.0.0/8`、`192.0.0.0/24`、`192.0.2.0/24`、`198.18.0.0/15`、`198.51.100.0/24`、`203.0.113.0/24`

## n8n 如何评估一个请求（How n8n evaluates a request）

n8n 按以下顺序检查每个目标地址，命中第一个匹配项就停止：

1. **允许的主机名（Allowed hostname）**：如果请求的主机名匹配 `N8N_SSRF_ALLOWED_HOSTNAMES`，n8n 允许该请求。
2. **禁止的主机名（Blocked hostname）**：如果请求的主机名匹配 `N8N_SSRF_BLOCKED_HOSTNAMES`，n8n 禁止该请求。这个检查在 DNS 解析之前执行，所以即使该名称会解析到公网 IP，n8n 也会不做查询就直接拒绝它。
3. **允许的 IP 网段（Allowed IP range）**：如果解析后的 IP 匹配 `N8N_SSRF_ALLOWED_IP_RANGES`，n8n 允许该请求。
4. **禁止的 IP 网段（Blocked IP range）**：如果解析后的 IP 匹配 `N8N_SSRF_BLOCKED_IP_RANGES`，n8n 禁止该请求。
5. **其他情况（Otherwise）**：n8n 允许该请求。

因为 n8n 先检查允许列表，所以任何允许条目总是覆盖黑名单。

## 常见场景（Common scenarios）

特意访问一个内部服务。如果工作流必须调用一个内网主机，只允许那个目标，而不是关闭防护：

```bash
N8N_SSRF_PROTECTION_ENABLED=true
N8N_SSRF_ALLOWED_IP_RANGES=10.20.0.5/32
```

允许一个内网主机名：

```bash
N8N_SSRF_ALLOWED_HOSTNAMES=*.svc.cluster.local
```

在默认基础上收紧防护。添加你环境中特有的网段：

```bash
N8N_SSRF_BLOCKED_IP_RANGES=default,100.64.0.0/10
```

按名称拒绝一个主机名。禁止一个主机及其所有子域名，无论它解析到什么 IP：

```bash
N8N_SSRF_BLOCKED_HOSTNAMES=example.com,*.example.com
```

{% hint style="info" %}
**主机名禁止是出口管控（egress governance），不是 SSRF 加固**

`N8N_SSRF_BLOCKED_HOSTNAMES` 是按名称拒绝的，所以调用方仍然可以通过 IP 字面量、其他主机名或 DNS 重绑定（DNS rebinding）到达同一目标。可以用它来劝阻已知的不想要的目标，但 SSRF 防护请依赖基于 IP 的黑名单。
{% endhint %}

## 当 n8n 禁止一个请求时（When n8n blocks a request）

被 IP 禁止的请求会以错误信息失败："The request was blocked because it resolves to a restricted IP address"（请求被阻止，因为它解析到了受限的 IP 地址）。被主机名禁止的请求会以 "The request was blocked because the destination hostname is restricted"（请求被阻止，因为目标主机名受限）失败。两条信息都会点名目标，并告诉用户请其 n8n 管理员允许该主机名或 IP 网段。如果这个请求是真实合法的，就把预期目标添加到 `N8N_SSRF_ALLOWED_IP_RANGES` 或 `N8N_SSRF_ALLOWED_HOSTNAMES` 中。

{% hint style="warning" %}
**在生产环境启用前，请先检查允许列表（Review allow lists before enabling in production）**

防护默认关闭，是为了不破坏现有自托管环境中调用内部服务的配置。在开启它之前，先列出你的工作流需要访问的内部主机，并把它们加入允许列表。优先使用窄范围的允许条目（比如单个主机或主机名），而不是直接关闭防护。
{% endhint %}
