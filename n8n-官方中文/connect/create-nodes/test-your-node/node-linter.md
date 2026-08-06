---
contentType: howto
nodeTitle: Node linter
originalFilePath: integrations/creating-nodes/test/node-linter.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/test/node-linter'
url: 'https://docs.n8n.io/connect/create-nodes/test-your-node/node-linter'
layout:
  description:
    visible: false
---

# n8n 节点 Lint 检查器（n8n node linter）

n8n 的节点 linter，即 [`@n8n/eslint-plugin-community-nodes`](https://github.com/n8n-io/n8n/tree/master/packages/%40n8n/eslint-plugin-community-nodes)，会静态分析（"lint"）社区包中 n8n 节点和凭据的源代码。linter 能发现问题并自动修复，帮助你遵循最佳实践。

`@n8n/eslint-plugin-community-nodes` 包含一套针对节点文件（`*.node.ts`）、凭据文件（`*.credentials.ts`）以及社区包 `package.json` 的[规则集合](https://github.com/n8n-io/n8n/tree/master/packages/%40n8n/eslint-plugin-community-nodes#rules)。

{% hint style="info" %}
**小白提示：Linter 到底是什么？**

Linter（代码规范检查器）就像一个「严格的语文老师」：它逐行检查你的代码，找出拼写错误、命名不规范、格式问题、潜在 bug 等，并告诉你「第几行第几列有什么问题」。有些问题它还能一键帮你自动改好。写代码时让它在你背后盯着，等于多了一双永远不会累的眼睛。n8n 的这个 linter 是专为 n8n 节点定制的，知道 n8n 项目的各种约定（比如文件名格式、必需配置项）。
{% endhint %}

## 安装设置（Setup）

如果你使用 [n8n node starter](https://github.com/n8n-io/n8n-nodes-starter)：在 starter 项目里运行 `npm install` 来安装所有依赖。安装完成后，linter 就可以使用了。

如果你使用 VS Code，请安装 [ESLint VS Code 扩展](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)。对于其他 IDE，请参考它们各自的 ESLint 集成方式。

{% hint style="info" %}
**不要编辑配置文件**

[`eslint.config.mjs`](https://github.com/n8n-io/n8n-nodes-starter/blob/master/eslint.config.mjs) 包含由 [`@n8n/node-cli`](https://www.npmjs.com/package/@n8n/node-cli) 提供的 ESLint 配置。**不要编辑这个文件。**
{% endhint %}

## 使用方法（Usage）

你可以在社区包中使用 linter，也可以在 n8n 主仓库中使用。

### 执行 Lint 检查（Linting）

在社区包中，linter 会在安装依赖之后、发布包到 npm 之前自动运行。在 [n8n 主仓库](https://github.com/n8n-io/n8n)中，只要你在 pull request 中推送代码，linter 就会通过 GitHub Actions 自动运行。

在这两种情况下，当你在项目上工作时，VS Code 都会在后台实时进行 lint 检查。把鼠标悬停在发现的问题上，就能看到完整的检查说明以及指向更多信息的链接。

你也可以手动运行 linter：

* 运行 `npm run lint` 来执行检查，并在控制台查看发现的问题。
* 运行 `npm run lint:fix` 来执行检查并自动修复问题。linter 会修复那些[被标记为可自动修复](https://github.com/n8n-io/n8n/tree/master/packages/%40n8n/eslint-plugin-community-nodes#rules)的规则违规。

这两个命令都可以在你的社区包的根目录下运行，也可以在主仓库的 `/packages/nodes-base/` 目录下运行。

{% hint style="info" %}
**小白提示：`lint` 和 `lint:fix` 有什么区别？**

- `npm run lint`：只「体检」不出手，把问题列给你看，改动由你决定。
- `npm run lint:fix`：既能发现又能「自动矫正」——凡是属于可自动修复类别的问题（比如缩进、引号风格、命名格式），它会直接帮你改好。不过有些问题（比如逻辑类问题）机器改不了，仍需你手动处理。日常开发建议先 `lint:fix` 自动修一遍，剩下的再手工改。
{% endhint %}

### 例外情况（Exceptions）

除了修复规则违规，你也可以为某条规则添加例外，这样 linter 就不会再标记它。

从 VS Code 中添加 lint 例外：把鼠标悬停在问题上，点击 `Quick fix`（在 macOS 上是 `cmd+.`），然后选择 **Disable {rule} for this line**（对此行禁用 {规则}）。只有在你有充分理由的情况下，才为某一行禁用规则。如果你认为 linter 误报了问题，请在 [n8n 仓库](https://github.com/n8n-io/n8n/issues)中提交 issue 反馈。

要为单个文件添加 lint 例外，可以添加一条代码注释。更多指导请参阅 [ESLint 文档](https://eslint.org/docs/latest/use/configure/rules#disabling-rules)。

{% hint style="info" %}
**小白提示：什么时候才应该用「例外」？**

「例外」是最后手段，不是偷懒借口。合理的场景比如：某个第三方库的 API 设计就是和规则冲突，而你无法改变它；或者某处代码有注释说明的、刻意为之的写法。但如果你发现自己在疯狂禁用规则，可能说明规则本身有问题——这时候更该去 GitHub 反馈，而不是默默绕开。
{% endhint %}
