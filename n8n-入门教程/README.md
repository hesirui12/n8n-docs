# n8n 零基础入门教程（中英对照 · 本土版）

> **n8n Beginner Tutorial — Bilingual (中英对照) & Beginner-Friendly Edition**
>
> 本教程基于 **n8n 官方手册**（[n8n-io/n8n-docs](https://github.com/n8n-io/n8n-docs) 仓库，即 docs.n8n.io 官方文档源码）**全面搜索、精读**后编写，
> 覆盖官方手册的 **Get Started / Build / Deploy / Connect / Administer / Integrations** 各大板块，
> 面向**完全没有编程基础的小白**（零基础友好），全文采用**中英对照**，并加入**中国本土化提示**（网络访问、国内替代方案、Docker 镜像等）。
>
> 官方手册原始仓库已克隆到本目录的 `docs/` 文件夹，本教程每个章节都标注了对应的官方手册出处，方便对照查阅。

---

## 本教程是什么 / What is this tutorial?

这是一份 **step by step（一步一步）** 的 n8n 完整入门教程，共 **17 章 + 4 大阶段**。你将：

1. **入门**：认识 n8n 是什么、选择使用方式、亲手做出第一个自动化工作流
2. **核心**：吃透数据与表达式、编辑器操作、保存/发布/版本、执行与调试、流程逻辑
3. **数据与代码 / AI**：凭证管理、数据转换、Code 节点、AI 工作流（Agent / RAG / Chat）
4. **运维与扩展**：团队协作、部署升级、API / CLI / MCP

学习本教程**不需要会写代码**，只需要会使用浏览器和鼠标。Code 节点章节会给出「零基础也能抄」的代码模板。

---

## 章节导航 / Table of Contents

### 第一阶段 · 入门 / Getting Started

| 章节 | 中文名 | English | 对应官方手册出处 |
|------|--------|---------|------------------|
| [01](01-认识n8n.md) | 认识 n8n：概念与术语表 | What is n8n? Key Concepts & Glossary | `docs/get-started/key-concept-glossary.md`、`README.md` |
| [02](02-选择使用方式与安装.md) | 选择使用方式与安装 | Choose How to Use n8n & Install | `docs/get-started/choose-how-to-use-n8n.md`、`docs/deploy/host-n8n/install-options/*` |
| [03](03-创建第一个工作流.md) | 创建你的第一个工作流 | Build Your First Workflow | `docs/get-started/build-your-first-workflow.md` |

### 第二阶段 · 核心概念 / Core Concepts

| 章节 | 中文名 | English | 对应官方手册出处 |
|------|--------|---------|------------------|
| [04](04-数据与表达式.md) | 数据与表达式 | Data Structure & Expressions | `docs/build/work-with-data/understand-n8ns-data-structure.md`、`transform-data/*`、`data-tables.md`、`pin-and-mock-data.md` |
| [05](05-编辑器界面与操作技巧.md) | 编辑器界面与操作技巧 | Editor, Nodes & Keyboard Shortcuts | `docs/build/understand-workflows/workflow-components/*`、`docs/build/keyboard-shortcuts.md` |
| [06](06-保存发布与版本管理.md) | 保存、发布与版本管理 | Save, Publish & Versioning | `docs/build/understand-workflows/save-and-publish-workflows.md`、`manage-workflows/view-change-history.md` |
| [07](07-执行与调试.md) | 执行与调试 | Executions & Debugging | `docs/build/understand-workflows/understand-executions/*` |
| [08](08-流程逻辑进阶.md) | 流程逻辑进阶 | Flow Logic Deep Dive | `docs/build/flow-logic/*` |

### 第三阶段 · 数据、代码与 AI / Data, Code & AI

| 章节 | 中文名 | English | 对应官方手册出处 |
|------|--------|---------|------------------|
| [09](09-凭证管理.md) | 凭证管理 | Credentials | `docs/build/understand-workflows/create-and-edit-credentials.md`、`docs/administer/manage-credentials/*` |
| [10](10-数据转换与常用节点.md) | 数据转换与常用数据节点 | Data Transformation & Common Nodes | `docs/build/work-with-data/transform-data/*`、`filter-out-unwanted-data.md`、`handle-special-data-types/*` |
| [11](11-Code节点与内置方法.md) | Code 节点与内置方法 | Code Node & Built-in Methods | `docs/build/code-in-n8n/*` |
| [12](12-AI工作流入门.md) | AI 工作流入门 | AI Workflows Intro | `docs/build/integrate-ai/*` |
| [13](13-AI辅助构建与模板.md) | AI 辅助构建、模板与社区 | AI Builders, Templates & Community | `docs/build/ways-of-building-workflows/*`、`docs/integrations/` |

### 第四阶段 · 运维与扩展 / Operations & Extending

| 章节 | 中文名 | English | 对应官方手册出处 |
|------|--------|---------|------------------|
| [14](14-管理工作流与团队协作.md) | 管理工作流与团队协作 | Manage Workflows & Collaborate | `docs/build/manage-workflows/*`、`docs/administer/manage-users-and-access/*`、`use-source-control-and-environments/*` |
| [15](15-部署升级与运维.md) | 部署、升级与运维 | Deploy, Upgrade & Operate | `docs/deploy/*`、`docs/deploy/host-n8n/configure-n8n/*` |
| [16](16-API-CLI与MCP.md) | API、CLI 与 MCP | API, CLI & MCP | `docs/connect/*` |

### 附录 / Appendix

| 章节 | 中文名 | English | 对应官方手册出处 |
|------|--------|---------|------------------|
| [17](17-常见问题与学习路线.md) | 常见问题排查与学习路线 | Troubleshooting & Learning Paths | `docs/get-started/learning-paths.md`、官方手册 FAQ / Common issues |

> 💡 **温馨提示**：`docs/` 文件夹是官方手册仓库的完整克隆（1400+ 篇 markdown）。想查更深入的内容（比如具体某个节点怎么用），直接在 `docs/docs/` 里搜索即可。

---

## 中英对照使用说明 / How to Read This Bilingual Tutorial

本教程采用以下对照方式，帮助你同时建立英文术语的认知（因为 n8n 界面是英文的，看懂术语能让你少走弯路）：

- **界面词汇**：一律写成「中文（English）」格式，例如：节点（Node）、触发器（Trigger）。
- **官方原文**：关键概念会引用官方手册原文（英文），并附上中文翻译，用引用块标注。
- **操作步骤**：步骤用编号列表，按钮名、选项名保留英文原文（和界面一致），并给出中文说明。

---

## 本土化说明 / Localization Notes

「本土版」意味着本教程针对中国用户做了这些适配：

1. **网络访问提示**：n8n Cloud（app.n8n.cloud）等境外服务在国内访问可能不稳定，教程会给出替代方案（自部署）。
2. **Docker 镜像加速**：自部署时给出国内可用的镜像源配置建议。
3. **练习 API 替代**：官方教程使用 NASA API 和 Postbin 服务，国内访问受限时提供可替换的免费练习 API。
4. **时区设置**：自部署时推荐设置 `Asia/Shanghai` 时区，避免定时触发器时间错乱。
5. **中文资源推荐**：给出 n8n 官方及中文社区的学习资源。
6. **AI 服务提示**：OpenAI 等境外大模型接口在国内的访问与支付问题，给出可选替代（国内模型供应商、自建本地模型）。

---

## 学习建议 / Study Tips

- **跟着做，不要只看**：n8n 是动手工具，边看边操作效果最好。
- **不用背术语**：术语表（第 01 章）是用来查的，不是用来背的。
- **遇到报错很正常**：第 17 章整理了常见错误和解决办法，卡住了先翻一翻。
- **官方手册永远是最权威的**：本教程是官方手册的「中英对照友好版」，深入细节请以 `docs/` 里的官方文档为准。
- **按需跳跃**：第 05~16 章可以按需跳读，但第 04、06、07 章强烈建议通读——它们解释的是「为什么 n8n 会这样工作」。

---

*本教程内容来自 n8n 官方文档（fair-code 许可），翻译与整理仅供学习交流使用。*
