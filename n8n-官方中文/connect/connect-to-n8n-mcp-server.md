---
title: 设置并使用 n8n MCP 服务器
status: beta
nodeTitle: 连接到 n8n MCP 服务器
originalFilePath: advanced-ai/mcp/accessing-n8n-mcp-server.md
originalUrl: https://docs.n8n.io/advanced-ai/mcp/accessing-n8n-mcp-server
url: https://docs.n8n.io/connect/connect-to-n8n-mcp-server
description: >-
  连接、认证并集成 MCP 客户端，以编程方式构建和执行 n8n 工作流。
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

# 连接到 n8n MCP 服务器

通过 n8n 内置的 MCP 服务器，把受支持的 MCP 客户端连接到你的 n8n 工作流。

该服务器允许 Lovable 或 Claude Desktop 之类的客户端安全地连接到一个 n8n 实例。连接成功后，这些客户端可以：

* 搜索你的工作流
* 与标记为「可在 MCP 中使用（available in MCP）」的工作流交互
* 触发并测试对外暴露的工作流
* 创建和编辑工作流及数据表（data tables）

{% hint style="info" %}
**小白提示**：MCP（Model Context Protocol，模型上下文协议）是让 AI 工具安全「操作」你的 n8n 的标准方式。开了它之后，你就能对 AI 说「帮我建个工作流」，AI 会真的在你的 n8n 里建出来，而不是只给你一段没法用的说明文字。
{% endhint %}

## 实例级 MCP 访问与 MCP 服务器触发器（Trigger）节点的区别

实例级（instance-level）MCP 访问允许你为每个 n8n 实例建立一个连接，使用集中式认证（centralized authentication），并选择哪些工作流对外开放访问。被启用的工作流无需逐个额外配置，就能被轻松找到和运行。

相比之下，MCP 服务器触发器节点是在**单个工作流内部**配置的。该节点只暴露这个工作流里的工具。当你希望在单个工作流内定制特定的 MCP 服务器行为时，这是一种有用的做法。

### 使用实例级 MCP 访问时的关键注意事项

* MCP 支持两种工作流交互：使用工作流执行工具运行现有工作流，以及构建或编辑工作流（从 v2.13 起）。
* 它不会把实例中所有工作流全部无差别地暴露出去。你必须在实例级别启用 MCP，然后再逐个启用每个工作流。唯一的例外是 `search_workflows` 工具——它能访问当前用户有权访问的所有工作流，但只能展示预览（previews），看不到完整的工作流数据。
* 它不是按 MCP 客户端来划分权限的。你连接的所有客户端（例如 Claude Desktop 和 ChatGPT）都能看到你为 MCP 访问启用的所有工作流。你不能把特定工作流限制给特定客户端。在用户层面，可见性仍然是按用户划分的：用户只能看到自己有权访问且已启用 MCP 的工作流。
* 大多数 MCP 工具操作的是**未发布**的工作流。例外是 `execute_workflow`，它默认使用生产模式（production mode），运行工作流的已发布版本。它也支持 `manual`（手动）执行模式来运行当前（未发布的）版本。

## 启用 MCP 访问

### 适用于 Cloud 和自托管实例

1. 导航到 **设置（Settings）> 实例级 MCP（Instance-level MCP）**
2. 打开 **启用 MCP 访问（Enable MCP access）** 开关（需要实例所有者或管理员权限）。

    ![enable-mcp-access.png](<.gitbook/assets/enable-mcp-access (1).png>)

启用后，你会看到：

1. 暴露给 MCP 客户端的工作流列表
2. 已连接的 OAuth 客户端列表
3. 用于启用/禁用实例级访问的主 MCP 开关
4. **连接详情（Connection details）** 按钮，里面提供连接 MCP 客户端的详细说明

    ![mcp\_page\_content.png](<.gitbook/assets/mcp_page_content (1).png>)

**要禁用**：把主 MCP 开关关闭即可。

{% hint style="info" %}
**环境变量（仅限自托管）**

在自托管实例上，你也可以用环境变量管理 MCP 设置。参见[使用环境变量管理实例设置](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/manage-settings-using-environment-variables#mcp)。
{% endhint %}

### 自托管：彻底禁用

要彻底移除该功能，设置环境变量：

`N8N_DISABLED_MODULES=mcp`

此操作会移除 MCP 端点，并隐藏所有相关 UI 元素。

## 设置 MCP 认证（authentication）

**连接详情（Connection details）** 弹窗为 MCP 客户端提供两种认证方式：

* **OAuth2**
* **访问令牌（Access Token）**

    ![mcp\_connect\_menu.png](<.gitbook/assets/mcp_connect_menu (1).png>)

### 使用 OAuth2

从 **OAuth** 选项卡复制你的实例服务器 URL，用它来配置你的 MCP 客户端。连接后，客户端会把你重定向到 n8n 来授权访问。

{% hint style="info" %}
**小白提示**：OAuth2 是「让 AI 工具用你的账号登录，但不交出密码」的授权方式。你点几下确认授权，n8n 和 AI 工具之间就会建立安全连接，你不需要把 API 密钥明文发给 AI 工具。
{% endhint %}

#### 撤销客户端访问

要撤销已连接 MCP 客户端的访问权限：

1. 导航到 **设置 > 实例级 MCP**。
2. 切换到 **已连接的客户端（Connected clients）** 选项卡。你应该会看到一个已连接 OAuth 客户端的表格。
3. 使用每个客户端行中的操作菜单，撤销特定客户端的访问权限。

    ![mcp\_revoke\_client\_access.png](<.gitbook/assets/mcp_revoke_client_access (1).png>)

### 使用访问令牌（Access Token）

使用你的实例服务器 URL，以及 _连接详情_ 菜单中 **访问令牌（Access Token）** 选项卡里的个人 MCP 访问令牌。

当你第一次访问 **MCP 访问（MCP Access）页面**时，n8n 会自动为你生成一个绑定到你用户账号的个人 MCP 访问令牌。

{% hint style="info" %}
请立即复制你的令牌。之后再访问时，你只会看到被脱敏（打码）的值，复制按钮也会被禁用。
{% endhint %}

#### 轮换你的令牌

如果你丢失了令牌或需要轮换（rotate）它：

1. 导航到 **设置 > 实例级 MCP**。
2. 点击右上角的按钮打开 _连接详情_ 菜单。
3. 切换到 **访问令牌** 选项卡。
4. 点击被脱敏的令牌值旁边的按钮生成一个新令牌。

    n8n 会在你生成新令牌时撤销上一个令牌。
5. 用新值更新所有已连接的 MCP 客户端。

    ![mcp\_rotate\_token.png](<.gitbook/assets/mcp_rotate_token (1).png>)

## 向 MCP 客户端暴露工作流

MCP 客户端可以使用 `search_workflows` 发现当前用户有权访问的所有工作流的预览。但是，除非你为该工作流显式启用 MCP 访问，否则客户端无法访问完整的工作流数据，也无法执行或修改工作流。

### 为单个工作流启用访问

#### 方式 1：从 MCP 设置页面（n8n v2.2.0 起可用）

1. 点击 **启用工作流（Enable workflows）** 按钮（在工作流表格的表头或表格的空状态里）
2. 搜索你想要的工作流（按名称或描述），并从列表中选择它
3. 点击 **启用（Enable）** 按钮确认

#### 方式 2：从工作流编辑器

1. 打开该工作流。
2. 点击右上角的主工作流菜单（`...`）。
3. 选择 **设置（Settings）**。
4. 打开 **可在 MCP 中使用（Available in MCP）** 开关。

#### 方式 3：从工作流列表

1. 进入 **工作流（Workflows）**。
2. 打开某个工作流卡片上的菜单。
3. 选择 **启用 MCP 访问（Enable MCP access）**。

### 为项目/文件夹启用访问

{% hint style="info" %}
**n8n v2.24.0 起可用**
{% endhint %}

你可以使用工作流列表中的 **选项（Options）菜单** <img src=".gitbook/assets/three-dot-options-menu (1).png" alt="选项菜单" data-size="line">，为当前项目或文件夹中的**所有**工作流切换 MCP 访问：

1. 导航到目标项目，从顶部菜单中选择 **工作流**，如果需要再打开子文件夹。
2. 选择项目或文件夹名称旁边的 **选项** 菜单 <img src=".gitbook/assets/three-dot-options-menu (1).png" alt="选项图标" data-size="line">。
3. 选择 **管理 MCP 访问（Manage MCP access）**，然后选择 **启用 MCP（Enable MCP）** 或 **禁用 MCP（Disable MCP）**。

![mcp\_bulk\_toggle.png](<.gitbook/assets/mcp_bulk_toggle (1).png>)

{% hint style="info" %}
**注意**

这会为**当前**在所选项目或文件夹中的所有工作流切换 MCP 访问（跳过已经处于目标状态的工作流）。将来新增的工作流仍然需要你手动切换访问权限。
{% endhint %}

### 管理访问权限

**实例级 MCP** 设置页面会显示所有已启用、可供 MCP 客户端访问和操作的工作流。从这个列表中你可以：

* 直接打开某个工作流、它的所属项目或父文件夹
* 使用操作菜单撤销访问权限（或者使用工作流卡片菜单中的 **禁用 MCP 访问（Disable MCP access）**）
* 使用操作菜单更新工作流描述（或者使用工作流编辑器中的菜单）
* 使用 **启用工作流（Enable workflows）** 按钮为更多工作流启用访问（n8n v2.2.0 起可用）

### 工作流描述

为了帮助 MCP 客户端识别工作流，你可以按以下方式添加自由文本描述：

1. 方式 1：从 **实例级 MCP** 页面
   1. 导航到 **设置 > 实例级 MCP**。
   2. 确保你处于 **工作流（Workflows）** 选项卡。
   3. 在目标工作流所在行使用操作菜单，选择 **编辑描述（Edit description）** 操作。
   4. 或者，直接点击描述文本打开编辑对话框。
2. 方式 2：从工作流编辑器

   1. 打开该工作流。
   2. 点击右上角的主工作流菜单（`...`）。
   3. 选择 **编辑描述（Edit description）**。

    ![mcp\_workflow\_description.png](<.gitbook/assets/mcp_workflow_description (1).png>)

## 工具与资源

{% hint style="info" %}
建议使用编码代理（coding agents，例如 Claude Code 或 Google ADK 代理）而不是聊天客户端作为你的 MCP 客户端。编码代理针对生成和校验 TypeScript 代码进行了优化，非常适合以编程方式构建工作流。
{% endhint %}

n8n MCP 服务器暴露了用于工作流管理、工作流构建和数据表的工具。完整的可用工具列表及其参数，请参阅 [MCP 服务器工具参考](connect-to-n8n-mcp-server/mcp-server-tools-reference.md)。

## 面向编码代理的 n8n Skills

当你把编码代理连接到 n8n MCP 服务器时，代理可以构建和编辑工作流，但它不会自动知道 n8n 在表达式、节点配置、错误处理等方面的约定。n8n Skills 就是把这些知识教给代理，让它第一次就能把工作流做对。

n8n Skills 是一组能力模块（capability modules），发布在 [n8n-io/skills](https://github.com/n8n-io/skills) 仓库中。它们与实例级 MCP 服务器配套使用，包括：

* **13 个能力技能（capability skills）**，涵盖工作流最佳实践，包括子工作流、表达式、循环、AI 代理、错误处理、凭据、数据表（Data Tables）和调试。
* **50+ 份参考文档和示例**，包含逐节点指导、决策树和可复制的（copy-paste）工作流代码片段。
* **钩子（Hooks）**，自动加载正确的指导内容，让代理在发起高影响的 MCP 调用之前先读取相关技能。

第 14 个元技能 `using-n8n-skills-official` 会把代理路由到与每个任务匹配的能力技能。

{% hint style="info" %}
**小白提示**：Skills 相当于给 AI 的「上岗培训手册」。没有它，AI 可能凭一般知识瞎猜 n8n 的写法；装上之后，AI 会先查手册再动手，工作流一次做对的概率大幅提高。
{% endhint %}

### 为什么要用 skills

Skills 会在代理需要的那一刻加载指导内容，而不是依赖模型的一般知识。这能帮助代理：

* 遵循它正在处理的节点或功能对应的 n8n 最佳实践。
* 避免常见错误，例如表达式语法写错或缺少错误处理。
* 产出需要来回修改更少的工作流。

这些 skills 是纯 Markdown 写的，你可以阅读、复刻（fork）并修改成符合你自己的约定。

### 安装 skills

[n8n-io/skills](https://github.com/n8n-io/skills) 仓库里有针对 Claude Code、Codex 和其他编码代理的最新安装说明。按照仓库 README 中的步骤把 skills 添加给你的代理即可。

## 示例

#### 把 Lovable 连接到 n8n MCP 服务器

1. 在 Lovable 中配置 MCP 服务器（OAuth）。
   * 导航到你的工作区 **设置 > 集成（Integrations）**。
   * 在 **MCP 服务器（MCP Servers）** 部分找到 **n8n**，点击 **连接（Connect）**。
   * 输入你的 n8n 服务器 URL（在 **MCP 访问** 页面上显示）。
   * 保存连接。如果成功，n8n 会重定向你授权 Lovable。
2. 验证连接。
   * 连接成功后，Lovable 可以查询已启用 MCP 访问的工作流。
   * **示例**：让 Lovable 构建一个列出用户并允许删除用户的工作流 UI。

#### 把 Claude Desktop 连接到 n8n MCP 服务器

**使用 OAuth2**

1. 在 Claude Desktop 中导航到 **设置（Settings）** > **连接器（Connectors）**。
2. 点击 **添加自定义连接器（Add custom connector）**。
3. 输入以下信息：
   * **名称（Name）**：n8n MCP
   * **远程 MCP 服务器 URL（Remote MCP Server URL）**：你的 n8n 基础 URL（在 **实例级 MCP** 页面上显示）
4. 保存连接器。
5. 出现提示时，授权 Claude Desktop 访问你的 n8n 实例。

**使用访问令牌（Access Token）**

在你的 `claude_desktop_config.json` 文件中添加以下条目：

```json
"mcpServers": {
  "n8n-mcp": {
    "command": "npx",
    "args": [
    "-y",
    "supergateway",
    "--streamableHttp",
    "https://<your-n8n-domain>/mcp-server/http",
    "--header",
    "Authorization:Bearer <YOUR_N8N_MCP_TOKEN>"
    ]
  }
}
```


这里需要替换：

* `<your-n8n-domain>`：你的 n8n 基础 URL（在 **实例级 MCP** 页面上显示）

{% hint style="info" %}
**小白提示**：`supergateway` 是一个把 HTTP 转成本地进程的桥接工具，用来让只支持 stdio 的客户端（如 Claude Desktop）也能连上 n8n 的 HTTP MCP 端点。`--header` 参数里的 `Authorization:Bearer` 就是把你刚才生成的访问令牌带给 n8n 进行身份验证。
{% endhint %}

#### 把 Claude Code 连接到 n8n MCP 服务器

**方式 1：使用 OAuth2 认证（推荐）**

使用以下 CLI 命令：

```bash
claude mcp add --transport http n8n-mcp https://<your-n8n-domain>/mcp-server/http
```

或者，在你的 `claude.json` 文件中添加以下条目：

```json
{
    "mcpServers": {
        "n8n-mcp": {
            "type": "http",
            "url": "https://<your-n8n-domain>/mcp-server/http"
        }
    }
}
```

这里需要替换：

* `<your-n8n-domain>`：你的 n8n 基础 URL（在 **实例级 MCP** 页面上显示）

**方式 2：使用访问令牌认证**

使用以下 CLI 命令：

```bash
claude mcp add --transport http n8n-mcp https://<your-n8n-domain>/mcp-server/http \
  --header "Authorization: Bearer <YOUR_N8N_MCP_TOKEN>"
```

或者，在你的 `claude.json` 文件中添加以下条目：

```json
{
    "mcpServers": {
        "n8n-mcp": {
            "type": "http",
            "url": "https://<your-n8n-domain>/mcp-server/http",
            "headers": {
                "Authorization": "Bearer <YOUR_N8N_MCP_TOKEN>"
            }
        }
    }
}
```

这里需要替换：

* `<your-n8n-domain>`：你的 n8n 基础 URL（在 **实例级 MCP** 页面上显示）
* `<YOUR_N8N_MCP_TOKEN>`：你生成的令牌

### 把 Codex CLI 连接到 n8n MCP 服务器

**方式 1：使用 OAuth2 认证（推荐）**

使用以下 CLI 命令：

```bash
codex mcp add n8n-mcp --url https://<your-n8n-domain>/mcp-server/http
```

或者，在你的 `~/.codex/config.toml` 文件中添加以下条目：

```toml
[mcp_servers.n8n-mcp]
url = "http://localhost:5678/mcp-server/http"
```

这里需要替换：

* `<your-n8n-domain>`：你的 n8n 基础 URL（在 **实例级 MCP** 页面上显示）

**方式 2：使用访问令牌认证**

在你的 `~/.codex/config.toml` 文件中添加以下条目：

```toml
[mcp_servers.n8n-mcp]
url = "https://<your-n8n-domain>/mcp-server/http"
http_headers = { "authorization" = "Bearer <YOUR_N8N_MCP_TOKEN>" }
```

这里需要替换：

* `<your-n8n-domain>`：你的 n8n 基础 URL（在 **实例级 MCP** 页面上显示）
* `<YOUR_N8N_MCP_TOKEN>`：你生成的令牌

### 把 Google ADK 代理连接到 n8n MCP 服务器

下面是一段示例代码，用于创建一个连接到远程 n8n MCP 服务器的代理：

```python
from google.adk.agents import Agent
from google.adk.tools.mcp_tool import McpToolset
from google.adk.tools.mcp_tool.mcp_session_manager import StreamableHTTPServerParams

N8N_INSTANCE_URL = "https://localhost:5678"
N8N_MCP_TOKEN = "YOUR_N8N_MCP_TOKEN"

root_agent = Agent(
    model="gemini-2.5-pro",
    name="n8n_agent",
    instruction="Help users manage and execute workflows in n8n",
    tools=[
        McpToolset(
            connection_params=StreamableHTTPServerParams(
                url=f"{N8N_INSTANCE_URL}/mcp-server/http",
                headers={
                    "Authorization": f"Bearer {N8N_MCP_TOKEN}",
                },
            ),
        )
    ],
)
```

更多细节，参见[将 ADK 代理连接到 n8n](https://google.github.io/adk-docs/tools/third-party/n8n/)。

{% hint style="info" %}
**小白提示**：这段 Python 代码的意思很简单——创建一个叫 `n8n_agent` 的 AI 代理，告诉它「帮用户管理和执行 n8n 工作流」，然后把 n8n 的 MCP 地址和令牌作为「工具箱」交给它。代码里记得把 `N8N_INSTANCE_URL` 和 `N8N_MCP_TOKEN` 换成你自己的值。
{% endhint %}

## 故障排查（Troubleshooting）

如果你在把 MCP 客户端连接到 n8n 实例时遇到问题，请考虑以下几点：

* 如果你使用的是云端 MCP 客户端，请确保你的 n8n 实例可以被公网访问。
* 确认 n8n 设置中已启用 MCP 访问。
* 检查你想执行或修改的工作流是否已标记为 **可在 MCP 中使用（Available in MCP）**。
* 确认 MCP 客户端中的认证方式（OAuth2 或访问令牌）配置正确。
* 查看 n8n 服务器日志，寻找与 MCP 连接相关的错误信息。
