---
contentType: reference
nodeTitle: Credentials files
originalFilePath: integrations/creating-nodes/build/reference/credentials-files.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/credentials-files
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/credentials-files
layout:
  description:
    visible: false
---

# 凭据文件（Credentials file）

凭据文件定义节点的授权方法。这个文件中的设置会影响 n8n 在 **Credentials（凭据）** 弹窗中显示什么，并且必须反映你所连接服务的认证需求。

在凭据文件中，你可以使用所有 [n8n UI 元素](node-ui-elements.md)。n8n 会使用加密密钥对通过凭据存储的数据进行加密。

{% hint style="info" %}
**小白提示**：凭据就是「钥匙」。你的节点要调用某个服务的 API，服务方会要求你出示密钥（比如 API Key、Token）。凭据文件就是定义「用户应该填哪些钥匙、n8n 怎么把钥匙附加到请求上」的地方。用户填写的密钥会被 n8n 加密保存，别人看不到明文。
{% endhint %}

## 凭据文件的结构（Structure of the credentials file）

凭据文件遵循以下基本结构：

1. 导入（import）语句
2. 为凭据创建一个类（class）
3. 在类内部，定义控制节点认证的属性

### 结构概要（Outline structure）

```js
import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ExampleNode implements ICredentialType {
	name = 'exampleNodeApi';
	displayName = 'Example Node API';
	documentationUrl = '';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
    		// Can be body, header, qs or auth
			qs: {
        		// Use the value from `apiKey` above
				'api_key': '={{$credentials.apiKey}}'
			}

		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '/bearer',
		},
	};
}
```

（结构解读：`properties` 定义用户要填的字段（这里是 API Key）；`authenticate` 定义如何把密钥附加到请求上（注释提示：可以是 `body`、`header`、`qs` 或 `auth` 四种位置之一）；`test` 定义验证凭据是否有效的测试请求。）

## 参数（Parameters）

### `name`

字符串。对象的内部名称。用于在节点的其他地方引用它。

### `displayName`

字符串。n8n 在图形界面（GUI）中使用的名称。

### `documentationUrl`

字符串。指向你的凭据文档的 URL。

### `properties`

每个对象包含：

* `displayName`：n8n 在图形界面中使用的名称。
* `name`：对象的内部名称。用于在节点的其他地方引用它。
* `type`：期望的数据类型，例如 `string`。
* `default`：n8n 应用来测试凭据的 URL。

### `authenticate`

* `authenticate`：对象。包含告诉 n8n 如何把认证数据作为 API 请求的一部分注入的对象。

#### `type`

字符串。如果你使用的认证方法是通过请求头（header）、请求体（body）或查询字符串（query string）发送数据，请把它设置为 `'generic'`。

#### `properties`

对象。定义认证方法。可选值有：

* `body`：对象。在请求体中发送认证数据。可以包含嵌套对象。
```typescript
authenticate: IAuthenticateGeneric = {
	type: 'generic',
	properties: {
		body: {
			username: '={{$credentials.username}}',
			password: '={{$credentials.password}}',
		},
	},
};
``` 

* `header`：对象。在请求头中发送认证数据。
```typescript
authenticate: IAuthenticateGeneric = {
	type: 'generic',
	properties: {
		header: {
			Authorization: '=Bearer {{$credentials.authToken}}',
		},
	},
};
``` 

* `qs`：对象。代表「query string（查询字符串）」。在请求的查询字符串中发送认证数据。
```typescript
authenticate: IAuthenticateGeneric = {
	type: 'generic',
	properties: {
		qs: {
			token: '={{$credentials.token}}',
		},
	},
};
``` 

* `auth`：对象。用于基本认证（Basic Auth）。键名必须使用 `username` 和 `password`。
```typescript
authenticate: IAuthenticateGeneric = {
	type: 'generic',
	properties: {
		auth: {
			username: '={{$credentials.username}}',
			password: '={{$credentials.password}}',
		},
	},
};
```

{% hint style="info" %}
**小白总结**：四种注入位置怎么选？①请求体（`body`）：密钥放在 POST 的数据里（适合 JSON API）；②请求头（`header`）：密钥放在 HTTP 头里（最常见，比如 `Authorization: Bearer xxx`）；③查询字符串（`qs`）：密钥作为 URL 参数（比如 `?api_key=xxx`，NASA 就是这种）；④`auth`：用户名+密码的基本认证。记住口诀——**服务方文档说密钥放哪，你就用哪种**。
{% endhint %}

### `test`

提供一个 `request` 对象，包含一个 URL 和认证类型，n8n 可以用它来测试凭据。

```typescript
test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '/bearer',
		},
	};
```

（当用户在凭据弹窗里点击「测试（Test）」按钮时，n8n 会向这个地址发一个请求：如果能成功返回，说明凭据有效；如果返回错误，说明密钥有问题。注意 `baseURL` 里的 `={{$credentials?.domain}}` 是一个表达式，会取用户填写的 `domain` 字段的值。）
