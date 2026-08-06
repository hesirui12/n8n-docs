---
nodeTitle: n8n 文档风格指南
originalFilePath: dummy1.md
originalUrl: https://docs.n8n.io/dummy1
url: https://docs.n8n.io/contribute/style-guide-for-n8n-docs
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

# n8n 文档风格指南（Style guide for n8n Docs）

> 💡 **小白提示**：这份指南是"写给 n8n 文档作者看的写作规范"。如果你想了解 n8n 官方文档为什么要这样写、以及如何写出统一风格的文档，就往下读；如果你只是用 n8n，这份指南可以仅作了解。

## 写作风格（Writing style）

n8n 遵循[微软写作风格指南（Microsoft Writing Style Guide）](https://docs.microsoft.com/en-us/style-guide/welcome/)。本页面强调了对 n8n Docs 最重要的要素，并补充了我们自己的风格选择。

### 平实的语言（Plain language）

* 清晰地解释你正在记录的流程中的每一步。
* 使用现在时（present tense）。
* 尽量保持文字简洁。两个免费的浏览器应用可以帮忙：
  * [Hemingway](https://hemingwayapp.com/) 可以衡量语言复杂度。对于该达到几年级的阅读水平并没有硬性规定，但阅读等级越低越好。
  * [Lexi](https://rebilly.github.io/lexi/) 可以衡量 Markdown 文本的写作复杂度，把多种指标合并成一个可读性分数。理想的综合可读性分数 60 应被视为最低要求——大多数页面的分数应该更高。

注意这些常见写法，并优先使用更平实的版本：

| 避免使用（Avoid） | 改用（Use instead） |
| ------------------------------------------- | ---------------------- |
| utilize、leverage | use（使用） |
| in order to | to（为了） |
| functionality、capabilities | features、what it does（功能、它能做什么） |
| It's important to note that X | X（直接说 X） |
| n8n provides a powerful, seamless way to... | n8n lets you...（n8n 让你可以……） |

几条经验法则（rules of thumb）：

* **删掉废话填充词。**去掉"It's important to note that"（值得注意的是）或"Simply"（简单地）这类开头。
* **避免营销腔。**别用"powerful"（强大）、"robust"（健壮）、"seamless"（无缝）这类词。直接说明这个功能能做什么。
* **删掉含糊的修饰语。**去掉"very"（非常）、"quite"（相当）、"several"（几个），或者给出具体的数字。
* **保持句子简短。**每句不超过 30 个词，一句一个意思。用分号或第二个"and"连接起来的句子，拆开。
* **以动作为开头，而不是"There is"。**写"To schedule a workflow, add a Schedule Trigger"（要定时运行工作流，就添加一个 Schedule Trigger 触发器），而不是"There is a node that can schedule workflows"（有一个节点可以定时运行工作流）。

### 语态和人称（Voice and person）

写作时就像在直接对读者说话。

* **使用主动语态。**写"n8n sends the request"（n8n 发送请求），而不是"the request is sent by n8n"（请求由 n8n 发送）。
* **用"you"称呼读者。**写"You can add a node"（你可以添加一个节点），而不是"Users can add a node"（用户可以添加一个节点）。
* **避免第一人称。**说 n8n，而不是"I"、"we"或"our"。"n8n recommends"（n8n 建议），而不是"we recommend"（我们建议）。
* **使用缩写形式。**用"Don't"和"you'll"，而不是"do not"和"you will"。

### 包容性语言（Inclusive language）

为所有人写作。

* **对于未知性别的人使用"they"。**写"Every user can configure their settings"（每个用户都可以配置他们的设置），而不是"his settings"（他的设置）。
* **选择中性词汇。**用"Chair"（主席），不用"chairman"（主席，男性倾向）。用"Main"（主），不用"master"（主，有主从联想）。

### 术语与命名（Terminology and naming）

在每一处，同一个概念都使用同一个术语，并且优先使用官方产品术语，而不是似是而非的同义词（例如，写"publish a workflow"，而不是"activate a workflow"）。正文中使用句首大写（sentence case）；对于字面上的 UI 标签或节点名称，使用加粗并保持产品的原始大小写。产品名称写成"n8n"，小写，即使是在句首。

完整的术语对照表请参见[术语与命名](terminology.md)词表。

### 文本格式（Text formatting）

* 标题：句首大写（sentence case，[更多信息](https://docs.microsoft.com/en-us/style-guide/scannable-content/headings#formatting-headings)）
* UI 元素：加粗（[更多信息](https://docs.microsoft.com/en-us/style-guide/procedures-instructions/formatting-text-in-instructions)）
* 用户输入：使用代码格式。占位符用尖括号里的连字符词表示。例如 `<your-root-directory>`（你的根目录）。
* 文件名、目录名和路径：使用代码格式。
* 确保品牌名称书写精确。例如："GitHub"，而不是"Github"。

### 数字、日期和时间（Numbers, dates, and times）

0 到 9 用英文单词书写，10 及以上用数字书写。

明显的例外：

* **小数**：始终使用数字，即使小于 10（例如 3.5，而不是 three point five）
* **百分比**：使用数字（例如 5%，而不是 five percent）
* **版本号和其他技术字符串**：使用数字（例如 n8n 2.1、step 3）
* **计量单位**：使用数字（例如 5px、3MB）

**日期和时间**

* 月份写全称，不用序数词："July 31, 2016"（2016 年 7 月 31 日），而不是"31/07/2016"或"July 31st"。
* 使用带空格的"AM"/"PM"："9 AM"，而不是"9am"。

**范围（Ranges）**

* 正文中使用"from X to Y"或"X through Y"："from 5 to 10 nodes"（从 5 到 10 个节点）。
* 表格或标签中的数字范围使用短破折号（en dash，–），而不是连字符："5–10"。
* 表示时间范围用"to"："9 AM to 5 PM"，而不是"9 AM–5 PM"。

[更多信息](https://docs.microsoft.com/en-us/style-guide/numbers)

### 标点和间距（Punctuation and spacing）

* **句子之间用一个空格**，不要用两个。
* **标点放在引号内。**"Select Save,"（选择"保存"，）而不是"Select Save"（选择"保存"）。
* **使用牛津逗号（Oxford comma）。**"triggers, nodes, and credentials"（触发器、节点和凭据，在"and"前也要逗号）。
* **避免使用长破折号（em dash，—）。**改用逗号或另起一句。"Add a node, then save"（添加一个节点，然后保存），而不是"Add a node — then save"。
* **避免使用省略号（…）。**"Configure the settings, then continue"（配置设置，然后继续），而不是"Configure the settings..."。

## 页面长度与粒度（Page length and granularity）

把内容拆分成主题集中的页面，每个页面只讲一个概念、一项任务或一类参考内容。目标是一个中间地带：既不要一整页巨无霸，也不要碎片化的一堆小片段。人类读者和 AI 工具都最适合阅读自包含（self-contained）、带标题结构的页面：驱动搜索和文档助手的 AI 工具会把内容按 `##` 和 `###` 标题切块，一次检索一个区块。

### 长度（Length）

* **健康范围：**大约 1,500 到 20,000 个字符（250 到 3,000 个词）。对人来说是可以快速扫读的区块，对 AI 工具来说是可以干净检索的块。
* **低于约 1,500 个字符就合并。**这么小的页面或区块低于有用的分块大小：AI 搜索会把它和不相关的邻居合并，而且把一个主题过度拆分到多个小页面会明显降低回答质量。把残缺的小页面并入父页面或同级页面。
* **超过约 25,000 个字符就拆分**，如果页面混装了不同类型的内容（概念、操作指南和参考资料混在一起），或者某个区块无限增长（比如按客户列一长串示例），也要拆分。
* **绝不要超过约 50,000 个字符。**AI 代理会截断更长的页面，所以超过这个限制的内容对它们来说就是不可见的。

### 如何拆分（How to split）

* 沿着**类型或任务的边界**拆分（概念、操作指南、参考资料、示例），而不是随意按长度拆。这符合读者的浏览习惯，也让每个区块只围绕一件事。
* 把相关的事实**放在同一页**（某个类别的所有环境变量、某个节点的所有参数）。AI 搜索会把相邻内容放在一起，所以内容越接近，上下文保持得越好。

### 让每个区块自包含（Keep each section self-contained）

一个区块被单独检索到时，如果它依赖相邻内容，就会丢失上下文，AI 代理只能靠猜来填补空白。请把每个区块写成"单独落在这里的读者也能看懂"：

* **写描述性的、句首大写的标题。**标题是 AI 搜索检索到的单位，而且往往不包含页面其余部分，所以要把区块的主题写全："Configure the Schedule Trigger"（配置 Schedule Trigger 触发器），而不是"Configuration"（配置）。
* **让每个区块可以独立理解。**把读者需要的关键上下文重述出来，而不是回指。"as mentioned above"（如上所述）、"as described in the previous section"（如前节所述）和"see below"（见下文）都要避免。一个乱序检索到这个区块的代理，或者从搜索进来的读者，都无法跟随这些回指。
* **重述，而不是复制。**重复这个区块需要的一两条关键事实就够了，不要重复整段。如果两个区块需要同样的长解释，这往往说明它们应该合并到一个标题之下。保持重述简短，这样页面才简洁（参见[平实的语言](#plain-language)）。

### 链接相关页面、前置条件和下一步（Link to related pages, prerequisites, and next steps）

把每个页面和同一主题的其他页面连接起来。明确、描述性的链接让代理可以直接沿路径前进，而不必猜 URL；同时它们把你的页面聚成主题簇（topic cluster），AI 搜索会把它当作"内容深度"的信号。

* **至少始终链接前置条件和下一步。**
* **父子页面双向链接。**概览页或板块首页要列出并链接到每一个子页面；每个子页面用 `./` 链接回它的父页面。
* **目标是同一主题有五个或更多互相链接的页面。**AI 搜索引用互联簇的频率远高于孤立页面。
* **在正文中、第一次有意义地提到时链接**，使用能点名目标的描述性锚文本：[Configure the Schedule Trigger](configure-schedule-trigger.md)（配置 Schedule Trigger 触发器），而不是"click here"（点这里）。链接第一次出现的地方，而不是每次都链。
* **链接到不同主题；不要为了补上下文而链接。**链接不能替代这个区块需要的上下文。如果某个区块不读链接页面就无法理解，那就重述关键事实（参见[让每个区块自包含](#keep-each-section-self-contained)）。

## 功能可用性（Feature availability）

一个功能的可用性可能受三种方式限制：

* **套餐或平台（Plan or platform）**：它在哪个 n8n Cloud 套餐或自托管版本上可用。
* **版本（Version）**：哪个 n8n 版本引入、弃用或移除了它。
* **预览状态（Preview status）**：它是否仍在稳定中、可能会改变，或者还没有向所有人推出。

套餐/平台和版本限制共用一套文档体系，先介绍它（见下）。预览状态的写法不同，总是单独记录，参见下面的[预览状态](#preview-status)。

### 套餐、平台和版本限制（Plan, platform, and version limits）

在以下三种层级之一记录这些限制：

* **页面或区块级：**在页面标题或相关标题下方，放一个标题为 **Feature availability**（功能可用性）的 `info` 提示。见下面的"Feature availability 提示"。
* **行内或顺带提及：**在更大的功能中，某个小选项、字段、角色或行为旁边加一句简短说明；或者正文中提到但没有独立标题的整个功能或节点——把限制融进句子里。参见下面的[行内和顺带提及](#inline-and-passing-mentions)。
* **表格行：**在多行中的某一行，把限制写在描述单元格里；如果有多行的限制不同，也可以加一列专门列出来。见下面的"表格行"。

#### Feature availability 提示（Feature availability hints）

示例：

**同时有套餐和版本限制：**

```
{% hint style="info" %}
**Feature availability**

Environments are available on:

- **n8n Cloud:** Pro, Enterprise
- **Self-hosted:** Enterprise

Available from n8n 2.30.0.
{% endhint %}
```

**只有套餐限制：**

```
{% hint style="info" %}
**Feature availability**

Single sign-on is available on:

- **n8n Cloud:** Pro, Enterprise
- **Self-hosted:** Enterprise
{% endhint %}
```

**只有套餐限制、单一平台**，带必需的"不可用"说明行：

```
{% hint style="info" %}
**Feature availability**

Multi-main setup is available on:

- **Self-hosted:** Enterprise

It isn't available on n8n Cloud.
{% endhint %}
```

**套餐注意事项，加上版本：**

```
{% hint style="info" %}
**Feature availability**

Custom roles are available on:

- **Self-hosted:** Enterprise

On n8n Cloud Enterprise, contact n8n to enable it.

Available from n8n 2.30.0.
{% endhint %}
```

**只有版本限制**：主体可以是某个具名功能：

```
{% hint style="info" %}
**Feature availability**

Canvas Groups are available from n8n 2.28.0.
{% endhint %}
```

**只有版本限制、节点的情况**：主体可以是一个节点：

```
{% hint style="info" %}
**Feature availability**

The Chat Trigger node is available from n8n 1.24.0, replacing the Manual Chat Trigger node.
{% endhint %}
```

**已弃用或已移除**使用 `warning` 而不是 `info`。如果是"移除"就替换措辞（例如，"`N8N_RUNNERS_ENABLED` removed from n8n 3.0"）。这里的主体是一个设置项：

```
{% hint style="warning" %}
**Feature availability**

`N8N_RUNNERS_ENABLED` is deprecated from n8n 2.0.
{% endhint %}
```

如果整个页面都在讲一个已弃用或已移除的功能，还要加一个 `deprecated`（已弃用）主标签（关于标签如何工作，参见 Frontmatter 下的[标签](#tags)）。不要添加 `status:` 字段，因为 `deprecated` 不是它的合法取值：

```
---
tags:
  - tag: deprecated
    primary: true
---
```

该标签需要在所在空间的 `.gitbook/tags.yaml` 中定义标签名"Deprecated"和红色。

规则：

* **提示样式：**弃用或移除用 `warning`（读者需要采取行动）；其他情况用 `info`。同时包含两者的提示用 `warning`。
* **在正文中点名主体。**"Feature availability"提示标题并没有说明什么功能可用，所以要在后面的句子里点明节点、设置项或功能。不要依赖提示块外的标题。保持"available from n8n X.Y.Z"作为不被拆开的连续子串。
* **平台项目符号：**以"<Feature> <is/are> available on:"（某功能可用于：）开头。两个平台都要点名，绝不靠"不写"来暗示没有。两个平台都可用：各列一条。只有一个平台可用：列那条，然后在下面加一行"不可用"说明（"It isn't available on n8n Cloud."（在 n8n Cloud 上不可用）/ "...self-hosted."（……自托管版上不可用））。只有在另一平台有条件可用（例如按需开通）时：用一条注意事项行取代"不可用"行。
* **套餐等级：**从低到高列出，用逗号分隔，绝不用"and"。云版顺序：Starter、Pro、Enterprise。自托管顺序：Community、Registered Community、Business、Enterprise。使用精确的大写名称，并完整拼出"Registered Community"。
* **写"n8n Cloud"，不要写"Cloud"。**光秃秃的"Cloud"有歧义。
* **整个平台：**写 `All plans`（所有套餐）或 `All editions`（所有版本），而不是把每个等级都列出来。"All plans"包含免费试用（免费试用镜像 Pro 功能）。永远不要列出试用本身；只在试用页面上提它。
* **在项目符号下方，按顺序：**（1）"不可用"行，或取代它的注意事项行，（2）版本句，（3）其他功能特有的注意事项。
* **没有套餐限制**（只有版本、弃用或移除）：跳过项目符号，只要标题和句子。
* **不要链接到 Compare plans and editions（套餐对比）或发布说明。**本指南更早的版本给每条提示都加了这些链接；现在直接在句子里陈述事实，让读者自己去搜索来源。

#### 行内和顺带提及（Inline and passing mentions）

对于更大功能内部的小控件、选项、字段或角色，或者正文中提到的、没有独立标题的整个功能或节点，使用行内写法。页面级或区块级的限制不要用行内写法：那种情况用提示块。

* 点名具体的东西，而不是"this feature"（此功能）或"this option"（此选项），因为它必须脱离上下文也能独立成立。
* 每个条目一句话；如果套餐/平台和版本都适用就两句，套餐/平台在前。
* 两个平台如果都相关就都要提到；不要靠不写来暗示没有。
* 明确说明版本、弃用或移除（"available from n8n X"（自 n8n X 起可用）、"deprecated from n8n X"（自 n8n X 起弃用））。跳过提示风格的"Available from"开头。
* 超过两句话，或者需要两行平台项目符号：升级为局部提示块。

以下示例代码块按翻译规范逐字保留（英文原句），中文含义附在代码块后的说明中。

对于控件、选项、字段或角色：

```
The **Scopes** option is available on n8n Cloud Pro, Enterprise, and self-hosted Enterprise.
```

> 中文含义：**Scopes** 选项在 n8n Cloud Pro、Enterprise 以及自托管 Enterprise 上可用。

```
The **Legacy format** field is deprecated from n8n 2.30.0.
```

> 中文含义：**Legacy format** 字段自 n8n 2.30.0 起弃用。

对于没有独立标题的整个功能或节点，把限制融进句子里：

```
The Data table node (available from n8n 2.17.0) stores data between executions.
```

> 中文含义：Data table 节点（自 n8n 2.17.0 起可用）在执行之间存储数据。

```
The environments feature (n8n Cloud Enterprise, self-hosted Enterprise) lets you promote workflows between instances.
```

> 中文含义：environments 功能（n8n Cloud Enterprise、自托管 Enterprise）让你可以在实例之间提升（promote）工作流。

#### 表格行（Table rows）

适用于表格中众多行里的某一行。使用与行内文本相同的措辞和顺序。

把限制放在描述单元格里：

| 变量（Variable） | 类型（Type） | 默认值（Default） | 描述（Description） |
| :--- | :--- | :--- | :--- |
| `N8N_RUNNERS_ENABLED`（已弃用） | Boolean | `false` | 是否启用任务运行器（task runners）。自 n8n 2.0 起弃用；你不再需要设置它。 |

如果多行的限制不同，也可以加一列专门列出：

| 变量（Variable） | 可用于（Available on） | 描述（Description） |
| :--- | :--- | :--- |
| `N8N_LDAP_ENABLED` | 自托管 Business、Enterprise（Self-hosted Business, Enterprise） | 是否启用 LDAP 登录。 |
| `N8N_SMTP_HOST` | 所有版本（All editions） | 用于发送外发邮件的 SMTP 服务器主机名。 |

### 版本措辞（Versioning wording）

#### 两种版本类型（Two version types）

n8n 有两个独立的版本号。永远不要让读者去猜你指的是哪一个。

* **实例版本（Instance version）**：n8n 的发布版本，写成三段式 semver（语义化版本号），例如 2.30.0。用于功能、环境变量、API、CLI 命令和 hooks。
* **节点版本（Node version）**：节点的版本号，通常是两段式，例如 4.7。只用于节点特有的信息。

在正文中，要给光秃秃的数字加上限定词：写"n8n 2.30.0"或"node version 4.7"（节点版本 4.7），而不是只写"version 2"（版本 2）。

#### 版本号的写法（Writing version numbers）

遵循[数字规范](#numbers-dates-and-times)，再加上这些针对 n8n 实例版本的规则：

* **使用产品名称和数字**：n8n 2.30.0。
* **不要加 `v` 前缀**：写"n8n 2.30.0"，而不是"n8n v2.30.0"。
* **不要在"n8n"后面写"version"一词**：光数字就很清楚。写"n8n 2.30.0"，而不是"n8n version 2.30.0"。

### 预览状态（Preview status）

预览（Preview）功能是可用的，但还不完整或不稳定，并且可能会变化。"Preview"是一个功能的成熟度标签。用它来描述功能状态，不要用"beta"。

**页面或区块级：**使用与可用性提示相同的 `**Feature availability**` 标题。在标题下面的句子里点名节点或功能，而不是在标题里。提示会被独立于周围标题快速扫读，所以必须是句子来承载点名，而不是标题：

```
{% hint style="info" %}
**Feature availability**

The Data table node is in preview and may change in future releases. Avoid relying on it in production workflows.
{% endhint %}
```

> 中文含义：Data table 节点处于预览状态，在未来的版本中可能会改变。避免在生产工作流中依赖它。

如果整个页面都在讲一个处于预览状态的功能，还要设置 `status: preview` 并添加 `preview` 主标签（关于标签如何工作，参见 Frontmatter 下的[标签](#tags)）：

```
---
status: preview
tags:
  - tag: preview
    primary: true
---
```

可参考 [Build and manage agents](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/build-and-manage-agents) 查看一个实际示例。

**行内或顺带提及：**对于小控件，或者正文中提到的、没有独立标题的整个功能或节点：

```
The **Streaming response** option is in preview and may change in future releases.
```

> 中文含义：**Streaming response** 选项处于预览状态，在未来的版本中可能会改变。

```
The Data table node is in preview and may change in future releases.
```

> 中文含义：Data table 节点处于预览状态，在未来的版本中可能会改变。

* **在有用的时候和版本挂钩**："In preview from n8n 2.20.0"（自 n8n 2.20.0 起处于预览）。
* **与 Feature availability 提示或说明分开。**如果某个功能同时有套餐或版本限制，就两者叠加：预览提示旁边放一个可用性提示，或者预览句旁边放一个可用性句，而不要把预览措辞折叠进另一个。
* **如果一条行内预览说明超过一句话，就升级为页面级或区块级提示。**

## Vale 检查（Vale linting）

n8n 使用 [Vale](https://vale.sh/) 来检查（lint）文档。检查会强制执行本指南定义的规则，并支持写作质量。

这套检查由以下部分组成：

* 仓库根目录下的一个 `.vale.ini` 文件，包含配置。
* 一个 `styles` 目录，包含样式定义。其中既有现成的样式库，也有 n8n 特有的样式。
* 一个 GitHub Action（GitHub 自动任务）。当 PR 打开或修改时运行 Vale，并直接在 PR 上报告任何违规。

你可以按如下方式在本地运行 Vale：

1. 按照 Vale 文档[安装 Vale CLI](https://vale.sh/docs/install)。
2. 选择从命令行检查，还是安装文本编辑器插件：
   1. 运行 `vale docs/` 检查 `docs` 目录中的所有 Markdown 文件
   2. 或者安装插件，在文本编辑器中自动查看问题。如果使用 VS Code，安装 ChrisChinchilla 的 [vale-vscode](https://github.com/ChrisChinchilla/vale-vscode)。

> 💡 **小白解释**：lint（检查）就像给文字做"自动校对+规则体检"——Vale 会按预设的写作规则扫描文档，指出用词不当、术语不规范等问题。规则文件就放在仓库里，所以开箱即用。

## Frontmatter（Frontmatter）

Frontmatter 位于页面顶部，必须是合法的 YAML。n8n Docs 使用以下 frontmatter 字段：

* `description`：页面内容的简短摘要。n8n 可能会在搜索结果和链接预览中显示它。
* `hidden`：设为 `true` 时，把页面从站点的侧边菜单中移除。如果页面应该出现在菜单中（大多数页面都是如此），省略此字段。
* `layout.description.visible`：设为 `false` 时，在渲染出来的页面上隐藏 frontmatter 描述。始终包含此字段并设为 `false`。
* `generated`：设为 `true` 时，把页面标记为完全由自动化管理。不要手动更新这些页面。

Frontmatter 示例（代码块逐字保留）：

```
---
description: Learn how to merge data streams in your n8n workflows.
layout:
  description:
    visible: false
---
```

> 中文含义：description（描述）字段写的是"学习如何在你的 n8n 工作流中合并数据流"。

{% hint style="info" %}
你可能会在现有的 n8n Docs 页面上看到其他 frontmatter 字段，例如 `contentType`、`nodeTitle`、`originalFilePath`、`originalUrl` 和 `url`。这些字段支持既有页面的迁移管理。不要把它们加到新页面上。
{% endhint %}

### 标签（Tags）

**视觉标签（visual tag）**会作为标签渲染在页面上，如果 `primary: true`，还会显示在侧边菜单中。只有在该空间的 `.gitbook/tags.yaml` 中定义了它（它的标签名和颜色），它才会渲染。把它作为对象添加到 `tags` 数组中：

```
---
tags:
  - release
  - tag: preview
    primary: true
---
```

在这个例子中，只有 `tag: preview` 是视觉标签。`release` 只是一个普通字符串，在 `.gitbook/tags.yaml` 中没有对应条目，所以它什么都不渲染。`tags` 数组可以像这样携带惰性字符串，旁边放一个真正的视觉标签；它们是不同的东西，不是第二个视觉标签。

* 视觉标签必须先在该空间的 `.gitbook/tags.yaml` 中定义，然后才能使用：先检查它是否存在，如果缺失就添加上。
* 视觉标签只是一个标签。它不能替代页面上的解释性提示。提示才是你解释状态含义的地方；标签只是在界面上做标记。
* 文档中当前允许的视觉标签集合是：**Deprecated**（已弃用，整个页面讲一个已弃用功能）、**Preview**（预览，整个页面讲一个处于[预览](#preview-status)状态的功能）和 **Archived**（已归档，不再更新的页面）。不要创建或使用除这三个之外的任何视觉标签。

## 页面导航（Page navigation）

每个空间在其根目录都有一个 `SUMMARY.md` 文件，它定义侧边栏：显示哪些页面、按什么顺序、如何嵌套。GitBook 根据这个文件构建导航，所以新页面只有加进 `SUMMARY.md` 后才会出现在侧边栏中。仅仅创建 `.md` 文件是不够的。

`SUMMARY.md` 是一个嵌套的 Markdown 列表。每个条目用一个相对路径链接到一个页面，路径相对于空间根目录（`SUMMARY.md` 所在的文件夹），并包含 `.md` 扩展名。`README.md` 是空间或板块的落地页，缩进表示页面嵌套在它下面：

```
# Summary

* [Administer](README.md)
* [Manage credentials](manage-credentials/README.md)
  * [Share credentials securely](manage-credentials/share-credentials-securely.md)
  * [Credential overwrites](manage-credentials/credential-overwrites.md)
```

添加页面时：

* 在正确的 `SUMMARY.md` 中为它加一行，放在你想要它出现的位置。
* 用页面标题作为链接文字。它不必和页面的标题完全一致，但要尽量接近。
* 把它缩进到父板块下面以嵌套。条目的顺序决定侧边栏中的顺序。

移动、重命名或删除页面时，同步更新它在 `SUMMARY.md` 中的条目。

## Markdown 和 GitBook 块（Markdown and GitBook blocks）

站点使用 [GitBook](https://www.gitbook.com/) 生成。页面用 [Markdown](https://commonmark.org/) 编写，加上 GitBook 特有的组件，如提示框（callouts）、标签页（tabs）和结构化页面元素。GitBook 把这些组件称为**块（blocks）**，下面几节介绍你最常用的那些。

{% hint style="info" %}
关于每种可用块类型的 Markdown 写法，参见 [GitBook 文档](https://gitbook.com/docs/creating-content/blocks)。
{% endhint %}

### 标题（Headings）

用纯 Markdown 写标题（`## Heading text`），使用句首大写。GitBook 会自动从标题文本生成可点击的锚点，所以不要自己添加锚点标记。

你会在现有页面上看到显式的锚点标签，比如：

```
## Heading text <a href="#heading-text" id="heading-text"></a>
```

这些锚点固定了稳定的链接位置，这样即使标题文本以后变了，指向标题的链接仍然有效。新标题不必添加它们，但已有的要保留。如果你改写了一个已带锚点的标题，请保留它的锚点标签，这样现有链接才不会失效。

> 💡 **说明**：在本中文版翻译中，按翻译规范统一去掉了 `<a href id>` 锚点标签。

### 链接（Links）

#### 外部链接（External links）

使用标准 Markdown 链接语法：

```
[commits](https://github.com/n8n-io/n8n/compare/n8n@0.176.0...n8n@0.177.0)
```

外部链接会自动在新标签页中打开。

#### 内部链接（Internal links）

如何链接取决于目标页面在**同一个空间（space）**还是**不同的空间**。`docs/` 下的每个顶层文件夹（如 `build/`、`deploy/`、`administer/`）都是一个独立的 GitBook 空间。

**在同一个空间内**，使用标准 Markdown 链接语法，链接到目标文件的相对路径，并包含它的 `.md` 扩展名。链接到目标文件本身，而不是手打一个裸路径，因为这些引用会在页面移动或重命名时自动保持更新。

相对路径取决于目标页面相对于你正在编辑的页面的位置。下面的示例都假设你正在编辑这个文件树中的 `current-page.md`：

```
docs/                                     # docs root
├── build/                                # current space
│   ├── README.md                         # space landing page
│   ├── understand-workflows/             # subfolder (section) in the space
│   │   ├── README.md                     # section landing page (parent of current-page.md)
│   │   ├── current-page.md               # <- you're editing this page
│   │   └── another-page.md               # sibling page, same level
│   └── manage-workflows/                 # another subfolder in the same space
│       ├── README.md                     # section landing page
│       └── export-import.md              # page in a different subfolder
├── deploy/                               # another space
│   ├── README.md                         # space landing page
│   └── hosting/                          # subfolder in another space
│       ├── environment-variables.md      # page in a different space
│       └── configure.md                  # another page in that subfolder
└── administer/                           # another space
```

**链接到同一空间、同一子文件夹中的页面**

只用文件名：

```
[link text](another-page.md)
```

**链接到当前页面的父页面**

使用 `./`，它指向父页面——当前文件夹（`understand-workflows`）的 `README.md` 落地页：

```
[link to a parent page](./)
```

**链接到同一空间、不同子文件夹中的页面**

用 `../` 逐级跳出当前文件夹，再进入目标文件夹：

```
[link to a page](../manage-workflows/export-import.md)
```

**链接到不同空间中的页面**

相对文件路径只在空间内有效。GitBook 把空间之间的链接解析为页面引用，而不是文件路径，所以指向另一个空间的 `../../` 路径是不行的。改为链接到目标页面的 GitBook URL：

```
https://app.gitbook.com/s/<spaceId>/<page-path>
```

URL 由两部分构成：

* `<spaceId>`：目标页面所在空间的 ID。在下面的表格中查找。
* `<page-path>`：目标页面在其空间文件夹中的路径，去掉 `.md` 扩展名。`README.md` 变成它的文件夹路径（例如 `host-n8n/configure-n8n/README.md` 就只是 `host-n8n/configure-n8n`）。

例如，要从 `administer` 空间中的一个页面，链接到 `deploy` 空间中的 `docs/deploy/host-n8n/configure-n8n/user-management.md`：

```
[link to a page](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/user-management)
```

`docs/` 下的每个顶层文件夹都是一个独立空间：

| 空间文件夹（Space folder） | 空间 ID（Space ID） |
| ------------------------------ | ---------------------- |
| `get-started` | `CxSeOtVxqqhfxMSac0AV` |
| `build` | `rPN1zU5jaYNvwH7RzxqA` |
| `connect` | `r7wKI4I1BgdBCuq5Cvcx` |
| `integrations` | `BKcbOzIWja8NfqKDcqHc` |
| `deploy` | `jm0ZYRpZIPWge2ZSiDYO` |
| `administer` | `wMJrGrimpx3PxCJpUswm` |
| `privacy-and-security` | `ukPPOMQ6NId4gpAIkPXa` |
| `changelog` | `hhM8Cox90Piiv0u0EgHM` |
| `contribute` | `6OmLnmci5kZDzdkzKREn` |

如果你不想手动拼 URL，可以在 GitBook 中打开目标页面并复制它的链接。如果你没有 GitBook 访问权限，就改用页面已发布的 `https://docs.n8n.io/...` 地址。

{% hint style="info" %}
如果某个空间被添加、移除或重新创建，请更新此表格。只要空间存在，空间 ID 就是稳定的。添加、移动或编辑页面不会改变它们，但删除后重建的空间会获得一个新 ID。
{% endhint %}

### 图片（Images）

图片是文字的补充；它们从不单独承载信息。AI 代理和屏幕阅读器只能收到图片的替代文本（alt text）和文件路径，而不是图片本身，所以读者必须执行或知道的一切都必须写在正文里：

* **把每条操作说明都写成文字。**截图可以展示屏幕长什么样，但操作步骤（"Select **Add trigger**, then choose **On schedule**"——选择"Add trigger"，然后选择"On schedule"）必须写出来。绝不要把某个设置、数值、菜单路径或点击目标的唯一副本放在图片里。
* **不要给文字截图。**把代码、命令、错误消息和配置值放在代码块或表格里，这样读者可以复制、代理可以读取。不要贴终端或代码编辑器的照片。
* **把截图当作确认，而不是指令。**用它们来帮读者定位或确认自己在正确的位置，并且总是和书面步骤放在一起，而不是取代书面步骤。

每个空间有一个存放其所有图片的文件夹，位于该空间根目录的 `.gitbook/assets/`：

```
docs/                                     # docs root
├── build/                                # space root
│   ├── .gitbook/
│   │   └── assets/                       # all images for this space live here
│   │       └── workflow-overview.png
│   ├── understand-workflows/
│   │   └── current-page.md
│   └── manage-workflows/
│       └── export-import.md
└── deploy/                               # another space
    ├── .gitbook/
    │   └── assets/                       # all images for this space live here
    │       └── hosting-diagram.png
```

图片必须存放在使用它的空间的 `.gitbook/assets/` 文件夹中。不能引用另一个空间资源文件夹中的图片。

引用图片时使用相对于你正在编辑的页面的路径。从空间内的任何页面出发，先上到空间根目录，再进入 `.gitbook/assets/`：

**从一级深的页面**（例如 `build-workflows/manage-workflows/export-import.md`）：

`![Alt text](../.gitbook/assets/workflow-overview.png)`

**从二级深的页面**（例如 `build-workflows/understand-workflows/current-page.md`）：

`![Alt text](../../.gitbook/assets/workflow-overview.png)`

**替代文本（Alt text）**

始终编写描述性的替代文本。它支持无障碍访问，并且在图片加载失败时显示。

* 描述图片显示的内容，而不是它是什么。"Workflow canvas with a Schedule Trigger connected to an HTTP Request node"（带有连接到 HTTP Request 节点的 Schedule Trigger 触发器的工作流画布），而不是"screenshot"（截图）。
* 保持在 125 个字符以内。
* 不要以"Image of"（……的图片）或"Screenshot of"（……的截图）开头。

**图片文件**

* 截图和示意图使用 PNG。
* 图标和简单插画在可用时使用 SVG。
* 保持文件大小合理——提交前压缩 PNG。[Squoosh](https://squoosh.app/) 是一个免费的浏览器工具。
* 使用小写、带连字符的文件名：`workflow-overview.png`，而不是 `WorkflowOverview.PNG`。

### 视频（Videos）

不要把视频文件存进 n8n-docs 仓库。把视频托管在外部——例如 YouTube、Loom 或其他[受支持的域名](https://iframely.com/domains)——然后嵌入到页面中。

要嵌入视频，把 URL 放进 embed 标签，如下所示：

```
{% embed url="https://www.youtube.com/embed/your-video-id" %}
```

### 代码示例（Code examples）

使用制表符（tabs）而不是空格。这一点很重要，因为 n8n 节点 linter（代码检查器）强制这种约定。'Creating nodes'（创建节点）一节中的任何代码示例都可能被复制到用户的节点里，如果用了空格，就会导致 linter 报错。

使用带语言标识的围栏式代码块（fenced code blocks）以获得语法高亮：

````
```typescript
// Your code here
```
````

```typescript
// Your code here
```

GitBook 支持[可选的代码块设置](https://gitbook.com/docs/creating-content/blocks/code-block)。在有助于读者时，添加标题、换行或行号：

````
{% code title="MyNode.node.ts" overflow="wrap" lineNumbers="true" %}
```typescript
// Your code here
```
{% endcode %}
````

{% code title="MyNode.node.ts" overflow="wrap" lineNumbers="true" %}
```typescript
// Your code here
```
{% endcode %}

### 为每个功能展示可运行示例（Show worked examples for each feature）

任何有代码、表达式或配置入口的内容，都要包含一个可运行的示例。读者和编码代理对示例的依赖超过对文字说明的依赖。

* **先覆盖常见场景，再覆盖会出问题的场景。**先展示最直接的路径，然后是边界情况（空输入、分页、速率限制）和失败情况（读者会看到的错误，以及修复方法）。
* **多样性优先于数量。**三个各不相同的示例胜过六个几乎一样的。不要凑数；要变化。
* **在行内注释意图。**说明每个示例做什么、为什么，这样它就不会被误认为是另一条指令。
* **给每个占位符加标签。**使用尖括号里的连字符词，与[文本格式](#text-formatting)一致：`<your-api-key>`，而不是 `YOUR_KEY` 或真实值。
* **用结构表达约束，而不是叙述。**把参数、默认值和限制放在表格或 schema（结构定义）块里，而不是写成一段话。

如果你展示一个错误示例，请把正确示例放在旁边。孤零零的错误代码片段会被别人直接复制。

### 提示块（Hints）

提示块（也叫 admonitions 或 callouts，提醒/标注）把读者的注意力引到某些重要的具体信息上。有四种提示样式：`info`、`warning`、`danger` 和 `success`。用法如下：

* `info` 用于一般性说明、你想突出的信息，以及功能限制框（仅限于某些平台或价格等级的功能）。
* `warning` 用于有风险或意外行为的情况。
* `danger` 用于高安全风险的情况（例如在你的本地 n8n 实例上开隧道），或有破坏性的情况（用户做错了可能永久丢失数据）。
* `success` 用于正向确认或小技巧。要少用。

**不要过度使用提示块。用多了就会失效。**

使用以下[提示语法](https://gitbook.com/docs/creating-content/blocks/hint)（代码块逐字保留）：

```
{% hint style="info" %}
Some hint content.
{% endhint %}
```

{% hint style="info" %}
一些提示内容（Some hint content.）
{% endhint %}

如果你想给提示块加一个标题（header block），把标题块作为提示的第一行：

```
{% hint style="info" %}
## This is the hint title/heading

Some hint content.

{% endhint %}
```

{% hint style="info" %}
### 这是提示的标题（This is the hint title/heading）

一些提示内容（Some hint content.）
{% endhint %}

### 可折叠块（Collapsible blocks）

和提示块类似，但是默认折叠的。用户点击展开。用于那些会占满页面空间的补充细节。

可折叠内容由标准的 HTML `<details>` 块渲染：

```
<details>

<summary>Summary text the user clicks</summary>

Some collapsible content. Standard Markdown works inside the block.

</details>
```

<details>

<summary>用户点击的摘要文字（Summary text the user clicks）</summary>

一些可折叠内容。标准 Markdown 在块内同样有效。（Some collapsible content. Standard Markdown works inside the block.）

</details>

### 标签页内容（Tabbed content）

当一块内容因为外部因素（平台、编程语言等）而不同时，用标签页把它们分开**可能**是有用的，这样用户只看到与自己相关的内容。标签页区块要少用，因为它们可能影响可发现性。

标签页只用于**简短的**平行变体。一个读者只会看到一个变体，但 AI 工具会读每一个变体，所以长变体或大量变体会让页面膨胀。整个标签页区块控制在约一个屏幕以内（合计约 3,000 个字符）。当变体超过这个规模时（每个都是完整步骤，或者有四个及以上非平凡的变体），放弃标签页，给每个变体在页面上分配一个自己的标题，让每个都成为干净、自包含的区块。只有当合并后的页面会超过[页面长度规范](#page-length-and-granularity)，或者变体集合是开放式的，才把每个变体拆成单独页面。把共用的设置和解释放在标签页区块之外，这样它们不会在每个变体中重复。

标签页内容这样标记（代码块逐字保留）：

```
{% tabs %}
{% tab title="First tab" %}
The content is rendered following the normal Markdown syntax. To add a list:

* Item one
* Another item
* Still more items
{% endtab %}

{% tab title="Second tab" %}
1. Content for the second tab.
2. No indentation is required.
{% endtab %}
{% endtabs %}
```

{% tabs %}
{% tab title="第一个标签页（First tab）" %}
内容按照普通 Markdown 语法渲染。要添加列表：

* 第一项（Item one）
* 另一项（Another item）
* 更多项（Still more items）
{% endtab %}

{% tab title="第二个标签页（Second tab）" %}
1. 第二个标签页的内容（Content for the second tab）。
2. 不需要缩进（No indentation is required）。
{% endtab %}
{% endtabs %}

### 嵌入工作流（Embedded workflows）

你可以在页面中嵌入一个 n8n 工作流，让读者直接在文档里查看和交互。通过模板 API URL 引用一个已发布的模板：

```
{% @n8n-blocks/n8n-workflow-demo content="" url="https://api.n8n.io/workflows/templates/1747" %}
```

找到模板 API URL 的方法：取一个已发布模板的 ID，把它加在 `https://api.n8n.io/workflows/templates/` 后面。
