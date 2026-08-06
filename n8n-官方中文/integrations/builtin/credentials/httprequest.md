---
title: HTTP Request 凭证
description: >-
  HTTP Request 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  HTTP Request 的身份。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: HTTP Request credentials
originalFilePath: integrations/builtin/credentials/httprequest.md
originalUrl: https://docs.n8n.io/integrations/builtin/credentials/httprequest
url: https://docs.n8n.io/integrations/builtin/credentials/httprequest
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
---

# HTTP Request 凭证

{% hint style="info" %}
**大白话**：HTTP Request 节点是 n8n 的「万能请求节点」——它自己不关心你调用的服务是谁，而是让你从一堆通用的验证方式里挑一种（OAuth2、OAuth1、基础账号密码、Bearer 令牌、自定义 Header、查询参数……）。原则是：**如果 n8n 已经为你那个服务提供了专用凭证类型，优先用专用的**，省事又不容易出错。这一页就是教你怎么选、怎么填各种通用验证方式。
{% endhint %}

这些凭证可以用来验证以下节点的身份：

* [HTTP Request](../core-nodes/n8n-nodes-base.httprequest/README.md)

## 前提条件

你必须使用你要访问的那个应用或服务所要求的验证方式。

如果你需要用 SSL 证书来加密验证过程，请参考 [提供 SSL 证书](#provide-an-ssl-certificate) 了解需要准备什么。

## 支持的验证方式

* 预定义凭证类型（Predefined credential type）
* 基础认证（Basic auth，通用凭证类型）
* 自定义认证（Custom auth，通用凭证类型）
* 摘要认证（Digest auth，通用凭证类型）
* 请求头认证（Header auth，通用凭证类型）
* Bearer 认证（Bearer auth，通用凭证类型）
* OAuth1（通用凭证类型）
* OAuth2（通用凭证类型）
* 查询参数认证（Query auth，通用凭证类型）

关于通用凭证类型的更多信息，请参考 [HTTP 身份验证](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)。

{% hint style="info" %}
**预定义凭证类型**

只要你要连接的服务在 n8n 里有对应的凭证类型，n8n 就建议优先使用预定义凭证类型。相比配置通用凭证，这种方式设置和管理起来更简单。

你还可以使用[预定义凭证类型](../custom-api-actions-for-existing-nodes.md#predefined-credential-types)，在 n8n 已有节点的平台上执行自定义操作。例如，n8n 有 Asana 节点，也支持在 HTTP Request 节点里使用你的 Asana 凭证。更多信息请参考[自定义操作](../custom-api-actions-for-existing-nodes.md)。
{% endhint %}

## 使用预定义凭证类型

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ZmZC9v8B1NG5lgRY44yF/" %}

更多信息请参考[自定义 API 操作](../custom-api-actions-for-existing-nodes.md)。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/vIyn1XsEkjlolZzHTfTG/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/tq6Yob45CR8oPKrT6Ggr/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/fjWxEWe1g0CDvsx1igf6/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/JeIbggto5Oi1mPf9SOYv/" %}

## 使用 OAuth1

如果你的应用或服务支持 OAuth1 验证，就使用这个通用验证方式。

配置这个凭证时，填写：

* 一个 **Authorization URL（授权网址）**：也叫 Resource Owner Authorization URI（资源所有者授权地址）。这个 URL 通常以 `/oauth1/authorize` 结尾。临时凭证会发送到这个地址，提示用户完成授权。
* 一个 **Access Token URL（访问令牌网址）**：这是初次请求临时凭证时用的地址，通常以 `/oauth1/request` 或 `/oauth1/token` 结尾。
* 一个 **Consumer Key（消费者密钥）**：也叫客户端 key，作用类似用户名。它指定了调用时要使用的 `oauth_consumer_key`。
* 一个 **Consumer Secret（消费者密钥密码）**：也叫客户端 secret，作用类似密码。
* 一个 **Request Token URL（请求令牌网址）**：这是授权完成后，把临时凭证换成长期凭证时用的地址，通常以 `/oauth1/access` 结尾。
* 选择授权握手使用的 **Signature Method（签名方法）**：它指定了调用时要使用的 `oauth_signature_method`。可选：
  * **HMAC-SHA1**
  * **HMAC-SHA256**
  * **HMAC-SHA512**

对于大多数 OAuth1 集成，你需要先去配置一个应用、服务或集成来生成上面大部分字段的值。用 n8n 里的 **OAuth Redirect URL（OAuth 回调地址）** 作为这类服务的回调地址或回调 URI。

了解更多：[OAuth1](https://oauth.net/1/) 和 [OAuth1 授权流程](https://oauth1.wp-api.org/docs/basics/Auth-Flow.html)。

## 使用 OAuth2

如果你的应用或服务支持 OAuth2 验证，就使用这个通用验证方式。

配置这个凭证需要哪些字段，取决于你选择的 **Grant Type（授权类型）**。每种授权类型的更多信息请参考 [OAuth 授权类型](https://oauth.net/2/grant-types/)。

对于大多数 OAuth2 集成，你需要先去配置一个应用、服务或集成。用 n8n 里的 **OAuth Redirect URL（OAuth 回调地址）** 作为这类服务的回调地址或回调 URI。

了解更多：[OAuth2](https://oauth.net/2/)。

### Authorization Code（授权码）授权类型

使用授权码授权类型，可以用一个授权码换取访问令牌。这个流程会利用回调地址把用户带回客户端，然后应用从网址中取出授权码，再用它去请求访问令牌。更多信息请参考 [Authorization Code Request](https://www.oauth.com/oauth2-servers/access-tokens/authorization-code-request/)。

配置这个凭证时，把 **Grant Type（授权类型）** 选为 **Authorization Code（授权码）**。

然后填写：

* 一个 **Authorization URL（授权网址）**
* 一个 **Access Token URL（访问令牌网址）**
* 一个 **Client ID（客户端 ID）**：用于登录的 ID 或用户名。
* 一个 **Client Secret（客户端密钥）**：用于登录的密钥或密码。
* _可选：_ 填写一个或多个 **Scope（权限范围）**。如果不填，凭证会请求该客户端可用的全部 scope。
* _可选：_ 有些服务需要额外的查询参数。如果你的服务需要，就添加到 **Auth URI Query Parameters（授权地址查询参数）** 里。
* 一个 **Authentication（验证方式）** 类型：选择最适合你使用场景的选项。可选：
  * **Header（请求头）**：把凭证作为 basic auth 请求头发送。
  * **Body（请求体）**：把凭证放在请求体里发送。
* _可选：_ 选择是否 **Ignore SSL Issues（忽略 SSL 问题）**。打开后，即使 SSL 校验失败，n8n 也会照常连接。

### Client Credentials（客户端凭证）授权类型

当应用要获取访问令牌来访问**自己的资源**（而不是替某个用户访问）时，使用客户端凭证授权类型。更多信息请参考 [Client Credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/)。

配置这个凭证时，把 **Grant Type（授权类型）** 选为 **Client Credentials（客户端凭证）**。

然后填写：

* 一个 **Access Token URL（访问令牌网址）**：发起 OAuth2 流程时访问的网址，通常以 `/token` 结尾。
* 一个 **Client ID（客户端 ID）**：用于登录客户端的 ID 或用户名。
* 一个 **Client Secret（客户端密钥）**：用于登录客户端的密钥或密码。
* _可选：_ 填写一个或多个 **Scope（权限范围）**。大多数服务不支持 Client Credentials 授权类型的 scope；只有当你的服务支持时才填。
* 一个 **Authentication（验证方式）** 类型：选择最适合你使用场景的选项。可选：
  * **Header（请求头）**：把凭证作为 basic auth 请求头发送。
  * **Body（请求体）**：把凭证放在请求体里发送。
* _可选：_ 选择是否 **Ignore SSL Issues（忽略 SSL 问题）**。打开后，即使 SSL 校验失败，n8n 也会照常连接。

### PKCE 授权类型

PKCE（Proof Key for Code Exchange，代码交换证明密钥）授权类型是授权码流程的扩展，用来防止 CSRF（跨站请求伪造）和授权码注入攻击。

配置这个凭证时，把 **Grant Type（授权类型）** 选为 **PKCE**。

然后填写：

* 一个 **Authorization URL（授权网址）**
* 一个 **Access Token URL（访问令牌网址）**
* 一个 **Client ID（客户端 ID）**：用于登录的 ID 或用户名。
* 一个 **Client Secret（客户端密钥）**：用于登录的密钥或密码。
* _可选：_ 填写一个或多个 **Scope（权限范围）**。如果不填，凭证会请求该客户端可用的全部 scope。
* _可选：_ 有些服务需要额外的查询参数。如果你的服务需要，就添加到 **Auth URI Query Parameters（授权地址查询参数）** 里。
* 一个 **Authentication（验证方式）** 类型：选择最适合你使用场景的选项。可选：
  * **Header（请求头）**：把凭证作为 basic auth 请求头发送。
  * **Body（请求体）**：把凭证放在请求体里发送。
* _可选：_ 选择是否 **Ignore SSL Issues（忽略 SSL 问题）**。打开后，即使 SSL 校验失败，n8n 也会照常连接。

## 使用 query auth（查询参数认证）

如果你的应用或服务支持把验证信息作为**单个**键/值查询参数传递，就使用这个通用验证方式。（如果有多个查询参数，请使用[自定义认证](#using-custom-auth)。）

配置这个凭证时，填写：

* 查询参数键名或 **Name（名称）**
* 查询参数的 **Value（值）**

## 使用 custom auth（自定义认证）

如果你的应用或服务支持把验证信息作为**多个**键/值查询参数传递，或者你需要的灵活性超过了其他通用验证方式，就使用这个通用验证方式。

**Custom Auth（自定义认证）** 凭证要求用 JSON 数据来定义你的凭证。你可以使用 `headers`、`qs`、`body` 或者它们的组合。参考下面的示例来上手。

### 发送两个请求头（Sending two headers）

```
{
	"headers": {
		"X-AUTH-USERNAME": "username",
		"X-AUTH-PASSWORD": "password"
	}
}
```

### 请求体（Body）

```
{
	 "body" : {
		"user": "username",
		"pass": "password"
	}
}
```

### 查询字符串（Query string）

```
{
	"qs": { 
		"appid": "123456",
		"apikey": "my-api-key"
	}
}
```

### 同时发送请求头和查询字符串（Sending header and query string）

```
{
	"headers": {
		"api-version": "202404"
	},
	"qs": {
		"apikey": "my-api-key"
	}
}
```

## 提供 SSL 证书

你可以随 HTTP 请求一起发送 SSL 证书。把 SSL 证书单独创建为一个凭证，供节点使用：

1. 在 HTTP Request 节点的 **Settings（设置）** 里，打开 **SSL Certificates（SSL 证书）**。
2. 在 **Parameters（参数）** 选项卡上，把一个已有的 SSL Certificate 凭证添加到 **Credential for SSL Certificates（SSL 证书凭证）**，或者新建一个。

配置 SSL Certificates 凭证时，需要添加：

* Certificate Authority **CA** bundle（证书颁发机构 CA 捆绑包）
* **Certificate（证书，CRT）**：也可能显示为 Public Key（公钥），取决于颁发证书的 CA 以及它们的证书格式
* **Private Key（私钥，KEY）**
* _可选：_ 如果 **Private Key（私钥）** 是加密的，填写私钥的 **Passphrase（口令）**。

如果你的 SSL 证书是单个文件（比如 `.pfx` 文件），需要打开文件，把里面的内容复制到对应的字段：

* 把公钥/CRT 填为 **Certificate（证书）**
* 把 **Private Key（私钥）**/KEY 填到对应字段
