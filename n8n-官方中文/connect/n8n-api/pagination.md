---
description: n8n 公开 REST API 中的分页。
contentType: howto
nodeTitle: 分页
originalFilePath: api/pagination.md
originalUrl: 'https://docs.n8n.io/api/pagination'
url: 'https://docs.n8n.io/connect/n8n-api/pagination'
layout:
  description:
    visible: false
---

# API 分页

默认每页返回 100 条结果。你可以修改页面大小限制。最大允许值为 250。

当响应包含多于一页时，它会包含一个游标（cursor），你可以用它来请求后续页面。

{% hint style="info" %}
**小白提示**：分页 = 「一次拿不完，分多次拿」。如果 n8n 里有 500 个工作流，一次请求全返回既慢又占内存，所以 n8n 每次只给你一页（默认 100 个），再给你一个「书签」（cursor，一串加密字符），下次请求把书签带上就能接着拿下一页。
{% endhint %}

例如，假设你想获取所有激活的工作流，每次 150 个。

获取第一页：

```shell
# For a self-hosted n8n instance <a href="#for-a-self-hosted-n8n-instance" id="for-a-self-hosted-n8n-instance"></a>
curl -X 'GET' \
  '<N8N_HOST>:<N8N_PORT>/<N8N_PATH>/api/v<version-number>/workflows?active=true&limit=150' \
  -H 'accept: application/json' \
  -H 'X-N8N-API-KEY: <your-api-key>'

# For n8n Cloud <a href="#for-n8n-cloud" id="for-n8n-cloud"></a>
curl -X 'GET' \
  '<your-cloud-instance>/api/v<version-number>/workflows?active=true&limit=150' \
  -H 'accept: application/json' \
  -H 'X-N8N-API-KEY: <your-api-key>'
```

{% hint style="info" %}
**小白提示**：注意 URL 末尾多了 `&limit=150`——这就是「把每页大小改成 150」的方法。
{% endhint %}

响应是 JSON 格式，包含一个 `nextCursor` 值。这是一个示例响应。

```js
{
  "data": [
    // The response contains an object for each workflow
    {
      // Workflow data
    }
  ],
  "nextCursor": "MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA"
}
```

{% hint style="info" %}
**小白提示**：`data` 数组里是这一页的工作流对象；`nextCursor` 就是「下一页的书签」。如果响应里没有 `nextCursor` 字段，说明已经拿到最后一页了，不用再请求了。
{% endhint %}

然后请求下一页：

```bash
# For a self-hosted n8n instance <a href="#for-a-self-hosted-n8n-instance" id="for-a-self-hosted-n8n-instance"></a>
curl -X 'GET' \
  '<N8N_HOST>:<N8N_PORT>/<N8N_PATH>/api/v<version-number>/workflows?active=true&limit=150&cursor=MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA' \
  -H 'accept: application/json'

# For n8n Cloud <a href="#for-n8n-cloud" id="for-n8n-cloud"></a>
curl -X 'GET' \
  '<your-cloud-instance>/api/v<version-number>/workflows?active=true&limit=150&cursor=MTIzZTQ1NjctZTg5Yi0xMmQzLWE0NTYtNDI2NjE0MTc0MDA' \
  -H 'accept: application/json'
```

{% hint style="info" %}
**小白提示**：这次请求把上一页响应里的 `nextCursor` 值原样加到了 URL 的 `&cursor=` 参数上，n8n 就知道「从书签处继续」。注意：示例中第二页的请求省略了 `X-N8N-API-KEY` 请求头（官方示例如此），但实际使用时始终携带 API 密钥通常更稳妥，以匹配你实例的认证配置。
{% endhint %}
