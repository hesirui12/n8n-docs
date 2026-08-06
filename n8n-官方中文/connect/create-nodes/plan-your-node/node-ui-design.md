---
contentType: reference
nodeTitle: Node UI design
originalFilePath: integrations/creating-nodes/plan/node-ui-design.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/plan/node-ui-design'
url: 'https://docs.n8n.io/connect/create-nodes/plan-your-node/node-ui-design'
layout:
  description:
    visible: false
---

# 设计你的节点用户界面（Design your node's user interface）

大多数节点其实就是一个 API 的图形化界面（GUI，graphical user interface）表现。设计界面，就是要找到一种对用户友好的方式来表达 API 的端点和参数。如果把整个 API 一字不差地翻译成节点里的表单字段，可能并不会带来好的用户体验。

本文档提供了需要遵循的设计指导和标准。这些指导方针与 n8n 官方自己使用的完全相同。这样做的好处是：当用户把社区节点和内置节点混在一起使用时，能获得流畅、一致的体验。

{% hint style="info" %}
**小白提示：先想清楚「界面 = 翻译 API」这件事**

用户不会看 API 文档，他们只看你节点的表单长什么样。所以你的工作本质是「翻译」：把 API 文档里那些晦涩的端点（endpoint）和参数，翻译成普通人都能看懂、填得明白的表单。翻译得好不好，直接决定了用户愿不愿意用你的节点。
{% endhint %}

## 设计指导（Design guidance）

所有节点都使用 n8n 的[节点 UI 元素](../build-your-node/reference/node-ui-elements.md)，所以你不需要考虑颜色、边框之类的样式细节。不过，走一遍基本的设计流程仍然很有用：

* 仔细阅读你要集成的 API 的文档，并问自己：
    * 哪些东西可以省略掉？
    * 哪些东西可以简化？
    * API 的哪些部分容易让人困惑？我该如何帮助用户理解它们？
* 使用线框图（wireframe）工具来试验你的字段布局。如果你发现节点的字段很多、开始变得混乱，可以考虑 n8n 关于[显示和隐藏字段](#showing-and-hiding-fields)的指导。

## 标准（Standards）

### UI 文本风格（UI text style）

| 元素 | 风格 |
| ------- | ----- |
| 下拉选项值（Drop-down value） | 标题大小写（Title case） |
| 提示（Hint） | 句子大小写（Sentence case） |
| 信息框（Info box） | 句子大小写。只有一句话时不要加句号（`.`）；超过一句话时一定要加句号。该字段可以包含链接，链接应在新标签页中打开。 |
| 节点名称（Node name） | 标题大小写 |
| 参数名称（Parameter name） | 标题大小写 |
| 副标题（Subtitle） | 标题大小写 |
| 工具提示（Tooltip） | 句子大小写。只有一个句子的提示不要加句号（`.`）；超过一句时一定要加句号。该字段可以包含链接，链接应在新标签页中打开。 |

{% hint style="info" %}
**小白提示：Title case 和 Sentence case 是什么？**

- **Title case（标题大小写）**：每个单词首字母大写，例如 `Create Contact`。
- **Sentence case（句子大小写）**：只有第一个单词首字母大写，其余小写，例如 `Create a contact`。
规则记住一句话：**名字、选项、标题用 Title case；解释说明类的文字用 Sentence case。**
{% endhint %}

### UI 文本术语（UI text terminology）

* 使用与节点所连接的服务相同的术语。例如，Notion 节点应该使用 "Notion blocks"（块）而不是 "Notion paragraphs"（段落），因为 Notion 官方就把这些元素叫作 blocks。这条规则也有例外，通常是为了避免使用过于专业的术语（例如，参考关于 [upsert 操作的名称和描述](#upsert-operations)的指导）。
* 有时候，同一个东西在服务的 API 里和 GUI 里叫法不同。在你的节点中请使用 GUI 里的叫法，因为这是大多数用户熟悉的。如果你觉得有些用户可能需要查阅该服务的 API 文档，可以考虑把相关信息写进提示（hint）里。
* 当有更简单的说法时，不要使用技术黑话。
* 命名要保持一致。例如，在 `directory` 和 `folder` 之间选一个，然后一直用它，不要混着用。

### 节点命名规范（Node naming conventions）

| 规范 | 正确 | 错误 |
| ---------- | ------- | --------- |
| 如果节点是触发器节点，<br>显示名称应以 'Trigger' 结尾，<br>且前面要有一个空格。 | Shopify Trigger | ShopifyTrigger、Shopify trigger |
| 名称中不要包含 'node' 字样。 | Asana | Asana Node、Asana node |

### 显示和隐藏字段（Showing and hiding fields）

字段可以是以下两种状态：

* 打开节点时就显示：用于资源（resources）和操作（operations），以及必填字段。
* 隐藏在 **可选字段（Optional fields）** 区域中，直到用户点击该区域才显示：用于可选字段。

渐进式地披露复杂性：在某个字段所依赖的前置字段有值之前，先隐藏它。例如，如果你有一个 **按日期筛选（Filter by date）** 开关，和一个 **要筛选的日期（Date to filter by）** 日期选择器，那么在用户打开 **Filter by date** 之前，不要显示 **Date to filter by**。

{% hint style="info" %}
**小白提示：为什么要「渐进式披露」？**

一打开节点就看到 20 个字段，用户会懵。但如果先只显示 3 个关键字段，用户填完关键字段后，相关的进阶选项才出现——大脑的负担就小多了。这就是「渐进式披露」（progressive disclosure）的设计原则：**永远只让用户看到当前需要的复杂度**。
{% endhint %}

### 按字段类型的规范（Conventions by field type）

#### 凭据（Credentials）

n8n 会自动把凭据字段显示在节点的最上方。

#### 资源和操作（Resources and operations）

API 通常是对数据做点什么。例如「获取所有任务（get all tasks）」。在这个例子里，"task"（任务）是资源（resource），"get all"（获取所有）是操作（operation）。

当你的节点符合这种「资源 + 操作」的模式时，你的第一个字段应该是 **Resource**（资源），第二个字段应该是 **Operation**（操作）。

#### 必填字段（Required fields）

字段的排列顺序遵循以下原则：

* 从最重要到最不重要。
* 按范围：从大到小。例如，你有 **Document**（文档）、**Page**（页面）、**Text to insert**（要插入的文本）这些字段，就按这个顺序排列。

#### 可选字段（Optional fields）

* 按字母顺序排列字段。为了把相似的东西归到一起，可以给它们改名。例如，把 **Email** 和 **Secondary Email** 改名为 **Email (primary)** 和 **Email (secondary)**。
* 如果可选字段有一个默认值（用户不填时节点就使用该值），请用该值把字段预填好，并在字段描述里说明这一点。例如 **Defaults to false**（默认值为 false）。
* 关联字段：如果某个可选字段依赖另一个字段，把它们捆绑在一起。它们应该放在同一个选项下，选中该选项时两个字段同时显示。
* 如果你有很多可选字段，可以考虑按主题分组。

#### 帮助（Help）

GUI 内置了五种帮助形式：

* 信息框（Info boxes）：出现在字段之间的黄色框。更多信息请参阅 [UI 元素 | 提示（Notice）](../build-your-node/reference/node-ui-elements.md#notice)。
    * 信息框用于承载关键信息，不要滥用。正因为用得少，它们才会更显眼，更能抓住用户的注意力。
* 参数提示（Parameter hints）：显示在输入字段下方的说明文字。当有些信息用户需要知道、但又没到要放一个信息框那么重的时候，用它。
* 节点提示（Node hints）：在输入面板、输出面板或节点详情视图中提供帮助。更多信息请参阅 [UI 元素 | 提示（Hints）](../build-your-node/reference/node-ui-elements.md#hints)。
* 工具提示（Tooltips）：当用户把鼠标悬停在提示图标上时出现的小气泡提示 !["Screenshot of the tooltip icon. The icon is a ? in a grey circle"](../../.gitbook/assets/help-tooltip.png)。用于提供用户可能需要的额外信息。
    * 你不必为每个字段都提供工具提示。只有当它包含有用信息时才加。
    * 写工具提示时，要思考用户真正需要什么。不要直接复制粘贴 API 的参数描述。如果描述没道理或有问题，就改进它。
* 占位文本（Placeholder text）：n8n 可以在用户尚未输入值的字段中显示占位文本。这能帮助用户了解该字段应该填什么。

信息框、提示和工具提示都可以包含指向更多信息的链接。

#### 错误（Errors）

要清楚地标明哪些字段是必填的。

如果可能，给字段加上校验规则。例如，如果字段期望填邮箱，就校验是不是合法的邮箱格式。

显示错误时，确保红色错误标题里只显示主要错误信息。更多详细信息应该放在 **Details**（详情）里。

更多信息请参阅[节点错误处理](../build-your-node/reference/error-handling.md)。

#### 开关（Toggles）

* 针对二元状态（开/关）的工具提示，应该以类似 **Whether to . . .**（是否要……）开头。
* 有些情况你可能需要下拉列表而不是开关：
    * 当「关闭（false）状态下会发生什么」很明确时，用开关。例如 **Simplify Output?**（简化输出？）。另一种情况（不简化输出）是很明确的。
    * 当需要更明确时，用带命名选项的下拉列表。例如 **Append?**（追加？）。如果你不追加会发生什么都不清楚（可能是啥也不发生，也可能是信息被覆盖，或者被丢弃）。

#### 列表（Lists）

* 尽可能为列表设置默认值。默认值应该是使用最多的那个选项。
* 按字母顺序对列表选项排序。
* 可以为列表选项添加描述。只有当描述能提供有用信息时才加。
* 如果有类似 **All** 这样的选项，就用 **All** 这个词，不要用像 ***** 这样的简写。

#### 触发器节点的输入（Trigger node inputs）

当触发器节点有一个参数用来指定要触发哪些事件时：

* 把这个参数命名为 **Trigger on**。
* 不要给它添加工具提示。

#### 副标题（Subtitles）

根据主要参数的值来设置副标题。例如：

```js
subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
```

{% hint style="info" %}
**代码讲解（小白版）**

上面这行代码的意思是：节点的副标题会自动变成「操作名: 资源名」的形式。比如用户选择了 `create` 操作和 `contact` 资源，副标题就显示 `create: contact`。这样用户不用点开节点，就能从画布上看到这个节点大致在做什么。`$parameter["xxx"]` 就是「读取参数 xxx 当前的值」的意思。
{% endhint %}

#### ID（IDs）

当你对某条具体记录执行操作时，例如「更新一条任务评论」，你需要一种方式指定要修改哪条记录。

* 尽可能提供两种指定记录的方式：
    * 从一个预填充的列表中选择。你可以用 `loadOptions` 参数来生成这个列表。更多信息请参阅[基础文件](../build-your-node/reference/base-files/README.md)。
    * 直接输入一个 ID。
* 把这个字段命名为 `<记录名> name or ID`。例如 **Workspace Name or ID**。加一个工具提示，内容为 "Choose a name from the list, or specify an ID using an expression."（从列表中选择一个名称，或使用表达式指定一个 ID。）。并链接到 n8n 的[表达式（Expressions）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)文档。
* 把你的节点设计成能容忍用户提供超出要求的信息。例如：
    * 如果你需要的是相对路径，请处理用户粘贴绝对路径的情况。
    * 如果用户需要从 URL 中获取 ID，请处理用户粘贴整个 URL 的情况。

#### 日期和时间戳（Dates and timestamps）

n8n 使用 [ISO 时间戳字符串](https://en.wikipedia.org/wiki/ISO_8601)来表示日期和时间。确保你添加的任何日期或时间戳字段都支持所有 ISO 8601 格式。

#### JSON

对于期望输入 JSON 的文本框，你应该支持两种指定内容的方式：

* 直接在文本框里输入 JSON：你需要把得到的字符串解析（parse）成 JSON 对象。
* 使用返回 JSON 的表达式。

#### 节点图标（Node icons）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/dGOXJYk0OQgOLlRpyJnn/" %}

{% hint style="info" %}
**说明**：上面这行是 GitBook 的「可复用内容块」引用指令。为了让中文读者不用跳转就能看懂，这里把该内容块的实际内容翻译如下：

n8n 建议用 SVG 格式作为节点图标，但也可以用 PNG。如果使用 PNG，图标分辨率应为 60x60px。节点图标应为正方形或接近正方形的宽高比。

**不要引用 Font Awesome**：如果你想在节点中使用 Font Awesome 图标，请下载该图标图片并直接嵌入。
{% endhint %}

### 常见模式与例外情况（Common patterns and exceptions）

本节提供处理常见设计模式的指导，包括一些边界情况以及对主要标准的例外。

#### 简化响应（Simplify responses）

API 可能会返回大量没用的数据。考虑加一个开关，让用户可以选择简化响应数据：

  * 名称（Name）：**Simplify Response**
  * 描述（Description）：**Whether to return a simplified version of the response instead of the raw data**（是否返回响应的简化版本，而不是原始数据）

#### Upsert 操作（Upsert operations）

这应该始终是一个独立操作，包含：

  * 名称（Name）：**Create or Update**
  * 描述（Description）：**Create a new record, or update the current one if it already exists (upsert)**（创建一条新记录，如果记录已存在则更新它（upsert））

{% hint style="info" %}
**小白提示：什么是 upsert？**

upsert = update（更新）+ insert（插入）的组合词。意思是「有就改、没有就建」：如果这条记录已经存在就更新它，不存在就新建一条。比如同步用户资料时，老用户更新信息、新用户直接创建，一个操作搞定。
{% endhint %}

#### 布尔运算符（Boolean operators）

n8n 对在 GUI 中组合布尔运算符（例如 AND 和 OR）的支持不是很好。只要可能，就提供「全部 AND」或「全部 OR」的选项。

例如，你有一个名为 **Must match**（必须匹配）的字段用来测试值是否匹配。请把「任意（Any）」和「全部（All）」作为两个独立选项提供。

#### 源键或二进制属性（Source keys or binary properties）

二进制数据（binary data）就是文件数据，例如电子表格或图片。在 n8n 中，你需要一个命名的键（key）来引用这些数据。不要对这个字段使用 "binary data"（二进制数据）或 "binary property"（二进制属性）这样的术语。而是使用更具描述性的名称：**Input data field name**（输入数据字段名）/ **Output data field name**（输出数据字段名）。
