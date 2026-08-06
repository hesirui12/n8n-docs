---
description: n8n 中的用户管理
contentType: overview
nodeTitle: 管理用户和访问（Manage users and access）
originalFilePath: user-management/index.md
originalUrl: 'https://docs.n8n.io/user-management'
url: 'https://docs.n8n.io/administer/'
layout:
  description:
    visible: false
---

# 用户管理（User management）

n8n 的用户管理功能允许你邀请其他人一起在你的 n8n 实例中工作。它包含：

* 登录和密码管理
* 添加和删除用户
* 三种内置的[实例角色（instance roles）](understand-instance-roles.md)：**Owner（所有者）** 和 **Member（成员）**（Pro 和企业版还有 **Admin（管理员）**），以及自定义实例角色

{% hint style="info" %}
**隐私（Privacy）**

用户管理功能不会向 n8n 发送个人信息（如邮箱或用户名）。
{% endhint %}

{% hint style="info" %}
**小白提示**：简单说，就是「怎么把账号分给别人用」。如果你是自己一个人用 n8n，可以不着急看这里；但一旦要让同事一起用，就要先搞懂 Owner/Member 这些角色的区别——Owner 能管一切，Member 只能干活。
{% endhint %}

## 设置指南（Setup guides）

本节包含用户管理的大部分使用信息，以及 [Cloud 设置指南（Cloud setup guide）](set-up-for-cloud.md)。如果你自托管 n8n，还需要额外步骤来配置你的 n8n 实例。请参考[自托管指南（Self-hosted guide）](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/user-management)。

本节还包含在 n8n 中配置 [LDAP](verify-user-identity/connect-ldap.md) 和 [SAML](verify-user-identity/use-saml/README.md) 的指南。
