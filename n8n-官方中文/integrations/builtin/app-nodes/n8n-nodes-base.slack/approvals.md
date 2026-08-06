---
description: >-
  了解审批人如何通过 Slack 节点的「发送并等待响应」（Send and Wait for
  Response）操作，直接在 Slack 里批准或拒绝 n8n 工作流的操作。
layout:
  description:
    visible: false
---

# Slack 中的审批（Approvals in Slack）

{% hint style="info" %}
**大白话**：平时 n8n 流程要等人批准时，默认是发一个链接按钮，点开跳到浏览器里的 n8n 页面确认。现在这个新功能让你**直接在 Slack 聊天窗口里点「批准 / 拒绝」按钮**就行，不用再跳浏览器。本页教你怎么配置、怎么用、出问题了怎么排查。适合做「人工审批」类流程（比如报销、发版、内容审核）。
{% endhint %}

{% hint style="info" %}
**该功能处于预览阶段（preview）**

预览功能在后续版本中可能发生变化。请避免在生产工作流中依赖它们。n8n 正在逐步推出此功能，因此你的实例上可能还不可用。
{% endhint %}

使用 **Message（消息）** > **Send and Wait for Response（发送并等待响应）** 操作，审批人可以直接在 Slack 内批准或拒绝，不会打开浏览器页面：只要有人一回复，工作流就继续运行，输出中会记录是谁回复的。

## 它与链接按钮的区别

| 对比项 | 链接按钮（默认方式） | Slack 内审批 |
|------|------------------------|--------------------|
| 决策发生在哪里 | 在浏览器中打开 n8n 页面 | 在 Slack 里点一下 |
| 谁可以响应 | 任何能点开链接的人 | 只有你列出的审批人可以（列表留空则任何能看到消息的人都能响应）。其他人会收到一条私密提示（措辞可自定义），工作流继续等待。 |
| 输出内容 | `approved` 和 `respondedAt` | 额外加上响应人的信息（ID、姓名、用户名、邮箱）以及所在频道和消息 |
| 决策后的消息 | 保持不变。按钮仍可点击，但之后点击会显示「无需操作」页面，以第一个决策为准。 | 由你选择：显示结果并移除按钮（默认）、只移除按钮、或保持消息不变 |
| 安全性 | 签名链接：没人能篡改 URL 或动作，但任何拿到链接的人都能响应，n8n 无法区分是谁点击的 | n8n 会验证每个回调都来自 Slack（使用 Slack 的请求签名），并核对响应人是否在你的审批人列表里 |

## 使用前提

要在 Slack 内审批，你需要：

- 你的 n8n 实例能通过公网 HTTPS 被 Slack 访问。有人响应时 Slack 会回调你的实例，所以跑在 localhost 上的实例不行。
- 一个 Slack 凭证，使用 API 访问令牌或 OAuth2 均可。
- 你的 Slack 凭证里的 **Signature Secret（签名密钥）** 字段必须填上 Slack App 的 Signing Secret（签名密钥），它在 **Settings（设置）** > **Basic Information（基本信息）** 里。没有它，按钮会渲染出来，但点击不会恢复工作流。
- 将 **Response Type（响应类型）** 设置为 **Approval（审批）**。
- `users:read` 和 `users:read.email` 权限范围。响应人的 ID、姓名、用户名来自 Slack 的交互数据；邮箱来自 Slack API，需要这些权限范围。缺少权限范围只是意味着输出里没有邮箱。如果你使用的是此功能出现之前创建的 OAuth2 凭证，请重新连接，以便获取 `users:read.email` 权限范围。

## 配置审批

### 1. 创建 Slack App 和凭证

按照 [使用 API 访问令牌](../../credentials/slack.md#using-api-access-token) 或 [使用 OAuth2](../../credentials/slack.md#using-oauth2) 创建 Slack App 并设置凭证。配置 App 的权限范围时，加上 `users:read` 和 `users:read.email`，这样输出里就能包含响应人的邮箱。

### 2. 开启交互功能（Interactivity）

1. 打开 Slack 的 [Your Apps](https://api.slack.com/apps) 页面，选择你要用的 App。
2. 进入 **Features（功能）** > **Interactivity & Shortcuts（交互与快捷方式）**，打开 **Interactivity（交互）** 开关。
3. 在 **Request URL（请求 URL）** 里填写 `https://<your-n8n-instance>/webhook-waiting-slack`。该实例上的所有工作流共用这一个 URL。如果你修改过 `N8N_ENDPOINT_WEBHOOK_WAIT` 环境变量，请相应调整路径。
4. 点击 **Save Changes（保存更改）**。

{% hint style="info" %}
Slack 每个 App 只允许一个 **Request URL**，所以一个 Slack App 只服务一个 n8n 实例。
{% endhint %}

### 3. 把签名密钥填进凭证

1. 在 Slack App 中，进入 **Settings（设置）** > **Basic Information（基本信息）**，复制 **App Credentials（应用凭证）** 区域的 **Signing Secret（签名密钥）**。
2. 在 n8n 中，把它粘贴到 Slack 凭证的 **Signature Secret（签名密钥）** 字段。

n8n 用签名密钥来验证每个回调确实来自 Slack。验证失败的回调会被 n8n 拒绝，工作流继续等待。

### 4. 配置节点

在 Slack 节点中，选择 **Message（消息）** 资源的 **Send and Wait for Response（发送并等待响应）** 操作，并把 **Response Type（响应类型）** 设置为 **Approval（审批）**。之后下面的设置会出现在 **Advanced Interactivity（高级交互）** 分区标题下。

- **Capture Who Responded（记录谁响应了）**：打开这个开关，审批按钮会变成 Slack 交互式按钮，并记录谁响应了。打开后才会出现其余设置。
- **Restrict Who Can Approve（限制谁能审批）**：选择允许操作的用户。也可以用表达式指定用户 ID。不在列表里的人点击后会收到私密提示，工作流继续等待。
- **Unauthorized Reply（未授权回复）**：给点击但不在审批人列表里的人看的私密（临时）消息。默认文案是 `You are not authorized to respond to this request.`
- **After Decision（决策后）**：有人批准或拒绝后，原始 Slack 消息会怎样处理。
    - **Show Outcome and Remove Buttons（显示结果并移除按钮）**（默认）：移除按钮，并加一行文字说明决策和响应人。
    - **Remove Buttons Only（只移除按钮）**：移除按钮，但不加结果说明。
    - **Keep Message Unchanged（保持消息不变）**：消息保持原样，按钮也在。之后的点击不会改变已记录的决策（以第一个为准）。

如果审批人列表留空，任何能看到这条消息的人都可以批准或拒绝。在频道里，这意味着所有成员。列表控制的是「谁能响应」，不是「谁能看到请求」，所以敏感的审批请发到私密频道或私聊里。

### 5. 测试

执行工作流，在 Slack 里点 **Approve（批准）**，然后查看节点输出。

## 节点输出

当有人在 Slack 里响应时，节点会输出决策和响应人：

```json
{
	"data": {
		"approved": true,
		"respondedAt": "2025-07-13T12:34:56.000Z",
		"channel": "C0123ABC456",
		"messageId": "1752407696.123456",
		"responder": {
			"id": "U0123ABC456",
			"name": "Jo Doe",
			"username": "jo.doe",
			"email": "jo@example.com",
			"source": "slack"
		}
	}
}
```

使用链接按钮时，输出只包含 `approved` 和 `respondedAt`。

## 什么时候还是走链接按钮

以下任一情况成立时，节点会保持原来的行为（发送打开 n8n 确认页面的按钮）：

- 你的实例上还没有启用这个功能。
- **Response Type（响应类型）** 是 **Free Text（自由文本）** 或 **Custom Form（自定义表单）**。
- **Capture Who Responded（记录谁响应了）** 是关闭的。

已有工作流无需改动，继续照常工作。

## 故障排查

- **按钮没反应，或 Slack 显示警告**：**Request URL（请求 URL）** 不对、你的实例没有通过 HTTPS 公网可达，或 **Signature Secret（签名密钥）** 缺失/错误。Slack 对「回调被拒」和「URL 不可达」显示同样的警告。
- **有人收到「未授权」提示**：该用户不在 **Restrict Who Can Approve（限制谁能审批）** 列表里。提示文案来自 **Unauthorized Reply（未授权回复）**。
- **明明有人响应了，工作流却不继续**：**Signature Secret（签名密钥）** 缺失或与 App 的 **Signing Secret（签名密钥）** 不匹配。n8n 会拒绝无法验证的回调，工作流继续等待。
