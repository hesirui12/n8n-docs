---
title: SSRF 防护
description: >-
  保护你的自托管 n8n 实例免受服务端请求伪造（SSRF）攻击。
contentType: howto
nodeTitle: 启用 SSRF 防护
originalFilePath: hosting/securing/ssrf-protection.md
originalUrl: 'https://docs.n8n.io/hosting/securing/ssrf-protection'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/enable-ssrf-protection
layout:
  description:
    visible: false
---

# SSRF 防护 / SSRF protection

{% hint style="info" %}
**自 2.12.0 起可用**


{% endhint %}

服务端请求伪造（Server-Side Request Forgery，SSRF）攻击会滥用工作流节点，向本不该被访问的内部网络资源、云元数据端点（cloud metadata endpoints）或 localhost 服务发起请求。

{% hint style="info" %}
**大白话（什么是 SSRF）**：你的 n8n 服务器就像一栋楼，楼里的服务（比如数据库、云服务器的管理接口、内部 API）本来只在「内网」里可见，外部互联网访问不到。SSRF 攻击的思路是：**借你的手去打内网**。攻击者没法直接访问你的内网，但他可以操纵 n8n 的工作流节点（比如 HTTP 请求节点）去请求一个内网地址——由于请求是从 n8n 服务器内部发出的，就绕过了防火墙，等于攻击者借 n8n 这台「内部机器」当跳板，探测和攻击你的内网资源。云元数据端点（如 `169.254.169.254`）尤其危险，那里往往放着云服务器的密钥和凭证。
{% endhint %}

{% hint style="warning" %}
SSRF 防护是一种额外的应用层防御（application-level defense）。你始终应该在基础设施层面配置网络级防护（防火墙 firewalls、安全组 security groups、网络策略 network policies）作为第一道防线。n8n 的 SSRF 防护是在这些控制之上叠加的纵深防御（defense-in-depth）。
{% endhint %}

{% hint style="info" %}
**大白话**：n8n 的 SSRF 防护是「最后一道补丁」，不是「第一道大门」。第一道防线永远是防火墙/安全组（在云上叫 Security Group，就是在网络层面规定谁能访问谁）。n8n 这个功能是在应用层面再做一层拦截，多一层保险，但**不能替代**网络层防护。两层都做好才叫纵深防御。
{% endhint %}

## 启用 SSRF 防护 / Enable SSRF protection

```
N8N_SSRF_PROTECTION_ENABLED=true
```

启用后，n8n 会针对配置的拦截范围（blocked ranges）和允许范围（allowed ranges），校验所有来自用户可控节点（如 HTTP 请求节点）的出站 HTTP 请求。这包括重定向目标（redirect targets）和 DNS 解析（DNS resolution），以防止诸如 DNS 重绑定（DNS rebinding）之类的绕过技术。

{% hint style="info" %}
**大白话（启用与校验逻辑）**：把 `N8N_SSRF_PROTECTION_ENABLED` 设成 `true` 后，凡是工作流里发出去的 HTTP 请求（主要来自 HTTP 请求节点），n8n 都会先检查目标地址：①如果是黑名单（blocked）里的内网地址 → 直接拦下；②如果是白名单（allowed）里的地址 → 放行；③两者都不在 → 正常放行。特别注意两点：一是**重定向也会被检查**（有的攻击者让请求先跳到一个正常网址，再悄悄跳到内网，n8n 会一路跟踪检查）；二是**DNS 也会被解析检查**（DNS 重绑定攻击就是用一个域名先解析成正常 IP、后解析成内网 IP 来绕过，n8n 会预先解析域名核对 IP 来防这个）。
{% endhint %}

## 默认拦截的范围 / Default blocked ranges

启用 SSRF 防护后，以下 IP 范围默认会被拦截：

| 范围 | 说明 |
| :---- | :---------- |
| `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` | RFC 1918 私网地址（内网 IP） |
| `127.0.0.0/8`, `::1/128` | 回环地址（本机 localhost） |
| `169.254.0.0/16`, `fe80::/10` | 链路本地地址（含云元数据端点） |
| `fc00::/7`, `fd00::/8` | IPv6 唯一本地地址（相当于 IPv6 的内网） |
| `0.0.0.0/8`, `192.0.0.0/24`, `192.0.2.0/24`, `198.18.0.0/15`, `198.51.100.0/24`, `203.0.113.0/24` | 保留/特殊用途地址 |

你可以用 `N8N_SSRF_BLOCKED_IP_RANGES=default,100.0.0.0/8` 来扩展这个列表。

{% hint style="info" %}
**大白话（IP 范围知识）**：`/8`、`/12`、`/16` 这种写法叫 CIDR 记法，表示一段 IP 地址的「范围大小」。表格里这些类别一句话理解：**私网地址**= 你内网机器用的 IP（`192.168.x.x` 最常见）；**回环地址**= `127.0.0.1`（就是「本机自己」）；**链路本地**= `169.254.x.x`（其中最出名的 `169.254.169.254` 是云服务器的元数据端点，云平台的密钥都在那里，是 SSRF 攻击的头号目标）；**保留地址**= 官方规定不用于公网的特殊段。默认全部拦截 = 开箱即防。如果你想额外拦更多段，可以用 `N8N_SSRF_BLOCKED_IP_RANGES` 变量：注意格式里保留 `default` 这个词（表示「在默认拦截列表的基础上」），再加逗号和你要新增的段。也就是说 `default,100.0.0.0/8` = 默认段 + 额外加的 `100.0.0.0/8`。如果你不想保留默认段，就不要写 `default`（但一般建议保留）。
{% endhint %}

## 允许访问内部服务 / Allow access to internal services

如果你的工作流需要访问合法的内部服务，请使用白名单（allowlists）。白名单优先于黑名单，遵循以下顺序：**主机名白名单 > IP 白名单 > IP 黑名单**。

按主机名模式允许（支持通配符，如 `*.n8n.internal`）：

```
N8N_SSRF_ALLOWED_HOSTNAMES=*.n8n.internal,*.company.local
```

按 IP 范围允许：

```
N8N_SSRF_ALLOWED_IP_RANGES=10.0.1.0/24,10.0.2.50/32
```

{% hint style="warning" %}
只白名单你**自己控制**的主机名（内部 DNS 区域）。主机名白名单会绕过 IP 黑名单检查。
{% endhint %}

{% hint style="info" %}
**大白话（白名单）**：默认全拦截后，你自己的工作流连自己内网的服务（比如数据库管理接口、内网 API）也会被拦——这是「误伤」。解决办法就是白名单：把合法的内部地址「加白」放行。两个变量分工：①`N8N_SSRF_ALLOWED_HOSTNAMES` 按**域名**放行，支持 `*` 通配符（`*.n8n.internal` 表示 `a.n8n.internal`、`b.n8n.internal` 等都放行）；②`N8N_SSRF_ALLOWED_IP_RANGES` 按 **IP 段**放行（`/32` 表示单个 IP）。优先级是「域名白名单最高、IP 白名单次之、IP 黑名单最低」——即只要命中更高优先级的放行规则，就不会被低优先级的拦截规则挡住。**警告很重要**：域名白名单的权限很大，等于对那个域名「一路绿灯」，所以只能加你完全掌控的内部域名（比如自己公司的内网 DNS 域名），绝不能把外部域名加进白名单，否则等于给攻击者开了一个绕过所有拦截的后门。
{% endhint %}

## 相关资源 / Related resources

完整的配置选项列表，请参阅 [SSRF 防护环境变量](../basic-configuration/use-environment-variables/ssrf-protection.md)。

关于设置环境变量的更多信息，请参阅[配置方法](../basic-configuration.md)。
