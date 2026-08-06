---
description: 如何访问 Cloud 管理后台。
contentType: howto
nodeTitle: 使用管理后台
originalFilePath: manage-cloud/cloud-admin-dashboard.md
originalUrl: 'https://docs.n8n.io/manage-cloud/cloud-admin-dashboard'
url: 'https://docs.n8n.io/deploy/use-n8n-cloud/use-the-admin-dashboard'
layout:
  description:
    visible: false
---

# Cloud 管理后台（Cloud admin dashboard）

实例**归属人（owner）**可以访问管理后台来管理他们的 Cloud 实例。你可以在这里升级 n8n 版本、设置时区等。

{% hint style="info" %}
**小白提示**：管理后台（Admin Dashboard）和 n8n 的工作流编辑器是**两个不同的界面**。编辑器用来「做工作流」，管理后台用来「管整个实例」——比如升级版本、改时区、下载备份、管理执行记录。只有实例归属人（创建该实例的账号）能进入管理后台。
{% endhint %}

## 从应用内访问管理后台（Access the dashboard from the app）

1. [登录 n8n](https://app.n8n.cloud/magic-link)。
2. 选择 **Admin Dashboard**（管理后台）。n8n 会打开管理后台界面。

## 当应用离线时访问管理后台（Access the dashboard if the app is offline）

如果实例宕机（down）了，你仍然可以访问管理后台。当你登录应用时，n8n 会询问你是否需要一个「魔法链接（magic link）」来访问管理后台。选择 **Send magic link**（发送魔法链接），然后到邮箱里查收这个链接即可。

{% hint style="info" %}
**小白提示**：所谓「魔法链接」就是一封包含一次性登录链接的邮件，点击链接就能直接登录，不需要输入密码。如果收件箱里没找到，记得看看垃圾邮件（spam）文件夹。
{% endhint %}

{% hint style="info" %}
**国内访问提示**：管理后台和登录邮件服务均部署在海外，国内邮箱有时可能出现邮件延迟或收不到的情况；如果长时间没收到魔法链接，可以检查垃圾箱，或者换个邮箱重试。
{% endhint %}
