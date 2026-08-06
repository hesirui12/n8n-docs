---
title: JWT
description: >-
  n8n（工作流自动化平台）中 JWT 节点的文档。
  包含使用指南和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: JWT
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.jwt.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.jwt'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.jwt'
layout:
  description:
    visible: false
---

# JWT

> **大白话**：JWT（JSON Web Token）是一种"电子通行证"，很多网站登录后会用它来识别"你是谁"。它长得像一串用点号分隔的乱码：`xxxxx.yyyyy.zzzzz`，里面其实藏着用户信息和签名。这个节点能帮你**生成（Sign）**通行证、**验证（Verify）**通行证是不是真的、**解码（Decode）**看看里面写了什么。适合：自己签发 Token、校验别人传来的 Token 等场景。

在 n8n 工作流中处理 JSON Web Token。

{% hint style="info" %}
**凭据（Credentials）**

你可以[在此处](../credentials/jwt.md)找到此节点的身份验证信息。
{% endhint %}

## 操作（Operations）

* Decode（解码）
* Sign（签名/签发）
* Verify（验证）

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

* **Credential to connect with（连接凭据）**：选择或创建一个 [JWT 凭据](../credentials/jwt.md) 用于连接。
* **Token**：输入要进行 **Verify（验证）** 或 **Decode（解码）** 的令牌。
* 如果你选择 **Sign（签名）** 操作，还会出现以下参数：
    * **Use JSON to Build Payload（使用 JSON 构建载荷）**：打开时，节点使用 JSON 来构建 claims（声明）。这里的选择会影响「Payload Claims（载荷声明）」区域显示什么内容。

> **小白提示**：JWT 由三部分组成——Header（头部，说明用什么算法签名）、Payload（载荷，存放实际数据）、Signature（签名，防篡改的"防伪标识"）。"签名（Sign）"就是"造一个 Token"，"验证（Verify）"就是"检查这个 Token 是不是真的、有没有过期"。

## 载荷声明（Payload Claims）

只有当你选择 **Sign（签名）** 操作时，节点才会显示载荷声明。你看到的内容取决于你对 **Use JSON to Build Payload（使用 JSON 构建载荷）** 的选择：

* 如果你选择了 **Use JSON to Build Payload（使用 JSON 构建载荷）**，此区域会显示一个 JSON 编辑器，你可以在里面构造 claims（声明）。
* 如果你没有选择 **Use JSON to Build Payload（使用 JSON 构建载荷）**，此区域会提示你 **Add Claim（添加声明）**。

你可以添加以下声明。

### 受众（Audience）

**Audience（受众）** 或 `aud` 声明用于标识 JWT 的目标接收者。

更多信息请参考 [RFC 7519 中的 "aud" (Audience) 声明](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3)。

### 过期时间（Expires In）

**Expires In（过期时间）** 或 `exp` 声明用于标识 JWT 过期的时间点，过期后不得再接受其进行处理。

更多信息请参考 [RFC 7519 中的 "exp" (Expiration Time) 声明](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.4)。

### 签发者（Issuer）

**Issuer（签发者）** 或 `iss` 声明用于标识签发该 JWT 的主体。

更多信息请参考 [RFC 7519 中的 "iss" (Issuer) 声明](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.1)。

### JWT 标识（JWT ID）

**JWT ID** 或 `jti` 声明为 JWT 提供一个唯一标识符。

更多信息请参考 [RFC 7519 中的 "jti" (JWT ID) 声明](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7)。

### 生效时间（Not Before）

**Not Before（生效时间）** 或 `nbf` 声明用于标识在该时间点之前，JWT 不得被接受进行处理。

更多信息请参考 [RFC 7519 中的 "nbf" (Not Before) 声明](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.5)。

### 主题（Subject）

**Subject（主题）** 或 `sub` 声明用于标识 JWT 所描述的主体。

更多信息请参考 [RFC 7519 中的 "sub" (Subject) 声明](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.2)。

## 节点选项（Node options）

### 解码节点选项（Decode node options）

**Return Additional Info（返回附加信息）** 开关控制节点返回多少信息。

打开时，节点返回完整的解码令牌，包括头部（header）和签名（signature）的相关信息。关闭时，节点只返回载荷（payload）。

> **小白提示**：只看 Token 里"写了什么数据"，关闭即可；还想研究"用什么算法签的、签名长什么样"，就打开。

### 签名节点选项（Sign node options）

使用 **Override Algorithm（覆盖算法）** 控件选择用于验证令牌的算法。此算法将覆盖凭据中选择的算法。

### 验证节点选项（Verify node options）

此操作包含多个节点选项：

* **Return Additional Info（返回附加信息）**：此开关控制节点返回多少信息。打开时，节点返回完整的解码令牌，包括头部和签名的相关信息。关闭时，节点只返回载荷。
* **Ignore Expiration（忽略过期）**：此开关控制节点是否忽略令牌的过期时间声明（`exp`）。更多信息请参考 [RFC 7519 中的 "exp" (Expiration Time) 声明](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.4)。
* **Ignore Not Before Claim（忽略生效时间声明）**：此开关控制是否忽略令牌的 not before（`nbf`）声明。更多信息请参考 [RFC 7519 中的 "nbf" (Not Before) 声明](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.5)。
* **Clock Tolerance（时钟容差）**：输入在检查 `nbf` 和 `exp` 声明时允许的秒数。这可以帮你处理不同服务器之间的小时钟差异。更多信息请参考 [RFC 7519 中的 "exp" (Expiration Time) 声明](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.4)。
* **Override Algorithm（覆盖算法）**：用于验证令牌的算法。此算法将覆盖凭据中选择的算法。

> **小白提示**：为什么会有"时钟容差"？因为不同服务器的时钟可能差几秒，如果 Token 恰好在"过期边缘"，可能一台机器认为没过期、另一台认为过期了。留几秒的容差就能避免这种尴尬。不过一般小白保持默认即可。

## 模板和示例（Templates and examples）

[浏览 JWT 集成模板](https://n8n.io/integrations/jwt) 或 [搜索所有模板](https://n8n.io/workflows/)
