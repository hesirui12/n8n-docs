---
contentType: reference
nodeTitle: Error handling
originalFilePath: integrations/creating-nodes/build/reference/error-handling.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/build/reference/error-handling'
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/error-handling
layout:
  description:
    visible: false
---

# n8n 节点中的错误处理（Error handling in n8n nodes）

正确的错误处理对于创建健壮的 n8n 节点至关重要——当事情出错时，它能给用户提供清晰的反馈。n8n 提供了两个专门的错误类（error class），用于处理节点实现中的不同类型故障：

- [**`NodeApiError`**](#nodeapierror)：用于 API 相关的错误和外部服务故障
- [**`NodeOperationError`**](#nodeoperationerror)：用于操作错误、校验失败和配置问题

{% hint style="info" %}
**小白提示**：简单记——**「外面的错」用 `NodeApiError`，「里面的错」用 `NodeOperationError`**。调外部接口（网络断了、对方返回 404、密钥不对）属于前者；你自己的逻辑问题（用户邮箱格式不对、缺参数、数据转换失败）属于后者。分类的意义在于：n8n 会据此向用户展示更准确的错误信息。
{% endhint %}

## NodeApiError

在处理外部 API 调用和 HTTP 请求时使用 `NodeApiError`。这个错误类专为处理 API 响应错误而设计，并提供了增强功能来解析和呈现与 API 相关的故障，例如：

* HTTP 请求失败
* 外部 API 错误
* 认证/授权失败
* 限流（rate limiting）错误
* 服务不可用错误

使用以下模式初始化新的 `NodeApiError` 实例：

```typescript
new NodeApiError(node: INode, errorResponse: JsonObject, options?: NodeApiErrorOptions)
```

（参数说明：`node` 是当前节点实例（用 `this.getNode()` 获取）；`errorResponse` 是捕获到的错误对象；`options` 是可选的附加配置，比如自定义 `message`（主信息）和 `description`（补充说明）。）

### 常见用法模式（Common usage patterns）

对于基本的 API 请求失败，捕获错误并将其包装在 `NodeApiError` 中：

```typescript
try {
	const response = await this.helpers.httpRequestWithAuthentication.call(
		this,
		credentialType,
		options
	);
	return response;
} catch (error) {
	throw new NodeApiError(this.getNode(), error as JsonObject);
}
```

（用 `try/catch` 包住请求，一旦出错就把原始错误转换成 n8n 能识别、能友好展示的 `NodeApiError` 抛出去。）

使用自定义消息处理特定的 HTTP 状态码：

```typescript
try {
	const response = await this.helpers.httpRequestWithAuthentication.call(
		this,
		credentialType,
		options
	);
	return response;
} catch (error) {
	if (error.httpCode === "404") {
		const resource = this.getNodeParameter("resource", 0);
		const errorOptions = {
			message: `${
				resource.charAt(0).toUpperCase() + resource.slice(1)
			} not found`,
			description:
				"The requested resource could not be found. Please check your input parameters.",
		};
		throw new NodeApiError(
			this.getNode(),
			error as JsonObject,
			errorOptions
		);
	}

	if (error.httpCode === "401") {
		throw new NodeApiError(this.getNode(), error as JsonObject, {
			message: "Authentication failed",
			description: "Please check your credentials and try again.",
		});
	}

	throw new NodeApiError(this.getNode(), error as JsonObject);
}
```

（这段代码根据不同的 HTTP 状态码给出不同提示：404 表示「资源未找到，请检查输入参数」，401 表示「认证失败，请检查凭据」。注意 `error.httpCode` 是错误对象上的状态码字段；`resource.charAt(0).toUpperCase() + resource.slice(1)` 是把资源名首字母大写的字符串处理。）

## NodeOperationError

在以下情况使用 `NodeOperationError`：

* 操作错误
* 校验失败
* 与外部 API 调用无关的配置问题
* 输入校验错误
* 缺少必填参数
* 数据转换错误
* 工作流逻辑错误

使用以下模式初始化新的 `NodeOperationError` 实例：

```typescript
new NodeOperationError(node: INode, error: Error | string | JsonObject, options?: NodeOperationErrorOptions)
```

（与 `NodeApiError` 不同，它的第二个参数可以是一个 `Error` 对象、字符串或普通对象——也就是说你可以在不依赖真实错误对象的情况下直接构造它，例如传入 "Invalid email address" 这样的字符串。）

### 常见用法模式（Common usage patterns）

使用 `NodeOperationError` 校验用户输入：

```typescript
const email = this.getNodeParameter("email", itemIndex);

if (email.indexOf("@") === -1) {
	const description = `The email address '${email}' in the 'email' field isn't valid`;
	throw new NodeOperationError(this.getNode(), "Invalid email address", {
		description,
		itemIndex, // for multiple items, this will link the error to the specific item
	});
}
```

（先读取用户输入的邮箱，检查里面是否包含 `@` 字符；如果没有，就抛出一个带说明的 `NodeOperationError`。`itemIndex` 参数在有多条数据时会把错误关联到具体某一条数据上。）

处理多个数据项时，请包含数据项索引，以获得更好的错误上下文：

```typescript
for (let i = 0; i < items.length; i++) {
	try {
		// Process item
		const result = await processItem(items[i]);
		returnData.push(result);
	} catch (error) {
		if (this.continueOnFail()) {
			returnData.push({
				json: { error: error.message },
				pairedItem: { item: i },
			});
			continue;
		}

		throw new NodeOperationError(this.getNode(), error as Error, {
			description: error.description,
			itemIndex: i,
		});
	}
}
```

（这个循环展示了完整的错误处理策略：每条数据分别处理；如果这条数据出错，且节点开启了「出错继续」（`continueOnFail`），就把错误信息作为一条输出数据（并带上 `pairedItem` 配对信息指出它对应第几条输入），继续处理下一条；否则，抛出一个带 `itemIndex` 的 `NodeOperationError`，让用户能定位到是第几条数据出的问题。）
