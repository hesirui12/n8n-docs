---
contentType: howto
nodeTitle: Get the binary data buffer
originalFilePath: code/cookbook/code-node/get-binary-data-buffer.md
originalUrl: 'https://docs.n8n.io/code/cookbook/code-node/get-binary-data-buffer'
url: >-
  https://docs.n8n.io/build/code-in-n8n/cookbook/code-node/get-the-binary-data-buffer
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话：** 工作流里处理的文件内容（二进制数据）都放在一个「缓冲区」里。如果你想改文件（比如给 CSV 加表头）、算哈希、发复杂请求，就用 `getBinaryDataBuffer()` 来读它，别再用 `items[0].binary.data.data` 这种老办法。注意：Python 模式下不支持这个函数。
{% endhint %}

# 获取二进制数据缓冲区 <a href="#get-the-binary-data-buffer" id="get-the-binary-data-buffer"></a>

二进制数据缓冲区里装着工作流处理过的所有二进制文件数据。如果你想对二进制数据做操作，就需要访问它，比如：

* 操作数据：例如给 CSV 文件加上列标题。
* 用数据做计算：例如根据它计算哈希值。
* 复杂的 HTTP 请求：例如把文件上传和其他数据格式的发送结合起来。

{% hint style="info" %}
**Python 中不可用**

使用 Python 时，不支持 `getBinaryDataBuffer()`。
{% endhint %}

你可以用 n8n 的 `getBinaryDataBuffer()` 函数访问缓冲区：

```js
/* 
* itemIndex: number. The index of the item in the input data.
* binaryPropertyName: string. The name of the binary property. 
* The default in the Read/Write File From Disk node is 'data'. 
*/
let binaryDataBufferItem = await this.helpers.getBinaryDataBuffer(itemIndex, binaryPropertyName);
```

例如：

```js
let binaryDataBufferItem = await this.helpers.getBinaryDataBuffer(0, 'data');
// Returns the data in the binary buffer for the first input item
```

你应该始终使用 `getBinaryDataBuffer()` 函数，避免使用直接访问缓冲区的老方法，比如用 `items[0].binary.data.data` 这样的表达式直接去取。
