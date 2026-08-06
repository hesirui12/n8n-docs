---
description: >-
  n8n CLI 是一个轻量级客户端，用于通过公开 API 以编程方式与 n8n 交互。
contentType: guide
status: beta
nodeTitle: n8n CLI
originalFilePath: api/n8n-cli/index.md
originalUrl: 'https://docs.n8n.io/api/n8n-cli'
url: 'https://docs.n8n.io/connect/'
layout:
  description:
    visible: false
---

# n8n CLI 入门

**n8n CLI** 是一个轻量级命令行客户端，通过 [n8n API](n8n-api/README.md) 与正在运行的 n8n 实例通信。它可以运行在任何能联网的机器上，并使用 API 密钥进行认证。

使用这个 API CLI 可以：

- 列出和检查工作流
- 从 JSON 创建工作流
- 查看最近的执行记录
- 创建凭据
- 管理项目

所有操作都遵循用户的权限和 API 密钥的范围。

{% hint style="info" %}
**小白提示**：CLI（Command Line Interface）就是「在终端黑框里敲命令来操作程序」。你平时在 n8n 网页上点来点去能做的事，用 n8n CLI 敲一行命令就能完成，特别适合写脚本批量处理。例如 `n8n-cli workflow list` 列出所有工作流。
{% endhint %}

## n8n CLI 与服务器 CLI（Server CLI）的区别

如果你需要管理 n8n 实例本身（备份、许可证管理、紧急重置），请看[服务器 CLI](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/use-the-command-line)——这是运行在 n8n 所在机器上的内置工具。

| 方面 | n8n CLI | 服务器 CLI |
|--------|---------|-----------|
| **运行位置** | 任何有网络访问的机器 | 与 n8n 同一台机器 |
| **认证方式** | API 密钥 | 直接访问数据库 |
| **需要 n8n 运行** | 是 | 否（大多数操作不需要） |
| **最适合** | 开发者、集成、AI 代理 | 实例运维人员、备份、紧急情况 |
| **权限** | 遵循用户角色和 API 密钥范围 | 绕过访问控制 |

{% hint style="info" %}
**小白提示**：一句话区分——**n8n CLI 是「用户工具」**，用来操作工作流（需要 n8n 在线、要 API 密钥）；**服务器 CLI 是「管理员工具」**，用来修实例本身（直接动数据库，权限最大，别乱用）。
{% endhint %}

## 安装 n8n-cli

```bash
# Use directly with npx (zero install) <a href="#use-directly-with-npx-zero-install" id="use-directly-with-npx-zero-install"></a>
npx @n8n/cli workflow list

# Or install globally <a href="#or-install-globally" id="or-install-globally"></a>
npm install -g @n8n/cli
```

{% hint style="info" %}
**小白提示**：两种装法——① 不装，直接用 `npx @n8n/cli` 临时跑（适合偶尔用一次）；② `npm install -g` 全局安装，之后直接敲 `n8n-cli` 命令（适合常用）。推荐先全局安装。
{% endhint %}

## 连接到你的实例

```bash
n8n-cli config set-url https://your-instance.n8n.cloud
n8n-cli config set-api-key YOUR_API_KEY
n8n-cli config show
```

* 配置保存在 `~/.n8n-cli/config.json`，文件权限被限制为（`0600`）。
* 从 **n8n > 设置（Settings）> n8n API** 获取你的 API 密钥。

或者，跳过配置文件，使用环境变量：

```bash
export N8N_URL=https://your-instance.n8n.cloud
export N8N_API_KEY=your_api_key
```

{% hint style="info" %}
**小白提示**：三步走——① 告诉 CLI 你的 n8n 地址；② 告诉它你的 API 密钥（在 n8n 网页的 设置 > n8n API 里创建）；③ 验证配置。之后所有命令都会自动带上身份。配置文件默认只允许当前用户读写（0600 权限），防止别人偷看你的密钥。
{% endhint %}

## 内联参数（Inline flags）

``` bash
n8n-cli --url=https://my-n8n.app.n8n.cloud --api-key=n8n_api_xxxxx workflow list
```

### 解析顺序（Resolution order）

1. 命令行参数（`--url`、`--api-key`）
2. 环境变量（`N8N_URL`、`N8N_API_KEY`）
3. 配置文件（`~/.n8n-cli/config.json`）

{% hint style="info" %}
**小白提示**：解析顺序的意思是——如果三处都设置了同一个值，按上面的优先级取。命令行参数 > 环境变量 > 配置文件。这样你可以临时用参数覆盖配置，不必改文件。
{% endhint %}

## 命令（Commands）

每条命令都支持 `--help` 查看详细用法。

| 主题（Topic） | 命令（Commands） |
|---|---|
| `workflow` | `list`、`get`、`create`、`update`、`delete`、`activate`、`deactivate`、`tags`、`transfer` |
| `execution` | `list`、`get`、`retry`、`stop`、`delete` |
| `credential` | `list`、`get`、`schema`、`create`、`delete`、`transfer` |
| `project` | `list`、`get`、`create`、`update`、`delete`、`members`、`add-member`、`remove-member` |
| `tag` | `list`、`create`、`update`、`delete` |
| `variable` | `list`、`create`、`update`、`delete` |
| `data-table` | `list`、`get`、`create`、`delete`、`rows`、`add-rows`、`update-rows`、`upsert-rows`、`delete-rows` |
| `user` | `list`、`get` |
| `config` | `set-url`、`set-api-key`、`show` |
| `source-control` | `pull` |
| `package (beta)` | `export`、`import` |
| `skill` | `install` |
| `audit` | （顶层命令） |
| `login` / `logout` | （顶层命令） |

{% hint style="info" %}
**小白提示**：命令结构 = `n8n-cli <主题> <动作>`。例如 `workflow list`（列出工作流）、`credential create`（创建凭据）、`project add-member`（给项目加成员）。不确定某个主题支持什么，敲 `n8n-cli workflow --help` 就能看到。
{% endhint %}

## 输出格式（Output formats）

所有命令都通过 `--format` 支持三种输出格式：

| 格式 | 参数 | 何时使用 |
|---|---|---|
| 表格 | `--format=table`（默认） | 你想要人类可读的终端输出 |
| JSON | `--format=json` | 通过管道传给 jq、程序化使用 |
| 仅 ID | `--format=id-only` | 通过管道传给 xargs、编写脚本 |

### 示例

* 人类可读的表格

   ``` bash
   n8n-cli workflow list
   ```

* 供脚本使用的 JSON

   ``` bash
   n8n-cli workflow list --format=json | jq '.[] | select(.active) | .id'
   ```

* 把 ID 通过管道传给另一个命令

   ``` bash
   n8n-cli workflow list --format=id-only | xargs -I{} n8n-cli workflow deactivate {}
   ```

{% hint style="info" %}
**小白提示**：`|` 是管道的含义——「把左边命令的输出交给右边命令」。`jq` 是处理 JSON 的命令行工具，`xargs` 把每个 ID 依次套进后面的命令。第二行意思是「把激活的工作流 ID 都找出来」；第三行意思是「把所有工作流的 ID 拿出来，逐个停用」——注意这会停用全部工作流，谨慎使用！
{% endhint %}

## 作为 Claude Code 的技能（skill）使用

安装这个技能，让 Claude 始终知道如何使用 n8n-cli：

```bash
n8n-cli skill install --global
```

然后在 Claude Code 里输入 `/n8n-cli` 加载它。现在 Claude 可以代替你创建、更新和管理工作流，而不需要 MCP。

{% hint style="info" %}
**小白提示**：装了这个技能后，你可以直接用自然语言对 Claude 说「把 id 为 123 的工作流停用」，Claude 会自动调用对应的 n8n-cli 命令来执行。
{% endhint %}

## 示例（Examples）

### 列出和检查工作流

```bash
n8n-cli workflow list
n8n-cli workflow get <id>
```

### 从 JSON 创建工作流

```bash
cat workflow.json | n8n-cli workflow create --stdin
```

{% hint style="info" %}
**小白提示**：`cat workflow.json` 读出文件内容，管道传给 `n8n-cli workflow create --stdin`——`--stdin` 表示「从标准输入读取工作流 JSON」。这样你就能把导出的工作流文件直接导入到实例里。
{% endhint %}

### 查看最近的执行记录

```bash
n8n-cli execution list --status=error --limit=10
```

### 创建凭据

```bash
n8n-cli credential schema gmailOAuth2  # see required fields first
n8n-cli credential create --type=gmailOAuth2 --name='My Gmail' --file=cred.json
```

{% hint style="info" %}
**小白提示**：创建凭据前先用 `credential schema gmailOAuth2` 查看该类型需要哪些字段（比如 client ID、client secret），然后准备好 `cred.json`（JSON 文件，内容是字段值），再执行 create 命令。
{% endhint %}

### 管理项目

```bash
n8n-cli project create --name="My Project"
n8n-cli workflow transfer <id> --project=<projectId>
```

### 导出和导入包（packages）

{% hint style="warning" %}
**Beta**

`package` 命令仍处于 beta 阶段。可能出现破坏性变更。
{% endhint %}

```bash
n8n-cli package export --workflow-id=<workflow-id> --output=export.n8np
n8n-cli package import --file=export.n8np --conflict-policy=fail
n8n-cli package import --file=export.n8np --project=<project-id> --workflow-id-policy=source --conflict-policy=skip
```

{% hint style="info" %}
**小白提示**：`.n8np` 是 n8n 的「打包文件」，一个文件里可以包含多个工作流。导出（export）把工作流打包带走，导入（import）把包还原进来。`--conflict-policy` 决定遇到同名冲突时怎么办：`fail` 报错停止、`skip` 跳过冲突项；`--workflow-id-policy=source` 表示保留原工作流 ID。
{% endhint %}

关于可用参数和包的构成，参见 [n8n 包（n8n packages）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/n8n-packages) 的详细介绍。
