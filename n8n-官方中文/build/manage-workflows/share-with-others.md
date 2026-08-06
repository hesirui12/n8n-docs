---
description: 在用户之间共享工作流。
contentType: howto
nodeTitle: Share with others
originalFilePath: workflows/sharing.md
originalUrl: 'https://docs.n8n.io/workflows/sharing'
url: 'https://docs.n8n.io/build/manage-workflows/share-with-others'
layout:
  description:
    visible: false
---

# 工作流共享 / Workflow sharing

{% hint style="info" %}
**功能可用性（Feature availability）**

适用于所有 Cloud 套餐，以及企业版（Enterprise）自托管套餐。
{% endhint %}

{% hint style="info" %}
**大白话**：先说清门槛——「工作流共享」不是免费功能：Cloud 所有套餐都能用，自托管的社区版（Community edition）用不了，需要企业版。如果你的 n8n 是社区版自托管，想用共享功能就得升级。
{% endhint %}

工作流共享（workflow sharing）允许你在**同一个 n8n 实例**的不同用户之间共享工作流。

用户可以共享自己创建的工作流。实例所有者（owners）和拥有管理员（admin）角色的用户，可以查看和共享实例中的**所有**工作流。关于所有者和管理员角色的更多信息，请参阅[实例角色（Instance roles）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-users-and-access/understand-instance-roles)。

{% hint style="info" %}
**大白话**：规则很简单：普通用户只能分享自己建的工作流；管理员/所有者有「全局权限」，谁的工作流都能看、都能分享。这相当于 n8n 内部的「协作文档」功能——但范围限制在同一个 n8n 实例内（跨实例共享需要用导出导入，见「导出和导入」那一页）。
{% endhint %}

## 共享一个工作流 / Share a workflow

1. 打开你想共享的工作流。
2. 选择 **Share（共享）**。
3. 在 **Add users（添加用户）** 中，查找并选择你想共享给的用户。
4. 选择 **Save（保存）**。

**注意：** 只有当你共享的工作流位于 **Personal（个人）** 工作区中时，此选项才可用。当你尝试对一个**位于项目（project）内部**的工作流使用「Add users」选项时，会弹出这个提示：

![项目内共享选项的截图](../.gitbook/assets/sharing-within-projects.png)

这是**预期行为**：它的意思是，该工作流已经与该项目内的**所有成员**共享。你不需要（也不能）把用户直接添加到工作流，而是要**把用户添加到该项目**中。

{% hint style="info" %}
**大白话（重点区分「个人区」和「项目区」）**：n8n 里工作流可以放在两个地方——「个人工作区（Personal）」或「项目（Projects）」。在个人工作区里，你可以精确到「单独加某几个用户」共享；但一旦工作流进了项目，共享规则就变成「项目里所有人都有份」——不用（也无法）再单独加人，而是把用户拉进项目即可。这是刻意设计，别当成 bug。
{% endhint %}

## 查看共享的工作流 / View shared workflows

你可以在 **Workflows（工作流）** 列表页面浏览和搜索工作流。列表中的工作流取决于当前所在的项目视图：

* **Overview（概览）** 列出你**能访问的所有**工作流，包括：
	* 你自己的工作流。
	* 共享给你的工作流。
	* 你所在项目里的工作流。
	* 如果你以实例所有者或管理员身份登录：实例中的所有工作流。
* 其他项目：该项目中的所有工作流。

{% hint style="info" %}
**大白话**：「Workflows」页面的列表就是你的「工作流入口」。切到「Overview」可以看到全部你能用的（自己的+别人共享的+项目里的）；切到某个具体项目，则只看那个项目的。所有者/管理员能看到整个实例的所有工作流。
{% endhint %}

## 工作流角色与权限 / Workflow roles and permissions

工作流有两种角色：**创建者（creator）** 和 **编辑者（editor）**。创建者就是创建该工作流的用户。编辑者是其他对该工作流有访问权的用户。

你不能更改工作流的所有者，除非是删除该用户（此时工作流会转移）。

{% hint style="info" %}
**Credentials（凭证）说明**

工作流共享允许编辑者使用工作流中用到的**所有**凭证[^1]——包括那些没有通过[凭证共享（credential sharing）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/share-credentials-securely)显式共享给他们的凭证。
{% endhint %}

{% hint style="info" %}
**大白话**：注意这里有个「贴心又危险」的设计：只要工作流共享给你，里面用到的凭证你也能用（即使凭证本身没单独共享给你）。好处是协作时不用反复申请凭证；风险是权限边界变宽——所以分享工作流时要想清楚对方是否可信。想精确控制，就用「凭证共享」单独管理。
{% endhint %}

### 权限 / Permissions

| 权限（Permissions） | 创建者（Creator） | 编辑者（Editor） |
| ----------- | ------- | ------ |
| 查看工作流（只读） / View workflow (read-only) | ✅ | ✅ |
| 查看执行记录 / View executions | ✅ | ✅ |
| 更新（包括标签） / Update (including tags) | ✅ | ✅ |
| 运行 / Run | ✅ | ✅ |
| 共享 / Share | ✅ | ❌ |
| 导出 / Export | ✅ | ✅ |
| 删除 / Delete | ✅ | ❌ |

{% hint style="info" %}
**大白话**：从表格可以看到，创建者和编辑者能力差别不大，编辑者几乎什么都能干（看、改、跑、导出），唯独**不能删除**、**不能把工作流再分享给别人**。也就是说「共享」是创建者独有的权利，防止编辑者把工作流无限转发给其他人。权限检查时以表格为准，其他能力基本一致。
{% endhint %}

## 未共享凭证时的节点编辑限制 / Node editing restrictions with unshared credentials

n8n 的共享机制遵循**最小权限（least privilege）** 原则。也就是说：如果一个用户把工作流共享给你，但**没有共享他们的凭证**，那么你就**不能编辑**工作流中**使用了那些凭证的节点**。你仍然可以查看和运行该工作流，也可以编辑那些没用到未共享凭证的节点。

关于如何共享凭证，请参阅[凭证共享（Credential sharing）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/share-credentials-securely)。

{% hint style="info" %}
**大白话（容易踩坑的点）**：对方只把工作流分享给你、没把凭证分享给你时，会出现一种「半可用」状态：工作流能看、能跑，但**凡是用到那个凭证的节点，参数都是锁死的**，你不能改（防止你通过改节点偷看/篡改对方的密钥）。如果你想编辑这些节点，需要对方把对应凭证也共享给你。这是 n8n 的安全设计，不是出错。
{% endhint %}

[^1]: 在 n8n 中，凭证（credentials）用来存储连接特定应用和服务所需的认证信息。创建好包含认证信息的凭证（用户名密码、API 密钥、OAuth 密钥等）后，你就可以使用对应的应用节点与该服务进行交互。
