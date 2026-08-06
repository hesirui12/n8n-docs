---
contentType: reference
nodeTitle: 使用命令行（Use the command line）
originalFilePath: hosting/cli-commands.md
originalUrl: https://docs.n8n.io/hosting/cli-commands
url: https://docs.n8n.io/deploy/host-n8n/configure-n8n/use-the-command-line
description: Server CLI（n8n 内置的命令行界面）中可用的命令。
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

# 使用命令行（Use the command line）

**Server CLI** 是一个内置的命令行界面，运行在与你的 n8n 安装相同的机器上。它提供对数据库的直接访问权限，用于执行管理任务，并且即使 n8n 没有在运行，它也可以执行大多数命令。

{% hint style="info" %}
**小白提示**：命令行（CLI，Command Line Interface）= 在终端里敲命令来操作程序。Server CLI 是你登录到跑 n8n 的那台服务器，在终端里敲 `n8n` 开头的命令来管理 n8n——比如手动执行某个工作流、备份/导出数据、重置用户管理、清除许可证等。它直接操作 n8n 的数据库，权限很大，所以要小心使用。
{% endhint %}

{% hint style="info" %}
**n8n CLI**

想从远程机器以编程方式操作 n8n，或者与 AI 智能体集成？请查看 [n8n CLI](https://app.gitbook.com/o/gkeAaBEvbwHB2NmepVHG/s/r7wKI4I1BgdBCuq5Cvcx/)。

{% endhint %}

## 什么时候用 Server CLI，什么时候用 n8n CLI（When to use Server CLI vs n8n CLI）

| 特性（Feature）                  | Server CLI                                                    | n8n CLI                                                  |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------- |
| **在哪里运行（Where it runs）**        | 与 n8n 同一台机器                                           | 任何有网络访问的机器                          |
| **认证方式（Authentication）**       | 直接访问数据库                                        | API 密钥                                                  |
| **是否要求 n8n 在运行（Requires running n8n）** | 否（大多数命令）                                            | 是                                                      |
| **最适合（Best for）**             | 实例运维人员、备份、迁移                       | 程序员、AI 智能体、远程管理                |
| **安全模型（Security model）**       | 绕过访问控制                                      | 遵守用户权限和 API 密钥作用域              |
| **用例示例（Use case examples）**    | 备份/恢复、许可证管理、紧急密码重置 | 工作流自动化、用代码管理凭据 |

{% hint style="info" %}
**小白提示**：简单区分——Server CLI 是「本地超级管理员工具」，直接操作数据库，不用登录、不走权限检查，所以在 n8n 挂掉、忘记密码、需要紧急修复时非常有用；n8n CLI 是「远程普通工具」，走正规 API 认证，适合写脚本、接 AI。绝大多数新手用到的是 Server CLI。
{% endhint %}

## 运行 CLI 命令（Running CLI commands）

你可以在自托管的 n8n 上使用 CLI 命令。根据你选择的 n8n 安装方式，运行命令的方式有所区别：

* npm：可以直接使用 `n8n` 命令。下面的示例中使用的是这种方式。
*   Docker：`n8n` 命令在你的 Docker 容器内可用：

    ```sh
    docker exec -u node -it <n8n-container-name> <n8n-cli-command>
    ```

{% hint style="info" %}
**小白提示**：Docker 安装时，先要「进入容器」再执行命令，所以命令前面要加 `docker exec -u node -it 容器名`。比如容器名叫 `n8n`，想导出工作流，就执行：`docker exec -u node -it n8n n8n export:workflow --all`。`<...>` 尖括号里的内容要换成你自己的实际值。
{% endhint %}

## 启动一个工作流（Start a workflow）

你可以直接用 CLI 启动工作流。

按 ID 执行一个已保存的工作流：

```bash
n8n execute --id <ID>
```

{% hint style="info" %}
**小白提示**：`<ID>` 是工作流的 ID（在 n8n 界面地址栏或导出数据里能看到，通常是一串数字）。这条命令会在命令行里直接运行一次该工作流，相当于手动触发一次。
{% endhint %}

## 发布或取消发布工作流（Publish or unpublish a workflow）

你可以使用 CLI 发布或取消发布工作流。在 n8n 2.0 中，以前的[激活/停用开关（active/inactive toggle）](https://app.gitbook.com/s/hhM8Cox90Piiv0u0EgHM/v20-breaking-changes) 被「发布/取消发布」模型取代。在 CLI 中使用 `publish:workflow` 和 `unpublish:workflow` 来改变工作流的发布状态。

{% hint style="info" %}
**小白提示**：n8n 2.0 引入了「草稿/已发布」概念：工作流默认是草稿状态，发布（publish）后才算正式生效（定时触发、Webhook 才会真正工作）。用界面上的按钮操作即可，这里介绍的是命令行操作方式，适合批量管理。
{% endhint %}

{% hint style="info" %}
**需要重启**

这些命令操作的是你的 n8n 数据库。如果你在 n8n 运行期间执行它们，这些更改要到重启 n8n 后才会生效。
{% endhint %}

### 发布工作流（Publish a workflow）

使用 `publish:workflow` 按 ID 发布工作流。你也可以选择传入某个历史版本的 `versionId` 来发布该特定历史版本。

命令参数：

| 参数（Flag）        | 说明（Description）                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| --help      | 帮助提示。                                                                |
| --id        | 要发布的工作流的 ID。必填。                                |
| --versionId | 可选：要发布的版本 ID。如果不填，则发布当前的草稿版本。 |

{% hint style="info" %}
**没有 `--all` 参数**

与已弃用的 `update:workflow` 命令不同，`publish:workflow` 不支持 `--all`。这是有意为之：为了防止在生产环境中意外批量发布工作流。请按 ID 逐个发布工作流。
{% endhint %}

按 ID 发布工作流的当前草稿：

```bash
n8n publish:workflow --id=<ID>
```

发布工作流的某个特定历史版本：

```bash
n8n publish:workflow --id=<ID> --versionId=<VERSION_ID>
```

### 取消发布工作流（Unpublish a workflow）

使用 `unpublish:workflow` 按 ID 取消发布工作流，或一次取消发布所有工作流。

命令参数：

| 参数（Flag）   | 说明（Description）                                                      |
| ------ | ---------------------------------------------------------------- |
| --help | 帮助提示。                                                     |
| --id   | 要取消发布的工作流的 ID。不能与 `--all` 同时使用。 |
| --all  | 取消发布所有工作流。不能与 `--id` 同时使用。              |

按 ID 取消发布工作流：

```bash
n8n unpublish:workflow --id=<ID>
```

取消发布所有工作流：

```bash
n8n unpublish:workflow --all
```

### update:workflow（已弃用，deprecated）

{% hint style="warning" %}
**在 n8n 2.0 中已弃用**

`update:workflow` 命令已被弃用，并将在未来移除。请改用 [`publish:workflow`](use-the-command-line.md#publish-a-workflow) 和 [`unpublish:workflow`](use-the-command-line.md#unpublish-a-workflow)。详情请参见 [n8n v2.0 破坏性变更（breaking changes）](https://app.gitbook.com/s/hhM8Cox90Piiv0u0EgHM/v20-breaking-changes)。
{% endhint %}

按 ID 把工作流的激活状态设为 false：

```bash
n8n update:workflow --id=<ID> --active=false
```

按 ID 把工作流的激活状态设为 true：

```bash
n8n update:workflow --id=<ID> --active=true
```

把所有工作流的激活状态设为 false：

```bash
n8n update:workflow --all --active=false
```

把所有工作流的激活状态设为 true：

```bash
n8n update:workflow --all --active=true
```

## 导出实体（Export entities）

你可以使用 CLI 从 n8n 导出数据库实体。这个工具允许你把一种数据库类型（如 SQLite）的所有实体类型导出，再导入到另一种数据库类型（如 Postgres）。

命令参数：

| 参数（Flag）                                | 说明（Description）                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| --help                              | 帮助提示。                                                                                   |
| --outputDir                         | 输出目录路径                                                                          |
| --includeExecutionHistoryDataTables | 包含执行历史数据表，默认排除这些表，因为它们可能非常大 |

```bash
n8n export:entities --outputDir=./outputs --includeExecutionHistoryDataTables=true
```

{% hint style="info" %}
**小白提示**：实体（entities）= 数据库里的「一类东西」，比如用户、工作流、凭据、执行历史等。这条命令常用于数据库迁移（比如从 SQLite 迁到 PostgreSQL）。`--includeExecutionHistoryDataTables` 一般不要开，执行历史数据可能非常大；只有你确实想连历史记录一起搬时才开。
{% endhint %}

## 导出工作流和凭据（Export workflows and credentials）

你可以使用 CLI 从 n8n 导出工作流和凭据。

命令参数：

| 参数（Flag）         | 说明（Description）                                                                                                                                                                                         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --help       | 帮助提示。                                                                                                                                                                                        |
| --all        | 导出所有工作流/凭据。                                                                                                                                                                  |
| --backup     | 为备份设置 `--all --pretty --separate`。可以选择设置 `--output`。                                                                                                                        |
| --id         | 要导出的工作流的 ID。                                                                                                                                                                   |
| --output, -o | 输出文件名，如果使用 separate（每个文件）模式则输出目录名。                                                                                                                                             |
| --pretty     | 把输出格式化为更易读的形式。                                                                                                                                                    |
| --separate   | 每个工作流导出为一个文件（适合版本管理）。必须用 `--output` 指定一个目录。                                                                                                         |
| --decrypted  | 以明文格式导出凭据。（仅凭据。）                                                                                                                                 |
| --version    | 要导出的某个特定历史版本的版本 ID。（仅工作流，不能与 `--all` 或 `--published` 一起使用。）                                                                           |
| --published  | 导出工作流的已发布/激活版本，而不是当前草稿。与 `--all` 组合使用时，未发布的工作流会被跳过。（仅工作流，不能与 `--version` 一起使用。） |

{% hint style="info" %}
**小白提示**：导出（export）= 把 n8n 里的东西「下载」成一个文件，用于备份、迁移或版本管理。导出凭据时注意：默认是加密的，只有加 `--decrypted` 才会明文输出（方便迁移到另一台密钥不同的实例，但文件里就是明文密码了，务必妥善保管）。
{% endhint %}

### 工作流（Workflows）

把所有工作流导出到标准输出（终端）：

```bash
n8n export:workflow --all
```

按 ID 导出某个工作流并指定输出文件名：

```bash
n8n export:workflow --id=<ID> --output=file.json
```

把所有工作流导出到指定目录的单个文件中：

```bash
n8n export:workflow --all --output=backups/latest/file.json
```

使用 `--backup` 参数把所有工作流导出到指定目录（参数说明见上表）：

```bash
n8n export:workflow --backup --output=backups/latest/
```

#### 导出特定版本的工作流（Export a specific workflow version）

你可以通过 `--version` 传入某个历史版本的 `versionId` 来导出该特定版本：

```bash
n8n export:workflow --id=<ID> --version=<VERSION_ID> --output=workflow-v1.json
```

#### 导出工作流的已发布版本（Export the published version of a workflow）

使用 `--published` 导出工作流当前已发布/激活的版本，而不是当前草稿：

```bash
n8n export:workflow --id=<ID> --published --output=published.json
```

你可以把 `--published` 与 `--all` 组合使用，导出每个工作流的已发布版本。没有已发布版本的工作流会被跳过：

```bash
n8n export:workflow --all --published --output=workflows.json
```

{% hint style="info" %}
**版本元数据（Version metadata）**

导出工作流时，n8n 会包含一个 `versionMetadata` 属性，其中含有该版本对应的工作流历史名称和描述。导入命令会在导入时把这个数据保留在工作流历史表中。工作流当前的名称和描述不会被覆盖。
{% endhint %}

### 凭据（Credentials）

把所有凭据导出到标准输出（终端）：

```bash
n8n export:credentials --all
```

按 ID 导出凭据并指定输出文件名：

```bash
n8n export:credentials --id=<ID> --output=file.json
```

把所有凭据导出到指定目录的单个文件中：

```bash
n8n export:credentials --all --output=backups/latest/file.json
```

使用 `--backup` 参数把所有凭据导出到指定目录（参数说明见上表）：

```bash
n8n export:credentials --backup --output=backups/latest/
```

以明文格式导出所有凭据。当你想把 n8n 从一个安装迁移到另一个「配置文件里密钥（secret key）不同」的安装时，可以使用这个功能。

{% hint style="warning" %}
**敏感信息（Sensitive information）**

所有敏感信息都会明文显示在文件中。
{% endhint %}

```bash
n8n export:credentials --all --decrypted --output=backups/decrypted.json
```

## 导入实体（Import entities）

你可以使用这条命令导入之前 `export:entities` 命令导出的实体，它允许把实体导入到与导出时不同类型的数据库中。当前支持的数据库类型包括：SQLite、Postgres。

导入前数据库应为空，这可以通过 `--truncateTables` 参数强制实现。

命令参数：

| 参数（Flag）             | 说明（Description）                                        |
| ---------------- | -------------------------------------------------- |
| --help           | 帮助提示。                                       |
| --inputDir       | 存放导入输出文件的输入目录 |
| --truncateTables | 导入前清空表                      |

```bash
n8n import:entities --inputDir ./outputs --truncateTables true
```

{% hint style="info" %}
**小白提示**：导入（import）= 把之前导出的文件「装回」n8n。`--truncateTables true` 的意思是「先清空数据库里的旧数据再导入」，如果你确认目标库是空的就不用加。这条命令是上面 `export:entities` 的配套命令，用于数据库迁移。
{% endhint %}

## 导入工作流和凭据（Import workflows and credentials）

你可以使用 CLI 从 n8n 导入工作流和凭据。

{% hint style="warning" %}
**更新 ID（Update the IDs）**

导出工作流和凭据时，n8n 也会导出它们的 ID。如果你的现有数据库中已经有相同 ID 的工作流和凭据，它们会被覆盖。为避免这种情况，请在导入前删除或修改这些 ID。
{% endhint %}

可用参数：

| 参数（Flag）                  | 说明（Description）                                                                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --help                | 帮助提示。                                                                                                                                                                                            |
| --input               | 输入文件名，如果使用 `--separate` 则是输入目录。                                                                                                                                                     |
| --projectId           | 把工作流或凭据导入到指定项目。不能与 `--userId` 一起使用。                                                                                                              |
| --separate            | 从 `--input` 提供的目录导入 `*.json` 文件。                                                                                                                                              |
| --userId              | 把工作流或凭据导入到指定用户。不能与 `--projectId` 一起使用。                                                                                                              |
| --skipMigrationChecks | 跳过迁移校验检查。                                                                                                                                                                       |
| --activeState         | 控制导入工作流的激活状态。可接受 `false`（默认，停用所有导入的工作流）或 `fromJson`（使用每个工作流 JSON 中的 `active` 字段；仅多主模式）。 |

{% hint style="info" %}
**迁移到 SQLite 时的注意**

n8n 将工作流和凭据的名称限制为 128 个字符，但 SQLite 并不强制执行大小限制。

这可能会导致导入过程中出现类似 **Data too long for column name**（列名数据过长）的错误。

这种情况下，你可以在 n8n 界面中修改名称后重新导出，或者直接在导入前编辑 JSON 文件。
{% endhint %}

{% hint style="info" %}
**小白提示**：导入时默认所有工作流都是「停用」状态，不会自动跑起来——这是安全设计。如果你希望按文件里的 `active` 字段恢复状态，加 `--activeState=fromJson`（仅多主/队列模式支持）。
{% endhint %}

### 工作流（Workflows）

{% hint style="warning" %}
**已知问题：cron 触发器在导入后仍会继续运行**

导入一个之前处于激活状态的工作流时，其行为取决于你运行的模式。这是一个已知的 bug。

在多主（multi-main）和队列模式（queue-mode）的实例上，之前激活的工作流的 cron 触发器会在导入时被停用。

在非多主实例上，之前激活的工作流的 cron 触发器会继续运行，直到你重启 n8n 实例。
{% endhint %}

从特定文件导入工作流：

```bash
n8n import:workflow --input=file.json
```

从指定目录导入所有 JSON 工作流文件：

```bash
n8n import:workflow --separate --input=backups/latest/
```

{% hint style="info" %}
**导入时的版本元数据（Version metadata on import）**

如果导入的文件包含 `versionMetadata` 属性（由针对特定版本或已发布版本的导出功能添加），n8n 会在工作流历史表中保留该历史名称和描述。工作流实体当前的名称和描述保持不变。
{% endhint %}

默认情况下，`import:workflow` 会停用每一个导入的工作流。如果希望保留每个 JSON 文件中的 `active` 字段，请传入 `--activeState=fromJson`（仅在多主和队列模式下支持）：

```bash
n8n import:workflow --separate --input=backups/latest/ --activeState=fromJson
```

### 凭据（Credentials）

从特定文件导入凭据：

```bash
n8n import:credentials --input=file.json
```

从指定目录导入所有 JSON 凭据文件：

```bash
n8n import:credentials --separate --input=backups/latest/
```

## 许可证（License）

### 清除（Clear）

清除 n8n 数据库中现有的许可证，并把 n8n 重置为默认功能：

```sh
n8n license:clear
```

如果你的许可证包含[浮动授权（floating entitlements）](#user-content-fn-1)[^1]，运行此命令还会尝试把它们释放回授权池，供其他实例使用。

### 信息（Info）

显示现有许可证的信息：

```sh
n8n license:info
```

{% hint style="info" %}
**小白提示**：`license:clear` 适合「不用这个许可证了 / 换许可证」的场景；`license:info` 用来查看当前许可证的详细信息（有效期、套餐等）。
{% endhint %}

## 用户管理（User management）

你可以使用 n8n CLI 重置用户管理。这会把用户管理恢复到「未设置」的状态。它会移除所有用户账号。

当你忘记密码、又没有配置 SMTP 来通过邮件重置密码时，可以使用这个命令。

```sh
n8n user-management:reset
```

{% hint style="warning" %}
**小白提示**：这个命令会**删除所有用户账号**，包括所有者和所有成员！之后你需要重新走一遍初始化流程创建新所有者。旧用户的工作流和凭据数据仍然在数据库里，但账号会全部消失。只有在紧急情况下（比如所有人密码都丢了、又没有 SMTP）才使用。
{% endhint %}

### 为某个用户禁用 MFA（Disable MFA for a user）

如果用户丢失了恢复码（recovery codes），你可以用这条命令为该用户禁用 MFA（多因素认证）。之后用户就能重新登录，并再次设置 MFA。

```sh
n8n mfa:disable --email=johndoe@example.com
```

### 禁用 LDAP（Disable LDAP）

你可以使用下面的命令重置 LDAP 设置。

```sh
n8n ldap:reset
```

{% hint style="info" %}
**小白提示**：LDAP 是企业常用的统一账号目录服务（比如和 Active Directory 对接）。如果 LDAP 配置出了问题导致用户无法登录，可以用 `ldap:reset` 把 LDAP 设置清掉，恢复正常登录，之后再重新配置。
{% endhint %}

## 卸载社区节点和凭据（Uninstall community nodes and credentials）

你可以使用 n8n CLI 管理[社区节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/community-nodes/installation-and-management)。目前你只能卸载社区节点和凭据，当某个社区节点导致不稳定时，这会很有用。

命令参数：

| 参数（Flag）         | 说明（Description）                                                                                                                |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| --help       | 显示 CLI 帮助。                                                                                                             |
| --credential | 凭据类型。访问该节点的 `<NODE>.credential.ts` 文件，获取 `name` 的值。    |
| --package    | 社区节点的包名。                                                                                        |
| --uninstall  | 卸载节点。                                                                                                       |
| --userId     | 拥有该凭据的用户 ID。在自托管环境中，查询数据库获取。在云版中，用你的 API 密钥查询 API。 |

{% hint style="info" %}
**小白提示**：社区节点（community node）= 社区开发者写的 n8n 插件。如果某个社区节点有 bug 或安全漏洞，导致 n8n 启动失败或变慢，就可以在命令行里把它卸载掉，而不是手动去翻文件。
{% endhint %}

### 节点（Nodes）

按包名卸载一个社区节点：

```sh
n8n community-node --uninstall --package <COMMUNITY_NODE_NAME>
```

例如，卸载 [Evolution API 社区节点](https://www.npmjs.com/package/n8n-nodes-evolution-api)：

```sh
n8n community-node --uninstall --package n8n-nodes-evolution-api
```

### 凭据（Credentials）

卸载社区节点的凭据：

```sh
n8n community-node --uninstall --credential <CREDENTIAL_TYPE> --userId <ID>
```

例如，卸载 [Evolution API 社区节点凭据](https://www.npmjs.com/package/n8n-nodes-evolution-api)：访问[仓库](https://github.com/oriondesign2015/n8n-nodes-evolution-api)并打开 [`credentials.ts` 文件](https://github.com/oriondesign2015/n8n-nodes-evolution-api/blob/main/credentials/EvolutionApi.credentials.ts)找到 `name` 的值：

```sh
n8n community-node --uninstall --credential evolutionApi --userId 1234
```

## 安全审计（Security audit）

你可以对你的 n8n 实例运行[安全审计](security/run-security-audits.md)，以检测常见的安全问题。

```sh
n8n audit
```

{% hint style="info" %}
**小白提示**：运行后 n8n 会扫描并输出一份安全报告，指出潜在的配置风险（比如默认密钥、未加密的凭据设置等），并给出修复建议。建议定期运行。
{% endhint %}

[^1]: 在 n8n 中，授权（entitlements）允许 n8n 实例在特定时间段内访问受套餐限制的功能。
