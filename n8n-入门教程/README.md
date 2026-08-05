# n8n 零基础入门教程（中英对照 · 本土版）

> **n8n Beginner Tutorial — Bilingual (中英对照) & Beginner-Friendly Edition**
>
> 本教程基于 **n8n 官方手册**（[n8n-io/n8n-docs](https://github.com/n8n-io/n8n-docs) 仓库，即 docs.n8n.io 官方文档源码）编写，
> 面向**完全没有编程基础的小白**（零基础友好），全文采用**中英对照**，并加入**中国本土化提示**（网络访问、国内替代方案、Docker 镜像等）。
>
> 官方手册原始仓库已克隆到本目录的 `docs/` 文件夹，本教程每个章节都标注了对应的官方手册出处，方便对照查阅。

---

## 本教程是什么 / What is this tutorial?

这是一份 **step by step（一步一步）** 的 n8n 入门教程。你将：

1. 学会 n8n 是什么、能做什么（认识概念）
2. 选择适合自己的使用方式（云端 or 自己部署）
3. 完成安装与注册
4. **亲手做出第一个自动化工作流**（NASA 太阳耀斑播报 —— 官方新手教程）
5. 深入理解核心概念（数据、表达式、流程逻辑）
6. 知道遇到问题怎么办、下一步学什么

学习本教程**不需要会写代码**，只需要会使用浏览器和鼠标。

---

## 章节导航 / Table of Contents

| 章节 | 中文名 | English | 对应官方手册出处 |
|------|--------|---------|------------------|
| [01](01-认识n8n.md) | 认识 n8n：概念与术语表 | What is n8n? Key Concepts & Glossary | `docs/get-started/key-concept-glossary.md`、`docs/get-started/README.md` |
| [02](02-选择使用方式与安装.md) | 选择使用方式与安装 | Choose How to Use n8n & Install | `docs/get-started/choose-how-to-use-n8n.md`、`docs/deploy/host-n8n/install-options/install-with-docker.md`、`install-with-npm.md` |
| [03](03-创建第一个工作流.md) | 创建你的第一个工作流 | Build Your First Workflow | `docs/get-started/build-your-first-workflow.md` |
| [04](04-核心概念深入.md) | 核心概念深入：数据与表达式 | Data Structure & Expressions | `docs/build/work-with-data/understand-n8ns-data-structure.md`、`transform-data/expressions-for-data-transformation.md` |
| [05](05-流程逻辑与进阶.md) | 流程逻辑与进阶技巧 | Flow Logic & Next Steps | `docs/build/flow-logic/README.md`、`docs/build/understand-workflows/workflow-components/README.md` |
| [06](06-常见问题与学习路线.md) | 常见问题排查与学习路线 | Troubleshooting & Learning Paths | `docs/get-started/learning-paths.md`、官方手册 FAQ 相关章节 |

> 💡 **温馨提示**：`docs/` 文件夹是官方手册仓库的完整克隆。想查更深入的内容（比如具体某个节点怎么用），直接在 `docs/docs/` 里搜索即可。

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

---

## 学习建议 / Study Tips

- **跟着做，不要只看**：n8n 是动手工具，边看边操作效果最好。
- **不用背术语**：术语表（第 01 章）是用来查的，不是用来背的。
- **遇到报错很正常**：第 06 章整理了常见错误和解决办法，卡住了先翻一翻。
- **官方手册永远是最权威的**：本教程是官方手册的「中英对照友好版」，深入细节请以 `docs/` 里的官方文档为准。

---

*本教程内容来自 n8n 官方文档（fair-code 许可），翻译与整理仅供学习交流使用。*
