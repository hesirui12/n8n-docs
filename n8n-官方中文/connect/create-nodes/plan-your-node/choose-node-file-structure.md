---
contentType: explanation
nodeTitle: Choose node file structure
originalFilePath: integrations/creating-nodes/build/reference/node-file-structure.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/node-file-structure
url: >-
  https://docs.n8n.io/connect/create-nodes/plan-your-node/choose-node-file-structure
layout:
  description:
    visible: false
---

# 节点文件结构（Node file structure）

在节点结构中遵循最佳实践和标准，会让你的节点更容易维护。如果其他人需要接手你的代码，好的结构也非常有帮助。

你的节点的文件和目录结构取决于：

* 你的节点的复杂程度。
* 你是否使用节点版本控制（node versioning）。
* 这个 npm 包里包含多少个节点。

n8n 建议使用 [`n8n-node` 工具](../build-your-node/using-the-n8n-node-tool.md)来生成符合预期的节点文件结构。你也可以按需定制生成出来的脚手架（scaffolding），以满足更复杂的需求。

{% hint style="info" %}
**小白提示：什么是「脚手架」？**

脚手架（scaffolding）就是官方工具帮你自动生成的一整套项目骨架——目录、配置文件、示例代码都给你铺好了，你只需要往里面填自己的业务逻辑。好处是：目录结构、命名规范从一开始就是对的，不用自己从零手搓，也不会踩「少了某个配置文件」这种坑。
{% endhint %}

## 必需的文件和目录（Required files and directories）

你的节点必须包含：

* 一个位于项目根目录的 `package.json` 文件。每个 npm 模块都需要它。
* 一个 `nodes` 目录，里面存放你的节点代码：
    * 这个目录必须包含[基础文件](../build-your-node/reference/base-files/README.md)，命名格式为 `<node-name>.node.ts`。例如 `MyNode.node.ts`。
    * n8n 建议包含一个 [codex 文件](../build-your-node/reference/codex-files.md)，里面存放节点的元数据。codex 文件名必须与节点基础文件名保持一致。例如，如果节点基础文件叫 `MyNode.node.ts`，那么 codex 文件就叫 `MyNode.node.json`。
    * `nodes` 目录还可以包含其他文件和子目录，包括用于存放不同版本的子目录，也可以把节点代码拆分成多个文件，形成模块化结构。
* 一个 `credentials` 目录，里面存放你的凭据（credentials）代码。这些代码放在单个[凭据文件](../build-your-node/reference/credentials-files.md)中。文件名格式为 `<node-name>.credentials.ts`。例如 `MyNode.credentials.ts`。

{% hint style="info" %}
**小白提示：为什么文件名这么讲究？**

n8n 通过文件名来「认」你的代码：`.node.ts` 结尾 = 节点文件，`.credentials.ts` 结尾 = 凭据文件，且节点文件名必须和 codex 文件名一一对应。文件命名错一个字母，节点就可能加载不出来。所以请严格按照 `<名字>.node.ts` / `<名字>.credentials.ts` 这种格式来命名。
{% endhint %}

## 模块化结构（Modular structure）

你可以选择把节点的全部功能放在一个文件里，也可以拆分成一个基础文件加其他模块，再由基础文件去 import（引入）它们。除非你的节点非常简单，否则把功能拆分出去是一种最佳实践。

一个基本的拆分模式是把各个操作（operations）分离出来。可以参考 [GithubIssues 入门节点](https://github.com/n8n-io/n8n-nodes-starter/tree/master/nodes/GithubIssues)的示例。

对于更复杂的节点，n8n 建议采用目录结构。可以参考 [Airtable 节点](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Airtable)或 [Microsoft Outlook 节点](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Microsoft/Outlook)的示例。

* `actions`：一个目录，里面包含代表资源（resources）的子目录。
    * 每个子目录应包含两种类型的文件：
      * 一个带有资源描述的 index 文件（命名为 `<resourceName>.resource.ts` 或 `index.ts`）。
      * 各个操作的 `<operationName>.operation.ts` 文件。这些文件应有两个导出（exports）：操作的 `description` 和一个 `execute` 函数。
* `methods`：一个可选目录，用于存放动态参数的函数。
* `transport`：一个目录，包含通信（communication）的实现代码。

{% hint style="info" %}
**小白提示：模块化有什么好处？**

想象一下把 30 个操作全部塞进一个文件——文件会长达几千行，你滚动找代码都要半天。拆分成 `actions/<资源名>/<操作名>.operation.ts` 之后，每个文件只负责一件事，改某个操作时只打开对应的小文件即可。这就是「高内聚、低耦合」的思想，也方便多人协作：每个人各改各的文件，几乎不冲突。
{% endhint %}

## 版本控制（Versioning）

如果你的节点有多个版本，并且你使用的是完整版本控制（full versioning），这会让文件结构更复杂。你需要为每个版本建一个目录，另外还需要一个基础文件来设置默认版本。更多关于版本控制的类型以及如何操作版本的信息，请参阅[节点版本控制](../build-your-node/reference/versioning.md)。

## 决定一个包里放多少个节点（Decide how many nodes to include in a package）

构建节点时有两种可能的组织方式：

* 一个 npm 包里放一个节点。
* 一个 npm 包里放多个节点。

n8n 两种方式都支持。如果你要在一个包里放多个节点，每个节点都应该在 `nodes` 目录中拥有自己的子目录。

## 编程式节点的最佳实践示例（A best-practice example for programmatic nodes）

n8n 内置的 [Airtable 节点](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Airtable)采用了模块化结构和版本控制，遵循了推荐的模式。如果你想看一个「教科书级别」的真实案例，直接去翻它的源码即可。
