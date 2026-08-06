---
contentType: howto
nodeTitle: Submit community nodes
originalFilePath: integrations/creating-nodes/deploy/submit-community-nodes.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/deploy/submit-community-nodes'
url: >-
  https://docs.n8n.io/connect/create-nodes/deploy-your-node/submit-community-nodes
layout:
  description:
    visible: false
---

# 提交社区节点（Submit community nodes）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/E552YKHiixJuJvzEdrBI/" %}

{% hint style="info" %}
**说明**：原文的这部分内容来自 GitBook 的「可复用内容块」（reusable block）。为了便于阅读，下面把该内容块渲染出的完整内容翻译成了中文，与你在线看到的 n8n 文档一致。
{% endhint %}

## 提交社区节点（Submit community nodes）

社区节点是托管在 npm 仓库（npm registry）中的 npm 包。

当你构建一个要提交到社区节点仓库的节点时，请使用以下资源，确保你的节点配置正确：

* n8n 建议使用 [`n8n-node` CLI 工具](/connect/create-nodes/build-your-node/using-the-n8n-node-tool)来构建和测试你的节点。特别是当你计划[提交节点给 n8n 审核验证](/connect/create-nodes/deploy-your-node/submit-community-nodes#submit-your-node-for-verification-by-n8n)时，这一点尤其重要。这能确保你的节点结构正确、符合社区节点的要求，还能简化 lint 检查和测试。
* 确保你的节点符合[社区节点的标准](https://app.gitbook.com/s/GixZThfitWP21x2gQFpD)。

### 标准（Standards）

使用 [`n8n-node` 工具](/connect/create-nodes/build-your-node/using-the-n8n-node-tool)开发，可以确保你的节点满足以下让节点进入 n8n 社区节点仓库所需的标准：

* 确保包名以 `n8n-nodes-` 或 `@<scope>/n8n-nodes-` 开头。例如 `n8n-nodes-weather` 或 `@weatherPlugins/n8n-nodes-weather`。
* 在包的 keywords（关键词）中包含 `n8n-community-node-package`。
* 确保你把节点和凭据添加到了 `package.json` 文件里的 `n8n` 属性中。
* 用 linter 检查你的节点（`npm run lint`），并在本地测试它（`npm run dev`），确保它能正常工作。

{% hint style="info" %}
**小白提示：为什么包名必须以 `n8n-nodes-` 开头？**

n8n 靠包名前缀来识别「这是不是一个 n8n 节点包」。就像快递公司靠单号前缀识别是不是自己的件一样。关键词 `n8n-community-node-package` 则是为了让 n8n 的仓库扫描器能在海量 npm 包里筛出你的包。这两个条件缺一不可，否则你的节点不会被收录。
{% endhint %}

### 发布到 npm（Publishing to npm）

**Creator Portal 审核验证所必需**

从 2026 年 5 月 1 日起，提交审核验证的节点必须使用带[来源声明（provenance statement）](https://docs.npmjs.com/generating-provenance-statements)的 GitHub Actions 发布。n8n 将不再接受直接从本地机器发布的受验证节点。

要通过 n8n Creator Portal 提交节点进行验证，请使用带来源声明的 GitHub Actions 工作流发布。来源声明（provenance）让任何人都能以密码学方式验证：某个特定包确实是由某个特定仓库的某个特定提交（commit）构建的。GitHub Actions 使用其 OIDC 基础设施对来源声明进行签名。

#### 新节点（New nodes）

如果你用 `npm create @n8n/node` 搭建节点脚手架，脚手架里已经包含了一个开箱即用的 `publish.yml` 工作流。在本地运行 `npm run release` 即可提升版本号、提交、打 tag 并推送，这会触发工作流向 npm 发布。

#### 已有节点（Existing nodes）

把 [n8n-nodes-starter 的发布工作流](https://github.com/n8n-io/n8n-nodes-starter/blob/master/.github/workflows/publish.yml)添加到你的仓库的 `.github/workflows/publish.yml` 位置。

同时确保你的项目把 `@n8n/node-cli` 的 `0.23.0` 或更高版本作为 `devDependency`（开发依赖），因为更早的版本不支持该工作流使用的来源声明（provenance）标志：

#### 一次性设置（One-time setup）

配置 npm 信任你仓库的 GitHub Actions 工作流，这样它就能代表你发布包。不需要长期有效的 token：

1. 登录 [npmjs.com](https://www.npmjs.com/)，打开你包的设置。
2. 在 **Publish access（发布权限）> Trusted Publishers（受信任的发布者）** 下，点击 **Add a publisher（添加发布者）**。
3. 选择 **GitHub Actions**，并填写：
    * **Repository owner（仓库所有者）**：你的 GitHub 用户名或组织名
    * **Repository name（仓库名称）**：你的仓库名
    * **Workflow name（工作流名称）**：`publish.yml`（这里是文件名，不是工作流的 `name:` 字段）

如果要用 token 代替，请在 npmjs.com 上创建一个 Granular Access Token（细粒度访问令牌），并把它以 `NPM_TOKEN` 的名字存到你仓库的 Actions secrets（Actions 密钥）中。更多细节请参见工作流文件里的注释。

{% hint style="info" %}
**小白提示：为什么 2026 年起必须用 GitHub Actions 发布？**

「来源声明」就像包的「出生证明」：它用密码学方式证明这个包确实是从某个 GitHub 仓库的某次提交构建出来的，而不是有人在本机偷偷改过再上传。这样能大幅降低「供应链攻击」的风险——防止有人发布一个名字相似、但被植入了恶意代码的假包。对用户来说，装 n8n 的验证节点就像在官方应用商店装 App 一样放心。
{% endhint %}

### 提交你的节点给 n8n 审核验证（Submit your node for verification by n8n）

n8n 会对验证节点（verified community nodes）进行审查。用户可以在 n8n 的节点面板中发现并安装受验证的社区节点。这些节点需要遵守一定的技术和 UX 标准与约束。

**审核验证需要 GitHub Actions 发布**

从 2026 年 5 月 1 日起，通过 [n8n Creator Portal](https://creators.n8n.io/nodes) 提交审核验证的节点，必须使用带来源声明的 GitHub Actions 发布。设置方法请参见[发布到 npm](https://app.gitbook.com/s/GixZThfitWP21x2gQFpD)。

在提交节点给 n8n 审核之前，你必须：

* 从 [`n8n-node` 工具](/connect/create-nodes/build-your-node/using-the-n8n-node-tool)生成的脚手架开始。虽然这不是强制要求，但 n8n 强烈建议：任何你打算提交审核验证的社区节点，都用 `n8n-node` CLI 工具来创建。使用该工具能确保你的节点遵循预期的约定，并符合社区节点的要求。
* 确保节点有合适的文档，形式可以是 [npm 包](https://docs.npmjs.com/about-package-readme-files)里的 README，也可以是相关的公开仓库。
* 按照[发布到 npm](https://app.gitbook.com/s/GixZThfitWP21x2gQFpD)中描述的方法，用带来源声明的 GitHub Actions 工作流把节点发布到 npm。n8n 会从那里获取它进行最终审查。

### 准备好提交了吗？（Ready to submit?）

如果你的节点满足以上所有要求，请注册或登录 [n8n Creator Portal](https://creators.n8n.io/nodes)，提交你的节点进行验证。请注意，n8n 保留拒绝那些与 n8n 任何付费功能（尤其是企业功能）存在竞争关系的节点的权利。

{% hint style="info" %}
**小白提示：最后一步的注意事项**

- 「验证节点」会出现在 n8n 的节点面板里，等于官方替你背书，安装量会明显不一样。
- 但要注意那条「竞争条款」：如果你的节点功能跟 n8n 自家的付费/企业功能撞车，n8n 有权拒绝。做节点前先查查 n8n 官方节点清单，避开雷区。
- 审核可能需要一段时间，耐心等待官方反馈即可，被拒了通常也会告诉你原因。
{% endhint %}
