---
description: 如何在 n8n Cloud 上设置你的时区。
contentType: howto
nodeTitle: 设置你的时区
originalFilePath: manage-cloud/set-cloud-timezone.md
originalUrl: 'https://docs.n8n.io/manage-cloud/set-cloud-timezone'
url: 'https://docs.n8n.io/deploy/use-n8n-cloud/configure-cloud/set-your-timezone'
layout:
  description:
    visible: false
---

# 设置 Cloud 实例的时区（Set the Cloud instance timezone）

你可以更改 n8n 实例的时区。这会影响 [Schedule Trigger（定时触发器）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.scheduletrigger) 和 [Date & Time node（日期与时间节点）](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.datetime) 的行为。另外，用户还可以在 [Workflow settings（工作流设置）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/configure-workflow-settings) 中为**单个工作流**单独配置时区。

{% hint style="info" %}
**小白提示：时区非常重要！**

比如你想让工作流「每天早上 8 点运行」，如果实例时区是 UTC（协调世界时）而你在北京（UTC+8），实际运行时间就会变成北京时间下午 4 点。所以第一次用 Cloud 时，建议先把实例时区改成你的本地时区（比如 Asia/Shanghai 上海）。
{% endhint %}

操作步骤：

1. 在你的管理后台（dashboard）上，选择 **Manage**（管理）。
2. 把 **Timezone**（时区）下拉框改成你想要的时区。

{% hint style="info" %}
**说明**：这里的操作是在 Cloud 的「管理后台」里做的，不是在 n8n 的工作流编辑器里。如果你还没进过管理后台，请先阅读「使用管理后台（Use the admin dashboard）」这篇文章。
{% endhint %}
