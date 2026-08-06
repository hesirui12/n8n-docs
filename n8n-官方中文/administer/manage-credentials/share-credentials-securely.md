---
title: 凭证共享（Credential sharing）
contentType: howto
nodeTitle: 安全地共享凭证
originalFilePath: credentials/credential-sharing.md
originalUrl: https://docs.n8n.io/credentials/credential-sharing
url: https://docs.n8n.io/administer/manage-credentials/share-credentials-securely
description: 在组织内共享凭证。
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

# 安全地共享凭证 / Share credentials securely

{% hint style="info" %}
**功能可用性（Feature availability）**

所有 Cloud（云）套餐，以及自托管（self-hosted）的 Business（商业版）和 Enterprise（企业版）套餐均可用。
{% endhint %}

你可以把凭证直接共享给其他用户，让他们在自己的工作流中使用。或者，把凭证共享到某个项目（project）[^1] 中，让该项目**所有成员**都能使用。任何使用共享凭证的用户都**无法查看或编辑**凭证的详细信息。

用户可以共享自己创建并拥有的凭证。只有项目管理员（project admins）可以共享由项目创建并归项目所有的凭证。实例所有者（instance owners）和实例管理员（instance admins）可以查看和共享实例上的所有凭证。

关于所有者（owners）和管理员（admins）的更多信息，请参考[实例角色（Instance roles）](../manage-users-and-access/understand-instance-roles.md)。

在[项目（projects）](../manage-users-and-access/set-permissions-and-roles-rbac/README.md)中，用户的角色决定了他可以如何与所加入项目关联的工作流和凭证进行交互。

{% hint style="info" %}
**共享终端用户凭证（Sharing end-user credentials）**

共享一个[终端用户凭证（end-user credential）](end-user-credentials.md)时，共享的是**凭证本身**，而不是连接。你共享给的用户会连接他们**自己的**账号，他们不会使用你的账号。
{% endhint %}

{% hint style="info" %}
**大白话（共享凭证的权限边界）**：记住这三层：
1. **普通用户**：只能共享「自己创建、自己拥有」的凭证；
2. **项目管理员**：还能共享「归项目所有」的凭证；
3. **实例所有者/管理员**：能看、能共享实例上的**所有**凭证。
另外，共享 ≠ 交出密码——别人能用你的凭证，但看不到里面的密钥内容，这样既方便协作又不泄露敏感信息。
{% endhint %}

## 共享凭证 / Share a credential

要共享一个凭证：

1. 从左侧菜单选择 **Overview（概览）** 或某个项目。
2. 选择 **Credentials（凭证）** 查看你的凭证列表。
3. 选择你想要共享的凭证。
4. 选择 **Sharing（共享）**。
5. 在 **Share with projects or users（共享给项目或用户）** 下拉框中，浏览或搜索你想要共享凭证的用户或项目。
6. 选择一个用户或项目。
7. 选择 **Save（保存）** 以应用更改。

## 移除对凭证的访问权限 / Remove access to a credential

要取消共享一个凭证：

1. 从左侧菜单选择 **Overview（概览）** 或某个项目。
2. 选择 **Credentials（凭证）** 查看你的凭证列表。
3. 选择你想要取消共享的凭证。
4. 选择 **Sharing（共享）**。
5. 点击要移除的用户或项目旁边的**垃圾桶图标**<img src="../.gitbook/assets/delete-node (1).png" alt="Trash icon" data-size="line">，把它从共享用户和项目列表中移除。
6. 选择 **Save（保存）** 以应用更改。

{% hint style="info" %}
**大白话（取消共享注意）**：取消共享后，对方**无法再使用**这个凭证了。如果对方的工作流正在依赖它，运行时会报「缺少凭证」之类的错误。所以取消共享前，最好先确认对方的哪些工作流在用这个凭证，避免突然把同事的工作流弄坏。
{% endhint %}

[^1]: n8n 项目（projects）允许你把工作流、变量和凭证分成不同的组，以便于管理。项目通过共享和隔离相关资源，让团队协作更加容易。
