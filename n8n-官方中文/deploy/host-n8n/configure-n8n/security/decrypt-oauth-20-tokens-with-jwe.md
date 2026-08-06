---
title: OAuth 2.0 凭据的 JWE 令牌解密
description: >-
  在你的 n8n 实例上启用 JWE 加密的 OAuth 2.0 令牌，让你的身份提供商可以加密
  访问令牌和 ID 令牌，且只有你的实例能够解密。
contentType: howto
nodeTitle: 使用 JWE 解密 OAuth 2.0 令牌
originalFilePath: hosting/securing/oauth2-jwe-token-decryption.md
originalUrl: 'https://docs.n8n.io/hosting/securing/oauth2-jwe-token-decryption'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/decrypt-oauth-20-tokens-with-jwe
layout:
  description:
    visible: false
---

# OAuth 2.0 凭据的 JWE 令牌解密 / JWE token decryption for OAuth 2.0 credentials

{% hint style="info" %}
**功能可用性**

* 自 n8n v2.21.0 起可用。
* 在任何设置了 `N8N_ENV_FEAT_OAUTH2_JWE` 环境变量为 `true` 的 n8n 实例上可用。自托管实例可以直接设置。Cloud（云版）上需要联系 n8n 支持申请开通。
* 需要一个能够将令牌加密为 JWE 格式的身份提供商（IdP）。
{% endhint %}

{% hint style="warning" %}
**预览功能（Preview feature）**

JWE 令牌解密目前处于预览阶段，由一个环境标志（environment flag）控制。字段名称、环境变量、JWKS 端点路径以及支持的算法在功能正式发布（GA）之前都可能发生变化。请固定你的 n8n 版本，并在每次升级后重新测试你的 OAuth 2.0 凭据。
{% endhint %}

{% hint style="info" %}
**大白话（功能概览）**：正常使用 OAuth 2.0 时，身份提供商（IdP，比如 Google、Okta）会返回「访问令牌」给你，n8n 拿着这个令牌去调用第三方 API。但令牌在「从 IdP 传给 n8n」的途中，可能经过浏览器、反向代理、日志等环节——这些中间环节理论上都能看到令牌内容，存在泄露风险。这个功能解决的就是这个问题：让 IdP 把令牌**加密**成 JWE 格式再发过来，n8n 用自己的私钥解密。私钥永远不离开 n8n 实例，所以即使令牌在传输途中被截获，没有私钥的中间人也看不懂、用不了。
{% endhint %}

JWE 令牌解密让你的身份提供商返回的 OAuth 2.0 访问令牌（access token）和 ID 令牌（ID token）以 [JWE](https://datatracker.ietf.org/doc/html/rfc7516) 格式加密。你的 n8n 实例在 OAuth 回调（callback）时使用一把**永不离开实例的私钥**来解密令牌。这可以保护令牌内容免受任何介于 IdP 和 n8n 之间的环节的窥探，包括反向代理（reverse proxies）、浏览器和日志（logs）。

{% hint style="info" %}
**大白话**：JWE（JSON Web Encryption）是一种标准化的加密格式，可以把令牌「打包加密」。流程是：IdP 用「公钥」把令牌加密，n8n 用「私钥」解密。公钥可以公开给人看（用来加密），私钥只有 n8n 自己藏着（用来解密）。这样，凡是能接触到传输数据的人（代理、浏览器、日志系统）看到的都是加密后的密文，等于「密文经过一路，只有终点能解开」。
{% endhint %}

## JWE 令牌解密的工作原理 / How JWE token decryption works

启用该功能后，n8n 会：

1. 在启动时生成一对 RSA 密钥，并将私钥（用你的实例加密密钥加密后）存储在数据库中。
2. 将匹配的公钥发布到一个实例级的 JWKS 端点，供你的 IdP 获取。
3. 在 OAuth 回调时，使用与 JWE 头（header）中 `kid` 匹配的私钥解密传入的 JWE 令牌。

IdP 使用它从你的 JWKS 端点获取的公钥加密每个令牌。只有你的实例能解密结果。

{% hint style="info" %}
**大白话**：拆开解释三步：①「RSA 密钥对」= 一把公钥 + 一把私钥，数学上配对使用；私钥存数据库前还会用 n8n 自己的实例加密密钥再加密一层（即「静态加密」，防止数据库被拖走时私钥裸奔）。②「JWKS 端点」= 一个公开的网址（`.../.well-known/jwks.json`），专门用来发布公钥，IdP 去这个网址就能拿到公钥。③ `kid` = 密钥的身份证号。JWE 令牌里会写明它是用哪把密钥加密的（`kid`），n8n 收到后按号找钥匙，不会解错。整体就是一个「公钥加密、私钥解密」的闭环。
{% endhint %}

## 开始之前 / Before you begin

你需要：

* 在你的 n8n 实例上设置 `N8N_ENV_FEAT_OAUTH2_JWE=true`。自托管实例可以直接启用。Cloud 版请联系 n8n 支持申请。
* 所有 n8n 实例（主实例 main 和工作实例 workers）共享同一个 `N8N_ENCRYPTION_KEY` 值。n8n 用这个实例密钥对 JWE 私钥进行静态加密。
* 一个支持 JWE 加密令牌且使用 `RSA-OAEP-256` 密钥加密算法的 IdP。

{% hint style="info" %}
**大白话**：三件事逐一说明：①先打开功能开关（环境变量设 `true`）；②如果你是多实例部署（主实例 + 若干 worker），它们必须用**同一把** `N8N_ENCRYPTION_KEY`，否则 A 实例加密保存的 JWE 私钥，B 实例解不开；③`RSA-OAEP-256` 是加密算法的一种组合名称（RSA 非对称加密 + OAEP 填充 + SHA-256），你的身份提供商得支持这种算法才能配合。这是「公钥加密」的标准现代算法，主流 IdP 一般都能配置。
{% endhint %}

## 启用 JWE 令牌解密 / Enable JWE token decryption

1. 在**所有** n8n 实例上设置以下环境变量，主实例和 worker 都要设：

    ```sh
    N8N_ENV_FEAT_OAUTH2_JWE=true
    ```

2. 重启所有实例。启动时，n8n 会生成 RSA 密钥对，并将公钥发布到 JWKS 端点。
3. 要确认功能已激活，请请求 JWKS 端点并检查它是否返回一个 `"alg": "RSA-OAEP-256"` 的密钥：

    ```sh
    curl https://<your-n8n-host>/rest/.well-known/jwks.json
    ```

{% hint style="info" %}
**大白话**：第 1 步的环境变量要写进所有实例的配置（比如 `.env` 文件、Docker 环境变量或 Kubernetes 配置），不是只改一个。第 2 步重启后，n8n 会自动生成密钥并「上架」公钥。第 3 步是验证手段：在终端里执行那条 `curl` 命令（把 `<your-n8n-host>` 换成你实际的 n8n 域名或 IP），它会打印出一段 JSON。看到 `"alg": "RSA-OAEP-256"` 就说明功能正常启用了；如果返回 404 或空内容，说明没配好（检查环境变量、重启是否完成）。
{% endhint %}

## 配置你的身份提供商 / Configure your identity provider

在 IdP 上对应的 OAuth 2.0 客户端或应用配置中：

1. 为 n8n 连接的客户端启用加密令牌（encrypted tokens）。
2. 将客户端的 JWKS URI 设置为你实例的 JWKS 端点。n8n 会在凭据上显示这个 URL，所以你创建好凭据后可以直接从那里复制（见下一节）。
3. 选择 `RSA-OAEP-256` 作为密钥加密算法（`alg`）。再搭配任意你的 IdP 支持的内容加密算法（`enc`），例如 `A128CBC-HS256` 或 `A256GCM`。

<details>

<summary>示例：Okta</summary>

1. 在 Okta 管理后台中，打开 n8n 使用的 OAuth 2.0 应用，或新建一个 Web 应用。
2. 在该应用的 OpenID Connect 设置下，启用令牌加密（token encryption）。
3. 将**密钥管理算法（Key management algorithm）**设置为 `RSA-OAEP-256`，并选择一个内容加密算法（例如 `A256GCM`）。
4. 将**JWKS URI** 设置为 n8n 在凭据的 **JWKS URI** 字段中显示的值。

</details>

{% hint style="info" %}
**大白话（配置 IdP）**：这一步是在身份提供商那边做设置（以 Okta 为例，就是进入 Okta 管理后台操作）。要点：①找到 n8n 用的那个 OAuth 2.0 应用，打开「令牌加密」开关；②`alg`（密钥加密算法）必须选 `RSA-OAEP-256`，这是 n8n 唯一支持的；③`enc`（内容加密算法）随便选一个 IdP 支持的即可（`A128CBC-HS256` 和 `A256GCM` 都是常见的）。「内容加密」和「密钥加密」是 JWE 的两层加密：先用 `enc` 把令牌内容加密，再用 `alg` 把加密内容用的密钥保护起来。如果你用的不是 Okta，操作逻辑是一样的——找到令牌加密（Token Encryption）相关设置，填同样的三个值即可。
{% endhint %}

## 在 n8n 中配置凭据 / Configure the credential in n8n

1. 创建或编辑一个 [OAuth 2.0 API 凭据](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/credentials/httprequest#using-oauth2)。
2. 打开**加密令牌（JWE）**开关（Encrypted Tokens (JWE)）。
3. 从 **JWKS URI** 字段复制值，粘贴到 IdP 上的 JWKS URI 设置中（如果还没做过的话）。
4. 保存凭据并连接。n8n 会解密 IdP 返回的令牌，并将解密后的形式存储起来供工作流使用。

你的 IdP 的响应中必须至少包含一个 JWE 加密的令牌（访问令牌、ID 令牌或两者都有）。如果响应完全是明文（plaintext），n8n 会拒绝它并报错 `Expected at least one JWE-encrypted token but received only plaintext`。

{% hint style="info" %}
**大白话（配置凭据）**：凭据（credential）就是 n8n 里存放「账号授权信息」的地方。创建/编辑 OAuth 2.0 凭据时：①找到「加密令牌（JWE）」开关并打开（如果没看到这个开关，说明功能没启用，去检查 `N8N_ENV_FEAT_OAUTH2_JWE=true` 是否在所有实例上设置并重启了）；②n8n 会自动生成 JWKS URI 并显示在凭据表单里，把它抄给 IdP 那边用；③最后保存并连接。**注意**：IdP 必须真的发加密令牌过来，如果它发的是明文，n8n 会直接拒绝（防止「以为加密了其实没加密」的安全假象）。
{% endhint %}

## JWKS 端点参考 / JWKS endpoint reference

n8n 在以下地址公开实例的公钥：

```
<instance-base-url>/<rest-endpoint>/.well-known/jwks.json
```

| 属性 | 值 |
| :------- | :---- |
| 默认路径 | `/rest/.well-known/jwks.json` |
| 认证 | 无（按设计公开可访问） |
| 速率限制 | 每个 IP 每分钟 `N8N_OAUTH_JWE_JWKS_PER_MINUTE` 次请求（默认 `60`） |
| 缓存头 | `Cache-Control: public, max-age=3600, must-revalidate` |
| 响应格式 | [JWK Set](https://datatracker.ietf.org/doc/html/rfc7517#section-5)（RFC 7517 §5） |

如果你自定义了 `N8N_ENDPOINT_REST`，请将路径中的 `rest` 替换为你自己的值。

{% hint style="info" %}
**大白话**：这张表是给运维/对接人员看的「端点说明书」。要点：①这个网址**不需要登录**就能访问（这是故意的——IdP 要能匿名拉取公钥），所以不要大惊小怪；②有速率限制（默认每个 IP 每分钟 60 次），如果 IdP 拉得太频繁可能被限流；③响应格式是标准的 JWK Set（一种描述公钥集合的 JSON 格式），遵循 RFC 7517 标准。`N8N_ENDPOINT_REST` 是 n8n 内部 REST 接口路径前缀，一般没人改，改了的话路径也要跟着变。
{% endhint %}

## 支持的算法 / Supported algorithms

n8n 支持 `RSA-OAEP-256` 作为密钥加密算法（key encryption）。配置你的 IdP 在加密令牌时使用这个 `alg` 值。n8n 不限制内容加密算法（`enc`），使用你的 IdP 支持的任何值即可。

JWKS 模式（schema）中预留了椭圆曲线算法（`ECDH-ES` 及其变体），但 n8n 目前还不会生成 EC 密钥。

{% hint style="info" %}
**大白话**：简单记一句话——**密钥加密算法只能选 `RSA-OAEP-256`**（这是 n8n 目前的唯一支持项），内容加密算法则随便（IdP 支持哪个用哪个）。最后一句是说明：标准的 JWKS 格式里会预留一些椭圆曲线算法（ECDH-ES 系）的位置，但 n8n 现在还没实现，不用管它们。
{% endhint %}

## 故障排查 / Troubleshooting

* **凭据上看不到「加密令牌（JWE）」开关。** 确认你已在**每一个** n8n 实例上设置了 `N8N_ENV_FEAT_OAUTH2_JWE=true`，并且已重启所有实例。
* **报错 `Expected at least one JWE-encrypted token but received only plaintext`。** IdP 返回了明文令牌。请确认你已在 IdP 中为该客户端启用了令牌加密，并且 IdP 已从你的 JWKS 端点获取了密钥。
* **IdP 无法获取 JWKS URI。** 检查从你的 IdP 是否能够访问 JWKS 端点。反向代理和认证中间件有时会拦截 `/rest/.well-known/jwks.json`。该端点必须无认证地公开可访问。
* **IdP 获取 JWKS 过于频繁而被限流。** 提高你 n8n 实例上的 `N8N_OAUTH_JWE_JWKS_PER_MINUTE` 值，或者配置你的 IdP 在完整的 `max-age` 窗口内缓存 JWKS 响应。

{% hint style="info" %}
**大白话（排错速查）**：遇到问题先对号入座——①开关不出现 = 环境变量没设全或没重启；②明文报错 = IdP 那边忘了开令牌加密，或者 IdP 没拿到公钥（去检查 JWKS 网址是否可用）；③IdP 拉不到公钥 = 你 Nginx/Caddy 之类的反向代理把 `/.well-known/` 路径挡了，要放行；④被限流 = 把每分钟次数调大，或让 IdP 缓存久一点（响应头里 `max-age=3600` 就是让缓存 1 小时的意思）。
{% endhint %}

## 相关资源 / Related resources

* [HTTP 请求凭据：使用 OAuth2](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/credentials/httprequest#using-oauth2)：如何设置通用的 OAuth 2.0 凭据。
* [部署环境变量](../basic-configuration/use-environment-variables/deployment.md)：`N8N_ENV_FEAT_OAUTH2_JWE` 和 `N8N_OAUTH_JWE_JWKS_PER_MINUTE` 的参考文档。
* [加密密钥轮换](rotate-encryption-keys.md)：轮换保护 JWE 私钥静态存储的数据加密密钥。
* [JSON Web Encryption（RFC 7516）](https://datatracker.ietf.org/doc/html/rfc7516)：JWE 规范。
