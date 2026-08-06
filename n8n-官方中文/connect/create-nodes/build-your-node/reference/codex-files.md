---
contentType: reference
nodeTitle: Codex files
originalFilePath: integrations/creating-nodes/build/reference/node-codex-files.md
originalUrl: >-
  https://docs.n8n.io/integrations/creating-nodes/build/reference/node-codex-files
url: 'https://docs.n8n.io/connect/create-nodes/build-your-node/reference/codex-files'
layout:
  description:
    visible: false
---

# 节点 codex 文件（Node codex files）

codex 文件包含关于你的节点的元数据（metadata）。这个文件是位于你的节点根目录的 JSON 文件。例如，n8n 起步模板中的 [`GithubIssues.node.json`](https://github.com/n8n-io/n8n-nodes-starter/blob/master/nodes/GithubIssues/GithubIssues.node.json) 文件。

codex 文件名必须与节点基础文件名匹配。例如，给定一个名为 `MyNode.node.ts` 的节点基础文件，codex 文件就应命名为 `MyNode.node.json`。

{% hint style="info" %}
**小白提示**：可以这么记——「基础文件（`.node.ts`）是节点的身体，codex 文件（`.node.json`）是节点的身份证/户口本」。它记录的是节点的名字、版本、分类、文档链接等「信息」，而不是代码逻辑。n8n 靠它来识别节点、把节点放进正确的分类。
{% endhint %}

| 参数（Parameter） | 说明（Description） |
| -------- | ----------- |
| `node`    | 标识这个节点。社区节点使用包名，格式为 `n8n-nodes-<your-node-name>`（你的节点名）。例如，`n8n-nodes-github-issues`。n8n 的内置节点使用 `n8n-nodes-base.` 前缀，例如 `n8n-nodes-base.openweatherapi`。 |
| `nodeVersion` | 节点版本。这个值应该与你主节点文件中的 `version` 参数相同。例如，`"1.0"`。 |
| `codexVersion` | codex 文件的版本。当前版本是 `"1.0"`。 |
| `categories` | `categories` 数组中的设置决定 n8n 在图形界面（GUI）中把你的节点添加到哪个分类。更多信息请参见[节点分类（Node categories）](#node-categories)。 |
| `resources` | `resources` 对象包含指向你节点文档的链接。n8n 会在图形界面中自动为凭据和节点添加帮助链接。 |

## 节点分类（Node categories）

你可以在节点配置 JSON 中定义一个或多个分类。这有助于 n8n 把节点放到节点面板（nodes panel）中正确的分类里。

从以下分类中选择：

* Data & Storage（数据与存储）
* Finance & Accounting（财务与会计）
* Marketing & Content（营销与内容）
* Productivity（生产力）
* Miscellaneous（其他/杂项）
* Sales（销售）
* Development（开发）
* Analytics（分析）
* Communication（通信）
* Utility（实用工具）

你必须严格匹配写法。例如，要写 `Data & Storage`，而不是 `data and storage`。
