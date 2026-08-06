---
description: 让每个用户把自己的账号连接到凭证上，这样工作流会以触发它的人的凭证来运行。
contentType: howto
nodeTitle: 终端用户凭证（End-user credentials）
originalFilePath: credentials/end-user-credentials.md
originalUrl: 'https://docs.n8n.io/credentials/end-user-credentials'
url: 'https://docs.n8n.io/administer/manage-credentials/end-user-credentials'
layout:
  description:
    visible: false
---

# 终端用户凭证（End-user credentials）

终端用户凭证（end-user credentials）允许工作流以**触发它的人**的凭证来运行，而不是使用一个固定不变的凭证。项目管理员（project admin）先创建一个凭证作为**模板（template）**，然后每个用户连接自己的账号。n8n 会使用每个用户自己连接的账号，并保护他们的数据隐私。

如果使用**固定凭证（fixed credentials）**，每个运行工作流的人都使用同一个账号，这就可能把某个人的访问权限和数据暴露给其他人。终端用户凭证则让每个用户拥有自己的连接，并把各自的执行数据隔离开来。

{% hint style="info" %}
**仅在企业版（Enterprise）套餐可用**
{% endhint %}

{% hint style="info" %}
**该功能目前处于预览（preview）阶段**

预览功能可能会在未来的版本中发生变化。**不要**在生产环境的正式工作流中依赖它。
{% endhint %}

{% hint style="info" %}
**大白话**：想象一下公司有一个「处理我的 Gmail 邮件并汇总发到 Slack」的工作流。用固定凭证时，所有人跑的都是同一个人的邮箱；用终端用户凭证时，你跑就看你的邮箱，同事跑就看同事的邮箱，互不干扰、互不可见。这就是「模板 + 各自连接」的思路。
{% endhint %}

## 什么是终端用户凭证 / What are end-user credentials

当你创建或编辑凭证时，可以选择一种 **Credential type（凭证类型）**：

* **Fixed credential（固定凭证）**：无论谁运行工作流，都使用同一个凭证。这是默认选项。
* **End-user credential（终端用户凭证）**：运行时使用**每个用户自己**的凭证。只有该用户本人能看见和使用自己的凭证。

终端用户凭证是一个**模板**。创建它的人只需配置一次连接，例如 Gmail 的 OAuth 应用信息。每个有权限的用户都可以用这个模板连接自己的账号。每条连接都属于创建它的用户：只有他们能使用，也只有他们能看到该连接返回的数据。

### 示例 / Example

你构建了一个工作流：用手动触发器（manual trigger）读取 Gmail 中的邮件，并把摘要发送到 Slack。你为 Gmail 创建了一个终端用户凭证作为模板。当用户 A 运行这个工作流时，n8n 读取的是用户 A 的收件箱；当用户 B 运行时，n8n 读取的是用户 B 的收件箱。每个用户只能看到自己的数据。

## 它是如何工作的 / How it works

在节点（node）上选择凭证的方式和以前一样，还是通过凭证下拉菜单（credential dropdown）选择，节点上**没有单独的设置项**。节点的行为取决于凭证类型：

* 使用**固定凭证**时，节点的行为和以前完全一样。
* 使用**终端用户凭证**时，节点会显示「使用触发者的账号」，如果触发者还没连接账号，会提示他们先连接。

在运行时，n8n 会把凭证解析为**触发工作流的那个用户**所连接的账号。每个有工作流访问权限的用户都会在自己身份的视角下看到这个节点：如果他们连接了自己的账号，就用自己的连接运行；如果没有，就需要先连接账号，才能触发工作流。

你可以在同一个工作流的不同节点上**混用**固定凭证和终端用户凭证。例如，用终端用户凭证读取每个用户自己的 Google 日历，但用一个固定凭证（团队的共享 Slack 账号）把结果发送出去。

{% hint style="info" %}
**大白话（混用例子）**：数据「进来」是私人的（各看各的日历），数据「出去」是共享的（统一发到团队 Slack）。这种「入口私人化、出口团队化」的组合在实际工作中非常常见。
{% endhint %}

## 要求与限制 / Requirements and limitations

* **仅企业版（Enterprise only）**：终端用户凭证需要企业版套餐。
* **创建受控（Controlled creation）**：默认情况下，只有[项目管理员（project admins）](../manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles.md)可以创建终端用户凭证。可以通过[自定义角色（custom roles）](../manage-users-and-access/set-permissions-and-roles-rbac/create-custom-roles.md)把这个权限授予其他用户。限制谁能创建这种凭证，可以让凭证管理保持集中：管理员只创建一次模板，然后共享给需要的项目，而不是让很多用户各自去配置一遍。
* **仅支持 OAuth 凭证（OAuth credentials only）**：终端用户凭证只支持基于 OAuth 的凭证类型。
* **每个用户一条连接（One connection per user）**：每个用户针对每个终端用户凭证模板只能连接一个账号。
* **支持的触发器（Supported triggers）**：终端用户凭证解析支持手动触发器（manual trigger）、[Chat Hub（聊天中枢）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/ways-of-building-workflows/chat-hub)和 MCP Server Trigger（MCP 服务器触发器）。

## 创建终端用户凭证 / Create an end-user credential

1. 创建一个凭证，或打开一个现有的凭证。
2. 在 **Credential type（凭证类型）** 下，选择 **End-user credential（终端用户凭证）**。
3. 配置连接。对于 OAuth 凭证，需要填写 **Client ID（客户端 ID）**、**Client Secret（客户端密钥）** 和 **OAuth Redirect URL（OAuth 重定向 URL）**，用于向服务注册。
4. 选择 **Save（保存）**。

现在，有项目访问权限的用户就可以把自己的账号连接到这个凭证上了。

## 连接你的账号 / Connect your account

在把终端用户凭证用于工作流之前，你需要把自己的账号连接到模板上。你可以通过以下任意一种方式操作：

* **在节点中（A node）**：当你打开一个使用终端用户凭证的节点时，它会显示你是否已经连接了账号。如果还没连接，选择 **Connect（连接）**。
* **在凭证中（The credential）**：打开终端用户凭证，在凭证弹窗（credential modal）中连接你的账号。
* **在凭证列表中（The credentials list）**：在项目的 **Credentials（凭证）** 列表中，终端用户凭证的卡片上有一个 **Connect（连接）** 选项。

然后完成你的账号的 OAuth 流程。连接成功后，节点会显示你的账号，例如 **Connected as you@example.com（已以 you@example.com 连接）**。

你的连接是**私密的**。其他用户会把自己的账号连接到同一个模板，永远不会使用你的账号。

## 执行数据与隐私 / Execution data and privacy

当一次工作流执行使用了终端用户凭证时，执行的元数据（metadata）对**任何有权查看该工作流执行记录的人**都是可见的：包括状态、运行时间，以及「使用了终端用户凭证」这个事实。发生变化的是**谁能看到里面的数据**。

只有用自己连接的账号触发工作流的那个用户，才能看到这些节点的输入和输出数据（包括从连接的服务返回的数据）。对于其他所有人——包括实例管理员（instance admins）——这些节点都会显示**脱敏后的输出（redacted output）**。

{% hint style="info" %}
**大白话（脱敏是什么）**：脱敏（redact）就是把敏感内容替换成类似 `[REDACTED]` 的占位符。别人看到执行记录时，只能看到「这个节点运行了、状态是成功」，但看不到具体的数据内容，就像看一份被黑条涂掉的文档。
{% endhint %}

### 管理员可见性 / Admin visibility

管理员可以看到存在某个终端用户凭证模板、以及它带有几条连接。例如，删除一个终端用户凭证时，管理员能看到它附加了多少条用户连接——而这个**数量就是他们能看到的所有信息**。他们**不能**：

* 查看任何关于单个连接的信息
* 查看连接的密钥（secrets）
* 在自己的工作流中使用任何人的已连接账号
* 查看在另一个用户的连接上运行过的执行的脱敏输出

共享（sharing）的工作方式和普通凭证一样，但**只共享模板，不共享已连接的账号**。管理员可以把它共享到其他项目或共享给其他用户，每个接收者都会连接自己的账号。

{% hint style="warning" %}
**删除终端用户凭证会移除所有连接**

删除凭证模板会删除整个凭证，包括**每个用户**的连接，而不仅仅是你的连接。任何依赖它的工作流，对这些用户来说都无法再解析该凭证，直到凭证被重新设置并且用户重新连接。如果你要删除的终端用户凭证带有已附加的连接，n8n 会在删除前发出警告。
{% endhint %}

## 跨项目共享终端用户凭证 / Share end-user credentials across projects

使用标准的[凭证共享（credential sharing）](share-credentials-securely.md)机制，可以把终端用户凭证共享到其他项目。共享的是**模板**，不是连接。其他项目的用户会看到「连接自己的账号」的选项，而不会获得原拥有者的连接。

每个用户针对每个模板**只需连接一次**。这一次连接会在该模板被共享到的**所有项目**中为该用户生效，所以他们不需要在每个项目里重新连接。

一个好的做法是：把你要用的终端用户凭证（例如 Gmail、Linear、Jira、Google Sheets）集中创建在**一个项目**里，然后共享到其他需要的项目。每个项目得到的是同一个模板，而每个用户的那一条连接在所有这些项目里都能用。

{% hint style="info" %}
**大白话（为什么集中创建）**：把模板放在一个「母项目」里，方便管理员统一维护（比如换 OAuth 应用、更新密钥），其他项目只是「借用」模板。用户也省心——连一次，处处都能用。
{% endhint %}

## 相关资源 / Related resources

* [创建和编辑凭证（Create and edit credentials）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/understand-workflows/create-and-edit-credentials)
* [安全地共享凭证（Share credentials securely）](share-credentials-securely.md)
* [RBAC 角色类型（RBAC role types）](../manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles.md)
