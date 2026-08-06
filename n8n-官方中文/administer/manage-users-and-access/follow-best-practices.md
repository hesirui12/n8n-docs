---
description: 用户管理最佳实践。
contentType: explanation
nodeTitle: 遵循最佳实践（Follow best practices）
originalFilePath: user-management/best-practices.md
originalUrl: 'https://docs.n8n.io/user-management/best-practices'
url: 'https://docs.n8n.io/administer/manage-users-and-access/follow-best-practices'
layout:
  description:
    visible: false
---

# 用户管理的最佳实践 / Best practices for user management

本页面包含有关 n8n 用户管理的最佳实践建议。

{% hint style="info" %}
**大白话**：这一页不是「怎么操作」，而是「怎么用更安全、更不容易翻车」的经验总结。建议管理员先通读一遍，尤其是多人协作时。
{% endhint %}

## 所有平台（All platforms）

* n8n 建议**所有者（owner）为自己创建一个 Member（成员）级别的账号**。所有者可以看到所有工作流，但**没有方法查看某个特定工作流是谁创建的**，所以如果你以所有者身份去构建和编辑工作流，就有覆盖（覆盖=把别人的修改冲掉）他人工作的风险。

{% hint style="info" %}
**大白话（为什么所有者要另开一个成员号）**：Owner（所有者）账号权限太大，n8n 又查不到「这个工作流是谁建的」。假设团队里有人建了个工作流，你用 Owner 账号打开它改了几笔并保存——你根本分不清这是谁的作品，可能就把同事正在做的东西覆盖了。所以官方建议：日常干活用 Member 小号，Owner 号只用来做管理操作（加人、删人、管理全局设置）。
{% endhint %}

* 用户必须**小心不要同时编辑同一个工作流**。虽然技术上可以做到，但多个用户会**互相覆盖**彼此的修改。

{% hint style="info" %}
**大白话（多人编辑同一工作流）**：n8n 的工作流编辑是「最后保存的人赢」——没有像 Google Docs 那样实时的冲突提示。两个人同时打开同一个工作流各改各的，后保存的人会把先保存的人改的东西整个冲掉。所以在团队里可以约定：工作流谁负责就谁编辑，或编辑前先通知其他人「我在改这个」。
{% endhint %}

* 要在账号之间移动工作流，请把工作流**导出为 JSON**，然后导入到新账号中。注意：这个操作会**丢失工作流历史（workflow history）**。

* **Webhook 路径在整个实例中必须是唯一的**。这意味着每个 webhook 路径对所有工作流和所有用户都必须唯一。默认情况下，n8n 会为 webhook 路径生成一个**很长的随机值**，但用户可以把它改成自己的自定义路径。如果两个用户设置了相同的路径值：
    * 路径对**第一个运行或发布**的工作流有效。
    * 其他工作流如果尝试用相同的路径运行，会**报错**。

{% hint style="info" %}
**大白话（Webhook 路径唯一性）**：可以把 webhook 路径理解成「服务器上的门牌号」。两个工作流不能用同一个门牌号，否则别人发来的请求不知道该进哪扇门。n8n 默认生成超长随机字符串就是为了避免撞车；如果你为了好看改成短路径（比如 `/webhook/order`），一定要先全实例搜一下有没有人用过。改完路径后，调用方（比如对方系统的配置）也要同步更新。
{% endhint %}

## 自托管（Self-hosted）

如果你在反向代理（reverse proxy）后面运行 n8n，请设置以下环境变量，以便 n8n 生成的邮件使用正确的 URL：

* `N8N_HOST`
* `N8N_PORT`
* `N8N_PROTOCOL`
* `N8N_EDITOR_BASE_URL`  

{% hint style="info" %}
**大白话（为什么必须设置这些变量）**：如果你用 Nginx 之类把 n8n 挂在某个域名（如 `https://n8n.example.com`）后面，n8n 自己是「看不见」这个域名的——它只知道自己的内部端口。如果不告诉它外部地址（`N8N_HOST` 等），它发出的邀请邮件、密码重置邮件里的链接就会是 `http://localhost:5678` 这种内部地址，用户点了根本打不开。设置这四个变量就是把「对外地址」告诉 n8n。
{% endhint %}

关于这些变量的更多信息，请参阅[环境变量（Environment variables）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables)（GitBook 外部链接）。
