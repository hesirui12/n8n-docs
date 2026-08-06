---
contentType: reference
nodeTitle: UX 指南
originalFilePath: integrations/creating-nodes/build/reference/ux-guidelines.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/build/reference/ux-guidelines'
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/reference/ux-guidelines
layout:
  description:
    visible: false
---

# 社区节点 UX 指南

你的节点 UI 必须符合这些指南，才能成为[经过验证的社区节点（verified community node）](../../deploy-your-node/submit-community-nodes.md#submit-your-node-for-verification-by-n8n)候选。

{% hint style="info" %}
**小白提示**：这篇是给「开发 n8n 社区节点」的作者看的规范清单——界面怎么做、文案怎么写、错误信息怎么报，才能通过 n8n 官方的审核（verification）。简单说就是「让你的节点用起来和其他 n8n 节点一样顺手」。
{% endhint %}

## 凭据（Credentials）

API 密钥和敏感的凭据应该始终使用密码字段（password fields，输入时显示为圆点）。

### OAuth

只要可用，就始终包含 OAuth 凭据。

## 节点结构（Node structure）

### 要包含的操作

尽量为每种资源类型都包含 **CRUD** 操作。

尽量在每个资源的节点中包含常见操作。n8n 使用一些 CRUD 操作来保持体验一致，并允许用户对资源执行基本操作。建议的操作如下：

* **创建（Create）**
* **创建或更新（Create or Update，Upsert）**
* **删除（Delete）**
* **获取（Get）**
* **获取多个（Get Many）**：在提供筛选或搜索功能时也使用
* **更新（Update）**

注意事项：

1. 这些操作可以作用于资源本身，也可以作用于资源内部的实体（例如 Google Sheet 中的一行）。当操作作用于资源内部的实体时，你必须在操作名称中指明该**实体的名称**。
2. 命名可能因节点和资源而异。详细规则请看下面的指南。

{% hint style="info" %}
**小白提示**：CRUD 是增删改查（Create 增、Read 查、Update 改、Delete 删）。一个体验好的节点，应该让用户能对资源做这四类基本操作，别只做其中一两个。
{% endhint %}

### 资源定位器（Resource Locator）

* 尽可能使用资源定位器组件。它能给用户好得多的体验。当需要选择单个项目时，资源定位器组件通常最有用。
* 资源定位器组件的默认选项应该是 `从列表选择（From list）`（如果可用）。

### 与其他节点保持一致

* 保持 UX 一致性：n8n 努力保持其 UX 的一致。这意味着要遵循现有的 UX 模式，特别是最新新增或重构节点中使用的模式。
* 参考类似节点：例如，如果你在做数据库节点，值得参考 Postgres 节点。

### 排序选项

* 你可以通过为用户提供排序选项来增强某些「获取多个（Get Many）」操作。
* 把排序放在一个专门的集合中（在「选项（Options）」集合下方）。参考 [Airtable Record:Search](https://github.com/n8n-io/n8n/blob/92e2a8e61a4189025e5d4bac8be81576b624fe85/packages/nodes-base/nodes/Airtable/v2/actions/record/search.operation.ts#L85-L135) 的示例。

## 节点功能（Node functionality）

### 删除操作的输出

删除某个项目（如记录或行）时，返回一个只包含单个对象的数组：`{"deleted": true}`。这是向用户确认删除成功，同时该条目会触发下一个节点。

### 简化输出字段

#### 普通节点：'Simplify'（简化）参数

当端点返回的数据超过 10 个字段时，添加「Simplify」布尔参数，返回最多 10 个字段的简化版输出。

* n8n 的主要问题之一可能是数据量过大，Simplify 参数通过减小数据量来限制这个问题。
* 选择简化节点中最有用的字段来输出，并把最常用的字段排在前面。
* 在 Simplify 模式下，通常最好把嵌套字段打平（flatten）。
* 显示名称：`Simplify`
* 描述：`Whether to return a simplified version of the response instead of the raw data`（是否返回响应的简化版本而不是原始数据）

#### AI 工具节点：'Output'（输出）参数

当端点返回的数据超过 10 个字段时，添加带 3 种模式的「Output」选项参数。

在 AI 工具节点中，让用户更精细地选择要输出的字段。原因是工具可能会耗尽上下文窗口（context window），字段太多会让它困惑，所以最好只传递它需要的字段。

选项：

* **简化版（Simplified）**：与上面描述的「Simplify」参数工作方式相同。
* **原始（Raw）**：返回所有可用字段。
* **选定字段（Selected fields）**：显示一个多选项参数，用于选择要添加到输出并发送给 AI 代理的字段。默认情况下，此选项始终返回记录/实体的 ID。

{% hint style="info" %}
**小白提示**：AI 模型每次对话能「记住」的文字量有限（叫上下文窗口）。所以给 AI 工具用的节点，输出字段要精简——给它太多字段，它反而会看懵、还可能超出窗口报错。
{% endhint %}

## 文案（Copy）

### 大小写（Text Case）

节点的 `name`、`参数显示名称`（标签）、`下拉标题` 使用**标题大小写（Title Case）**——每个单词首字母大写，除了一些小词（冠词、短介词等）。

节点的 `action` 名称、`描述`、`参数描述`（tooltips）、`hints`、`下拉描述` 使用**句子大小写（Sentence case）**——只有首字母大写。

{% hint style="info" %}
**小白提示**：Title Case 如「Delete Record」，Sentence case 如「Delete record」。规则虽小，但对整体观感很重要，审核也会查。
{% endhint %}

### 术语（Terminology）

* **使用第三方服务的术语**：尽量使用你对接服务自己的术语（例如 Notion 里叫「blocks（块）」，不要叫「paragraphs（段落）」）。
* **使用 UI 中的术语**：坚持使用服务用户界面中的术语，而不是 API 或技术文档中的术语（例如在 Trello 中你「archive（归档）」卡片，但 API 里它显示为「closed」。这种情况下，你可能想用「archive」）。
* **不要用技术行话**：能用简单词就别用专业术语。例如用「field（字段）」而不是「key（键）」。
* **命名一致**：为某个东西选定一个词并坚持下去。例如不要混用「directory」和「folder」。

### 占位符（Placeholders）

在参数的占位符中插入内容示例通常很有帮助。这些示例应以「e.g.」开头，字段中的示例内容使用**驼峰式（camel case）**。

可复制的占位符示例：

* 图片：`e.g. https://example.com/image.png`
* 视频：`e.g. https://example.com/video.mp4`
* 搜索词：`e.g. automation`
* 邮箱：`e.g. nathan@example.com`
* Twitter 用户名（或类似）：`e.g. n8n`
* 姓名：`e.g. Nathan Smith`
* 名：`e.g. Nathan`
* 姓：`e.g. Smith`

### 操作的名称（name）、动作（action）和描述（description）

* **名称（Name）**：这是节点在画布上打开时，选择器中显示的名称。必须使用标题大小写，不必包含资源（例如「Delete」）。
* **动作（Action）**：这是用户选择节点的面板中显示的操作名称。必须使用句子大小写，并且必须包含资源（例如「Delete record」）。
* **描述（Description）**：这是节点在画布上打开时，选择器中名称下方显示的子文本。必须使用句子大小写，并且必须包含资源。可以补充一点信息，并使用与基本资源/操作不同的用词（例如「Retrieve a list of users（获取用户列表）」）。
* 如果操作作用于非资源本身的实体（例如 Google Sheet 中的一行），请在操作名称中指明（例如「Delete Row」）。

一般来说，理解操作的**对象（object）**很重要。有时，操作的对象就是资源本身（例如 `Sheet:Delete` 删除一个 Sheet）。

其他情况下，操作的对象不是资源，而是资源内部包含的东西（例如 `Table:Delete rows`，这里资源是表，但你实际操作的是表里面的行）。

#### 命名 `name`

这是节点在画布上打开时，选择器中显示的名称。

* 参数：`name`
* 大小写：Title Case（标题大小写）

命名指南：

* **不要重复资源（如果资源选择在上面）：** 资源通常显示在操作上方，所以操作中没必要重复它（前提是操作的对象就是资源本身）。
	* 例如：`Sheet:Delete` → 不需要在 `Delete` 中重复 `Sheet`，因为 n8n 在上方字段中已经显示了 `Sheet`，而你删除的就是这个 Sheet。
* **如果没有资源选择在上面，则指明资源：** 在某些节点中，你不会看到资源选择（因为只有一种资源）。这种情况下，在操作中指明资源。
	* 例如：`Delete Records` → 在 Airtable 中没有资源选择，所以最好说明 Delete 操作将删除记录。
* **如果操作的对象不是资源，请指明对象：** 有时操作的对象不是资源。这种情况下，也要在操作中指明对象。
	* 例如：`Table:Get Columns` → 要指明 `Columns`，因为资源是 `Table`，而操作的对象是 `Columns`。

#### 命名 `action`

这是用户选择节点的面板中显示的操作名称。

* 参数：`action`
* 大小写：Sentence case（句子大小写）

命名指南：

* **省略冠词：** 为了让文本更短，去掉冠词（a、an、the…）。
	* **正确**：`Update row in sheet`
	* **错误**：`Update a row in a sheet`
* **重复资源：** 这种情况下，重复资源是可以的。即使资源在列表中可见，用户也可能没注意到，在操作标签中重复它是有用的。
* **如果操作的对象不是资源，请指明对象：** 与操作名称的规则相同。这种情况下，你不需要重复资源。
	* 例如：`Append Rows` → 你必须指明 `Rows`，因为你实际追加的是行。不要加上资源（`Sheet`），因为你追加的不是资源本身。

#### 命名 `description`

这是节点在画布上打开时，选择器中名称下方显示的子文本。

* 参数：`description`
* 大小写：Sentence case（句子大小写）

命名指南：

* 如果可能，比操作 `name` 提供更多信息。
* 使用替代措辞，帮助用户更好地理解操作在做什么。有些人可能看不懂操作里用的词（也许英语不是他们的母语），使用替代措辞可以帮助他们。

#### 词汇表（Vocabulary）

n8n 使用一套通用词汇，以及一些针对相似应用组（例如数据库或电子表格）的上下文特定词汇。

通用词汇的灵感来自 CRUD 操作：

* **Clear（清空）**
    * 删除资源的所有内容（清空资源）。
    * 描述：`Delete all the <CHILD_ELEMENT>s inside the <RESOURCE>`（删除 <资源> 内所有 <子元素>）
* **Create（创建）**
    * 创建资源的新实例。
    * 描述：`Create a new <RESOURCE>`（创建一个新的 <资源>）
* **Create or Update（创建或更新）**
    * 创建或更新资源的现有实例。
    * 描述：`Create a new <RESOURCE> or update an existing one (upsert)`（创建新的 <资源> 或更新现有的一个（upsert））
* **Delete（删除）**
    * 「Delete」有两种用法：
        1. 删除一个资源：
            * 描述：`Delete a <RESOURCE> permanently`（永久删除一个 <资源>）（只有在确实是永久删除时才用「permanently」）
        2. 删除资源**内部**的东西（例如一行）：
            * 这种情况下，**始终指明操作的对象**：例如 `Delete Rows` 或 `Delete Records`。
            * 描述：`Delete a <CHILD_ELEMENT> permanently`（永久删除一个 <子元素>）
* **Get（获取）**
    * 「Get」有两种用法：
        1. 获取一个资源：
            * 描述：`Retrieve a <RESOURCE>`（获取一个 <资源>）
        2. 获取资源**内部**的项目（例如记录）：
            * 这种情况下，**始终指明操作的对象**：例如 `Get Row` 或 `Get Record`。
            * 描述：`Retrieve a <CHILD_ELEMENT> from the/a <RESOURCE>`（从 <资源> 中获取一个 <子元素>）
* **Get Many（获取多个）**
    * 「Get Many」有两种用法：
        1. 获取资源列表（无筛选）：
            * 描述：`Retrieve a list of <RESOURCE>s`（获取 <资源> 列表）
        2. 获取资源**内部**的项目列表（例如记录）：
            * 这种情况下，**始终指明操作的对象**：例如 `Get Many Rows` 或 `Get Many Records`。
            * 可以省略 `Many`：`Get Many Rows` 可以是 `Get Rows`。
            * 描述：`List all <CHILD_ELEMENT>s in the/a <RESOURCE>`（列出 <资源> 中的所有 <子元素>）
* **Insert（插入）** 或 **Append（追加）**
    * 在资源内部添加东西。
    * 数据库节点使用 `insert`。
    * 描述：`Insert <CHILD_ELEMENT>(s) in a <RESOURCE>`（在 <资源> 中插入 <子元素>）
* **Insert or Update（插入或更新）** 或 **Append or Update（追加或更新）**
    * 在资源内部添加或更新东西。
    * 数据库节点使用 `insert`。
    * 描述：`Insert <CHILD_ELEMENT>(s) or update an existing one(s) (upsert)`（插入 <子元素> 或更新现有的（upsert））
* **Update（更新）**
    * 「Update」有两种用法：
        1. 更新一个资源：
            * 描述：`Update one or more <RESOURCE>s`（更新一个或多个 <资源>）
        2. 更新资源**内部**的东西（例如一行）：
            * 这种情况下，**始终指明操作的对象**：例如 `Update Rows` 或 `Update Records`。
            * 描述：`Update <CHILD_ELEMENT>(s) inside a <RESOURCE>`（更新 <资源> 内的 <子元素>）

### 引用参数名和字段名

当你在文案中需要引用参数名或字段名时，用单引号把它们包起来（例如「请填写 `'name'` 参数」）。

### 布尔值描述

布尔组件的描述以「Whether...」（是否…）开头。

## 错误（Errors）

### 总体理念

错误是用户的痛苦之源。因此，n8n 始终想要告诉用户：

* **发生了什么（What happened）**：对错误及其原因的说明。
* **如何解决问题（How to solve the problem）**：或者至少如何摆脱困境、继续无阻碍地使用 n8n。n8n 不希望用户被卡住，所以要利用这个机会引导他们走向成功。

### 输出面板中的错误结构

#### 错误消息（Error Message）——发生了什么

这条消息向用户解释发生了什么，以及当前阻止执行完成的问题。

* 如果你有触发错误的参数的 `displayName`，把它包含在错误消息或描述中（或两者都包含）。
* 条目索引：如果你有触发错误的条目的 ID，在错误消息末尾附加 `[Item X]`。例如 `The ID of the release in the parameter "Release ID" for could not be found [item 2]`。
* 避免使用「error（错误）」、「problem（问题）」、「failure（失败）」、「mistake（失误）」等词。

#### 错误描述（Error Description）——如何解决或摆脱困境

描述向用户解释如何解决问题、要在节点配置中改什么（如果是这种情况），或者如何摆脱困境。在这里，你应该引导用户采取下一步并解除他们的阻塞。

避免使用「error（错误）」、「problem（问题）」、「failure（失败）」、「mistake（失误）」等词。

{% hint style="info" %}
**小白提示**：写错误信息的核心心法——「报错要温柔、要具体、要指路」。不要说「发生错误」，而要说「找不到 id 为 123 的卡片」；不要只报错，要告诉用户「去检查 XX 参数，或重新粘贴卡片的 URL」。避免用 error/problem 这类冷冰冰的词，用户看到「problem」会焦虑，看到「could not be found（找不到）」反而知道问题在哪。
{% endhint %}
