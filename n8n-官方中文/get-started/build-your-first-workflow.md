---
contentType: tutorial
nodeTitle: 创建你的第一个工作流
description: 在 n8n 中创建你的第一个工作流，并学习一些关键概念（小白友好中文版）。
layout:
  width: default
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# 创建你的第一个工作流 / Build your first workflow

> 本篇为官方教程《Build your first workflow》的中文小白版。跟着一步步点鼠标，就能做出一个真正有用的自动化工作流。

本教程将教你如何在 n8n 中搭建一个工作流[^1]，并在过程中理解关键概念。你将学会：

- 从零创建一个工作流（Workflow）
- 理解关键概念与技能，包括：
  - 用触发器节点（Trigger Node）启动工作流
  - 配置凭证（Credential）[^2]
  - 处理数据（Data）
  - 在工作流中表达逻辑
  - 使用表达式（Expression）[^3]

!["Screenshot of the completed workflow"](.gitbook/assets/tutorial-first.png)

本教程使用 [n8n Cloud](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud)，官方推荐新用户从 Cloud 开始（有免费试用）。如果你还没有账号，[点此注册](https://app.n8n.cloud/register)。

> 💡 **小白提示**：国内访问 n8n Cloud 可能不稳定，也可以先在本地用 Docker 装一个（见「部署」板块），操作完全一样。

## 第一步：新建工作流 / Create a new workflow

打开 n8n 后，你会看到：

- 欢迎窗口：选择 **Start from Scratch**（从零开始）创建新工作流
- 或 **Overview**（总览）页面的 **Workflows** 列表：点击 **Create Workflow** 新建

> 💡 **大白话**：工作流就是一张「流程图」，把各种「积木」连起来，让 n8n 自动干活。

## 第二步：添加触发器节点 / Add a trigger node

n8n 有两种启动工作流的方式：

- **手动**：点击 **Execute Workflow**（执行工作流）
- **自动**：用触发器节点（Trigger Node）作为第一个节点，让它响应外部事件或按设置定时运行

本教程用 [Schedule Trigger](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.scheduletrigger)（定时触发器），让工作流按计划运行：

1. 选择 **Add first step**（添加第一步）
2. 搜索 **Schedule**，n8n 会列出匹配的节点
3. 选择 **Schedule Trigger** 添加到画布，n8n 自动打开节点设置
4. **Trigger Interval**（触发间隔）选择 **Weeks**（周）
5. **Weeks Between Triggers**（间隔周数）填 `1`
6. 设置时间：**Trigger on Weekdays**（每周几）选 **Monday**（周一），**Trigger at Hour**（几点）选 **9am**，**Trigger at Minute**（几分）填 `0`
7. 关闭节点详情，回到画布

> 💡 **大白话**：这一步的意思是「每周一早上 9:00 自动运行一次」。定时器是 n8n 最常用的触发器之一。

## 第三步：添加 NASA 节点并配置凭证 / Add the NASA node and set up credentials

[NASA 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/app-nodes/n8n-nodes-base.nasa) 调用 NASA 的[公共 API](https://api.nasa.gov/) 获取数据。我们用它的实时数据来查找太阳耀斑（Solar Flare）事件。

<details>

<summary>什么是凭证？/ Credentials</summary>

凭证（Credential）是应用或服务颁发给你的私有认证信息，用来验证你的身份，让 n8n 节点能安全连接外部服务。不同类型服务要求的凭证不同（用户名密码、API Key、OAuth 密钥等）。**不要把凭证泄露给任何人。**

</details>

1. 在 Schedule Trigger 节点上选择 **Add node** <img src=".gitbook/assets/add-node-small.png" alt="Add node icon" data-size="line"> 连接器
2. 搜索 **NASA**，选择 **NASA** 查看操作列表
3. 搜索并选择 **Get a DONKI solar flare**（获取太阳耀斑报告）。选择后 n8n 把节点添加到画布并打开
4. 访问 NASA API 需要配置凭证：
   1. 打开 **Credential for NASA API** 下拉框
   2. 选择 **Create new credential**（创建新凭证）
   3. 打开 [NASA APIs](https://api.nasa.gov/)，在 **Generate API Key** 链接填写表单，NASA 会把 API Key 发到你的邮箱
   4. 查收邮件（注意垃圾箱！），复制 API Key 粘贴到 n8n 的 **API Key** 字段
   5. 点 **Save**（保存）
   6. 关闭凭证窗口，回到节点，新凭证会自动选中
5. 默认 DONKI Solar Flare 返回过去 30 天的数据。想只看最近一周，用 **Additional Fields**（附加字段）：
   1. 选择 **Add field**（添加字段）
   2. 选择 **Start date**（开始日期）
   3. 在 **Start date** 旁边切换到 **Expression**（表达式）标签，点展开按钮 <img src=".gitbook/assets/open-expression-editor.png" alt="Add node icon" data-size="line"> 打开完整表达式编辑器
   4. 在 **Expression** 字段输入：

   ```js
   {{ $today.minus(7, 'days') }}
   ```

   这会生成一个格式正确的日期——当前日期往前 7 天。

   ![image showing the expression above generating a date](.gitbook/assets/tutorial-date.png)
6. 关闭 **Edit Expression** 弹窗回到 NASA 节点
7. 验证节点是否正常工作：选择 **Execute step**（执行步骤）手动运行。n8n 调用 NASA API，在 **OUTPUT**（输出）面板显示过去 7 天的太阳耀斑
8. 关闭 NASA 节点回到画布

> 💡 **大白话**：表达式（Expression）是 n8n 的「动态计算器」——不写死数值，而是用 `{{ }}` 里的代码动态生成。`{{ $today.minus(7, 'days') }}` 就是「今天的日期减 7 天」。

## 第四步：用 If 节点添加逻辑 / Add logic with the If node

n8n 支持在工作流里写复杂逻辑。本教程用 [If 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.if) 创建两个分支，分别生成报告。太阳耀斑有五种分级（classType），我们把低级别的发到一个输出，高级别的发到另一个：

1. 在 NASA 节点上选择 **Add node** <img src=".gitbook/assets/add-node-small.png" alt="Add node icon" data-size="line"> 连接器
2. 搜索 **If**，添加到画布
3. 需要检查 NASA 数据里的 `classType` 字段：
   1. 把 **classType** 拖到 **Value 1**

      <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>确保你上一步运行过 NASA 节点</strong></p><p>如果你没有执行上一步的 NASA 节点，这一步就看不到可用的数据。</p></div>
   2. 比较方式改为 **String > Contains**（字符串包含）
   3. **Value 2** 填 **X**（太阳耀斑的最高级别）。下一步我们会创建两份报告：一份是 X 级耀斑，一份是其他所有较小耀斑
4. 验证节点：选择 **Execute step** 手动运行，n8n 用条件测试数据，在 **OUTPUT** 面板显示哪些匹配 true、哪些匹配 false

   <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>没有大耀斑的那几周</strong></p><p>本教程用的是实时数据。如果运行工作流时没有 X 级耀斑，把 <strong>Value 2</strong> 里的 <strong>X</strong> 换成 <strong>A</strong>、<strong>B</strong>、<strong>C</strong> 或 <strong>M</strong> 试试。</p></div>
5. 确认节点能返回事件后，关闭节点回到画布

> 💡 **大白话**：If 节点就是「如果…就…否则…」。满足条件的数据走 **true** 分支，不满足的走 **false** 分支。这是 n8n 里最基础的逻辑分叉。

## 第五步：输出数据 / Output data from your workflow

最后一步是把两份太阳耀斑报告发出去。本例发到 [Postbin](https://www.toptal.com/developers/postbin/)——一个接收数据并在临时网页上显示的测试服务。

1. 在 If 节点上选择 **Add node** <img src=".gitbook/assets/add-node-small.png" alt="Add node icon" data-size="line"> 连接器（标着 **true** 的那个）
2. 搜索 **PostBin**，选择 **Send a request**（发送请求），n8n 添加节点并打开
3. 打开 [Postbin](https://www.toptal.com/developers/postbin/) 点 **Create Bin**（创建收件箱），标签页先别关，等会儿测试要用
4. 复制 bin ID，形如 `1651063625300-2016451240051`
5. 在 n8n 把 Postbin ID 粘贴到 **Bin ID**
6. 配置要发送的数据：在 **Bin Content** 旁切换到 **Expression** 标签（鼠标悬停才会出现），点展开按钮 <img src=".gitbook/assets/open-expression-editor.png" alt="Add node icon" data-size="line"> 打开完整表达式编辑器
7. 从 If 节点输出把 `classType` 字段拖进表达式编辑器，自动生成引用 `{{$json["classType"]}}`。加上提示文字，完整表达式是：

   ```js
   There was a solar flare of class {{$json["classType"]}}
   ```

   ![image showing the expression above generating output](.gitbook/assets/tutorial-expression.png)
8. 关闭表达式编辑器，回到节点
9. 关闭 Postbin 节点回到画布
10. 再添加一个 Postbin 节点，处理 If 节点的 **false** 输出路径：
    1. 悬停 Postbin 节点，选 **Node context menu** <img src=".gitbook/assets/node-context-menu.png" alt="Node context menu icon" data-size="line"> > **Duplicate node** 复制第一个 Postbin 节点
    2. 把 If 节点的 **false** 连接器拖到新 Postbin 节点左侧

> 💡 **大白话**：Postbin 就是一个「临时收件箱」，专门用来测试工作流有没有把数据发出去。真实场景里，这里通常换成发邮件、发钉钉/微信通知等节点。

## 第六步：测试工作流 / Test the workflow

1. 测试整个工作流：选择 **Execute Workflow**（执行工作流）。n8n 运行全部节点，并显示每一步的进行状态
2. 回到你的 Postbin 收件箱，刷新页面查看输出
3. 想让这个工作流长期使用（每周自动运行一次）？点击 **Publish**（发布）即可

{% hint style="info" %}
**时间限制**

Postbin 的收件箱创建后只保留 30 分钟。超时的话，需要重新创建 bin 并更新 Postbin 节点里的 ID。
{% endhint %}

## 恭喜！/ Congratulations

你已经拥有一个功能完整、真实有用的工作流了！它看起来应该像这样：

!["Completed tutorial workflow"](.gitbook/assets/tutorial-first.png)

这一路你学会了：

- 如何找到想要的节点并把它们连起来
- 如何用表达式处理数据
- 如何创建凭证并挂到节点上
- 如何在工作流里使用逻辑

你还可以继续加东西（比如加个发邮件的节点把结果发给你）。想好下一步做什么，下面的资源会帮到你。

## 下一步 / Next steps

- 想玩 AI？看看 [如何用 n8n 构建 AI 聊天助手](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai)（本教程「构建」板块有中文版）
- 上 [n8n Academy](https://learn.n8n.io) 学习课程
- 在[工作流模板库](https://n8n.io/workflows/)看更多示例

[^1]: n8n 工作流（Workflow）是一组节点的集合，用于自动化某个流程。当触发条件发生时，工作流开始执行，并按顺序运行以完成复杂任务。

[^2]: 在 n8n 中，凭证（Credential）存储用于连接特定应用和服务的认证信息。创建好凭证（用户名密码、API Key、OAuth 密钥等）后，就可以用对应的应用节点与该服务交互。

[^3]: 在 n8n 中，表达式（Expression）允许你通过执行 JavaScript 代码动态填充节点参数。不用写死静态值，可以用 n8n 表达式语法引用前面节点的数据、其他工作流或 n8n 环境中的数据。
