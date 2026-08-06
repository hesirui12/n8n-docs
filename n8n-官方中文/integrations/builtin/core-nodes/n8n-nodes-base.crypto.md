---
title: 加密（Crypto）
description: >-
  n8n 工作流自动化平台中「加密」节点的文档。包含用法说明和示例链接。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: 加密
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.crypto.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.crypto'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.crypto'
layout:
  description:
    visible: false
---

# 加密（Crypto）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：Crypto（加密）节点是做「密码学运算」的，常见需求有：① 把一段文字加密后再存库或传输（Encrypt / Decrypt）；② 生成一串随机字符串当密码或验证码（Generate）；③ 给数据算「指纹」（Hash / Hmac），用来校验数据有没有被改动、有没有发错人；④ 用私钥给数据签名（Sign），证明「这东西确实是我发的」。适合对接需要安全校验的 API。
{% endhint %}

使用「加密」（Crypto）节点在工作流中执行密码学运算。

{% hint style="info" %}
**凭据（Credentials）**

你可以在此处找到此节点的认证信息：[凭据文档](../credentials/crypto.md)。
{% endhint %}

## 操作（Actions）

* 使用口令（passphrase）或私钥 [**解密（Decrypt）**](#decrypt-parameters) 一个字符串
* 使用口令（passphrase）或公钥 [**加密（Encrypt）**](#encrypt-parameters) 一个字符串
* [**生成（Generate）**](#generate-parameters) 一个随机字符串
* 以指定格式 [**哈希（Hash）**](#hash-parameters) 一段文本或文件
* 以指定格式 [**Hmac**](#hmac-parameters) 一段文本或文件
* 使用私钥 [**签名（Sign）**](#sign-parameters) 一个字符串

## 节点参数（Node parameters）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

节点参数取决于你选择的操作。

**Hmac**、**Sign**、**Encrypt** 和 **Decrypt** 操作需要 [Crypto 凭据](../credentials/crypto.md)。每个操作使用它所需要的凭据字段：

* **Hmac** 使用 **Hmac Secret（Hmac 密钥）**。
* **Sign** 使用 **Private Key（私钥）**。
* **Encrypt** 和 **Decrypt** 在对称模式下使用 **Encryption Passphrase（加密口令）**，在非对称模式下使用 **Encryption Public Key（加密公钥）** 和 **Encryption Private Key（加密私钥）**。

{% hint style="info" %}
**小白提示（对称 vs 非对称）**：
- **对称加密（Symmetric）**：加密和解密用同一个「口令（密码）」，像一把钥匙开一把锁。简单，适合自己人之间用。
- **非对称加密（Asymmetric / RSA）**：有一对钥匙——公钥用来加密，私钥用来解密（或反过来）。公钥可以公开给别人，私钥自己藏好。适合互联网上陌生人之间的安全通信。
{% endhint %}

### 解密参数（Decrypt parameters）

* **Mode（模式）**：选择要使用的模式。它必须与加密该值时使用的模式一致。可选择：
	* **Symmetric (Passphrase)（对称-口令）**：使用口令和认证加密算法解密。
	* **Asymmetric (RSA)（非对称-RSA）**：使用 RSA 私钥解密。
* **Cipher（加密算法）**：当你选择 **Symmetric (Passphrase)** 时，选择要使用的认证加密算法。它必须与加密该值时使用的算法一致。可选择：
	* **AES-256-GCM**
	* **AES-192-GCM**
	* **AES-128-GCM**
	* **ChaCha20-Poly1305**
* **Value（值）**：输入 **Encrypt** 操作产生的 base64 字符串。
* **Property Name（属性名）**：输入要把解密后的值写入的属性名称。

{% hint style="info" %}
**大白话（Cipher 是什么）**：Cipher（加密算法）就是「加密用的具体配方」，比如 AES-256-GCM 是一种业界公认很安全的算法。解密时必须和加密时选**同一种**算法，否则解不开。如果加密和解密不在同一个工作流里，记得把算法记下来，两边保持一致。
{% endhint %}

### 加密参数（Encrypt parameters）

* **Mode（模式）**：选择要使用的模式。可选择：
	* **Symmetric (Passphrase)（对称-口令）**：使用口令和认证加密算法加密。
	* **Asymmetric (RSA)（非对称-RSA）**：使用 RSA 公钥加密。
* **Cipher（加密算法）**：当你选择 **Symmetric (Passphrase)** 时，选择要使用的认证加密算法。解密该值时必须选择同一种算法。可选择：
	* **AES-256-GCM**
	* **AES-192-GCM**
	* **AES-128-GCM**
	* **ChaCha20-Poly1305**
* **Value（值）**：输入你想要加密的值。
* **Property Name（属性名）**：输入要把加密后的值写入的属性名称。节点会以 base64 字符串的形式写出结果。

{% hint style="info" %}
**RSA 负载大小（RSA payload size）**

非对称（RSA）模式只能加密较小的数据，使用 2048 位密钥时大约 190 字节。更大的数据请使用对称模式。

{% hint style="info" %}
**大白话（为什么 RSA 有大小限制）**：RSA 算法本身的设计决定了它能加密的内容长度有限（这里大约 190 字节，大概就是一两行短文本）。如果你的数据比较长（比如一篇文章、一份 JSON），就选对称模式（Symmetric），它没有这个限制。
{% endhint %}
{% endhint %}

### 生成参数（Generate parameters）

* **Property Name（属性名）**：输入要把随机字符串写入的属性名称。
* **Type（类型）**：选择用来生成字符串的编码类型。可选择：
	* **ASCII**：最基础的英文字符集（数字、字母、符号）。
	* **BASE64**：Base64 编码（字母+数字+符号混合）。
	* **HEX**：十六进制（只有 0-9 和 a-f）。
	* **UUID**：全球唯一的随机标识符（形如 `123e4567-e89b-12d3-a456-426614174000`）。
* **Length（长度）**：当你选择 **ASCII**、**BASE64** 或 **HEX** 时，输入生成字符串的长度。默认是 `32`。

{% hint style="info" %}
**小白提示（怎么选类型）**：只是想生成一串高强度随机密码，选 **ASCII** 或 **BASE64**；需要的是一个「唯一编号」来标识某条记录，选 **UUID**；需要对接老系统（只要 0-9、a-f），选 **HEX**。
{% endhint %}

### 哈希参数（Hash parameters）

* **Type（类型）**：选择要使用的哈希类型。可选择：
	* **MD5**
	* **SHA256**
	* **SHA3-256**
	* **SHA3-384**
	* **SHA3-512**
	* **SHA384**
	* **SHA512**
* **Binary File（二进制文件）**：如果你想哈希的数据来自二进制文件，请打开此参数。
	* **Value（值）**：如果你关闭 **Binary File**，输入你想要哈希的值。
	* **Binary Property Name（二进制属性名）**：如果你打开 **Binary File**，输入包含要哈希数据的二进制属性的名称。
* **Property Name（属性名）**：输入要把哈希值写入的属性名称。
* **Encoding（编码）**：选择要使用的编码类型。可选择：
	* **BASE64**
	* **HEX**

{% hint style="info" %}
**大白话（哈希是什么）**：哈希（Hash）就是给任意内容算出一串固定长度的「指纹」：内容一变，指纹就变；同样的内容，指纹永远一样。常见用途：校验文件有没有被篡改、给密码存「指纹版」而不是明文。**SHA256** 是目前最常用的选择，MD5 已不够安全，尽量别用于安全场景。
{% endhint %}

### Hmac 参数（Hmac parameters）

* **Binary File（二进制文件）**：如果你想为二进制文件里的数据创建 Hmac，请打开此参数。
	* **Value（值）**：如果你关闭 **Binary File**，输入你想要创建 Hmac 的值。
	* **Binary Property Name（二进制属性名）**：如果你打开 **Binary File**，输入包含要创建 Hmac 数据的二进制属性的名称。
* **Type（类型）**：选择要使用的哈希类型。可选择：
	* **MD5**
	* **SHA256**
	* **SHA3-256**
	* **SHA3-384**
	* **SHA3-512**
	* **SHA384**
	* **SHA512**
* **Property Name（属性名）**：输入要把 Hmac 写入的属性名称。
* **Encoding（编码）**：选择要使用的编码类型。可选择：
	* **BASE64**
	* **HEX**

此操作使用你的 [Crypto 凭据](../credentials/crypto.md) 中的 **Hmac Secret（Hmac 密钥）**。

{% hint style="info" %}
**大白话（Hmac 和 Hash 的区别）**：普通哈希任何人都能算；Hmac 是「带密钥的哈希」——必须同时知道数据和密钥才能算出来。很多 API（比如支付、短信平台）用 Hmac 校验请求是不是你发的：你拿密钥对请求内容算个 Hmac 附在请求里，服务端拿同一个密钥再算一遍，对得上就说明请求没被篡改、确实是你的。
{% endhint %}

### 签名参数（Sign parameters）

* **Value（值）**：输入你想要签名的值。
* **Property Name（属性名）**：输入要把签名后的值写入的属性名称。
* **Algorithm Name or ID（算法名称或 ID）**：从列表中选择一个算法名称，或者使用[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)指定一个 ID。
* **Encoding（编码）**：选择要使用的编码类型。可选择：
	* **BASE64**
	* **HEX**

此操作使用你的 [Crypto 凭据](../credentials/crypto.md) 中的 **Private Key（私钥）**。

{% hint style="info" %}
**大白话（签名是什么）**：签名（Sign）相当于「电子印章」：用你的私钥给一段数据盖上章，别人用对应的公钥就能验证「这确实是你的数据，而且没被改过」。常用于对接需要验签的 API（比如微信支付回调、云服务 API）。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 Crypto 集成模板](https://n8n.io/integrations/crypto) 或[搜索所有模板](https://n8n.io/workflows/)
