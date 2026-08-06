---
nodeTitle: n8n 文档贡献指南
originalFilePath: dummy2.md
originalUrl: https://docs.n8n.io/dummy2
url: https://docs.n8n.io/contribute/contribution-guide-for-n8n-docs
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

# n8n 文档贡献指南（Contribution guide for n8n Docs）

n8n Docs（n8n 官方文档）欢迎所有人的贡献。本指南介绍了贡献流程，以及你需要遵循的规范。

> 💡 **小白提示**：如果你只是想"看懂 n8n 官方文档"，而不是想参与写文档，那这份指南你可以先跳过；它主要是给"想帮忙改进文档的人"看的。不过读完它，你也会更理解为什么文档要这样写。

## 简介（Introduction）

n8n Docs 是 [n8n](https://n8n.io) 的官方文档，涵盖从入门到高级工作流自动化的所有内容。它由 n8n 团队维护，但社区贡献同样可以发挥很大作用——比如改进讲解方式、更新过期内容、修复错误等等。

所有贡献都必须遵守我们的[行为准则（Code of Conduct）](https://github.com/n8n-io/n8n-docs/blob/main/CODE_OF_CONDUCT.md)，并遵循本贡献指南以及风格指南中规定的标准。这样才能保证 n8n Docs 的质量和一致性。

n8n Docs 的内容托管在我们的 [GitHub](https://github.com/n8n-io/n8n-docs) 仓库中。网站使用 [GitBook](https://www.gitbook.com/) 生成。页面用 [Markdown](https://commonmark.org/) 编写，并带有 GitBook 特有的组件，比如提示框（callouts）、标签页（tabs）和结构化页面元素。

{% hint style="info" %}
**小白解释**：Markdown 是一种"轻量级标记语言"，简单说就是用一些特殊符号（如 `#`、`**`）来标记标题、加粗等格式，比 Word 之类的排版软件更简单，而且纯文本就能保存。本项目的所有文档文件都是 `.md` 结尾的 Markdown 文件。
{% endhint %}

## 贡献的类型（Types of contribution）

以下是主要的参与方式：

**修复错别字和小错误** 修正拼写错误、失效链接或轻微的不准确之处。

**改进现有页面** 如果某个讲解不清楚、内容过时，或者页面缺少重要信息，你可以提出修改和补充建议。

**提议新页面** 如果你认为文档中完全缺失了某些内容，请告诉我们。在动手写之前，先开一个 issue 描述所需内容。这样可以让团队确认这些内容在文档范围内，也避免和正在进行的工作重复。如果你希望在获批后自己来写这些内容，记得在 issue 里说明。

**随代码变更同步更新文档** 如果你在[主 n8n 仓库](https://github.com/n8n-io/n8n)上提交 PR（Pull Request，拉取请求）——例如新增节点、修改配置项，或修复一个影响文档所述行为的 bug——请同时开一个文档 PR 来反映这些变更。

**报告问题** 也许你发现了文档中的问题，但自己无法修复。那就开一个 issue 描述问题所在，n8n Docs 团队会处理它。

{% hint style="info" %}
**小白解释**：issue 是 GitHub 上的"问题工单"——你可以在上面描述一个 bug、一个需求或一个建议；PR（Pull Request，拉取请求）则是"修改提案"——你把改好的内容提交上去，团队审核通过后就会合并进官方文档。
{% endhint %}

## 什么内容不要提交（What not to submit）

我们不接受以下类型的贡献：

* 对**全自动生成页面（fully-generated pages）**的修改。这些页面由 n8n 工作流自动生成并保持更新。如果你发现问题，请开 issue，而不是直接编辑页面。你可以通过页面 frontmatter（页面顶部的元数据）中的 `generated: true` 字段来识别全自动生成页面。
* 任何形式的**促销或商业内容**，包括把某个供应商或工具加进"兼容选项"的精选列表中。文档中这类列表通常只覆盖最常用的选项，并不是包罗万象的目录——我们力求保持厂商中立，只有存在明确理由时才会扩充这些列表。
* **个人偏好修改**——把符合我们风格指南的内容，替换成你个人更喜欢的措辞或风格。
* **无视这些指南的贡献**。如果一份提交明显没有遵循我们的风格指南或贡献指南，我们可能会不做审查直接关闭。

## 写作指导（Writing guidance）

n8n Docs 使用平实、直接的语言：第二人称（"you"，你）、现在时、主动语态，并遵循[微软写作风格指南（Microsoft Writing Style Guide）](https://learn.microsoft.com/en-us/style-guide/welcome/)。句子要简短、避免行话，并可以使用缩写形式（contractions，如 "don't"）。

完整细节请参考 n8n 风格指南（Style guide for n8n Docs）。

> 💡 **小白解释**：简单说就是"说人话"——像面对面指导朋友一样写文档，用"你"来称呼读者，句子短一点，别堆砌专业词汇。

## 内容类型（Content types）

n8n Docs 使用几种不同的页面类型。弄清楚你写的是哪种类型，有助于你遵循正确的结构并使用正确的模板。每种类型在 [`document-templates/`](https://github.com/n8n-io/n8n-docs/tree/main/document-templates) 文件夹中都有对应模板：

* **集成节点（Integration nodes）**：节点的参考文档。使用与节点类型匹配的模板——[app](https://github.com/n8n-io/n8n-docs/blob/main/document-templates/app-nodes.md)（应用）、[core](https://github.com/n8n-io/n8n-docs/blob/main/document-templates/core-nodes.md)（核心）、[trigger](https://github.com/n8n-io/n8n-docs/blob/main/document-templates/trigger-nodes.md)（触发器）或 [cluster](https://github.com/n8n-io/n8n-docs/blob/main/document-templates/cluster-nodes.md)（集群）节点。
* **凭据（Credentials）**：如何为一个集成进行身份认证（[模板](https://github.com/n8n-io/n8n-docs/blob/main/document-templates/credentials.md)）。
* **常见问题（Common issues）**：某个节点已知的问题及解决办法（[模板](https://github.com/n8n-io/n8n-docs/blob/main/document-templates/common-issues.md)）。
* **功能（Feature）**：某个 n8n 功能的操作指南和参考文档（[模板](https://github.com/n8n-io/n8n-docs/blob/main/document-templates/feature.md)）。
* **教程（Tutorial）**：一步步教读者搭建某样东西的指南（[模板](https://github.com/n8n-io/n8n-docs/blob/main/document-templates/tutorial.md)）。

## 使用 AI 起草贡献（Using AI to draft contributions）

使用 AI 工具来起草或改进贡献内容，完全没问题，我们很欢迎。

我们推荐在你使用的 AI 工具旁边，一并使用位于 [`skills/n8n-docs-author/SKILL.md`](https://github.com/n8n-io/n8n-docs/tree/main/skills/n8n-docs-author) 的 n8n Docs skill 文件。它是我们风格指南的浓缩版，为 AI 代理提供关于 n8n 风格和文档惯例的上下文。这样从一开始就能产出更好的内容，减少后续的修改工作。

**它是如何工作的（How it works）**

如果你在 n8n Docs GitHub 仓库的本地 fork（复制副本）中使用 AI 编码代理，这个 skill 可以自动加载。例如，仓库根目录的 `CLAUDE.md` 文件会把 Claude Code 指向这个 skill，所以你不需要额外做任何事。

如果你没有 fork 仓库，或者你使用的工具不会自动加载 skill，你仍然可以使用它。把 [`SKILL.md`](https://github.com/n8n-io/n8n-docs/blob/main/skills/n8n-docs-author/SKILL.md)、[reference.md](https://github.com/n8n-io/n8n-docs/blob/main/skills/n8n-docs-author/reference.md) 和风格指南的内容复制到你的 AI 代理的上下文中，然后让它在编写或审阅你的文档贡献时遵循这些指导。

**如何使用它（How to use it）**

像平时一样让你的 AI 代理编写或审阅文档。如果要明确指定模式：

* **写（Write）：**"Write a trigger node page for X."（为 X 写一个触发器节点页面。）
* **改（Edit）：**"Edit this page to fix style guide violations."（修改这个页面，修复违反风格指南的地方。）
* **审（Review）：**"Review this page against the style guide."（对照风格指南审查这个页面。）

对于审查，AI 代理会返回一个按严重程度分组的 issue 表格，并附上建议的修复方案。

## 贡献方式（Contribution methods）

你可以通过多种不同的方式做出贡献：

### 在浏览器中编辑页面（Edit a page in your browser）

这种方式最适合对单个页面做快速修改。在任意 n8n Docs 页面上点击 **Edit this page**（编辑此页面），GitHub 会引导你完成修改并打开一个拉取请求（PR，Pull Request——向文档添加你的修改的正式提案）。

**前置条件：**一个 [GitHub](https://github.com/) 账号。

1. 在任意 n8n Docs 页面上，点击右上角下拉菜单中的 **Edit**（编辑）。这会带你进入 [n8n Docs GitHub 仓库](https://github.com/n8n-io/n8n-docs)中的对应页面。
2. 点击铅笔图标开始编辑页面。

系统可能会提示你先 fork（复制）这个仓库。点击 **Fork this repository**（复制此仓库），GitHub 会自动为你创建一个 fork。

3. 在文本编辑器中做你的修改，然后点击 **Commit changes**（提交更改）> **Propose changes**（提议更改）。

GitHub 会为你准备好一个[拉取请求](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)。

4. 检查你的拉取请求的标题和描述，必要时进行编辑。满意后，点击 **Create pull request**（创建拉取请求）。

请确保你已经对照过通用检查清单，如果有遗漏就相应修改你的 PR。n8n Docs 团队会审查你的拉取请求，如果通过，就会合并它（发布你建议的修改）。

{% hint style="info" %}
**小白解释**：fork（复制）就是把别人仓库的代码复制一份到你自己名下，你可以在副本上随便改；改完通过 PR 把你的修改"申请"回原仓库，原作者审核后决定是否接受。这是 GitHub 上最标准的协作流程。
{% endhint %}

### 在本地 Fork 仓库（Fork the repository locally）

这种方式适合较大的修改、新页面，或涉及多个文件的工作。

**前置条件：**一个 [GitHub 账号](https://github.com/)、[Git](https://git-scm.com/)，以及本地安装的文本编辑器或 IDE。

1. 在 GitHub 上[fork n8n Docs 仓库](https://github.com/n8n-io/n8n-docs/fork)，然后[在本地克隆它](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)。
2. 为你的修改创建一个新分支（branch）。
3. 在相关页面中做你的修改。如果你添加了新页面，把它加进该空间的 `SUMMARY.md` 文件中，这样它才会出现在导航里。参见风格指南的 Page navigation（页面导航）一节。
4. 用 [Vale](https://vale.sh) 检查你的文章（lint）。先安装它（macOS 上用 `brew install vale`，其他系统参见 [Vale 安装指南](https://vale.sh/docs/install)），然后在仓库根目录运行：

    ```bash
    vale docs/                 # lint a directory
    vale docs/path/to/file.md  # lint a single file
    ```

    Vale 的风格规则随仓库一起提供，所以不需要额外配置。在继续之前，请修复所有错误（errors）和警告（warnings）。

5. 提交（commit）并推送（push）你的分支到 GitHub。
6. 从你的 fork 向 `main` 分支打开一个[拉取请求](https://github.com/n8n-io/n8n-docs/pulls)。

请确保你已经对照过通用检查清单，如果有遗漏就相应修改你的 PR。n8n Docs 团队会审查你的拉取请求，如果通过就会合并它。

**预览你的修改（Preview your changes）**

当你打开一个拉取请求时，GitBook 会自动构建你的修改的预览版本，并把链接附在 PR 上。在 PR 的 **Conversation**（对话）标签页中，找到底部的检查（checks）区域，点击你所编辑空间的 **Check the live preview on your docs site**（在文档站点上查看实时预览）：

![GitBook preview link on a pull request](.gitbook/assets/gitbook-preview-link.png)

然后你就可以检查你的修改在文档站点上的显示效果了。

预览构建完成后，一个机器人还会在你的 PR 上发布一条 **GitBook page previews**（GitBook 页面预览）评论，其中包含你修改的每个页面的直接链接，这样你就不用去导航里找了。每次推送（push）评论都会更新。

![GitBook page previews comment on a pull request](.gitbook/assets/gitbook-preview-links-comment.png)

无法在本地构建这个站点。

{% hint style="info" %}
**小白解释**：这套文档网站是托管在 GitBook 云服务上的，所以"本地构建预览"不可行；但只要你开了 PR，GitBook 就会自动在云端给你生成一份预览链接，直接点开就能看效果，非常方便。
{% endhint %}

### 提交 issue（Open an issue）

如果你发现了问题但不想自己修改内容，或者想在写新内容之前先提出建议，你可以改为提交一个 GitHub issue。

1. 进入 [n8n Docs issues 页面](https://github.com/n8n-io/n8n-docs/issues)。
2. 创建新 issue 之前，先搜索一下已打开的 issues，确认这个问题是否已经存在。
3. 点击 **New issue**（新建 issue），选择最相关的 issue 类型。
4. 填写标题和描述。尽可能提供详细信息——页面 URL、问题出在哪或缺失了什么，以及你有的任何建议。
5. 点击 **Submit new issue**（提交新 issue）。

n8n Docs 团队会对你的 issue 进行分诊（triage），如果还需要更多信息会跟进询问。

## 通用检查清单（General checklist）

在提交修改 n8n Docs 的拉取请求之前，请确保你的贡献满足以下所有条件：

* 所有必要文件和图片都已包含。
* 任何新页面都已添加到所在空间的 `SUMMARY.md` 中，这样它才会出现在导航里。
* 所有格式都遵循风格指南。
* 你的修改能通过 [Vale](https://vale.sh) 文章检查，且没有错误（如果你是在本地贡献——参见上面的"在本地 Fork 仓库"）。
* 所有链接都有效，并且指向正确的位置。
* PR 说明了你所做的修改以及为什么需要这些修改。
* 你没有提交不被接受的贡献类型（参见上文"什么内容不要提交"）。
* 你已阅读并接受[行为准则](https://github.com/n8n-io/n8n-docs/blob/main/CODE_OF_CONDUCT.md)和[贡献者许可协议（Contributor License Agreement）](https://github.com/n8n-io/n8n-docs/blob/main/CONTRIBUTOR_LICENSE_AGREEMENT.md)。

## 审查流程（Review process）

一旦你打开拉取请求，n8n Docs 团队就会审查它，并选择合并、要求修改或关闭。下面是你可以预期的流程：

**时间线（Timeline）** 团队的目标是尽快审查拉取请求。复杂或大型的贡献可能需要更长时间。与主代码库中的 PR 关联的贡献，要等到那个主 PR 合并之后才会被审查。

**标签（Labels）** 团队使用标签来传达你 PR 的状态：

| 标签（Label） | 含义（Meaning） |
| ---------- | ---------- |
| `action:awaiting-author` | 团队已留下反馈，正在等待你回复或修改 |
| `action:needs-review` | 你的 PR 正在队列中，等待技术文档撰写者审查 |
| `action:needs-sme` | 你的 PR 需要领域专家（subject matter expert）审查后才能合并 |
| `status:pending-dev` | 你的 PR 关联着一个尚未合并的代码改动，该改动合并后会开始审查你的 PR |
| `status:in-next-release` | 关联的代码改动已合并，你的 PR 将很快被审查 |
| `status:dev-cancelled` | 你的 PR 关联的代码改动已被取消——文档 PR 将被关闭 |
| `status:duplicate` | 你的 PR 与现有 PR 或 issue 内容重复——该 PR 将被关闭 |
| `status:outdated` | 你的 PR 已被后续的文档修改超越——该 PR 将被关闭 |
| `quality:low-effort-usable` | 你的 PR 可以接受，但只是勉强达标——建议在审查前改进一下 |
| `quality:unusable` | 你的 PR 不符合贡献指南，将被关闭。如果你多次提交被贴上此标签的贡献，你将被禁止继续贡献 |
| `quality:disruptive` | 你的 PR 引入了会严重损害文档的修改。你将立即被禁止继续贡献 |

完整的标签集合见[我们的 GitHub 仓库](https://github.com/n8n-io/n8n-docs/labels)。

**PR 为什么会被关闭（Why a PR might be closed）** 如果内容超出范围、与现有文档重复、不符合风格或贡献指南，或者在被要求修改后一直没有更新，拉取请求可能会被直接关闭而不合并。如果你认为某个 PR 是被误关的，欢迎留言询问澄清。

打开拉取请求，即表示你同意 License（许可证）中所述的条款。

## 许可证（License）

n8n 采用 fair-code（公平代码）许可。通过向 n8n Docs 做贡献，你的贡献也适用同一许可证。更多信息请参阅许可证文档。

> 💡 **小白解释**：fair-code（公平代码）是一种介于"完全开源"和"完全闭源"之间的许可模式——源代码可以查看和修改，但对商业再分发有一些限制。你贡献的内容将沿用项目本身的许可，这意味着你的劳动成果会被保留在项目生态中，但不会被别人拿去商用牟利。

## 获取帮助（Get help）

如果你对贡献有疑问，有几个地方可以获得帮助：

* [**社区论坛（Community forum）**](https://community.n8n.io/)**：**在 documentation（文档）分类下发布关于内容、风格或贡献流程的问题。
* [**Discord**](https://discord.gg/n8n)**：**加入 `#docs` 频道，进行更随意的提问或快速反馈。

如果想特别引起文档团队的注意，可以在你的拉取请求或 issue 中标记 `@n8n-io/docs`。
