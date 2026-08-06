---
contentType: tutorial
nodeTitle: 'Tutorial: Build a programmatic-style node'
originalFilePath: integrations/creating-nodes/build/programmatic-style-node.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/build/programmatic-style-node'
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/tutorial-build-a-programmatic-style-node
layout:
  description:
    visible: false
---

# 构建编程式（programmatic-style）节点

本教程带你一步步构建一个**编程式（programmatic-style）**节点。开始之前，请先确认这种节点风格确实是你需要的。更多信息请参考[选择你的节点构建方式](../plan-your-node/choose-a-node-building-style.md)。

{% hint style="info" %}
**小白先看：什么是「编程式节点」？**

「编程式」的意思是：你要**自己写代码**来处理数据、构造请求、处理响应。n8n 只负责在你的 `execute()` 方法里把「用户填的参数」和「上游传来的数据」交给你，剩下的逻辑（发什么请求、怎么拼 URL、怎么处理错误）全靠你写。它灵活度最高，适合复杂的业务逻辑，但代码量也更大。
{% endhint %}

## 前置条件（Prerequisites）

你的开发机器上需要安装以下内容：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7rCdLiI9qnTIK3Afb3NX/" %}

{% hint style="info" %}
**上面这一行是什么？** 这是 n8n 官方文档的「可复用内容块」引用，在线文档渲染时会自动展开成通用说明（通常是环境要求，比如 Node.js 和 npm）。本地无法展开，原样保留。具体装什么可以看本目录下的[搭建开发环境](set-up-your-development-environment.md)。
{% endhint %}

你还需要对以下内容有一定了解：

- JavaScript/TypeScript（编程语言）
- REST APIs（接口调用方式）
- git（代码版本管理）
- n8n 中的表达式（Expressions）[^1]

## 构建你的节点（Build your node）

在这一部分，你会克隆 n8n 的节点起步仓库，并构建一个集成 [SendGrid](https://sendgrid.com/)（邮件发送服务）的节点。你要创建的节点会实现 SendGrid 的一项功能：创建联系人（contact）。

{% hint style="info" %}
**已有同名节点**

n8n 内置了一个 SendGrid 节点。为了避免和它冲突，你要给自己这个版本起一个不同的名字。
{% endhint %}

### 第 1 步：搭建项目（Set up the project）

n8n 为节点开发提供了一个起步仓库。使用它，可以确保你拥有所有必要的依赖，它还自带一个代码检查器（linter）。

克隆仓库并进入目录：

1. 从这个模板仓库[生成一个新仓库](https://github.com/n8n-io/n8n-nodes-starter/generate)。
2. 克隆你的新仓库：
		```shell
		git clone https://github.com/<your-organization>/<your-repo-name>.git n8n-nodes-friendgrid
		cd n8n-nodes-friendgrid
		```
		（把 `<your-organization>` 换成你的组织名/用户名，`<your-repo-name>` 换成你的仓库名，然后 `cd` 进入项目目录。）

起步模板里包含示例节点和示例凭据。请删除以下目录和文件：

* `nodes/Example`（示例节点目录）
* `nodes/GithubIssues`（GitHub Issues 示例节点目录）
* `credentials/GithubIssuesApi.credentials.ts`（示例凭据文件）
* `credentials/GithubIssuesOAuth2Api.credentials.ts`（示例 OAuth2 凭据文件）

然后创建以下目录和文件：

`nodes/FriendGrid`  
`nodes/FriendGrid/FriendGrid.node.json`  
`nodes/FriendGrid/FriendGrid.node.ts`  
`credentials/FriendGridApi.credentials.ts`  

这些是任何节点都必需的几个关键文件。关于必需文件及推荐的文件组织方式，请参考[节点文件结构](../plan-your-node/choose-node-file-structure.md)。

接下来安装项目依赖：

```shell
npm i
```

（`npm i` 是 `npm install` 的简写，会根据 `package.json` 下载项目需要的所有依赖包。）

### 第 2 步：添加图标（Add an icon）

从[这里](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/SendGrid/sendGrid.svg)下载 SendGrid 的 SVG 标志，把它保存为 `friendGrid.svg`，放到 `nodes/FriendGrid/` 目录里。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/dGOXJYk0OQgOLlRpyJnn/" %}

{% hint style="info" %}
**上面这行是什么？** 这是官方文档的「可复用内容块」，在线浏览时会自动展开（内容大概是「如何正确设置图标」的通用说明）。本地无法展开，原样保留即可。
{% endhint %}

### 第 3 步：在基础文件中定义节点（Define the node in the base file）

每个节点都必须有一个**基础文件（base file）**。关于基础文件参数的详细信息，请参考[节点基础文件](reference/base-files/README.md)。

在这个示例中，文件是 `FriendGrid.node.ts`。为了让教程保持简短，你会把节点的所有功能都放在这一个文件里。构建更复杂的节点时，你应该考虑把功能拆分到多个模块中。更多信息请参考[节点文件结构](../plan-your-node/choose-node-file-structure.md)。

#### 第 3.1 步：导入语句（Imports）

首先添加导入（import）语句：

```typescript
import type {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
```

（这里从 `n8n-workflow` 包导入了一批类型和常量：`IDataObject` 是通用的键值对对象类型；`IExecuteFunctions` 是 `execute()` 方法的上下文类型；`IHttpRequestOptions` 是 HTTP 请求选项的类型；`INodeExecutionData` 是节点输出数据的类型；`INodeType`/`INodeTypeDescription` 用来定义节点结构；`NodeConnectionTypes` 声明连接类型。）

#### 第 3.2 步：创建主类（Create the main class）

节点必须导出一个实现了 `INodeType` 的类。这个类里必须包含一个 `description` 对象，而这个对象里又包含 `properties` 数组。

{% hint style="info" %}
**类名和文件名必须一致**

请确保类名和文件名匹配。例如，类名是 `FriendGrid`，文件名就必须是 `FriendGrid.node.ts`。
{% endhint %}

```typescript
export class FriendGrid implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		properties: [
			// Resources and operations will go here
		],
	};
	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	}
}
```

（注意：编程式节点比声明式节点多了一个 `execute()` 方法——这就是你写核心逻辑的地方。`async` 表示它是异步方法，`Promise<INodeExecutionData[][]>` 表示它的返回值是「二维数组」：外层数组代表多条输出，内层数组代表每条输出包含的多个数据项。）

#### 第 3.3 步：添加节点基本信息（Add node details）

所有编程式节点都需要一些基本参数，比如显示名称和图标。请把以下内容添加到 `description` 中：

```typescript
displayName: 'FriendGrid',
name: 'friendGrid',
icon: 'file:friendGrid.svg',
group: ['transform'],
version: 1,
description: 'Consume SendGrid API',
defaults: {
	name: 'FriendGrid',
},
inputs: [NodeConnectionTypes.Main],
outputs: [NodeConnectionTypes.Main],
usableAsTool: true,
credentials: [
	{
		name: 'friendGridApi',
		required: true,
	},
],
```

（逐项解释：`displayName` 是界面上显示的名字；`name` 是内部唯一标识；`icon` 指向图标文件；`group` 是行为分组；`version` 是版本号；`description` 是简短描述；`defaults.name` 是画布上的默认名称；`inputs`/`outputs` 声明输入端和输出端；`usableAsTool` 表示可被 AI 当工具使用；`credentials` 声明所需的凭据。）

n8n 会使用 `description` 中设置的某些属性来在编辑器界面（Editor UI）中渲染这个节点。这些属性是 `displayName`、`icon` 和 `description`。

#### 第 3.4 步：添加资源（Add the resource）

资源（resource）对象定义了节点所使用的 API 资源。在本教程中，你要创建一个访问 SendGrid 一个 API 端点的节点：`/v3/marketing/contacts`。这意味着你需要为这个端点定义一个资源。请用资源对象更新 `properties` 数组：

```typescript
{
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	options: [
		{
			name: 'Contact',
			value: 'contact',
		},
	],
	default: 'contact',
	noDataExpression: true,
	required: true,
	description: 'Create a new contact',
},
```

`type` 决定了 n8n 为该资源显示哪种 UI 元素，并告诉 n8n 期望从用户那里得到什么类型的数据。`options` 会让 n8n 添加一个下拉框，让用户从中选择一个选项。更多信息请参考[节点 UI 元素](reference/node-ui-elements.md)。

#### 第 3.5 步：添加操作（Add operations）

操作（operations）对象定义了你可以用这个资源做什么。它通常对应 REST API 的动词（GET、POST 等）。在本教程中，只有一个操作：创建联系人。它有一个必填字段：用户要创建的联系人的邮箱地址。

请在 `properties` 数组的 `resource` 对象之后，添加以下内容：

```typescript
{
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	displayOptions: {
		show: {
			resource: [
				'contact',
			],
		},
	},
	options: [
		{
			name: 'Create',
			value: 'create',
			description: 'Create a contact',
			action: 'Create a contact',
		},
	],
	default: 'create',
	noDataExpression: true,
},
{
	displayName: 'Email',
	name: 'email',
	type: 'string',
	required: true,
	displayOptions: {
		show: {
			operation: [
				'create',
			],
			resource: [
				'contact',
			],
		},
	},
	default:'',
	placeholder: 'name@email.com',
	description:'Primary email for the contact',
},
```

（`displayOptions.show` 是「条件显示」：只有选中了 `contact` 资源和 `create` 操作时，邮箱输入框才会出现。`placeholder` 是输入框里显示的灰色提示文字，这里提示用户输入邮箱格式。）

#### 第 3.6 步：添加可选字段（Add optional fields）

大多数 API（包括本示例用到的 SendGrid API）都有一些可选字段，你可以用它们来细化请求内容。

为了避免给用户造成困扰，n8n 会在界面中把这些字段显示在 **Additional Fields（附加字段）** 之下。

本教程中，你会添加两个附加字段，让用户可以输入联系人的名字和姓氏。请把以下内容添加到 `properties` 数组中：

```typescript
{
	displayName: 'Additional Fields',
	name: 'additionalFields',
	type: 'collection',
	placeholder: 'Add Field',
	default: {},
	displayOptions: {
		show: {
			resource: [
				'contact',
			],
			operation: [
				'create',
			],
		},
	},
	options: [
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
		},
	],
},
```

### 第 4 步：添加 execute 方法（Add the execute method）

你已经设置好了节点的界面和基本信息。现在是时候把节点界面映射到 API 请求上，让节点真正干活了。

`execute` 方法在节点每次运行时都会执行。在这个方法里，你可以访问输入的数据项（input items），以及用户在界面上设置的参数（包括凭据）。

请把以下内容添加到 `FriendGrid.node.ts` 的 `execute` 方法中：

```typescript
// Handle data coming from previous nodes
const items = this.getInputData();
let responseData;
const returnData: INodeExecutionData[] = [];
const resource = this.getNodeParameter('resource', 0);
const operation = this.getNodeParameter('operation', 0);

// For each item, make an API call to create a contact
for (let i = 0; i < items.length; i++) {
	try {
		if (resource === 'contact') {
			if (operation === 'create') {
				// Get email input
				const email = this.getNodeParameter('email', i);
				// Get additional fields input
				const additionalFields = this.getNodeParameter('additionalFields', i);
				const data: IDataObject = {
					email,
				};

				Object.assign(data, additionalFields);

				// Make HTTP request according to https://sendgrid.com/docs/api-reference/
				const options: IHttpRequestOptions = {
					headers: {
						'Accept': 'application/json',
					},
					method: 'PUT',
					body: {
						contacts: [
							data,
						],
					},
					url: 'https://api.sendgrid.com/v3/marketing/contacts',
					json: true,
				};
				responseData = await this.helpers.httpRequestWithAuthentication.call(this, 'friendGridApi', options);
				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject),
					{ itemData: { item: i } },
				);

				returnData.push.apply(returnData, executionData);
			}
		}
	} catch (error) {
		if (this.continueOnFail()) {
			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray({ error: error.message }),
				{ itemData: { item: i } },
			);
			returnData.push.apply(returnData, executionData);
			continue;
		}
		throw error;
	}
}
return [returnData];
```

（这段代码的流程：①`this.getInputData()` 拿到上游节点传来的所有数据项；②用 `this.getNodeParameter()` 读取用户在界面上选的资源和操作；③用一个 `for` 循环逐个处理每个数据项，为每项数据调用一次 SendGrid 的「创建联系人」接口（`this.helpers.httpRequestWithAuthentication` 会自动附加上凭据信息）；④把每个响应转成 n8n 标准数据格式（`constructExecutionMetaData` 会同时记录「这个输出对应哪个输入项」，这就是配对信息）；⑤如果某个数据项处理出错，且节点开启了「出错继续」选项（`continueOnFail`），就把错误信息作为输出并继续处理下一项，否则直接抛出错误。）

请注意这段代码中的几行：

```typescript
const items = this.getInputData();
... 
for (let i = 0; i < items.length; i++) {
	...
	const email = this.getNodeParameter('email', i);
	...
}
```

用户可以通过两种方式提供数据：

* 直接在节点字段里输入
* 从工作流中更早的节点映射数据过来

`getInputData()` 以及后面的循环，让节点能够处理「数据来自上一个节点」的情况，包括支持多个输入。这意味着，例如，如果上一个节点输出了五个人的联系信息，你的 FriendGrid 节点就可以创建五个联系人。

### 第 5 步：设置身份认证（Set up authentication）

SendGrid API 要求用户使用 API 密钥（API Key）进行身份认证。

请把以下内容添加到 `FriendGridApi.credentials.ts`：

```typescript
import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class FriendGridApi implements ICredentialType {
	name = 'friendGridApi';
	displayName = 'FriendGrid API';
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
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.sendgrid.com/v3',
			url: '/marketing/contacts',
		},
	};
}

```

（注意：这里的凭据 `name` 是 `friendGridApi`，与节点基础文件 `credentials` 数组里的 `name: 'friendGridApi'` 对应。`authenticate` 通过请求头 `Authorization: Bearer <key>` 的方式附加密钥；`=Bearer ...` 开头的 `=` 表示这是一个表达式，`{{$credentials.apiKey}}` 引用用户在界面填的密钥。）

关于凭据文件及其选项的更多信息，请参考[凭据文件（Credentials file）](reference/credentials-files.md)。

### 第 6 步：添加节点元数据（Add node metadata）

关于节点的元数据（metadata）放在节点根目录的 JSON 文件里。n8n 称这个文件为 codex 文件。在本示例中，这个文件是 `FriendGrid.node.json`。

请把以下代码添加到该 JSON 文件中：

```json
{
	"node": "n8n-nodes-friendgrid",
	"nodeVersion": "1.0",
	"codexVersion": "1.0",
	"categories": [
		"Miscellaneous"
	],
	"resources": {
		"credentialDocumentation": [
			{
				"url": ""
			}
		],
		"primaryDocumentation": [
			{
				"url": ""
			}
		]
	}
}
```

关于这些参数的更多信息，请参考[节点 codex 文件](reference/codex-files.md)。

### 第 7 步：更新 npm 包信息（Update the npm package details）

你的 npm 包信息位于项目根目录的 `package.json` 文件中。**关键的一步是**在其中加入 `n8n` 对象，用来链接凭据文件和节点基础文件。请更新该文件，加入以下信息：

```json
{
	// All node names must start with "n8n-nodes-"
	"name": "n8n-nodes-friendgrid",
	"version": "0.1.0",
	"description": "n8n node to create contacts in SendGrid",
	"keywords": [
		// This keyword is required for community nodes
		"n8n-community-node-package"
	],
	"license": "MIT",
	"homepage": "https://n8n.io",
	"author": {
		"name": "Test",
		"email": "test@example.com"
	},
	"repository": {
		"type": "git",
		// Change the git remote to your own repository
		// Add the new URL here
		"url": "git+<your-repo-url>"
	},
	"main": "index.js",
	"scripts": {
		// don't change
	},
	"files": [
		"dist"
	],
	// Link the credentials and node
	"n8n": {
		"n8nNodesApiVersion": 1,
		"credentials": [
			"dist/credentials/FriendGridApi.credentials.js"
		],
		"nodes": [
			"dist/nodes/FriendGrid/FriendGrid.node.js"
		]
	},
	"devDependencies": {
		// don't change
	},
	"peerDependencies": {
		// don't change
	}
}
```

你需要更新 `package.json`，把它换成你自己的信息，比如你的名字和仓库 URL。关于 npm `package.json` 文件的更多信息，请参考 [npm 的 package.json 文档](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)。

## 测试你的节点（Test your node）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/WlCAEDxY4EZLDV85eB8C/" %}

{% hint style="info" %}
**上面这行是什么？** 官方可复用内容块，在线渲染时自动展开（内容是「如何本地运行并测试节点」的通用步骤）。本地原样保留。
{% endhint %}

## 下一步（Next steps）

* [部署你的节点](../deploy-your-node/README.md)。
* 查看一个编程式节点的示例：n8n 的 [Mattermost 节点](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Mattermost)。这是一个更复杂的编程式节点结构的示例。
* 了解[节点版本管理（node versioning）](reference/versioning.md)。
* 确保你理解这些关键概念：[数据项关联（item linking）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/reference-data/link-data-items/how-items-link-through-workflows)和[数据结构（data structures）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/understand-n8ns-data-structure)。

[^1]: 在 n8n 中，表达式（expressions）允许你通过执行 JavaScript 代码来动态填充节点参数。与其提供一个静态值，你可以使用 n8n 的表达式语法，用之前节点的数据、其他工作流的数据或你的 n8n 环境中的数据来定义这个值。
