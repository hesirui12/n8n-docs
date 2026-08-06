---
contentType: reference
nodeTitle: 节点 UI 元素
originalFilePath: integrations/creating-nodes/build/reference/ui-elements.md
originalUrl: https://docs.n8n.io/integrations/creating-nodes/build/reference/ui-elements
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/node-ui-elements
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

# 节点 UI 元素

n8n 提供了一套预定义的 UI 组件（基于 JSON 文件配置），允许用户输入各种类型的数据。n8n 中可用的 UI 元素如下。

{% hint style="info" %}
**小白提示**：这篇是给「n8n 节点开发者」看的——你在写自定义节点（node）的代码时，用这些 JSON 配置告诉 n8n「界面上要给用户显示什么输入框」。比如 `type: string` 就是文本框、`type: boolean` 就是开关。每种元素下面的代码块就是它的配置模板，直接照着改就行。
{% endhint %}

## String（字符串）

基本配置：

```typescript
{
	displayName: Name, // The value the user sees in the UI
	name: name, // The name used to reference the element UI within the code
	type: string,
	required: true, // Whether the field is required or not
	default: 'n8n',
	description: 'The name of the user',
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![String](../../../.gitbook/assets/string.png)

用于输入密码的字符串字段：

```typescript
{
	displayName: 'Password',
	name: 'password',
	type: 'string',
	required: true,
	typeOptions: {
		password: true,
	},
	default: '',
	description: `User's password`,
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![Password](../../../.gitbook/assets/password.png)

多行字符串字段：

```typescript
{
	displayName: 'Description',
	name: 'description',
	type: 'string',
	required: true,
	typeOptions: {
		rows: 4,
	},
	default: '',
	description: 'Description',
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![Multiple rows](../../../.gitbook/assets/multiple-rows.png)

{% hint style="info" %}
**小白提示**：`typeOptions` 是给元素加「额外选项」的地方。`password: true` 让输入框变成密码掩码（显示圆点）；`rows: 4` 让单行输入框变成 4 行高的文本框。`displayOptions.show` 则控制「这个字段在哪个资源/操作下才显示」。
{% endhint %}

### 支持数据键的拖放（drag and drop）

用户可以把数据值拖放到字段中来进行映射。拖放会生成一个表达式[^1]来加载数据值。n8n 会自动支持这一点。

你需要添加一个额外的配置选项来支持拖放数据键：

* `requiresDataPath: 'single'`：用于需要单个字符串的字段。
* `requiresDataPath: 'multiple'`：用于可以接受逗号分隔的字符串列表的字段。

[比较数据集（Compare Datasets）节点代码](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/CompareDatasets/CompareDatasets.node.ts)中有示例。

## Number（数字）

带小数点的数字字段：

```typescript
{
	displayName: 'Amount',
	name: 'amount',
	type: 'number',
	required: true,
	typeOptions: {
		maxValue: 10,
		minValue: 0,
		numberPrecision: 2,
	},
	default: 10.00,
	description: 'Your current amount',
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![Decimal](../../../.gitbook/assets/decimal.png)

{% hint style="info" %}
**小白提示**：`numberPrecision: 2` 表示最多保留 2 位小数；`maxValue` / `minValue` 限制可输入的最大/最小值。
{% endhint %}

## Collection（集合）

当你需要显示可选字段时，使用 `collection` 类型。

```typescript
{
	displayName: 'Filters',
	name: 'filters',
	type: 'collection',
	placeholder: 'Add Field',
	default: {},
	options: [
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{
					name: 'Automated',
					value: 'automated',
				},
				{
					name: 'Past',
					value: 'past',
				},
				{
					name: 'Upcoming',
					value: 'upcoming',
				},
			],
			default: '',
		},
	],
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![Collection](../../../.gitbook/assets/collection.png)

{% hint style="info" %}
**小白提示**：`collection` 是「可折叠的附加选项组」。界面上显示为一个「添加字段（Add Field）」按钮，用户点击后才展开选择。适合放那些「多数时候用不上、但偶尔要调」的选项。`default: {}` 表示默认全部不选。
{% endhint %}

## DateTime（日期时间）

`dateTime` 类型提供一个日期选择器。

```typescript
{
	displayName: 'Modified Since',
	name: 'modified_since',
	type: 'dateTime',
	default: '',
	description: 'The date and time when the file was last modified',
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![DateTime](../../../.gitbook/assets/datetime.png)

## Boolean（布尔值/开关）

`boolean` 类型添加一个用于输入 true 或 false 的开关。

```typescript
{
	displayName: 'Wait for Image',
	name: 'waitForImage',
	type: 'boolean',
	default: true, // Initial state of the toggle
	description: 'Whether to wait for the image or not',
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![Boolean](../../../.gitbook/assets/boolean.png)

## Color（颜色）

`color` 类型提供一个颜色选择器。

```typescript
{
	displayName: 'Background Color',
	name: 'backgroundColor',
	type: 'color',
	default: '', // Initially selected color
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![Color](../../../.gitbook/assets/color.png)

## Options（选项/下拉列表）

`options` 类型添加一个选项列表。用户可以从中选择单个值。

```typescript
{
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	options: [
		{
			name: 'Image',
			value: 'image',
		},
		{
			name: 'Template',
			value: 'template',
		},
	],
	default: 'image', // The initially selected option
	description: 'Resource to consume',
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![Options](../../../.gitbook/assets/options.png)

{% hint style="info" %}
**小白提示**：`name` 是用户看到的文字，`value` 是实际传给程序的真实值。例如用户看到「Image」，程序收到的是 `image`。
{% endhint %}

## Multi-options（多选）

`multiOptions` 类型添加一个选项列表。用户可以从中选择多个值。

```typescript
{
	displayName: 'Events',
	name: 'events',
	type: 'multiOptions',
	options: [
		{
			name: 'Plan Created',
			value: 'planCreated',
		},
		{
			name: 'Plan Deleted',
			value: 'planDeleted',
		},
	],
	default: [], // Initially selected options
	description: 'The events to be monitored',
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![Multi-options](../../../.gitbook/assets/multioptions.png)

## Filter（过滤器）

使用这个组件来评估、匹配或过滤传入的数据。

这是 n8n 自己的 If（如果）节点中的代码。它展示了一个过滤器组件与 [collection](node-ui-elements.md#collection)（集合）组件配合使用——用户可以在集合中配置过滤器的行为。

```typescript
{
	displayName: 'Conditions',
	name: 'conditions',
	placeholder: 'Add Condition',
	type: 'filter',
	default: {},
	typeOptions: {
		filter: {
			// Use the user options (below) to determine filter behavior
			caseSensitive: '={{!$parameter.options.ignoreCase}}',
			typeValidation: '={{$parameter.options.looseTypeValidation ? "loose" : "strict"}}',
		},
	},
},
{
displayName: 'Options',
name: 'options',
type: 'collection',
placeholder: 'Add option',
default: {},
options: [
	{
		displayName: 'Ignore Case',
		description: 'Whether to ignore letter case when evaluating conditions',
		name: 'ignoreCase',
		type: 'boolean',
		default: true,
	},
	{
		displayName: 'Less Strict Type Validation',
		description: 'Whether to try casting value types based on the selected operator',
		name: 'looseTypeValidation',
		type: 'boolean',
		default: true,
	},
],
},
```

![Filter](../../../.gitbook/assets/filter.png)

{% hint style="info" %}
**小白提示**：代码里 `={{...}}` 是 n8n 的表达式语法，意思是「动态读取用户在选项里的设置」。比如 `caseSensitive`（区分大小写）的值直接取决于用户是否勾选了「忽略大小写（Ignore Case）」开关。
{% endhint %}

## 赋值集合（拖放）

当你希望用户通过一次拖拽交互就预填 name 和 value 参数时，使用拖放组件。

```typescript
{
	displayName: 'Fields to Set',
	name: 'assignments',
	type: 'assignmentCollection',
	default: {},
},
```

你可以在 n8n 的 [编辑字段（Set）节点](https://github.com/n8n-io/n8n/tree/0faeab1228e26d69a2a93bdb2f89523cca1e4036/packages/nodes-base/nodes/Set/v2) 中看到示例：

![一个展示拖放操作以及把字段改为固定值的动图](<../../../.gitbook/assets/drag-drop-fixed-toggle (1).gif>)

## Fixed collection（固定集合）

使用 `fixedCollection` 类型对语义相关的字段进行分组。

```typescript
{
	displayName: 'Metadata',
	name: 'metadataUi',
	placeholder: 'Add Metadata',
	type: 'fixedCollection',
	default: '',
	typeOptions: {
		multipleValues: true,
	},
	description: '',
	options: [
		{
			name: 'metadataValues',
			displayName: 'Metadata',
			values: [
				{
					displayName: 'Name',
					name: 'name',
					type: 'string',
					default: 'Name of the metadata key to add.',
				},
				{
					displayName: 'Value',
					name: 'value',
					type: 'string',
					default: '',
					description: 'Value to set for the metadata key.',
				},
			],
		},
	],
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![Fixed collection](../../../.gitbook/assets/fixed-collection.png)

{% hint style="info" %}
**小白提示**：和 `collection` 的区别：`collection` 里的字段是「一个一个可选项」，用户想加哪个加哪个；`fixedCollection` 是一组「打包好的字段组」，点一下添加按钮就整组出现。`multipleValues: true` 表示可以添加多组。
{% endhint %}

## Resource locator（资源定位器）

![Resource locator](../../../.gitbook/assets/resource-locator.png)

资源定位器元素帮助用户找到外部服务中的特定资源，例如 Trello 中的卡片或标签。

以下选项可用：

* ID：直接输入资源的 ID。
* URL：粘贴资源的 URL。
* 列表（List）：允许用户从预填充的列表中选择或搜索。此选项需要更多编码，因为你必须填充列表，并且（如果选择支持）处理搜索。

你可以选择包含哪些类型（modes）。

示例：

```typescript
{
	displayName: 'Card',
	name: 'cardID',
	type: 'resourceLocator',
	default: '',
	description: 'Get a card',
	modes: [
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			hint: 'Enter an ID',
			validation: [
				{
					type: 'regex',
					properties: {
						regex: '^[0-9]',
						errorMessage: 'The ID must start with a number',
					},
				},
			],
			placeholder: '12example',
			// How to use the ID in API call
			url: '=http://api-base-url.com/?id={{$value}}',
		},
		{
			displayName: 'URL',
			name: 'url',
			type: 'string',
			hint: 'Enter a URL',
			validation: [
				{
					type: 'regex',
					properties: {
						regex: '^http',
						errorMessage: 'Invalid URL',
					},
				},
			],
			placeholder: 'https://example.com/card/12example/',
			// How to get the ID from the URL
			extractValue: {
				type: 'regex',
				regex: 'example.com/card/([0-9]*.*)/',
			},
		},
		{
			displayName: 'List',
			name: 'list',
			type: 'list',
			typeOptions: {
				// You must always provide a search method
				// Write this method within the methods object in your base file
				// The method must populate the list, and handle searching if searchable: true
				searchListMethod: 'searchMethod',
				// If you want users to be able to search the list
				searchable: true,
				// Set to true if you want to force users to search
				// When true, users can't browse the list
				// Or false if users can browse a list
				searchFilterRequired: true,
			},
		},
	],
	displayOptions: {
		// the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			],
		},
	},
},
```

{% hint style="info" %}
**小白提示**：资源定位器就是「让用户用多种方式指定同一个东西」。比如 Trello 卡片：用户既可以直接输入 ID，也可以粘贴卡片 URL（n8n 自动从 URL 里提取 ID），还可以从下拉列表里搜。`validation` 用正则校验输入格式；`extractValue` 用正则从 URL 中抓出 ID；`{{$value}}` 代表用户输入的值。
{% endhint %}

更多实时示例请参考：

* 参考 n8n Trello 节点中的 [`CardDescription.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Trello/CardDescription.ts) 和 [`Trello.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Trello/Trello.node.ts)，这是一个包含 `searchFilterRequired: true` 的可搜索列表示例。
* 参考 [`GoogleDrive.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Drive/GoogleDrive.node.ts)，这是一个用户既可以浏览列表也可以搜索的示例。

## Resource mapper（资源映射器）

如果你的节点执行插入（insert）、更新（update）或 upsert（更新或插入）操作，你需要把节点中的数据转换成你所集成服务支持的格式。一种常见模式是在发送数据的节点之前使用一个 Set 节点，把数据转换成目标服务的 schema（结构）。资源映射器 UI 组件提供了一种方式，可以直接在节点内把数据整理成所需格式，而无需使用 Set 节点。资源映射器组件还可以根据节点中提供的 schema 校验输入数据，并把输入数据转换为预期的类型。

{% hint style="info" %}
**映射（Mapping）和匹配（Matching）**

映射是指设置输入数据作为更新行时的值。匹配是指使用列名来识别要更新的行。
{% endhint %}

```js
{
	displayName: 'Columns',
	name: 'columns', // The name used to reference the element UI within the code
	type: 'resourceMapper', // The UI element type
	default: {
		// mappingMode can be defined in the component (mappingMode: 'defineBelow')
		// or you can attempt automatic mapping (mappingMode: 'autoMapInputData')
		mappingMode: 'defineBelow',
		// Important: always set default value to null
		value: null,
	},
	required: true,
	// See "Resource mapper type options interface" below for the full typeOptions specification
	typeOptions: {
		resourceMapper: {
			resourceMapperMethod: 'getMappingColumns',
			mode: 'update',
			fieldWords: {
				singular: 'column',
				plural: 'columns',
			},
			addAllFields: true, 
			multiKeyMatch: true,
			supportAutoMap: true,
			matchingFieldsLabels: {
				title: 'Custom matching columns title',
				description: 'Help text for custom matching columns',
				hint: 'Below-field hint for custom matching columns',
			},
		},
	},
},
```

参考 [Postgres 节点（版本 2）](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Postgres/v2) 获取使用数据库 schema 的实时示例。

参考 [Google Sheets 节点（版本 2）](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Google/Sheet/v2) 获取使用无 schema 服务的实时示例。

### 资源映射器 typeOptions 接口

`typeOptions` 部分必须实现以下接口：

```js
export interface ResourceMapperTypeOptions {
	// The name of the method where you fetch the schema
	// Refer to the Resource mapper method section for more detail
	resourceMapperMethod: string;
	// Choose the mode for your operation
	// Supported modes: add, update, upsert
	mode: 'add' | 'update' | 'upsert';
	// Specify labels for fields in the UI
	fieldWords?: { singular: string; plural: string };
	// Whether n8n should display a UI input for every field when node first added to workflow
	// Default is true
	addAllFields?: boolean;
	// Specify a message to show if no fields are fetched from the service 
	// (the call is successful but the response is empty)
	noFieldsError?: string;
	// Whether to support multi-key column matching
	// multiKeyMatch is for update and upsert only
	// Default is false
	// If true, the node displays a multi-select dropdown for the matching column selector
	multiKeyMatch?: boolean;
	// Whether to support automatic mapping
	// If false, n8n hides the mapping mode selector field and sets mappingMode to defineBelow
	supportAutoMap?: boolean;
	// Custom labels for the matching columns selector
	matchingFieldsLabels?: {
		title?: string;
		description?: string;
		hint?: string;
	};
}
```

{% hint style="info" %}
**小白提示**：各字段含义——
- `resourceMapperMethod`：你写的「获取 schema 的方法」名。
- `mode`：操作模式。`add`（只新增）、`update`（只更新）、`upsert`（有就更新、没有就新增）。
- `fieldWords`：界面里称呼「字段」用什么词（单数/复数）。
- `addAllFields`：节点刚拖进画布时，是否把所有字段都显示出来。
- `multiKeyMatch`：是否允许用多个列组合来定位要更新的行。
- `supportAutoMap`：是否支持自动映射输入数据。
{% endhint %}

### 资源映射器方法

这个方法包含你节点专属的获取数据 schema 的逻辑。每个节点都必须实现自己的 schema 获取逻辑，并根据 schema 设置每个 UI 字段。

它必须返回一个实现了 `ResourceMapperFields` 接口的值：

```js
interface ResourceMapperField {
	// Field ID as in the service
	id: string;
	// Field label
	displayName: string;
	// Whether n8n should pre-select the field as a matching field
	// A matching field is a column used to identify the rows to modify
	defaultMatch: boolean;
	// Whether the field can be used as a matching field
	canBeUsedToMatch?: boolean;
	// Whether the field is required by the schema
	required: boolean;
	// Whether to display the field in the UI
	// If false, can't be used for matching or mapping
	display: boolean;
	// The data type for the field
	// These correspond to UI element types
	// Supported types: string, number, dateTime, boolean, time, array, object, options
	type?: FieldType;
	// Added at runtime if the field is removed from mapping by the user
	removed?: boolean;
	// Specify options for enumerated types
	options?: INodePropertyOptions[];
}
```

参考 [Postgres 资源映射方法](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Postgres/v2/methods/resourceMapping.ts) 和 [Google Sheets 资源映射方法](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Sheet/v2/methods/resourceMapping.ts) 获取实时示例。

## JSON

```typescript
{
	displayName: 'Content (JSON)',
	name: 'content',
	type: 'json',
	default: '',
	description: '',
	displayOptions: { // the resources and operations to display this element with
		show: {
			resource: [
				// comma-separated list of resource names
			],
			operation: [
				// comma-separated list of operation names
			]
		}
	},
}
```

![JSON](../../../.gitbook/assets/json.png)

{% hint style="info" %}
**小白提示**：`json` 类型给用户提供一个带语法高亮和格式校验的 JSON 编辑器，适合让用户直接粘贴 JSON 数据的场景。
{% endhint %}

## HTML

HTML 编辑器允许用户在工作流中创建 HTML 模板。编辑器支持标准 HTML、`<style>` 标签内的 CSS，以及用 `{{}}` 包裹的表达式。用户可以添加 `<script>` 标签引入额外的 JavaScript。n8n 在工作流执行期间不会运行这些 JavaScript。

```js
{
	displayName: 'HTML Template', // The value the user sees in the UI
	name: 'html', // The name used to reference the element UI within the code
	type: 'string',
	typeOptions: {
		editor: 'htmlEditor',
	},
	default: placeholder, // Loads n8n's placeholder HTML template
	noDataExpression: true, // Prevent using an expression for the field
	description: 'HTML template to render',
},
```

参考 [`Html.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Html/Html.node.ts) 获取实时示例。

{% hint style="info" %}
**小白提示**：注意 HTML 编辑器本质上还是 `type: 'string'`，只是通过 `typeOptions.editor: 'htmlEditor'` 换成了 HTML 编辑器界面。`noDataExpression: true` 表示这个字段禁止使用表达式（防止用户把整个模板写成表达式）。
{% endhint %}

## Notice（提示框）

显示一个带提示或额外信息的黄色框。关于如何写出好的提示文字，请参阅[节点 UI 设计](../../plan-your-node/node-ui-design.md)。

```js
{
  displayName: 'Your text here',
  name: 'notice',
  type: 'notice',
  default: '',
},
```

![Notice](../../../.gitbook/assets/notice.png)

## Hints（提示）

有两种类型的提示：参数提示（parameter hints）和节点提示（node hints）：

* 参数提示是用户输入字段下方的一小行文字。
* 节点提示比 [Notice](node-ui-elements.md#notice) 更强大、更灵活。可以用来在输入面板、输出面板或节点详情视图中显示更长的提示。

### 添加参数提示

给 UI 元素添加 `hint` 参数：

```ts
{
	displayName: 'URL',
	name: 'url',
	type: 'string',
	hint: 'Enter a URL',
	...
}
```

### 添加节点提示

在节点 `description` 的 `hints` 属性中定义节点的提示：

```ts
description: INodeTypeDescription = {
	...
	hints: [
		{
			// The hint message. You can use HTML.
			message: "This node has many input items. Consider enabling <b>Execute Once</b> in the node\'s settings.",
			// Choose from: info, warning, danger. The default is 'info'.
			// Changes the color. info (grey), warning (yellow), danger (red)
			type: 'info',
			// Choose from: inputPane, outputPane, ndv. By default n8n displays the hint in both the input and output panels.
			location: 'outputPane',
			// Choose from: always, beforeExecution, afterExecution. The default is 'always'
			whenToDisplay: 'beforeExecution',
			// Optional. An expression. If it resolves to true, n8n displays the message. Defaults to true.
			displayCondition: '={{ $parameter["operation"] === "select" && $input.all().length > 1 }}'
		}
	]
	...
}
```

{% hint style="info" %}
**小白提示**：各字段含义——
- `message`：提示内容（可以用 HTML 加粗等）。
- `type`：提示风格。`info` 灰色、`warning` 黄色、`danger` 红色。
- `location`：显示在哪里。`inputPane` 输入面板、`outputPane` 输出面板、`ndv` 节点详情视图。
- `whenToDisplay`：何时显示。`always` 总是、`beforeExecution` 执行前、`afterExecution` 执行后。
- `displayCondition`：可选表达式，只有当它求值为 true 时才显示提示。
{% endhint %}

### 为程序风格节点添加动态提示

在程序风格（programmatic-style）节点中，你可以创建包含节点执行信息的动态消息。由于它依赖节点输出数据，这种类型的提示只能在执行之后显示。

```ts
if (operation === 'select' && items.length > 1 && !node.executeOnce) {
    // Expects two parameters: NodeExecutionData and an array of hints
	return new NodeExecutionOutput(
		[returnData],
		[
			{
				message: `This node ran ${items.length} times, once for each input item. To run for the first item only, enable <b>Execute once</b> in the node settings.`,
				location: 'outputPane',
			},
		],
	);
}
return [returnData];
```

要查看程序风格节点中动态提示的实时示例，请查看[拆分输出（Split Out）节点代码](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Transform/SplitOut/SplitOut.node.ts#L266)。

[^1]: 在 n8n 中，表达式允许你通过执行 JavaScript 代码来动态填充节点参数。你不需要提供静态值，而是可以用 n8n 表达式语法，使用来自之前节点、其他工作流或你的 n8n 环境中的数据来定义值。
