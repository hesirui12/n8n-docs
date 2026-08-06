---
description: 创建和编辑凭证（Credentials）。
---

# 创建和编辑凭证 / Create and edit credentials

凭证（Credentials）就是安全保存的认证信息，用来把 n8n 工作流连接到外部服务，比如 API 或数据库。

## 创建凭证 / Create a credential

方法一：

1. 点击侧边菜单左上角的 <img src="../.gitbook/assets/universal-resource-button (1).png" alt="universal create resource icon" data-size="line"> **Create**（创建）按钮，然后选择"凭证"（Credential）。
2. 如果你的 n8n 实例支持项目（Project）[^1]，你还需要选择把凭证创建在你的**个人空间**里，还是某个你有权限的**项目**里。如果你用的是社区版，凭证会创建在个人空间里。
3. 选择你要连接的应用或服务。

或者：

1. 在 **Overview**（概览）页面或某个**项目**页面，点击右上角的 <img src="../.gitbook/assets/universal-resource-button (1).png" alt="universal create resource icon" data-size="line"> **Create**（创建）按钮，然后选择"凭证"。
2. 如果在 **Overview** 页面操作，凭证会创建在你的个人空间里；如果在项目里操作，就会创建在那个项目里。
3. 选择你要连接的应用或服务。

你也可以在工作流编辑器中编辑某个节点时，从凭证下拉框里直接新建凭证。

进入凭证弹窗后，填入你的服务需要的详细信息。具体要填什么，可以参考[凭证库](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/credentials)中对应服务的页面。

保存凭证时，n8n 会测试一下，确认凭证能正常使用。

{% hint style="info" %}
**凭证命名**

n8n 默认会把新凭证命名为"_节点名_ account"（例如 "NASA account"）。你可以像重命名节点一样，点击凭证名字来改名。建议把凭证命名为能看出"哪个应用/服务、什么类型、什么用途"的名字。统一的命名规则，会让你以后更容易找到和管理凭证。
{% endhint %}

## 选择凭证类型 / Choose a credential type

当你创建或编辑 OAuth 凭证时，需要选择一种 **Credential type**（凭证类型）：

* **Fixed credential**（固定凭证）：不管是谁运行工作流，用的都是同一个凭证。这是默认的凭证行为。
* **End-user credential**（终端用户凭证）：运行时用的是每个用户自己的凭证，而且这个凭证只有该用户本人能看到和使用。

终端用户凭证让工作流可以用"触发它的人"的凭证来运行，同时保证每个用户的数据对彼此保密。这个选项只会在企业版套餐的 OAuth 凭证上出现。想了解怎么配置，请看[终端用户凭证](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/manage-credentials/end-user-credentials)。

## 允许的 HTTP 请求域名 / Allowed HTTP request domains

**Allowed HTTP Request Domains**（允许的 HTTP 请求域名）这个字段，出现在许多面向 Web API 和服务的 n8n 凭证上。它控制着：当这个凭证被用在 **HTTP Request**（HTTP 请求）节点里时，允许对哪些域名使用该凭证。当凭证用在它自己的专属节点里时，这个字段不起作用。

该字段有三个选项：

* **All**（全部）：凭证可以对任何 URL 使用。
* **Specific Domains**（指定域名）：限制只能对特定域名使用（提供一个逗号分隔的列表，比如 `httpbin.org, api.github.com`）。
* **None**（无）：完全禁止这个凭证在 **HTTP Request** 节点中使用。

这个字段可以防止凭证被滥用，比如防止凭证被发送到预期之外的 URL。

## 凭证中的表达式 / Expressions in credentials

你可以用表达式（Expression）[^2]，让凭证在工作流运行的时候动态设置：

1. 在你的工作流里，找到包含凭证的数据路径。具体路径取决于你的数据里的参数名。要确保当工作流执行到需要凭证的那个节点时，包含凭证的数据是可用的。
2. 创建凭证时，把鼠标悬停在你想要使用表达式的字段上。
3. 打开 **Expression**（表达式）开关。
4. 输入你的表达式。

### 示例工作流 / Example workflow

{% @n8n-blocks/n8n-workflow-demo content="%7B%0A%20%20%22name%22%3A%20%22Dynamic%20credentials%20using%20expressions%22%2C%0A%20%20%22nodes%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22path%22%3A%20%22da4071f2-7550-4dae-aa48-8bced4291643%22%2C%0A%20%20%20%20%20%20%20%20%22formTitle%22%3A%20%22Test%20dynamic%20credentials%22%2C%0A%20%20%20%20%20%20%20%20%22formDescription%22%3A%20%22This%20form%20is%20for%20testing%20an%20n8n%20workflow%20that%20demonstrates%20setting%20credentials%20with%20expressions.%22%2C%0A%20%20%20%20%20%20%20%20%22formFields%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22values%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22fieldLabel%22%3A%20%22Enter%20your%20NASA%20API%20key%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22requiredField%22%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%22responseMode%22%3A%20%22responseNode%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%22cc6f2b1e-0ed0-4d22-8a44-d7223ba283b4%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22n8n%20Form%20Trigger%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.formTrigger%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%202%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%20560%2C%0A%20%20%20%20%20%20%20%20520%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22webhookId%22%3A%20%22da4071f2-7550-4dae-aa48-8bced4291643%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22additionalFields%22%3A%20%7B%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%22ef336bae-3d4f-419c-ab5c-b9f0de89f170%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22NASA%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.nasa%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%201%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%20900%2C%0A%20%20%20%20%20%20%20%20520%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%22credentials%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22nasaApi%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22QDDBOZOD6k3ijL5t%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22name%22%3A%20%22NASA%20account%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22respondWith%22%3A%20%22redirect%22%2C%0A%20%20%20%20%20%20%20%20%22redirectURL%22%3A%20%22%3D%7B%7B%20%24json.url%20%7D%7D%22%2C%0A%20%20%20%20%20%20%20%20%22options%22%3A%20%7B%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%22143bcdb6-aca0-4dd8-9204-9777271cd230%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22Respond%20to%20Webhook%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.respondToWebhook%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%201%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%201220%2C%0A%20%20%20%20%20%20%20%20520%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22content%22%3A%20%22This%20workflow%20shows%20how%20to%20set%20credentials%20dynamically%20using%20expressions.%5Cn%5Cn%5CnFirst%2C%20set%20up%20your%20NASA%20credential%3A%20%5Cn%5Cn1.%20Create%20a%20new%20NASA%20credential.%5Cn1.%20Hover%20over%20%2A%2AAPI%20Key%2A%2A.%5Cn1.%20Toggle%20%2A%2AExpression%2A%2A%20on.%5Cn1.%20In%20the%20%2A%2AAPI%20Key%2A%2A%20field%2C%20enter%20%60%7B%7B%20%24json%5B%5C%22Enter%20your%20NASA%20API%20key%5C%22%5D%20%7D%7D%60.%5Cn%5Cn%5CnThen%2C%20test%20the%20workflow%3A%5Cn%5Cn1.%20Get%20an%20%5BAPI%20key%20from%20NASA%5D%28https%3A%2F%2Fapi.nasa.gov%2F%29%5Cn2.%20Select%20%2A%2AExecute%20workflow%2A%2A%5Cn3.%20Enter%20your%20key%20using%20the%20form.%5Cn4.%20The%20workflow%20runs%20and%20sends%20you%20to%20the%20NASA%20picture%20of%20the%20day.%5Cn%5Cn%5CnFor%20more%20information%20on%20expressions%2C%20refer%20to%20%5Bn8n%20documentation%20%7C%20Expressions%5D%28https%3A%2F%2Fdocs.n8n.io%2Fcode%2Fexpressions%2F%29.%22%2C%0A%20%20%20%20%20%20%20%20%22height%22%3A%20564%2C%0A%20%20%20%20%20%20%20%20%22width%22%3A%20322%2C%0A%20%20%20%20%20%20%20%20%22color%22%3A%204%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%220a0dee23-fa16-4f09-b5e0-856f47fb53d0%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22Sticky%20Note%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.stickyNote%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%201%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%20120%2C%0A%20%20%20%20%20%20%20%20140%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22content%22%3A%20%22User%20submits%20an%20API%20key%20using%20the%20form%22%2C%0A%20%20%20%20%20%20%20%20%22height%22%3A%20319%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%22dd766e32-334d-4e46-9daa-7800b134a3a5%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22Sticky%20Note1%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.stickyNote%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%201%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%20500%2C%0A%20%20%20%20%20%20%20%20380%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22content%22%3A%20%22The%20workflow%20passes%20the%20key%20to%20the%20NASA%20node.%20You%20can%20reference%20the%20value%20using%20the%20expression%20%60%24json%5B%5C%22Enter%20your%20NASA%20API%20key%5C%22%5D%60.%20This%20is%20also%20available%20to%20the%20node%20credential.%20%22%2C%0A%20%20%20%20%20%20%20%20%22height%22%3A%20319%2C%0A%20%20%20%20%20%20%20%20%22color%22%3A%205%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%223d8f02e6-e029-41dc-89ad-0f5cffe09348%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22Sticky%20Note2%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.stickyNote%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%201%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%20820%2C%0A%20%20%20%20%20%20%20%20380%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22parameters%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22content%22%3A%20%22The%20Respond%20to%20Webhook%20node%20controls%20the%20form%20response%20%28in%20this%20example%2C%20redirecting%20the%20user%20to%20an%20image%29%22%2C%0A%20%20%20%20%20%20%20%20%22height%22%3A%20319%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22id%22%3A%20%22096eb6ab-c276-4687-9dc0-50e16a8f709a%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22Sticky%20Note3%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22n8n-nodes-base.stickyNote%22%2C%0A%20%20%20%20%20%20%22typeVersion%22%3A%201%2C%0A%20%20%20%20%20%20%22position%22%3A%20%5B%0A%20%20%20%20%20%20%20%201140%2C%0A%20%20%20%20%20%20%20%20380%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22pinData%22%3A%20%7B%7D%2C%0A%20%20%22connections%22%3A%20%7B%0A%20%20%20%20%22n8n%20Form%20Trigger%22%3A%20%7B%0A%20%20%20%20%20%20%22main%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22node%22%3A%20%22NASA%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22main%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22index%22%3A%200%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22NASA%22%3A%20%7B%0A%20%20%20%20%20%20%22main%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22node%22%3A%20%22Respond%20to%20Webhook%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22main%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22index%22%3A%200%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A" url="https://raw.githubusercontent.com/n8n-io/n8n-docs/refs/heads/main/docs/_workflows/credentials/dynamic_credentials_using_expressions.json" %}

#### 使用示例 / Using the example

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/vKIIq31qrlay3ovXTvUj/" %}

[^1]: n8n 项目（Project）可以让你把工作流、变量和凭证分到不同的组里，方便管理。项目还能让团队更容易协作，共享和隔离相关资源。
[^2]: 在 n8n 中，表达式允许你通过执行 JavaScript 代码来动态填充节点参数。除了提供静态值，你还可以用 n8n 表达式语法，根据之前节点的数据、其他工作流或你的 n8n 环境来定义值。
