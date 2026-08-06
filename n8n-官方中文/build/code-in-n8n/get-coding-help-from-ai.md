---
title: AI 编程辅助
contentType: explanation
nodeTitle: 从 AI 获取编程帮助
originalFilePath: code/ai-code.md
originalUrl: https://docs.n8n.io/code/ai-code
url: https://docs.n8n.io/build/code-in-n8n/get-coding-help-from-ai
description: 使用 GPT 在代码节点（Code node）中生成代码。
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

# 从 AI 获取编程帮助 / Get coding help from AI

{% hint style="info" %}
**大白话（这一页讲什么）**：写代码节点（Code node）时不会写、或者懒得写？你可以用大白话（自然语言）向 n8n 内置的 ChatGPT 描述你想要的处理逻辑，它会帮你把 JavaScript 代码写出来。这一页教你：在哪里用、有什么限制、怎么写提示词（prompt）效果最好，以及拿到 AI 代码后要注意什么。
{% endhint %}

## 在代码节点中使用 AI / Use AI in the Code node

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/1MYzyKWyHTaQMU44vlTt/" %}

{% hint style="info" %}
上面这段内容是 n8n 官方以可复用组件（reusable block）形式提供的「如何在代码节点里用 AI」教程，原样保留，在 GitBook 渲染时会自动展开成完整步骤。
{% endhint %}

## 用量限制 / Usage limits

在试用阶段（trial phase），**没有用量限制**。如果 n8n 决定把这个功能做成正式功能，将来可能会根据你的套餐等级（pricing tier）加入用量限制。

## 功能限制 / Feature limits

n8n 里的 ChatGPT 实现有以下几个限制，请提前了解：

* AI 只会写「处理 n8n 工作流里已有数据」的代码。你**不能**让它去别的数据源拉取数据（比如让 AI 去访问某个网站或数据库）。
* AI **看不到你的真实数据**，它只知道数据的结构（schema，即字段名和类型），所以你需要主动告诉它一些事情，比如「要找的数据在哪」、或者「怎么判断某个字段是不是 null（空值）」。
* 在运行 AI 查询之前，代码节点（Code node）**前面的节点必须已经执行过**，并且把数据送进了代码节点。
* 对**特别大的输入数据结构**可能不适用（数据字段太多、太复杂时 AI 容易糊涂）。
* 如果代码节点**前面挂了很多节点**，可能也会出问题。

{% hint style="info" %}
**大白话（为什么有这些限制）**：简单说，这个 AI 是个「只会干活的助手」，不是「能出门跑腿的员工」——它只能基于你喂给它的数据来写代码，而且它对数据的了解只到「字段结构」这一层。所以你要把背景信息说清楚，它才能写对。
{% endhint %}

## 写出好提示词 / Writing good prompts

写好提示词（prompt，就是你对 AI 说的话），能明显提高拿到有用代码的概率。

一些通用小技巧：

* **给出示例**：如果可能，提供一个「期望输出」的样例。这能帮 AI 更好地理解你想要的转换效果或逻辑。
* **描述处理步骤**：如果数据要经过特定的处理步骤或逻辑，把它们**按顺序列出来**。例如：「先过滤掉所有 18 岁以下的用户，然后按姓氏对剩余用户排序。」（"First, filter out all users under 18. Then, sort the remaining users by their last name."）
* **避免歧义**：虽然 AI 能理解各种指令，但说得清楚、直接，才能得到最准确的代码。与其说「把年纪大的用户找出来」（Get the older users），不如说「过滤出 60 岁及以上的用户」（Filter users who are 60 years and above）。
* **说清楚你想要的输出是什么**：你是想让数据被**转换（transformed）**、**过滤（filtered）**、**聚合（aggregated）** 还是**排序（sorted）**？提供尽可能多的细节。

还有一些 n8n 专属的指导：

* **想想输入数据**：确保 ChatGPT 知道你想访问数据的哪些部分，以及输入数据代表什么。你可能还需要告诉 ChatGPT 有 n8n 内置方法和变量（built-in methods and variables）可以用。
* **说明节点之间的交互**：如果你的逻辑涉及多个节点的数据，要说明它们应该如何交互。例如「基于 `userID` 属性，把 'Node A' 的输出和 'Node B' 的输出合并」（Merge the output of 'Node A' with 'Node B' based on the 'userID' property）。如果你希望数据只来自某些节点、忽略其他节点，也要说清楚：「只考虑 'Purchases' 节点的数据，忽略 'Refunds' 节点的数据。」（Only consider data from the 'Purchases' node and ignore the 'Refunds' node.）
* **确保输出符合 n8n 的要求**：关于 n8n 要求的数据结构，请参考[数据结构（Data structure）](../work-with-data/understand-n8ns-data-structure.md)。

{% hint style="info" %}
**大白话（怎么写提示词）**：把 AI 当成一个「刚入职、很聪明但什么都不懂」的实习生：背景信息要给够（数据是什么、有哪些字段）、目标要说清（要什么结果）、边界要划明（哪些节点/字段别碰）。越具体，代码越靠谱。
{% endhint %}

### 提示词示例 / Example prompts

下面这些例子展示了一系列可能的提示词（prompt）和对应任务。

#### 示例 1：在第二个数据集里找一条数据 / Example 1: Find a piece of data inside a second dataset

想自己动手试试的话，可以下载下面的示例工作流，然后导入到 n8n 里：

{% file src="../.gitbook/assets/find-a-piece-of-data.json" %}
示例工作流（Example workflow）
{% endfile %}

在第三个**代码节点（Code node）**里输入这个提示词：

> Slack 数据里只有一条数据（item）。输入数据代表所有的 Notion 用户。有时存放邮箱的 person 属性可能是 null。我想找到 Slack 用户对应的 notionId 并返回它。

（原文：The slack data contains only one item. The input data represents all Notion users. Sometimes the person property that holds the email can be null. I want to find the notionId of the Slack user and return it.）

看一眼 AI 生成的代码。

你需要的 JavaScript 是这样的：

```js
const slackUser = $("Mock Slack").all()[0];
const notionUsers = $input.all();
const slackUserEmail = slackUser.json.email;

const notionUser = notionUsers.find(
  (user) => user.json.person && user.json.person.email === slackUserEmail
);

return notionUser ? [{ json: { notionId: notionUser.json.id } }] : [];
```

{% hint style="info" %}
**大白话（这段代码在干嘛）**：先拿到 Slack 里那个用户（只有一个），再拿到所有 Notion 用户；然后逐个检查，找出「person 属性存在、且邮箱和 Slack 用户邮箱相同」的那位 Notion 用户；找到了就返回它的 `id`（当作 `notionId` 返回），找不到就返回空数组。
{% endhint %}

#### 示例 2：数据转换 / Example 2: Data transformation

想自己动手试试的话，可以下载下面的示例工作流，然后导入到 n8n 里：

{% file src="../.gitbook/assets/data-transformation.json" %}
示例工作流（Example workflow）
{% endfile %}

在 **Join items** 代码节点里输入这个提示词：

> 返回一行文本，把所有用户名用逗号列出来，每个用户名用双引号括起来。

（原文：Return a single line of text that has all usernames listed with a comma. Each username should be enquoted with a double quotation mark.）

看一眼 AI 生成的代码。

你需要的 JavaScript 是这样的：

```js
const items = $input.all();
const usernames = items.map((item) => `"${item.json.username}"`);
const result = usernames.join(", ");
return [{ json: { usernames: result } }];
```

{% hint style="info" %}
**大白话（这段代码在干嘛）**：把输入的所有数据项拿出来，把每一项的 `username` 字段包上双引号，再用逗号拼成一行文本，最后作为一条 `usernames` 字段的数据返回。
{% endhint %}

#### 示例 3：汇总数据并生成一条 Slack 消息 / Example 3: Summarize data and create a Slack message

想自己动手试试的话，可以下载下面的示例工作流，然后导入到 n8n 里：

{% file src="../.gitbook/assets/summarize-data.json" %}
示例工作流（Example workflow）
{% endfile %}

在 **Summarize** 代码节点里输入这个提示词：

> 为 Slack 创建一段 markdown 文本，统计提交了多少条想法（ideas）、功能（features）和缺陷（bugs）。提交类型保存在 property_type 字段里。功能（feature）的属性值是 "Feature"，缺陷（bug）的属性值是 "Bug"，想法（idea）的属性值是 "Idea"。另外，在这条消息里按投票数列出前五个提交。链接请用 "\<url|text>" 这种 markdown 写法。

（原文：Create a markdown text for Slack that counts how many ideas, features and bugs have been submitted. The type of submission is saved in the property_type field. A feature has the property "Feature", a bug has the property "Bug" and an idea has the property "Bug". Also, list the five top submissions by vote in that message. Use "\<url|text>" as markdown for links.）

{% hint style="warning" %}
**留意原文里的一个笔误**：上面的原文里，idea（想法）对应的属性值写成了 "Bug"，这其实是官方文档里的笔误，正确应为 "Idea"。好在下面的示例代码里用的是正确的 `"Idea"`，你参考代码即可。
{% endhint %}

看一眼 AI 生成的代码。

你需要的 JavaScript 是这样的：

```js
const submissions = $input.all();

// Count the number of ideas, features, and bugs
let ideaCount = 0;
let featureCount = 0;
let bugCount = 0;

submissions.forEach((submission) => {
  switch (submission.json.property_type[0]) {
    case "Idea":
      ideaCount++;
      break;
    case "Feature":
      featureCount++;
      break;
    case "Bug":
      bugCount++;
      break;
  }
});

// Sort submissions by votes and take the top 5
const topSubmissions = submissions
  .sort((a, b) => b.json.property_votes - a.json.property_votes)
  .slice(0, 5);

let topSubmissionText = "";
topSubmissions.forEach((submission) => {
  topSubmissionText += `<${submission.json.url}|${submission.json.name}> with ${submission.json.property_votes} votes\n`;
});

// Construct the Slack message
const slackMessage = `*Summary of Submissions*\n
Ideas: ${ideaCount}\n
Features: ${featureCount}\n
Bugs: ${bugCount}\n
Top 5 Submissions:\n
${topSubmissionText}`;

return [{ json: { slackMessage } }];
```

{% hint style="info" %}
**大白话（这段代码在干嘛）**：先遍历所有提交，按 `property_type` 字段统计 Idea（想法）、Feature（功能）、Bug（缺陷）各有多少条；再按 `property_votes`（投票数）从高到低排序，取前 5 名；然后把统计数字和前 5 名拼成一段 Slack 格式的 markdown 文本（含链接），最后作为 `slackMessage` 字段返回。
{% endhint %}

### 显式引用传入节点的数据 / Reference incoming node data explicitly

如果你的输入数据里包含**嵌套字段（nested fields）**（字段里套字段），用**点号（dot notation）**引用它们，能帮 AI 更清楚地理解你想要的是哪些数据。

!["Screenshot of an n8n code node, highlighting how to reference data with dot notation in an AI query"](../.gitbook/assets/reference-data-dot-notation.png)

想自己动手试试的话，可以下载下面的示例工作流，然后导入到 n8n 里：

{% file src="../.gitbook/assets/reference-incoming-data-explicitly.json" %}
示例工作流（Example workflow）
{% endfile %}

在第二个**代码节点（Code node）**里输入这个提示词：

> "Mock data" 里的数据代表的是一份人员名单。对每个人，返回一个新的数据项，包含 personal_info.first_name 和 work_info.job_title。

（原文：The data in "Mock data" represents a list of people. For each person, return a new item containing personal_info.first_name and work_info.job_title.）

你需要的 JavaScript 是这样的：

```js
const items = $input.all();
const newItems = items.map((item) => {
  const firstName = item.json.personal_info.first_name;
  const jobTitle = item.json.work_info.job_title;
  return {
    json: {
      firstName,
      jobTitle,
    },
  };
});
return newItems;
```

{% hint style="info" %}
**大白话（点号引用）**：嵌套数据就像「抽屉里的抽屉」。`personal_info.first_name` 的意思就是「先拿 `personal_info` 这个抽屉，再取里面的 `first_name`」。在提示词里把路径写全，AI 就不用猜了。这段代码就是逐个人取出 `personal_info.first_name` 和 `work_info.job_title`，组成新的数据项返回。
{% endhint %}

### 相关资源 / Related resources

Pluralsight 提供了一份简短的指南：[How to use ChatGPT to write code（如何使用 ChatGPT 写代码）](https://www.pluralsight.com/blog/software-development/how-use-chatgpt-programming-coding)，里面包含示例提示词。

## 修复 AI 生成的代码 / Fixing the code

AI 生成的代码可能**不需要任何修改就能运行**，但也可能需要你动手改一改。你需要了解 n8n 的[数据结构（Data structure）](../work-with-data/understand-n8ns-data-structure.md)（比如每一条数据要用 `{ json: {...} }` 包一层），并且 n8n 的内置方法和变量（built-in methods and variables）也可能对你有帮助。

{% hint style="info" %}
**大白话（最后提醒）**：把 AI 的代码当成「初稿」而不是「终稿」。跑之前先在脑子里过一遍它做了什么，必要时对比一下 n8n 数据结构的要求，改好再放进工作流，能省去很多调试时间。
{% endhint %}
