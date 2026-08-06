---
title: 外部钩子（External hooks）
description: >-
  使用外部钩子（external hooks）在 n8n 执行特定操作时运行自定义代码。
contentType: howto
nodeTitle: 外部钩子（External hooks）
originalFilePath: hosting/configuration/external-hooks.md
originalUrl: 'https://docs.n8n.io/hosting/configuration/external-hooks'
url: 'https://docs.n8n.io/deploy/host-n8n/configure-n8n/external-hooks'
layout:
  description:
    visible: false
---

# 外部钩子（External hooks）

外部钩子（external hooks）让你在 n8n 执行特定操作时运行自定义代码。你可以用它来记录数据（log data）、修改数据，或者通过抛出一个错误来禁止某个操作。

{% hint style="info" %}
**小白提示**：可以把「钩子」理解成「事件监听器」——n8n 每次做某件事（比如创建凭据、激活工作流、执行工作流）时，都会「钩」一下你的代码，让你有机会插手：要么在旁边看看（记录日志）、要么改改数据、要么直接抛错阻止这件事发生。这非常适合在团队/企业环境里做「强制执行规则」：比如限制用户最多创建几个凭据、限制同时激活的工作流数量等。
{% endhint %}

钩子有两种类型：

- **后端钩子（Backend hooks）**：在服务器端运行，通过 `EXTERNAL_HOOK_FILES` 环境变量注册。
- **前端钩子（Frontend hooks）**：在浏览器中运行，通过 `<script>` 脚本标签加载。

用于注册钩子的环境变量，请参见 [外部钩子环境变量（External hooks environment variables）](basic-configuration/use-environment-variables/external-hooks.md)。

## 后端钩子（Backend hooks）

### 可用的钩子（Available hooks）

| 钩子（Hook）     | 参数（Arguments） | 说明（Description） |
| :------- | :---------| :---------- |
| `credentials.create` | `[credentialData: ICredentialsDb]` | 在创建新凭据之前调用。可用于限制凭据的数量。 |
| `credentials.delete` | `[id: credentialId]` | 在删除凭据之前调用。 |
| `credentials.update` | `[credentialData: ICredentialsDb]` | 在 n8n 保存已有凭据之前调用。 |
| `frontend.settings` | `[frontendSettings: IN8nUISettings]` | 在 n8n 启动时调用。例如允许你覆盖前端数据，比如显示的 OAuth URL。 |
| `n8n.ready` | `[app: App]` | 在 n8n 就绪后调用一次。例如可用于注册自定义 API 端点。 |
| `n8n.stop` |  | 在 n8n 进程被停止时调用。允许你保存一些进程数据。 |
| `oauth1.authenticate` | `[oAuthOptions: clientOAuth1.Options, oauthRequestData: {oauth_callback: string}]` | 在 OAuth1 认证之前调用。可用于覆盖 OAuth 回调 URL。 |
| `oauth2.callback` | `[oAuth2Parameters: {clientId: string, clientSecret: string \| undefined, accessTokenUri: string, authorizationUri: string, redirectUri: string, scopes: string[]}]` | 在 OAuth2 回调中调用。可用于覆盖 OAuth 回调 URL。 |
| `workflow.activate` | `[workflowData: IWorkflowBase, workflowContext: WorkflowHookContextService, actor?: WorkflowLifecycleHookActor]` | 在工作流被激活之前调用。可用于限制活动工作流的数量。关于 `workflowContext` 参数请参见 [工作流钩子上下文（Workflow hook context）](#workflow-hook-context)，关于 `actor` 参数请参见 [工作流生命周期钩子的操作者（Workflow lifecycle hook actor）](#workflow-lifecycle-hook-actor)。 |
| `workflow.afterCreate` | `[workflowData: IWorkflowBase, workflowContext: WorkflowHookContextService, actor?: WorkflowLifecycleHookActor]` | 在工作流被创建之后调用。关于 `workflowContext` 参数请参见 [工作流钩子上下文](#workflow-hook-context)，关于 `actor` 参数请参见 [工作流生命周期钩子的操作者](#workflow-lifecycle-hook-actor)。 |
| `workflow.afterDelete` | `[workflowId: string, actor?: WorkflowLifecycleHookActor]` | 在工作流被删除之后调用。关于 `actor` 参数请参见 [工作流生命周期钩子的操作者](#workflow-lifecycle-hook-actor)。 |
| `workflow.afterUpdate` | `[workflowData: IWorkflowBase, workflowContext: WorkflowHookContextService, actor?: WorkflowLifecycleHookActor]` | 在已有工作流被保存之后调用。关于 `workflowContext` 参数请参见 [工作流钩子上下文](#workflow-hook-context)，关于 `actor` 参数请参见 [工作流生命周期钩子的操作者](#workflow-lifecycle-hook-actor)。 |
| `workflow.create` | `[workflowData: IWorkflowBase, workflowContext: WorkflowHookContextService, actor?: WorkflowLifecycleHookActor]` | 在工作流被创建之前调用。可用于限制已保存工作流的数量。关于 `workflowContext` 参数请参见 [工作流钩子上下文](#workflow-hook-context)，关于 `actor` 参数请参见 [工作流生命周期钩子的操作者](#workflow-lifecycle-hook-actor)。 |
| `workflow.deactivate` | `[workflowData: IWorkflowBase, workflowContext: WorkflowHookContextService, actor?: WorkflowLifecycleHookActor]` | 在工作流被停用之前调用，此时 `active` 仍为 `true`。抛出错误可以中止停用，让工作流保持活动状态。自 n8n 2.33.1 起可用。关于 `workflowContext` 参数请参见 [工作流钩子上下文](#workflow-hook-context)，关于 `actor` 参数请参见 [工作流生命周期钩子的操作者](#workflow-lifecycle-hook-actor)。 |
| `workflow.delete` | `[workflowId: string, actor?: WorkflowLifecycleHookActor]` | 在工作流被删除之前调用。关于 `actor` 参数请参见 [工作流生命周期钩子的操作者](#workflow-lifecycle-hook-actor)。 |
| `workflow.postExecute` | `[fullRunData: IRun \| undefined, workflowData: IWorkflowBase, executionId: string, workflowContext: WorkflowHookContextService]` | 在工作流被执行之后调用。关于 `workflowContext` 参数请参见 [工作流钩子上下文](#workflow-hook-context)。 |
| `workflow.preExecute` | `[workflow: Workflow, mode: WorkflowExecuteMode, workflowContext: WorkflowHookContextService]` | 在工作流被执行之前调用。允许你统计或限制工作流的执行次数。关于 `workflowContext` 参数请参见 [工作流钩子上下文](#workflow-hook-context)（自 n8n 2.23.0 起可用）。 |
| `workflow.update` | `[workflowData: IWorkflowBase, workflowContext: WorkflowHookContextService, actor?: WorkflowLifecycleHookActor]` | 在已有工作流被保存之前调用。关于 `workflowContext` 参数请参见 [工作流钩子上下文](#workflow-hook-context)，关于 `actor` 参数请参见 [工作流生命周期钩子的操作者](#workflow-lifecycle-hook-actor)。 |
| `workflow.afterArchive` | `[workflowId: string, actor?: WorkflowLifecycleHookActor]` | 在你归档（archive）一个工作流之后调用。关于 `actor` 参数请参见 [工作流生命周期钩子的操作者](#workflow-lifecycle-hook-actor)。 |
| `workflow.afterUnarchive` | `[workflowId: string, actor?: WorkflowLifecycleHookActor]` | 在你从归档中恢复工作流之后调用。关于 `actor` 参数请参见 [工作流生命周期钩子的操作者](#workflow-lifecycle-hook-actor)。 |

### 注册钩子（Registering hooks）

通过注册一个「包含钩子函数的钩子文件」来设置钩子。要注册钩子，请设置环境变量 `EXTERNAL_HOOK_FILES`。

你可以把这个变量设置为单个文件：

`EXTERNAL_HOOK_FILES=/data/hook.js`

或者设置为多个文件，用冒号分隔：

`EXTERNAL_HOOK_FILES=/data/hook1.js:/data/hook2.js`

{% hint style="info" %}
**小白提示**：一个钩子文件就是一个普通的 JavaScript 文件，文件名随意，比如 `hook.js`。设置 `EXTERNAL_HOOK_FILES` 环境变量后，n8n 启动时会自动加载这些文件。多个文件用冒号 `:` 分隔（这是类 Unix 系统里「路径列表」的常见写法，和 Windows 用分号 `;` 不一样）。写完之后重启 n8n 才能生效。
{% endhint %}

### 钩子文件（Hook files）

钩子文件是格式如下的普通 JavaScript 文件：

```js
module.exports = {
    "frontend": {
        "settings": [
            async function (settings) {
                settings.oauthCallbackUrls.oauth1 = 'https://n8n.example.com/oauth1/callback';
                settings.oauthCallbackUrls.oauth2 = 'https://n8n.example.com/oauth2/callback';
            }
        ]
    },
    "workflow": {
        "activate": [
            async function (workflowData) {
                const activeWorkflows = await this.dbCollections.Workflow.count({ active: true });

                if (activeWorkflows > 1) {
                    throw new Error(
                        'Active workflow limit reached.'
                    );
                }
            }
        ]
    }
}
```

{% hint style="info" %}
**小白提示**：看懂这个文件的结构——`module.exports` 后面是一个对象，键名是「钩子的分类」（比如 `frontend`、`workflow`、`credentials`），每个分类下再按「具体钩子名」（比如 `settings`、`activate`）挂一个**数组**，数组里是你要执行的函数。同一个钩子可以挂多个函数，n8n 会按顺序逐个执行。上面这个例子演示了：启动时改写 OAuth 回调地址（`frontend.settings`），并且当已激活工作流超过 1 个时抛错（`workflow.activate`），阻止继续激活。
{% endhint %}

### 钩子示例（Hook examples）

#### 缺少必需标签时阻止工作流执行（Block workflow execution if a required tag is missing）

请注意：`workflowContext` 参数自 n8n 2.23.0 起会传递给 `workflow.preExecute` 钩子。关于接收该参数的钩子完整列表及其起始版本，请参见 [工作流钩子上下文（Workflow hook context）](#workflow-hook-context)。

使用 `workflow.preExecute` 在工作流缺少必需标签时中止执行：

```js
module.exports = {
	workflow: {
		preExecute: [
			async function (workflow, mode, workflowContext) {
				const requiredTag = 'exampleTag';
				const workflowTags = await workflowContext.getWorkflowTags(workflow.id);
				if (!workflowTags.includes(requiredTag)) {
					throw new Error(`Workflow is missing required tag "${requiredTag}", aborting`);
				}
			},
		],
	},
};
```

{% hint style="info" %}
**小白提示**：这个例子的逻辑：工作流每次执行前，先查一下它有没有 `exampleTag` 这个标签，如果没有就抛出错误、中止执行。可以推广成「没有某个标签的工作流禁止执行」这类企业规范。注意第 5 行 `workflowContext.getWorkflowTags(workflow.id)` 里的 `workflow.id` 取自钩子函数收到的第一个参数 `workflow`。
{% endhint %}

### 工作流钩子上下文（Workflow hook context）

部分工作流钩子会收到一个 `workflowContext` 参数，它是 `WorkflowHookContextService` 的一个实例。它提供了一些可以在钩子函数内部调用的辅助方法（helper methods）。

{% hint style="info" %}
**自 n8n 2.23.0 起可用**

n8n 会向 `workflow.preExecute` 钩子传递 `workflowContext`。
{% endhint %}

{% hint style="info" %}
**自 n8n 2.33.1 起可用**

n8n 会向 `workflow.create`、`workflow.afterCreate`、`workflow.activate`、`workflow.deactivate`、`workflow.update`、`workflow.afterUpdate` 和 `workflow.postExecute` 钩子传递 `workflowContext`。
{% endhint %}

上下文提供以下方法：

| 方法（Method） | 返回值（Returns） | 说明（Description） |
| :----- | :------ | :---------- |
| `getWorkflowTags(workflowId: string)` | `Promise<string[]>` | 返回附加到指定工作流上的标签名称列表。 |
| `resolveIsTriggerNodeType(type: string, typeVersion?: number)` | `boolean` | 如果给定的节点类型是一个触发器（trigger），则返回 `true`。`type` 是节点的完整限定名（fully qualified node type name），例如 `n8n-nodes-base.manualTrigger`。`typeVersion` 默认为最新注册的版本。当 n8n 无法解析该节点类型时（例如该节点没有注册在实例上）返回 `false`。 |

这个例子使用 `resolveIsTriggerNodeType` 来阻止激活「不包含触发器节点」的工作流：

```js
module.exports = {
	workflow: {
		activate: [
			async function (workflowData, workflowContext) {
				const hasTrigger = workflowData.nodes.some((node) =>
					workflowContext.resolveIsTriggerNodeType(node.type, node.typeVersion),
				);
				if (!hasTrigger) {
					throw new Error('Workflow must contain a trigger node, aborting activation');
				}
			},
		],
	},
};
```

{% hint style="info" %}
**小白提示**：这个例子的作用：激活工作流之前，检查它里面有没有「触发器节点」（比如定时触发、Webhook 触发等）。如果一个工作流没有任何触发器，它激活了也不会自己跑起来，所以这里直接拒绝激活。`workflowData.nodes.some(...)` 的意思是「遍历所有节点，只要有一个满足条件就返回 true」。
{% endhint %}

### 工作流生命周期钩子的操作者（Workflow lifecycle hook actor）

部分工作流生命周期钩子会收到一个 `actor` 参数，它是「执行该操作的用户」的一个精简投影（minimal projection）。你可以用它来记录操作归属，例如根据用户的身份或角色来允许或拒绝某个操作。

{% hint style="info" %}
**自 n8n 2.33.1 起可用**

n8n 会向 `workflow.create`、`workflow.afterCreate`、`workflow.activate`、`workflow.deactivate`、`workflow.update`、`workflow.afterUpdate`、`workflow.delete`、`workflow.afterDelete`、`workflow.afterArchive` 和 `workflow.afterUnarchive` 钩子传递 `actor`。该参数是可选的，当 n8n 无法确定操作用户时，它可以是 `undefined`。
{% endhint %}

`actor` 对象包含以下属性：

| 属性（Property） | 类型（Type） | 说明（Description） |
| :------- | :--- | :---------- |
| `id` | `string` | 用户的唯一 ID。 |
| `email` | `string \| null` | 用户的邮箱地址。可以是 `null`，例如某个用户已被邀请但还没有完成设置。 |
| `firstName` | `string \| null` | 用户的名字。可以是 `null`，例如某个用户已被邀请但还没有完成设置。 |
| `lastName` | `string \| null` | 用户的姓氏。可以是 `null`，例如某个用户已被邀请但还没有完成设置。 |
| `role` | `string` | 用户的角色标识（role slug），例如 `global:admin`。可选。 |

这个例子使用 `actor` 记录是谁删除了工作流：

```js
module.exports = {
	workflow: {
		delete: [
			async function (workflowId, actor) {
				console.log(`Workflow ${workflowId} deleted by ${actor?.email} (${actor?.role})`);
			},
		],
	},
};
```

{% hint style="info" %}
**小白提示**：`actor?.email` 里的 `?.` 是 JavaScript 的「可选链」写法，意思是「如果 `actor` 存在就取 `.email`，不存在就返回 `undefined`」——这样即使 n8n 判断不出操作用户，代码也不会报错，只是打印出 `undefined`。
{% endhint %}

### 钩子函数（Hook functions）

一个钩子（hook）或一个钩子文件可以包含多个钩子函数，所有函数会一个接一个地执行。

如果钩子函数的参数是对象（objects），那么你可以在函数里修改该参数的数据，从而改变 n8n 的行为。

你还可以在任何钩子函数中通过 `this.dbCollections` 访问数据库（参见上方 [钩子文件（Hook files）](#hook-files) 中的代码示例）。

## 前端外部钩子（Frontend external hooks）

与后端外部钩子类似，你也可以在前端代码中定义外部钩子，每当用户执行特定操作时，n8n 就会运行它们。例如，你可以用它们记录数据和修改数据。

{% hint style="info" %}
**小白提示**：后端钩子在「服务器」上跑，前端钩子在「浏览器」里跑。前端钩子适合做界面层面的交互记录，比如「用户改了某个节点的设置时记录下来」「用户打开了执行记录时做点什么」。一般用户很少需要用到前端钩子，了解即可。
{% endhint %}

### 可用的前端钩子（Available hooks）

| 钩子（Hook）     | 说明（Description） |
| :------- | :---------- |
| `credentialsEdit.credentialTypeChanged` | 当已有凭据的类型发生变化时调用。 |
| `credentials.create` | 当有人创建新凭据时调用。 |
| `credentialsList.dialogVisibleChanged` |  |
| `dataDisplay.nodeTypeChanged` |  |
| `dataDisplay.onDocumentationUrlClick` | 当有人点击帮助文档链接时调用。 |
| `execution.open` | 当打开一条已有的执行记录时调用。 |
| `executionsList.openDialog` | 当有人从已有工作流执行记录中选择一条执行时调用。 |
| `expressionEdit.itemSelected` |  |
| `expressionEdit.dialogVisibleChanged` |  |
| `nodeCreateList.filteredNodeTypesComputed` |  |
| `nodeCreateList.nodeFilterChanged` | 当有人对节点面板的过滤器做任何更改时调用。 |
| `nodeCreateList.selectedTypeChanged` |  |
| `nodeCreateList.mounted` |  |
| `nodeCreateList.destroyed` |  |
| `nodeSettings.credentialSelected` |  |
| `nodeSettings.valueChanged` |  |
| `nodeView.createNodeActiveChanged` |  |
| `nodeView.addNodeButton` |  |
| `nodeView.mount` |  |
| `pushConnection.executionFinished` |  |
| `showMessage.showError` |  |
| `runData.displayModeChanged` |  |
| `workflow.activeChange` |  |
| `workflow.activeChangeCurrent` |  |
| `workflow.afterUpdate` | 当有人更新一条已有工作流时调用。 |
| `workflow.open` |  |
| `workflowRun.runError` |  |
| `workflowRun.runWorkflow` | 当工作流执行时调用。 |
| `workflowSettings.dialogVisibleChanged` |  |
| `workflowSettings.saveSettings` | 当有人保存工作流的设置时调用。 |

{% hint style="info" %}
**小白提示**：上表中说明为空的行，表示该钩子目前没有官方文档说明其具体触发场景（它们仍然可以被挂载函数，但一般用不到）。挂载了函数后，只要对应事件发生，函数就会被调用。
{% endhint %}

### 注册前端钩子（Registering frontend hooks）

你可以通过在页面上加载钩子脚本的方式来设置钩子。其中一种做法是在项目中创建一个钩子文件，然后在你的 `editor-ui/public/index.html` 文件中添加一个脚本标签：

```html
<script src="frontend-hooks.js"></script>
```

### 前端钩子文件（Frontend hook files）

前端外部钩子文件是格式如下的普通 JavaScript 文件：

```js
window.n8nExternalHooks = {
  nodeView: {
    mount: [
      function (store, meta) {
        // do something
      },
    ],
    createNodeActiveChanged: [
      function (store, meta) {
        // do something
      },
      function (store, meta) {
        // do something else
      },
    ],
    addNodeButton: [
      function (store, meta) {
        // do something
      },
    ],
  },
};
```

### 前端钩子函数（Frontend hook functions）

你可以为每个钩子定义多个钩子函数。n8n 会用以下参数调用每个钩子函数：

* `store`：Vuex store 对象。你可以用它来修改或获取 store 中的数据。
* `metadata`：包含钩子提供的任何数据的对象。要查看具体传入了什么，请在 `editor-ui` 包中搜索该钩子。
