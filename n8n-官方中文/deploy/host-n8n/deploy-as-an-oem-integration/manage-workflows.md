---
title: 管理工作流（Managing workflows）
description: >-
  在 n8n OEM 部署中，跨多个用户或组织管理工作流的模式。
contentType: howto
nodeTitle: 管理工作流（Manage workflows）
originalFilePath: hosting/oem-deployment/managing-workflows.md
originalUrl: 'https://docs.n8n.io/hosting/oem-deployment/managing-workflows'
url: >-
  https://docs.n8n.io/deploy/host-n8n/deploy-as-an-oem-integration/manage-workflows
layout:
  description:
    visible: false
---

# 管理工作流（Managing workflows）

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6kdIvlPPl0XWVn5z8UJh/" %}

在管理一个跨越多个团队或组织的 n8n OEM 部署时，你很可能需要为多个用户运行相同（或类似）的工作流。有两种方式可以实现：

| 方案 | 优点 | 缺点 |
| -------- | ---- | ---- |
| 为每个用户创建一个工作流 | 对工作流的启动方式没有限制（可以使用任意触发器） | 需要管理多个工作流。 |
| 创建一个工作流，执行时传入该用户的凭据 | 简化了工作流管理（只需修改一个工作流）。 | 运行该工作流时，必须由你的产品来调用它 |

{% hint style="warning" %}
本文档中引用的 API 随时可能发生变化。每次升级版本时，请务必确认这些 API 仍然可用。
{% endhint %}

## 每个用户一个工作流（Workflow per user）

按以下三大步骤操作：

* 获取每个用户的凭据，以及工作流可能需要的任何附加参数。
* 为该用户创建 [n8n 凭据](#user-content-fn-1)[^1]。
* 创建工作流。

### 1. 获取用户凭据（Obtain user credentials）

在这里，你需要收集该用户需要认证的所有节点/服务的凭据，以及该特定工作流所需的任何附加参数。需要哪些凭据和参数，取决于你的工作流和你想要实现的目标。

### 2. 创建用户凭据（Create user credentials）

收集到所有相关的凭据信息后，你就可以在 n8n 中创建相应的服务凭据了。可以通过编辑器界面（Editor UI）或 API 调用来完成。

#### 使用编辑器界面（Using the Editor UI）

1. 从菜单中选择 **凭据（Credentials）** > **新建（New）**。
2. 使用下拉菜单选择要创建的**凭据类型（Credential type）**，例如 *Airtable*。
    ![Create New Credentials drop-down](../../.gitbook/assets/create_new_credentials.png)
3. 在 **创建新凭据（Create New Credentials）** 弹窗中，输入该用户的对应凭据信息，并选择有权使用这些凭据的节点。
    ![Create New Credentials modal](../../.gitbook/assets/create_new_credentials2.png)
4. 点击 **创建（Create）** 完成并保存。

#### 使用 API（Using the API）

编辑器界面使用的前端 API 也可以直接调用，达到同样的效果。API 端点的格式为：`https://<n8n-domain>/rest/credentials`。

例如，要创建上面编辑器界面示例中的凭据，请求为：
```
POST https://<n8n-domain>/rest/credentials
```

请求体（request body）为：
```json
{
   "name":"MyAirtable",
   "type":"airtableApi",
   "nodesAccess":[
      {
         "nodeType":"n8n-nodes-base.airtable"
      }
   ],
   "data":{
      "apiKey":"q12we34r5t67yu"
   }
}
```

响应中会包含新凭据的 ID，创建该用户的工作流时你会用到它：
```json
{
   "data":{
      "name":"MyAirtable",
      "type":"airtableApi",
      "data":{
         "apiKey":"q12we34r5t67yu"
      },
      "nodesAccess":[
         {
            "nodeType":"n8n-nodes-base.airtable",
            "date":"2021-09-10T07:41:27.770Z"
         }
      ],
      "id":"29",
      "createdAt":"2021-09-10T07:41:27.777Z",
      "updatedAt":"2021-09-10T07:41:27.777Z"
   }
}
```

### 3. 创建工作流（Create the workflow）

最佳实践是准备一个"基础"工作流，然后为每个新用户复制一份，并针对该用户修改其中的凭据（以及其他细节）。

你可以通过编辑器界面或 API 调用来复制和定制模板工作流。

#### 使用编辑器界面（Using the Editor UI）

1. 从菜单中选择 **工作流（Workflows）** > **打开（Open）**，打开要复制的模板工作流。
2. 选择 **工作流（Workflows）** > **复制（Duplicate）**，然后为这个新工作流输入名称并点击 **保存（Save）**。
    ![Duplicate workflow](../../.gitbook/assets/duplicate_workflow.png)
3. 更新所有相关节点，让它们使用该用户的凭据（上面创建的）。
4. **保存（Save）** 此工作流，并点击右上角的 **发布（Publish）** 将其发布。

#### 使用 API（Using the API）

1. 使用端点 `https://<n8n-domain>/rest/workflows/<workflow_id>` 获取模板工作流的 JSON：
```
GET https://<n8n-domain>/rest/workflows/1012
```

响应中会包含所选工作流的 JSON 数据：
```json
{
  "data": {
    "id": "1012",
    "name": "Nathan's Workflow",
    "active": false,
    "nodes": [
      {
        "parameters": {},
        "name": "Start",
        "type": "n8n-nodes-base.start",
        "typeVersion": 1,
        "position": [
          130,
          640
        ]
      },
      {
        "parameters": {
          "authentication": "headerAuth",
          "url": "https://internal.users.n8n.cloud/webhook/custom-erp",
          "options": {
            "splitIntoItems": true
          },
          "headerParametersUi": {
            "parameter": [
              {
                "name": "unique_id",
                "value": "recLhLYQbzNSFtHNq"
              }
            ]
          }
        },
        "name": "HTTP Request",
        "type": "n8n-nodes-base.httpRequest",
        "typeVersion": 1,
        "position": [
          430,
          300
        ],
        "credentials": {
          "httpHeaderAuth": "beginner_course"
        }
      },
      {
        "parameters": {
          "operation": "append",
          "application": "appKBGQfbm6NfW6bv",
          "table": "processingOrders",
          "options": {}
        },
        "name": "Airtable",
        "type": "n8n-nodes-base.airtable",
        "typeVersion": 1,
        "position": [
          990,
          210
        ],
        "credentials": {
          "airtableApi": "Airtable"
        }
      },
      {
        "parameters": {
          "conditions": {
            "string": [
              {
                "value1": "={{$json[\"orderStatus\"]}}",
                "value2": "processing"
              }
            ]
          }
        },
        "name": "IF",
        "type": "n8n-nodes-base.if",
        "typeVersion": 1,
        "position": [
          630,
          300
        ]
      },
      {
        "parameters": {
          "keepOnlySet": true,
          "values": {
            "number": [
              {
                "name": "=orderId",
                "value": "={{$json[\"orderID\"]}}"
              }
            ],
            "string": [
              {
                "name": "employeeName",
                "value": "={{$json[\"employeeName\"]}}"
              }
            ]
          },
          "options": {}
        },
        "name": "Set",
        "type": "n8n-nodes-base.set",
        "typeVersion": 1,
        "position": [
          800,
          210
        ]
      },
      {
        "parameters": {
          "functionCode": "let totalBooked = items.length;\nlet bookedSum = 0;\n\nfor(let i=0; i < items.length; i++) {\n  bookedSum = bookedSum + items[i].json.orderPrice;\n}\nreturn [{json:{totalBooked, bookedSum}}]\n"
        },
        "name": "Function",
        "type": "n8n-nodes-base.function",
        "typeVersion": 1,
        "position": [
          800,
          400
        ]
      },
      {
        "parameters": {
          "webhookUri": "https://discord.com/api/webhooks/865213348202151968/oD5_WPDQwtr22Vjd_82QP3-_4b_lGhAeM7RynQ8Js5DzyXrQEnj0zeAQIA6fki1JLtXE",
          "text": "=This week we have {{$json[\"totalBooked\"]}} booked orders with a total value of {{$json[\"bookedSum\"]}}. My Unique ID: {{ $(\"HTTP Request\").params.headerParameters.parameters[0].value }}"
        },
        "name": "Discord",
        "type": "n8n-nodes-base.discord",
        "typeVersion": 1,
        "position": [
          1000,
          400
        ]
      },
      {
        "parameters": {
          "triggerTimes": {
            "item": [
              {
                "mode": "everyWeek",
                "hour": 9
              }
            ]
          }
        },
        "name": "Cron",
        "type": "n8n-nodes-base.cron",
        "typeVersion": 1,
        "position": [
          220,
          300
        ]
      }
    ],
    "connections": {
      "HTTP Request": {
        "main": [
          [
            {
              "node": "IF",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Start": {
        "main": [
          []
        ]
      },
      "IF": {
        "main": [
          [
            {
              "node": "Set",
              "type": "main",
              "index": 0
            }
          ],
          [
            {
              "node": "Function",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Set": {
        "main": [
          [
            {
              "node": "Airtable",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Function": {
        "main": [
          [
            {
              "node": "Discord",
              "type": "main",
              "index": 0
            }
          ]
        ]
      },
      "Cron": {
        "main": [
          [
            {
              "node": "HTTP Request",
              "type": "main",
              "index": 0
            }
          ]
        ]
      }
    },
    "createdAt": "2021-07-16T11:15:46.066Z",
    "updatedAt": "2021-07-16T12:05:44.045Z",
    "settings": {},
    "staticData": null,
    "tags": []
  }
}
```

2. 保存返回的 JSON 数据，并为新用户更新所有相关的凭据和字段。

3. 使用更新后的 JSON 作为请求体，在端点 `https://<n8n-domain>/rest/workflows` 创建新工作流：
```
POST https://<n8n-domain>/rest/workflows/
```

响应中会包含新工作流的 ID，下一步你会用到它。

4. 最后，发布新工作流：
```
PATCH https://<n8n-domain>/rest/workflows/1012
```

在 JSON 请求体中传入额外的 `active` 值：
```json
// ...
"active":true,
"settings": {},
"staticData": null,
"tags": []
```

## 单个工作流（Single workflow）

实现这种方法需要四个步骤：

* 获取每个用户的凭据，以及工作流可能需要的任何附加参数。参见上面的[获取用户凭据](#1-obtain-user-credentials)。
* 为该用户创建 n8n 凭据。参见上面的[创建用户凭据](#2-create-user-credentials)。
* 创建工作流。
* 按需调用工作流。

### 创建工作流（Create the workflow）

这个工作流的具体内容和范围会因具体使用场景而有很大差异，不过有一些设计要点需要记住：

* 该工作流必须由 [Webhook](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.webhook) 节点触发。
* 传入的 webhook 调用必须包含用户的凭据以及工作流所需的其他参数。
* 每个需要用户凭据的节点，都应使用[表达式（expression）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)，让节点的凭据字段读取 webhook 调用中提供的凭据。
* 保存并发布工作流，确保 Webhook 节点选择的是生产环境 URL（production URL）。更多信息请参阅 [webhook 节点](https://app.gitbook.com/s/BKcbOzIWja8NfqKDcqHc/builtin/core-nodes/n8n-nodes-base.webhook) 文档。

### 调用工作流（Call the workflow）

对于每个新用户（或任何需要时的现有用户），调用作为工作流触发器的 webhook，并提供必要的凭据（以及其他工作流参数）。

{% hint style="info" %}
**小白提示**：两种方案怎么选？如果每个用户的工作流差异大、或需要各自独立调试，选"一人一个工作流"；如果所有人跑的是同一套流程、只是账号不同，选"单个工作流 + 动态传凭据"（配合 Webhook 和表达式），维护成本最低——以后改逻辑只需改一处。
{% endhint %}

[^1]: 在 n8n 中，凭据（credentials）存储用于连接特定应用和服务的认证信息。用你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）创建凭据后，就可以使用相应的应用节点与服务交互。
