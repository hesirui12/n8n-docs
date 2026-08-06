---
title: HTTP Request 节点文档
description: >-
  学习如何在 n8n 中使用 HTTP Request 节点。按照技术文档，把 HTTP Request 节点集成到你的工作流中。
contentType:
  - integration
  - reference
priority: critical
nodeTitle: n8n-nodes-base.httprequest
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.httprequest/index.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest'
url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest'
layout:
  description:
    visible: false
---

# HTTP Request 节点

{% hint style="info" %}
**大白话**：HTTP Request（HTTP 请求）节点是 n8n 里最万能的节点之一。任何一个软件只要提供了 REST API（一套用网址来读写数据的接口），你就能用这个节点去「问它要数据」或「给它发数据」。它相当于一个不用写代码的「网页请求工具」。你可以自己配置参数，也可以把别人给的一段 curl 命令粘进来，n8n 自动帮你填好。它还能挂在 AI 智能体（AI agent）下面当「工具」用。
{% endhint %}

HTTP Request 节点是 n8n 中用途最广的节点之一。它允许你发出 HTTP 请求，从任何提供 REST API 的应用或服务查询数据。你可以把 HTTP Request 节点当作普通节点使用，也可以把它挂到 [AI 智能体（AI agent）](../../cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent.md) 上当作 [工具（tool）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/understand-ai-components/how-tools-work){ data-preview } 使用。

使用这个节点时，你实际上是在创建一个 REST API 调用。你需要对基本的 API 术语和概念有一些了解。

创建 HTTP 请求有两种方式：配置 [节点参数](#node-parameters)，或 [导入 curl 命令](#import-curl-command)。

{% hint style="info" %}
**凭据（Credentials）**

关于如何设置身份认证，请参阅 [HTTP Request 凭据（HTTP Request credentials）](../../credentials/httprequest.md)。
{% endhint %}

## 节点参数（Node parameters）

### Method（方法）

选择用于请求的方法：

- DELETE
- GET
- HEAD
- OPTIONS
- PATCH
- POST
- PUT

### URL（网址）

输入你要使用的端点（endpoint）地址。

### Authentication（身份认证）

当 **Predefined Credential Type（预定义凭据类型）** 选项可用时，n8n 建议优先使用它。相比配置通用凭据，它提供了一种更简单的设置和管理凭据的方式。

#### 预定义凭据（Predefined credentials）

用于 n8n 支持的集成（包括内置节点和社区节点）的凭据。在做自定义操作时使用 **Predefined Credential Type（预定义凭据类型）** 无需额外设置。更多信息请参阅 [自定义 API 操作（Custom API operations）](../../custom-api-actions-for-existing-nodes.md)。

#### 通用凭据（Generic credentials）

用于 n8n 不支持的集成的凭据。你需要手动配置认证过程，包括指定所需的 API 端点、必要的参数以及认证方式。

你可以选择以下方法之一：

* Basic auth（基本认证）
* Custom auth（自定义认证）
* Digest auth（摘要认证）
* Header auth（请求头认证）
* OAuth1 API
* OAuth2 API
* Query auth（查询参数认证）

关于每种凭据类型的更多设置信息，请参阅 [HTTP request credentials（HTTP 请求凭据）](../../credentials/httprequest.md)。

### Send Query Parameters（发送查询参数）

查询参数相当于 HTTP 请求上的「过滤器」。如果你交互的 API 支持查询参数，并且你的请求需要过滤，就打开这个选项。

使用以下任一选项来**指定你的查询参数（Specify your query parameters）**：

* **Using Fields Below（使用下方字段）**：输入 **Query Parameters（查询参数）** 的 **Name（名称）**/**Value（值）** 对。要输入更多查询参数的名称/值对，请选择 **Add Parameter（添加参数）**。名称是要过滤的字段名，值就是过滤值。
* **Using JSON（使用 JSON）**：输入 **JSON** 来定义你的查询参数。

详细的用法请参考你所使用服务的 API 文档。

### Send Headers（发送请求头）

使用这个参数向请求发送请求头（Headers）。请求头包含关于请求的元数据或上下文信息。

使用以下任一选项来**指定请求头（Specify Headers）**：

* **Using Fields Below（使用下方字段）**：输入 **Header Parameters（请求头参数）** 的 **Name（名称）**/**Value（值）** 对。要输入更多请求头参数的名称/值对，请选择 **Add Parameter（添加参数）**。名称是你要设置的请求头，值是你想传给该请求头的值。
* **Using JSON（使用 JSON）**：输入 **JSON** 来定义你的请求头参数。

详细的用法请参考你所使用服务的 API 文档。

### Send Body（发送请求体）

如果你的 API 请求需要发送请求体（body），请打开这个选项。

然后选择与你要发送的请求体格式最匹配的 **Body Content Type（请求体内容类型）**。

#### Form URLencoded（表单 URL 编码）

使用这个选项，以 `application/x-www-form-urlencoded` 格式发送请求体。

使用以下任一选项来**指定请求体（Specify Body）**：

* **Using Fields Below（使用下方字段）**：输入 **Body Parameters（请求体参数）** 的 **Name（名称）**/**Value（值）** 对。要输入更多请求体参数的名称/值对，请选择 **Add Parameter（添加参数）**。名称应该是表单字段名，值是你想为该字段设置的内容。
* **Using Single Field（使用单个字段）**：在单个 **Body（请求体）** 参数中输入你的名称/值对，格式为 `fieldname1=value1&fieldname2=value2`。

详细的用法请参考你所使用服务的 API 文档。

#### Form-Data（表单数据）

使用这个选项，以 `multipart/form-data` 格式发送请求体。

通过选择 **Parameter Type（参数类型）** 来配置你的 **Body Parameters（请求体参数）**：

* 选择 **Form Data（表单数据）** 来输入 **Name（名称）**/**Value（值）** 对。
* 选择 **n8n Binary File（n8n 二进制文件）** 来从节点可以访问的文件中提取请求体。
    * **Name（名称）**：输入要设置的字段的 ID。
    * **Input Data Field Name（输入数据字段名）**：输入包含你要处理的二进制文件数据的传入字段名。

选择 **Add Parameter（添加参数）** 可以输入更多参数。

详细的用法请参考你所使用服务的 API 文档。

#### JSON

使用这个选项以 JSON 格式发送请求体。

使用以下任一选项来**指定请求体（Specify Body）**：

* **Using Fields Below（使用下方字段）**：输入 **Body Parameters（请求体参数）** 的 **Name（名称）**/**Value（值）** 对。要输入更多请求体参数的名称/值对，请选择 **Add Parameter（添加参数）**。
* **Using JSON（使用 JSON）**：输入 **JSON** 来定义你的请求体。

详细的用法请参考你所使用服务的 API 文档。

#### n8n Binary File（n8n 二进制文件）

使用这个选项，把存储在 n8n 中的文件内容作为请求体发送。

在 **Input Data Field Name（输入数据字段名）** 中输入包含该文件的传入字段名。

关于如何格式化文件，请参考你所使用服务的 API 文档。

#### Raw（原始数据）

使用这个选项在请求体中发送原始数据。

* **Content Type（内容类型）**：输入用于原始请求体内容的 `Content-Type` 请求头。完整的 MIME 内容类型列表，请参考 IANA 的 [Media types（媒体类型）](https://www.iana.org/assignments/media-types/media-types.xhtml) 文档。
* **Body（请求体）**：输入要发送的原始请求体内容。

详细的用法请参考你所使用服务的 API 文档。

## 节点选项（Node options）

选择 **Add Option（添加选项）** 来查看并选择这些选项。除特别说明外，所有参数都可以使用这些选项。

### Array Format in Query Parameters（查询参数中的数组格式）

{% hint style="info" %}
**选项可用性**

只有当你打开 **Send Query Parameters（发送查询参数）** 时，这个选项才可用。
{% endhint %}

使用这个选项来控制查询参数中数组的格式。从以下选项中选择：

* **No Brackets（无方括号）**：数组会以数组中每个项目的 name=value 格式显示，例如：`foo=bar&foo=qux`。
* **Brackets Only（仅方括号）**：节点会在每个数组名称后面加上方括号，例如：`foo[]=bar&foo[]=qux`。
* **Brackets with Indices（带索引的方括号）**：节点会在每个数组名称后面加上带索引值的方括号，例如：`foo[0]=bar&foo[1]=qux`。

关于应该使用哪个选项，请参考你所使用服务的 API 文档。

### Batching（批处理）

控制如何对大量输入项目进行分批：

* **Items per Batch（每批项目数）**：输入每个批次中包含的输入项目数量。
* **Batch Interval（批处理间隔）**：输入每批请求之间的等待时间，单位为毫秒。输入 0 表示没有批处理间隔。

### Ignore SSL Issues（忽略 SSL 问题）

默认情况下，只有 SSL 证书校验成功后，n8n 才会下载响应。如果你希望在 SSL 证书校验失败的情况下也下载响应，请打开这个选项。

### Lowercase Headers（请求头小写化）

选择是否将请求头名称转为小写（开启，默认）还是不转（关闭）。

### Redirects（重定向）

选择是否跟随重定向（默认开启）还是不跟随（关闭）。如果开启，请在 **Max Redirects（最大重定向次数）** 中输入请求应该跟随的最大重定向次数。

### Response（响应）

使用这个选项来设置关于预期 API 响应的一些细节，包括：

* **Include Response Headers and Status（包含响应请求头和状态）**：默认情况下，节点只返回响应体。打开这个选项可以返回完整的响应（请求头和响应状态码）以及响应体。
* **Never Error（永不报错）**：默认情况下，只有当响应返回 2xx 状态码时，节点才视为成功。打开这个选项后，无论返回什么状态码，节点都会视为成功。
* **Response Format（响应格式）**：选择数据返回的格式。从以下选项中选择：
    * **Autodetect（自动检测）**（默认）：节点会根据返回的数据自动检测并格式化响应。
    * **File（文件）**：选择这个选项把响应放入一个文件。在 **Put Output in Field（输出字段）** 中输入你想让文件返回的字段名。
    * **JSON**：选择这个选项将响应格式化为 JSON。
    * **Text（文本）**：选择这个选项将响应格式化为纯文本。在 **Put Output in Field（输出字段）** 中输入你想让文件返回的字段名。

### Pagination（分页）

使用这个选项对结果进行分页，当 API 单次调用无法返回全部查询结果时非常有用。

{% hint style="info" %}
**先检查 API 数据**

分页的某些选项需要你了解所使用的 API 返回的数据。在设置分页之前，请先查看 API 文档，或者做一次不带分页的 API 调用，看看它返回的数据长什么样。
{% endhint %}

<details>

<summary>理解分页（Understand pagination）</summary>

分页是指把一大组数据拆分成多页。每一页的数据量取决于你设置的限制。

举个例子：你对一个名为 `/users` 的端点发起 API 调用。API 想返回 300 个用户的信息，但一次响应发送这么多数据太多了。

如果 API 支持分页，你可以分批增量获取数据。为此，你调用 `/users` 时带上分页限制，以及一个页码或 URL，告诉 API 要发送哪一页。在这个例子中，假设你设置限制为 10，并从第 0 页开始。API 在响应中发送前 10 个用户。然后你再次调用 API，把页码加 1，获取接下来的 10 个结果。

</details>

配置分页设置：

* **Pagination Mode（分页模式）**：
    * **Off（关闭）**：关闭分页。
    * **Update a Parameter in Each Request（在每个请求中更新一个参数）**：当你需要为每个请求动态设置参数时使用这个选项。
    * **Response Contains Next URL（响应包含下一页 URL）**：当 API 响应中包含下一页的 URL 时使用这个选项。使用表达式来设置 **Next URL（下一页 URL）**。

有关示例设置，请参阅 [HTTP Request 节点烹饪书 | 分页（Pagination）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/code-in-n8n/cookbook/http-request-node/pagination)。

使用分页时，n8n 提供了用于处理 HTTP 节点请求和响应的内置变量：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/I3wrw8MpZtbjn2khruiw/" %}

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/91KTZVqkKv8rY72iELNl/" %}

### Proxy（代理）

如果你需要指定一个 HTTP 代理，请使用这个选项。

输入请求应该使用的 **Proxy（代理）**。它的优先级高于用 [`HTTP_PROXY`、`HTTPS_PROXY` 或 `ALL_PROXY` 环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables/deployment) 定义的全局设置。

### Timeout（超时）

使用这个选项来设置节点应该等待服务器发送响应请求头（并开始发送响应体）多长时间。超过这个值还没有收到初始响应，节点就会中止请求。

在 **Timeout（超时时间）** 中输入要等待的毫秒数。

## 仅工具选项（Tool-only options）

以下选项只有在该节点作为 [工具（tool）](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/integrate-ai/understand-ai-components/how-tools-work){ data-preview } 挂到 [AI 智能体（AI agent）](../../cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent.md) 上时才可用。

### Optimize Response（优化响应）

是否优化工具响应，以减少传递给 LLM（大语言模型）的数据量。优化响应可以降低成本，并帮助 LLM 忽略不重要的细节，往往能带来更好的结果。

优化响应时，你需要选择一个预期的响应类型，它会决定你可以配置的其他选项。支持的响应类型有：

#### JSON

当预期是 **JSON** 响应时，你可以通过以下选项配置使用 JSON 数据中的哪些部分作为响应：

* **Field Containing Data（包含数据的字段）**：这个字段用于指定 JSON 对象中包含你相关数据的特定部分。你可以留空以使用整个响应。
* **Include Fields（包含字段）**：这是你选择响应对象中包含哪些字段的方式。有三种选择：
	* **All（全部）**：包含响应对象中的所有字段。
	* **Selected（所选）**：只包含下面指定的字段。
		* **Fields（字段）**：要包含在响应中的字段列表，用逗号分隔。你可以使用点号表示法来指定嵌套字段。你也可以从「输入」面板拖拽字段到字段列表中。
	* **Exclude（排除）**：包含除下面指定字段之外的所有字段。
		* **Fields（字段）**：要从响应中排除的字段列表，用逗号分隔。你可以使用点号表示法来指定嵌套字段。你也可以从「输入」面板拖拽字段到字段列表中。

#### HTML

当预期是 **HTML** 响应时，你可以用以下选项识别 HTML 文档中与 LLM 相关的部分并优化响应：

* **Selector (CSS)（选择器）**：要包含在响应 HTML 中的特定元素或元素类型。默认使用 `body` 元素。
* **Return Only Content（只返回内容）**：是否从响应中去掉 HTML 标签和属性，只留下实际内容。这会使用更少的 token，也可能让模型更容易理解。
	* **Elements To Omit（要省略的元素）**：提取内容时要排除的 CSS 选择器列表，用逗号分隔。
* **Truncate Response（截断响应）**：是否限制响应大小以节省 token。
	* **Max Response Characters（最大响应字符数）**：HTML 响应中包含的最大字符数。默认值是 1000。

#### Text（文本）

当预期是普通 **Text（文本）** 响应时，你可以用以下选项优化结果：

* **Truncate Response（截断响应）**：是否限制响应大小以节省 token。
	* **Max Response Characters（最大响应字符数）**：HTML 响应中包含的最大字符数。默认值是 1000。

## 导入 curl 命令（Import curl command）

[curl](https://curl.se/) 是一个命令行工具和库，用于通过 URL 传输数据。

你可以使用 curl 调用 REST API。如果你要使用的服务的 API 文档提供了 curl 示例，你可以把它们从文档中复制出来，粘贴到 n8n 中，从而配置 HTTP Request 节点。

导入 curl 命令：

{% hint style="info" %}
**导入格式**

这个选项总是把参数值作为字符串（string）导入。如果你希望保留请求中数字和布尔值的类型，请把 **Using Fields Below（使用下方字段）** 切换到 **Using JSON（使用 JSON）**，并粘贴包含这些参数的 JSON 对象。
{% endhint %}

1. 从 HTTP Request 节点的 **Parameters（参数）** 选项卡中，选择 **Import cURL（导入 cURL）**。会打开 **Import cURL command（导入 cURL 命令）** 弹窗。
2. 把你的 curl 命令粘贴到文本框中。
3. 选择 **Import（导入）**。n8n 会把请求配置加载到节点字段中。这会覆盖任何现有的配置。

## 模板和示例（Templates and examples）

[浏览 n8n-nodes-base.httprequest 集成模板](https://n8n.io/integrations/http-request) 或 [搜索所有模板](https://n8n.io/workflows/)

## 常见问题（FAQ）

### 如何在不写代码的情况下调用 API？

使用 HTTP Request 节点从任何提供 REST API 的应用或服务查询数据。设置 [节点参数](#node-parameters)（方法、URL、查询参数、请求头和请求体），或者从服务的 API 文档中 [导入 curl 命令](#import-curl-command)，n8n 会自动帮你填好字段。

### 如何对 API 请求进行身份认证？

在 [Authentication（身份认证）](#authentication) 部分设置。当 n8n 支持该服务时，使用 **Predefined Credential Type（预定义凭据类型）**，因为它最容易设置。对于其他 API，请使用通用凭据（generic credentials），它支持 Basic auth、Header auth、OAuth1、OAuth2 等。请参阅 [HTTP Request 凭据（HTTP Request credentials）](../../credentials/httprequest.md)。

### 如何处理返回结果横跨多页的 API？

打开 [Pagination（分页）](#pagination) 选项。设置 **Pagination Mode（分页模式）**，让每个请求更新一个参数，或者跟随响应中的下一页 URL，这样 n8n 就会获取每一页，而不仅仅是第一页。

## 常见问题（Common issues）

对于常见问题或疑问以及建议的解决方案，请参阅 [常见问题（Common Issues）](common-issues.md)。
