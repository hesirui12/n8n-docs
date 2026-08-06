---
contentType: reference
nodeTitle: HTTP request helpers
originalFilePath: integrations/creating-nodes/build/reference/http-helpers.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/build/reference/http-helpers'
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/http-request-helpers
layout:
  description:
    visible: false
---

# 节点构建者的 HTTP 请求辅助方法（HTTP request helper for node builders）

n8n 提供了一个灵活的发 HTTP 请求的辅助方法（helper），它把大部分复杂性都抽象掉了。

{% hint style="info" %}
**仅限编程式风格**

本文档中的信息适用于使用编程式（programmatic）风格构建节点。它不适用于声明式（declarative）风格节点。
{% endhint %}

{% hint style="info" %}
**小白提示**：编程式节点要在代码里自己发 HTTP 请求（比如 GET、POST）。与其自己用各种底层库去处理「URL 拼接、请求头、超时、错误格式」这些琐事，n8n 直接给了你一个现成的 `this.helpers.httpRequest(...)`，一行就能把请求发出去。这一页就是讲它的用法和每个配置项是什么意思。
{% endhint %}

## 用法（Usage）

在 `execute` 函数内部调用这个辅助方法：

```typescript
// If no auth needed
const response = await this.helpers.httpRequest(options);

// If auth needed
const response = await this.helpers.httpRequestWithAuthentication.call(
	this, 
	'credentialTypeName', // For example: pipedriveApi
	options,
);
```

（第一行：不需要认证时直接用 `httpRequest`。第二行：需要认证时用 `httpRequestWithAuthentication`，它会自动把你的凭据附加到请求上；第一个参数传凭据类型名，例如 `pipedriveApi`；注意它要用 `.call(this, ...)` 的形式调用。）

`options` 是一个对象：

```typescript
{
	url: string;
	headers?: object;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD';
	body?: FormData | Array | string | number | object | Buffer | URLSearchParams;
	qs?: object;
	arrayFormat?: 'indices' | 'brackets' | 'repeat' | 'comma';
	auth?: {
		username: string,
		password: string,
	};
	disableFollowRedirect?: boolean;
	encoding?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
	skipSslCertificateValidation?: boolean;
	returnFullResponse?: boolean;
	proxy?: {
		host: string;
		port: string | number;
		auth?: {
			username: string;
			password: string;
		},
		protocol?: string;
	};
	timeout?: number;
	json?: boolean;
}	
```

`url` 是必填的。其他字段都是可选的。默认方法（method）是 `GET`。

关于各字段的一些说明：

- `body`：你可以用普通的 JavaScript 对象作为 JSON 请求体，用 `Buffer`（缓冲区）做文件上传，用 `FormData` 实例做 `multipart/form-data`（多部分表单数据），用 `URLSearchParams` 做 `application/x-www-form-urlencoded`（URL 编码表单）。
- `headers`：键值对。
	* 如果 `body` 是 `FormData` 的实例，n8n 会自动添加 `content-type: multipart/form-data`。
	* 如果 `body` 是 `URLSearchParams` 的实例，n8n 会自动添加 `content-type: application/x-www-form-urlencoded`。
	* 要覆盖这种行为，可以手动设置一个 `content-type` 请求头。
- `arrayFormat`：如果你的查询字符串包含一个数据数组，比如 `const qs = {IDs: [15,17]}`，`arrayFormat` 的值决定 n8n 如何格式化它。
	* `indices`（默认）：`{ a: ['b', 'c'] }` 格式化为 `a[0]=b&a[1]=c`
	* `brackets`：`{ a: ['b', 'c'] }` 格式化为 `a[]=b&a[]=c`
	* `repeat`：`{ a: ['b', 'c'] }` 格式化为 `a=b&a=c`
	* `comma`：`{ a: ['b', 'c'] }` 格式化为 `a=b,c`
- `auth`：用于基本认证（Basic auth）。提供 `username` 和 `password`。n8n 推荐省略这个字段，改用 `helpers.httpRequestWithAuthentication(...)`。
- `disableFollowRedirect`：默认情况下，n8n 会跟随重定向（redirects）。你可以把它设置为 `true` 来阻止这种行为。
- `skipSslCertificateValidation`：用于调用没有正确证书的 HTTPS 服务（例如自签名证书的测试环境）。
- `returnFullResponse`：不是只返回响应体（body），而是返回一个包含更多数据的对象，格式为：`{body: body, headers: object, statusCode: 200, statusMessage: 'OK'}`。
- `encoding`：n8n 可以自动检测内容类型，但你可以指定 `arrayBuffer` 来接收一个可以读取和操作的 `Buffer`。

## 示例（Example）

关于示例，请参考 [Mattermost 节点](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mattermost/v1/MattermostV1.node.ts)。

## 旧辅助方法的弃用（Deprecation of the previous helper）

以前使用 `this.helpers.request(options)` 的辅助方法实现使用并暴露了 `request-promise` 库。这个库在版本 1 中已被移除。

为了最大限度地减少不兼容性，n8n 做了一个透明的转换，改用了另一个叫 `Axios` 的库。

如果你遇到问题，请在[社区论坛（Community Forums）](https://community.n8n.io/)或 [GitHub](https://github.com/n8n-io/n8n/issues) 上报告。

## 迁移到新辅助方法的指南（Migration guide to the new helper）

新的辅助方法更健壮、与库无关（library agnostic），也更容易使用。

新节点都应该使用新的辅助方法。你应该认真考虑把现有的自定义节点迁移到新辅助方法。迁移时主要的注意事项如下：

- 接受 `url`，不接受 `uri`。
- `encoding: null` 现在必须写成 `encoding: arrayBuffer`。
- `rejectUnauthorized: false` 现在是 `skipSslCertificateValidation: true`。
- 根据 `content-type` 请求头使用 `body`，以明确请求负载（payload）的格式。
- `resolveWithFullResponse` 现在是 `returnFullResponse`，行为类似。

{% hint style="info" %}
**小白总结**：如果你是在旧文档/旧教程里看到 `this.helpers.request(...)` 的写法，请把它替换成新写法——去掉 `uri` 改用 `url`，并把上面列出的几个旧选项名改成新的。新辅助方法更稳定，也是 n8n 唯一继续支持的。
{% endhint %}
