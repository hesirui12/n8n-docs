---
contentType: howto
nodeTitle: Configure workflow settings
originalFilePath: workflows/settings.md
originalUrl: https://docs.n8n.io/workflows/settings
url: https://docs.n8n.io/build/manage-workflows/configure-workflow-settings
description: 管理单个工作流的设置。
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

# 配置工作流设置 / Configure workflow settings

你可以使用工作流设置（workflow settings）来为**单个工作流**自定义它的行为。

{% hint style="info" %}
**大白话**：n8n 有一些「全局」设置（影响整个 n8n 实例），而这一页讲的是「单个工作流专属」的设置——每一条工作流可以有自己的偏好，比如：按什么顺序执行分支、用什么时区、出错时要不要通知、执行数据要不要保存等等。改这里只影响当前这条工作流，不影响其他工作流。
{% endhint %}

## 打开工作流设置 / Access workflow settings

打开设置的方法：

1. 打开你的工作流。
2. 点击右上角的**三点图标** <img src="../.gitbook/assets/three-dots-horizontal (1).png" alt="three dots icon" data-size="line">。
3. 选择 **Settings（设置）**。n8n 会打开「工作流设置（Workflow settings）」弹窗。

{% hint style="info" %}
**大白话**：简单三步：打开工作流 → 右上角三个点 → 点「Settings」。之后所有本页介绍的可选项都会出现在这个弹窗里，你按需勾选或填写即可。
{% endhint %}

## 可用的设置 / Available settings

以下是所有可用的设置：

### 执行顺序 / Execution order

为多分支工作流选择执行顺序：

**v1（推荐）**：按顺序一条分支一条分支地执行——先完整执行完第一条分支，再开始下一条。n8n 根据分支在画布（canvas）上的位置[^1]来排序，从上到下；如果两条分支处于同一高度，则最左边的先执行。

{% hint style="info" %}
**大白话**：v1 是「走完一条路，再走另一条路」。比如你有一个工作流分成 A、B 两个分支，v1 会先把 A 分支的所有节点跑完，再跑 B 分支。分支的先后看它们在画布上的位置：上面的先跑，同样高度的左边先跑。这种模式逻辑清晰，是官方推荐的做法。
{% endhint %}

**v0（旧版）**：先执行每条分支的第一个节点，然后执行每条分支的第二个节点，依此类推。

{% hint style="info" %}
**大白话**：v0 是「每条分支各走一步，再各自走下一步」——像「轮流出牌」：先跑所有分支的第 1 个节点，再跑所有分支的第 2 个节点……这是 n8n 旧版本的行为，一般不需要选它，除非你维护的是老工作流且依赖这种旧行为。
{% endhint %}

### 错误工作流（用于在此工作流出错时通知）/ Error Workflow (to notify when this one errors)

选择一条工作流：当当前工作流**执行失败**时，自动触发这条工作流。更多详情请参阅[错误工作流（error workflows）](../flow-logic/handle-errors-gracefully.md)。

{% hint style="info" %}
**大白话**：这就是「自动报警器」。你提前建一条「出错通知」工作流（比如失败就给你发邮件/Slack），然后在这里选上它。以后当前工作流一失败，n8n 就自动跑这条通知工作流，让你第一时间知道。这是每个重要工作流都建议配置的。
{% endhint %}

### 可被哪些工作流调用 / This workflow can be called by

选择哪些其他工作流可以调用（call）当前这条工作流。

{% hint style="info" %}
**大白话**：这是「访问控制」。如果你的工作流会被别的子工作流（sub-workflow）用「Execute Workflow（执行工作流）」节点调用，你可以在这里限制：只允许指定项目（project）里的工作流调用，或者允许所有人调用。防止别人随便调用你的工作流。
{% endhint %}

### 时区 / Timezone

设置此工作流的时区。时区设置对 Schedule Trigger（定时触发）节点很重要。

你可以设置整个 n8n 实例的时区，来配置工作流默认使用的时区：

* [设置 n8n Cloud 实例的时区](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/use-n8n-cloud/configure-cloud/set-your-timezone)
* [为自托管实例配置时区](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/timezone-and-localization)

如果你既没有给工作流设置时区，也没有配置实例时区，n8n 默认使用 EDT（纽约）时区。

{% hint style="info" %}
**大白话**：定时任务的「几点几分」是跟着时区走的。如果默认的纽约时区和你不在一个时区，定时触发就会「差好几个小时」——你以为每天 8 点跑，其实是纽约时间 8 点。所以：定时类工作流一定要确认时区设置。想全局统一改，就在实例层面配置；只想改这一条工作流，就在这里的「Timezone」下拉框里选。
{% endhint %}

### 保存失败的生产执行 / Save failed production executions

是否让 n8n 保存已发布（published）工作流的**失败**执行记录。

### 保存成功生产执行 / Save successful production executions

是否让 n8n 保存已发布工作流的**成功**执行记录。

### 保存手动执行 / Save manual executions

是否让 n8n 保存在编辑器中由用户手动运行（点「Execute workflow」）产生的执行记录。

{% hint style="info" %}
**大白话**：上面三项统称「执行记录开关」。n8n 默认会把每次执行的情况（成功/失败、输入输出数据）记录下来，方便你事后排查。但记录会占数据库空间：手动测试产生的记录很多很杂，生产环境的记录可能包含敏感数据。所以按需开关：开发调试期建议开着，稳定之后可以考虑关闭手动执行记录以节省空间。
{% endhint %}

### 保存执行进度 / Save execution progress

是否让 n8n 保存每个节点的执行数据。

如果设置为 **Save（保存）**，那么当执行出错时，工作流会从出错的地方继续（而不是从头重跑）。这可能会增加延迟。

{% hint style="info" %}
**大白话**：这个选项影响「断点续跑」。开启后，n8n 会记录每个节点跑完后的中间结果，出错重跑时能直接从失败节点接着跑。代价是写盘更多、速度略慢。对于跑得慢、步骤多的工作流（比如 AI 工作流），开这个很有价值——不然一次失败就要全部重来。
{% endhint %}

### 工作流超时 / Timeout Workflow

是否让 n8n 在**经过一定时间后**取消当前的工作流执行。

启用后，会出现 **Timeout After（超时时间）** 选项。你可以在这里设置工作流应在多长时间后超时（以小时、分钟和秒为单位）。对于 n8n Cloud 用户，n8n 会根据你的套餐强制执行一个最大可用超时时间。

{% hint style="info" %}
**大白话**：防止工作流「卡死跑不完」。比如某个外部 API 一直不响应，你的工作流就可能一直挂着占资源。设置超时后（比如 15 分钟），到点 n8n 就强制终止这次执行并标记为失败。Cloud 用户的超时上限受套餐限制。
{% endhint %}

### 隐藏生产执行数据 / Redact production execution data

控制 n8n 是否对**生产环境**（非手动触发）执行的执行数据进行隐藏（redact）。设置为 **Redact（隐藏）** 时，n8n 会隐藏每个节点的输入和输出数据，并用「已隐藏（redacted）」的标识代替。

### 隐藏手动执行数据 / Redact manual execution data

控制 n8n 是否对**手动触发**执行的执行数据进行隐藏。设置为 **Redact（隐藏）** 时，n8n 会隐藏每个节点的输入和输出数据，并用「已隐藏」的标识代替。

如果你的实例管理员[在实例范围内强制启用数据隐藏](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/security/redact-execution-data#instance-level-enforcement)，n8n 会将被强制范围内的这些设置锁定为 **Redact（隐藏）**，你无法在这里关闭它们。

关于隐藏策略、如何查看被隐藏的数据以及权限要求，请参阅[执行数据隐藏（Execution data redaction）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/security/redact-execution-data)。

{% hint style="info" %}
**大白话**：数据安全开关。如果你的工作流会处理敏感数据（客户信息、密钥、身份证号等），建议开启隐藏：执行记录里将看不到具体内容，只有「数据已被隐藏」的提示，防止敏感信息留在日志/数据库里被不该看的人看到。注意：如果管理员已经在实例级别强制开启，这里的选项会被锁死，你改不了。
{% endhint %}

### 预估节省的时间 / Estimated time saved

估计该工作流每次执行能为你节省多少分钟。

设置这个数值后，n8n 就能计算出通过[洞察（insights）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/observe-and-log/track-usage-with-insights)统计的「节省时间」。

{% hint style="info" %}
**大白话**：这个值主要是给「节省时间报表」用的。你填一个数字（比如「每次执行帮我省 30 分钟」），n8n 会结合执行次数，算出你这个工作流总共帮你省了多少时间——给老板汇报自动化成果时很有用。
{% endhint %}

### 自定义跨度属性 / Custom span attributes

为工作流的 OpenTelemetry span（追踪跨度）添加自定义键值对属性。更多详情请参阅[自定义跨度属性（Custom span attributes）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/keep-n8n-running/trace-executions-with-opentelemetry#custom-span-attributes)。

{% hint style="info" %}
**大白话**：这是给「技术型玩家」的高级选项。如果你用 OpenTelemetry 做可观测性（观察工作流运行情况的监控系统），可以在这里给这条工作流的追踪数据附加自定义标签（比如团队名、业务线），方便你在监控系统里按这些标签筛选分析。不懂的话保持默认即可，不影响日常使用。
{% endhint %}

[^1]: 画布（canvas）是 n8n 编辑界面中用于构建工作流的主要区域。你可以在画布上添加节点、连接节点，从而组合出工作流。
