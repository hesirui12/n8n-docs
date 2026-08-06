---
title: 循环处理数据项 Loop Over Items (Split in Batches)
description: >-
  n8n 工作流自动化平台中「循环处理数据项 Loop Over Items」节点的中文文档。
  包含使用方法说明和示例链接。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: Loop Over Items (Split in Batches)
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches
layout:
  description:
    visible: false
---

# 循环处理数据项 Loop Over Items

> **大白话**：这个节点是「分批循环处理数据」的开关。它把一堆数据按固定数量（比如一次 1 条）切成一小批一小批，每次通过 **loop（循环）** 输出口吐出一批给你后面的节点处理；等全部处理完，再从 **done（完成）** 输出口把结果汇总吐出来。典型用途：一次只能处理一条数据的节点（如 RSS 读取）、或者要一页一页翻接口避免触发限流（rate limit）的场景。

「循环处理数据项 Loop Over Items」节点帮助你在需要时循环遍历数据。

节点会保存原始的输入数据，并且在每次迭代时，通过 **loop（循环）** 输出口返回预定义数量的数据。

当节点执行完成时，它会把所有已处理的数据组合起来，通过 **done（完成）** 输出口返回。

## 什么时候使用「循环处理数据项 Loop Over Items」节点

默认情况下，n8n 的节点被设计为处理一整个列表的输入数据项（也有一些例外，下面会详细说明）。根据你要达成的目标，你的工作流通常并不需要「循环处理数据项 Loop Over Items」节点。你可以在[「n8n 中的循环」](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/flow-logic/loop)页面了解 n8n 是如何处理多个数据项的。

以下链接突出了一些「循环处理数据项 Loop Over Items」节点可能用得上的场景：

* [循环直到所有数据项都被处理](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/flow-logic/loop#loop-until-all-items-are-processed)：说明「循环处理数据项 Loop Over Items」节点与普通数据项处理有何不同，以及你可能想引入这个节点的时机。
* [节点例外](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/flow-logic/loop#node-exceptions)：列出了一些具体情况和节点，你可能需要用到「循环处理数据项 Loop Over Items」节点来手动构建循环逻辑。
* [避免触发速率限制](../handle-rate-limits.md)：演示如何通过分批处理 API 请求来避免其他服务的速率限制。

## 节点参数

### 批处理大小 Batch Size

输入每次调用要返回的数据项数量。

（白话解释：比如填 1，就是每次只吐 1 条数据；填 10，就是每次吐 10 条。）

## 节点选项

### 重置 Reset

如果开启，节点会在每次循环时用当前输入数据重新初始化并重置。当你希望「循环处理数据项 Loop Over Items」节点把传入的数据当作一组全新的数据（而不是上一批数据项的延续）时，使用这个选项。

例如，你可以把带重置选项的「循环处理数据项 Loop Over Items」节点和一个 [If 节点](n8n-nodes-base.if.md) 结合起来，去查询一个分页接口，而你不提前知道需要翻多少页。循环一次查询一页，做任何处理，然后递增页码。循环重置确保循环把每次迭代都识别为一组新数据。If 节点评估一个退出条件，决定是否进行下一次迭代。

{% hint style="warning" %}
**务必包含一个有效的终止条件**

对于上面描述的工作流，必须为循环包含一个有效的终止条件，这一点至关重要。如果你的终止条件永远不成立，你的工作流执行将陷入无限循环。
{% endhint %}

（白话解释：无限循环 = 工作流永远跑不完，会一直空转浪费资源，所以「什么时候停」这个条件一定要写对。）

启用后，你可以把参数表示从 **固定值 Fixed** 切换为 **表达式 Expression** 来调整重置条件。你的表达式求值结果将决定节点何时重置数据项处理。

## 模板和示例

[浏览循环处理数据项（Loop Over Items (Split in Batches)）的集成模板](https://n8n.io/integrations/split-in-batches) 或 [搜索所有模板](https://n8n.io/workflows/)

### 从两个不同的来源读取 RSS 订阅

这个工作流让你使用「循环处理数据项 Loop Over Items」节点从两个不同的来源读取 RSS 订阅。你的工作流中需要「循环处理数据项 Loop Over Items」节点，因为 RSS 订阅读取（RSS Feed Read）节点只处理它接收到的第一个数据项。你也可以在 n8n.io 上找到这个[工作流](https://n8n.io/workflows/687-read-rss-feed-from-two-different-sources/)。

这个示例逐步讲解了如何构建该工作流，但假设你已经熟悉 n8n。要构建你的第一个工作流，包括学习如何向工作流中添加节点，请参考 [试一试](https://app.gitbook.com/s/CxSeOtVxqqhfxMSac0AV/build-your-first-workflow)。

最终的工作流长这样：

{% @n8n-blocks/n8n-workflow-demo content="%7B%0A%20%20%22nodes%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%7D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.manualTrigger%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%201%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%200%2C%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%22e6e1cfe6-eff1-48bd-b21c-6ba83d4244d9%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22When%20clicking%20%E2%80%98Execute%20workflow%E2%80%99%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22jsCode%22%3A%20%22return%20%5B%5Cn%5Ct%7B%5Cn%5Ct%5Ctjson%3A%20%7B%5Cn%5Ct%5Ct%5Cturl%3A%20%27https%3A%2F%2Fmedium.com%2Ffeed%2Fn8n-io%27%2C%5Cn%5Ct%5Ct%7D%5Cn%5Ct%7D%2C%5Cn%5Ct%7B%5Cn%5Ct%5Ctjson%3A%20%7B%5Cn%5Ct%5Ct%5Cturl%3A%20%27https%3A%2F%2Fdev.to%2Ffeed%2Fn8n%27%2C%5Cn%5Ct%5Ct%7D%5Cn%5Ct%7D%5Cn%5D%3B%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.code%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%202%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%20220%2C%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%22137f1128-45b6-4bc4-a9fb-8660baa652a9%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22Code%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22options%22%3A%20%7B%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.splitInBatches%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%203%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%20440%2C%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%223449a953-49c2-4a36-ba3d-cbc0573f3f6c%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22Loop%20Over%20Items%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22url%22%3A%20%22%3D%7B%7B%20%24json.url%20%7D%7D%22%2C%0A%20%20%20%20%20%20%20%20%22options%22%3A%20%7B%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.rssFeedRead%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%201.1%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%20660%2C%0A%20%20%20%20%20%20%20%20100%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%22cc2e59d7-0a9b-4640-8052-d8f7f8d8c9fe%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22RSS%20Read%22%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22connections%22%3A%20%7B%0A%20%20%20%20%22When%20clicking%20%E2%80%98Execute%20workflow%E2%80%99%22%3A%20%7B%0A%20%20%20%20%20%20%22main%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22node%22%3A%20%22Code%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22main%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22index%22%3A%200%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22Code%22%3A%20%7B%0A%20%20%20%20%20%20%22main%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22node%22%3A%20%22Loop%20Over%20Items%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22main%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22index%22%3A%200%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22Loop%20Over%20Items%22%3A%20%7B%0A%20%20%20%20%20%20%22main%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22node%22%3A%20%22RSS%20Read%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22main%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22index%22%3A%200%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22RSS%20Read%22%3A%20%7B%0A%20%20%20%20%20%20%22main%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22node%22%3A%20%22Loop%20Over%20Items%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22main%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22index%22%3A%200%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%22pinData%22%3A%20%7B%7D%2C%0A%20%20%22meta%22%3A%20%7B%0A%20%20%20%20%22instanceId%22%3A%20%22cb484ba7b742928a2048bf8829668bed5b5ad9787579adea888f05980292a4a7%22%0A%20%20%7D%0A%7D%0A" url="https://raw.githubusercontent.com/n8n-io/n8n-docs/refs/heads/main/docs/_workflows/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/rss-feed-example.json" %}

把上面的工作流文件复制下来，粘贴到你的 n8n 实例中，或者按照以下步骤手动构建它：

1. 添加手动触发器（manual trigger）。
2. 添加 Code 节点。
3. 把这段代码复制到 Code 节点中：
	```js
	return [
		{
			json: {
				url: 'https://medium.com/feed/n8n-io',
			}
		},
		{
			json: {
				url: 'https://dev.to/feed/n8n',
			}
		}
	];
	```
（这段代码生成了两个待处理的 URL：Medium 的 n8n 订阅源和 dev.to 的 n8n 订阅源。）
4. 添加「循环处理数据项 Loop Over Items」节点。
5. 配置「循环处理数据项 Loop Over Items」：在 **批处理大小 Batch Size** 字段中把批处理大小设为 `1`。
6. 添加 RSS 订阅读取（RSS Feed Read）节点。
7. 点击 **执行工作流 Execute Workflow**。这会运行工作流，把数据加载进 RSS 订阅读取节点。
8. 配置 RSS 订阅读取：把输入中的 `url` 映射到 **URL** 字段。你可以从 **输入 INPUT** 面板拖拽过去，或者使用这个表达式：`{{ $json.url }}`。
9. 点击 **执行工作流 Execute Workflow** 运行工作流，查看最终的数据。

### 检查节点是否已处理完所有数据项

要检查节点是否还有待处理的数据项，使用以下表达式：`{{$("Loop Over Items").context["noItemsLeft"]}}`。这个表达式返回一个布尔值（true/false）。如果节点还有要处理的数据，表达式返回 `false`，否则返回 `true`。

### 获取节点当前的运行索引

要获取节点当前的运行索引（第几次迭代），使用以下表达式：`{{$("Loop Over Items").context["currentRunIndex"];}}`。
