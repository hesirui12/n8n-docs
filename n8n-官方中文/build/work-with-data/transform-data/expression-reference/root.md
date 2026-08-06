---
nodeTitle: Root
originalFilePath: data/expression-reference/root.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/root'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/root
layout:
  description:
    visible: false
---
# Root 根变量与全局方法 <a href="#root" id="root"></a>

{% hint style="info" %}
**大白话**：这一页是 n8n 表达式的「总入口」：`$json`/`$binary`/`$input` 取数据，`$('节点名')` 取任意节点的输出，`$now`/`$today` 是当前时间，`$if()`/`$ifEmpty()`/`$max()`/`$min()` 是逻辑判断，`$jmespath()` 用 JMESPath 查询复杂数据，`$vars`/`$workflow`/`$execution` 拿工作流与执行信息。
{% endhint %}

## **`$()`** <a href="#dollar" id="dollar"></a>

**说明：** 返回指定节点的数据

**语法：** $(nodeName)

**返回：** NodeData

**来源：** n8n 自定义功能

**参数：**

  * `nodeName` (String) - 要获取数据的节点名称

## **`$binary`** <a href="#dollarbinary" id="dollarbinary"></a>

**说明：** 返回当前节点、当前数据项的二进制输入数据。是 <code>$input.item.binary</code> 的简写。

**语法：** **`$binary`**

**返回：** Array<BinaryFile>

**来源：** n8n 自定义功能

## **`$execution`** <a href="#dollarexecution" id="dollarexecution"></a>

**说明：** 获取或设置当前执行的元数据（metadata）

**语法：** **`$execution`**

**返回：** ExecData

**来源：** n8n 自定义功能

## **`$fromAI()`** <a href="#dollarfromai" id="dollarfromai"></a>

**说明：** 当某个节点参数的值应该由大语言模型（LLM）提供时使用它。考虑提供一段描述以获得更好的结果。

**语法：** $fromAI(key, description?, type?, defaultValue?)

**返回：** any（任意类型）

**来源：** n8n 自定义功能

**参数：**

  * `key` (String) - 要获取的字段名称。只能包含字母、数字、下划线和连字符。
  * `description` (String) - 可选 - 用来给模型更多上下文，说明它到底该返回什么
  * `type` (String) - 可选 - 返回值的类型。可选值为 <code>string</code>、<code>number</code>、<code>boolean</code>、<code>json</code>、<code>date</code>、<code>datetime</code>。默认是 <code>string</code>。
  * `defaultValue` (any) - 可选 - 当模型没有返回该键时使用的值

**示例：**

  ```javascript
  // Ask the model to provide a name, and use it here
  $fromAI('name')
  ```

  ```javascript
  // Ask the model to provide the age of the person (as a number with a default value of 18), and use it here
  $fromAI('age', 'The age of the person', 'number', 18)
  ```

  ```javascript
  // Ask the model to provide a boolean signifying whether the person is a student (with default value false), and use it here
  $fromAI('isStudent', 'Is the person a student', 'boolean', false)
  ```

## **`$if()`** <a href="#dollarif" id="dollarif"></a>

**说明：** 根据 <code>condition</code> 条件返回两个值之一。类似于 JavaScript 的 <code>?</code> 运算符。

**语法：** $if(condition, valueIfTrue, valueIfFalse)

**返回：** any（任意类型）

**来源：** n8n 自定义功能

**参数：**

  * `condition` (Boolean) - 要做的判断。结果应为 <code>true</code> 或 <code>false</code>
  * `valueIfTrue` (any) - 条件为 true 时返回的值
  * `valueIfFalse` (any) - 条件为 false 时返回的值

**示例：**

  ```javascript
  // Return "Good day" if time is before 5pm, otherwise "Good evening"
  $if($now.hour < 17, "Good day", "Good evening")
  ```

  ```javascript
  // $if() calls can be combined:
  // Return "Good morning" if time is before 10am, "Good day" it's before 5pm, otherwise "Good evening"
  $if($now.hour < 10, "Good morning", $if($now.hour < 17, "Good day", "Good evening"))
  ```

## **`$ifEmpty()`** <a href="#dollarifempty" id="dollarifempty"></a>

**说明：** 如果第一个参数不为空则返回它，否则返回第二个参数。以下情况都算空：<code>””</code>、<code>[]</code>、<code>{}</code>、<code>null</code>、<code>undefined</code>

**语法：** $ifEmpty(value, valueIfEmpty)

**返回：** any（任意类型）

**来源：** n8n 自定义功能

**参数：**

  * `value` (any) - 如果不为空则返回的值
  * `valueIfEmpty` (any) - 当 <code>value</code> 为空时返回的值

**示例：**

  ```javascript
  "Hi " + $ifEmpty(name, "there") // e.g. "Hi Nathan" or "Hi there"
  ```

## **`$input`** <a href="#dollarinput" id="dollarinput"></a>

**说明：** 当前节点的输入数据

**语法：** **`$input`**

**返回：** NodeData

**来源：** n8n 自定义功能

## **`$itemIndex`** <a href="#dollaritemindex" id="dollaritemindex"></a>

**说明：** 当前正在处理的数据项在输入数据项列表中的位置

**语法：** **`$itemIndex`**

**返回：** Number（数字）

**来源：** n8n 自定义功能

## **`$jmespath()`** <a href="#dollarjmespath" id="dollarjmespath"></a>

**说明：** 用 <a href=”/code/cookbook/jmespath/”>JMESPath</a> 表达式从对象（或对象数组）中提取数据。适合查询复杂的、嵌套的对象。如果表达式无效则返回 <code>undefined</code>。

**语法：** $jmespath(obj, expression)

**返回：** any（任意类型）

**来源：** n8n 自定义功能

**参数：**

  * `obj` (Object|Array) - 要从中取数据的对象或对象数组
  * `expression` (String) - 定义要从对象中取什么数据的 <a href=”https://jmespath.org/examples.html”>JMESPath 表达式</a>

**示例：**

  ```javascript
  data = {
    "people": [
      {
        "age": 20,
        "other": "foo",
        "name": "Bob"
      },
      {
        "age": 25,
        "other": "bar",
        "name": "Fred"
      },
      {
        "age": 30,
        "other": "baz",
        "name": "George"
      }
    ]
  }
  
  // Get all names, in an array
  {{ $jmespath(data, '[*].name') }} //=> ["Bob", "Fred", "George"]
  
  // Get the names and ages of everyone under 20
  $jmespath(data, '[?age > `20`].[name, age]') //=> [ ["Fred",25], ["George",30] ]
  
  // Get the name of the first person under 20
  $jmespath($json.people, '[?age > `20`].name | [0]') //=> Fred
  ```

  ```javascript
  data = {
      "reservations": [
        {
          "id": 1,
          "guests": [
            {
              "name": "Nathan",
              "requirements": {
                "room": "double",
                "meal": "vegetarian"
              }
            },
            {
              "name": "Meg",
              "requirements": {
                "room": "single"
              }
            }
          ]
        },
        {
          "id": 2,
          "guests": [
            {
              "name": "Lex",
              "requirements": {
                "room": "double"
              }
            }
          ]
        }
      ]
    }
  
  // Get the names of all the guests in each reservation that require a double room
  $jmespath(data, 'reservations[].guests[?requirements.room==`double`].name')
  ```

## **`$json`** <a href="#dollarjson" id="dollarjson"></a>

**说明：** 返回当前节点、当前数据项的 JSON 输入数据。是 <code>$input.item.json</code> 的简写。 <a href="../../understand-n8ns-data-structure.md">更多信息</a>

**语法：** **`$json`**

**返回：** Object（对象）

**来源：** n8n 自定义功能

## **`$max()`** <a href="#dollarmax" id="dollarmax"></a>

**说明：** 返回给定数字中的最大值

**语法：** $max(num1, num2, …, numN)

**返回：** Number（数字）

**来源：** n8n 自定义功能

**参数：**

  * `num1` (Number) - 第一个要比较的数字
  * `num2` (Number) - 第二个要比较的数字

## **`$min()`** <a href="#dollarmin" id="dollarmin"></a>

**说明：** 返回给定数字中的最小值

**语法：** $min(num1, num2, …, numN)

**返回：** Number（数字）

**来源：** n8n 自定义功能

**参数：**

  * `num1` (Number) - 第一个要比较的数字
  * `num2` (Number) - 第二个要比较的数字

## **`$nodeVersion`** <a href="#dollarnodeversion" id="dollarnodeversion"></a>

**说明：** 当前节点的版本（显示在节点设置面板底部）

**语法：** **`$nodeVersion`**

**返回：** String（字符串）

**来源：** n8n 自定义功能

## **`$now`** <a href="#dollarnow" id="dollarnow"></a>

**说明：** 表示当前时刻的 DateTime。

使用工作流的时区（可以在工作流设置里更改）。

**语法：** **`$now`**

**返回：** DateTime

**来源：** n8n 自定义功能

## **`$pageCount`** <a href="#dollarpagecount" id="dollarpagecount"></a>

**说明：** 该节点已经抓取的结果页数。只在「HTTP Request（HTTP 请求）」节点里可用。

**语法：** **`$pageCount`**

**返回：** Number（数字）

**来源：** n8n 自定义功能

## **`$parameter`** <a href="#dollarparameter" id="dollarparameter"></a>

**说明：** 当前节点的配置设置。也就是你在节点 UI 里填写的那些参数（例如它的 operation 操作类型）。

**语法：** **`$parameter`**

**返回：** NodeParams

**来源：** n8n 自定义功能

## **`$prevNode`** <a href="#dollarprevnode" id="dollarprevnode"></a>

**说明：** 关于当前输入来自哪个节点的信息。

在「Merge（合并）」节点里时，始终使用第一个输入连接。

**语法：** **`$prevNode`**

**返回：** PrevNodeData

**来源：** n8n 自定义功能

## **`$request`** <a href="#dollarrequest" id="dollarrequest"></a>

**说明：** 节点上一次运行时发送的请求对象。只在「HTTP Request（HTTP 请求）」节点里可用。

**语法：** **`$request`**

**返回：** Object（对象）

**来源：** n8n 自定义功能

## **`$response`** <a href="#dollarresponse" id="dollarresponse"></a>

**说明：** 上一次 HTTP 调用返回的响应。只在「HTTP Request（HTTP 请求）」节点里可用。

**语法：** **`$response`**

**返回：** HTTPResponse

**来源：** n8n 自定义功能

## **`$runIndex`** <a href="#dollarrunindex" id="dollarrunindex"></a>

**说明：** 当前节点本次执行的运行（run）索引。从 0 开始。

**语法：** **`$runIndex`**

**返回：** Number（数字）

**来源：** n8n 自定义功能

## **`$secrets`** <a href="#dollarsecrets" id="dollarsecrets"></a>

**说明：** 来自<a href="https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/external-secrets">外部密钥库（external secrets vault）</a>的密钥（如果已配置）。密钥值永远不会显示给用户。只在凭据（credential）字段里可用。

**语法：** **`$secrets`**

**返回：** Object（对象）

**来源：** n8n 自定义功能

## **`$today`** <a href="#dollartoday" id="dollartoday"></a>

**说明：** 表示今天零点（午夜）的 DateTime。

使用实例的时区（除非在工作流设置里覆盖）。

**语法：** **`$today`**

**返回：** DateTime

**来源：** n8n 自定义功能

## **`$vars`** <a href="#dollarvars" id="dollarvars"></a>

**说明：** 工作流可用的<a href="../../../code-in-n8n/define-custom-variables.md">变量（variables）</a>

**语法：** **`$vars`**

**返回：** Object（对象）

**来源：** n8n 自定义功能

## **`$workflow`** <a href="#dollarworkflow" id="dollarworkflow"></a>

**说明：** 关于当前工作流的信息

**语法：** **`$workflow`**

**返回：** WorkflowData

**来源：** n8n 自定义功能
