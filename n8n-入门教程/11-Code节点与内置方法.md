# 11 · Code 节点与内置方法

> **Code Node & Built-in Methods**
>
> 官方出处：`docs/build/code-in-n8n/README.md`、`using-the-code-node.md`、`use-built-in-shortcuts.md`、`define-custom-variables.md`、`get-coding-help-from-ai.md`、`cookbook/`

---

## 本节目标 / What You'll Learn

- 什么时候才需要 Code 节点（n8n 是 low-code，不是 no-code）
- 两种运行模式：Run Once for All Items / Run Once for Each Item
- 必背的内置方法/变量（`$json`、`item`、`$now`、`$("节点名")`、`$env`、`$vars`）
- 自定义变量（Variables）：跨工作流存常量
- 零基础也能抄的代码模板
- 让 AI 帮你写代码

---

## 1. 先想清楚：真的需要 Code 吗？/ Code or Not?

> **官方原文**：n8n is a low-code tool. This means you can do a lot without code, then add code when needed.
> **翻译**：n8n 是低代码工具——不用代码能做很多事，需要时再补代码。

**官方推荐顺序**：专用节点 → 表达式 → Code 节点。Code 节点适合：

- 复杂的循环/条件逻辑（表达式写不开）
- 自定义数据清洗（正则、字符串处理）
- 把多个节点的数据合并处理
- 生成模拟数据（第 04 章讲过）

> 💡 **新手原则**：能用 Edit Fields / Filter 解决的，别写代码。代码写得越少，工作流越好维护。

## 2. 两种运行模式 / Two Modes

| 模式 | 行为 | 适合 |
|------|------|------|
| **Run Once for All Items（默认）** | 代码只执行一次，`items` 里是全部输入 | 批量处理、聚合逻辑 |
| **Run Once for Each Item** | 每条输入执行一次，`item` 是当前这条 | 逐条加工 |

**两种模式的输出约定**：

- **Run Once for All Items**：返回**数组** `[ { json: {...} }, ... ]`
- **Run Once for Each Item**：返回**单个对象** `{ json: {...} }`

> ⚠️ 新手最常见报错之一：`Please return an array of items`（该返回数组却返回了对象）。All Items 模式**必须返回数组**。

## 3. 必背内置变量 / Built-in Variables & Methods

> 官方出处：`use-built-in-shortcuts.md`。在 Code 节点或表达式里输入 `$` 会自动弹出候选列表。

| 变量/方法 | 含义 | 示例 |
|-----------|------|------|
| `$json` | 当前输入数据（Each Item 模式） | `$json.客户名` |
| `items` | 全部输入数据（All Items 模式） | `items.map(i => i.json)` |
| `item` | 当前这一条（Each Item 模式） | `item.json.金额` |
| `$("节点名")` | 访问任意节点的数据 | `$('NASA').item.json.classType` |
| `$now` | 当前时间（Luxon） | `$now.toFormat('yyyy-MM-dd')` |
| `$today` | 今天日期 | `$today.minus(7, 'days')` |
| `$env` | 服务器环境变量 | `$env.N8N_PORT` |
| `$vars` | 自定义变量（见第 5 节） | `$vars.公司名` |
| `$execution` | 当前执行信息 | `$execution.customData.set(...)`（第 07 章） |
| `$prevNode` | 上一个节点的名字 | 判断来源 |
| `$node` | 当前节点的数据 | `$node.context` |

> 💡 **快速上手指南**：在代码编辑器里敲 `$` 看自动补全，官方手册 `cookbook/built-in-methods-and-variables-examples/` 里每个变量都有完整例子。

## 4. 零基础也能抄的模板 / Copy-Paste Templates

**模板 A：把「全部数据」加工后返回（All Items 模式）**

```javascript
// 给每条数据加两个字段
const out = items.map(i => ({
  json: {
    ...i.json,
    大写名字: (i.json.名字 || '').toUpperCase(),
    处理时间: $now.toFormat('yyyy-MM-dd HH:mm'),
  }
}));
return out;
```

**模板 B：过滤 + 汇总（All Items 模式）**

```javascript
// 只留金额>100的，并统计总条数
const filtered = items.filter(i => i.json.金额 > 100);
return [{
  json: {
    条数: filtered.length,
    数据: filtered.map(i => i.json),
  }
}];
```

**模板 C：生成模拟数据（All Items 模式，配合测试）**

```javascript
return [
  { json: { 姓名: '小明', 年龄: 18 } },
  { json: { 姓名: '小红', 年龄: 20 } },
];
```

**模板 D：多行复杂逻辑（表达式里的 IIFE）**

```js
{{ (()=>{
  let 总数 = 0;
  for (const item of $input.all()) { 总数 += item.json.金额; }
  return 总数;
})() }}
```

> 💡 `console.log()` 在 Code 节点里可用，输出显示在节点的 OUTPUT 面板，调试必备。

## 5. 自定义变量 / Custom Variables

> 官方出处：`define-custom-variables.md`

**Variables（变量）** 是只读的全局/项目级常量，适合存「工作流之间共享、又不常改」的值：

| 用途 | 例子 |
|------|------|
| 团队公共信息 | 公司名、部门邮箱 |
| 共享配置 | 报表收件人列表、默认城市 |
| 环境开关 | `IS_PRODUCTION: true` |

**怎么用**：

1. 侧边菜单 **Variables** 选项卡 → **Add Variable**，填 Key/Value（键限 50 字符，值限 1000 字符，只能用字母数字下划线）。
2. 在表达式或 Code 节点里取用：`{{ $vars.我的变量 }}` / `$vars.我的变量`。

**注意**：

- 只有实例所有者/管理员能创建变量（团队里找管理员要）。
- 变量是**只读**的，运行时不能改（要用会变的临时值，用 Code 节点里的普通变量）。
- 项目级变量优先于同名全局变量。

> 💡 新手可能想用变量存 API Key——**不要**！密钥请放进凭证（Credential，第 09 章），凭证才是加密存储。

## 6. 让 AI 帮你写代码 / Get Coding Help from AI

> 官方出处：`get-coding-help-from-ai.md`

n8n 官方明确建议：**在 Code 节点里也能用 AI 辅助**。

- Code 节点内置 AI 助手：描述你想干什么，它会生成代码片段插入。
- 也可以在 Code 节点里粘贴描述（或直接口述需求），配合 AI 生成后**务必人工审查**再跑。
- 官方提供的做法还包括：把报错信息贴给 AI，让它解释 + 给修复方案。

> ⚠️ **审查原则**：AI 生成的代码可能引用不存在的字段、用错内置方法。跑之前先确认字段名和你输入数据一致。

## 7. 平台差异提醒 / Cloud vs Self-hosted

| 能力 | n8n Cloud | 自部署 |
|------|-----------|--------|
| 外部 npm 模块 | ❌ 只能用内置的 `crypto` 和 `moment` | ✅ 可启用外部模块（配置 `NODE_FUNCTION_ALLOW_EXTERNAL` 等） |
| Python | ❌（v2 起已不支持 Pyodide） | ⚠️ v1 曾支持，v2 起移除 |
| 内置方法/变量 | ✅ | ✅ |

> 💡 写 Code 前先确认你的环境支持什么，避免上线才发现 `require('xxx')` 导入不了。

---

## 8. 一句话总结 / TL;DR

- 先节点、再表达式、最后 Code——保持 low-code
- All Items 模式返回**数组**，Each Item 模式返回**单个对象**
- 背熟 `$json` / `items` / `item` / `$now` / `$("节点名")` / `$vars` 六个就够起步
- 公共常量用 Variables；密钥用 Credentials；临时值在代码里 `let`
- 不会写就让 AI 写，但**必须审查**

---

**下一章 →** [12 · AI 工作流入门](12-AI工作流入门.md)
