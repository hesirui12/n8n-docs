---
title: 更换实例归属人或用户名
Description: 更换实例归属人或用户名。
contentType: howto
nodeTitle: 更换实例归属人或用户名
originalFilePath: manage-cloud/change-ownership-or-username.md
originalUrl: 'https://docs.n8n.io/manage-cloud/change-ownership-or-username'
url: >-
  https://docs.n8n.io/deploy/use-n8n-cloud/configure-cloud/change-instance-ownership-or-username
layout:
  description:
    visible: false
---

## 更换实例归属人（Change instance ownership）

你可以通过以下步骤更换实例的归属人（owner）：

1. 用**归属人（owner）账号**登录 n8n Cloud。
2. 进入 **Settings > Personal**（设置 > 个人信息）页面。
3. 编辑 **Email**（邮箱）字段，把它改成新的邮箱地址。
4. 修改完成后，滚动到页面底部，点击 **Save**（保存）。

{% hint style="warning" %}
**注意：新邮箱不能已被其他 n8n 账号占用**

要让更换生效，新的邮箱地址**不能**关联到任何其他 n8n 账号，因为每个实例只能有一个**唯一的归属人邮箱（unique owner email）**。如果这个邮箱已经绑定在某个现有用户上，请先修改或删除该用户，把邮箱空出来之后，再拿它来更换归属人。
{% endhint %}

更换邮箱会带来三个连锁影响：

* 实例的**归属人（owner）**会改变；
* 你用来**登录**的邮箱会改变；
* 你的**发票（invoice）**以及官方发给你的**日常通知邮件**，都会发送到这个新邮箱。

{% hint style="warning" %}
**注意：工作区被停用时无法更换归属人**

如果工作区（workspace）已被停用（deactivated），就不会有 **Settings**（设置）页面，也就无法修改邮箱地址或归属人信息了。
{% endhint %}

## 更换实例用户名（Change instance username）

目前 n8n **不支持直接修改用户名**。

如果你想让实例拥有一个不同的名称，只能新建一个账号，然后把你的工作迁移过去。[导入/导出文档（The import/export documentation）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/manage-workflows/export-and-import) 详细解释了如何把工作迁移到新的 n8n 实例。

{% hint style="info" %}
**小白提示**：迁移的核心思路是「导出再导入」。你可以在旧实例里把工作流（workflows）、凭据（credentials）等导出成 JSON 文件，再到新实例里导入。不过要注意：凭据里包含密码、密钥等敏感信息，迁移时请务必妥善保管导出的文件，不要泄露给他人。
{% endhint %}
