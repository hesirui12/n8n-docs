---
contentType: tutorial
nodeTitle: 'Tutorial: Build a declarative-style node'
originalFilePath: integrations/creating-nodes/build/declarative-style-node.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node'
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/tutorial-build-a-declarative-style-node
layout:
  description:
    visible: false
---

# 构建声明式（declarative-style）节点

本教程带你一步步构建一个**声明式（declarative-style）**节点。开始之前，请先确认这种节点风格确实是你需要的。更多信息请参考[选择你的节点构建方式](../plan-your-node/choose-a-node-building-style.md)。

{% hint style="info" %}
**小白先看：什么是「声明式节点」？**

「声明式」的意思是：你**不用写一堆代码去处理数据**，而是用**配置（JSON 对象）「描述」**这个节点该怎么做——比如「这个操作要调用的 URL 是什么、用什么 HTTP 方法、参数放哪里」。n8n 会照着你的描述自动帮你发请求、处理响应。它适合接入那些「请求-响应」很规整的 REST API，代码量少、上手快。
{% endhint %}

## 前置条件（Prerequisites）

你的开发机器上需要安装以下内容：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/7rCdLiI9qnTIK3Afb3NX/" %}

{% hint style="info" %}
**上面这一行是什么？** 这是 n8n 官方文档的「可复用内容块」引用，在你阅读线上文档时会自动展开成具体内容（通常是「环境要求」的通用说明，比如需要 Node.js 和 npm）。因为是官方 GitBook 的在线组件，本地无法展开，所以原样保留。具体装什么可以看本目录下的[搭建开发环境](set-up-your-development-environment.md)。
{% endhint %}

你还需要对以下内容有一定了解：

- JavaScript/TypeScript（编程语言）
- REST APIs（接口调用方式）
- git（代码版本管理）

## 构建你的节点（Build your node）

在这一部分，你会克隆 n8n 的节点起步仓库（starter repository），并构建一个集成 [NASA API](https://api.nasa.gov/)（美国宇航局开放接口）的节点。你要创建的节点会使用 NASA 的两项服务：APOD（Astronomy Picture of the Day，每日天文图片）和火星车照片（Mars Rover Photos）。为了让代码示例保持简短，这个节点不会实现火星车照片接口的所有可用选项。

{% hint style="info" %}
**已有同名节点**

n8n 内置了一个 NASA 节点。为了避免和它冲突，你要给自己这个版本起一个不同的名字。
{% endhint %}

### 第 1 步：搭建项目（Set up the project）

n8n 为节点开发提供了一个起步仓库（starter repository）。使用它，可以确保你拥有所有必要的依赖，它还自带一个代码检查器（linter）。

克隆仓库并进入目录：

1. 从这个模板仓库[生成一个新仓库](https://github.com/n8n-io/n8n-nodes-starter/generate)。
2. 克隆你的新仓库：
		```shell
		git clone https://github.com/<your-organization>/<your-repo-name>.git n8n-nodes-nasa-pics
		cd n8n-nodes-nasa-pics
		```
		（把 `<your-organization>` 换成你的组织名/用户名，`<your-repo-name>` 换成你的仓库名。克隆完成后用 `cd` 进入项目目录。）

起步模板里包含示例节点和示例凭据。请删除以下目录和文件：

* `nodes/Example`（示例节点目录）
* `nodes/GithubIssues`（GitHub Issues 示例节点目录）
* `credentials/GithubIssuesApi.credentials.ts`（示例凭据文件）
* `credentials/GithubIssuesOAuth2Api.credentials.ts`（示例 OAuth2 凭据文件）

然后创建以下目录和文件：

`nodes/NasaPics`  
`nodes/NasaPics/NasaPics.node.json`  
`nodes/NasaPics/NasaPics.node.ts`  
`credentials/NasaPicsApi.credentials.ts`  

这些是任何节点都必需的几个关键文件。关于必需文件及推荐的文件组织方式，请参考[节点文件结构](../plan-your-node/choose-node-file-structure.md)。

接下来安装项目依赖：

```shell
npm i
```

（`npm i` 是 `npm install` 的简写，会根据 `package.json` 下载项目需要的所有依赖包。）

### 第 2 步：添加图标（Add an icon）

从[这里](https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg)下载 NASA 的 SVG 标志，把它保存为 `nasapics.svg`，放到 `nodes/NasaPics/` 目录里。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/dGOXJYk0OQgOLlRpyJnn/" %}

{% hint style="info" %}
**上面这行是什么？** 这是官方文档的「可复用内容块」，在线浏览时会自动展开（内容大概是「如何正确设置图标」的通用说明）。本地无法展开，原样保留即可。
{% endhint %}

### 第 3 步：创建节点（Create the node）

每个节点都必须有一个**基础文件（base file）**。关于基础文件参数的详细信息，请参考[节点基础文件](reference/base-files/README.md)。

在这个示例中，文件是 `NasaPics.node.ts`。为了让教程保持简短，你会把节点的所有功能都放在这一个文件里。构建更复杂的节点时，你应该考虑把功能拆分到多个模块中。更多信息请参考[节点文件结构](../plan-your-node/choose-node-file-structure.md)。

#### 第 3.1 步：导入语句（Imports）

首先添加导入（import）语句：

```typescript
import { NodeConnectionTypes } from 'n8n-workflow';
import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
```

（这两行是从 `n8n-workflow` 这个包里「导入」类型和常量。`NodeConnectionTypes` 用来声明节点的连接类型；`INodeType` 和 `INodeTypeDescription` 是 n8n 定义好的 TypeScript 接口，用来约束你的节点结构。）

#### 第 3.2 步：创建主类（Create the main class）

节点必须导出一个实现了 `INodeType` 的类。这个类里必须包含一个 `description` 对象，而这个对象里又包含 `properties` 数组。

{% hint style="info" %}
**类名和文件名必须一致**

请确保类名和文件名匹配。例如，类名是 `NasaPics`，文件名就必须是 `NasaPics.node.ts`。
{% endhint %}

```typescript
export class NasaPics implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		properties: [
		// Resources and operations will go here
		]
	};
}
```

（`export class NasaPics` 表示把这个类导出，n8n 才能识别它。`description` 对象描述了节点长什么样、有哪些配置项。）

#### 第 3.3 步：添加节点基本信息（Add node details）

所有节点都需要一些基本参数，比如显示名称（display name）、图标（icon），以及用这个节点发请求所需的基本信息。请把以下内容添加到 `description` 中：

```typescript
displayName: 'NASA Pics',
name: 'nasaPics',
icon: 'file:nasapics.svg',
group: ['transform'],
version: 1,
subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
description: 'Get data from NASAs API',
defaults: {
	name: 'NASA Pics',
},
usableAsTool: true,
inputs: [ NodeConnectionTypes.Main ],
outputs: [ NodeConnectionTypes.Main ],
credentials: [
	{
		name: 'NasaPicsApi',
		required: true,
	},
],
requestDefaults: {
	baseURL: 'https://api.nasa.gov',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
},
```

（这段配置逐项解释：`displayName` 是节点在界面上显示的名字；`name` 是内部使用的唯一标识；`icon` 指向你放的图标文件；`group` 告诉 n8n 节点的行为类型；`version` 是版本号；`subtitle` 是一个表达式，会在节点下方动态显示当前选中的「操作:资源」；`defaults.name` 是节点放在画布上时的默认名称；`usableAsTool` 表示这个节点可以被 AI 当作工具使用；`inputs`/`outputs` 声明节点的输入端和输出端；`credentials` 声明节点需要使用的凭据；`requestDefaults` 是所有请求的公共默认配置，`baseURL` 是 API 的根地址。）

n8n 会使用 `description` 中设置的某些属性来在编辑器界面（Editor UI）中渲染这个节点。这些属性是 `displayName`、`icon`、`description` 和 `subtitle`。

#### 第 3.4 步：添加资源（Add resources）

资源（resource）对象定义了节点所使用的 API 资源。在本教程中，你要创建一个访问 NASA 两个 API 端点的节点：`planetary/apod` 和 `mars-photos`。这意味着你需要在 `NasaPics.node.ts` 中定义两个资源选项。请用资源对象更新 `properties` 数组：

```typescript
properties: [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Astronomy Picture of the Day',
				value: 'astronomyPictureOfTheDay',
			},
			{
				name: 'Mars Rover Photos',
				value: 'marsRoverPhotos',
			},
		],
		default: 'astronomyPictureOfTheDay',
	},
	// Operations will go here

]
```

`type` 决定了 n8n 为该资源显示哪种 UI 元素，并告诉 n8n 期望从用户那里得到什么类型的数据。`options` 会让 n8n 添加一个下拉框，让用户从中选择一个选项。更多信息请参考[节点 UI 元素](reference/node-ui-elements.md)。

#### 第 3.5 步：添加操作（Add operations）

操作（operations）对象定义了在某个资源上可执行的操作。

在声明式节点中，操作对象包含 `routing`（放在 `options` 数组内部）。它用来配置 API 调用的具体细节。

请在 `properties` 数组的 `resource` 对象之后，添加以下内容：

```typescript
{
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				'astronomyPictureOfTheDay',
			],
		},
	},
	options: [
		{
			name: 'Get',
			value: 'get',
			action: 'Get the APOD',
			description: 'Get the Astronomy Picture of the day',
			routing: {
				request: {
					method: 'GET',
					url: '/planetary/apod',
				},
			},
		},
	],
	default: 'get',
},
{
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				'marsRoverPhotos',
			],
		},
	},
	options: [
		{
			name: 'Get',
			value: 'get',
			action: 'Get Mars Rover photos',
			description: 'Get photos from the Mars Rover',
			routing: {
				request: {
					method: 'GET',
				},
			},
		},
	],
	default: 'get',
},
{
	displayName: 'Rover name',
	description: 'Choose which Mars Rover to get a photo from',
	required: true,
	name: 'roverName',
	type: 'options',
	options: [
		{name: 'Curiosity', value: 'curiosity'},
		{name: 'Opportunity', value: 'opportunity'},
		{name: 'Perseverance', value: 'perseverance'},
		{name: 'Spirit', value: 'spirit'},
	],
	routing: {
		request: {
			url: '=/mars-photos/api/v1/rovers/{{$value}}/photos',
		},
	},
	default: 'curiosity',
	displayOptions: {
		show: {
			resource: [
				'marsRoverPhotos',
			],
		},
	},
},
{
	displayName: 'Date',
	description: 'Earth date',
	required: true,
	name: 'marsRoverDate',
	type: 'dateTime',
	default:'',
	displayOptions: {
		show: {
			resource: [
				'marsRoverPhotos',
			],
		},
	},
	routing: {
		request: {
			// You've already set up the URL. qs appends the value of the field as a query string
			qs: {
				earth_date: '={{ new Date($value).toISOString().substr(0,10) }}',
			},
		},
	},
},
// Optional/additional fields will go here
```

（这段代码创建了两个操作：一个用于获取今天的 APOD 图片，另一个用于向某辆火星车发送获取照片的 GET 请求。名为 `roverName` 的对象要求用户选择想获取哪辆火星车的照片；火星车操作中的 `routing` 对象会引用它来拼接 API 调用的 URL。`displayOptions.show` 用来做「条件显示」——只有选中了对应的 `resource` 时，这个字段才会出现在界面上。`qs` 表示 query string（查询字符串），会把字段的值作为 URL 参数追加到请求里；`={{ ... }}` 是 n8n 表达式语法，`$value` 代表用户当前输入的值。）

#### 第 3.6 步：可选字段（Optional fields）

大多数 API（包括本示例用到的 NASA API）都有一些可选字段，你可以用它们来细化查询条件。

为了避免给用户造成困扰，n8n 会在界面中把这些字段显示在 **Additional Fields（附加字段）** 之下。

本教程中，你会添加一个附加字段，让用户可以为 APOD 端点选择日期。请把以下内容添加到 `properties` 数组中：

```typescript
{
	displayName: 'Additional Fields',
	name: 'additionalFields',
	type: 'collection',
	default: {},
	placeholder: 'Add Field',
	displayOptions: {
		show: {
			resource: [
				'astronomyPictureOfTheDay',
			],
			operation: [
				'get',
			],
		},
	},
	options: [
		{
			displayName: 'Date',
			name: 'apodDate',
			type: 'dateTime',
			default: '',
			routing: {
				request: {
					// You've already set up the URL. qs appends the value of the field as a query string
					qs: {
						date: '={{ new Date($value).toISOString().substr(0,10) }}',
					},
				},
			},
		},
	],									
}
```

（`type: 'collection'` 表示这是一个「集合」类型字段——它自己不会直接显示，而是提供一个「添加字段」按钮，用户点击后可以从 `options` 列表里挑选要设置的可选参数。`placeholder: 'Add Field'` 是按钮上显示的文字。）

### 第 4 步：设置身份认证和凭据测试（Set up authentication and a credential test）

NASA API 要求用户使用 API 密钥（API Key）进行身份认证。你还可以发送一个请求来检查 API 密钥是否有效。

请把以下内容添加到 `nasaPicsApi.credentials.ts`：

```typescript
import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class NasaPicsApi implements ICredentialType {
	name = 'NasaPicsApi';
	displayName = 'NASA Pics API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
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
			qs: {
				'api_key': '={{$credentials.apiKey}}'
			}
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.nasa.gov',
			url: '/apod',
		},
	};
}
```

（这段凭据文件的要点：`name` 是凭据的内部名称，必须与节点基础文件 `credentials` 数组里的 `name` 一致；`properties` 定义用户需要填写的字段（这里是 API Key）；`authenticate` 告诉 n8n 如何把 API Key 附加到请求上（这里是通过查询字符串 `api_key` 参数，`$credentials.apiKey` 引用用户在界面上填的值）；`test` 定义了一个测试请求，用户点击「测试」按钮时，n8n 会用它来验证凭据是否可用。）

关于凭据文件及其选项的更多信息，请参考[凭据文件（Credentials file）](reference/credentials-files.md)。

### 第 5 步：添加节点元数据（Add node metadata）

关于节点的元数据（metadata）放在节点根目录的 JSON 文件里。n8n 称这个文件为 codex 文件。在本示例中，这个文件是 `NasaPics.node.json`。

请把以下代码添加到该 JSON 文件中：

```json
{
	"node": "n8n-nodes-nasapics",
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

（`node` 是节点的包名标识；`nodeVersion` 是节点版本号；`categories` 决定节点在 n8n 界面里归入哪个分类；`resources` 存放文档链接，n8n 会在界面上自动为凭据和节点添加帮助链接。）

关于这些参数的更多信息，请参考[节点 codex 文件](reference/codex-files.md)。

### 第 6 步：更新 npm 包信息（Update the npm package details）

你的 npm 包信息位于项目根目录的 `package.json` 文件中。**关键的一步是**在其中加入 `n8n` 对象，用来链接凭据文件和节点基础文件。请更新该文件，加入以下信息：

```json
{
	// All node names must start with "n8n-nodes-"
	"name": "n8n-nodes-nasapics",
	"version": "0.1.0",
	"description": "n8n node to call NASA's APOD and Mars Rover Photo services.",
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
			"dist/credentials/NasaPicsApi.credentials.js"
		],
		"nodes": [
			"dist/nodes/NasaPics/NasaPics.node.js"
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

（要点：包名 `name` 必须以 `n8n-nodes-` 开头；`keywords` 里必须包含 `n8n-community-node-package` 这个关键词，社区节点发布到 npm 时需要它；`n8n` 对象里的 `credentials` 和 `nodes` 数组指向编译后的文件路径，n8n 靠这个找到你的凭据和节点。）

你需要更新 `package.json`，把它换成你自己的信息，比如你的名字和仓库 URL。关于 npm `package.json` 文件的更多信息，请参考 [npm 的 package.json 文档](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)。

## 测试你的节点（Test your node）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/WlCAEDxY4EZLDV85eB8C/" %}

{% hint style="info" %}
**上面这行是什么？** 官方可复用内容块，在线渲染时自动展开（内容是「如何本地运行并测试节点」的通用步骤）。本地原样保留。
{% endhint %}

## 下一步（Next steps）

* [部署你的节点](../deploy-your-node/README.md)。
* 查看一个声明式节点的示例：n8n 的 [Brevo 节点](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Brevo)。注意：它的主节点是声明式的，而触发（trigger）节点用的是编程式风格。
* 了解[节点版本管理（node versioning）](reference/versioning.md)。
