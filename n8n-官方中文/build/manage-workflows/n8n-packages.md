---
title: n8n 包（n8n Packages）
contentType: howto
nodeTitle: n8nPackages
originalFilePath: workflows/n8n-packages.md
url: https://docs.n8n.io/build/manage-workflows/export-and-import/n8n-packages
description: 如何用 n8n packages（n8n 包）从你的 n8n 实例导出和导入内容
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

# n8n 包 / n8n Packages

{% hint style="warning" %}
**Beta 测试阶段**

n8n 包（packages）的格式和 API 仍在开发中，可能会出现不升级大版本号（major version）就直接破坏性变更的情况。
如果你发现任何问题，欢迎在我们的主 n8n 仓库（GitHub）上提交 issue。
{% endhint %}

{% hint style="info" %}
**大白话（这一页是什么）**：n8n 包（`.n8np`）可以理解成工作流的「打包快照」——它把一条或多条工作流、以及它们用到的凭证的「线索」，打包成一个文件。你可以从 A 实例导出这个包，再导入到 B 实例，实现工作流的「搬家」。它跟普通 JSON 导出最大的区别是：**打包（bundling）了多条工作流、带上了凭证的引用信息**，更适合在实例之间批量迁移。
{% endhint %}

一个包（package）是一个「快照（snapshot）」tar 文件，它把一条工作流连同描述其依赖关系的清单文件（manifest）打包在一起，类似一个 `npm` 包。你可以从一个 n8n 实例导出包，然后导入到另一个实例。

你可以通过 n8n 实例的[公共 API（Public API）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api/n8n-package#post-n8n-packages-export)导入和导出 n8n 包，也可以通过 n8n CLI（命令行工具）操作——CLI 底层调用的就是同一个公共 API 接口。

{% hint style="info" %}
**大白话**：两条操作路径任选：一是直接调 API（适合写程序自动化），二是用 `n8n-cli package ...` 命令（适合在服务器上手敲命令）。两种方式功能一样，CLI 只是把 API 封装成了命令。
{% endhint %}

## 已知限制 / Known limitations

以下实体目前**还不支持**打包进 n8n 包：

- 子工作流（sub-workflows）
- 错误工作流（error workflows）
- 数据表（data tables）
- 文件夹（folders）
- 项目（projects）

我们正在努力为这些实体添加支持。

{% hint style="info" %}
**大白话**：如果你要迁移的内容涉及子工作流、错误工作流等，目前还不能直接用包搞定——需要先手动处理这些依赖（比如把子工作流单独导出导入），官方正在开发支持。
{% endhint %}

## 包里有什么 / What's in a package

一个包是以 `.n8np` 为扩展名的 tar 文件。它包含一个 `manifest.json`（清单文件）和你导出的工作流，以及这些工作流用到的凭证。n8n **绝不会**把凭证密钥（secrets，即密码/API Key 等敏感信息）放进包里。相反，它会导出一个「占位（stub）」信息，包含该凭证的 ID、名称和类型，方便你在目标实例上把「包里的凭证引用」对应到「实例上已有的凭证」。

{% hint style="info" %}
**大白话（重点）**：包里只有「凭证是谁」的信息（ID、名字、类型），没有「凭证的秘密」（密码、密钥）。所以把一个包发给任何人都是安全的——对方拿到包后，需要在自己实例上准备对应的凭证，然后告诉 n8n「包里的这个凭证，用我这个凭证代替」。这也是下面「Bindings（绑定）」那一节存在的原因。
{% endhint %}

### 内容结构 / Content overview

解压一个 `.n8np` 归档文件后，你会得到一个目录，里面包含一个 `manifest.json` 文件和一个 `workflows`（工作流）目录。n8n 为每条导出的工作流创建一个子目录，每个子目录里有一个 `workflow.json` 文件，存放该工作流的节点、连接和设置：

```
export/
├── manifest.json
└── workflows/
    ├── marketing-agent/
    │   └── workflow.json
    └── personal-ai-assistant/
        └── workflow.json
```

{% hint style="info" %}
**大白话**：这个目录结构就是包解压后的样子：`manifest.json` 是「说明书」（记录包里都有什么），`workflows` 文件夹下面每个子文件夹对应一条工作流，里面是标准的 `workflow.json`。眼熟吧——单条工作流的 JSON 格式和你平时导出的 JSON 是一样的。
{% endhint %}

`manifest.json` 文件描述了包的内容：

* `packageFormatVersion`：包格式的版本号。
* `exportedAt`：n8n 创建该包时的时间戳。
* `sourceN8nVersion`：导出该包的 n8n 版本。
* `sourceId`：导出该包的 n8n 实例的标识符。
* `workflows`：导出的工作流列表，每条工作流包含其 `id`（ID）、`name`（名称）和 `target`（在 `workflows` 目录下的路径）。
* `requirements.credentials`：导出的工作流用到的凭证列表。每条记录包含凭证的 `id`、`name` 和 `type`，并列出了使用该凭证的工作流 ID（`usedByWorkflows`）。n8n 不会把凭证密钥放进包里。

{% hint style="info" %}
**大白话**：`manifest.json` 就是包的「户口本」：什么时候导出的、从哪个实例导出的、包含哪些工作流、需要哪些凭证。`requirements.credentials` 特别重要——它列出的凭证是导入时必须解决的「依赖」，目标实例上没有对应的凭证，导入时就要走「创建占位」或「强制要求已存在」的逻辑（见下文）。
{% endhint %}

## 使用场景 / Use cases

当你需要一种**可重复、可自动化**的方式在实例之间移动工作流时，请使用 n8n 包。常见场景包括：

* **CI/CD 流水线**：作为自动化流水线的一部分，把工作流从开发实例提升（promote）到预发布（staging）或生产（production）实例。
* **备份**：导出工作流及其凭证引用，方便以后恢复，或在新实例上重建它们。
* **分享工作流**：把工作流交给队友或其他团队，而无需分享凭证密钥。
* **实例迁移**：把工作流从一个 n8n 实例搬到另一个，例如合并实例或搭建新环境时。

{% hint style="info" %}
**大白话**：一句话总结——「批量、安全、可自动化地搬工作流」。特别是 CI/CD：你可以把「打包-导入」写进流水线脚本，实现一键发布。凭证密钥不出包的特性，让分享也完全安全。
{% endhint %}

## 导出一个包 / Export a package

要导出包，请调用导出接口（export endpoint），并传入你想包含的工作流 ID。n8n 会返回一个 `.n8np` 文件，其中包含这些工作流和它们的凭证占位（stub）。

关于请求和响应的详细信息，请参阅公共 API 参考中的[导出一个包（Export a package）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api/n8n-package#post-n8n-packages-export)。

你也可以使用 [n8n CLI](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-cli)（底层调用的是同一个接口）来导出包：

```bash
n8n-cli package export --workflow-id=<workflow-id> --output=export.n8np
```

可以提供工作流 ID 或项目 ID，但**不能同时提供两者**。

{% hint style="info" %}
**大白话**：上面这行命令的意思：用 `n8n-cli package export` 导出包，`--workflow-id` 指定要导出哪条工作流，`--output` 指定保存到哪个文件。如果填了多个工作流 ID，就把它们打包在一起。
{% endhint %}

| 参数（Flag） | 说明（Description） |
|------|-------------|
| `-w, --workflow-id` | 要包含的工作流 ID。重复使用该参数可导出多条工作流。 |
| `-p, --project-id` | 要包含的项目 ID。重复使用该参数可导出多个项目。 |
| `-o, --output` | 包要写入的文件。默认为 `export.n8np`。 |

至少提供 `--workflow-id` 或 `--project-id` 中的一个。导出工作流要求 API 密钥拥有 `workflow:export` 权限范围；导出项目要求 API 密钥拥有 `project:export` 权限范围。

{% hint style="info" %}
**大白话**：两个「主角」参数任选一个必填：`--workflow-id`（导出某些工作流）或 `--project-id`（导出某个项目下的所有工作流）。另外注意权限：用 API/CLI 时，你用的 API Key 必须带对应的权限范围（workflow:export 或 project:export），否则会被拒绝。
{% endhint %}

## 导入一个包 / Import a package

要导入包，请提供 `.n8np` 文件以及控制以下行为的选项：

* 工作流导入到哪个项目（project）和文件夹（folder）。
* 当目标实例上已存在相同源 ID（source ID）的工作流时，该怎么处理。
* 导入的工作流是保留原来的 ID，还是分配一个新 ID。
* n8n 如何匹配工作流依赖的凭证。

关于完整选项列表，请参阅公共 API 参考中的[导入一个包（Import a package）](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-api/n8n-package#post-n8n-packages-import)。

你也可以使用 [n8n CLI](https://app.gitbook.com/s/r7wKI4I1BgdBCuq5Cvcx/n8n-cli)（底层调用的是同一个接口）来导入包：

```bash
n8n-cli package import --file=export.n8np --conflict-policy=fail
n8n-cli package import --file=export.n8np --project=<id> --conflict-policy=new-version
n8n-cli package import --file=export.n8np --conflict-policy=fail --credential-missing-mode=must-preexist
```

{% hint style="info" %}
**大白话**：上面是三个导入命令的例子，区别在于你选择了不同的「冲突处理策略」和「凭证缺失处理策略」：第一行「遇到同名工作流就报错失败」；第二行「导入到指定项目，遇到同名就新建一个版本」；第三行「要求包引用的凭证必须在目标实例上已经存在，否则失败」。具体每个参数的解释见下表。
{% endhint %}

| 参数（Flag） | 说明（Description） |
|------|-------------|
| `--file` | `.n8np` 包文件的路径。必填。 |
| `--conflict-policy` | 当工作流已按源 ID 存在时怎么办：`new-version`（新建版本）、`fail`（失败）或 `skip`（跳过）。必填。 |
| `--project` | 目标项目 ID。默认为你的个人项目（personal project）。 |
| `--folder` | 项目内目标文件夹 ID。默认为项目的根目录。 |
| `--workflow-id-policy` | 导入的工作流是保留源 ID（`source`）还是获得新 ID（`new`）。 |
| `--credential-matching-mode` | 当没有显式绑定（binding）时，如何在目标实例上匹配凭证：`id-only`（仅按 ID 匹配，默认）、`name-and-type`（按名称和类型匹配）或 `type-only`（仅按类型匹配）。 |
| `--credential-missing-mode` | 当引用的凭证无法解析时怎么办。`create-stub`（创建占位凭证）是实例默认行为，会在目标项目中创建空的占位凭证；`must-preexist`（必须已存在）则要求每个被引用的凭证都已经存在。 |
| `--bindings` | 显式的「源 ID → 目标 ID」映射，是一个以实体类型为键的 JSON 对象，会在匹配模式（matching mode）之前应用。目前支持 `credentials`（凭证），例如 `{"credentials": {"<source-id>": "<target-id>"}}`。 |

导入要求 API 密钥拥有 `workflow:import` 权限范围。当导入被阻止时——例如在 `--conflict-policy=fail` 下发生工作流冲突，或在 `--credential-missing-mode=must-preexist` 下存在无法解析的凭证——命令会以非零退出码结束，并列出阻止导入的问题。在默认的 `create-stub` 模式下，n8n 会为缺失的凭证创建占位，而不是阻止导入。

{% hint style="info" %}
**大白话（导入参数速记）**：导入时你需要回答三个问题：① 工作流放哪（`--project`、`--folder`）；② 遇到重名怎么办（`--conflict-policy`：新建版本/直接失败/跳过）；③ 凭证怎么对应（`--credential-matching-mode` + `--credential-missing-mode`）。默认情况下，凭证对不上 n8n 会创建一个「空壳占位凭证」让导入继续；如果你希望「凭证不全就不导入」，就加 `--credential-missing-mode=must-preexist`。
{% endhint %}

## 绑定 / Bindings

绑定（bindings）告诉 n8n：包里的实体（实体是工作流依赖的对象）应该如何映射到你实例上对应的实体。每条绑定把「源 ID（包里的）」与「目标 ID（你实例上的）」配对。目前，你可以绑定凭证（credentials）。

要提供绑定，请给 `--bindings` 传一个以实体类型为键的 JSON 对象。n8n 会**先**应用你的显式绑定，**再**用匹配模式（matching mode）解析剩余的凭证。

n8n 会在导入响应的 `bindings` 部分返回它实际使用的绑定。把它们保存下来，在以后的导入中再传回去，就可以保持映射稳定。

{% hint style="info" %}
**大白话**：绑定 = 「手动指定对应关系」。比如包里的凭证 ID 是 `aBc123`，你实例上真正要用的是 ID 为 `xYz456` 的凭证，那就用绑定把 `aBc123` 指向 `xYz456`，导入时所有用到 `aBc123` 的地方都会自动换成 `xYz456`。没手动绑定的，才轮到自动匹配（matching mode）去猜。建议把响应里返回的绑定存下来复用，避免每次重新指定。
{% endhint %}

### 凭证 / Credentials

当你导入一个包时，n8n 会把工作流用到的每条凭证解析（resolve）成目标实例上的一个凭证。你可以让 n8n 自动匹配凭证，也可以显式绑定它们。

要自己映射某个凭证，请把它添加到 `--bindings` 的 `credentials` 对象中，键为源凭证 ID。例如：你的源实例有一条工作流，使用 ID 为 `aBc123` 的 `slack` 凭证；目标实例上有一个 ID 为 `xYz456` 的 `slack` 凭证，你希望工作流使用它。把 `aBc123` 绑定到 `xYz456`，这样所有使用 `aBc123` 的工作流都会映射到 `xYz456`：

```bash
n8n-cli package import --file=export.n8np --conflict-policy=fail --bindings='{"credentials": {"aBc123": "xYz456"}}'
```

当你不显式绑定凭证时，n8n 会使用 `--credential-matching-mode` 设置的模式来解析它：

* `id-only`（默认）：把包里的凭证与 ID 相同的目标凭证匹配。
* `name-and-type`：与名称和类型都相同的目标凭证匹配。
* `type-only`：与类型相同的目标凭证匹配。

对于 `name-and-type` 和 `type-only`，当有多个凭证匹配时，n8n 优先选择目标项目拥有的凭证，然后是共享给该项目的凭证，最后是全局凭证（global credentials）；在同一个分组内，优先选择最近更新过的那个。

如果 n8n 无法匹配凭证，就会回退到 `--credential-missing-mode`：

* `must-preexist`：如果凭证在目标实例上不存在，n8n 会**拒绝导入**。
* `create-stub`（实例默认）：n8n 导入工作流并创建一个空的凭证占位（stub），然后在导入响应的 `bindings.credentials` 下返回新的绑定。在以后的导入中传回该绑定，就能复用它，而不是再创建一个新的。

{% hint style="info" %}
**大白话（凭证匹配总结）**：匹配顺序是「手动绑定 > 自动匹配 > 缺失处理」。自动匹配有三种严格程度：只看 ID、看名称+类型、只看类型——越宽松越容易匹配上，但也越容易「配错」（同名不同服务的凭证被配到一起）。匹配不上时，要么要求必须已存在（严格），要么创建一个占位凭证（宽松，之后再手动补）。对于小白用户，建议先用默认模式跑通，再把返回的绑定存好复用。
{% endhint %}
