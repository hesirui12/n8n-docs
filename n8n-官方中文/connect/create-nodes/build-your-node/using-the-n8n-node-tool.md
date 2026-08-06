---
contentType: howto
search:
  boost: 3
nodeTitle: Using the n8n-node tool
originalFilePath: integrations/creating-nodes/build/n8n-node.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/build/n8n-node'
url: >-
  https://docs.n8n.io/connect/create-nodes/build-your-node/using-the-n8n-node-tool
layout:
  description:
    visible: false
---

# 使用 n8n-node 工具（Using the n8n-node tool）

`n8n-node` 工具是 n8n 官方提供的用于开发社区节点（community nodes）的命令行工具（CLI）。你可以用它来搭建（scaffold）新节点、构建（build）你的项目，以及在开发过程中运行你的节点。

使用 `n8n-node`，你可以创建符合[已验证社区节点指南](reference/verification-guidelines.md)的节点。

{% hint style="info" %}
**小白提示**：`n8n-node` 就像你写节点时的「脚手架工头」——你告诉它想要什么样的节点，它就帮你把项目目录、配置文件等基础骨架一次性搭好；之后你只管写核心代码，然后用它来编译、检查、测试、发布。这一整页都是围绕它的几个命令展开的：`new`（新建）、`build`（构建）、`dev`（本地测试）、`lint`（代码检查）、`release`（发布）。
{% endhint %}

## 获取 n8n-node（Get n8n-node）

### 不安装直接运行 n8n-node（Run n8n-node without installing）

你可以不安装 `n8n-node`，直接用包管理器运行 [`@n8n/create-node` 初始化器](https://www.npmjs.com/package/@n8n/create-node)来创建一个 `n8n-node` 项目：

```shell
npm create @n8n/node@latest
```

这会在本地生成项目的初始文件（这是「先本地安装 `n8n-node` 再显式运行 [`new` 命令](#new)」的另一种选择）。之后，你在项目目录里通过包管理器的脚本运行器来执行其余的 `n8n-node` 命令（例如 `npm run dev`）。

### 全局安装 n8n-node（Install n8n-node globally）

你可以用 `npm` 全局安装 `n8n-node`：

```shell
npm install --global @n8n/node-cli
```

输入以下命令验证命令是否可用：

```shell
n8n-node --version
```

（能打印出版本号，就说明安装成功了。）

## 命令总览（Command overview）

`n8n-node` 工具提供以下命令：

### new（新建）

`new` 命令会为一个新节点创建文件系统结构和元数据（metadata）。该命令初始化的结构与「[不安装直接运行](#run-n8n-node-without-installing)」中所述的结构相同。

调用时，它会以交互方式提示你输入项目相关信息，以便定制你的起始代码。你需要提供项目名称、选择节点类型，并选择最符合你需求的起始模板。`n8n-node` 工具会创建你的项目文件结构，并可选地安装初始项目依赖。

更多关于如何使用 `new` 命令的信息，请参见[创建新节点部分](#creating-a-new-node)。

### build（构建）

`build` 命令会编译你的节点，并复制所有必需的资源文件（assets）。

更多关于如何使用 `build` 命令的信息，请参见[构建你的节点部分](#building-your-node)。

### dev（开发模式）

`dev` 命令会带着你的节点运行 n8n。它会监视（monitor）你的项目目录，并在检测到更改时自动重新构建实时预览。

更多关于如何使用 `dev` 命令的信息，请参见[在 n8n 中测试你的节点部分](#testing-your-node-in-n8n)。

### lint（代码检查）

`lint` 命令会检查当前目录中的节点代码。你可以选择搭配 `--fix` 选项使用，它会尝试自动修复它发现的任何问题。

更多关于如何使用 `lint` 命令的信息，请参见[检查你的节点部分](#lint-your-node)。

### release（发布）

`release` 命令会把你的社区节点包发布到 npm。它使用 [`release-it`](https://github.com/release-it/release-it) 在发布到 npm 之前对你的包进行清理（clean）、检查（check）和干净的构建（cleanly build）。

更多关于如何使用 `release` 命令的信息，请参见[发布你的节点部分](#release-your-node)。

## 创建新节点（Creating a new node）

要用 `n8n-node` 创建新节点，请调用 `n8n-node new`。你可以完全以交互方式调用此命令，也可以在命令行上提供详细信息。

{% hint style="info" %}
**不安装直接创建新节点**

你可以选择不安装 `n8n-node`，直接用包管理器运行 [`@n8n/create-node` 初始化器](https://www.npmjs.com/package/@n8n/create-node)来创建 `n8n-node` 项目。

在下面的命令中，把 `n8n-node new` 替换为 `npm create @n8n/node@latest`。使用这种形式时，在添加任何选项（如 `--template`）之前，必须加上双连字符（`--`）。例如：

```shell
npm create @n8n/node@latest n8n-nodes-mynode -- --template declarative/custom
```
{% endhint %}

该命令会提示你补充任何缺失的节点信息，然后生成一个项目结构供你开始使用。默认情况下，它会在随后安装初始项目依赖（你可以通过传入 `--skip-install` 标志来禁用这一步）。

### 以交互方式设置节点详情（Setting node details interactively）

不带参数调用时，`n8n-node new` 会以交互方式提示你输入新节点的详细信息：

```shell
n8n-node new
```

这将启动一个交互式提示，你可以在此定义项目的详细信息：

* **你的节点叫什么名字？（What is your node called?）** 你的节点名称。这会影响你的项目目录名、包名以及 n8n 节点本身的名称。名称必须使用以下格式之一：
    * `n8n-nodes-<YOUR_NODE_NAME>`
    * `@<YOUR_ORG>/n8n-nodes-<YOUR_NODE_NAME>`
* **你正在构建什么类型的节点？（What kind of node are you building?）** 你想要构建的[节点类型](../plan-your-node/choose-a-node-building-style.md)：
    * **HTTP API**：一种低代码、声明式的节点结构，专为在 n8n Cloud 上更快获得批准而设计。
    * **Other（其他）**：一个完全灵活的编程式（programmatic style）节点。
* **你想使用哪个模板？（What template do you want to use?）** 使用 HTTP API 时，你可以选择起始模板：
    * **GitHub Issues API**：一个演示节点，包含多个操作和凭据。这可以帮助你熟悉节点结构和约定。
    * **Start from scratch（从零开始）**：一个空白模板，它会通过一些进一步的提示引导你完成自定义设置。

当选择 HTTP API > Start from scratch 时，`n8n-node` 会询问你以下问题：

* **API 的基础 URL 是什么？（What's the base URL of the API?）** 你计划集成的 API 的根 URL。
* **你的 API 使用什么类型的认证？（What type of authentication does your API use?）** 你的节点应提供的认证方式：
    * **API Key（API 密钥）**：使用请求头、查询参数或请求体发送一个秘密密钥。
    * **Bearer Token（Bearer 令牌）**：使用 Authorization 请求头发送令牌（`Authorization: Bearer <token>`）。
    * **OAuth2**：使用 OAuth 2.0 流程，代表用户或应用获取访问令牌。
    * **Basic Auth（基本认证）**：通过 Authorization 请求头发送 base64 编码的用户名和密码。
    * **Custom（自定义）**：创建你自己的凭据逻辑。这会创建一个空的凭据类，你可以根据自己的需求进行定制。
    * **None（无）**：无需认证。不为节点创建凭据类。

完成选择后，`n8n-node` 会在当前目录中为你的节点创建一个新的项目目录。默认情况下，它还会安装初始项目依赖（你可以通过传入 `--skip-install` 标志来禁用这一步）。

### 在命令行上提供节点详情（Providing node details on the command line）

你可以在命令行上提供部分节点详情，以避免交互提示。

你可以把要使用的节点名称作为参数传入：

```shell
n8n-node new n8n-nodes-myproject
```

{% hint style="info" %}
**节点名称格式**

节点名称必须使用以下格式之一：

* `@<YOUR_ORG>/n8n-nodes-<YOUR_NODE_NAME>`
* `n8n-nodes-<YOUR_NODE_NAME>`
{% endhint %}

如果你提前知道了想用的模板，也可以用 `--template` 标志传入：

```shell
n8n-node new --template declarative/custom
```

模板必须是以下之一：

* `declarative/github-issues`：一个演示节点，包含多个操作和凭据。这可以帮助你熟悉节点结构和约定。
* `declarative/custom`：一个空白模板，它会通过一些进一步的提示引导你完成自定义设置。
* `programmatic/example`：一个完全灵活的编程式（programmatic style）节点。

## 构建你的节点（Building your node）

你可以在项目的根目录运行 `build` 命令来构建节点：

```shell
n8n-node build
```

`n8n-node` 会编译你的 TypeScript 文件，并打包你的其他项目资源。你也可以通过包管理器调用 `build` 脚本。例如，如果你使用 `npm`，效果一样：

```shell
npm run build
```

## 检查你的节点（Lint your node）

`n8n-node` 工具还会自动为你的项目创建一个 `lint` 脚本。你可以用包管理器运行它。例如：

```shell
n8n-node lint
```

你也可以通过包管理器的脚本运行器来运行：

```shell
npm run lint
```

如果加上 `--fix` 选项（也可以用 `npm run lint:fix` 调用），`n8n-node` 会尝试修复它发现的问题：

```shell
n8n-node lint --fix
```

## 在 n8n 中测试你的节点（Testing your node in n8n）

要在 n8n 中测试你的节点，请在项目根目录运行 `dev` 命令：

```shell
n8n-node dev
```

与 `build` 命令一样，你也可以通过包管理器运行它。例如：

```shell
npm run dev
```

`n8n-node` 会编译你的项目，然后通过 `npm` 启动一个本地 n8n 实例，并加载你的节点。

访问你的 `localhost:5678` 登录你的 n8n 实例。如果你打开一个工作流，你的节点会出现在节点面板中：

![node in nodes panel](../../.gitbook/assets/node_in_nodes_panel.png)

（上面这张图展示的就是：节点出现在 n8n 左侧的节点面板里，你可以像使用内置节点一样把它拖到画布上。）

从那里，你可以把它添加到你的工作流中，并在开发过程中测试节点的功能。

## 发布你的节点（Release your node）

要发布你的节点，请在项目目录中运行 `release` 命令。此命令使用 [`release-it`](https://github.com/release-it/release-it) 来构建并发布你的节点。

{% hint style="info" %}
**登录 npm**

要使用 `release` 命令，你必须先使用 `npm login` 命令登录 npm。如果没有登录，`n8n-node` 就没有权限发布你的项目文件。
{% endhint %}

```shell
n8n-node release
```

如果用 `npm` 运行，请输入：

```shell
npm run release
```

当你运行 `release` 命令时，`n8n-node` 会执行以下操作：

* 构建节点
* 对你的文件运行 lint 检查
* 更新变更日志（changelog）
* 创建 git 标签（tags）
* 创建一个 GitHub release
* 将包发布到 npm
