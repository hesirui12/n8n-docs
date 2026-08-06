---
contentType: howto
nodeTitle: 为 n8n 做贡献
originalFilePath: help-community/contributing.md
originalUrl: https://docs.n8n.io/help-community/contributing
url: https://docs.n8n.io/contribute/contribute-to-n8n
description: 学习如何为 n8n 做贡献。
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
    visible: false
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 为 n8n 做贡献（Contribute to n8n）

根据你的技能和兴趣，有很多种方式可以为 n8n 做贡献。每一种贡献对我们来说都非常有价值！

> 💡 **小白提示**：很多人以为"开源贡献"一定要会写代码，其实完全不是这样。点赞、写评测、在论坛帮别人答疑、分享工作流模板、写文档……这些都属于贡献，而且都非常重要。下面列出的每一种方式，你都可以根据自己的情况选择。

## 分享你的喜爱：为我们点赞

* 在 [GitHub](https://github.com/n8n-io/n8n) 和 [Docker Hub](https://hub.docker.com/r/n8nio/n8n) 上给 n8n 点个星标（Star）。
* 在 [Twitter](https://twitter.com/n8n_io)、[LinkedIn](https://www.linkedin.com/company/28491094) 和 [Facebook](https://www.facebook.com/n8nio/) 上关注我们。
* 在 [AlternativeTo](https://alternativeto.net/software/n8n-io/) 和 [Alternative.me](https://alternative.me/n8n-io) 上给 n8n 投票（Upvote）。
* 在 [Stackshare](https://stackshare.io/n8n) 上把 n8n 加入你的技术栈。
* 在 [G2](https://www.g2.com/products/n8n/reviews)、[Slant](https://www.slant.co/improve/options/37977/~n8n-review) 和 [Capterra](https://www.capterra.com/p/198028/n8n-io/) 上写一篇关于 n8n 的评测（Review）。

{% hint style="info" %}
**小白解释**：所谓"点星标"（Star），就是在 GitHub 上给项目点一个收藏按钮，相当于给作者一个鼓励；而"写评测"则是把你使用 n8n 的真实体验告诉其他人。这些操作都不需要任何编程基础，几分钟就能完成。
{% endhint %}

## 帮助社区成员

你可以参与到[论坛](https://community.n8n.io/)中，帮助社区成员解答他们的问题。

在社区论坛分享工作流（Workflow）用于调试（Debug）时，请使用代码块（Code block）。用三个反引号 ` ``` ` 把工作流 JSON 包在代码块里，这样别人复制粘贴时格式才不会乱。

下面的视频演示了如何在社区论坛上分享工作流：

{% embed url="https://www.youtube.com/embed/dVC8yLqUvCE" %}

> 💡 **小白解释**：当你把做好的工作流导出时，它实际上是一大段 JSON 文本。如果直接贴在论坛里，格式会乱成一团，别人根本没法帮你排查问题。用代码块包起来，大家就能直接复制到自己的 n8n 里运行、调试了。

## 贡献一个工作流模板

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/mr8LBJxxxIAFYHNPNKU2/" %}

> 💡 **小白解释**：工作流模板（Workflow Template）就是你做好的某个自动化流程，把它分享出去，别人可以直接套用。这相当于把你解决问题的思路贡献给了整个社区。

## 构建一个节点

为第三方服务创建集成（Integration）。请查阅[节点创建文档](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/create-nodes/overview)，了解如何创建并发布一个社区节点（Community Node）。

{% hint style="info" %}
**小白解释**：节点（Node）是 n8n 工作流里的积木块，每个节点负责连接一个外部服务（比如某个 API）。"构建一个节点"的意思是：如果 n8n 还没有接入某个服务，你可以自己写一个节点让它接入。这需要一定的编程能力，是进阶贡献方式。
{% endhint %}

## 为代码做贡献

你可以通过不同的方式为 n8n 的代码库做贡献：

* 修复 [GitHub](https://github.com/n8n-io/n8n/issues) 上报告的 issues（问题）。[CONTRIBUTING 指南](https://github.com/n8n-io/n8n/blob/master/CONTRIBUTING.md) 会帮你在几分钟内把开发环境准备好。
* 为现有的第三方集成添加额外的功能。
* 为 n8n 添加一个新功能（Feature）。

## 为文档做贡献

你可以为 n8n 文档做贡献，例如记录某个节点的用法，或者修复文档中的问题。

文档的仓库在[这里](https://github.com/n8n-io/n8n-docs)，文档的贡献指南在[这里](https://github.com/n8n-io/n8n-docs/blob/master/CONTRIBUTING.md)。

> 💡 **小白解释**：写文档是最适合新手开始的贡献方式之一——不需要很深的技术背景，只要你用过某个功能、发现文档说得不清楚或者有错误，就可以提出修改。你正在看的这份中文文档，就是这类工作的成果。

## 为社区教程做贡献

在我们的[社区驱动、可搜索的 n8n 教程与学习资料库](https://community.n8n.io/t/how-to-share-your-tutorials/48398)中，分享你自己的视频教程或文字教程。给教程打上合适的标签，方便别人发现，并发布到你所在语言的子分类中。请遵循贡献指南，帮助我们不断壮大的教程库保持高质量，并且让所有人都能访问。

## 推荐候选人

你认识适合我们[空缺职位](https://n8n.io/careers)的人选吗？把他们推荐给我们吧！作为回报，当被推荐人顺利通过试用期后，我们会支付你 €1,000（1000 欧元）。

具体流程如下：

1. **搜索（Search）**：先看看每个职位的描述和要求，想想你认识的人里有没有合适的人选。
2. **推荐（Referral）**：确定潜在人选后，给 [n8n 招聘邮箱](mailto:jobs@n8n.io) 发一封邮件，主题行写 _Employee referral - \[职位名称]_（员工推荐 - 职位名称），并在邮件里简要描述你推荐的人（以及推荐理由）。同时，请告诉被推荐人通过我们的[招聘页面](https://n8n.io/careers)申请这份工作。
3. **评估（Evaluation）**：我们会筛选收到的申请，并告知你招聘流程的下一步。
4. **奖励（Reward）**：一旦你的推荐人顺利通过试用期，我们就会把 €1,000 转账到你的银行账户，作为对你付出的奖励。
