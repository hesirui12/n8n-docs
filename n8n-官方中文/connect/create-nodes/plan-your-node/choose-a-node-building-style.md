---
contentType: explanation
nodeTitle: Choose a node building style
originalFilePath: integrations/creating-nodes/plan/choose-node-method.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/plan/choose-node-method'
url: >-
  https://docs.n8n.io/connect/create-nodes/plan-your-node/choose-a-node-building-style
layout:
  description:
    visible: false
---

# 选择你的节点构建方式（Choose your node building approach）

n8n 有两种节点构建风格：声明式（declarative）和编程式（programmatic）。

大多数节点你都应该使用**声明式**风格。这种风格：

* 使用基于 JSON 的语法，写起来更简单，引入 bug（程序缺陷）的风险更低。
* 更面向未来（对未来版本兼容性更好）。
* 支持与 REST API 集成。

**编程式**风格则更加冗长。在以下情况，你必须使用编程式风格：

* 触发器节点（Trigger nodes）
* 任何不是基于 REST 的节点。这包括需要调用 GraphQL API 的节点，以及需要使用外部依赖的节点。
* 任何需要对输入数据进行转换的节点。
* 需要完整版本控制（full versioning）的节点。更多关于版本控制类型的信息，请参阅[节点版本控制](../build-your-node/reference/versioning.md)。

{% hint style="info" %}
**小白提示：一句话总结两种风格**

- **声明式**：你只「声明」节点长什么样（用什么字段、点哪个按钮发什么请求），n8n 自动帮你干活。适合大多数情况，代码量少、不容易出错。
- **编程式**：你亲手写 `execute()` 方法，用代码精确控制「读什么参数 → 拼什么请求 → 怎么处理返回数据」。灵活性最高，但代码更多、更复杂。

记住一个简单法则：**能用声明式就用声明式**，只有文档里列出的那 4 种情况（触发器、非 REST、需要转换数据、需要完整版本控制）才被迫上编程式。
{% endhint %}

## 数据处理上的差异（Data handling differences）

声明式风格和编程式风格最主要的区别，在于它们如何处理输入数据以及如何构建 API 请求。编程式风格需要一个 `execute()` 方法，它会读取输入数据和参数，然后构建请求。声明式风格则是通过 `operations` 对象中的 `routing` 键来完成这件事。更多关于节点参数和 `execute()` 方法的信息，请参阅[节点基础文件](../build-your-node/reference/base-files/README.md)。

## 语法上的差异（Syntax differences）

为了理解声明式风格和编程式风格的区别，请对比下面两段代码。这个例子创建了一个 SendGrid 集成的简化版本，名为 "FriendGrid"。下面的代码片段并不完整：它们只是用来突出两种节点构建风格之间的差异。

编程式风格（programmatic style）：

```js
import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IRequestOptions,
} from 'n8n-workflow';

// Create the FriendGrid class
export class FriendGrid implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'FriendGrid',
    name: 'friendGrid',
    . . .
    properties: [
      {
        displayName: 'Resource',
        . . .
      },
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
          show: {
              resource: [
              'contact',
              ],
          },
        },
        options: [
          {
            name: 'Create',
            value: 'create',
            description: 'Create a contact',
          },
        ],
        default: 'create',
        description: 'The operation to perform.',
      },
      {
        displayName: 'Email',
        name: 'email',
        . . .
      },
      {
        displayName: 'Additional Fields',
        // Sets up optional fields
      },
    ],
};

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    let responseData;
    const resource = this.getNodeParameter('resource', 0) as string;
    const operation = this.getNodeParameter('operation', 0) as string;
    //Get credentials the user provided for this node
    const credentials = await this.getCredentials('friendGridApi') as IDataObject;

    if (resource === 'contact') {
      if (operation === 'create') {
      // Get email input
      const email = this.getNodeParameter('email', 0) as string;
      // Get additional fields input
      const additionalFields = this.getNodeParameter('additionalFields', 0) as IDataObject;
      const data: IDataObject = {
          email,
      };

      Object.assign(data, additionalFields);

      // Make HTTP request as defined in https://sendgrid.com/docs/api-reference/
      const options: IRequestOptions = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${credentials.apiKey}`,
        },
        method: 'PUT',
        body: {
            contacts: [
            data,
            ],
        },
        url: `https://api.sendgrid.com/v3/marketing/contacts`,
        json: true,
      };
      responseData = await this.helpers.httpRequest(options);
      }
    }
    // Map data to n8n data
    return [this.helpers.returnJsonArray(responseData)];
  }
}
```

{% hint style="info" %}
**代码讲解（小白版）**

上面这段编程式代码的流程是：先声明节点的各种字段（`properties`）→ 然后在 `execute()` 方法里用 `this.getNodeParameter()` 逐个读取用户填写的参数（比如 `resource` 是 contact、`operation` 是 create、`email` 是什么）→ 再读取用户配置的凭据（`getCredentials`）→ 手动拼装一个 HTTP 请求对象（`options`）→ 用 `this.helpers.httpRequest()` 真正发出去 → 最后把返回数据包装成 n8n 的标准数据格式（`returnJsonArray`）输出。整个过程「读取、拼装、发送、包装」全靠你手写。
{% endhint %}

声明式风格（declarative style）：

```js
import { INodeType, INodeTypeDescription } from 'n8n-workflow';

// Create the FriendGrid class
export class FriendGrid implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'FriendGrid',
    name: 'friendGrid',
    . . .
    // Set up the basic request configuration
    requestDefaults: {
      baseURL: 'https://api.sendgrid.com/v3/marketing'
    },
    properties: [
      {
        displayName: 'Resource',
        . . .
      },
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
          show: {
            resource: [
              'contact',
            ],
          },
        },
        options: [
          {
            name: 'Create',
            value: 'create',
            description: 'Create a contact',
            // Add the routing object
            routing: {
              request: {
                method: 'POST',
                url: '=/contacts',
                send: {
                  type: 'body',
                  properties: {
                    email: {{$parameter["email"]}}
                  }
                }
              }
            },
            // Handle the response to contact creation
            output: {
              postReceive: [
                {
                  type: 'set',
                  properties: {
                    value: '={{ { "success": $response } }}'
                  }
                }
              ]
            }
          },
        ],
        default: 'create',
        description: 'The operation to perform.',
      },
      {
        displayName: 'Email',
        . . .
      },
      {
        displayName: 'Additional Fields',
        // Sets up optional fields
      },
    ],
  }
  // No execute method needed
}
```

{% hint style="info" %}
**代码讲解（小白版）**

对比上面这段声明式代码：你看到它**根本没有 `execute()` 方法**，最后一行注释写着 "No execute method needed"（不需要 execute 方法）。它是怎么发请求的？——靠 `routing` 对象：告诉 n8n 「当用户选择 create 这个操作时，就向 `/contacts` 发一个 POST 请求，并把 `email` 参数放进请求体里」。返回数据怎么处理？——靠 `output` 里的 `postReceive` 配置。也就是说，**你只需要「描述」每一步要做什么，剩下的执行细节全部交给 n8n 引擎**。代码明显更短、更不容易写错。
{% endhint %}
