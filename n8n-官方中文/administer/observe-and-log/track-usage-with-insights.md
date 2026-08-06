---
description: Insights
contentType: explanation
nodeTitle: Track usage with Insights
originalFilePath: insights.md
originalUrl: 'https://docs.n8n.io/insights'
url: 'https://docs.n8n.io/administer/observe-and-log/track-usage-with-insights'
layout:
  description:
    visible: false
---

# Insights（洞察分析）

Insights（洞察分析）让实例所有者（owner）和管理员（admin）能够了解工作流在一段时间内的运行表现。这个功能由三部分组成：

- [**Insights 摘要横幅 (Insights summary banner)**](#insights-summary-banner)：在 **Overview**（总览）空间的顶部，显示你的实例最近 7 天的关键指标。
- [**Insights 仪表盘 (Insights dashboard)**](#insights-dashboard)：更详细的可视化分析，包含每个工作流的指标以及与历史数据的对比。
- [**节省的时间（工作流 ROI）(Time saved / Workflow ROI)**](#setting-the-time-saved-by-a-workflow)：对每个工作流，你可以选择设置一个固定的"每次运行节省的时间"，或者根据某个工作流实际走过的执行路径，动态计算节省的时间。

{% hint style="info" %}
**功能可用性**

Insights 摘要横幅（显示最近 7 天的活动）在所有套餐中都可用。Insights 仪表盘只在 Pro、Business（商业版）和 Enterprise（企业版）套餐中可用。
{% endhint %}

{% hint style="info" %}
**小白解释：Insights 能帮你回答什么问题？**

Insights 本质上是一份"工作流运行体检报告"，能回答这类问题：我的自动化到底跑了多少次？失败了多少次、失败率是多少？自动化帮我省了多少时间？每次运行平均要花多久？这样你就能知道哪些工作流值得优化、哪些经常出问题。
{% endhint %}

## Insights 摘要横幅 (Insights summary banner)

n8n 会为摘要横幅和仪表盘收集以下几项指标：

- 生产执行（production executions）总数（不包含子工作流执行和手动执行）
- 生产执行失败总数
- 生产执行失败率
- 节省的时间（当至少一个已激活的工作流设置了该指标时显示）
- 平均运行时长（包括任何 wait（等待）节点产生的等待时间）

{% hint style="info" %}
**小白解释：什么是"生产执行"（production execution）？**

"生产执行"指的是由正式发布的（published）工作流、通过定时触发（schedule）、Webhook 等真实触发方式自动运行的记录。你在编辑器里点"Test workflow"手动测试跑的那次，属于"手动执行"，不计入这些指标。
{% endhint %}

## Insights 仪表盘 (Insights dashboard)

从侧边导航栏进入 **Insights** 部分。摘要横幅上的每个指标也都可以点击，点击后会跳转到对应的图表。

Insights 仪表盘还有一个表格，显示每个工作流的单独洞察数据，包括：生产执行总数、失败的生产执行数、失败率、节省的时间，以及平均运行时长。

## Insights 时间段 (Insights time periods)

默认情况下，Insights 摘要横幅和仪表盘显示一个"滚动 7 天"窗口，并与上一个周期对比，以便你看出每个指标是上升了还是下降了。在仪表盘上，付费套餐还可以显示其他日期范围：

- Pro：7 天和 14 天
- Business（商业版）：24 小时、7 天、14 天、30 天
- Enterprise（企业版）：24 小时、7 天、14 天、30 天、90 天、6 个月、1 年

## 设置工作流节省的时间 (Setting the time saved by a workflow)

对于每个工作流，你可以跟踪它帮你节省了多少时间。这个设置能帮你算清楚：把某个流程自动化之后，长期来看比手动做同样的任务节省了多少时间。

配置完成后，n8n 会根据该工作流的生产执行次数来计算它帮你节省的时间，并显示在摘要横幅和 Insights 仪表盘上。

计算节省时间有两种方法，你可以二选一：

### 固定节省时间 (Fixed time saved)

固定节省时间（Fixed time saved）模式下，你只需要设置一个固定的时间值，这个值适用于该工作流的每一次生产执行，无论执行时走了哪条路径。

配置固定节省时间的步骤：

1. 打开该工作流
2. 点击右上角的三个点菜单，选择 **Settings**（设置）
3. 在 **Estimated time saved**（预计节省时间）下拉框中，选择 **Fixed**（固定）
4. 输入每次执行帮你节省的工作分钟数
5. 保存设置

### 动态节省时间 (Dynamic time saved)

动态节省时间（Dynamic time saved）模式会根据执行时实际走的路径来计算节省的时间，适合"不同执行路径节省的时间不同"的工作流。

配置动态节省时间的步骤：

1. 打开该工作流
2. 点击右上角的三个点菜单，选择 **Settings**（设置）
3. 在 **Estimated time saved**（预计节省时间）下拉框中，选择 **Dynamic**（动态）
4. 保存设置
5. 在你要节省时间的节点位置，往工作流里添加 **Time Saved**（节省时间）节点
6. 对于每个 Time Saved 节点，配置：
   - **Time saved**（节省的时间）：本次节省的时间量（单位：分钟）
   - **Calculation mode**（计算模式）：选择是一次执行只计算一次节省时间，还是按"每个数据项"计算——按数据项计算时，节省的分钟数会乘以输入数据项的总数

当你使用动态节省时间时，n8n 会把一次工作流运行中所有执行过的 Time Saved 节点的时间加起来，算出这次执行总共节省的时间。

{% hint style="info" %}
**小白解释：Fixed 和 Dynamic 怎么选？**

* 如果你的工作流每次运行都固定省 10 分钟，选 **Fixed（固定）**，简单省事。
* 如果你的工作流有时候只处理 1 条数据、有时候处理 1000 条数据（省的时间随数据量变化），选 **Dynamic（动态）**，更准确。
{% endhint %}

{% hint style="info" %}
**子工作流和错误工作流支持**

节省时间的跟踪目前只对"父工作流"（主工作流）生效。子工作流（sub-workflow）的节省时间目前还不支持，官方计划在未来版本中支持。错误工作流（error workflow）的执行不计入节省时间，尽管 n8n 会把错误工作流计入其他 Insights 指标中。
{% endhint %}

## 关闭或配置 Insights 指标收集 (Disable or configure insights metrics collection)

如果你是自托管 n8n，可以使用[环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/insights)来关闭或配置 Insights 和指标收集。

默认情况下，n8n 会保留压缩后的 Insights 数据 365 天（`N8N_INSIGHTS_MAX_AGE_DAYS`）。n8n 把保留时间上限设定为 730 天（两年）；如果你想要更短的保留窗口，就填一个更小的数字。要完全关闭 Insights 收集，设置 `N8N_DISABLED_MODULES=insights`（详见[环境变量页面](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/insights)）。

{% hint style="info" %}
**自托管升级提示**

在旧版本中，数据清理（pruning）可能遵循许可证（license）决定的默认值（通常是 180 天）。现在 `N8N_INSIGHTS_MAX_AGE_DAYS` 统一控制数据清理（默认 365 天）。如果你想要跟以前一样的保留窗口，请设置 `N8N_INSIGHTS_MAX_AGE_DAYS=180`。
{% endhint %}

n8n 先以"每小时"的粒度保存最近的 Insights 数据，然后把更旧的数据压缩成"每天"和"每周"级别的汇总。使用[Insights 环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/insights)可以控制压缩时机、批次限制、运行时长和延迟。

{% hint style="info" %}
**小白解释：为什么要"压缩"数据？**

如果每秒都保存完整数据，数据库很快就会爆掉。n8n 的做法是：最近的数据保存得细一点（每小时一条），过一段时间就把旧数据"合并压缩"成粗粒度汇总（每天、每周一条）。这样既能看到近期细节，又不会占用太多数据库空间。
{% endhint %}

把这些阈值调高到默认值之上，可以让精细数据保留更久。但这会给 `insights_by_period` 表增加更多行，比单纯延长 `N8N_INSIGHTS_MAX_AGE_DAYS` 更占数据库空间。如果你只是想要更长的保留窗口，请优先增大 `N8N_INSIGHTS_MAX_AGE_DAYS`。

## Insights 常见问题 (Insights FAQs)

### n8n 用哪些执行记录来计算摘要横幅和仪表盘里的数值？ (Which executions do n8n use to calculate the values in the insights banner and dashboard?)

Insights 从生产执行（production executions）中收集数据，例如由已发布的工作流通过定时计划或 Webhook 触发产生的执行。这包括错误工作流（error workflow）的执行。它不包括手动（测试）执行，也不包括子工作流执行。

n8n 会把错误工作流自身的执行结果和运行时长记录在错误工作流自己名下，而不是记录在那个失败的工作流名下。这会影响总执行数、失败指标和平均运行时长。在 n8n 2.23.0 及更高版本中，错误工作流的执行不计入"节省的时间"。

### 升级到带 Insights 的版本时，n8n 会使用历史执行数据吗？ (Does n8n use historic execution data when upgrading to a version with insights?)

n8n 只会在你升级到第一个支持 Insights 的版本（1.89.0）之后才开始收集数据。这意味着它只统计从那个时间点之后的执行记录，你在 Insights 中看不到更早时期的执行数据。
