---
contentType: explanation
nodeTitle: Custom API actions for existing nodes
originalFilePath: integrations/custom-operations.md
originalUrl: 'https://docs.n8n.io/integrations/custom-operations'
url: 'https://docs.n8n.io/integrations/builtin/custom-api-actions-for-existing-nodes'
layout:
  description:
    visible: false
---

# 现有节点的自定义 API 操作（Custom API operations）

{% hint style="info" %}
**大白话**：n8n 里每个官方节点（比如 Asana 节点）能做的操作是固定的、有限的。如果你需要做一个官方节点不支持的 API 调用，不用急——你可以在 HTTP Request 节点里「借用」你已经建好的凭据（比如你的 Asana 登录凭据），直接调用该服务的 API 来完成这个操作，不用重新配一遍身份认证。
{% endhint %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/k23mQunNshTkLRuOqark/" %}

## 预定义凭据类型（Predefined credential types）

预定义凭据类型，指的是 n8n 中已经存在的凭据。在 HTTP Request 节点中，你可以使用预定义凭据类型，而不必使用通用凭据（generic credentials）。

举个例子：你创建了一个 Asana 凭据，用来配合 Asana 节点使用。后来，你想用 Asana 的 API 做一个 Asana 节点不支持的操作。此时，你可以在 HTTP Request 节点中直接使用已有的 Asana 凭据来完成这个操作，无需额外配置身份认证。

### 使用预定义凭据类型（Using predefined credential types）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/ZmZC9v8B1NG5lgRY44yF/" %}


### 凭据作用域（Credential scopes）

某些现有的凭据类型有特定的作用域：也就是它们只能在哪些端点上使用。当你选择凭据类型时，n8n 会就此给出提示。

例如，按照 [使用预定义凭据类型](#using-predefined-credential-types) 中的步骤操作，并在 **Credential Type（凭据类型）** 中选择 **Google Calendar OAuth2 API**。n8n 会显示一个提示框，列出你可以使用该凭据类型的两个端点：

![The scopes box](../.gitbook/assets/scopes.png)
