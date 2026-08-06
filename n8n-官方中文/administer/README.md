---
description: 安全地保护、管理并运维你的 n8n 实例。
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
    visible: false
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 管理（Administer）

通过控制访问权限、保护凭据安全、管理变更并监控活动，来管理好你的 n8n。

随着使用规模的增长，本节帮助你安全、可靠地运行 n8n。

{% hint style="info" %}
**小白提示**：这一节是「管理员专区」。如果你是团队里负责 n8n 的人（或者打算以后让别人一起用 n8n），就重点看这里：谁能登录、谁能看什么、密钥怎么保管、改动怎么留痕。就算只有你自己用，先学会「用户管理」和「凭据安全」这两块也很有用。
{% endhint %}

{% hint style="info" %}
企业团队通常在这部分花的时间更多。随着规模扩大，SSO（单点登录）、目录集成、变更控制和集中式日志会变得越来越重要。本节涉及的许多功能在企业版之外也很有用，包括基础的用户管理、凭据安全和运维监控。
{% endhint %}

### 一个典型的管理工作流（A typical administration workflow）

{% stepper %}
{% step %}
### 控制访问（Control access）

决定谁能登录、能做什么、工作如何组织。从 [管理用户和访问（Manage users and access）](manage-users-and-access/README.md) 开始。
{% endstep %}

{% step %}
### 保护机密（Protect secrets）

安全地存储和共享凭据。使用 [管理凭据（Manage credentials）](manage-credentials/README.md) 来减少凭据泛滥（secret sprawl）。
{% endstep %}

{% step %}
### 安全地变更（Move changes safely）

使用基于 Git 的工作流在环境之间推进变更。参见 [使用源码管理和环境（Use source control and environments）](use-source-control-and-environments/README.md)。
{% endstep %}

{% step %}
### 监控活动（Monitor activity）

跟踪使用情况，并向你的日志工具发送信号。使用 [观察与记录（Observe and log）](observe-and-log/README.md) 来提高可见性。
{% endstep %}
{% endstepper %}
