---
contentType: howto
nodeTitle: 添加和删除用户（Add and remove users）
originalFilePath: user-management/manage-users.md
originalUrl: 'https://docs.n8n.io/user-management/manage-users'
url: 'https://docs.n8n.io/administer/manage-users-and-access/add-and-remove-users'
layout:
  description:
    visible: false
---

# 管理用户 / Manage users

**Settings（设置）** > **Users（用户）** 页面会显示所有用户，包括有**待处理邀请（pending invitations）**的用户。

{% hint style="info" %}
**大白话**：这个页面就是你的 n8n「花名册」。谁能进你的 n8n、谁还没接受邀请，都在这里一目了然。还没接受邀请的用户会一直显示在这里，直到他们点开邮件里的链接完成注册，或者你删除他们的邀请。
{% endhint %}

## 删除用户 / Delete a user

1. 打开你要删除的用户的**三点菜单（three-dot menu）**，选择 **Delete user（删除用户）**。
2. 确认你要删除该用户。
3. 如果该用户是活跃用户（active user），请选择是**把他们的工作流数据和凭证复制给一个新用户**，还是**永久删除**他们的工作流和凭证。

{% hint style="info" %}
**大白话（第三步的含义）**：删除用户前，n8n 会问你「他留下的东西怎么办」：
* **复制给新用户**：比如同事离职，但他在 n8n 里建的工作流、存的凭证公司还要用，就选这个，把东西转交给接手的同事；
* **永久删除**：确定这些东西都不需要了才选这个，**删了就找不回来了**，而且所有依赖这些凭证的工作流也会跟着失效。
{% endhint %}

## 重新发送邀请给待处理用户 / Resend an invitation to a pending user

点击该用户旁边的菜单图标，然后点击 **Resend invite（重新发送邀请）**。

{% hint style="info" %}
**大白话**：如果用户说「我没收到邀请邮件」，先检查一下垃圾邮件；还是没收到的话，就点这个按钮把邀请重新发一遍。适合那种邮件偶尔会丢的场景。
{% endhint %}
