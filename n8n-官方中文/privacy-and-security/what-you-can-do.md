---
title: 你能做什么
description: 使用 n8n 时，你可以做些什么来提升隐私和数据安全。
contentType: howto
nodeTitle: 你能做什么
originalFilePath: privacy-security/what-you-can-do.md
originalUrl: 'https://docs.n8n.io/privacy-security/what-you-can-do'
url: 'https://docs.n8n.io/privacy-and-security/what-you-can-do'
layout:
  description:
    visible: false
---

# 你能做什么

{% hint style="info" %}
**小白必读：这一页在讲什么？**

上一页（隐私）讲的是"n8n 公司对数据做了什么"，这一页反过来讲"**你自己应该做什么**"。n8n 再安全，也只是你数据安全的一半——另一半握在你自己手里。这里列出了一些你可以采取的安全措施，建议按清单逐条对照执行。
{% endhint %}

作为客户，你也有责任确保自己的代码和数据是安全的。本文档列出了一些你可以采取的步骤。

## 所有用户

* 将安全问题以及[服务条款](https://n8n.io/legal/#terms)违规行为报告给 security@n8n.io。

{% hint style="info" %}
**小白说明：什么时候该发这封邮件？**

如果你发现 n8n 存在安全漏洞（比如某个功能可能泄露数据）、疑似被入侵的迹象，或者有人利用 n8n 做了违反服务条款的事，请发邮件到 security@n8n.io。请**不要**把安全问题先发到公开论坛或社交媒体上——那样等于先通知了坏人，最好直接私下报告给官方安全团队。
{% endhint %}

* 如果不止一个人使用你的 n8n 实例，请设置[用户管理](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access)，并遵循[最佳实践](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/follow-best-practices)。

{% hint style="info" %}
**小白说明：为什么要做用户管理？**

如果大家共用同一个管理员账号，一旦密码泄露，所有人（包括你的工作流和数据）都暴露了。给每个人单独账号，可以实现"最小权限原则"——每个人只拿到自己工作需要的权限，出问题也好追责、好撤销。
{% endhint %}

* 尽可能使用 OAuth 连接集成。

{% hint style="info" %}
**小白必读：什么是 OAuth？**

OAuth 是一种"授权登录"机制，比如"使用 Google 账号登录""使用 GitHub 授权"。比起把账号密码/API 密钥直接填进 n8n，OAuth 的方式是"授权但不交出密码"——你随时可以单方面撤销授权，而且凭据不会长期明文存放在 n8n 里，安全性高得多。所以：**能选 OAuth 就选 OAuth**。
{% endhint %}

## 自托管用户

如果你自托管 n8n，还可以采取以下额外步骤：

* 设置反向代理来处理 TLS，确保数据在传输过程中是加密的。

{% hint style="info" %}
**小白必读：什么是 TLS / 反向代理？**

- **TLS**（传输层安全协议）就是让数据在网络上传输时"加密"的技术——网址栏的"小锁头 🔒"就是它。没有 TLS，数据就像明信片一样，沿途任何人都能偷看。
- **反向代理**（reverse proxy）是放在 n8n 前面的一个"门卫"服务器（常见的有 Nginx、Caddy、Traefik）。它负责接收访问、终结 TLS 加密、再转发给 n8n。这是自托管 n8n 的标准做法之一。
{% endhint %}

* 确保静态数据是加密的：使用加密分区，或硬件级别的加密，并确保 n8n 及其数据库写入到该位置。

{% hint style="info" %}
**小白必读：什么是"静态数据加密"？**

传输加密保护的是"数据在路上"的安全；**静态加密**保护的是"数据在硬盘上"的安全——万一服务器硬盘被偷、被拆走，没有密钥的人读不出里面的数据。实现方式：Linux 的 LUKS 加密分区、云厂商提供的磁盘加密（如 AWS EBS 加密）等。**记得：n8n 程序和数据库都必须放在加密盘上才有意义。**
{% endhint %}

* 运行[安全审计](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/security/run-security-audits)。

{% hint style="info" %}
**小白说明：什么是安全审计？**

n8n 自带一个"体检工具"，会自动检查你的配置有没有安全隐患（比如弱密码策略、未加密的敏感设置等），并生成一份报告告诉你哪里需要改。建议安装后、以及每次大改动后都跑一遍。
{% endhint %}

* 注意安装社区节点时的[风险](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/community-nodes/risks)，或者选择禁用社区节点。

{% hint style="info" %}
**小白必读：社区节点为什么有风险？**

社区节点是 n8n 官方之外、由个人或公司编写的节点，质量良莠不齐，有的甚至可能夹带恶意代码。安装前请查看它的下载量、维护情况、是否知名作者；如果不需要，直接在设置里禁用社区节点功能最省心。
{% endhint %}

* 确保用户无法在代码节点（Code node）中导入外部模块。更多信息请参阅[环境变量 | 节点](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/nodes)。

{% hint style="info" %}
**小白说明：为什么不能乱导入模块？**

代码节点允许你写 JavaScript 代码，如果允许导入任意外部模块（包），恶意代码就能利用这些模块访问服务器文件系统、执行系统命令等，等于把服务器大门打开了。n8n 官方推荐的做法是：不信任的实例，就禁止导入外部模块，只允许使用内置模块。
{% endhint %}

* 选择排除某些节点。例如，你可以禁用 Execute Command（执行命令）或 SSH 之类的节点。更多信息请参阅[环境变量 | 节点](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/nodes)。

{% hint style="info" %}
**小白说明：为什么要禁用某些节点？**

Execute Command、SSH 这类节点能力极强（能执行服务器命令），属于"双刃剑"：工作流一旦被攻破或误配，攻击者就能通过它们直接控制你的服务器。**用不到的高危节点，直接禁用，缩小攻击面。**
{% endhint %}

* 为了获得最大隐私，你可以[隔离 n8n](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/configuration-examples/isolate-n8n)。

{% hint style="info" %}
**小白说明：什么是"隔离 n8n"？**

隔离就是把 n8n 关进"单独的笼子"里跑：比如用独立的虚拟机/容器、专用低权限用户、限制网络访问等。这样即使 n8n 被攻破，攻击者也无法轻易碰到你服务器上的其他服务和数据——"爆炸半径"被控制在最小范围。
{% endhint %}

### 自托管用户的 GDPR

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/iLayKGKnzGLWFd5VGZVk/" %}

{% hint style="info" %}
**小白提示：上面这行代码是什么？**

这是文档系统（GitBook）的"复用片段"引用标记，用来在多个页面插入同一段内容，原样保留即可。在官方网页上，这里会自动显示"自托管用户的 GDPR 责任"相关内容。
{% endhint %}
